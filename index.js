// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function r(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function i(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function t(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}var a,n,o,s,c="function"==typeof Object.defineProperty?Object.defineProperty:null,p=c,l=p,u=function(){try{return l({},"x",{}),!0}catch(e){return!1}},f=Object.defineProperty,d=f,g=function(e){return"number"==typeof e},h=function(r,i,t){var a=!1,n=i-r.length;return n<0||(function(e){return"-"===e[0]}(r)&&(a=!0,r=r.substr(1)),r=t?r+e(n):e(n)+r,a&&(r="-"+r)),r},w=g,b=h,m=String.prototype.toLowerCase,y=String.prototype.toUpperCase,v=function(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!w(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=b(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=b(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===y.call(e.specifier)?y.call(i):m.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i},_=function(e){return"string"==typeof e},x=g,k=Math.abs,E=String.prototype.toLowerCase,S=String.prototype.toUpperCase,j=String.prototype.replace,V=/e\+(\d)$/,T=/e-(\d)$/,$=/^(\d+)$/,A=/^(\d+)e/,F=/\.0$/,C=/\.0*e/,I=/(\..*[^0])0*e/,q=function(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!x(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":k(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=j.call(i,I,"$1e"),i=j.call(i,C,"e"),i=j.call(i,F,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=j.call(i,V,"e+0$1"),i=j.call(i,T,"e-0$1"),e.alternate&&(i=j.call(i,$,"$1."),i=j.call(i,A,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===S.call(e.specifier)?S.call(i):E.call(i)},R=function(e,i,t){var a=i-e.length;return a<0?e:e=t?e+r(a):r(a)+e},z=v,O=_,P=q,Z=R,G=h,W=String.fromCharCode,L=isNaN,N=Array.isArray,U=function(e){var r,t,a,n,o,s,c,p,l;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,p=0;p<e.length;p++)if(a=e[p],O(a))s+=a;else{if(r=void 0!==a.precision,!(a=i(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+a+"`.");for(a.mapping&&(c=a.mapping),t=a.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[c],10),c+=1,L(a.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[c],10),c+=1,L(a.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[c],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=z(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!L(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=L(o)?String(a.arg):W(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=P(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=G(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=Z(a.arg,a.width,a.padRight)),s+=a.arg||"",c+=1}return s},X=U,M=X,B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g,D=function(e){for(var r,i=[],a=0,n=B.exec(e);n;)(r=e.slice(a,B.lastIndex-n[0].length)).length&&i.push(r),i.push(t(n)),a=B.lastIndex,n=B.exec(e);return(r=e.slice(a)).length&&i.push(r),i},H=D,J=H,K=function(e){return"string"==typeof e},Q=M,Y=J,ee=K,re=function e(r){var i,t,a;if(!ee(r))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",r));for(i=Y(r),(t=new Array(arguments.length))[0]=i,a=1;a<t.length;a++)t[a]=arguments[a];return Q.apply(null,t)},ie=re,te=ie,ae=te,ne=Object.prototype,oe=ne.toString,se=ne.__defineGetter__,ce=ne.__defineSetter__,pe=ne.__lookupGetter__,le=ne.__lookupSetter__,ue=function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===oe.call(e))throw new TypeError(ae("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===oe.call(i))throw new TypeError(ae("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(pe.call(e,r)||le.call(e,r)?(t=e.__proto__,e.__proto__=ne,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&se&&se.call(e,r,i.get),o&&ce&&ce.call(e,r,i.set),e},fe=u,de=d,ge=ue;return a=fe()?de:ge,n=a,(o=function(e,r,i){n(e,r,{configurable:!1,enumerable:!0,writable:!1,value:i})})(s={},"expandAcronyms",require("./../expand-acronyms")),o(s,"expandContractions",require("./../expand-contractions")),o(s,"lda",require("./../lda")),o(s,"ordinalize",require("./../ordinalize")),o(s,"porterStemmer",require("./../porter-stemmer")),o(s,"tokenize",require("./../tokenize")),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nlp=r();
//# sourceMappingURL=index.js.map
