(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{3193:function(e,n,t){Promise.resolve().then(t.bind(t,6081))},6081:function(e,n,t){"use strict";var o=t(7573),r=t(7754),u=t(6512);n.default=()=>{let{isAuthenticated:e,isLoading:n,user:t}=(0,u.J)();return((0,r.useRouter)(),n)?(0,o.jsx)("p",{children:"Loading..."}):e?(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Protected Page"}),(0,o.jsxs)("p",{children:["Welcome, ",null==t?void 0:t.name,"!"]})]}):null}},6512:function(e,n,t){"use strict";t.d(n,{J:function(){return c}});var o=t(7653),r=t(7754),u=t(1069);let c=()=>{let{user:e,isAuthenticated:n,isLoading:t}=(0,u.useAuth)(),c=(0,r.useRouter)(),i=(0,r.useSearchParams)();return console.log("current location",location.href),(0,o.useEffect)(()=>{if(!t&&!n){let e=window.location.pathname,n=i.get("from");if(!e.startsWith("/login")&&n!==e){let n="/login?from=".concat(encodeURIComponent(e));c.push(n)}}},[t,n,c]),{user:e,isAuthenticated:n,isLoading:t}}}},function(e){e.O(0,[44,425,96,293,286,744],function(){return e(e.s=3193)}),_N_E=e.O()}]);