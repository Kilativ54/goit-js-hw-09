const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((()=>{d.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0,e.disabled=!1}));let a=null;e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.86ee9f9b.js.map