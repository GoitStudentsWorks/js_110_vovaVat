import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.together__form');
const emailField = document.querySelector('input[name="email"');
const messageField = document.querySelector('textarea[name="message"]');
const errorMessage = document.querySelector('.error-message');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const backdrop = document.querySelector('.backdrop');

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

iziToast.settings({
  messageSize: 15,
  messageLineHeight: 24,
  position: 'topRight',
  timeout: 7000,
  closeOnClick: true,
  maxWidth: 350,
  transitionIn: 'bounceInLeft',
  displayMode: 1,
});

const onSubmit = async event => {
  event.preventDefault();

  if (!validateEmail() || messageField.value.trim() === '') {
    iziToast.warning({
      message: 'Invalid email or empty message field. Please, try again.',
      backgroundColor: '#ffd7a3',
      theme: 'light',
      messageColor: '#292929',
    });
    return;
  }

  try {
    const body = {
      email: emailField.value,
      comment: messageField.value,
    };

    const response = await axios.post(BASE_URL, body);
    console.log(response.data.title);
    const { title, message } = response.data;
    console.log(title, message);
    showModal(response.data);
  } catch (error) {
    iziToast.error({
      message:
        'An error occurred while sending your message. Please try again.',
      backgroundColor: 'rgb(239, 64, 64)',
      theme: 'dark',
      messageColor: '#fff',
    });
  }

  form.reset();
  emailField.classList.remove('valid');
};

const validateEmail = () => {
  if (emailField.validity.valid) {
    emailField.classList.add('valid');
    errorMessage.style.display = 'none';
    return true;
  } else {
    emailField.classList.remove('valid');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Invalid email, try again';
    return;
  }
};

const showModal = ({ title, message }) => {
  const modalTitle = document.querySelector('.modal__title');
  const modalText = document.querySelector('.modal__text');

  modalTitle.textContent = `${title}`;
  modalText.textContent = `${message}`;

  modal.classList.add('show');
  backdrop.classList.add('visible');
};

const closeModal = () => {
  modal.classList.remove('show');
  backdrop.classList.remove('visible');
};

form.addEventListener('submit', onSubmit);
emailField.addEventListener('input', validateEmail);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', event => {
  if (event.target === backdrop) closeModal();
});
