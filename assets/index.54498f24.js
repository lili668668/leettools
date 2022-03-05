var h=Object.defineProperty;var B=(F,n,u)=>n in F?h(F,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):F[n]=u;var l=(F,n,u)=>(B(F,typeof n!="symbol"?n+"":n,u),u);import{j as m,r as p,R as f,a as b}from"./vendor.4fd375f1.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};y();const N=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];class x{constructor(){l(this,"name","Base 64 Encode")}exec(n){let u=n.length%3,r="";for(let t=0;t<n.length;t++){const o=n.charCodeAt(t);r+=this.toBits(o)}let e="";for(let t=0;t<r.length;t+=6){let o=r.slice(t,t+6);o+="0".repeat(6-o.length),e+=this.toCode(o)}return u!==0&&(e+="=".repeat(3-u)),e}toBits(n){let u="",r=n;do{const e=r%2;u=`${e}`+u,r=(r-e)/2}while(r!==0);return u="0".repeat(8-u.length)+u,u}toCode(n){let u=0;for(let r=0;r<n.length;r++){const e=n.length-r-1;u+=Number(n[r])*Math.pow(2,e)}return N[u]}}class g{constructor(){l(this,"name","\u52D5\u614B\u9023\u7D50(Quick Find) connect: O(n^2), check: O(1)");l(this,"inputPlaceholder",`\u7B2C\u4E00\u884C\u662F\u6700\u5927\u6578
\u524D\u5E7E\u7D44\u662F union
\u6700\u5F8C\u4E00\u7D44\u662F\u5224\u65B7\u662F\u5426\u76F8\u9023
\u6578\u7D44\u662F 0~N \u7684\u81EA\u7136\u6578
ex:
9
4,3
3,8
6,5
9,4
2,1
0,7
\u610F\u601D\u70BA\u7E3D\u5171\u6709\u5341\u500B\u6578\u5B57\uFF080~9\uFF09\uFF0C4 \u8DDF 3 \u76F8\u9023\uFF0C3 \u8DDF 8 \u76F8\u9023\uFF0C6 \u8DDF 5 \u76F8\u9023\uFF0C9 \u8DDF 4 \u76F8\u9023\uFF0C2 \u8DDF 1 \u76F8\u9023\uFF0C\u5224\u65B7 0 \u8DDF 7 \u6709\u6C92\u6709\u76F8\u9023\uFF0C\u56DE\u50B3 true or false
\u4EE5\u4E0A\u8FF0\u4F8B\u5B50\uFF0C\u56DE\u50B3 false
`)}exec(n){const u=n.split(`
`),r=Number(u[0])+1,e=u.pop(),t=u.slice(1);let o=new Array(r).fill(1).map((c,a)=>a);t.forEach(c=>{const[a,E]=c.split(",");o=o.map(C=>C===o[Number(E)]?o[Number(a)]:C)});const[i,D]=e.split(",");return`${o[Number(i)]===o[Number(D)]}`}}class A{constructor(){l(this,"name","\u52D5\u614B\u9023\u7D50(\u81EA\u5DF1\u60F3\u7684) connect: O(n), check: O(n)");l(this,"inputPlaceholder",`\u7B2C\u4E00\u884C\u662F\u6700\u5927\u6578
\u524D\u5E7E\u7D44\u662F union
\u6700\u5F8C\u4E00\u7D44\u662F\u5224\u65B7\u662F\u5426\u76F8\u9023
\u6578\u7D44\u662F 0~N \u7684\u81EA\u7136\u6578
ex:
9
4,3
3,8
6,5
9,4
2,1
0,7
\u610F\u601D\u70BA\u7E3D\u5171\u6709\u5341\u500B\u6578\u5B57\uFF080~9\uFF09\uFF0C4 \u8DDF 3 \u76F8\u9023\uFF0C3 \u8DDF 8 \u76F8\u9023\uFF0C6 \u8DDF 5 \u76F8\u9023\uFF0C9 \u8DDF 4 \u76F8\u9023\uFF0C2 \u8DDF 1 \u76F8\u9023\uFF0C\u5224\u65B7 0 \u8DDF 7 \u6709\u6C92\u6709\u76F8\u9023\uFF0C\u56DE\u50B3 true or false
\u4EE5\u4E0A\u8FF0\u4F8B\u5B50\uFF0C\u56DE\u50B3 false
`)}exec(n){const u=n.split(`
`);Number(u[0])+1;const r=u.pop(),e=u.slice(1),[t,o]=r.split(","),i=[];return e.forEach(D=>{const[c,a]=D.split(",");(Number(t)===Number(c)||Number(o)===Number(c)||Number(t)===Number(a)||Number(o)===Number(a))&&(i.push(Number(c)),i.push(Number(a)))}),`${i.includes(Number(t))&&i.includes(Number(o))}`}}class v{constructor(){l(this,"name","\u52D5\u614B\u9023\u7D50(Quick Union) connect: , check: ");l(this,"inputPlaceholder",`\u7B2C\u4E00\u884C\u662F\u6700\u5927\u6578
\u524D\u5E7E\u7D44\u662F union
\u6700\u5F8C\u4E00\u7D44\u662F\u5224\u65B7\u662F\u5426\u76F8\u9023
\u6578\u7D44\u662F 0~N \u7684\u81EA\u7136\u6578
ex:
9
4,3
3,8
6,5
9,4
2,1
0,7
\u610F\u601D\u70BA\u7E3D\u5171\u6709\u5341\u500B\u6578\u5B57\uFF080~9\uFF09\uFF0C4 \u8DDF 3 \u76F8\u9023\uFF0C3 \u8DDF 8 \u76F8\u9023\uFF0C6 \u8DDF 5 \u76F8\u9023\uFF0C9 \u8DDF 4 \u76F8\u9023\uFF0C2 \u8DDF 1 \u76F8\u9023\uFF0C\u5224\u65B7 0 \u8DDF 7 \u6709\u6C92\u6709\u76F8\u9023\uFF0C\u56DE\u50B3 true or false
\u4EE5\u4E0A\u8FF0\u4F8B\u5B50\uFF0C\u56DE\u50B3 false
`)}exec(n){return"\u672A\u5BE6\u4F5C"}}const d={base64Encode:new x,dynamicConnectivity1:new g,dynamicConnectivity2:new A,dynamicConnectivity3:new v},s=m.exports.jsx,k=m.exports.jsxs;function O(){var i,D;const[F,n]=p.exports.useState(""),[u,r]=p.exports.useState(""),[e,t]=p.exports.useState(""),o=[{key:"",name:"\u8ACB\u9078\u64C7"}].concat(Object.keys(d).map(c=>({key:c,name:d[c].name})));return k("div",{children:[s("p",{children:"\u9019\u662F\u4E00\u500B\u628A\u5BEB\u904E\u7684\u6F14\u7B97\u6CD5\u984C\u76EE\uFF0C\u653E\u904E\u4F86\u7684\u5C0F\u5DE5\u5177\u7DB2\u7AD9"}),s("div",{children:s("select",{value:F,onChange:c=>n(c.target.value),children:o.map(c=>s("option",{value:c.key,children:c.name},c.key))})}),s("div",{children:s("textarea",{placeholder:(D=(i=d[F])==null?void 0:i.inputPlaceholder)!=null?D:"input",value:u,onChange:c=>r(c.target.value)})}),s("button",{disabled:F==="",onClick:()=>{try{const c=d[F].exec(u);t(c)}catch(c){t(`${c}`)}},children:"\u57F7\u884C"}),s("div",{children:s("textarea",{placeholder:"output",value:e,readOnly:!0})})]})}f.render(s(b.StrictMode,{children:s(O,{})}),document.getElementById("root"));
