/* empty css                      */import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),p="56707604-ad589896bfb00ef829d73b529",h="https://pixabay.com/api/";let g=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",i=>{i.preventDefault();const o=i.currentTarget.elements.searchQuery.value.trim();if(!o){l.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}u.innerHTML="",n&&n.classList.remove("is-hidden");const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`${h}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),g.refresh()}).catch(t=>{console.error(t),l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{n&&n.classList.add("is-hidden"),c.reset()})});function y(i){const o=i.map(({webformatURL:s,largeImageURL:t,tags:e,likes:r,views:a,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${r}</p>
            <p class="info-item"><b>Views</b> ${a}</p>
            <p class="info-item"><b>Comments</b> ${f}</p>
            <p class="info-item"><b>Downloads</b> ${m}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=index.js.map
