"use strict";(self.webpackChunkmemoryCards=self.webpackChunkmemoryCards||[]).push([[677],{4677:(S,m,a)=>{a.r(m),a.d(m,{GameModule:()=>A});var c=a(6895),d=a(9615),e=a(1571),s=a(1397);function g(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",2),e.NdJ("click",function(){const r=e.CHM(n),u=r.index,Z=r.$implicit,T=e.oxw();return e.KtG(T.onNumeroClick(u,Z))}),e._uU(1),e.qZA()}if(2&t){const n=o.$implicit,i=o.index,r=e.oxw();e.ekj("numeros-inhabilitados",r.inhabilitarClick)("numero-acertado",n===r.numeroParaAdivinar&&i===r.indexNumeroClickeado)("numero-fallado",n!==r.numeroParaAdivinar&&i===r.indexNumeroClickeado),e.xp6(1),e.Oqu(r.mostrarNumero||i===r.indexNumeroClickeado?n:"?")}}let p=(()=>{class t{constructor(n){this.gameSvc=n,this.arregloNumeros=[],this.elegirNumeroParaAdivinar=new e.vpe,this.indexNumeroClickeado=null,this.numeroParaAdivinar=null,this.mostrarNumero=!0,this.inhabilitarClick=!0,this.clasePadNumerico=""}ngOnInit(){this.gameSvc.numeroParaAdivinar$.subscribe(n=>this.numeroParaAdivinar=n)}ngOnChanges(n){const i=n.arregloNumeros;i.previousValue!=i.currentValue&&(this.nivel=this.gameSvc.nivel,this.clasePadNumerico="",this.mostrarNumero=!0,this.indexNumeroClickeado=null,this.gameSvc.iniciarConteoRegresivo(),this.iniciarSeleccionNumero(this.arregloNumeros.length))}iniciarSeleccionNumero(n){setTimeout(()=>{this.gameSvc.seleccionarNumeroAleatorio(n),this.mostrarNumero=!1,this.inhabilitarClick=!1},this.nivel.tiempo)}onNumeroClick(n,i){this.indexNumeroClickeado=n,this.clasePadNumerico=this.numeroParaAdivinar==i?"pad-acertado":"pad-fallado",this.gameSvc.calcularPuntuacion(i),this.inhabilitarClick=!0}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-number-list"]],inputs:{arregloNumeros:"arregloNumeros"},outputs:{elegirNumeroParaAdivinar:"elegirNumeroParaAdivinar"},features:[e.TTD],decls:2,vars:3,consts:[[1,"pad-numerico"],["class","numero",3,"numeros-inhabilitados","numero-acertado","numero-fallado","click",4,"ngFor","ngForOf"],[1,"numero",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ul",0),e.YNc(1,g,2,7,"li",1),e.qZA()),2&n&&(e.Tol(i.clasePadNumerico),e.xp6(1),e.Q6J("ngForOf",i.arregloNumeros))},dependencies:[c.sg],styles:[".pad-numerico[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,60px);gap:10px;padding:30px;border:5px solid #2d2de9;border-radius:25px}.pad-acertado[_ngcontent-%COMP%]{border:5px solid #00ff00!important}.pad-fallado[_ngcontent-%COMP%]{border:5px solid #ff0000!important}.numero[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:60px;height:60px;background-color:#f0f0f0;border:1px solid #ccc;border-radius:30px;font-size:2.5rem;font-weight:700;color:#2d2de9;cursor:pointer;transition:background-color .3s}.numero[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.numero-acertado[_ngcontent-%COMP%]{background-color:#afa!important}.numero-fallado[_ngcontent-%COMP%]{background-color:#faa!important}.numeros-inhabilitados[_ngcontent-%COMP%]{pointer-events:none;opacity:.6;cursor:not-allowed}"]}),t})();const f=[{id:1,texto:"Bajo",tiempo:1e4,puntos:10},{id:2,texto:"Medio",tiempo:5e3,puntos:20},{id:3,texto:"Alto",tiempo:2e3,puntos:30}];var l=a(433);function h(t,o){if(1&t&&(e.TgZ(0,"option",9),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.texto)}}let v=(()=>{class t{constructor(n){this.gameSvc=n,this.jugador="",this.listaNiveles=f}ngOnInit(){this.jugador=this.gameSvc.nombreJugador}onNivelSeleccionado(n){const i=+n.value;i?(this.nivel=this.listaNiveles.find(r=>r.id===i),this.gameSvc.nivel=this.nivel,this.gameSvc.reiniciarJuego()):(this.gameSvc.nivel=void 0,this.gameSvc.reiniciarJuego())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],decls:13,vars:2,consts:[[1,"header-nav"],[1,"left-section"],["xmlns","http://www.w3.org/2000/svg","height","20","width","22.25","viewBox","0 0 448 512"],["fill","#ffffff","d","M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"],[1,"jugador"],[1,"right-section"],[3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"nav",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e._UZ(3,"path",3),e.qZA(),e.kcU(),e.TgZ(4,"span",4),e._uU(5),e.qZA()(),e.TgZ(6,"div",5)(7,"label"),e._uU(8,"Nivel:"),e.qZA(),e.TgZ(9,"select",6),e.NdJ("change",function(u){return i.onNivelSeleccionado(u.target)}),e.TgZ(10,"option",7),e._uU(11,"Elegir"),e.qZA(),e.YNc(12,h,2,2,"option",8),e.qZA()()()),2&n&&(e.xp6(5),e.Oqu(i.jugador),e.xp6(7),e.Q6J("ngForOf",i.listaNiveles))},dependencies:[c.sg,l.YN,l.Kr],styles:[".header-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px;background-color:#2d2de9;color:#fff}.left-section[_ngcontent-%COMP%], .right-section[_ngcontent-%COMP%]{display:flex;align-items:center}.jugador[_ngcontent-%COMP%]{font-weight:700;font-size:x-large;margin-left:5px}label[_ngcontent-%COMP%]{margin-right:10px;font-weight:700;font-size:larger}select[_ngcontent-%COMP%]{padding:5px;margin-right:10px}"]}),t})(),_=(()=>{class t{constructor(n){this.gameSvc=n}cerrarJuego(){this.gameSvc.cerrarJuego()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"footer"],[1,"left-section"],[1,"salir",3,"click"],[1,"right-section"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return i.cerrarJuego()}),e._uU(3,"Salir"),e.qZA()(),e.TgZ(4,"div",3)(5,"span"),e._uU(6,"Edison de la Cruz"),e.qZA()()())},styles:[".footer[_ngcontent-%COMP%]{display:flex;background-color:#2d2de9;color:#fff;justify-content:space-between;align-items:center;padding:10px;position:fixed;bottom:0;left:0;right:0}.left-section[_ngcontent-%COMP%], .right-section[_ngcontent-%COMP%]{display:flex;align-items:center}.salir[_ngcontent-%COMP%]{background-color:#fff;font-size:1rem;cursor:pointer;border-radius:50px;color:red;padding:5px 20px;font-weight:600}"]}),t})();function C(t,o){if(1&t&&(e.TgZ(0,"p",8),e._uU(1," Tiempo restante: "),e.TgZ(2,"span"),e._uU(3),e.ALo(4,"number"),e.qZA(),e._uU(5,"s "),e.qZA()),2&t){const n=e.oxw(2);e.xp6(3),e.Oqu(e.xi3(4,1,n.tiempoRestante,"2.0-0"))}}function x(t,o){if(1&t&&(e.TgZ(0,"h2"),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.hij("\xbfD\xf3nde est\xe1 el n\xfamero: ",n.numeroParaAdivinar,"?")}}function N(t,o){if(1&t&&(e.TgZ(0,"div")(1,"p",4),e._uU(2,"Puntos: "),e.TgZ(3,"span"),e._uU(4),e.qZA()(),e.YNc(5,C,6,4,"p",5),e.YNc(6,x,2,1,"h2",6),e.TgZ(7,"div",2),e._UZ(8,"app-number-list",7),e.qZA()()),2&t){const n=e.oxw();e.xp6(4),e.Oqu(n.puntos),e.xp6(1),e.Q6J("ngIf",!n.numeroParaAdivinar),e.xp6(1),e.Q6J("ngIf",n.numeroParaAdivinar),e.xp6(2),e.Q6J("arregloNumeros",n.arregloNumeros)}}function b(t,o){1&t&&(e.TgZ(0,"h2",9),e._uU(1,"Elige un nivel y haz click en el bot\xf3n Jugar para iniciar la partida"),e.qZA())}const P=[{path:"",component:(()=>{class t{constructor(n){this.gameSvc=n,this.arregloNumeros=[],this.arregloSize=0,this.numeroParaAdivinar=null,this.puntos=0,this.tiempoRestante=0}ngOnInit(){this.arregloSize=this.gameSvc.arregloSize,this.gameSvc.numeroParaAdivinar$.subscribe(n=>this.numeroParaAdivinar=n),this.gameSvc.arregloNumeros$.subscribe(n=>this.arregloNumeros=n),this.gameSvc.puntuacion$.subscribe(n=>this.puntos=n),this.gameSvc.nivel$.subscribe(n=>{this.nivel=n,this.tiempoRestante=this.nivel.tiempo/1e3}),this.gameSvc.conteoRegresivo$.subscribe(n=>this.tiempoRestante=n)}jugar(){this.gameSvc.iniciarJuego()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-game"]],decls:10,vars:3,consts:[[4,"ngIf","ngIfElse"],["iniciarJuego",""],[1,"center-container"],[1,"jugar",3,"disabled","click"],[1,"puntos"],["class","conteo",4,"ngIf"],[4,"ngIf"],[3,"arregloNumeros"],[1,"conteo"],[2,"color","red"]],template:function(n,i){if(1&n&&(e._UZ(0,"app-header"),e.TgZ(1,"h1"),e._uU(2,"Memoriza los N\xfameros"),e.qZA(),e.YNc(3,N,9,4,"div",0),e.YNc(4,b,2,0,"ng-template",null,1,e.W1O),e.TgZ(6,"div",2)(7,"button",3),e.NdJ("click",function(){return i.jugar()}),e._uU(8,"Jugar"),e.qZA()(),e._UZ(9,"app-footer")),2&n){const r=e.MAs(5);e.xp6(3),e.Q6J("ngIf",i.arregloNumeros.length>=1)("ngIfElse",r),e.xp6(4),e.Q6J("disabled",!i.nivel)}},dependencies:[c.O5,p,v,_,c.JJ],styles:["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}.center-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;flex-direction:row;margin-top:10px}.jugar[_ngcontent-%COMP%]{background-color:#2d2de9;font-size:1.5rem;cursor:pointer;border-radius:50px;color:#fff;padding:5px 20px}.jugar[_ngcontent-%COMP%]:disabled{background-color:#a1a1e2;cursor:not-allowed}.puntos[_ngcontent-%COMP%]{text-align:end;font-size:x-large;font-weight:600}.puntos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2d2de9}.conteo[_ngcontent-%COMP%]{text-align:center;font-size:x-large;font-weight:500}.conteo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;color:#2d2de9}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(P),d.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,l.u5]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,O,M]}),t})()}}]);