if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>i(e,c),l={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"22e36bc689bd6c1450ea1eaf6cb5bc63"},{url:"install.bundle.js",revision:"5c9f6f8546b5cd294d963e7b879a0455"},{url:"main.bundle.js",revision:"4726236a8d3c958bc050ad8cbf5cc80f"},{url:"src-sw.js",revision:"22b587edda22ac69a3318467e92da87c"}],{})}));
