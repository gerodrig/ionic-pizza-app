(self.webpackChunkAssignment_3=self.webpackChunkAssignment_3||[]).push([[9411],{9411:(t,i,e)=>{"use strict";e.r(i),e.d(i,{HomePageModule:()=>q});var n=e(1116),r=e(1462),o=e(6611),c=e(4989),s=e(460),d=e(8619),u=e(1179);let g=(()=>{class t{constructor(){this.number=new d.vpe}ngOnInit(){}addNumber(t){this.number.emit(t)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-register"]],outputs:{number:"number"},decls:41,vars:0,consts:[[1,"register"],["color","dark","fill","outline",1,"btn",3,"click"],[1,"num"],["color","danger",1,"btn","ion-no-padding",3,"click"],[1,"btn-reset"],["color","success",1,"btn","ion-no-padding",3,"click"],[1,"btn-add"]],template:function(t,i){1&t&&(d.TgZ(0,"ion-grid",0),d.TgZ(1,"ion-row"),d.TgZ(2,"ion-button",1),d.NdJ("click",function(){return i.addNumber(1)}),d.TgZ(3,"p",2),d._uU(4,"1"),d.qZA(),d.qZA(),d.TgZ(5,"ion-button",1),d.NdJ("click",function(){return i.addNumber(2)}),d.TgZ(6,"p",2),d._uU(7,"2"),d.qZA(),d.qZA(),d.TgZ(8,"ion-button",1),d.NdJ("click",function(){return i.addNumber(3)}),d.TgZ(9,"p",2),d._uU(10,"3"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"ion-row"),d.TgZ(12,"ion-button",1),d.NdJ("click",function(){return i.addNumber(4)}),d.TgZ(13,"p",2),d._uU(14,"4"),d.qZA(),d.qZA(),d.TgZ(15,"ion-button",1),d.NdJ("click",function(){return i.addNumber(5)}),d.TgZ(16,"p",2),d._uU(17,"5"),d.qZA(),d.qZA(),d.TgZ(18,"ion-button",1),d.NdJ("click",function(){return i.addNumber(6)}),d.TgZ(19,"p",2),d._uU(20,"6"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(21,"ion-row"),d.TgZ(22,"ion-button",1),d.NdJ("click",function(){return i.addNumber(7)}),d.TgZ(23,"p",2),d._uU(24,"7"),d.qZA(),d.qZA(),d.TgZ(25,"ion-button",1),d.NdJ("click",function(){return i.addNumber(8)}),d.TgZ(26,"p",2),d._uU(27,"8"),d.qZA(),d.qZA(),d.TgZ(28,"ion-button",1),d.NdJ("click",function(){return i.addNumber(9)}),d.TgZ(29,"p",2),d._uU(30,"9"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(31,"ion-row"),d.TgZ(32,"ion-button",3),d.NdJ("click",function(){return i.addNumber(-1)}),d.TgZ(33,"p",4),d._uU(34,"RESET"),d.qZA(),d.qZA(),d.TgZ(35,"ion-button",1),d.NdJ("click",function(){return i.addNumber(0)}),d.TgZ(36,"p",2),d._uU(37,"0"),d.qZA(),d.qZA(),d.TgZ(38,"ion-button",5),d.NdJ("click",function(){return i.addNumber(-2)}),d.TgZ(39,"p",6),d._uU(40,"ADD"),d.qZA(),d.qZA(),d.qZA(),d.qZA())},directives:[o.jY,o.Nd,o.YG],styles:[".btn[_ngcontent-%COMP%]{background-color:#d6d4d4;border-radius:10px;margin-left:10px}.num[_ngcontent-%COMP%]{padding:5px}.btn-reset[_ngcontent-%COMP%]{font-size:small;padding:8px}.btn-add[_ngcontent-%COMP%]{font-size:small;padding:13px}.register[_ngcontent-%COMP%]{margin-left:30px}"]}),t})();function p(t,i){if(1&t){const t=d.EpF();d.TgZ(0,"ion-item",12),d.NdJ("click",function(){const i=d.CHM(t).$implicit;return d.oxw().selectTopping(i)}),d.TgZ(1,"ion-label"),d._uU(2),d.qZA(),d.qZA()}if(2&t){const t=i.$implicit,e=d.oxw();d.Q6J("color",t.name===e.currentTopping.name?"warning":""),d.xp6(2),d.hij(" ",t.name," ")}}function a(t,i){if(1&t){const t=d.EpF();d.TgZ(0,"ion-item",12),d.NdJ("click",function(){const i=d.CHM(t).$implicit;return d.oxw().selectSize(i)}),d.TgZ(1,"ion-label"),d._uU(2),d.qZA(),d.qZA()}if(2&t){const t=i.$implicit,e=d.oxw();d.Q6J("color",t.size===e.currentSize.size?"warning":""),d.xp6(2),d.hij(" ",t.size," ")}}const Z=[{path:"",component:(()=>{class t{constructor(t){this.data=t,this.order=[],this.qtyOrdered="none",this.currentPizza={qty:0,price:0,topping:"",size:""},this.toppingSelected=!1,this.sizeSelected=!1,this.currentTopping={name:"0",price:0},this.currentSize={size:"0",price:0},this.qty=0,this.total=0}numberSelected(t){return-1===t?this.clear():-2===t?this.add():"none"===this.qtyOrdered?this.qtyOrdered=t.toString():this.qtyOrdered.length>1?this.qtyOrdered=this.qtyOrdered.charAt(1)+t:this.qtyOrdered+=t}ngOnInit(){this.toppings=this.data.getToppings,this.sizes=this.data.getSizes}ionViewDidEnter(){if(null===this.data.getOrder)return this.order=[],this.qty=0,void(this.total=0);this.order=this.data.getOrder.order,this.qty=this.data.getOrder.quantity,this.total=this.data.getOrder.total}selectTopping(t){this.currentTopping=t,this.toppingSelected=!0}selectSize(t){this.currentSize=t,this.sizeSelected=!0}clear(){this.qtyOrdered="none",this.currentTopping={name:"0",price:0},this.currentSize={size:"0",price:0},this.toppingSelected=!1,this.sizeSelected=!1}add(){if("0"===this.currentSize.size||"0"===this.currentTopping.name||"none"===this.qtyOrdered||"0"===this.qtyOrdered)return s.jj.fire({icon:"error",title:"Error",text:"Quantity, Topping and Size MUST be selected"});this.qty+=parseInt(this.qtyOrdered),this.currentPizza={qty:parseInt(this.qtyOrdered),price:(this.currentTopping.price+this.currentSize.price)*parseInt(this.qtyOrdered),topping:this.currentTopping.name,size:this.currentSize.size},this.total+=this.currentPizza.price,this.order.push(this.currentPizza),s.fB.fire({icon:"success",title:"Success!!",text:`Your order has now ${this.qty} pizza${1===this.qty?"":"s"}, and the total is ${this.total.toFixed(2)} CAD`}),this.data.setOrder(this.order,this.qty,this.total),this.clear()}}return t.\u0275fac=function(i){return new(i||t)(d.Y36(u.p))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-home"]],decls:31,vars:5,consts:[["color","primary"],[1,"custom-grid-padding"],["size","8"],[1,"image"],["src","./assets/pizza-icon.jpg"],["size","4"],["color","primary","routerLink","/myOrder",1,"btn-manager"],[1,"register",3,"number"],[2,"height","40%"],[2,"height","100%"],["size","6"],[3,"color","click",4,"ngFor","ngForOf"],[3,"color","click"]],template:function(t,i){1&t&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar",0),d.TgZ(2,"ion-title"),d._uU(3,"Pizza App"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(4,"ion-content"),d.TgZ(5,"ion-grid",1),d.TgZ(6,"ion-row"),d.TgZ(7,"ion-col",2),d.TgZ(8,"div",3),d._UZ(9,"img",4),d.qZA(),d.qZA(),d.TgZ(10,"ion-col",5),d.TgZ(11,"div"),d.TgZ(12,"ion-button",6),d._uU(13,"MY ORDER"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(14,"p"),d._uU(15),d.qZA(),d.TgZ(16,"app-register",7),d.NdJ("number",function(t){return i.numberSelected(t)}),d.qZA(),d.TgZ(17,"ion-grid",8),d.TgZ(18,"ion-row",9),d.TgZ(19,"ion-col",10),d.TgZ(20,"h6"),d._uU(21),d.qZA(),d.TgZ(22,"ion-content"),d.TgZ(23,"ion-list"),d.YNc(24,p,3,2,"ion-item",11),d.qZA(),d.qZA(),d.qZA(),d.TgZ(25,"ion-col",10),d.TgZ(26,"h6"),d._uU(27),d.qZA(),d.TgZ(28,"ion-content"),d.TgZ(29,"ion-list"),d.YNc(30,a,3,2,"ion-item",11),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(15),d.hij("Quantity: ",i.qtyOrdered,""),d.xp6(6),d.hij("Topping: ",i.currentTopping.name,""),d.xp6(3),d.Q6J("ngForOf",i.toppings),d.xp6(3),d.hij("Size: ",i.currentSize.size,""),d.xp6(3),d.Q6J("ngForOf",i.sizes))},directives:[o.Gu,o.sr,o.wd,o.W2,o.jY,o.Nd,o.wI,o.YG,o.YI,c.rH,g,o.q_,n.sg,o.Ie,o.Q$],styles:[".image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:40%;max-width:40%;display:block;margin:auto}p[_ngcontent-%COMP%]{margin-left:20px}ion-label[_ngcontent-%COMP%]{color:hotpink!important}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),t})();var h=e(5530);let q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[n.ez,r.u5,o.Pc,l,h.K]]}),t})()}}]);