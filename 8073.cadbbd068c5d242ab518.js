(self.webpackChunkAssignment_3=self.webpackChunkAssignment_3||[]).push([[8073],{5530:(e,t,r)=>{"use strict";r.d(t,{K:()=>o});var n=r(1116),s=r(6611),i=r(8619);let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[n.ez,s.Pc]]}),e})()},653:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PreviousOrdersPageModule:()=>Z});var n=r(1116),s=r(1462),i=r(6611),o=r(4989),c=r(8619),a=r(2266),d=r(5431);function p(e,t){if(1&e&&(c.TgZ(0,"ion-item"),c.TgZ(1,"ion-label"),c.TgZ(2,"ion-grid",2),c.TgZ(3,"ion-row"),c.TgZ(4,"ion-col",6),c.TgZ(5,"p",7),c._uU(6),c.ALo(7,"date"),c.qZA(),c.TgZ(8,"p",8),c._uU(9),c.ALo(10,"number"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e){const e=t.$implicit;c.xp6(6),c.Oqu(c.xi3(7,3,e.purchaseDate,"medium")),c.xp6(3),c.AsE("Amount paid: $",c.xi3(10,6,e.total,"1.2-2")," CAD, total pizzas ordered ",e.quantity,"")}}function g(e,t){if(1&e&&(c.TgZ(0,"ion-content",2),c.TgZ(1,"ion-text",3),c.TgZ(2,"div",4),c.TgZ(3,"h2"),c._uU(4,"Transactions History"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(5,"ion-list"),c.YNc(6,p,11,9,"ion-item",5),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(6),c.Q6J("ngForOf",e.ordersHistory)}}function u(e,t){1&e&&(c.TgZ(0,"ion-content",9),c.TgZ(1,"ion-text",3),c.TgZ(2,"div",4),c.TgZ(3,"p"),c._uU(4,"No orders have been purchased"),c.qZA(),c.qZA(),c.qZA(),c.qZA())}const l=[{path:"",component:(()=>{class e{constructor(e){this.history=e,this.ordersHistory=[]}ngOnInit(){this.ordersHistory=this.history.getOrdersHistory}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(a.q))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-previous-orders"]],decls:4,vars:2,consts:[["class","ion-no-padding",4,"ngIf","ngIfElse"],["noOrders",""],[1,"ion-no-padding"],[1,"ion-text-center"],[1,"header"],[4,"ngFor","ngForOf"],["size","12",1,"ion-align-items-start"],[1,"date"],[1,"history"],[1,"ion-padding"]],template:function(e,t){if(1&e&&(c._UZ(0,"app-header"),c.YNc(1,g,7,1,"ion-content",0),c.YNc(2,u,5,0,"ng-template",null,1,c.W1O)),2&e){const e=c.MAs(3);c.xp6(1),c.Q6J("ngIf",t.ordersHistory.length>0)("ngIfElse",e)}},directives:[d.G,n.O5,i.W2,i.yW,i.q_,n.sg,i.Ie,i.Q$,i.jY,i.Nd,i.wI],pipes:[n.uU,n.JJ],styles:[".date[_ngcontent-%COMP%]{color:red}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .history[_ngcontent-%COMP%]{color:grey}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:x-large;padding:0;margin-top:0;margin-bottom:5px}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.Bz.forChild(l)],o.Bz]}),e})();var h=r(5530);let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,s.u5,i.Pc,m,h.K]]}),e})()},1179:(e,t,r)=>{"use strict";r.d(t,{p:()=>s});var n=r(8619);let s=(()=>{class e{constructor(){this._myOrders=null,this._myCurrentOrder=[],this._toppings=[{name:"Vegetables",price:2.49},{name:"Meat Balls",price:4.99},{name:"Pepperoni",price:3.99},{name:"Mushrooms",price:2.99}],this._sizes=[{size:"Large",price:8.49},{size:"Medium",price:7.99},{size:"Small",price:6.99},{size:"Party",price:10.99}]}get getToppings(){return[...this._toppings]}get getSizes(){return[...this._sizes]}get getOrder(){return this._myOrders}get getCurrentOrder(){return this._myCurrentOrder}setOrder(e,t,r){this._myOrders={order:e,quantity:t,purchaseDate:new Date,total:r}}updateOrder(e){this._myOrders=e,this._myCurrentOrder=this._myOrders.order,console.log(this._myOrders)}clearOrder(){this._myOrders=null,this._myCurrentOrder=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);