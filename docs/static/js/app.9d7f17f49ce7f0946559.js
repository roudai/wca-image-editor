webpackJsonp([1],{"9M+g":function(t,e){},"FKQ/":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("7+uW"),r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light",fixed:"top"}},[o("div",{staticClass:"container"},[o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",[o("b-nav-item",[o("router-link",{staticClass:"nav-link",attrs:{to:"/megaminx"}},[t._v("Megaminx")])],1),t._v(" "),o("b-nav-item",[o("router-link",{staticClass:"nav-link",attrs:{to:"/pyraminx"}},[t._v("Pyraminx")])],1),t._v(" "),o("b-nav-item",[o("router-link",{staticClass:"nav-link",attrs:{to:"/clock"}},[t._v("Rubik's clock")])],1)],1),t._v(" "),o("div",{staticClass:"dropdown-divider"}),t._v(" "),o("b-navbar-nav",{staticClass:"ml-auto"},[o("a",{attrs:{href:"https://github.com/roudai/wca-image-editor"}},[t._v("Github")])])],1)],1)])],1)},staticRenderFns:[]},s={name:"App",components:{myheader:o("VU/8")(null,r,!1,null,null,null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("myheader"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]};var a=o("VU/8")(s,n,!1,function(t){o("FKQ/")},null,null).exports,l=o("Tqaz"),c=o("/ocq"),h={props:{size:{type:Number,default:200},bcolor:{type:String,default:"x"},ucolor:{type:String,default:"uuuuuuuuuuu"},scolor:{type:String,default:"pppcccaaaooolll"},bg:{type:String,default:"y"}},watch:{size:function(){this.draw()},bcolor:function(){this.draw()},ucolor:function(){this.draw()},scolor:function(){this.draw()},bg:function(){this.draw()}},data:function(){return{origin:0,radius1:0,radius2:0,radius3:0,radius4:0,radius5:0}},methods:{draw:function(){this.origin=this.size/2,this.radius1=35*this.origin/105,this.radius2=80*this.origin/105,this.radius3=100*this.origin/105,this.radius4=65*this.origin/105,this.radius5=84*this.origin/105,this.ctx.clearRect(0,0,2*this.origin,2*this.origin),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.color_convert(this.bcolor),"n"===this.bg&&(this.ctx.fillStyle=this.color_convert("w"),this.ctx.fillRect(0,0,2*this.origin,2*this.origin)),this.pentagon(this.radius1,this.ucolor.substr(0,1)),this.upface_corner(0,this.ucolor.substr(1,1)),this.upface_edge(0,this.ucolor.substr(2,1)),this.upface_corner(1,this.ucolor.substr(3,1)),this.upface_edge(1,this.ucolor.substr(4,1)),this.upface_corner(2,this.ucolor.substr(5,1)),this.upface_edge(2,this.ucolor.substr(6,1)),this.upface_corner(3,this.ucolor.substr(7,1)),this.upface_edge(3,this.ucolor.substr(8,1)),this.upface_corner(4,this.ucolor.substr(9,1)),this.upface_edge(4,this.ucolor.substr(10,1)),this.side_corner1(0,this.scolor.substr(0,1)),this.side_edge(0,this.scolor.substr(1,1)),this.side_corner2(1,this.scolor.substr(2,1)),this.side_corner1(1,this.scolor.substr(3,1)),this.side_edge(1,this.scolor.substr(4,1)),this.side_corner2(2,this.scolor.substr(5,1)),this.side_corner1(2,this.scolor.substr(6,1)),this.side_edge(2,this.scolor.substr(7,1)),this.side_corner2(3,this.scolor.substr(8,1)),this.side_corner1(3,this.scolor.substr(9,1)),this.side_edge(3,this.scolor.substr(10,1)),this.side_corner2(4,this.scolor.substr(11,1)),this.side_corner1(4,this.scolor.substr(12,1)),this.side_edge(4,this.scolor.substr(13,1)),this.side_corner2(0,this.scolor.substr(14,1)),this.thick_line()},pentagon:function(t,e){this.ctx.beginPath(),this.ctx.moveTo(this.megaminx_corner("x",t,0),this.megaminx_corner("y",t,0)),this.ctx.lineTo(this.megaminx_corner("x",t,1),this.megaminx_corner("y",t,1)),this.ctx.lineTo(this.megaminx_corner("x",t,2),this.megaminx_corner("y",t,2)),this.ctx.lineTo(this.megaminx_corner("x",t,3),this.megaminx_corner("y",t,3)),this.ctx.lineTo(this.megaminx_corner("x",t,4),this.megaminx_corner("y",t,4)),this.ctx.closePath(),null!=e&&(this.ctx.fillStyle=this.color_convert(e),this.ctx.fill()),this.ctx.stroke()},upface_corner:function(t,e){var o=this.km_convert(t);this.ctx.beginPath(),this.ctx.moveTo(this.megaminx_corner("x",this.radius1,t),this.megaminx_corner("y",this.radius1,t)),this.ctx.lineTo(this.megaminx_edge("x","in",o,1),this.megaminx_edge("y","in",o,1)),this.ctx.lineTo(this.megaminx_corner("x",this.radius2,t),this.megaminx_corner("y",this.radius2,t)),this.ctx.lineTo(this.megaminx_edge("x","in",t,0),this.megaminx_edge("y","in",t,0)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},upface_edge:function(t,e){this.ctx.beginPath(),this.ctx.moveTo(this.megaminx_corner("x",this.radius1,t),this.megaminx_corner("y",this.radius1,t)),this.ctx.lineTo(this.megaminx_edge("x","in",t,0),this.megaminx_edge("y","in",t,0)),this.ctx.lineTo(this.megaminx_edge("x","in",t,1),this.megaminx_edge("y","in",t,1)),this.ctx.lineTo(this.megaminx_corner("x",this.radius1,t+1),this.megaminx_corner("y",this.radius1,t+1)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},side_corner1:function(t,e){this.ctx.beginPath(),this.ctx.lineTo(this.megaminx_corner("x",this.radius2,t),this.megaminx_corner("y",this.radius2,t)),this.ctx.lineTo(this.megaminx_corner("x",this.radius3,t),this.megaminx_corner("y",this.radius3,t)),this.ctx.lineTo(this.megaminx_edge("x","out",t,0),this.megaminx_edge("y","out",t,0)),this.ctx.lineTo(this.megaminx_edge("x","in",t,0),this.megaminx_edge("y","in",t,0)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},side_corner2:function(t,e){var o=this.km_convert(t);this.ctx.beginPath(),this.ctx.lineTo(this.megaminx_corner("x",this.radius2,t),this.megaminx_corner("y",this.radius2,t)),this.ctx.lineTo(this.megaminx_corner("x",this.radius3,t),this.megaminx_corner("y",this.radius3,t)),this.ctx.lineTo(this.megaminx_edge("x","out",o,1),this.megaminx_edge("y","out",o,1)),this.ctx.lineTo(this.megaminx_edge("x","in",o,1),this.megaminx_edge("y","in",o,1)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},side_edge:function(t,e){this.ctx.beginPath(),this.ctx.lineTo(this.megaminx_edge("x","in",t,0),this.megaminx_edge("y","in",t,0)),this.ctx.lineTo(this.megaminx_edge("x","out",t,0),this.megaminx_edge("y","out",t,0)),this.ctx.lineTo(this.megaminx_edge("x","out",t,1),this.megaminx_edge("y","out",t,1)),this.ctx.lineTo(this.megaminx_edge("x","in",t,1),this.megaminx_edge("y","in",t,1)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},thick_line:function(){this.ctx.lineWidth=4,this.pentagon(this.radius2),this.pentagon(this.radius3),this.ctx.moveTo(this.megaminx_corner("x",this.radius2,0),this.megaminx_corner("y",this.radius2,0)),this.ctx.lineTo(this.megaminx_corner("x",this.radius3,0),this.megaminx_corner("y",this.radius3,0)),this.ctx.moveTo(this.megaminx_corner("x",this.radius2,1),this.megaminx_corner("y",this.radius2,1)),this.ctx.lineTo(this.megaminx_corner("x",this.radius3,1),this.megaminx_corner("y",this.radius3,1)),this.ctx.moveTo(this.megaminx_corner("x",this.radius2,2),this.megaminx_corner("y",this.radius2,2)),this.ctx.lineTo(this.megaminx_corner("x",this.radius3,2),this.megaminx_corner("y",this.radius3,2)),this.ctx.moveTo(this.megaminx_corner("x",this.radius2,3),this.megaminx_corner("y",this.radius2,3)),this.ctx.lineTo(this.megaminx_corner("x",this.radius3,3),this.megaminx_corner("y",this.radius3,3)),this.ctx.moveTo(this.megaminx_corner("x",this.radius2,4),this.megaminx_corner("y",this.radius2,4)),this.ctx.lineTo(this.megaminx_corner("x",this.radius3,4),this.megaminx_corner("y",this.radius3,4)),this.ctx.stroke()},megaminx_corner:function(t,e,o){return"x"===t?this.origin+e*Math.cos(2*Math.PI*o/5+Math.PI/2):this.origin-e*Math.sin(2*Math.PI*o/5+Math.PI/2)+this.origin/12},megaminx_edge:function(t,e,o,i){var r,s,n;return"in"===e?(s=this.radius4,n=.043):"out"===e&&(s=this.radius5,n=.081),0===i?r=.4*o+.2-n:1===i&&(r=.4*o+.2+n),"x"===t?this.origin+s*Math.cos(r*Math.PI+Math.PI/2):"y"===t?this.origin-s*Math.sin(r*Math.PI+Math.PI/2)+this.origin/12:void 0},color_convert:function(t){switch(t){case"d":return"dimgray";case"u":return"lightgray";case"p":return"pink";case"c":return"lemonchiffon";case"a":return"aqua";case"o":return"orange";case"l":return"lawngreen";case"b":return"dodgerblue";case"y":return"yellow";case"s":return"darkviolet";case"g":return"seagreen";case"r":return"red";case"w":return"white";case"x":return"black";case"z":return"#1b1b1b"}},km_convert:function(t){return 0===t?4:t-1}},mounted:function(){this.origin=this.size/2,this.ctx=this.$el.getContext("2d"),this.draw()}},d={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"canvas",width:"200",height:"200",bcolor:"bcolor",ucolor:"ucolor",scolor:"scolor",bg:"y"}})},staticRenderFns:[]},m=o("VU/8")(h,d,!1,null,null,null).exports,g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("label",{attrs:{for:"fmt"}},[t._v("Image Format")]),t._v(" "),o("SELECT",{staticClass:"form-control",attrs:{id:"fmt"},on:{change:t.changeSelect}},t._l(t.items,function(e){return o("OPTION",{key:e},[t._v(t._s(e))])}),1)],1)},staticRenderFns:[]},u=o("VU/8")({name:"FormatForm",data:function(){return{items:["png","jpg","gif"]}},methods:{changeSelect:function(t){this.$emit("change-format",t.target.value)}}},g,!1,null,null,null).exports,x={name:"MegaminxColorForm",props:{selected:{type:String},label:{type:String},formid:{type:String}},data:function(){return{items:[{value:"d",name:"dimgray"},{value:"u",name:"lightgray"},{value:"p",name:"pink"},{value:"c",name:"lemonchiffon"},{value:"a",name:"aqua"},{value:"o",name:"orange"},{value:"l",name:"lawngreen"},{value:"b",name:"dodgerblue"},{value:"y",name:"yellow"},{value:"s",name:"darkviolet"},{value:"g",name:"seagreen"},{value:"r",name:"red"},{value:"w",name:"white"},{value:"z",name:"black"}]}},methods:{changeSelect:function(){this.$emit("change-color")}},beforeMount:function(){"bcolor"===this.formid&&(delete this.items[13],this.items[13]={value:"x",name:"black"})}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("label",{attrs:{for:"fmt"}},[t._v(t._s(t.label))]),t._v(" "),o("SELECT",{staticClass:"form-control",attrs:{id:t.formid},on:{change:t.changeSelect}},t._l(t.items,function(e){return o("OPTION",{key:e.value,attrs:{value:e.value,selected:e.name===t.selected}},[t._v(t._s(e.name))])}),1)],1)},staticRenderFns:[]},_=o("VU/8")(x,f,!1,null,null,null).exports,v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("label",{attrs:{for:"bg"}},[t._v("Background(PNG,GIF)")]),t._v(" "),o("SELECT",{staticClass:"form-control",attrs:{id:"bg"},on:{change:t.changeSelect}},t._l(t.items,function(e){return o("OPTION",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name))])}),1)],1)},staticRenderFns:[]},b=o("VU/8")({name:"BackgroundForm",data:function(){return{items:[{value:"y",name:"transparent"},{value:"n",name:"non-transparent"}]}},methods:{changeSelect:function(t){this.$emit("change-background",t.target.value)}}},v,!1,null,null,null).exports,y={components:{MegaminxCanvas:m,FormatForm:u,MegaminxColorForm:_,BackgroundForm:b},data:function(){return{width:200,height:200,filename:"megaminx.png",size:200,bcolor:"x",ucolor:"uuuuuuuuuuu",scolor:"pppcccaaaooolll",bg:"y"}},watch:{size:function(){this.width=this.size,this.height=this.size}},methods:{changeFormat:function(t){this.filename=this.filename.split(".")[0]+"."+t},changeBackground:function(t){this.bg=t},changeColor:function(t){this.ucolor=document.getElementById("uface0").value+document.getElementById("uface1").value+document.getElementById("uface2").value+document.getElementById("uface3").value+document.getElementById("uface4").value+document.getElementById("uface5").value+document.getElementById("uface6").value+document.getElementById("uface7").value+document.getElementById("uface8").value+document.getElementById("uface9").value+document.getElementById("uface10").value,this.scolor=document.getElementById("sface1").value+document.getElementById("sface2").value+document.getElementById("sface3").value+document.getElementById("sface4").value+document.getElementById("sface5").value+document.getElementById("sface6").value+document.getElementById("sface7").value+document.getElementById("sface8").value+document.getElementById("sface9").value+document.getElementById("sface10").value+document.getElementById("sface11").value+document.getElementById("sface12").value+document.getElementById("sface13").value+document.getElementById("sface14").value+document.getElementById("sface15").value,this.bcolor=document.getElementById("bcolor").value},downloadImage:function(){var t=document.getElementById("fmt").value,e=document.getElementById("canvas"),o=document.createElement("a");"png"===t?(o.href=e.toDataURL("image/png"),o.download="megaminx.png"):"gif"===t?(o.href=e.toDataURL("image/gif"),o.download="megaminx.gif"):"jpg"===t&&(o.href=e.toDataURL("image/jpg"),o.download="megaminx.jpg"),o.download=document.getElementById("fileName").value,o.click()}}},C={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("MegaminxCanvas",{attrs:{width:t.width,height:t.height,size:t.size,bcolor:t.bcolor,ucolor:t.ucolor,scolor:t.scolor,bg:t.bg}}),t._v(" "),o("div",{attrs:{id:"download"}},[o("button",{staticClass:"btn btn-info",attrs:{type:"submit"},on:{click:t.downloadImage}},[t._v("download")])]),t._v(" "),o("label",{attrs:{for:"name"}},[t._v("File Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"form-control",attrs:{id:"fileName",type:"text"},domProps:{value:t.filename},on:{input:function(e){e.target.composing||(t.filename=e.target.value)}}}),t._v(" "),o("label",{attrs:{for:"size"}},[t._v("Size of generated image")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.size,expression:"size",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"imageSize",type:"number",min:"1",max:"1024",step:"1"},domProps:{value:t.size},on:{input:function(e){e.target.composing||(t.size=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),o("FormatForm",{on:{"change-format":t.changeFormat}}),t._v(" "),o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"Center Color",formid:"uface0"},on:{"change-color":t.changeColor}}),t._v(" "),o("label",[t._v("U Face Color")]),t._v(" "),o("b-row",[o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"1",formid:"uface1"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"2",formid:"uface2"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"3",formid:"uface3"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"4",formid:"uface4"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"5",formid:"uface5"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"6",formid:"uface6"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"7",formid:"uface7"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"8",formid:"uface8"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"9",formid:"uface9"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lightgray",label:"10",formid:"uface10"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("label",[t._v("Side Face Color")]),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"pink",label:"1",formid:"sface1"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"pink",label:"2",formid:"sface2"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"pink",label:"3",formid:"sface3"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lemonchiffon",label:"4",formid:"sface4"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lemonchiffon",label:"5",formid:"sface5"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lemonchiffon",label:"6",formid:"sface6"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"aqua",label:"7",formid:"sface7"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"aqua",label:"8",formid:"sface8"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"aqua",label:"9",formid:"sface9"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"orange",label:"10",formid:"sface10"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"orange",label:"11",formid:"sface11"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"orange",label:"12",formid:"sface12"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lawngreen",label:"13",formid:"sface13"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lawngreen",label:"14",formid:"sface14"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("MegaminxColorForm",{attrs:{selected:"lawngreen",label:"15",formid:"sface15"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("MegaminxColorForm",{attrs:{selected:"black",label:"Border Color",formid:"bcolor"},on:{"change-color":t.changeColor}}),t._v(" "),o("BackgroundForm",{on:{"change-background":t.changeBackground}})],1)},staticRenderFns:[]},p=o("VU/8")(y,C,!1,null,null,null).exports,w={props:{size:{type:Number,default:200},bcolor:{type:String,default:"x"},fcolor:{type:String,default:"rlb"},scolor:{type:String,default:"rrrlllbbb"},tcolor:{type:String,default:"rrrrrlllllbbbbb"},bg:{type:String,default:"y"}},watch:{size:function(){this.draw()},bcolor:function(){this.draw()},fcolor:function(){this.draw()},scolor:function(){this.draw()},tcolor:function(){this.draw()},bg:function(){this.draw()}},data:function(){return{origin:0,radius1:0,radius2:0,radius3:0,radius4:0,radius5:0}},methods:{draw:function(){this.origin=this.size/2,this.radius1=30*this.origin/90,this.radius2=60*this.origin/90,this.radius3=90*this.origin/90,this.radius4=30*this.origin/90,this.radius5=50*this.origin/90,this.ctx.clearRect(0,0,2*this.origin,2*this.origin),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.color_convert(this.bcolor),"n"===this.bg&&(this.ctx.fillStyle=this.color_convert("w"),this.ctx.fillRect(0,0,2*this.origin,2*this.origin)),this.first_layer(0,this.fcolor[0]),this.first_layer(1,this.fcolor[1]),this.first_layer(2,this.fcolor[2]),this.second_corner1(0,this.scolor[0]),this.second_edge(0,this.scolor[1]),this.second_corner2(0,this.scolor[2]),this.second_corner1(1,this.scolor[3]),this.second_edge(1,this.scolor[4]),this.second_corner2(1,this.scolor[5]),this.second_corner1(2,this.scolor[6]),this.second_edge(2,this.scolor[7]),this.second_corner2(2,this.scolor[8]),this.third_corner1(0,this.tcolor[0]),this.third_edge1(0,this.tcolor[1]),this.third_edge3(0,this.tcolor[2]),this.third_edge2(0,this.tcolor[3]),this.third_corner2(0,this.tcolor[4]),this.third_corner1(1,this.tcolor[5]),this.third_edge1(1,this.tcolor[6]),this.third_edge3(1,this.tcolor[7]),this.third_edge2(1,this.tcolor[8]),this.third_corner2(1,this.tcolor[9]),this.third_corner1(2,this.tcolor[10]),this.third_edge1(2,this.tcolor[11]),this.third_edge3(2,this.tcolor[12]),this.third_edge2(2,this.tcolor[13]),this.third_corner2(2,this.tcolor[14])},first_layer:function(t,e){var o=this.km_convert(t);this.ctx.beginPath(),this.ctx.moveTo(this.origin,5*this.origin/4),this.ctx.lineTo(this.triangle_corner("x",this.radius1,t),this.triangle_corner("y",this.radius1,t)),this.ctx.lineTo(this.triangle_corner("x",this.radius1,o),this.triangle_corner("y",this.radius1,o)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},second_corner1:function(t,e){this.ctx.beginPath(),this.ctx.moveTo(this.triangle_corner("x",this.radius2,t),this.triangle_corner("y",this.radius2,t)),this.ctx.lineTo(this.triangle_edge1("x",this.radius4,t),this.triangle_edge1("y",this.radius4,t)),this.ctx.lineTo(this.triangle_corner("x",this.radius1,t),this.triangle_corner("y",this.radius1,t)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},second_corner2:function(t,e){var o=this.km_convert(t);this.ctx.beginPath(),this.ctx.moveTo(this.triangle_corner("x",this.radius2,o),this.triangle_corner("y",this.radius2,o)),this.ctx.lineTo(this.triangle_edge1("x",this.radius4,t),this.triangle_edge1("y",this.radius4,t)),this.ctx.lineTo(this.triangle_corner("x",this.radius1,o),this.triangle_corner("y",this.radius1,o)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},second_edge:function(t,e){var o=this.km_convert(t);this.ctx.beginPath(),this.ctx.moveTo(this.triangle_corner("x",this.radius1,t),this.triangle_corner("y",this.radius1,t)),this.ctx.lineTo(this.triangle_edge1("x",this.radius4,t),this.triangle_edge1("y",this.radius4,t)),this.ctx.lineTo(this.triangle_corner("x",this.radius1,o),this.triangle_corner("y",this.radius1,o)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},third_corner1:function(t,e){this.ctx.beginPath(),this.ctx.moveTo(this.triangle_corner("x",this.radius3,t),this.triangle_corner("y",this.radius3,t)),this.ctx.lineTo(this.triangle_edge2("x",t,0),this.triangle_edge2("y",t,0)),this.ctx.lineTo(this.triangle_corner("x",this.radius2,t),this.triangle_corner("y",this.radius2,t)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},third_corner2:function(t,e){var o=this.km_convert(t);this.ctx.beginPath(),this.ctx.moveTo(this.triangle_corner("x",this.radius3,o),this.triangle_corner("y",this.radius3,o)),this.ctx.lineTo(this.triangle_edge2("x",t,1),this.triangle_edge2("y",t,1)),this.ctx.lineTo(this.triangle_corner("x",this.radius2,o),this.triangle_corner("y",this.radius2,o)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},third_edge1:function(t,e){this.ctx.beginPath(),this.ctx.moveTo(this.triangle_corner("x",this.radius2,t),this.triangle_corner("y",this.radius2,t)),this.ctx.lineTo(this.triangle_edge1("x",this.radius4,t),this.triangle_edge1("y",this.radius4,t)),this.ctx.lineTo(this.triangle_edge2("x",t,0),this.triangle_edge2("y",t,0)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},third_edge2:function(t,e){var o=this.km_convert(t);this.ctx.beginPath(),this.ctx.moveTo(this.triangle_corner("x",this.radius2,o),this.triangle_corner("y",this.radius2,o)),this.ctx.lineTo(this.triangle_edge1("x",this.radius4,t),this.triangle_edge1("y",this.radius4,t)),this.ctx.lineTo(this.triangle_edge2("x",t,1),this.triangle_edge2("y",t,1)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},third_edge3:function(t,e){this.ctx.beginPath(),this.ctx.lineTo(this.triangle_edge1("x",this.radius4,t),this.triangle_edge1("y",this.radius4,t)),this.ctx.lineTo(this.triangle_edge2("x",t,0),this.triangle_edge2("y",t,0)),this.ctx.lineTo(this.triangle_edge2("x",t,1),this.triangle_edge2("y",t,1)),this.ctx.closePath(),this.ctx.fillStyle=this.color_convert(e),this.ctx.fill(),this.ctx.stroke()},triangle_corner:function(t,e,o){return"x"===t?this.origin+e*Math.cos(2*Math.PI*o/3+Math.PI/2):"y"===t?this.origin-e*Math.sin(2*Math.PI*o/3+Math.PI/2)+this.origin/4:void 0},triangle_edge1:function(t,e,o){return"x"===t?this.origin+e*Math.cos(2*Math.PI*o/3+5*Math.PI/6):"y"===t?this.origin-e*Math.sin(2*Math.PI*o/3+5*Math.PI/6)+this.origin/4:void 0},triangle_edge2:function(t,e,o){var i,r=this.radius5;return 0===o?i=-.5:1===o&&(i=.5),"x"===t?this.origin+r*Math.cos(2*Math.PI*e/3+i+5*Math.PI/6):"y"===t?this.origin-r*Math.sin(2*Math.PI*e/3+i+5*Math.PI/6)+this.origin/4:void 0},color_convert:function(t){switch(t){case"d":return"dimgray";case"r":return"red";case"b":return"dodgerblue";case"l":return"lawngreen";case"y":return"yellow";case"w":return"white";case"x":return"black";case"z":return"#1b1b1b"}},km_convert:function(t){return 2===t?0:t+1}},mounted:function(){this.origin=this.size/2,this.ctx=this.$el.getContext("2d"),this.draw()}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"canvas",width:"200",height:"200",bcolor:"bcolor",fcolor:"fcolor",scolor:"scolor",tcolor:"tcolor",bg:"y"}})},staticRenderFns:[]},P=o("VU/8")(w,F,!1,null,null,null).exports,I={name:"PyraminxColorForm",props:{selected:{type:String},label:{type:String},formid:{type:String}},data:function(){return{items:[{value:"d",name:"dimgray"},{value:"r",name:"red"},{value:"b",name:"dodgerblue"},{value:"l",name:"lawngreen"},{value:"y",name:"yellow"},{value:"w",name:"white"},{value:"z",name:"black"}]}},methods:{changeSelect:function(){this.$emit("change-color")}},beforeMount:function(){"bcolor"===this.formid&&(delete this.items[7],this.items[7]={value:"x",name:"black"})}},E={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("label",{attrs:{for:"fmt"}},[t._v(t._s(t.label))]),t._v(" "),o("SELECT",{staticClass:"form-control",attrs:{id:t.formid},on:{change:t.changeSelect}},t._l(t.items,function(e){return o("OPTION",{key:e.value,attrs:{value:e.value,selected:e.name===t.selected}},[t._v(t._s(e.name))])}),1)],1)},staticRenderFns:[]},k={components:{PyraminxCanvas:P,FormatForm:u,PyraminxColorForm:o("VU/8")(I,E,!1,null,null,null).exports,BackgroundForm:b},data:function(){return{width:200,height:200,filename:"pyraminx.png",size:200,bcolor:"x",fcolor:"rlb",scolor:"rrrlllbbb",tcolor:"rrrrrlllllbbbbb",bg:"y"}},watch:{size:function(){this.width=this.size,this.height=this.size}},methods:{changeFormat:function(t){this.filename=this.filename.split(".")[0]+"."+t},changeBackground:function(t){this.bg=t},changeColor:function(t){this.fcolor=document.getElementById("first1").value+document.getElementById("first2").value+document.getElementById("first3").value,this.scolor=document.getElementById("second1").value+document.getElementById("second2").value+document.getElementById("second3").value+document.getElementById("second4").value+document.getElementById("second5").value+document.getElementById("second6").value+document.getElementById("second7").value+document.getElementById("second8").value+document.getElementById("second9").value,this.tcolor=document.getElementById("third1").value+document.getElementById("third2").value+document.getElementById("third3").value+document.getElementById("third4").value+document.getElementById("third5").value+document.getElementById("third6").value+document.getElementById("third7").value+document.getElementById("third8").value+document.getElementById("third9").value+document.getElementById("third10").value+document.getElementById("third11").value+document.getElementById("third12").value+document.getElementById("third13").value+document.getElementById("third14").value+document.getElementById("third15").value,this.bcolor=document.getElementById("bcolor").value},downloadImage:function(){var t=document.getElementById("fmt").value,e=document.getElementById("canvas"),o=document.createElement("a");"png"===t?(o.href=e.toDataURL("image/png"),o.download="megaminx.png"):"gif"===t?(o.href=e.toDataURL("image/gif"),o.download="megaminx.gif"):"jpg"===t&&(o.href=e.toDataURL("image/jpg"),o.download="megaminx.jpg"),o.download=document.getElementById("fileName").value,o.click()}}},B={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("PyraminxCanvas",{attrs:{width:t.width,height:t.height,size:t.size,bcolor:t.bcolor,fcolor:t.fcolor,scolor:t.scolor,tcolor:t.tcolor,bg:t.bg}}),t._v(" "),o("div",{attrs:{id:"download"}},[o("button",{staticClass:"btn btn-info",attrs:{type:"submit"},on:{click:t.downloadImage}},[t._v("download")])]),t._v(" "),o("label",{attrs:{for:"name"}},[t._v("File Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"form-control",attrs:{id:"fileName",type:"text"},domProps:{value:t.filename},on:{input:function(e){e.target.composing||(t.filename=e.target.value)}}}),t._v(" "),o("label",{attrs:{for:"size"}},[t._v("Size of generated image")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.size,expression:"size",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"imageSize",type:"number",min:"1",max:"1024",step:"1"},domProps:{value:t.size},on:{input:function(e){e.target.composing||(t.size=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),o("FormatForm",{on:{"change-format":t.changeFormat}}),t._v(" "),o("label",[t._v("First Layer Color")]),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"1",formid:"first1"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"2",formid:"first2"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"3",formid:"first3"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("label",[t._v("Second Layer Color")]),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"1",formid:"second1"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"2",formid:"second2"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"3",formid:"second3"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"4",formid:"second4"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"5",formid:"second5"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"6",formid:"second6"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"7",formid:"second7"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"8",formid:"second8"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"9",formid:"second9"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("label",[t._v("Third Layer Color")]),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"1",formid:"third1"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"2",formid:"third2"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"3",formid:"third3"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"4",formid:"third4"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"red",label:"5",formid:"third5"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"6",formid:"third6"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"7",formid:"third7"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"8",formid:"third8"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"9",formid:"third9"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"lawngreen",label:"10",formid:"third10"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"11",formid:"third11"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"12",formid:"third12"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"13",formid:"third13"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"14",formid:"third14"},on:{"change-color":t.changeColor}})],1),t._v(" "),o("b-col",{attrs:{cols:"6",md:"2"}},[o("PyraminxColorForm",{attrs:{selected:"dodgerblue",label:"15",formid:"third15"},on:{"change-color":t.changeColor}})],1)],1),t._v(" "),o("PyraminxColorForm",{attrs:{selected:"black",label:"Border Color",formid:"bcolor"},on:{"change-color":t.changeColor}}),t._v(" "),o("BackgroundForm",{on:{"change-background":t.changeBackground}})],1)},staticRenderFns:[]},T=o("VU/8")(k,B,!1,null,null,null).exports;o("Jmt5"),o("9M+g");i.default.use(c.a),i.default.use(l.a);var M=new c.a({routes:[{path:"/",redirect:"/megaminx"},{path:"/megaminx",name:"megaminx",component:p},{path:"/pyraminx",name:"pyraminx",component:T}]});i.default.config.productionTip=!1,new i.default({el:"#app",router:M,components:{App:a},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.9d7f17f49ce7f0946559.js.map