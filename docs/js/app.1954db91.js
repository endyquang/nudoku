(function(t){function e(e){for(var i,o,a=e[0],c=e[1],u=e[2],f=0,h=[];f<a.length;f++)o=a[f],r[o]&&h.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/nudoku/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"38c8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{touchmove:function(t){t.preventDefault()}}},[t.pending?n("div",{staticClass:"pending"},[n("div",{staticClass:"pending__logo"},[t._v("\n      NUDOKU\n    ")]),t.won?[t.won?n("div",{staticClass:"pending__noti"},[t._v("YOU'VE LUCKYLY WON!")]):t._e()]:t.lost?n("div",{staticClass:"pending__noti"},[t._v("YOU DUMBASS LOSER!")]):n("div",{staticClass:"pending__subtitle"},[t._v("Just a dummy text to make it look not as empty as its creator")]),n("div",{staticClass:"pending__score"}),n("base-btn",{staticClass:"pending__start",on:{click:t.start}},[t._v("PLAY "+t._s(t.won||t.lost?"AGAIN":"NOW"))])],2):t._e(),n("header",{staticClass:"header"},[n("span",[t._v("Mistakes: "+t._s(t.mistakes)+"/3")]),n("base-btn",{on:{click:t.togglePaused}},[t._v("\n      "+t._s(t._f("prettifyTime")(t.time))+" "),n("i",{staticClass:"header__btn__icon",class:[t.paused?"ico__pause":"ico__play"]})]),n("base-btn",{on:{click:t.start}},[t._v("New Game")])],1),n("main",{staticClass:"main"},[t.paused?n("div",{staticClass:"paused"},[n("div",{staticClass:"paused__content"},[n("base-btn",{on:{click:t.togglePaused}},[n("i",{staticClass:"ico__play ico--xl"})])],1)]):t._e(),n("div",{staticClass:"play",class:{"play--paused":t.paused,"play--noting":t.noting}},t._l(t.blocks,function(e,i){return n("div",{key:"b-"+i,staticClass:"play__block"},[t._l(e,function(e){return[t.paused?n("div",{key:e.id,staticClass:"play__cell"}):n("div",{key:e.id,ref:"cells",refInFor:!0,staticClass:"play__cell",class:[t.actives[e.id]?"selected":t.active===e?"active":t.multiple||i!==t.active.block&&e.row!==t.active.row&&e.col!==t.active.col?t.temps[t.active.id]&&t.temps[t.active.id]===t.temps[e.id]?"same":"":"affected"],on:{click:function(n){t.onActiveChange(e)}}},[e.value?n("div",{staticClass:"play__cell__fixed"},[t._v(t._s(e.value))]):t.notesState[e.id]?n("div",{staticClass:"play__cell__notes"},t._l(t.notes[e.id],function(e,i){return n("div",{key:i,staticClass:"play__cell__notes__item"},[t._v("\n                "+t._s(e>0?e:"")+"\n              ")])})):t.temps[e.id]?n("div",{staticClass:"play__cell__temp",class:{wrong:t.temps[e.id]!==t.answer[e.id]}},[t._v("\n              "+t._s(t.temps[e.id])+"\n            ")]):t._e()])]})],2)})),n("div",{staticClass:"controls"},[n("base-btn",{class:{primary:t.noting},on:{click:t.toggleNoting}},[n("div",[t._v("✎")]),t._v(" Note")]),n("base-btn",{on:{click:t.undo}},[n("div",[t._v("↺")]),t._v(" Undo")]),n("base-btn",{on:{click:t.erase}},[n("div",[t._v("✘")]),t._v(" Erase")]),n("base-btn",{class:{primary:t.multiple},on:{click:t.toggleMultiple}},[n("div",[t._v("☷")]),t._v(" Multiple")])],1),n("div",{staticClass:"number"},t._l(9,function(e){return n("div",{key:e,staticClass:"numbers__item",class:{disabled:9===t.filledNumbers[e-1],primary:t.noting},on:{click:function(n){t.newTemp(e)}}},[t._v(t._s(e))])}))])])},s=[],o=n("3835"),a=(n("5df3"),n("1c4c"),n("ac4d"),n("8a81"),n("ac6a"),n("456d"),n("2909")),c=(n("4f7f"),n("7514"),n("6762"),n("2fdb"),y()),u=A([2,3,4]),l=b(),f=k(function(t,e){return w(e)}),h={hardest:26,easy:41};function v(t){var e=k(function(){return""}),n=k(function(){return Array.from({length:9},function(){return 1})});return i(),{answer:e,trimmedAnswer:p(e,t)};function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(81!==t){var s=[];if(n[t].forEach(function(t,e){1===t&&s.push(e)}),!s.length)return n[t].forEach(function(e,i){2===e&&(n[t][i]=1)}),-1;var o=S(s);if(r(t,o,-1),-1===i(t+1))return n[t][o]=2,r(t,o,1),i(t);e[t]=o+1}}function r(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;f[t].forEach(function(t){n[t][e]+=i})}}function p(t,e){var n=k(function(){return""}),i=d(t),r=i.cellsRules,s=i.rules,o=Array.from({length:9},function(){return[]}),a=_(h[e]),c=a.map(v);function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=u[a[t]][N(c[t])];if(!e)return-1;var n=e.map(function(e){return l[t][e]}),i=l[t].filter(function(t){return!n.includes(t)});return i.find(function(t){return r[t].find(function(t){return 1===s[t]})})?f(t):(i.forEach(function(t){return r[t].forEach(function(t){return s[t]--})}),o[t]=n,t<8&&-1===f(t+1)&&t>0?(c[t+1]=v(a[t]),o[t+1]=[],o[t]=[],i.forEach(function(t){return r[t].forEach(function(t){return s[t]++})}),f(t)):void 0)}function v(t){return Array.from({length:u[t].length},function(t,e){return e})}return f(),o.forEach(function(e){return e.forEach(function(e){n[e]=t[e]})}),n}function d(t){var e=x(),n=e.cellsRules,i=e.rules;return m(t,function(t){t.forEach(function(t){n[t].push(i.length)}),i.push(4)}),{cellsRules:n,rules:i}}function m(t,e){var n=Array.from({length:9},function(){return[]});t.forEach(function(t,e){n[t-1].push(e)}),n.forEach(function(n){for(var i=function(i){for(var r=n[i],s=function(i){g(r,n[i],function(s,o){t[s]===t[o]&&e([r,s,n[i],o])})},o=i+1;o<9;o++)s(o)},r=0;r<9;r++)i(r)})}function g(t,e,n){var i=E(t),r=E(e),s=O(i.x,r.y),o=O(r.x,i.y);n(s,o)}function _(t){var e={26:[[4,4,4,4,2,2,2,2,2],[3,3,4,4,4,2,2,2,2],[3,3,3,3,4,4,2,2,2],[3,3,3,3,3,3,4,2,2],[3,3,3,3,3,3,3,3,2]]}[t];return C(S(e))}function y(){return Array.from({length:81},function(t,e){var n=E(e),i=n.x,r=n.y,s=I(i,r);return{row:r,col:i,block:s}})}function b(){return Array.from({length:9},function(t,e){var n=e%3*3+27*Math.floor(e/3);return Array.from({length:9},function(t,e){var i=e%3+9*Math.floor(e/3);return n+i})})}function k(t){return Array.from({length:81},t)}function w(t){for(var e=[],n=E(t),i=n.x,r=n.y,s=r+1,o=r+3-r%3,a=i-i%3,c=i+3-i%3,u=t+1;u<t+9-t%9;u++)e.push(u);for(var l=s;l<o;l++)for(var f=a;f<c;f++)e.push(O(f,l));for(var h=t%9+9*o;h<81;h+=9)e.push(h);return e}function x(){for(var t=Array.from({length:81},function(){return[]}),e=[],n=0;n<9;n++){for(var i=0;i<9;i++)t[9*n+i].push(e.length),t[9*i+n].push(e.length+1);e.push(9,9)}return{cellsRules:t,rules:e}}function A(t){var e={},n=!0,i=!1,r=void 0;try{for(var s,o=new Set(t)[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var a=s.value;e[a]=c(a)}}catch(u){i=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(0===t)return e.push(n);for(var i=n.slice(-1)[0]+1||0,r=i;r<9;r++)c(t-1,e,n.concat(r));return e}return e}function C(t){for(var e=Object(a["a"])(t),n=[],i=0;i<9;i++)n.push(N(e));return n}function E(t){return{x:t%9,y:Math.floor(t/9)}}function O(t,e){return 9*e+t}function I(t,e){var n=Math.floor(t/3),i=Math.floor(e/3);return 3*i+n}function N(t){return t.splice(M(t),1)[0]}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t[M(t)]}function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Math.floor(Math.random()*t.length)}var T={generate:v,addresses:c},j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"base__btn",on:{click:function(e){t.$emit("click",e)}}},[t._t("default")],2)},P=[],H={},B=H,R=(n("b6b6"),n("2877")),W=Object(R["a"])(B,j,P,!1,null,null,null);W.options.__file="BaseBtn.vue";var U=W.exports;function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=3600,n=60,i=Math.floor(t/e),r=Math.floor((t-i*e)/n),s=Math.floor(t-i*e-r*n);return[i,r,s]}function L(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e={active:-1,actives:[],answer:[],blocks:[],corrects:0,difficulty:"hardest",histories:[],lost:!1,mistakes:0,multiple:!1,notes:[],noting:!1,paused:!1,pending:!0,tempHistory:{},temps:[],time:0,timer:null,won:!1};if(t)return Object.keys(e);for(var n in e)void 0!==localStorage[n]&&(e[n]=JSON.parse(localStorage[n]||null));return e}function Y(){var t={},e=L(!0);return e.forEach(function(e){t[e]={deep:!0,handler:function(t){localStorage[e]=JSON.stringify(t)}}}),t}var D={name:"app",components:{BaseBtn:U},data:function(){return L()},watch:Y(),mounted:function(){this.pending||this.startTimer()},computed:{notesState:function(){return this.notes.map(function(t){var e=!0,n=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var o=r.value;if(o>0)return!0}}catch(a){n=!0,i=a}finally{try{e||null==s.return||s.return()}finally{if(n)throw i}}})},filledNumbers:function(){var t=Array.from({length:9},function(){return 0});return this.temps.forEach(function(e,n){e>0&&t[e-1]++}),t}},methods:{start:function(){this.stopTimer();var t=T.generate("hardest"),e=t.answer,n=t.trimmedAnswer;this.active=-1,this.actives=Array.from({length:81},function(){return!1}),this.answer=e,this.blocks=this.makeBlocks(n),this.corrects=n.filter(Boolean).length,this.histories=[],this.mistakes=0,this.multiple=!1,this.notes=Array.from({length:81},function(){return Array.from({length:9},function(){return 0})}),this.paused=!1,this.pending=!1,this.time=0,this.timer=null,this.tempHistory={notes:[],temps:[]},this.temps=n,this.startTimer()},makeBlocks:function(t){var e=Array.from({length:9},function(){return[]});return t.forEach(function(t,n){var i=T.addresses[n],r=i.row,s=i.col,o=i.block;e[o].push({value:t,id:n,row:r,col:s})}),e},startTimer:function(){var t=this;this.timer=setInterval(function(){return t.time++},1e3)},stopTimer:function(){clearInterval(this.timer)},pushHistory:function(){this.histories.push(this.tempHistory),this.histories.length>50&&this.histories.splice(0,1),this.tempHistory={notes:[],temps:[]}},newTemp:function(t){var e=this;this.getActiveIndexes(function(n){if(e.noting){var i=t-1,r=e.notes[n][i];return e.tempHistory.notes.push({cellIndex:n,numberIndex:i,value:r}),e.notes[n].splice(i,1,r>0?0:t),e.resetTemp(n)}e.resetNote(n),e.temps[n]===t?e.resetTemp(n):(e.tempHistory.temps.push({cellIndex:n,value:e.temps[n]}),e.temps.splice(n,1,t),e.clearRelevantNotes(n,t),t===e.answer[n]?81===++e.corrects&&e.win():3===++e.mistakes&&e.gameOver())}),this.pushHistory()},clearRelevantNotes:function(t,e){var n=this,i=T.addresses[t],r=i.row,s=i.col,o=i.block;this.blocks[o].forEach(function(t){return n.removeNoteItem(t.id,e)}),this.notes.forEach(function(t,i){r!==T.addresses[i].row&&s!==T.addresses[i].col||n.removeNoteItem(i,e)})},erase:function(){var t=this;this.getActiveIndexes(function(e){t.resetNote(e),t.resetTemp(e)}),this.pushHistory()},undo:function(){var t=this;if(!this.paused){var e=this.histories.pop()||{},n=e.notes,i=void 0===n?[]:n,r=e.temps,s=void 0===r?[]:r;i.forEach(function(e){var n=e.cellIndex,i=e.numberIndex,r=e.value;i>-1?t.notes[n].splice(i,1,r):t.notes.splice(n,1,r)}),s.forEach(function(e){var n=e.cellIndex,i=e.value;t.temps.splice(n,1,i)})}},resetNote:function(t){this.notesState[t]&&(this.tempHistory.notes.push({cellIndex:t,value:this.notes[t]}),this.notes.splice(t,1,Array.from({length:9},function(){return 0})))},removeNoteItem:function(t,e){var n=e-1;this.tempHistory.notes.push({cellIndex:t,numberIndex:n,value:this.notes[t][n]}),this.notes[t].splice(n,1,0)},resetTemp:function(t){var e=this.temps[t];e&&(e===this.answer[t]&&this.corrects--,this.tempHistory.temps.push({cellIndex:t,value:e}),this.temps.splice(t,1,""))},getActiveIndexes:function(t){if(!this.paused)if(this.multiple)this.actives.forEach(function(e,n){e&&t(n)});else if(this.active.id>=0&&!this.active.value)return t(this.active.id)},toggleNoting:function(){this.noting=!this.noting,this.noting||(this.multiple=!1)},toggleMultiple:function(){this.multiple=!this.multiple,this.noting=this.multiple,this.multiple?this.active.id>=0&&!this.active.value&&(this.actives.splice(this.active.id,1,!0),this.active=-1):this.actives=Array.from({length:81},function(){return!1})},onActiveChange:function(t){this.multiple&&!t.value?this.actives.splice(t.id,1,!this.actives[t.id]):this.active=t},gameOver:function(){this.lost=!0,this.openPendingWindow()},win:function(){this.won=!0,this.openPendingWindow()},openPendingWindow:function(){this.pending=!0,this.stopTimer()},togglePaused:function(){this.paused=!this.paused,this.paused?this.stopTimer():this.startTimer()}},filters:{prettifyTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!(t>-1))return"00:00";var e=function(t){return("0"+t).slice(-2)},n=J(t),i=Object(o["a"])(n,3),r=i[0],s=i[1],a=i[2];return(r?"".concat(e(r),":"):"")+"".concat(e(s),":").concat(e(a))}}},$=D,G=Object(R["a"])($,r,s,!1,null,null,null);G.options.__file="App.vue";var K=G.exports,F=(n("38c8"),!0),V="serviceWorker"in navigator&&F;V&&navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Service Worker Registered!")}),i["a"].config.productionTip=!1,document.addEventListener("gesturestart",function(t){t.preventDefault()}),new i["a"]({render:function(t){return t(K)}}).$mount("#app")},b6b6:function(t,e,n){"use strict";var i=n("ea97"),r=n.n(i);r.a},ea97:function(t,e,n){}});