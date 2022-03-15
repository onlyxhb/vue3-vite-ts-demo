import{d as p,r as d,o as s,c as i,a as o,t as g,F as u,p as k,b as E,e as c,f as V,g as W}from"./vendor.bc13e36d.js";const h=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};h();var R="data:image/png;base64,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";var f=(l,t)=>{const r=l.__vccOpts||l;for(const[m,e]of t)r[m]=e;return r};const A=l=>(k("data-v-289ead6c"),l=l(),E(),l),Q=A(()=>o("p",null,[c(" Recommended IDE setup: "),o("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),c(" + "),o("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),Y=A(()=>o("p",null,[c("See "),o("code",null,"README.md"),c(" for more information.")],-1)),w=A(()=>o("p",null,[o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),c(" | "),o("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),P=A(()=>o("p",null,[c(" Edit "),o("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1)),G=p({props:{msg:null},setup(l){const t=d(0);return(r,m)=>(s(),i(u,null,[o("h1",null,g(l.msg),1),Q,Y,w,o("button",{type:"button",onClick:m[0]||(m[0]=e=>t.value++)},"count is: "+g(t.value),1),P],64))}});var B=f(G,[["__scopeId","data-v-289ead6c"]]);const M=o("img",{alt:"Vue logo",src:R},null,-1),S=p({setup(l){return(t,r)=>(s(),i(u,null,[M,V(B,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))}});W(S).mount("#app");
