<<<<<<<< HEAD:.vercel/output/static/_nuxt/BcNGihrY.js
import{k as f,Z as i}from"./Bc1ekGIV.js";import{i as v}from"./CLwdy1Ud.js";function s(r){return[r.screenX,r.screenY]}function N(){let r=f([-1,-1]);return{wasMoved(l){let t=s(l);return r.value[0]===t[0]&&r.value[1]===t[1]?!1:(r.value=t,!0)},update(l){r.value=s(l)}}}function b({container:r,accept:l,walk:t,enabled:n}){i(()=>{let u=r.value;if(!u||n!==void 0&&!n.value)return;let e=v(r);if(!e)return;let a=Object.assign(c=>l(c),{acceptNode:l}),o=e.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,a,!1);for(;o.nextNode();)t(o.currentNode)})}function d(r){throw new Error("Unexpected object: "+r)}var h=(r=>(r[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r))(h||{});function w(r,l){let t=l.resolveItems();if(t.length<=0)return null;let n=l.resolveActiveIndex(),u=n??-1;switch(r.focus){case 0:{for(let e=0;e<t.length;++e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 1:{u===-1&&(u=t.length);for(let e=u-1;e>=0;--e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 2:{for(let e=u+1;e<t.length;++e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 3:{for(let e=t.length-1;e>=0;--e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 4:{for(let e=0;e<t.length;++e)if(l.resolveId(t[e],e,t)===r.id)return e;return n}case 5:return null;default:d(r)}}export{h as c,w as f,b as i,N as u};
========
import{k as f,Z as i}from"./Jfc5g3KL.js";import{i as v}from"./D-c6Xj13.js";function s(r){return[r.screenX,r.screenY]}function N(){let r=f([-1,-1]);return{wasMoved(l){let t=s(l);return r.value[0]===t[0]&&r.value[1]===t[1]?!1:(r.value=t,!0)},update(l){r.value=s(l)}}}function b({container:r,accept:l,walk:t,enabled:n}){i(()=>{let u=r.value;if(!u||n!==void 0&&!n.value)return;let e=v(r);if(!e)return;let a=Object.assign(c=>l(c),{acceptNode:l}),o=e.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,a,!1);for(;o.nextNode();)t(o.currentNode)})}function d(r){throw new Error("Unexpected object: "+r)}var h=(r=>(r[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r))(h||{});function w(r,l){let t=l.resolveItems();if(t.length<=0)return null;let n=l.resolveActiveIndex(),u=n??-1;switch(r.focus){case 0:{for(let e=0;e<t.length;++e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 1:{u===-1&&(u=t.length);for(let e=u-1;e>=0;--e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 2:{for(let e=u+1;e<t.length;++e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 3:{for(let e=t.length-1;e>=0;--e)if(!l.resolveDisabled(t[e],e,t))return e;return n}case 4:{for(let e=0;e<t.length;++e)if(l.resolveId(t[e],e,t)===r.id)return e;return n}case 5:return null;default:d(r)}}export{h as c,w as f,b as i,N as u};
>>>>>>>> dev:.vercel/output/static/_nuxt/CChVTHA8.js
