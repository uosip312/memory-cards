"use strict";(self.webpackChunkmemoryCards=self.webpackChunkmemoryCards||[]).push([[677],{4677:(S,m,a)=>{a.r(m),a.d(m,{GameModule:()=>O});var s=a(6895),d=a(9615),e=a(1571),l=a(1397);function p(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"li",2),e.NdJ("click",function(){const r=e.CHM(n),c=r.index,T=r.$implicit,Z=e.oxw();return e.KtG(Z.onNumeroClick(c,T))}),e._uU(1),e.qZA()}if(2&t){const n=i.$implicit,o=i.index,r=e.oxw();e.ekj("numeros-inhabilitados",r.inhabilitarClick)("numero-acertado",n===r.numeroParaAdivinar&&o===r.indexNumeroClickeado)("numero-fallado",n!==r.numeroParaAdivinar&&o===r.indexNumeroClickeado),e.xp6(1),e.Oqu(r.mostrarNumero||o===r.indexNumeroClickeado?n:"?")}}let g=(()=>{class t{constructor(n){this.gameSvc=n,this.arregloNumeros=[],this.numeroAcertado=new e.vpe,this.indexNumeroClickeado=null,this.numeroParaAdivinar=null,this.mostrarNumero=!0,this.inhabilitarClick=!0,this.clasePadNumerico=""}ngOnInit(){this.gameSvc.numeroParaAdivinar$.subscribe(n=>this.numeroParaAdivinar=n)}ngOnChanges(n){const o=n.arregloNumeros;o.previousValue!=o.currentValue&&(this.nivel=this.gameSvc.nivel,this.clasePadNumerico="",this.mostrarNumero=!0,this.indexNumeroClickeado=null,this.gameSvc.iniciarConteoRegresivo(),this.iniciarSeleccionNumero(this.arregloNumeros.length))}iniciarSeleccionNumero(n){setTimeout(()=>{this.gameSvc.seleccionarNumeroAleatorio(n),this.mostrarNumero=!1,this.inhabilitarClick=!1},this.nivel.tiempo)}onNumeroClick(n,o){this.indexNumeroClickeado=n;const r=this.numeroParaAdivinar==o;this.clasePadNumerico=r?"pad-acertado":"pad-fallado",this.numeroAcertado.emit(r),this.gameSvc.calcularPuntuacion(o),this.inhabilitarClick=!0}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-number-list"]],inputs:{arregloNumeros:"arregloNumeros"},outputs:{numeroAcertado:"numeroAcertado"},features:[e.TTD],decls:2,vars:3,consts:[[1,"pad-numerico"],["class","numero",3,"numeros-inhabilitados","numero-acertado","numero-fallado","click",4,"ngFor","ngForOf"],[1,"numero",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"ul",0),e.YNc(1,p,2,7,"li",1),e.qZA()),2&n&&(e.Tol(o.clasePadNumerico),e.xp6(1),e.Q6J("ngForOf",o.arregloNumeros))},dependencies:[s.sg],styles:[".pad-numerico[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,60px);gap:10px;padding:30px;border:10px solid #2d2de9;border-radius:30px;margin:0}.pad-acertado[_ngcontent-%COMP%]{border:10px solid #00ff00!important}.pad-fallado[_ngcontent-%COMP%]{border:10px solid #ff0000!important}.numero[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:60px;height:60px;background-color:#f0f0f0;border:1px solid #ccc;border-radius:30px;font-size:2.5rem;font-weight:700;color:#2d2de9;cursor:pointer;transition:background-color .3s}.numero[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.numero-acertado[_ngcontent-%COMP%]{background-color:#afa!important}.numero-fallado[_ngcontent-%COMP%]{background-color:#faa!important}.numeros-inhabilitados[_ngcontent-%COMP%]{pointer-events:none;opacity:.6;cursor:not-allowed}"]}),t})();const f=[{id:1,texto:"Bajo",tiempo:1e4,puntos:10},{id:2,texto:"Medio",tiempo:5e3,puntos:20},{id:3,texto:"Alto",tiempo:2e3,puntos:30}];var u=a(433);function h(t,i){if(1&t&&(e.TgZ(0,"option",9),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.texto)}}let v=(()=>{class t{constructor(n){this.gameSvc=n,this.jugador="",this.listaNiveles=f,this.nivelCambiado=new e.vpe}ngOnInit(){this.jugador=this.gameSvc.nombreJugador}onNivelSeleccionado(n){const o=+n.value;this.nivelCambiado.emit(!0),o?(this.nivel=this.listaNiveles.find(r=>r.id===o),this.gameSvc.nivel=this.nivel,this.gameSvc.reiniciarJuego()):(this.gameSvc.nivel=void 0,this.gameSvc.reiniciarJuego())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],outputs:{nivelCambiado:"nivelCambiado"},decls:13,vars:2,consts:[[1,"header-nav"],[1,"left-section"],["xmlns","http://www.w3.org/2000/svg","height","20","width","22.25","viewBox","0 0 448 512"],["fill","#ffffff","d","M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"],[1,"jugador"],[1,"right-section"],[3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"nav",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e._UZ(3,"path",3),e.qZA(),e.kcU(),e.TgZ(4,"span",4),e._uU(5),e.qZA()(),e.TgZ(6,"div",5)(7,"label"),e._uU(8,"Nivel:"),e.qZA(),e.TgZ(9,"select",6),e.NdJ("change",function(c){return o.onNivelSeleccionado(c.target)}),e.TgZ(10,"option",7),e._uU(11,"Elegir"),e.qZA(),e.YNc(12,h,2,2,"option",8),e.qZA()()()),2&n&&(e.xp6(5),e.Oqu(o.jugador),e.xp6(7),e.Q6J("ngForOf",o.listaNiveles))},dependencies:[s.sg,u.YN,u.Kr],styles:[".header-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:15px;background-color:#101d30;color:#fff;margin:-8px -8px 0}.left-section[_ngcontent-%COMP%], .right-section[_ngcontent-%COMP%]{display:flex;align-items:center}.jugador[_ngcontent-%COMP%]{font-weight:700;font-size:x-large;margin-left:5px}label[_ngcontent-%COMP%]{margin-right:10px;font-weight:700;font-size:larger}select[_ngcontent-%COMP%]{padding:5px;margin-right:10px}"]}),t})(),_=(()=>{class t{constructor(n){this.gameSvc=n}cerrarJuego(){this.gameSvc.cerrarJuego()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"footer"],[1,"left-section"],[1,"salir",3,"click"],[1,"right-section"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return o.cerrarJuego()}),e._uU(3,"Salir"),e.qZA()(),e.TgZ(4,"div",3)(5,"span"),e._uU(6,"Edison de la Cruz"),e.qZA()()())},styles:[".footer[_ngcontent-%COMP%]{display:flex;background-color:#101d30;color:#fff;justify-content:space-between;align-items:center;padding:10px;position:fixed;bottom:0;left:0;right:0}.left-section[_ngcontent-%COMP%], .right-section[_ngcontent-%COMP%]{display:flex;align-items:center}.salir[_ngcontent-%COMP%]{background-color:#fff;font-size:1rem;cursor:pointer;border-radius:50px;color:red;padding:5px 20px;font-weight:600}"]}),t})();function C(t,i){if(1&t&&(e.TgZ(0,"p",9),e._uU(1," Tiempo restante: "),e.TgZ(2,"span"),e._uU(3),e.ALo(4,"number"),e.qZA(),e._uU(5,"s "),e.qZA()),2&t){const n=e.oxw(2);e.xp6(3),e.Oqu(e.xi3(4,1,n.tiempoRestante,"2.0-0"))}}function x(t,i){if(1&t&&(e.TgZ(0,"h2"),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.hij("\xbfD\xf3nde est\xe1 el n\xfamero: ",n.numeroParaAdivinar,"?")}}function b(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"p",5),e._uU(2,"Puntos: "),e.TgZ(3,"span"),e._uU(4),e.qZA()(),e.YNc(5,C,6,4,"p",6),e.YNc(6,x,2,1,"h2",7),e.TgZ(7,"div",3)(8,"app-number-list",8),e.NdJ("numeroAcertado",function(r){e.CHM(n);const c=e.oxw();return e.KtG(c.numeroAcertado(r))}),e.qZA()()()}if(2&t){const n=e.oxw();e.xp6(4),e.Oqu(n.puntos),e.xp6(1),e.Q6J("ngIf",!n.numeroParaAdivinar),e.xp6(1),e.Q6J("ngIf",n.numeroParaAdivinar),e.xp6(2),e.Q6J("arregloNumeros",n.arregloNumeros)}}function N(t,i){1&t&&(e.TgZ(0,"h2",10),e._uU(1,"Elige un nivel y haz click en el bot\xf3n Jugar para iniciar la partida"),e.qZA())}const A=[{path:"",component:(()=>{class t{constructor(n){this.gameSvc=n,this.arregloNumeros=[],this.arregloSize=0,this.numeroParaAdivinar=null,this.puntos=0,this.tiempoRestante=0,this.textoBoton="Jugar"}ngOnInit(){this.arregloSize=this.gameSvc.arregloSize,this.gameSvc.numeroParaAdivinar$.subscribe(n=>this.numeroParaAdivinar=n),this.gameSvc.arregloNumeros$.subscribe(n=>this.arregloNumeros=n),this.gameSvc.puntuacion$.subscribe(n=>this.puntos=n),this.gameSvc.nivel$.subscribe(n=>{this.nivel=n,this.tiempoRestante=this.nivel.tiempo/1e3}),this.gameSvc.conteoRegresivo$.subscribe(n=>this.tiempoRestante=n)}numeroAcertado(n){this.textoBoton=n?"Continuar":"Reiniciar"}nivelCambiado(n){n&&(this.textoBoton="Jugar")}jugar(){this.textoBoton="Jugar",this.gameSvc.iniciarJuego()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-game"]],decls:10,vars:8,consts:[[3,"nivelCambiado"],[4,"ngIf","ngIfElse"],["iniciarJuego",""],[1,"center-container"],[1,"btn-jugar",3,"disabled","click"],[1,"puntos"],["class","conteo",4,"ngIf"],[4,"ngIf"],[3,"arregloNumeros","numeroAcertado"],[1,"conteo"],[2,"color","red"]],template:function(n,o){if(1&n&&(e.TgZ(0,"app-header",0),e.NdJ("nivelCambiado",function(c){return o.nivelCambiado(c)}),e.qZA(),e.TgZ(1,"h1"),e._uU(2,"Memoriza los N\xfameros"),e.qZA(),e.YNc(3,b,9,4,"div",1),e.YNc(4,N,2,0,"ng-template",null,2,e.W1O),e.TgZ(6,"div",3)(7,"button",4),e.NdJ("click",function(){return o.jugar()}),e._uU(8),e.qZA()(),e._UZ(9,"app-footer")),2&n){const r=e.MAs(5);e.xp6(3),e.Q6J("ngIf",o.arregloNumeros.length>=1)("ngIfElse",r),e.xp6(4),e.ekj("btn-acertado","Continuar"==o.textoBoton)("btn-fallido","Reiniciar"==o.textoBoton),e.Q6J("disabled",!o.nivel),e.xp6(1),e.Oqu(o.textoBoton)}},dependencies:[s.O5,g,v,_,s.JJ],styles:["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}.center-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;flex-direction:row;margin-top:10px}.btn-jugar[_ngcontent-%COMP%]{background-color:#2d2de9;font-size:1.5rem;cursor:pointer;border-radius:50px;color:#fff;padding:5px 20px;font-weight:600}.btn-jugar[_ngcontent-%COMP%]:disabled{background-color:#a1a1e2;cursor:not-allowed}.puntos[_ngcontent-%COMP%]{text-align:end;font-size:x-large;font-weight:600}.puntos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2d2de9}.conteo[_ngcontent-%COMP%]{text-align:center;font-size:x-large;font-weight:500}.conteo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;color:#2d2de9}.btn-acertado[_ngcontent-%COMP%]{background-color:#0f0!important;color:#000}.btn-fallido[_ngcontent-%COMP%]{background-color:red!important}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(A),d.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,u.u5]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,P,M]}),t})()}}]);