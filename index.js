import{A as F,S as z,N as K,K as Q,i as u,a as U}from"./assets/vendor-Ddw0FPuB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const X=document.querySelector(".menu-btm"),h=document.querySelector(".mob-menu"),Z=document.querySelector(".mob-menu-close"),M=document.querySelectorAll(".link a"),T=document.querySelector(".page-header"),N=document.querySelector("main"),A=document.querySelector("footer");X.addEventListener("click",Y);function Y(){h.classList.add("active"),T.classList.add("hidden"),N.classList.add("hidden"),A.classList.add("hidden"),document.body.classList.add("no-scroll")}Z.addEventListener("click",D);M.forEach(e=>e.addEventListener("click",D));function D(){h.classList.remove("active"),T.classList.remove("hidden"),N.classList.remove("hidden"),A.classList.remove("hidden"),document.body.classList.remove("no-scroll")}M.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href").substring(1);ee(o),h.classList.remove("active"),document.body.classList.remove("no-scroll")})});function ee(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}const c=document.querySelector(".theme-toggle"),l=document.body;function te(e){localStorage.setItem("theme",e)}function oe(){return localStorage.getItem("theme")}function se(e){e==="dark"?(l.classList.add("dark"),c.classList.add("theme-toggle-dark")):(l.classList.remove("dark"),c.classList.remove("theme-toggle-dark"))}const w=oe();w&&se(w);document.querySelector("link[rel='icon']");c.addEventListener("click",()=>{l.classList.toggle("dark"),c.classList.toggle("theme-toggle-dark");const e=l.classList.contains("dark")?"dark":"light";te(e)});const b="/js_110_vovaVat/assets/icons-CV_9Shnm.svg",ne=[{heading:"What programming languages are most often used in your project?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"What are the deadlines for the project?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What payment methods do you accept?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{heading:"How can I contact you?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{heading:"Do you provide advice or support?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{heading:"What does the process of developing a software product look like from idea to implementation?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function re(e){const{heading:t,content:o}=e;return`
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-trigger-button">
          <p class="accordion-header-title"> ${t} </p>

          <div class="accordion-trigger-button-icon">
            <svg class="down-icon" width="32" height="32" aria-label="icon-Dropdown icon">
              <use href="${b}#icon-btn-down"></use>
            </svg>
            <svg class="up-icon" width="32" height="32" aria-label="icon-Dropup icon">
              <use href="${b}#icon-btn-up"></use>
            </svg>
          </div>
        </button>
      </div>
      <div class="accordion-panel">
        <p class="accordion-content">${o}</p>
      </div>
    </div>`}function ae(e,t){const o=t.map(re);e.innerHTML=o.join("")}function ie(){const e=document.getElementById("faq-accordion");ae(e,ne),new F(e,{duration:400,elementClass:"accordion-item",triggerClass:"accordion-trigger-button",panelClass:"accordion-panel",activeClass:"is-open"}).open(0)}ie();const P="/js_110_vovaVat/assets/Project1-CK0iQZ1g.jpg",ce="/js_110_vovaVat/assets/Project1-2x-D3Rf720P.jpg",S="/js_110_vovaVat/assets/Project2-DuyO8i-V.jpg",le="/js_110_vovaVat/assets/Project2-2x-BXJlqXPO.jpg",k="/js_110_vovaVat/assets/Project3-ND6kvfgI.jpg",de="/js_110_vovaVat/assets/project3-2x-BARaOHGB.jpg",_="/js_110_vovaVat/assets/Project4-C5ZkvM53.jpg",ue="/js_110_vovaVat/assets/Project4-2x-p5OSP1JX.jpg",x="/js_110_vovaVat/assets/Project5-CqFWldnh.jpg",me="/js_110_vovaVat/assets/Project5-2x-Bc2TV2ZJ.jpg",L="/js_110_vovaVat/assets/Project6-BwnpLxUl.jpg",ge="/js_110_vovaVat/assets/Project6-2x-HYgovdUO.jpg",E="/js_110_vovaVat/assets/Project7-Cg1HAjMu.jpg",ve="/js_110_vovaVat/assets/Project7-2x-C_VS2DxX.jpg",V="/js_110_vovaVat/assets/Project8-CApyLe96.jpg",pe="/js_110_vovaVat/assets/Project8-2x-DCEGhRS3.jpg",q="/js_110_vovaVat/assets/Project9-B0cQa0Dd.jpg",he="/js_110_vovaVat/assets/Project9-2x-B8POepiw.jpg",$="/js_110_vovaVat/assets/Project10-DG1hmitL.jpg",fe="/js_110_vovaVat/assets/Project10-2x-DPN4heD7.jpg",ye="/js_110_vovaVat/assets/icons-CV_9Shnm.svg#icon-Vector-above-right-24",m=[{img:P,skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${P} 1x, ${ce}`},{img:S,skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice ",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${S} 1x, ${le}`},{img:k,skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${k} 1x, ${de}`},{img:_,skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${_} 1x, ${ue}`},{img:x,skills:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${x} 1x, ${me}`},{img:L,skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${L} 1x, ${ge}`},{img:E,skills:"React, JavaScript, Node JS, Git",title:"green harvest online store",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${E} 1x, ${ve}`},{img:V,skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice ",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${V} 1x, ${pe}`},{img:q,skills:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${q} 1x, ${he}`},{img:$,skills:"React, JavaScript, Node JS, Git",title:"English excellence webservice ",link:"https://github.com/vovaVat/Portfolio-2.0",srcset:`${$} 1x, ${fe}`}];let R=0,g=3;const C=document.querySelector(".load-more-btn"),je=document.querySelector(".projects-list");C.addEventListener("click",e=>(R+=3,g+=3,g>=m.length&&(C.style.display="none"),O(m)));window.addEventListener("load",e=>O(m));function O(e){const t=e.slice(R,g).map(({img:o,skills:r,title:n,link:s,srcset:i})=>`
    <li class="projects-list-card">
                <img srcset="${i} 2x" src="${o}" alt="${n}" width="320" class="my-project-picture">
                <div class="discription-container">
                    <div class="wrapper">
                        <p class="skills-text">${r}</p>
                        <h3 class="project-title">${n}</h3>
                    </div>
                    <a href="${s}" class="my-projects-link" target="_blank" rel="noopener noreferrer">VISIT
                    <svg class="icon icon-Vector-above-right-24">
                    <use href=${ye}></use>
                    </svg>
                  </a>
                </div>
            </li>
    `).join("");je.insertAdjacentHTML("beforeend",t)}const a=new z(".swiper-container",{modules:[K,Q],initialSlide:0,slidesPerView:1,spaceBetween:10,loop:!1,speed:400,autoplay:{delay:3e3},breakpoints:{768:{slidesPerView:1,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:30}},navigation:{nextEl:".swiper-button-next-new",prevEl:".swiper-button-prev-new"},keyboard:{enabled:!0,onlyInViewport:!1}});a.on("update",function(){const e=document.querySelector(".swiper-button-prev-new"),t=e.querySelector(".icon-left");t.style.stroke="var(--var-gray-reviews)",e.style.border="1px solid var(--var-more-light-gray-reviews)";const r=document.querySelector(".swiper-button-next-new").querySelector(".icon-right");r.style.stroke="var(--var-text)"});a.on("slideChange",function(){const e=document.querySelector(".swiper-button-next-new"),t=e.querySelector(".icon-right"),o=document.querySelector(".swiper-button-prev-new"),r=o.querySelector(".icon-left");a.isEnd?(t.style.stroke="var(--var-gray-reviews)",e.style.border="1px solid var(--var-more-light-gray-reviews)"):a.isBeginning?(r.style.stroke="var(--var-gray-reviews)",o.style.border="1px solid var(--var-more-light-gray-reviews)"):(t.style.stroke="var(--var-text)",r.style.stroke="var(--var-text)",e.style.border="1px solid var(--var-light-gray-reviews)",o.style.border="1px solid var(--var-light-gray-reviews)")});document.addEventListener("keydown",function(e){if(e.key==="Tab"){const t=document.activeElement;document.querySelector(".swiper-buttons").contains(t)&&(t.classList.contains("swiper-button-next-new")?a.slideNext():t.classList.contains("swiper-button-prev-new")&&a.slidePrev(),e.preventDefault())}});fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>e.json()).then(e=>{const t=document.querySelector(".swiper-wrapper");e.forEach(o=>{const r=document.createElement("li");r.className="swiper-slide ",r.innerHTML=`
      <div class="review">${o.review}</div>
      <div class="review-img-name ">
        <div> <img src="${o.avatar_url}" alt="${o.author}" width="40px" height="40px" class="review-img "> </div>
        <div class="review-name ">${o.author}</div>
      </div>
      `,t.appendChild(r)}),a.update()}).catch(e=>{const t=document.querySelector(".swiper-wrapper"),o=document.createElement("div");o.className="swiper-slide",o.innerHTML="<p>Not found</p>",t.appendChild(o),a.update()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".animate-on-scroll"),t=(s,i=1)=>s.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)/i,o=s=>{s.classList.add("visible")},r=s=>{s.classList.remove("visible")},n=()=>{e.forEach(s=>{t(s,1.25)?o(s):r(s)})};window.addEventListener("scroll",()=>{n()}),n()});const f=document.querySelector(".together__form"),y=document.querySelector('input[name="email"'),I=document.querySelector('textarea[name="message"]'),d=document.querySelector(".error-message"),v=document.querySelector(".modal"),we=document.querySelector(".modal__close"),G=document.querySelector(".backdrop"),p=f.querySelector(".icon-success-filled"),be="https://portfolio-js.b.goit.study/api/requests";u.settings({messageSize:15,messageLineHeight:24,position:"topRight",timeout:7e3,closeOnClick:!0,maxWidth:350,transitionIn:"bounceInLeft",displayMode:1});const B={warning:{message:"Invalid email or empty message field. Please, try again.",backgroundColor:"#ffd7a3",theme:"light",messageColor:"#292929"},error:{message:"An error occurred while sending your message. Please try again.",backgroundColor:"rgb(239, 64, 64)",theme:"dark",messageColor:"#fff"}},Pe=async e=>{if(e.preventDefault(),!H()||I.value.trim()===""){u.warning(B.warning);return}try{const t={email:y.value,comment:I.value},o=await U.post(be,t);Se(o.data)}catch{u.error(B.error)}f.reset(),p.classList.remove("valid")},H=()=>{if(y.validity.valid)return p.classList.add("valid"),d.style.display="none",!0;p.classList.remove("valid"),d.style.display="block",d.textContent="Invalid email, try again"},W=e=>{v.classList.toggle("show",e),G.classList.toggle("visible",e),document.body.style.overflow=e?"hidden":"",e?window.addEventListener("keydown",J):window.removeEventListener("keydown",J)},Se=({title:e,message:t})=>{v.querySelector(".modal__title").textContent=e,v.querySelector(".modal__text").textContent=t,W(!0)},j=()=>{W(!1)},J=e=>{e.key==="Escape"&&j()};f.addEventListener("submit",Pe);y.addEventListener("input",H);we.addEventListener("click",j);window.addEventListener("click",e=>{e.target===G&&j()});
//# sourceMappingURL=index.js.map
