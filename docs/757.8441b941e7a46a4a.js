"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[757],{9757:(M,a,o)=>{o.r(a),o.d(a,{AchievementsModule:()=>P});var d=o(3879),l=o(7664),p=o(2734),t=o(4946),m=o(6306),g=o(8504),h=o(553),u=o(9862);let b=(()=>{class n{constructor(e){this.http=e,this.apiBaseUrl=h.N.apiBaseUrl}getAchievements(e){return this.http.get(this.apiBaseUrl+e).pipe((0,m.K)(this.handleError))}handleError(e){return 0===e.status?console.error("An error occurred:",e.error):console.error(`Backend returned code ${e.status}, body was: `,e.error),(0,g._)(()=>new Error("Something bad happened; please try again later."))}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var r=o(6814),v=o(7075);function f(n,s){if(1&n&&(t.TgZ(0,"div",21),t._UZ(1,"img",22),t.qZA()),2&n){const e=s.$implicit;t.ekj("active",e.active),t.xp6(1),t.Q6J("imgSrc",e.name)}}function x(n,s){if(1&n&&(t.TgZ(0,"button",23),t._UZ(1,"span",24),t.TgZ(2,"span",25),t._uU(3,"Previous"),t.qZA()()),2&n){const e=t.oxw().index;t.uIk("data-bs-target","#collapseexample"+e)}}function y(n,s){if(1&n&&(t.TgZ(0,"button",26),t._UZ(1,"span",27),t.TgZ(2,"span",25),t._uU(3,"Next"),t.qZA()()),2&n){const e=t.oxw().index;t.uIk("data-bs-target","#collapseexample"+e)}}function A(n,s){if(1&n&&(t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14),t.YNc(4,f,2,3,"div",15),t.qZA(),t.YNc(5,x,4,1,"button",16),t.YNc(6,y,4,1,"button",17),t.qZA(),t.TgZ(7,"div",18)(8,"h5",19),t._uU(9),t.qZA(),t.TgZ(10,"p",20),t._uU(11),t.qZA()()()()),2&n){const e=s.$implicit,i=s.index;t.xp6(2),t.MGl("id","collapseexample",i,""),t.xp6(2),t.Q6J("ngForOf",e.images),t.xp6(1),t.Q6J("ngIf",e.images&&e.images.length>1),t.xp6(1),t.Q6J("ngIf",e.images&&e.images.length>1),t.xp6(3),t.Oqu(e.heading),t.xp6(2),t.Oqu(e.text)}}const C=function(n){return{display:n}},Z=[{path:"",component:(()=>{class n{constructor(e){this.achievementsService=e,this.achievementsApi=p.G.FETCH_ACHIVEMENTS_API,this.openImgPopUp=!1,this.displayStyle="none",this.popUpImgUrl=""}ngOnInit(){this.achievementsService.getAchievements(this.achievementsApi).subscribe({next:e=>{e&&e.success&&(this.achievements=e.achievements)},error:e=>console.error(e),complete:()=>console.info("complete")})}openImgPopup(e){this.popUpImgUrl=e,this.displayStyle="block"}closeImgPopup(){this.displayStyle="none"}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(b))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-achievements"]],decls:12,vars:5,consts:[[1,"container"],[1,"row","mt-5"],["class","col-12 col-md-4 mt-5",4,"ngFor","ngForOf"],["tabindex","-1","role","dialog",1,"modal",3,"ngStyle"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"card","img-card"],["alt","Logo",3,"src"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],[1,"col-12","col-md-4","mt-5"],[1,"card"],["data-bs-ride","carousel",1,"carousel","slide",3,"id"],[1,"carousel-inner"],["class","carousel-item",3,"active",4,"ngFor","ngForOf"],["class","carousel-control-prev","type","button","data-bs-slide","prev",4,"ngIf"],["class","carousel-control-next","type","button","data-bs-slide","next",4,"ngIf"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"carousel-item"],["alt","...",1,"d-block","w-100",3,"imgSrc"],["type","button","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(i,c){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,A,12,6,"div",2),t.qZA()(),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),t._UZ(8,"img",8),t.qZA()(),t.TgZ(9,"div",9)(10,"button",10),t.NdJ("click",function(){return c.closeImgPopup()}),t._uU(11," Close "),t.qZA()()()()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",c.achievements),t.xp6(1),t.Q6J("ngStyle",t.VKq(3,C,c.displayStyle)),t.xp6(5),t.MGl("src","assets/",c.popUpImgUrl,"",t.LSH))},dependencies:[r.sg,r.O5,r.PC,v.t],styles:[".card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{border-top:3px solid #825e09db}.img-card[_ngcontent-%COMP%]{max-height:400px;overflow:scroll}.carousel-inner[_ngcontent-%COMP%]{height:300px;overflow:scroll}.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{width:7%}.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%]{height:35px;width:25px;background-color:#825e09db}.btn-primary[_ngcontent-%COMP%]{--bs-btn-color: #fff;--bs-btn-bg: #825e09db;--bs-btn-border-color: #825e09db;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #825e09db;--bs-btn-hover-border-color: #825e09db;--bs-btn-focus-shadow-rgb: 49,132,253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #825e09db;--bs-btn-active-border-color: #825e09db;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #825e09db;--bs-btn-disabled-border-color: #825e09db}"]})}return n})()}];let O=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]})}return n})(),P=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.m,O]})}return n})()}}]);