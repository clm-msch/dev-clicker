(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function wo(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function bo(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Ee(s)?Hf(s):bo(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(Ee(e))return e;if(le(e))return e}}const Bf=/;(?![^(]*\))/g,jf=/:([^]+)/,$f=/\/\*.*?\*\//gs;function Hf(e){const t={};return e.replace($f,"").split(Bf).forEach(n=>{if(n){const s=n.split(jf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Io(e){let t="";if(Ee(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const s=Io(e[n]);s&&(t+=s+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wf=wo(Vf);function El(e){return!!e||e===""}const ur=e=>Ee(e)?e:e==null?"":H(e)||le(e)&&(e.toString===Tl||!V(e.toString))?JSON.stringify(e,wl,2):String(e),wl=(e,t)=>t&&t.__v_isRef?wl(e,t.value):Tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:bl(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!H(t)&&!Al(t)?String(t):t,ae={},In=[],et=()=>{},qf=()=>!1,Kf=/^on[^a-z]/,xi=e=>Kf.test(e),To=e=>e.startsWith("onUpdate:"),De=Object.assign,Ao=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zf=Object.prototype.hasOwnProperty,Y=(e,t)=>zf.call(e,t),H=Array.isArray,Tn=e=>Ni(e)==="[object Map]",bl=e=>Ni(e)==="[object Set]",V=e=>typeof e=="function",Ee=e=>typeof e=="string",Ro=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Il=e=>le(e)&&V(e.then)&&V(e.catch),Tl=Object.prototype.toString,Ni=e=>Tl.call(e),Gf=e=>Ni(e).slice(8,-1),Al=e=>Ni(e)==="[object Object]",So=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ti=wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Jf=/-(\w)/g,ft=Mi(e=>e.replace(Jf,(t,n)=>n?n.toUpperCase():"")),Xf=/\B([A-Z])/g,pn=Mi(e=>e.replace(Xf,"-$1").toLowerCase()),Li=Mi(e=>e.charAt(0).toUpperCase()+e.slice(1)),hr=Mi(e=>e?`on${Li(e)}`:""),fs=(e,t)=>!Object.is(e,t),ni=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Lr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ua;const Yf=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class Rl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Sl(e){return new Rl(e)}function Qf(e,t=je){t&&t.active&&t.effects.push(e)}function Cl(){return je}function Zf(e){je&&je.cleanups.push(e)}const Co=e=>{const t=new Set(e);return t.w=0,t.n=0,t},kl=e=>(e.w&Ht)>0,Pl=e=>(e.n&Ht)>0,ed=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ht},td=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];kl(i)&&!Pl(i)?i.delete(e):t[n++]=i,i.w&=~Ht,i.n&=~Ht}t.length=n}},fi=new WeakMap;let Qn=0,Ht=1;const Ur=30;let Qe;const rn=Symbol(""),Fr=Symbol("");class ko{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qf(this,s)}run(){if(!this.active)return this.fn();let t=Qe,n=Lt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Qe,Qe=this,Lt=!0,Ht=1<<++Qn,Qn<=Ur?ed(this):Fa(this),this.fn()}finally{Qn<=Ur&&td(this),Ht=1<<--Qn,Qe=this.parent,Lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Lt=!0;const Ol=[];function Un(){Ol.push(Lt),Lt=!1}function Fn(){const e=Ol.pop();Lt=e===void 0?!0:e}function Ue(e,t,n){if(Lt&&Qe){let s=fi.get(e);s||fi.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=Co()),Dl(i)}}function Dl(e,t){let n=!1;Qn<=Ur?Pl(e)||(e.n|=Ht,n=!kl(e)):n=!e.has(Qe),n&&(e.add(Qe),Qe.deps.push(e))}function yt(e,t,n,s,i,r){const o=fi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&H(e)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":H(e)?So(n)&&a.push(o.get("length")):(a.push(o.get(rn)),Tn(e)&&a.push(o.get(Fr)));break;case"delete":H(e)||(a.push(o.get(rn)),Tn(e)&&a.push(o.get(Fr)));break;case"set":Tn(e)&&a.push(o.get(rn));break}if(a.length===1)a[0]&&Br(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Br(Co(c))}}function Br(e,t){const n=H(e)?e:[...e];for(const s of n)s.computed&&Ba(s);for(const s of n)s.computed||Ba(s)}function Ba(e,t){(e!==Qe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function nd(e,t){var n;return(n=fi.get(e))===null||n===void 0?void 0:n.get(t)}const sd=wo("__proto__,__v_isRef,__isVue"),xl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ro)),id=Po(),rd=Po(!1,!0),od=Po(!0),ja=ad();function ad(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Q(this);for(let r=0,o=this.length;r<o;r++)Ue(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Un();const s=Q(this)[t].apply(this,n);return Fn(),s}}),e}function cd(e){const t=Q(this);return Ue(t,"has",e),t.hasOwnProperty(e)}function Po(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?Td:Fl:t?Ul:Ll).get(s))return s;const o=H(s);if(!e){if(o&&Y(ja,i))return Reflect.get(ja,i,r);if(i==="hasOwnProperty")return cd}const a=Reflect.get(s,i,r);return(Ro(i)?xl.has(i):sd(i))||(e||Ue(s,"get",i),t)?a:ge(a)?o&&So(i)?a:a.value:le(a)?e?Bl(a):Bn(a):a}}const ld=Nl(),ud=Nl(!0);function Nl(e=!1){return function(n,s,i,r){let o=n[s];if(kn(o)&&ge(o)&&!ge(i))return!1;if(!e&&(!di(i)&&!kn(i)&&(o=Q(o),i=Q(i)),!H(n)&&ge(o)&&!ge(i)))return o.value=i,!0;const a=H(n)&&So(s)?Number(s)<n.length:Y(n,s),c=Reflect.set(n,s,i,r);return n===Q(r)&&(a?fs(i,o)&&yt(n,"set",s,i):yt(n,"add",s,i)),c}}function hd(e,t){const n=Y(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&yt(e,"delete",t,void 0),s}function fd(e,t){const n=Reflect.has(e,t);return(!Ro(t)||!xl.has(t))&&Ue(e,"has",t),n}function dd(e){return Ue(e,"iterate",H(e)?"length":rn),Reflect.ownKeys(e)}const Ml={get:id,set:ld,deleteProperty:hd,has:fd,ownKeys:dd},pd={get:od,set(e,t){return!0},deleteProperty(e,t){return!0}},gd=De({},Ml,{get:rd,set:ud}),Oo=e=>e,Ui=e=>Reflect.getPrototypeOf(e);function qs(e,t,n=!1,s=!1){e=e.__v_raw;const i=Q(e),r=Q(t);n||(t!==r&&Ue(i,"get",t),Ue(i,"get",r));const{has:o}=Ui(i),a=s?Oo:n?No:ds;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function Ks(e,t=!1){const n=this.__v_raw,s=Q(n),i=Q(e);return t||(e!==i&&Ue(s,"has",e),Ue(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function zs(e,t=!1){return e=e.__v_raw,!t&&Ue(Q(e),"iterate",rn),Reflect.get(e,"size",e)}function $a(e){e=Q(e);const t=Q(this);return Ui(t).has.call(t,e)||(t.add(e),yt(t,"add",e,e)),this}function Ha(e,t){t=Q(t);const n=Q(this),{has:s,get:i}=Ui(n);let r=s.call(n,e);r||(e=Q(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?fs(t,o)&&yt(n,"set",e,t):yt(n,"add",e,t),this}function Va(e){const t=Q(this),{has:n,get:s}=Ui(t);let i=n.call(t,e);i||(e=Q(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&yt(t,"delete",e,void 0),r}function Wa(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&yt(e,"clear",void 0,void 0),n}function Gs(e,t){return function(s,i){const r=this,o=r.__v_raw,a=Q(o),c=t?Oo:e?No:ds;return!e&&Ue(a,"iterate",rn),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Js(e,t,n){return function(...s){const i=this.__v_raw,r=Q(i),o=Tn(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...s),u=n?Oo:t?No:ds;return!t&&Ue(r,"iterate",c?Fr:rn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Rt(e){return function(...t){return e==="delete"?!1:this}}function md(){const e={get(r){return qs(this,r)},get size(){return zs(this)},has:Ks,add:$a,set:Ha,delete:Va,clear:Wa,forEach:Gs(!1,!1)},t={get(r){return qs(this,r,!1,!0)},get size(){return zs(this)},has:Ks,add:$a,set:Ha,delete:Va,clear:Wa,forEach:Gs(!1,!0)},n={get(r){return qs(this,r,!0)},get size(){return zs(this,!0)},has(r){return Ks.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Gs(!0,!1)},s={get(r){return qs(this,r,!0,!0)},get size(){return zs(this,!0)},has(r){return Ks.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Js(r,!1,!1),n[r]=Js(r,!0,!1),t[r]=Js(r,!1,!0),s[r]=Js(r,!0,!0)}),[e,n,t,s]}const[vd,_d,yd,Ed]=md();function Do(e,t){const n=t?e?Ed:yd:e?_d:vd;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(Y(n,i)&&i in s?n:s,i,r)}const wd={get:Do(!1,!1)},bd={get:Do(!1,!0)},Id={get:Do(!0,!1)},Ll=new WeakMap,Ul=new WeakMap,Fl=new WeakMap,Td=new WeakMap;function Ad(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rd(e){return e.__v_skip||!Object.isExtensible(e)?0:Ad(Gf(e))}function Bn(e){return kn(e)?e:xo(e,!1,Ml,wd,Ll)}function Sd(e){return xo(e,!1,gd,bd,Ul)}function Bl(e){return xo(e,!0,pd,Id,Fl)}function xo(e,t,n,s,i){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=Rd(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function Ut(e){return kn(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function kn(e){return!!(e&&e.__v_isReadonly)}function di(e){return!!(e&&e.__v_isShallow)}function jl(e){return Ut(e)||kn(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Pn(e){return hi(e,"__v_skip",!0),e}const ds=e=>le(e)?Bn(e):e,No=e=>le(e)?Bl(e):e;function $l(e){Lt&&Qe&&(e=Q(e),Dl(e.dep||(e.dep=Co())))}function Hl(e,t){e=Q(e);const n=e.dep;n&&Br(n)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Mo(e){return Vl(e,!1)}function Cd(e){return Vl(e,!0)}function Vl(e,t){return ge(e)?e:new kd(e,t)}class kd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:ds(t)}get value(){return $l(this),this._value}set value(t){const n=this.__v_isShallow||di(t)||kn(t);t=n?t:Q(t),fs(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ds(t),Hl(this))}}function fe(e){return ge(e)?e.value:e}const Pd={get:(e,t,n)=>fe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return ge(i)&&!ge(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Wl(e){return Ut(e)?e:new Proxy(e,Pd)}function Od(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=xd(e,n);return t}class Dd{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return nd(Q(this._object),this._key)}}function xd(e,t,n){const s=e[t];return ge(s)?s:new Dd(e,t,n)}var ql;class Nd{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ql]=!1,this._dirty=!0,this.effect=new ko(t,()=>{this._dirty||(this._dirty=!0,Hl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=Q(this);return $l(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ql="__v_isReadonly";function Md(e,t,n=!1){let s,i;const r=V(e);return r?(s=e,i=et):(s=e.get,i=e.set),new Nd(s,i,r||!i,n)}function Ft(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){Fi(r,t,n)}return i}function tt(e,t,n,s){if(V(e)){const r=Ft(e,t,n,s);return r&&Il(r)&&r.catch(o=>{Fi(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(tt(e[r],t,n,s));return i}function Fi(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){Ft(c,null,10,[e,o,a]);return}}Ld(e,n,i,s)}function Ld(e,t,n,s=!0){console.error(e)}let ps=!1,jr=!1;const Re=[];let at=0;const An=[];let pt=null,Qt=0;const Kl=Promise.resolve();let Lo=null;function Uo(e){const t=Lo||Kl;return e?t.then(this?e.bind(this):e):t}function Ud(e){let t=at+1,n=Re.length;for(;t<n;){const s=t+n>>>1;gs(Re[s])<e?t=s+1:n=s}return t}function Fo(e){(!Re.length||!Re.includes(e,ps&&e.allowRecurse?at+1:at))&&(e.id==null?Re.push(e):Re.splice(Ud(e.id),0,e),zl())}function zl(){!ps&&!jr&&(jr=!0,Lo=Kl.then(Jl))}function Fd(e){const t=Re.indexOf(e);t>at&&Re.splice(t,1)}function Bd(e){H(e)?An.push(...e):(!pt||!pt.includes(e,e.allowRecurse?Qt+1:Qt))&&An.push(e),zl()}function qa(e,t=ps?at+1:0){for(;t<Re.length;t++){const n=Re[t];n&&n.pre&&(Re.splice(t,1),t--,n())}}function Gl(e){if(An.length){const t=[...new Set(An)];if(An.length=0,pt){pt.push(...t);return}for(pt=t,pt.sort((n,s)=>gs(n)-gs(s)),Qt=0;Qt<pt.length;Qt++)pt[Qt]();pt=null,Qt=0}}const gs=e=>e.id==null?1/0:e.id,jd=(e,t)=>{const n=gs(e)-gs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Jl(e){jr=!1,ps=!0,Re.sort(jd);const t=et;try{for(at=0;at<Re.length;at++){const n=Re[at];n&&n.active!==!1&&Ft(n,null,14)}}finally{at=0,Re.length=0,Gl(),ps=!1,Lo=null,(Re.length||An.length)&&Jl()}}function $d(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ae;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||ae;p&&(i=n.map(m=>Ee(m)?m.trim():m)),f&&(i=n.map(Lr))}let a,c=s[a=hr(t)]||s[a=hr(ft(t))];!c&&r&&(c=s[a=hr(pn(t))]),c&&tt(c,e,6,i);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,tt(l,e,6,i)}}function Xl(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!V(e)){const c=l=>{const u=Xl(l,t,!0);u&&(a=!0,De(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(le(e)&&s.set(e,null),null):(H(r)?r.forEach(c=>o[c]=null):De(o,r),le(e)&&s.set(e,o),o)}function Bi(e,t){return!e||!xi(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,pn(t))||Y(e,t))}let He=null,ji=null;function pi(e){const t=He;return He=e,ji=e&&e.type.__scopeId||null,t}function fw(e){ji=e}function dw(){ji=null}function Le(e,t=He,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ec(-1);const r=pi(t);let o;try{o=e(...i)}finally{pi(r),s._d&&ec(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fr(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:b,inheritAttrs:C}=e;let F,k;const B=pi(e);try{if(n.shapeFlag&4){const G=i||s;F=ot(u.call(G,G,f,r,m,p,b)),k=c}else{const G=t;F=ot(G.length>1?G(r,{attrs:c,slots:a,emit:l}):G(r,null)),k=t.props?c:Hd(c)}}catch(G){os.length=0,Fi(G,e,1),F=ie(ln)}let D=F;if(k&&C!==!1){const G=Object.keys(k),{shapeFlag:Z}=D;G.length&&Z&7&&(o&&G.some(To)&&(k=Vd(k,o)),D=On(D,k))}return n.dirs&&(D=On(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),F=D,pi(B),F}const Hd=e=>{let t;for(const n in e)(n==="class"||n==="style"||xi(n))&&((t||(t={}))[n]=e[n]);return t},Vd=(e,t)=>{const n={};for(const s in e)(!To(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Wd(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ka(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Bi(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ka(s,o,l):!0:!!o;return!1}function Ka(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!Bi(n,r))return!0}return!1}function qd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Kd=e=>e.__isSuspense;function zd(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Bd(e)}function si(e,t){if(pe){let n=pe.provides;const s=pe.parent&&pe.parent.provides;s===n&&(n=pe.provides=Object.create(s)),n[e]=t}}function lt(e,t,n=!1){const s=pe||He;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&V(t)?t.call(s.proxy):t}}function pw(e,t){return Bo(e,null,t)}const Xs={};function is(e,t,n){return Bo(e,t,n)}function Bo(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){const a=Cl()===(pe==null?void 0:pe.scope)?pe:null;let c,l=!1,u=!1;if(ge(e)?(c=()=>e.value,l=di(e)):Ut(e)?(c=()=>e,s=!0):H(e)?(u=!0,l=e.some(D=>Ut(D)||di(D)),c=()=>e.map(D=>{if(ge(D))return D.value;if(Ut(D))return en(D);if(V(D))return Ft(D,a,2)})):V(e)?t?c=()=>Ft(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),tt(e,a,3,[p])}:c=et,t&&s){const D=c;c=()=>en(D())}let f,p=D=>{f=k.onStop=()=>{Ft(D,a,4)}},m;if(vs)if(p=et,t?n&&tt(t,a,3,[c(),u?[]:void 0,p]):c(),i==="sync"){const D=Hp();m=D.__watcherHandles||(D.__watcherHandles=[])}else return et;let b=u?new Array(e.length).fill(Xs):Xs;const C=()=>{if(k.active)if(t){const D=k.run();(s||l||(u?D.some((G,Z)=>fs(G,b[Z])):fs(D,b)))&&(f&&f(),tt(t,a,3,[D,b===Xs?void 0:u&&b[0]===Xs?[]:b,p]),b=D)}else k.run()};C.allowRecurse=!!t;let F;i==="sync"?F=C:i==="post"?F=()=>Me(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),F=()=>Fo(C));const k=new ko(c,F);t?n?C():b=k.run():i==="post"?Me(k.run.bind(k),a&&a.suspense):k.run();const B=()=>{k.stop(),a&&a.scope&&Ao(a.scope.effects,k)};return m&&m.push(B),B}function Gd(e,t,n){const s=this.proxy,i=Ee(e)?e.includes(".")?Yl(s,e):()=>s[e]:e.bind(s,s);let r;V(t)?r=t:(r=t.handler,n=t);const o=pe;Dn(this);const a=Bo(i,r.bind(s),n);return o?Dn(o):on(),a}function Yl(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function en(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))en(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)en(e[n],t);else if(bl(e)||Tn(e))e.forEach(n=>{en(n,t)});else if(Al(e))for(const n in e)en(e[n],t);return e}function Ql(e){return V(e)?{setup:e,name:e.name}:e}const ii=e=>!!e.type.__asyncLoader,Zl=e=>e.type.__isKeepAlive;function Jd(e,t){eu(e,"a",t)}function Xd(e,t){eu(e,"da",t)}function eu(e,t,n=pe){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if($i(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Zl(i.parent.vnode)&&Yd(s,t,n,i),i=i.parent}}function Yd(e,t,n,s){const i=$i(t,e,s,!0);nu(()=>{Ao(s[t],i)},n)}function $i(e,t,n=pe,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Un(),Dn(n);const a=tt(t,n,e,o);return on(),Fn(),a});return s?i.unshift(r):i.push(r),r}}const bt=e=>(t,n=pe)=>(!vs||e==="sp")&&$i(e,(...s)=>t(...s),n),Qd=bt("bm"),tu=bt("m"),Zd=bt("bu"),ep=bt("u"),tp=bt("bum"),nu=bt("um"),np=bt("sp"),sp=bt("rtg"),ip=bt("rtc");function rp(e,t=pe){$i("ec",e,t)}function gw(e,t){const n=He;if(n===null)return e;const s=Wi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,c,l=ae]=t[r];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&en(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Kt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Un(),tt(c,n,8,[e.el,a,e,t]),Fn())}}const su="components";function op(e,t){return cp(su,e,!0,t)||e}const ap=Symbol();function cp(e,t,n=!0,s=!1){const i=He||pe;if(i){const r=i.type;if(e===su){const a=Bp(r,!1);if(a&&(a===t||a===ft(t)||a===Li(ft(t))))return r}const o=za(i[e]||r[e],t)||za(i.appContext[e],t);return!o&&s?r:o}}function za(e,t){return e&&(e[t]||e[ft(t)]||e[Li(ft(t))])}function mw(e,t,n,s){let i;const r=n&&n[s];if(H(e)||Ee(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r&&r[o])}else if(le(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=t(e[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const $r=e=>e?pu(e)?Wi(e)||e.proxy:$r(e.parent):null,rs=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>e.f||(e.f=()=>Fo(e.update)),$nextTick:e=>e.n||(e.n=Uo.bind(e.proxy)),$watch:e=>Gd.bind(e)}),dr=(e,t)=>e!==ae&&!e.__isScriptSetup&&Y(e,t),lp={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(dr(s,t))return o[t]=1,s[t];if(i!==ae&&Y(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&Y(l,t))return o[t]=3,r[t];if(n!==ae&&Y(n,t))return o[t]=4,n[t];Hr&&(o[t]=0)}}const u=rs[t];let f,p;if(u)return t==="$attrs"&&Ue(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ae&&Y(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return dr(i,t)?(i[t]=n,!0):s!==ae&&Y(s,t)?(s[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==ae&&Y(e,o)||dr(t,o)||(a=r[0])&&Y(a,o)||Y(s,o)||Y(rs,o)||Y(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Hr=!0;function up(e){const t=jo(e),n=e.proxy,s=e.ctx;Hr=!1,t.beforeCreate&&Ga(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:b,activated:C,deactivated:F,beforeDestroy:k,beforeUnmount:B,destroyed:D,unmounted:G,render:Z,renderTracked:ue,renderTriggered:K,errorCaptured:W,serverPrefetch:de,expose:ve,inheritAttrs:xe,components:Ke,directives:At,filters:Fe}=t;if(l&&hp(l,s,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const ne=o[re];V(ne)&&(s[re]=ne.bind(n))}if(i){const re=i.call(n,n);le(re)&&(e.data=Bn(re))}if(Hr=!0,r)for(const re in r){const ne=r[re],Je=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):et,qt=!V(ne)&&V(ne.set)?ne.set.bind(n):et,Xe=$e({get:Je,set:qt});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Ne=>Xe.value=Ne})}if(a)for(const re in a)iu(a[re],s,n,re);if(c){const re=V(c)?c.call(n):c;Reflect.ownKeys(re).forEach(ne=>{si(ne,re[ne])})}u&&Ga(u,e,"c");function _e(re,ne){H(ne)?ne.forEach(Je=>re(Je.bind(n))):ne&&re(ne.bind(n))}if(_e(Qd,f),_e(tu,p),_e(Zd,m),_e(ep,b),_e(Jd,C),_e(Xd,F),_e(rp,W),_e(ip,ue),_e(sp,K),_e(tp,B),_e(nu,G),_e(np,de),H(ve))if(ve.length){const re=e.exposed||(e.exposed={});ve.forEach(ne=>{Object.defineProperty(re,ne,{get:()=>n[ne],set:Je=>n[ne]=Je})})}else e.exposed||(e.exposed={});Z&&e.render===et&&(e.render=Z),xe!=null&&(e.inheritAttrs=xe),Ke&&(e.components=Ke),At&&(e.directives=At)}function hp(e,t,n=et,s=!1){H(e)&&(e=Vr(e));for(const i in e){const r=e[i];let o;le(r)?"default"in r?o=lt(r.from||i,r.default,!0):o=lt(r.from||i):o=lt(r),ge(o)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function Ga(e,t,n){tt(H(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function iu(e,t,n,s){const i=s.includes(".")?Yl(n,s):()=>n[s];if(Ee(e)){const r=t[e];V(r)&&is(i,r)}else if(V(e))is(i,e.bind(n));else if(le(e))if(H(e))e.forEach(r=>iu(r,t,n,s));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&is(i,r,e)}}function jo(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let c;return a?c=a:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(l=>gi(c,l,o,!0)),gi(c,t,o)),le(t)&&r.set(t,c),c}function gi(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&gi(e,r,n,!0),i&&i.forEach(o=>gi(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=fp[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const fp={data:Ja,props:Jt,emits:Jt,methods:Jt,computed:Jt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Jt,directives:Jt,watch:pp,provide:Ja,inject:dp};function Ja(e,t){return t?e?function(){return De(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function dp(e,t){return Jt(Vr(e),Vr(t))}function Vr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function Jt(e,t){return e?De(De(Object.create(null),e),t):t}function pp(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const s in t)n[s]=Pe(e[s],t[s]);return n}function gp(e,t,n,s=!1){const i={},r={};hi(r,Vi,1),e.propsDefaults=Object.create(null),ru(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:Sd(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function mp(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=Q(i),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Bi(e.emitsOptions,p))continue;const m=t[p];if(c)if(Y(r,p))m!==r[p]&&(r[p]=m,l=!0);else{const b=ft(p);i[b]=Wr(c,a,b,m,e,!1)}else m!==r[p]&&(r[p]=m,l=!0)}}}else{ru(e,t,i,r)&&(l=!0);let u;for(const f in a)(!t||!Y(t,f)&&((u=pn(f))===f||!Y(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Wr(c,a,f,void 0,e,!0)):delete i[f]);if(r!==a)for(const f in r)(!t||!Y(t,f))&&(delete r[f],l=!0)}l&&yt(e,"set","$attrs")}function ru(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(ti(c))continue;const l=t[c];let u;i&&Y(i,u=ft(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Bi(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=Q(n),l=a||ae;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Wr(i,c,f,l[f],e,!Y(l,f))}}return o}function Wr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=Y(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Dn(i),s=l[n]=c.call(null,t),on())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===pn(n))&&(s=!0))}return s}function ou(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let c=!1;if(!V(e)){const u=f=>{c=!0;const[p,m]=ou(f,t,!0);De(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!c)return le(e)&&s.set(e,In),In;if(H(r))for(let u=0;u<r.length;u++){const f=ft(r[u]);Xa(f)&&(o[f]=ae)}else if(r)for(const u in r){const f=ft(u);if(Xa(f)){const p=r[u],m=o[f]=H(p)||V(p)?{type:p}:Object.assign({},p);if(m){const b=Za(Boolean,m.type),C=Za(String,m.type);m[0]=b>-1,m[1]=C<0||b<C,(b>-1||Y(m,"default"))&&a.push(f)}}}const l=[o,a];return le(e)&&s.set(e,l),l}function Xa(e){return e[0]!=="$"}function Ya(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Qa(e,t){return Ya(e)===Ya(t)}function Za(e,t){return H(t)?t.findIndex(n=>Qa(n,e)):V(t)&&Qa(t,e)?0:-1}const au=e=>e[0]==="_"||e==="$stable",$o=e=>H(e)?e.map(ot):[ot(e)],vp=(e,t,n)=>{if(t._n)return t;const s=Le((...i)=>$o(t(...i)),n);return s._c=!1,s},cu=(e,t,n)=>{const s=e._ctx;for(const i in e){if(au(i))continue;const r=e[i];if(V(r))t[i]=vp(i,r,s);else if(r!=null){const o=$o(r);t[i]=()=>o}}},lu=(e,t)=>{const n=$o(t);e.slots.default=()=>n},_p=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),hi(t,"_",n)):cu(t,e.slots={})}else e.slots={},t&&lu(e,t);hi(e.slots,Vi,1)},yp=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=ae;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(De(i,t),!n&&a===1&&delete i._):(r=!t.$stable,cu(t,i)),o=t}else t&&(lu(e,t),o={default:1});if(r)for(const a in i)!au(a)&&!(a in o)&&delete i[a]};function uu(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ep=0;function wp(e,t){return function(s,i=null){V(s)||(s=Object.assign({},s)),i!=null&&!le(i)&&(i=null);const r=uu(),o=new Set;let a=!1;const c=r.app={_uid:Ep++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Vp,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...u)):V(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,f){if(!a){const p=ie(s,i);return p.appContext=r,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Wi(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function qr(e,t,n,s,i=!1){if(H(e)){e.forEach((p,m)=>qr(p,t&&(H(t)?t[m]:t),n,s,i));return}if(ii(s)&&!i)return;const r=s.shapeFlag&4?Wi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Ee(l)?(u[l]=null,Y(f,l)&&(f[l]=null)):ge(l)&&(l.value=null)),V(c))Ft(c,a,12,[o,u]);else{const p=Ee(c),m=ge(c);if(p||m){const b=()=>{if(e.f){const C=p?Y(f,c)?f[c]:u[c]:c.value;i?H(C)&&Ao(C,r):H(C)?C.includes(r)||C.push(r):p?(u[c]=[r],Y(f,c)&&(f[c]=u[c])):(c.value=[r],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Y(f,c)&&(f[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};o?(b.id=-1,Me(b,n)):b()}}}const Me=zd;function bp(e){return Ip(e)}function Ip(e,t){const n=Yf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=et,insertStaticContent:b}=e,C=(h,d,g,v=null,y=null,I=null,R=!1,w=null,T=!!d.dynamicChildren)=>{if(h===d)return;h&&!Gn(h,d)&&(v=A(h),Ne(h,y,I,!0),h=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:P}=d;switch(E){case Hi:F(h,d,g,v);break;case ln:k(h,d,g,v);break;case ri:h==null&&B(d,g,v,R);break;case rt:Ke(h,d,g,v,y,I,R,w,T);break;default:P&1?Z(h,d,g,v,y,I,R,w,T):P&6?At(h,d,g,v,y,I,R,w,T):(P&64||P&128)&&E.process(h,d,g,v,y,I,R,w,T,X)}N!=null&&y&&qr(N,h&&h.ref,I,d||h,!d)},F=(h,d,g,v)=>{if(h==null)s(d.el=a(d.children),g,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},k=(h,d,g,v)=>{h==null?s(d.el=c(d.children||""),g,v):d.el=h.el},B=(h,d,g,v)=>{[h.el,h.anchor]=b(h.children,d,g,v,h.el,h.anchor)},D=({el:h,anchor:d},g,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,g,v),h=y;s(d,g,v)},G=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),i(h),h=g;i(d)},Z=(h,d,g,v,y,I,R,w,T)=>{R=R||d.type==="svg",h==null?ue(d,g,v,y,I,R,w,T):de(h,d,y,I,R,w,T)},ue=(h,d,g,v,y,I,R,w)=>{let T,E;const{type:N,props:P,shapeFlag:M,transition:$,dirs:z}=h;if(T=h.el=o(h.type,I,P&&P.is,P),M&8?u(T,h.children):M&16&&W(h.children,T,null,v,y,I&&N!=="foreignObject",R,w),z&&Kt(h,null,v,"created"),K(T,h,h.scopeId,R,v),P){for(const se in P)se!=="value"&&!ti(se)&&r(T,se,null,P[se],I,h.children,v,y,S);"value"in P&&r(T,"value",null,P.value),(E=P.onVnodeBeforeMount)&&it(E,v,h)}z&&Kt(h,null,v,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;oe&&$.beforeEnter(T),s(T,d,g),((E=P&&P.onVnodeMounted)||oe||z)&&Me(()=>{E&&it(E,v,h),oe&&$.enter(T),z&&Kt(h,null,v,"mounted")},y)},K=(h,d,g,v,y)=>{if(g&&m(h,g),v)for(let I=0;I<v.length;I++)m(h,v[I]);if(y){let I=y.subTree;if(d===I){const R=y.vnode;K(h,R,R.scopeId,R.slotScopeIds,y.parent)}}},W=(h,d,g,v,y,I,R,w,T=0)=>{for(let E=T;E<h.length;E++){const N=h[E]=w?Pt(h[E]):ot(h[E]);C(null,N,d,g,v,y,I,R,w)}},de=(h,d,g,v,y,I,R)=>{const w=d.el=h.el;let{patchFlag:T,dynamicChildren:E,dirs:N}=d;T|=h.patchFlag&16;const P=h.props||ae,M=d.props||ae;let $;g&&zt(g,!1),($=M.onVnodeBeforeUpdate)&&it($,g,d,h),N&&Kt(d,h,g,"beforeUpdate"),g&&zt(g,!0);const z=y&&d.type!=="foreignObject";if(E?ve(h.dynamicChildren,E,w,g,v,z,I):R||ne(h,d,w,null,g,v,z,I,!1),T>0){if(T&16)xe(w,d,P,M,g,v,y);else if(T&2&&P.class!==M.class&&r(w,"class",null,M.class,y),T&4&&r(w,"style",P.style,M.style,y),T&8){const oe=d.dynamicProps;for(let se=0;se<oe.length;se++){const ye=oe[se],Ye=P[ye],vn=M[ye];(vn!==Ye||ye==="value")&&r(w,ye,Ye,vn,y,h.children,g,v,S)}}T&1&&h.children!==d.children&&u(w,d.children)}else!R&&E==null&&xe(w,d,P,M,g,v,y);(($=M.onVnodeUpdated)||N)&&Me(()=>{$&&it($,g,d,h),N&&Kt(d,h,g,"updated")},v)},ve=(h,d,g,v,y,I,R)=>{for(let w=0;w<d.length;w++){const T=h[w],E=d[w],N=T.el&&(T.type===rt||!Gn(T,E)||T.shapeFlag&70)?f(T.el):g;C(T,E,N,null,v,y,I,R,!0)}},xe=(h,d,g,v,y,I,R)=>{if(g!==v){if(g!==ae)for(const w in g)!ti(w)&&!(w in v)&&r(h,w,g[w],null,R,d.children,y,I,S);for(const w in v){if(ti(w))continue;const T=v[w],E=g[w];T!==E&&w!=="value"&&r(h,w,E,T,R,d.children,y,I,S)}"value"in v&&r(h,"value",g.value,v.value)}},Ke=(h,d,g,v,y,I,R,w,T)=>{const E=d.el=h?h.el:a(""),N=d.anchor=h?h.anchor:a("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:$}=d;$&&(w=w?w.concat($):$),h==null?(s(E,g,v),s(N,g,v),W(d.children,g,N,y,I,R,w,T)):P>0&&P&64&&M&&h.dynamicChildren?(ve(h.dynamicChildren,M,g,y,I,R,w),(d.key!=null||y&&d===y.subTree)&&hu(h,d,!0)):ne(h,d,g,N,y,I,R,w,T)},At=(h,d,g,v,y,I,R,w,T)=>{d.slotScopeIds=w,h==null?d.shapeFlag&512?y.ctx.activate(d,g,v,R,T):Fe(d,g,v,y,I,R,T):we(h,d,T)},Fe=(h,d,g,v,y,I,R)=>{const w=h.component=xp(h,v,y);if(Zl(h)&&(w.ctx.renderer=X),Mp(w),w.asyncDep){if(y&&y.registerDep(w,_e),!h.el){const T=w.subTree=ie(ln);k(null,T,d,g)}return}_e(w,h,d,g,y,I,R)},we=(h,d,g)=>{const v=d.component=h.component;if(Wd(h,d,g))if(v.asyncDep&&!v.asyncResolved){re(v,d,g);return}else v.next=d,Fd(v.update),v.update();else d.el=h.el,v.vnode=d},_e=(h,d,g,v,y,I,R)=>{const w=()=>{if(h.isMounted){let{next:N,bu:P,u:M,parent:$,vnode:z}=h,oe=N,se;zt(h,!1),N?(N.el=z.el,re(h,N,R)):N=z,P&&ni(P),(se=N.props&&N.props.onVnodeBeforeUpdate)&&it(se,$,N,z),zt(h,!0);const ye=fr(h),Ye=h.subTree;h.subTree=ye,C(Ye,ye,f(Ye.el),A(Ye),h,y,I),N.el=ye.el,oe===null&&qd(h,ye.el),M&&Me(M,y),(se=N.props&&N.props.onVnodeUpdated)&&Me(()=>it(se,$,N,z),y)}else{let N;const{el:P,props:M}=d,{bm:$,m:z,parent:oe}=h,se=ii(d);if(zt(h,!1),$&&ni($),!se&&(N=M&&M.onVnodeBeforeMount)&&it(N,oe,d),zt(h,!0),P&&q){const ye=()=>{h.subTree=fr(h),q(P,h.subTree,h,y,null)};se?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ye()):ye()}else{const ye=h.subTree=fr(h);C(null,ye,g,v,h,y,I),d.el=ye.el}if(z&&Me(z,y),!se&&(N=M&&M.onVnodeMounted)){const ye=d;Me(()=>it(N,oe,ye),y)}(d.shapeFlag&256||oe&&ii(oe.vnode)&&oe.vnode.shapeFlag&256)&&h.a&&Me(h.a,y),h.isMounted=!0,d=g=v=null}},T=h.effect=new ko(w,()=>Fo(E),h.scope),E=h.update=()=>T.run();E.id=h.uid,zt(h,!0),E()},re=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,mp(h,d.props,v,g),yp(h,d.children,g),Un(),qa(),Fn()},ne=(h,d,g,v,y,I,R,w,T=!1)=>{const E=h&&h.children,N=h?h.shapeFlag:0,P=d.children,{patchFlag:M,shapeFlag:$}=d;if(M>0){if(M&128){qt(E,P,g,v,y,I,R,w,T);return}else if(M&256){Je(E,P,g,v,y,I,R,w,T);return}}$&8?(N&16&&S(E,y,I),P!==E&&u(g,P)):N&16?$&16?qt(E,P,g,v,y,I,R,w,T):S(E,y,I,!0):(N&8&&u(g,""),$&16&&W(P,g,v,y,I,R,w,T))},Je=(h,d,g,v,y,I,R,w,T)=>{h=h||In,d=d||In;const E=h.length,N=d.length,P=Math.min(E,N);let M;for(M=0;M<P;M++){const $=d[M]=T?Pt(d[M]):ot(d[M]);C(h[M],$,g,null,y,I,R,w,T)}E>N?S(h,y,I,!0,!1,P):W(d,g,v,y,I,R,w,T,P)},qt=(h,d,g,v,y,I,R,w,T)=>{let E=0;const N=d.length;let P=h.length-1,M=N-1;for(;E<=P&&E<=M;){const $=h[E],z=d[E]=T?Pt(d[E]):ot(d[E]);if(Gn($,z))C($,z,g,null,y,I,R,w,T);else break;E++}for(;E<=P&&E<=M;){const $=h[P],z=d[M]=T?Pt(d[M]):ot(d[M]);if(Gn($,z))C($,z,g,null,y,I,R,w,T);else break;P--,M--}if(E>P){if(E<=M){const $=M+1,z=$<N?d[$].el:v;for(;E<=M;)C(null,d[E]=T?Pt(d[E]):ot(d[E]),g,z,y,I,R,w,T),E++}}else if(E>M)for(;E<=P;)Ne(h[E],y,I,!0),E++;else{const $=E,z=E,oe=new Map;for(E=z;E<=M;E++){const Be=d[E]=T?Pt(d[E]):ot(d[E]);Be.key!=null&&oe.set(Be.key,E)}let se,ye=0;const Ye=M-z+1;let vn=!1,Na=0;const zn=new Array(Ye);for(E=0;E<Ye;E++)zn[E]=0;for(E=$;E<=P;E++){const Be=h[E];if(ye>=Ye){Ne(Be,y,I,!0);continue}let st;if(Be.key!=null)st=oe.get(Be.key);else for(se=z;se<=M;se++)if(zn[se-z]===0&&Gn(Be,d[se])){st=se;break}st===void 0?Ne(Be,y,I,!0):(zn[st-z]=E+1,st>=Na?Na=st:vn=!0,C(Be,d[st],g,null,y,I,R,w,T),ye++)}const Ma=vn?Tp(zn):In;for(se=Ma.length-1,E=Ye-1;E>=0;E--){const Be=z+E,st=d[Be],La=Be+1<N?d[Be+1].el:v;zn[E]===0?C(null,st,g,La,y,I,R,w,T):vn&&(se<0||E!==Ma[se]?Xe(st,g,La,2):se--)}}},Xe=(h,d,g,v,y=null)=>{const{el:I,type:R,transition:w,children:T,shapeFlag:E}=h;if(E&6){Xe(h.component.subTree,d,g,v);return}if(E&128){h.suspense.move(d,g,v);return}if(E&64){R.move(h,d,g,X);return}if(R===rt){s(I,d,g);for(let P=0;P<T.length;P++)Xe(T[P],d,g,v);s(h.anchor,d,g);return}if(R===ri){D(h,d,g);return}if(v!==2&&E&1&&w)if(v===0)w.beforeEnter(I),s(I,d,g),Me(()=>w.enter(I),y);else{const{leave:P,delayLeave:M,afterLeave:$}=w,z=()=>s(I,d,g),oe=()=>{P(I,()=>{z(),$&&$()})};M?M(I,z,oe):oe()}else s(I,d,g)},Ne=(h,d,g,v=!1,y=!1)=>{const{type:I,props:R,ref:w,children:T,dynamicChildren:E,shapeFlag:N,patchFlag:P,dirs:M}=h;if(w!=null&&qr(w,null,g,h,!0),N&256){d.ctx.deactivate(h);return}const $=N&1&&M,z=!ii(h);let oe;if(z&&(oe=R&&R.onVnodeBeforeUnmount)&&it(oe,d,h),N&6)_(h.component,g,v);else{if(N&128){h.suspense.unmount(g,v);return}$&&Kt(h,null,d,"beforeUnmount"),N&64?h.type.remove(h,d,g,y,X,v):E&&(I!==rt||P>0&&P&64)?S(E,d,g,!1,!0):(I===rt&&P&384||!y&&N&16)&&S(T,d,g),v&&mn(h)}(z&&(oe=R&&R.onVnodeUnmounted)||$)&&Me(()=>{oe&&it(oe,d,h),$&&Kt(h,null,d,"unmounted")},g)},mn=h=>{const{type:d,el:g,anchor:v,transition:y}=h;if(d===rt){Ws(g,v);return}if(d===ri){G(h);return}const I=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:w}=y,T=()=>R(g,I);w?w(h.el,I,T):T()}else I()},Ws=(h,d)=>{let g;for(;h!==d;)g=p(h),i(h),h=g;i(d)},_=(h,d,g)=>{const{bum:v,scope:y,update:I,subTree:R,um:w}=h;v&&ni(v),y.stop(),I&&(I.active=!1,Ne(R,h,d,g)),w&&Me(w,d),Me(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},S=(h,d,g,v=!1,y=!1,I=0)=>{for(let R=I;R<h.length;R++)Ne(h[R],d,g,v,y)},A=h=>h.shapeFlag&6?A(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),x=(h,d,g)=>{h==null?d._vnode&&Ne(d._vnode,null,null,!0):C(d._vnode||null,h,d,null,null,null,g),qa(),Gl(),d._vnode=h},X={p:C,um:Ne,m:Xe,r:mn,mt:Fe,mc:W,pc:ne,pbc:ve,n:A,o:e};let he,q;return t&&([he,q]=t(X)),{render:x,hydrate:he,createApp:wp(x,he)}}function zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hu(e,t,n=!1){const s=e.children,i=t.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Pt(i[r]),a.el=o.el),n||hu(o,a)),a.type===Hi&&(a.el=o.el)}}function Tp(e){const t=e.slice(),n=[0];let s,i,r,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(i=n[n.length-1],e[i]<l){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<l?r=a+1:o=a;l<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Ap=e=>e.__isTeleport,rt=Symbol(void 0),Hi=Symbol(void 0),ln=Symbol(void 0),ri=Symbol(void 0),os=[];let Ze=null;function Dt(e=!1){os.push(Ze=e?null:[])}function Rp(){os.pop(),Ze=os[os.length-1]||null}let ms=1;function ec(e){ms+=e}function fu(e){return e.dynamicChildren=ms>0?Ze||In:null,Rp(),ms>0&&Ze&&Ze.push(e),e}function Ho(e,t,n,s,i,r){return fu(L(e,t,n,s,i,r,!0))}function Zn(e,t,n,s,i){return fu(ie(e,t,n,s,i,!0))}function Kr(e){return e?e.__v_isVNode===!0:!1}function Gn(e,t){return e.type===t.type&&e.key===t.key}const Vi="__vInternal",du=({key:e})=>e??null,oi=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ee(e)||ge(e)||V(e)?{i:He,r:e,k:t,f:!!n}:e:null;function L(e,t=null,n=null,s=0,i=null,r=e===rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&du(t),ref:t&&oi(t),scopeId:ji,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return a?(Vo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),ms>0&&!o&&Ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ze.push(c),c}const ie=Sp;function Sp(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===ap)&&(e=ln),Kr(e)){const a=On(e,t,!0);return n&&Vo(a,n),ms>0&&!r&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(e)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(jp(e)&&(e=e.__vccOpts),t){t=Cp(t);let{class:a,style:c}=t;a&&!Ee(a)&&(t.class=Io(a)),le(c)&&(jl(c)&&!H(c)&&(c=De({},c)),t.style=bo(c))}const o=Ee(e)?1:Kd(e)?128:Ap(e)?64:le(e)?4:V(e)?2:0;return L(e,t,n,s,i,o,r,!0)}function Cp(e){return e?jl(e)||Vi in e?De({},e):e:null}function On(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,a=t?Pp(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&du(a),ref:t&&t.ref?n&&i?H(i)?i.concat(oi(t)):[i,oi(t)]:oi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==rt?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&On(e.ssContent),ssFallback:e.ssFallback&&On(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function kp(e=" ",t=0){return ie(Hi,null,e,t)}function vw(e,t){const n=ie(ri,null,e);return n.staticCount=t,n}function tc(e="",t=!1){return t?(Dt(),Zn(ln,null,e)):ie(ln,null,e)}function ot(e){return e==null||typeof e=="boolean"?ie(ln):H(e)?ie(rt,null,e.slice()):typeof e=="object"?Pt(e):ie(Hi,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:On(e)}function Vo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Vo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Vi in t)?t._ctx=He:i===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:He},n=32):(t=String(t),s&64?(n=16,t=[kp(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pp(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Io([t.class,s.class]));else if(i==="style")t.style=bo([t.style,s.style]);else if(xi(i)){const r=t[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function it(e,t,n,s=null){tt(e,t,7,[n,s])}const Op=uu();let Dp=0;function xp(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Op,r={uid:Dp++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ou(s,i),emitsOptions:Xl(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=$d.bind(null,r),e.ce&&e.ce(r),r}let pe=null;const Np=()=>pe||He,Dn=e=>{pe=e,e.scope.on()},on=()=>{pe&&pe.scope.off(),pe=null};function pu(e){return e.vnode.shapeFlag&4}let vs=!1;function Mp(e,t=!1){vs=t;const{props:n,children:s}=e.vnode,i=pu(e);gp(e,n,i,t),_p(e,s);const r=i?Lp(e,t):void 0;return vs=!1,r}function Lp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pn(new Proxy(e.ctx,lp));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?Fp(e):null;Dn(e),Un();const r=Ft(s,e,0,[e.props,i]);if(Fn(),on(),Il(r)){if(r.then(on,on),t)return r.then(o=>{nc(e,o,t)}).catch(o=>{Fi(o,e,0)});e.asyncDep=r}else nc(e,r,t)}else gu(e,t)}function nc(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Wl(t)),gu(e,n)}let sc;function gu(e,t,n){const s=e.type;if(!e.render){if(!t&&sc&&!s.render){const i=s.template||jo(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=De(De({isCustomElement:r,delimiters:a},o),c);s.render=sc(i,l)}}e.render=s.render||et}Dn(e),Un(),up(e),Fn(),on()}function Up(e){return new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}})}function Fp(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Up(e))},slots:e.slots,emit:e.emit,expose:t}}function Wi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wl(Pn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rs)return rs[n](e)},has(t,n){return n in t||n in rs}}))}function Bp(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function jp(e){return V(e)&&"__vccOpts"in e}const $e=(e,t)=>Md(e,t,vs);function mu(e,t,n){const s=arguments.length;return s===2?le(t)&&!H(t)?Kr(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Kr(n)&&(n=[n]),ie(e,t,n))}const $p=Symbol(""),Hp=()=>lt($p),Vp="3.2.47",Wp="http://www.w3.org/2000/svg",Zt=typeof document<"u"?document:null,ic=Zt&&Zt.createElement("template"),qp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?Zt.createElementNS(Wp,e):Zt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Zt.createTextNode(e),createComment:e=>Zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ic.innerHTML=s?`<svg>${e}</svg>`:e;const a=ic.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kp(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function zp(e,t,n){const s=e.style,i=Ee(n);if(n&&!i){if(t&&!Ee(t))for(const r in t)n[r]==null&&zr(s,r,"");for(const r in n)zr(s,r,n[r])}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const rc=/\s*!important$/;function zr(e,t,n){if(H(n))n.forEach(s=>zr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Gp(e,t);rc.test(n)?e.setProperty(pn(s),n.replace(rc,""),"important"):e[s]=n}}const oc=["Webkit","Moz","ms"],pr={};function Gp(e,t){const n=pr[t];if(n)return n;let s=ft(t);if(s!=="filter"&&s in e)return pr[t]=s;s=Li(s);for(let i=0;i<oc.length;i++){const r=oc[i]+s;if(r in e)return pr[t]=r}return t}const ac="http://www.w3.org/1999/xlink";function Jp(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ac,t.slice(6,t.length)):e.setAttributeNS(ac,t,n);else{const r=Wf(t);n==null||r&&!El(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Xp(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=El(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function En(e,t,n,s){e.addEventListener(t,n,s)}function Yp(e,t,n,s){e.removeEventListener(t,n,s)}function Qp(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[a,c]=Zp(t);if(s){const l=r[t]=ng(s,i);En(e,a,l,c)}else o&&(Yp(e,a,o,c),r[t]=void 0)}}const cc=/(?:Once|Passive|Capture)$/;function Zp(e){let t;if(cc.test(e)){t={};let s;for(;s=e.match(cc);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pn(e.slice(2)),t]}let gr=0;const eg=Promise.resolve(),tg=()=>gr||(eg.then(()=>gr=0),gr=Date.now());function ng(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(sg(s,n.value),t,5,[s])};return n.value=e,n.attached=tg(),n}function sg(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const lc=/^on[a-z]/,ig=(e,t,n,s,i=!1,r,o,a,c)=>{t==="class"?Kp(e,s,i):t==="style"?zp(e,n,s):xi(t)?To(t)||Qp(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rg(e,t,s,i))?Xp(e,t,s,r,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Jp(e,t,s,i))};function rg(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&lc.test(t)&&V(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||lc.test(t)&&Ee(n)?!1:t in e}const uc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>ni(t,n):t};function og(e){e.target.composing=!0}function hc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _w={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=uc(i);const r=s||i.props&&i.props.type==="number";En(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Lr(a)),e._assign(a)}),n&&En(e,"change",()=>{e.value=e.value.trim()}),t||(En(e,"compositionstart",og),En(e,"compositionend",hc),En(e,"change",hc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},r){if(e._assign=uc(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&Lr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},ag=["ctrl","shift","alt","meta"],cg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ag.some(n=>e[`${n}Key`]&&!t.includes(n))},lg=(e,t)=>(n,...s)=>{for(let i=0;i<t.length;i++){const r=cg[t[i]];if(r&&r(n,t))return}return e(n,...s)},ug={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yw=(e,t)=>n=>{if(!("key"in n))return;const s=pn(n.key);if(t.some(i=>i===s||ug[i]===s))return e(n)},hg=De({patchProp:ig},qp);let fc;function fg(){return fc||(fc=bp(hg))}const dg=(...e)=>{const t=fg().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=pg(s);if(!i)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function pg(e){return Ee(e)?document.querySelector(e):e}var gg=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let vu;const qi=e=>vu=e,_u=Symbol();function Gr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var as;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(as||(as={}));function mg(){const e=Sl(!0),t=e.run(()=>Mo({}));let n=[],s=[];const i=Pn({install(r){qi(i),i._a=r,r.provide(_u,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!gg?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const yu=()=>{};function dc(e,t,n,s=yu){e.push(t);const i=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),s())};return!n&&Cl()&&Zf(i),i}function _n(e,...t){e.slice().forEach(n=>{n(...t)})}function Jr(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];Gr(i)&&Gr(s)&&e.hasOwnProperty(n)&&!ge(s)&&!Ut(s)?e[n]=Jr(i,s):e[n]=s}return e}const vg=Symbol();function _g(e){return!Gr(e)||!e.hasOwnProperty(vg)}const{assign:kt}=Object;function yg(e){return!!(ge(e)&&e.effect)}function Eg(e,t,n,s){const{state:i,actions:r,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=i?i():{});const u=Od(n.state.value[e]);return kt(u,r,Object.keys(o||{}).reduce((f,p)=>(f[p]=Pn($e(()=>{qi(n);const m=n._s.get(e);return o[p].call(m,m)})),f),{}))}return c=Eu(e,l,t,n,s,!0),c}function Eu(e,t,n={},s,i,r){let o;const a=kt({actions:{}},n),c={deep:!0};let l,u,f=Pn([]),p=Pn([]),m;const b=s.state.value[e];!r&&!b&&(s.state.value[e]={}),Mo({});let C;function F(K){let W;l=u=!1,typeof K=="function"?(K(s.state.value[e]),W={type:as.patchFunction,storeId:e,events:m}):(Jr(s.state.value[e],K),W={type:as.patchObject,payload:K,storeId:e,events:m});const de=C=Symbol();Uo().then(()=>{C===de&&(l=!0)}),u=!0,_n(f,W,s.state.value[e])}const k=r?function(){const{state:W}=n,de=W?W():{};this.$patch(ve=>{kt(ve,de)})}:yu;function B(){o.stop(),f=[],p=[],s._s.delete(e)}function D(K,W){return function(){qi(s);const de=Array.from(arguments),ve=[],xe=[];function Ke(we){ve.push(we)}function At(we){xe.push(we)}_n(p,{args:de,name:K,store:Z,after:Ke,onError:At});let Fe;try{Fe=W.apply(this&&this.$id===e?this:Z,de)}catch(we){throw _n(xe,we),we}return Fe instanceof Promise?Fe.then(we=>(_n(ve,we),we)).catch(we=>(_n(xe,we),Promise.reject(we))):(_n(ve,Fe),Fe)}}const G={_p:s,$id:e,$onAction:dc.bind(null,p),$patch:F,$reset:k,$subscribe(K,W={}){const de=dc(f,K,W.detached,()=>ve()),ve=o.run(()=>is(()=>s.state.value[e],xe=>{(W.flush==="sync"?u:l)&&K({storeId:e,type:as.direct,events:m},xe)},kt({},c,W)));return de},$dispose:B},Z=Bn(G);s._s.set(e,Z);const ue=s._e.run(()=>(o=Sl(),o.run(()=>t())));for(const K in ue){const W=ue[K];if(ge(W)&&!yg(W)||Ut(W))r||(b&&_g(W)&&(ge(W)?W.value=b[K]:Jr(W,b[K])),s.state.value[e][K]=W);else if(typeof W=="function"){const de=D(K,W);ue[K]=de,a.actions[K]=W}}return kt(Z,ue),kt(Q(Z),ue),Object.defineProperty(Z,"$state",{get:()=>s.state.value[e],set:K=>{F(W=>{kt(W,K)})}}),s._p.forEach(K=>{kt(Z,o.run(()=>K({store:Z,app:s._a,pinia:s,options:a})))}),b&&r&&n.hydrate&&n.hydrate(Z.$state,b),l=!0,u=!0,Z}function wu(e,t,n){let s,i;const r=typeof t=="function";typeof e=="string"?(s=e,i=r?n:t):(i=e,s=e.id);function o(a,c){const l=Np();return a=a||l&&lt(_u,null),a&&qi(a),a=vu,a._s.has(s)||(r?Eu(s,t,i,a):Eg(s,i,a)),a._s.get(s)}return o.$id=s,o}const wg="/assets/devclicker-text-826f9145.svg",bu="/assets/code-a2396d4d.svg",Iu="/assets/missions-d9bd19ab.svg",Tu="/assets/investissement-6fc155f6.svg",Au="/assets/entreprise-67edb380.svg",Ru="/assets/trophées-1cd60efe.svg",Su="/assets/shopping-3fc9367f.svg",Cu="/assets/réglages-6bb20e64.svg";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const wn=typeof window<"u";function bg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const te=Object.assign;function mr(e,t){const n={};for(const s in t){const i=t[s];n[s]=nt(i)?i.map(e):e(i)}return n}const cs=()=>{},nt=Array.isArray,Ig=/\/$/,Tg=e=>e.replace(Ig,"");function vr(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=Cg(s??t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Ag(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Rg(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&xn(t.matched[s],n.matched[i])&&ku(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function xn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ku(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Sg(e[n],t[n]))return!1;return!0}function Sg(e,t){return nt(e)?gc(e,t):nt(t)?gc(t,e):e===t}function gc(e,t){return nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Cg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var _s;(function(e){e.pop="pop",e.push="push"})(_s||(_s={}));var ls;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ls||(ls={}));function kg(e){if(!e)if(wn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tg(e)}const Pg=/^[^#]+#/;function Og(e,t){return e.replace(Pg,"#")+t}function Dg(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ki=()=>({left:window.pageXOffset,top:window.pageYOffset});function xg(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Dg(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function mc(e,t){return(history.state?history.state.position-t:-1)+e}const Xr=new Map;function Ng(e,t){Xr.set(e,t)}function Mg(e){const t=Xr.get(e);return Xr.delete(e),t}let Lg=()=>location.protocol+"//"+location.host;function Pu(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),pc(c,"")}return pc(n,e)+s+i}function Ug(e,t,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const m=Pu(e,location),b=n.value,C=t.value;let F=0;if(p){if(n.value=m,t.value=p,o&&o===b){o=null;return}F=C?p.position-C.position:0}else s(m);i.forEach(k=>{k(n.value,b,{delta:F,type:_s.pop,direction:F?F>0?ls.forward:ls.back:ls.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const b=i.indexOf(p);b>-1&&i.splice(b,1)};return r.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:Ki()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function vc(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Ki():null}}function Fg(e){const{history:t,location:n}=window,s={value:Pu(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Lg()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=te({},t.state,vc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=te({},i.value,t.state,{forward:c,scroll:Ki()});r(u.current,u,!0);const f=te({},vc(s.value,c,null),{position:u.position+1},l);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function Bg(e){e=kg(e);const t=Fg(e),n=Ug(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:e,go:s,createHref:Og.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function jg(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Bg(e)}function $g(e){return typeof e=="string"||e&&typeof e=="object"}function Ou(e){return typeof e=="string"||typeof e=="symbol"}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Du=Symbol("");var _c;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_c||(_c={}));function Nn(e,t){return te(new Error,{type:e,[Du]:!0},t)}function dt(e,t){return e instanceof Error&&Du in e&&(t==null||!!(e.type&t))}const yc="[^/]+?",Hg={sensitive:!1,strict:!1,start:!0,end:!0},Vg=/[.+*?^${}()[\]/\\]/g;function Wg(e,t){const n=te({},Hg,t),s=[];let i=n.start?"^":"";const r=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(Vg,"\\$&"),m+=40;else if(p.type===1){const{value:b,repeatable:C,optional:F,regexp:k}=p;r.push({name:b,repeatable:C,optional:F});const B=k||yc;if(B!==yc){m+=10;try{new RegExp(`(${B})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${b}" (${B}): `+G.message)}}let D=C?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;f||(D=F&&l.length<2?`(?:/${D})`:"/"+D),F&&(D+="?"),i+=D,m+=20,F&&(m+=-8),C&&(m+=-20),B===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",b=r[p-1];f[b.name]=m&&b.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:b,repeatable:C,optional:F}=m,k=b in l?l[b]:"";if(nt(k)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const B=nt(k)?k.join("/"):k;if(!B)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=B}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function qg(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Kg(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=qg(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ec(s))return 1;if(Ec(i))return-1}return i.length-s.length}function Ec(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zg={type:0,value:""},Gg=/[a-zA-Z0-9_]/;function Jg(e){if(!e)return[[]];if(e==="/")return[[zg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function f(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:Gg.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function Xg(e,t,n){const s=Wg(Jg(e.path),n),i=te(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Yg(e,t){const n=[],s=new Map;t=Ic({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function r(u,f,p){const m=!p,b=Qg(u);b.aliasOf=p&&p.record;const C=Ic(t,u),F=[b];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of D)F.push(te({},b,{components:p?p.record.components:b.components,path:G,aliasOf:p?p.record:b}))}let k,B;for(const D of F){const{path:G}=D;if(f&&G[0]!=="/"){const Z=f.record.path,ue=Z[Z.length-1]==="/"?"":"/";D.path=f.record.path+(G&&ue+G)}if(k=Xg(D,f,C),p?p.alias.push(k):(B=B||k,B!==k&&B.alias.push(k),m&&u.name&&!bc(k)&&o(u.name)),b.children){const Z=b.children;for(let ue=0;ue<Z.length;ue++)r(Z[ue],k,p&&p.children[ue])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return B?()=>{o(B)}:cs}function o(u){if(Ou(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Kg(u,n[f])>=0&&(u.record.path!==n[f].record.path||!xu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!bc(u)&&s.set(u.record.name,u)}function l(u,f){let p,m={},b,C;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw Nn(1,{location:u});C=p.record.name,m=te(wc(f.params,p.keys.filter(B=>!B.optional).map(B=>B.name)),u.params&&wc(u.params,p.keys.map(B=>B.name))),b=p.stringify(m)}else if("path"in u)b=u.path,p=n.find(B=>B.re.test(b)),p&&(m=p.parse(b),C=p.record.name);else{if(p=f.name?s.get(f.name):n.find(B=>B.re.test(f.path)),!p)throw Nn(1,{location:u,currentLocation:f});C=p.record.name,m=te({},f.params,u.params),b=p.stringify(m)}const F=[];let k=p;for(;k;)F.unshift(k.record),k=k.parent;return{name:C,path:b,params:m,matched:F,meta:em(F)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function wc(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Qg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Zg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Zg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function bc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function em(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Ic(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function xu(e,t){return t.children.some(n=>n===e||xu(e,n))}const Nu=/#/g,tm=/&/g,nm=/\//g,sm=/=/g,im=/\?/g,Mu=/\+/g,rm=/%5B/g,om=/%5D/g,Lu=/%5E/g,am=/%60/g,Uu=/%7B/g,cm=/%7C/g,Fu=/%7D/g,lm=/%20/g;function Wo(e){return encodeURI(""+e).replace(cm,"|").replace(rm,"[").replace(om,"]")}function um(e){return Wo(e).replace(Uu,"{").replace(Fu,"}").replace(Lu,"^")}function Yr(e){return Wo(e).replace(Mu,"%2B").replace(lm,"+").replace(Nu,"%23").replace(tm,"%26").replace(am,"`").replace(Uu,"{").replace(Fu,"}").replace(Lu,"^")}function hm(e){return Yr(e).replace(sm,"%3D")}function fm(e){return Wo(e).replace(Nu,"%23").replace(im,"%3F")}function dm(e){return e==null?"":fm(e).replace(nm,"%2F")}function mi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function pm(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Mu," "),o=r.indexOf("="),a=mi(o<0?r:r.slice(0,o)),c=o<0?null:mi(r.slice(o+1));if(a in t){let l=t[a];nt(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Tc(e){let t="";for(let n in e){const s=e[n];if(n=hm(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(s)?s.map(r=>r&&Yr(r)):[s&&Yr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function gm(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=nt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const mm=Symbol(""),Ac=Symbol(""),qo=Symbol(""),Bu=Symbol(""),Qr=Symbol("");function Jn(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ot(e,t,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Nn(4,{from:n,to:t})):f instanceof Error?a(f):$g(f)?a(Nn(2,{from:t,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},l=e.call(s&&s.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function _r(e,t,n,s){const i=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(vm(a)){const l=(a.__vccOpts||a)[t];l&&i.push(Ot(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=bg(l)?l.default:l;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Ot(p,n,s,r,o)()}))}}return i}function vm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Rc(e){const t=lt(qo),n=lt(Bu),s=$e(()=>t.resolve(fe(e.to))),i=$e(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(xn.bind(null,u));if(p>-1)return p;const m=Sc(c[l-2]);return l>1&&Sc(u)===m&&f[f.length-1].path!==m?f.findIndex(xn.bind(null,c[l-2])):p}),r=$e(()=>i.value>-1&&Em(n.params,s.value.params)),o=$e(()=>i.value>-1&&i.value===n.matched.length-1&&ku(n.params,s.value.params));function a(c={}){return ym(c)?t[fe(e.replace)?"replace":"push"](fe(e.to)).catch(cs):Promise.resolve()}return{route:s,href:$e(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const _m=Ql({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rc,setup(e,{slots:t}){const n=Bn(Rc(e)),{options:s}=lt(qo),i=$e(()=>({[Cc(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cc(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:mu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Xt=_m;function ym(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Em(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Sc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cc=(e,t,n)=>e??t??n,wm=Ql({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=lt(Qr),i=$e(()=>e.route||s.value),r=lt(Ac,0),o=$e(()=>{let l=fe(r);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=$e(()=>i.value.matched[o.value]);si(Ac,$e(()=>o.value+1)),si(mm,a),si(Qr,i);const c=Mo();return is(()=>[c.value,a.value,e.name],([l,u,f],[p,m,b])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!xn(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return kc(n.default,{Component:p,route:l});const m=f.props[u],b=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=mu(p,te({},b,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return kc(n.default,{Component:F,route:l})||F}}});function kc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zr=wm;function bm(e){const t=Yg(e.routes,e),n=e.parseQuery||pm,s=e.stringifyQuery||Tc,i=e.history,r=Jn(),o=Jn(),a=Jn(),c=Cd(St);let l=St;wn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mr.bind(null,_=>""+_),f=mr.bind(null,dm),p=mr.bind(null,mi);function m(_,S){let A,x;return Ou(_)?(A=t.getRecordMatcher(_),x=S):x=_,t.addRoute(x,A)}function b(_){const S=t.getRecordMatcher(_);S&&t.removeRoute(S)}function C(){return t.getRoutes().map(_=>_.record)}function F(_){return!!t.getRecordMatcher(_)}function k(_,S){if(S=te({},S||c.value),typeof _=="string"){const h=vr(n,_,S.path),d=t.resolve({path:h.path},S),g=i.createHref(h.fullPath);return te(h,d,{params:p(d.params),hash:mi(h.hash),redirectedFrom:void 0,href:g})}let A;if("path"in _)A=te({},_,{path:vr(n,_.path,S.path).path});else{const h=te({},_.params);for(const d in h)h[d]==null&&delete h[d];A=te({},_,{params:f(_.params)}),S.params=f(S.params)}const x=t.resolve(A,S),X=_.hash||"";x.params=u(p(x.params));const he=Ag(s,te({},_,{hash:um(X),path:x.path})),q=i.createHref(he);return te({fullPath:he,hash:X,query:s===Tc?gm(_.query):_.query||{}},x,{redirectedFrom:void 0,href:q})}function B(_){return typeof _=="string"?vr(n,_,c.value.path):te({},_)}function D(_,S){if(l!==_)return Nn(8,{from:S,to:_})}function G(_){return K(_)}function Z(_){return G(te(B(_),{replace:!0}))}function ue(_){const S=_.matched[_.matched.length-1];if(S&&S.redirect){const{redirect:A}=S;let x=typeof A=="function"?A(_):A;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=B(x):{path:x},x.params={}),te({query:_.query,hash:_.hash,params:"path"in x?{}:_.params},x)}}function K(_,S){const A=l=k(_),x=c.value,X=_.state,he=_.force,q=_.replace===!0,h=ue(A);if(h)return K(te(B(h),{state:typeof h=="object"?te({},X,h.state):X,force:he,replace:q}),S||A);const d=A;d.redirectedFrom=S;let g;return!he&&Rg(s,x,A)&&(g=Nn(16,{to:d,from:x}),qt(x,x,!0,!1)),(g?Promise.resolve(g):de(d,x)).catch(v=>dt(v)?dt(v,2)?v:Je(v):re(v,d,x)).then(v=>{if(v){if(dt(v,2))return K(te({replace:q},B(v.to),{state:typeof v.to=="object"?te({},X,v.to.state):X,force:he}),S||d)}else v=xe(d,x,!0,q,X);return ve(d,x,v),v})}function W(_,S){const A=D(_,S);return A?Promise.reject(A):Promise.resolve()}function de(_,S){let A;const[x,X,he]=Im(_,S);A=_r(x.reverse(),"beforeRouteLeave",_,S);for(const h of x)h.leaveGuards.forEach(d=>{A.push(Ot(d,_,S))});const q=W.bind(null,_,S);return A.push(q),yn(A).then(()=>{A=[];for(const h of r.list())A.push(Ot(h,_,S));return A.push(q),yn(A)}).then(()=>{A=_r(X,"beforeRouteUpdate",_,S);for(const h of X)h.updateGuards.forEach(d=>{A.push(Ot(d,_,S))});return A.push(q),yn(A)}).then(()=>{A=[];for(const h of _.matched)if(h.beforeEnter&&!S.matched.includes(h))if(nt(h.beforeEnter))for(const d of h.beforeEnter)A.push(Ot(d,_,S));else A.push(Ot(h.beforeEnter,_,S));return A.push(q),yn(A)}).then(()=>(_.matched.forEach(h=>h.enterCallbacks={}),A=_r(he,"beforeRouteEnter",_,S),A.push(q),yn(A))).then(()=>{A=[];for(const h of o.list())A.push(Ot(h,_,S));return A.push(q),yn(A)}).catch(h=>dt(h,8)?h:Promise.reject(h))}function ve(_,S,A){for(const x of a.list())x(_,S,A)}function xe(_,S,A,x,X){const he=D(_,S);if(he)return he;const q=S===St,h=wn?history.state:{};A&&(x||q?i.replace(_.fullPath,te({scroll:q&&h&&h.scroll},X)):i.push(_.fullPath,X)),c.value=_,qt(_,S,A,q),Je()}let Ke;function At(){Ke||(Ke=i.listen((_,S,A)=>{if(!Ws.listening)return;const x=k(_),X=ue(x);if(X){K(te(X,{replace:!0}),x).catch(cs);return}l=x;const he=c.value;wn&&Ng(mc(he.fullPath,A.delta),Ki()),de(x,he).catch(q=>dt(q,12)?q:dt(q,2)?(K(q.to,x).then(h=>{dt(h,20)&&!A.delta&&A.type===_s.pop&&i.go(-1,!1)}).catch(cs),Promise.reject()):(A.delta&&i.go(-A.delta,!1),re(q,x,he))).then(q=>{q=q||xe(x,he,!1),q&&(A.delta&&!dt(q,8)?i.go(-A.delta,!1):A.type===_s.pop&&dt(q,20)&&i.go(-1,!1)),ve(x,he,q)}).catch(cs)}))}let Fe=Jn(),we=Jn(),_e;function re(_,S,A){Je(_);const x=we.list();return x.length?x.forEach(X=>X(_,S,A)):console.error(_),Promise.reject(_)}function ne(){return _e&&c.value!==St?Promise.resolve():new Promise((_,S)=>{Fe.add([_,S])})}function Je(_){return _e||(_e=!_,At(),Fe.list().forEach(([S,A])=>_?A(_):S()),Fe.reset()),_}function qt(_,S,A,x){const{scrollBehavior:X}=e;if(!wn||!X)return Promise.resolve();const he=!A&&Mg(mc(_.fullPath,0))||(x||!A)&&history.state&&history.state.scroll||null;return Uo().then(()=>X(_,S,he)).then(q=>q&&xg(q)).catch(q=>re(q,_,S))}const Xe=_=>i.go(_);let Ne;const mn=new Set,Ws={currentRoute:c,listening:!0,addRoute:m,removeRoute:b,hasRoute:F,getRoutes:C,resolve:k,options:e,push:G,replace:Z,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:ne,install(_){const S=this;_.component("RouterLink",Xt),_.component("RouterView",Zr),_.config.globalProperties.$router=S,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(c)}),wn&&!Ne&&c.value===St&&(Ne=!0,G(i.location).catch(X=>{}));const A={};for(const X in St)A[X]=$e(()=>c.value[X]);_.provide(qo,S),_.provide(Bu,Bn(A)),_.provide(Qr,c);const x=_.unmount;mn.add(_),_.unmount=function(){mn.delete(_),mn.size<1&&(l=St,Ke&&Ke(),Ke=null,c.value=St,Ne=!1,_e=!1),x()}}};return Ws}function yn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Im(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(l=>xn(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>xn(l,c))||i.push(c))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Tm=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},$u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[f],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ju(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Tm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||f==null)throw new Am;const p=r<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),f!==64){const b=l<<6&192|f;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Am extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rm=function(e){const t=ju(e);return $u.encodeByteArray(t,!0)},vi=function(e){return Rm(e).replace(/\./g,"")},Hu=function(e){try{return $u.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=()=>Sm().__FIREBASE_DEFAULTS__,km=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Pm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hu(e[1]);return t&&JSON.parse(t)},Ko=()=>{try{return Cm()||km()||Pm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vu=e=>{var t,n;return(n=(t=Ko())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Om=e=>{const t=Vu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Dm=()=>{var e;return(e=Ko())===null||e===void 0?void 0:e.config},Wu=e=>{var t;return(t=Ko())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[vi(JSON.stringify(n)),vi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Lm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fm(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Bm(){try{return typeof indexedDB=="object"}catch{return!1}}function jm(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="FirebaseError";class It extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=$m,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Hm(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new It(i,a,s)}}function Hm(e,t){return e.replace(Vm,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Vm=/\{\$([^}]+)}/g;function Wm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _i(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Pc(r)&&Pc(o)){if(!_i(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Pc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function es(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function ts(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function qm(e,t){const n=new Km(e,t);return n.subscribe.bind(n)}class Km{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=yr),i.error===void 0&&(i.error=yr),i.complete===void 0&&(i.complete=yr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function yr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return e&&e._delegate?e._delegate:e}class un{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new xm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xm(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jm(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jm(e){return e===Yt?void 0:e}function Xm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ee||(ee={}));const Qm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Zm=ee.INFO,ev={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},tv=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=ev[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zo{constructor(t){this.name=t,this._logLevel=Zm,this._logHandler=tv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...t),this._logHandler(this,ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...t),this._logHandler(this,ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...t),this._logHandler(this,ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...t),this._logHandler(this,ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...t),this._logHandler(this,ee.ERROR,...t)}}const nv=(e,t)=>t.some(n=>e instanceof n);let Oc,Dc;function sv(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iv(){return Dc||(Dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qu=new WeakMap,eo=new WeakMap,Ku=new WeakMap,Er=new WeakMap,Go=new WeakMap;function rv(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Bt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&qu.set(n,e)}).catch(()=>{}),Go.set(t,e),t}function ov(e){if(eo.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});eo.set(e,t)}let to={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return eo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ku.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function av(e){to=e(to)}function cv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(wr(this),t,...n);return Ku.set(s,t.sort?t.sort():[t]),Bt(s)}:iv().includes(e)?function(...t){return e.apply(wr(this),t),Bt(qu.get(this))}:function(...t){return Bt(e.apply(wr(this),t))}}function lv(e){return typeof e=="function"?cv(e):(e instanceof IDBTransaction&&ov(e),nv(e,sv())?new Proxy(e,to):e)}function Bt(e){if(e instanceof IDBRequest)return rv(e);if(Er.has(e))return Er.get(e);const t=lv(e);return t!==e&&(Er.set(e,t),Go.set(t,e)),t}const wr=e=>Go.get(e);function uv(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Bt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const hv=["get","getKey","getAll","getAllKeys","count"],fv=["put","add","delete","clear"],br=new Map;function xc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=fv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hv.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return br.set(t,r),r}av(e=>({...e,get:(t,n,s)=>xc(t,n)||e.get(t,n,s),has:(t,n)=>!!xc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const no="@firebase/app",Nc="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new zo("@firebase/app"),gv="@firebase/app-compat",mv="@firebase/analytics-compat",vv="@firebase/analytics",_v="@firebase/app-check-compat",yv="@firebase/app-check",Ev="@firebase/auth",wv="@firebase/auth-compat",bv="@firebase/database",Iv="@firebase/database-compat",Tv="@firebase/functions",Av="@firebase/functions-compat",Rv="@firebase/installations",Sv="@firebase/installations-compat",Cv="@firebase/messaging",kv="@firebase/messaging-compat",Pv="@firebase/performance",Ov="@firebase/performance-compat",Dv="@firebase/remote-config",xv="@firebase/remote-config-compat",Nv="@firebase/storage",Mv="@firebase/storage-compat",Lv="@firebase/firestore",Uv="@firebase/firestore-compat",Fv="firebase",Bv="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="[DEFAULT]",jv={[no]:"fire-core",[gv]:"fire-core-compat",[vv]:"fire-analytics",[mv]:"fire-analytics-compat",[yv]:"fire-app-check",[_v]:"fire-app-check-compat",[Ev]:"fire-auth",[wv]:"fire-auth-compat",[bv]:"fire-rtdb",[Iv]:"fire-rtdb-compat",[Tv]:"fire-fn",[Av]:"fire-fn-compat",[Rv]:"fire-iid",[Sv]:"fire-iid-compat",[Cv]:"fire-fcm",[kv]:"fire-fcm-compat",[Pv]:"fire-perf",[Ov]:"fire-perf-compat",[Dv]:"fire-rc",[xv]:"fire-rc-compat",[Nv]:"fire-gcs",[Mv]:"fire-gcs-compat",[Lv]:"fire-fst",[Uv]:"fire-fst-compat","fire-js":"fire-js",[Fv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map,io=new Map;function $v(e,t){try{e.container.addComponent(t)}catch(n){hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mn(e){const t=e.name;if(io.has(t))return hn.debug(`There were multiple attempts to register component ${t}.`),!1;io.set(t,e);for(const n of yi.values())$v(n,e);return!0}function Jo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new ks("app","Firebase",Hv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=Bv;function zu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:so,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(n||(n=Dm()),!n)throw jt.create("no-options");const r=yi.get(i);if(r){if(_i(n,r.options)&&_i(s,r.config))return r;throw jt.create("duplicate-app",{appName:i})}const o=new Ym(i);for(const c of io.values())o.addComponent(c);const a=new Vv(n,s,o);return yi.set(i,a),a}function Gu(e=so){const t=yi.get(e);if(!t&&e===so)return zu();if(!t)throw jt.create("no-app",{appName:e});return t}function $t(e,t,n){var s;let i=(s=jv[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Mn(new un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="firebase-heartbeat-database",qv=1,ys="firebase-heartbeat-store";let Ir=null;function Ju(){return Ir||(Ir=uv(Wv,qv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ys)}}}).catch(e=>{throw jt.create("idb-open",{originalErrorMessage:e.message})})),Ir}async function Kv(e){try{return(await Ju()).transaction(ys).objectStore(ys).get(Xu(e))}catch(t){if(t instanceof It)hn.warn(t.message);else{const n=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});hn.warn(n.message)}}}async function Mc(e,t){try{const s=(await Ju()).transaction(ys,"readwrite");return await s.objectStore(ys).put(t,Xu(e)),s.done}catch(n){if(n instanceof It)hn.warn(n.message);else{const s=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(s.message)}}}function Xu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=1024,Gv=30*24*60*60*1e3;class Jv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Gv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lc(),{heartbeatsToSend:n,unsentEntries:s}=Xv(this._heartbeatsCache.heartbeats),i=vi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lc(){return new Date().toISOString().substring(0,10)}function Xv(e,t=zv){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Uc(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uc(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bm()?jm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Uc(e){return vi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(e){Mn(new un("platform-logger",t=>new dv(t),"PRIVATE")),Mn(new un("heartbeat",t=>new Jv(t),"PRIVATE")),$t(no,Nc,e),$t(no,Nc,"esm2017"),$t("fire-js","")}Qv("");function Xo(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}function Yu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zv=Yu,Qu=new ks("auth","Firebase",Yu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new zo("@firebase/auth");function e_(e,...t){Ei.logLevel<=ee.WARN&&Ei.warn(`Auth (${jn}): ${e}`,...t)}function ai(e,...t){Ei.logLevel<=ee.ERROR&&Ei.error(`Auth (${jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,...t){throw Yo(e,...t)}function ut(e,...t){return Yo(e,...t)}function Zu(e,t,n){const s=Object.assign(Object.assign({},Zv()),{[t]:n});return new ks("auth","Firebase",s).create(t,{appName:e.name})}function t_(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&ze(e,"argument-error"),Zu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yo(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Qu.create(e,...t)}function U(e,t,...n){if(!e)throw Yo(t,...n)}function mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ai(t),new Error(t)}function Et(e,t){e||mt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function n_(){return Fc()==="http:"||Fc()==="https:"}function Fc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n_()||Lm()||"connection"in navigator)?navigator.onLine:!0}function i_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,n){this.shortDelay=t,this.longDelay=n,Et(n>t,"Short delay should be less than long delay!"),this.isMobile=Mm()||Um()}get(){return s_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e,t){Et(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Os(3e4,6e4);function $n(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hn(e,t,n,s,i={}){return th(e,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ps(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),eh.fetch()(nh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))})}async function th(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},r_),t);try{const i=new a_(e),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ys(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ys(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ys(e,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Zu(e,u,l);ze(e,u)}}catch(i){if(i instanceof It)throw i;ze(e,"network-request-failed",{message:String(i)})}}async function Ds(e,t,n,s,i={}){const r=await Hn(e,t,n,s,i);return"mfaPendingCredential"in r&&ze(e,"multi-factor-auth-required",{_serverResponse:r}),r}function nh(e,t,n,s){const i=`${t}${n}?${s}`;return e.config.emulator?Qo(e.config,i):`${e.config.apiScheme}://${i}`}class a_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ut(this.auth,"network-request-failed")),o_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ys(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ut(e,t,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(e,t){return Hn(e,"POST","/v1/accounts:delete",t)}async function l_(e,t){return Hn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function u_(e,t=!1){const n=Tt(e),s=await n.getIdToken(t),i=Zo(s);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:us(Tr(i.auth_time)),issuedAtTime:us(Tr(i.iat)),expirationTime:us(Tr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Tr(e){return Number(e)*1e3}function Zo(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hu(n);return i?JSON.parse(i):(ai("Failed to decode base64 JWT payload"),null)}catch(i){return ai("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h_(e){const t=Zo(e);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof It&&f_(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function f_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(e){var t;const n=e.auth,s=await e.getIdToken(),i=await Es(e,l_(n,{idToken:s}));U(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?m_(r.providerUserInfo):[],a=g_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new sh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function p_(e){const t=Tt(e);await wi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function g_(e,t){return[...e.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function m_(e){return e.map(t=>{var{providerId:n}=t,s=Xo(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(e,t){const n=await th(e,{},async()=>{const s=Ps({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=nh(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):h_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await v_(t,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ws;return s&&(U(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t){U(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class an{constructor(t){var{uid:n,auth:s,stsTokenManager:i}=t,r=Xo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new sh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Es(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return u_(this,t)}reload(){return p_(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new an(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await wi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Es(this,c_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,i,r,o,a,c,l,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,B=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:G,isAnonymous:Z,providerData:ue,stsTokenManager:K}=n;U(D&&K,t,"internal-error");const W=ws.fromJSON(this.name,K);U(typeof D=="string",t,"internal-error"),Ct(f,t.name),Ct(p,t.name),U(typeof G=="boolean",t,"internal-error"),U(typeof Z=="boolean",t,"internal-error"),Ct(m,t.name),Ct(b,t.name),Ct(C,t.name),Ct(F,t.name),Ct(k,t.name),Ct(B,t.name);const de=new an({uid:D,auth:t,email:p,emailVerified:G,displayName:f,isAnonymous:Z,photoURL:b,phoneNumber:m,tenantId:C,stsTokenManager:W,createdAt:k,lastLoginAt:B});return ue&&Array.isArray(ue)&&(de.providerData=ue.map(ve=>Object.assign({},ve))),F&&(de._redirectEventId=F),de}static async _fromIdTokenResponse(t,n,s=!1){const i=new ws;i.updateFromServerResponse(n);const r=new an({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await wi(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Map;function vt(e){Et(e instanceof Function,"Expected a class definition");let t=Bc.get(e);return t?(Et(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ih.type="NONE";const jc=ih;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t,n){return`firebase:${e}:${t}:${n}`}class Rn{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ci(this.userKey,i.apiKey,r),this.fullPersistenceKey=ci("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?an._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Rn(vt(jc),t,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||vt(jc);const o=ci(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=an._fromJSON(t,u);l!==r&&(a=f),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Rn(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Rn(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ah(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lh(t))return"Blackberry";if(uh(t))return"Webos";if(ea(t))return"Safari";if((t.includes("chrome/")||oh(t))&&!t.includes("edge/"))return"Chrome";if(ch(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rh(e=ke()){return/firefox\//i.test(e)}function ea(e=ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function oh(e=ke()){return/crios\//i.test(e)}function ah(e=ke()){return/iemobile/i.test(e)}function ch(e=ke()){return/android/i.test(e)}function lh(e=ke()){return/blackberry/i.test(e)}function uh(e=ke()){return/webos/i.test(e)}function zi(e=ke()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function __(e=ke()){var t;return zi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function y_(){return Fm()&&document.documentMode===10}function hh(e=ke()){return zi(e)||ch(e)||uh(e)||lh(e)||/windows phone/i.test(e)||ah(e)}function E_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(e,t=[]){let n;switch(e){case"Browser":n=$c(ke());break;case"Worker":n=`${$c(ke())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${jn}/${s}`}async function dh(e,t){return Hn(e,"GET","/v2/recaptchaConfig",$n(e,t))}function Hc(e){return e!==void 0&&e.enterprise!==void 0}class ph{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function gh(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=i=>{const r=ut("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",w_().appendChild(s)})}function b_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const I_="https://www.google.com/recaptcha/enterprise.js?render=",T_="recaptcha-enterprise";class mh{constructor(t){this.type=T_,this.auth=gn(t)}async verify(t="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{dh(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ph(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Hc(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Hc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gh(I_+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function bi(e,t,n,s=!1){const i=new mh(e);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,n,s,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vc(this),this.idTokenSubscription=new Vc(this),this.beforeStateQueue=new A_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await wi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=i_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Tt(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(t))})}async initializeRecaptchaConfig(){const t=await dh(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ph(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new mh(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ks("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&vt(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,s,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&e_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gn(e){return Tt(e)}class Vc{constructor(t){this.auth=t,this.observer=null,this.addObserver=qm(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(e,t){const n=Jo(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(_i(r,t??{}))return i;ze(i,"already-initialized")}return n.initialize({options:t})}function C_(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function k_(e,t,n){const s=gn(e);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=vh(t),{host:o,port:a}=P_(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||O_()}function vh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function P_(e){const t=vh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Wc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Wc(o)}}}function Wc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function O_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(t){return mt("not implemented")}_linkToIdToken(t,n){return mt("not implemented")}_getReauthenticationResolver(t){return mt("not implemented")}}async function D_(e,t){return Hn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(e,t){return Ds(e,"POST","/v1/accounts:signInWithPassword",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(e,t){return Ds(e,"POST","/v1/accounts:signInWithEmailLink",$n(e,t))}async function N_(e,t){return Ds(e,"POST","/v1/accounts:signInWithEmailLink",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends ta{constructor(t,n,s,i=null){super("password",s),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new bs(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new bs(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await bi(t,s,"signInWithPassword");return Ar(t,i)}else return Ar(t,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await bi(t,s,"signInWithPassword");return Ar(t,r)}else return Promise.reject(i)});case"emailLink":return x_(t,{email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return D_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return N_(t,{idToken:n,email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t){return Ds(e,"POST","/v1/accounts:signInWithIdp",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="http://localhost";class fn extends ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=n,r=Xo(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new fn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Sn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Sn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Sn(t,n)}buildRequest(){const t={requestUri:M_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ps(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U_(e){const t=es(ts(e)).link,n=t?es(ts(t)).deep_link_id:null,s=es(ts(e)).deep_link_id;return(s?es(ts(s)).link:null)||s||n||t||e}class na{constructor(t){var n,s,i,r,o,a;const c=es(ts(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,f=L_((i=c.mode)!==null&&i!==void 0?i:null);U(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=U_(t);try{return new na(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.providerId=Vn.PROVIDER_ID}static credential(t,n){return bs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=na.parseLink(n);return U(s,"argument-error"),bs._fromEmailAndCode(t,s.code,s.tenantId)}}Vn.PROVIDER_ID="password";Vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends sa{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends xs{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return gt.credentialFromTaggedObject(t)}static credentialFromError(t){return gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return gt.credential(n,s)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends xs{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nt.credential(t.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends xs{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Mt.credential(n,s)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(e,t){return Ds(e,"POST","/v1/accounts:signUp",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,i=!1){const r=await an._fromIdTokenResponse(t,s,i),o=qc(s);return new dn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const i=qc(s);return new dn({user:t,providerId:i,_tokenResponse:s,operationType:n})}}function qc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends It{constructor(t,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ii.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,i){return new Ii(t,n,s,i)}}function _h(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(e,r,t,s):r})}async function F_(e,t,n=!1){const s=await Es(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dn._forOperation(e,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(e,t,n=!1){const{auth:s}=e,i="reauthenticate";try{const r=await Es(e,_h(s,i,t,e),n);U(r.idToken,s,"internal-error");const o=Zo(r.idToken);U(o,s,"internal-error");const{sub:a}=o;return U(e.uid===a,s,"user-mismatch"),dn._forOperation(e,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ze(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(e,t,n=!1){const s="signIn",i=await _h(e,s,t),r=await dn._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}async function j_(e,t){return yh(gn(e),t)}async function $_(e,t,n){var s;const i=gn(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await bi(i,r,"signUpPassword");o=Rr(i,l)}else o=Rr(i,r).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await bi(i,r,"signUpPassword");return Rr(i,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await dn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function H_(e,t,n){return j_(Tt(e),Vn.credential(t,n))}function V_(e,t,n,s){return Tt(e).onIdTokenChanged(t,n,s)}function W_(e,t,n){return Tt(e).beforeAuthStateChanged(t,n)}function q_(e,t,n,s){return Tt(e).onAuthStateChanged(t,n,s)}function K_(e){return Tt(e).signOut()}const Ti="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){const e=ke();return ea(e)||zi(e)}const G_=1e3,J_=10;class wh extends Eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=z_()&&E_(),this.fallbackToPolling=hh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&t(n,i,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);y_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,J_):i()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},G_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}wh.type="LOCAL";const X_=wh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends Eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}bh.type="SESSION";const Ih=bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const s=new Gi(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await Y_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=ia("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return window}function Z_(e){ht().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function ey(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ty(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ny(){return Th()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebaseLocalStorageDb",sy=1,Ai="firebaseLocalStorage",Rh="fbase_key";class Ns{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ji(e,t){return e.transaction([Ai],t?"readwrite":"readonly").objectStore(Ai)}function iy(){const e=indexedDB.deleteDatabase(Ah);return new Ns(e).toPromise()}function oo(){const e=indexedDB.open(Ah,sy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Ai,{keyPath:Rh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Ai)?t(s):(s.close(),await iy(),t(await oo()))})})}async function Kc(e,t,n){const s=Ji(e,!0).put({[Rh]:t,value:n});return new Ns(s).toPromise()}async function ry(e,t){const n=Ji(e,!1).get(t),s=await new Ns(n).toPromise();return s===void 0?null:s.value}function zc(e,t){const n=Ji(e,!0).delete(t);return new Ns(n).toPromise()}const oy=800,ay=3;class Sh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>ay)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Th()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gi._getInstance(ny()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ey(),!this.activeServiceWorker)return;this.sender=new Q_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await oo();return await Kc(t,Ti,"1"),await zc(t,Ti),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kc(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>ry(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Ji(i,!1).getAll();return new Ns(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sh.type="LOCAL";const cy=Sh;new Os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(e,t){return t?vt(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends ta{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Sn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Sn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Sn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ly(e){return yh(e.auth,new ra(e),e.bypassAuthState)}function uy(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),B_(n,new ra(e),e.bypassAuthState)}async function hy(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),F_(n,new ra(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,n,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ly;case"linkViaPopup":case"linkViaRedirect":return hy;case"reauthViaPopup":case"reauthViaRedirect":return uy;default:ze(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Os(2e3,1e4);async function dy(e,t,n){const s=gn(e);t_(e,t,sa);const i=Ch(s,n);return new tn(s,"signInViaPopup",t,i).executeNotNull()}class tn extends kh{constructor(t,n,s,i,r){super(t,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const t=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,fy.get())};t()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="pendingRedirect",li=new Map;class gy extends kh{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=li.get(this.auth._key());if(!t){try{const s=await my(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}li.set(this.auth._key(),t)}return this.bypassAuthState||li.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function my(e,t){const n=yy(t),s=_y(e);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function vy(e,t){li.set(e._key(),t)}function _y(e){return vt(e._redirectPersistence)}function yy(e){return ci(py,e.config.apiKey,e.name)}async function Ey(e,t,n=!1){const s=gn(e),i=Ch(s,t),o=await new gy(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=10*60*1e3;class by{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Iy(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!Ph(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gc(t))}saveEventToCache(t){this.cachedEventUids.add(Gc(t)),this.lastProcessedEventTime=Date.now()}}function Gc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ph({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Iy(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ph(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(e,t={}){return Hn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ry=/^https?/;async function Sy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ty(e);for(const n of t)try{if(Cy(n))return}catch{}ze(e,"unauthorized-domain")}function Cy(e){const t=ro(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Ry.test(n))return!1;if(Ay.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Os(3e4,6e4);function Jc(){const e=ht().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Py(e){return new Promise((t,n)=>{var s,i,r;function o(){Jc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jc(),n(ut(e,"network-request-failed"))},timeout:ky.get()})}if(!((i=(s=ht().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=ht().gapi)===null||r===void 0)&&r.load)o();else{const a=b_("iframefcb");return ht()[a]=()=>{gapi.load?o():n(ut(e,"network-request-failed"))},gh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw ui=null,t})}let ui=null;function Oy(e){return ui=ui||Py(e),ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Os(5e3,15e3),xy="__/auth/iframe",Ny="emulator/auth/iframe",My={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ly=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uy(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qo(t,Ny):`https://${e.config.authDomain}/${xy}`,s={apiKey:t.apiKey,appName:e.name,v:jn},i=Ly.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ps(s).slice(1)}`}async function Fy(e){const t=await Oy(e),n=ht().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:Uy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:My,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ut(e,"network-request-failed"),a=ht().setTimeout(()=>{r(o)},Dy.get());function c(){ht().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jy=500,$y=600,Hy="_blank",Vy="http://localhost";class Xc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wy(e,t,n,s=jy,i=$y){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},By),{width:s.toString(),height:i.toString(),top:r,left:o}),l=ke().toLowerCase();n&&(a=oh(l)?Hy:n),rh(l)&&(t=t||Vy,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,b])=>`${p}${m}=${b},`,"");if(__(l)&&a!=="_self")return qy(t||"",a),new Xc(null);const f=window.open(t||"",a,u);U(f,e,"popup-blocked");try{f.focus()}catch{}return new Xc(f)}function qy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="__/auth/handler",zy="emulator/auth/handler",Gy=encodeURIComponent("fac");async function Yc(e,t,n,s,i,r){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:jn,eventId:i};if(t instanceof sa){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Wm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(r||{}))o[u]=f}if(t instanceof xs){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Gy}=${encodeURIComponent(c)}`:"";return`${Jy(e)}?${Ps(a).slice(1)}${l}`}function Jy({config:e}){return e.emulator?Qo(e,zy):`https://${e.authDomain}/${Ky}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="webStorageSupport";class Xy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ih,this._completeRedirectFn=Ey,this._overrideRedirectResult=vy}async _openPopup(t,n,s,i){var r;Et((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Yc(t,n,s,ro(),i);return Wy(t,o,ia())}async _openRedirect(t,n,s,i){await this._originValidation(t);const r=await Yc(t,n,s,ro(),i);return Z_(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Et(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await Fy(t),s=new by(t);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Sr,{type:Sr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Sr];o!==void 0&&n(!!o),ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return hh()||ea()||zi()}}const Yy=Xy;var Qc="@firebase/auth",Zc="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function e0(e){Mn(new un("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),U(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fh(e)},l=new R_(s,i,r,c);return C_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Mn(new un("auth-internal",t=>{const n=gn(t.getProvider("auth").getImmediate());return(s=>new Qy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(Qc,Zc,Zy(e)),$t(Qc,Zc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=5*60,n0=Wu("authIdTokenMaxAge")||t0;let el=null;const s0=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>n0)return;const i=n==null?void 0:n.token;el!==i&&(el=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function i0(e=Gu()){const t=Jo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=S_(e,{popupRedirectResolver:Yy,persistence:[cy,X_,Ih]}),s=Wu("authTokenSyncURL");if(s){const r=s0(s);W_(n,r,()=>r(n.currentUser)),V_(n,o=>r(o))}const i=Vu("auth");return i&&k_(n,`http://${i}`),n}e0("Browser");var r0="firebase",o0="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(r0,o0,"app");var a0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,oa=oa||{},j=a0||self;function Ri(){}function Xi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ms(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function c0(e){return Object.prototype.hasOwnProperty.call(e,Cr)&&e[Cr]||(e[Cr]=++l0)}var Cr="closure_uid_"+(1e9*Math.random()>>>0),l0=0;function u0(e,t,n){return e.call.apply(e.bind,arguments)}function h0(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Se(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=u0:Se=h0,Se.apply(null,arguments)}function Qs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Te(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Vt(){this.s=this.s,this.o=this.o}var f0=0;Vt.prototype.s=!1;Vt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),f0!=0)&&c0(this)};Vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function aa(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function tl(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Xi(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var d0=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{j.addEventListener("test",Ri,t),j.removeEventListener("test",Ri,t)}catch{}return e}();function Si(e){return/^[\s\xa0]*$/.test(e)}var nl=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function kr(e,t){return e<t?-1:e>t?1:0}function Yi(){var e=j.navigator;return e&&(e=e.userAgent)?e:""}function ct(e){return Yi().indexOf(e)!=-1}function ca(e){return ca[" "](e),e}ca[" "]=Ri;function p0(e){var t=v0;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var g0=ct("Opera"),Is=ct("Trident")||ct("MSIE"),Dh=ct("Edge"),ao=Dh||Is,xh=ct("Gecko")&&!(Yi().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),m0=Yi().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function Nh(){var e=j.document;return e?e.documentMode:void 0}var co;e:{var Pr="",Or=function(){var e=Yi();if(xh)return/rv:([^\);]+)(\)|;)/.exec(e);if(Dh)return/Edge\/([\d\.]+)/.exec(e);if(Is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(m0)return/WebKit\/(\S+)/.exec(e);if(g0)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Or&&(Pr=Or?Or[1]:""),Is){var Dr=Nh();if(Dr!=null&&Dr>parseFloat(Pr)){co=String(Dr);break e}}co=Pr}var v0={};function _0(){return p0(function(){let e=0;const t=nl(String(co)).split("."),n=nl("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=kr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||kr(i[2].length==0,r[2].length==0)||kr(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}j.document&&Is&&Nh();function Ts(e,t){if(Ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(xh){e:{try{ca(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:y0[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ts.X.h.call(this)}}Te(Ts,Ce);var y0={2:"touch",3:"pen",4:"mouse"};Ts.prototype.h=function(){Ts.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),E0=0;function w0(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++E0,this.ba=this.ea=!1}function Qi(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function la(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Mh(e){const t={};for(const n in e)t[n]=e[n];return t}const sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lh(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<sl.length;r++)n=sl[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Zi(e){this.src=e,this.g={},this.h=0}Zi.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=uo(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new w0(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function lo(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Oh(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Qi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function uo(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ua="closure_lm_"+(1e6*Math.random()|0),xr={};function Uh(e,t,n,s,i){if(s&&s.once)return Bh(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Uh(e,t[r],n,s,i);return null}return n=da(n),e&&e[Ls]?e.N(t,n,Ms(s)?!!s.capture:!!s,i):Fh(e,t,n,!1,s,i)}function Fh(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Ms(i)?!!i.capture:!!i,a=fa(e);if(a||(e[ua]=a=new Zi(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=b0(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)d0||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent($h(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function b0(){function e(n){return t.call(e.src,e.listener,n)}const t=I0;return e}function Bh(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Bh(e,t[r],n,s,i);return null}return n=da(n),e&&e[Ls]?e.O(t,n,Ms(s)?!!s.capture:!!s,i):Fh(e,t,n,!0,s,i)}function jh(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)jh(e,t[r],n,s,i);else s=Ms(s)?!!s.capture:!!s,n=da(n),e&&e[Ls]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=uo(r,n,s,i),-1<n&&(Qi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=fa(e))&&(t=e.g[t.toString()],e=-1,t&&(e=uo(t,n,s,i)),(n=-1<e?t[e]:null)&&ha(n))}function ha(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Ls])lo(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent($h(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=fa(t))?(lo(n,e),n.h==0&&(n.src=null,t[ua]=null)):Qi(e)}}}function $h(e){return e in xr?xr[e]:xr[e]="on"+e}function I0(e,t){if(e.ba)e=!0;else{t=new Ts(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ha(e),e=n.call(s,t)}return e}function fa(e){return e=e[ua],e instanceof Zi?e:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(e){return typeof e=="function"?e:(e[Nr]||(e[Nr]=function(t){return e.handleEvent(t)}),e[Nr])}function be(){Vt.call(this),this.i=new Zi(this),this.P=this,this.I=null}Te(be,Vt);be.prototype[Ls]=!0;be.prototype.removeEventListener=function(e,t,n,s){jh(this,e,t,n,s)};function Ie(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Ce(t,e);else if(t instanceof Ce)t.target=t.target||e;else{var i=t;t=new Ce(s,e),Lh(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Zs(o,s,!0,t)&&i}if(o=t.g=e,i=Zs(o,s,!0,t)&&i,i=Zs(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Zs(o,s,!1,t)&&i}be.prototype.M=function(){if(be.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Qi(n[s]);delete e.g[t],e.h--}}this.I=null};be.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};be.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Zs(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&lo(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var pa=j.JSON.stringify;function T0(){var e=Wh;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class A0{constructor(){this.h=this.g=null}add(t,n){const s=Hh.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Hh=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new R0,e=>e.reset());class R0{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function S0(e){j.setTimeout(()=>{throw e},0)}function Vh(e,t){ho||C0(),fo||(ho(),fo=!0),Wh.add(e,t)}var ho;function C0(){var e=j.Promise.resolve(void 0);ho=function(){e.then(k0)}}var fo=!1,Wh=new A0;function k0(){for(var e;e=T0();){try{e.h.call(e.g)}catch(n){S0(n)}var t=Hh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}fo=!1}function er(e,t){be.call(this),this.h=e||1,this.g=t||j,this.j=Se(this.lb,this),this.l=Date.now()}Te(er,be);O=er.prototype;O.ca=!1;O.R=null;O.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(ga(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ga(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}O.M=function(){er.X.M.call(this),ga(this),delete this.g};function ma(e,t,n){if(typeof e=="function")n&&(e=Se(e,n));else if(e&&typeof e.handleEvent=="function")e=Se(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:j.setTimeout(e,t||0)}function qh(e){e.g=ma(()=>{e.g=null,e.i&&(e.i=!1,qh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class P0 extends Vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qh(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(e){Vt.call(this),this.h=e,this.g={}}Te(As,Vt);var il=[];function Kh(e,t,n,s){Array.isArray(n)||(n&&(il[0]=n.toString()),n=il);for(var i=0;i<n.length;i++){var r=Uh(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function zh(e){la(e.g,function(t,n){this.g.hasOwnProperty(n)&&ha(t)},e),e.g={}}As.prototype.M=function(){As.X.M.call(this),zh(this)};As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tr(){this.g=!0}tr.prototype.Aa=function(){this.g=!1};function O0(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function D0(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function bn(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+N0(e,n)+(s?" "+s:"")})}function x0(e,t){e.info(function(){return"TIMEOUT: "+t})}tr.prototype.info=function(){};function N0(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pa(n)}catch{return t}}var Wn={},rl=null;function va(){return rl=rl||new be}Wn.Pa="serverreachability";function Gh(e){Ce.call(this,Wn.Pa,e)}Te(Gh,Ce);function Rs(e){const t=va();Ie(t,new Gh(t))}Wn.STAT_EVENT="statevent";function Jh(e,t){Ce.call(this,Wn.STAT_EVENT,e),this.stat=t}Te(Jh,Ce);function Oe(e){const t=va();Ie(t,new Jh(t,e))}Wn.Qa="timingevent";function Xh(e,t){Ce.call(this,Wn.Qa,e),this.size=t}Te(Xh,Ce);function Us(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){e()},t)}var _a={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},M0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ya(){}ya.prototype.h=null;function ol(e){return e.h||(e.h=e.i())}function L0(){}var Fs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ea(){Ce.call(this,"d")}Te(Ea,Ce);function wa(){Ce.call(this,"c")}Te(wa,Ce);var po;function nr(){}Te(nr,ya);nr.prototype.g=function(){return new XMLHttpRequest};nr.prototype.i=function(){return{}};po=new nr;function Bs(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new As(this),this.O=U0,e=ao?125:void 0,this.T=new er(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Yh}function Yh(){this.i=null,this.g="",this.h=!1}var U0=45e3,go={},Ci={};O=Bs.prototype;O.setTimeout=function(e){this.O=e};function mo(e,t,n){e.K=1,e.v=ir(wt(t)),e.s=n,e.P=!0,Qh(e,null)}function Qh(e,t){e.F=Date.now(),js(e),e.A=wt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),af(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Yh,e.g=Cf(e.l,n?t:null,!e.s),0<e.N&&(e.L=new P0(Se(e.La,e,e.g),e.N)),Kh(e.S,e.g,"readystatechange",e.ib),t=e.H?Mh(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Rs(),O0(e.j,e.u,e.A,e.m,e.U,e.s)}O.ib=function(e){e=e.target;const t=this.L;t&&_t(e)==3?t.l():this.La(e)};O.La=function(e){try{if(e==this.g)e:{const u=_t(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||ao||this.g&&(this.h.h||this.g.fa()||ul(this.g)))){this.I||u!=4||t==7||(t==8||0>=f?Rs(3):Rs(2)),sr(this);var n=this.g.aa();this.Y=n;t:if(Zh(this)){var s=ul(this.g);e="";var i=s.length,r=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),hs(this);var o="";break t}this.h.i=new j.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,D0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Si(a)){var l=a;break t}}l=null}if(n=l)bn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vo(this,n);else{this.i=!1,this.o=3,Oe(12),nn(this),hs(this);break e}}this.P?(ef(this,u,o),ao&&this.i&&u==3&&(Kh(this.S,this.T,"tick",this.hb),this.T.start())):(bn(this.j,this.m,o,null),vo(this,o)),u==4&&nn(this),this.i&&!this.I&&(u==4?Tf(this.l,this):(this.i=!1,js(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Oe(12)):(this.o=0,Oe(13)),nn(this),hs(this)}}}catch{}finally{}};function Zh(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function ef(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=F0(e,n),i==Ci){t==4&&(e.o=4,Oe(14),s=!1),bn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==go){e.o=4,Oe(15),bn(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else bn(e.j,e.m,i,null),vo(e,i);Zh(e)&&i!=Ci&&i!=go&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Oe(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ca(t),t.K=!0,Oe(11))):(bn(e.j,e.m,n,"[Invalid Chunked Response]"),nn(e),hs(e))}O.hb=function(){if(this.g){var e=_t(this.g),t=this.g.fa();this.C<t.length&&(sr(this),ef(this,e,t),this.i&&e!=4&&js(this))}};function F0(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ci:(n=Number(t.substring(n,s)),isNaN(n)?go:(s+=1,s+n>t.length?Ci:(t=t.substr(s,n),e.C=s+n,t)))}O.cancel=function(){this.I=!0,nn(this)};function js(e){e.V=Date.now()+e.O,tf(e,e.O)}function tf(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Us(Se(e.gb,e),t)}function sr(e){e.B&&(j.clearTimeout(e.B),e.B=null)}O.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(x0(this.j,this.A),this.K!=2&&(Rs(),Oe(17)),nn(this),this.o=2,hs(this)):tf(this,this.V-e)};function hs(e){e.l.G==0||e.I||Tf(e.l,e)}function nn(e){sr(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ga(e.T),zh(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vo(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||_o(n.h,e))){if(!e.J&&_o(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Oi(n),cr(n);else break e;Sa(n),Oe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Us(Se(n.cb,n),6e3));if(1>=uf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else sn(n,11)}else if((e.J||n.g==e)&&Oi(n),!Si(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const b=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var r=s.h;r.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ba(r,r.h),r.h=null))}if(s.D){const C=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.za=C,ce(s.F,s.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Sf(s,s.H?s.ka:null,s.V),o.J){hf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(sr(a),js(a)),s.g=o}else bf(s);0<n.i.length&&lr(n)}else l[0]!="stop"&&l[0]!="close"||sn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sn(n,7):Ra(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Rs(4)}catch{}}function B0(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xi(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function j0(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Xi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function nf(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=j0(e),s=B0(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var sf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $0(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function cn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof cn){this.h=t!==void 0?t:e.h,ki(this,e.j),this.s=e.s,this.g=e.g,Pi(this,e.m),this.l=e.l,t=e.i;var n=new Ss;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),al(this,n),this.o=e.o}else e&&(n=String(e).match(sf))?(this.h=!!t,ki(this,n[1]||"",!0),this.s=ns(n[2]||""),this.g=ns(n[3]||"",!0),Pi(this,n[4]),this.l=ns(n[5]||"",!0),al(this,n[6]||"",!0),this.o=ns(n[7]||"")):(this.h=!!t,this.i=new Ss(null,this.h))}cn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ss(t,cl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ss(t,cl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ss(n,n.charAt(0)=="/"?W0:V0,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ss(n,K0)),e.join("")};function wt(e){return new cn(e)}function ki(e,t,n){e.j=n?ns(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function al(e,t,n){t instanceof Ss?(e.i=t,z0(e.i,e.h)):(n||(t=ss(t,q0)),e.i=new Ss(t,e.h))}function ce(e,t,n){e.i.set(t,n)}function ir(e){return ce(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ns(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ss(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,H0),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function H0(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var cl=/[#\/\?@]/g,V0=/[#\?:]/g,W0=/[#\?]/g,q0=/[#\?@]/g,K0=/#/g;function Ss(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Wt(e){e.g||(e.g=new Map,e.h=0,e.i&&$0(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=Ss.prototype;O.add=function(e,t){Wt(this),this.i=null,e=qn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function rf(e,t){Wt(e),t=qn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function of(e,t){return Wt(e),t=qn(e,t),e.g.has(t)}O.forEach=function(e,t){Wt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};O.oa=function(){Wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};O.W=function(e){Wt(this);let t=[];if(typeof e=="string")of(this,e)&&(t=t.concat(this.g.get(qn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};O.set=function(e,t){return Wt(this),this.i=null,e=qn(this,e),of(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function af(e,t,n){rf(e,t),0<n.length&&(e.i=null,e.g.set(qn(e,t),aa(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function qn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function z0(e,t){t&&!e.j&&(Wt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(rf(this,s),af(this,i,n))},e)),e.j=t}var G0=class{constructor(e,t){this.h=e,this.g=t}};function cf(e){this.l=e||J0,j.PerformanceNavigationTiming?(e=j.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(j.g&&j.g.Ga&&j.g.Ga()&&j.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var J0=10;function lf(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function uf(e){return e.h?1:e.g?e.g.size:0}function _o(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ba(e,t){e.g?e.g.add(t):e.h=t}function hf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}cf.prototype.cancel=function(){if(this.i=ff(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ff(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return aa(e.i)}function Ia(){}Ia.prototype.stringify=function(e){return j.JSON.stringify(e,void 0)};Ia.prototype.parse=function(e){return j.JSON.parse(e,void 0)};function X0(){this.g=new Ia}function Y0(e,t,n){const s=n||"";try{nf(e,function(i,r){let o=i;Ms(i)&&(o=pa(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Q0(e,t){const n=new tr;if(j.Image){const s=new Image;s.onload=Qs(ei,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Qs(ei,n,s,"TestLoadImage: error",!1,t),s.onabort=Qs(ei,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Qs(ei,n,s,"TestLoadImage: timeout",!1,t),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ei(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function rr(e){this.l=e.ac||null,this.j=e.jb||!1}Te(rr,ya);rr.prototype.g=function(){return new or(this.l,this.j)};rr.prototype.i=function(e){return function(){return e}}({});function or(e,t){be.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ta,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Te(or,be);var Ta=0;O=or.prototype;O.open=function(e,t){if(this.readyState!=Ta)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cs(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||j).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=Ta};O.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;df(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function df(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}O.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$s(this):Cs(this),this.readyState==3&&df(this)}};O.Va=function(e){this.g&&(this.response=this.responseText=e,$s(this))};O.Ua=function(e){this.g&&(this.response=e,$s(this))};O.ga=function(){this.g&&$s(this)};function $s(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cs(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Cs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Z0=j.JSON.parse;function me(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pf,this.K=this.L=!1}Te(me,be);var pf="",eE=/^https?$/i,tE=["POST","PUT"];O=me.prototype;O.Ka=function(e){this.L=e};O.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():po.g(),this.C=this.u?ol(this.u):ol(po),this.g.onreadystatechange=Se(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){ll(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=j.FormData&&e instanceof j.FormData,!(0<=Oh(tE,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vf(this),0<this.B&&((this.K=nE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.qa,this)):this.A=ma(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){ll(this,r)}};function nE(e){return Is&&_0()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}O.qa=function(){typeof oa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))};function ll(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,gf(e),ar(e)}function gf(e){e.D||(e.D=!0,Ie(e,"complete"),Ie(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ie(this,"complete"),Ie(this,"abort"),ar(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ar(this,!0)),me.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?mf(this):this.fb())};O.fb=function(){mf(this)};function mf(e){if(e.h&&typeof oa<"u"&&(!e.C[1]||_t(e)!=4||e.aa()!=2)){if(e.v&&_t(e)==4)ma(e.Ha,0,e);else if(Ie(e,"readystatechange"),_t(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(sf)[1]||null;if(!i&&j.self&&j.self.location){var r=j.self.location.protocol;i=r.substr(0,r.length-1)}s=!eE.test(i?i.toLowerCase():"")}n=s}if(n)Ie(e,"complete"),Ie(e,"success");else{e.m=6;try{var o=2<_t(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",gf(e)}}finally{ar(e)}}}}function ar(e,t){if(e.g){vf(e);const n=e.g,s=e.C[0]?Ri:null;e.g=null,e.C=null,t||Ie(e,"ready");try{n.onreadystatechange=s}catch{}}}function vf(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(j.clearTimeout(e.A),e.A=null)}function _t(e){return e.g?e.g.readyState:0}O.aa=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Z0(t)}};function ul(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case pf:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _f(e){let t="";return la(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Aa(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=_f(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ce(e,t,n))}function Xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function yf(e){this.Ca=0,this.i=[],this.j=new tr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xn("baseRetryDelayMs",5e3,e),this.bb=Xn("retryDelaySeedMs",1e4,e),this.$a=Xn("forwardChannelMaxRetries",2,e),this.ta=Xn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new cf(e&&e.concurrentRequestLimit),this.Fa=new X0,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=yf.prototype;O.ma=8;O.G=1;function Ra(e){if(Ef(e),e.G==3){var t=e.U++,n=wt(e.F);ce(n,"SID",e.I),ce(n,"RID",t),ce(n,"TYPE","terminate"),Hs(e,n),t=new Bs(e,e.j,t,void 0),t.K=2,t.v=ir(wt(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(t.v.toString(),"")),!n&&j.Image&&(new Image().src=t.v,n=!0),n||(t.g=Cf(t.l,null),t.g.da(t.v)),t.F=Date.now(),js(t)}Rf(e)}function cr(e){e.g&&(Ca(e),e.g.cancel(),e.g=null)}function Ef(e){cr(e),e.u&&(j.clearTimeout(e.u),e.u=null),Oi(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&j.clearTimeout(e.m),e.m=null)}function lr(e){lf(e.h)||e.m||(e.m=!0,Vh(e.Ja,e),e.C=0)}function sE(e,t){return uf(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Us(Se(e.Ja,e,t),Af(e,e.C)),e.C++,!0)}O.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Bs(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Mh(r),Lh(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=wf(this,i,t),n=wt(this.F),ce(n,"RID",e),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Hs(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(_f(r)))+"&"+t:this.o&&Aa(n,this.o,r)),ba(this.h,i),this.Ya&&ce(n,"TYPE","init"),this.O?(ce(n,"$req",t),ce(n,"SID","null"),i.Z=!0,mo(i,n,null)):mo(i,n,t),this.G=2}}else this.G==3&&(e?hl(this,e):this.i.length==0||lf(this.h)||hl(this))};function hl(e,t){var n;t?n=t.m:n=e.U++;const s=wt(e.F);ce(s,"SID",e.I),ce(s,"RID",n),ce(s,"AID",e.T),Hs(e,s),e.o&&e.s&&Aa(s,e.o,e.s),n=new Bs(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=wf(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ba(e.h,n),mo(n,s,t)}function Hs(e,t){e.ia&&la(e.ia,function(n,s){ce(t,s,n)}),e.l&&nf({},function(n,s){ce(t,s,n)})}function wf(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Se(e.l.Ra,e.l,e):null;e:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Y0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,s}function bf(e){e.g||e.u||(e.Z=1,Vh(e.Ia,e),e.A=0)}function Sa(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Us(Se(e.Ia,e),Af(e,e.A)),e.A++,!0)}O.Ia=function(){if(this.u=null,If(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Us(Se(this.eb,this),e)}};O.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Oe(10),cr(this),If(this))};function Ca(e){e.B!=null&&(j.clearTimeout(e.B),e.B=null)}function If(e){e.g=new Bs(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=wt(e.sa);ce(t,"RID","rpc"),ce(t,"SID",e.I),ce(t,"CI",e.L?"0":"1"),ce(t,"AID",e.T),ce(t,"TYPE","xmlhttp"),Hs(e,t),e.o&&e.s&&Aa(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ir(wt(t)),n.s=null,n.P=!0,Qh(n,e)}O.cb=function(){this.v!=null&&(this.v=null,cr(this),Sa(this),Oe(19))};function Oi(e){e.v!=null&&(j.clearTimeout(e.v),e.v=null)}function Tf(e,t){var n=null;if(e.g==t){Oi(e),Ca(e),e.g=null;var s=2}else if(_o(e.h,t))n=t.D,hf(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=va(),Ie(s,new Xh(s,n)),lr(e)}else bf(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&sE(e,t)||s==2&&Sa(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:sn(e,5);break;case 4:sn(e,10);break;case 3:sn(e,6);break;default:sn(e,2)}}}function Af(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function sn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Se(e.kb,e);n||(n=new cn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||ki(n,"https"),ir(n)),Q0(n.toString(),s)}else Oe(2);e.G=0,e.l&&e.l.va(t),Rf(e),Ef(e)}O.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Rf(e){if(e.G=0,e.la=[],e.l){const t=ff(e.h);(t.length!=0||e.i.length!=0)&&(tl(e.la,t),tl(e.la,e.i),e.h.i.length=0,aa(e.i),e.i.length=0),e.l.ua()}}function Sf(e,t,n){var s=n instanceof cn?wt(n):new cn(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Pi(s,s.m);else{var i=j.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new cn(null,void 0);s&&ki(r,s),t&&(r.g=t),i&&Pi(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&ce(s,n,t),ce(s,"VER",e.ma),Hs(e,s),s}function Cf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new me(new rr({jb:!0})):new me(e.ra),t.Ka(e.H),t}function kf(){}O=kf.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Ra=function(){};function Ge(e,t){be.call(this),this.g=new yf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Si(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Si(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Kn(this)}Te(Ge,be);Ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Oe(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Sf(e,null,e.V),lr(e)};Ge.prototype.close=function(){Ra(this.g)};Ge.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=pa(e),e=n);t.i.push(new G0(t.ab++,e)),t.G==3&&lr(t)};Ge.prototype.M=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,Ge.X.M.call(this)};function Pf(e){Ea.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Te(Pf,Ea);function Of(){wa.call(this),this.status=1}Te(Of,wa);function Kn(e){this.g=e}Te(Kn,kf);Kn.prototype.xa=function(){Ie(this.g,"a")};Kn.prototype.wa=function(e){Ie(this.g,new Pf(e))};Kn.prototype.va=function(e){Ie(this.g,new Of)};Kn.prototype.ua=function(){Ie(this.g,"b")};Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;_a.NO_ERROR=0;_a.TIMEOUT=8;_a.HTTP_ERROR=6;M0.COMPLETE="complete";L0.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";be.prototype.listen=be.prototype.N;me.prototype.listenOnce=me.prototype.O;me.prototype.getLastError=me.prototype.Oa;me.prototype.getLastErrorCode=me.prototype.Ea;me.prototype.getStatus=me.prototype.aa;me.prototype.getResponseJson=me.prototype.Sa;me.prototype.getResponseText=me.prototype.fa;me.prototype.send=me.prototype.da;me.prototype.setWithCredentials=me.prototype.Ka;const fl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new zo("@firebase/firestore");function Ve(e,...t){if(Ln.logLevel<=ee.DEBUG){const n=t.map(Pa);Ln.debug(`Firestore (${Vs}): ${e}`,...n)}}function ka(e,...t){if(Ln.logLevel<=ee.ERROR){const n=t.map(Pa);Ln.error(`Firestore (${Vs}): ${e}`,...n)}}function iE(e,...t){if(Ln.logLevel<=ee.WARN){const n=t.map(Pa);Ln.warn(`Firestore (${Vs}): ${e}`,...n)}}function Pa(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e="Unexpected state"){const t=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+e;throw ka(t),new Error(t)}function yo(e,t){e||Oa()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qe extends It{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class oE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aE{constructor(t){this.t=t,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Cn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Cn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(Ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(yo(typeof s.accessToken=="string"),new Df(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return yo(t===null||typeof t=="string"),new Ae(t)}}class cE{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class lE{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new cE(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hE{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&Ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Ve("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{Ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):Ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(yo(typeof n.token=="string"),this.T=n.token,new uE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=fE(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function xf(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Di{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Di&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dl,J;(J=dl||(dl={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";function Mr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&Ve("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Da(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qe(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mE(e,t){if(ka("AsyncQueue",`${t}: ${e}`),xf(e))return new qe(We.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=dE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Ve("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Ve("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qe(We.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=mE(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map;function _E(e,t,n,s){if(t===!0&&s===!0)throw new qe(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yE(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Oa()}function EE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qe(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yE(e);throw new qe(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new qe(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new qe(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,_E("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new qe(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new qe(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rE;switch(n.type){case"firstParty":return new lE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new qe(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=pl.get(t);n&&(Ve("ComponentProvider","Removing Datastore"),pl.delete(t),n.terminate())}(this),Promise.resolve()}}function wE(e,t,n,s={}){var i;const r=(e=EE(e,Nf))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&iE("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ae.MOCK_USER;else{o=Nm(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new qe(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ae(c)}e._authCredentials=new oE(new Df(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new gE(this,"async_queue_retry"),this.qc=()=>{const n=Mr();n&&Ve("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=Mr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=Mr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Cn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!xf(t))throw t;Ve("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ka("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const i=Da.createAndSchedule(this,t,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&Oa()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class IE extends Nf{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new bE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||AE(this),this._firestoreClient.terminate()}}function TE(e,t){const n=typeof e=="object"?e:Gu(),s=typeof e=="string"?e:t||"(default)",i=Jo(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Om("firestore");r&&wE(i,...r)}return i}function AE(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,c,l){return new pE(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new vE(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){Vs=n})(jn),Mn(new un("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new IE(new aE(n.getProvider("auth-internal")),new hE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new qe(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),$t(fl,"3.10.1",e),$t(fl,"3.10.1","esm2017")})();const RE={apiKey:"AIzaSyBG28G33SnwIt3qVJqV6-jgL8uB5mf5O44",authDomain:"devclicker-f1ab9.firebaseapp.com",databaseURL:"https://devclicker-f1ab9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"devclicker-f1ab9",storageBucket:"devclicker-f1ab9.appspot.com",messagingSenderId:"783794899095",appId:"1:783794899095:web:f35ca861315dab000dc1d2"},Mf=zu(RE);TE(Mf);const Yn=i0(Mf),SE="modulepreload",CE=function(e){return"/"+e},ml={},Gt=function(t,n,s){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=CE(r),r in ml)return;ml[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":SE,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Eo=bm({history:jg(),routes:[{path:"/",name:"code",component:()=>Gt(()=>import("./CodeView-655d2e87.js"),["assets/CodeView-655d2e87.js","assets/node-platine-69c67adb.js"])},{path:"/missions",name:"missions",component:()=>Gt(()=>import("./MissionsView-eb614d35.js"),["assets/MissionsView-eb614d35.js","assets/MissionsView-d03ff907.css"])},{path:"/investissement",name:"investissement",component:()=>Gt(()=>import("./InvestView-b1e7a0eb.js"),[])},{path:"/entreprise",name:"entreprise",component:()=>Gt(()=>import("./EntrepriseView-5603f841.js"),[])},{path:"/trophees",name:"trophees",component:()=>Gt(()=>import("./TrophiesView-da3afb34.js"),["assets/TrophiesView-da3afb34.js","assets/node-platine-69c67adb.js"])},{path:"/shopping",name:"shopping",component:()=>Gt(()=>import("./ShoppingView-2d8cb9c2.js"),[])},{path:"/auth",name:"auth",component:()=>Gt(()=>import("./AuthView-85c5839c.js"),[])}]}),Lf=wu({id:"auth",state:()=>({user:{},auth:!1}),actions:{init(){q_(Yn,e=>{e?(this.user.id=e.id,this.user.email=e.email,this.auth=!0):(this.user={},this.auth=!1,Eo.push("/"))})},registerUser(e){$_(Yn,e.email,e.password).then(t=>{}).catch(t=>{console.log("error.message: ",t.message)})},loginUser(e){H_(Yn,e.email,e.password).then(t=>{}).catch(t=>{console.log("error.message: ",t.message)})},loginUserWithGoogle(){const e=new gt;dy(Yn,e).then(t=>{}).catch(t=>{console.log(t.message)})},logoutUser(){K_(Yn).then(()=>{console.log("User signed out"),Eo.push("/")}).catch(e=>{console.log(e.message)})}}}),Uf=wu({id:"data",state:()=>({contentCardsFront:[{id:1,sec:!1,name:"HTML",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681859649/skill-icons_html_usbxmc.svg",effect:"ajoute +1 au clic",expEffect:1,description:"Langage de balisage utilisé pour créer des pages Web.",price:10,priceIncrease:10,quantity:0},{id:2,sec:!0,name:"CSS",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_css_jippit.svg",effect:"ajoute +1 par seconde",expEffect:1,description:"Langage de balisage utilisé pour créer des pages Web.",price:100,priceIncrease:15,quantity:0},{id:3,sec:!1,name:"JavaScript",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_javascript_ymxsma.svg",effect:"ajoute +10 au clic",expEffect:10,description:"Langage de balisage utilisé pour créer des pages Web.",price:1e3,priceIncrease:1e3,quantity:0},{id:4,sec:!0,name:"Tailwind CSS",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_tailwindcss_bpyogi.svg",effect:"ajoute +100 par seconde",expEffect:100,description:"Framework CSS qui fournit une bibliothèque de classes prêtes à l'emploi pour faciliter la mise en forme des pages Web.",price:5e3,priceIncrease:5e3,quantity:0},{id:5,sec:!1,name:"Vue.js",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_vuejs_t5pp0w.svg",effect:"ajoute +1 k par clic",expEffect:1e3,description:"Framework JavaScript permettant de créer des applications Web interactives et dynamiques.",price:5e4,priceIncrease:1e4,quantity:0},{id:6,sec:!1,name:"Vite",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_vite_xxscpc.svg",effect:"ajoute +5 k par clic",expEffect:5e3,description:"Outil de construction rapide pour les applications Web modernes, basé sur JavaScript.",price:5e5,priceIncrease:5e5,quantity:0}],contentCardsBack:[{id:1,sec:!1,name:"Node.js",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_nodejs_vhmhcm.svg",effect:"ajoute +10 k au clic",expEffect:1e4,description:"Environnement d'exécution JavaScript côté serveur, qui permet d'exécuter du code JavaScript en dehors du navigateur.",price:1e6,priceIncrease:5e5,quantity:0},{id:2,sec:!1,name:"Express.js",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860540/skill-icons_expressjs_ndpwpu.svg",effect:"ajoute +50 k par clic",expEffect:5e4,description:"Langage de balisage utilisé pour créer des pages Web.",price:5e6,priceIncrease:5e6,quantity:0},{id:3,sec:!0,name:"Prisma",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_prisma_xi5xdp.svg",effect:"ajoute +500 k au seconde",expEffect:5e5,description:"Langage de balisage utilisé pour créer des pages Web.",price:5e7,priceIncrease:5e7,quantity:0},{id:4,sec:!1,name:"MongoDB",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_mongodb_ye9ja4.svg",effect:"ajoute +1 M par clic",expEffect:1e6,description:"Langage de balisage utilisé pour créer des pages Web.",price:1e8,priceIncrease:1e8,quantity:0},{id:5,sec:!0,name:"Docker",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_docker_jituey.svg",effect:"ajoute +10 M par seconde",expEffect:1e7,description:"Langage de balisage utilisé pour créer des pages Web.",price:5e8,priceIncrease:5e8,quantity:0},{id:6,sec:!1,name:"Vercel",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_vercel_mdqqa3.svg",effect:"ajoute +50 M par clic",expEffect:5e7,description:"Une plateforme cloud qui permet de déployer et de gérer des applications Web statiques et dynamiques, ainsi que des fonctions serverless.",price:5e9,priceIncrease:5e9,quantity:0}],contentCardsMissions:[{id:1,name:"Unito",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg",description:"Création d'un site vitrine pour un plombier.",salaire:50,ifApply1:!1,requires:["HTML","CSS","JavaScript"]},{id:2,name:"Devwork",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/devwork_n7mvch.svg",description:"Création d'une Web App de gestion de projet.",salaire:150,ifApply2:!1,requires:["JavaScript","TailwindCSS","Vue.js"]},{id:3,name:"Crea",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/crea_hbrcko.svg",description:"Création d'un dashboard pour un site e-commerce.",salaire:200,ifApply3:!1,requires:["TailwindCSS","Vue.js","Vite"]},{id:4,name:"Devwork",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/devwork_n7mvch.svg",description:"Refonte d'une Web App de gestion des stocks.",salaire:500,ifApply4:!1,requires:["Node.js","Express.js","Prisma"]},{id:5,name:"Mars",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/mars_f5ar4j.svg",description:"Création d'une REST API pour une application mobile.",salaire:1e3,ifApply5:!1,requires:["Express.js","Prisma","MongoDB"]},{id:6,name:"Unito",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg",description:"Création d'une web-app de partage de données en grande quantité.",salaire:5e3,ifApply6:!1,requires:["MongoDB","Docker","Vercel"]}],workplaces:[{id:1,name:"Petit bureau",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/workplace_ep64rc.svg",description:"Un petit bureau dans une cave, assez délabré et petit. (5 employés)",price:"100 k "},{id:2,name:"Moyen Bureau",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/workplace_ep64rc.svg",description:"Un bureau de taille moyenne, avec un peu plus de confort. (50 employés)",price:"500 k "},{id:3,name:"Grand Bureau",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/workplace_ep64rc.svg",description:"Un grand bureau, avec une belle vue sur la ville. (100 employés)",price:"2,5 M "}],servers:[{id:1,name:"Serveurs d'occasion",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/server_hqqiqd.svg",description:"A beaucoup servi à d'autres entreprises.",price:"50 k "},{id:2,name:"Serveurs neufs",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/server_hqqiqd.svg",description:"Des serveurs neufs, qui n'ont jamais servi.",price:"100 k "},{id:3,name:"Serveurs surpuissants",image:"https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/server_hqqiqd.svg",description:"Concus pour écraser la concurence.",price:"1 M "}],exp:1,clickTotal:0,expAdd:1,expAddSec:0,dataContentLoaded:!1,ifFront:!0,ifBack:!1,whatStack:"Front-end",money:1e5,progressValue1:1,progressValue2:1,progressValue3:1,progressValue4:1,progressValue5:1,progressValue6:1,ifApply1:!0,ifApply2:!0,ifApply3:!0,ifApply4:!0,ifApply5:!0,ifApply6:!0,UTOstock:0,UTOprice:100,MRSstock:0,MRSprice:400,CRAstock:0,CRAprice:600,DWRKstock:0,DWRKprice:2500,newNumberUTO:0,sumUTO:0,fluctuatedSumUTO:0,intervalIdUTO:null,newNumberMRS:0,sumMRS:0,fluctuatedSumMRS:0,intervalIdMRS:null,newNumberCRA:0,sumCRA:0,fluctuatedSumCRA:0,intervalIdCRA:null,newNumberDWRK:0,sumDWRK:0,fluctuatedSumDWRK:0,intervalIdDWRK:null,trophiesFront1:!1,trophiesFront2:!1,trophiesFront3:!1,trophiesFront4:!1,trophiesFront5:!1,trophiesFront6:!1,trophiesPopFront1:!1,trophiesPopFront2:!1,trophiesPopFront3:!1,trophiesPopFront4:!1,trophiesPopFront5:!1,trophiesPopFront6:!1,trophiesBack1:!1,trophiesBack2:!1,trophiesBack3:!1,trophiesBack4:!1,trophiesBack5:!1,trophiesBack6:!1,trophiesPopBack1:!1,trophiesPopBack2:!1,trophiesPopBack3:!1,trophiesPopBack4:!1,trophiesPopBack5:!1,trophiesPopBack6:!1}),actions:{increaseExp(){this.exp+=this.expAdd,this.clickTotal+=1},increaseExpSec(){setInterval(()=>{this.exp+=this.expAddSec},1e3)},changeStack(){this.whatStack=="Front-end"?(this.whatStack="Back-end",this.ifBack=!0,this.ifFront=!1):(this.whatStack="Front-end",this.ifBack=!1,this.ifFront=!0)},buyCodeFront(e){const t=this.contentCardsFront.find(n=>n.id===e);this.exp>=t.price&&t.sec==!1&&(this.exp-=t.price,this.expAdd+=t.expEffect,t.quantity++,t.price+=t.priceIncrease),this.exp>=t.price&&t.sec==!0&&(this.exp-=t.price,this.expAddSec+=t.expEffect,t.quantity++,t.price+=t.priceIncrease)},buyCodeBack(e){const t=this.contentCardsBack.find(n=>n.id===e);this.exp>=t.price&&t.sec==!1&&(this.exp-=t.price,this.expAdd+=t.expEffect,t.quantity++,t.price+=t.priceIncrease),this.exp>=t.price&&t.sec==!0&&(this.exp-=t.price,this.expAddSec+=t.expEffect,t.quantity++,t.price+=t.priceIncrease)},applyToMission1(){this.contentCardsFront.find(t=>t.id===3).quantity>=1&&(this.ifApply1=!1)},incrementMission1(){this.interval1||(this.interval1=setInterval(()=>{this.progressValue1+=5,this.progressValue1>=95&&(this.progressValue1=0,this.money+=50)},1e3)),this.progressValue1>=100?(this.progressValue1=0,this.money+=50):this.progressValue1+=5},applyToMission2(){this.contentCardsFront.find(t=>t.id===5).quantity>=1&&(this.ifApply2=!1)},incrementMission2(){this.interval2||(this.interval2=setInterval(()=>{this.progressValue2+=4,this.progressValue2>=95&&(this.progressValue2=0,this.money+=150)},1e3)),this.progressValue2>=100?(this.progressValue2=0,this.money+=150):this.progressValue2+=4},applyToMission3(){this.contentCardsFront.find(t=>t.id===6).quantity>=1&&(this.ifApply3=!1)},incrementMission3(){this.interval3||(this.interval3=setInterval(()=>{this.progressValue3+=3,this.progressValue3>=95&&(this.progressValue3=0,this.money+=200)},1e3)),this.progressValue3>=100?(this.progressValue3=0,this.money+=200):this.progressValue3+=3},applyToMission4(){this.contentCardsBack.find(t=>t.id===3).quantity>=1&&(this.ifApply4=!1)},incrementMission4(){this.interval4||(this.interval4=setInterval(()=>{this.progressValue4+=2,this.progressValue4>=95&&(this.progressValue4=0,this.money+=500)},1e3)),this.progressValue4>=100?(this.progressValue4=0,this.money+=500):this.progressValue4+=2},applyToMission5(){this.contentCardsBack.find(t=>t.id===4).quantity>=1&&(this.ifApply5=!1)},incrementMission5(){this.interval5||(this.interval5=setInterval(()=>{this.progressValue5+=1,this.progressValue5>=95&&(this.progressValue5=0,this.money+=1e3)},1e3)),this.progressValue5>=100?(this.progressValue5=0,this.money+=1e3):this.progressValue5+=1},applyToMission6(){this.contentCardsBack.find(t=>t.id===6).quantity>=1&&(this.ifApply6=!1)},incrementMission6(){this.interval6||(this.interval6=setInterval(()=>{this.progressValue6+=.5,this.progressValue6>=95&&(this.progressValue6=0,this.money+=5e3)},1e3)),this.progressValue6>=100?(this.progressValue6=0,this.money+=5e3):this.progressValue6+=.5},activeTrophiesFront1(){this.contentCardsFront.find(t=>t.id===1).quantity>=5&&!this.trophiesFront1&&(this.trophiesFront1=!0,this.expAdd+=10,this.trophiesPopFront1=!0,this.trophiesPopFront1==!0&&setTimeout(()=>{this.trophiesPopFront1=!1},5e3))},activeTrophiesFront2(){this.contentCardsFront.find(t=>t.id===2).quantity>=10&&!this.trophiesFront2&&(this.trophiesFront2=!0,this.expAddSec+=15,this.trophiesPopFront2=!0,this.trophiesPopFront2==!0&&setTimeout(()=>{this.trophiesPopFront2=!1},5e3))},activeTrophiesFront3(){this.contentCardsFront.find(t=>t.id===3).quantity>=10&&!this.trophiesFront3&&(this.trophiesFront3=!0,this.expAdd+=20,this.trophiesPopFront3=!0,this.trophiesPopFront3==!0&&setTimeout(()=>{this.trophiesPopFront3=!1},5e3))},activeTrophiesFront4(){this.contentCardsFront.find(t=>t.id===4).quantity>=5&&!this.trophiesFront4&&(this.trophiesFront4=!0,this.expAddSec+=500,this.trophiesPopFront4=!0,this.trophiesPopFront4==!0&&setTimeout(()=>{this.trophiesPopFront4=!1},5e3))},activeTrophiesFront5(){this.contentCardsFront.find(t=>t.id===5).quantity>=10&&!this.trophiesFront5&&(this.trophiesFront5=!0,this.expAdd+=3e3,this.trophiesPopFront5=!0,this.trophiesPopFront5==!0&&setTimeout(()=>{this.trophiesPopFront5=!1},5e3))},activeTrophiesFront6(){this.contentCardsFront.find(t=>t.id===6).quantity>=10&&!this.trophiesFront6&&(this.trophiesFront6=!0,this.expAdd+=1e4,this.trophiesPopFront6=!0,this.trophiesPopFront6==!0&&setTimeout(()=>{this.trophiesPopFront6=!1},5e3))},activeTrophiesBack1(){this.contentCardsBack.find(t=>t.id===1).quantity>=5&&!this.trophiesBack1&&(this.trophiesBack1=!0,this.expAdd+=2e4,this.trophiesPopBack1=!0,this.trophiesPopBack1==!0&&setTimeout(()=>{this.trophiesPopBack1=!1},5e3))},activeTrophiesBack2(){this.contentCardsBack.find(t=>t.id===2).quantity>=10&&!this.trophiesBack2&&(this.trophiesBack2=!0,this.expAddSec+=1e5,this.trophiesPopBack2=!0,this.trophiesPopBack2==!0&&setTimeout(()=>{this.trophiesPopBack2=!1},5e3))},activeTrophiesBack3(){this.contentCardsBack.find(t=>t.id===3).quantity>=10&&!this.trophiesBack3&&(this.trophiesBack3=!0,this.expAdd+=1e6,this.trophiesPopBack3=!0,this.trophiesPopBack3==!0&&setTimeout(()=>{this.trophiesPopBack3=!1},5e3))},activeTrophiesBack4(){this.contentCardsBack.find(t=>t.id===4).quantity>=5&&!this.trophiesBack4&&(this.trophiesBack4=!0,this.expAddSec+=5e6,this.trophiesPopBack4=!0,this.trophiesPopBack4==!0&&setTimeout(()=>{this.trophiesPopBack4=!1},5e3))},activeTrophiesBack5(){this.contentCardsBack.find(t=>t.id===5).quantity>=10&&!this.trophiesBack5&&(this.trophiesBack5=!0,this.expAdd+=2e7,this.trophiesPopBack5=!0,this.trophiesPopBack5==!0&&setTimeout(()=>{this.trophiesPopBack5=!1},5e3))},activeTrophiesBack6(){this.contentCardsBack.find(t=>t.id===6).quantity>=10&&!this.trophiesBack6&&(this.trophiesBack6=!0,this.expAdd+=1e8,this.trophiesPopBack6=!0,this.trophiesPopBack6==!0&&setTimeout(()=>{this.trophiesPopBack6=!1},5e3))},resetAll(){localStorage.clear(),window.location.reload()}},getters:{totalStock(){return this.UTOstock+this.MRSstock+this.CRAstock+this.DWRKstock},totalValueStock(){return this.fluctuatedSumUTO+this.fluctuatedSumMRS+this.fluctuatedSumCRA+this.fluctuatedSumDWRK},totalCRA(){return this.CRAstock*this.CRAprice},totalMRS(){return this.MRSstock*this.MRSprice},totalUTO(){return this.UTOstock*this.UTOprice},totalDWRK(){return this.DWRKstock*this.DWRKprice}}}),kE={class:"hidden fixed h-screen bg-dark_grey gap-1 flex-col p-4 w-fit sm:flex"},PE=L("div",{class:"justify-center flex"},[L("img",{src:wg,class:"w-52"})],-1),OE=L("h2",{class:"text-white font-bold mt-2 -mb-1"},"Junior :",-1),DE=L("div",{class:"hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"},[L("img",{src:bu,class:"w-6"}),L("p",{class:"font-bold text-white"},"Code")],-1),xE=L("div",{class:"hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"},[L("img",{src:Iu,class:"w-6"}),L("p",{class:"font-bold text-white"},"Missions")],-1),NE=L("h2",{class:"text-white font-bold mt-2 -mb-1"},"Senior :",-1),ME=L("div",{class:"hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"},[L("img",{src:Tu,class:"w-6"}),L("p",{class:"font-bold text-white"},"Investissement")],-1),LE=L("div",{class:"hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"},[L("img",{src:Au,class:"w-6"}),L("p",{class:"font-bold text-white"},"Entreprise")],-1),UE=L("h2",{class:"text-white font-bold mt-2 -mb-1"},"Autres :",-1),FE=L("div",{class:"hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"},[L("img",{src:Ru,class:"w-6"}),L("p",{class:"font-bold text-white"},"Trophées")],-1),BE=L("div",{class:"hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"},[L("img",{src:Su,class:"w-6"}),L("p",{class:"font-bold text-white"},"Shopping")],-1),jE=L("div",{class:"hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"},[L("img",{src:Cu,class:"w-6"}),L("p",{class:"font-bold text-white"},"Réglages")],-1),$E={class:"bg-white rounded-lg p-4 mt-2"},HE={class:"font-semibold text-sm text-primary"},VE={class:"font-semibold text-sm text-primary"},WE={class:"text-white font-light text-sm"},qE={__name:"Desktop-bar",setup(e){const t=Uf(),n=Lf();return(s,i)=>(Dt(),Ho("div",kE,[PE,OE,ie(fe(Xt),{to:"/","exact-active-class":"active"},{default:Le(()=>[DE]),_:1}),ie(fe(Xt),{to:"/missions","exact-active-class":"active"},{default:Le(()=>[xE]),_:1}),ie(fe(Xt),{to:"/investissement","exact-active-class":"active"},{default:Le(()=>[NE,ME]),_:1}),ie(fe(Xt),{to:"/entreprise","exact-active-class":"active"},{default:Le(()=>[LE]),_:1}),UE,ie(fe(Xt),{to:"/trophees","exact-active-class":"active"},{default:Le(()=>[FE]),_:1}),ie(fe(Xt),{to:"/shopping","exact-active-class":"active"},{default:Le(()=>[BE]),_:1}),jE,L("div",$E,[L("p",HE," EXP : "+ur(fe(t).exp.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1),L("p",VE," Argent : "+ur(fe(t).money.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"}))+" € ",1)]),L("div",null,[L("p",WE,ur(fe(n).user.email),1),L("button",{class:"p-2 bg-primary text-white font-bold rounded-lg",onClick:i[0]||(i[0]=lg((...r)=>fe(n).logoutUser&&fe(n).logoutUser(...r),["prevent"]))}," Déconnexion ")])]))}},KE=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},zE={},GE={class:"flex justify-center sm:hidden"},JE={class:"h-fit fixed bottom-0 rounded-t-lg bg-dark_grey gap-2 flex p-2 w-fit"},XE=L("div",{class:"hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"},[L("img",{src:bu,class:"w-6"})],-1),YE=L("div",{class:"hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"},[L("img",{src:Iu,class:"w-6"})],-1),QE=L("div",{class:"hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"},[L("img",{src:Tu,class:"w-6"})],-1),ZE=L("div",{class:"hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"},[L("img",{src:Au,class:"w-6"})],-1),ew=L("div",{class:"hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"},[L("img",{src:Ru,class:"w-6"})],-1),tw=L("div",{class:"hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"},[L("img",{src:Su,class:"w-6"})],-1),nw=L("div",{class:"hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"},[L("img",{src:Cu,class:"w-6"})],-1);function sw(e,t){const n=op("RouterLink");return Dt(),Ho("div",GE,[L("div",JE,[ie(n,{to:"/","exact-active-class":"active"},{default:Le(()=>[XE]),_:1}),ie(n,{to:"/missions","exact-active-class":"active"},{default:Le(()=>[YE]),_:1}),ie(n,{to:"/investissement","exact-active-class":"active"},{default:Le(()=>[QE]),_:1}),ie(n,{to:"/entreprise","exact-active-class":"active"},{default:Le(()=>[ZE]),_:1}),ie(n,{to:"/trophees","exact-active-class":"active"},{default:Le(()=>[ew]),_:1}),ie(n,{to:"/shopping","exact-active-class":"active"},{default:Le(()=>[tw]),_:1}),ie(n,{to:"/a","exact-active-class":"active"},{default:Le(()=>[nw]),_:1})])])}const iw=KE(zE,[["render",sw]]),rw={__name:"App",setup(e){const t=Lf(),n=Uf();return tu(()=>{t.init(),setInterval(()=>{n.activeTrophiesFront1(),n.activeTrophiesFront2(),n.activeTrophiesFront3(),n.activeTrophiesFront4(),n.activeTrophiesFront5(),n.activeTrophiesFront6(),n.activeTrophiesBack1(),n.activeTrophiesBack2(),n.activeTrophiesBack3(),n.activeTrophiesBack4(),n.activeTrophiesBack5(),n.activeTrophiesBack6()},1e3)}),(s,i)=>(Dt(),Ho(rt,null,[fe(t).auth?(Dt(),Zn(iw,{key:0})):tc("",!0),fe(t).auth?(Dt(),Zn(qE,{key:1})):tc("",!0),fe(t).auth?(Dt(),Zn(fe(Zr),{key:2,class:"sm:ml-64 ml-3"})):(Dt(),Zn(fe(Zr),{key:3}))],64))}};function ow(e){return typeof e=="object"&&e!==null}function vl(e,t){return e=ow(e)?e:Object.create(null),new Proxy(e,{get(n,s,i){return s==="key"?Reflect.get(n,s,i):Reflect.get(n,s,i)||Reflect.get(t,s,i)}})}function aw(e,t){return t.reduce((n,s)=>n==null?void 0:n[s],e)}function cw(e,t,n){return t.slice(0,-1).reduce((s,i)=>/^(__proto__)$/.test(i)?{}:s[i]=s[i]||{},e)[t[t.length-1]]=n,e}function lw(e,t){return t.reduce((n,s)=>{const i=s.split(".");return cw(n,i,aw(e,i))},{})}function _l(e,{storage:t,serializer:n,key:s,debug:i}){try{const r=t==null?void 0:t.getItem(s);r&&e.$patch(n==null?void 0:n.deserialize(r))}catch(r){i&&console.error(r)}}function yl(e,{storage:t,serializer:n,key:s,paths:i,debug:r}){try{const o=Array.isArray(i)?lw(e,i):e;t.setItem(s,n.serialize(o))}catch(o){r&&console.error(o)}}function uw(e={}){return t=>{const{auto:n=!1}=e,{options:{persist:s=n},store:i}=t;if(!s)return;const r=(Array.isArray(s)?s.map(o=>vl(o,e)):[vl(s,e)]).map(({storage:o=localStorage,beforeRestore:a=null,afterRestore:c=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:u=i.$id,paths:f=null,debug:p=!1})=>{var m;return{storage:o,beforeRestore:a,afterRestore:c,serializer:l,key:((m=e.key)!=null?m:b=>b)(u),paths:f,debug:p}});i.$persist=()=>{r.forEach(o=>{yl(i.$state,o)})},i.$hydrate=({runHooks:o=!0}={})=>{r.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;o&&(c==null||c(t)),_l(i,a),o&&(l==null||l(t))})},r.forEach(o=>{const{beforeRestore:a,afterRestore:c}=o;a==null||a(t),_l(i,o),c==null||c(t),i.$subscribe((l,u)=>{yl(u,o)},{detached:!0})})}}var hw=uw();const Ff=mg();Ff.use(hw);const xa=dg(rw);xa.use(Ff);xa.use(Eo);xa.mount("#app");export{Cd as A,lt as B,Od as C,Np as D,is as E,rt as F,pw as G,tp as H,mu as I,Uo as J,si as K,KE as _,Bn as a,fe as b,$e as c,Ho as d,L as e,gw as f,tc as g,kp as h,Uf as i,vw as j,mw as k,tu as l,ie as m,Io as n,Dt as o,yw as p,Zn as q,Mo as r,bo as s,ur as t,Lf as u,_w as v,lg as w,fw as x,dw as y,Ql as z};
