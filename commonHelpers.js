import{S as a,i}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c=document.querySelector(".photoGallery"),u=document.querySelector(".loaderContainer"),d=new a(".gallery a",{captionDelay:250,captionsData:"alt"});function f(l){const o=l.map(e=>(console.log(e),`<div class="blockForAllElements">
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
        </div>`)).join("");c.insertAdjacentHTML("beforeend",o),d.refresh()}function p(){const l=document.createElement("span");u.appendChild(l),l.classList.add("loader")}function m(){document.querySelector(".loader").remove()}const h=document.querySelector(".searchInput"),y=document.querySelector(".searchButton");y.addEventListener("click",l=>{l.preventDefault(),c.innerHTML="",p(),setTimeout(()=>{const o=h.value.trim();o?g(o).then(e=>{e.length===0?i.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):f(e)}).catch(e=>console.log(e)).finally(()=>m()):i.show({color:"red",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter"})},2e3)});function g(l){return fetch(`https://pixabay.com/api/?key=42977219-0f6c9f9217f976d8651793c3a&q=${l}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>o.hits)}
//# sourceMappingURL=commonHelpers.js.map
