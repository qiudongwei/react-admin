(window["webpackJsonpreact-admin"]=window["webpackJsonpreact-admin"]||[]).push([[5],{20:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return O}));var r=n(86),a=n(58),c=n(87),o=n(39),i=n(13),u=n(57);var s=function(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))},l=function(e){var t=window.sessionStorage.getItem(e);return t?JSON.parse(t):null},p=function(e){return Object(a.a)(Object(c.a)(" "),Object(o.a)((function(t){return!!Object(r.a)(t,e)})),i.a)(e)},b=function(e){for(var t="abcdefghigklmnopqrstuvwxyz0123456789",n="";e;){var r=Math.floor(Math.random()*Math.floor(t.length));n+=r%2?t[r].toUpperCase():t[r].toLowerCase(),e--}return n},f=function(e){return Number.isNaN(e)};var m,O=(m=function(e,t,n){if(e.length>0)return Object(u.a)(e,n);if(t.length>0){var r=Object(a.a)(Object(o.a)((function(e){return!t.includes(e)})),i.a)(n);return Object(u.a)(r,n)}return n},function e(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.length>=m.length?m.apply(void 0,n):function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.apply(void 0,n.concat(r))}})},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return{type:"LOGIN",user:e}},a=function(e){return{type:"UPDATE",key:e}}},59:function(e,t,n){e.exports=n(85)},68:function(e,t,n){},69:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),o=n.n(c),i=n(23),u=n(17),s=(n(68),n(69),n(16)),l=n(8),p=n(9),b=n(12),f=n(10),m=n(11),O=n(29),h=n(18),j=n(86),d=n(28),v=n(51),y=n(58),g=n(89),E=n(48),w=n(20),k=function(e){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.children}}]),t}(r.Component);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={routeName:Object(v.a)(["locaotion","pathname"],n.props),routes:Object(y.a)(n.checkActive.bind(Object(d.a)(n)),Object(j.a)("sidebar"))(n.props)},n.generateSidebar=n.generateSidebar.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("ul",{className:"sidebar-wrapper"},Object(g.a)(this.generateSidebar,this.state.routes))}},{key:"generateSidebar",value:function(e){var t;return this.hasPer(e.auth)?a.a.createElement("li",{className:"sidebar-item",key:e.title},a.a.createElement("div",{className:Object(w.a)({"sidebar-item-name":!0,on:e.active}),onClick:this.toggleMenu.bind(this,e.key)},a.a.createElement("span",null,a.a.createElement("i",{className:Object(w.a)((t={"icomoon nav-icon":!0},Object(s.a)(t,e.icon,!e.active),Object(s.a)(t,"".concat(e.icon,"-fill"),e.active),t))}),e.title),a.a.createElement("i",{className:Object(w.a)({icomoon:!0,"icon-right2":!e.active,"icon-down2":e.active})})),a.a.createElement("ul",{className:"sidebar-sub"},this.generateSubMenu(e.routes))):null}},{key:"generateSubMenu",value:function(e){var t=this;return Object(g.a)((function(e){return t.hasPer(e.auth)?a.a.createElement("li",{className:"sidebar-sub-item",key:e.name},e.component?a.a.createElement(O.b,{to:e.path,activeClassName:"active"},e.name):a.a.createElement(k,null,a.a.createElement("div",{className:Object(w.a)({"sidebar-item-name":!0,on:e.active})},a.a.createElement("i",{className:Object(w.a)({icomoon:!0,"icon-right2":!e.active,"icon-down2":e.active})}),e.name),a.a.createElement("ul",{className:"sidebar-sub"},t.generateSubMenu(e.routes)))):null}),e)}},{key:"toggleMenu",value:function(e){(0,this.props.dispatchSideBar)(e),this.setState({routes:Object(j.a)("sidebar",this.props)})}},{key:"checkActive",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=n||Object(v.a)(["location","pathname"],this.props);return Object(g.a)((function(e){return new RegExp(r).test(e.key)?e.active=!0:e.routes&&(e.routes=t.checkActive(e.routes,r)),e}),e)}},{key:"hasPer",value:function(e){if(Object(v.a)(["user","isAdmin"],this.props)||!e)return!0;var t=Object(v.a)(["user","permission"],this.props);return"undefined"!==typeof t&&(Array.isArray(e)?e.every((function(e){return t.includes(e)})):e instanceof RegExp?t.some((function(t){return e.test(t)})):t.includes(e))}}]),t}(r.Component),S=Object(u.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({user:Object(j.a)("user",e),sidebar:Object(j.a)("sidebarInfo",e)},t)}),(function(e){return{dispatchSideBar:function(t){return e(Object(E.b)(t))}}}))(Object(h.g)(N)),D=n(49),A=n.n(D),C=n(54),x=n.n(C),M=n(56),I=n(88),R=[{title:"\u6211\u7684\u4e8b\u52a1",icon:"icon-home",routes:[{name:"\u5f85\u5ba1\u6279",path:"/front/approval/undo",component:"ApprovalUndo"},{name:"\u5df2\u5904\u7406",path:"/front/approval/done",auth:"add",component:"ApprovalDone"}]}],q=n(45),L=n.n(q),U=n(55);function B(e){return function(t){function n(e){var t;return Object(l.a)(this,n),(t=Object(b.a)(this,Object(f.a)(n).call(this,e))).state={component:null},t}return Object(m.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(U.a)(L.a.mark((function t(){var n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)}var J={ApprovalUndo:B((function(){return n.e(2).then(n.bind(null,99))})),ApprovalDone:B((function(){return n.e(1).then(n.bind(null,97))}))};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(h.d,null,Object(M.a)(Object(g.a)((function(t){var n=t.routes;return e.generateRoute(n,t.title)})),I.a)(R),a.a.createElement(h.b,{render:function(){return a.a.createElement(h.a,{to:"/front/404"})}}))}},{key:"generateRoute",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"React Admin";return Object(g.a)((function(t){return t.component?a.a.createElement(h.b,{key:t.path,exact:!0,path:t.path,render:function(r){var c=/\?\S*g/,o=window.location.hash.match(c),i=r.match.params;Object.keys(i).forEach((function(e){i[e]=i[e]&&i[e].replace(c,"")})),r.match.params=T({},i);var u=T({},r,{query:o?x.a.parse(o[0]):{}}),s=J[t.component],l=a.a.createElement(A.a,{title:n},a.a.createElement(s,u));return e.requireLogin(l,t.auth)}}):e.generateRoute(t.routes,n)}),t)}},{key:"requireLogin",value:function(e,t){return this.props.user.username||!1?t?this.requirePermission(e,t):e:a.a.createElement(h.a,{to:"/front/login"})}},{key:"requirePermission",value:function(e,t){var n=Object(v.a)(["user","permission"],this.props);return n&&this.checkPermission(t,n)?e:a.a.createElement(h.a,{to:"/front/autherror"})}},{key:"checkPermission",value:function(e,t){return!!Object(v.a)(["user","isAdmin"],this.props)||"undefined"!==typeof t&&(Array.isArray(e)?e.every((function(e){return t.includes(e)})):e instanceof RegExp?t.some((function(t){return e.test(t)})):t.includes(e))}}]),t}(r.Component),z=Object(u.b)((function(e,t){return T({user:Object(j.a)("user",e)},t)}))(W);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var $=function(e){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("section",{className:"sidebar"},a.a.createElement(S,null)),a.a.createElement("section",{className:"main"},a.a.createElement("header",{className:"header"},a.a.createElement("span",{className:"username"},"Hi, ",this.props.user.lastname)),a.a.createElement("div",{className:"wrapper"},a.a.createElement(z,null)),a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"copyright"},"Copyright@2019 \u5b89\u6b4c"))))}}]),t}(r.Component),F=Object(u.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({user:Object(j.a)("user",e)},t)}))($);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Q=B((function(){return n.e(4).then(n.bind(null,98))})),V=B((function(){return n.e(0).then(n.bind(null,95))})),X=B((function(){return n.e(3).then(n.bind(null,96))})),Y=function(e){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(O.a,null,a.a.createElement(h.d,null,a.a.createElement(h.b,{exact:!0,path:"/",render:function(){return a.a.createElement(h.a,{to:"/front/approval/undo",push:!0})}}),a.a.createElement(h.b,{path:"/front/404",component:V}),a.a.createElement(h.b,{path:"/front/autherror",component:X}),a.a.createElement(h.b,{path:"/front/login",render:function(){return e.props.user.username?a.a.createElement(h.a,{to:"/front/approval/undo"}):a.a.createElement(Q,null)}}),a.a.createElement(h.b,{render:function(){return a.a.createElement(F,null)}})))}}]),t}(r.Component),Z=Object(u.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({user:e.user},t)}))(Y),_=n(57),ee=n(13),te=n(52),ne=Object(w.c)("user")||{username:"",lastname:"",img:"",permission:[],isAdmin:!1},re=function e(t){return Object(g.a)((function(t){return t.routes&&(t.active=!1,t.key=ce(t.routes),t.routes=e(t.routes)),t}),t)},ae=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(g.a)((function(t){return n===t.key?t.active=!t.active:t.routes&&(t.routes=e(t.routes,n)),t}),t)},ce=function e(t){return Object(te.a)((function(t,n){return n.routes?t+=e(n.routes):t+=n.path,t}),"",t)},oe=Object(i.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(_.a)(Object(ee.a)(e),t.user);default:return e}},sidebarInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re(R),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":return ae(e,t.key);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(u.a,{store:Object(i.c)(oe)},a.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,6,7]]]);
//# sourceMappingURL=main.0490c82f.js.map