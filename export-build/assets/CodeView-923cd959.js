import{u as j,r as F,c as S,a as D,b as s,o as a,d as o,e as t,n as v,w as x,f as b,v as y,t as r,g as l,h as p,i as h,F as g,j as d,k as $,l as A,m as w,p as B,q as k}from"./index-4fa42d72.js";import{_ as P,a as z,b as C,c as E,d as M,e as V,f as L,g as R,h as N,i as q,j as T,k as U}from"./node-platine-69c67adb.js";const I="/assets/brain-e7356ff8.svg",K="/assets/devclicker-text-black-57ee3ae0.svg",O="/assets/google-fba501cd.svg",Q={key:0,class:"fixed inset-0 z-10 overflow-y-auto shadow-lg"},G={class:"flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"},H=t("div",{class:"fixed inset-0 transition-opacity","aria-hidden":"true"},[t("div",{class:"absolute inset-0 bg-dark_grey"})],-1),J=t("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),W={class:"inline-block overflow-hidden align-bottom transition-all transform bg-white rounded-lg sm:my-2 sm:align-middle sm:w-full sm:max-w-md"},X={class:"p-6 bg-white"},Y=t("div",{class:"flex justify-center"},[t("img",{src:K,class:"mb-2"})],-1),Z={class:"flex justify-center gap-4 mb-6"},tt={class:"p-6 bg-white rounded-lg"},et=["onSubmit"],st={class:"space-y-4"},it=t("label",{class:"block mb-2 font-medium text-left text-gray-700"},"Email",-1),at=t("label",{class:"block mb-2 font-medium text-left text-gray-700"},"Mot de passe",-1),ot={class:"w-full px-4 py-2 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"},lt={class:"flex justify-center"},nt={class:"flex items-center justify-center w-full gap-2 px-4 py-2 border-2 rounded-lg bg-light_grey hover:border-primary"},rt=t("img",{src:O,class:"w-6"},null,-1),ct={class:"text-sm font-semibold"},dt=t("div",{class:"hidden pt-4 ml-5 align-bottom transition-all transform bg-white rounded-lg poverflow-hidden sm:inline-block sm:my-8 sm:align-middle sm:w-full sm:max-w-md"},[t("div",{style:{padding:"100% 0 0 0",position:"relative"}},[t("iframe",{src:"https://player.vimeo.com/video/968146256?badge=0&autopause=0&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; encrypted-media",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},title:"Devclicker"})]),t("p",{class:"italic"},[p(" (Merci beaucoup "),t("a",{class:"font-bold text-primary hover:text-dark_primary",href:"https://www.instagram.com/bleuu.fleur/",target:"_blank"},"@bleuu.fleur"),p(") ")])],-1),pt={__name:"Auth-Popup",setup(u){const e=j(),n=F(!0),c=S(()=>n.value?"S'inscrire":"Se connecter"),i=D({email:"",password:""}),f=()=>{!i.email||!i.password?alert("Rentrez un email et un mot de passe"):n.value?(e.registerUser(i),e.init()):e.loginUser(i)};return(qe,m)=>s(e).auth?l("",!0):(a(),o("div",Q,[t("div",G,[H,J,t("div",W,[t("div",X,[Y,t("div",Z,[t("button",{class:v(["px-4 py-2 font-bold rounded-md text-primary",{"bg-primary":n.value,"hover:bg-dark_primary":n.value,"bg-light_grey":!n.value,"text-white":n.value}]),onClick:m[0]||(m[0]=x(_=>n.value=!0,["prevent"]))}," Inscription ",2),t("button",{class:v(["px-4 py-2 font-bold rounded-md text-primary",{"bg-primary":!n.value,"hover:bg-dark_primary":!n.value,"bg-light_grey":n.value,"text-white":!n.value}]),onClick:m[1]||(m[1]=x(_=>n.value=!1,["prevent"]))}," Connexion ",2)]),t("div",tt,[t("form",{onSubmit:x(f,["prevent"])},[t("div",st,[t("div",null,[it,b(t("input",{"onUpdate:modelValue":m[2]||(m[2]=_=>i.email=_),class:"w-full px-4 py-2 border-gray-300 rounded-md bg-light_grey",placeholder:"monmail@mail.com",type:"email"},null,512),[[y,i.email]])]),t("div",null,[at,b(t("input",{"onUpdate:modelValue":m[3]||(m[3]=_=>i.password=_),class:"w-full px-4 py-2 border-gray-300 rounded-md bg-light_grey",placeholder:"ton mot de passe",type:"password"},null,512),[[y,i.password]])]),t("div",null,[t("button",ot,r(s(c)),1)]),t("div",lt,[t("button",nt,[rt,t("p",ct,r(s(c))+" avec Google (ne marche pas) ",1)])])])],40,et)])])]),dt])]))}},mt={key:0,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},_t=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center d w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+P+'"></div><p class="text-gray-800"><span class="font-bold text-white">On commence !</span><br><span class="text-sm text-white">5 HTML</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +10<br>au clics </p></div>',1),ut=[_t],xt={key:1,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},ht=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+z+'"></div><p class="text-gray-800"><span class="font-bold text-white">Un peu de style</span><br><span class="text-sm text-white">10 CSS</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +15<br>par secondes </p></div>',1),ft=[ht],gt={key:2,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},vt=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+C+'"></div><p class="text-gray-800"><span class="font-bold text-white">C&#39;est du sérieux</span><br><span class="text-sm text-white">10 Javascript</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +20<br>au clics </p></div>',1),bt=[vt],yt={key:3,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},wt=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+E+'"></div><p class="text-gray-800"><span class="font-bold text-white">SPLENDIDE !</span><br><span class="text-sm text-white">5 Tailwind</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +500<br>par seconde </p></div>',1),kt=[wt],$t={key:4,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},jt=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+M+'"></div><p class="text-gray-800"><span class="font-bold text-white">React ? Mouais</span><br><span class="text-sm text-white">10 Vue.js</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +3 k<br>au clics </p></div>',1),Ft=[jt],St={key:5,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},Dt=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+V+'"></div><p class="text-gray-800"><span class="font-bold text-white">Boss du Front</span><br><span class="text-sm text-white">10 Vite.js</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +10 k<br>au clics </p></div>',1),At=[Dt],Bt={key:6,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},Pt=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+L+'"></div><p class="text-gray-800"><span class="font-bold text-white">ComeBACK</span><br><span class="text-sm text-white">5 Node.js</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +20 k<br>au clics </p></div>',1),zt=[Pt],Ct={key:7,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},Et=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+R+'"></div><p class="text-gray-800"><span class="font-bold text-white">En route !</span><br><span class="text-sm text-white">10 Express.js</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +100 k<br>par secondes </p></div>',1),Mt=[Et],Vt={key:8,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},Lt=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+N+'"></div><p class="text-gray-800"><span class="font-bold text-white">Un vrai Model</span><br><span class="text-sm text-white">10 Prisma</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +1 M<br>au clics </p></div>',1),Rt=[Lt],Nt={key:9,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},qt=d('<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"><div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+q+'"></div><p class="text-gray-800"><span class="font-bold text-white">Stocké direct</span><br><span class="text-sm text-white">5 MongoDB</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +5 M<br>par seconde </p></div>',1),Tt=[qt],Ut={key:10,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},It={key:0,class:"inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"},Kt=d('<div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+T+'"></div><p class="text-gray-800"><span class="font-bold text-white">CONTENERISE</span><br><span class="text-sm text-white">Acquiert 10 Docker</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +20 M<br>au clics </p>',2),Ot=[Kt],Qt={key:11,class:"fixed z-20 bottom-4 right-4 animate__animated animate__tada"},Gt={key:0,class:"inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"},Ht=d('<div class="flex space-x-2 items-center w-44 h-full"><div class="w-12 h-full"><img class="flex-1 h-full rounded-lg" src="'+U+'"></div><p class="text-gray-800"><span class="font-bold text-white">Boss du Back</span><br><span class="text-sm text-white">Acquiert 10 Vercel</span></p></div><p class="flex-1 text-xs font-medium text-white"> Ajoute +100 M<br>au clics </p>',2),Jt=[Ht],Wt={__name:"Trophies",setup(u){const e=h();return(n,c)=>(a(),o(g,null,[s(e).trophiesPopFront1?(a(),o("div",mt,ut)):l("",!0),s(e).trophiesPopFront2?(a(),o("div",xt,ft)):l("",!0),s(e).trophiesPopFront3?(a(),o("div",gt,bt)):l("",!0),s(e).trophiesPopFront4?(a(),o("div",yt,kt)):l("",!0),s(e).trophiesPopFront5?(a(),o("div",$t,Ft)):l("",!0),s(e).trophiesPopFront6?(a(),o("div",St,At)):l("",!0),s(e).trophiesPopBack1?(a(),o("div",Bt,zt)):l("",!0),s(e).trophiesPopBack2?(a(),o("div",Ct,Mt)):l("",!0),s(e).trophiesPopBack3?(a(),o("div",Vt,Rt)):l("",!0),s(e).trophiesPopBack4?(a(),o("div",Nt,Tt)):l("",!0),s(e).trophiesPopBack5?(a(),o("div",Ut,[s(e).trophiesBack5?(a(),o("div",It,Ot)):l("",!0)])):l("",!0),s(e).trophiesPopBack6?(a(),o("div",Qt,[s(e).trophiesBack6?(a(),o("div",Gt,Jt)):l("",!0)])):l("",!0)],64))}},Xt={class:"flex gap-4 justify-center sm:justify-start flex-wrap"},Yt={class:"bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"},Zt={class:"flex items-center gap-2"},te=["src"],ee={class:"font-bold text-xl"},se={class:"text-sm"},ie={class:"text-sm"},ae={class:"flex justify-between"},oe={class:"text-sm"},le={class:"font-bold"},ne={class:"text-sm"},re={class:"font-bold"},ce=["onClick"],de={__name:"Code-card-front",setup(u){const e=h();return(n,c)=>(a(),o("div",Xt,[(a(!0),o(g,null,$(s(e).contentCardsFront,i=>(a(),o("div",{key:s(e).contentCardsFront.id},[t("div",Yt,[t("div",Zt,[t("img",{src:i.image,class:"w-12"},null,8,te),t("div",null,[t("p",ee,r(i.name),1),t("p",se,r(i.effect),1)])]),t("p",ie,r(i.description),1),t("div",ae,[t("p",oe,[p(" Prix : "),t("span",le,r(i.price.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1)]),t("p",ne,[p(" Quantité : "),t("span",re,r(i.quantity.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1)])]),t("button",{onClick:f=>s(e).buyCodeFront(i.id),class:"bg-primary text-white font-bold p-2 rounded-lg hover:bg-dark_primary"}," Aquérir ",8,ce)])]))),128))]))}},pe={class:"flex gap-4 justify-center sm:justify-start flex-wrap"},me={class:"bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"},_e={class:"flex items-center gap-2"},ue=["src"],xe={class:"font-bold text-xl"},he={class:"text-sm"},fe={class:"text-sm"},ge={class:"flex justify-between"},ve={class:"text-sm"},be={class:"font-bold"},ye={class:"text-sm"},we={class:"font-bold"},ke=["onClick"],$e={__name:"Code-card-back",setup(u){const e=h();return(n,c)=>(a(),o("div",pe,[(a(!0),o(g,null,$(s(e).contentCardsBack,i=>(a(),o("div",{key:s(e).contentCardsBack.id},[t("div",me,[t("div",_e,[t("img",{src:i.image,class:"w-12"},null,8,ue),t("div",null,[t("p",xe,r(i.name),1),t("p",he,r(i.effect),1)])]),t("p",fe,r(i.description),1),t("div",ge,[t("p",ve,[p(" Prix : "),t("span",be,r(i.price.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1)]),t("p",ye,[p(" Quantité : "),t("span",we,r(i.quantity.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1)])]),t("button",{onClick:f=>s(e).buyCodeBack(i.id),class:"bg-primary text-white font-bold p-2 rounded-lg hover:bg-dark_primary"}," Aquérir ",8,ke)])]))),128))]))}},je={class:"pt-8 pb-16"},Fe=t("div",{class:"flex items-center justify-center gap-4 mb-2 sm:justify-start"},[t("h1",{class:"text-3xl font-bold"},"Code"),t("p",null,"Développe tes compétences et accumule de l'expérience.")],-1),Se={class:"flex flex-wrap justify-center gap-4 mb-4 sm:justify-start"},De=t("p",{class:"text-3xl font-bold text-gray-800"},"Développe",-1),Ae=t("img",{class:"w-1/5 h-10 rounded-lg",src:I},null,-1),Be=[De,Ae],Pe={class:"flex flex-col justify-center px-3 text-center bg-white rounded-lg shadow-md w-80 h-28 py-9"},ze={class:"text-xl"},Ce={class:"text-sm"},Ee={class:"font-bold"},Me={class:"flex justify-center my-4 sm:justify-start"},Ve={class:"relative inline-flex items-center -z-1"},Le=t("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"},null,-1),Re={class:"ml-4 font-medium text-gray-900 text-md dark:text-dark_grey"},Ne={class:"flex flex-col gap-4"},Ie={__name:"CodeView",setup(u){const e=h();return A(()=>{e.increaseExpSec()}),(n,c)=>(a(),o("div",je,[w(pt),w(Wt),Fe,t("div",Se,[t("button",{onKeydown:c[0]||(c[0]=B(x(()=>{},["prevent"]),["enter"])),onClick:c[1]||(c[1]=(...i)=>s(e).increaseExp&&s(e).increaseExp(...i)),class:"inline-flex items-center justify-center px-12 space-x-3 bg-white border-4 rounded-lg shadow-md dev-button w-80 h-28 py-9 border-primary hover:border-dark_primary"},Be,32),t("div",Pe,[t("p",ze,[p(" Expérience : "),t("strong",null,r(s(e).exp.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1),p(" exp ")]),t("p",Ce,[t("strong",Ee,r(s(e).expAddSec.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1),p(" par seconde et "),t("strong",null,r(s(e).expAdd.toLocaleString("fr-FR",{minimumFractionDigits:0,maximumFractionDigits:4,notation:"compact"})),1),p(" par clic ")])])]),t("div",Me,[t("label",Ve,[t("input",{onClick:c[2]||(c[2]=i=>s(e).changeStack()),type:"checkbox",class:"sr-only peer"}),Le,t("span",Re,r(s(e).whatStack),1)])]),t("div",Ne,[s(e).ifFront?(a(),k(de,{key:0})):l("",!0),s(e).ifBack?(a(),k($e,{key:1})):l("",!0)])]))}};export{Ie as default};
