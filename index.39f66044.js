var t=document.querySelector(".gallery__list"),e=document.querySelector("#largeImg");t.addEventListener("click",function(t){t.preventDefault();var r=t.target.closest(".list-item__link");r&&r.getAttribute("href")&&(e.src="http://localhost:3001".concat(r.getAttribute("href")))});
//# sourceMappingURL=index.39f66044.js.map
