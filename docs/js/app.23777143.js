(function(t){function e(e){for(var i,o,a=e[0],c=e[1],u=e[2],f=0,h=[];f<a.length;f++)o=a[f],r[o]&&h.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/nudoku/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"38c8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{touchmove:function(t){t.preventDefault()}}},[t.pending?n("div",{staticClass:"pending"},[n("div",{staticClass:"pending__logo"},[t._v("\n      NUDOKU\n    ")]),t.won?[t.won?n("div",{staticClass:"pending__noti"},[t._v("YOU'VE LUCKILY WON!")]):t._e()]:t.lost?n("div",{staticClass:"pending__noti"},[t._v("YOU DUMBASS LOSER!")]):n("div",{staticClass:"pending__subtitle"},[t._v("Just a dummy text to make it look not as empty as its creator")]),t.won||t.lost?n("div",{staticClass:"pending__score"},[n("div",{staticClass:"pending__score__title"},[t._v("HIGH SCORES")]),t._l(t.highScores,function(e,i){return n("div",{key:i,staticClass:"pending__score__item"},[n("span",[t._v(t._s(e.completedAt))]),n("span",[t._v(t._s(t._f("prettifyTime")(e.time,!1)))])])})],2):n("div"),n("button",{staticClass:"pending__start",on:{click:t.start}},[t._v("PLAY "+t._s(t.won||t.lost?"AGAIN":"NOW"))])],2):t._e(),n("header",{staticClass:"header"},[n("span",[t._v("Mistakes: "+t._s(t.mistakes)+"/3")]),n("button",{on:{click:t.togglePaused}},[t._v("\n      "+t._s(t._f("prettifyTime")(t.time))+" "),n("i",{staticClass:"header__btn__icon",class:[t.paused?"ico__pause":"ico__play"]})]),n("button",{on:{click:t.start}},[t._v("New Game")])]),n("main",{staticClass:"main"},[t.paused?n("div",{staticClass:"paused"},[n("div",{staticClass:"paused__content"},[n("button",{on:{click:t.togglePaused}},[n("i",{staticClass:"ico__play ico--xl"})])])]):t._e(),n("div",{staticClass:"play",class:{"play--paused":t.paused,"play--noting":t.noting}},t._l(t.boxes,function(e,i){return n("div",{key:"b-"+i,staticClass:"play__box",on:{touchmove:t.onTouchMove}},[t._l(e,function(e){return[t.paused?n("div",{key:e.id,staticClass:"play__cell"}):n("div",{key:e.id,ref:"cells",refInFor:!0,staticClass:"play__cell",class:[t.actives[e.id]?"selected":t.active&&t.active.id===e.id?"active":t.multiple||i!==t.active.box&&e.row!==t.active.row&&e.col!==t.active.col?t.temps[t.active.id]&&t.temps[t.active.id]===t.temps[e.id]?"same":"":"affected"],attrs:{"data-id":e.addr},on:{click:function(n){!t.touchable&&t.onActiveChange(e,n)},touchstart:function(n){t.onActiveChange(e,n)}}},[e.value?n("div",{staticClass:"play__cell__fixed",attrs:{"data-id":e.addr}},[t._v(t._s(e.value))]):t.notesState[e.id]?n("div",{staticClass:"play__cell__notes",attrs:{"data-id":e.addr}},t._l(t.notes[e.id],function(i,r){return n("div",{key:r,staticClass:"play__cell__notes__item",class:{same:i>0&&r+1===t.temps[t.active.id]},attrs:{"data-id":e.addr}},[t._v("\n                "+t._s(i>0?i:"")+"\n              ")])})):t.temps[e.id]?n("div",{staticClass:"play__cell__temp",class:{wrong:t.temps[e.id]!==t.answer[e.id]},attrs:{"data-id":e.addr}},[t._v("\n              "+t._s(t.temps[e.id])+"\n            ")]):t._e()])]})],2)})),n("div",{staticClass:"controls"},[n("button",{class:{primary:t.noting},on:{click:t.toggleNoting}},[n("div",[t._v("✎")]),t._v(" Note")]),n("button",{on:{click:t.undo}},[n("div",[t._v("↺")]),t._v(" Undo")]),n("button",{on:{click:t.erase}},[n("div",[t._v("✘")]),t._v(" Erase")]),n("button",{class:{primary:t.multiple},on:{click:t.toggleMultiple}},[n("div",[t._v("☷")]),t._v(" Multiple")])]),n("div",{staticClass:"number"},t._l(9,function(e){return n("div",{key:e,staticClass:"numbers__item",class:{disabled:9===t.filledNumbers[e-1],primary:t.noting},on:{click:function(n){t.onNumberClick(e)}}},[t._v(t._s(e))])}))]),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("a",{attrs:{href:"https://github.com/endyquang/nudoku",target:"_blank"}},[n("img",{attrs:{src:"/nudoku/github.png"}})])])}],o=(n("28a5"),n("3835")),a=(n("55dd"),n("5df3"),n("1c4c"),n("ac4d"),n("8a81"),n("ac6a"),n("456d"),n("4f7f"),n("20d6"),n("2909")),c=b(),u=w(),l=k(function(t,e){return x(e)}),f=k(function(t,e){return A(e)});k(function(t,e){return C(e)});function h(){var t=k(function(){return""}),e=k(function(){return Array.from({length:9},function(){return 1})});return n(),{answer:t,trimmedAnswer:d(t)};function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(81!==r){var s=[];if(e[r].forEach(function(t,e){1===t&&s.push(e)}),!s.length)return e[r].forEach(function(t,n){2===t&&(e[r][n]=1)}),-1;var o=E(s);if(i(r,o,-1),-1===n(r+1))return e[r][o]=2,i(r,o,1),n(r);t[r]=o+1}}function i(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;l[t].forEach(function(t){e[t][n]+=i})}}function d(t){var e=S(Array.from({length:81},function(t,e){return e})),n=Object(a["a"])(t);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(81!==t){var r=e[t],s=n.splice(r,1,"")[0];v(n)||n.splice(r,1,s),i(t+1)}}return i(),n}function v(t){return 1===p(_(Object(a["a"])(t)))}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(81===e)return++n;if(!t[e])return p(t,e+1,n);var i=g(t[e]);if(i>-1){if(m(t,e,i,-1),n=p(t,e+1,n),n<2)return t[e][i]=2,m(t,e,i,1),p(t,e,n)}else t[e].forEach(function(n,i){2===n&&(t[e][i]=1)});return n}function m(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;l[e].forEach(function(e){t[e]&&(t[e][n]+=i)})}function g(t){for(var e=0;e<9;e++)if(1===t[e])return e}function _(t){for(var e=[],n=[],i=0;i<81;i++)if(t[i])n[i]=null;else{e[i]=9,n[i]=Array.from({length:9},function(){return 1});var r=!0,s=!1,o=void 0;try{for(var a,c=f[i][Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var u=a.value,l=t[u];if(l&&n[i][l-1]&&(n[i][l-1]=0,1===--e[i])){t[i]=n[i].findIndex(Boolean)+1,n[i]=null,y(n,t,i,e);break}}}catch(h){s=!0,o=h}finally{try{r||null==c.return||c.return()}finally{if(s)throw o}}}return n}function y(t,e,n,i){var r=e[n]-1,s=!0,o=!1,a=void 0;try{for(var c,u=f[n][Symbol.iterator]();!(s=(c=u.next()).done);s=!0){var l=c.value;t[l]&&t[l][r]&&(t[l][r]=0,1===--i[l]&&(e[l]=t[l].findIndex(Boolean)+1,t[l]=null,y(t,e,l,i)))}}catch(h){o=!0,a=h}finally{try{s||null==u.return||u.return()}finally{if(o)throw a}}}function b(){return Array.from({length:81},function(t,e){return O(e)})}function w(){return Array.from({length:9},function(t,e){var n=e%3*3+27*Math.floor(e/3);return Array.from({length:9},function(t,e){var i=e%3+9*Math.floor(e/3);return n+i})})}function k(t){return Array.from({length:81},t)}function x(t){for(var e=[],n=O(t),i=n.col,r=n.row,s=r+1,o=r+3-r%3,a=i-i%3,c=i+3-i%3,u=t+1;u<t+9-t%9;u++)e.push(u);for(var l=s;l<o;l++)for(var f=a;f<c;f++)e.push(I(f,l));for(var h=t%9+9*o;h<81;h+=9)e.push(h);return e}function A(t){var e=C(t);return Array.from(new Set(Array.prototype.concat.apply([],e)))}function C(t){for(var e=[[],[],[]],n=O(t),i=n.col,r=n.row,s=n.box,o=9*r;o<t+9-i;o++)e[0].push(o);for(var a=i;a<81;a+=9)e[1].push(a);return u[s].forEach(function(t){return e[2].push(t)}),e}function S(t){for(var e=Object(a["a"])(t),n=t.length,i=[],r=0;r<n;r++)i.push(N(e));return i}function O(t){var e=t%9,n=Math.floor(t/9);return{col:e,row:n,box:3*Math.floor(n/3)+Math.floor(e/3)}}function I(t,e){return 9*e+t}function N(t){return t.splice(M(t),1)[0]}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t[M(t)]}function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Math.floor(Math.random()*t.length)}var T={generate:h,addresses:c};function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=3600,n=60,i=Math.floor(t/e),r=Math.floor((t-i*e)/n),s=Math.floor(t-i*e-r*n);return[i,r,s]}function H(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e={active:-1,actives:[],answer:[],boxes:[],corrects:0,difficulty:"hardest",highScores:[],histories:[],lost:!1,mistakes:0,multiple:!1,notes:[],noting:!1,paused:!1,pending:!0,tempHistory:[],temps:[],time:0,timer:null,won:!1};if(t)return Object.keys(e);for(var n in e){var i=localStorage[n];void 0!==i&&"undefined"!==i&&(e[n]=JSON.parse(i||"null"))}return e}function P(){var t={},e=H(!0);return e.forEach(function(e){t[e]={deep:!0,handler:function(t){localStorage[e]=JSON.stringify(t)}}}),t}var W={name:"app",data:function(){return H()},watch:P(),mounted:function(){this.startTimer()},computed:{notesState:function(){return this.notes.map(function(t){var e=!0,n=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var o=r.value;if(o>0)return!0}}catch(a){n=!0,i=a}finally{try{e||null==s.return||s.return()}finally{if(n)throw i}}})},filledNumbers:function(){var t=Array.from({length:9},function(){return 0});return this.temps.forEach(function(e,n){e>0&&t[e-1]++}),t},touchable:function(){return"ontouchstart"in document.documentElement}},methods:{start:function(){this.stopTimer();var t=T.generate("hardest"),e=t.answer,n=t.trimmedAnswer;this.active=-1,this.resetActives(),this.answer=e,this.boxes=this.makeBoxes(n),this.corrects=n.filter(Boolean).length,this.histories=[],this.lost=!1,this.mistakes=0,this.multiple=!1,this.notes=Array.from({length:81},function(){return Array.from({length:9},function(){return 0})}),this.paused=!1,this.pending=!1,this.won=!1,this.time=0,this.timer=null,this.tempHistory=[],this.temps=n,this.startTimer()},makeBoxes:function(t){var e=Array.from({length:9},function(){return[]});return t.forEach(function(t,n){var i=T.addresses[n],r=i.row,s=i.col,o=i.box;e[o].push({value:t,id:n,row:r,col:s,box:o,addr:o+"-"+e[o].length})}),e},startTimer:function(){var t=this;this.pending||this.paused||(this.timer=setInterval(function(){return t.time++},1e3))},stopTimer:function(){clearInterval(this.timer)},pushHistory:function(){this.tempHistory.length&&(this.histories.push(this.tempHistory),this.histories.length>50&&this.histories.splice(0,1),this.tempHistory=[])},onNumberClick:function(t){var e=this;this.getActiveIndexes(function(n){if(e.noting){var i=t-1,r=e.notes[n][i];e.tempHistory.push({type:"noteItem",cellIndex:n,numberIndex:i,value:r}),e.notes[n].splice(i,1,r>0?0:t),e.setTemp(n,"")}else{if(t!==e.temps[n]&&t!==e.answer[n]&&3===++e.mistakes)return e.gameOver();e.setTemp(n,t)}}),this.pushHistory()},erase:function(){var t=this;this.getActiveIndexes(function(e){t.resetNote(e),t.setTemp(e,"")}),this.pushHistory()},undo:function(){var t=this;if(!this.paused&&this.histories.length){var e=this.histories.pop()||[];e.forEach(function(e){var n=e.cellIndex,i=e.numberIndex,r=e.value,s=e.type;switch(s){case"temp":t.setTemp(n,r);break;case"note":t.notes.splice(n,1,r);break;case"noteItem":t.notes[n].splice(i,1,r);break}})}},resetNote:function(t){this.notesState[t]&&(this.tempHistory.push({type:"note",cellIndex:t,value:this.notes[t]}),this.notes.splice(t,1,Array.from({length:9},function(){return 0})))},removeNoteItem:function(t,e){if(this.notesState[t]){var n=e-1;this.tempHistory.push({type:"noteItem",cellIndex:t,numberIndex:n,value:this.notes[t][n]}),this.notes[t].splice(n,1,0)}},setTemp:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e===this.temps[t]?"":e;if(n){if(n===this.answer[t]&&81===++this.corrects)return this.win();this.resetNote(t)}this.temps[t]===this.answer[t]&&this.corrects--,this.tempHistory.push({type:"temp",cellIndex:t,value:this.temps[t]}),this.temps.splice(t,1,n),this.clearRelevantNotes(t,n)},clearRelevantNotes:function(t,e){var n=this;if(e){var i=T.addresses[t],r=i.row,s=i.col,o=i.box;this.boxes[o].forEach(function(t){return n.removeNoteItem(t.id,e)}),this.notes.forEach(function(t,i){r!==T.addresses[i].row&&s!==T.addresses[i].col||n.removeNoteItem(i,e)})}},resetActives:function(){this.actives=Array.from({length:81},function(){return!1})},getActiveIndexes:function(t){if(!this.paused)if(this.multiple)this.actives.forEach(function(e,n){e&&t(n)}),this.resetActives();else if(this.active.id>=0&&!this.active.value)return t(this.active.id)},toggleNoting:function(){this.noting=!this.noting,this.noting||(this.multiple=!1,this.resetActives())},toggleMultiple:function(){this.multiple=!this.multiple,this.noting=this.multiple,this.multiple?this.active.id>=0&&!this.active.value&&!this.temps[this.active.id]&&(this.actives.splice(this.active.id,1,!0),this.active=-1):this.resetActives()},onActiveChange:function(t,e){t&&t!==this.active&&(!this.multiple||t.value||this.temps[t.id]?this.active=t:this.actives.splice(t.id,1,!this.actives[t.id]))},gameOver:function(){this.lost=!0,this.openPendingWindow()},win:function(){this.won=!0;var t=this.time;this.highScores.push({time:t,completedAt:(new Date).toLocaleDateString("vi")}),this.highScores.sort(function(t,e){return t.time-e.time}),this.highScores.splice(5),this.openPendingWindow()},openPendingWindow:function(){this.pending=!0,this.stopTimer()},togglePaused:function(){this.paused=!this.paused,this.paused?this.stopTimer():this.startTimer()},onTouchMove:function(t){if(!this.multiple){var e=t.touches[0],n=e.clientX,i=e.clientY,r=document.elementFromPoint(n,i);if(r){var s=r.getAttribute("data-id");if(s){var a=s.split("-"),c=Object(o["a"])(a,2),u=c[0],l=c[1];this.onActiveChange(this.boxes[u][l])}}}}},filters:{prettifyTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!(t>-1))return"00:00";var n=function(t){return("0"+t).slice(-2)},i=j(t),r=Object(o["a"])(i,3),s=r[0],a=r[1],c=r[2];return(s?"".concat(n(s),":"):"")+"".concat(e?n(a):a,":").concat(n(c))}}},U=W,B=n("2877"),D=Object(B["a"])(U,r,s,!1,null,null,null);D.options.__file="App.vue";var L=D.exports,J=(n("38c8"),!0),R="serviceWorker"in navigator&&J;R&&navigator.serviceWorker.register("/nudoku/service-worker.js").then(function(){console.log("Service Worker Registered!")}),i["a"].config.productionTip=!1,document.addEventListener("gesturestart",function(t){t.preventDefault()}),new i["a"]({render:function(t){return t(L)}}).$mount("#app")}});