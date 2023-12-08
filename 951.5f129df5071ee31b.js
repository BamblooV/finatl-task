"use strict";(self.webpackChunkfinal_task=self.webpackChunkfinal_task||[]).push([[951],{7951:(O,d,i)=>{i.r(d),i.d(d,{ProfileComponent:()=>A});var c=i(6814),m=i(8645),l=i(9773),f=i(9397),p=i(336),g=i(3714),s=i(95),h=i(8926),_=i(3002),u=i(2628),t=i(5879),x=i(4221);function Z(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.setEditMode())}),t._uU(1,"Edit"),t.qZA()}}function I(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"span",10)(1,"button",11),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.editUserInfo())}),t.ALo(2,"async"),t._uU(3," Save "),t.qZA(),t.TgZ(4,"button",12),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.setViewMode())}),t.ALo(5,"async"),t._uU(6,"Cancel"),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("disabled",n.name.invalid||t.lcZ(2,2,n.loading$)),t.xp6(3),t.Q6J("disabled",t.lcZ(5,4,n.loading$))}}function M(e,r){if(1&e&&(t.TgZ(0,"div",8),t._uU(1),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(1),t.Oqu(n.name)}}function P(e,r){if(1&e&&(t.TgZ(0,"small",16),t._uU(1),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.Oqu(n.getErrorMessage(n.name))}}function E(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",13),t._UZ(2,"input",14),t.YNc(3,P,2,1,"small",15),t.qZA(),t.BQk()),2&e){const n=t.oxw(2);t.xp6(2),t.Q6J("formControl",n.name),t.xp6(1),t.Q6J("ngIf",(null==n.name?null:n.name.invalid)&&(null==n.name?null:n.name.touched))}}function v(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,Z,2,0,"button",2),t.YNc(3,I,7,6,"span",3),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.logout())}),t.ALo(5,"async"),t._uU(6,"Logout"),t.qZA()(),t.TgZ(7,"h2"),t._uU(8,"User profile"),t.qZA(),t.TgZ(9,"div",5)(10,"div",6),t._uU(11,"Name:"),t.qZA(),t.YNc(12,M,2,1,"div",7),t.YNc(13,E,4,2,"ng-container",0),t.qZA(),t.TgZ(14,"div",5)(15,"div",6),t._uU(16,"Email:"),t.qZA(),t.TgZ(17,"div",8),t._uU(18),t.qZA()(),t.TgZ(19,"div",5)(20,"div",6),t._uU(21,"ID:"),t.qZA(),t.TgZ(22,"div",8),t._uU(23),t.qZA()(),t.TgZ(24,"div",5)(25,"div",6),t._uU(26,"Created at:"),t.qZA(),t.TgZ(27,"div",8),t._uU(28),t.ALo(29,"date"),t.qZA()(),t.BQk()}if(2&e){const n=r.ngIf,o=t.oxw();t.xp6(2),t.Q6J("ngIf","view"===o.mode),t.xp6(1),t.Q6J("ngIf","edit"===o.mode),t.xp6(1),t.Q6J("disabled",t.lcZ(5,8,o.authLoading$)),t.xp6(8),t.Q6J("ngIf","view"===o.mode),t.xp6(1),t.Q6J("ngIf","edit"===o.mode),t.xp6(5),t.Oqu(n.email),t.xp6(5),t.Oqu(n.uid),t.xp6(5),t.Oqu(t.xi3(29,10,n.createdAt,"medium"))}}function T(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"h2",17),t._uU(2,"Something went wrong"),t.qZA(),t.TgZ(3,"div",5)(4,"div",6),t._uU(5),t.qZA()(),t._UZ(6,"div",1),t.BQk()),2&e){const n=r.ngIf;t.xp6(5),t.Oqu(n.message)}}function C(e,r){1&e&&(t.ynx(0),t.TgZ(1,"h2",17),t._uU(2,"Load user profile data"),t.qZA(),t.BQk())}let A=(()=>{class e{changeMode(n){this.mode=n}setEditMode(){this.changeMode("edit")}setViewMode(){this.changeMode("view"),this.name.reset()}editUserInfo(){this.name.invalid||this.store.dispatch(_.a.updateUserName({name:this.name.value}))}logout(){this.store.dispatch(u.u.logout())}constructor(n){this.store=n,this.errorMessages={required:"Field is required",maxlength:"Name max length is 40 characters",pattern:"Name should consist of letters and spaces"},this.mode="view",this.name=new s.NI("",[s.kI.required,s.kI.maxLength(40),s.kI.pattern(/^[a-zA-Z\s]+$/)]),this.destroy$=new m.x,this.userInfo$=this.store.select(_.h.S8).pipe((0,l.R)(this.destroy$),(0,f.b)(o=>{this.name=new s.NI(o?.name||"",{validators:[s.kI.required,s.kI.maxLength(40),s.kI.pattern(/^[a-zA-Z\s]+$/)],nonNullable:!0})})),this.loading$=this.store.select(_.h.In).pipe((0,l.R)(this.destroy$)),this.error$=this.store.select(_.h._7).pipe((0,l.R)(this.destroy$)),this.authLoading$=this.store.select(u.c.AP).pipe((0,l.R)(this.destroy$)),this.getErrorMessage=(0,h.a)(this.errorMessages)}ngOnInit(){this.store.dispatch(_.a.fetchUserInfo())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(x.yh))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],standalone:!0,features:[t.jDz],decls:7,vars:11,consts:[[4,"ngIf"],[1,"controls"],["pButton","","pRipple","","icon","pi pi-user-edit",3,"click",4,"ngIf"],["class","p-buttonset",4,"ngIf"],["pButton","","pRipple","","icon","pi pi-sign-out",3,"disabled","click"],[1,"data-row"],[1,"label"],["class","data",4,"ngIf"],[1,"data"],["pButton","","pRipple","","icon","pi pi-user-edit",3,"click"],[1,"p-buttonset"],["pButton","","pRipple","","icon","pi pi-save",3,"disabled","click"],["pButton","","pRipple","","icon","pi pi-times",3,"disabled","click"],[1,"field"],["type","text","pInputText","",3,"formControl"],["id","firstname-help","class","p-error",4,"ngIf"],["id","firstname-help",1,"p-error"],[1,"error-title"]],template:function(o,a){1&o&&(t.YNc(0,v,30,13,"ng-container",0),t.ALo(1,"async"),t.YNc(2,T,7,1,"ng-container",0),t.ALo(3,"async"),t.YNc(4,C,3,0,"ng-container",0),t.ALo(5,"async"),t.ALo(6,"async")),2&o&&(t.Q6J("ngIf",t.lcZ(1,3,a.userInfo$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,5,a.error$)),t.xp6(2),t.Q6J("ngIf",null===t.lcZ(5,7,a.userInfo$)&&t.lcZ(6,9,a.loading$)))},dependencies:[c.ez,c.O5,c.Ov,c.uU,p.hJ,p.Hq,g.j,g.o,s.UX,s.Fj,s.JJ,s.oH],styles:["[_nghost-%COMP%]{padding:10px 0;display:block}.data-row[_ngcontent-%COMP%]{margin-bottom:.5rem}.label[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}.data[_ngcontent-%COMP%]{margin-top:.25rem}.field[_ngcontent-%COMP%]{margin-top:.25rem;display:flex;flex-direction:column;gap:.1rem;max-width:20rem}.error-title[_ngcontent-%COMP%]{color:var(--red-800)}.controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%}"],changeDetection:0})}return e})()}}]);