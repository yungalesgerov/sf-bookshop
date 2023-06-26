(()=>{var t={204:()=>{function t(t,e,o,n,a,s,i){const c=document.createElement("div");c.classList.add("main-content__book-card");const r=document.createElement("img");r.classList.add("main-content__book-cover"),0==e?r.setAttribute("src","/img/example-cover.png"):r.setAttribute("src",e),r.setAttribute("alt","book cover");const l=document.createElement("div");l.classList.add("main-content__book-info");const u=document.createElement("p");u.classList.add("main-content__book-author"),u.textContent=t;const m=document.createElement("p");m.classList.add("main-content__book-name"),m.textContent=o;const d=document.createElement("div");if(null!=n){d.classList.add("main-content__book-rating");for(let t=0;t<5;t++){let e=Math.floor(n),o=document.createElement("span");o.classList.add("main-content__book-rating-star"),o.textContent="★",e-1>=t&&o.classList.add("main-content__book-rating-star_active"),d.append(o)}const t=document.createElement("span");t.classList.add("main-content__book-reviews"),t.textContent=`${a} review`,d.append(t)}const g=document.createElement("p");g.classList.add("main-content__book-description"),g.textContent=s;const b=document.createElement("p");b.classList.add("main-content__book-price"),b.textContent=i;const h=document.createElement("button");h.classList.add("button","button_buy-button","button_buy-button-active"),h.textContent="buy now",l.append(u,m,d,g,b,h),c.append(r,l),document.querySelector(".main-content__book-catalog").append(c)}const e=["subject:Architecture","subject:Art","subject:Biography&Autobiography","subject:Business","subject:Crafts&Hobbies","subject:Drama","subject:Fiction","subject:Cooking","subject:Health&Fitness","subject:History","subject:Humor","subject:Poetry","subject:Psychology","subject:Science","subject:Technology","subject:Travel"],o="AIzaSyDQNaxmJEUQ2_ySf9hL41JpK439DoaBxwY",n=document.querySelector(".main-content__book-catalog"),a=document.querySelectorAll(".main-content__navigation-list-item"),s=document.querySelector(".button_load-more-button"),i=document.querySelector(".header__shoping-cart-quantity"),c=document.querySelector(".header__shoping-cart-quantity-text");let r=[];null!=JSON.parse(localStorage.getItem("cashedCart"))&&(r=JSON.parse(localStorage.getItem("cashedCart")),c.innerText=r.length,i.classList.toggle("header__shoping-cart-quantity_disabled"));let l,u,m=[],d=[];function g(t){m=[],m=document.querySelectorAll(".button_buy-button");for(let e=t;e<m.length;e++)m[e].addEventListener("click",(()=>{var t;m[t=e].classList.contains("button_buy-button-active")?(m[t].classList.toggle("button_buy-button-active"),m[t].innerText="in the cart",r.push(d[t]),localStorage.setItem("cashedCart",JSON.stringify(r)),console.log(r),1==r.length&&i.classList.toggle("header__shoping-cart-quantity_disabled"),c.innerText=r.length):(m[t].classList.toggle("button_buy-button-active"),m[t].innerText="buy now",r=r.filter((e=>JSON.stringify(e)!==JSON.stringify(d[t]))),localStorage.setItem("cashedCart",JSON.stringify(r)),console.log(r),0==r.length&&i.classList.toggle("header__shoping-cart-quantity_disabled"),c.innerText=r.length)}))}async function b(t,e){let n=[];return await fetch(`https://www.googleapis.com/books/v1/volumes?q="${t}"&key=${o}&printType=books&startIndex=${e}&maxResults=6&langRestrict=en`).then((t=>t.json())).then((t=>{let e={};for(let o=0;o<6;o++){if(e={},null==t.items[o].volumeInfo.authors)e.author="no author";else if(t.items[o].volumeInfo.authors.length>1){let n=t.items[o].volumeInfo.authors.join(", ");e.author=n}else e.author=t.items[o].volumeInfo.authors[0];null==t.items[o].volumeInfo.imageLinks?e.cover=!1:e.cover=t.items[o].volumeInfo.imageLinks.thumbnail,e.title=t.items[o].volumeInfo.title,e.rating=t.items[o].volumeInfo.averageRating,null==t.items[o].volumeInfo.ratingsCount?e.reviews="No":e.reviews=t.items[o].volumeInfo.ratingsCount,e.description=t.items[o].volumeInfo.description,"NOT_FOR_SALE"==t.items[o].saleInfo.saleability?e.price="":"FREE"==t.items[o].saleInfo.saleability?e.price="free":e.price=`${t.items[o].saleInfo.retailPrice.amount} ₽`,n.push(e)}})).catch((t=>console.log("error",t))),n}async function h(e,o){u=0,l=o,n.replaceChildren(),d=[];let s=await b(e,u);document.querySelector(".main-content__navigation-list-item-active").classList.toggle("main-content__navigation-list-item-active"),a[o].classList.toggle("main-content__navigation-list-item-active");for(let e=0;e<6;e++)d.push(s[e]),t(s[e].author,s[e].cover,s[e].title,s[e].rating,s[e].reviews,s[e].description,s[e].price);g(u),p()}function p(){for(let t=0;t<d.length;t++)for(let e=0;e<r.length;e++)JSON.stringify(d[t])===JSON.stringify(r[e])&&(m[t].classList.toggle("button_buy-button-active"),m[t].innerText="in the cart")}for(let t=0;t<a.length;t++)a[t].addEventListener("click",(()=>{h(e[t],t)}));s.addEventListener("click",(()=>{!async function(){u+=6;let o=await b(e[l],u);for(let e=0;e<6;e++)d.push(o[e]),t(o[e].author,o[e].cover,o[e].title,o[e].rating,o[e].reviews,o[e].description,o[e].price);g(u),p()}(),s.style.marginTop+="1210px"})),h(e[0],0),p()},158:()=>{document.querySelector(".header-container").offsetTop},997:()=>{let t=document.querySelector(".slider-wrapper"),e=(document.querySelector(".svg-dot-1"),document.querySelector(".svg-dot-2"),document.querySelector(".svg-dot-3"),document.querySelectorAll(".slider-dots-item"));const o=[{img:"http://localhost:3000/6f345790f612312eca2e.jpg"},{img:"http://localhost:3000/037f848a9334184fbe61.jpg"},{img:"http://localhost:3000/cc7860b31a3ba793be84.jpg"}];let n=0;const a=e=>{t.style.backgroundImage=`url(${o[e].img})`};function s(t){e.forEach((t=>t.classList.remove("dot-active"))),e[t].classList.add("dot-active")}a(n),e.forEach(((t,e)=>{t.addEventListener("click",(()=>{n=e,a(n),s(n)}))})),setInterval((()=>{n==o.length-1?n=0:n++,a(n),s(n)}),5e3)}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(158),o(997),o(204)})()})();