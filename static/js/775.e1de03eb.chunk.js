"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[775],{409:function(t,e,n){n.d(e,{LI:function(){return l},Mc:function(){return i},SD:function(){return o},eH:function(){return p},oJ:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(243),u="18ad1afa22a39e3c497cf86bc3da3983",o=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u,"&language=en-US&page=").concat(e),{signal:n.signal});case 2:return r=t.sent,a=r.data,t.abrupt("return",{results:a.results,total_pages:a.total_pages});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e,n,r){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(u,"&language=en-US&page=").concat(n),{signal:r.signal});case 2:return a=t.sent,t.abrupt("return",{results:a.data.results,total_pages:a.data.total_pages});case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},775:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(409),o=n(791),i=n(689),p=n(184);e.default=function(){var t=(0,i.UO)().movieId,e=(0,o.useState)([]),n=(0,a.Z)(e,2),c=n[0],f=n[1];return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.eH)(t);case 2:n=e.sent,f(n.cast.slice(0,15));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,p.jsx)("section",{children:(0,p.jsxs)("ul",{className:"grid grid-cols-5 gap-y-3 pt-2",children:[c.map((function(t){return(0,p.jsxs)("li",{className:"w-[200px]",children:[(0,p.jsx)("img",{className:"h-[300px] object-cover",src:t.profile_path?"https://image.tmdb.org/t/p/w300/".concat(t.profile_path):"https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png",alt:""}),(0,p.jsx)("p",{children:"Ryan Gosling"===t.name?"In deep dark fantasies: ".concat(t.name):t.name})]},t.id)})),"and others..."]})})}}}]);
//# sourceMappingURL=775.e1de03eb.chunk.js.map