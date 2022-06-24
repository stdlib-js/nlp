// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uppercase@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-capitalized@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-uncapitalize@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-capitalize@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/string-ends-with@esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";var S={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},I={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},E=n.isPrimitive,C=o.isPrimitive,M=a,z=l,P={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},A=S,O=I,V=/^([,([{*<"“'`‘.])/gi,N=/([,.!?%*>:;"'”`)\]}])$/gi;function W(e,t){var i;for(i=0;i<t.length;i++)e.push(t[i]);return e}function Y(e){var t,i,s,n=[],o=[];do{A[e]||P[e]||O[e]?i=!0:(t=e.split(V)).length>1?(n.push(t[1]),e=t[2]):(t=e.split(N)).length>1?(e=t[0],o.push(t[1])):i=!0}while(!i);return(s=n).push(e),W(s,o),s}var $=function(e,t){var i,s,n,o,a,l;if(!C(e))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!E(t))throw new TypeError(z("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(s=t?e.split(/(\s+)/):e.split(/\s+/),a={},n=[],l=0;l<s.length;l++)o=s[l],M(a,o)?W(n,a[o]):(W(n,i=Y(o)),a[o]=i);return n},K={afaik:"as far as I know",afk:"away from keyboard",ama:"ask me anything",asap:"as soon as possible",b2b:"business to business",bbl:"be back later",bbs:"be back soon",bday:"birthday",brb:"be right back",btw:"by the way",cc:"carbon copy",cmon:"come on",cu:"see you",cya:"see you",cys:"check your settings",d2d:"direct to direct",dr:"doctor",e2e:"end to end",faq:"frequently asked question",fav:"favorite",favs:"favorites",ffs:"for f*ck's sake",foaf:"friend of a friend",ftw:"for the win",fyi:"for your information",g2g:"got to go",g2m:"got to meet you",gj:"good job",gm:"good morning",gmta:"great minds think alike",hth:"hope this helps",ianal:"I am not a lawyer",ianars:"I am not a rocket scientist",ic:"I see",icymi:"in case you missed it",idk:"i do not know",iirc:"if I recall correctly",ikr:"i know right",imho:"in my humble opinion",imnsho:"in my not so humble opinion",imo:"in my opinion",iow:"in other words",irl:"in real life",jj:"just joking",jk:"just kidding",jooc:"just out of curiosity",kk:"okay",l8:"late",l8r:"later",lmao:"laugh my a** off",lol:"laughing out loud",mfw:"my face when",myob:"mind your own business",nm:"never mind",noyb:"none of your business",np:"no problem",nvm:"never mind",oic:"oh, i see",omfg:"oh my f*cking god",omg:"oh my god",omw:"on my way",ooc:"out of character",oof:"out of focus",ot:"off topic",otoh:"on the other hand",p2p:"peer to peer",pfo:"please f*ck off",pita:"pain in the a**",plz:"please",pms:"personal messages",r8:"right",rofl:"rolling on the floor laughing",roflmao:"rolling on the floor laughing my a** off",rp:"reply",rps:"rock paper scissors",rpsls:"rock paper scissors lizard spock",rtfa:"read the f*cking article",rtfm:"read the f*cking manual",ru:"are you",s2s:"same to same",smh:"shake my head",tbh:"to be honest",thx:"thanks",tia:"thanks in advance",tldr:"too long did not read",ttyl:"talk to you later",wtf:"what the f*ck",wtg:"way to go",wtgp:"way to go pal",ymmv:"your mileage may vary"},_=t,L=i,J=s,R=$,B=o.isPrimitive,F=l,G=K,H=_(G);var q=function(e){var t,i,s,n,o,a;if(!B(e))throw new TypeError(F("invalid argument. Must provide a string. Value: `%s`.",e));for(s="",t=R(e,!0),o=0;o<t.length;o++){if(i=t[o],L(i)){for(a=0;a<H.length;a++)if(n=H[a],J(i)===n){i=G[n];break}}else for(a=0;a<H.length;a++)if(i===(n=H[a])){i=G[n];break}s+=i}return s},U={"'s":"is","'S":"Is","aren't":"are not",arent:"are not","can't":"can not",cant:"can not","can't've":"can not have","'cause":"because",cannot:"can not","could've":"could have",couldve:"could have","couldn't":"could not",couldnt:"could not","couldn't've":"could not have",couldntve:"could not have","didn't":"did not",didnt:"did not","doesn't":"does not",doesnt:"does not","don't":"do not",dont:"do not","hadn't":"had not",hadnt:"had not","hadn't've":"had not have","hasn't":"has not",hasnt:"has not","haven't":"have not",havent:"have not","he'd":"he would",hed:"he would","he'd've":"he would have",hedve:"he would have","he'll":"he will","he'll've":"he will have","he's":"he is",hes:"he is","how'd":"how did",howd:"how did","how'd'y":"how did you","how'll":"how will",howll:"how will","how's":"how is",hows:"how is","i'd":"i would","i'd've":"i would have","i'll":"i will","i'll've":"i will have","i'm":"i am",im:"i am","i'ma":"i am going to","i've":"i have","isn't":"is not",isnt:"is not","it'd":"it would","it'd've":"it would have","it'll've":"it will have","it'll":"it will",itll:"it will","it's":"it is","let's":"let us",lets:"let us","ma'am":"madam","mayn't":"may not","mightn't":"it might not","mightn't've":"might not have","might've":"might have","mustn't":"must not","mustn't've":"must not have","must've":"must have","needn't":"need not","needn't've":"need not have","not've":"not have","oughtn't":"ought not","oughtn't've":"ought not to have","so've":"so have","so's":"so is","shan't":"shall not","sha'n't":"shall not","shan't've":"shall not have","she'd":"she would","she'd've":"she would have","she'll":"she will","she'll've":"she will have","she's":"she is","should've":"should have","shouldn't":"should not","shouldn't've":"should not have","that'd":"that would","that'd've":"that would have","that's":"that is",thats:"that is","there'd":"there would","there'd've":"there would have","there's":"there is","they'd":"they would","they'd've":"they would have","they'll":"they will","they'll've":"they will have","they're":"they are","they've":"they have","to've":"to have","wasn't":"was not","we'd":"we would","we'd've":"we would have","we'll":"we will","we'll've":"we will have","we're":"we are","we've":"we have","weren't":"were not","what'll":"what will","what'll've":"what will have","what're":"what are","what's":"what has/is","what've":"what have","when's":"when is","when've":"when have","where'd":"where would","where's":"where is","where've":"where have","who'd":"who would","who'll":"who will","who'll've":"who will have","who're":"who are","who's":"who is","who've":"who have","why've":"why have","why'll":"why will","why're":"why are","why's":"why is","will've":"will have","won't":"will not",wont:"will not","won't've":"will not have","would've":"would have","wouldn't":"would not","wouldn't've":"would not have","y'all":"you all","y'all'd":"you all would","y'all'd've":"you all would have","y'all're":"you all are","y'all've":"you all have","you'd":"you would","you'd've":"you would have","you'll":"you will","you'll've":"you will have","you're":"you are","you've":"you have"},Q=t,X=h,Z=r,ee=d,te=$,ie=o.isPrimitive,se=l,ne=U,oe=Q(ne);var ae=function(e){var t,i,s,n,o,a;if(!ie(e))throw new TypeError(se("invalid argument. Must provide a string. Value: `%s`.",e));for(s="",t=te(e,!0),o=0;o<t.length;o++){if(i=t[o],X(i)){for(a=0;a<oe.length;a++)if(n=oe[a],Z(i)===n){i=ee(ne[n]);break}}else for(a=0;a<oe.length;a++)if(i===(n=oe[a])){i=ne[n];break}s+=i}return s},le=g,he=p,re=y;var de=function(){var e,t,i,s,n,o,a;for(1===arguments.length?i=arguments[0]:2===arguments.length&&(i=arguments[0],e=arguments[1]),t=i.length,n=1,a=0;a<t;a++)n*=i[a];return s="int32"===e?new le(n):new he(n),(o={}).dtype=e,o.shape=i,o.strides=[i[1],1],o.offset=0,o.ndims=i.length,o.length=s.length,o.nbytes=s.byteLength,o.data=s,re(o,"get",l),re(o,"set",h),o;function l(e,t){var i=this.offset+e*this.strides[0]+t*this.strides[1];return this.data[i]}function h(e,t,i){return(e=this.offset+e*this.strides[0]+t*this.strides[1])>=0&&(this.data[e]=i),this}},ue=de;var ve=function(){var e,t,i,s;for(e=ue([this.D,this.K]),i=0;i<this.D;i++)for(s=0;s<this.K;s++)t=(this.nd.get(i,s)+this.alpha)/(this.ndSum[i]+this.K*this.alpha),e.set(i,s,t);return e},we=c.isPrimitive,me=f,ge=a,pe=l;var ye=de;var ce=b,fe=j;var be=de;var je=function(e,t,i){var s,n,o,a,l,h,r,d;for(o=e.shape[0],a=e.shape[1],h=be([o,a]),s=(i-1)/i,n=1/i,r=0;r<o;r++)for(d=0;d<a;d++)l=s*e.get(r,d)+n*t.get(r,d),h.set(r,d,l);return h},xe=v,ke=l,Te=b,De=je;var Se=u,Ie=v,Ee=w,Ce=e,Me=m,ze=$,Pe=g,Ae=l,Oe=de,Ve=ve,Ne=function(e,t){return me(t)?ge(t,"alpha")&&(e.alpha=t.alpha,!we(e.alpha))?new TypeError(pe("invalid option. `%s` option must be a positive number. Option: `%s`.","alpha",e.alpha)):ge(t,"beta")&&(e.beta=t.beta,!we(e.beta))?new TypeError(pe("invalid option. `%s` option must be a positive number. Option: `%s`.","beta",e.beta)):null:new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",t))},We=function(){var e,t,i,s;for(e=ye([this.K,this.W]),i=0;i<this.K;i++)for(s=0;s<this.W;s++)t=(this.nw.get(s,i)+this.beta)/(this.nwSum[i]+this.W*this.beta),e.set(i,s,t);return e},Ye=function(){var e,t,i,s,n,o;for(this.z=[],n=0;n<this.D;n++){for(this.z.push([]),i=this.w[n].length,o=0;o<i;o++)t=fe(ce()*this.K),this.z[n].push(t);for(this.ndSum[n]=i,o=0;o<i;o++)s=this.w[n][o],e=this.z[n][o],this.nw.set(s,e,this.nw.get(s,e)+1),this.nd.set(n,e,this.nd.get(n,e)+1),this.nwSum[e]=this.nwSum[e]+1}},$e=function(e,t,i){var s,n,o,a,l,h,r,d,u,v,w,m,g,p;if(!xe(e))throw new TypeError(ke("invalid argument. First argument must be a positive integer. Value: `%s`.",e));if(!xe(t))throw new TypeError(ke("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));if(!xe(i))throw new TypeError(ke("invalid argument. Third argument must be a positive integer. Value: `%s`.",i));for(n=this.W*this.beta,s=this.K*this.alpha,w=0;w<e;w++){for(v=0;v<this.D;v++)for(p=0;p<this.ndSum[v];p++){for(h=this.w[v][p],o=this.z[v][p],this.nw.set(h,o,this.nw.get(h,o)-1),this.nd.set(v,o,this.nd.get(v,o)-1),this.ndSum[v]-=1,this.nwSum[o]-=1,l=[],m=0;m<this.K;m++)l.push((this.nw.get(h,m)+this.beta)/(this.nwSum[m]+n)*(this.nd.get(v,m)+this.alpha)/(this.ndSum[v]+s));for(m=1;m<this.K;m++)l[m]+=l[m-1];for(g=l[this.K-1]*Te(),o=0,u=0;u<this.K;u++)if(l[u]>g){o=u;break}this.nw.set(h,o,this.nw.get(h,o)+1),this.nd.set(v,o,this.nd.get(v,o)+1),this.nwSum[o]+=1,this.ndSum[v]+=1,this.z[v][p]=o}w%i==0&&w>t&&(r=this.getPhis(),a=this.getThetas(),this.phiList.push(r),this.thetaList.push(a),d=this.phiList.length,this.avgPhi=1===d?r:De(this.avgPhi,r,d),d=this.thetaList.length,this.avgTheta=1===d?a:De(this.avgTheta,a,d))}};function Ke(e,t){var i;for(i=0;i<e.length;i++)if(e[i]===t)return i;return-1}var _e=function(e,t,i){var s,n,o,a,l,h,r,d,u,v,w,m,g,p,y,c,f;if(!Ee(e))throw new TypeError(Ae("invalid argument. First argument must be an array of strings. Value: `%s`.",e));if(!Ie(t))throw new TypeError(Ae("invalid argument. Number of topics must be a positive integer. Value: `%s`.",t));if(h={},arguments.length>2&&(r=Ne(h,i)))throw r;for(m=e.length,a=h.alpha||50/t,l=h.beta||.1,n=[],f=[],d=0,g=0;g<m;g++)for(f.push([]),u=(w=ze(e[g])).length,p=0;p<u;p++)s=w[p],-1===(v=Ke(n,s))?(n.push(s),f[g].push(d),d+=1):f[g].push(v);return c=n.length,Ce(o={},"K",t),Ce(o,"D",m),Ce(o,"W",c),Ce(o,"alpha",a),Ce(o,"beta",l),Ce(o,"init",Ye),Ce(o,"fit",$e),Ce(o,"getPhis",We),Ce(o,"getThetas",Ve),Ce(o,"getTerms",b),o.nwSum=new Pe(t),o.ndSum=new Pe(m),o.nw=Oe([c,t],"int32"),o.nd=Oe([m,t],"int32"),o.phiList=[],o.thetaList=[],o.w=f,o.init(),o;function b(e,i){var s,o,a,l,h,r;if(!Se(e)||e>=t)throw new TypeError(Ae("invalid argument. First argument must be a nonnegative integer which is less than the total number of topics. Value: `%s`.",e));if(i){if(!Ie(i))throw new TypeError(Ae("invalid argument. Second argument must be a positive integer. Value: `%s`.",i))}else i=10;for(a=[],s=[],r=0;r<i;r++){for(l=0,y=0;y<this.W;y++)(o=this.avgPhi.get(e,y))>l&&!Me(s,y)&&(l=o,h=y);s.push(h),a.push({word:n[h],prob:l})}return a}},Le=f,Je=a,Re=n.isPrimitive,Be=k,Fe=l,Ge=["en","es","fin","fr","de","it","pt","swe"],He=["masculine","feminine"];var qe=function(e,t){return Le(t)?Je(t,"lang")&&(e.lang=t.lang,-1===Be(Ge,e.lang))?new TypeError(Fe('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"lang",Ge.join('", "'),e.lang)):Je(t,"suffixOnly")&&(e.suffixOnly=t.suffixOnly,!Re(e.suffixOnly))?new TypeError(Fe("invalid option. `%s` option must be a boolean. Option: `%s`.","suffixOnly",e.suffixOnly)):Je(t,"gender")&&(e.gender=t.gender,-1===Be(He,e.gender))?new TypeError(Fe('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"gender",He.join('", "'),e.gender)):null:new TypeError(Fe("invalid argument. Options argument must be an object. Value: `%s`.",t))},Ue=x.isPrimitive,Qe=o.isPrimitive,Xe=l,Ze=qe;var et=function(e,t){var i,s,n,o,a;if(!Qe(e)&&!Ue(e))throw new TypeError(Xe("invalid argument. First argument must be a string or integer. Value: `%s`.",e));if(o={},arguments.length>1&&(a=Ze(o,t)))throw a;switch(n=(e=String(e))[e.length-1],s=e.slice(-2),o.lang){case"fr":i="1"===e?"feminine"===o.gender?"re":"er":"e";break;case"de":case"fin":i=".";break;case"it":case"pt":case"es":i="feminine"===o.gender?"ª":"º";break;case"swe":i="11"!==s&&"1"===n||"12"!==s&&"2"===n?":a":":e";break;default:i="11"!==s&&"1"===n?"st":"12"!==s&&"2"===n?"nd":"13"!==s&&"3"===n?"rd":"th"}return o.suffixOnly?i:e+i},tt=o.isPrimitive,it=T,st=s,nt=D,ot=l,at={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},lt={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},ht="[aeiouy]",rt="[^aeiou][^aeiouy]*",dt=new RegExp("^"+rt+ht+"[^aeiouwxy]$"),ut=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),vt=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),wt=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),mt=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),gt=/^(.+?)(ss|i)es$/,pt=/^(.+?)([^s])s$/,yt=/^(.+?)eed$/,ct=/^(.+?)(ed|ing)$/,ft=/^(.+?)y$/,bt=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,jt=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,xt=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,kt=/^(.+?)(s|t)(ion)$/,Tt=/^(.+?)e$/,Dt=/.$/,St=/(at|bl|iz)$/,It=new RegExp("([^aeiouylsz])\\1$");var Et=function(e){var t,i,s,n;if(!tt(e))throw new TypeError(ot("invalid argument. First argument must be a string. Value: `%s`.",e));return e.length<3||("y"===(t=(e=st(e))[0])&&(e=t.toUpperCase()+e.substr(1)),gt.test(e)?e=nt(e,gt,"$1$2"):pt.test(e)&&(e=nt(e,pt,"$1$2")),yt.test(e)?(n=yt.exec(e),ut.test(n[1])&&(e=nt(e,Dt,""))):ct.test(e)&&(s=(n=ct.exec(e))[1],mt.test(s)&&(e=s,St.test(e)?e+="e":It.test(e)?e=nt(e,Dt,""):dt.test(e)&&(e+="e"))),ft.test(e)&&(s=(n=ft.exec(e))[1],mt.test(s)&&(e=s+"i")),bt.test(e)&&(s=(n=bt.exec(e))[1],i=n[2],ut.test(s)&&(e=s+at[i])),jt.test(e)&&(s=(n=jt.exec(e))[1],i=n[2],ut.test(s)&&(e=s+lt[i])),xt.test(e)?(s=(n=xt.exec(e))[1],wt.test(s)&&(e=s)):kt.test(e)&&(s=(n=kt.exec(e))[1]+n[2],wt.test(s)&&(e=s)),Tt.test(e)&&(s=(n=Tt.exec(e))[1],(wt.test(s)||vt.test(s)&&!dt.test(s))&&(e=s)),it(e,"ll")&&wt.test(e)&&(e=nt(e,Dt,"")),"y"===t&&(e=t.toLowerCase()+e.substr(1))),e},Ct={};e(Ct,"expandAcronyms",q),e(Ct,"expandContractions",ae),e(Ct,"lda",_e),e(Ct,"ordinalize",et),e(Ct,"porterStemmer",Et),e(Ct,"tokenize",$);export{Ct as default,q as expandAcronyms,ae as expandContractions,_e as lda,et as ordinalize,Et as porterStemmer,$ as tokenize};
//# sourceMappingURL=index.mjs.map
