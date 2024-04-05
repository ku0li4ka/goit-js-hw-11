import{S as c,i as n}from"./assets/vendor-beb23274.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function u(r){return fetch(`https://pixabay.com/api/?key=42977219-0f6c9f9217f976d8651793c3a&q=${r}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{throw iziToast.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"}),t})}function d(r,t,s){const l=r.map(e=>`<div class="blockForAllElements">
          <li>
          <a href=${e.largeImageURL} download="false">
          <img src=${e.webformatURL} alt = "${e.tags}" class = "imgOfUser">
          </a>
          </li>
          <div class = "divForDescription"> 
          <ul class="blockOfInfo"> 
            <li class="title">Likes</li>
            <li class="info">${e.likes}</li>
          </ul>
          <ul class="block">
            <li class="title">Views</li>
            <li class="info">${e.views}</li>
          </ul>
          <ul class="block">
            <li class="title">Comments</li>
            <li class="info">${e.comments}</li>
          </ul>
          <ul class="block">
            <li class="title">Downloads</li>
            <li class="info">${e.downloads}</li>
          </ul>
          </div>
        </div>`).join("");t.insertAdjacentHTML("beforeend",l),s.refresh()}function f(r){const t=document.createElement("span");r.appendChild(t),t.classList.add("loader")}function p(){document.querySelector(".loader").remove()}const h=document.querySelector(".searchInput"),m=document.querySelector(".searchButton"),a=document.querySelector(".photoGallery"),y=document.querySelector(".loaderContainer"),g=new c(".gallery a",{captionDelay:250,captionsData:"alt"});m.addEventListener("click",r=>{r.preventDefault(),a.innerHTML="",f(y);const t=h.value.trim();t?u(t).then(s=>{s.length===0?n.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):d(s,a,g)}).catch(s=>{console.error(s)}).finally(()=>p()):n.show({color:"red",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter"})});
//# sourceMappingURL=commonHelpers.js.map
