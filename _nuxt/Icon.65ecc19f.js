import{d as i,a as n,o}from"./light.4ae708e5.js";import{f as a,K as s,L as t}from"./entry.0313394d.js";const r=i("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[n("svg",`
 height: 1em;
 width: 1em;
 `)]),c=a({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){o("-base-icon",r,s(e,"clsPrefix"))},render(){return t("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});export{c as N};
