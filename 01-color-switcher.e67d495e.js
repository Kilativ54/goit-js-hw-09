!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,timerChange=setInterval((function(){n.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(timerChange),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.e67d495e.js.map
