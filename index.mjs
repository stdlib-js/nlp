// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-capitalized@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-uncapitalize@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-capitalize@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/string-ends-with@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";var x={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},D={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},S=h.isPrimitive,T=l.isPrimitive,C=o,I={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},M=x,E=D,z=/^([,([{*<"“'`‘.])/gi,A=/([,.!?%*>:;"'”`)\]}])$/gi;function P(e,t){var i;for(i=0;i<t.length;i++)e.push(t[i]);return e}function N(e){var t,i,s,n=[],h=[];do{M[e]||I[e]||E[e]?i=!0:(t=e.split(z)).length>1?(n.push(t[1]),e=t[2]):(t=e.split(A)).length>1?(e=t[0],h.push(t[1])):i=!0}while(!i);return(s=n).push(e),P(s,h),s}var V=function(e,t){var i,s,n,h,l,o;if(!T(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>1&&!S(t))throw new TypeError("invalid argument. Second argument must be a boolean primitive. Value: `"+t+"`.");if(!e)return[];for(s=t?e.split(/(\s+)/):e.split(/\s+/),l={},n=[],o=0;o<s.length;o++)h=s[o],C(l,h)?P(n,l[h]):(P(n,i=N(h)),l[h]=i);return n},W={"'s":"is","'S":"Is","aren't":"are not",arent:"are not","can't":"can not",cant:"can not","can't've":"can not have","'cause":"because",cannot:"can not","could've":"could have",couldve:"could have","couldn't":"could not",couldnt:"could not","couldn't've":"could not have",couldntve:"could not have","didn't":"did not",didnt:"did not","doesn't":"does not",doesnt:"does not","don't":"do not",dont:"do not","hadn't":"had not",hadnt:"had not","hadn't've":"had not have","hasn't":"has not",hasnt:"has not","haven't":"have not",havent:"have not","he'd":"he would",hed:"he would","he'd've":"he would have",hedve:"he would have","he'll":"he will","he'll've":"he will have","he's":"he is",hes:"he is","how'd":"how did",howd:"how did","how'd'y":"how did you","how'll":"how will",howll:"how will","how's":"how is",hows:"how is","i'd":"i would","i'd've":"i would have","i'll":"i will","i'll've":"i will have","i'm":"i am",im:"i am","i'ma":"i am going to","i've":"i have","isn't":"is not",isnt:"is not","it'd":"it would","it'd've":"it would have","it'll've":"it will have","it'll":"it will",itll:"it will","it's":"it is","let's":"let us",lets:"let us","ma'am":"madam","mayn't":"may not","mightn't":"it might not","mightn't've":"might not have","might've":"might have","mustn't":"must not","mustn't've":"must not have","must've":"must have","needn't":"need not","needn't've":"need not have","not've":"not have","oughtn't":"ought not","oughtn't've":"ought not to have","so've":"so have","so's":"so is","shan't":"shall not","sha'n't":"shall not","shan't've":"shall not have","she'd":"she would","she'd've":"she would have","she'll":"she will","she'll've":"she will have","she's":"she is","should've":"should have","shouldn't":"should not","shouldn't've":"should not have","that'd":"that would","that'd've":"that would have","that's":"that is",thats:"that is","there'd":"there would","there'd've":"there would have","there's":"there is","they'd":"they would","they'd've":"they would have","they'll":"they will","they'll've":"they will have","they're":"they are","they've":"they have","to've":"to have","wasn't":"was not","we'd":"we would","we'd've":"we would have","we'll":"we will","we'll've":"we will have","we're":"we are","we've":"we have","weren't":"were not","what'll":"what will","what'll've":"what will have","what're":"what are","what's":"what has/is","what've":"what have","when's":"when is","when've":"when have","where'd":"where would","where's":"where is","where've":"where have","who'd":"who would","who'll":"who will","who'll've":"who will have","who're":"who are","who's":"who is","who've":"who have","why've":"why have","why'll":"why will","why're":"why are","why's":"why is","will've":"will have","won't":"will not",wont:"will not","won't've":"will not have","would've":"would have","wouldn't":"would not","wouldn't've":"would not have","y'all":"you all","y'all'd":"you all would","y'all'd've":"you all would have","y'all're":"you all are","y'all've":"you all have","you'd":"you would","you'd've":"you would have","you'll":"you will","you'll've":"you will have","you're":"you are","you've":"you have"},Y=t,$=i,K=s,O=n,_=V,L=l.isPrimitive,k=W,J=Y(k);var R=function(e){var t,i,s,n,h,l;if(!L(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");for(s="",t=_(e,!0),h=0;h<t.length;h++){if(i=t[h],$(i)){for(l=0;l<J.length;l++)if(n=J[l],K(i)===n){i=O(k[n]);break}}else for(l=0;l<J.length;l++)if(i===(n=J[l])){i=k[n];break}s+=i}return s},B=u,F=w,G=m;var H=function(){var e,t,i,s,n,h,l;for(1===arguments.length?i=arguments[0]:2===arguments.length&&(i=arguments[0],e=arguments[1]),t=i.length,n=1,l=0;l<t;l++)n*=i[l];return s="int32"===e?new B(n):new F(n),(h={}).dtype=e,h.shape=i,h.strides=[i[1],1],h.offset=0,h.ndims=i.length,h.length=s.length,h.nbytes=s.byteLength,h.data=s,G(h,"get",o),G(h,"set",a),h;function o(e,t){var i=this.offset+e*this.strides[0]+t*this.strides[1];return this.data[i]}function a(e,t,i){return(e=this.offset+e*this.strides[0]+t*this.strides[1])>=0&&(this.data[e]=i),this}},U=H;var q=function(){var e,t,i,s;for(e=U([this.D,this.K]),i=0;i<this.D;i++)for(s=0;s<this.K;s++)t=(this.nd.get(i,s)+this.alpha)/(this.ndSum[i]+this.K*this.alpha),e.set(i,s,t);return e},Q=p.isPrimitive,X=y,Z=o;var ee=H;var te=g,ie=c;var se=H;var ne=function(e,t,i){var s,n,h,l,o,a,r,d;for(h=e.shape[0],l=e.shape[1],a=se([h,l]),s=(i-1)/i,n=1/i,r=0;r<h;r++)for(d=0;d<l;d++)o=s*e.get(r,d)+n*t.get(r,d),a.set(r,d,o);return a},he=r,le=g,oe=ne;var ae=a,re=r,de=d,ve=e,ue=v,we=V,me=u,pe=H,ye=q,ge=function(e,t){return X(t)?Z(t,"alpha")&&(e.alpha=t.alpha,!Q(e.alpha))?new TypeError("invalid option. `alpha` option must be a positive number. Option: `"+e.alpha+"`."):Z(t,"beta")&&(e.beta=t.beta,!Q(e.beta))?new TypeError("invalid option. `beta` option must be a positive number. Option: `"+e.beta+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")},ce=function(){var e,t,i,s;for(e=ee([this.K,this.W]),i=0;i<this.K;i++)for(s=0;s<this.W;s++)t=(this.nw.get(s,i)+this.beta)/(this.nwSum[i]+this.W*this.beta),e.set(i,s,t);return e},fe=function(){var e,t,i,s,n,h;for(this.z=[],n=0;n<this.D;n++){for(this.z.push([]),i=this.w[n].length,h=0;h<i;h++)t=ie(te()*this.K),this.z[n].push(t);for(this.ndSum[n]=i,h=0;h<i;h++)s=this.w[n][h],e=this.z[n][h],this.nw.set(s,e,this.nw.get(s,e)+1),this.nd.set(n,e,this.nd.get(n,e)+1),this.nwSum[e]=this.nwSum[e]+1}},be=function(e,t,i){var s,n,h,l,o,a,r,d,v,u,w,m,p,y;if(!he(e))throw new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.");if(!he(t))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+t+"`.");if(!he(i))throw new TypeError("invalid argument. Third argument must be a positive integer. Value: `"+i+"`.");for(n=this.W*this.beta,s=this.K*this.alpha,w=0;w<e;w++){for(u=0;u<this.D;u++)for(y=0;y<this.ndSum[u];y++){for(a=this.w[u][y],h=this.z[u][y],this.nw.set(a,h,this.nw.get(a,h)-1),this.nd.set(u,h,this.nd.get(u,h)-1),this.ndSum[u]-=1,this.nwSum[h]-=1,o=[],m=0;m<this.K;m++)o.push((this.nw.get(a,m)+this.beta)/(this.nwSum[m]+n)*(this.nd.get(u,m)+this.alpha)/(this.ndSum[u]+s));for(m=1;m<this.K;m++)o[m]+=o[m-1];for(p=o[this.K-1]*le(),h=0,v=0;v<this.K;v++)if(o[v]>p){h=v;break}this.nw.set(a,h,this.nw.get(a,h)+1),this.nd.set(u,h,this.nd.get(u,h)+1),this.nwSum[h]+=1,this.ndSum[u]+=1,this.z[u][y]=h}w%i==0&&w>t&&(r=this.getPhis(),l=this.getThetas(),this.phiList.push(r),this.thetaList.push(l),d=this.phiList.length,this.avgPhi=1===d?r:oe(this.avgPhi,r,d),d=this.thetaList.length,this.avgTheta=1===d?l:oe(this.avgTheta,l,d))}};function je(e,t){var i;for(i=0;i<e.length;i++)if(e[i]===t)return i;return-1}var xe=function(e,t,i){var s,n,h,l,o,a,r,d,v,u,w,m,p,y,g,c,f;if(!de(e))throw new TypeError("invalid argument. First argument must be a string array. Value: `"+e+"`.");if(!re(t))throw new TypeError("invalid argument. Number of topics `K` must be a positive integer. Value: `"+t+"`.");if(a={},arguments.length>2&&(r=ge(a,i)))throw r;for(m=e.length,l=a.alpha||50/t,o=a.beta||.1,n=[],f=[],d=0,p=0;p<m;p++)for(f.push([]),v=(w=we(e[p])).length,y=0;y<v;y++)s=w[y],-1===(u=je(n,s))?(n.push(s),f[p].push(d),d+=1):f[p].push(u);return c=n.length,ve(h={},"K",t),ve(h,"D",m),ve(h,"W",c),ve(h,"alpha",l),ve(h,"beta",o),ve(h,"init",fe),ve(h,"fit",be),ve(h,"getPhis",ce),ve(h,"getThetas",ye),ve(h,"getTerms",b),h.nwSum=new me(t),h.ndSum=new me(m),h.nw=pe([c,t],"int32"),h.nd=pe([m,t],"int32"),h.phiList=[],h.thetaList=[],h.w=f,h.init(),h;function b(e,i){var s,h,l,o,a,r;if(!ae(e)||e>=t)throw new TypeError("invalid argument. First argument must be a nonnegative integer smaller than the total number of topics. Value: `"+e+"`.");if(i){if(!re(i))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+i+"`.")}else i=10;for(l=[],s=[],r=0;r<i;r++){for(o=0,g=0;g<this.W;g++)(h=this.avgPhi.get(e,g))>o&&!ue(s,g)&&(o=h,a=g);s.push(a),l.push({word:n[a],prob:o})}return l}},De=l.isPrimitive,Se=f,Te=b,Ce=j,Ie={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},Me={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},Ee="[aeiouy]",ze="[^aeiou][^aeiouy]*",Ae=new RegExp("^"+ze+Ee+"[^aeiouwxy]$"),Pe=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),Ne=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),Ve=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),We=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),Ye=/^(.+?)(ss|i)es$/,$e=/^(.+?)([^s])s$/,Ke=/^(.+?)eed$/,Oe=/^(.+?)(ed|ing)$/,_e=/^(.+?)y$/,Le=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,ke=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,Je=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,Re=/^(.+?)(s|t)(ion)$/,Be=/^(.+?)e$/,Fe=/.$/,Ge=/(at|bl|iz)$/,He=new RegExp("([^aeiouylsz])\\1$");var Ue=function(e){var t,i,s,n;if(!De(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");return e.length<3||("y"===(t=(e=Te(e))[0])&&(e=t.toUpperCase()+e.substr(1)),Ye.test(e)?e=Ce(e,Ye,"$1$2"):$e.test(e)&&(e=Ce(e,$e,"$1$2")),Ke.test(e)?(n=Ke.exec(e),Pe.test(n[1])&&(e=Ce(e,Fe,""))):Oe.test(e)&&(s=(n=Oe.exec(e))[1],We.test(s)&&(e=s,Ge.test(e)?e+="e":He.test(e)?e=Ce(e,Fe,""):Ae.test(e)&&(e+="e"))),_e.test(e)&&(s=(n=_e.exec(e))[1],We.test(s)&&(e=s+"i")),Le.test(e)&&(s=(n=Le.exec(e))[1],i=n[2],Pe.test(s)&&(e=s+Ie[i])),ke.test(e)&&(s=(n=ke.exec(e))[1],i=n[2],Pe.test(s)&&(e=s+Me[i])),Je.test(e)?(s=(n=Je.exec(e))[1],Ve.test(s)&&(e=s)):Re.test(e)&&(s=(n=Re.exec(e))[1]+n[2],Ve.test(s)&&(e=s)),Be.test(e)&&(s=(n=Be.exec(e))[1],(Ve.test(s)||Ne.test(s)&&!Ae.test(s))&&(e=s)),Se(e,"ll")&&Ve.test(e)&&(e=Ce(e,Fe,"")),"y"===t&&(e=t.toLowerCase()+e.substr(1))),e},qe=e,Qe={};qe(Qe,"expandContractions",R),qe(Qe,"lda",xe),qe(Qe,"porterStemmer",Ue),qe(Qe,"tokenize",V);var Xe=Qe;export{Xe as default,R as expandContractions,xe as lda,Ue as porterStemmer,V as tokenize};
//# sourceMappingURL=index.mjs.map
