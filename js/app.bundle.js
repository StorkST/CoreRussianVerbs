!function(e){function n(n){for(var r,a,s=n[0],l=n[1],f=n[2],u=0,c=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&c.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(p&&p(n);c.length;)c.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={0:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var p=l;i.push([207,1]),t()}({206:function(e){e.exports=JSON.parse('{"rowsPerPageOptions":[10,25,50,100],"filterType":"multiselect","downloadOptions":{"filename":"export-RussianVerbsClassification.csv","separator":";"}}')},207:function(e,n,t){e.exports=t(464)},464:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(15),a=t.n(i),s=t(201),l=t.n(s),f=t(202),p=t.n(f),u=t(72),c=t(113),d=t.n(c),m=t(204),y=t.n(m),g=t(205),h=t.n(g);function b(){return(b=y()(d.a.mark((function e(n){var t,r,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.url,r=n.encoding,o=n.omitHeader,i=new Promise((function(e,n){h.a.parse(t,{download:!0,encoding:r,dynamicTyping:!0,header:o,complete:function(t){return t.errors&&t.errors.length?n(t.errors):e(t.data)}})})),e.next=4,i;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=t(206),O=[{name:"Ранг",options:{filter:!0,hint:"Frequency rank in the Russian language (A Frequency Dictionary of Contemporary RussianCore Vocabulary for Learners, 2013). Rank is 10000 when a verb is an aspect pair not originally in the Frequency Dictionary.",filterOptions:{names:["1 - 9 000","10 000"],logic:function(e,n){return!(n.indexOf("1 - 9 000")>=0&&e<=9e3||n.indexOf("10 000")>=0&&1e4==e)}}}},{name:"Уровень",options:{filter:!0}},{name:"По-английски",options:{filter:!1}},{name:"По-французски",options:{filter:!1}},{name:"Инфинитив",options:{filter:!1}},{name:"Разговорный",options:{filter:!0,display:"false",hint:"Colloquial"}},{name:"Неправильный",options:{filter:!0,hint:"Irregular"}},{name:"Группа",options:{filter:!0,display:"false"}},{name:"Суффикс спряжения",options:{filter:!0,display:"false",hint:"Suffixes of different conjugation classes (from http://russian.cornell.edu/verbs/conjTables.htm)"}},{name:"Совершенный вид",options:{filter:!0}},{name:"Пара аспектов",options:{filter:!1}},{name:"Возвратный",options:{filter:!0,display:"false"}},{name:"Движение",options:{filter:!0,display:"false"}},{name:"Я",options:{filter:!1}},{name:"Ты",options:{filter:!1}},{name:"Он/Она/Оно",options:{filter:!1}},{name:"Мы",options:{filter:!1}},{name:"Вы",options:{filter:!1}},{name:"Они",options:{filter:!1}},{name:"Повелительное накл. 1",options:{filter:!1,display:"true"}},{name:"Повелительное накл. 2",options:{filter:!1,display:"false"}},{name:"Деепричастие Наст. время",options:{filter:!1,display:"false"}},{name:"Деепричастие Прош. время",options:{filter:!1,display:"false"}},{name:"Действит. причастие Наст. время",options:{filter:!1,display:"false"}},{name:"Действит. причастие Прош. время",options:{filter:!1,display:"false"}},{name:"Страдат. причастие Наст. время",options:{filter:!1,display:"false"}},{name:"Страдат. причастие Прош. время",options:{filter:!1,display:"false"}}],w=v,j={columns:[],data:[],isLoading:!1};function x(e){var n=Object(r.useState)(j),t=l()(n,2),i=t[0],a=t[1];return Object(r.useEffect)((function(){a({isLoading:!0}),function(e){return b.apply(this,arguments)}({url:"./data/RussianVerbsClassification.csv",encoding:"utf-8",omitHeader:!1}).then((function(e){e.splice(0,1),e.pop(),a({columns:O,data:e,isLoading:!1})}))}),[]),o.a.createElement("div",null,o.a.createElement(p.a,{title:o.a.createElement(u.Typography,{variant:"title"},"Основные глаголы русского языка",i.isLoading&&o.a.createElement(u.CircularProgress,{size:24,style:{marginLeft:15,position:"relative",top:4}})),data:i.data,columns:i.columns,options:w}))}a.a.render(o.a.createElement(x,null),document.getElementById("root"))}});
//# sourceMappingURL=app.bundle.js.map