import{i as L}from"./use-rtl.8ea6aff9.js";import{f as g,ac as P,E as T,K as y,z as p,L as v,A as H,r as j,h as E,an as S,B as $}from"./entry.0313394d.js";import{c as A,d as m,a as s,e as I,f as u,g as x,h as O,q as w}from"./light.4ae708e5.js";const V={fontWeightActive:"400"},K=e=>{const{fontSize:o,textColor3:r,textColor2:n,borderRadius:a,buttonColor2Hover:t,buttonColor2Pressed:c}=e;return Object.assign(Object.assign({},V),{fontSize:o,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:n,itemTextColorPressed:n,itemTextColorActive:n,itemBorderRadius:a,itemColorHover:t,itemColorPressed:c,separatorColor:r})},M={name:"Breadcrumb",common:A,self:K},q=M,D=m("breadcrumb",`
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
 `),s("&:not(:last-child)",[I("clickable",[u("link",`
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
 `)])])]),C=H("n-breadcrumb"),F=Object.assign(Object.assign({},x.props),{separator:{type:String,default:"/"}}),X=g({name:"Breadcrumb",props:F,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=P(e),n=x("Breadcrumb","-breadcrumb",D,q,e,o);T(C,{separatorRef:y(e,"separator"),mergedClsPrefixRef:o});const a=p(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:d,itemTextColor:i,itemTextColorHover:l,itemTextColorPressed:h,itemTextColorActive:b,fontSize:f,fontWeightActive:R,itemBorderRadius:k,itemColorHover:_,itemColorPressed:z,itemLineHeight:B}}=n.value;return{"--n-font-size":f,"--n-bezier":c,"--n-item-text-color":i,"--n-item-text-color-hover":l,"--n-item-text-color-pressed":h,"--n-item-text-color-active":b,"--n-separator-color":d,"--n-item-color-hover":_,"--n-item-color-pressed":z,"--n-item-border-radius":k,"--n-font-weight-active":R,"--n-item-line-height":B}}),t=r?O("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:a,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},v("ul",null,this.$slots))}}),N=(e=L?window:null)=>{const o=()=>{const{hash:a,host:t,hostname:c,href:d,origin:i,pathname:l,port:h,protocol:b,search:f}=(e==null?void 0:e.location)||{};return{hash:a,host:t,hostname:c,href:d,origin:i,pathname:l,port:h,protocol:b,search:f}},r=()=>{n.value=o()},n=j(o());return E(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),S(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),n},U={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Y=g({name:"BreadcrumbItem",props:U,setup(e,{slots:o}){const r=$(C,null);if(!r)return()=>null;const{separatorRef:n,mergedClsPrefixRef:a}=r,t=N(),c=p(()=>e.href?"a":"span"),d=p(()=>t.value.href===e.href?"location":null);return()=>{const{value:i}=a;return v("li",{class:[`${i}-breadcrumb-item`,e.clickable&&`${i}-breadcrumb-item--clickable`]},v(c.value,{class:`${i}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},o),v("span",{class:`${i}-breadcrumb-item__separator`,"aria-hidden":"true"},w(o.separator,()=>{var l;return[(l=e.separator)!==null&&l!==void 0?l:n.value]})))}}});export{X as _,Y as a};
