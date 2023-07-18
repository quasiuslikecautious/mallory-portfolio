import{s as S,e as ie,n as ne,c as se,u as ce,g as fe,d as de,f as me,o as ue}from"../chunks/scheduler.63274e7e.js";import{S as V,i as H,g as _,r as T,s as C,m as R,h as $,j as x,u as L,c as E,n as A,f as b,k as h,a as M,x as k,v as q,y as he,d as p,t as v,w as D,p as B,b as N,A as le,o as G,z}from"../chunks/index.385028d9.js";import{w as ge}from"../chunks/index.35a173b3.js";import{f as we,a as ke,b as be,e as O,c as pe,d as _e,S as $e}from"../chunks/Sidebar.c9932eb1.js";import{F,b as ve,c as ye,d as xe,e as Ie}from"../chunks/fa.3f1e4328.js";import{b as Y}from"../chunks/paths.bd8a7614.js";const U=ge("about");function Ce(l){let e,t,a,r,n,s,o,i,c,u,g;return a=new F({props:{icon:l[1],size:"lg"}}),{c(){e=_("li"),t=_("button"),T(a.$$.fragment),r=C(),n=_("span"),s=R(l[5]),this.h()},l(f){e=$(f,"LI",{role:!0,class:!0});var d=x(e);t=$(d,"BUTTON",{id:!0,"data-tabs-target":!0,type:!0,role:!0,"aria-controls":!0,"aria-selected":!0,class:!0});var m=x(t);L(a.$$.fragment,m),r=E(m),n=$(m,"SPAN",{class:!0});var w=x(n);s=A(w,l[5]),w.forEach(b),m.forEach(b),d.forEach(b),this.h()},h(){h(n,"class","hidden font-medium md:flex md:visible "),h(t,"id",l[4]),h(t,"data-tabs-target",l[3]),h(t,"type","button"),h(t,"role","tab"),h(t,"aria-controls","profile"),h(t,"aria-selected",o=l[2]==l[0]),h(t,"class",i="flex flex-col items-center justify-center space-y-2 w-full h-10 md:rounded-lg md:w-20 md:h-20 "+(l[2]==l[0]?"bg-gradient-to-r from-teal-500 to-indigo-500 text-white":"bg-secondary text-text hover:bg-gradient-to-r hover:from-teal-100 hover:to-indigo-100")),h(e,"role","presentation"),h(e,"class","w-full first:rounded-l-lg last:rounded-r-rg ")},m(f,d){M(f,e,d),k(e,t),q(a,t,null),k(t,r),k(t,n),k(n,s),c=!0,u||(g=he(t,"click",l[6]),u=!0)},p(f,[d]){const m={};d&2&&(m.icon=f[1]),a.$set(m),(!c||d&5&&o!==(o=f[2]==f[0]))&&h(t,"aria-selected",o),(!c||d&5&&i!==(i="flex flex-col items-center justify-center space-y-2 w-full h-10 md:rounded-lg md:w-20 md:h-20 "+(f[2]==f[0]?"bg-gradient-to-r from-teal-500 to-indigo-500 text-white":"bg-secondary text-text hover:bg-gradient-to-r hover:from-teal-100 hover:to-indigo-100")))&&h(t,"class",i)},i(f){c||(p(a.$$.fragment,f),c=!0)},o(f){v(a.$$.fragment,f),c=!1},d(f){f&&b(e),D(a),u=!1,g()}}}function Ee(l,e,t){let a;ie(l,U,g=>t(2,a=g));let{section:r}=e,{faIcon:n}=e;const s=r.toLowerCase(),o="#"+s,i=s+"-tab",c=s.charAt(0).toUpperCase()+s.slice(1);function u(){U.update(g=>r)}return l.$$set=g=>{"section"in g&&t(0,r=g.section),"faIcon"in g&&t(1,n=g.faIcon)},[r,n,a,o,i,c,u]}class Te extends V{constructor(e){super(),H(this,e,Ee,Ce,S,{section:0,faIcon:1})}}const K=[{section:"about",faIcon:we},{section:"resume",faIcon:ke},{section:"portfolio",faIcon:ve},{section:"socials",faIcon:be}];function J(l,e,t){const a=l.slice();return a[0]=e[t],a[2]=t,a}function Q(l){let e,t;return e=new Te({props:{section:l[0].section,faIcon:l[0].faIcon}}),{c(){T(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,r){q(e,a,r),t=!0},p:ne,i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function Le(l){let e,t,a,r=O(K),n=[];for(let o=0;o<r.length;o+=1)n[o]=Q(J(l,r,o));const s=o=>v(n[o],1,1,()=>{n[o]=null});return{c(){e=_("nav"),t=_("ul");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=$(o,"NAV",{class:!0});var i=x(e);t=$(i,"UL",{id:!0,"data-tabs-toggle":!0,role:!0,class:!0});var c=x(t);for(let u=0;u<n.length;u+=1)n[u].l(c);c.forEach(b),i.forEach(b),this.h()},h(){h(t,"id","nav-tab"),h(t,"data-tabs-toggle","#nav-tab-content"),h(t,"role","tablist"),h(t,"class","flex flex-row flex-nowrap space-x-0 justify-around px-4 py-2 text-sm font-medium text-center md:items-end md:space-x-6 md:px-8 md:py-6 "),h(e,"class","container shadow rounded-lg border border-solid border-gray-100 bg-primary mb-4 w-full md:mb-8 md:w-fit ")},m(o,i){M(o,e,i),k(e,t);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(t,null);a=!0},p(o,[i]){if(i&0){r=O(K);let c;for(c=0;c<r.length;c+=1){const u=J(o,r,c);n[c]?(n[c].p(u,i),p(n[c],1)):(n[c]=Q(u),n[c].c(),p(n[c],1),n[c].m(t,null))}for(B(),c=r.length;c<n.length;c+=1)s(c);N()}},i(o){if(!a){for(let i=0;i<r.length;i+=1)p(n[i]);a=!0}},o(o){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)v(n[i]);a=!1},d(o){o&&b(e),le(n,o)}}}class qe extends V{constructor(e){super(),H(this,e,null,Le,S,{})}}function De(l){let e,t,a,r,n,s,o,i,c,u,g,f;return a=new F({props:{icon:l[2],size:"2x",fw:!0,primaryColor:l[3]}}),{c(){e=_("div"),t=_("div"),T(a.$$.fragment),r=C(),n=_("div"),s=_("h3"),o=R(l[1]),i=C(),c=_("p"),u=R(l[4]),this.h()},l(d){e=$(d,"DIV",{class:!0});var m=x(e);t=$(m,"DIV",{});var w=x(t);L(a.$$.fragment,w),w.forEach(b),r=E(m),n=$(m,"DIV",{class:!0});var y=x(n);s=$(y,"H3",{class:!0});var I=x(s);o=A(I,l[1]),I.forEach(b),i=E(y),c=$(y,"P",{class:!0});var j=x(c);u=A(j,l[4]),j.forEach(b),y.forEach(b),m.forEach(b),this.h()},h(){h(s,"class","mb-2 text-sm font-bold text-text "),h(c,"class","text-sm text-text leading-7 "),h(n,"class","mt-1 "),h(e,"class",g="flex flex-row space-x-4 items-begin container shadow rounded-lg bg-opacity-50 p-4 mb-8 mr-2 w-full dark:bg-transparent dark:border dark:border-solid lg:w-72 "+l[0])},m(d,m){M(d,e,m),k(e,t),q(a,t,null),k(e,r),k(e,n),k(n,s),k(s,o),k(n,i),k(n,c),k(c,u),f=!0},p(d,[m]){const w={};m&4&&(w.icon=d[2]),m&8&&(w.primaryColor=d[3]),a.$set(w),(!f||m&2)&&G(o,d[1]),(!f||m&16)&&G(u,d[4]),(!f||m&1&&g!==(g="flex flex-row space-x-4 items-begin container shadow rounded-lg bg-opacity-50 p-4 mb-8 mr-2 w-full dark:bg-transparent dark:border dark:border-solid lg:w-72 "+d[0]))&&h(e,"class",g)},i(d){f||(p(a.$$.fragment,d),f=!0)},o(d){v(a.$$.fragment,d),f=!1},d(d){d&&b(e),D(a)}}}function Me(l,e,t){let{color:a}=e,{title:r}=e,{faIcon:n}=e,{faIconColor:s}=e,{text:o}=e;return l.$$set=i=>{"color"in i&&t(0,a=i.color),"title"in i&&t(1,r=i.title),"faIcon"in i&&t(2,n=i.faIcon),"faIconColor"in i&&t(3,s=i.faIconColor),"text"in i&&t(4,o=i.text)},[a,r,n,s,o]}class Se extends V{constructor(e){super(),H(this,e,Me,De,S,{color:0,title:1,faIcon:2,faIconColor:3,text:4})}}const X=[{color:"bg-sky-100",title:"Social Media Marketing",faIcon:ye,faIconColor:"dodgerblue",text:"Content creation and execution across TiktTok, Instagram, Facebook, Twitter, and LinkedIn"},{color:"bg-cyan-100",title:"Campaign Strategy",faIcon:pe,faIconColor:"skyblue",text:"Create omni-channel marketing strategy to drive action and increase ROI"},{color:"bg-indigo-100",title:"Community Management",faIcon:xe,faIconColor:"darkblue",text:"Own communication across all platforms to increase awareness and engagement"},{color:"bg-teal-100",title:"Event Planning",faIcon:_e,faIconColor:"turquoise",text:"Organize and execute experiential marketing events to meet your target market where they are"}];function Z(l,e,t){const a=l.slice();return a[0]=e[t],a}function ee(l){let e,t;return e=new Se({props:{title:l[0].title,color:l[0].color,faIcon:l[0].faIcon,faIconColor:l[0].faIconColor,text:l[0].text}}),{c(){T(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,r){q(e,a,r),t=!0},p:ne,i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function Ve(l){let e,t,a=O(X),r=[];for(let s=0;s<a.length;s+=1)r[s]=ee(Z(l,a,s));const n=s=>v(r[s],1,1,()=>{r[s]=null});return{c(){e=_("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var o=x(e);for(let i=0;i<r.length;i+=1)r[i].l(o);o.forEach(b),this.h()},h(){h(e,"class","flex flex-row flex-wrap justify-around ")},m(s,o){M(s,e,o);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);t=!0},p(s,[o]){if(o&0){a=O(X);let i;for(i=0;i<a.length;i+=1){const c=Z(s,a,i);r[i]?(r[i].p(c,o),p(r[i],1)):(r[i]=ee(c),r[i].c(),p(r[i],1),r[i].m(e,null))}for(B(),i=a.length;i<r.length;i+=1)n(i);N()}},i(s){if(!t){for(let o=0;o<a.length;o+=1)p(r[o]);t=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)v(r[o]);t=!1},d(s){s&&b(e),le(r,s)}}}class He extends V{constructor(e){super(),H(this,e,null,Ve,S,{})}}function Pe(l){let e,t,a,r,n;const s=l[1].default,o=se(s,l,l[0],null);return{c(){e=_("div"),t=_("h1"),o&&o.c(),a=C(),r=_("hr"),this.h()},l(i){e=$(i,"DIV",{class:!0});var c=x(e);t=$(c,"H1",{class:!0});var u=x(t);o&&o.l(u),u.forEach(b),a=E(c),r=$(c,"HR",{class:!0}),c.forEach(b),this.h()},h(){h(t,"class","text-4xl text-text font-bold font-serif whitespace-nowrap "),h(r,"class","bg-gradient-to-r from-teal-500 to-indigo-500 h-1 w-64 mx-0 my-auto md:ml-6 "),h(e,"class","flex flex-col content-center items-center space-y-2 mb-8 mx-auto w-fit md:flex-row md:space-y-0 md:mx-0 ")},m(i,c){M(i,e,c),k(e,t),o&&o.m(t,null),k(e,a),k(e,r),n=!0},p(i,[c]){o&&o.p&&(!n||c&1)&&ce(o,s,i,i[0],n?de(s,i[0],c,null):fe(i[0]),null)},i(i){n||(p(o,i),n=!0)},o(i){v(o,i),n=!1},d(i){i&&b(e),o&&o.d(i)}}}function je(l,e,t){let{$$slots:a={},$$scope:r}=e;return l.$$set=n=>{"$$scope"in n&&t(0,r=n.$$scope)},[r,a]}class W extends V{constructor(e){super(),H(this,e,je,Pe,S,{})}}function Re(l){let e;return{c(){e=R("About Me")},l(t){e=A(t,"About Me")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function Ae(l){let e,t,a,r,n='<p class="mb-2 ">I am a results-driven marketing professional with specialization in social media and digital marketing. I am passionate about leveraging my skills in marketing and communication to drive growth and create impactful campaigns. With a drive for excellence and a keen eye for innovation, I thrive in fast-pace environments that encourage creativity.</p>',s,o,i="What I do!",c,u,g;return t=new W({props:{$$slots:{default:[Re]},$$scope:{ctx:l}}}),u=new He({}),{c(){e=_("div"),T(t.$$.fragment),a=C(),r=_("div"),r.innerHTML=n,s=C(),o=_("h2"),o.textContent=i,c=C(),T(u.$$.fragment),this.h()},l(f){e=$(f,"DIV",{id:!0});var d=x(e);L(t.$$.fragment,d),a=E(d),r=$(d,"DIV",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-epksy8"&&(r.innerHTML=n),s=E(d),o=$(d,"H2",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-1mq0v1e"&&(o.textContent=i),c=E(d),L(u.$$.fragment,d),d.forEach(b),this.h()},h(){h(r,"class","mb-8 text-secondaryText "),h(o,"class","mb-4 text-3xl text-text font-bold font-serif "),h(e,"id","about-section")},m(f,d){M(f,e,d),q(t,e,null),k(e,a),k(e,r),k(e,s),k(e,o),k(e,c),q(u,e,null),g=!0},p(f,[d]){const m={};d&1&&(m.$$scope={dirty:d,ctx:f}),t.$set(m)},i(f){g||(p(t.$$.fragment,f),p(u.$$.fragment,f),g=!0)},o(f){v(t.$$.fragment,f),v(u.$$.fragment,f),g=!1},d(f){f&&b(e),D(t),D(u)}}}class Be extends V{constructor(e){super(),H(this,e,null,Ae,S,{})}}function Ne(l){let e;return{c(){e=R("Portfolio")},l(t){e=A(t,"Portfolio")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function ze(l){let e,t,a,r,n='<p class="mb-2 ">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>',s;return t=new W({props:{$$slots:{default:[Ne]},$$scope:{ctx:l}}}),{c(){e=_("div"),T(t.$$.fragment),a=C(),r=_("div"),r.innerHTML=n,this.h()},l(o){e=$(o,"DIV",{id:!0});var i=x(e);L(t.$$.fragment,i),a=E(i),r=$(i,"DIV",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-8a9qb0"&&(r.innerHTML=n),i.forEach(b),this.h()},h(){h(r,"class","mb-8 text-secondaryText "),h(e,"id","portfolio-section")},m(o,i){M(o,e,i),q(t,e,null),k(e,a),k(e,r),s=!0},p(o,[i]){const c={};i&1&&(c.$$scope={dirty:i,ctx:o}),t.$set(c)},i(o){s||(p(t.$$.fragment,o),s=!0)},o(o){v(t.$$.fragment,o),s=!1},d(o){o&&b(e),D(t)}}}class Oe extends V{constructor(e){super(),H(this,e,null,ze,S,{})}}function Ue(l){let e;return{c(){e=R("Resume")},l(t){e=A(t,"Resume")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function We(l){let e,t,a,r,n,s,o,i,c="Download Resume",u,g,f,d;return t=new W({props:{$$slots:{default:[Ue]},$$scope:{ctx:l}}}),s=new F({props:{icon:Ie}}),{c(){e=_("div"),T(t.$$.fragment),a=C(),r=_("div"),n=_("a"),T(s.$$.fragment),o=C(),i=_("p"),i.textContent=c,u=C(),g=_("img"),this.h()},l(m){e=$(m,"DIV",{id:!0});var w=x(e);L(t.$$.fragment,w),a=E(w),r=$(w,"DIV",{class:!0});var y=x(r);n=$(y,"A",{href:!0,download:!0,class:!0});var I=x(n);L(s.$$.fragment,I),o=E(I),i=$(I,"P",{"data-svelte-h":!0}),z(i)!=="svelte-17mc6fr"&&(i.textContent=c),I.forEach(b),y.forEach(b),u=E(w),g=$(w,"IMG",{src:!0,alt:!0}),w.forEach(b),this.h()},h(){h(n,"href",Y+"/resume.pdf"),h(n,"download","Mallory_Ellis_Resume.pdf"),h(n,"class","flex flex-row justify-center items-center space-x-2 rounded-full bg-gradient-to-l from-teal-500 to-indigo-500 w-fit px-6 py-4 text-white "),h(r,"class","flex flex-row flex-nowrap justify-center mb-8 text-secondaryText "),me(g.src,f=Y+"/resume.png")||h(g,"src",f),h(g,"alt","Mallory Ellis Resume"),h(e,"id","resume-section")},m(m,w){M(m,e,w),q(t,e,null),k(e,a),k(e,r),k(r,n),q(s,n,null),k(n,o),k(n,i),k(e,u),k(e,g),d=!0},p(m,[w]){const y={};w&1&&(y.$$scope={dirty:w,ctx:m}),t.$set(y)},i(m){d||(p(t.$$.fragment,m),p(s.$$.fragment,m),d=!0)},o(m){v(t.$$.fragment,m),v(s.$$.fragment,m),d=!1},d(m){m&&b(e),D(t),D(s)}}}class Fe extends V{constructor(e){super(),H(this,e,null,We,S,{})}}function Ge(l){let e;return{c(){e=R("Partnerships")},l(t){e=A(t,"Partnerships")},m(t,a){M(t,e,a)},d(t){t&&b(e)}}}function Ye(l){let e,t,a,r,n='<p class="mb-2 ">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>',s,o,i='<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mallory_rosey" data-unique-id="mallory_rosey" data-embed-type="creator" style="max-width: 780px; min-width: 288px;"><section><a target="_blank" href="https://www.tiktok.com/@mallory_rosey?refer=creator_embed">@mallory_rosey</a></section></blockquote> <script async="" src="https://www.tiktok.com/embed.js"><\/script> <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mallory_rosey/video/7090740489032305963" data-video-id="7090740489032305963" style="max-width: 605px;min-width: 325px;"><section><a target="_blank" title="@mallory_rosey" href="https://www.tiktok.com/@mallory_rosey?refer=embed">@mallory_rosey</a> SO YUMMY! <a title="springroll" target="_blank" href="https://www.tiktok.com/tag/springroll?refer=embed">#springroll</a> <a title="madisonwi" target="_blank" href="https://www.tiktok.com/tag/madisonwi?refer=embed">#madisonwi</a> <a title="uwmadison" target="_blank" href="https://www.tiktok.com/tag/uwmadison?refer=embed">#uwmadison</a> <a title="smoothie" target="_blank" href="https://www.tiktok.com/tag/smoothie?refer=embed">#smoothie</a> <a title="foodtruck" target="_blank" href="https://www.tiktok.com/tag/foodtruck?refer=embed">#foodtruck</a> <a title="wisconsin" target="_blank" href="https://www.tiktok.com/tag/wisconsin?refer=embed">#wisconsin</a> <a title="wisconsinfoodie" target="_blank" href="https://www.tiktok.com/tag/wisconsinfoodie?refer=embed">#wisconsinfoodie</a> <a title="foodie" target="_blank" href="https://www.tiktok.com/tag/foodie?refer=embed">#foodie</a> <a title="wisconsinfoodies" target="_blank" href="https://www.tiktok.com/tag/wisconsinfoodies?refer=embed">#wisconsinfoodies</a> <a title="totinos425" target="_blank" href="https://www.tiktok.com/tag/totinos425?refer=embed">#Totinos425</a> <a title="onlyinmycalvins" target="_blank" href="https://www.tiktok.com/tag/onlyinmycalvins?refer=embed">#onlyinmycalvins</a> <a title="pringlescanhands" target="_blank" href="https://www.tiktok.com/tag/pringlescanhands?refer=embed">#PringlesCanHands</a> <a title="healthyliving" target="_blank" href="https://www.tiktok.com/tag/healthyliving?refer=embed">#healthyliving</a> <a title="healthyeating" target="_blank" href="https://www.tiktok.com/tag/healthyeating?refer=embed">#healthyeating</a> <a target="_blank" title="♬ Campus - Vampire Weekend" href="https://www.tiktok.com/music/Campus-6901092050247469829?refer=embed">♬ Campus - Vampire Weekend</a></section></blockquote> <script async="" src="https://www.tiktok.com/embed.js"><\/script> <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mallory_rosey/video/7095910588328480043" data-video-id="7095910588328480043" style="max-width: 605px;min-width: 325px;"><section><a target="_blank" title="@mallory_rosey" href="https://www.tiktok.com/@mallory_rosey?refer=embed">@mallory_rosey</a> We love <a title="eatinglocal" target="_blank" href="https://www.tiktok.com/tag/eatinglocal?refer=embed">#eatinglocal</a> 💓 this is Parthenon Gyros in Madison, WI, right on State Street <a title="madisonwi" target="_blank" href="https://www.tiktok.com/tag/madisonwi?refer=embed">#madisonwi</a> <a title="madison" target="_blank" href="https://www.tiktok.com/tag/madison?refer=embed">#madison</a> <a title="wisconsin" target="_blank" href="https://www.tiktok.com/tag/wisconsin?refer=embed">#wisconsin</a> <a title="wisconsinfoodie" target="_blank" href="https://www.tiktok.com/tag/wisconsinfoodie?refer=embed">#wisconsinfoodie</a> <a title="wisconsinfoodies" target="_blank" href="https://www.tiktok.com/tag/wisconsinfoodies?refer=embed">#wisconsinfoodies</a> <a title="foodie" target="_blank" href="https://www.tiktok.com/tag/foodie?refer=embed">#foodie</a> <a title="gyro" target="_blank" href="https://www.tiktok.com/tag/gyro?refer=embed">#gyro</a> <a title="gyros" target="_blank" href="https://www.tiktok.com/tag/gyros?refer=embed">#gyros</a> <a title="greek" target="_blank" href="https://www.tiktok.com/tag/greek?refer=embed">#greek</a> <a title="greekfood" target="_blank" href="https://www.tiktok.com/tag/greekfood?refer=embed">#greekfood</a> <a title="healthyfood" target="_blank" href="https://www.tiktok.com/tag/healthyfood?refer=embed">#healthyfood</a> <a title="fordforthebuilders" target="_blank" href="https://www.tiktok.com/tag/fordforthebuilders?refer=embed">#FORDfortheBuilders</a> <a title="foodies" target="_blank" href="https://www.tiktok.com/tag/foodies?refer=embed">#foodies</a> <a title="healthyeating" target="_blank" href="https://www.tiktok.com/tag/healthyeating?refer=embed">#healthyeating</a> @parthenongyros <a target="_blank" title="♬ original sound - ansley" href="https://www.tiktok.com/music/original-sound-7036953803337452334?refer=embed">♬ original sound - ansley</a></section></blockquote> <script async="" src="https://www.tiktok.com/embed.js"><\/script> <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mallory_rosey/video/7117462639344717098" data-video-id="7117462639344717098" style="max-width: 605px;min-width: 325px;"><section><a target="_blank" title="@mallory_rosey" href="https://www.tiktok.com/@mallory_rosey?refer=embed">@mallory_rosey</a> Beat Kitchen in Chicago, IL 📍 <a title="riverwalk" target="_blank" href="https://www.tiktok.com/tag/riverwalk?refer=embed">#riverwalk</a> <a title="riverwalkchicago" target="_blank" href="https://www.tiktok.com/tag/riverwalkchicago?refer=embed">#riverwalkchicago</a> <a title="chicago" target="_blank" href="https://www.tiktok.com/tag/chicago?refer=embed">#chicago</a> <a title="chicagoillinois" target="_blank" href="https://www.tiktok.com/tag/chicagoillinois?refer=embed">#chicagoillinois</a> <a title="happyhour" target="_blank" href="https://www.tiktok.com/tag/happyhour?refer=embed">#happyhour</a> <a title="chicagofood" target="_blank" href="https://www.tiktok.com/tag/chicagofood?refer=embed">#chicagofood</a> <a title="chicagofoodie" target="_blank" href="https://www.tiktok.com/tag/chicagofoodie?refer=embed">#chicagofoodie</a> <a title="chicagofoodies" target="_blank" href="https://www.tiktok.com/tag/chicagofoodies?refer=embed">#chicagofoodies</a> <a title="chicagofoodguide" target="_blank" href="https://www.tiktok.com/tag/chicagofoodguide?refer=embed">#chicagofoodguide</a> <a target="_blank" title="♬ original sound - Ian Asher" href="https://www.tiktok.com/music/original-sound-7052810772242205486?refer=embed">♬ original sound - Ian Asher</a></section></blockquote> <script async="" src="https://www.tiktok.com/embed.js"><\/script> <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mallory_rosey/video/7232088577172180266" data-video-id="7232088577172180266" style="max-width: 605px;min-width: 325px;"><section><a target="_blank" title="@mallory_rosey" href="https://www.tiktok.com/@mallory_rosey?refer=embed">@mallory_rosey</a> Lazy Sunday mornings 💕 <a title="chicago" target="_blank" href="https://www.tiktok.com/tag/chicago?refer=embed">#chicago</a> <a title="downtownchicago" target="_blank" href="https://www.tiktok.com/tag/downtownchicago?refer=embed">#downtownchicago</a> <a title="midwestfoodie" target="_blank" href="https://www.tiktok.com/tag/midwestfoodie?refer=embed">#midwestfoodie</a> <a title="chicagofoodie" target="_blank" href="https://www.tiktok.com/tag/chicagofoodie?refer=embed">#chicagofoodie</a> <a title="sunday" target="_blank" href="https://www.tiktok.com/tag/sunday?refer=embed">#sunday</a> <a title="sundayfunday" target="_blank" href="https://www.tiktok.com/tag/sundayfunday?refer=embed">#sundayfunday</a> <a target="_blank" title="♬ Never Let You Go (2006 Remaster) - Third Eye Blind" href="https://www.tiktok.com/music/Never-Let-You-Go-2006-Remaster-6705070492522383361?refer=embed">♬ Never Let You Go (2006 Remaster) - Third Eye Blind</a></section></blockquote> <script async="" src="https://www.tiktok.com/embed.js"><\/script>',c;return t=new W({props:{$$slots:{default:[Ge]},$$scope:{ctx:l}}}),{c(){e=_("div"),T(t.$$.fragment),a=C(),r=_("div"),r.innerHTML=n,s=C(),o=_("div"),o.innerHTML=i,this.h()},l(u){e=$(u,"DIV",{id:!0});var g=x(e);L(t.$$.fragment,g),a=E(g),r=$(g,"DIV",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-8a9qb0"&&(r.innerHTML=n),s=E(g),o=$(g,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),z(o)!=="svelte-da338c"&&(o.innerHTML=i),g.forEach(b),this.h()},h(){h(r,"class","mb-8 text-secondaryText "),h(o,"id","embeds"),h(o,"class","text-text"),h(e,"id","social-section")},m(u,g){M(u,e,g),q(t,e,null),k(e,a),k(e,r),k(e,s),k(e,o),c=!0},p(u,[g]){const f={};g&1&&(f.$$scope={dirty:g,ctx:u}),t.$set(f)},i(u){c||(p(t.$$.fragment,u),c=!0)},o(u){v(t.$$.fragment,u),c=!1},d(u){u&&b(e),D(t)}}}class Ke extends V{constructor(e){super(),H(this,e,null,Ye,S,{})}}function te(l){let e,t;return e=new Be({}),{c(){T(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,r){q(e,a,r),t=!0},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function ae(l){let e,t;return e=new Fe({}),{c(){T(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,r){q(e,a,r),t=!0},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function oe(l){let e,t;return e=new Oe({}),{c(){T(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,r){q(e,a,r),t=!0},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function re(l){let e,t;return e=new Ke({}),{c(){T(e.$$.fragment)},l(a){L(e.$$.fragment,a)},m(a,r){q(e,a,r),t=!0},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function Je(l){let e,t,a,r,n,s,o,i,c,u,g;t=new $e({}),n=new qe({});let f=l[0]=="about"&&te(),d=l[0]=="resume"&&ae(),m=l[0]=="portfolio"&&oe(),w=l[0]=="socials"&&re();return{c(){e=_("div"),T(t.$$.fragment),a=C(),r=_("div"),T(n.$$.fragment),s=C(),o=_("div"),f&&f.c(),i=C(),d&&d.c(),c=C(),m&&m.c(),u=C(),w&&w.c(),this.h()},l(y){e=$(y,"DIV",{class:!0});var I=x(e);L(t.$$.fragment,I),a=E(I),r=$(I,"DIV",{class:!0});var j=x(r);L(n.$$.fragment,j),s=E(j),o=$(j,"DIV",{class:!0});var P=x(o);f&&f.l(P),i=E(P),d&&d.l(P),c=E(P),m&&m.l(P),u=E(P),w&&w.l(P),P.forEach(b),j.forEach(b),I.forEach(b),this.h()},h(){h(o,"class","container shadow border rounded-xl bg-primary mx-auto p-8 md:p-12 "),h(r,"class","flex flex-col flex-nowrap items-end space-x-2 "),h(e,"class","flex flex-col items-center space-y-8 relative md:flex-row md:items-start md:space-x-8 md:space-y-0 ")},m(y,I){M(y,e,I),q(t,e,null),k(e,a),k(e,r),q(n,r,null),k(r,s),k(r,o),f&&f.m(o,null),k(o,i),d&&d.m(o,null),k(o,c),m&&m.m(o,null),k(o,u),w&&w.m(o,null),g=!0},p(y,[I]){y[0]=="about"?f?I&1&&p(f,1):(f=te(),f.c(),p(f,1),f.m(o,i)):f&&(B(),v(f,1,1,()=>{f=null}),N()),y[0]=="resume"?d?I&1&&p(d,1):(d=ae(),d.c(),p(d,1),d.m(o,c)):d&&(B(),v(d,1,1,()=>{d=null}),N()),y[0]=="portfolio"?m?I&1&&p(m,1):(m=oe(),m.c(),p(m,1),m.m(o,u)):m&&(B(),v(m,1,1,()=>{m=null}),N()),y[0]=="socials"?w?I&1&&p(w,1):(w=re(),w.c(),p(w,1),w.m(o,null)):w&&(B(),v(w,1,1,()=>{w=null}),N())},i(y){g||(p(t.$$.fragment,y),p(n.$$.fragment,y),p(f),p(d),p(m),p(w),g=!0)},o(y){v(t.$$.fragment,y),v(n.$$.fragment,y),v(f),v(d),v(m),v(w),g=!1},d(y){y&&b(e),D(t),D(n),f&&f.d(),d&&d.d(),m&&m.d(),w&&w.d()}}}function Qe(l,e,t){let a;return ie(l,U,r=>t(0,a=r)),ue(()=>{U.update(r=>"about")}),[a]}class rt extends V{constructor(e){super(),H(this,e,Qe,Je,S,{})}}export{rt as component};
