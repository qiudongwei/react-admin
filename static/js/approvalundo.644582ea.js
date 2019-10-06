(window["webpackJsonpreact-admin"]=window["webpackJsonpreact-admin"]||[]).push([[2],{90:function(e,t,a){"use strict";var n=a(8),r=a(9),l=a(20);var c=a(41);function i(e,t,a,n){var r,l=function(r){for(var l=t.length,c=0;c<l;){if(e===t[c])return a[c];c+=1}for(var s in t[c+1]=e,a[c+1]=r,e)r[s]=n?i(e[s],t,a,!0):e[s];return r};switch(Object(c.a)(e)){case"Object":return l({});case"Array":return l([]);case"Date":return new Date(e.valueOf());case"RegExp":return r=e,new RegExp(r.source,(r.global?"g":"")+(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.sticky?"y":"")+(r.unicode?"u":""));default:return e}}var s=a(4),o=Object(s.a)((function(e){return null!=e&&"function"===typeof e.clone?e.clone():i(e,[],[],!0)})),u=function(){function e(){Object(n.a)(this,e),this._events=Object.create(null),this._eventsCount=0,this._maxListeners=e.MAX_LISTENERS}return Object(r.a)(e,[{key:"setMaxListeners",value:function(e){if("number"!==typeof e||e<0||Object(l.d)(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this}},{key:"getMaxListeners",value:function(){return this._maxListeners}},{key:"emit",value:function(e){for(var t=this,a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];var l="error"===e,c=this._events;if(void 0!==c)l=l&&void 0===c.error;else if(!l)return!1;if(l){var i=n.length>0?n[0]:null;if(i instanceof Error)throw i;var s=i?"(".concat(i.message,")"):"",u=new Error("Unhandled error.".concat(s));throw u.context=i,u}var m=c[e];if(void 0===m)return!1;if("function"===typeof m)m.apply(this,n);else{var p=o(m);p.forEach((function(e){return e.apply(t,n)}))}return!0}},{key:"on",value:function(e,t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);var a=this._events,n=a[e];n?"function"===typeof n?n=a[e]=[n,t]:n.push(t):(n=a[e]=t,++this._eventsCount);var r=this._maxListeners;if(r>0&&n.length>r&&!n.warned){n.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. ".concat(n.length," ").concat(String(e)," listeners added. Use emitter.setMaxListeners() to increase limit"));l.name="MaxListenersExceededWarning",l.emitter=this,l.type=e,l.count=n.length,this.ProcessEmitWarning(l)}return this}},{key:"off",value:function(e,t){var a=!t;if(!a&&"function"!==t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);var n=this._events,r=n[e];if(!r)return this;if(a)return this.RemoveAllListeners(e);if(r===t||r.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!==typeof r){for(var l=-1,c=null,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){c=r[i].listener,l=i;break}if(l<0)return this;0===l?r.shift():r.splice(l,1),1===r.length&&(n[e]=r[0]),n.removeListener&&this.emit("removeListener",e,c||t)}return this}}],[{key:"ProcessEmitWarning",value:function(e){console&&console.warn&&console.warn(e)}},{key:"RemoveAllListeners",value:function(e){var t=this,a=this._events;if(a.removeListener)if(void 0===e){Object.keys(a).filter((function(e){return"removeListener"!==e})).forEach((function(e){t.RemoveAllListeners(e)})),this.RemoveAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0}else{var n=a[e];"function"===typeof n?this.off(e,n):void 0!==n&&void 0!==n&&n.forEach((function(a){t.off(e,a)}))}else void 0===e?(this._events=Object.create(null),this._eventsCount=0):(--this._eventsCount,0===this._eventsCount?this._events=Object.create(null):delete a[e]);return this}}]),e}();u.MAX_LISTENERS=50;var m=u;t.a=new m},91:function(e,t,a){"use strict";var n=a(8),r=a(9),l=a(12),c=a(10),i=a(28),s=a(11),o=a(0),u=a.n(o),m=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).handleInput=e.handleInput.bind(Object(i.a)(e)),e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("ul",{className:"pagination"},u.a.createElement("p",{className:"pagination-total"},"\u5171100\u6761"),u.a.createElement("li",{className:"pagination-item"},"1"),u.a.createElement("li",{className:"pagination-item"},"2"),u.a.createElement("li",{className:"pagination-item"},"..."),u.a.createElement("li",{className:"pagination-item"},"7"),u.a.createElement("p",{className:"pagination-goto"},"\u8df3\u81f3",u.a.createElement("input",{type:"text",onChange:this.handleInput,className:"common-input pagination-input"}),"\u9875"))}},{key:"handleInput",value:function(e){var t=e.target;console.log(t.value)}}]),t}(o.Component);t.a=m},92:function(e,t,a){"use strict";var n=a(8),r=a(9),l=a(12),c=a(10),i=a(11),s=a(0),o=a.n(s),u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"common-query"},o.a.createElement("div",{className:"query-group"},this.props.children),o.a.createElement("div",{className:"query-control"},o.a.createElement("button",{className:"common-btn primary"},"\u786e\u5b9a"),o.a.createElement("button",{className:"common-btn secondary"},"\u6e05\u7a7a")))}}]),t}(s.Component);t.a=u},93:function(e,t,a){"use strict";var n=a(8),r=a(9),l=a(12),c=a(10),i=a(28),s=a(11),o=a(0),u=a.n(o),m=a(90),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleInput=a.handleInput.bind(Object(i.a)(a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("input",{type:this.props.type,placeholder:this.props.placeholder,name:this.props.model,className:"common-input",onChange:this.handleInput})}},{key:"handleInput",value:function(e){var t=e.target,a=t.name,n=t.value;m.a.emit(a,n)}}]),t}(o.Component);p.defaultProps={type:"text"},t.a=p},99:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(8),l=a(9),c=a(12),i=a(10),s=a(11),o=a(0),u=a.n(o),m=a(89),p=a(86),h=a(20),f=a(90),d=a(91),v=a(92),y=a(93),b=a(52),E=a(58),O=a(88),j=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(c.a)(this,Object(i.a)(t).call(this,e));var n=/thead$/i;return a.childrens=Object(b.a)((function(e,t){var a=t.key;if(n.test(a))e[a]=t;else{var r={id:Object(h.e)(7),node:t};e[a]?e[a].push(r):e[a]=[r]}return e}),{},t.extractTable(e)),a.state={hasLeft:!!a.childrens["left-thead"],hasRight:!!a.childrens["right-thead"]},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"table-container"},this.state.hasLeft?u.a.createElement("div",null,u.a.createElement("table",{className:"common-table table-left"},u.a.createElement("thead",null,this.childrens["left-thead"]),u.a.createElement("tbody",null,Object(m.a)((function(e){return u.a.createElement(o.Fragment,{key:e.id},e.node)}),this.childrens["left-tbody"])))):null,u.a.createElement("table",{className:"common-table table-middle"},u.a.createElement("thead",null,this.childrens.thead),u.a.createElement("tbody",null,Object(m.a)((function(e){return u.a.createElement(o.Fragment,{key:e.id},e.node)}),this.childrens.tbody))),this.state.hasRight?u.a.createElement("div",null,u.a.createElement("table",{className:"common-table table-right"},u.a.createElement("thead",null,this.childrens["right-thead"]),u.a.createElement("tbody",null,Object(m.a)((function(e){return u.a.createElement(o.Fragment,{key:e.id},e.node)}),this.childrens["right-tbody"])))):null)}}],[{key:"extractTable",value:function(e){var t=this;return e?Object(E.a)(O.a,Object(m.a)((function(e){return t.TABLE_KEY.includes(e.key)?e:t.extractTable(e.props)})),O.a,Object(p.a)("children"))(e):[]}}]),t}(o.Component);j.TABLE_KEY=["left-thead","thead","right-thead","left-tbody","tbody","right-tbody"];var g=j,_=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("td",{className:"align-cell"},u.a.createElement("div",{className:"table-cell"},this.props.children))}}]),t}(o.Component);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={data:[{system:"\u5c04\u96d5",apply_no:"SD0001190919",apply_type:"SD",apply_name:"\u5c04\u96d5CP\u7ec4\u5408\u7533\u8bf7",applicant_name:"\u90ed\u9756",cp_name:"\u9ec4\u84c9",apply_date:"2019-10-01",status:100},{system:"\u795e\u96d5",apply_no:"SDX0001190919",apply_type:"SDX",apply_name:"\u795e\u96d5CP\u7ec4\u5408\u7533\u8bf7",applicant_name:"\u6768\u8fc7",cp_name:"\u5c0f\u9f99\u5973",apply_date:"2019-10-01",status:101},{system:"\u501a\u5929",apply_no:"YT0001190919",apply_type:"YT",apply_name:"\u501a\u5929CP\u7ec4\u5408\u7533\u8bf7",applicant_name:"\u5f20\u65e0\u5fcc",cp_name:"\u8d75\u654f",apply_date:"2019-10-01",status:101}],form:{apply_name:"",applicant_name:""}},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"view"},u.a.createElement("div",{className:"view-head"},u.a.createElement("div",{className:"view-title"},"\u5f85\u529e"),u.a.createElement("ul",{className:"view-tap"},u.a.createElement("li",{className:"view-tap-item active"},"\u5168\u90e8"),u.a.createElement("li",{className:"view-tap-item"},"\u5c04\u96d5\u82f1\u96c4\u4f20"),u.a.createElement("li",{className:"view-tap-item"},"\u795e\u96d5\u4fa0\u4fa3"),u.a.createElement("li",{className:"view-tap-item"},"\u501a\u5929\u5c60\u9f99\u8bb0"))),u.a.createElement("div",{className:"view-body"},u.a.createElement(v.a,null,u.a.createElement(y.a,{model:"form.apply_name",placeholder:"\u7533\u8bf7\u5355\u540d\u79f0"}),u.a.createElement(y.a,{model:"form.applicant_name",placeholder:"\u7533\u8bf7\u4eba"})),u.a.createElement(g,null,u.a.createElement(o.Fragment,{key:"left-thead"},u.a.createElement("tr",null,u.a.createElement("th",null,"\u4e66\u540d"),u.a.createElement("th",null,"\u7533\u8bf7\u53f7"))),u.a.createElement(o.Fragment,{key:"thead"},u.a.createElement("tr",null,u.a.createElement("th",null,"\u7533\u8bf7\u5355"),u.a.createElement("th",null,"\u5355\u636e\u7c7b\u578b"),u.a.createElement("th",null,"\u7533\u8bf7\u4eba"),u.a.createElement("th",null,"CP"),u.a.createElement("th",null,"\u7533\u8bf7\u65f6\u95f4"))),u.a.createElement(o.Fragment,{key:"right-thead"},u.a.createElement("tr",null,u.a.createElement("th",null,"\u72b6\u6001"))),Object(m.a)((function(e){return u.a.createElement(o.Fragment,{key:e.apply_no},u.a.createElement(o.Fragment,{key:"left-tbody"},u.a.createElement("tr",null,u.a.createElement(_,null,u.a.createElement("span",{className:Object(h.a)(Object(n.a)({"system-icon":!0},e.system,!0))},e.system)),u.a.createElement("td",null,e.apply_no))),u.a.createElement(o.Fragment,{key:"tbody"},u.a.createElement("tr",null,u.a.createElement("td",null,e.apply_name),u.a.createElement("td",null,e.apply_type),u.a.createElement("td",null,e.applicant_name),u.a.createElement("td",null,e.cp_name),u.a.createElement("td",null,e.apply_date))),u.a.createElement(o.Fragment,{key:"right-tbody"},u.a.createElement("tr",null,u.a.createElement("td",null,e.status))))}),this.state.data))),u.a.createElement("div",{className:"view-foot"},u.a.createElement(d.a,null)))}},{key:"componentDidMount",value:function(){var e=this;f.a.on("form.apply_name",(function(t){var a=Object(p.a)("form",e.state);e.setState({form:k({apply_name:t},Object(h.b)([],["apply_name"])(a))})})),f.a.on("form.applicant_name",(function(t){var a=Object(p.a)("form",e.state);e.setState({form:k({applicant_name:t},Object(h.b)([],["applicant_name"])(a))})}))}},{key:"componentWillUnmount",value:function(){f.a.off("from.apply_name")}}]),t}(o.Component);t.default=N}}]);
//# sourceMappingURL=approvalundo.644582ea.js.map