"use strict";(self.webpackChunkfinal_task=self.webpackChunkfinal_task||[]).push([[626],{7626:(I,l,t)=>{t.r(l),t.d(l,{LoginComponent:()=>v});var a=t(6814),n=t(95),f=t(5961),m=t(336),d=t(4532),_=t(5359),u=t(3714),c=t(9502),p=t(1423),h=t(8645),C=t(9773),M=t(2181),O=t(8926),g=t(2284),P=t(2628),o=t(5879),D=t(4221);function A(e,E){if(1&e&&(o.TgZ(0,"small",13),o._uU(1),o.qZA()),2&e){const s=o.oxw();o.xp6(1),o.Oqu(s.getErrorMessage(s.emailControl))}}function T(e,E){if(1&e&&(o.TgZ(0,"small",14),o._uU(1),o.qZA()),2&e){const s=o.oxw();o.xp6(1),o.Oqu(s.getErrorMessage(s.passwordControl))}}function U(e,E){if(1&e&&(o.TgZ(0,"small",15),o._uU(1),o.qZA()),2&e){const s=o.oxw();o.xp6(1),o.Oqu(s.getErrorMessage(s.form))}}let v=(()=>{class e{get emailControl(){return this.form.get("email")}get passwordControl(){return this.form.get("password")}onSubmit(){if(this.form.markAllAsTouched(),this.form.invalid)return;const{email:s,password:i}=this.form.value;s&&i&&this.store.dispatch(P.u.loginUser({credentials:{email:s,password:i}}))}constructor(s,i){this.fb=s,this.store=i,this.errorMessages={required:"Field is required",email:"Incorrect email",notFound:"Unknown email or password"},this.destroy$=new h.x,this.isLoading$=this.store.select(g.AP),this.emailError$=this.store.select(g.Hn).pipe((0,C.R)(this.destroy$),(0,M.h)(r=>!!r&&"NotFoundException"===r.type)).subscribe({next:()=>{this.form.setErrors({notFound:!0})}}),this.form=this.fb.group({email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required]]}),this.getErrorMessage=(0,O.a)(this.errorMessages)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#o=this.\u0275fac=function(i){return new(i||e)(o.Y36(n.qu),o.Y36(D.yh))};static#t=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[o.jDz],decls:23,vars:11,consts:[[1,"form-container"],[1,"title"],["routerLink","../signup",1,"p-fluid",3,"raised"],[3,"formGroup"],[1,"field","p-fluid"],["for","email"],["formControlName","email","id","email","type","email","aria-describedby","Enter your email","autocomplete","email","pInputText",""],["id","email-help","class","p-error",4,"ngIf"],["for","password"],["formControlName","password","id","password","aria-describedby","Enter your password","autocomplete","new-password",3,"toggleMask","feedback"],["id","password-help","class","p-error",4,"ngIf"],["class","p-error",4,"ngIf"],["type","submit",1,"submit-btn",3,"disabled","raised","onClick"],["id","email-help",1,"p-error"],["id","password-help",1,"p-error"],[1,"p-error"]],template:function(i,r){1&i&&(o.TgZ(0,"p-card",0)(1,"h2",1),o._uU(2,"Are you new here? Create account!"),o.qZA(),o.TgZ(3,"p-button",2),o._uU(4,"Sign up"),o.qZA(),o._UZ(5,"p-divider"),o.TgZ(6,"h2",1),o._uU(7,"Hurry up to log in!"),o.qZA(),o.TgZ(8,"form",3)(9,"div",4)(10,"label",5),o._uU(11,"Email"),o.qZA(),o._UZ(12,"input",6),o.YNc(13,A,2,1,"small",7),o.qZA(),o.TgZ(14,"div",4)(15,"label",8),o._uU(16,"Password"),o.qZA(),o._UZ(17,"p-password",9),o.YNc(18,T,2,1,"small",10),o.YNc(19,U,2,1,"small",11),o.qZA(),o.TgZ(20,"p-button",12),o.NdJ("onClick",function(L){return r.onSubmit(),L.preventDefault()}),o.ALo(21,"async"),o._uU(22,"Log in"),o.qZA()()()),2&i&&(o.xp6(3),o.Q6J("raised",!0),o.xp6(5),o.Q6J("formGroup",r.form),o.xp6(5),o.Q6J("ngIf",(null==r.emailControl?null:r.emailControl.invalid)&&(null==r.emailControl?null:r.emailControl.touched)),o.xp6(4),o.Q6J("toggleMask",!0)("feedback",!1),o.xp6(1),o.Q6J("ngIf",(null==r.passwordControl?null:r.passwordControl.invalid)&&(null==r.passwordControl?null:r.passwordControl.touched)),o.xp6(1),o.Q6J("ngIf",r.form.invalid&&r.form.touched),o.xp6(1),o.Q6J("disabled",r.form.invalid||!!o.lcZ(21,9,r.isLoading$))("raised",!0))},dependencies:[a.ez,a.O5,a.Ov,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,d.d,d.Z,m.hJ,m.zx,_.x,_.i,u.j,u.o,c.$,f.rH,p.gz,p.ro],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.form-container[_ngcontent-%COMP%]{max-width:500px;width:100%}.title[_ngcontent-%COMP%]{font-size:1rem}.field[_ngcontent-%COMP%]{margin-top:.5rem}.submit-btn[_ngcontent-%COMP%]{margin-top:.5rem;display:block}"],changeDetection:0})}return e})()}}]);