"use strict";(self.webpackChunkfinal_task=self.webpackChunkfinal_task||[]).push([[951],{7951:(A,d,o)=>{o.r(d),o.d(d,{ProfileComponent:()=>C});var l=o(6814),g=o(8645),c=o(9773),u=o(9397),p=o(336),m=o(3714),r=o(95),f=o(8926),_=o(3002),t=o(5879),h=o(4221);function x(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.setEditMode())}),t._uU(1,"Edit"),t.qZA()}}function Z(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"span",9)(1,"button",10),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.editUserInfo())}),t.ALo(2,"async"),t._uU(3," Save "),t.qZA(),t.TgZ(4,"button",11),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.setViewMode())}),t.ALo(5,"async"),t._uU(6,"Cancel"),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("disabled",n.name.invalid||t.lcZ(2,2,n.loading$)),t.xp6(3),t.Q6J("disabled",t.lcZ(5,4,n.loading$))}}function v(e,a){if(1&e&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(1),t.Oqu(n.name)}}function I(e,a){if(1&e&&(t.TgZ(0,"small",15),t._uU(1),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.Oqu(n.getErrorMessage(n.name))}}function M(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",12),t._UZ(2,"input",13),t.YNc(3,I,2,1,"small",14),t.qZA(),t.BQk()),2&e){const n=t.oxw(2);t.xp6(2),t.Q6J("formControl",n.name),t.xp6(1),t.Q6J("ngIf",(null==n.name?null:n.name.invalid)&&(null==n.name?null:n.name.touched))}}function E(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,x,2,0,"button",2),t.YNc(3,Z,7,6,"span",3),t.qZA(),t.TgZ(4,"h2"),t._uU(5,"User profile"),t.qZA(),t.TgZ(6,"div",4)(7,"div",5),t._uU(8,"Name:"),t.qZA(),t.YNc(9,v,2,1,"div",6),t.YNc(10,M,4,2,"ng-container",0),t.qZA(),t.TgZ(11,"div",4)(12,"div",5),t._uU(13,"Email:"),t.qZA(),t.TgZ(14,"div",7),t._uU(15),t.qZA()(),t.TgZ(16,"div",4)(17,"div",5),t._uU(18,"ID:"),t.qZA(),t.TgZ(19,"div",7),t._uU(20),t.qZA()(),t.TgZ(21,"div",4)(22,"div",5),t._uU(23,"Created at:"),t.qZA(),t.TgZ(24,"div",7),t._uU(25),t.ALo(26,"date"),t.qZA()(),t.BQk()),2&e){const n=a.ngIf,i=t.oxw();t.xp6(2),t.Q6J("ngIf","view"===i.mode),t.xp6(1),t.Q6J("ngIf","edit"===i.mode),t.xp6(6),t.Q6J("ngIf","view"===i.mode),t.xp6(1),t.Q6J("ngIf","edit"===i.mode),t.xp6(5),t.Oqu(n.email),t.xp6(5),t.Oqu(n.uid),t.xp6(5),t.Oqu(t.xi3(26,7,n.createdAt,"medium"))}}function P(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"h2",16),t._uU(2,"Something went wrong"),t.qZA(),t.TgZ(3,"div",4)(4,"div",5),t._uU(5),t.qZA()(),t._UZ(6,"div",1),t.BQk()),2&e){const n=a.ngIf;t.xp6(5),t.Oqu(n.message)}}function T(e,a){1&e&&(t.ynx(0),t.TgZ(1,"h2",16),t._uU(2,"Load user profile data"),t.qZA(),t.BQk())}let C=(()=>{class e{changeMode(n){this.mode=n}setEditMode(){this.changeMode("edit")}setViewMode(){this.changeMode("view"),this.name.reset(this.initialName)}editUserInfo(){this.name.invalid||this.store.dispatch(_.a.updateUserName({name:this.name.value}))}constructor(n){this.store=n,this.errorMessages={required:"Field is required",maxlength:"Name max length is 40 characters",pattern:"Name should consist of letters and spaces"},this.mode="view",this.initialName="",this.name=new r.NI(this.initialName,[r.kI.required,r.kI.maxLength(40),r.kI.pattern(/^[a-zA-Z\s]+$/)]),this.destroy$=new g.x,this.userInfo$=this.store.select(_.h.S8).pipe((0,c.R)(this.destroy$),(0,u.b)(i=>{this.initialName=i?.name||"",this.name.setValue(this.initialName)})),this.loading$=this.store.select(_.h.In).pipe((0,c.R)(this.destroy$)),this.error$=this.store.select(_.h._7).pipe((0,c.R)(this.destroy$)),this.getErrorMessage=(0,f.a)(this.errorMessages)}ngOnInit(){this.store.dispatch(_.a.fetchUserInfo())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(h.yh))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],standalone:!0,features:[t.jDz],decls:7,vars:11,consts:[[4,"ngIf"],[1,"controls"],["pButton","","pRipple","","icon","pi pi-user-edit",3,"click",4,"ngIf"],["class","p-buttonset",4,"ngIf"],[1,"data-row"],[1,"label"],["class","data",4,"ngIf"],[1,"data"],["pButton","","pRipple","","icon","pi pi-user-edit",3,"click"],[1,"p-buttonset"],["pButton","","pRipple","","icon","pi pi-save",3,"disabled","click"],["pButton","","pRipple","","icon","pi pi-times",3,"disabled","click"],[1,"field"],["type","text","pInputText","",3,"formControl"],["id","firstname-help","class","p-error",4,"ngIf"],["id","firstname-help",1,"p-error"],[1,"error-title"]],template:function(i,s){1&i&&(t.YNc(0,E,27,10,"ng-container",0),t.ALo(1,"async"),t.YNc(2,P,7,1,"ng-container",0),t.ALo(3,"async"),t.YNc(4,T,3,0,"ng-container",0),t.ALo(5,"async"),t.ALo(6,"async")),2&i&&(t.Q6J("ngIf",t.lcZ(1,3,s.userInfo$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,5,s.error$)),t.xp6(2),t.Q6J("ngIf",null===t.lcZ(5,7,s.userInfo$)&&t.lcZ(6,9,s.loading$)))},dependencies:[l.ez,l.O5,l.Ov,l.uU,p.hJ,p.Hq,m.j,m.o,r.UX,r.Fj,r.JJ,r.oH],styles:["[_nghost-%COMP%]{padding:10px 0;display:block}.data-row[_ngcontent-%COMP%]{margin-bottom:.5rem}.label[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}.data[_ngcontent-%COMP%]{margin-top:.25rem}.field[_ngcontent-%COMP%]{margin-top:.25rem;display:flex;flex-direction:column;gap:.1rem;max-width:20rem}.error-title[_ngcontent-%COMP%]{color:var(--red-800)}"],changeDetection:0})}return e})()}}]);