"use strict";(self.webpackChunkfinal_task=self.webpackChunkfinal_task||[]).push([[365],{8926:(Ct,S,l)=>{l.d(S,{a:()=>r});const r=y=>v=>{if(!v||!v.errors)return"";const C=Object.keys(v.errors)[0];return C&&y[C]&&y[C]||"Wrong value"}},95:(Ct,S,l)=>{l.d(S,{Fj:()=>k,qu:()=>Dn,NI:()=>w,oH:()=>ht,u:()=>gt,sg:()=>z,JU:()=>f,JJ:()=>$t,JL:()=>zt,On:()=>dt,UX:()=>An,kI:()=>Ge,_Y:()=>ae});var r=l(5879),y=l(6814),v=l(9666),C=l(5592),Z=l(7453),h=l(4829),Ee=l(4564),M=l(8251),p=l(7400),b=l(2714),Q=l(7398);let Dt=(()=>{class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq))};static#e=this.\u0275dir=r.lG2({type:e})}return e})(),V=(()=>{class e extends Dt{static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(e)))(o||e)}}();static#e=this.\u0275dir=r.lG2({type:e,features:[r.qOj]})}return e})();const f=new r.OlP("NgValueAccessor"),we={provide:f,useExisting:(0,r.Gpc)(()=>k),multi:!0},Se=new r.OlP("CompositionEventMode");let k=(()=>{class e extends Dt{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Oe(){const e=(0,y.q)()?(0,y.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(Se,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){1&i&&r.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[r._Bn([we]),r.qOj]})}return e})();function g(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function Mt(e){return null!=e&&"number"==typeof e.length}const u=new r.OlP("NgValidators"),m=new r.OlP("NgAsyncValidators"),Ne=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Ge{static min(n){return function bt(e){return n=>{if(g(n.value)||g(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function Et(e){return n=>{if(g(n.value)||g(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function Ft(e){return g(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function wt(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function Ot(e){return g(e.value)||Ne.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function St(e){return n=>g(n.value)||!Mt(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function Nt(e){return n=>Mt(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function Gt(e){if(!e)return P;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(g(i.value))return null;const o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return Tt(n)}static composeAsync(n){return Ht(n)}}function P(e){return null}function Bt(e){return null!=e}function xt(e){return(0,r.QGY)(e)?(0,v.D)(e):e}function It(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function kt(e,n){return n.map(t=>t(e))}function Pt(e){return e.map(n=>function Be(e){return!e.validate}(n)?n:t=>n.validate(t))}function Tt(e){if(!e)return null;const n=e.filter(Bt);return 0==n.length?null:function(t){return It(kt(t,n))}}function K(e){return null!=e?Tt(Pt(e)):null}function Ht(e){if(!e)return null;const n=e.filter(Bt);return 0==n.length?null:function(t){return function Vt(...e){const n=(0,Ee.jO)(e),{args:t,keys:i}=(0,Z.D)(e),o=new C.y(s=>{const{length:a}=t;if(!a)return void s.complete();const c=new Array(a);let A=a,O=a;for(let J=0;J<a;J++){let vt=!1;(0,h.Xf)(t[J]).subscribe((0,M.x)(s,Mn=>{vt||(vt=!0,O--),c[J]=Mn},()=>A--,void 0,()=>{(!A||!vt)&&(O||s.next(i?(0,b.n)(i,c):c),s.complete())}))}});return n?o.pipe((0,p.Z)(n)):o}(kt(t,n).map(xt)).pipe((0,Q.U)(It))}}function X(e){return null!=e?Ht(Pt(e)):null}function Ut(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function jt(e){return e._rawValidators}function Rt(e){return e._rawAsyncValidators}function tt(e){return e?Array.isArray(e)?e:[e]:[]}function T(e,n){return Array.isArray(e)?e.includes(n):e===n}function Lt(e,n){const t=tt(n);return tt(e).forEach(o=>{T(t,o)||t.push(o)}),t}function Yt(e,n){return tt(n).filter(t=>!T(e,t))}class qt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=K(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=X(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class d extends qt{get formDirective(){return null}get path(){return null}}class _ extends qt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Wt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let $t=(()=>{class e extends Wt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(_,2))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){2&i&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[r.qOj]})}return e})(),zt=(()=>{class e extends Wt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,10))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){2&i&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[r.qOj]})}return e})();const N="VALID",U="INVALID",E="PENDING",G="DISABLED";function it(e){return(j(e)?e.validators:e)||null}function rt(e,n){return(j(n)?n.asyncValidators:e)||null}function j(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Zt(e,n,t){const i=e.controls;if(!(n?Object.keys(i):i).length)throw new r.vHH(1e3,"");if(!i[t])throw new r.vHH(1001,"")}function Qt(e,n,t){e._forEachChild((i,o)=>{if(void 0===t[o])throw new r.vHH(1002,"")})}class R{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===N}get invalid(){return this.status===U}get pending(){return this.status==E}get disabled(){return this.status===G}get enabled(){return this.status!==G}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Lt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Lt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Yt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Yt(n,this._rawAsyncValidators))}hasValidator(n){return T(this._rawValidators,n)}hasAsyncValidator(n){return T(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=E,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=G,this.errors=null,this._forEachChild(i=>{i.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=N,this._forEachChild(i=>{i.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===E)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?G:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;const t=xt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){const i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?G:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(U)?U:N}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){j(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Pe(e){return Array.isArray(e)?K(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Te(e){return Array.isArray(e)?X(e):e||null}(this._rawAsyncValidators)}}class B extends R{constructor(n,t,i){super(it(t),rt(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){Qt(this,0,n),Object.keys(n).forEach(i=>{Zt(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(i=>{const o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>!!i._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,s)=>{i=t(i,o,s)}),i}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}class Kt extends B{}const F=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>L}),L="always";function Y(e,n){return[...n.path,e]}function x(e,n,t=L){ot(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Ue(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Xt(e,n)})}(e,n),function Re(e,n){const t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function je(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Xt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function He(e,n){if(n.valueAccessor.setDisabledState){const t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function q(e,n,t=!0){const i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),$(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function W(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function ot(e,n){const t=jt(e);null!==n.validator?e.setValidators(Ut(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const i=Rt(e);null!==n.asyncValidator?e.setAsyncValidators(Ut(i,n.asyncValidator)):"function"==typeof i&&e.setAsyncValidators([i]);const o=()=>e.updateValueAndValidity();W(n._rawValidators,o),W(n._rawAsyncValidators,o)}function $(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=jt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=Rt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const i=()=>{};return W(n._rawValidators,i),W(n._rawAsyncValidators,i),t}function Xt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function at(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}function lt(e,n){if(!n)return null;let t,i,o;return Array.isArray(n),n.forEach(s=>{s.constructor===k?t=s:function qe(e){return Object.getPrototypeOf(e.constructor)===V}(s)?i=s:o=s}),o||i||t||null}function ne(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function ie(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const w=class extends R{constructor(n=null,t,i){super(it(t),rt(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=ie(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){ne(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){ne(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){ie(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},Ze={provide:_,useExisting:(0,r.Gpc)(()=>dt)},se=(()=>Promise.resolve())();let dt=(()=>{class e extends _{constructor(t,i,o,s,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this.control=new w,this._registered=!1,this.name="",this.update=new r.vpe,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=lt(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),at(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){x(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){se.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const i=t.isDisabled.currentValue,o=0!==i&&(0,r.VuI)(i);se.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Y(t,this._parent):[t]}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,9),r.Y36(u,10),r.Y36(m,10),r.Y36(f,10),r.Y36(r.sBO,8),r.Y36(F,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r._Bn([Ze]),r.qOj,r.TTD]})}return e})(),ae=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})(),ue=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({})}return e})();const ct=new r.OlP("NgModelWithFormControlWarning"),en={provide:_,useExisting:(0,r.Gpc)(()=>ht)};let ht=(()=>{class e extends _{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,i,o,s,a){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=a,this.update=new r.vpe,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=lt(0,o)}ngOnChanges(t){if(this._isControlChanged(t)){const i=t.form.previousValue;i&&q(i,this,!1),x(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}at(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&q(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static#e=this.\u0275fac=function(i){return new(i||e)(r.Y36(u,10),r.Y36(m,10),r.Y36(f,10),r.Y36(ct,8),r.Y36(F,8))};static#n=this.\u0275dir=r.lG2({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[r._Bn([en]),r.qOj,r.TTD]})}return e})();const nn={provide:d,useExisting:(0,r.Gpc)(()=>z)};let z=(()=>{class e extends d{constructor(t,i,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const i=this.form.get(t.path);return x(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){q(t.control||null,t,!1),function We(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this.submitted=!0,function ee(e,n){e._syncPendingControls(),n.forEach(t=>{const i=t.control;"submit"===i.updateOn&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const i=t.control,o=this.form.get(t.path);i!==o&&(q(i||null,t),(e=>e instanceof w)(o)&&(x(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const i=this.form.get(t.path);(function te(e,n){ot(e,n)})(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const i=this.form.get(t.path);i&&function Le(e,n){return $(e,n)}(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ot(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(u,10),r.Y36(m,10),r.Y36(F,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){1&i&&r.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([nn]),r.qOj,r.TTD]})}return e})();const sn={provide:_,useExisting:(0,r.Gpc)(()=>gt)};let gt=(()=>{class e extends _{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,i,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new r.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=lt(0,s)}ngOnChanges(t){this._added||this._setUpControl(),at(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Y(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,13),r.Y36(u,10),r.Y36(m,10),r.Y36(f,10),r.Y36(ct,8))};static#n=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r._Bn([sn]),r.qOj,r.TTD]})}return e})(),Vn=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[ue]})}return e})();class Me extends R{constructor(n,t,i){super(it(t),rt(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){Qt(this,0,n),n.forEach((i,o)=>{Zt(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>!!i._syncPendingControls()||t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}}function be(e){return!!e&&(void 0!==e.asyncValidators||void 0!==e.validators||void 0!==e.updateOn)}let Dn=(()=>{class e{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new e;return t.useNonNullable=!0,t}group(t,i=null){const o=this._reduceControls(t);let s={};return be(i)?s=i:null!==i&&(s.validators=i.validator,s.asyncValidators=i.asyncValidator),new B(o,s)}record(t,i=null){const o=this._reduceControls(t);return new Kt(o,i)}control(t,i,o){let s={};return this.useNonNullable?(be(i)?s=i:(s.validators=i,s.asyncValidators=o),new w(t,{...s,nonNullable:!0})):new w(t,i,o)}array(t,i,o){const s=t.map(a=>this._createControl(a));return new Me(s,i,o)}_reduceControls(t){const i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){return t instanceof w||t instanceof R?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),An=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ct,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:F,useValue:t.callSetDisabledState??L}]}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[Vn]})}return e})()},3714:(Ct,S,l)=>{l.d(S,{j:()=>Z,o:()=>C});var r=l(5879),y=l(6814),v=l(95);let C=(()=>{class h{el;ngModel;cd;filled;constructor(M,p,b){this.el=M,this.ngModel=p,this.cd=b}ngAfterViewInit(){this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(p){return new(p||h)(r.Y36(r.SBq),r.Y36(v.On,8),r.Y36(r.sBO))};static \u0275dir=r.lG2({type:h,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:2,hostBindings:function(p,b){1&p&&r.NdJ("input",function(Q){return b.onInput(Q)}),2&p&&r.ekj("p-filled",b.filled)}})}return h})(),Z=(()=>{class h{static \u0275fac=function(p){return new(p||h)};static \u0275mod=r.oAB({type:h});static \u0275inj=r.cJS({imports:[y.ez]})}return h})()}}]);