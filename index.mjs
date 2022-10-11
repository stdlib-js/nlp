// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uppercase@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-capitalized@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-uncapitalize@v0.0.9-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-capitalize@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.0.8-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-ends-with@v0.0.2-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.0.2-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.0.2-esm/index.mjs";var I={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},E={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},C=n.isPrimitive,M=o.isPrimitive,z=a,P=l,A={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},O=I,V=E,N=/^([,([{*<"“'`‘.])/gi,W=/([,.!?%*>:;"'”`)\]}])$/gi;function Y(e,t){var i;for(i=0;i<t.length;i++)e.push(t[i]);return e}function $(e){var t,i,s,n=[],o=[];do{O[e]||A[e]||V[e]?i=!0:(t=e.split(N)).length>1?(n.push(t[1]),e=t[2]):(t=e.split(W)).length>1?(e=t[0],o.push(t[1])):i=!0}while(!i);return(s=n).push(e),Y(s,o),s}var K=function(e,t){var i,s,n,o,a,l;if(!M(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!C(t))throw new TypeError(P("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(s=t?e.split(/(\s+)/):e.split(/\s+/),a={},n=[],l=0;l<s.length;l++)o=s[l],z(a,o)?Y(n,a[o]):(Y(n,i=$(o)),a[o]=i);return n},_={afaik:"as far as I know",afk:"away from keyboard",ama:"ask me anything",asap:"as soon as possible",b2b:"business to business",bbl:"be back later",bbs:"be back soon",bday:"birthday",brb:"be right back",btw:"by the way",cc:"carbon copy",cmon:"come on",cu:"see you",cya:"see you",cys:"check your settings",d2d:"direct to direct",dr:"doctor",e2e:"end to end",faq:"frequently asked question",fav:"favorite",favs:"favorites",ffs:"for f*ck's sake",foaf:"friend of a friend",ftw:"for the win",fyi:"for your information",g2g:"got to go",g2m:"got to meet you",gj:"good job",gm:"good morning",gmta:"great minds think alike",hth:"hope this helps",ianal:"I am not a lawyer",ianars:"I am not a rocket scientist",ic:"I see",icymi:"in case you missed it",idk:"i do not know",iirc:"if I recall correctly",ikr:"i know right",imho:"in my humble opinion",imnsho:"in my not so humble opinion",imo:"in my opinion",iow:"in other words",irl:"in real life",jj:"just joking",jk:"just kidding",jooc:"just out of curiosity",kk:"okay",l8:"late",l8r:"later",lmao:"laugh my a** off",lol:"laughing out loud",mfw:"my face when",myob:"mind your own business",nm:"never mind",noyb:"none of your business",np:"no problem",nvm:"never mind",oic:"oh, i see",omfg:"oh my f*cking god",omg:"oh my god",omw:"on my way",ooc:"out of character",oof:"out of focus",ot:"off topic",otoh:"on the other hand",p2p:"peer to peer",pfo:"please f*ck off",pita:"pain in the a**",plz:"please",pms:"personal messages",r8:"right",rofl:"rolling on the floor laughing",roflmao:"rolling on the floor laughing my a** off",rp:"reply",rps:"rock paper scissors",rpsls:"rock paper scissors lizard spock",rtfa:"read the f*cking article",rtfm:"read the f*cking manual",ru:"are you",s2s:"same to same",smh:"shake my head",tbh:"to be honest",thx:"thanks",tia:"thanks in advance",tldr:"too long did not read",ttyl:"talk to you later",wtf:"what the f*ck",wtg:"way to go",wtgp:"way to go pal",ymmv:"your mileage may vary"},L=t,J=i,R=s,B=K,F=o.isPrimitive,G=l,H=_,q=L(H);var U=function(e){var t,i,s,n,o,a;if(!F(e))throw new TypeError(G("invalid argument. Must provide a string. Value: `%s`.",e));for(s="",t=B(e,!0),o=0;o<t.length;o++){if(i=t[o],J(i)){for(a=0;a<q.length;a++)if(n=q[a],R(i)===n){i=H[n];break}}else for(a=0;a<q.length;a++)if(i===(n=q[a])){i=H[n];break}s+=i}return s},Q={"'s":"is","'S":"Is","aren't":"are not",arent:"are not","can't":"can not",cant:"can not","can't've":"can not have","'cause":"because",cannot:"can not","could've":"could have",couldve:"could have","couldn't":"could not",couldnt:"could not","couldn't've":"could not have",couldntve:"could not have","didn't":"did not",didnt:"did not","doesn't":"does not",doesnt:"does not","don't":"do not",dont:"do not","hadn't":"had not",hadnt:"had not","hadn't've":"had not have","hasn't":"has not",hasnt:"has not","haven't":"have not",havent:"have not","he'd":"he would",hed:"he would","he'd've":"he would have",hedve:"he would have","he'll":"he will","he'll've":"he will have","he's":"he is",hes:"he is","how'd":"how did",howd:"how did","how'd'y":"how did you","how'll":"how will",howll:"how will","how's":"how is",hows:"how is","i'd":"i would","i'd've":"i would have","i'll":"i will","i'll've":"i will have","i'm":"i am",im:"i am","i'ma":"i am going to","i've":"i have","isn't":"is not",isnt:"is not","it'd":"it would","it'd've":"it would have","it'll've":"it will have","it'll":"it will",itll:"it will","it's":"it is","let's":"let us",lets:"let us","ma'am":"madam","mayn't":"may not","mightn't":"it might not","mightn't've":"might not have","might've":"might have","mustn't":"must not","mustn't've":"must not have","must've":"must have","needn't":"need not","needn't've":"need not have","not've":"not have","oughtn't":"ought not","oughtn't've":"ought not to have","so've":"so have","so's":"so is","shan't":"shall not","sha'n't":"shall not","shan't've":"shall not have","she'd":"she would","she'd've":"she would have","she'll":"she will","she'll've":"she will have","she's":"she is","should've":"should have","shouldn't":"should not","shouldn't've":"should not have","that'd":"that would","that'd've":"that would have","that's":"that is",thats:"that is","there'd":"there would","there'd've":"there would have","there's":"there is","they'd":"they would","they'd've":"they would have","they'll":"they will","they'll've":"they will have","they're":"they are","they've":"they have","to've":"to have","wasn't":"was not","we'd":"we would","we'd've":"we would have","we'll":"we will","we'll've":"we will have","we're":"we are","we've":"we have","weren't":"were not","what'll":"what will","what'll've":"what will have","what're":"what are","what's":"what has/is","what've":"what have","when's":"when is","when've":"when have","where'd":"where would","where's":"where is","where've":"where have","who'd":"who would","who'll":"who will","who'll've":"who will have","who're":"who are","who's":"who is","who've":"who have","why've":"why have","why'll":"why will","why're":"why are","why's":"why is","will've":"will have","won't":"will not",wont:"will not","won't've":"will not have","would've":"would have","wouldn't":"would not","wouldn't've":"would not have","y'all":"you all","y'all'd":"you all would","y'all'd've":"you all would have","y'all're":"you all are","y'all've":"you all have","you'd":"you would","you'd've":"you would have","you'll":"you will","you'll've":"you will have","you're":"you are","you've":"you have"},X=t,Z=h,ee=r,te=d,ie=K,se=o.isPrimitive,ne=l,oe=Q,ae=X(oe);var le=function(e){var t,i,s,n,o,a;if(!se(e))throw new TypeError(ne("invalid argument. Must provide a string. Value: `%s`.",e));for(s="",t=ie(e,!0),o=0;o<t.length;o++){if(i=t[o],Z(i)){for(a=0;a<ae.length;a++)if(n=ae[a],ee(i)===n){i=te(oe[n]);break}}else for(a=0;a<ae.length;a++)if(i===(n=ae[a])){i=oe[n];break}s+=i}return s},he=g,re=p,de=y;var ue=function(){var e,t,i,s,n,o,a;for(1===arguments.length?i=arguments[0]:2===arguments.length&&(i=arguments[0],e=arguments[1]),t=i.length,n=1,a=0;a<t;a++)n*=i[a];return s="int32"===e?new he(n):new re(n),(o={}).dtype=e,o.shape=i,o.strides=[i[1],1],o.offset=0,o.ndims=i.length,o.length=s.length,o.nbytes=s.byteLength,o.data=s,de(o,"get",l),de(o,"set",h),o;function l(e,t){var i=this.offset+e*this.strides[0]+t*this.strides[1];return this.data[i]}function h(e,t,i){return(e=this.offset+e*this.strides[0]+t*this.strides[1])>=0&&(this.data[e]=i),this}},ve=ue;var me=function(){var e,t,i,s;for(e=ve([this.D,this.K]),i=0;i<this.D;i++)for(s=0;s<this.K;s++)t=(this.nd.get(i,s)+this.alpha)/(this.ndSum[i]+this.K*this.alpha),e.set(i,s,t);return e},we=c.isPrimitive,ge=f,pe=a,ye=l;var ce=ue;var fe=b,be=j;var je=ue;var xe=function(e,t,i){var s,n,o,a,l,h,r,d;for(o=e.shape[0],a=e.shape[1],h=je([o,a]),s=(i-1)/i,n=1/i,r=0;r<o;r++)for(d=0;d<a;d++)l=s*e.get(r,d)+n*t.get(r,d),h.set(r,d,l);return h},ke=v,Te=l,De=b,Se=xe;var Ie=u,Ee=v,Ce=m,Me=e,ze=w,Pe=K,Ae=g,Oe=l,Ve=ue,Ne=me,We=function(e,t){return ge(t)?pe(t,"alpha")&&(e.alpha=t.alpha,!we(e.alpha))?new TypeError(ye("invalid option. `%s` option must be a positive number. Option: `%s`.","alpha",e.alpha)):pe(t,"beta")&&(e.beta=t.beta,!we(e.beta))?new TypeError(ye("invalid option. `%s` option must be a positive number. Option: `%s`.","beta",e.beta)):null:new TypeError(ye("invalid argument. Options argument must be an object. Value: `%s`.",t))},Ye=function(){var e,t,i,s;for(e=ce([this.K,this.W]),i=0;i<this.K;i++)for(s=0;s<this.W;s++)t=(this.nw.get(s,i)+this.beta)/(this.nwSum[i]+this.W*this.beta),e.set(i,s,t);return e},$e=function(){var e,t,i,s,n,o;for(this.z=[],n=0;n<this.D;n++){for(this.z.push([]),i=this.w[n].length,o=0;o<i;o++)t=be(fe()*this.K),this.z[n].push(t);for(this.ndSum[n]=i,o=0;o<i;o++)s=this.w[n][o],e=this.z[n][o],this.nw.set(s,e,this.nw.get(s,e)+1),this.nd.set(n,e,this.nd.get(n,e)+1),this.nwSum[e]=this.nwSum[e]+1}},Ke=function(e,t,i){var s,n,o,a,l,h,r,d,u,v,m,w,g,p;if(!ke(e))throw new TypeError(Te("invalid argument. First argument must be a positive integer. Value: `%s`.",e));if(!ke(t))throw new TypeError(Te("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));if(!ke(i))throw new TypeError(Te("invalid argument. Third argument must be a positive integer. Value: `%s`.",i));for(n=this.W*this.beta,s=this.K*this.alpha,m=0;m<e;m++){for(v=0;v<this.D;v++)for(p=0;p<this.ndSum[v];p++){for(h=this.w[v][p],o=this.z[v][p],this.nw.set(h,o,this.nw.get(h,o)-1),this.nd.set(v,o,this.nd.get(v,o)-1),this.ndSum[v]-=1,this.nwSum[o]-=1,l=[],w=0;w<this.K;w++)l.push((this.nw.get(h,w)+this.beta)/(this.nwSum[w]+n)*(this.nd.get(v,w)+this.alpha)/(this.ndSum[v]+s));for(w=1;w<this.K;w++)l[w]+=l[w-1];for(g=l[this.K-1]*De(),o=0,u=0;u<this.K;u++)if(l[u]>g){o=u;break}this.nw.set(h,o,this.nw.get(h,o)+1),this.nd.set(v,o,this.nd.get(v,o)+1),this.nwSum[o]+=1,this.ndSum[v]+=1,this.z[v][p]=o}m%i==0&&m>t&&(r=this.getPhis(),a=this.getThetas(),this.phiList.push(r),this.thetaList.push(a),d=this.phiList.length,this.avgPhi=1===d?r:Se(this.avgPhi,r,d),d=this.thetaList.length,this.avgTheta=1===d?a:Se(this.avgTheta,a,d))}};function _e(e,t){var i;for(i=0;i<e.length;i++)if(e[i]===t)return i;return-1}var Le=function(e,t,i){var s,n,o,a,l,h,r,d,u,v,m,w,g,p,y,c,f;if(!Ce(e))throw new TypeError(Oe("invalid argument. First argument must be an array of strings. Value: `%s`.",e));if(!Ee(t))throw new TypeError(Oe("invalid argument. Number of topics must be a positive integer. Value: `%s`.",t));if(h={},arguments.length>2&&(r=We(h,i)))throw r;for(w=e.length,a=h.alpha||50/t,l=h.beta||.1,n=[],f=[],d=0,g=0;g<w;g++)for(f.push([]),u=(m=Pe(e[g])).length,p=0;p<u;p++)s=m[p],-1===(v=_e(n,s))?(n.push(s),f[g].push(d),d+=1):f[g].push(v);return c=n.length,Me(o={},"K",t),Me(o,"D",w),Me(o,"W",c),Me(o,"alpha",a),Me(o,"beta",l),Me(o,"init",$e),Me(o,"fit",Ke),Me(o,"getPhis",Ye),Me(o,"getThetas",Ne),Me(o,"getTerms",b),o.nwSum=new Ae(t),o.ndSum=new Ae(w),o.nw=Ve([c,t],"int32"),o.nd=Ve([w,t],"int32"),o.phiList=[],o.thetaList=[],o.w=f,o.init(),o;function b(e,i){var s,o,a,l,h,r;if(!Ie(e)||e>=t)throw new TypeError(Oe("invalid argument. First argument must be a nonnegative integer which is less than the total number of topics. Value: `%s`.",e));if(i){if(!Ee(i))throw new TypeError(Oe("invalid argument. Second argument must be a positive integer. Value: `%s`.",i))}else i=10;for(a=[],s=[],r=0;r<i;r++){for(l=0,y=0;y<this.W;y++)(o=this.avgPhi.get(e,y))>l&&!ze(s,y)&&(l=o,h=y);s.push(h),a.push({word:n[h],prob:l})}return a}},Je=f,Re=a,Be=n.isPrimitive,Fe=k,Ge=l,He=["en","es","fin","fr","de","it","pt","swe"],qe=["masculine","feminine"];var Ue=function(e,t){return Je(t)?Re(t,"lang")&&(e.lang=t.lang,-1===Fe(He,e.lang))?new TypeError(Ge('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"lang",He.join('", "'),e.lang)):Re(t,"suffixOnly")&&(e.suffixOnly=t.suffixOnly,!Be(e.suffixOnly))?new TypeError(Ge("invalid option. `%s` option must be a boolean. Option: `%s`.","suffixOnly",e.suffixOnly)):Re(t,"gender")&&(e.gender=t.gender,-1===Fe(qe,e.gender))?new TypeError(Ge('invalid option. `%s` option must be one of the following: "%s". Value: `%s`.',"gender",qe.join('", "'),e.gender)):null:new TypeError(Ge("invalid argument. Options argument must be an object. Value: `%s`.",t))},Qe=x.isPrimitive,Xe=o.isPrimitive,Ze=l,et=Ue;var tt=function(e,t){var i,s,n,o,a;if(!Xe(e)&&!Qe(e))throw new TypeError(Ze("invalid argument. First argument must be a string or integer. Value: `%s`.",e));if(o={},arguments.length>1&&(a=et(o,t)))throw a;switch(n=(e=String(e))[e.length-1],s=e.slice(-2),o.lang){case"fr":i="1"===e?"feminine"===o.gender?"re":"er":"e";break;case"de":case"fin":i=".";break;case"it":case"pt":case"es":i="feminine"===o.gender?"ª":"º";break;case"swe":i="11"!==s&&"1"===n||"12"!==s&&"2"===n?":a":":e";break;default:i="11"!==s&&"1"===n?"st":"12"!==s&&"2"===n?"nd":"13"!==s&&"3"===n?"rd":"th"}return o.suffixOnly?i:e+i},it=o.isPrimitive,st=T,nt=D,ot=S,at=l,lt={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},ht={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},rt="[aeiouy]",dt="[^aeiou][^aeiouy]*",ut=new RegExp("^"+dt+rt+"[^aeiouwxy]$"),vt=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),mt=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),wt=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),gt=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),pt=/^(.+?)(ss|i)es$/,yt=/^(.+?)([^s])s$/,ct=/^(.+?)eed$/,ft=/^(.+?)(ed|ing)$/,bt=/^(.+?)y$/,jt=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,xt=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,kt=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,Tt=/^(.+?)(s|t)(ion)$/,Dt=/^(.+?)e$/,St=/.$/,It=/(at|bl|iz)$/,Et=new RegExp("([^aeiouylsz])\\1$");var Ct=function(e){var t,i,s,n;if(!it(e))throw new TypeError(at("invalid argument. First argument must be a string. Value: `%s`.",e));return e.length<3||("y"===(t=(e=nt(e))[0])&&(e=t.toUpperCase()+e.substr(1)),pt.test(e)?e=ot(e,pt,"$1$2"):yt.test(e)&&(e=ot(e,yt,"$1$2")),ct.test(e)?(n=ct.exec(e),vt.test(n[1])&&(e=ot(e,St,""))):ft.test(e)&&(s=(n=ft.exec(e))[1],gt.test(s)&&(e=s,It.test(e)?e+="e":Et.test(e)?e=ot(e,St,""):ut.test(e)&&(e+="e"))),bt.test(e)&&(s=(n=bt.exec(e))[1],gt.test(s)&&(e=s+"i")),jt.test(e)&&(s=(n=jt.exec(e))[1],i=n[2],vt.test(s)&&(e=s+lt[i])),xt.test(e)&&(s=(n=xt.exec(e))[1],i=n[2],vt.test(s)&&(e=s+ht[i])),kt.test(e)?(s=(n=kt.exec(e))[1],wt.test(s)&&(e=s)):Tt.test(e)&&(s=(n=Tt.exec(e))[1]+n[2],wt.test(s)&&(e=s)),Dt.test(e)&&(s=(n=Dt.exec(e))[1],(wt.test(s)||mt.test(s)&&!ut.test(s))&&(e=s)),st(e,"ll",e.length)&&wt.test(e)&&(e=ot(e,St,"")),"y"===t&&(e=t.toLowerCase()+e.substr(1))),e},Mt={};e(Mt,"expandAcronyms",U),e(Mt,"expandContractions",le),e(Mt,"lda",Le),e(Mt,"ordinalize",tt),e(Mt,"porterStemmer",Ct),e(Mt,"tokenize",K);export{Mt as default,U as expandAcronyms,le as expandContractions,Le as lda,tt as ordinalize,Ct as porterStemmer,K as tokenize};
//# sourceMappingURL=index.mjs.map
