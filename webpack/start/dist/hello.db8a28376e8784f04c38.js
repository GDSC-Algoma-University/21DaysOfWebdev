(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t="hello-btn",(e="buttonCssClass")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}var t,r;return t=n,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Say hello!",e.classList.add(this.buttonCssClass);var n=document.querySelector("body");e.addEventListener("click",(function(e){var t=document.createElement("p");t.innerHTML="Hello, world!",t.classList.add("hello-paragraph"),n.appendChild(t)})),n.appendChild(e)}}])&&e(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,(r=[{key:"render",value:function(e){var n=document.createElement("h1"),t=document.querySelector("body");n.innerHTML='Learn webpack 5. This is "'.concat(e,'" page'),t.appendChild(n)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}())).render("hello"),(new n).render(),console.log("Production mode")})();