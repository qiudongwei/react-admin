(window["webpackJsonpreact-admin"]=window["webpackJsonpreact-admin"]||[]).push([[4],{94:function(t,e,n){},98:function(t,e,n){"use strict";n.r(e);var r=n(16),a=n(17),s=n(48),c=n(8),i=n(9),o=n(12),u=n(10),l=n(28),p=n(11),d=n(0),b=n.n(d),f=n(18),h=n(51),m=n(58),O=n(1),j=n(34);var g=n(25),y=function(){function t(t,e){this.xf=e,this.f=t,this.all=!0}return t.prototype["@@transducer/init"]=g.a.init,t.prototype["@@transducer/result"]=function(t){return this.all&&(t=this.xf["@@transducer/step"](t,!0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,e){var n;return this.f(e)||(this.all=!1,t=(n=this.xf["@@transducer/step"](t,!1))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),t},t}(),v=Object(O.a)((function(t,e){return new y(t,e)})),w=Object(O.a)(Object(j.a)(["all"],v,(function(t,e){for(var n=0;n<e.length;){if(!t(e[n]))return!1;n+=1}return!0}))),k=n(4),C=n(13),E=Object(k.a)((function(t){for(var e=Object(C.a)(t),n=e.length,r=[],a=0;a<n;)r[a]=t[e[a]],a+=1;return r})),P=(n(94),n(20)),A=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={form:{username:"",password:""},canApply:!1,btnClass:"login-btn disabled"},n.handleInput=n.handleInput.bind(Object(l.a)(n)),n.login=n.login.bind(Object(l.a)(n)),n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.state.canApply!==e.canApply}},{key:"render",value:function(){return b.a.createElement("section",{className:"login"},b.a.createElement("div",{className:"login-form"},b.a.createElement("h2",{className:"login-title"},"\u767b\u5f55"),b.a.createElement("input",{className:"common-input",type:"text",name:"username",placeholder:"\u5e10\u53f7",onChange:this.handleInput}),b.a.createElement("input",{className:"common-input",type:"password",name:"password",placeholder:"\u5bc6\u7801",onChange:this.handleInput}),b.a.createElement("button",{className:this.state.btnClass,disabled:!this.state.canApply,onClick:this.login},"\u767b\u5f55")))}},{key:"handleInput",value:function(t){var e,n=t.target,a=n.name,s=n.value,c="username"===a?"password":"username",i=(e={},Object(r.a)(e,a,s),Object(r.a)(e,c,Object(h.a)(["form",c],this.state)),e),o=Object(m.a)(w((function(t){return!!t})),E)(i);this.setState({form:i,canApply:o,btnClass:Object(P.a)({"login-btn":!0,disabled:!o})})}},{key:"login",value:function(){var t=this.props,e=t.dispatchLogin,n=t.history,r=this.state.form,a={username:r.username,lastname:r.username,img:"avatar.png",permission:["add"],isAdmin:!1};e(a),Object(P.f)("user",a),n.push("/front/approval/undo")}}]),e}(d.Component),N=Object(f.g)(A);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.default=Object(a.b)((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({user:t},e)}),(function(t){return{dispatchLogin:function(e){return t(Object(s.a)(e))}}}))(N)}}]);
//# sourceMappingURL=login.05dd6524.js.map