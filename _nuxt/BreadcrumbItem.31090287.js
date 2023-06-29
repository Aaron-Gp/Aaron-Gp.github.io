import{c as z,d as m,a as s,e as P,f as u,g,i as T,s as y,w as H}from"./light.656d872f.js";import{f as x,ae as j,H as E,K as S,B as p,L as v,D as $,r as w,h as I,ap as O,E as A}from"./entry.890348b1.js";const V={fontWeightActive:"400"},K=e=>{const{fontSize:o,textColor3:r,textColor2:n,borderRadius:a,buttonColor2Hover:t,buttonColor2Pressed:c}=e;return Object.assign(Object.assign({},V),{fontSize:o,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:n,itemTextColorPressed:n,itemTextColorActive:n,itemBorderRadius:a,itemColorHover:t,itemColorPressed:c,separatorColor:r})},D={name:"Breadcrumb",common:z,self:K},M=D,F=m("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[s("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),s("a",`
 color: inherit;
 text-decoration: inherit;
 `),m("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[m("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),s("&:not(:last-child)",[P("clickable",[u("link",`
 cursor: pointer;
 `,[s("&:hover",`
 background-color: var(--n-item-color-hover);
 `),s("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),u("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[s("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[m("icon",`
 color: var(--n-item-text-color-hover);
 `)]),s("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[m("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),u("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),s("&:last-child",[u("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[m("icon",`
 color: var(--n-item-text-color-active);
 `)]),u("separator",`
 display: none;
 `)])])]),C=$("n-breadcrumb"),N=Object.assign(Object.assign({},g.props),{separator:{type:String,default:"/"}}),Q=x({name:"Breadcrumb",props:N,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=j(e),n=g("Breadcrumb","-breadcrumb",F,M,e,o);E(C,{separatorRef:S(e,"separator"),mergedClsPrefixRef:o});const a=p(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:d,itemTextColor:i,itemTextColorHover:l,itemTextColorPressed:b,itemTextColorActive:h,fontSize:f,fontWeightActive:R,itemBorderRadius:k,itemColorHover:_,itemColorPressed:B,itemLineHeight:L}}=n.value;return{"--n-font-size":f,"--n-bezier":c,"--n-item-text-color":i,"--n-item-text-color-hover":l,"--n-item-text-color-pressed":b,"--n-item-text-color-active":h,"--n-separator-color":d,"--n-item-color-hover":_,"--n-item-color-pressed":B,"--n-item-border-radius":k,"--n-font-weight-active":R,"--n-item-line-height":L}}),t=r?T("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:a,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},v("ul",null,this.$slots))}}),U=(e=y?window:null)=>{const o=()=>{const{hash:a,host:t,hostname:c,href:d,origin:i,pathname:l,port:b,protocol:h,search:f}=(e==null?void 0:e.location)||{};return{hash:a,host:t,hostname:c,href:d,origin:i,pathname:l,port:b,protocol:h,search:f}},r=()=>{n.value=o()},n=w(o());return I(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),O(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),n},q={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},X=x({name:"BreadcrumbItem",props:q,setup(e,{slots:o}){const r=A(C,null);if(!r)return()=>null;const{separatorRef:n,mergedClsPrefixRef:a}=r,t=U(),c=p(()=>e.href?"a":"span"),d=p(()=>t.value.href===e.href?"location":null);return()=>{const{value:i}=a;return v("li",{class:[`${i}-breadcrumb-item`,e.clickable&&`${i}-breadcrumb-item--clickable`]},v(c.value,{class:`${i}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},o),v("span",{class:`${i}-breadcrumb-item__separator`,"aria-hidden":"true"},H(o.separator,()=>{var l;return[(l=e.separator)!==null&&l!==void 0?l:n.value]})))}}});export{Q as _,X as a};
