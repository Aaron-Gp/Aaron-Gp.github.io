import{a as v,b as bo,d as Q,f as d,q as ho,s as eo,p as xo,c as Do,e as I,j as lo,g as go,h as Ro,t as i,v as Z,i as Go,r as co,m as _o,l as Mo}from"./light.656d872f.js";import{r as K,h as Lo,y as Oo,E as vo,H as jo,B as j,A as mo,D as po,f as q,L as f,ag as yo,ao as No,K as Co,M as Ao,G as Ko,ae as Vo}from"./entry.890348b1.js";function uo(o){return o.replace(/#|\(|\)|,|\s/g,"_")}function Qo(){const o=K(!1);return Lo(()=>{o.value=!0}),Oo(o)}const fo=po("n-form-item");function qo(o,{defaultSize:s="medium",mergedSize:a,mergedDisabled:c}={}){const n=vo(fo,null);jo(fo,null);const g=j(a?()=>a(n):()=>{const{size:u}=o;if(u)return u;if(n){const{mergedSize:R}=n;if(R.value!==void 0)return R.value}return s}),W=j(c?()=>c(n):()=>{const{disabled:u}=o;return u!==void 0?u:n?n.disabled.value:!1}),r=j(()=>{const{status:u}=o;return u||(n==null?void 0:n.mergedValidationStatus.value)});return mo(()=>{n&&n.restoreValidation()}),{mergedSizeRef:g,mergedDisabledRef:W,mergedStatusRef:r,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const wo=q({name:"BaseIconSwitchTransition",setup(o,{slots:s}){const a=Qo();return()=>f(yo,{name:"icon-switch-transition",appear:a.value},s)}}),Yo=q({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(o,{slots:s}){function a(r){o.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function c(r){o.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:u}=o;u&&u()}function n(r){o.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:u}=o;u&&u()}function g(r){if(r.style.transition="none",o.width){const u=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${u}px`}else if(o.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const u=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${u}px`}r.offsetWidth}function W(r){var u;o.width?r.style.maxWidth="":o.reverse||(r.style.maxHeight=""),(u=o.onAfterEnter)===null||u===void 0||u.call(o)}return()=>{const{group:r,width:u,appear:R,mode:V}=o,$=r?No:yo,N={name:u?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:R,onEnter:g,onAfterEnter:W,onBeforeLeave:a,onLeave:c,onAfterLeave:n};return r||(N.mode=V),f($,N,s)}}}),{cubicBezierEaseInOut:Xo}=bo;function io({originalTransform:o="",left:s=0,top:a=0,transition:c=`all .3s ${Xo} !important`}={}){return[v("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:s,top:a,opacity:0}),v("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:s,top:a,opacity:1}),v("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:s,top:a,transition:c})]}const Uo=v([v("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),v("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),v("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),v("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),Q("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[d("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[io()]),d("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[d("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),d("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[d("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),d("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),d("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),d("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[io({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Jo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Zo=q({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Jo),setup(o){ho("-base-loading",Uo,Co(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:s,strokeWidth:a,stroke:c,scale:n}=this,g=s/n;return f("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},f(wo,null,{default:()=>this.show?f("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},f("div",{class:`${o}-base-loading__container`},f("div",{class:`${o}-base-loading__container-layer`},f("div",{class:`${o}-base-loading__container-layer-left`},f("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:c}},f("circle",{fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:g,cy:g,r:s-a/2,"stroke-dasharray":4.91*s,"stroke-dashoffset":2.46*s}))),f("div",{class:`${o}-base-loading__container-layer-patch`},f("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:c}},f("circle",{fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:g,cy:g,r:s-a/2,"stroke-dasharray":4.91*s,"stroke-dashoffset":2.46*s}))),f("div",{class:`${o}-base-loading__container-layer-right`},f("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:c}},f("circle",{fill:"none",stroke:"currentColor","stroke-width":a,"stroke-linecap":"round",cx:g,cy:g,r:s-a/2,"stroke-dasharray":4.91*s,"stroke-dashoffset":2.46*s})))))):f("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),oe=Q("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),ee=q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){ho("-base-wave",oe,Co(o,"clsPrefix"));const s=K(null),a=K(!1);let c=null;return mo(()=>{c!==null&&window.clearTimeout(c)}),{active:a,selfRef:s,play(){c!==null&&(window.clearTimeout(c),a.value=!1,c=null),Ao(()=>{var n;(n=s.value)===null||n===void 0||n.offsetHeight,a.value=!0,c=window.setTimeout(()=>{a.value=!1,c=null},1e3)})}}},render(){const{clsPrefix:o}=this;return f("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:M}=bo;function re({duration:o=".2s",delay:s=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${M},
 max-width ${o} ${M} ${s},
 margin-left ${o} ${M} ${s},
 margin-right ${o} ${M} ${s};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${M} ${s},
 max-width ${o} ${M},
 margin-left ${o} ${M},
 margin-right ${o} ${M};
 `)]}const te=eo&&"chrome"in window;eo&&navigator.userAgent.includes("Firefox");const ne=eo&&navigator.userAgent.includes("Safari")&&!te;function O(o){return xo(o,[255,255,255,.16])}function oo(o){return xo(o,[0,0,0,.12])}const ie=po("n-button-group"),se={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},ae=o=>{const{heightTiny:s,heightSmall:a,heightMedium:c,heightLarge:n,borderRadius:g,fontSizeTiny:W,fontSizeSmall:r,fontSizeMedium:u,fontSizeLarge:R,opacityDisabled:V,textColor2:$,textColor3:N,primaryColorHover:y,primaryColorPressed:H,borderColor:Y,primaryColor:F,baseColor:b,infoColor:E,infoColorHover:S,infoColorPressed:t,successColor:h,successColorHover:w,successColorPressed:e,warningColor:k,warningColorHover:T,warningColorPressed:G,errorColor:z,errorColorHover:C,errorColorPressed:_,fontWeight:D,buttonColor2:A,buttonColor2Hover:B,buttonColor2Pressed:x,fontWeightStrong:X}=o;return Object.assign(Object.assign({},se),{heightTiny:s,heightSmall:a,heightMedium:c,heightLarge:n,borderRadiusTiny:g,borderRadiusSmall:g,borderRadiusMedium:g,borderRadiusLarge:g,fontSizeTiny:W,fontSizeSmall:r,fontSizeMedium:u,fontSizeLarge:R,opacityDisabled:V,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:A,colorSecondaryHover:B,colorSecondaryPressed:x,colorTertiary:A,colorTertiaryHover:B,colorTertiaryPressed:x,colorQuaternary:"#0000",colorQuaternaryHover:B,colorQuaternaryPressed:x,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:$,textColorTertiary:N,textColorHover:y,textColorPressed:H,textColorFocus:y,textColorDisabled:$,textColorText:$,textColorTextHover:y,textColorTextPressed:H,textColorTextFocus:y,textColorTextDisabled:$,textColorGhost:$,textColorGhostHover:y,textColorGhostPressed:H,textColorGhostFocus:y,textColorGhostDisabled:$,border:`1px solid ${Y}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${H}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${Y}`,rippleColor:F,colorPrimary:F,colorHoverPrimary:y,colorPressedPrimary:H,colorFocusPrimary:y,colorDisabledPrimary:F,textColorPrimary:b,textColorHoverPrimary:b,textColorPressedPrimary:b,textColorFocusPrimary:b,textColorDisabledPrimary:b,textColorTextPrimary:F,textColorTextHoverPrimary:y,textColorTextPressedPrimary:H,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:$,textColorGhostPrimary:F,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:H,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:F,borderPrimary:`1px solid ${F}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${H}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${F}`,rippleColorPrimary:F,colorInfo:E,colorHoverInfo:S,colorPressedInfo:t,colorFocusInfo:S,colorDisabledInfo:E,textColorInfo:b,textColorHoverInfo:b,textColorPressedInfo:b,textColorFocusInfo:b,textColorDisabledInfo:b,textColorTextInfo:E,textColorTextHoverInfo:S,textColorTextPressedInfo:t,textColorTextFocusInfo:S,textColorTextDisabledInfo:$,textColorGhostInfo:E,textColorGhostHoverInfo:S,textColorGhostPressedInfo:t,textColorGhostFocusInfo:S,textColorGhostDisabledInfo:E,borderInfo:`1px solid ${E}`,borderHoverInfo:`1px solid ${S}`,borderPressedInfo:`1px solid ${t}`,borderFocusInfo:`1px solid ${S}`,borderDisabledInfo:`1px solid ${E}`,rippleColorInfo:E,colorSuccess:h,colorHoverSuccess:w,colorPressedSuccess:e,colorFocusSuccess:w,colorDisabledSuccess:h,textColorSuccess:b,textColorHoverSuccess:b,textColorPressedSuccess:b,textColorFocusSuccess:b,textColorDisabledSuccess:b,textColorTextSuccess:h,textColorTextHoverSuccess:w,textColorTextPressedSuccess:e,textColorTextFocusSuccess:w,textColorTextDisabledSuccess:$,textColorGhostSuccess:h,textColorGhostHoverSuccess:w,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:w,textColorGhostDisabledSuccess:h,borderSuccess:`1px solid ${h}`,borderHoverSuccess:`1px solid ${w}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${w}`,borderDisabledSuccess:`1px solid ${h}`,rippleColorSuccess:h,colorWarning:k,colorHoverWarning:T,colorPressedWarning:G,colorFocusWarning:T,colorDisabledWarning:k,textColorWarning:b,textColorHoverWarning:b,textColorPressedWarning:b,textColorFocusWarning:b,textColorDisabledWarning:b,textColorTextWarning:k,textColorTextHoverWarning:T,textColorTextPressedWarning:G,textColorTextFocusWarning:T,textColorTextDisabledWarning:$,textColorGhostWarning:k,textColorGhostHoverWarning:T,textColorGhostPressedWarning:G,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:k,borderWarning:`1px solid ${k}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${G}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${k}`,rippleColorWarning:k,colorError:z,colorHoverError:C,colorPressedError:_,colorFocusError:C,colorDisabledError:z,textColorError:b,textColorHoverError:b,textColorPressedError:b,textColorFocusError:b,textColorDisabledError:b,textColorTextError:z,textColorTextHoverError:C,textColorTextPressedError:_,textColorTextFocusError:C,textColorTextDisabledError:$,textColorGhostError:z,textColorGhostHoverError:C,textColorGhostPressedError:_,textColorGhostFocusError:C,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${C}`,borderPressedError:`1px solid ${_}`,borderFocusError:`1px solid ${C}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:X})},le={name:"Button",common:Do,self:ae},de=le,ce=v([Q("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[I("color",[d("border",{borderColor:"var(--n-border-color)"}),I("disabled",[d("border",{borderColor:"var(--n-border-color-disabled)"})]),lo("disabled",[v("&:focus",[d("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[d("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})]),I("pressed",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),I("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[d("border",{border:"var(--n-border-disabled)"})]),lo("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[d("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[d("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})]),I("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})])]),I("loading","cursor: wait;"),Q("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[I("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),eo&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,d("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),d("border",{border:"var(--n-border)"}),d("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),d("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[Q("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[io({top:"50%",originalTransform:"translateY(-50%)"})]),re()]),d("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[d("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),I("block",`
 display: flex;
 width: 100%;
 `),I("dashed",[d("border, state-border",{borderStyle:"dashed !important"})]),I("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),ue=Object.assign(Object.assign({},go.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!ne}}),fe=q({name:"Button",props:ue,setup(o){const s=K(null),a=K(null),c=K(!1),n=Ko(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),g=vo(ie,{}),{mergedSizeRef:W}=qo({},{defaultSize:"medium",mergedSize:t=>{const{size:h}=o;if(h)return h;const{size:w}=g;if(w)return w;const{mergedSize:e}=t||{};return e?e.value:"medium"}}),r=j(()=>o.focusable&&!o.disabled),u=t=>{var h;r.value||t.preventDefault(),!o.nativeFocusBehavior&&(t.preventDefault(),!o.disabled&&r.value&&((h=s.value)===null||h===void 0||h.focus({preventScroll:!0})))},R=t=>{var h;if(!o.disabled&&!o.loading){const{onClick:w}=o;w&&_o(w,t),o.text||(h=a.value)===null||h===void 0||h.play()}},V=t=>{switch(t.key){case"Enter":if(!o.keyboard)return;c.value=!1}},$=t=>{switch(t.key){case"Enter":if(!o.keyboard||o.loading){t.preventDefault();return}c.value=!0}},N=()=>{c.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:H,mergedRtlRef:Y}=Vo(o),F=go("Button","-button",ce,de,o,H),b=Ro("Button",Y,H),E=j(()=>{const t=F.value,{common:{cubicBezierEaseInOut:h,cubicBezierEaseOut:w},self:e}=t,{rippleDuration:k,opacityDisabled:T,fontWeight:G,fontWeightStrong:z}=e,C=W.value,{dashed:_,type:D,ghost:A,text:B,color:x,round:X,circle:ro,textColor:L,secondary:Po,tertiary:so,quaternary:$o,strong:So}=o,To={"font-weight":So?z:G};let m={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const U=D==="tertiary",ao=D==="default",l=U?"default":D;if(B){const p=L||x;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":p||e[i("textColorText",l)],"--n-text-color-hover":p?O(p):e[i("textColorTextHover",l)],"--n-text-color-pressed":p?oo(p):e[i("textColorTextPressed",l)],"--n-text-color-focus":p?O(p):e[i("textColorTextHover",l)],"--n-text-color-disabled":p||e[i("textColorTextDisabled",l)]}}else if(A||_){const p=L||x;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":x||e[i("rippleColor",l)],"--n-text-color":p||e[i("textColorGhost",l)],"--n-text-color-hover":p?O(p):e[i("textColorGhostHover",l)],"--n-text-color-pressed":p?oo(p):e[i("textColorGhostPressed",l)],"--n-text-color-focus":p?O(p):e[i("textColorGhostHover",l)],"--n-text-color-disabled":p||e[i("textColorGhostDisabled",l)]}}else if(Po){const p=ao?e.textColor:U?e.textColorTertiary:e[i("color",l)],P=x||p,J=D!=="default"&&D!=="tertiary";m={"--n-color":J?Z(P,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":J?Z(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":J?Z(P,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":J?Z(P,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":P,"--n-text-color-hover":P,"--n-text-color-pressed":P,"--n-text-color-focus":P,"--n-text-color-disabled":P}}else if(so||$o){const p=ao?e.textColor:U?e.textColorTertiary:e[i("color",l)],P=x||p;so?(m["--n-color"]=e.colorTertiary,m["--n-color-hover"]=e.colorTertiaryHover,m["--n-color-pressed"]=e.colorTertiaryPressed,m["--n-color-focus"]=e.colorSecondaryHover,m["--n-color-disabled"]=e.colorTertiary):(m["--n-color"]=e.colorQuaternary,m["--n-color-hover"]=e.colorQuaternaryHover,m["--n-color-pressed"]=e.colorQuaternaryPressed,m["--n-color-focus"]=e.colorQuaternaryHover,m["--n-color-disabled"]=e.colorQuaternary),m["--n-ripple-color"]="#0000",m["--n-text-color"]=P,m["--n-text-color-hover"]=P,m["--n-text-color-pressed"]=P,m["--n-text-color-focus"]=P,m["--n-text-color-disabled"]=P}else m={"--n-color":x||e[i("color",l)],"--n-color-hover":x?O(x):e[i("colorHover",l)],"--n-color-pressed":x?oo(x):e[i("colorPressed",l)],"--n-color-focus":x?O(x):e[i("colorFocus",l)],"--n-color-disabled":x||e[i("colorDisabled",l)],"--n-ripple-color":x||e[i("rippleColor",l)],"--n-text-color":L||(x?e.textColorPrimary:U?e.textColorTertiary:e[i("textColor",l)]),"--n-text-color-hover":L||(x?e.textColorHoverPrimary:e[i("textColorHover",l)]),"--n-text-color-pressed":L||(x?e.textColorPressedPrimary:e[i("textColorPressed",l)]),"--n-text-color-focus":L||(x?e.textColorFocusPrimary:e[i("textColorFocus",l)]),"--n-text-color-disabled":L||(x?e.textColorDisabledPrimary:e[i("textColorDisabled",l)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};B?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[i("border",l)],"--n-border-hover":e[i("borderHover",l)],"--n-border-pressed":e[i("borderPressed",l)],"--n-border-focus":e[i("borderFocus",l)],"--n-border-disabled":e[i("borderDisabled",l)]};const{[i("height",C)]:no,[i("fontSize",C)]:Ho,[i("padding",C)]:ko,[i("paddingRound",C)]:zo,[i("iconSize",C)]:Bo,[i("borderRadius",C)]:Fo,[i("iconMargin",C)]:Eo,waveOpacity:Io}=e,Wo={"--n-width":ro&&!B?no:"initial","--n-height":B?"initial":no,"--n-font-size":Ho,"--n-padding":ro||B?"initial":X?zo:ko,"--n-icon-size":Bo,"--n-icon-margin":Eo,"--n-border-radius":B?"initial":ro||X?no:Fo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":h,"--n-bezier-ease-out":w,"--n-ripple-duration":k,"--n-opacity-disabled":T,"--n-wave-opacity":Io},To),m),to),Wo)}),S=y?Go("button",j(()=>{let t="";const{dashed:h,type:w,ghost:e,text:k,color:T,round:G,circle:z,textColor:C,secondary:_,tertiary:D,quaternary:A,strong:B}=o;h&&(t+="a"),e&&(t+="b"),k&&(t+="c"),G&&(t+="d"),z&&(t+="e"),_&&(t+="f"),D&&(t+="g"),A&&(t+="h"),B&&(t+="i"),T&&(t+="j"+uo(T)),C&&(t+="k"+uo(C));const{value:x}=W;return t+="l"+x[0],t+="m"+w[0],t}),E,o):void 0;return{selfElRef:s,waveElRef:a,mergedClsPrefix:H,mergedFocusable:r,mergedSize:W,showBorder:n,enterPressed:c,rtlEnabled:b,handleMousedown:u,handleKeydown:$,handleBlur:N,handleKeyup:V,handleClick:R,customColorCssVars:j(()=>{const{color:t}=o;if(!t)return null;const h=O(t);return{"--n-border-color":t,"--n-border-color-hover":h,"--n-border-color-pressed":oo(t),"--n-border-color-focus":h,"--n-border-color-disabled":t}}),cssVars:y?void 0:E,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:o,tag:s,onRender:a}=this;a==null||a();const c=co(this.$slots.default,n=>n&&f("span",{class:`${o}-button__content`},n));return f(s,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&c,f(Yo,{width:!0},{default:()=>co(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&f("span",{class:`${o}-button__icon`,style:{margin:Mo(this.$slots.default)?"0":""}},f(wo,null,{default:()=>this.loading?f(Zo,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):f("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&c,this.text?null:f(ee,{ref:"waveElRef",clsPrefix:o}),this.showBorder?f("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?f("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),xe=fe;export{xe as _,Qo as i};
