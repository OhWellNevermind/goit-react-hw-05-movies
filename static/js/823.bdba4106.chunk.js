"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[823],{823:function(e,t,n){n.d(t,{e:function(){return _}});var r=n(433),o=n(861),s=n(439),i=n(757),a=n.n(i),l=n(825),c=n(791),u=function(e,t){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},u(e,t)};var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)};var h="Pixel",d="Percent",f={unit:d,value:.8};function g(e){return"number"===typeof e?{unit:d,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:h,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:d,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),f):(console.warn("scrollThreshold should be string or number"),f)}var m=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,r){var o,s=!1,i=0;function a(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-i,u=arguments;function p(){i=Date.now(),n.apply(l,u)}function h(){o=void 0}s||(r&&!o&&p(),a(),void 0===r&&c>e?p():!0!==t&&(o=setTimeout(r?h:p,void 0===r?e-c:e)))}return"boolean"!==typeof t&&(r=n,n=t,t=void 0),l.cancel=function(){a(),s=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?p(p({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=g(t);return r.unit===h?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=g(t);return r.unit===h?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=p({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return c.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},c.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&c.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},c.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(c.Component),v=m,w=n(87),y=n(184),b=function(e){var t=e.location,n=e.movie;return(0,y.jsxs)("li",{className:"w-fit",children:[(0,y.jsx)(w.rU,{state:{from:t},to:"/movies/".concat(n.id),children:(0,y.jsx)("img",{loading:"lazy",className:"w-[200px] h-[300px]",src:n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):"https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png",alt:""})}),(0,y.jsx)("p",{className:"w-[200px]",children:n.title||n.name})]})},T=n(409),S=n(689),_=function(e){var t=e.listType,n=(0,w.lr)(),i=(0,s.Z)(n,1)[0],u=(0,c.useState)([]),p=(0,s.Z)(u,2),h=p[0],d=p[1],f=(0,c.useState)(1),g=(0,s.Z)(f,2),m=g[0],_=g[1],E=(0,c.useState)(0),x=(0,s.Z)(E,2),L=x[0],D=x[1],k=(0,c.useState)(!0),Y=(0,s.Z)(k,2),M=Y[0],Z=Y[1],R=(0,c.useState)(""),C=(0,s.Z)(R,2),H=C[0],N=C[1],j=(0,S.TH)(),O=(0,c.useState)(""),P=(0,s.Z)(O,2),A=P[0],U=P[1];return(0,c.useEffect)((function(){var e=new AbortController;function n(){return(n=(0,o.Z)(a().mark((function n(){var o,s,l,c,u,p;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,"search"!==t){n.next=19;break}if(i.get("query")){n.next=5;break}return d([]),n.abrupt("return");case 5:return i.get("query")!==H&&d([]),n.next=8,(0,T.LI)(i.get("query"),m,e);case 8:if(o=n.sent,s=o.results,l=o.total_pages,s.length){n.next=14;break}return U("No movies found. Please try another name"),n.abrupt("return");case 14:D(l),d((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(s))})),N(i.get("query")),n.next=30;break;case 19:if("trending"!==t){n.next=29;break}return n.next=22,(0,T.SD)(m,e);case 22:c=n.sent,u=c.results,p=c.total_pages,D(p),d((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(u))})),n.next=30;break;case 29:throw new Error("Unknown type of list");case 30:n.next=36;break;case 32:if(n.prev=32,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code){n.next=36;break}return n.abrupt("return");case 36:case"end":return n.stop()}}),n,null,[[0,32]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){e.abort()}}),[t,m,i]),(0,y.jsx)(l.W,{children:h.length?(0,y.jsx)(v,{dataLength:h.length,next:function(){L!==m?_(m+1):Z(!1)},hasMore:M,loader:(0,y.jsx)("h4",{children:"Loading..."}),className:"list-none grid grid-cols-6 gap-y-3",children:h.map((function(e){return(0,y.jsx)(b,{location:j,movie:e},e.id)}))}):"".concat(A)})}},409:function(e,t,n){n.d(t,{LI:function(){return h},Mc:function(){return c},SD:function(){return l},eH:function(){return u},oJ:function(){return p}});var r=n(861),o=n(757),s=n.n(o),i=n(243),a="18ad1afa22a39e3c497cf86bc3da3983",l=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(a,"&language=en-US&page=").concat(t),{signal:n.signal});case 2:return r=e.sent,o=r.data,e.abrupt("return",{results:o.results,total_pages:o.total_pages});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(s().mark((function e(t,n,r){var o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(a,"&language=en-US&page=").concat(n),{signal:r.signal});case 2:return o=e.sent,e.abrupt("return",{results:o.data.results,total_pages:o.data.total_pages});case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=823.bdba4106.chunk.js.map