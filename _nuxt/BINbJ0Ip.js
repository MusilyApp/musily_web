import{d as x,p as A,s as H,P as K,i as l,j,r as O,k as R,L as N,u as S,l as T,m as y,n as _,t as B,q as L,v as I,x as C,y as F,S as q,z as w,F as E,T as V,R as z,A as D,a as G,c as J,e as M}from"./DQo8P53R.js";const Q=x({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const o=e.renderKey,n=e.route,i={};for(const a in e.route)Object.defineProperty(i,a,{get:()=>o===e.renderKey?e.route[a]:n[a],enumerable:!0});return A(K,H(i)),()=>l(e.vnode,{ref:e.vnodeRef})}}),U=x({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o,slots:n,expose:i}){const a=j(),r=O(),s=R(K,null);let u;i({pageRef:r});const d=R(N,null);let c;const g=a.deferHydration();if(a.isHydrating){const t=a.hooks.hookOnce("app:error",g);S().beforeEach(t)}return e.pageKey&&T(()=>e.pageKey,(t,m)=>{t!==m&&a.callHook("page:loading:start")}),()=>l(z,{name:e.name,route:e.route,...o},{default:t=>{const m=X(s,t.route,t.Component),h=s&&s.matched.length===t.route.matched.length;if(!t.Component){if(c&&!h)return c;g();return}if(c&&d&&!d.isCurrent(t.route))return c;if(m&&s&&(!d||d!=null&&d.isCurrent(s)))return h?c:null;const f=y(t,e.pageKey);!a.isHydrating&&!Y(s,t.route,t.Component)&&u===f&&a.callHook("page:loading:end"),u=f;const v=!!(e.transition??t.route.meta.pageTransition??_),b=v&&W([e.transition,t.route.meta.pageTransition,_,{onAfterLeave:()=>{a.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),p=e.keepalive??t.route.meta.keepalive??I;return c=C(V,v&&b,F(p,l(q,{suspensible:!0,onPending:()=>a.callHook("page:start",t.Component),onResolve:()=>{w(()=>a.callHook("page:finish",t.Component).then(()=>a.callHook("page:loading:end")).finally(g))}},{default:()=>{const k=l(Q,{key:f||void 0,vnode:n.default?l(E,void 0,n.default(t)):t.Component,route:t.route,renderKey:f||void 0,trackRootNodes:v,vnodeRef:r});return p&&(k.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),k}}))).default(),c}})}});function W(e){const o=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?B(n.onAfterLeave):void 0}));return L(...o)}function X(e,o,n){if(!e)return!1;const i=o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:o.matched.slice(0,i).some((a,r)=>{var s,u,d;return((s=a.components)==null?void 0:s.default)!==((d=(u=e.matched[r])==null?void 0:u.components)==null?void 0:d.default)})||n&&y({route:o,Component:n})!==y({route:e,Component:n})}function Y(e,o,n){return e?o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(n==null?void 0:n.type)})<o.matched.length-1:!1}const Z={};function $(e,o){const n=U;return G(),J("div",null,[M(n)])}const ee=D(Z,[["render",$]]);export{ee as default};
