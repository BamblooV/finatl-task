"use strict";(self.webpackChunkfinal_task=self.webpackChunkfinal_task||[]).push([[831],{8831:(v,g,o)=>{o.r(g),o.d(g,{default:()=>P});var s=o(6814),u=o(336),d=o(4087),t=o(5879),r=o(6223),p=o(4480);const m=function(e,c){return{"p-button-icon":!0,"p-button-icon-left":e,"p-button-icon-right":c}};function b(e,c){if(1&e&&t._UZ(0,"span",3),2&e){const n=t.oxw();t.Tol(n.checked?n.onIcon:n.offIcon),t.Q6J("ngClass",t.WLB(4,m,"left"===n.iconPos,"right"===n.iconPos)),t.uIk("data-pc-section","icon")}}function C(e,c){if(1&e&&(t.TgZ(0,"span",4),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.uIk("data-pc-section","label"),t.xp6(1),t.Oqu(n.checked?n.hasOnLabel?n.onLabel:"":n.hasOffLabel?n.offLabel:"")}}const y=function(e,c,n){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":e,"p-highlight":c,"p-disabled":n}},M={provide:r.JU,useExisting:(0,t.Gpc)(()=>f),multi:!0};let f=(()=>{class e{cd;onLabel;offLabel;onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex;iconPos="left";onChange=new t.vpe;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};constructor(n){this.cd=n}toggle(n){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:n,checked:this.checked}),this.cd.markForCheck())}onKeyDown(n){switch(n.code){case"Enter":case"Space":this.toggle(n),n.preventDefault()}}onBlur(){this.onModelTouched()}writeValue(n){this.checked=n,this.cd.markForCheck()}registerOnChange(n){this.onModelChange=n}registerOnTouched(n){this.onModelTouched=n}setDisabledState(n){this.disabled=n,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}static \u0275fac=function(i){return new(i||e)(t.Y36(t.sBO))};static \u0275cmp=t.Xpm({type:e,selectors:[["p-toggleButton"]],hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[t._Bn([M])],decls:3,vars:16,consts:[["role","switch","pRipple","",3,"ngClass","ngStyle","click","keydown"],[3,"class","ngClass",4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"ngClass"],[1,"p-button-label"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t.NdJ("click",function(l){return a.toggle(l)})("keydown",function(l){return a.onKeyDown(l)}),t.YNc(1,b,1,7,"span",1),t.YNc(2,C,2,2,"span",2),t.qZA()),2&i&&(t.Tol(a.styleClass),t.Q6J("ngClass",t.kEZ(12,y,a.onIcon&&a.offIcon&&!a.hasOnLabel&&!a.hasOffLabel,a.checked,a.disabled))("ngStyle",a.style),t.uIk("tabindex",a.disabled?null:"0")("aria-checked",a.checked)("aria-labelledby",a.ariaLabelledBy)("aria-label",a.ariaLabel)("data-pc-name","togglebutton")("data-pc-section","root"),t.xp6(1),t.Q6J("ngIf",a.onIcon||a.offIcon),t.xp6(1),t.Q6J("ngIf",a.onLabel||a.offLabel))},dependencies:[s.mk,s.O5,s.PC,p.H],styles:['@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}'],changeDetection:0})}return e})(),L=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[s.ez,p.T]})}return e})(),T=(()=>{class e{constructor(n){this.document=n,this.currentTheme=localStorage.getItem("theme")||"lara-light";const i=this.document.getElementById("app-theme");i&&(i.href=`${this.currentTheme}.css`)}switchTheme(n){this.currentTheme=n;const i=this.document.getElementById("app-theme");i&&(i.href=`${n}.css`,localStorage.setItem("theme",n))}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(s.K0))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const O=function(){return{width:"10em"}},P=[{path:"",component:(()=>{class e{changeTheme(n){this.theme.switchTheme(n.checked?"lara-dark":"lara-light")}constructor(n){this.theme=n,this.isDarkTheme="lara-dark"===this.theme.currentTheme}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(T))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout"]],standalone:!0,features:[t.jDz],decls:10,vars:8,consts:[[1,"header"],[1,"header-container"],["routerLink","/",1,"header-title"],["onLabel","Dark","offLabel","Light","offIcon","pi pi-sun",3,"ngModel","onIcon","ngModelChange","onChange"],[1,"user-chip"],["routerLink","profile",3,"label","text","plain"],[1,"main"],[1,"main-container"]],template:function(i,a){1&i&&(t.TgZ(0,"header",0)(1,"div",1)(2,"h1",2),t._uU(3,"Final Task"),t.qZA(),t.TgZ(4,"p-toggleButton",3),t.NdJ("ngModelChange",function(l){return a.isDarkTheme=l})("onChange",function(l){return a.changeTheme(l)}),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"p-button",5),t.qZA()()(),t.TgZ(7,"main",6)(8,"div",7),t._UZ(9,"router-outlet"),t.qZA()()),2&i&&(t.xp6(4),t.Akn(t.DdM(7,O)),t.Q6J("ngModel",a.isDarkTheme)("onIcon","pi pi-moon"),t.xp6(2),t.Q6J("label","UserName")("text",!0)("plain",!0))},dependencies:[s.ez,r.u5,r.JJ,r.On,d.Bz,d.lC,d.rH,u.hJ,u.zx,L,f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100vh}.header[_ngcontent-%COMP%]{background-color:var(--surface-300)}.header-container[_ngcontent-%COMP%]{flex:0 0 auto;width:100%;max-width:800px;margin:auto;display:flex;align-items:center;padding:0 20px;gap:1rem}.header-title[_ngcontent-%COMP%]{cursor:pointer}.main[_ngcontent-%COMP%]{flex:1 1 auto}.main-container[_ngcontent-%COMP%]{width:100%;max-width:800px;margin:auto;padding:0 20px}.user-chip[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0})}return e})(),children:[{path:"",loadComponent:()=>Promise.all([o.e(904),o.e(100),o.e(283)]).then(o.bind(o,1283)).then(e=>e.ChatsListComponent)},{path:"group/:groupID",loadComponent:()=>Promise.all([o.e(904),o.e(592),o.e(502)]).then(o.bind(o,7502)).then(e=>e.GroupDialogComponent)},{path:"conversation/:conversationID",loadComponent:()=>Promise.all([o.e(904),o.e(592),o.e(1)]).then(o.bind(o,2001)).then(e=>e.PersonConversationComponent)},{path:"profile",loadComponent:()=>o.e(951).then(o.bind(o,7951)).then(e=>e.ProfileComponent)}]}]}}]);