!function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([294,1]),n()}({284:function(e){e.exports=JSON.parse('{"rowsPerPageOptions":[10,25,50,100],"filterType":"multiselect","responsive":"vertical","selectableRows":"none","fixedHeader":false,"downloadOptions":{"filename":"export-RussianVerbsClassification.csv","separator":";"},"print":false}')},294:function(e,t,n){e.exports=n(341)},334:function(e,t){},341:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),s=n(273),l=n.n(s),c=n(274),u=n.n(c),f=n(275),p=n.n(f),m=n(276),d=n.n(m),y=n(173),h=n.n(y),g=n(165),v=n.n(g),b=n(176),E=n.n(b),C=n(281),A=n.n(C),x=n(282),w=n.n(x);function B(e){return O.apply(this,arguments)}function O(){return(O=A()(E.a.mark((function e(t){var n,a,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.encoding,r=t.omitHeader,i=new Promise((function(e,t){w.a.parse(n,{download:!0,encoding:a,dynamicTyping:!0,header:r,complete:function(n){return n.errors&&n.errors.length?t(n.errors):e(n.data)}})})),e.next=4,i;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(80),k=n(248),P=n(77),j={root:{margin:"auto",marginTop:"20px",marginBottom:"20px",width:"100%",maxWidth:1100,fontFamily:"Roboto"},title:{textAlign:"center"},list:{width:"100%",maxWidth:360},avatar:{margin:10},greenAvatar:{margin:10,color:"#fff",backgroundColor:R.a[500]},orangeAvatar:{margin:10,color:"#fff",backgroundColor:k.a[500]},redAvatar:{margin:10,color:"#fff",backgroundColor:P.a[900]}},S=(n(5),n(65)),M=n(367),D=n(365),F=n(348),q=n(343),H=n(252);function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var T=new Date,V=n(326)(T.getFullYear().toString()+"+"-T.getMonth().toString()+"-"+T.getDate().toString())(),_=Math.round(121*V),J=Math.round(209*V+122),I=Math.round(326*V+332),W=Math.round(676*V+659),z=Math.round(307*V+1336),N=Math.round(111*V+1644),Y=j,G=function(e){p()(a,e);var t,n=(t=a,function(){var e,n=h()(t);if(L()){var a=h()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d()(this,e)});function a(e){var t;return l()(this,a),(t=n.call(this,e)).state={A1:{},A2:{},B1:{},B2:{},C1:{},C2:{}},t}return u()(a,[{key:"componentDidMount",value:function(){var e=this;B({url:"./data/RussianVerbsClassification.csv",encoding:"utf-8",omitHeader:!1}).then((function(t){t.splice(0,1),t.pop();var n={A1:{},A2:{},B1:{},B2:{},C1:{},C2:{}};t.map((function(e){var t=e[0],a={name:e[5],i:t+"/1755"};switch(t){case _:n.A1=a;break;case J:n.A2=a;break;case I:n.B1=a;break;case W:n.B2=a;break;case z:n.C1=a;break;case N:n.C2=a}})),e.setState({A1:n.A1,A2:n.A2,B1:n.B1,B2:n.B2,C1:n.C1,C2:n.C2})}))}},{key:"render",value:function(){return r.a.createElement("div",{style:Y.root},r.a.createElement(D.a,{container:!0,spacing:0},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(S.a,{style:Y.title,variant:"h6"},"Глаголы сегодня")),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(F.a,{component:"nav",style:Y.list},r.a.createElement(q.a,null,r.a.createElement(M.a,{style:Y.greenAvatar},"A1"),r.a.createElement(H.a,{primary:this.state.A1.name,secondary:this.state.A1.i})),r.a.createElement(q.a,null,r.a.createElement(M.a,{style:Y.greenAvatar},"A2"),r.a.createElement(H.a,{primary:this.state.A2.name,secondary:this.state.A2.i})))),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(F.a,{component:"nav",style:Y.list},r.a.createElement(q.a,null,r.a.createElement(M.a,{style:Y.orangeAvatar},"B1"),r.a.createElement(H.a,{primary:this.state.B1.name,secondary:this.state.B1.i})),r.a.createElement(q.a,null,r.a.createElement(M.a,{style:Y.orangeAvatar},"B2"),r.a.createElement(H.a,{primary:this.state.B2.name,secondary:this.state.B2.i})))),r.a.createElement(D.a,{item:!0,xs:4},r.a.createElement(F.a,{component:"nav",style:Y.list},r.a.createElement(q.a,null,r.a.createElement(M.a,{style:Y.redAvatar},"C1"),r.a.createElement(H.a,{primary:this.state.C1.name,secondary:this.state.C1.i})),r.a.createElement(q.a,null,r.a.createElement(M.a,{style:Y.redAvatar},"C2"),r.a.createElement(H.a,{primary:this.state.C2.name,secondary:this.state.C2.i}))))))}}]),a}(a.Component),K=n(283),Q=n.n(K),U=n(364),X=n(284),Z=[{name:"Ранг ГЛ",options:{filter:!0,setCellHeaderProps:function(e){return{style:{paddingRight:"0px"}}},hint:"Frequency rank among verbs of the Russian language (2013, A Frequency Dictionary of Contemporary Russian Core Vocabulary for Learners). Rank is 10000 when a verb is an aspect pair not originally in Frequency Dictionary.",filterOptions:{names:["1 - 1755","10 000"],logic:function(e,t){return!(t.indexOf("1 - 1755")>=0&&e<=1755||t.indexOf("10 000")>=0&&1e4==e)}}}},{name:"Ранг РУ",options:{filter:!1,display:"false",setCellHeaderProps:function(e){return{style:{paddingRight:"0px"}}},hint:"Frequency rank in the entire Russian language (2013, A Frequency Dictionary of Contemporary Russian Core Vocabulary for Learners). Rank is 10000 when a verb is an aspect pair not originally in the Frequency Dictionary."}},{name:"Уровень",options:{filter:!0,setCellHeaderProps:function(e){return{style:{paddingRight:"0px"}}}}},{name:"По-английски",options:{filter:!1}},{name:"По-французски",options:{filter:!1}},{name:"Инфинитив",options:{filter:!1}},{name:"Подробности",options:{filter:!1,display:"false"}},{name:"Разговорный",options:{filter:!0,display:"false",hint:"Colloquial"}},{name:"Неправильный",options:{filter:!0}},{name:"Группа",options:{filter:!0,display:"false"}},{name:"Суффикс спряжения",options:{filter:!0,display:"false",hint:"Suffixes of different conjugation classes (from http://russian.cornell.edu/verbs/conjTables.htm)"}},{name:"Совершенный вид",options:{filter:!0}},{name:"Пара аспектов",options:{filter:!1}},{name:"Возвратный",options:{filter:!0,display:"false"}},{name:"Действительный",options:{filter:!0,display:"false"}},{name:"Я",options:{filter:!1}},{name:"Ты",options:{filter:!1}},{name:"Он/Она/Оно",options:{filter:!1}},{name:"Мы",options:{filter:!1}},{name:"Вы",options:{filter:!1}},{name:"Они",options:{filter:!1}},{name:"Повелительное накл. 1",options:{filter:!1,display:"true"}},{name:"Повелительное накл. 2",options:{filter:!1,display:"false"}},{name:"Деепричастие Наст. время",options:{filter:!1,display:"false"}},{name:"Деепричастие Прош. время",options:{filter:!1,display:"false"}},{name:"Действит. причастие Наст. время",options:{filter:!1,display:"false"}},{name:"Действит. причастие Прош. время",options:{filter:!1,display:"false"}},{name:"Страдат. причастие Наст. время",options:{filter:!1,display:"false"}},{name:"Страдат. причастие Прош. время",options:{filter:!1,display:"false"}}],$=X,ee={columns:[],data:[],isLoading:!1};function te(e){var t=Object(a.useState)(ee),n=Q()(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){o({isLoading:!0}),B({url:"./data/RussianVerbsClassification.csv",encoding:"utf-8",omitHeader:!1}).then((function(e){e.splice(0,1),e.pop(),o({columns:Z,data:e,isLoading:!1})}))}),[]),r.a.createElement("div",null,r.a.createElement(v.a,{title:r.a.createElement(S.a,{variant:"title"},"Основные глаголы русского языка",i.isLoading&&r.a.createElement(U.a,{size:24,style:{marginLeft:15,position:"relative",top:4}})),data:i.data,columns:i.columns,options:$}))}o.a.render(r.a.createElement(G,null),document.getElementById("dailyVerbs")),o.a.render(r.a.createElement(te,null),document.getElementById("root"))}});
//# sourceMappingURL=app.bundle.js.map