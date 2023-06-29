import{d as g,a,q as P,e as c,j as be,c as ge,x as fe,f as u,y as pe,z as ve,g as F,h as me,t as _,i as he,r as m,m as xe}from"./light.656d872f.js";import{a7 as Ce,$ as Se,a1 as M,X as ze,f as h,E as ye,aq as ke,L as d,K as I,ae as we,B as T,ar as _e,r as $}from"./entry.890348b1.js";function $e(e,t){const o=e.trim().split(/\s+/g),r={top:o[0]};switch(o.length){case 1:r.right=o[0],r.bottom=o[0],r.left=o[0];break;case 2:r.right=o[1],r.left=o[1],r.bottom=o[0];break;case 3:r.right=o[1],r.bottom=o[2],r.left=o[1];break;case 4:r.right=o[1],r.bottom=o[2],r.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?r:r[t]}var Re="[object Symbol]";function je(e){return typeof e=="symbol"||Ce(e)&&Se(e)==Re}function Me(e,t){for(var o=-1,r=e==null?0:e.length,n=Array(r);++o<r;)n[o]=t(e[o],o,e);return n}var Te=1/0,B=M?M.prototype:void 0,L=B?B.toString:void 0;function E(e){if(typeof e=="string")return e;if(ze(e))return Me(e,E)+"";if(je(e))return L?L.call(e):"";var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function Be(e){return e==null?"":E(e)}function Le(e,t,o){var r=-1,n=e.length;t<0&&(t=-t>n?0:n+t),o=o>n?n:o,o<0&&(o+=n),n=t>o?0:o-t>>>0,t>>>=0;for(var i=Array(n);++r<n;)i[r]=e[r+t];return i}function Pe(e,t,o){var r=e.length;return o=o===void 0?r:o,!t&&o>=r?e:Le(e,t,o)}var Fe="\\ud800-\\udfff",Ie="\\u0300-\\u036f",Ee="\\ufe20-\\ufe2f",Oe="\\u20d0-\\u20ff",He=Ie+Ee+Oe,Ae="\\ufe0e\\ufe0f",Ve="\\u200d",Ne=RegExp("["+Ve+Fe+He+Ae+"]");function O(e){return Ne.test(e)}function We(e){return e.split("")}var H="\\ud800-\\udfff",qe="\\u0300-\\u036f",De="\\ufe20-\\ufe2f",Ue="\\u20d0-\\u20ff",Ze=qe+De+Ue,Je="\\ufe0e\\ufe0f",Ke="["+H+"]",R="["+Ze+"]",j="\\ud83c[\\udffb-\\udfff]",Xe="(?:"+R+"|"+j+")",A="[^"+H+"]",V="(?:\\ud83c[\\udde6-\\uddff]){2}",N="[\\ud800-\\udbff][\\udc00-\\udfff]",Ye="\\u200d",W=Xe+"?",q="["+Je+"]?",Ge="(?:"+Ye+"(?:"+[A,V,N].join("|")+")"+q+W+")*",Qe=q+W+Ge,eo="(?:"+[A+R+"?",R,V,N,Ke].join("|")+")",oo=RegExp(j+"(?="+j+")|"+eo+Qe,"g");function ro(e){return e.match(oo)||[]}function to(e){return O(e)?ro(e):We(e)}function no(e){return function(t){t=Be(t);var o=O(t)?to(t):void 0,r=o?o[0]:t.charAt(0),n=o?Pe(o,1).join(""):t.slice(1);return r[e]()+n}}var ao=no("toUpperCase");const so=ao;function io(e,t){return h({name:so(e),setup(){var o;const r=(o=ye(ke,null))===null||o===void 0?void 0:o.mergedIconsRef;return()=>{var n;const i=(n=r==null?void 0:r.value)===null||n===void 0?void 0:n[e];return i?i():t}}})}const lo=io("close",d("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},d("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},d("g",{fill:"currentColor","fill-rule":"nonzero"},d("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),co=g("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[a("svg",`
 height: 1em;
 width: 1em;
 `)]),uo=h({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){P("-base-icon",co,I(e,"clsPrefix"))},render(){return d("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),bo=g("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[c("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),a("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),be("disabled",[a("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),a("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),a("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),a("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),c("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),c("round",[a("&::before",`
 border-radius: 50%;
 `)])]),go=h({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return P("-base-close",bo,I(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:o,absolute:r,round:n,isButtonTag:i}=e;return d(i?"button":"div",{type:i?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:i?void 0:"button",disabled:o,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,o&&`${t}-base-close--disabled`,n&&`${t}-base-close--round`],onMousedown:b=>{e.focusable||b.preventDefault()},onClick:e.onClick},d(uo,{clsPrefix:t},{default:()=>d(lo,null)}))}}}),fo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},po=e=>{const{primaryColor:t,borderRadius:o,lineHeight:r,fontSize:n,cardColor:i,textColor2:f,textColor1:b,dividerColor:l,fontWeightStrong:s,closeIconColor:p,closeIconColorHover:x,closeIconColorPressed:C,closeColorHover:S,closeColorPressed:z,modalColor:y,boxShadow1:k,popoverColor:w,actionColor:v}=e;return Object.assign(Object.assign({},fo),{lineHeight:r,color:i,colorModal:y,colorPopover:w,colorTarget:t,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:f,titleTextColor:b,borderColor:l,actionColor:v,titleFontWeight:s,closeColorHover:S,closeColorPressed:z,closeBorderRadius:o,closeIconColor:p,closeIconColorHover:x,closeIconColorPressed:C,fontSizeSmall:n,fontSizeMedium:n,fontSizeLarge:n,fontSizeHuge:n,boxShadow:k,borderRadius:o})},vo={name:"Card",common:ge,self:po},mo=vo,ho=a([g("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[fe({background:"var(--n-color-modal)"}),c("hoverable",[a("&:hover","box-shadow: var(--n-box-shadow);")]),c("content-segmented",[a(">",[u("content",{paddingTop:"var(--n-padding-bottom)"})])]),c("content-soft-segmented",[a(">",[u("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),c("footer-segmented",[a(">",[u("footer",{paddingTop:"var(--n-padding-bottom)"})])]),c("footer-soft-segmented",[a(">",[u("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),a(">",[g("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[u("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),u("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),u("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),u("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),u("content","flex: 1; min-width: 0;"),u("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[a("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),u("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),g("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[a("img",`
 display: block;
 width: 100%;
 `)]),c("bordered",`
 border: 1px solid var(--n-border-color);
 `,[a("&:target","border-color: var(--n-color-target);")]),c("action-segmented",[a(">",[u("action",[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("content-segmented, content-soft-segmented",[a(">",[u("content",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("footer-segmented, footer-soft-segmented",[a(">",[u("footer",{transition:"border-color 0.3s var(--n-bezier)"},[a("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),c("embedded",`
 background-color: var(--n-color-embedded);
 `)]),pe(g("card",`
 background: var(--n-color-modal);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ve(g("card",`
 background: var(--n-color-popover);
 `,[c("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),xo={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Co=Object.assign(Object.assign({},F.props),xo),yo=h({name:"Card",props:Co,setup(e){const t=()=>{const{onClose:s}=e;s&&xe(s)},{inlineThemeDisabled:o,mergedClsPrefixRef:r,mergedRtlRef:n}=we(e),i=F("Card","-card",ho,mo,e,r),f=me("Card",n,r),b=T(()=>{const{size:s}=e,{self:{color:p,colorModal:x,colorTarget:C,textColor:S,titleTextColor:z,titleFontWeight:y,borderColor:k,actionColor:w,borderRadius:v,lineHeight:D,closeIconColor:U,closeIconColorHover:Z,closeIconColorPressed:J,closeColorHover:K,closeColorPressed:X,closeBorderRadius:Y,closeIconSize:G,closeSize:Q,boxShadow:ee,colorPopover:oe,colorEmbedded:re,colorEmbeddedModal:te,colorEmbeddedPopover:ne,[_("padding",s)]:ae,[_("fontSize",s)]:se,[_("titleFontSize",s)]:ie},common:{cubicBezierEaseInOut:de}}=i.value,{top:le,left:ce,bottom:ue}=$e(ae);return{"--n-bezier":de,"--n-border-radius":v,"--n-color":p,"--n-color-modal":x,"--n-color-popover":oe,"--n-color-embedded":re,"--n-color-embedded-modal":te,"--n-color-embedded-popover":ne,"--n-color-target":C,"--n-text-color":S,"--n-line-height":D,"--n-action-color":w,"--n-title-text-color":z,"--n-title-font-weight":y,"--n-close-icon-color":U,"--n-close-icon-color-hover":Z,"--n-close-icon-color-pressed":J,"--n-close-color-hover":K,"--n-close-color-pressed":X,"--n-border-color":k,"--n-box-shadow":ee,"--n-padding-top":le,"--n-padding-bottom":ue,"--n-padding-left":ce,"--n-font-size":se,"--n-title-font-size":ie,"--n-close-size":Q,"--n-close-icon-size":G,"--n-close-border-radius":Y}}),l=o?he("card",T(()=>e.size[0]),b,e):void 0;return{rtlEnabled:f,mergedClsPrefix:r,mergedTheme:i,handleCloseClick:t,cssVars:o?void 0:b,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:t,hoverable:o,mergedClsPrefix:r,rtlEnabled:n,onRender:i,embedded:f,tag:b,$slots:l}=this;return i==null||i(),d(b,{class:[`${r}-card`,this.themeClass,f&&`${r}-card--embedded`,{[`${r}-card--rtl`]:n,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:t,[`${r}-card--hoverable`]:o}],style:this.cssVars,role:this.role},m(l.cover,s=>s&&d("div",{class:`${r}-card-cover`,role:"none"},s)),m(l.header,s=>s||this.title||this.closable?d("div",{class:`${r}-card-header`,style:this.headerStyle},d("div",{class:`${r}-card-header__main`,role:"heading"},s||this.title),m(l["header-extra"],p=>p&&d("div",{class:`${r}-card-header__extra`,style:this.headerExtraStyle},p)),this.closable?d(go,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(l.default,s=>s&&d("div",{class:`${r}-card__content`,style:this.contentStyle,role:"none"},s)),m(l.footer,s=>s&&[d("div",{class:`${r}-card__footer`,style:this.footerStyle,role:"none"},s)]),m(l.action,s=>s&&d("div",{class:`${r}-card__action`,role:"none"},s)))}}),ko=_e("cardStore",()=>{const e=$({path:"/topics/disasters",title:"天灾人祸",desc:"森林在人类生存和发展的历史中起着不可替代的作用，并且有着地球之肺的美称，它能大量地吸收二氧化碳，不断制造人类和其他生物所需的氧气。森林是“氧气制造厂”，是“粉尘过滤器”，是“天然蓄水库”，是“天然空调”……森林带给我们无穷无尽的好处！但是随着一些天灾人祸现象的发生，地球的森林面积显著减少，我们的家园正在遭到破坏。",bg:"/images/disasters_bg.jpg",second:[{cover:"/images/disasters_1_cover.jpg",title:"森林火灾",desc:"森林火灾是对森林的重要威胁之一，能使森林在顷刻之间化为灰烬。一棵幼苗长成大树常常需要几十年甚至上百年的时间，需要花费人们大量的心血和汗水，而一场森林火灾在几天或者几小时内就能把大片的森林毁灭，生活在森林内的珍贵野生动植物瞬间就消失了，有的甚至灭绝……损失之大是无法计算的。"},{cover:"/images/disasters_2_cover.jpg",title:"砍伐树木",desc:"由于人类的开发和需求，森林被砍伐已经成为世界上一个十分严峻的问题。据统计显示，近些年来每年全球失去的森林面积大约在1.6~1.9亿公顷之间，相当于每分钟会失去一个足球场大小的森林面积。砍伐森林不仅仅是影响到森林本身的生态系统，同时也会对环境、气候、动植物的生存造成极大的影响。"},{cover:"/images/disasters_3_cover.jpg",title:"森林病虫害",desc:"森林病害是指生物或非生物因素使林木在生理、组织和形态上发生的病理变化；森林害虫是指危害森林及林产品的昆虫。二者常合称为森林病虫害，可导致林木生长不良、产量和质量下降，甚至引起林木或整个林分的枯死和生态环境的恶化。"}]}),t=$({path:"/topics/protections",title:"环保之声",desc:"森林资源是人类赖以生存的重要资源之一，它不仅为我们提供了氧气和水源，还是动植的栖息地和生态系统的重要组成部分。然而，由于人类的过度开发和破坏，森林资源正面临着严重的威胁。为了保护森林资源，我们需要采取一系列措施。这里举例了三个例子，分别是坂本龙一、中国政府和国际组织。",bg:"/images/protections_bg.jpg",second:[{cover:"/images/protections_1_cover.jpg",title:"坂本龙一",desc:"坂本龙一先生对森林保护也一直关切。2007年，他与其他四位创始人合作成立了非营利组织“more trees（森林多）”，旨在推进“森林和人类共存”的社会理念。该组织至今仍在持续开展活动。同年，他与100多名作家、记者、音乐家、漫画家和诗人等艺术家一起支持绿色和平的森林保护运动“#OurVoicesAreVital”，并为此发声。"},{cover:"/images/protections_2_cover.jpg",title:"中国力量",desc:"广东是林业大省，截至2022年底，森林面积1.43亿亩，约占全省国土面积的53%；森林覆盖率53.03%，全国排名第5；林业产业约占全国的十分之一，连续12年位居全国第一。截至2022年底，广东现有古树名木84390株，其中树龄500年以上的古树761株、名木80株。今年，广东还将建设17个古树公园。"},{cover:"/images/protections_3_cover.png",title:"国际合作",desc:"联合国大会于2012年宣布3月21日为“国际森林日”（International Day of Forests），以庆祝和提高公众对所有类型森林重要性的认识。鼓励国家在地方、国家和国际层面举办与森林和树木相关活动，如植树活动。联合国森林论坛和联合国粮食及农业组织为主办方，各国政府、森林合作伙伴关系以及森林问题的其他相关组织为协作方。"}]}),o=$({path:"/topics/treasures",title:"神奇森林在哪里",desc:"森林，是以木本植物为主体的生物群落。具有丰富的物种、复杂的结构、多种多样的功能，被誉为“地球之肺”。森林，是一个高密度树木的区域，涵盖大约9.5%的地球表面（或30%的占总土地面积）。这些植物群落覆盖着全球大面积，并且对二氧化碳下降、动物群落、调节水文湍流和巩固土壤起着重要作用，是地球生物圈中最重要的生境之一。",bg:"/images/treasures_bg.jpg",second:[{cover:"/images/treasures_1_cover.jpg",title:"北极冰藻",desc:"？？？？"},{cover:"/images/treasures_2_cover.jpg",title:"热带雨林",desc:"热带雨林无疑是地球赐予地球上所有生物最为宝贵的资源之一。由于有超过25%的现代药物是由热带雨林植物所提炼，所以热带雨林被称为“世界上最大的药房”。同时由于众多雨林植物的光合作用净化地球空气的能力尤为强大，其中仅亚马逊热带雨林产生的氧气就占全球氧气总量的1/3，故有“地球之肺”的美誉。"},{cover:"/images/treasures_3_cover.jpg",title:"原始森林",desc:"原始森林，又称原生林，是指一个森林已经达到非常长久的年龄而没有遭到显著的干扰，从而表现出独特的生态特征，并可能被归类为顶极群落。原生特性包括多样化的树有关的结构，提供多样化的野生动物栖息地，增加了森林生态系统的生物多样性。树结构包括多层树冠和树冠间隙，很大变化的树的高度和直径，多样的树种和纲，和多种大小的木质残体。"}]});return{disasters:e,protections:t,treasures:o}});export{yo as _,so as a,Me as b,je as i,Be as t,ko as u};
