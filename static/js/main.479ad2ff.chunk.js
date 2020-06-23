(this.webpackJsonpedgedetection=this.webpackJsonpedgedetection||[]).push([[0],{143:function(e,a,t){},144:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(55),o=t.n(l),c=(t(74),t(32)),s=t.n(c),i=t(56),m=t(12),u=t(22),d=t(68),p=(t(78),function(e){var a=e.onFileUploaded,t=Object(n.useState)(""),l=Object(m.a)(t,2),o=l[0],c=l[1],s=Object(n.useCallback)((function(e){var t=e[0];c(URL.createObjectURL(t)),a(t)}),[a]),i=Object(d.a)({onDrop:s}),p=i.getRootProps,E=i.getInputProps,h=i.isDragActive;return r.a.createElement("div",Object.assign({className:"dropzone"},p()),r.a.createElement("input",Object.assign({},E(),{accept:"image/*"})),h?r.a.createElement("h2",null,"Solte a imagem aqui..."):o.length?r.a.createElement("img",{className:"image",src:o,alt:"Original"}):r.a.createElement("div",{className:"dropzoneText"},r.a.createElement(u.a,{className:"dropzoneIcon"}),r.a.createElement("h2",null,"Arraste uma imagem ou clique para selecionar")))}),E=(t(79),function(e){var a=e.isOpen,t=e.setIsOpen;return a?r.a.createElement("div",{className:"modalBackground"},r.a.createElement("div",{className:"modalContent"},r.a.createElement("div",{className:"modalHeader"},r.a.createElement("h1",null,"Informa\xe7\xf5es"),r.a.createElement("button",{onClick:function(){return t(!a)}},r.a.createElement(u.b,null),r.a.createElement("span",null,"Fechar"))),r.a.createElement("div",{className:"modalBody"},r.a.createElement("h2",null,"Por que detectar bordas?"),r.a.createElement("h3",null,"A detec\xe7\xe3o de borda \xe9 bastante usada na \xe1rea de extra\xe7\xe3o de caracter\xedsticas. Sua utiliza\xe7\xe3o reduz significativamente a quantidade de dados a serem processados, e descarta informa\xe7\xe3o que \xe9 considerada menos relevante, ainda que preservando importantes propriedades estruturais de uma imagem."),r.a.createElement("h2",null,"Como detectar bordas?"),r.a.createElement("h3",null,"Usando o gradiente da imagem!"),r.a.createElement("h2",null,"O que \xe9 o gradiente de uma imagem?"),r.a.createElement("h3",null,"O gradiente de uma imagem \xe9 um campo vetorial tal como em qualquer fun\xe7\xe3o de duas vari\xe1veis, exemplo: uma fun\xe7\xe3o 'f(x,y)', que representa o n\xedvel de cor em uma determinada coordenada '(x,y)'."),r.a.createElement("h2",null,"Qual m\xe9todo foi usado nesse projeto?"),r.a.createElement("h3",null,"Algoritmo de Canny"),r.a.createElement("h2",null,"M\xe9todos usuais para detec\xe7\xe3o de bordas:"),r.a.createElement("h4",null,"Sobel: provavelmente o mais utilizado."),r.a.createElement("h4",null,"Prewitt: similar ao m\xe9todo Sobel."),r.a.createElement("h4",null,"Roberts: um dos primeiros m\xe9todos desenvolvidos."),r.a.createElement("h4",null,"Canny: o melhor m\xe9todo, mas \xe9 o que exige maior esfor\xe7o computacional."),r.a.createElement("h2",null,"Fontes:"),r.a.createElement("a",{href:"https://pt.wikipedia.org/wiki/Detec%C3%A7%C3%A3o_de_borda#:~:text=A%20detec%C3%A7%C3%A3o%20de%20borda%20%C3%A9,propriedades%20estruturais%20de%20uma%20imagem."},"Detec\xe7\xe3o de borda"),r.a.createElement("a",{href:"https://edisciplinas.usp.br/pluginfile.php/4301995/mod_resource/content/0/V10%20-Deteccao%20de%20bordas.pdf"},"Vis\xe3o Computacional"),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Canny_edge_detector#:~:text=The%20Canny%20edge%20detector%20is,explaining%20why%20the%20technique%20works."},"Algoritmo de Canny")))):null}),h=t(66),g=t(67),f=t(29);var b=function(e){return Object(f.a)(e,{lowThreshold:40,highThreshold:70,gaussianBlur:2.5}).gaussianFilter().toDataURL()},v=(t(143),function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(""),c=Object(m.a)(o,2),u=c[0],d=c[1],f=Object(n.useState)(!1),v=Object(m.a)(f,2),O=v[0],j=v[1];function C(){return(C=Object(i.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FileReader).onload=function(){var e=t.result;e&&g.a.load(e).then((function(e){var a=e.grey(),t=b(a);d(t)}))},t.readAsArrayBuffer(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){t&&function(e){C.apply(this,arguments)}(t)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pageContainer"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Detec\xe7\xe3o de bordas"),r.a.createElement("button",{className:"infoButton",onClick:function(){return j(!O)}},r.a.createElement("span",null,r.a.createElement(h.a,null)),r.a.createElement("h2",null,"Por que detectar bordas?, como? e mais..."))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"imageHolder"},r.a.createElement(p,{onFileUploaded:l})),r.a.createElement("div",{className:"imageHolder"},u?r.a.createElement("img",{className:"image",src:u,alt:"Processada"}):r.a.createElement("h2",null,"A imagem processada aparecer\xe1 aqui!")))),r.a.createElement(E,{isOpen:O,setIsOpen:j}))});var O=function(){return r.a.createElement(v,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},69:function(e,a,t){e.exports=t(144)},74:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.479ad2ff.chunk.js.map