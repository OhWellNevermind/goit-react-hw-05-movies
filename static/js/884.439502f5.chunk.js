"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{409:function(e,t,n){n.d(t,{LI:function(){return d},Mc:function(){return o},SD:function(){return u},eH:function(){return l},oJ:function(){return p}});var r=n(861),a=n(757),s=n.n(a),c=n(243),i="18ad1afa22a39e3c497cf86bc3da3983",u=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(i,"&language=en-US&page=").concat(t),{signal:n.signal});case 2:return r=e.sent,a=r.data,e.abrupt("return",{results:a.results,total_pages:a.total_pages});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t,n,r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(i,"&language=en-US&page=").concat(n),{signal:r.signal});case 2:return a=e.sent,e.abrupt("return",{results:a.data.results,total_pages:a.data.total_pages});case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},884:function(e,t,n){n.r(t);var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(409),u=n(791),o=n(689),l=n(87),p=n(825),d=n(184);t.default=function(){var e,t,n=(0,u.useState)({}),s=(0,a.Z)(n,2),f=s[0],h=s[1],v=(0,u.useState)(200),x=(0,a.Z)(v,2),g=x[0],m=x[1],j=(0,o.UO)().movieId,w=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Mc)(j);case 3:t=e.sent,h(t),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),m(e.t0.response.status),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(p.W,{children:[(0,d.jsx)(l.rU,{to:w,children:"Go Back"}),404===g?(0,d.jsx)("p",{className:"pt-4",children:"Details not found"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex gap-x-5 mb-2",children:[(0,d.jsx)("div",{children:f.poster_path?(0,d.jsx)("img",{className:"w-[300px] h-[400px]",src:"https://image.tmdb.org/t/p/original/".concat(f.poster_path),alt:""}):(0,d.jsx)("div",{className:"w-[300px] h-[400px] text-center",children:"No Image"})}),(0,d.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,d.jsxs)("p",{className:"font-bold",children:[f.title," (",new Date(f.release_date).getFullYear(),")"]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{className:"font-bold",children:"User Score:"})," ",f.vote_average]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{className:"font-bold",children:"Overview:"})," ",f.overview]}),(0,d.jsxs)("ul",{className:"flex gap-3",children:[(0,d.jsx)("span",{className:"font-bold",children:"Genres:"}),f.genres&&f.genres.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))]}),(0,d.jsxs)("ul",{className:"flex gap-3",children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"cast",children:"See cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"reviews",children:"See reviews"})})]})]})]}),(0,d.jsx)("div",{children:(0,d.jsx)(o.j3,{})})]})]})})}}}]);
//# sourceMappingURL=884.439502f5.chunk.js.map