(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="171",ap=0,cu=1,lp=2,Gd=1,cp=2,jn=3,is=0,oi=1,we=2,Di=0,ro=1,Hc=2,hu=3,uu=4,hp=5,js=100,up=101,fp=102,dp=103,mp=104,pp=200,_p=201,vp=202,gp=203,Wc=204,qc=205,yp=206,xp=207,Ap=208,Mp=209,Sp=210,bp=211,Tp=212,wp=213,Ep=214,Xc=0,xl=1,Yc=2,lo=3,$c=4,Jc=5,Zc=6,Kc=7,kd=0,Cp=1,Rp=2,bs=0,Bp=1,Pp=2,Ip=3,Lp=4,Dp=5,Up=6,Np=7,Hd=300,co=301,ho=302,jc=303,Qc=304,Pl=306,th=1e3,er=1001,eh=1002,ki=1003,Fp=1004,ha=1005,Ii=1006,Fl=1007,ir=1008,_i=1009,Wd=1010,qd=1011,$o=1012,Lh=1013,ar=1014,xn=1015,na=1016,Dh=1017,Uh=1018,lr=1020,Xd=35902,Yd=1021,$d=1022,An=1023,Jd=1024,Zd=1025,oo=1026,cr=1027,Nh=1028,Fh=1029,Kd=1030,Oh=1031,zh=1033,ml=33776,pl=33777,_l=33778,vl=33779,ih=35840,nh=35841,sh=35842,rh=35843,oh=36196,ah=37492,lh=37496,ch=37808,hh=37809,uh=37810,fh=37811,dh=37812,mh=37813,ph=37814,_h=37815,vh=37816,gh=37817,yh=37818,xh=37819,Ah=37820,Mh=37821,gl=36492,Sh=36494,bh=36495,jd=36283,Th=36284,wh=36285,Eh=36286,sa=3200,Op=3201,zp=0,Vp=1,Dn="",Te="srgb",ws="srgb-linear",Al="linear",be="srgb",Mr=7680,fu=519,Gp=512,kp=513,Hp=514,Qd=515,Wp=516,qp=517,Xp=518,Yp=519,du=35044,mu="300 es",ts=2e3,Ml=2001;class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pu=1234567;const Go=Math.PI/180,Jo=180/Math.PI;function mr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(di[i&255]+di[i>>8&255]+di[i>>16&255]+di[i>>24&255]+"-"+di[t&255]+di[t>>8&255]+"-"+di[t>>16&15|64]+di[t>>24&255]+"-"+di[e&63|128]+di[e>>8&255]+"-"+di[e>>16&255]+di[e>>24&255]+di[n&255]+di[n>>8&255]+di[n>>16&255]+di[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Vh(i,t){return(i%t+t)%t}function $p(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jp(i,t,e){return i!==t?(e-i)/(t-i):0}function ko(i,t,e){return(1-e)*i+e*t}function Zp(i,t,e,n){return ko(i,t,1-Math.exp(-e*n))}function Kp(i,t=1){return t-Math.abs(Vh(i,t*2)-t)}function jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function t_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function e_(i,t){return i+Math.random()*(t-i)}function i_(i){return i*(.5-Math.random())}function n_(i){i!==void 0&&(pu=i);let t=pu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function s_(i){return i*Go}function r_(i){return i*Jo}function o_(i){return(i&i-1)===0&&i!==0}function a_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function l_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function c_(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wt={DEG2RAD:Go,RAD2DEG:Jo,generateUUID:mr,clamp:te,euclideanModulo:Vh,mapLinear:$p,inverseLerp:Jp,lerp:ko,damp:Zp,pingpong:Kp,smoothstep:jp,smootherstep:Qp,randInt:t_,randFloat:e_,randFloatSpread:i_,seededRandom:n_,degToRad:s_,radToDeg:r_,isPowerOfTwo:o_,ceilPowerOfTwo:a_,floorPowerOfTwo:l_,setQuaternionFromProperEuler:c_,normalize:Mi,denormalize:jr};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],v=s[0],p=s[3],m=s[6],A=s[1],y=s[4],x=s[7],C=s[2],E=s[5],w=s[8];return r[0]=o*v+a*A+l*C,r[3]=o*p+a*y+l*E,r[6]=o*m+a*x+l*w,r[1]=c*v+h*A+u*C,r[4]=c*p+h*y+u*E,r[7]=c*m+h*x+u*w,r[2]=f*v+d*A+_*C,r[5]=f*p+d*y+_*E,r[8]=f*m+d*x+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=e*u+n*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ol.makeScale(t,e)),this}rotate(t){return this.premultiply(Ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new Jt;function tm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function h_(){const i=Sl("canvas");return i.style.display="block",i}const _u={};function Qr(i){i in _u||(_u[i]=!0,console.warn(i))}function u_(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function f_(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function d_(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m_(){const i={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Al:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ws]:{primaries:t,whitePoint:n,transfer:Al,toXYZ:vu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:be,toXYZ:vu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}const me=m_();function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sr;class p_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Sr===void 0&&(Sr=Sl("canvas")),Sr.width=t.width,Sr.height=t.height;const n=Sr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Sr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let __=0;class em{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=mr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zl(s[o].image)):r.push(zl(s[o]))}else r=zl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?p_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v_=0;class ui extends ss{constructor(t=ui.DEFAULT_IMAGE,e=ui.DEFAULT_MAPPING,n=er,s=er,r=Ii,o=ir,a=An,l=_i,c=ui.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=mr(),this.name="",this.source=new em(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case th:t.x=t.x-Math.floor(t.x);break;case er:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case th:t.y=t.y-Math.floor(t.y);break;case er:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Hd;ui.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(d+1)/2,C=(m+1)/2,E=(h+f)/4,w=(u+v)/4,B=(_+p)/4;return y>x&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=w/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=B/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=B/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g_ extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ui(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new em(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends g_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class im extends ui{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ki,this.minFilter=ki,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class y_ extends ui{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ki,this.minFilter=ki,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*v,A=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const C=Math.sqrt(y),E=Math.atan2(C,m*A);p=Math.sin(p*E)/C,a=Math.sin(a*E)/C}const x=a*A;if(l=l*p+f*x,c=c*p+d*x,h=h*p+_*x,u=u*p+v*x,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-a*d,t[e+2]=c*_+h*d+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vl.copy(this).projectOnVector(t),this.sub(Vl)}reflect(t){return this.sub(Vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new I,yu=new ra;class pr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),fa.subVectors(this.max,go),br.subVectors(t.a,go),Tr.subVectors(t.b,go),wr.subVectors(t.c,go),rs.subVectors(Tr,br),os.subVectors(wr,Tr),Is.subVectors(br,wr);let e=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Is.z,Is.y,rs.z,0,-rs.x,os.z,0,-os.x,Is.z,0,-Is.x,-rs.y,rs.x,0,-os.y,os.x,0,-Is.y,Is.x,0];return!Gl(e,br,Tr,wr,fa)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,br,Tr,wr,fa))?!1:(da.crossVectors(rs,os),e=[da.x,da.y,da.z],Gl(e,br,Tr,wr,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,ua=new pr,br=new I,Tr=new I,wr=new I,rs=new I,os=new I,Is=new I,go=new I,fa=new I,da=new I,Ls=new I;function Gl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ls.fromArray(i,r);const a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=t.dot(Ls),c=e.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const x_=new pr,yo=new I,kl=new I;class po{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):x_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);const e=yo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(kl)),this.expandByPoint(yo.copy(t.center).sub(kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new I,Hl=new I,ma=new I,as=new I,Wl=new I,pa=new I,ql=new I;class nm{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hl.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),as.copy(this.origin).sub(Hl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=as.dot(this.direction),l=-as.dot(ma),c=as.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hl).addScaledVector(ma,f),d}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){Wl.subVectors(e,t),pa.subVectors(n,t),ql.crossVectors(Wl,pa);let o=this.direction.dot(ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,t);const l=a*this.direction.dot(pa.crossVectors(as,pa));if(l<0)return null;const c=a*this.direction.dot(Wl.cross(as));if(c<0||l+c>o)return null;const h=-a*as.dot(ql);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,_,v,p){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,_,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,_,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Er.setFromMatrixColumn(t,0).length(),r=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,_=c*h,v=c*u;e[0]=f+v*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,_=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(A_,t,M_)}lookAt(t,e,n){const s=this.elements;return Ni.subVectors(t,e),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),ls.crossVectors(n,Ni),ls.lengthSq()===0&&(Math.abs(n.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),ls.crossVectors(n,Ni)),ls.normalize(),_a.crossVectors(Ni,ls),s[0]=ls.x,s[4]=_a.x,s[8]=Ni.x,s[1]=ls.y,s[5]=_a.y,s[9]=Ni.y,s[2]=ls.z,s[6]=_a.z,s[10]=Ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],v=n[6],p=n[10],m=n[14],A=n[3],y=n[7],x=n[11],C=n[15],E=s[0],w=s[4],B=s[8],T=s[12],S=s[1],P=s[5],z=s[9],O=s[13],q=s[2],Z=s[6],D=s[10],J=s[14],G=s[3],it=s[7],pt=s[11],gt=s[15];return r[0]=o*E+a*S+l*q+c*G,r[4]=o*w+a*P+l*Z+c*it,r[8]=o*B+a*z+l*D+c*pt,r[12]=o*T+a*O+l*J+c*gt,r[1]=h*E+u*S+f*q+d*G,r[5]=h*w+u*P+f*Z+d*it,r[9]=h*B+u*z+f*D+d*pt,r[13]=h*T+u*O+f*J+d*gt,r[2]=_*E+v*S+p*q+m*G,r[6]=_*w+v*P+p*Z+m*it,r[10]=_*B+v*z+p*D+m*pt,r[14]=_*T+v*O+p*J+m*gt,r[3]=A*E+y*S+x*q+C*G,r[7]=A*w+y*P+x*Z+C*it,r[11]=A*B+y*z+x*D+C*pt,r[15]=A*T+y*O+x*J+C*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],v=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],v=t[13],p=t[14],m=t[15],A=u*p*c-v*f*c+v*l*d-a*p*d-u*l*m+a*f*m,y=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,x=h*v*c-_*u*c+_*a*d-o*v*d-h*a*m+o*u*m,C=_*u*l-h*v*l-_*a*f+o*v*f+h*a*p-o*u*p,E=e*A+n*y+s*x+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=A*w,t[1]=(v*f*r-u*p*r-v*s*d+n*p*d+u*s*m-n*f*m)*w,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*w,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*w,t[4]=y*w,t[5]=(h*p*r-_*f*r+_*s*d-e*p*d-h*s*m+e*f*m)*w,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*w,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*w,t[8]=x*w,t[9]=(_*u*r-h*v*r-_*n*d+e*v*d+h*n*m-e*u*m)*w,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=C*w,t[13]=(h*v*s-_*u*s+_*n*f-e*v*f-h*n*p+e*u*p)*w,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*p-e*a*p)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,v=o*h,p=o*u,m=a*u,A=l*c,y=l*h,x=l*u,C=n.x,E=n.y,w=n.z;return s[0]=(1-(v+m))*C,s[1]=(d+x)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+m))*E,s[6]=(p+A)*E,s[7]=0,s[8]=(_+y)*w,s[9]=(p-A)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Er.set(s[0],s[1],s[2]).length();const o=Er.set(s[4],s[5],s[6]).length(),a=Er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const c=1/r,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ts){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,_;if(a===ts)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ml)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ts){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let _,v;if(a===ts)_=(o+r)*u,v=-2*u;else if(a===Ml)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Er=new I,un=new Ie,A_=new I(0,0,0),M_=new I(1,1,1),ls=new I,_a=new I,Ni=new I,xu=new Ie,Au=new ra;class ns{constructor(t=0,e=0,n=0,s=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S_=0;const Mu=new I,Cr=new ra,Gn=new Ie,va=new I,xo=new I,b_=new I,T_=new ra,Su=new I(1,0,0),bu=new I(0,1,0),Tu=new I(0,0,1),wu={type:"added"},w_={type:"removed"},Rr={type:"childadded",child:null},Xl={type:"childremoved",child:null};class bi extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bi.DEFAULT_UP.clone();const t=new I,e=new ns,n=new ra,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Jt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(xo,va,this.up):Gn.lookAt(va,xo,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Gn),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(w_),Xl.child=t,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,b_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,T_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}bi.DEFAULT_UP=new I(0,1,0);bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new I,kn=new I,Yl=new I,Hn=new I,Br=new I,Pr=new I,Eu=new I,$l=new I,Jl=new I,Zl=new I,Kl=new Ue,jl=new Ue,Ql=new Ue;class yn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),kn.subVectors(n,e),Yl.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(kn),l=fn.dot(Yl),c=kn.dot(kn),h=kn.dot(Yl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Kl.setScalar(0),jl.setScalar(0),Ql.setScalar(0),Kl.fromBufferAttribute(t,e),jl.fromBufferAttribute(t,n),Ql.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kl,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(Ql,r.z),o}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),kn.subVectors(t,e),fn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),fn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Br.subVectors(s,n),Pr.subVectors(r,n),$l.subVectors(t,n);const l=Br.dot($l),c=Pr.dot($l);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,s);const h=Br.dot(Jl),u=Pr.dot(Jl);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Br,o);Zl.subVectors(t,r);const d=Br.dot(Zl),_=Pr.dot(Zl);if(_>=0&&d<=_)return e.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Pr,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return Eu.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(Eu,a);const m=1/(p+v+f);return o=v*m,a=f*m,e.copy(n).addScaledVector(Br,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},ga={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=Vh(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=rm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return me.fromWorkingColorSpace(mi.copy(this),t),Math.round(te(mi.r*255,0,255))*65536+Math.round(te(mi.g*255,0,255))*256+Math.round(te(mi.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(mi.copy(this),e);const n=mi.r,s=mi.g,r=mi.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(mi.copy(this),e),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=Te){me.fromWorkingColorSpace(mi.copy(this),t);const e=mi.r,n=mi.g,s=mi.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(ga);const n=ko(cs.h,ga.h,e),s=ko(cs.s,ga.s,e),r=ko(cs.l,ga.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mi=new Qt;Qt.NAMES=rm;let E_=0;class _r extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=ro,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=qc,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==qc&&(n.blendDst=this.blendDst),this.blendEquation!==js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new I,ya=new at;class Hi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=du,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mi(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mi(e,this.array),n=Mi(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Mi(e,this.array),n=Mi(n,this.array),s=Mi(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Mi(e,this.array),n=Mi(n,this.array),s=Mi(s,this.array),r=Mi(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==du&&(t.usage=this.usage),t}}class om extends Hi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class am extends Hi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends Hi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let C_=0;const Ji=new Ie,ec=new bi,Ir=new I,Fi=new pr,Ao=new pr,si=new I;class je extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tm(t)?am:om)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ji.makeRotationFromQuaternion(t),this.applyMatrix4(Ji),this}rotateX(t){return Ji.makeRotationX(t),this.applyMatrix4(Ji),this}rotateY(t){return Ji.makeRotationY(t),this.applyMatrix4(Ji),this}rotateZ(t){return Ji.makeRotationZ(t),this.applyMatrix4(Ji),this}translate(t,e,n){return Ji.makeTranslation(t,e,n),this.applyMatrix4(Ji),this}scale(t,e,n){return Ji.makeScale(t,e,n),this.applyMatrix4(Ji),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fi.setFromBufferAttribute(r),this.morphTargetsRelative?(si.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(si),si.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(si)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(si.addVectors(Fi.min,Ao.min),Fi.expandByPoint(si),si.addVectors(Fi.max,Ao.max),Fi.expandByPoint(si)):(Fi.expandByPoint(Ao.min),Fi.expandByPoint(Ao.max))}Fi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)si.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(si));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)si.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(t,c),si.add(Ir)),s=Math.max(s,n.distanceToSquared(si))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new I,l[B]=new I;const c=new I,h=new I,u=new I,f=new at,d=new at,_=new at,v=new I,p=new I;function m(B,T,S){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,B),d.fromBufferAttribute(r,T),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),a[B].add(v),a[T].add(v),a[S].add(v),l[B].add(p),l[T].add(p),l[S].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let B=0,T=A.length;B<T;++B){const S=A[B],P=S.start,z=S.count;for(let O=P,q=P+z;O<q;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new I,x=new I,C=new I,E=new I;function w(B){C.fromBufferAttribute(s,B),E.copy(C);const T=a[B];y.copy(T),y.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(E,T);const P=x.dot(l[B])<0?-1:1;o.setXYZW(B,y.x,y.y,y.z,P)}for(let B=0,T=A.length;B<T;++B){const S=A[B],P=S.start,z=S.count;for(let O=P,q=P+z;O<q;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)si.fromBufferAttribute(t,e),si.normalize(),t.setXYZ(e,si.x,si.y,si.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new Hi(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new Ie,Ds=new nm,xa=new po,Ru=new I,Aa=new I,Ma=new I,Sa=new I,ic=new I,ba=new I,Bu=new I,Ta=new I;class At extends bi{constructor(t=new je,e=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ic.fromBufferAttribute(u,t),o?ba.addScaledVector(ic,h):ba.addScaledVector(ic.sub(e),h))}e.add(ba)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(xa.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(xa,Ru)===null||Ds.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ds)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=o[p.materialIndex],A=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=A,C=y;x<C;x+=3){const E=a.getX(x),w=a.getX(x+1),B=a.getX(x+2);s=wa(this,m,t,n,c,h,u,E,w,B),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=_,m=v;p<m;p+=3){const A=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);s=wa(this,o,t,n,c,h,u,A,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=o[p.materialIndex],A=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=A,C=y;x<C;x+=3){const E=x,w=x+1,B=x+2;s=wa(this,m,t,n,c,h,u,E,w,B),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=_,m=v;p<m;p+=3){const A=p,y=p+1,x=p+2;s=wa(this,o,t,n,c,h,u,A,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function R_(i,t,e,n,s,r,o,a){let l;if(t.side===oi?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===is,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:i}}function wa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Aa),i.getVertexPosition(l,Ma),i.getVertexPosition(c,Sa);const h=R_(i,t,e,n,Aa,Ma,Sa,Bu);if(h){const u=new I;yn.getBarycoord(Bu,Aa,Ma,Sa,u),s&&(h.uv=yn.getInterpolatedAttribute(s,a,l,c,u,new at)),r&&(h.uv1=yn.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=yn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};yn.getNormal(Aa,Ma,Sa,f.normal),h.face=f,h.barycoord=u}return h}class gn extends je{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function _(v,p,m,A,y,x,C,E,w,B,T){const S=x/w,P=C/B,z=x/2,O=C/2,q=E/2,Z=w+1,D=B+1;let J=0,G=0;const it=new I;for(let pt=0;pt<D;pt++){const gt=pt*P-O;for(let zt=0;zt<Z;zt++){const se=zt*S-z;it[v]=se*A,it[p]=gt*y,it[m]=q,c.push(it.x,it.y,it.z),it[v]=0,it[p]=0,it[m]=E>0?1:-1,h.push(it.x,it.y,it.z),u.push(zt/w),u.push(1-pt/B),J+=1}}for(let pt=0;pt<B;pt++)for(let gt=0;gt<w;gt++){const zt=f+gt+Z*pt,se=f+gt+Z*(pt+1),K=f+(gt+1)+Z*(pt+1),ot=f+(gt+1)+Z*pt;l.push(zt,se,ot),l.push(se,K,ot),G+=6}a.addGroup(d,G,T),d+=G,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function uo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Si(i){const t={};for(let e=0;e<i.length;e++){const n=uo(i[e]);for(const s in n)t[s]=n[s]}return t}function B_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const P_={clone:uo,merge:Si};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=uo(t.uniforms),this.uniformsGroups=B_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gh extends bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ts}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new I,Pu=new at,Iu=new at;class rn extends Gh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Iu),e.subVectors(Iu,Pu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Go*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Lr=-90,Dr=1;class D_ extends bi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Lr,Dr,t,e);s.layers=this.layers,this.add(s);const r=new rn(Lr,Dr,t,e);r.layers=this.layers,this.add(r);const o=new rn(Lr,Dr,t,e);o.layers=this.layers,this.add(o);const a=new rn(Lr,Dr,t,e);a.layers=this.layers,this.add(a);const l=new rn(Lr,Dr,t,e);l.layers=this.layers,this.add(l);const c=new rn(Lr,Dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ts)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class cm extends ui{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:co,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class U_ extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:Di});r.uniforms.tEquirect.value=e;const o=new At(s,r),a=e.minFilter;return e.minFilter===ir&&(e.minFilter=Ii),new D_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class bl extends bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class N_ extends ui{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ki,h=ki,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl extends Hi{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ur=new Ie,Lu=new Ie,Ea=[],Du=new pr,F_=new Ie,Mo=new At,So=new po;class O_ extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ur),Du.copy(t.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Du)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new po),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ur),So.copy(t.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(So)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(n),t.ray.intersectsSphere(So)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ur),Lu.multiplyMatrices(n,Ur),Mo.matrixWorld=Lu,Mo.raycast(t,Ea);for(let o=0,a=Ea.length;o<a;o++){const l=Ea[o];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new N_(new Float32Array(s*this.count),s,this.count,Nh,xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const nc=new I,z_=new I,V_=new Jt;class Zs{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=nc.subVectors(n,e).cross(z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||V_.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new po,Ca=new I;class hm{constructor(t=new Zs,e=new Zs,n=new Zs,s=new Zs,r=new Zs,o=new Zs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ts){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],v=s[10],p=s[11],m=s[12],A=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,p-d,x-m).normalize(),n[1].setComponents(l+r,f+c,p+d,x+m).normalize(),n[2].setComponents(l+o,f+h,p+_,x+A).normalize(),n[3].setComponents(l-o,f-h,p-_,x-A).normalize(),n[4].setComponents(l-a,f-u,p-v,x-y).normalize(),e===ts)n[5].setComponents(l+a,f+u,p+v,x+y).normalize();else if(e===Ml)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fo extends _r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wl=new I,El=new I,Uu=new Ie,bo=new nm,Ra=new po,sc=new I,Nu=new I;class Cl extends bi{constructor(t=new je,e=new fo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wl.fromBufferAttribute(e,s-1),El.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wl.distanceTo(El);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Uu.copy(s).invert(),bo.copy(t.ray).applyMatrix4(Uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=d,p=_-1;v<p;v+=c){const m=h.getX(v),A=h.getX(v+1),y=Ba(this,t,bo,l,m,A);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(_-1),p=h.getX(d),m=Ba(this,t,bo,l,v,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=d,p=_-1;v<p;v+=c){const m=Ba(this,t,bo,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=Ba(this,t,bo,l,_-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ba(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(wl.fromBufferAttribute(o,s),El.fromBufferAttribute(o,r),e.distanceSqToSegment(wl,El,sc,Nu)>n)return;sc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(sc);if(!(l<t.near||l>t.far))return{distance:l,point:Nu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Fu=new I,Ou=new I;class zu extends Cl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Fu.fromBufferAttribute(e,s),Ou.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fu.distanceTo(Ou);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pi extends bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}class kh extends ui{constructor(t,e,n,s,r,o,a,l,c,h=oo){if(h!==oo&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oo&&(n=ar),n===void 0&&h===cr&&(n=lr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,l=new Ie;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(te(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hh extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class G_ extends Hh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Pa=new I,rc=new Wh,oc=new Wh,ac=new Wh;class um extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Pa.subVectors(s[0],s[1]).add(s[0]),c=Pa);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),rc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,v,p),oc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,v,p),ac.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,v,p)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),oc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ac.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(rc.calc(l),oc.calc(l),ac.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function k_(i,t){const e=1-i;return e*e*t}function H_(i,t){return 2*(1-i)*i*t}function W_(i,t){return i*i*t}function Ho(i,t,e,n){return k_(i,t)+H_(i,e)+W_(i,n)}function q_(i,t){const e=1-i;return e*e*e*t}function X_(i,t){const e=1-i;return 3*e*e*i*t}function Y_(i,t){return 3*(1-i)*i*i*t}function $_(i,t){return i*i*i*t}function Wo(i,t,e,n,s){return q_(i,t)+X_(i,e)+Y_(i,n)+$_(i,s)}class fm extends Fn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wo(t,s.x,r.x,o.x,a.x),Wo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class J_ extends Fn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wo(t,s.x,r.x,o.x,a.x),Wo(t,s.y,r.y,o.y,a.y),Wo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dm extends Fn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z_ extends Fn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mm extends Fn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ho(t,s.x,r.x,o.x),Ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends Fn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ho(t,s.x,r.x,o.x),Ho(t,s.y,r.y,o.y),Ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pm extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Vu(a,l.x,c.x,h.x,u.x),Vu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Gu=Object.freeze({__proto__:null,ArcCurve:G_,CatmullRomCurve3:um,CubicBezierCurve:fm,CubicBezierCurve3:J_,EllipseCurve:Hh,LineCurve:dm,LineCurve3:Z_,QuadraticBezierCurve:mm,QuadraticBezierCurve3:K_,SplineCurve:pm});class j_ extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Gu[s.type]().fromJSON(s))}return this}}class ku extends j_{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new dm(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new mm(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new fm(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Hh(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Be extends je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.segments,t.thetaStart,t.thetaLength)}}let hr=class extends ku{constructor(t){super(t),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ku().fromJSON(s))}return this}};const Q_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=_m(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=sv(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let _=e;_<s;_+=e)u=i[_],f=i[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Zo(r,o,e,a,l,d,0),o}};function _m(i,t,e,n,s){let r,o;if(s===pv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Hu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Hu(r,i[r],i[r+1],o);return o&&Il(o,o.next)&&(jo(o),o=o.next),o}function ur(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Il(e,e.next)||Ne(e.prev,e,e.next)===0)){if(jo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ev(i,n,s,r):tv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),jo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=iv(ur(i),t,e),Zo(i,t,e,n,s,r,2)):o===2&&nv(i,t,e,n,s,r):Zo(ur(i),t,e,n,s,r,1);break}}}function tv(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&eo(s,a,r,l,o,c,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ev(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ne(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Ch(d,_,t,e,n),A=Ch(v,p,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=A;){if(y.x>=d&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&eo(a,h,l,u,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&eo(a,h,l,u,c,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&eo(a,h,l,u,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=A;){if(x.x>=d&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&eo(a,h,l,u,c,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function iv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Il(s,r)&&vm(s,n,n.next,r)&&Ko(s,r)&&Ko(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),jo(n),jo(n.next),n=i=r),n=n.next}while(n!==i);return ur(n)}function nv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fv(o,a)){let l=gm(o,a);o=ur(o,o.next),l=ur(l,l.next),Zo(o,t,e,n,s,r,0),Zo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sv(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=_m(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(uv(c));for(s.sort(rv),r=0;r<s.length;r++)e=ov(s[r],e);return e}function rv(i,t){return i.x-t.x}function ov(i,t){const e=av(i,t);if(!e)return t;const n=gm(e,i);return ur(n,n.next),ur(e,e.next)}function av(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&eo(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ko(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&lv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function lv(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function cv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ch(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hv(s)}function hv(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ch(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function eo(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dv(i,t)&&(Ko(i,t)&&Ko(t,i)&&mv(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||Il(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Il(i,t){return i.x===t.x&&i.y===t.y}function vm(i,t,e,n){const s=La(Ne(i,t,e)),r=La(Ne(i,t,n)),o=La(Ne(e,n,i)),a=La(Ne(e,n,t));return!!(s!==r&&o!==a||s===0&&Ia(i,e,t)||r===0&&Ia(i,n,t)||o===0&&Ia(e,i,n)||a===0&&Ia(e,t,n))}function Ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function La(i){return i>0?1:i<0?-1:0}function dv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ko(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function mv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gm(i,t){const e=new Rh(i.i,i.x,i.y),n=new Rh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hu(i,t,e,n){const s=new Rh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class qo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wu(t),qu(n,t);let o=t.length;e.forEach(Wu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,qu(n,e[l]);const a=Q_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Li extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],_=[],v=[],p=[];for(let m=0;m<h;m++){const A=m*f-o;for(let y=0;y<c;y++){const x=y*u-r;_.push(x,-A,0),v.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const y=A+c*m,x=A+c*(m+1),C=A+1+c*(m+1),E=A+1+c*m;d.push(y,x,E),d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new He(_,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ms extends je{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new I,_=new at;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const A=m+p,y=A,x=A+n+1,C=A+n+2,E=A+1;a.push(y,x,E),a.push(x,C,E)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fr extends je{constructor(t=new hr([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const _=f.holes;qo.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=_.length;p<m;p++){const A=_[p];qo.isClockWise(A)===!0&&(_[p]=A.reverse())}const v=qo.triangulateShape(d,_);for(let p=0,m=_.length;p<m;p++){const A=_[p];d=d.concat(A)}for(let p=0,m=d.length;p<m;p++){const A=d[p];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let p=0,m=v.length;p<m;p++){const A=v[p],y=A[0]+u,x=A[1]+u,C=A[2]+u;n.push(y,x,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return _v(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new fr(n,t.curveSegments)}}function _v(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class vv extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sa,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gv extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yv extends fo{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class qh extends Gh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xv extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class oe{constructor(t){this.value=t}clone(){return new oe(this.value.clone===void 0?this.value:this.value.clone())}}function Xu(i,t,e,n){const s=Av(n);switch(e){case Yd:return i*t;case Jd:return i*t;case Zd:return i*t*2;case Nh:return i*t/s.components*s.byteLength;case Fh:return i*t/s.components*s.byteLength;case Kd:return i*t*2/s.components*s.byteLength;case Oh:return i*t*2/s.components*s.byteLength;case $d:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case zh:return i*t*4/s.components*s.byteLength;case ml:case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _l:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nh:case rh:return Math.max(i,16)*Math.max(t,8)/4;case ih:case sh:return Math.max(i,8)*Math.max(t,8)/2;case oh:case ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gl:case Sh:case bh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jd:case Th:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wh:case Eh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Av(i){switch(i){case _i:case Wd:return{byteLength:1,components:1};case $o:case qd:case na:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case ar:case Lh:case xn:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ym(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mv(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],v=u[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$v=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Sv,alphahash_pars_fragment:bv,alphamap_fragment:Tv,alphamap_pars_fragment:wv,alphatest_fragment:Ev,alphatest_pars_fragment:Cv,aomap_fragment:Rv,aomap_pars_fragment:Bv,batching_pars_vertex:Pv,batching_vertex:Iv,begin_vertex:Lv,beginnormal_vertex:Dv,bsdfs:Uv,iridescence_fragment:Nv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:Gv,color_fragment:kv,color_pars_fragment:Hv,color_pars_vertex:Wv,color_vertex:qv,common:Xv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:$v,displacementmap_pars_vertex:Jv,displacementmap_vertex:Zv,emissivemap_fragment:Kv,emissivemap_pars_fragment:jv,colorspace_fragment:Qv,colorspace_pars_fragment:tg,envmap_fragment:eg,envmap_common_pars_fragment:ig,envmap_pars_fragment:ng,envmap_pars_vertex:sg,envmap_physical_pars_fragment:pg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:fg,lights_lambert_pars_fragment:dg,lights_pars_begin:mg,lights_toon_fragment:_g,lights_toon_pars_fragment:vg,lights_phong_fragment:gg,lights_phong_pars_fragment:yg,lights_physical_fragment:xg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Mg,lights_fragment_maps:Sg,lights_fragment_end:bg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Cg,map_fragment:Rg,map_pars_fragment:Bg,map_particle_fragment:Pg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:zg,normal_fragment_begin:Vg,normal_fragment_maps:Gg,normal_pars_fragment:kg,normal_pars_vertex:Hg,normal_vertex:Wg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Jg,opaque_fragment:Zg,packing:Kg,premultiplied_alpha_fragment:jg,project_vertex:Qg,dithering_fragment:t0,dithering_pars_fragment:e0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:o0,shadowmask_pars_fragment:a0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:f0,specularmap_pars_fragment:d0,tonemapping_fragment:m0,tonemapping_pars_fragment:p0,transmission_fragment:_0,transmission_pars_fragment:v0,uv_pars_fragment:g0,uv_pars_vertex:y0,uv_vertex:x0,worldpos_vertex:A0,background_vert:M0,background_frag:S0,backgroundCube_vert:b0,backgroundCube_frag:T0,cube_vert:w0,cube_frag:E0,depth_vert:C0,depth_frag:R0,distanceRGBA_vert:B0,distanceRGBA_frag:P0,equirect_vert:I0,equirect_frag:L0,linedashed_vert:D0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:z0,meshmatcap_vert:V0,meshmatcap_frag:G0,meshnormal_vert:k0,meshnormal_frag:H0,meshphong_vert:W0,meshphong_frag:q0,meshphysical_vert:X0,meshphysical_frag:Y0,meshtoon_vert:$0,meshtoon_frag:J0,points_vert:Z0,points_frag:K0,shadow_vert:j0,shadow_frag:Q0,sprite_vert:ty,sprite_frag:ey},ct={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Ln={basic:{uniforms:Si([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Si([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Si([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Si([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Si([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Si([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Si([ct.points,ct.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Si([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Si([ct.common,ct.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Si([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Si([ct.sprite,ct.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Si([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Si([ct.lights,ct.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Ln.physical={uniforms:Si([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Da={r:0,b:0,g:0},Ns=new ns,iy=new Ie;function ny(i,t,e,n,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const C=_(y);C===null?m(a,l):C&&C.isColor&&(m(C,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,x){const C=_(x);C&&(C.isCubeTexture||C.mapping===Pl)?(h===void 0&&(h=new At(new gn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:uo(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ns.copy(x.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Ns)),h.material.toneMapped=me.getTransfer(C.colorSpace)!==be,(u!==C||f!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new At(new Li(2,2),new ei({name:"BackgroundMaterial",uniforms:uo(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(C.colorSpace)!==be,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Da,lm(i)),n.buffers.color.setClear(Da.r,Da.g,Da.b,x,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:p,dispose:A}}function sy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,P,z,O,q){let Z=!1;const D=u(O,z,P);r!==D&&(r=D,c(r.object)),Z=d(S,O,z,q),Z&&_(S,O,z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(S,P,z,O),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,z){const O=z.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let Z=q[P.id];Z===void 0&&(Z={},q[P.id]=Z);let D=Z[O];return D===void 0&&(D=f(l()),Z[O]=D),D}function f(S){const P=[],z=[],O=[];for(let q=0;q<e;q++)P[q]=0,z[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function d(S,P,z,O){const q=r.attributes,Z=P.attributes;let D=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){const pt=q[G];let gt=Z[G];if(gt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),pt===void 0||pt.attribute!==gt||gt&&pt.data!==gt.data)return!0;D++}return r.attributesNum!==D||r.index!==O}function _(S,P,z,O){const q={},Z=P.attributes;let D=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){let pt=Z[G];pt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));const gt={};gt.attribute=pt,pt&&pt.data&&(gt.data=pt.data),q[G]=gt,D++}r.attributes=q,r.attributesNum=D,r.index=O}function v(){const S=r.newAttributes;for(let P=0,z=S.length;P<z;P++)S[P]=0}function p(S){m(S,0)}function m(S,P){const z=r.newAttributes,O=r.enabledAttributes,q=r.attributeDivisors;z[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),q[S]!==P&&(i.vertexAttribDivisor(S,P),q[S]=P)}function A(){const S=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==S[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function y(S,P,z,O,q,Z,D){D===!0?i.vertexAttribIPointer(S,P,z,q,Z):i.vertexAttribPointer(S,P,z,O,q,Z)}function x(S,P,z,O){v();const q=O.attributes,Z=z.getAttributes(),D=P.defaultAttributeValues;for(const J in Z){const G=Z[J];if(G.location>=0){let it=q[J];if(it===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const pt=it.normalized,gt=it.itemSize,zt=t.get(it);if(zt===void 0)continue;const se=zt.buffer,K=zt.type,ot=zt.bytesPerElement,bt=K===i.INT||K===i.UNSIGNED_INT||it.gpuType===Lh;if(it.isInterleavedBufferAttribute){const ht=it.data,Dt=ht.stride,Vt=it.offset;if(ht.isInstancedInterleavedBuffer){for(let Zt=0;Zt<G.locationSize;Zt++)m(G.location+Zt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Zt=0;Zt<G.locationSize;Zt++)p(G.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Zt=0;Zt<G.locationSize;Zt++)y(G.location+Zt,gt/G.locationSize,K,pt,Dt*ot,(Vt+gt/G.locationSize*Zt)*ot,bt)}else{if(it.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht,it.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ht=0;ht<G.locationSize;ht++)p(G.location+ht);i.bindBuffer(i.ARRAY_BUFFER,se);for(let ht=0;ht<G.locationSize;ht++)y(G.location+ht,gt/G.locationSize,K,pt,gt*ot,gt/G.locationSize*ht*ot,bt)}}else if(D!==void 0){const pt=D[J];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}A()}function C(){B();for(const S in n){const P=n[S];for(const z in P){const O=P[z];for(const q in O)h(O[q].object),delete O[q];delete P[z]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const z in P){const O=P[z];for(const q in O)h(O[q].object),delete O[q];delete P[z]}delete n[S.id]}function w(S){for(const P in n){const z=n[P];if(z[S.id]===void 0)continue;const O=z[S.id];for(const q in O)h(O[q].object),delete O[q];delete z[S.id]}}function B(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:A}}function ry(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==An&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const B=w===na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==_i&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xn&&!B)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function ay(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Zs,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const A=r?0:n,y=A*4;let x=m.clippingState||null;l.value=x,x=h(_,f,y,d);for(let C=0;C!==y;++C)x[C]=e[C];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=d+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=d;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(A,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function ly(i){let t=new WeakMap;function e(o,a){return a===jc?o.mapping=co:a===Qc&&(o.mapping=ho),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jc||a===Qc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new U_(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const io=4,Yu=[.125,.215,.35,.446,.526,.582],Qs=20,lc=new qh,$u=new Qt;let cc=null,hc=0,uc=0,fc=!1;const Ks=(1+Math.sqrt(5))/2,Nr=1/Ks,Ju=[new I(-Ks,Nr,0),new I(Ks,Nr,0),new I(-Nr,0,Ks),new I(Nr,0,Ks),new I(0,Ks,-Nr),new I(0,Ks,Nr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Zu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=fc,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===co||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:na,format:An,colorSpace:ws,depthBuffer:!1},s=Ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(r)),this._blurMaterial=hy(r,t,e)}return s}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($u),h.toneMapping=bs,h.autoClear=!1;const d=new Wt({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),_=new At(new gn,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy($u),v=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Ua(s,A*y,m>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===co||t.mapping===ho;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ju[(s-r-1)%Ju.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qs-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Qs;p>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qs}`);const m=[];let A=0;for(let w=0;w<Qs;++w){const B=w/v,T=Math.exp(-B*B/2);m.push(T),w===0?A+=T:w<p&&(A+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const x=this._sizeLods[s],C=3*x*(s>y-io?s-y+io:0),E=4*(this._cubeSize-x);Ua(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(u,lc)}}function cy(i){const t=[],e=[],n=[];let s=i;const r=i-io+1+Yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-io?l=Yu[o-i+io-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,v=3,p=2,m=1,A=new Float32Array(v*_*d),y=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,B=E>2?0:-1,T=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];A.set(T,v*_*E),y.set(f,p*_*E);const S=[E,E,E,E,E,E];x.set(S,m*_*E)}const C=new je;C.setAttribute("position",new Hi(A,v)),C.setAttribute("uv",new Hi(y,p)),C.setAttribute("faceIndex",new Hi(x,m)),t.push(C),s>io&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ku(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hy(i,t,e){const n=new Float32Array(Qs),s=new I(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ju(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Qu(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===jc||l===Qc,h=l===co||l===ho;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Zu(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Zu(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function fy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dy(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,_=u.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let y=0,x=A.length;y<x;y+=3){const C=A[y+0],E=A[y+1],w=A[y+2];f.push(C,E,E,w,w,C)}}else if(_!==void 0){const A=_.array;v=_.version;for(let y=0,x=A.length/3-1;y<x;y+=3){const C=y+0,E=y+1,w=y+2;f.push(C,E,E,w,w,C)}}else return;const p=new(tm(f)?am:om)(f,1);p.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function my(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function u(f,d,_,v){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,_);let m=0;for(let A=0;A<_;A++)m+=d[A]*v[A];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function py(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _y(i,t,e){const n=new WeakMap,s=new Ue;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let C=a.attributes.position.count*x,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*E*4*u),B=new im(w,C,E,u);B.type=xn,B.needsUpdate=!0;const T=x*4;for(let P=0;P<u;P++){const z=m[P],O=A[P],q=y[P],Z=C*E*4*P;for(let D=0;D<z.count;D++){const J=D*T;_===!0&&(s.fromBufferAttribute(z,D),w[Z+J+0]=s.x,w[Z+J+1]=s.y,w[Z+J+2]=s.z,w[Z+J+3]=0),v===!0&&(s.fromBufferAttribute(O,D),w[Z+J+4]=s.x,w[Z+J+5]=s.y,w[Z+J+6]=s.z,w[Z+J+7]=0),p===!0&&(s.fromBufferAttribute(q,D),w[Z+J+8]=s.x,w[Z+J+9]=s.y,w[Z+J+10]=s.z,w[Z+J+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:B,size:new at(C,E)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vy(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const xm=new ui,tf=new kh(1,1),Am=new im,Mm=new y_,Sm=new cm,ef=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),of=new Float32Array(4);function _o(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ii(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ni(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ll(i,t){let e=nf[t];e===void 0&&(e=new Int32Array(t),nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;i.uniform2fv(this.addr,t),ni(e,t)}}function xy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ii(e,t))return;i.uniform3fv(this.addr,t),ni(e,t)}}function Ay(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;i.uniform4fv(this.addr,t),ni(e,t)}}function My(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ii(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ni(e,t)}else{if(ii(e,n))return;of.set(n),i.uniformMatrix2fv(this.addr,!1,of),ni(e,n)}}function Sy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ii(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ni(e,t)}else{if(ii(e,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),ni(e,n)}}function by(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ii(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ni(e,t)}else{if(ii(e,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),ni(e,n)}}function Ty(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;i.uniform2iv(this.addr,t),ni(e,t)}}function Ey(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ii(e,t))return;i.uniform3iv(this.addr,t),ni(e,t)}}function Cy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;i.uniform4iv(this.addr,t),ni(e,t)}}function Ry(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function By(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;i.uniform2uiv(this.addr,t),ni(e,t)}}function Py(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ii(e,t))return;i.uniform3uiv(this.addr,t),ni(e,t)}}function Iy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;i.uniform4uiv(this.addr,t),ni(e,t)}}function Ly(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tf.compareFunction=Qd,r=tf):r=xm,e.setTexture2D(t||r,s)}function Dy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mm,s)}function Uy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sm,s)}function Ny(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Am,s)}function Fy(i){switch(i){case 5126:return gy;case 35664:return yy;case 35665:return xy;case 35666:return Ay;case 35674:return My;case 35675:return Sy;case 35676:return by;case 5124:case 35670:return Ty;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return By;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(i,t){i.uniform1fv(this.addr,t)}function zy(i,t){const e=_o(t,this.size,2);i.uniform2fv(this.addr,e)}function Vy(i,t){const e=_o(t,this.size,3);i.uniform3fv(this.addr,e)}function Gy(i,t){const e=_o(t,this.size,4);i.uniform4fv(this.addr,e)}function ky(i,t){const e=_o(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hy(i,t){const e=_o(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wy(i,t){const e=_o(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qy(i,t){i.uniform1iv(this.addr,t)}function Xy(i,t){i.uniform2iv(this.addr,t)}function Yy(i,t){i.uniform3iv(this.addr,t)}function $y(i,t){i.uniform4iv(this.addr,t)}function Jy(i,t){i.uniform1uiv(this.addr,t)}function Zy(i,t){i.uniform2uiv(this.addr,t)}function Ky(i,t){i.uniform3uiv(this.addr,t)}function jy(i,t){i.uniform4uiv(this.addr,t)}function Qy(i,t,e){const n=this.cache,s=t.length,r=Ll(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),ni(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xm,r[o])}function tx(i,t,e){const n=this.cache,s=t.length,r=Ll(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),ni(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mm,r[o])}function ex(i,t,e){const n=this.cache,s=t.length,r=Ll(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),ni(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sm,r[o])}function ix(i,t,e){const n=this.cache,s=t.length,r=Ll(e,s);ii(n,r)||(i.uniform1iv(this.addr,r),ni(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Am,r[o])}function nx(i){switch(i){case 5126:return Oy;case 35664:return zy;case 35665:return Vy;case 35666:return Gy;case 35674:return ky;case 35675:return Hy;case 35676:return Wy;case 5124:case 35670:return qy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return $y;case 5125:return Jy;case 36294:return Zy;case 36295:return Ky;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return ix}}class sx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fy(e.type)}}class rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nx(e.type)}}class ox{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function af(i,t){i.seq.push(t),i.map[t.id]=t}function ax(i,t,e){const n=i.name,s=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),o=dc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){af(e,c===void 0?new sx(a,i,t):new rx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ox(a),af(e,u)),e=u}}}class yl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ax(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lx=37297;let cx=0;function hx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const cf=new Jt;function ux(i){me._getMatrix(cf,me.workingColorSpace,i);const t=`mat3( ${cf.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Al:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hx(i.getShaderSource(t),o)}else return s}function fx(i,t){const e=ux(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dx(i,t){let e;switch(t){case Bp:e="Linear";break;case Pp:e="Reinhard";break;case Ip:e="Cineon";break;case Lp:e="ACESFilmic";break;case Up:e="AgX";break;case Np:e="Neutral";break;case Dp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Na=new I;function mx(){me.getLuminanceCoefficients(Na);const i=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function _x(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zo(i){return i!==""}function uf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ff(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(i){return i.replace(gx,xx)}const yx=new Map;function xx(i,t){let e=jt[t];if(e===void 0){const n=yx.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bh(e)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(Ax,Mx)}function Mx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function bx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case co:case ho:t="ENVMAP_TYPE_CUBE";break;case Pl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ho:t="ENVMAP_MODE_REFRACTION";break}return t}function wx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kd:t="ENVMAP_BLENDING_MULTIPLY";break;case Cp:t="ENVMAP_BLENDING_MIX";break;case Rp:t="ENVMAP_BLENDING_ADD";break}return t}function Ex(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Sx(e),c=bx(e),h=Tx(e),u=wx(e),f=Ex(e),d=px(e),_=_x(r),v=s.createProgram();let p,m,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zo).join(`
`),m.length>0&&(m+=`
`)):(p=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),m=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bs?"#define TONE_MAPPING":"",e.toneMapping!==bs?jt.tonemapping_pars_fragment:"",e.toneMapping!==bs?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zo).join(`
`)),o=Bh(o),o=uf(o,e),o=ff(o,e),a=Bh(a),a=uf(a,e),a=ff(a,e),o=df(o),a=df(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=A+p+o,x=A+m+a,C=lf(s,s.VERTEX_SHADER,y),E=lf(s,s.FRAGMENT_SHADER,x);s.attachShader(v,C),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(C).trim(),q=s.getShaderInfoLog(E).trim();let Z=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,E);else{const J=hf(s,C,"vertex"),G=hf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||q==="")&&(D=!1);D&&(P.diagnostics={runnable:Z,programLog:z,vertexShader:{log:O,prefix:p},fragmentShader:{log:q,prefix:m}})}s.deleteShader(C),s.deleteShader(E),B=new yl(s,v),T=vx(s,v)}let B;this.getUniforms=function(){return B===void 0&&w(this),B};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,lx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let Rx=0;class Bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Px(t),e.set(t,n)),n}}class Px{constructor(t){this.id=Rx++,this.code=t,this.usedTimes=0}}function Ix(i,t,e,n,s,r,o){const a=new sm,l=new Bx,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,S,P,z,O){const q=z.fog,Z=O.geometry,D=T.isMeshStandardMaterial?z.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||D),G=J&&J.mapping===Pl?J.image.height:null,it=_[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=pt!==void 0?pt.length:0;let zt=0;Z.morphAttributes.position!==void 0&&(zt=1),Z.morphAttributes.normal!==void 0&&(zt=2),Z.morphAttributes.color!==void 0&&(zt=3);let se,K,ot,bt;if(it){const Ae=Ln[it];se=Ae.vertexShader,K=Ae.fragmentShader}else se=T.vertexShader,K=T.fragmentShader,l.update(T),ot=l.getVertexShaderID(T),bt=l.getFragmentShaderID(T);const ht=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Vt=O.isInstancedMesh===!0,Zt=O.isBatchedMesh===!0,ve=!!T.map,he=!!T.matcap,ke=!!J,L=!!T.aoMap,Xi=!!T.lightMap,ae=!!T.bumpMap,le=!!T.normalMap,Rt=!!T.displacementMap,Re=!!T.emissiveMap,Bt=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,k=T.clearcoat>0,Q=T.dispersion>0,et=T.iridescence>0,j=T.sheen>0,Et=T.transmission>0,mt=M&&!!T.anisotropyMap,xt=k&&!!T.clearcoatMap,ue=k&&!!T.clearcoatNormalMap,lt=k&&!!T.clearcoatRoughnessMap,Mt=et&&!!T.iridescenceMap,Ut=et&&!!T.iridescenceThicknessMap,Gt=j&&!!T.sheenColorMap,St=j&&!!T.sheenRoughnessMap,ce=!!T.specularMap,Kt=!!T.specularColorMap,Ce=!!T.specularIntensityMap,U=Et&&!!T.transmissionMap,ft=Et&&!!T.thicknessMap,Y=!!T.gradientMap,tt=!!T.alphaMap,vt=T.alphaTest>0,_t=!!T.alphaHash,$t=!!T.extensions;let Oe=bs;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const fi={shaderID:it,shaderType:T.type,shaderName:T.name,vertexShader:se,fragmentShader:K,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:bt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Zt,batchingColor:Zt&&O._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&O.instanceColor!==null,instancingMorph:Vt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ws,alphaToCoverage:!!T.alphaToCoverage,map:ve,matcap:he,envMap:ke,envMapMode:ke&&J.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:Xi,bumpMap:ae,normalMap:le,displacementMap:f&&Rt,emissiveMap:Re,normalMapObjectSpace:le&&T.normalMapType===Vp,normalMapTangentSpace:le&&T.normalMapType===zp,metalnessMap:Bt,roughnessMap:R,anisotropy:M,anisotropyMap:mt,clearcoat:k,clearcoatMap:xt,clearcoatNormalMap:ue,clearcoatRoughnessMap:lt,dispersion:Q,iridescence:et,iridescenceMap:Mt,iridescenceThicknessMap:Ut,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:St,specularMap:ce,specularColorMap:Kt,specularIntensityMap:Ce,transmission:Et,transmissionMap:U,thicknessMap:ft,gradientMap:Y,opaque:T.transparent===!1&&T.blending===ro&&T.alphaToCoverage===!1,alphaMap:tt,alphaTest:vt,alphaHash:_t,combine:T.combine,mapUv:ve&&v(T.map.channel),aoMapUv:L&&v(T.aoMap.channel),lightMapUv:Xi&&v(T.lightMap.channel),bumpMapUv:ae&&v(T.bumpMap.channel),normalMapUv:le&&v(T.normalMap.channel),displacementMapUv:Rt&&v(T.displacementMap.channel),emissiveMapUv:Re&&v(T.emissiveMap.channel),metalnessMapUv:Bt&&v(T.metalnessMap.channel),roughnessMapUv:R&&v(T.roughnessMap.channel),anisotropyMapUv:mt&&v(T.anisotropyMap.channel),clearcoatMapUv:xt&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(T.sheenRoughnessMap.channel),specularMapUv:ce&&v(T.specularMap.channel),specularColorMapUv:Kt&&v(T.specularColorMap.channel),specularIntensityMapUv:Ce&&v(T.specularIntensityMap.channel),transmissionMapUv:U&&v(T.transmissionMap.channel),thicknessMapUv:ft&&v(T.thicknessMap.channel),alphaMapUv:tt&&v(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(le||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(ve||tt),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ve&&T.map.isVideoTexture===!0&&me.getTransfer(T.map.colorSpace)===be,decodeVideoTextureEmissive:Re&&T.emissiveMap.isVideoTexture===!0&&me.getTransfer(T.emissiveMap.colorSpace)===be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===we,flipSided:T.side===oi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$t&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&T.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return fi.vertexUv1s=c.has(1),fi.vertexUv2s=c.has(2),fi.vertexUv3s=c.has(3),c.clear(),fi}function m(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(A(S,T),y(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function A(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=_[T.type];let P;if(S){const z=Ln[S];P=P_.clone(z.uniforms)}else P=T.uniforms;return P}function C(T,S){let P;for(let z=0,O=h.length;z<O;z++){const q=h[z];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Cx(i,S,T,r),h.push(P)),P}function E(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function w(T){l.remove(T)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:B}}function Lx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _f(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,_,v,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function a(u,f,d,_,v,p){const m=o(u,f,d,_,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,_,v,p){const m=o(u,f,d,_,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||Dx),n.length>1&&n.sort(f||pf),s.length>1&&s.sort(f||pf)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ux(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _f,i.set(n,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Fx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ox=0;function zx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vx(i){const t=new Nx,e=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Ie,o=new Ie;function a(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,_=0,v=0,p=0,m=0,A=0,y=0,x=0,C=0,E=0,w=0;c.sort(zx);for(let T=0,S=c.length;T<S;T++){const P=c[T],z=P.color,O=P.intensity,q=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,u+=z.g*O,f+=z.b*O;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],O);w++}else if(P.isDirectionalLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=P.shadow.matrix,A++}n.directional[d]=D,d++}else if(P.isSpotLight){const D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(z).multiplyScalar(O),D.distance=q,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[v]=D;const J=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Z,x++}v++}else if(P.isRectAreaLight){const D=t.get(P);D.color.copy(z).multiplyScalar(O),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=D,p++}else if(P.isPointLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const J=P.shadow,G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=D,_++}else if(P.isHemisphereLight){const D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(O),D.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[m]=D,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const B=n.hash;(B.directionalLength!==d||B.pointLength!==_||B.spotLength!==v||B.rectAreaLength!==p||B.hemiLength!==m||B.numDirectionalShadows!==A||B.numPointShadows!==y||B.numSpotShadows!==x||B.numSpotMaps!==C||B.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,B.directionalLength=d,B.pointLength=_,B.spotLength=v,B.rectAreaLength=p,B.hemiLength=m,B.numDirectionalShadows=A,B.numPointShadows=y,B.numSpotShadows=x,B.numSpotMaps=C,B.numLightProbes=w,n.version=Ox++)}function l(c,h){let u=0,f=0,d=0,_=0,v=0;const p=h.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const y=c[m];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function vf(i){const t=new Vx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new vf(i),t.set(s,[a])):r>=o.length?(a=new vf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wx(i,t,e){let n=new hm;const s=new at,r=new at,o=new Ue,a=new vv({depthPacking:Op}),l=new gv,c={},h=e.maxTextureSize,u={[is]:oi,[oi]:is,[we]:we},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new je;_.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let m=this.type;this.render=function(E,w,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Di),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=m!==jn&&this.type===jn,q=m===jn&&this.type!==jn;for(let Z=0,D=E.length;Z<D;Z++){const J=E[Z],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||O===!0||q===!0){const gt=this.type!==jn?{minFilter:ki,magFilter:ki}:{};G.map!==null&&G.map.dispose(),G.map=new vi(s.x,s.y,gt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const pt=G.getViewportCount();for(let gt=0;gt<pt;gt++){const zt=G.getViewport(gt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),z.viewport(o),G.updateMatrices(J,gt),n=G.getFrustum(),x(w,B,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===jn&&A(G,B),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,S,P)};function A(E,w){const B=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,B,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,B,d,v,null)}function y(E,w,B,T){let S=null;const P=B.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=B.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=S.uuid,O=w.uuid;let q=c[z];q===void 0&&(q={},c[z]=q);let Z=q[O];Z===void 0&&(Z=S.clone(),q[O]=Z,w.addEventListener("dispose",C)),S=Z}if(S.visible=w.visible,S.wireframe=w.wireframe,T===jn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=B}return S}function x(E,w,B,T,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===jn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld);const O=t.update(E),q=E.material;if(Array.isArray(q)){const Z=O.groups;for(let D=0,J=Z.length;D<J;D++){const G=Z[D],it=q[G.materialIndex];if(it&&it.visible){const pt=y(E,it,T,S);E.onBeforeShadow(i,E,w,B,O,pt,G),i.renderBufferDirect(B,null,O,pt,E,G),E.onAfterShadow(i,E,w,B,O,pt,G)}}}else if(q.visible){const Z=y(E,q,T,S);E.onBeforeShadow(i,E,w,B,O,Z,null),i.renderBufferDirect(B,null,O,Z,E,null),E.onAfterShadow(i,E,w,B,O,Z,null)}}const z=E.children;for(let O=0,q=z.length;O<q;O++)x(z[O],w,B,T,S)}function C(E){E.target.removeEventListener("dispose",C);for(const B in c){const T=c[B],S=E.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const qx={[Xc]:xl,[Yc]:Zc,[$c]:Kc,[lo]:Jc,[xl]:Xc,[Zc]:Yc,[Kc]:$c,[Jc]:lo};function Xx(i,t){function e(){let U=!1;const ft=new Ue;let Y=null;const tt=new Ue(0,0,0,0);return{setMask:function(vt){Y!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){U=vt},setClear:function(vt,_t,$t,Oe,fi){fi===!0&&(vt*=Oe,_t*=Oe,$t*=Oe),ft.set(vt,_t,$t,Oe),tt.equals(ft)===!1&&(i.clearColor(vt,_t,$t,Oe),tt.copy(ft))},reset:function(){U=!1,Y=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,Y=null,tt=null,vt=null;return{setReversed:function(_t){if(ft!==_t){const $t=t.get("EXT_clip_control");ft?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Oe=vt;vt=null,this.setClear(Oe)}ft=_t},getReversed:function(){return ft},setTest:function(_t){_t?ht(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(_t){Y!==_t&&!U&&(i.depthMask(_t),Y=_t)},setFunc:function(_t){if(ft&&(_t=qx[_t]),tt!==_t){switch(_t){case Xc:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=_t}},setLocked:function(_t){U=_t},setClear:function(_t){vt!==_t&&(ft&&(_t=1-_t),i.clearDepth(_t),vt=_t)},reset:function(){U=!1,Y=null,tt=null,vt=null,ft=!1}}}function s(){let U=!1,ft=null,Y=null,tt=null,vt=null,_t=null,$t=null,Oe=null,fi=null;return{setTest:function(Ae){U||(Ae?ht(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Ae){ft!==Ae&&!U&&(i.stencilMask(Ae),ft=Ae)},setFunc:function(Ae,ln,On){(Y!==Ae||tt!==ln||vt!==On)&&(i.stencilFunc(Ae,ln,On),Y=Ae,tt=ln,vt=On)},setOp:function(Ae,ln,On){(_t!==Ae||$t!==ln||Oe!==On)&&(i.stencilOp(Ae,ln,On),_t=Ae,$t=ln,Oe=On)},setLocked:function(Ae){U=Ae},setClear:function(Ae){fi!==Ae&&(i.clearStencil(Ae),fi=Ae)},reset:function(){U=!1,ft=null,Y=null,tt=null,vt=null,_t=null,$t=null,Oe=null,fi=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,v=!1,p=null,m=null,A=null,y=null,x=null,C=null,E=null,w=new Qt(0,0,0),B=0,T=!1,S=null,P=null,z=null,O=null,q=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=J>=2);let it=null,pt={};const gt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),se=new Ue().fromArray(gt),K=new Ue().fromArray(zt);function ot(U,ft,Y,tt){const vt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(U,_t),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Y;$t++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ft+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return _t}const bt={};bt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(lo),ae(!1),le(cu),ht(i.CULL_FACE),L(Di);function ht(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Dt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Vt(U,ft){return u[U]!==ft?(i.bindFramebuffer(U,ft),u[U]=ft,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Zt(U,ft){let Y=d,tt=!1;if(U){Y=f.get(ft),Y===void 0&&(Y=[],f.set(ft,Y));const vt=U.textures;if(Y.length!==vt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,$t=vt.length;_t<$t;_t++)Y[_t]=i.COLOR_ATTACHMENT0+_t;Y.length=vt.length,tt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Y)}function ve(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const he={[js]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[fp]:i.FUNC_REVERSE_SUBTRACT};he[dp]=i.MIN,he[mp]=i.MAX;const ke={[pp]:i.ZERO,[_p]:i.ONE,[vp]:i.SRC_COLOR,[Wc]:i.SRC_ALPHA,[Sp]:i.SRC_ALPHA_SATURATE,[Ap]:i.DST_COLOR,[yp]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[Mp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[bp]:i.CONSTANT_COLOR,[Tp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ep]:i.ONE_MINUS_CONSTANT_ALPHA};function L(U,ft,Y,tt,vt,_t,$t,Oe,fi,Ae){if(U===Di){v===!0&&(Dt(i.BLEND),v=!1);return}if(v===!1&&(ht(i.BLEND),v=!0),U!==hp){if(U!==p||Ae!==T){if((m!==js||x!==js)&&(i.blendEquation(i.FUNC_ADD),m=js,x=js),Ae)switch(U){case ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,y=null,C=null,E=null,w.set(0,0,0),B=0,p=U,T=Ae}return}vt=vt||ft,_t=_t||Y,$t=$t||tt,(ft!==m||vt!==x)&&(i.blendEquationSeparate(he[ft],he[vt]),m=ft,x=vt),(Y!==A||tt!==y||_t!==C||$t!==E)&&(i.blendFuncSeparate(ke[Y],ke[tt],ke[_t],ke[$t]),A=Y,y=tt,C=_t,E=$t),(Oe.equals(w)===!1||fi!==B)&&(i.blendColor(Oe.r,Oe.g,Oe.b,fi),w.copy(Oe),B=fi),p=U,T=!1}function Xi(U,ft){U.side===we?Dt(i.CULL_FACE):ht(i.CULL_FACE);let Y=U.side===oi;ft&&(Y=!Y),ae(Y),U.blending===ro&&U.transparent===!1?L(Di):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function le(U){U!==ap?(ht(i.CULL_FACE),U!==P&&(U===cu?i.cullFace(i.BACK):U===lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),P=U}function Rt(U){U!==z&&(D&&i.lineWidth(U),z=U)}function Re(U,ft,Y){U?(ht(i.POLYGON_OFFSET_FILL),(O!==ft||q!==Y)&&(i.polygonOffset(ft,Y),O=ft,q=Y)):Dt(i.POLYGON_OFFSET_FILL)}function Bt(U){U?ht(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+Z-1),it!==U&&(i.activeTexture(U),it=U)}function M(U,ft,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+Z-1:Y=it);let tt=pt[Y];tt===void 0&&(tt={type:void 0,texture:void 0},pt[Y]=tt),(tt.type!==U||tt.texture!==ft)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(U,ft||bt[U]),tt.type=U,tt.texture=ft)}function k(){const U=pt[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(U){se.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function St(U){K.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function ce(U,ft){let Y=c.get(ft);Y===void 0&&(Y=new WeakMap,c.set(ft,Y));let tt=Y.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(ft,U.name),Y.set(U,tt))}function Kt(U,ft){const tt=c.get(ft).get(U);l.get(ft)!==tt&&(i.uniformBlockBinding(ft,tt,U.__bindingPointIndex),l.set(ft,tt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,pt={},u={},f=new WeakMap,d=[],_=null,v=!1,p=null,m=null,A=null,y=null,x=null,C=null,E=null,w=new Qt(0,0,0),B=0,T=!1,S=null,P=null,z=null,O=null,q=null,se.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Dt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:ve,setBlending:L,setMaterial:Xi,setFlipSided:ae,setCullFace:le,setLineWidth:Rt,setPolygonOffset:Re,setScissorTest:Bt,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:Mt,texImage3D:Ut,updateUBOMapping:ce,uniformBlockBinding:Kt,texStorage2D:ue,texStorage3D:lt,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:mt,compressedTexSubImage3D:xt,scissor:Gt,viewport:St,reset:Ce}}function Yx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return d?new OffscreenCanvas(R,M):Sl("canvas")}function v(R,M,k){let Q=1;const et=Bt(R);if((et.width>k||et.height>k)&&(Q=k/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Q*et.width),Et=Math.floor(Q*et.height);u===void 0&&(u=_(j,Et));const mt=M?_(j,Et):u;return mt.width=j,mt.height=Et,mt.getContext("2d").drawImage(R,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Et+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,M,k,Q,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=M;if(M===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),M===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),M===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Et=et?Al:me.getTransfer(Q);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Et===be?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,M){let k;return R?M===null||M===ar||M===lr?k=i.DEPTH24_STENCIL8:M===xn?k=i.DEPTH32F_STENCIL8:M===$o&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ar||M===lr?k=i.DEPTH_COMPONENT24:M===xn?k=i.DEPTH_COMPONENT32F:M===$o&&(k=i.DEPTH_COMPONENT16),k}function C(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ki&&R.minFilter!==Ii?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){const M=R.target;M.removeEventListener("dispose",E),B(M),M.isVideoTexture&&h.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),S(M)}function B(R){const M=n.get(R);if(M.__webglInit===void 0)return;const k=R.source,Q=f.get(k);if(Q){const et=Q[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(R),Object.keys(Q).length===0&&f.delete(k)}n.remove(R)}function T(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const k=R.source,Q=f.get(k);delete Q[M.__cacheKey],o.memory.textures--}function S(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let et=0;et<M.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(M.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let Q=0,et=k.length;Q<et;Q++){const j=n.get(k[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[Q])}n.remove(R)}let P=0;function z(){P=0}function O(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function q(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Z(R,M){const k=n.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,R,M);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function D(R,M){const k=n.get(R);if(R.version>0&&k.__version!==R.version){K(k,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function J(R,M){const k=n.get(R);if(R.version>0&&k.__version!==R.version){K(k,R,M);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function G(R,M){const k=n.get(R);if(R.version>0&&k.__version!==R.version){ot(k,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}const it={[th]:i.REPEAT,[er]:i.CLAMP_TO_EDGE,[eh]:i.MIRRORED_REPEAT},pt={[ki]:i.NEAREST,[Fp]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[Fl]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},gt={[Gp]:i.NEVER,[Yp]:i.ALWAYS,[kp]:i.LESS,[Qd]:i.LEQUAL,[Hp]:i.EQUAL,[Xp]:i.GEQUAL,[Wp]:i.GREATER,[qp]:i.NOTEQUAL};function zt(R,M){if(M.type===xn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ii||M.magFilter===Fl||M.magFilter===ha||M.magFilter===ir||M.minFilter===Ii||M.minFilter===Fl||M.minFilter===ha||M.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,it[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,it[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,it[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ki||M.minFilter!==ha&&M.minFilter!==ir||M.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function se(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const Q=M.source;let et=f.get(Q);et===void 0&&(et={},f.set(Q,et));const j=q(M);if(j!==R.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[j].usedTimes++;const Et=et[R.__cacheKey];Et!==void 0&&(et[R.__cacheKey].usedTimes--,Et.usedTimes===0&&T(M)),R.__cacheKey=j,R.__webglTexture=et[j].texture}return k}function K(R,M,k){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const et=se(R,M),j=M.source;e.bindTexture(Q,R.__webglTexture,i.TEXTURE0+k);const Et=n.get(j);if(j.version!==Et.__version||et===!0){e.activeTexture(i.TEXTURE0+k);const mt=me.getPrimaries(me.workingColorSpace),xt=M.colorSpace===Dn?null:me.getPrimaries(M.colorSpace),ue=M.colorSpace===Dn||mt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let lt=v(M.image,!1,s.maxTextureSize);lt=Re(M,lt);const Mt=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type);let Gt=y(M.internalFormat,Mt,Ut,M.colorSpace,M.isVideoTexture);zt(Q,M);let St;const ce=M.mipmaps,Kt=M.isVideoTexture!==!0,Ce=Et.__version===void 0||et===!0,U=j.dataReady,ft=C(M,lt);if(M.isDepthTexture)Gt=x(M.format===cr,M.type),Ce&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Gt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Mt,Ut,null));else if(M.isDataTexture)if(ce.length>0){Kt&&Ce&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,ce[0].width,ce[0].height);for(let Y=0,tt=ce.length;Y<tt;Y++)St=ce[Y],Kt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(i.TEXTURE_2D,Y,Gt,St.width,St.height,0,Mt,Ut,St.data);M.generateMipmaps=!1}else Kt?(Ce&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,lt.width,lt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Ut,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Mt,Ut,lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Kt&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Gt,ce[0].width,ce[0].height,lt.depth);for(let Y=0,tt=ce.length;Y<tt;Y++)if(St=ce[Y],M.format!==An)if(Mt!==null)if(Kt){if(U)if(M.layerUpdates.size>0){const vt=Xu(St.width,St.height,M.format,M.type);for(const _t of M.layerUpdates){const $t=St.data.subarray(_t*vt/St.data.BYTES_PER_ELEMENT,(_t+1)*vt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,_t,St.width,St.height,1,Mt,$t)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,St.width,St.height,lt.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Gt,St.width,St.height,lt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,St.width,St.height,lt.depth,Mt,Ut,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Gt,St.width,St.height,lt.depth,0,Mt,Ut,St.data)}else{Kt&&Ce&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,ce[0].width,ce[0].height);for(let Y=0,tt=ce.length;Y<tt;Y++)St=ce[Y],M.format!==An?Mt!==null?Kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Gt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(i.TEXTURE_2D,Y,Gt,St.width,St.height,0,Mt,Ut,St.data)}else if(M.isDataArrayTexture)if(Kt){if(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Gt,lt.width,lt.height,lt.depth),U)if(M.layerUpdates.size>0){const Y=Xu(lt.width,lt.height,M.format,M.type);for(const tt of M.layerUpdates){const vt=lt.data.subarray(tt*Y/lt.data.BYTES_PER_ELEMENT,(tt+1)*Y/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,Mt,Ut,vt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Ut,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,lt.width,lt.height,lt.depth,0,Mt,Ut,lt.data);else if(M.isData3DTexture)Kt?(Ce&&e.texStorage3D(i.TEXTURE_3D,ft,Gt,lt.width,lt.height,lt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Ut,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,lt.width,lt.height,lt.depth,0,Mt,Ut,lt.data);else if(M.isFramebufferTexture){if(Ce)if(Kt)e.texStorage2D(i.TEXTURE_2D,ft,Gt,lt.width,lt.height);else{let Y=lt.width,tt=lt.height;for(let vt=0;vt<ft;vt++)e.texImage2D(i.TEXTURE_2D,vt,Gt,Y,tt,0,Mt,Ut,null),Y>>=1,tt>>=1}}else if(ce.length>0){if(Kt&&Ce){const Y=Bt(ce[0]);e.texStorage2D(i.TEXTURE_2D,ft,Gt,Y.width,Y.height)}for(let Y=0,tt=ce.length;Y<tt;Y++)St=ce[Y],Kt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Mt,Ut,St):e.texImage2D(i.TEXTURE_2D,Y,Gt,Mt,Ut,St);M.generateMipmaps=!1}else if(Kt){if(Ce){const Y=Bt(lt);e.texStorage2D(i.TEXTURE_2D,ft,Gt,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ut,lt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Mt,Ut,lt);p(M)&&m(Q),Et.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ot(R,M,k){if(M.image.length!==6)return;const Q=se(R,M),et=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const j=n.get(et);if(et.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const Et=me.getPrimaries(me.workingColorSpace),mt=M.colorSpace===Dn?null:me.getPrimaries(M.colorSpace),xt=M.colorSpace===Dn||Et===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,lt=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!ue&&!lt?Mt[tt]=v(M.image[tt],!0,s.maxCubemapSize):Mt[tt]=lt?M.image[tt].image:M.image[tt],Mt[tt]=Re(M,Mt[tt]);const Ut=Mt[0],Gt=r.convert(M.format,M.colorSpace),St=r.convert(M.type),ce=y(M.internalFormat,Gt,St,M.colorSpace),Kt=M.isVideoTexture!==!0,Ce=j.__version===void 0||Q===!0,U=et.dataReady;let ft=C(M,Ut);zt(i.TEXTURE_CUBE_MAP,M);let Y;if(ue){Kt&&Ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,ce,Ut.width,Ut.height);for(let tt=0;tt<6;tt++){Y=Mt[tt].mipmaps;for(let vt=0;vt<Y.length;vt++){const _t=Y[vt];M.format!==An?Gt!==null?Kt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,_t.width,_t.height,Gt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,ce,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,_t.width,_t.height,Gt,St,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,ce,_t.width,_t.height,0,Gt,St,_t.data)}}}else{if(Y=M.mipmaps,Kt&&Ce){Y.length>0&&ft++;const tt=Bt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,ce,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,Gt,St,Mt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ce,Mt[tt].width,Mt[tt].height,0,Gt,St,Mt[tt].data);for(let vt=0;vt<Y.length;vt++){const $t=Y[vt].image[tt].image;Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,$t.width,$t.height,Gt,St,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,ce,$t.width,$t.height,0,Gt,St,$t.data)}}else{Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,St,Mt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ce,Gt,St,Mt[tt]);for(let vt=0;vt<Y.length;vt++){const _t=Y[vt];Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,Gt,St,_t.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,ce,Gt,St,_t.image[tt])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),j.__version=et.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function bt(R,M,k,Q,et,j){const Et=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),xt=y(k.internalFormat,Et,mt,k.colorSpace),ue=n.get(M),lt=n.get(k);if(lt.__renderTarget=M,!ue.__hasExternalTextures){const Mt=Math.max(1,M.width>>j),Ut=Math.max(1,M.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,xt,Mt,Ut,M.depth,0,Et,mt,null):e.texImage2D(et,j,xt,Mt,Ut,0,Et,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),le(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,lt.__webglTexture,0,ae(M)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,lt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(R,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,j=x(M.stencilBuffer,et),Et=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=ae(M);le(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,j,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const Q=M.textures;for(let et=0;et<Q.length;et++){const j=Q[et],Et=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),xt=y(j.internalFormat,Et,mt,j.colorSpace),ue=ae(M);k&&le(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,xt,M.width,M.height):le(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,xt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const et=Q.__webglTexture,j=ae(M);if(M.depthTexture.format===oo)le(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(M.depthTexture.format===cr)le(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Vt(R){const M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Dt(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),ht(M.__webglDepthbuffer[Q],R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ht(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(R,M,k){const Q=n.get(R);M!==void 0&&bt(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Vt(R)}function ve(R){const M=R.texture,k=n.get(R),Q=n.get(M);R.addEventListener("dispose",w);const et=R.textures,j=R.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let xt=0;xt<M.mipmaps.length;xt++)k.__webglFramebuffer[mt][xt]=i.createFramebuffer()}else k.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)k.__webglFramebuffer[mt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Et)for(let mt=0,xt=et.length;mt<xt;mt++){const ue=n.get(et[mt]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&le(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const xt=et[mt];k.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);const ue=r.convert(xt.format,xt.colorSpace),lt=r.convert(xt.type),Mt=y(xt.internalFormat,ue,lt,xt.colorSpace,R.isXRRenderTarget===!0),Ut=ae(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),zt(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)bt(k.__webglFramebuffer[mt][xt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,xt);else bt(k.__webglFramebuffer[mt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let mt=0,xt=et.length;mt<xt;mt++){const ue=et[mt],lt=n.get(ue);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),zt(i.TEXTURE_2D,ue),bt(k.__webglFramebuffer,R,ue,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),p(ue)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Q.__webglTexture),zt(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)bt(k.__webglFramebuffer[xt],R,M,i.COLOR_ATTACHMENT0,mt,xt);else bt(k.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,mt,0);p(M)&&m(mt),e.unbindTexture()}R.depthBuffer&&Vt(R)}function he(R){const M=R.textures;for(let k=0,Q=M.length;k<Q;k++){const et=M[k];if(p(et)){const j=A(R),Et=n.get(et).__webglTexture;e.bindTexture(j,Et),m(j),e.unbindTexture()}}}const ke=[],L=[];function Xi(R){if(R.samples>0){if(le(R)===!1){const M=R.textures,k=R.width,Q=R.height;let et=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),mt=M.length>1;if(mt)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const ue=n.get(M[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,k,Q,0,0,k,Q,et,i.NEAREST),l===!0&&(ke.length=0,L.length=0,ke.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(j),L.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const ue=n.get(M[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ae(R){return Math.min(s.maxSamples,R.samples)}function le(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Re(R,M){const k=R.colorSpace,Q=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ws&&k!==Dn&&(me.getTransfer(k)===be?(Q!==An||et!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=D,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Zt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Xi,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=le}function $x(i,t){function e(n,s=Dn){let r;const o=me.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===Dh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wd)return i.BYTE;if(n===qd)return i.SHORT;if(n===$o)return i.UNSIGNED_SHORT;if(n===Lh)return i.INT;if(n===ar)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===na)return i.HALF_FLOAT;if(n===Yd)return i.ALPHA;if(n===$d)return i.RGB;if(n===An)return i.RGBA;if(n===Jd)return i.LUMINANCE;if(n===Zd)return i.LUMINANCE_ALPHA;if(n===oo)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===Nh)return i.RED;if(n===Fh)return i.RED_INTEGER;if(n===Kd)return i.RG;if(n===Oh)return i.RG_INTEGER;if(n===zh)return i.RGBA_INTEGER;if(n===ml||n===pl||n===_l||n===vl)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ml)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ih||n===nh||n===sh||n===rh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oh||n===ah||n===lh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oh||n===ah)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ch||n===hh||n===uh||n===fh||n===dh||n===mh||n===ph||n===_h||n===vh||n===gh||n===yh||n===xh||n===Ah||n===Mh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ch)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_h)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ah)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===Sh||n===bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gl)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===Th||n===wh||n===Eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Jx={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ui,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:Zx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends ss{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const v=new jx,p=e.getContextAttributes();let m=null,A=null;const y=[],x=[],C=new at;let E=null;const w=new rn;w.viewport=new Ue;const B=new rn;B.viewport=new Ue;const T=[w,B],S=new xv;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=y[K];return ot===void 0&&(ot=new mc,y[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=y[K];return ot===void 0&&(ot=new mc,y[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=y[K];return ot===void 0&&(ot=new mc,y[K]=ot),ot.getHandSpace()};function O(K){const ot=x.indexOf(K.inputSource);if(ot===-1)return;const bt=y[ot];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||o),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<y.length;K++){const ot=x[K];ot!==null&&(x[K]=null,y[K].disconnect(ot))}P=null,z=null,v.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,A=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new vi(d.framebufferWidth,d.framebufferHeight,{format:An,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,bt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?cr:oo,bt=p.stencil?lr:ar);const Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new vi(f.textureWidth,f.textureHeight,{format:An,type:_i,depthTexture:new kh(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(K){for(let ot=0;ot<K.removed.length;ot++){const bt=K.removed[ot],ht=x.indexOf(bt);ht>=0&&(x[ht]=null,y[ht].disconnect(bt))}for(let ot=0;ot<K.added.length;ot++){const bt=K.added[ot];let ht=x.indexOf(bt);if(ht===-1){for(let Vt=0;Vt<y.length;Vt++)if(Vt>=x.length){x.push(bt),ht=Vt;break}else if(x[Vt]===null){x[Vt]=bt,ht=Vt;break}if(ht===-1)break}const Dt=y[ht];Dt&&Dt.connect(bt)}}const D=new I,J=new I;function G(K,ot,bt){D.setFromMatrixPosition(ot.matrixWorld),J.setFromMatrixPosition(bt.matrixWorld);const ht=D.distanceTo(J),Dt=ot.projectionMatrix.elements,Vt=bt.projectionMatrix.elements,Zt=Dt[14]/(Dt[10]-1),ve=Dt[14]/(Dt[10]+1),he=(Dt[9]+1)/Dt[5],ke=(Dt[9]-1)/Dt[5],L=(Dt[8]-1)/Dt[0],Xi=(Vt[8]+1)/Vt[0],ae=Zt*L,le=Zt*Xi,Rt=ht/(-L+Xi),Re=Rt*-L;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Bt=Zt+Rt,R=ve+Rt,M=ae-Re,k=le+(ht-Re),Q=he*ve/R*Bt,et=ke*ve/R*Bt;K.projectionMatrix.makePerspective(M,k,Q,et,Bt,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function it(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,bt=K.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),S.near=B.near=w.near=ot,S.far=B.far=w.far=bt,(P!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,z=S.far),w.layers.mask=K.layers.mask|2,B.layers.mask=K.layers.mask|4,S.layers.mask=w.layers.mask|B.layers.mask;const ht=K.parent,Dt=S.cameras;it(S,ht);for(let Vt=0;Vt<Dt.length;Vt++)it(Dt[Vt],ht);Dt.length===2?G(S,w,B):S.projectionMatrix.copy(w.projectionMatrix),pt(K,S,ht)};function pt(K,ot,bt){bt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let gt=null;function zt(K,ot){if(h=ot.getViewerPose(c||o),_=ot,h!==null){const bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let ht=!1;bt.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let Vt=0;Vt<bt.length;Vt++){const Zt=bt[Vt];let ve=null;if(d!==null)ve=d.getViewport(Zt);else{const ke=u.getViewSubImage(f,Zt);ve=ke.viewport,Vt===0&&(t.setRenderTargetTextures(A,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),t.setRenderTarget(A))}let he=T[Vt];he===void 0&&(he=new rn,he.layers.enable(Vt),he.viewport=new Ue,T[Vt]=he),he.matrix.fromArray(Zt.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Zt.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ve.x,ve.y,ve.width,ve.height),Vt===0&&(S.matrix.copy(he.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(he)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Vt=u.getDepthInformation(bt[0]);Vt&&Vt.isValid&&Vt.texture&&v.init(t,Vt,s.renderState)}}for(let bt=0;bt<y.length;bt++){const ht=x[bt],Dt=y[bt];ht!==null&&Dt!==void 0&&Dt.update(ht,ot,c||o)}gt&&gt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),_=null}const se=new ym;se.setAnimationLoop(zt),this.setAnimationLoop=function(K){gt=K},this.dispose=function(){}}}const Fs=new ns,tA=new Ie;function eA(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,lm(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,A,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,A,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===oi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===oi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const A=t.get(m),y=A.envMap,x=A.envMapRotation;y&&(p.envMap.value=y,Fs.copy(x),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),p.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Fs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===oi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const A=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iA(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const x=y.program;n.uniformBlockBinding(A,x)}function c(A,y){let x=s[A.id];x===void 0&&(_(A),x=h(A),s[A.id]=x,A.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(A,C);const E=t.render.frame;r[A.id]!==E&&(f(A),r[A.id]=E)}function h(A){const y=u();A.__bindingPointIndex=y;const x=i.createBuffer(),C=A.__size,E=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const y=s[A.id],x=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){const B=Array.isArray(x[E])?x[E]:[x[E]];for(let T=0,S=B.length;T<S;T++){const P=B[T];if(d(P,E,T,C)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let Z=0;Z<O.length;Z++){const D=O[Z],J=v(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,z+q,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,y,x,C){const E=A.value,w=y+"_"+x;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const B=C[w];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return C[w]=E,!0}else if(B.equals(E)===!1)return B.copy(E),!0}return!1}function _(A){const y=A.uniforms;let x=0;const C=16;for(let w=0,B=y.length;w<B;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,P=T.length;S<P;S++){const z=T[S],O=Array.isArray(z.value)?z.value:[z.value];for(let q=0,Z=O.length;q<Z;q++){const D=O[q],J=v(D),G=x%C,it=G%J.boundary,pt=G+it;x+=it,pt!==0&&C-pt<J.storage&&(x+=C-pt),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=J.storage}}}const E=x%C;return E>0&&(x+=C-E),A.__size=x,A.__cache={},this}function v(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function p(A){const y=A.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class nA{constructor(t={}){const{canvas:e=h_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const A=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=bs,this.toneMappingExposure=1;const x=this;let C=!1,E=0,w=0,B=null,T=-1,S=null;const P=new Ue,z=new Ue;let O=null;const q=new Qt(0);let Z=0,D=e.width,J=e.height,G=1,it=null,pt=null;const gt=new Ue(0,0,D,J),zt=new Ue(0,0,D,J);let se=!1;const K=new hm;let ot=!1,bt=!1;const ht=new Ie,Dt=new Ie,Vt=new I,Zt=new Ue,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ke(){return B===null?G:1}let L=n;function Xi(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),L===null){const N="webgl2";if(L=Xi(N,b),L===null)throw Xi(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,le,Rt,Re,Bt,R,M,k,Q,et,j,Et,mt,xt,ue,lt,Mt,Ut,Gt,St,ce,Kt,Ce,U;function ft(){ae=new fy(L),ae.init(),Kt=new $x(L,ae),le=new oy(L,ae,t,Kt),Rt=new Xx(L,ae),le.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),Re=new py(L),Bt=new Lx,R=new Yx(L,ae,Rt,Bt,le,Kt,Re),M=new ly(x),k=new uy(x),Q=new Mv(L),Ce=new sy(L,Q),et=new dy(L,Q,Re,Ce),j=new vy(L,et,Q,Re),Gt=new _y(L,le,R),lt=new ay(Bt),Et=new Ix(x,M,k,ae,le,Ce,lt),mt=new eA(x,Bt),xt=new Ux,ue=new Gx(ae),Ut=new ny(x,M,k,Rt,j,d,l),Mt=new Wx(x,j,le),U=new iA(L,Re,le,Rt),St=new ry(L,ae,Re),ce=new my(L,ae,Re),Re.programs=Et.programs,x.capabilities=le,x.extensions=ae,x.properties=Bt,x.renderLists=xt,x.shadowMap=Mt,x.state=Rt,x.info=Re}ft();const Y=new Qx(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(D,J,!1))},this.getSize=function(b){return b.set(D,J)},this.setSize=function(b,N,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,J=N,e.width=Math.floor(b*G),e.height=Math.floor(N*G),H===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(D*G,J*G).floor()},this.setDrawingBufferSize=function(b,N,H){D=b,J=N,G=H,e.width=Math.floor(b*H),e.height=Math.floor(N*H),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,N,H,W){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,N,H,W),Rt.viewport(P.copy(gt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,N,H,W){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,N,H,W),Rt.scissor(z.copy(zt).multiplyScalar(G).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){Rt.setScissorTest(se=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(b=!0,N=!0,H=!0){let W=0;if(b){let F=!1;if(B!==null){const st=B.texture.format;F=st===zh||st===Oh||st===Fh}if(F){const st=B.texture.type,dt=st===_i||st===ar||st===$o||st===lr||st===Dh||st===Uh,yt=Ut.getClearColor(),Tt=Ut.getClearAlpha(),kt=yt.r,qt=yt.g,Pt=yt.b;dt?(_[0]=kt,_[1]=qt,_[2]=Pt,_[3]=Tt,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=kt,v[1]=qt,v[2]=Pt,v[3]=Tt,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}N&&(W|=L.DEPTH_BUFFER_BIT),H&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ut.dispose(),xt.dispose(),ue.dispose(),Bt.dispose(),M.dispose(),k.dispose(),j.dispose(),Ce.dispose(),U.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",iu),Y.removeEventListener("sessionend",nu),Bs.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=Re.autoReset,N=Mt.enabled,H=Mt.autoUpdate,W=Mt.needsUpdate,F=Mt.type;ft(),Re.autoReset=b,Mt.enabled=N,Mt.autoUpdate=H,Mt.needsUpdate=W,Mt.type=F}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $t(b){const N=b.target;N.removeEventListener("dispose",$t),Oe(N)}function Oe(b){fi(b),Bt.remove(b)}function fi(b){const N=Bt.get(b).programs;N!==void 0&&(N.forEach(function(H){Et.releaseProgram(H)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,H,W,F,st){N===null&&(N=ve);const dt=F.isMesh&&F.matrixWorld.determinant()<0,yt=ip(b,N,H,W,F);Rt.setMaterial(W,dt);let Tt=H.index,kt=1;if(W.wireframe===!0){if(Tt=et.getWireframeAttribute(H),Tt===void 0)return;kt=2}const qt=H.drawRange,Pt=H.attributes.position;let fe=qt.start*kt,ye=(qt.start+qt.count)*kt;st!==null&&(fe=Math.max(fe,st.start*kt),ye=Math.min(ye,(st.start+st.count)*kt)),Tt!==null?(fe=Math.max(fe,0),ye=Math.min(ye,Tt.count)):Pt!=null&&(fe=Math.max(fe,0),ye=Math.min(ye,Pt.count));const We=ye-fe;if(We<0||We===1/0)return;Ce.setup(F,W,yt,H,Tt);let ze,de=St;if(Tt!==null&&(ze=Q.get(Tt),de=ce,de.setIndex(ze)),F.isMesh)W.wireframe===!0?(Rt.setLineWidth(W.wireframeLinewidth*ke()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if(F.isLine){let It=W.linewidth;It===void 0&&(It=1),Rt.setLineWidth(It*ke()),F.isLineSegments?de.setMode(L.LINES):F.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else F.isPoints?de.setMode(L.POINTS):F.isSprite&&de.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)de.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))de.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const It=F._multiDrawStarts,li=F._multiDrawCounts,xe=F._multiDrawCount,cn=Tt?Q.get(Tt).bytesPerElement:1,Ar=Bt.get(W).currentProgram.getUniforms();for(let Ui=0;Ui<xe;Ui++)Ar.setValue(L,"_gl_DrawID",Ui),de.render(It[Ui]/cn,li[Ui])}else if(F.isInstancedMesh)de.renderInstances(fe,We,F.count);else if(H.isInstancedBufferGeometry){const It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,li=Math.min(H.instanceCount,It);de.renderInstances(fe,We,li)}else de.render(fe,We)};function Ae(b,N,H){b.transparent===!0&&b.side===we&&b.forceSinglePass===!1?(b.side=oi,b.needsUpdate=!0,ca(b,N,H),b.side=is,b.needsUpdate=!0,ca(b,N,H),b.side=we):ca(b,N,H)}this.compile=function(b,N,H=null){H===null&&(H=b),m=ue.get(H),m.init(N),y.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const yt=st[dt];Ae(yt,H,F),W.add(yt)}else Ae(st,H,F),W.add(st)}),y.pop(),m=null,W},this.compileAsync=function(b,N,H=null){const W=this.compile(b,N,H);return new Promise(F=>{function st(){if(W.forEach(function(dt){Bt.get(dt).currentProgram.isReady()&&W.delete(dt)}),W.size===0){F(b);return}setTimeout(st,10)}ae.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ln=null;function On(b){ln&&ln(b)}function iu(){Bs.stop()}function nu(){Bs.start()}const Bs=new ym;Bs.setAnimationLoop(On),typeof self<"u"&&Bs.setContext(self),this.setAnimationLoop=function(b){ln=b,Y.setAnimationLoop(b),b===null?Bs.stop():Bs.start()},Y.addEventListener("sessionstart",iu),Y.addEventListener("sessionend",nu),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,B),m=ue.get(b,y.length),m.init(N),y.push(m),Dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,ot=lt.init(this.clippingPlanes,bt),p=xt.get(b,A.length),p.init(),A.push(p),Y.enabled===!0&&Y.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Ul(st,N,-1/0,x.sortObjects)}Ul(b,N,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(it,pt),he=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,he&&Ut.addToRenderList(p,b),this.info.render.frame++,ot===!0&&lt.beginShadows();const H=m.state.shadowsArray;Mt.render(H,b,N),ot===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,F=p.transmissive;if(m.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let dt=0,yt=st.length;dt<yt;dt++){const Tt=st[dt];ru(W,F,b,Tt)}he&&Ut.render(b);for(let dt=0,yt=st.length;dt<yt;dt++){const Tt=st[dt];su(p,b,Tt,Tt.viewport)}}else F.length>0&&ru(W,F,b,N),he&&Ut.render(b),su(p,b,N);B!==null&&(R.updateMultisampleRenderTarget(B),R.updateRenderTargetMipmap(B)),b.isScene===!0&&b.onAfterRender(x,b,N),Ce.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],ot===!0&&lt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Ul(b,N,H,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){W&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Dt);const dt=j.update(b),yt=b.material;yt.visible&&p.push(b,dt,yt,H,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const dt=j.update(b),yt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Zt.copy(dt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(Dt)),Array.isArray(yt)){const Tt=dt.groups;for(let kt=0,qt=Tt.length;kt<qt;kt++){const Pt=Tt[kt],fe=yt[Pt.materialIndex];fe&&fe.visible&&p.push(b,dt,fe,H,Zt.z,Pt)}}else yt.visible&&p.push(b,dt,yt,H,Zt.z,null)}}const st=b.children;for(let dt=0,yt=st.length;dt<yt;dt++)Ul(st[dt],N,H,W)}function su(b,N,H,W){const F=b.opaque,st=b.transmissive,dt=b.transparent;m.setupLightsView(H),ot===!0&&lt.setGlobalState(x.clippingPlanes,H),W&&Rt.viewport(P.copy(W)),F.length>0&&la(F,N,H),st.length>0&&la(st,N,H),dt.length>0&&la(dt,N,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ru(b,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new vi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?na:_i,minFilter:ir,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const st=m.state.transmissionRenderTarget[W.id],dt=W.viewport||P;st.setSize(dt.z,dt.w);const yt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(q),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),he&&Ut.render(H);const Tt=x.toneMapping;x.toneMapping=bs;const kt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),ot===!0&&lt.setGlobalState(x.clippingPlanes,W),la(b,H,W),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),ae.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Pt=0,fe=N.length;Pt<fe;Pt++){const ye=N[Pt],We=ye.object,ze=ye.geometry,de=ye.material,It=ye.group;if(de.side===we&&We.layers.test(W.layers)){const li=de.side;de.side=oi,de.needsUpdate=!0,ou(We,H,W,ze,de,It),de.side=li,de.needsUpdate=!0,qt=!0}}qt===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}x.setRenderTarget(yt),x.setClearColor(q,Z),kt!==void 0&&(W.viewport=kt),x.toneMapping=Tt}function la(b,N,H){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=b.length;F<st;F++){const dt=b[F],yt=dt.object,Tt=dt.geometry,kt=W===null?dt.material:W,qt=dt.group;yt.layers.test(H.layers)&&ou(yt,N,H,Tt,kt,qt)}}function ou(b,N,H,W,F,st){b.onBeforeRender(x,N,H,W,F,st),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,N,H,W,b,st),F.transparent===!0&&F.side===we&&F.forceSinglePass===!1?(F.side=oi,F.needsUpdate=!0,x.renderBufferDirect(H,N,W,F,b,st),F.side=is,F.needsUpdate=!0,x.renderBufferDirect(H,N,W,F,b,st),F.side=we):x.renderBufferDirect(H,N,W,F,b,st),b.onAfterRender(x,N,H,W,F,st)}function ca(b,N,H){N.isScene!==!0&&(N=ve);const W=Bt.get(b),F=m.state.lights,st=m.state.shadowsArray,dt=F.state.version,yt=Et.getParameters(b,F.state,st,N,H),Tt=Et.getProgramCacheKey(yt);let kt=W.programs;W.environment=b.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(b.isMeshStandardMaterial?k:M).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",$t),kt=new Map,W.programs=kt);let qt=kt.get(Tt);if(qt!==void 0){if(W.currentProgram===qt&&W.lightsStateVersion===dt)return lu(b,yt),qt}else yt.uniforms=Et.getUniforms(b),b.onBeforeCompile(yt,x),qt=Et.acquireProgram(yt,Tt),kt.set(Tt,qt),W.uniforms=yt.uniforms;const Pt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=lt.uniform),lu(b,yt),W.needsLights=sp(b),W.lightsStateVersion=dt,W.needsLights&&(Pt.ambientLightColor.value=F.state.ambient,Pt.lightProbe.value=F.state.probe,Pt.directionalLights.value=F.state.directional,Pt.directionalLightShadows.value=F.state.directionalShadow,Pt.spotLights.value=F.state.spot,Pt.spotLightShadows.value=F.state.spotShadow,Pt.rectAreaLights.value=F.state.rectArea,Pt.ltc_1.value=F.state.rectAreaLTC1,Pt.ltc_2.value=F.state.rectAreaLTC2,Pt.pointLights.value=F.state.point,Pt.pointLightShadows.value=F.state.pointShadow,Pt.hemisphereLights.value=F.state.hemi,Pt.directionalShadowMap.value=F.state.directionalShadowMap,Pt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pt.spotShadowMap.value=F.state.spotShadowMap,Pt.spotLightMatrix.value=F.state.spotLightMatrix,Pt.spotLightMap.value=F.state.spotLightMap,Pt.pointShadowMap.value=F.state.pointShadowMap,Pt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=qt,W.uniformsList=null,qt}function au(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=yl.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function lu(b,N){const H=Bt.get(b);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function ip(b,N,H,W,F){N.isScene!==!0&&(N=ve),R.resetTextureUnits();const st=N.fog,dt=W.isMeshStandardMaterial?N.environment:null,yt=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ws,Tt=(W.isMeshStandardMaterial?k:M).get(W.envMap||dt),kt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!H.morphAttributes.position,fe=!!H.morphAttributes.normal,ye=!!H.morphAttributes.color;let We=bs;W.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(We=x.toneMapping);const ze=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ze!==void 0?ze.length:0,It=Bt.get(W),li=m.state.lights;if(ot===!0&&(bt===!0||b!==S)){const xi=b===S&&W.id===T;lt.setState(W,b,xi)}let xe=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==li.state.version||It.outputColorSpace!==yt||F.isBatchedMesh&&It.batching===!1||!F.isBatchedMesh&&It.batching===!0||F.isBatchedMesh&&It.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&It.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&It.instancing===!1||!F.isInstancedMesh&&It.instancing===!0||F.isSkinnedMesh&&It.skinning===!1||!F.isSkinnedMesh&&It.skinning===!0||F.isInstancedMesh&&It.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&It.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&It.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&It.instancingMorph===!1&&F.morphTexture!==null||It.envMap!==Tt||W.fog===!0&&It.fog!==st||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==kt||It.vertexTangents!==qt||It.morphTargets!==Pt||It.morphNormals!==fe||It.morphColors!==ye||It.toneMapping!==We||It.morphTargetsCount!==de)&&(xe=!0):(xe=!0,It.__version=W.version);let cn=It.currentProgram;xe===!0&&(cn=ca(W,N,F));let Ar=!1,Ui=!1,vo=!1;const Le=cn.getUniforms(),Yi=It.uniforms;if(Rt.useProgram(cn.program)&&(Ar=!0,Ui=!0,vo=!0),W.id!==T&&(T=W.id,Ui=!0),Ar||S!==b){Rt.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),f_(ht),d_(ht),Le.setValue(L,"projectionMatrix",ht)):Le.setValue(L,"projectionMatrix",b.projectionMatrix),Le.setValue(L,"viewMatrix",b.matrixWorldInverse);const wi=Le.map.cameraPosition;wi!==void 0&&wi.setValue(L,Vt.setFromMatrixPosition(b.matrixWorld)),le.logarithmicDepthBuffer&&Le.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Le.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ui=!0,vo=!0)}if(F.isSkinnedMesh){Le.setOptional(L,F,"bindMatrix"),Le.setOptional(L,F,"bindMatrixInverse");const xi=F.skeleton;xi&&(xi.boneTexture===null&&xi.computeBoneTexture(),Le.setValue(L,"boneTexture",xi.boneTexture,R))}F.isBatchedMesh&&(Le.setOptional(L,F,"batchingTexture"),Le.setValue(L,"batchingTexture",F._matricesTexture,R),Le.setOptional(L,F,"batchingIdTexture"),Le.setValue(L,"batchingIdTexture",F._indirectTexture,R),Le.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Le.setValue(L,"batchingColorTexture",F._colorsTexture,R));const $i=H.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&Gt.update(F,H,cn),(Ui||It.receiveShadow!==F.receiveShadow)&&(It.receiveShadow=F.receiveShadow,Le.setValue(L,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Yi.envMap.value=Tt,Yi.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Yi.envMapIntensity.value=N.environmentIntensity),Ui&&(Le.setValue(L,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&np(Yi,vo),st&&W.fog===!0&&mt.refreshFogUniforms(Yi,st),mt.refreshMaterialUniforms(Yi,W,G,J,m.state.transmissionRenderTarget[b.id]),yl.upload(L,au(It),Yi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(yl.upload(L,au(It),Yi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Le.setValue(L,"center",F.center),Le.setValue(L,"modelViewMatrix",F.modelViewMatrix),Le.setValue(L,"normalMatrix",F.normalMatrix),Le.setValue(L,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const xi=W.uniformsGroups;for(let wi=0,Nl=xi.length;wi<Nl;wi++){const Ps=xi[wi];U.update(Ps,cn),U.bind(Ps,cn)}}return cn}function np(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function sp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,N,H){Bt.get(b.texture).__webglTexture=N,Bt.get(b.depthTexture).__webglTexture=H;const W=Bt.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const H=Bt.get(b);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,H=0){B=b,E=N,w=H;let W=!0,F=null,st=!1,dt=!1;if(b){const Tt=Bt.get(b);if(Tt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Tt.__hasExternalTextures)R.rebindTextures(b,Bt.get(b.texture).__webglTexture,Bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pt=b.depthTexture;if(Tt.__boundDepthTexture!==Pt){if(Pt!==null&&Bt.has(Pt)&&(b.width!==Pt.image.width||b.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(dt=!0);const qt=Bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?F=qt[N][H]:F=qt[N],st=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?F=Bt.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[H]:F=qt,P.copy(b.viewport),z.copy(b.scissor),O=b.scissorTest}else P.copy(gt).multiplyScalar(G).floor(),z.copy(zt).multiplyScalar(G).floor(),O=se;if(Rt.bindFramebuffer(L.FRAMEBUFFER,F)&&W&&Rt.drawBuffers(b,F),Rt.viewport(P),Rt.scissor(z),Rt.setScissorTest(O),st){const Tt=Bt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,H)}else if(dt){const Tt=Bt.get(b.texture),kt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,kt)}T=-1},this.readRenderTargetPixels=function(b,N,H,W,F,st,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Rt.bindFramebuffer(L.FRAMEBUFFER,yt);try{const Tt=b.texture,kt=Tt.format,qt=Tt.type;if(!le.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&H>=0&&H<=b.height-F&&L.readPixels(N,H,W,F,Kt.convert(kt),Kt.convert(qt),st)}finally{const Tt=B!==null?Bt.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,N,H,W,F,st,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){const Tt=b.texture,kt=Tt.format,qt=Tt.type;if(!le.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-W&&H>=0&&H<=b.height-F){Rt.bindFramebuffer(L.FRAMEBUFFER,yt);const Pt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(N,H,W,F,Kt.convert(kt),Kt.convert(qt),0);const fe=B!==null?Bt.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,fe);const ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await u_(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(Pt),L.deleteSync(ye),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,H=0){b.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-H),F=Math.floor(b.image.width*W),st=Math.floor(b.image.height*W),dt=N!==null?N.x:0,yt=N!==null?N.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,dt,yt,F,st),Rt.unbindTexture()};const rp=L.createFramebuffer(),op=L.createFramebuffer();this.copyTextureToTexture=function(b,N,H=null,W=null,F=0,st=null){b.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],N=arguments[2],st=arguments[3]||0,H=null),st===null&&(F!==0?(Qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=F,F=0):st=0);let dt,yt,Tt,kt,qt,Pt,fe,ye,We;const ze=b.isCompressedTexture?b.mipmaps[st]:b.image;if(H!==null)dt=H.max.x-H.min.x,yt=H.max.y-H.min.y,Tt=H.isBox3?H.max.z-H.min.z:1,kt=H.min.x,qt=H.min.y,Pt=H.isBox3?H.min.z:0;else{const $i=Math.pow(2,-F);dt=Math.floor(ze.width*$i),yt=Math.floor(ze.height*$i),b.isDataArrayTexture?Tt=ze.depth:b.isData3DTexture?Tt=Math.floor(ze.depth*$i):Tt=1,kt=0,qt=0,Pt=0}W!==null?(fe=W.x,ye=W.y,We=W.z):(fe=0,ye=0,We=0);const de=Kt.convert(N.format),It=Kt.convert(N.type);let li;N.isData3DTexture?(R.setTexture3D(N,0),li=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),li=L.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),li=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const xe=L.getParameter(L.UNPACK_ROW_LENGTH),cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ar=L.getParameter(L.UNPACK_SKIP_PIXELS),Ui=L.getParameter(L.UNPACK_SKIP_ROWS),vo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ze.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ze.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt);const Le=b.isDataArrayTexture||b.isData3DTexture,Yi=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const $i=Bt.get(b),xi=Bt.get(N),wi=Bt.get($i.__renderTarget),Nl=Bt.get(xi.__renderTarget);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,wi.__webglFramebuffer),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nl.__webglFramebuffer);for(let Ps=0;Ps<Tt;Ps++)Le&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.get(b).__webglTexture,F,Pt+Ps),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.get(N).__webglTexture,st,We+Ps)),L.blitFramebuffer(kt,qt,dt,yt,fe,ye,dt,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||Bt.has(b)){const $i=Bt.get(b),xi=Bt.get(N);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,rp),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,op);for(let wi=0;wi<Tt;wi++)Le?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$i.__webglTexture,F,Pt+wi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$i.__webglTexture,F),Yi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xi.__webglTexture,st,We+wi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xi.__webglTexture,st),F!==0?L.blitFramebuffer(kt,qt,dt,yt,fe,ye,dt,yt,L.COLOR_BUFFER_BIT,L.NEAREST):Yi?L.copyTexSubImage3D(li,st,fe,ye,We+wi,kt,qt,dt,yt):L.copyTexSubImage2D(li,st,fe,ye,kt,qt,dt,yt);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Yi?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(li,st,fe,ye,We,dt,yt,Tt,de,It,ze.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(li,st,fe,ye,We,dt,yt,Tt,de,ze.data):L.texSubImage3D(li,st,fe,ye,We,dt,yt,Tt,de,It,ze):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,fe,ye,dt,yt,de,It,ze.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,fe,ye,ze.width,ze.height,de,ze.data):L.texSubImage2D(L.TEXTURE_2D,st,fe,ye,dt,yt,de,It,ze);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ar),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ui),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vo),st===0&&N.generateMipmaps&&L.generateMipmap(li),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,H=null,W=null,F=0){return b.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,H,W,F)},this.initRenderTarget=function(b){Bt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){E=0,w=0,B=null,Rt.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const xs=10,pc=1040,sA=.025,rA=.06,oA=.05,aA=1,gf=2,To=980,yf={perM_height:100,perM_distance:10},xf=.12,Af=800,lA=.3,_c=.08;class cA{constructor(t){this.scene=new bl,this.camera=new qh(-1,1,1,-1,-1e3,1e3),this.camera.position.z=10,this.renderer=new nA({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(17,1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this._resize(),window.addEventListener("resize",()=>this._resize())}_resize(){const t=window.innerWidth,e=window.innerHeight,n=t/e,s=Af/2,r=s*n,o=this.camera;o.left=-r,o.right=r,o.top=s,o.bottom=-s,o.updateProjectionMatrix(),this.viewWidthPx=r*2,this.viewHeightPx=Af,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e,!1),this._postfx&&this._postfx.setSize(t,e)}registerPostFX(t){this._postfx=t}setCenter(t,e,n=0,s=0){this.camera.position.x=t+n,this.camera.position.y=e+s}render(){this.renderer.render(this.scene,this.camera)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}}const hA=`// 배경 그라데이션 — 풀스크린 쿼드. UV를 그대로 프래그먼트로 전달.
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);  // NDC 직접 (클립 공간 풀스크린)
}
`,uA=`// 세계관 배경 셰이더 — 고도에 따른 하늘/구름/우주 그라데이션
// 0.0 = 밝은 낮 하늘  →  1.0 = 달 궤도
//
// 구간:
//   0.00 ~ 0.22  밝은 하늘색
//   0.22 ~ 0.46  구름 많은 높은 하늘
//   0.46 ~ 0.68  성층권
//   0.68 ~ 0.85  우주
//   0.85 ~ 1.00  달 궤도 (연한 회청 글로우)
precision highp float;

varying vec2 vUv;
uniform float uHeightRatio;   // 0~1
uniform float uTime;

// ── 구간별 색상 ──
const vec3 C_LOW_SKY   = vec3(0.55,  0.84,  0.98);   // 낮은 고도: 밝은 하늘색
const vec3 C_HIGH_SKY  = vec3(0.30,  0.63,  0.92);   // 높은 하늘
const vec3 C_CLOUD_TOP = vec3(0.42,  0.56,  0.82);   // 구름층 너머의 푸른 보라
const vec3 C_STRATO    = vec3(0.08,  0.12,  0.32);   // 성층권
const vec3 C_SPACE     = vec3(0.0,   0.0,   0.025);  // 우주
const vec3 C_MOON_GLOW = vec3(0.09,  0.12,  0.22);   // 달 궤도 배경 글로우

// ── 해시 기반 pseudo-random ──
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// ── 별 렌더 (우주 구간) ──
vec3 stars(vec2 uv, float visibility) {
  if (visibility < 0.01) return vec3(0.0);

  vec3 col = vec3(0.0);

  // 레이어 1 — 작고 많은 별
  vec2 g1 = floor(uv * 120.0);
  float s1 = hash(g1);
  if (s1 > 0.978) {
    float tw = 0.5 + 0.5 * sin(uTime * (1.2 + s1 * 3.0) + s1 * 40.0);
    float brightness = 0.6 + 0.4 * tw;
    col += vec3(brightness) * visibility;
  }

  // 레이어 2 — 크고 드문 밝은 별
  vec2 g2 = floor(uv * 40.0);
  float s2 = hash(g2 + 7.3);
  if (s2 > 0.992) {
    float tw = 0.7 + 0.3 * sin(uTime * 0.8 + s2 * 20.0);
    col += vec3(0.9, 0.95, 1.0) * tw * visibility * 1.4;
  }

  return col;
}

// ── 은하수 힌트 (희미한 대각 밴드) ──
float milkyWay(vec2 uv) {
  float band = uv.x * 0.4 + uv.y * 0.9;
  float w = smoothstep(0.42, 0.50, band) * (1.0 - smoothstep(0.50, 0.58, band));
  return w * 0.04;
}

// ── 바다 반짝임 (낮은 높이) ──
float seaSparkle(vec2 uv, float seaVis) {
  if (seaVis < 0.01) return 0.0;
  vec2 g = floor(uv * vec2(60.0, 30.0));
  float h = hash(g + floor(uTime * 4.0));
  return step(0.94, h) * 0.35 * seaVis;
}

void main() {
  float h = clamp(uHeightRatio, 0.0, 1.0);

  // 화면 위쪽이 조금 더 높은 고도처럼 보이게 섞는다.
  float hScreen = h + vUv.y * 0.10;

  // ── 배경 색상 5단계 보간 ──
  vec3 col;
  if (hScreen < 0.22) {
    col = mix(C_LOW_SKY, C_HIGH_SKY, smoothstep(0.0, 0.22, hScreen));
  } else if (hScreen < 0.46) {
    col = mix(C_HIGH_SKY, C_CLOUD_TOP, smoothstep(0.22, 0.46, hScreen));
  } else if (hScreen < 0.68) {
    col = mix(C_CLOUD_TOP, C_STRATO, smoothstep(0.46, 0.68, hScreen));
  } else if (hScreen < 0.85) {
    col = mix(C_STRATO, C_SPACE, smoothstep(0.68, 0.85, hScreen));
  } else {
    col = mix(C_SPACE, C_MOON_GLOW, smoothstep(0.85, 1.0, hScreen));
  }

  // ── 별 ──
  float starVis = smoothstep(0.58, 0.78, h);
  col += stars(vUv, starVis);

  // ── 은하수 (우주 구간) ──
  float mwVis = smoothstep(0.66, 0.84, h);
  col += milkyWay(vUv) * mwVis;

  // ── 바다 반짝임 (바다/해안 구간) ──
  float seaVis = smoothstep(0.14, 0.0, h);   // 낮을수록 강함
  float sparkle = seaSparkle(vUv, seaVis);
  col += vec3(0.55, 0.85, 1.0) * sparkle;

  // 낮은 하늘의 부드러운 햇빛감
  float daylight = smoothstep(0.34, 0.0, h);
  col += vec3(0.10, 0.12, 0.10) * daylight * (1.0 - vUv.y) * 0.22;

  // ── 달 궤도 글로우 (상단) ──
  float moonZoneVis = smoothstep(0.80, 1.0, h);
  // 화면 위쪽에 달빛 산란 효과
  float moonGlow = vUv.y * moonZoneVis * 0.12;
  col += vec3(0.7, 0.8, 1.0) * moonGlow;

  gl_FragColor = vec4(col, 1.0);
}
`;class fA{constructor(t){this.renderer=t,this.scene=new bl,this.camera=new Gh;const e=new Li(2,2);this.material=new ei({vertexShader:hA,fragmentShader:uA,uniforms:{uHeightRatio:{value:0},uTime:{value:0}},depthTest:!1,depthWrite:!1}),this.skyMesh=new At(e,this.material),this.scene.add(this.skyMesh),this.lowSkyWash=new At(e.clone(),new Wt({color:9362687,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1})),this.lowSkyWash.position.z=-.02,this.scene.add(this.lowSkyWash),this._buildSea(),this._buildCloudLayers(),this._buildMoon(),this.moonWorldY=null}_buildSea(){const t=new Wt({color:1937345,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),e=new Li(2,.56);this.seaMesh=new At(e,t),this.seaMesh.position.set(0,-.74,-.5),this.scene.add(this.seaMesh);const n=new Wt({color:10217471,transparent:!0,opacity:.28,depthTest:!1,depthWrite:!1});this.seaFoam=new At(new Li(2,.035),n),this.seaFoam.position.set(0,-.48,-.38),this.scene.add(this.seaFoam),this.waveLines=[];for(let s=0;s<4;s++){const r=new fo({color:s===0?14154751:9169407,transparent:!0,opacity:.35,depthTest:!1}),o=new je().setFromPoints(Array.from({length:32},(l,c)=>{const h=-1+c/31*2;return new I(h,-.5-s*.105,-.35+s*.01)})),a=new Cl(o,r);this.scene.add(a),this.waveLines.push(a)}}_buildCloudLayers(){this.cloudLayers=[];const t=[{x:-.7,y:.36,scale:.82,phase:0,depth:-.42},{x:-.2,y:.5,scale:1.05,phase:1.8,depth:-.43},{x:.48,y:.34,scale:.9,phase:3.4,depth:-.44},{x:.88,y:.57,scale:1.15,phase:5,depth:-.45},{x:-1.08,y:.63,scale:1,phase:6.2,depth:-.46}];for(const e of t){const n=this._createScreenCloud();n.position.set(e.x,e.y,e.depth),n.scale.setScalar(e.scale),n.userData=e,this.scene.add(n),this.cloudLayers.push(n)}}_createScreenCloud(){const t=new Pi,e=new Wt({color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),n=new Wt({color:12178670,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});for(const[r,o,a]of[[-.17,-.02,.105],[-.06,.04,.135],[.08,.03,.12],[.2,-.02,.09]]){const l=new At(new Be(a,32),e.clone());l.position.set(r,o,.01),t.add(l)}const s=new At(new Li(.46,.1),n.clone());return s.position.set(.02,-.045,0),t.add(s),t}_buildMoon(){const t=new Wt({color:14477552,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),e=new Be(.18,64);this.moonMesh=new At(e,t),this.moonMesh.position.set(.35,.72,-.3),this.scene.add(this.moonMesh);const n=new Wt({color:9090260,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),s=new Be(.3,48);this.moonGlow=new At(s,n),this.moonGlow.position.set(.35,.72,-.35),this.scene.add(this.moonGlow);const r=new Wt({color:11585752,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});this.craters=[];for(const[o,a,l]of[[.32,.76,.028],[.42,.68,.022],[.28,.66,.018],[.38,.78,.015],[.46,.74,.012]]){const c=new At(new Be(l,24),r.clone());c.position.set(o,a,-.28),this.scene.add(c),this.craters.push(c)}}update(t,e){this.material.uniforms.uHeightRatio.value=t,this.material.uniforms.uTime.value=e,this.lowSkyWash.material.opacity=(1-wt.smoothstep(t,.12,.42))*.72;const n=Math.max(0,1-t/.26);this.seaMesh.material.opacity=n,this.seaFoam.material.opacity=n*.38;for(let a=0;a<this.waveLines.length;a++){const l=this.waveLines[a],c=l.geometry.attributes.position;for(let h=0;h<c.count;h++){const u=-1+h/(c.count-1)*2,f=-.5-a*.105+Math.sin(e*(1.25+a*.22)+h*.62+a)*.012;c.setXYZ(h,u,f,-.35+a*.01)}c.needsUpdate=!0,l.material.opacity=n*(a===0?.65:.32)}const s=dA(t,.07,.62);for(const a of this.cloudLayers){const l=a.userData,c=Math.sin(e*.13+l.phase)*.045;a.position.x=l.x+c,a.position.y=l.y+Math.sin(e*.09+l.phase*.7)*.018;for(const h of a.children){const u=h.geometry?.type==="PlaneGeometry";h.material.opacity=s*(u?.16:.54)}}const r=Math.max(0,Math.min(1,(t-.7)/.2)),o=1+r*.5;this.moonMesh.material.opacity=r*.95,this.moonGlow.material.opacity=r*.18,this.moonMesh.scale.setScalar(o),this.moonGlow.scale.setScalar(o*1.12);for(const a of this.craters)a.material.opacity=r*.55,a.scale.setScalar(o)}render(){const t=this.renderer.renderer;t.autoClear=!1,t.clear(),t.render(this.scene,this.camera)}}function dA(i,t,e){const n=wt.smoothstep(i,t,t+.18),s=1-wt.smoothstep(i,e,e+.18);return wt.clamp(n*s,0,1)}/**
 * postprocessing v6.39.1 build Fri Apr 17 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var mA=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),e=new je;return e.setAttribute("position",new Hi(i,3)),e.setAttribute("uv",new Hi(t,2)),e})(),an=class Ph{static get fullscreenGeometry(){return mA}constructor(t="Pass",e=new bl,n=new qh){this.name=t,this.renderer=null,this.scene=e,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const e=this.fullscreenMaterial;e!==null&&(e.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let e=this.screen;e!==null?e.material=t:(e=new At(Ph.fullscreenGeometry,t),e.frustumCulled=!1,this.scene===null&&(this.scene=new bl),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,e=sa){}render(t,e,n,s,r){throw new Error("Render method not implemented!")}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof vi||e instanceof _r||e instanceof ui||e instanceof Ph)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},pA=class extends an{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,t,e,n,s){const r=i.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},_A=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,bm="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Tm=class extends ei{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new oe(null),depthBuffer:new oe(null),channelWeights:new oe(null),opacity:new oe(1)},blending:Di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_A,vertexShader:bm}),this.depthFunc=xl}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const t=i!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const t=i!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(i){this.colorSpaceConversion!==i&&(i?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},vA=class extends an{constructor(i,t=!0){super("CopyPass"),this.fullscreenMaterial=new Tm,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new vi(1,1,{minFilter:Ii,magFilter:Ii,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,t,e,n,s){this.fullscreenMaterial.inputBuffer=t.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,t){this.autoResize&&this.renderTarget.setSize(i,t)}initialize(i,t,e){e!==void 0&&(this.renderTarget.texture.type=e,e!==_i?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===Te&&(this.renderTarget.texture.colorSpace=Te))}},Mf=new Qt,wm=class extends an{constructor(i=!0,t=!0,e=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=t,this.stencil=e,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,t,e){this.color=i,this.depth=t,this.stencil=e}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,t,e,n,s){const r=this.overrideClearColor,o=this.overrideClearAlpha,a=i.getClearAlpha(),l=r!==null,c=o>=0;l?(i.getClearColor(Mf),i.setClearColor(r,c?o:a)):c&&i.setClearAlpha(o),i.setRenderTarget(this.renderToScreen?null:t),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(Mf,a):c&&i.setClearAlpha(a)}},gA=class extends an{constructor(i,t){super("MaskPass",i,t),this.needsSwap=!1,this.clearPass=new wm(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,t,e,n,s){const r=i.getContext(),o=i.state.buffers,a=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,u=1-h;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.stencil.setFunc(r.ALWAYS,h,4294967295),o.stencil.setClear(u),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,t),c.render(i,e))),this.renderToScreen?(i.setRenderTarget(null),i.render(a,l)):(i.setRenderTarget(t),i.render(a,l),i.setRenderTarget(e),i.render(a,l)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(r.EQUAL,1,4294967295),o.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.stencil.setLocked(!0)}},vc=1/1e3,yA=1e3,xA=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*vc}get fixedDelta(){return this._fixedDelta*vc}set fixedDelta(t){this._fixedDelta=t*yA}get elapsed(){return this._elapsed*vc}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},AA=class{constructor(i=null,{depthBuffer:t=!0,stencilBuffer:e=!1,multisampling:n=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,e,s,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new vA,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new xA,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples}set multisampling(i){const t=this.inputBuffer,e=this.multisampling;e>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):e!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,i),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const t=i.getSize(new at),e=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===_i&&i.outputColorSpace===Te&&(this.inputBuffer.texture.colorSpace=Te,this.outputBuffer.texture.colorSpace=Te,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(t.width,t.height);for(const s of this.passes)s.initialize(i,e,n)}}replaceRenderer(i,t=!0){const e=this.renderer,n=e.domElement.parentNode;return this.setRenderer(i),t&&n!==null&&(n.removeChild(e.domElement),n.appendChild(i.domElement)),e}createDepthTexture(){const i=this.inputBuffer,t=new kh;this.depthTexture=t,i.stencilBuffer?(t.format=cr,t.type=lr):t.type=xn;const e=t.clone();return e.name="EffectComposer.StableDepth",this.depthRenderTarget=new vi(i.width,i.height,{depthBuffer:!0,stencilBuffer:i.stencilBuffer,depthTexture:e}),e}blitDepthBuffer(i){const t=this.renderer,e=this.depthRenderTarget,n=t.properties,s=t.getContext();t.setRenderTarget(e);const r=n.get(i).__webglFramebuffer,o=n.get(e).__webglFramebuffer,a=i.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,o),s.blitFramebuffer(0,0,i.width,i.height,0,0,e.width,e.height,a,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),t.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,t,e,n){const s=this.renderer,r=s===null?new at:s.getDrawingBufferSize(new at),o={minFilter:Ii,magFilter:Ii,stencilBuffer:t,depthBuffer:i,type:e},a=new vi(r.width,r.height,o);return n>0&&(a.samples=n),e===_i&&s!==null&&s.outputColorSpace===Te&&(a.texture.colorSpace=Te),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(i){for(const t of this.passes)t.mainScene=i}setMainCamera(i){for(const t of this.passes)t.mainCamera=i}addPass(i,t){const e=this.passes,n=this.renderer,s=n.getDrawingBufferSize(new at),r=n.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(i.renderer=n,i.setSize(s.width,s.height),i.initialize(n,r,o),this.autoRenderToScreen&&(e.length>0&&(e[e.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?e.splice(t,0,i):e.push(i),this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const a=this.createDepthTexture();for(i of e)i.setDepthTexture(a)}else{const a=this.depthRenderTarget.depthTexture;i.setDepthTexture(a)}}removePass(i){const t=this.passes,e=t.indexOf(i);if(e!==-1&&t.splice(e,1).length>0){if(this.depthTexture!==null){const r=(a,l)=>a||l.needsDepthTexture;if(!t.reduce(r,!1)){const a=this.depthRenderTarget.depthTexture;i.getDepthTexture()===a&&i.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&e===t.length&&(i.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const t=this.renderer,e=this.copyPass;let n=this.inputBuffer,s=this.outputBuffer,r,o=!1;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const a of this.passes)if(a.enabled){if(n.depthTexture=this.depthTexture,s.depthTexture=null,a.render(t,n,s,i,o),a.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(n),a.needsSwap){if(o){e.renderToScreen=a.renderToScreen;const l=t.getContext(),c=t.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),e.render(t,n,s,i,o),c.setFunc(l.EQUAL,1,4294967295)}r=n,n=s,s=r}a instanceof gA?o=!0:a instanceof pA&&(o=!1)}}setSize(i,t,e){const n=this.renderer,s=n.getSize(new at);(i===void 0||t===void 0)&&(i=s.width,t=s.height),(s.width!==i||s.height!==t)&&n.setSize(i,t,e);const r=n.getDrawingBufferSize(new at);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const o of this.passes)o.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),an.fullscreenGeometry.dispose()}},Ts={NONE:0,DEPTH:1,CONVOLUTION:2},pe={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},MA=class{constructor(){this.shaderParts=new Map([[pe.FRAGMENT_HEAD,null],[pe.FRAGMENT_MAIN_UV,null],[pe.FRAGMENT_MAIN_IMAGE,null],[pe.VERTEX_HEAD,null],[pe.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ts.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ws}},gc=!1,Sf=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let e;if(t.material.flatShading)switch(t.material.side){case we:e=this.materialsFlatShadedDoubleSide;break;case oi:e=this.materialsFlatShadedBackSide;break;default:e=this.materialsFlatShaded;break}else switch(t.material.side){case we:e=this.materialsDoubleSide;break;case oi:e=this.materialsBackSide;break;default:e=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=e[2]:t.isInstancedMesh?t.material=e[1]:t.material=e[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof ei))return i.clone();const t=i.uniforms,e=new Map;for(const s in t){const r=t[s].value;r.isRenderTargetTexture&&(t[s].value=null,e.set(s,r))}const n=i.clone();for(const s of e)t[s[0]].value=s[1],n.uniforms[s[0]].value=s[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const t=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const e of t)e.uniforms=Object.assign({},i.uniforms),e.side=is;t[2].skinning=!0,this.materialsBackSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.side=oi,n}),this.materialsDoubleSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.side=we,n}),this.materialsFlatShaded=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=oi,n}),this.materialsFlatShadedDoubleSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=we,n})}}render(i,t,e){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,gc){const s=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),i.render(t,e);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=t.overrideMaterial;t.overrideMaterial=this.material,i.render(t,e),t.overrideMaterial=s}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of i)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return gc}static set workaroundEnabled(i){gc=i}},us=-1,Un=class extends ss{constructor(i=null,t=us,e=us,n=1){super(),i!==null&&this.addEventListener("change",()=>i.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new at(1,1),this.preferredSize=new at(t,e),this.target=this.preferredSize,this.s=n,this.effectiveSize=new at,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,t=this.preferredSize,e=this.effectiveSize,n=this.scale;t.width!==us?e.width=t.width:t.height!==us?e.width=Math.round(t.height*(i.width/Math.max(i.height,1))):e.width=Math.round(i.width*n),t.height!==us?e.height=t.height:t.width!==us?e.height=Math.round(t.width/Math.max(i.width/Math.max(i.height,1),1)):e.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(us),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,t){(this.baseSize.width!==i||this.baseSize.height!==t)&&(this.baseSize.set(i,t),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,t){(this.preferredSize.width!==i||this.preferredSize.height!==t)&&(this.preferredSize.set(i,t),this.dispatchEvent({type:"change"}))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return us}},ie={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},SA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",TA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",XA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$A="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",QA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eM=new Map([[ie.ADD,SA],[ie.ALPHA,bA],[ie.AVERAGE,TA],[ie.COLOR,wA],[ie.COLOR_BURN,EA],[ie.COLOR_DODGE,CA],[ie.DARKEN,RA],[ie.DIFFERENCE,BA],[ie.DIVIDE,PA],[ie.DST,null],[ie.EXCLUSION,IA],[ie.HARD_LIGHT,LA],[ie.HARD_MIX,DA],[ie.HUE,UA],[ie.INVERT,NA],[ie.INVERT_RGB,FA],[ie.LIGHTEN,OA],[ie.LINEAR_BURN,zA],[ie.LINEAR_DODGE,VA],[ie.LINEAR_LIGHT,GA],[ie.LUMINOSITY,kA],[ie.MULTIPLY,HA],[ie.NEGATION,WA],[ie.NORMAL,qA],[ie.OVERLAY,XA],[ie.PIN_LIGHT,YA],[ie.REFLECT,$A],[ie.SATURATION,JA],[ie.SCREEN,ZA],[ie.SOFT_LIGHT,KA],[ie.SRC,jA],[ie.SUBTRACT,QA],[ie.VIVID_LIGHT,tM]]),iM=class extends ss{constructor(i,t=1){super(),this._blendFunction=i,this.opacity=new oe(t)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return eM.get(this.blendFunction)}},Yh=class extends ss{constructor(i,t,{attributes:e=Ts.NONE,blendFunction:n=ie.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:o=null,vertexShader:a=null}={}){super(),this.name=i,this.renderer=null,this.attributes=e,this.fragmentShader=t,this.vertexShader=a,this.defines=s,this.uniforms=r,this.extensions=o,this.blendMode=new iM(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=ws,this._outputColorSpace=Dn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,t=sa){}update(i,t,e){}setSize(i,t){}initialize(i,t,e){}dispose(){for(const i of Object.keys(this)){const t=this[i];(t instanceof vi||t instanceof _r||t instanceof ui||t instanceof an)&&this[i].dispose()}}},Dl={MEDIUM:2,LARGE:3},nM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,sM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",rM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],oM=class extends ei{constructor(i=new Ue){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new oe(null),texelSize:new oe(new Ue),scale:new oe(1),kernel:new oe(0)},blending:Di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:nM,vertexShader:sM}),this.setTexelSize(i.x,i.y),this.kernelSize=Dl.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return rM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,t){this.uniforms.texelSize.value.set(i,t,i*.5,t*.5)}setSize(i,t){const e=1/i,n=1/t;this.uniforms.texelSize.value.set(e,n,e*.5,n*.5)}},aM=class extends an{constructor({kernelSize:i=Dl.MEDIUM,resolutionScale:t=.5,width:e=Un.AUTO_SIZE,height:n=Un.AUTO_SIZE,resolutionX:s=e,resolutionY:r=n}={}){super("KawaseBlurPass"),this.renderTargetA=new vi(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const o=this.resolution=new Un(this,s,r,t);o.addEventListener("change",a=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new oM,this._blurMaterial.kernelSize=i,this.copyMaterial=new Tm}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,t,e,n,s){const r=this.scene,o=this.camera,a=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence;let u=t;this.fullscreenMaterial=c;for(let f=0,d=h.length;f<d;++f){const _=(f&1)===0?a:l;c.kernel=h[f],c.inputBuffer=u.texture,i.setRenderTarget(_),i.render(r,o),u=_}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,i.setRenderTarget(this.renderToScreen?null:e),i.render(r,o)}setSize(i,t){const e=this.resolution;e.setBaseSize(i,t);const n=e.width,s=e.height;this.renderTargetA.setSize(n,s),this.renderTargetB.setSize(n,s),this.blurMaterial.setSize(i,t)}initialize(i,t,e){e!==void 0&&(this.renderTargetA.texture.type=e,this.renderTargetB.texture.type=e,e!==_i?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):i!==null&&i.outputColorSpace===Te&&(this.renderTargetA.texture.colorSpace=Te,this.renderTargetB.texture.colorSpace=Te))}static get AUTO_SIZE(){return Un.AUTO_SIZE}},lM=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,cM=class extends ei{constructor(i=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:ia.replace(/\D+/g,"")},uniforms:{inputBuffer:new oe(null),threshold:new oe(0),smoothing:new oe(1),range:new oe(null)},blending:Di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:lM,vertexShader:bm}),this.colorOutput=i,this.luminanceRange=t}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},hM=class extends an{constructor({renderTarget:i,luminanceRange:t,colorOutput:e,resolutionScale:n=1,width:s=Un.AUTO_SIZE,height:r=Un.AUTO_SIZE,resolutionX:o=s,resolutionY:a=r}={}){super("LuminancePass"),this.fullscreenMaterial=new cM(e,t),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new vi(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Un(this,o,a,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,t,e,n,s){const r=this.fullscreenMaterial;r.inputBuffer=t.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,t){const e=this.resolution;e.setBaseSize(i,t),this.renderTarget.setSize(e.width,e.height)}initialize(i,t,e){e!==void 0&&e!==_i&&(this.renderTarget.texture.type=e,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},uM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,fM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",dM=class extends ei{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new oe(null),texelSize:new oe(new at)},blending:Di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:uM,vertexShader:fM})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,t){this.uniforms.texelSize.value.set(1/i,1/t)}},mM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,pM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",_M=class extends ei{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new oe(null),supportBuffer:new oe(null),texelSize:new oe(new at),radius:new oe(.85)},blending:Di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mM,vertexShader:pM})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,t){this.uniforms.texelSize.value.set(1/i,1/t)}},vM=class extends an{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new vi(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new dM,this.upsamplingMaterial=new _M,this.resolution=new at}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let e=0;e<i;++e){const n=t.clone();n.texture.name="Downsampling.Mipmap"+e,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(t);for(let e=1,n=i-1;e<n;++e){const s=t.clone();s.texture.name="Upsampling.Mipmap"+e,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,t,e,n,s){const{scene:r,camera:o}=this,{downsamplingMaterial:a,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this;let u=t;this.fullscreenMaterial=a;for(let f=0,d=c.length;f<d;++f){const _=c[f];a.setSize(u.width,u.height),a.inputBuffer=u.texture,i.setRenderTarget(_),i.render(r,o),u=_}this.fullscreenMaterial=l;for(let f=h.length-1;f>=0;--f){const d=h[f];l.setSize(u.width,u.height),l.inputBuffer=u.texture,l.supportBuffer=c[f].texture,i.setRenderTarget(d),i.render(r,o),u=d}}setSize(i,t){const e=this.resolution;e.set(i,t);let n=e.width,s=e.height;for(let r=0,o=this.downsamplingMipmaps.length;r<o;++r)n=Math.round(n*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(n,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(n,s)}initialize(i,t,e){if(e!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of n)s.texture.type=e;if(e!==_i)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(i!==null&&i.outputColorSpace===Te)for(const s of n)s.texture.colorSpace=Te}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},gM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,yM=class extends Yh{constructor({blendFunction:i=ie.SCREEN,luminanceThreshold:t=1,luminanceSmoothing:e=.03,mipmapBlur:n=!0,intensity:s=1,radius:r=.85,levels:o=8,kernelSize:a=Dl.LARGE,resolutionScale:l=.5,width:c=Un.AUTO_SIZE,height:h=Un.AUTO_SIZE,resolutionX:u=c,resolutionY:f=h}={}){super("BloomEffect",gM,{blendFunction:i,uniforms:new Map([["map",new oe(null)],["intensity",new oe(s)]])}),this.renderTarget=new vi(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new aM({kernelSize:a}),this.luminancePass=new hM({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=e,this.mipmapBlurPass=new vM,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=o,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const d=this.resolution=new Un(this,u,f,l);d.addEventListener("change",_=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,t,e){const n=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(i,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,s.renderTarget):this.blurPass.render(i,s.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,t):this.blurPass.render(i,t,n)}setSize(i,t){const e=this.resolution;e.setBaseSize(i,t),this.renderTarget.setSize(e.width,e.height),this.blurPass.resolution.copy(e),this.luminancePass.setSize(i,t),this.mipmapBlurPass.setSize(i,t)}initialize(i,t,e){this.blurPass.initialize(i,t,e),this.luminancePass.initialize(i,t,e),this.mipmapBlurPass.initialize(i,t,e),e!==void 0&&(this.renderTarget.texture.type=e,i!==null&&i.outputColorSpace===Te&&(this.renderTarget.texture.colorSpace=Te))}},xM=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,AM="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",MM=class extends Yh{constructor({offset:i=new at(.001,5e-4),radialModulation:t=!1,modulationOffset:e=.15}={}){super("ChromaticAberrationEffect",xM,{vertexShader:AM,attributes:Ts.CONVOLUTION,uniforms:new Map([["offset",new oe(i)],["modulationOffset",new oe(e)]])}),this.radialModulation=t}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(i){i?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(i){this.uniforms.get("modulationOffset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}},SM=class extends an{constructor(i,t,e=null){super("RenderPass",i,t),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new wm,this.overrideMaterialManager=e===null?null:new Sf(e),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const t=this.overrideMaterialManager;i!==null?t!==null?t.setMaterial(i):this.overrideMaterialManager=new Sf(i):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,t,e,n,s){const r=this.scene,o=this.camera,a=this.selection,l=o.layers.mask,c=r.background,h=i.shadowMap.autoUpdate,u=this.renderToScreen?null:t;a!==null&&o.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(i,t),i.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,r,o):i.render(r,o),o.layers.mask=l,r.background=c,i.shadowMap.autoUpdate=h}},wo={DEFAULT:0,ESKIL:1},bM=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,TM=class extends Yh{constructor({blendFunction:i,eskil:t=!1,technique:e=t?wo.ESKIL:wo.DEFAULT,offset:n=.5,darkness:s=.5}={}){super("VignetteEffect",bM,{blendFunction:i,defines:new Map([["VIGNETTE_TECHNIQUE",e.toFixed(0)]]),uniforms:new Map([["offset",new oe(n)],["darkness",new oe(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(i){this.technique!==i&&(this.defines.set("VIGNETTE_TECHNIQUE",i.toFixed(0)),this.setChanged())}get eskil(){return this.technique===wo.ESKIL}set eskil(i){this.technique=i?wo.ESKIL:wo.DEFAULT}getTechnique(){return this.technique}setTechnique(i){this.technique=i}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}get darkness(){return this.uniforms.get("darkness").value}set darkness(i){this.uniforms.get("darkness").value=i}getDarkness(){return this.darkness}setDarkness(i){this.darkness=i}},wM=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,EM="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",CM=class extends ei{constructor(i,t,e,n,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ia.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new oe(null),depthBuffer:new oe(null),resolution:new oe(new at),texelSize:new oe(new at),cameraNear:new oe(.3),cameraFar:new oe(1e3),aspect:new oe(1),time:new oe(0)},blending:Di,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),i&&this.setShaderParts(i),t&&this.setDefines(t),e&&this.setUniforms(e),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,t=sa){this.depthBuffer=i,this.depthPacking=t}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=wM.replace(pe.FRAGMENT_HEAD,i.get(pe.FRAGMENT_HEAD)||"").replace(pe.FRAGMENT_MAIN_UV,i.get(pe.FRAGMENT_MAIN_UV)||"").replace(pe.FRAGMENT_MAIN_IMAGE,i.get(pe.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=EM.replace(pe.VERTEX_HEAD,i.get(pe.VERTEX_HEAD)||"").replace(pe.VERTEX_MAIN_SUPPORT,i.get(pe.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const t of i.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(i){for(const t of i.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(i){this.extensions={};for(const t of i)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof rn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,t){const e=this.uniforms;e.resolution.value.set(i,t),e.texelSize.value.set(1/i,1/t),e.aspect.value=i/t}static get Section(){return pe}};function bf(i,t,e){for(const n of t){const s="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const o of e.entries())o[1]!==null&&e.set(o[0],o[1].replace(r,s))}}function RM(i,t,e){let n=t.getFragmentShader(),s=t.getVertexShader();const r=n!==void 0&&/mainImage/.test(n),o=n!==void 0&&/mainUv/.test(n);if(e.attributes|=t.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(o&&(e.attributes&Ts.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!r&&!o)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=e.shaderParts;let c=l.get(pe.FRAGMENT_HEAD)||"",h=l.get(pe.FRAGMENT_MAIN_UV)||"",u=l.get(pe.FRAGMENT_MAIN_IMAGE)||"",f=l.get(pe.VERTEX_HEAD)||"",d=l.get(pe.VERTEX_MAIN_SUPPORT)||"";const _=new Set,v=new Set;if(o&&(h+=`	${i}MainUv(UV);
`,e.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const A=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${i}MainSupport(`,d+=A?`vUv);
`:`);
`;for(const y of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const x of y[1].split(/\s*,\s*/))e.varyings.add(x),_.add(x),v.add(x);for(const y of s.matchAll(a))v.add(y[1])}for(const A of n.matchAll(a))v.add(A[1]);for(const A of t.defines.keys())v.add(A.replace(/\([\w\s,]*\)/g,""));for(const A of t.uniforms.keys())v.add(A);v.delete("while"),v.delete("for"),v.delete("if"),t.uniforms.forEach((A,y)=>e.uniforms.set(i+y.charAt(0).toUpperCase()+y.slice(1),A)),t.defines.forEach((A,y)=>e.defines.set(i+y.charAt(0).toUpperCase()+y.slice(1),A));const p=new Map([["fragment",n],["vertex",s]]);bf(i,v,e.defines),bf(i,v,p),n=p.get("fragment"),s=p.get("vertex");const m=t.blendMode;if(e.blendModes.set(m.blendFunction,m),r){t.inputColorSpace!==null&&t.inputColorSpace!==e.colorSpace&&(u+=t.inputColorSpace===Te?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==Dn?e.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(e.colorSpace=t.inputColorSpace);const A=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${i}MainImage(color0, UV, `,(e.attributes&Ts.DEPTH)!==0&&A.test(n)&&(u+="depth, ",e.readDepth=!0),u+=`color1);
	`;const y=i+"BlendOpacity";e.uniforms.set(y,m.opacity),u+=`color0 = blend${m.blendFunction}(color0, color1, ${y});

	`,c+=`uniform float ${y};

`}if(c+=n+`
`,s!==null&&(f+=s+`
`),l.set(pe.FRAGMENT_HEAD,c),l.set(pe.FRAGMENT_MAIN_UV,h),l.set(pe.FRAGMENT_MAIN_IMAGE,u),l.set(pe.VERTEX_HEAD,f),l.set(pe.VERTEX_MAIN_SUPPORT,d),t.extensions!==null)for(const A of t.extensions)e.extensions.add(A)}}var BM=class extends an{constructor(i,...t){super("EffectPass"),this.fullscreenMaterial=new CM(null,null,null,i),this.listener=e=>this.handleEvent(e),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const t of this.effects)t.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const t of this.effects)t.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const t=this.fullscreenMaterial;t.dithering=i,t.needsUpdate=!0}setEffects(i){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=i.sort((t,e)=>e.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const i=new MA;let t=0;for(const o of this.effects)if(o.blendMode.blendFunction===ie.DST)i.attributes|=o.getAttributes()&Ts.DEPTH;else{if((i.attributes&o.getAttributes()&Ts.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${o.name})`);RM("e"+t++,o,i)}let e=i.shaderParts.get(pe.FRAGMENT_HEAD),n=i.shaderParts.get(pe.FRAGMENT_MAIN_IMAGE),s=i.shaderParts.get(pe.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const o of i.blendModes.values())e+=o.getShaderCode().replace(r,`blend${o.blendFunction}`)+`
`;(i.attributes&Ts.DEPTH)!==0?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===Te&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(pe.FRAGMENT_HEAD,e),i.shaderParts.set(pe.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(pe.FRAGMENT_MAIN_UV,s);for(const[o,a]of i.shaderParts)a!==null&&i.shaderParts.set(o,a.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,t=sa){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=t;for(const e of this.effects)e.setDepthTexture(i,t)}render(i,t,e,n,s){for(const r of this.effects)r.update(i,t,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=t.texture,r.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:e),i.render(this.scene,this.camera)}}setSize(i,t){this.fullscreenMaterial.setSize(i,t);for(const e of this.effects)e.setSize(i,t)}initialize(i,t,e){this.renderer=i;for(const n of this.effects)n.initialize(i,t,e);this.updateMaterial(),e!==void 0&&e!==_i&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};class PM extends an{constructor(t,e){super("BackgroundPass"),this.bgScene=t,this.bgCamera=e,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(n),t.autoClear=!1,t.clear(),t.render(this.bgScene,this.bgCamera),t.autoClear=!0}}class IM{constructor(t,e,n,s,r){this.composer=new AA(t),this.bgPass=new PM(s,r),this.renderPass=new SM(e,n),this.renderPass.clear=!1,this.renderPass.clearDepth=!0,this.bloom=new yM({intensity:1.2,luminanceThreshold:.55,luminanceSmoothing:.22,kernelSize:Dl.MEDIUM}),this.chromatic=new MM({offset:new at(0,0),radialModulation:!0,modulationOffset:.15}),this.vignette=new TM({eskil:!1,offset:.38,darkness:.22}),this.effectPass=new BM(n,this.bloom,this.chromatic,this.vignette),this.composer.addPass(this.bgPass),this.composer.addPass(this.renderPass),this.composer.addPass(this.effectPass)}update(t,e,n){const s=t*t,r=.9+s*2.8+(1-e)*.2;this.bloom.intensity+=(r-this.bloom.intensity)*(1-Math.pow(.01,n));const o=s*.006;this.chromatic.offset.set(o,o*.6),this.vignette.darkness=.18+e*.48}render(t){this.composer.render(t)}setSize(t,e){this.composer.setSize(t,e)}}const LM=`// 인스턴스 파티클 버텍스 셰이더
// instanceMatrix: 위치·크기 (CPU에서 Object3D.updateMatrix로 계산)
// aLife: 남은 수명 비율 (1→0)
// aColor: RGB 색상
attribute float aLife;
attribute vec3 aColor;

varying float vLife;
varying vec3 vColor;
varying vec2 vLocalPos;   // 원형 마스킹용 로컬 위치 (-0.5~0.5)

void main() {
  vLife     = aLife;
  vColor    = aColor;
  vLocalPos = position.xy;  // PlaneGeometry: position.xy ∈ [-0.5, 0.5]

  vec4 mvPos = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPos;
}
`,DM=`// 인스턴스 파티클 프래그먼트 셰이더
// 원형 소프트 글로우 마스킹 + 수명 기반 페이드
precision mediump float;

varying float vLife;
varying vec3 vColor;

// gl_PointCoord 없이 PlaneGeometry UV를 직접 계산할 수 없으므로
// instanceMatrix를 통해 전달된 중심 기준 거리를 vLife/vColor만으로 계산.
// 대신 vertex 단에서 position.xy를 varying으로 전달해 원형 마스킹.
varying vec2 vLocalPos;

void main() {
  // 중심으로부터의 거리 (PlaneGeometry는 ±0.5 범위)
  float dist = length(vLocalPos);

  // 외곽 원형 클리핑
  float circle = 1.0 - smoothstep(0.28, 0.50, dist);

  // 중심 코어 글로우
  float core = 1.0 - smoothstep(0.0, 0.22, dist);

  float alpha = (circle * 0.75 + core * 0.55) * vLife * vLife;

  // 코어는 조금 더 밝게
  vec3 col = mix(vColor, vColor * 1.6 + 0.15, core * 0.5);

  gl_FragColor = vec4(col, alpha);
}
`,fs=512,Tf=.28;class UM{constructor(){const t=new Li(1,1),e=new ei({vertexShader:LM,fragmentShader:DM,transparent:!0,depthWrite:!1,blending:Hc});this.mesh=new O_(t,e,fs),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this._lifeArr=new Float32Array(fs),this._colorArr=new Float32Array(fs*3);const n=new Tl(this._lifeArr,1),s=new Tl(this._colorArr,3);this.mesh.geometry.setAttribute("aLife",n),this.mesh.geometry.setAttribute("aColor",s),this._lifeAttr=n,this._colorAttr=s,this._pool=Array.from({length:fs},()=>({active:!1,life:0,maxLife:1,vx:0,vy:0,x:0,y:0,size:8,gravityScale:Tf,r:1,g:1,b:1})),this._dummy=new bi,this._dummy.scale.setScalar(0),this._dummy.updateMatrix();for(let r=0;r<fs;r++)this.mesh.setMatrixAt(r,this._dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0}spawn(t,e,n,s=12,r=120,o={}){const{spreadAngle:a=Math.PI*2,gravityScale:l=Tf,sizeMin:c=4,sizeMax:h=14,lifeMin:u=.35,lifeMax:f=.75,biasAngle:d=Math.PI/2}=o,_=new Qt(n);let v=0;for(let p=0;p<fs&&v<s;p++){const m=this._pool[p];if(m.active)continue;const A=d+(Math.random()-.5)*a,y=r*(.4+Math.random()*.9);m.active=!0,m.x=t,m.y=e,m.vx=Math.cos(A)*y,m.vy=Math.sin(A)*y,m.size=c+Math.random()*(h-c),m.maxLife=u+Math.random()*(f-u),m.life=m.maxLife,m.gravityScale=l,m.r=_.r,m.g=_.g,m.b=_.b,v++}}spawnBurst(t,e,n,s=20,r=180){this.spawn(t,e,n,s,r,{spreadAngle:Math.PI*2,sizeMin:5,sizeMax:18,lifeMin:.4,lifeMax:.9,biasAngle:Math.PI/2})}spawnDirt(t,e,n=28){this.spawn(t,e,7162945,Math.floor(n*.55),150,{spreadAngle:Math.PI,sizeMin:6,sizeMax:22,lifeMin:.55,lifeMax:1.2,biasAngle:Math.PI/2}),this.spawn(t,e,12364452,Math.floor(n*.45),260,{spreadAngle:Math.PI*.9,sizeMin:3,sizeMax:9,lifeMin:.25,lifeMax:.65,biasAngle:Math.PI/2})}spawnRating(t,e,n,s=16){this.spawn(t,e,n,s,240,{spreadAngle:Math.PI*.6,sizeMin:4,sizeMax:12,lifeMin:.3,lifeMax:.7,biasAngle:Math.PI/2,gravityScale:.12})}spawnFlameTrail(t,e,n,s){const r=Math.max(1,Math.round(n*4)),o=s+Math.PI;this.spawn(t,e,16737792,r,180+n*120,{spreadAngle:.9,sizeMin:5+n*8,sizeMax:10+n*16,lifeMin:.07,lifeMax:.18,biasAngle:o,gravityScale:.04}),this.spawn(t,e,16768256,Math.max(1,Math.round(r*.5)),260+n*80,{spreadAngle:.6,sizeMin:3,sizeMax:7+n*6,lifeMin:.04,lifeMax:.13,biasAngle:o,gravityScale:.02}),n>.7&&this.spawn(t,e,16777215,1,120,{spreadAngle:.3,sizeMin:4,sizeMax:8,lifeMin:.04,lifeMax:.09,biasAngle:o,gravityScale:.01})}update(t,e=980){let n=!1;for(let s=0;s<fs;s++){const r=this._pool[s];if(!r.active)continue;if(r.life-=t,r.life<=0){r.active=!1,this._dummy.scale.setScalar(0),this._dummy.position.set(0,0,0),this._dummy.updateMatrix(),this.mesh.setMatrixAt(s,this._dummy.matrix),this._lifeArr[s]=0,n=!0;continue}r.vy-=e*r.gravityScale*t,r.x+=r.vx*t,r.y+=r.vy*t;const o=r.life/r.maxLife,a=r.size*o;this._dummy.position.set(r.x,r.y,.2),this._dummy.rotation.z=r.life*14,this._dummy.scale.setScalar(a),this._dummy.updateMatrix(),this.mesh.setMatrixAt(s,this._dummy.matrix),this._lifeArr[s]=o,this._colorArr[s*3]=r.r,this._colorArr[s*3+1]=r.g,this._colorArr[s*3+2]=r.b,n=!0}n&&(this.mesh.instanceMatrix.needsUpdate=!0,this._lifeAttr.needsUpdate=!0,this._colorAttr.needsUpdate=!0)}clear(){for(const t of this._pool)t.active=!1,t.life=0;this._dummy.scale.setScalar(0),this._dummy.updateMatrix();for(let t=0;t<fs;t++)this.mesh.setMatrixAt(t,this._dummy.matrix),this._lifeArr[t]=0;this.mesh.instanceMatrix.needsUpdate=!0,this._lifeAttr.needsUpdate=!0}}const rt=Object.freeze({TITLE:"TITLE",SLINGING:"SLINGING",FLYING:"FLYING",ROLLING:"ROLLING",FALLING:"FALLING",GAMEOVER:"GAMEOVER"}),NM={[rt.TITLE]:[rt.SLINGING],[rt.SLINGING]:[rt.FLYING,rt.TITLE],[rt.FLYING]:[rt.ROLLING,rt.SLINGING,rt.GAMEOVER],[rt.ROLLING]:[rt.FALLING,rt.GAMEOVER],[rt.FALLING]:[rt.ROLLING,rt.GAMEOVER],[rt.GAMEOVER]:[rt.SLINGING,rt.TITLE]};class FM{constructor(t=rt.TITLE){this.current=t,this.listeners=[]}onChange(t){this.listeners.push(t)}canTransition(t){return NM[this.current]?.includes(t)??!1}transition(t){if(!this.canTransition(t))return console.warn(`[state] 잘못된 전환: ${this.current} → ${t}`),!1;const e=this.current;this.current=t;for(const n of this.listeners)n(e,t);return!0}is(t){return this.current===t}}/**
 * Planck.js v1.5.0
 * @license The MIT license
 * @copyright Copyright (c) 2026 Erin Catto, Ali Shakiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var Ih=function(i,t){return Ih=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])},Ih(i,t)};function yi(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ih(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var gi=function(){return gi=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},gi.apply(this,arguments)};var qi=function(i,t){(i===null||typeof i>"u")&&(i={});var e=gi({},i);for(var n in t)t.hasOwnProperty(n)&&typeof i[n]>"u"&&(e[n]=t[n]);if(typeof Object.getOwnPropertySymbols=="function")for(var s=Object.getOwnPropertySymbols(t),r=0;r<s.length;r++){var o=s[r];t.propertyIsEnumerable(o)&&typeof i[o]>"u"&&(e[o]=t[o])}return e},OM=Math.random,Ti=1e-9,zM=Number.isFinite;function VM(i){return i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i|=i>>16,i+1}function GM(i){return i>0&&(i&i-1)===0}function Em(i,t,e){return typeof t>"u"?(e=1,t=0):typeof e>"u"&&(e=t,t=0),e>t?(i=(i-t)%(e-t),i+(i<0?e:t)):(i=(i-e)%(t-e),i+(i<=0?t:e))}function ai(i,t,e){return i<t?t:i>e?e:i}function kM(i,t){return typeof i>"u"?(t=1,i=0):typeof t>"u"&&(t=i,i=0),i===t?i:OM()*(t-i)+i}var vr=Object.create(Math);vr.EPSILON=Ti;vr.isFinite=zM;vr.nextPowerOfTwo=VM;vr.isPowerOfTwo=GM;vr.mod=Em;vr.clamp=ai;vr.random=kM;var wf=Math.abs,yc=Math.sqrt,Ef=Math.max,Cf=Math.min,g=(function(){function i(t,e){if(!(this instanceof i))return new i(t,e);typeof t>"u"?(this.x=0,this.y=0):typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}return i.prototype._serialize=function(){return{x:this.x,y:this.y}},i._deserialize=function(t){var e=Object.create(i.prototype);return e.x=t.x,e.y=t.y,e},i.zero=function(){var t=Object.create(i.prototype);return t.x=0,t.y=0,t},i.neo=function(t,e){var n=Object.create(i.prototype);return n.x=t,n.y=e,n},i.clone=function(t){return i.neo(t.x,t.y)},i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.x)&&Number.isFinite(t.y)},i.assert=function(t){},i.prototype.clone=function(){return i.clone(this)},i.prototype.setZero=function(){return this.x=0,this.y=0,this},i.prototype.set=function(t,e){return typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e),this},i.prototype.setNum=function(t,e){return this.x=t,this.y=e,this},i.prototype.setVec2=function(t){return this.x=t.x,this.y=t.y,this},i.prototype.wSet=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?this.setCombine(t,e,n,s):this.setMul(t,e)},i.prototype.setCombine=function(t,e,n,s){var r=t*e.x+n*s.x,o=t*e.y+n*s.y;return this.x=r,this.y=o,this},i.prototype.setMul=function(t,e){var n=t*e.x,s=t*e.y;return this.x=n,this.y=s,this},i.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},i.prototype.wAdd=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?this.addCombine(t,e,n,s):this.addMul(t,e)},i.prototype.addCombine=function(t,e,n,s){var r=t*e.x+n*s.x,o=t*e.y+n*s.y;return this.x+=r,this.y+=o,this},i.prototype.addMul=function(t,e){var n=t*e.x,s=t*e.y;return this.x+=n,this.y+=s,this},i.prototype.wSub=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?this.subCombine(t,e,n,s):this.subMul(t,e)},i.prototype.subCombine=function(t,e,n,s){var r=t*e.x+n*s.x,o=t*e.y+n*s.y;return this.x-=r,this.y-=o,this},i.prototype.subMul=function(t,e){var n=t*e.x,s=t*e.y;return this.x-=n,this.y-=s,this},i.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},i.prototype.mul=function(t){return this.x*=t,this.y*=t,this},i.prototype.length=function(){return i.lengthOf(this)},i.prototype.lengthSquared=function(){return i.lengthSquared(this)},i.prototype.normalize=function(){var t=this.length();if(t<Ti)return 0;var e=1/t;return this.x*=e,this.y*=e,t},i.normalize=function(t){var e=i.lengthOf(t);if(e<Ti)return i.zero();var n=1/e;return i.neo(t.x*n,t.y*n)},i.lengthOf=function(t){return yc(t.x*t.x+t.y*t.y)},i.lengthSquared=function(t){return t.x*t.x+t.y*t.y},i.distance=function(t,e){var n=t.x-e.x,s=t.y-e.y;return yc(n*n+s*s)},i.distanceSquared=function(t,e){var n=t.x-e.x,s=t.y-e.y;return n*n+s*s},i.areEqual=function(t,e){return t===e||typeof e=="object"&&e!==null&&t.x===e.x&&t.y===e.y},i.skew=function(t){return i.neo(-t.y,t.x)},i.dot=function(t,e){return t.x*e.x+t.y*e.y},i.cross=function(t,e){return typeof e=="number"?i.neo(e*t.y,-e*t.x):typeof t=="number"?i.neo(-t*e.y,t*e.x):t.x*e.y-t.y*e.x},i.crossVec2Vec2=function(t,e){return t.x*e.y-t.y*e.x},i.crossVec2Num=function(t,e){return i.neo(e*t.y,-e*t.x)},i.crossNumVec2=function(t,e){return i.neo(-t*e.y,t*e.x)},i.addCross=function(t,e,n){if(typeof n=="number")return i.neo(n*e.y+t.x,-n*e.x+t.y);if(typeof e=="number")return i.neo(-e*n.y+t.x,e*n.x+t.y)},i.addCrossVec2Num=function(t,e,n){return i.neo(n*e.y+t.x,-n*e.x+t.y)},i.addCrossNumVec2=function(t,e,n){return i.neo(-e*n.y+t.x,e*n.x+t.y)},i.add=function(t,e){return i.neo(t.x+e.x,t.y+e.y)},i.wAdd=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?i.combine(t,e,n,s):i.mulNumVec2(t,e)},i.combine=function(t,e,n,s){return i.zero().setCombine(t,e,n,s)},i.sub=function(t,e){return i.neo(t.x-e.x,t.y-e.y)},i.mul=function(t,e){if(typeof t=="object")return i.neo(t.x*e,t.y*e);if(typeof e=="object")return i.neo(t*e.x,t*e.y)},i.mulVec2Num=function(t,e){return i.neo(t.x*e,t.y*e)},i.mulNumVec2=function(t,e){return i.neo(t*e.x,t*e.y)},i.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this},i.neg=function(t){return i.neo(-t.x,-t.y)},i.abs=function(t){return i.neo(wf(t.x),wf(t.y))},i.mid=function(t,e){return i.neo((t.x+e.x)*.5,(t.y+e.y)*.5)},i.upper=function(t,e){return i.neo(Ef(t.x,e.x),Ef(t.y,e.y))},i.lower=function(t,e){return i.neo(Cf(t.x,e.x),Cf(t.y,e.y))},i.prototype.clamp=function(t){var e=this.x*this.x+this.y*this.y;if(e>t*t){var n=t/yc(e);this.x*=n,this.y*=n}return this},i.clamp=function(t,e){var n=i.neo(t.x,t.y);return n.clamp(e),n},i.clampVec2=function(t,e,n){return{x:ai(t.x,e?.x,n?.x),y:ai(t.y,e?.y,n?.y)}},i.scaleFn=function(t,e){return function(n){return i.neo(n.x*t,n.y*e)}},i.translateFn=function(t,e){return function(n){return i.neo(n.x+t,n.y+e)}},i})(),Zi=Math.max,Ki=Math.min,hi=(function(){function i(t,e){if(!(this instanceof i))return new i(t,e);this.lowerBound=g.zero(),this.upperBound=g.zero(),typeof t=="object"&&this.lowerBound.setVec2(t),typeof e=="object"?this.upperBound.setVec2(e):typeof t=="object"&&this.upperBound.setVec2(t)}return i.prototype.isValid=function(){return i.isValid(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.lowerBound)&&g.isValid(t.upperBound)&&g.sub(t.upperBound,t.lowerBound).lengthSquared()>=0},i.assert=function(t){},i.prototype.getCenter=function(){return g.neo((this.lowerBound.x+this.upperBound.x)*.5,(this.lowerBound.y+this.upperBound.y)*.5)},i.prototype.getExtents=function(){return g.neo((this.upperBound.x-this.lowerBound.x)*.5,(this.upperBound.y-this.lowerBound.y)*.5)},i.prototype.getPerimeter=function(){return 2*(this.upperBound.x-this.lowerBound.x+this.upperBound.y-this.lowerBound.y)},i.prototype.combine=function(t,e){e=e||this;var n=t.lowerBound,s=t.upperBound,r=e.lowerBound,o=e.upperBound,a=Ki(n.x,r.x),l=Ki(n.y,r.y),c=Zi(o.x,s.x),h=Zi(o.y,s.y);this.lowerBound.setNum(a,l),this.upperBound.setNum(c,h)},i.prototype.combinePoints=function(t,e){this.lowerBound.setNum(Ki(t.x,e.x),Ki(t.y,e.y)),this.upperBound.setNum(Zi(t.x,e.x),Zi(t.y,e.y))},i.prototype.set=function(t){this.lowerBound.setNum(t.lowerBound.x,t.lowerBound.y),this.upperBound.setNum(t.upperBound.x,t.upperBound.y)},i.prototype.contains=function(t){var e=!0;return e=e&&this.lowerBound.x<=t.lowerBound.x,e=e&&this.lowerBound.y<=t.lowerBound.y,e=e&&t.upperBound.x<=this.upperBound.x,e=e&&t.upperBound.y<=this.upperBound.y,e},i.prototype.extend=function(t){return i.extend(this,t),this},i.extend=function(t,e){return t.lowerBound.x-=e,t.lowerBound.y-=e,t.upperBound.x+=e,t.upperBound.y+=e,t},i.testOverlap=function(t,e){var n=e.lowerBound.x-t.upperBound.x,s=t.lowerBound.x-e.upperBound.x,r=e.lowerBound.y-t.upperBound.y,o=t.lowerBound.y-e.upperBound.y;return!(n>0||r>0||s>0||o>0)},i.areEqual=function(t,e){return g.areEqual(t.lowerBound,e.lowerBound)&&g.areEqual(t.upperBound,e.upperBound)},i.diff=function(t,e){var n=Zi(0,Ki(t.upperBound.x,e.upperBound.x)-Zi(e.lowerBound.x,t.lowerBound.x)),s=Zi(0,Ki(t.upperBound.y,e.upperBound.y)-Zi(e.lowerBound.y,t.lowerBound.y)),r=t.upperBound.x-t.lowerBound.x,o=t.upperBound.y-t.lowerBound.y,a=e.upperBound.x-e.lowerBound.x,l=e.upperBound.y-e.lowerBound.y;return r*o+a*l-n*s},i.prototype.rayCast=function(t,e){var n=-1/0,s=1/0,r=e.p1,o=g.sub(e.p2,e.p1),a=g.abs(o),l=g.zero();if(a.x<Ti){if(r.x<this.lowerBound.x||this.upperBound.x<r.x)return!1}else{var c=1/o.x,h=(this.lowerBound.x-r.x)*c,u=(this.upperBound.x-r.x)*c,f=-1;if(h>u){var d=h;h=u,u=d,f=1}if(h>n&&(l.setZero(),l.x=f,n=h),s=Ki(s,u),n>s)return!1}if(a.y<Ti){if(r.y<this.lowerBound.y||this.upperBound.y<r.y)return!1}else{var c=1/o.y,h=(this.lowerBound.y-r.y)*c,u=(this.upperBound.y-r.y)*c,f=-1;if(h>u){var d=h;h=u,u=d,f=1}if(h>n&&(l.setZero(),l.y=f,n=h),s=Ki(s,u),n>s)return!1}return n<0||e.maxFraction<n?!1:(t.fraction=n,t.normal=l,!0)},i.prototype.toString=function(){return JSON.stringify(this)},i.combinePoints=function(t,e,n){return t.lowerBound.x=Ki(e.x,n.x),t.lowerBound.y=Ki(e.y,n.y),t.upperBound.x=Zi(e.x,n.x),t.upperBound.y=Zi(e.y,n.y),t},i.combinedPerimeter=function(t,e){var n=Ki(t.lowerBound.x,e.lowerBound.x),s=Ki(t.lowerBound.y,e.lowerBound.y),r=Zi(t.upperBound.x,e.upperBound.x),o=Zi(t.upperBound.y,e.upperBound.y);return 2*(r-n+o-s)},i})(),Fa=Math.PI,Xt=(function(){function i(){}return Object.defineProperty(i,"polygonRadius",{get:function(){return 2*i.linearSlop},enumerable:!1,configurable:!0}),i.lengthUnitsPerMeter=1,i.maxManifoldPoints=2,i.maxPolygonVertices=12,i.aabbExtension=.1,i.aabbMultiplier=2,i.linearSlop=.005,i.angularSlop=2/180*Fa,i.maxSubSteps=8,i.maxTOIContacts=32,i.maxTOIIterations=20,i.maxDistanceIterations=20,i.velocityThreshold=1,i.maxLinearCorrection=.2,i.maxAngularCorrection=8/180*Fa,i.maxTranslation=2,i.maxRotation=.5*Fa,i.baumgarte=.2,i.toiBaugarte=.75,i.timeToSleep=.5,i.linearSleepTolerance=.01,i.angularSleepTolerance=2/180*Fa,i})(),ut=(function(){function i(){}return Object.defineProperty(i,"maxManifoldPoints",{get:function(){return Xt.maxManifoldPoints},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxPolygonVertices",{get:function(){return Xt.maxPolygonVertices},enumerable:!1,configurable:!0}),Object.defineProperty(i,"aabbExtension",{get:function(){return Xt.aabbExtension*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"aabbMultiplier",{get:function(){return Xt.aabbMultiplier},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSlop",{get:function(){return Xt.linearSlop*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSlopSquared",{get:function(){return Xt.linearSlop*Xt.lengthUnitsPerMeter*Xt.linearSlop*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"angularSlop",{get:function(){return Xt.angularSlop},enumerable:!1,configurable:!0}),Object.defineProperty(i,"polygonRadius",{get:function(){return 2*Xt.linearSlop},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxSubSteps",{get:function(){return Xt.maxSubSteps},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTOIContacts",{get:function(){return Xt.maxTOIContacts},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTOIIterations",{get:function(){return Xt.maxTOIIterations},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxDistanceIterations",{get:function(){return Xt.maxDistanceIterations},enumerable:!1,configurable:!0}),Object.defineProperty(i,"velocityThreshold",{get:function(){return Xt.velocityThreshold*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxLinearCorrection",{get:function(){return Xt.maxLinearCorrection*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxAngularCorrection",{get:function(){return Xt.maxAngularCorrection},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTranslation",{get:function(){return Xt.maxTranslation*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTranslationSquared",{get:function(){return Xt.maxTranslation*Xt.lengthUnitsPerMeter*Xt.maxTranslation*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxRotation",{get:function(){return Xt.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxRotationSquared",{get:function(){return Xt.maxRotation*Xt.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(i,"baumgarte",{get:function(){return Xt.baumgarte},enumerable:!1,configurable:!0}),Object.defineProperty(i,"toiBaugarte",{get:function(){return Xt.toiBaugarte},enumerable:!1,configurable:!0}),Object.defineProperty(i,"timeToSleep",{get:function(){return Xt.timeToSleep},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSleepTolerance",{get:function(){return Xt.linearSleepTolerance*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSleepToleranceSqr",{get:function(){return Xt.linearSleepTolerance*Xt.lengthUnitsPerMeter*Xt.linearSleepTolerance*Xt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"angularSleepTolerance",{get:function(){return Xt.angularSleepTolerance},enumerable:!1,configurable:!0}),Object.defineProperty(i,"angularSleepToleranceSqr",{get:function(){return Xt.angularSleepTolerance*Xt.angularSleepTolerance},enumerable:!1,configurable:!0}),i})(),Xo=(function(){function i(t){this._list=[],this._max=1/0,this._hasCreateFn=!1,this._createCount=0,this._hasAllocateFn=!1,this._allocateCount=0,this._hasReleaseFn=!1,this._releaseCount=0,this._hasDisposeFn=!1,this._disposeCount=0,this._list=[],this._max=t.max||this._max,this._createFn=t.create,this._hasCreateFn=typeof this._createFn=="function",this._allocateFn=t.allocate,this._hasAllocateFn=typeof this._allocateFn=="function",this._releaseFn=t.release,this._hasReleaseFn=typeof this._releaseFn=="function",this._disposeFn=t.dispose,this._hasDisposeFn=typeof this._disposeFn=="function"}return i.prototype.max=function(t){return typeof t=="number"?(this._max=t,this):this._max},i.prototype.size=function(){return this._list.length},i.prototype.allocate=function(){var t;return this._list.length>0?t=this._list.shift():(this._createCount++,this._hasCreateFn?t=this._createFn():t={}),this._allocateCount++,this._hasAllocateFn&&this._allocateFn(t),t},i.prototype.release=function(t){this._list.length<this._max?(this._releaseCount++,this._hasReleaseFn&&this._releaseFn(t),this._list.push(t)):(this._disposeCount++,this._hasDisposeFn&&(t=this._disposeFn(t)))},i.prototype.toString=function(){return" +"+this._createCount+" >"+this._allocateCount+" <"+this._releaseCount+" -"+this._disposeCount+" ="+this._list.length+"/"+this._max},i})(),Rf=Math.abs,Oi=Math.max,HM=(function(){function i(t){this.aabb=new hi,this.userData=null,this.parent=null,this.child1=null,this.child2=null,this.height=-1,this.id=t}return i.prototype.toString=function(){return this.id+": "+this.userData},i.prototype.isLeaf=function(){return this.child1==null},i})(),Bf=new Xo({create:function(){return new HM},release:function(i){i.userData=null,i.parent=null,i.child1=null,i.child2=null,i.height=-1,i.id=void 0}}),WM=(function(){function i(){this.inputPool=new Xo({create:function(){return{}},release:function(t){}}),this.stackPool=new Xo({create:function(){return[]},release:function(t){t.length=0}}),this.iteratorPool=new Xo({create:function(){return new qM},release:function(t){t.close()}}),this.m_root=null,this.m_nodes={},this.m_lastProxyId=0}return i.prototype.getUserData=function(t){var e=this.m_nodes[t];return e.userData},i.prototype.getFatAABB=function(t){var e=this.m_nodes[t];return e.aabb},i.prototype.allocateNode=function(){var t=Bf.allocate();return t.id=++this.m_lastProxyId,this.m_nodes[t.id]=t,t},i.prototype.freeNode=function(t){delete this.m_nodes[t.id],Bf.release(t)},i.prototype.createProxy=function(t,e){var n=this.allocateNode();return n.aabb.set(t),hi.extend(n.aabb,ut.aabbExtension),n.userData=e,n.height=0,this.insertLeaf(n),n.id},i.prototype.destroyProxy=function(t){var e=this.m_nodes[t];this.removeLeaf(e),this.freeNode(e)},i.prototype.moveProxy=function(t,e,n){var s=this.m_nodes[t];return s.aabb.contains(e)?!1:(this.removeLeaf(s),s.aabb.set(e),e=s.aabb,hi.extend(e,ut.aabbExtension),n.x<0?e.lowerBound.x+=n.x*ut.aabbMultiplier:e.upperBound.x+=n.x*ut.aabbMultiplier,n.y<0?e.lowerBound.y+=n.y*ut.aabbMultiplier:e.upperBound.y+=n.y*ut.aabbMultiplier,this.insertLeaf(s),!0)},i.prototype.insertLeaf=function(t){if(this.m_root==null){this.m_root=t,this.m_root.parent=null;return}for(var e=t.aabb,n=this.m_root;!n.isLeaf();){var s=n.child1,r=n.child2,o=n.aabb.getPerimeter(),a=hi.combinedPerimeter(n.aabb,e),l=2*a,c=2*(a-o),h=hi.combinedPerimeter(e,s.aabb),u=h+c;if(!s.isLeaf()){var f=s.aabb.getPerimeter();u-=f}var d=hi.combinedPerimeter(e,r.aabb),_=d+c;if(!r.isLeaf()){var f=r.aabb.getPerimeter();_-=f}if(l<u&&l<_)break;u<_?n=s:n=r}var v=n,p=v.parent,m=this.allocateNode();for(m.parent=p,m.userData=null,m.aabb.combine(e,v.aabb),m.height=v.height+1,p!=null?(p.child1===v?p.child1=m:p.child2=m,m.child1=v,m.child2=t,v.parent=m,t.parent=m):(m.child1=v,m.child2=t,v.parent=m,t.parent=m,this.m_root=m),n=t.parent;n!=null;){n=this.balance(n);var s=n.child1,r=n.child2;n.height=1+Oi(s.height,r.height),n.aabb.combine(s.aabb,r.aabb),n=n.parent}},i.prototype.removeLeaf=function(t){if(t===this.m_root){this.m_root=null;return}var e=t.parent,n=e.parent,s;if(e.child1===t?s=e.child2:s=e.child1,n!=null){n.child1===e?n.child1=s:n.child2=s,s.parent=n,this.freeNode(e);for(var r=n;r!=null;){r=this.balance(r);var o=r.child1,a=r.child2;r.aabb.combine(o.aabb,a.aabb),r.height=1+Oi(o.height,a.height),r=r.parent}}else this.m_root=s,s.parent=null,this.freeNode(e)},i.prototype.balance=function(t){var e=t;if(e.isLeaf()||e.height<2)return t;var n=e.child1,s=e.child2,r=s.height-n.height;if(r>1){var o=s.child1,a=s.child2;return s.child1=e,s.parent=e.parent,e.parent=s,s.parent!=null?s.parent.child1===t?s.parent.child1=s:s.parent.child2=s:this.m_root=s,o.height>a.height?(s.child2=o,e.child2=a,a.parent=e,e.aabb.combine(n.aabb,a.aabb),s.aabb.combine(e.aabb,o.aabb),e.height=1+Oi(n.height,a.height),s.height=1+Oi(e.height,o.height)):(s.child2=a,e.child2=o,o.parent=e,e.aabb.combine(n.aabb,o.aabb),s.aabb.combine(e.aabb,a.aabb),e.height=1+Oi(n.height,o.height),s.height=1+Oi(e.height,a.height)),s}if(r<-1){var l=n.child1,c=n.child2;return n.child1=e,n.parent=e.parent,e.parent=n,n.parent!=null?n.parent.child1===e?n.parent.child1=n:n.parent.child2=n:this.m_root=n,l.height>c.height?(n.child2=l,e.child1=c,c.parent=e,e.aabb.combine(s.aabb,c.aabb),n.aabb.combine(e.aabb,l.aabb),e.height=1+Oi(s.height,c.height),n.height=1+Oi(e.height,l.height)):(n.child2=c,e.child1=l,l.parent=e,e.aabb.combine(s.aabb,l.aabb),n.aabb.combine(e.aabb,c.aabb),e.height=1+Oi(s.height,l.height),n.height=1+Oi(e.height,c.height)),n}return e},i.prototype.getHeight=function(){return this.m_root==null?0:this.m_root.height},i.prototype.getAreaRatio=function(){if(this.m_root==null)return 0;for(var t=this.m_root,e=t.aabb.getPerimeter(),n=0,s,r=this.iteratorPool.allocate().preorder(this.m_root);s=r.next();)s.height<0||(n+=s.aabb.getPerimeter());return this.iteratorPool.release(r),n/e},i.prototype.computeHeight=function(t){var e;if(typeof t<"u"?e=this.m_nodes[t]:e=this.m_root,e.isLeaf())return 0;var n=this.computeHeight(e.child1.id),s=this.computeHeight(e.child2.id);return 1+Oi(n,s)},i.prototype.validateStructure=function(t){if(t!=null){this.m_root;var e=t.child1,n=t.child2;t.isLeaf()||(this.validateStructure(e),this.validateStructure(n))}},i.prototype.validateMetrics=function(t){if(t!=null){var e=t.child1,n=t.child2;t.isLeaf()||(this.validateMetrics(e),this.validateMetrics(n))}},i.prototype.validate=function(){},i.prototype.getMaxBalance=function(){for(var t=0,e,n=this.iteratorPool.allocate().preorder(this.m_root);e=n.next();)if(!(e.height<=1)){var s=Rf(e.child2.height-e.child1.height);t=Oi(t,s)}return this.iteratorPool.release(n),t},i.prototype.rebuildBottomUp=function(){for(var t=[],e=0,n,s=this.iteratorPool.allocate().preorder(this.m_root);n=s.next();)n.height<0||(n.isLeaf()?(n.parent=null,t[e]=n,++e):this.freeNode(n));for(this.iteratorPool.release(s);e>1;){for(var r=1/0,o=-1,a=-1,l=0;l<e;++l)for(var c=t[l].aabb,h=l+1;h<e;++h){var u=t[h].aabb,f=hi.combinedPerimeter(c,u);f<r&&(o=l,a=h,r=f)}var d=t[o],_=t[a],v=this.allocateNode();v.child1=d,v.child2=_,v.height=1+Oi(d.height,_.height),v.aabb.combine(d.aabb,_.aabb),v.parent=null,d.parent=v,_.parent=v,t[a]=t[e-1],t[o]=v,--e}this.m_root=t[0]},i.prototype.shiftOrigin=function(t){for(var e,n=this.iteratorPool.allocate().preorder(this.m_root);e=n.next();){var s=e.aabb;s.lowerBound.x-=t.x,s.lowerBound.y-=t.y,s.upperBound.x-=t.x,s.upperBound.y-=t.y}this.iteratorPool.release(n)},i.prototype.query=function(t,e){var n=this.stackPool.allocate();for(n.push(this.m_root);n.length>0;){var s=n.pop();if(s!=null&&hi.testOverlap(s.aabb,t))if(s.isLeaf()){var r=e(s.id);if(r===!1)return}else n.push(s.child1),n.push(s.child2)}this.stackPool.release(n)},i.prototype.rayCast=function(t,e){var n=t.p1,s=t.p2,r=g.sub(s,n);r.normalize();var o=g.crossNumVec2(1,r),a=g.abs(o),l=t.maxFraction,c=new hi,h=g.combine(1-l,n,l,s);c.combinePoints(n,h);var u=this.stackPool.allocate(),f=this.inputPool.allocate();for(u.push(this.m_root);u.length>0;){var d=u.pop();if(d!=null&&hi.testOverlap(d.aabb,c)!==!1){var _=d.aabb.getCenter(),v=d.aabb.getExtents(),p=Rf(g.dot(o,g.sub(n,_)))-g.dot(a,v);if(!(p>0))if(d.isLeaf()){f.p1=g.clone(t.p1),f.p2=g.clone(t.p2),f.maxFraction=l;var m=e(f,d.id);if(m===0)break;m>0&&(l=m,h=g.combine(1-l,n,l,s),c.combinePoints(n,h))}else u.push(d.child1),u.push(d.child2)}}this.stackPool.release(u),this.inputPool.release(f)},i})(),qM=(function(){function i(){this.parents=[],this.states=[]}return i.prototype.preorder=function(t){return this.parents.length=0,this.parents.push(t),this.states.length=0,this.states.push(0),this},i.prototype.next=function(){for(;this.parents.length>0;){var t=this.parents.length-1,e=this.parents[t];if(this.states[t]===0)return this.states[t]=1,e;if(this.states[t]===1&&(this.states[t]=2,e.child1))return this.parents.push(e.child1),this.states.push(1),e.child1;if(this.states[t]===2&&(this.states[t]=3,e.child2))return this.parents.push(e.child2),this.states.push(1),e.child2;this.parents.pop(),this.states.pop()}},i.prototype.close=function(){this.parents.length=0},i})(),XM=Math.max,YM=Math.min,$M=(function(){function i(){var t=this;this.m_tree=new WM,this.m_moveBuffer=[],this.query=function(e,n){t.m_tree.query(e,n)},this.queryCallback=function(e){if(e===t.m_queryProxyId)return!0;var n=YM(e,t.m_queryProxyId),s=XM(e,t.m_queryProxyId),r=t.m_tree.getUserData(n),o=t.m_tree.getUserData(s);return t.m_callback(r,o),!0}}return i.prototype.getUserData=function(t){return this.m_tree.getUserData(t)},i.prototype.testOverlap=function(t,e){var n=this.m_tree.getFatAABB(t),s=this.m_tree.getFatAABB(e);return hi.testOverlap(n,s)},i.prototype.getFatAABB=function(t){return this.m_tree.getFatAABB(t)},i.prototype.getProxyCount=function(){return this.m_moveBuffer.length},i.prototype.getTreeHeight=function(){return this.m_tree.getHeight()},i.prototype.getTreeBalance=function(){return this.m_tree.getMaxBalance()},i.prototype.getTreeQuality=function(){return this.m_tree.getAreaRatio()},i.prototype.rayCast=function(t,e){this.m_tree.rayCast(t,e)},i.prototype.shiftOrigin=function(t){this.m_tree.shiftOrigin(t)},i.prototype.createProxy=function(t,e){var n=this.m_tree.createProxy(t,e);return this.bufferMove(n),n},i.prototype.destroyProxy=function(t){this.unbufferMove(t),this.m_tree.destroyProxy(t)},i.prototype.moveProxy=function(t,e,n){var s=this.m_tree.moveProxy(t,e,n);s&&this.bufferMove(t)},i.prototype.touchProxy=function(t){this.bufferMove(t)},i.prototype.bufferMove=function(t){this.m_moveBuffer.push(t)},i.prototype.unbufferMove=function(t){for(var e=0;e<this.m_moveBuffer.length;++e)this.m_moveBuffer[e]===t&&(this.m_moveBuffer[e]=null)},i.prototype.updatePairs=function(t){for(this.m_callback=t;this.m_moveBuffer.length>0;)if(this.m_queryProxyId=this.m_moveBuffer.pop(),this.m_queryProxyId!==null){var e=this.m_tree.getFatAABB(this.m_queryProxyId);this.m_tree.query(e,this.queryCallback)}},i})(),Cm=Math.sin,Rm=Math.cos,$h=Math.sqrt;function X(i,t){return{x:i,y:t}}function JM(i){return{s:Cm(i),c:Rm(i)}}function ri(i,t,e){return i.x=t,i.y=e,i}function V(i,t){return i.x=t.x,i.y=t.y,i}function Ct(i){return i.x=0,i.y=0,i}function Qo(i){return i.x=-i.x,i.y=-i.y,i}function nn(i,t){return i.x+=t.x,i.y+=t.y,i}function ZM(i,t,e){return i.x=t.x+e.x,i.y=t.y+e.y,i}function Qn(i,t){return i.x-=t.x,i.y-=t.y,i}function Ot(i,t,e){return i.x=t.x-e.x,i.y=t.y-e.y,i}function Pf(i,t){return i.x*=t,i.y*=t,i}function Lt(i,t,e){return i.x=t*e.x,i.y=t*e.y,i}function Mn(i,t,e){return i.x+=t*e.x,i.y+=t*e.y,i}function Vo(i,t,e){return i.x-=t*e.x,i.y-=t*e.y,i}function Pe(i,t,e,n,s){return i.x=t*e.x+n*s.x,i.y=t*e.y+n*s.y,i}function Pn(i,t,e,n,s,r,o){return i.x=t*e.x+n*s.x+r*o.x,i.y=t*e.y+n*s.y+r*o.y,i}function KM(i){var t=$h(i.x*i.x+i.y*i.y);if(t!==0){var e=1/t;i.x*=e,i.y*=e}return t}function Sn(i){var t=$h(i.x*i.x+i.y*i.y);if(t>0){var e=1/t;i.x*=e,i.y*=e}return i}function sr(i,t,e){var n=e*t.y,s=-e*t.x;return i.x=n,i.y=s,i}function Gi(i,t,e){var n=-t*e.y,s=t*e.x;return i.x=n,i.y=s,i}function Yt(i,t){return i.x*t.y-i.y*t.x}function nt(i,t){return i.x*t.x+i.y*t.y}function rr(i){return i.x*i.x+i.y*i.y}function Bm(i,t){var e=i.x-t.x,n=i.y-t.y;return $h(e*e+n*n)}function or(i,t){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function jM(i,t){return i.c=Rm(t),i.s=Cm(t),i}function on(i,t,e){return i.x=t.c*e.x-t.s*e.y,i.y=t.s*e.x+t.c*e.y,i}function no(i,t,e){var n=t.c*e.x+t.s*e.y,s=-t.s*e.x+t.c*e.y;return i.x=n,i.y=s,i}function QM(i,t,e,n){var s=t.c*n.x+t.s*n.y,r=-t.s*n.x+t.c*n.y,o=e.c*s-e.s*r,a=e.s*s+e.c*r;return i.x=o,i.y=a,i}function gr(i,t,e){return{p:X(i,t),q:JM(e)}}function Rl(i,t){return i.p.x=t.p.x,i.p.y=t.p.y,i.q.s=t.q.s,i.q.c=t.q.c,i}function Ft(i,t,e){var n=t.q.c*e.x-t.q.s*e.y+t.p.x,s=t.q.s*e.x+t.q.c*e.y+t.p.y;return i.x=n,i.y=s,i}function Jh(i,t,e){var n=e.x-t.p.x,s=e.y-t.p.y,r=t.q.c*n+t.q.s*s,o=-t.q.s*n+t.q.c*s;return i.x=r,i.y=o,i}function Pm(i,t,e,n){var s=t.q.c*n.x-t.q.s*n.y+t.p.x,r=t.q.s*n.x+t.q.c*n.y+t.p.y,o=s-e.p.x,a=r-e.p.y,l=e.q.c*o+e.q.s*a,c=-e.q.s*o+e.q.c*a;return i.x=l,i.y=c,i}function Im(i,t,e){var n=t.q.c*e.q.c+t.q.s*e.q.s,s=t.q.c*e.q.s-t.q.s*e.q.c,r=t.q.c*(e.p.x-t.p.x)+t.q.s*(e.p.y-t.p.y),o=-t.q.s*(e.p.x-t.p.x)+t.q.c*(e.p.y-t.p.y);return i.q.c=n,i.q.s=s,i.p.x=r,i.p.y=o,i}var If=Math.sin,Lf=Math.cos,tS=Math.atan2,$=(function(){function i(t){if(!(this instanceof i))return new i(t);typeof t=="number"?this.setAngle(t):typeof t=="object"?this.setRot(t):this.setIdentity()}return i.neo=function(t){var e=Object.create(i.prototype);return e.setAngle(t),e},i.clone=function(t){var e=Object.create(i.prototype);return e.s=t.s,e.c=t.c,e},i.identity=function(){var t=Object.create(i.prototype);return t.s=0,t.c=1,t},i.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.s)&&Number.isFinite(t.c)},i.assert=function(t){},i.prototype.setIdentity=function(){this.s=0,this.c=1},i.prototype.set=function(t){typeof t=="object"?(this.s=t.s,this.c=t.c):(this.s=If(t),this.c=Lf(t))},i.prototype.setRot=function(t){this.s=t.s,this.c=t.c},i.prototype.setAngle=function(t){this.s=If(t),this.c=Lf(t)},i.prototype.getAngle=function(){return tS(this.s,this.c)},i.prototype.getXAxis=function(){return g.neo(this.c,this.s)},i.prototype.getYAxis=function(){return g.neo(-this.s,this.c)},i.mul=function(t,e){if("c"in e&&"s"in e){var n=i.identity();return n.s=t.s*e.c+t.c*e.s,n.c=t.c*e.c-t.s*e.s,n}else if("x"in e&&"y"in e)return g.neo(t.c*e.x-t.s*e.y,t.s*e.x+t.c*e.y)},i.mulRot=function(t,e){var n=i.identity();return n.s=t.s*e.c+t.c*e.s,n.c=t.c*e.c-t.s*e.s,n},i.mulVec2=function(t,e){return g.neo(t.c*e.x-t.s*e.y,t.s*e.x+t.c*e.y)},i.mulSub=function(t,e,n){var s=t.c*(e.x-n.x)-t.s*(e.y-n.y),r=t.s*(e.x-n.x)+t.c*(e.y-n.y);return g.neo(s,r)},i.mulT=function(t,e){if("c"in e&&"s"in e){var n=i.identity();return n.s=t.c*e.s-t.s*e.c,n.c=t.c*e.c+t.s*e.s,n}else if("x"in e&&"y"in e)return g.neo(t.c*e.x+t.s*e.y,-t.s*e.x+t.c*e.y)},i.mulTRot=function(t,e){var n=i.identity();return n.s=t.c*e.s-t.s*e.c,n.c=t.c*e.c+t.s*e.s,n},i.mulTVec2=function(t,e){return g.neo(t.c*e.x+t.s*e.y,-t.s*e.x+t.c*e.y)},i})(),eS=Math.atan2,Df=Math.PI,Os=X(0,0),mo=(function(){function i(){this.localCenter=g.zero(),this.c=g.zero(),this.a=0,this.alpha0=0,this.c0=g.zero(),this.a0=0}return i.prototype.recycle=function(){Ct(this.localCenter),Ct(this.c),this.a=0,this.alpha0=0,Ct(this.c0),this.a0=0},i.prototype.setTransform=function(t){Ft(Os,t,this.localCenter),V(this.c,Os),V(this.c0,Os),this.a=this.a0=eS(t.q.s,t.q.c)},i.prototype.setLocalCenter=function(t,e){V(this.localCenter,t),Ft(Os,e,this.localCenter),V(this.c,Os),V(this.c0,Os)},i.prototype.getTransform=function(t,e){e===void 0&&(e=0),jM(t.q,(1-e)*this.a0+e*this.a),Pe(t.p,1-e,this.c0,e,this.c),Qn(t.p,on(Os,t.q,this.localCenter))},i.prototype.advance=function(t){var e=(t-this.alpha0)/(1-this.alpha0);Pe(this.c0,e,this.c,1-e,this.c0),this.a0=e*this.a+(1-e)*this.a0,this.alpha0=t},i.prototype.forward=function(){this.a0=this.a,V(this.c0,this.c)},i.prototype.normalize=function(){var t=Em(this.a0,-Df,+Df);this.a-=this.a0-t,this.a0=t},i.prototype.set=function(t){V(this.localCenter,t.localCenter),V(this.c,t.c),this.a=t.a,this.alpha0=t.alpha0,V(this.c0,t.c0),this.a0=t.a0},i})(),bn=(function(){function i(t,e){if(!(this instanceof i))return new i(t,e);this.p=g.zero(),this.q=$.identity(),typeof t<"u"&&this.p.setVec2(t),typeof e<"u"&&this.q.setAngle(e)}return i.clone=function(t){var e=Object.create(i.prototype);return e.p=g.clone(t.p),e.q=$.clone(t.q),e},i.neo=function(t,e){var n=Object.create(i.prototype);return n.p=g.clone(t),n.q=$.clone(e),n},i.identity=function(){var t=Object.create(i.prototype);return t.p=g.zero(),t.q=$.identity(),t},i.prototype.setIdentity=function(){this.p.setZero(),this.q.setIdentity()},i.prototype.set=function(t,e){typeof e>"u"?(this.p.set(t.p),this.q.set(t.q)):(this.p.set(t),this.q.set(e))},i.prototype.setNum=function(t,e){this.p.setVec2(t),this.q.setAngle(e)},i.prototype.setTransform=function(t){this.p.setVec2(t.p),this.q.setRot(t.q)},i.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.p)&&$.isValid(t.q)},i.assert=function(t){},i.mul=function(t,e){if(Array.isArray(e)){for(var n=[],s=0;s<e.length;s++)n[s]=i.mul(t,e[s]);return n}else{if("x"in e&&"y"in e)return i.mulVec2(t,e);if("p"in e&&"q"in e)return i.mulXf(t,e)}},i.mulAll=function(t,e){for(var n=[],s=0;s<e.length;s++)n[s]=i.mul(t,e[s]);return n},i.mulFn=function(t){return function(e){return i.mul(t,e)}},i.mulVec2=function(t,e){var n=t.q.c*e.x-t.q.s*e.y+t.p.x,s=t.q.s*e.x+t.q.c*e.y+t.p.y;return g.neo(n,s)},i.mulXf=function(t,e){var n=i.identity();return n.q=$.mulRot(t.q,e.q),n.p=g.add($.mulVec2(t.q,e.p),t.p),n},i.mulT=function(t,e){if("x"in e&&"y"in e)return i.mulTVec2(t,e);if("p"in e&&"q"in e)return i.mulTXf(t,e)},i.mulTVec2=function(t,e){var n=e.x-t.p.x,s=e.y-t.p.y,r=t.q.c*n+t.q.s*s,o=-t.q.s*n+t.q.c*s;return g.neo(r,o)},i.mulTXf=function(t,e){var n=i.identity();return n.q.setRot($.mulTRot(t.q,e.q)),n.p.setVec2($.mulTVec2(t.q,g.sub(e.p,t.p))),n},i})(),iS=(function(){function i(){this.v=g.zero(),this.w=0}return i})(),Lm=Math.sin,Dm=Math.cos,nS=(function(){function i(){this.c=g.zero(),this.a=0}return i.prototype.getTransform=function(t,e){return t.q.c=Dm(this.a),t.q.s=Lm(this.a),t.p.x=this.c.x-(t.q.c*e.x-t.q.s*e.y),t.p.y=this.c.y-(t.q.s*e.x+t.q.c*e.y),t},i})();function Oa(i,t,e,n){return i.q.c=Dm(n),i.q.s=Lm(n),i.p.x=e.x-(i.q.c*t.x-i.q.s*t.y),i.p.y=e.y-(i.q.s*t.x+i.q.c*t.y),i}var yr=(function(){function i(){this.style={},this.appData={}}return i.isValid=function(t){return t===null||typeof t>"u"?!1:typeof t.m_type=="string"&&typeof t.m_radius=="number"},i})(),Uf=new hi,Nf=new hi,Ff=X(0,0),sS={userData:null,friction:.2,restitution:0,density:0,isSensor:!1,filterGroupIndex:0,filterCategoryBits:1,filterMaskBits:65535},Of=(function(){function i(t,e){this.aabb=new hi,this.fixture=t,this.childIndex=e}return i})(),Bl=(function(){function i(t,e,n){this.style={},this.appData={},e.shape?(n=e,e=e.shape):typeof n=="number"&&(n={density:n}),n=qi(n,sS),this.m_body=t,this.m_friction=n.friction,this.m_restitution=n.restitution,this.m_density=n.density,this.m_isSensor=n.isSensor,this.m_filterGroupIndex=n.filterGroupIndex,this.m_filterCategoryBits=n.filterCategoryBits,this.m_filterMaskBits=n.filterMaskBits,this.m_shape=e,this.m_next=null,this.m_proxies=[],this.m_proxyCount=0;for(var s=this.m_shape.getChildCount(),r=0;r<s;++r)this.m_proxies[r]=new Of(this,r);this.m_userData=n.userData,typeof n.style=="object"&&n.style!==null&&(this.style=n.style)}return i.prototype._reset=function(){var t=this.getBody(),e=t.m_world.m_broadPhase;this.destroyProxies(e),this.m_shape._reset&&this.m_shape._reset();for(var n=this.m_shape.getChildCount(),s=0;s<n;++s)this.m_proxies[s]=new Of(this,s);this.createProxies(e,t.m_xf),t.resetMassData()},i.prototype._serialize=function(){return{friction:this.m_friction,restitution:this.m_restitution,density:this.m_density,isSensor:this.m_isSensor,filterGroupIndex:this.m_filterGroupIndex,filterCategoryBits:this.m_filterCategoryBits,filterMaskBits:this.m_filterMaskBits,shape:this.m_shape}},i._deserialize=function(t,e,n){var s=n(yr,t.shape),r=s&&new i(e,s,t);return r},i.prototype.getType=function(){return this.m_shape.m_type},i.prototype.getShape=function(){return this.m_shape},i.prototype.isSensor=function(){return this.m_isSensor},i.prototype.setSensor=function(t){t!=this.m_isSensor&&(this.m_body.setAwake(!0),this.m_isSensor=t)},i.prototype.getUserData=function(){return this.m_userData},i.prototype.setUserData=function(t){this.m_userData=t},i.prototype.getBody=function(){return this.m_body},i.prototype.getNext=function(){return this.m_next},i.prototype.getDensity=function(){return this.m_density},i.prototype.setDensity=function(t){this.m_density=t},i.prototype.getFriction=function(){return this.m_friction},i.prototype.setFriction=function(t){this.m_friction=t},i.prototype.getRestitution=function(){return this.m_restitution},i.prototype.setRestitution=function(t){this.m_restitution=t},i.prototype.testPoint=function(t){return this.m_shape.testPoint(this.m_body.getTransform(),t)},i.prototype.rayCast=function(t,e,n){return this.m_shape.rayCast(t,e,this.m_body.getTransform(),n)},i.prototype.getMassData=function(t){this.m_shape.computeMass(t,this.m_density)},i.prototype.getAABB=function(t){return this.m_proxies[t].aabb},i.prototype.createProxies=function(t,e){this.m_proxyCount=this.m_shape.getChildCount();for(var n=0;n<this.m_proxyCount;++n){var s=this.m_proxies[n];this.m_shape.computeAABB(s.aabb,e,n),s.proxyId=t.createProxy(s.aabb,s)}},i.prototype.destroyProxies=function(t){for(var e=0;e<this.m_proxyCount;++e){var n=this.m_proxies[e];t.destroyProxy(n.proxyId),n.proxyId=null}this.m_proxyCount=0},i.prototype.synchronize=function(t,e,n){for(var s=0;s<this.m_proxyCount;++s){var r=this.m_proxies[s];this.m_shape.computeAABB(Uf,e,r.childIndex),this.m_shape.computeAABB(Nf,n,r.childIndex),r.aabb.combine(Uf,Nf),Ot(Ff,n.p,e.p),t.moveProxy(r.proxyId,r.aabb,Ff)}},i.prototype.setFilterData=function(t){this.m_filterGroupIndex=t.groupIndex,this.m_filterCategoryBits=t.categoryBits,this.m_filterMaskBits=t.maskBits,this.refilter()},i.prototype.getFilterGroupIndex=function(){return this.m_filterGroupIndex},i.prototype.setFilterGroupIndex=function(t){this.m_filterGroupIndex=t,this.refilter()},i.prototype.getFilterCategoryBits=function(){return this.m_filterCategoryBits},i.prototype.setFilterCategoryBits=function(t){this.m_filterCategoryBits=t,this.refilter()},i.prototype.getFilterMaskBits=function(){return this.m_filterMaskBits},i.prototype.setFilterMaskBits=function(t){this.m_filterMaskBits=t,this.refilter()},i.prototype.refilter=function(){if(this.m_body!=null){for(var t=this.m_body.getContactList();t;){var e=t.contact,n=e.getFixtureA(),s=e.getFixtureB();(n==this||s==this)&&e.flagForFiltering(),t=t.next}var r=this.m_body.getWorld();if(r!=null)for(var o=r.m_broadPhase,a=0;a<this.m_proxyCount;++a)o.touchProxy(this.m_proxies[a].proxyId)}},i.prototype.shouldCollide=function(t){if(t.m_filterGroupIndex===this.m_filterGroupIndex&&t.m_filterGroupIndex!==0)return t.m_filterGroupIndex>0;var e=(t.m_filterMaskBits&this.m_filterCategoryBits)!==0,n=(t.m_filterCategoryBits&this.m_filterMaskBits)!==0,s=e&&n;return s},i})(),to="static",zf="kinematic",dn="dynamic",za=X(0,0),zs=X(0,0),Va=X(0,0),Ga=X(0,0),Vf=gr(0,0,0),rS={type:to,position:g.zero(),angle:0,linearVelocity:g.zero(),angularVelocity:0,linearDamping:0,angularDamping:0,fixedRotation:!1,bullet:!1,gravityScale:1,allowSleep:!0,awake:!0,active:!0,userData:null},_e=(function(){function i(t,e){this.style={},this.appData={},e=qi(e,rS),this.m_world=t,this.m_awakeFlag=e.awake,this.m_autoSleepFlag=e.allowSleep,this.m_bulletFlag=e.bullet,this.m_fixedRotationFlag=e.fixedRotation,this.m_activeFlag=e.active,this.m_islandFlag=!1,this.m_toiFlag=!1,this.m_userData=e.userData,this.m_type=e.type,this.m_type==dn?(this.m_mass=1,this.m_invMass=1):(this.m_mass=0,this.m_invMass=0),this.m_I=0,this.m_invI=0,this.m_xf=bn.identity(),this.m_xf.p.setVec2(e.position),this.m_xf.q.setAngle(e.angle),this.m_sweep=new mo,this.m_sweep.setTransform(this.m_xf),this.c_velocity=new iS,this.c_position=new nS,this.m_force=g.zero(),this.m_torque=0,this.m_linearVelocity=g.clone(e.linearVelocity),this.m_angularVelocity=e.angularVelocity,this.m_linearDamping=e.linearDamping,this.m_angularDamping=e.angularDamping,this.m_gravityScale=e.gravityScale,this.m_sleepTime=0,this.m_jointList=null,this.m_contactList=null,this.m_fixtureList=null,this.m_prev=null,this.m_next=null,this.m_destroyed=!1,typeof e.style=="object"&&e.style!==null&&(this.style=e.style)}return i.prototype._serialize=function(){for(var t=[],e=this.m_fixtureList;e;e=e.m_next)t.push(e);return{type:this.m_type,bullet:this.m_bulletFlag,fixedRotation:this.m_fixedRotationFlag,position:this.m_xf.p,angle:this.m_xf.q.getAngle(),linearVelocity:this.m_linearVelocity,angularVelocity:this.m_angularVelocity,fixtures:t}},i._deserialize=function(t,e,n){var s=new i(e,t);if(t.fixtures)for(var r=t.fixtures.length-1;r>=0;r--){var o=n(Bl,t.fixtures[r],s);s._addFixture(o)}return s},i.prototype.isWorldLocked=function(){return!!(this.m_world&&this.m_world.isLocked())},i.prototype.getWorld=function(){return this.m_world},i.prototype.getNext=function(){return this.m_next},i.prototype.setUserData=function(t){this.m_userData=t},i.prototype.getUserData=function(){return this.m_userData},i.prototype.getFixtureList=function(){return this.m_fixtureList},i.prototype.getJointList=function(){return this.m_jointList},i.prototype.getContactList=function(){return this.m_contactList},i.prototype.isStatic=function(){return this.m_type==to},i.prototype.isDynamic=function(){return this.m_type==dn},i.prototype.isKinematic=function(){return this.m_type==zf},i.prototype.setStatic=function(){return this.setType(to),this},i.prototype.setDynamic=function(){return this.setType(dn),this},i.prototype.setKinematic=function(){return this.setType(zf),this},i.prototype.getType=function(){return this.m_type},i.prototype.setType=function(t){if(this.isWorldLocked()!=!0&&this.m_type!=t){this.m_type=t,this.resetMassData(),this.m_type==to&&(this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_sweep.forward(),this.synchronizeFixtures()),this.setAwake(!0),this.m_force.setZero(),this.m_torque=0;for(var e=this.m_contactList;e;){var n=e;e=e.next,this.m_world.destroyContact(n.contact)}this.m_contactList=null;for(var s=this.m_world.m_broadPhase,r=this.m_fixtureList;r;r=r.m_next)for(var o=0;o<r.m_proxyCount;++o)s.touchProxy(r.m_proxies[o].proxyId)}},i.prototype.isBullet=function(){return this.m_bulletFlag},i.prototype.setBullet=function(t){this.m_bulletFlag=!!t},i.prototype.isSleepingAllowed=function(){return this.m_autoSleepFlag},i.prototype.setSleepingAllowed=function(t){this.m_autoSleepFlag=!!t,this.m_autoSleepFlag==!1&&this.setAwake(!0)},i.prototype.isAwake=function(){return this.m_awakeFlag},i.prototype.setAwake=function(t){t?(this.m_awakeFlag=!0,this.m_sleepTime=0):(this.m_awakeFlag=!1,this.m_sleepTime=0,this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_force.setZero(),this.m_torque=0)},i.prototype.isActive=function(){return this.m_activeFlag},i.prototype.setActive=function(t){if(t!=this.m_activeFlag)if(this.m_activeFlag=!!t,this.m_activeFlag){for(var e=this.m_world.m_broadPhase,n=this.m_fixtureList;n;n=n.m_next)n.createProxies(e,this.m_xf);this.m_world.m_newFixture=!0}else{for(var e=this.m_world.m_broadPhase,n=this.m_fixtureList;n;n=n.m_next)n.destroyProxies(e);for(var s=this.m_contactList;s;){var r=s;s=s.next,this.m_world.destroyContact(r.contact)}this.m_contactList=null}},i.prototype.isFixedRotation=function(){return this.m_fixedRotationFlag},i.prototype.setFixedRotation=function(t){this.m_fixedRotationFlag!=t&&(this.m_fixedRotationFlag=!!t,this.m_angularVelocity=0,this.resetMassData())},i.prototype.getTransform=function(){return this.m_xf},i.prototype.setTransform=function(t,e){if(this.isWorldLocked()!=!0){typeof e=="number"?this.m_xf.setNum(t,e):this.m_xf.setTransform(t),this.m_sweep.setTransform(this.m_xf);for(var n=this.m_world.m_broadPhase,s=this.m_fixtureList;s;s=s.m_next)s.synchronize(n,this.m_xf,this.m_xf);this.setAwake(!0)}},i.prototype.synchronizeTransform=function(){this.m_sweep.getTransform(this.m_xf,1)},i.prototype.synchronizeFixtures=function(){this.m_sweep.getTransform(Vf,0);for(var t=this.m_world.m_broadPhase,e=this.m_fixtureList;e;e=e.m_next)e.synchronize(t,Vf,this.m_xf)},i.prototype.advance=function(t){this.m_sweep.advance(t),V(this.m_sweep.c,this.m_sweep.c0),this.m_sweep.a=this.m_sweep.a0,this.m_sweep.getTransform(this.m_xf,1)},i.prototype.getPosition=function(){return this.m_xf.p},i.prototype.setPosition=function(t){this.setTransform(t,this.m_sweep.a)},i.prototype.getAngle=function(){return this.m_sweep.a},i.prototype.setAngle=function(t){this.setTransform(this.m_xf.p,t)},i.prototype.getWorldCenter=function(){return this.m_sweep.c},i.prototype.getLocalCenter=function(){return this.m_sweep.localCenter},i.prototype.getLinearVelocity=function(){return this.m_linearVelocity},i.prototype.getLinearVelocityFromWorldPoint=function(t){var e=g.sub(t,this.m_sweep.c);return g.add(this.m_linearVelocity,g.crossNumVec2(this.m_angularVelocity,e))},i.prototype.getLinearVelocityFromLocalPoint=function(t){return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(t))},i.prototype.setLinearVelocity=function(t){this.m_type!=to&&(g.dot(t,t)>0&&this.setAwake(!0),this.m_linearVelocity.setVec2(t))},i.prototype.getAngularVelocity=function(){return this.m_angularVelocity},i.prototype.setAngularVelocity=function(t){this.m_type!=to&&(t*t>0&&this.setAwake(!0),this.m_angularVelocity=t)},i.prototype.getLinearDamping=function(){return this.m_linearDamping},i.prototype.setLinearDamping=function(t){this.m_linearDamping=t},i.prototype.getAngularDamping=function(){return this.m_angularDamping},i.prototype.setAngularDamping=function(t){this.m_angularDamping=t},i.prototype.getGravityScale=function(){return this.m_gravityScale},i.prototype.setGravityScale=function(t){this.m_gravityScale=t},i.prototype.getMass=function(){return this.m_mass},i.prototype.getInertia=function(){return this.m_I+this.m_mass*g.dot(this.m_sweep.localCenter,this.m_sweep.localCenter)},i.prototype.getMassData=function(t){t.mass=this.m_mass,t.I=this.getInertia(),V(t.center,this.m_sweep.localCenter)},i.prototype.resetMassData=function(){if(this.m_mass=0,this.m_invMass=0,this.m_I=0,this.m_invI=0,Ct(this.m_sweep.localCenter),this.isStatic()||this.isKinematic()){V(this.m_sweep.c0,this.m_xf.p),V(this.m_sweep.c,this.m_xf.p),this.m_sweep.a0=this.m_sweep.a;return}Ct(zs);for(var t=this.m_fixtureList;t;t=t.m_next)if(t.m_density!=0){var e={mass:0,center:X(0,0),I:0};t.getMassData(e),this.m_mass+=e.mass,Mn(zs,e.mass,e.center),this.m_I+=e.I}this.m_mass>0?(this.m_invMass=1/this.m_mass,Lt(zs,this.m_invMass,zs)):(this.m_mass=1,this.m_invMass=1),this.m_I>0&&this.m_fixedRotationFlag==!1?(this.m_I-=this.m_mass*nt(zs,zs),this.m_invI=1/this.m_I):(this.m_I=0,this.m_invI=0),V(za,this.m_sweep.c),this.m_sweep.setLocalCenter(zs,this.m_xf),Ot(Va,this.m_sweep.c,za),Gi(Ga,this.m_angularVelocity,Va),nn(this.m_linearVelocity,Ga)},i.prototype.setMassData=function(t){this.isWorldLocked()!=!0&&this.m_type==dn&&(this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_mass=t.mass,this.m_mass<=0&&(this.m_mass=1),this.m_invMass=1/this.m_mass,t.I>0&&this.m_fixedRotationFlag==!1&&(this.m_I=t.I-this.m_mass*nt(t.center,t.center),this.m_invI=1/this.m_I),V(za,this.m_sweep.c),this.m_sweep.setLocalCenter(t.center,this.m_xf),Ot(Va,this.m_sweep.c,za),Gi(Ga,this.m_angularVelocity,Va),nn(this.m_linearVelocity,Ga))},i.prototype.applyForce=function(t,e,n){n===void 0&&(n=!0),this.m_type==dn&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_force.add(t),this.m_torque+=g.crossVec2Vec2(g.sub(e,this.m_sweep.c),t)))},i.prototype.applyForceToCenter=function(t,e){e===void 0&&(e=!0),this.m_type==dn&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&this.m_force.add(t))},i.prototype.applyTorque=function(t,e){e===void 0&&(e=!0),this.m_type==dn&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_torque+=t))},i.prototype.applyLinearImpulse=function(t,e,n){n===void 0&&(n=!0),this.m_type==dn&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_linearVelocity.addMul(this.m_invMass,t),this.m_angularVelocity+=this.m_invI*g.crossVec2Vec2(g.sub(e,this.m_sweep.c),t)))},i.prototype.applyAngularImpulse=function(t,e){e===void 0&&(e=!0),this.m_type==dn&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_angularVelocity+=this.m_invI*t))},i.prototype.shouldCollide=function(t){if(this.m_type!=dn&&t.m_type!=dn)return!1;for(var e=this.m_jointList;e;e=e.next)if(e.other==t&&e.joint.m_collideConnected==!1)return!1;return!0},i.prototype._addFixture=function(t){if(this.isWorldLocked()==!0)return null;if(this.m_activeFlag){var e=this.m_world.m_broadPhase;t.createProxies(e,this.m_xf)}return t.m_next=this.m_fixtureList,this.m_fixtureList=t,t.m_density>0&&this.resetMassData(),this.m_world.m_newFixture=!0,t},i.prototype.createFixture=function(t,e){if(this.isWorldLocked()==!0)return null;var n=new Bl(this,t,e);return this._addFixture(n),this.m_world.publish("add-fixture",n),n},i.prototype.destroyFixture=function(t){if(this.isWorldLocked()!=!0){if(this.m_fixtureList===t)this.m_fixtureList=t.m_next;else for(var e=this.m_fixtureList;e!=null;){if(e.m_next===t){e.m_next=t.m_next;break}e=e.m_next}for(var n=this.m_contactList;n;){var s=n.contact;n=n.next;var r=s.getFixtureA(),o=s.getFixtureB();(t==r||t==o)&&this.m_world.destroyContact(s)}if(this.m_activeFlag){var a=this.m_world.m_broadPhase;t.destroyProxies(a)}t.m_body=null,t.m_next=null,this.m_world.publish("remove-fixture",t),this.resetMassData()}},i.prototype.getWorldPoint=function(t){return bn.mulVec2(this.m_xf,t)},i.prototype.getWorldVector=function(t){return $.mulVec2(this.m_xf.q,t)},i.prototype.getLocalPoint=function(t){return bn.mulTVec2(this.m_xf,t)},i.prototype.getLocalVector=function(t){return $.mulTVec2(this.m_xf.q,t)},i.STATIC="static",i.KINEMATIC="kinematic",i.DYNAMIC="dynamic",i})(),Gf=(function(){function i(){this.other=null,this.joint=null,this.prev=null,this.next=null}return i})(),pi=(function(){function i(t,e,n){this.m_type="unknown-joint",this.m_prev=null,this.m_next=null,this.m_edgeA=new Gf,this.m_edgeB=new Gf,this.m_islandFlag=!1,this.style={},this.appData={},e="bodyA"in t?t.bodyA:e,n="bodyB"in t?t.bodyB:n,this.m_bodyA=e,this.m_bodyB=n,this.m_collideConnected=!!t.collideConnected,this.m_userData=t.userData,typeof t.style=="object"&&t.style!==null&&(this.style=t.style)}return i.prototype.isActive=function(){return this.m_bodyA.isActive()&&this.m_bodyB.isActive()},i.prototype.getType=function(){return this.m_type},i.prototype.getBodyA=function(){return this.m_bodyA},i.prototype.getBodyB=function(){return this.m_bodyB},i.prototype.getNext=function(){return this.m_next},i.prototype.getUserData=function(){return this.m_userData},i.prototype.setUserData=function(t){this.m_userData=t},i.prototype.getCollideConnected=function(){return this.m_collideConnected},i.prototype.shiftOrigin=function(t){},i.prototype._resetAnchors=function(t){return this._reset(t)},i})(),De={gjkCalls:0,gjkIters:0,gjkMaxIters:0,toiTime:0,toiMaxTime:0,toiCalls:0,toiIters:0,toiMaxIters:0,toiRootIters:0,toiMaxRootIters:0},oS=function(){return Date.now()},aS=function(i){return Date.now()-i};const kf={now:oS,diff:aS};var lS=Math.max,ka=X(0,0),Ha=X(0,0),zi=X(0,0),Wa=X(0,0),xc=X(0,0),cS=X(0,0),hS=X(0,0);De.gjkCalls=0;De.gjkIters=0;De.gjkMaxIters=0;var Zh=(function(){function i(){this.proxyA=new dr,this.proxyB=new dr,this.transformA=bn.identity(),this.transformB=bn.identity(),this.useRadii=!1}return i.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.transformA.setIdentity(),this.transformB.setIdentity(),this.useRadii=!1},i})(),Kh=(function(){function i(){this.pointA=X(0,0),this.pointB=X(0,0),this.distance=0,this.iterations=0}return i.prototype.recycle=function(){Ct(this.pointA),Ct(this.pointB),this.distance=0,this.iterations=0},i})(),jh=(function(){function i(){this.metric=0,this.indexA=[],this.indexB=[],this.count=0}return i.prototype.recycle=function(){this.metric=0,this.indexA.length=0,this.indexB.length=0,this.count=0},i})(),xr=function(i,t,e){++De.gjkCalls;var n=e.proxyA,s=e.proxyB,r=e.transformA,o=e.transformB;mn.recycle(),mn.readCache(t,n,r,s,o);for(var a=mn.m_v,l=ut.maxDistanceIterations,c=[],h=[],u=0,f=0;f<l;){u=mn.m_count;for(var d=0;d<u;++d)c[d]=a[d].indexA,h[d]=a[d].indexB;if(mn.solve(),mn.m_count===3)break;var _=mn.getSearchDirection();if(rr(_)<Ti*Ti)break;var v=a[mn.m_count];v.indexA=n.getSupport(no(ka,r.q,Lt(ka,-1,_))),Ft(v.wA,r,n.getVertex(v.indexA)),v.indexB=s.getSupport(no(ka,o.q,_)),Ft(v.wB,o,s.getVertex(v.indexB)),Ot(v.w,v.wB,v.wA),++f,++De.gjkIters;for(var p=!1,d=0;d<u;++d)if(v.indexA===c[d]&&v.indexB===h[d]){p=!0;break}if(p)break;++mn.m_count}if(De.gjkMaxIters=lS(De.gjkMaxIters,f),mn.getWitnessPoints(i.pointA,i.pointB),i.distance=Bm(i.pointA,i.pointB),i.iterations=f,mn.writeCache(t),e.useRadii){var m=n.m_radius,A=s.m_radius;if(i.distance>m+A&&i.distance>Ti)i.distance-=m+A,Ot(Ha,i.pointB,i.pointA),Sn(Ha),Mn(i.pointA,m,Ha),Vo(i.pointB,A,Ha);else{var y=Ot(ka,i.pointA,i.pointB);V(i.pointA,y),V(i.pointB,y),i.distance=0}}},dr=(function(){function i(){this.m_vertices=[],this.m_count=0,this.m_radius=0}return i.prototype.recycle=function(){this.m_vertices.length=0,this.m_count=0,this.m_radius=0},i.prototype.getVertexCount=function(){return this.m_count},i.prototype.getVertex=function(t){return this.m_vertices[t]},i.prototype.getSupport=function(t){for(var e=-1,n=-1/0,s=0;s<this.m_count;++s){var r=nt(this.m_vertices[s],t);r>n&&(e=s,n=r)}return e},i.prototype.getSupportVertex=function(t){return this.m_vertices[this.getSupport(t)]},i.prototype.set=function(t,e){t.computeDistanceProxy(this,e)},i.prototype.setVertices=function(t,e,n){this.m_vertices=t,this.m_count=e,this.m_radius=n},i})(),Ac=(function(){function i(){this.wA=X(0,0),this.indexA=0,this.wB=X(0,0),this.indexB=0,this.w=X(0,0),this.a=0}return i.prototype.recycle=function(){this.indexA=0,this.indexB=0,Ct(this.wA),Ct(this.wB),Ct(this.w),this.a=0},i.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,V(this.wA,t.wA),V(this.wB,t.wB),V(this.w,t.w),this.a=t.a},i})(),qa=X(0,0),Eo=X(0,0),uS=(function(){function i(){this.m_v1=new Ac,this.m_v2=new Ac,this.m_v3=new Ac,this.m_v=[this.m_v1,this.m_v2,this.m_v3]}return i.prototype.recycle=function(){this.m_v1.recycle(),this.m_v2.recycle(),this.m_v3.recycle(),this.m_count=0},i.prototype.toString=function(){return this.m_count===3?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y,this.m_v3.a,this.m_v3.wA.x,this.m_v3.wA.y,this.m_v3.wB.x,this.m_v3.wB.y].toString():this.m_count===2?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y].toString():this.m_count===1?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y].toString():"+"+this.m_count},i.prototype.readCache=function(t,e,n,s,r){this.m_count=t.count;for(var o=0;o<this.m_count;++o){var a=this.m_v[o];a.indexA=t.indexA[o],a.indexB=t.indexB[o];var l=e.getVertex(a.indexA),c=s.getVertex(a.indexB);Ft(a.wA,n,l),Ft(a.wB,r,c),Ot(a.w,a.wB,a.wA),a.a=0}if(this.m_count>1){var h=t.metric,u=this.getMetric();(u<.5*h||2*h<u||u<Ti)&&(this.m_count=0)}if(this.m_count===0){var a=this.m_v[0];a.indexA=0,a.indexB=0;var l=e.getVertex(0),c=s.getVertex(0);Ft(a.wA,n,l),Ft(a.wB,r,c),Ot(a.w,a.wB,a.wA),a.a=1,this.m_count=1}},i.prototype.writeCache=function(t){t.metric=this.getMetric(),t.count=this.m_count;for(var e=0;e<this.m_count;++e)t.indexA[e]=this.m_v[e].indexA,t.indexB[e]=this.m_v[e].indexB},i.prototype.getSearchDirection=function(){var t=this.m_v1,e=this.m_v2;switch(this.m_count){case 1:return ri(qa,-t.w.x,-t.w.y);case 2:{Ot(zi,e.w,t.w);var n=-Yt(zi,t.w);return n>0?ri(qa,-zi.y,zi.x):ri(qa,zi.y,-zi.x)}default:return Ct(qa)}},i.prototype.getClosestPoint=function(){var t=this.m_v1,e=this.m_v2;switch(this.m_count){case 0:return Ct(Eo);case 1:return V(Eo,t.w);case 2:return Pe(Eo,t.a,t.w,e.a,e.w);case 3:return Ct(Eo);default:return Ct(Eo)}},i.prototype.getWitnessPoints=function(t,e){var n=this.m_v1,s=this.m_v2,r=this.m_v3;switch(this.m_count){case 0:break;case 1:V(t,n.wA),V(e,n.wB);break;case 2:Pe(t,n.a,n.wA,s.a,s.wA),Pe(e,n.a,n.wB,s.a,s.wB);break;case 3:Pn(t,n.a,n.wA,s.a,s.wA,r.a,r.wA),V(e,t);break}},i.prototype.getMetric=function(){switch(this.m_count){case 0:return 0;case 1:return 0;case 2:return Bm(this.m_v1.w,this.m_v2.w);case 3:return Yt(Ot(cS,this.m_v2.w,this.m_v1.w),Ot(hS,this.m_v3.w,this.m_v1.w));default:return 0}},i.prototype.solve=function(){switch(this.m_count){case 1:break;case 2:this.solve2();break;case 3:this.solve3();break}},i.prototype.solve2=function(){var t=this.m_v1.w,e=this.m_v2.w;Ot(zi,e,t);var n=-nt(t,zi);if(n<=0){this.m_v1.a=1,this.m_count=1;return}var s=nt(e,zi);if(s<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}var r=1/(s+n);this.m_v1.a=s*r,this.m_v2.a=n*r,this.m_count=2},i.prototype.solve3=function(){var t=this.m_v1.w,e=this.m_v2.w,n=this.m_v3.w;Ot(zi,e,t);var s=nt(t,zi),r=nt(e,zi),o=r,a=-s;Ot(Wa,n,t);var l=nt(t,Wa),c=nt(n,Wa),h=c,u=-l;Ot(xc,n,e);var f=nt(e,xc),d=nt(n,xc),_=d,v=-f,p=Yt(zi,Wa),m=p*Yt(e,n),A=p*Yt(n,t),y=p*Yt(t,e);if(a<=0&&u<=0){this.m_v1.a=1,this.m_count=1;return}if(o>0&&a>0&&y<=0){var x=1/(o+a);this.m_v1.a=o*x,this.m_v2.a=a*x,this.m_count=2;return}if(h>0&&u>0&&A<=0){var C=1/(h+u);this.m_v1.a=h*C,this.m_v3.a=u*C,this.m_count=2,this.m_v2.set(this.m_v3);return}if(o<=0&&v<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}if(h<=0&&_<=0){this.m_v3.a=1,this.m_count=1,this.m_v1.set(this.m_v3);return}if(_>0&&v>0&&m<=0){var E=1/(_+v);this.m_v2.a=_*E,this.m_v3.a=v*E,this.m_count=2,this.m_v1.set(this.m_v3);return}var w=1/(m+A+y);this.m_v1.a=m*w,this.m_v2.a=A*w,this.m_v3.a=y*w,this.m_count=3},i})(),mn=new uS,Vs=new Zh,Hf=new jh,Mc=new Kh,Um=function(i,t,e,n,s,r){return Vs.recycle(),Vs.proxyA.set(i,t),Vs.proxyB.set(e,n),Rl(Vs.transformA,s),Rl(Vs.transformB,r),Vs.useRadii=!0,Mc.recycle(),Hf.recycle(),xr(Mc,Hf,Vs),Mc.distance<10*Ti};xr.testOverlap=Um;xr.Input=Zh;xr.Output=Kh;xr.Proxy=dr;xr.Cache=jh;(function(){function i(){this.proxyA=new dr,this.proxyB=new dr,this.transformA=bn.identity(),this.transformB=bn.identity(),this.translationB=g.zero()}return i.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.transformA.setIdentity(),this.transformB.setIdentity(),Ct(this.translationB)},i})();var fS=Math.abs,Xa=Math.max,Nm=(function(){function i(){this.proxyA=new dr,this.proxyB=new dr,this.sweepA=new mo,this.sweepB=new mo}return i.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.sweepA.recycle(),this.sweepB.recycle(),this.tMax=-1},i})(),sn;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_unknown=0]="e_unknown",i[i.e_failed=1]="e_failed",i[i.e_overlapped=2]="e_overlapped",i[i.e_touching=3]="e_touching",i[i.e_separated=4]="e_separated"})(sn||(sn={}));var Fm=(function(){function i(){this.state=sn.e_unset,this.t=-1}return i.prototype.recycle=function(){this.state=sn.e_unset,this.t=-1},i})();De.toiTime=0;De.toiMaxTime=0;De.toiCalls=0;De.toiIters=0;De.toiMaxIters=0;De.toiRootIters=0;De.toiMaxRootIters=0;var Fr=new Zh,Sc=new Kh,bc=new jh,Ci=gr(0,0,0),Ri=gr(0,0,0),Co=X(0,0),wn=X(0,0),ji=X(0,0),Ei=X(0,0),Ya=X(0,0),$a=X(0,0),Ja=X(0,0),Za=X(0,0),Qh=function(i,t){var e=kf.now();++De.toiCalls,i.state=sn.e_unknown,i.t=t.tMax;var n=t.proxyA,s=t.proxyB,r=t.sweepA,o=t.sweepB;r.normalize(),o.normalize();var a=t.tMax,l=n.m_radius+s.m_radius,c=Xa(ut.linearSlop,l-3*ut.linearSlop),h=.25*ut.linearSlop,u=0,f=ut.maxTOIIterations,d=0;for(bc.recycle(),Fr.proxyA.setVertices(n.m_vertices,n.m_count,n.m_radius),Fr.proxyB.setVertices(s.m_vertices,s.m_count,s.m_radius),Fr.useRadii=!1;;){if(r.getTransform(Ci,u),o.getTransform(Ri,u),Rl(Fr.transformA,Ci),Rl(Fr.transformB,Ri),xr(Sc,bc,Fr),Sc.distance<=0){i.state=sn.e_overlapped,i.t=0;break}if(Sc.distance<c+h){i.state=sn.e_touching,i.t=u;break}Ro.initialize(bc,n,r,s,o,u);for(var _=!1,v=a,p=0;;){var m=Ro.findMinSeparation(v);if(m>c+h){i.state=sn.e_separated,i.t=a,_=!0;break}if(m>c-h){u=v;break}var A=Ro.evaluate(u);if(A<c-h){i.state=sn.e_failed,i.t=u,_=!0;break}if(A<=c+h){i.state=sn.e_touching,i.t=u,_=!0;break}for(var y=0,x=u,C=v;;){var E=void 0;y&1?E=x+(c-A)*(C-x)/(m-A):E=.5*(x+C),++y,++De.toiRootIters;var w=Ro.evaluate(E);if(fS(w-c)<h){v=E;break}if(w>c?(x=E,A=w):(C=E,m=w),y===50)break}if(De.toiMaxRootIters=Xa(De.toiMaxRootIters,y),++p,p===ut.maxPolygonVertices)break}if(++d,++De.toiIters,_)break;if(d===f){i.state=sn.e_failed,i.t=u;break}}De.toiMaxIters=Xa(De.toiMaxIters,d);var B=kf.diff(e);De.toiMaxTime=Xa(De.toiMaxTime,B),De.toiTime+=B,Ro.recycle()},In;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_points=1]="e_points",i[i.e_faceA=2]="e_faceA",i[i.e_faceB=3]="e_faceB"})(In||(In={}));var dS=(function(){function i(){this.m_proxyA=null,this.m_proxyB=null,this.m_sweepA=null,this.m_sweepB=null,this.m_type=In.e_unset,this.m_localPoint=X(0,0),this.m_axis=X(0,0),this.indexA=-1,this.indexB=-1}return i.prototype.recycle=function(){this.m_proxyA=null,this.m_proxyB=null,this.m_sweepA=null,this.m_sweepB=null,this.m_type=In.e_unset,Ct(this.m_localPoint),Ct(this.m_axis),this.indexA=-1,this.indexB=-1},i.prototype.initialize=function(t,e,n,s,r,o){var a=t.count;if(this.m_proxyA=e,this.m_proxyB=s,this.m_sweepA=n,this.m_sweepB=r,this.m_sweepA.getTransform(Ci,o),this.m_sweepB.getTransform(Ri,o),a===1){this.m_type=In.e_points;var l=this.m_proxyA.getVertex(t.indexA[0]),c=this.m_proxyB.getVertex(t.indexB[0]);Ft(wn,Ci,l),Ft(ji,Ri,c),Ot(this.m_axis,ji,wn);var h=KM(this.m_axis);return h}else if(t.indexA[0]===t.indexA[1]){this.m_type=In.e_faceB;var u=s.getVertex(t.indexB[0]),f=s.getVertex(t.indexB[1]);sr(this.m_axis,Ot(Co,f,u),1),Sn(this.m_axis),on(Ei,Ri.q,this.m_axis),Pe(this.m_localPoint,.5,u,.5,f),Ft(ji,Ri,this.m_localPoint);var d=e.getVertex(t.indexA[0]),_=bn.mulVec2(Ci,d),h=nt(_,Ei)-nt(ji,Ei);return h<0&&(Qo(this.m_axis),h=-h),h}else{this.m_type=In.e_faceA;var v=this.m_proxyA.getVertex(t.indexA[0]),p=this.m_proxyA.getVertex(t.indexA[1]);sr(this.m_axis,Ot(Co,p,v),1),Sn(this.m_axis),on(Ei,Ci.q,this.m_axis),Pe(this.m_localPoint,.5,v,.5,p),Ft(wn,Ci,this.m_localPoint);var m=this.m_proxyB.getVertex(t.indexB[0]);Ft(ji,Ri,m);var h=nt(ji,Ei)-nt(wn,Ei);return h<0&&(Qo(this.m_axis),h=-h),h}},i.prototype.compute=function(t,e){switch(this.m_sweepA.getTransform(Ci,e),this.m_sweepB.getTransform(Ri,e),this.m_type){case In.e_points:{t&&(no(Ya,Ci.q,this.m_axis),no($a,Ri.q,Lt(Co,-1,this.m_axis)),this.indexA=this.m_proxyA.getSupport(Ya),this.indexB=this.m_proxyB.getSupport($a)),V(Ja,this.m_proxyA.getVertex(this.indexA)),V(Za,this.m_proxyB.getVertex(this.indexB)),Ft(wn,Ci,Ja),Ft(ji,Ri,Za);var n=nt(ji,this.m_axis)-nt(wn,this.m_axis);return n}case In.e_faceA:{on(Ei,Ci.q,this.m_axis),Ft(wn,Ci,this.m_localPoint),t&&(no($a,Ri.q,Lt(Co,-1,Ei)),this.indexA=-1,this.indexB=this.m_proxyB.getSupport($a)),V(Za,this.m_proxyB.getVertex(this.indexB)),Ft(ji,Ri,Za);var n=nt(ji,Ei)-nt(wn,Ei);return n}case In.e_faceB:{on(Ei,Ri.q,this.m_axis),Ft(ji,Ri,this.m_localPoint),t&&(no(Ya,Ci.q,Lt(Co,-1,Ei)),this.indexB=-1,this.indexA=this.m_proxyA.getSupport(Ya)),V(Ja,this.m_proxyA.getVertex(this.indexA)),Ft(wn,Ci,Ja);var n=nt(wn,Ei)-nt(ji,Ei);return n}default:return t&&(this.indexA=-1,this.indexB=-1),0}},i.prototype.findMinSeparation=function(t){return this.compute(!0,t)},i.prototype.evaluate=function(t){return this.compute(!1,t)},i})(),Ro=new dS;Qh.Input=Nm;Qh.Output=Fm;var Wf=Math.abs,qf=Math.sqrt,Ka=Math.min,tu=(function(){function i(){this.dt=0,this.inv_dt=0,this.velocityIterations=0,this.positionIterations=0,this.warmStarting=!1,this.blockSolve=!0,this.inv_dt0=0,this.dtRatio=1}return i.prototype.reset=function(t){this.dt>0&&(this.inv_dt0=this.inv_dt),this.dt=t,this.inv_dt=t==0?0:1/t,this.dtRatio=t*this.inv_dt0},i})(),Or=new tu,Wn=X(0,0),ci=X(0,0),ja=X(0,0),zr=new Nm,Tc=new Fm,Xf=new mo,Yf=new mo,$f=new mo,mS=(function(){function i(t){this.contact=t,this.normals=[],this.tangents=[]}return i.prototype.recycle=function(){this.normals.length=0,this.tangents.length=0},Object.defineProperty(i.prototype,"normalImpulses",{get:function(){var t=this.contact,e=this.normals;e.length=0;for(var n=0;n<t.v_points.length;++n)e.push(t.v_points[n].normalImpulse);return e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"tangentImpulses",{get:function(){var t=this.contact,e=this.tangents;e.length=0;for(var n=0;n<t.v_points.length;++n)e.push(t.v_points[n].tangentImpulse);return e},enumerable:!1,configurable:!0}),i})(),Om=(function(){function i(t){this.m_world=t,this.m_stack=[],this.m_bodies=[],this.m_contacts=[],this.m_joints=[]}return i.prototype.clear=function(){this.m_stack.length=0,this.m_bodies.length=0,this.m_contacts.length=0,this.m_joints.length=0},i.prototype.addBody=function(t){this.m_bodies.push(t)},i.prototype.addContact=function(t){this.m_contacts.push(t)},i.prototype.addJoint=function(t){this.m_joints.push(t)},i.prototype.solveWorld=function(t){for(var e=this.m_world,n=e.m_bodyList;n;n=n.m_next)n.m_islandFlag=!1;for(var s=e.m_contactList;s;s=s.m_next)s.m_islandFlag=!1;for(var r=e.m_jointList;r;r=r.m_next)r.m_islandFlag=!1;for(var o=this.m_stack,a=e.m_bodyList;a;a=a.m_next)if(!a.m_islandFlag&&!(a.isAwake()==!1||a.isActive()==!1)&&!a.isStatic()){for(this.clear(),o.push(a),a.m_islandFlag=!0;o.length>0;){var n=o.pop();if(this.addBody(n),n.m_awakeFlag=!0,!n.isStatic()){for(var l=n.m_contactList;l;l=l.next){var c=l.contact;if(!c.m_islandFlag&&!(c.isEnabled()==!1||c.isTouching()==!1)){var h=c.m_fixtureA.m_isSensor,u=c.m_fixtureB.m_isSensor;if(!(h||u)){this.addContact(c),c.m_islandFlag=!0;var f=l.other;f.m_islandFlag||(o.push(f),f.m_islandFlag=!0)}}}for(var d=n.m_jointList;d;d=d.next)if(d.joint.m_islandFlag!=!0){var f=d.other;f.isActive()!=!1&&(this.addJoint(d.joint),d.joint.m_islandFlag=!0,!f.m_islandFlag&&(o.push(f),f.m_islandFlag=!0))}}}this.solveIsland(t);for(var _=0;_<this.m_bodies.length;++_){var n=this.m_bodies[_];n.isStatic()&&(n.m_islandFlag=!1)}}},i.prototype.solveIsland=function(t){for(var e=this.m_world,n=e.m_gravity,s=e.m_allowSleep,r=t.dt,o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];V(Wn,a.m_sweep.c);var l=a.m_sweep.a;V(ci,a.m_linearVelocity);var c=a.m_angularVelocity;V(a.m_sweep.c0,a.m_sweep.c),a.m_sweep.a0=a.m_sweep.a,a.isDynamic()&&(Mn(ci,r*a.m_gravityScale,n),Mn(ci,r*a.m_invMass,a.m_force),c+=r*a.m_invI*a.m_torque,Lt(ci,1/(1+r*a.m_linearDamping),ci),c*=1/(1+r*a.m_angularDamping)),V(a.c_position.c,Wn),a.c_position.a=l,V(a.c_velocity.v,ci),a.c_velocity.w=c}for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.initConstraint(t)}for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.initVelocityConstraint(t)}if(t.warmStarting)for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.warmStartConstraint(t)}for(var o=0;o<this.m_joints.length;++o){var u=this.m_joints[o];u.initVelocityConstraints(t)}for(var o=0;o<t.velocityIterations;++o){for(var f=0;f<this.m_joints.length;++f){var u=this.m_joints[f];u.solveVelocityConstraints(t)}for(var f=0;f<this.m_contacts.length;++f){var h=this.m_contacts[f];h.solveVelocityConstraint(t)}}for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.storeConstraintImpulses(t)}for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];V(Wn,a.c_position.c);var l=a.c_position.a;V(ci,a.c_velocity.v);var c=a.c_velocity.w;Lt(ja,r,ci);var d=rr(ja);if(d>ut.maxTranslationSquared){var _=ut.maxTranslation/qf(d);Pf(ci,_)}var v=r*c;if(v*v>ut.maxRotationSquared){var _=ut.maxRotation/Wf(v);c*=_}Mn(Wn,r,ci),l+=r*c,V(a.c_position.c,Wn),a.c_position.a=l,V(a.c_velocity.v,ci),a.c_velocity.w=c}for(var p=!1,o=0;o<t.positionIterations;++o){for(var m=0,f=0;f<this.m_contacts.length;++f){var h=this.m_contacts[f],A=h.solvePositionConstraint(t);m=Ka(m,A)}for(var y=m>=-3*ut.linearSlop,x=!0,f=0;f<this.m_joints.length;++f){var u=this.m_joints[f],C=u.solvePositionConstraints(t);x=x&&C}if(y&&x){p=!0;break}}for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];V(a.m_sweep.c,a.c_position.c),a.m_sweep.a=a.c_position.a,V(a.m_linearVelocity,a.c_velocity.v),a.m_angularVelocity=a.c_velocity.w,a.synchronizeTransform()}if(this.postSolveIsland(),s){for(var E=1/0,w=ut.linearSleepToleranceSqr,B=ut.angularSleepToleranceSqr,o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];a.isStatic()||(a.m_autoSleepFlag==!1||a.m_angularVelocity*a.m_angularVelocity>B||rr(a.m_linearVelocity)>w?(a.m_sleepTime=0,E=0):(a.m_sleepTime+=r,E=Ka(E,a.m_sleepTime)))}if(E>=ut.timeToSleep&&p)for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];a.setAwake(!1)}}},i.prototype.solveWorldTOI=function(t){var e=this.m_world;if(e.m_stepComplete){for(var n=e.m_bodyList;n;n=n.m_next)n.m_islandFlag=!1,n.m_sweep.alpha0=0;for(var s=e.m_contactList;s;s=s.m_next)s.m_toiFlag=!1,s.m_islandFlag=!1,s.m_toiCount=0,s.m_toi=1}for(;;){for(var r=null,o=1,a=e.m_contactList;a;a=a.m_next)if(a.isEnabled()!=!1&&!(a.m_toiCount>ut.maxSubSteps)){var l=1;if(a.m_toiFlag)l=a.m_toi;else{var c=a.getFixtureA(),h=a.getFixtureB();if(c.isSensor()||h.isSensor())continue;var u=c.getBody(),f=h.getBody(),d=u.isAwake()&&!u.isStatic(),_=f.isAwake()&&!f.isStatic();if(d==!1&&_==!1)continue;var v=u.isBullet()||!u.isDynamic(),p=f.isBullet()||!f.isDynamic();if(v==!1&&p==!1)continue;var m=u.m_sweep.alpha0;u.m_sweep.alpha0<f.m_sweep.alpha0?(m=f.m_sweep.alpha0,u.m_sweep.advance(m)):f.m_sweep.alpha0<u.m_sweep.alpha0&&(m=u.m_sweep.alpha0,f.m_sweep.advance(m));var A=a.getChildIndexA(),y=a.getChildIndexB();zr.proxyA.set(c.getShape(),A),zr.proxyB.set(h.getShape(),y),zr.sweepA.set(u.m_sweep),zr.sweepB.set(f.m_sweep),zr.tMax=1,Qh(Tc,zr);var x=Tc.t;Tc.state==sn.e_touching?l=Ka(m+(1-m)*x,1):l=1,a.m_toi=l,a.m_toiFlag=!0}l<o&&(r=a,o=l)}if(r==null||1-10*Ti<o){e.m_stepComplete=!0;break}var C=r.getFixtureA(),E=r.getFixtureB(),w=C.getBody(),B=E.getBody();if(Yf.set(w.m_sweep),$f.set(B.m_sweep),w.advance(o),B.advance(o),r.update(e),r.m_toiFlag=!1,++r.m_toiCount,r.isEnabled()==!1||r.isTouching()==!1){r.setEnabled(!1),w.m_sweep.set(Yf),B.m_sweep.set($f),w.synchronizeTransform(),B.synchronizeTransform();continue}w.setAwake(!0),B.setAwake(!0),this.clear(),this.addBody(w),this.addBody(B),this.addContact(r),w.m_islandFlag=!0,B.m_islandFlag=!0,r.m_islandFlag=!0;for(var T=[w,B],S=0;S<T.length;++S){var P=T[S];if(P.isDynamic())for(var z=P.m_contactList;z;z=z.next){var O=z.contact;if(!O.m_islandFlag){var q=z.other;if(!(q.isDynamic()&&!P.isBullet()&&!q.isBullet())){var Z=O.m_fixtureA.m_isSensor,D=O.m_fixtureB.m_isSensor;if(!(Z||D)){if(Xf.set(q.m_sweep),q.m_islandFlag==!1&&q.advance(o),O.update(e),O.isEnabled()==!1||O.isTouching()==!1){q.m_sweep.set(Xf),q.synchronizeTransform();continue}O.m_islandFlag=!0,this.addContact(O),!q.m_islandFlag&&(q.m_islandFlag=!0,q.isStatic()||q.setAwake(!0),this.addBody(q))}}}}}Or.reset((1-o)*t.dt),Or.dtRatio=1,Or.positionIterations=20,Or.velocityIterations=t.velocityIterations,Or.warmStarting=!1,this.solveIslandTOI(Or,w,B);for(var S=0;S<this.m_bodies.length;++S){var P=this.m_bodies[S];if(P.m_islandFlag=!1,!!P.isDynamic()){P.synchronizeFixtures();for(var z=P.m_contactList;z;z=z.next)z.contact.m_toiFlag=!1,z.contact.m_islandFlag=!1}}if(e.findNewContacts(),e.m_subStepping){e.m_stepComplete=!1;break}}},i.prototype.solveIslandTOI=function(t,e,n){for(var h=0;h<this.m_bodies.length;++h){var s=this.m_bodies[h];V(s.c_position.c,s.m_sweep.c),s.c_position.a=s.m_sweep.a,V(s.c_velocity.v,s.m_linearVelocity),s.c_velocity.w=s.m_angularVelocity}for(var h=0;h<this.m_contacts.length;++h){var r=this.m_contacts[h];r.initConstraint(t)}for(var h=0;h<t.positionIterations;++h){for(var o=0,a=0;a<this.m_contacts.length;++a){var r=this.m_contacts[a],l=r.solvePositionConstraintTOI(t,e,n);o=Ka(o,l)}var c=o>=-1.5*ut.linearSlop;if(c)break}var h;V(e.m_sweep.c0,e.c_position.c),e.m_sweep.a0=e.c_position.a,V(n.m_sweep.c0,n.c_position.c),n.m_sweep.a0=n.c_position.a;for(var h=0;h<this.m_contacts.length;++h){var r=this.m_contacts[h];r.initVelocityConstraint(t)}for(var h=0;h<t.velocityIterations;++h)for(var a=0;a<this.m_contacts.length;++a){var r=this.m_contacts[a];r.solveVelocityConstraint(t)}for(var u=t.dt,h=0;h<this.m_bodies.length;++h){var s=this.m_bodies[h];V(Wn,s.c_position.c);var f=s.c_position.a;V(ci,s.c_velocity.v);var d=s.c_velocity.w;Lt(ja,u,ci);var _=rr(ja);if(_>ut.maxTranslationSquared){var v=ut.maxTranslation/qf(_);Pf(ci,v)}var p=u*d;if(p*p>ut.maxRotationSquared){var v=ut.maxRotation/Wf(p);d*=v}Mn(Wn,u,ci),f+=u*d,V(s.c_position.c,Wn),s.c_position.a=f,V(s.c_velocity.v,ci),s.c_velocity.w=d,V(s.m_sweep.c,Wn),s.m_sweep.a=f,V(s.m_linearVelocity,ci),s.m_angularVelocity=d,s.synchronizeTransform()}this.postSolveIsland()},i.prototype.postSolveIsland=function(){for(var t=0;t<this.m_contacts.length;++t){var e=this.m_contacts[t];this.m_world.postSolve(e,e.m_impulse)}},i})();Om.TimeStep=tu;var Tn=(function(){function i(t,e,n,s){typeof t=="object"&&t!==null?(this.ex=g.clone(t),this.ey=g.clone(e)):typeof t=="number"?(this.ex=g.neo(t,n),this.ey=g.neo(e,s)):(this.ex=g.zero(),this.ey=g.zero())}return i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.ex)&&g.isValid(t.ey)},i.assert=function(t){},i.prototype.set=function(t,e,n,s){typeof t=="number"&&typeof e=="number"&&typeof n=="number"&&typeof s=="number"?(this.ex.setNum(t,n),this.ey.setNum(e,s)):typeof t=="object"&&typeof e=="object"?(this.ex.setVec2(t),this.ey.setVec2(e)):typeof t=="object"&&(this.ex.setVec2(t.ex),this.ey.setVec2(t.ey))},i.prototype.setIdentity=function(){this.ex.x=1,this.ey.x=0,this.ex.y=0,this.ey.y=1},i.prototype.setZero=function(){this.ex.x=0,this.ey.x=0,this.ex.y=0,this.ey.y=0},i.prototype.getInverse=function(){var t=this.ex.x,e=this.ey.x,n=this.ex.y,s=this.ey.y,r=t*s-e*n;r!==0&&(r=1/r);var o=new i;return o.ex.x=r*s,o.ey.x=-r*e,o.ex.y=-r*n,o.ey.y=r*t,o},i.prototype.solve=function(t){var e=this.ex.x,n=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-n*s;o!==0&&(o=1/o);var a=g.zero();return a.x=o*(r*t.x-n*t.y),a.y=o*(e*t.y-s*t.x),a},i.mul=function(t,e){if(e&&"x"in e&&"y"in e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)}else if(e&&"ex"in e&&"ey"in e){var r=t.ex.x*e.ex.x+t.ey.x*e.ex.y,o=t.ex.x*e.ey.x+t.ey.x*e.ey.y,a=t.ex.y*e.ex.x+t.ey.y*e.ex.y,l=t.ex.y*e.ey.x+t.ey.y*e.ey.y;return new i(r,o,a,l)}},i.mulVec2=function(t,e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)},i.mulMat22=function(t,e){var n=t.ex.x*e.ex.x+t.ey.x*e.ex.y,s=t.ex.x*e.ey.x+t.ey.x*e.ey.y,r=t.ex.y*e.ex.x+t.ey.y*e.ex.y,o=t.ex.y*e.ey.x+t.ey.y*e.ey.y;return new i(n,s,r,o)},i.mulT=function(t,e){if(e&&"x"in e&&"y"in e)return g.neo(g.dot(e,t.ex),g.dot(e,t.ey));if(e&&"ex"in e&&"ey"in e){var n=g.neo(g.dot(t.ex,e.ex),g.dot(t.ey,e.ex)),s=g.neo(g.dot(t.ex,e.ey),g.dot(t.ey,e.ey));return new i(n,s)}},i.mulTVec2=function(t,e){return g.neo(g.dot(e,t.ex),g.dot(e,t.ey))},i.mulTMat22=function(t,e){var n=g.neo(g.dot(t.ex,e.ex),g.dot(t.ey,e.ex)),s=g.neo(g.dot(t.ex,e.ey),g.dot(t.ey,e.ey));return new i(n,s)},i.abs=function(t){return new i(g.abs(t.ex),g.abs(t.ey))},i.add=function(t,e){return new i(g.add(t.ex,e.ex),g.add(t.ey,e.ey))},i})(),pS=Math.sqrt,wc=X(0,0),Ec=X(0,0),Bo=X(0,0),qn=X(0,0),Xn=X(0,0),Cc=X(0,0),Qa=X(0,0),ds=X(0,0),Fe;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_circles=0]="e_circles",i[i.e_faceA=1]="e_faceA",i[i.e_faceB=2]="e_faceB"})(Fe||(Fe={}));var ne;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_vertex=0]="e_vertex",i[i.e_face=1]="e_face"})(ne||(ne={}));var nr;(function(i){i[i.nullState=0]="nullState",i[i.addState=1]="addState",i[i.persistState=2]="persistState",i[i.removeState=3]="removeState"})(nr||(nr={}));var Wi=(function(){function i(){this.v=X(0,0),this.id=new Vm}return i.prototype.set=function(t){V(this.v,t.v),this.id.set(t.id)},i.prototype.recycle=function(){Ct(this.v),this.id.recycle()},i})(),zm=(function(){function i(){this.localNormal=X(0,0),this.localPoint=X(0,0),this.points=[new Jf,new Jf],this.pointCount=0}return i.prototype.set=function(t){this.type=t.type,V(this.localNormal,t.localNormal),V(this.localPoint,t.localPoint),this.pointCount=t.pointCount,this.points[0].set(t.points[0]),this.points[1].set(t.points[1])},i.prototype.recycle=function(){this.type=Fe.e_unset,Ct(this.localNormal),Ct(this.localPoint),this.pointCount=0,this.points[0].recycle(),this.points[1].recycle()},i.prototype.getWorldManifold=function(t,e,n,s,r){if(this.pointCount==0)return t;t=t||new Gm,t.pointCount=this.pointCount;var o=t.normal,a=t.points,l=t.separations;switch(this.type){case Fe.e_circles:{ri(o,1,0);var c=this.points[0];Ft(wc,e,this.localPoint),Ft(Ec,s,c.localPoint),Ot(Cc,Ec,wc);var h=rr(Cc);if(h>Ti*Ti){var u=pS(h);Lt(o,1/u,Cc)}Pe(qn,1,wc,n,o),Pe(Xn,1,Ec,-r,o),Pe(a[0],.5,qn,.5,Xn),l[0]=nt(Ot(Bo,Xn,qn),o);break}case Fe.e_faceA:{on(o,e.q,this.localNormal),Ft(Qa,e,this.localPoint);for(var f=0;f<this.pointCount;++f){var c=this.points[f];Ft(ds,s,c.localPoint),Pe(qn,1,ds,n-nt(Ot(Bo,ds,Qa),o),o),Pe(Xn,1,ds,-r,o),Pe(a[f],.5,qn,.5,Xn),l[f]=nt(Ot(Bo,Xn,qn),o)}break}case Fe.e_faceB:{on(o,s.q,this.localNormal),Ft(Qa,s,this.localPoint);for(var f=0;f<this.pointCount;++f){var c=this.points[f];Ft(ds,e,c.localPoint),Pe(Xn,1,ds,r-nt(Ot(Bo,ds,Qa),o),o),Pe(qn,1,ds,-n,o),Pe(a[f],.5,qn,.5,Xn),l[f]=nt(Ot(Bo,qn,Xn),o)}Qo(o);break}}return t},i.clipSegmentToLine=ta,i.ClipVertex=Wi,i.getPointStates=_S,i.PointState=nr,i})(),Jf=(function(){function i(){this.localPoint=X(0,0),this.normalImpulse=0,this.tangentImpulse=0,this.id=new Vm}return i.prototype.set=function(t){V(this.localPoint,t.localPoint),this.normalImpulse=t.normalImpulse,this.tangentImpulse=t.tangentImpulse,this.id.set(t.id)},i.prototype.recycle=function(){Ct(this.localPoint),this.normalImpulse=0,this.tangentImpulse=0,this.id.recycle()},i})(),Vm=(function(){function i(){this.key=-1,this.indexA=-1,this.indexB=-1,this.typeA=ne.e_unset,this.typeB=ne.e_unset}return i.prototype.setFeatures=function(t,e,n,s){this.indexA=t,this.indexB=n,this.typeA=e,this.typeB=s,this.key=this.indexA+this.indexB*4+this.typeA*16+this.typeB*64},i.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,this.typeA=t.typeA,this.typeB=t.typeB,this.key=this.indexA+this.indexB*4+this.typeA*16+this.typeB*64},i.prototype.swapFeatures=function(){var t=this.indexA,e=this.indexB,n=this.typeA,s=this.typeB;this.indexA=e,this.indexB=t,this.typeA=s,this.typeB=n,this.key=this.indexA+this.indexB*4+this.typeA*16+this.typeB*64},i.prototype.recycle=function(){this.indexA=0,this.indexB=0,this.typeA=ne.e_unset,this.typeB=ne.e_unset,this.key=-1},i})(),Gm=(function(){function i(){this.normal=X(0,0),this.points=[X(0,0),X(0,0)],this.separations=[0,0],this.pointCount=0}return i.prototype.recycle=function(){Ct(this.normal),Ct(this.points[0]),Ct(this.points[1]),this.separations[0]=0,this.separations[1]=0,this.pointCount=0},i})();function _S(i,t,e,n){for(var s=0;s<e.pointCount;++s){var r=e.points[s].id;i[s]=nr.removeState;for(var o=0;o<n.pointCount;++o)if(n.points[o].id.key===r.key){i[s]=nr.persistState;break}}for(var s=0;s<n.pointCount;++s){var r=n.points[s].id;t[s]=nr.addState;for(var o=0;o<e.pointCount;++o)if(e.points[o].id.key===r.key){t[s]=nr.persistState;break}}}function ta(i,t,e,n,s){var r=0,o=nt(e,t[0].v)-n,a=nt(e,t[1].v)-n;if(o<=0&&i[r++].set(t[0]),a<=0&&i[r++].set(t[1]),o*a<0){var l=o/(o-a);Pe(i[r].v,1-l,t[0].v,l,t[1].v),i[r].id.setFeatures(s,ne.e_vertex,t[0].id.indexB,ne.e_face),++r}return r}var vS=Math.sqrt,gS=Math.max,yS=Math.min,Zf=new Xo({create:function(){return new Nn},release:function(i){i.recycle()}}),Vr=new zm,tl=new Gm,Kf=(function(){function i(t){this.prev=null,this.next=null,this.other=null,this.contact=t}return i.prototype.recycle=function(){this.prev=null,this.next=null,this.other=null},i})();function jf(i,t){return vS(i*t)}function Qf(i,t){return i>t?i:t}var Gs=[],td=(function(){function i(){this.rA=X(0,0),this.rB=X(0,0),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0}return i.prototype.recycle=function(){Ct(this.rA),Ct(this.rB),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0},i})(),Yn=X(0,0),Ve=X(0,0),$n=X(0,0),Ge=X(0,0),ms=X(0,0),ks=gr(0,0,0),Hs=gr(0,0,0),el=X(0,0),il=X(0,0),Gr=X(0,0),nl=X(0,0),Rc=X(0,0),Bc=X(0,0),Xe=X(0,0),ge=X(0,0),Po=X(0,0),Qi=X(0,0),kr=X(0,0),Hr=X(0,0),Vi=X(0,0),Jn=X(0,0),Ee=X(0,0),tn=X(0,0),Ye=X(0,0),$e=X(0,0),En=X(0,0),Nn=(function(){function i(){this.m_nodeA=new Kf(this),this.m_nodeB=new Kf(this),this.m_fixtureA=null,this.m_fixtureB=null,this.m_indexA=-1,this.m_indexB=-1,this.m_evaluateFcn=null,this.m_manifold=new zm,this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_friction=0,this.m_restitution=0,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse=new mS(this),this.v_points=[new td,new td],this.v_normal=X(0,0),this.v_normalMass=new Tn,this.v_K=new Tn,this.v_pointCount=0,this.v_tangentSpeed=0,this.v_friction=0,this.v_restitution=0,this.v_invMassA=0,this.v_invMassB=0,this.v_invIA=0,this.v_invIB=0,this.p_localPoints=[X(0,0),X(0,0)],this.p_localNormal=X(0,0),this.p_localPoint=X(0,0),this.p_localCenterA=X(0,0),this.p_localCenterB=X(0,0),this.p_type=Fe.e_unset,this.p_radiusA=0,this.p_radiusB=0,this.p_pointCount=0,this.p_invMassA=0,this.p_invMassB=0,this.p_invIA=0,this.p_invIB=0}return i.prototype.initialize=function(t,e,n,s,r){this.m_fixtureA=t,this.m_fixtureB=n,this.m_indexA=e,this.m_indexB=s,this.m_evaluateFcn=r,this.m_friction=jf(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction),this.m_restitution=Qf(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)},i.prototype.recycle=function(){this.m_nodeA.recycle(),this.m_nodeB.recycle(),this.m_fixtureA=null,this.m_fixtureB=null,this.m_indexA=-1,this.m_indexB=-1,this.m_evaluateFcn=null,this.m_manifold.recycle(),this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_friction=0,this.m_restitution=0,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse.recycle();for(var t=0,e=this.v_points;t<e.length;t++){var n=e[t];n.recycle()}Ct(this.v_normal),this.v_normalMass.setZero(),this.v_K.setZero(),this.v_pointCount=0,this.v_tangentSpeed=0,this.v_friction=0,this.v_restitution=0,this.v_invMassA=0,this.v_invMassB=0,this.v_invIA=0,this.v_invIB=0;for(var s=0,r=this.p_localPoints;s<r.length;s++){var o=r[s];Ct(o)}Ct(this.p_localNormal),Ct(this.p_localPoint),Ct(this.p_localCenterA),Ct(this.p_localCenterB),this.p_type=Fe.e_unset,this.p_radiusA=0,this.p_radiusB=0,this.p_pointCount=0,this.p_invMassA=0,this.p_invMassB=0,this.p_invIA=0,this.p_invIB=0},i.prototype.initConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=n.m_shape;if(!(o===null||a===null)){var l=this.m_manifold,c=l.pointCount;this.v_invMassA=s.m_invMass,this.v_invMassB=r.m_invMass,this.v_invIA=s.m_invI,this.v_invIB=r.m_invI,this.v_friction=this.m_friction,this.v_restitution=this.m_restitution,this.v_tangentSpeed=this.m_tangentSpeed,this.v_pointCount=c,this.v_K.setZero(),this.v_normalMass.setZero(),this.p_invMassA=s.m_invMass,this.p_invMassB=r.m_invMass,this.p_invIA=s.m_invI,this.p_invIB=r.m_invI,V(this.p_localCenterA,s.m_sweep.localCenter),V(this.p_localCenterB,r.m_sweep.localCenter),this.p_radiusA=o.m_radius,this.p_radiusB=a.m_radius,this.p_type=l.type,V(this.p_localNormal,l.localNormal),V(this.p_localPoint,l.localPoint),this.p_pointCount=c;for(var h=0;h<ut.maxManifoldPoints;++h)this.v_points[h].recycle(),Ct(this.p_localPoints[h]);for(var h=0;h<c;++h){var u=l.points[h],f=this.v_points[h];t.warmStarting&&(f.normalImpulse=t.dtRatio*u.normalImpulse,f.tangentImpulse=t.dtRatio*u.tangentImpulse),V(this.p_localPoints[h],u.localPoint)}}}}},i.prototype.getManifold=function(){return this.m_manifold},i.prototype.getWorldManifold=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=n.m_shape;if(!(o===null||a===null))return this.m_manifold.getWorldManifold(t,s.getTransform(),o.m_radius,r.getTransform(),a.m_radius)}}},i.prototype.setEnabled=function(t){this.m_enabledFlag=!!t},i.prototype.isEnabled=function(){return this.m_enabledFlag},i.prototype.isTouching=function(){return this.m_touchingFlag},i.prototype.getNext=function(){return this.m_next},i.prototype.getFixtureA=function(){return this.m_fixtureA},i.prototype.getFixtureB=function(){return this.m_fixtureB},i.prototype.getChildIndexA=function(){return this.m_indexA},i.prototype.getChildIndexB=function(){return this.m_indexB},i.prototype.flagForFiltering=function(){this.m_filterFlag=!0},i.prototype.setFriction=function(t){this.m_friction=t},i.prototype.getFriction=function(){return this.m_friction},i.prototype.resetFriction=function(){var t=this.m_fixtureA,e=this.m_fixtureB;t===null||e===null||(this.m_friction=jf(t.m_friction,e.m_friction))},i.prototype.setRestitution=function(t){this.m_restitution=t},i.prototype.getRestitution=function(){return this.m_restitution},i.prototype.resetRestitution=function(){var t=this.m_fixtureA,e=this.m_fixtureB;t===null||e===null||(this.m_restitution=Qf(t.m_restitution,e.m_restitution))},i.prototype.setTangentSpeed=function(t){this.m_tangentSpeed=t},i.prototype.getTangentSpeed=function(){return this.m_tangentSpeed},i.prototype.evaluate=function(t,e,n){var s=this.m_fixtureA,r=this.m_fixtureB;s===null||r===null||this.m_evaluateFcn(t,e,s,this.m_indexA,n,r,this.m_indexB)},i.prototype.update=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=n.m_shape;if(!(o===null||a===null)){this.m_enabledFlag=!0;var l=!1,c=this.m_touchingFlag,h=e.m_isSensor,u=n.m_isSensor,f=h||u,d=s.m_xf,_=r.m_xf;if(f)l=Um(o,this.m_indexA,a,this.m_indexB,d,_),this.m_manifold.pointCount=0;else{Vr.recycle(),Vr.set(this.m_manifold),this.m_manifold.recycle(),this.evaluate(this.m_manifold,d,_),l=this.m_manifold.pointCount>0;for(var v=0;v<this.m_manifold.pointCount;++v){var p=this.m_manifold.points[v];p.normalImpulse=0,p.tangentImpulse=0;for(var m=0;m<Vr.pointCount;++m){var A=Vr.points[m];if(A.id.key===p.id.key){p.normalImpulse=A.normalImpulse,p.tangentImpulse=A.tangentImpulse;break}}}l!==c&&(s.setAwake(!0),r.setAwake(!0))}this.m_touchingFlag=l;var y=typeof t=="object"&&t!==null;!c&&l&&y&&t.beginContact(this),c&&!l&&y&&t.endContact(this),!f&&l&&y&&Vr&&t.preSolve(this,Vr)}}}},i.prototype.solvePositionConstraint=function(t){return this._solvePositionConstraint(t,null,null)},i.prototype.solvePositionConstraintTOI=function(t,e,n){return this._solvePositionConstraint(t,e,n)},i.prototype._solvePositionConstraint=function(t,e,n){var s=e!==null&&n!==null,r=0,o=this.m_fixtureA,a=this.m_fixtureB;if(o===null||a===null)return r;var l=o.m_body,c=a.m_body;if(l===null||c===null)return r;var h=l.c_position,u=c.c_position,f=this.p_localCenterA,d=this.p_localCenterB,_=0,v=0;(!s||l===e||l===n)&&(_=this.p_invMassA,v=this.p_invIA);var p=0,m=0;(!s||c===e||c===n)&&(p=this.p_invMassB,m=this.p_invIB),V(Yn,h.c);var A=h.a;V($n,u.c);for(var y=u.a,x=0;x<this.p_pointCount;++x){Oa(ks,f,Yn,A),Oa(Hs,d,$n,y);var C=void 0;switch(this.p_type){case Fe.e_circles:{Ft(el,ks,this.p_localPoint),Ft(il,Hs,this.p_localPoints[0]),Ot(ge,il,el),Sn(ge),Pe(Po,.5,el,.5,il),C=nt(il,ge)-nt(el,ge)-this.p_radiusA-this.p_radiusB;break}case Fe.e_faceA:{on(ge,ks.q,this.p_localNormal),Ft(nl,ks,this.p_localPoint),Ft(Gr,Hs,this.p_localPoints[x]),C=nt(Gr,ge)-nt(nl,ge)-this.p_radiusA-this.p_radiusB,V(Po,Gr);break}case Fe.e_faceB:{on(ge,Hs.q,this.p_localNormal),Ft(nl,Hs,this.p_localPoint),Ft(Gr,ks,this.p_localPoints[x]),C=nt(Gr,ge)-nt(nl,ge)-this.p_radiusA-this.p_radiusB,V(Po,Gr),Qo(ge);break}default:return r}Ot(Rc,Po,Yn),Ot(Bc,Po,$n),r=yS(r,C);var E=s?ut.toiBaugarte:ut.baumgarte,w=ut.linearSlop,B=ut.maxLinearCorrection,T=ai(E*(C+w),-B,0),S=Yt(Rc,ge),P=Yt(Bc,ge),z=_+p+v*S*S+m*P*P,O=z>0?-T/z:0;Lt(Xe,O,ge),Vo(Yn,_,Xe),A-=v*Yt(Rc,Xe),Mn($n,p,Xe),y+=m*Yt(Bc,Xe)}return V(h.c,Yn),h.a=A,V(u.c,$n),u.a=y,r},i.prototype.initVelocityConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=s.c_position,c=r.c_position,h=this.p_radiusA,u=this.p_radiusB,f=this.m_manifold,d=this.v_invMassA,_=this.v_invMassB,v=this.v_invIA,p=this.v_invIB,m=this.p_localCenterA,A=this.p_localCenterB;V(Yn,l.c);var y=l.a;V(Ve,o.v);var x=o.w;V($n,c.c);var C=c.a;V(Ge,a.v);var E=a.w;Oa(ks,m,Yn,y),Oa(Hs,A,$n,C),tl.recycle(),f.getWorldManifold(tl,ks,h,Hs,u),V(this.v_normal,tl.normal);for(var w=0;w<this.v_pointCount;++w){var B=this.v_points[w],T=tl.points[w];Ot(B.rA,T,Yn),Ot(B.rB,T,$n);var S=Yt(B.rA,this.v_normal),P=Yt(B.rB,this.v_normal),z=d+_+v*S*S+p*P*P;B.normalMass=z>0?1/z:0,sr(ms,this.v_normal,1);var O=Yt(B.rA,ms),q=Yt(B.rB,ms),Z=d+_+v*O*O+p*q*q;B.tangentMass=Z>0?1/Z:0,B.velocityBias=0;var D=0;D+=nt(this.v_normal,Ge),D+=nt(this.v_normal,Gi(En,E,B.rB)),D-=nt(this.v_normal,Ve),D-=nt(this.v_normal,Gi(En,x,B.rA)),D<-ut.velocityThreshold&&(B.velocityBias=-this.v_restitution*D)}if(this.v_pointCount==2&&t.blockSolve){var J=this.v_points[0],G=this.v_points[1],it=Yt(J.rA,this.v_normal),pt=Yt(J.rB,this.v_normal),gt=Yt(G.rA,this.v_normal),zt=Yt(G.rB,this.v_normal),se=d+_+v*it*it+p*pt*pt,K=d+_+v*gt*gt+p*zt*zt,ot=d+_+v*it*gt+p*pt*zt,bt=1e3;if(se*se<bt*(se*K-ot*ot)){this.v_K.ex.setNum(se,ot),this.v_K.ey.setNum(ot,K);var ht=this.v_K.ex.x,Dt=this.v_K.ey.x,Vt=this.v_K.ex.y,Zt=this.v_K.ey.y,ve=ht*Zt-Dt*Vt;ve!==0&&(ve=1/ve),this.v_normalMass.ex.x=ve*Zt,this.v_normalMass.ey.x=-ve*Dt,this.v_normalMass.ex.y=-ve*Vt,this.v_normalMass.ey.y=ve*ht}else this.v_pointCount=1}V(l.c,Yn),l.a=y,V(o.v,Ve),o.w=x,V(c.c,$n),c.a=C,V(a.v,Ge),a.w=E}}},i.prototype.warmStartConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=this.v_invMassA,c=this.v_invIA,h=this.v_invMassB,u=this.v_invIB;V(Ve,o.v);var f=o.w;V(Ge,a.v);var d=a.w;V(ge,this.v_normal),sr(ms,ge,1);for(var _=0;_<this.v_pointCount;++_){var v=this.v_points[_];Pe(Xe,v.normalImpulse,ge,v.tangentImpulse,ms),f-=c*Yt(v.rA,Xe),Vo(Ve,l,Xe),d+=u*Yt(v.rB,Xe),Mn(Ge,h,Xe)}V(o.v,Ve),o.w=f,V(a.v,Ge),a.w=d}}},i.prototype.storeConstraintImpulses=function(t){for(var e=this.m_manifold,n=0;n<this.v_pointCount;++n)e.points[n].normalImpulse=this.v_points[n].normalImpulse,e.points[n].tangentImpulse=this.v_points[n].tangentImpulse},i.prototype.solveVelocityConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=this.v_invMassA,c=this.v_invIA,h=this.v_invMassB,u=this.v_invIB;V(Ve,o.v);var f=o.w;V(Ge,a.v);var d=a.w;V(ge,this.v_normal),sr(ms,ge,1);for(var _=this.v_friction,v=0;v<this.v_pointCount;++v){var p=this.v_points[v];Ct(Qi),nn(Qi,Ge),nn(Qi,Gi(En,d,p.rB)),Qn(Qi,Ve),Qn(Qi,Gi(En,f,p.rA));var m=nt(Qi,ms)-this.v_tangentSpeed,A=p.tangentMass*-m,y=_*p.normalImpulse,x=ai(p.tangentImpulse+A,-y,y);A=x-p.tangentImpulse,p.tangentImpulse=x,Lt(Xe,A,ms),Vo(Ve,l,Xe),f-=c*Yt(p.rA,Xe),Mn(Ge,h,Xe),d+=u*Yt(p.rB,Xe)}if(this.v_pointCount==1||t.blockSolve==!1)for(var C=0;C<this.v_pointCount;++C){var p=this.v_points[C];Ct(Qi),nn(Qi,Ge),nn(Qi,Gi(En,d,p.rB)),Qn(Qi,Ve),Qn(Qi,Gi(En,f,p.rA));var E=nt(Qi,ge),A=-p.normalMass*(E-p.velocityBias),x=gS(p.normalImpulse+A,0);A=x-p.normalImpulse,p.normalImpulse=x,Lt(Xe,A,ge),Vo(Ve,l,Xe),f-=c*Yt(p.rA,Xe),Mn(Ge,h,Xe),d+=u*Yt(p.rB,Xe)}else{var w=this.v_points[0],B=this.v_points[1];ri(Jn,w.normalImpulse,B.normalImpulse),Ct(kr),nn(kr,Ge),nn(kr,Gi(En,d,w.rB)),Qn(kr,Ve),Qn(kr,Gi(En,f,w.rA)),Ct(Hr),nn(Hr,Ge),nn(Hr,Gi(En,d,B.rB)),Qn(Hr,Ve),Qn(Hr,Gi(En,f,B.rA));var T=nt(kr,ge),S=nt(Hr,ge);for(ri(Vi,T-w.velocityBias,S-B.velocityBias),Vi.x-=this.v_K.ex.x*Jn.x+this.v_K.ey.x*Jn.y,Vi.y-=this.v_K.ex.y*Jn.x+this.v_K.ey.y*Jn.y;;){if(Ct(Ee),Ee.x=-(this.v_normalMass.ex.x*Vi.x+this.v_normalMass.ey.x*Vi.y),Ee.y=-(this.v_normalMass.ex.y*Vi.x+this.v_normalMass.ey.y*Vi.y),Ee.x>=0&&Ee.y>=0){Ot(tn,Ee,Jn),Lt(Ye,tn.x,ge),Lt($e,tn.y,ge),Pn(Ve,-l,Ye,-l,$e,1,Ve),f-=c*(Yt(w.rA,Ye)+Yt(B.rA,$e)),Pn(Ge,h,Ye,h,$e,1,Ge),d+=u*(Yt(w.rB,Ye)+Yt(B.rB,$e)),w.normalImpulse=Ee.x,B.normalImpulse=Ee.y;break}if(Ee.x=-w.normalMass*Vi.x,Ee.y=0,T=0,S=this.v_K.ex.y*Ee.x+Vi.y,Ee.x>=0&&S>=0){Ot(tn,Ee,Jn),Lt(Ye,tn.x,ge),Lt($e,tn.y,ge),Pn(Ve,-l,Ye,-l,$e,1,Ve),f-=c*(Yt(w.rA,Ye)+Yt(B.rA,$e)),Pn(Ge,h,Ye,h,$e,1,Ge),d+=u*(Yt(w.rB,Ye)+Yt(B.rB,$e)),w.normalImpulse=Ee.x,B.normalImpulse=Ee.y;break}if(Ee.x=0,Ee.y=-B.normalMass*Vi.y,T=this.v_K.ey.x*Ee.y+Vi.x,S=0,Ee.y>=0&&T>=0){Ot(tn,Ee,Jn),Lt(Ye,tn.x,ge),Lt($e,tn.y,ge),Pn(Ve,-l,Ye,-l,$e,1,Ve),f-=c*(Yt(w.rA,Ye)+Yt(B.rA,$e)),Pn(Ge,h,Ye,h,$e,1,Ge),d+=u*(Yt(w.rB,Ye)+Yt(B.rB,$e)),w.normalImpulse=Ee.x,B.normalImpulse=Ee.y;break}if(Ee.x=0,Ee.y=0,T=Vi.x,S=Vi.y,T>=0&&S>=0){Ot(tn,Ee,Jn),Lt(Ye,tn.x,ge),Lt($e,tn.y,ge),Pn(Ve,-l,Ye,-l,$e,1,Ve),f-=c*(Yt(w.rA,Ye)+Yt(B.rA,$e)),Pn(Ge,h,Ye,h,$e,1,Ge),d+=u*(Yt(w.rB,Ye)+Yt(B.rB,$e)),w.normalImpulse=Ee.x,B.normalImpulse=Ee.y;break}break}}V(o.v,Ve),o.w=f,V(a.v,Ge),a.w=d}}},i.addType=function(t,e,n){Gs[t]=Gs[t]||{},Gs[t][e]=n},i.create=function(t,e,n,s){var r=t.m_shape.m_type,o=n.m_shape.m_type,a=Zf.allocate(),l;if(l=Gs[r]&&Gs[r][o])a.initialize(t,e,n,s,l);else if(l=Gs[o]&&Gs[o][r])a.initialize(n,s,t,e,l);else return null;t=a.m_fixtureA,n=a.m_fixtureB,e=a.getChildIndexA(),s=a.getChildIndexB();var c=t.m_body,h=n.m_body;return a.m_nodeA.contact=a,a.m_nodeA.other=h,a.m_nodeA.prev=null,a.m_nodeA.next=c.m_contactList,c.m_contactList!=null&&(c.m_contactList.prev=a.m_nodeA),c.m_contactList=a.m_nodeA,a.m_nodeB.contact=a,a.m_nodeB.other=c,a.m_nodeB.prev=null,a.m_nodeB.next=h.m_contactList,h.m_contactList!=null&&(h.m_contactList.prev=a.m_nodeB),h.m_contactList=a.m_nodeB,t.isSensor()==!1&&n.isSensor()==!1&&(c.setAwake(!0),h.setAwake(!0)),a},i.destroy=function(t,e){var n=t.m_fixtureA,s=t.m_fixtureB;if(!(n===null||s===null)){var r=n.m_body,o=s.m_body;r===null||o===null||(t.isTouching()&&e.endContact(t),t.m_nodeA.prev&&(t.m_nodeA.prev.next=t.m_nodeA.next),t.m_nodeA.next&&(t.m_nodeA.next.prev=t.m_nodeA.prev),t.m_nodeA==r.m_contactList&&(r.m_contactList=t.m_nodeA.next),t.m_nodeB.prev&&(t.m_nodeB.prev.next=t.m_nodeB.next),t.m_nodeB.next&&(t.m_nodeB.next.prev=t.m_nodeB.prev),t.m_nodeB==o.m_contactList&&(o.m_contactList=t.m_nodeB.next),t.m_manifold.pointCount>0&&!n.m_isSensor&&!s.m_isSensor&&(r.setAwake(!0),o.setAwake(!0)),Zf.release(t))}},i})(),xS={gravity:g.zero(),allowSleep:!0,warmStarting:!0,continuousPhysics:!0,subStepping:!1,blockSolve:!0,velocityIterations:8,positionIterations:3},oa=(function(){function i(t){if(!(this instanceof i))return new i(t);this.s_step=new tu,t?g.isValid(t)&&(t={gravity:t}):t={},t=qi(t,xS),this.m_solver=new Om(this),this.m_broadPhase=new $M,this.m_contactList=null,this.m_contactCount=0,this.m_bodyList=null,this.m_bodyCount=0,this.m_jointList=null,this.m_jointCount=0,this.m_stepComplete=!0,this.m_allowSleep=t.allowSleep,this.m_gravity=g.clone(t.gravity),this.m_clearForces=!0,this.m_newFixture=!1,this.m_locked=!1,this.m_warmStarting=t.warmStarting,this.m_continuousPhysics=t.continuousPhysics,this.m_subStepping=t.subStepping,this.m_blockSolve=t.blockSolve,this.m_velocityIterations=t.velocityIterations,this.m_positionIterations=t.positionIterations,this.m_t=0,this.m_step_callback=[]}return i.prototype._serialize=function(){for(var t=[],e=[],n=this.getBodyList();n;n=n.getNext())t.push(n);for(var s=this.getJointList();s;s=s.getNext())typeof s._serialize=="function"&&e.push(s);return{gravity:this.m_gravity,bodies:t,joints:e}},i._deserialize=function(t,e,n){if(!t)return new i;var s=new i(t.gravity);if(t.bodies)for(var r=t.bodies.length-1;r>=0;r-=1)s._addBody(n(_e,t.bodies[r],s));if(t.joints)for(var r=t.joints.length-1;r>=0;r--)s.createJoint(n(pi,t.joints[r],s));return s},i.prototype.getBodyList=function(){return this.m_bodyList},i.prototype.getJointList=function(){return this.m_jointList},i.prototype.getContactList=function(){return this.m_contactList},i.prototype.getBodyCount=function(){return this.m_bodyCount},i.prototype.getJointCount=function(){return this.m_jointCount},i.prototype.getContactCount=function(){return this.m_contactCount},i.prototype.setGravity=function(t){this.m_gravity.set(t)},i.prototype.getGravity=function(){return this.m_gravity},i.prototype.isLocked=function(){return this.m_locked},i.prototype.setAllowSleeping=function(t){if(t!=this.m_allowSleep&&(this.m_allowSleep=t,this.m_allowSleep==!1))for(var e=this.m_bodyList;e;e=e.m_next)e.setAwake(!0)},i.prototype.getAllowSleeping=function(){return this.m_allowSleep},i.prototype.setWarmStarting=function(t){this.m_warmStarting=t},i.prototype.getWarmStarting=function(){return this.m_warmStarting},i.prototype.setContinuousPhysics=function(t){this.m_continuousPhysics=t},i.prototype.getContinuousPhysics=function(){return this.m_continuousPhysics},i.prototype.setSubStepping=function(t){this.m_subStepping=t},i.prototype.getSubStepping=function(){return this.m_subStepping},i.prototype.setAutoClearForces=function(t){this.m_clearForces=t},i.prototype.getAutoClearForces=function(){return this.m_clearForces},i.prototype.clearForces=function(){for(var t=this.m_bodyList;t;t=t.getNext())t.m_force.setZero(),t.m_torque=0},i.prototype.queryAABB=function(t,e){var n=this.m_broadPhase;this.m_broadPhase.query(t,function(s){var r=n.getUserData(s);return e(r.fixture)})},i.prototype.rayCast=function(t,e,n){var s=this.m_broadPhase;this.m_broadPhase.rayCast({maxFraction:1,p1:t,p2:e},function(r,o){var a=s.getUserData(o),l=a.fixture,c=a.childIndex,h={},u=l.rayCast(h,r,c);if(u){var f=h.fraction,d=g.add(g.mulNumVec2(1-f,r.p1),g.mulNumVec2(f,r.p2));return n(l,d,h.normal,f)}return r.maxFraction})},i.prototype.getProxyCount=function(){return this.m_broadPhase.getProxyCount()},i.prototype.getTreeHeight=function(){return this.m_broadPhase.getTreeHeight()},i.prototype.getTreeBalance=function(){return this.m_broadPhase.getTreeBalance()},i.prototype.getTreeQuality=function(){return this.m_broadPhase.getTreeQuality()},i.prototype.shiftOrigin=function(t){if(!this.isLocked()){for(var e=this.m_bodyList;e;e=e.m_next)e.m_xf.p.sub(t),e.m_sweep.c0.sub(t),e.m_sweep.c.sub(t);for(var n=this.m_jointList;n;n=n.m_next)n.shiftOrigin(t);this.m_broadPhase.shiftOrigin(t)}},i.prototype._addBody=function(t){this.isLocked()||(t.m_prev=null,t.m_next=this.m_bodyList,this.m_bodyList&&(this.m_bodyList.m_prev=t),this.m_bodyList=t,++this.m_bodyCount,this.publish("add-body",t))},i.prototype.createBody=function(t,e){if(this.isLocked())return null;var n={};t&&(g.isValid(t)?n={position:t,angle:e}:typeof t=="object"&&(n=t));var s=new _e(this,n);return this._addBody(s),s},i.prototype.createDynamicBody=function(t,e){var n={};return t&&(g.isValid(t)?n={position:t,angle:e}:typeof t=="object"&&(n=t)),n.type="dynamic",this.createBody(n)},i.prototype.createKinematicBody=function(t,e){var n={};return t&&(g.isValid(t)?n={position:t,angle:e}:typeof t=="object"&&(n=t)),n.type="kinematic",this.createBody(n)},i.prototype.destroyBody=function(t){if(!this.isLocked()){if(t.m_destroyed)return!1;for(var e=t.m_jointList;e;){var n=e;e=e.next,this.publish("remove-joint",n.joint),this.destroyJoint(n.joint),t.m_jointList=e}t.m_jointList=null;for(var s=t.m_contactList;s;){var r=s;s=s.next,this.destroyContact(r.contact),t.m_contactList=s}t.m_contactList=null;for(var o=t.m_fixtureList;o;){var a=o;o=o.m_next,this.publish("remove-fixture",a),a.destroyProxies(this.m_broadPhase),t.m_fixtureList=o}return t.m_fixtureList=null,t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_bodyList&&(this.m_bodyList=t.m_next),t.m_destroyed=!0,--this.m_bodyCount,this.publish("remove-body",t),!0}},i.prototype.createJoint=function(t){if(this.isLocked())return null;if(t.m_prev=null,t.m_next=this.m_jointList,this.m_jointList&&(this.m_jointList.m_prev=t),this.m_jointList=t,++this.m_jointCount,t.m_edgeA.joint=t,t.m_edgeA.other=t.m_bodyB,t.m_edgeA.prev=null,t.m_edgeA.next=t.m_bodyA.m_jointList,t.m_bodyA.m_jointList&&(t.m_bodyA.m_jointList.prev=t.m_edgeA),t.m_bodyA.m_jointList=t.m_edgeA,t.m_edgeB.joint=t,t.m_edgeB.other=t.m_bodyA,t.m_edgeB.prev=null,t.m_edgeB.next=t.m_bodyB.m_jointList,t.m_bodyB.m_jointList&&(t.m_bodyB.m_jointList.prev=t.m_edgeB),t.m_bodyB.m_jointList=t.m_edgeB,t.m_collideConnected==!1)for(var e=t.m_bodyB.getContactList();e;e=e.next)e.other==t.m_bodyA&&e.contact.flagForFiltering();return this.publish("add-joint",t),t},i.prototype.destroyJoint=function(t){if(!this.isLocked()){t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_jointList&&(this.m_jointList=t.m_next);var e=t.m_bodyA,n=t.m_bodyB;if(e.setAwake(!0),n.setAwake(!0),t.m_edgeA.prev&&(t.m_edgeA.prev.next=t.m_edgeA.next),t.m_edgeA.next&&(t.m_edgeA.next.prev=t.m_edgeA.prev),t.m_edgeA==e.m_jointList&&(e.m_jointList=t.m_edgeA.next),t.m_edgeA.prev=null,t.m_edgeA.next=null,t.m_edgeB.prev&&(t.m_edgeB.prev.next=t.m_edgeB.next),t.m_edgeB.next&&(t.m_edgeB.next.prev=t.m_edgeB.prev),t.m_edgeB==n.m_jointList&&(n.m_jointList=t.m_edgeB.next),t.m_edgeB.prev=null,t.m_edgeB.next=null,--this.m_jointCount,t.m_collideConnected==!1)for(var s=n.getContactList();s;)s.other==e&&s.contact.flagForFiltering(),s=s.next;this.publish("remove-joint",t)}},i.prototype.step=function(t,e,n){if(this.publish("pre-step",t),(e|0)!==e&&(e=0),e=e||this.m_velocityIterations,n=n||this.m_positionIterations,this.m_newFixture&&(this.findNewContacts(),this.m_newFixture=!1),this.m_locked=!0,this.s_step.reset(t),this.s_step.velocityIterations=e,this.s_step.positionIterations=n,this.s_step.warmStarting=this.m_warmStarting,this.s_step.blockSolve=this.m_blockSolve,this.updateContacts(),this.m_stepComplete&&t>0){this.m_solver.solveWorld(this.s_step);for(var s=this.m_bodyList;s;s=s.getNext())s.m_islandFlag!=!1&&(s.isStatic()||s.synchronizeFixtures());this.findNewContacts()}this.m_continuousPhysics&&t>0&&this.m_solver.solveWorldTOI(this.s_step),this.m_clearForces&&this.clearForces(),this.m_locked=!1;for(var r;r=this.m_step_callback.shift();)r(this);this.publish("post-step",t)},i.prototype.queueUpdate=function(t){this.isLocked()?this.m_step_callback.push(t):t(this)},i.prototype.findNewContacts=function(){var t=this;this.m_broadPhase.updatePairs(function(e,n){return t.createContact(e,n)})},i.prototype.createContact=function(t,e){var n=t.fixture,s=e.fixture,r=t.childIndex,o=e.childIndex,a=n.getBody(),l=s.getBody();if(a!=l){for(var c=l.getContactList();c;){if(c.other==a){var h=c.contact.getFixtureA(),u=c.contact.getFixtureB(),f=c.contact.getChildIndexA(),d=c.contact.getChildIndexB();if(h==n&&u==s&&f==r&&d==o||h==s&&u==n&&f==o&&d==r)return}c=c.next}if(l.shouldCollide(a)!=!1&&s.shouldCollide(n)!=!1){var _=Nn.create(n,r,s,o);_!=null&&(_.m_prev=null,this.m_contactList!=null&&(_.m_next=this.m_contactList,this.m_contactList.m_prev=_),this.m_contactList=_,++this.m_contactCount)}}},i.prototype.updateContacts=function(){for(var t,e=this.m_contactList;t=e;){e=t.getNext();var n=t.getFixtureA(),s=t.getFixtureB(),r=t.getChildIndexA(),o=t.getChildIndexB(),a=n.getBody(),l=s.getBody();if(t.m_filterFlag){if(l.shouldCollide(a)==!1){this.destroyContact(t);continue}if(s.shouldCollide(n)==!1){this.destroyContact(t);continue}t.m_filterFlag=!1}var c=a.isAwake()&&!a.isStatic(),h=l.isAwake()&&!l.isStatic();if(!(c==!1&&h==!1)){var u=n.m_proxies[r].proxyId,f=s.m_proxies[o].proxyId,d=this.m_broadPhase.testOverlap(u,f);if(d==!1){this.destroyContact(t);continue}t.update(this)}}},i.prototype.destroyContact=function(t){t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_contactList&&(this.m_contactList=t.m_next),Nn.destroy(t,this),--this.m_contactCount},i.prototype.on=function(t,e){return typeof t!="string"||typeof e!="function"?this:(this._listeners||(this._listeners={}),this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this)},i.prototype.off=function(t,e){if(typeof t!="string"||typeof e!="function")return this;var n=this._listeners&&this._listeners[t];if(!n||!n.length)return this;var s=n.indexOf(e);return s>=0&&n.splice(s,1),this},i.prototype.publish=function(t,e,n,s){var r=this._listeners&&this._listeners[t];if(!r||!r.length)return 0;for(var o=0;o<r.length;o++)r[o].call(this,e,n,s);return r.length},i.prototype.beginContact=function(t){this.publish("begin-contact",t)},i.prototype.endContact=function(t){this.publish("end-contact",t)},i.prototype.preSolve=function(t,e){this.publish("pre-solve",t,e)},i.prototype.postSolve=function(t,e){this.publish("post-solve",t,e)},i})(),re=(function(){function i(t,e,n){if(!(this instanceof i))return new i(t,e,n);typeof t>"u"?(this.x=0,this.y=0,this.z=0):typeof t=="object"?(this.x=t.x,this.y=t.y,this.z=t.z):(this.x=t,this.y=e,this.z=n)}return i.prototype._serialize=function(){return{x:this.x,y:this.y,z:this.z}},i._deserialize=function(t){var e=Object.create(i.prototype);return e.x=t.x,e.y=t.y,e.z=t.z,e},i.neo=function(t,e,n){var s=Object.create(i.prototype);return s.x=t,s.y=e,s.z=n,s},i.zero=function(){var t=Object.create(i.prototype);return t.x=0,t.y=0,t.z=0,t},i.clone=function(t){return i.neo(t.x,t.y,t.z)},i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)},i.assert=function(t){},i.prototype.setZero=function(){return this.x=0,this.y=0,this.z=0,this},i.prototype.set=function(t,e,n){return this.x=t,this.y=e,this.z=n,this},i.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},i.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},i.prototype.mul=function(t){return this.x*=t,this.y*=t,this.z*=t,this},i.areEqual=function(t,e){return t===e||typeof t=="object"&&t!==null&&typeof e=="object"&&e!==null&&t.x===e.x&&t.y===e.y&&t.z===e.z},i.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z},i.cross=function(t,e){return new i(t.y*e.z-t.z*e.y,t.z*e.x-t.x*e.z,t.x*e.y-t.y*e.x)},i.add=function(t,e){return new i(t.x+e.x,t.y+e.y,t.z+e.z)},i.sub=function(t,e){return new i(t.x-e.x,t.y-e.y,t.z-e.z)},i.mul=function(t,e){return new i(e*t.x,e*t.y,e*t.z)},i.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},i.neg=function(t){return new i(-t.x,-t.y,-t.z)},i})(),ed=X(0,0),id=X(0,0),Es=(function(i){yi(t,i);function t(e,n){var s=this;return s instanceof t?(s=i.call(this)||this,s.m_type=t.TYPE,s.m_radius=ut.polygonRadius,s.m_vertex1=e?g.clone(e):g.zero(),s.m_vertex2=n?g.clone(n):g.zero(),s.m_vertex0=g.zero(),s.m_vertex3=g.zero(),s.m_hasVertex0=!1,s.m_hasVertex3=!1,s):new t(e,n)}return t.prototype._serialize=function(){return{type:this.m_type,vertex1:this.m_vertex1,vertex2:this.m_vertex2,vertex0:this.m_vertex0,vertex3:this.m_vertex3}},t._deserialize=function(e){var n=new t(e.vertex1,e.vertex2);return n.m_hasVertex0&&n.setPrevVertex(e.vertex0),n.m_hasVertex3&&n.setNextVertex(e.vertex3),n},t.prototype._reset=function(){},t.prototype.getRadius=function(){return this.m_radius},t.prototype.getType=function(){return this.m_type},t.prototype.setNext=function(e){return this.setNextVertex(e)},t.prototype.setNextVertex=function(e){return e?(this.m_vertex3.setVec2(e),this.m_hasVertex3=!0):(this.m_vertex3.setZero(),this.m_hasVertex3=!1),this},t.prototype.getNextVertex=function(){return this.m_vertex3},t.prototype.setPrev=function(e){return this.setPrevVertex(e)},t.prototype.setPrevVertex=function(e){return e?(this.m_vertex0.setVec2(e),this.m_hasVertex0=!0):(this.m_vertex0.setZero(),this.m_hasVertex0=!1),this},t.prototype.getPrevVertex=function(){return this.m_vertex0},t.prototype._set=function(e,n){return this.m_vertex1.setVec2(e),this.m_vertex2.setVec2(n),this.m_hasVertex0=!1,this.m_hasVertex3=!1,this},t.prototype._clone=function(){var e=new t;return e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_vertex1.setVec2(this.m_vertex1),e.m_vertex2.setVec2(this.m_vertex2),e.m_vertex0.setVec2(this.m_vertex0),e.m_vertex3.setVec2(this.m_vertex3),e.m_hasVertex0=this.m_hasVertex0,e.m_hasVertex3=this.m_hasVertex3,e},t.prototype.getChildCount=function(){return 1},t.prototype.testPoint=function(e,n){return!1},t.prototype.rayCast=function(e,n,s,r){var o=$.mulTVec2(s.q,g.sub(n.p1,s.p)),a=$.mulTVec2(s.q,g.sub(n.p2,s.p)),l=g.sub(a,o),c=this.m_vertex1,h=this.m_vertex2,u=g.sub(h,c),f=g.neo(u.y,-u.x);f.normalize();var d=g.dot(f,g.sub(c,o)),_=g.dot(f,l);if(_==0)return!1;var v=d/_;if(v<0||n.maxFraction<v)return!1;var p=g.add(o,g.mulNumVec2(v,l)),m=g.sub(h,c),A=g.dot(m,m);if(A==0)return!1;var y=g.dot(g.sub(p,c),m)/A;return y<0||1<y?!1:(e.fraction=v,d>0?e.normal=$.mulVec2(s.q,f).neg():e.normal=$.mulVec2(s.q,f),!0)},t.prototype.computeAABB=function(e,n,s){Ft(ed,n,this.m_vertex1),Ft(id,n,this.m_vertex2),hi.combinePoints(e,ed,id),hi.extend(e,this.m_radius)},t.prototype.computeMass=function(e,n){e.mass=0,Pe(e.center,.5,this.m_vertex1,.5,this.m_vertex2),e.I=0},t.prototype.computeDistanceProxy=function(e){e.m_vertices[0]=this.m_vertex1,e.m_vertices[1]=this.m_vertex2,e.m_vertices.length=2,e.m_count=2,e.m_radius=this.m_radius},t.TYPE="edge",t})(yr),nd=X(0,0),sd=X(0,0),ea=(function(i){yi(t,i);function t(e,n){var s=this;return s instanceof t?(s=i.call(this)||this,s.m_type=t.TYPE,s.m_radius=ut.polygonRadius,s.m_vertices=[],s.m_count=0,s.m_prevVertex=null,s.m_nextVertex=null,s.m_hasPrevVertex=!1,s.m_hasNextVertex=!1,s.m_isLoop=!!n,e&&e.length&&(n?s._createLoop(e):s._createChain(e)),s):new t(e,n)}return t.prototype._serialize=function(){var e={type:this.m_type,vertices:this.m_isLoop?this.m_vertices.slice(0,this.m_vertices.length-1):this.m_vertices,isLoop:this.m_isLoop,hasPrevVertex:this.m_hasPrevVertex,hasNextVertex:this.m_hasNextVertex,prevVertex:null,nextVertex:null};return this.m_prevVertex&&(e.prevVertex=this.m_prevVertex),this.m_nextVertex&&(e.nextVertex=this.m_nextVertex),e},t._deserialize=function(e,n,s){var r=[];if(e.vertices)for(var o=0;o<e.vertices.length;o++)r.push(e.vertices[o]);var a=new t(r,e.isLoop);return e.prevVertex&&a.setPrevVertex(e.prevVertex),e.nextVertex&&a.setNextVertex(e.nextVertex),a},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype._createLoop=function(e){if(!(e.length<3)){var n;this.m_vertices=[],this.m_count=e.length+1;for(var n=0;n<e.length;++n)this.m_vertices[n]=g.clone(e[n]);return this.m_vertices[e.length]=g.clone(e[0]),this.m_prevVertex=this.m_vertices[this.m_count-2],this.m_nextVertex=this.m_vertices[1],this.m_hasPrevVertex=!0,this.m_hasNextVertex=!0,this}},t.prototype._createChain=function(e){var n;this.m_vertices=[],this.m_count=e.length;for(var n=0;n<e.length;++n)this.m_vertices[n]=g.clone(e[n]);return this.m_prevVertex=null,this.m_nextVertex=null,this.m_hasPrevVertex=!1,this.m_hasNextVertex=!1,this},t.prototype._reset=function(){this.m_isLoop?this._createLoop(this.m_vertices.slice(0,this.m_vertices.length-1)):this._createChain(this.m_vertices)},t.prototype.setPrevVertex=function(e){this.m_prevVertex=e,this.m_hasPrevVertex=!0},t.prototype.getPrevVertex=function(){return this.m_prevVertex},t.prototype.setNextVertex=function(e){this.m_nextVertex=e,this.m_hasNextVertex=!0},t.prototype.getNextVertex=function(){return this.m_nextVertex},t.prototype._clone=function(){var e=new t;return e._createChain(this.m_vertices),e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_prevVertex=this.m_prevVertex,e.m_nextVertex=this.m_nextVertex,e.m_hasPrevVertex=this.m_hasPrevVertex,e.m_hasNextVertex=this.m_hasNextVertex,e},t.prototype.getChildCount=function(){return this.m_count-1},t.prototype.getChildEdge=function(e,n){e.m_type=Es.TYPE,e.m_radius=this.m_radius,e.m_vertex1=this.m_vertices[n],e.m_vertex2=this.m_vertices[n+1],n>0?(e.m_vertex0=this.m_vertices[n-1],e.m_hasVertex0=!0):(e.m_vertex0=this.m_prevVertex,e.m_hasVertex0=this.m_hasPrevVertex),n<this.m_count-2?(e.m_vertex3=this.m_vertices[n+2],e.m_hasVertex3=!0):(e.m_vertex3=this.m_nextVertex,e.m_hasVertex3=this.m_hasNextVertex)},t.prototype.getVertex=function(e){return e<this.m_count?this.m_vertices[e]:this.m_vertices[0]},t.prototype.isLoop=function(){return this.m_isLoop},t.prototype.testPoint=function(e,n){return!1},t.prototype.rayCast=function(e,n,s,r){var o=new Es(this.getVertex(r),this.getVertex(r+1));return o.rayCast(e,n,s,0)},t.prototype.computeAABB=function(e,n,s){Ft(nd,n,this.getVertex(s)),Ft(sd,n,this.getVertex(s+1)),hi.combinePoints(e,nd,sd)},t.prototype.computeMass=function(e,n){e.mass=0,Ct(e.center),e.I=0},t.prototype.computeDistanceProxy=function(e,n){e.m_vertices[0]=this.getVertex(n),e.m_vertices[1]=this.getVertex(n+1),e.m_count=2,e.m_radius=this.m_radius},t.TYPE="chain",t})(yr),rd=Math.max,Pc=Math.min,tr=X(0,0),od=X(0,0),Io=X(0,0),Wr=X(0,0),Ws=X(0,0),ps=X(0,0),Cs=(function(i){yi(t,i);function t(e){var n=this;return n instanceof t?(n=i.call(this)||this,n.m_type=t.TYPE,n.m_radius=ut.polygonRadius,n.m_centroid=g.zero(),n.m_vertices=[],n.m_normals=[],n.m_count=0,e&&e.length&&n._set(e),n):new t(e)}return t.prototype._serialize=function(){return{type:this.m_type,vertices:this.m_vertices}},t._deserialize=function(e,n,s){var r=[];if(e.vertices)for(var o=0;o<e.vertices.length;o++)r.push(e.vertices[o]);var a=new t(r);return a},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype._clone=function(){var e=new t;e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_count=this.m_count,e.m_centroid.setVec2(this.m_centroid);for(var n=0;n<this.m_count;n++)e.m_vertices.push(this.m_vertices[n].clone());for(var n=0;n<this.m_normals.length;n++)e.m_normals.push(this.m_normals[n].clone());return e},t.prototype.getChildCount=function(){return 1},t.prototype._reset=function(){this._set(this.m_vertices)},t.prototype._set=function(e){if(e.length<3){this._setAsBox(1,1);return}for(var n=Pc(e.length,ut.maxPolygonVertices),s=[],r=0;r<n;++r){for(var o=e[r],a=!0,l=0;l<s.length;++l)if(g.distanceSquared(o,s[l])<.25*ut.linearSlopSquared){a=!1;break}a&&s.push(g.clone(o))}if(n=s.length,n<3){this._setAsBox(1,1);return}for(var c=0,h=s[0].x,r=1;r<n;++r){var u=s[r].x;(u>h||u===h&&s[r].y<s[c].y)&&(c=r,h=u)}for(var f=[],d=0,_=c;;){f[d]=_;for(var v=0,l=1;l<n;++l){if(v===_){v=l;continue}var p=g.sub(s[v],s[f[d]]),o=g.sub(s[l],s[f[d]]),m=g.crossVec2Vec2(p,o);m<0&&(v=l),m===0&&o.lengthSquared()>p.lengthSquared()&&(v=l)}if(++d,_=v,v===c)break}if(d<3){this._setAsBox(1,1);return}this.m_count=d,this.m_vertices=[];for(var r=0;r<d;++r)this.m_vertices[r]=s[f[r]];for(var r=0;r<d;++r){var A=r,y=r+1<d?r+1:0,x=g.sub(this.m_vertices[y],this.m_vertices[A]);this.m_normals[r]=g.crossVec2Num(x,1),this.m_normals[r].normalize()}this.m_centroid=AS(this.m_vertices,d)},t.prototype._setAsBox=function(e,n,s,r){if(this.m_vertices[0]=g.neo(e,-n),this.m_vertices[1]=g.neo(e,n),this.m_vertices[2]=g.neo(-e,n),this.m_vertices[3]=g.neo(-e,-n),this.m_normals[0]=g.neo(1,0),this.m_normals[1]=g.neo(0,1),this.m_normals[2]=g.neo(-1,0),this.m_normals[3]=g.neo(0,-1),this.m_count=4,s&&g.isValid(s)){r=r||0,V(this.m_centroid,s);var o=bn.identity();o.p.setVec2(s),o.q.setAngle(r);for(var a=0;a<this.m_count;++a)this.m_vertices[a]=bn.mulVec2(o,this.m_vertices[a]),this.m_normals[a]=$.mulVec2(o.q,this.m_normals[a])}},t.prototype.testPoint=function(e,n){for(var s=Jh(tr,e,n),r=0;r<this.m_count;++r){var o=nt(this.m_normals[r],s)-nt(this.m_normals[r],this.m_vertices[r]);if(o>0)return!1}return!0},t.prototype.rayCast=function(e,n,s,r){for(var o=$.mulTVec2(s.q,g.sub(n.p1,s.p)),a=$.mulTVec2(s.q,g.sub(n.p2,s.p)),l=g.sub(a,o),c=0,h=n.maxFraction,u=-1,f=0;f<this.m_count;++f){var d=g.dot(this.m_normals[f],g.sub(this.m_vertices[f],o)),_=g.dot(this.m_normals[f],l);if(_==0){if(d<0)return!1}else _<0&&d<c*_?(c=d/_,u=f):_>0&&d<h*_&&(h=d/_);if(h<c)return!1}return u>=0?(e.fraction=c,e.normal=$.mulVec2(s.q,this.m_normals[u]),!0):!1},t.prototype.computeAABB=function(e,n,s){for(var r=1/0,o=1/0,a=-1/0,l=-1/0,c=0;c<this.m_count;++c){var h=Ft(tr,n,this.m_vertices[c]);r=Pc(r,h.x),a=rd(a,h.x),o=Pc(o,h.y),l=rd(l,h.y)}ri(e.lowerBound,r-this.m_radius,o-this.m_radius),ri(e.upperBound,a+this.m_radius,l+this.m_radius)},t.prototype.computeMass=function(e,n){Ct(Ws);var s=0,r=0;Ct(ps);for(var o=0;o<this.m_count;++o)nn(ps,this.m_vertices[o]);Lt(ps,1/this.m_count,ps);for(var a=1/3,o=0;o<this.m_count;++o){Ot(Io,this.m_vertices[o],ps),o+1<this.m_count?Ot(Wr,this.m_vertices[o+1],ps):Ot(Wr,this.m_vertices[0],ps);var l=Yt(Io,Wr),c=.5*l;s+=c,Pe(tr,c*a,Io,c*a,Wr),nn(Ws,tr);var h=Io.x,u=Io.y,f=Wr.x,d=Wr.y,_=h*h+f*h+f*f,v=u*u+d*u+d*d;r+=.25*a*l*(_+v)}e.mass=n*s,Lt(Ws,1/s,Ws),ZM(e.center,Ws,ps),e.I=n*r,e.I+=e.mass*(nt(e.center,e.center)-nt(Ws,Ws))},t.prototype.validate=function(){for(var e=0;e<this.m_count;++e){var n=e,s=e<this.m_count-1?n+1:0,r=this.m_vertices[n];Ot(od,this.m_vertices[s],r);for(var o=0;o<this.m_count;++o)if(!(o==n||o==s)){var a=Yt(od,Ot(tr,this.m_vertices[o],r));if(a<0)return!1}}return!0},t.prototype.computeDistanceProxy=function(e){for(var n=0;n<this.m_count;++n)e.m_vertices[n]=this.m_vertices[n];e.m_vertices.length=this.m_count,e.m_count=this.m_count,e.m_radius=this.m_radius},t.TYPE="polygon",t})(yr);function AS(i,t){for(var e=g.zero(),n=0,s=g.zero(),r,o=1/3,r=0;r<t;++r){var a=s,l=i[r],c=r+1<t?i[r+1]:i[0],h=g.sub(l,a),u=g.sub(c,a),f=g.crossVec2Vec2(h,u),d=.5*f;n+=d,Pn(tr,1,a,1,l,1,c),Mn(e,d*o,tr)}return e.mul(1/n),e}var MS=Math.sqrt,SS=Math.PI,ad=X(0,0),Rs=(function(i){yi(t,i);function t(e,n){var s=this;return s instanceof t?(s=i.call(this)||this,s.m_type=t.TYPE,s.m_p=g.zero(),s.m_radius=1,typeof e=="object"&&g.isValid(e)?(s.m_p.setVec2(e),typeof n=="number"&&(s.m_radius=n)):typeof e=="number"&&(s.m_radius=e),s):new t(e,n)}return t.prototype._serialize=function(){return{type:this.m_type,p:this.m_p,radius:this.m_radius}},t._deserialize=function(e){return new t(e.p,e.radius)},t.prototype._reset=function(){},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype.getCenter=function(){return this.m_p},t.prototype._clone=function(){var e=new t;return e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_p=this.m_p.clone(),e},t.prototype.getChildCount=function(){return 1},t.prototype.testPoint=function(e,n){var s=Ft(ad,e,this.m_p);return or(n,s)<=this.m_radius*this.m_radius},t.prototype.rayCast=function(e,n,s,r){var o=g.add(s.p,$.mulVec2(s.q,this.m_p)),a=g.sub(n.p1,o),l=g.dot(a,a)-this.m_radius*this.m_radius,c=g.sub(n.p2,n.p1),h=g.dot(a,c),u=g.dot(c,c),f=h*h-u*l;if(f<0||u<Ti)return!1;var d=-(h+MS(f));return 0<=d&&d<=n.maxFraction*u?(d/=u,e.fraction=d,e.normal=g.add(a,g.mulNumVec2(d,c)),e.normal.normalize(),!0):!1},t.prototype.computeAABB=function(e,n,s){var r=Ft(ad,n,this.m_p);ri(e.lowerBound,r.x-this.m_radius,r.y-this.m_radius),ri(e.upperBound,r.x+this.m_radius,r.y+this.m_radius)},t.prototype.computeMass=function(e,n){e.mass=n*SS*this.m_radius*this.m_radius,V(e.center,this.m_p),e.I=e.mass*(.5*this.m_radius*this.m_radius+rr(this.m_p))},t.prototype.computeDistanceProxy=function(e){e.m_vertices[0]=this.m_p,e.m_vertices.length=1,e.m_count=1,e.m_radius=this.m_radius},t.TYPE="circle",t})(yr),bS=Math.abs,TS=Math.PI,wS={frequencyHz:0,dampingRatio:0},ld=(function(i){yi(t,i);function t(e,n,s,r,o){var a=this;if(!(a instanceof t))return new t(e,n,s,r,o);if(s&&r&&"m_type"in r&&"x"in s&&"y"in s){var l=s;s=r,r=l}return e=qi(e,wS),a=i.call(this,e,n,s)||this,n=a.m_bodyA,s=a.m_bodyB,a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(o?s.getLocalPoint(o):e.localAnchorB||g.zero()),a.m_length=Number.isFinite(e.length)?e.length:g.distance(n.getWorldPoint(a.m_localAnchorA),s.getWorldPoint(a.m_localAnchorB)),a.m_frequencyHz=e.frequencyHz,a.m_dampingRatio=e.dampingRatio,a.m_impulse=0,a.m_gamma=0,a.m_bias=0,a}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,length:this.m_length}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.length>0?this.m_length=+e.length:e.length<0||(e.anchorA||e.anchorA||e.anchorA||e.anchorA)&&(this.m_length=g.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA),this.m_bodyB.getWorldPoint(this.m_localAnchorB))),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setLength=function(e){this.m_length=e},t.prototype.getLength=function(){return this.m_length},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_u).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=$.neo(s),f=$.neo(l);this.m_rA=$.mulVec2(u,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=$.mulVec2(f,g.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_u=g.sub(g.add(a,this.m_rB),g.add(n,this.m_rA));var d=this.m_u.length();d>ut.linearSlop?this.m_u.mul(1/d):this.m_u.setNum(0,0);var _=g.crossVec2Vec2(this.m_rA,this.m_u),v=g.crossVec2Vec2(this.m_rB,this.m_u),p=this.m_invMassA+this.m_invIA*_*_+this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=p!=0?1/p:0,this.m_frequencyHz>0){var m=d-this.m_length,A=2*TS*this.m_frequencyHz,y=2*this.m_mass*this.m_dampingRatio*A,x=this.m_mass*A*A,C=e.dt;this.m_gamma=C*(y+C*x),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=m*C*x*this.m_gamma,p+=this.m_gamma,this.m_mass=p!=0?1/p:0}else this.m_gamma=0,this.m_bias=0;if(e.warmStarting){this.m_impulse*=e.dtRatio;var E=g.mulNumVec2(this.m_impulse,this.m_u);r.subMul(this.m_invMassA,E),o-=this.m_invIA*g.crossVec2Vec2(this.m_rA,E),c.addMul(this.m_invMassB,E),h+=this.m_invIB*g.crossVec2Vec2(this.m_rB,E)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.add(n,g.crossNumVec2(s,this.m_rA)),l=g.add(r,g.crossNumVec2(o,this.m_rB)),c=g.dot(this.m_u,l)-g.dot(this.m_u,a),h=-this.m_mass*(c+this.m_bias+this.m_gamma*this.m_impulse);this.m_impulse+=h;var u=g.mulNumVec2(h,this.m_u);n.subMul(this.m_invMassA,u),s-=this.m_invIA*g.crossVec2Vec2(this.m_rA,u),r.addMul(this.m_invMassB,u),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,u),this.m_bodyA.c_velocity.v.setVec2(n),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.setVec2(r),this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){if(this.m_frequencyHz>0)return!0;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=$.neo(s),l=$.neo(o),c=$.mulSub(a,this.m_localAnchorA,this.m_localCenterA),h=$.mulSub(l,this.m_localAnchorB,this.m_localCenterB),u=g.sub(g.add(r,h),g.add(n,c)),f=u.normalize(),d=ai(f-this.m_length,-ut.maxLinearCorrection,ut.maxLinearCorrection),_=-this.m_mass*d,v=g.mulNumVec2(_,u);return n.subMul(this.m_invMassA,v),s-=this.m_invIA*g.crossVec2Vec2(c,v),r.addMul(this.m_invMassB,v),o+=this.m_invIB*g.crossVec2Vec2(h,v),this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,bS(d)<ut.linearSlop},t.TYPE="distance-joint",t})(pi),ES={maxForce:0,maxTorque:0},cd=(function(i){yi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=qi(e,ES),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),o.m_linearImpulse=g.zero(),o.m_angularImpulse=0,o.m_maxForce=e.maxForce,o.m_maxTorque=e.maxTorque,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.maxTorque)&&(this.m_maxTorque=e.maxTorque)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setMaxTorque=function(e){this.m_maxTorque=e},t.prototype.getMaxTorque=function(){return this.m_maxTorque},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_linearImpulse)},t.prototype.getReactionTorque=function(e){return e*this.m_angularImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=$.neo(n),h=$.neo(o);this.m_rA=$.mulVec2(c,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=$.mulVec2(h,g.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,f=this.m_invMassB,d=this.m_invIA,_=this.m_invIB,v=new Tn;if(v.ex.x=u+f+d*this.m_rA.y*this.m_rA.y+_*this.m_rB.y*this.m_rB.y,v.ex.y=-d*this.m_rA.x*this.m_rA.y-_*this.m_rB.x*this.m_rB.y,v.ey.x=v.ex.y,v.ey.y=u+f+d*this.m_rA.x*this.m_rA.x+_*this.m_rB.x*this.m_rB.x,this.m_linearMass=v.getInverse(),this.m_angularMass=d+_,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),e.warmStarting){this.m_linearImpulse.mul(e.dtRatio),this.m_angularImpulse*=e.dtRatio;var p=g.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);s.subMul(u,p),r-=d*(g.crossVec2Vec2(this.m_rA,p)+this.m_angularImpulse),a.addMul(f,p),l+=_*(g.crossVec2Vec2(this.m_rB,p)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB,u=e.dt;{var f=o-s,d=-this.m_angularMass*f,_=this.m_angularImpulse,v=u*this.m_maxTorque;this.m_angularImpulse=ai(this.m_angularImpulse+d,-v,v),d=this.m_angularImpulse-_,s-=c*d,o+=h*d}{var f=g.sub(g.add(r,g.crossNumVec2(o,this.m_rB)),g.add(n,g.crossNumVec2(s,this.m_rA))),d=g.neg(Tn.mulVec2(this.m_linearMass,f)),_=this.m_linearImpulse;this.m_linearImpulse.add(d);var v=u*this.m_maxForce;this.m_linearImpulse.lengthSquared()>v*v&&(this.m_linearImpulse.normalize(),this.m_linearImpulse.mul(v)),d=g.sub(this.m_linearImpulse,_),n.subMul(a,d),s-=c*g.crossVec2Vec2(this.m_rA,d),r.addMul(l,d),o+=h*g.crossVec2Vec2(this.m_rB,d)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="friction-joint",t})(pi),Ss=(function(){function i(t,e,n){typeof t=="object"&&t!==null?(this.ex=re.clone(t),this.ey=re.clone(e),this.ez=re.clone(n)):(this.ex=re.zero(),this.ey=re.zero(),this.ez=re.zero())}return i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:re.isValid(t.ex)&&re.isValid(t.ey)&&re.isValid(t.ez)},i.assert=function(t){},i.prototype.setZero=function(){return this.ex.setZero(),this.ey.setZero(),this.ez.setZero(),this},i.prototype.solve33=function(t){var e=this.ey.y*this.ez.z-this.ey.z*this.ez.y,n=this.ey.z*this.ez.x-this.ey.x*this.ez.z,s=this.ey.x*this.ez.y-this.ey.y*this.ez.x,r=this.ex.x*e+this.ex.y*n+this.ex.z*s;r!==0&&(r=1/r);var o=new re;return e=this.ey.y*this.ez.z-this.ey.z*this.ez.y,n=this.ey.z*this.ez.x-this.ey.x*this.ez.z,s=this.ey.x*this.ez.y-this.ey.y*this.ez.x,o.x=r*(t.x*e+t.y*n+t.z*s),e=t.y*this.ez.z-t.z*this.ez.y,n=t.z*this.ez.x-t.x*this.ez.z,s=t.x*this.ez.y-t.y*this.ez.x,o.y=r*(this.ex.x*e+this.ex.y*n+this.ex.z*s),e=this.ey.y*t.z-this.ey.z*t.y,n=this.ey.z*t.x-this.ey.x*t.z,s=this.ey.x*t.y-this.ey.y*t.x,o.z=r*(this.ex.x*e+this.ex.y*n+this.ex.z*s),o},i.prototype.solve22=function(t){var e=this.ex.x,n=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-n*s;o!==0&&(o=1/o);var a=g.zero();return a.x=o*(r*t.x-n*t.y),a.y=o*(e*t.y-s*t.x),a},i.prototype.getInverse22=function(t){var e=this.ex.x,n=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-n*s;o!==0&&(o=1/o),t.ex.x=o*r,t.ey.x=-o*n,t.ex.z=0,t.ex.y=-o*s,t.ey.y=o*e,t.ey.z=0,t.ez.x=0,t.ez.y=0,t.ez.z=0},i.prototype.getSymInverse33=function(t){var e=re.dot(this.ex,re.cross(this.ey,this.ez));e!==0&&(e=1/e);var n=this.ex.x,s=this.ey.x,r=this.ez.x,o=this.ey.y,a=this.ez.y,l=this.ez.z;t.ex.x=e*(o*l-a*a),t.ex.y=e*(r*a-s*l),t.ex.z=e*(s*a-r*o),t.ey.x=t.ex.y,t.ey.y=e*(n*l-r*r),t.ey.z=e*(r*s-n*a),t.ez.x=t.ex.z,t.ez.y=t.ey.z,t.ez.z=e*(n*o-s*s)},i.mul=function(t,e){if(e&&"z"in e&&"y"in e&&"x"in e){var n=t.ex.x*e.x+t.ey.x*e.y+t.ez.x*e.z,s=t.ex.y*e.x+t.ey.y*e.y+t.ez.y*e.z,r=t.ex.z*e.x+t.ey.z*e.y+t.ez.z*e.z;return new re(n,s,r)}else if(e&&"y"in e&&"x"in e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)}},i.mulVec3=function(t,e){var n=t.ex.x*e.x+t.ey.x*e.y+t.ez.x*e.z,s=t.ex.y*e.x+t.ey.y*e.y+t.ez.y*e.z,r=t.ex.z*e.x+t.ey.z*e.y+t.ez.z*e.z;return new re(n,s,r)},i.mulVec2=function(t,e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)},i.add=function(t,e){return new i(re.add(t.ex,e.ex),re.add(t.ey,e.ey),re.add(t.ez,e.ez))},i})(),hd=Math.abs,ti;(function(i){i[i.inactiveLimit=0]="inactiveLimit",i[i.atLowerLimit=1]="atLowerLimit",i[i.atUpperLimit=2]="atUpperLimit",i[i.equalLimits=3]="equalLimits"})(ti||(ti={}));var qr={lowerAngle:0,upperAngle:0,maxMotorTorque:0,motorSpeed:0,enableLimit:!1,enableMotor:!1},As=(function(i){yi(t,i);function t(e,n,s,r){var o=this,a,l,c,h,u,f;return o instanceof t?(e=e??{},o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_mass=new Ss,o.m_limitState=ti.inactiveLimit,o.m_type=t.TYPE,g.isValid(r)?o.m_localAnchorA=n.getLocalPoint(r):g.isValid(e.localAnchorA)?o.m_localAnchorA=g.clone(e.localAnchorA):o.m_localAnchorA=g.zero(),g.isValid(r)?o.m_localAnchorB=s.getLocalPoint(r):g.isValid(e.localAnchorB)?o.m_localAnchorB=g.clone(e.localAnchorB):o.m_localAnchorB=g.zero(),Number.isFinite(e.referenceAngle)?o.m_referenceAngle=e.referenceAngle:o.m_referenceAngle=s.getAngle()-n.getAngle(),o.m_impulse=new re,o.m_motorImpulse=0,o.m_lowerAngle=(a=e.lowerAngle)!==null&&a!==void 0?a:qr.lowerAngle,o.m_upperAngle=(l=e.upperAngle)!==null&&l!==void 0?l:qr.upperAngle,o.m_maxMotorTorque=(c=e.maxMotorTorque)!==null&&c!==void 0?c:qr.maxMotorTorque,o.m_motorSpeed=(h=e.motorSpeed)!==null&&h!==void 0?h:qr.motorSpeed,o.m_enableLimit=(u=e.enableLimit)!==null&&u!==void 0?u:qr.enableLimit,o.m_enableMotor=(f=e.enableMotor)!==null&&f!==void 0?f:qr.enableMotor,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerAngle:this.m_lowerAngle,upperAngle:this.m_upperAngle,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.referenceAngle)&&(this.m_referenceAngle=e.referenceAngle),e.enableLimit!==void 0&&(this.m_enableLimit=e.enableLimit),Number.isFinite(e.lowerAngle)&&(this.m_lowerAngle=e.lowerAngle),Number.isFinite(e.upperAngle)&&(this.m_upperAngle=e.upperAngle),Number.isFinite(e.maxMotorTorque)&&(this.m_maxMotorTorque=e.maxMotorTorque),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed),e.enableMotor!==void 0&&(this.m_enableMotor=e.enableMotor)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.getJointAngle=function(){var e=this.m_bodyA,n=this.m_bodyB;return n.m_sweep.a-e.m_sweep.a-this.m_referenceAngle},t.prototype.getJointSpeed=function(){var e=this.m_bodyA,n=this.m_bodyB;return n.m_angularVelocity-e.m_angularVelocity},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.getMotorTorque=function(e){return e*this.m_motorImpulse},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.setMaxMotorTorque=function(e){e!=this.m_maxMotorTorque&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=e)},t.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},t.prototype.isLimitEnabled=function(){return this.m_enableLimit},t.prototype.enableLimit=function(e){e!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=e,this.m_impulse.z=0)},t.prototype.getLowerLimit=function(){return this.m_lowerAngle},t.prototype.getUpperLimit=function(){return this.m_upperAngle},t.prototype.setLimits=function(e,n){(e!=this.m_lowerAngle||n!=this.m_upperAngle)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_impulse.z=0,this.m_lowerAngle=e,this.m_upperAngle=n)},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.neo(this.m_impulse.x,this.m_impulse.y).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.z},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=$.neo(n),h=$.neo(o);this.m_rA=$.mulVec2(c,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=$.mulVec2(h,g.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,f=this.m_invMassB,d=this.m_invIA,_=this.m_invIB,v=d+_===0;if(this.m_mass.ex.x=u+f+this.m_rA.y*this.m_rA.y*d+this.m_rB.y*this.m_rB.y*_,this.m_mass.ey.x=-this.m_rA.y*this.m_rA.x*d-this.m_rB.y*this.m_rB.x*_,this.m_mass.ez.x=-this.m_rA.y*d-this.m_rB.y*_,this.m_mass.ex.y=this.m_mass.ey.x,this.m_mass.ey.y=u+f+this.m_rA.x*this.m_rA.x*d+this.m_rB.x*this.m_rB.x*_,this.m_mass.ez.y=this.m_rA.x*d+this.m_rB.x*_,this.m_mass.ex.z=this.m_mass.ez.x,this.m_mass.ey.z=this.m_mass.ez.y,this.m_mass.ez.z=d+_,this.m_motorMass=d+_,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass),(this.m_enableMotor==!1||v)&&(this.m_motorImpulse=0),this.m_enableLimit&&v==!1){var p=o-n-this.m_referenceAngle;hd(this.m_upperAngle-this.m_lowerAngle)<2*ut.angularSlop?this.m_limitState=ti.equalLimits:p<=this.m_lowerAngle?(this.m_limitState!=ti.atLowerLimit&&(this.m_impulse.z=0),this.m_limitState=ti.atLowerLimit):p>=this.m_upperAngle?(this.m_limitState!=ti.atUpperLimit&&(this.m_impulse.z=0),this.m_limitState=ti.atUpperLimit):(this.m_limitState=ti.inactiveLimit,this.m_impulse.z=0)}else this.m_limitState=ti.inactiveLimit;if(e.warmStarting){this.m_impulse.mul(e.dtRatio),this.m_motorImpulse*=e.dtRatio;var m=g.neo(this.m_impulse.x,this.m_impulse.y);s.subMul(u,m),r-=d*(g.crossVec2Vec2(this.m_rA,m)+this.m_motorImpulse+this.m_impulse.z),a.addMul(f,m),l+=_*(g.crossVec2Vec2(this.m_rB,m)+this.m_motorImpulse+this.m_impulse.z)}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB,u=c+h===0;if(this.m_enableMotor&&this.m_limitState!=ti.equalLimits&&u==!1){var f=o-s-this.m_motorSpeed,d=-this.m_motorMass*f,_=this.m_motorImpulse,v=e.dt*this.m_maxMotorTorque;this.m_motorImpulse=ai(this.m_motorImpulse+d,-v,v),d=this.m_motorImpulse-_,s-=c*d,o+=h*d}if(this.m_enableLimit&&this.m_limitState!=ti.inactiveLimit&&u==!1){var p=g.zero();p.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),p.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var m=o-s,f=new re(p.x,p.y,m),d=re.neg(this.m_mass.solve33(f));if(this.m_limitState==ti.equalLimits)this.m_impulse.add(d);else if(this.m_limitState==ti.atLowerLimit){var A=this.m_impulse.z+d.z;if(A<0){var y=g.combine(-1,p,this.m_impulse.z,g.neo(this.m_mass.ez.x,this.m_mass.ez.y)),x=this.m_mass.solve22(y);d.x=x.x,d.y=x.y,d.z=-this.m_impulse.z,this.m_impulse.x+=x.x,this.m_impulse.y+=x.y,this.m_impulse.z=0}else this.m_impulse.add(d)}else if(this.m_limitState==ti.atUpperLimit){var A=this.m_impulse.z+d.z;if(A>0){var y=g.combine(-1,p,this.m_impulse.z,g.neo(this.m_mass.ez.x,this.m_mass.ez.y)),x=this.m_mass.solve22(y);d.x=x.x,d.y=x.y,d.z=-this.m_impulse.z,this.m_impulse.x+=x.x,this.m_impulse.y+=x.y,this.m_impulse.z=0}else this.m_impulse.add(d)}var C=g.neo(d.x,d.y);n.subMul(a,C),s-=c*(g.crossVec2Vec2(this.m_rA,C)+d.z),r.addMul(l,C),o+=h*(g.crossVec2Vec2(this.m_rB,C)+d.z)}else{var f=g.zero();f.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),f.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var d=this.m_mass.solve22(g.neg(f));this.m_impulse.x+=d.x,this.m_impulse.y+=d.y,n.subMul(a,d),s-=c*g.crossVec2Vec2(this.m_rA,d),r.addMul(l,d),o+=h*g.crossVec2Vec2(this.m_rB,d)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=$.neo(s),l=$.neo(o),c=0,h=0,u=this.m_invIA+this.m_invIB==0;if(this.m_enableLimit&&this.m_limitState!=ti.inactiveLimit&&u==!1){var f=o-s-this.m_referenceAngle,d=0;if(this.m_limitState==ti.equalLimits){var _=ai(f-this.m_lowerAngle,-ut.maxAngularCorrection,ut.maxAngularCorrection);d=-this.m_motorMass*_,c=hd(_)}else if(this.m_limitState==ti.atLowerLimit){var _=f-this.m_lowerAngle;c=-_,_=ai(_+ut.angularSlop,-ut.maxAngularCorrection,0),d=-this.m_motorMass*_}else if(this.m_limitState==ti.atUpperLimit){var _=f-this.m_upperAngle;c=_,_=ai(_-ut.angularSlop,0,ut.maxAngularCorrection),d=-this.m_motorMass*_}s-=this.m_invIA*d,o+=this.m_invIB*d}{a.setAngle(s),l.setAngle(o);var v=$.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),p=$.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),_=g.zero();_.addCombine(1,r,1,p),_.subCombine(1,n,1,v),h=_.length();var m=this.m_invMassA,A=this.m_invMassB,y=this.m_invIA,x=this.m_invIB,C=new Tn;C.ex.x=m+A+y*v.y*v.y+x*p.y*p.y,C.ex.y=-y*v.x*v.y-x*p.x*p.y,C.ey.x=C.ex.y,C.ey.y=m+A+y*v.x*v.x+x*p.x*p.x;var E=g.neg(C.solve(_));n.subMul(m,E),s-=y*g.crossVec2Vec2(v,E),r.addMul(A,E),o+=x*g.crossVec2Vec2(p,E)}return this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,h<=ut.linearSlop&&c<=ut.angularSlop},t.TYPE="revolute-joint",t})(pi),Lo=Math.abs,ud=Math.max,CS=Math.min,Bi;(function(i){i[i.inactiveLimit=0]="inactiveLimit",i[i.atLowerLimit=1]="atLowerLimit",i[i.atUpperLimit=2]="atUpperLimit",i[i.equalLimits=3]="equalLimits"})(Bi||(Bi={}));var RS={enableLimit:!1,lowerTranslation:0,upperTranslation:0,enableMotor:!1,maxMotorForce:0,motorSpeed:0},fd=(function(i){yi(t,i);function t(e,n,s,r,o){var a=this;return a instanceof t?(e=qi(e,RS),a=i.call(this,e,n,s)||this,n=a.m_bodyA,s=a.m_bodyB,a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),a.m_localXAxisA=g.clone(o?n.getLocalVector(o):e.localAxisA||g.neo(1,0)),a.m_localXAxisA.normalize(),a.m_localYAxisA=g.crossNumVec2(1,a.m_localXAxisA),a.m_referenceAngle=Number.isFinite(e.referenceAngle)?e.referenceAngle:s.getAngle()-n.getAngle(),a.m_impulse=new re,a.m_motorMass=0,a.m_motorImpulse=0,a.m_lowerTranslation=e.lowerTranslation,a.m_upperTranslation=e.upperTranslation,a.m_maxMotorForce=e.maxMotorForce,a.m_motorSpeed=e.motorSpeed,a.m_enableLimit=e.enableLimit,a.m_enableMotor=e.enableMotor,a.m_limitState=Bi.inactiveLimit,a.m_axis=g.zero(),a.m_perp=g.zero(),a.m_K=new Ss,a):new t(e,n,s,r,o)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerTranslation:this.m_lowerTranslation,upperTranslation:this.m_upperTranslation,maxMotorForce:this.m_maxMotorForce,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n),e.localAxisA=g.clone(e.localAxisA);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.localAxisA&&(this.m_localXAxisA.setVec2(e.localAxisA),this.m_localYAxisA.setVec2(g.crossNumVec2(1,e.localAxisA))),Number.isFinite(e.referenceAngle)&&(this.m_referenceAngle=e.referenceAngle),typeof e.enableLimit<"u"&&(this.m_enableLimit=!!e.enableLimit),Number.isFinite(e.lowerTranslation)&&(this.m_lowerTranslation=e.lowerTranslation),Number.isFinite(e.upperTranslation)&&(this.m_upperTranslation=e.upperTranslation),typeof e.enableMotor<"u"&&(this.m_enableMotor=!!e.enableMotor),Number.isFinite(e.maxMotorForce)&&(this.m_maxMotorForce=e.maxMotorForce),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getLocalAxisA=function(){return this.m_localXAxisA},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.getJointTranslation=function(){var e=this.m_bodyA.getWorldPoint(this.m_localAnchorA),n=this.m_bodyB.getWorldPoint(this.m_localAnchorB),s=g.sub(n,e),r=this.m_bodyA.getWorldVector(this.m_localXAxisA),o=g.dot(s,r);return o},t.prototype.getJointSpeed=function(){var e=this.m_bodyA,n=this.m_bodyB,s=$.mulVec2(e.m_xf.q,g.sub(this.m_localAnchorA,e.m_sweep.localCenter)),r=$.mulVec2(n.m_xf.q,g.sub(this.m_localAnchorB,n.m_sweep.localCenter)),o=g.add(e.m_sweep.c,s),a=g.add(n.m_sweep.c,r),l=g.sub(a,o),c=$.mulVec2(e.m_xf.q,this.m_localXAxisA),h=e.m_linearVelocity,u=n.m_linearVelocity,f=e.m_angularVelocity,d=n.m_angularVelocity,_=g.dot(l,g.crossNumVec2(f,c))+g.dot(c,g.sub(g.addCrossNumVec2(u,d,r),g.addCrossNumVec2(h,f,s)));return _},t.prototype.isLimitEnabled=function(){return this.m_enableLimit},t.prototype.enableLimit=function(e){e!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=e,this.m_impulse.z=0)},t.prototype.getLowerLimit=function(){return this.m_lowerTranslation},t.prototype.getUpperLimit=function(){return this.m_upperTranslation},t.prototype.setLimits=function(e,n){(e!=this.m_lowerTranslation||n!=this.m_upperTranslation)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_lowerTranslation=e,this.m_upperTranslation=n,this.m_impulse.z=0)},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.setMaxMotorForce=function(e){e!=this.m_maxMotorForce&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorForce=e)},t.prototype.getMaxMotorForce=function(){return this.m_maxMotorForce},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.getMotorForce=function(e){return e*this.m_motorImpulse},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.y},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=$.neo(s),f=$.neo(l),d=$.mulVec2(u,g.sub(this.m_localAnchorA,this.m_localCenterA)),_=$.mulVec2(f,g.sub(this.m_localAnchorB,this.m_localCenterB)),v=g.zero();v.addCombine(1,a,1,_),v.subCombine(1,n,1,d);var p=this.m_invMassA,m=this.m_invMassB,A=this.m_invIA,y=this.m_invIB;this.m_axis=$.mulVec2(u,this.m_localXAxisA),this.m_a1=g.crossVec2Vec2(g.add(v,d),this.m_axis),this.m_a2=g.crossVec2Vec2(_,this.m_axis),this.m_motorMass=p+m+A*this.m_a1*this.m_a1+y*this.m_a2*this.m_a2,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass);{this.m_perp=$.mulVec2(u,this.m_localYAxisA),this.m_s1=g.crossVec2Vec2(g.add(v,d),this.m_perp),this.m_s2=g.crossVec2Vec2(_,this.m_perp),g.crossVec2Vec2(d,this.m_perp);var x=p+m+A*this.m_s1*this.m_s1+y*this.m_s2*this.m_s2,C=A*this.m_s1+y*this.m_s2,E=A*this.m_s1*this.m_a1+y*this.m_s2*this.m_a2,w=A+y;w==0&&(w=1);var B=A*this.m_a1+y*this.m_a2,T=p+m+A*this.m_a1*this.m_a1+y*this.m_a2*this.m_a2;this.m_K.ex.set(x,C,E),this.m_K.ey.set(C,w,B),this.m_K.ez.set(E,B,T)}if(this.m_enableLimit){var S=g.dot(this.m_axis,v);Lo(this.m_upperTranslation-this.m_lowerTranslation)<2*ut.linearSlop?this.m_limitState=Bi.equalLimits:S<=this.m_lowerTranslation?this.m_limitState!=Bi.atLowerLimit&&(this.m_limitState=Bi.atLowerLimit,this.m_impulse.z=0):S>=this.m_upperTranslation?this.m_limitState!=Bi.atUpperLimit&&(this.m_limitState=Bi.atUpperLimit,this.m_impulse.z=0):(this.m_limitState=Bi.inactiveLimit,this.m_impulse.z=0)}else this.m_limitState=Bi.inactiveLimit,this.m_impulse.z=0;if(this.m_enableMotor==!1&&(this.m_motorImpulse=0),e.warmStarting){this.m_impulse.mul(e.dtRatio),this.m_motorImpulse*=e.dtRatio;var P=g.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis),z=this.m_impulse.x*this.m_s1+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a1,O=this.m_impulse.x*this.m_s2+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a2;r.subMul(p,P),o-=A*z,c.addMul(m,P),h+=y*O}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB;if(this.m_enableMotor&&this.m_limitState!=Bi.equalLimits){var u=g.dot(this.m_axis,g.sub(r,n))+this.m_a2*o-this.m_a1*s,f=this.m_motorMass*(this.m_motorSpeed-u),d=this.m_motorImpulse,_=e.dt*this.m_maxMotorForce;this.m_motorImpulse=ai(this.m_motorImpulse+f,-_,_),f=this.m_motorImpulse-d;var v=g.mulNumVec2(f,this.m_axis),p=f*this.m_a1,m=f*this.m_a2;n.subMul(a,v),s-=c*p,r.addMul(l,v),o+=h*m}var A=g.zero();if(A.x+=g.dot(this.m_perp,r)+this.m_s2*o,A.x-=g.dot(this.m_perp,n)+this.m_s1*s,A.y=o-s,this.m_enableLimit&&this.m_limitState!=Bi.inactiveLimit){var y=0;y+=g.dot(this.m_axis,r)+this.m_a2*o,y-=g.dot(this.m_axis,n)+this.m_a1*s;var u=new re(A.x,A.y,y),x=re.clone(this.m_impulse),C=this.m_K.solve33(re.neg(u));this.m_impulse.add(C),this.m_limitState==Bi.atLowerLimit?this.m_impulse.z=ud(this.m_impulse.z,0):this.m_limitState==Bi.atUpperLimit&&(this.m_impulse.z=CS(this.m_impulse.z,0));var E=g.combine(-1,A,-(this.m_impulse.z-x.z),g.neo(this.m_K.ez.x,this.m_K.ez.y)),w=g.add(this.m_K.solve22(E),g.neo(x.x,x.y));this.m_impulse.x=w.x,this.m_impulse.y=w.y,C=re.sub(this.m_impulse,x);var v=g.combine(C.x,this.m_perp,C.z,this.m_axis),p=C.x*this.m_s1+C.y+C.z*this.m_a1,m=C.x*this.m_s2+C.y+C.z*this.m_a2;n.subMul(a,v),s-=c*p,r.addMul(l,v),o+=h*m}else{var C=this.m_K.solve22(g.neg(A));this.m_impulse.x+=C.x,this.m_impulse.y+=C.y;var v=g.mulNumVec2(C.x,this.m_perp),p=C.x*this.m_s1+C.y,m=C.x*this.m_s2+C.y;n.subMul(a,v),s-=c*p,r.addMul(l,v),o+=h*m}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=$.neo(s),l=$.neo(o),c=this.m_invMassA,h=this.m_invMassB,u=this.m_invIA,f=this.m_invIB,d=$.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),_=$.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),v=g.sub(g.add(r,_),g.add(n,d)),p=$.mulVec2(a,this.m_localXAxisA),m=g.crossVec2Vec2(g.add(v,d),p),A=g.crossVec2Vec2(_,p),y=$.mulVec2(a,this.m_localYAxisA),x=g.crossVec2Vec2(g.add(v,d),y),C=g.crossVec2Vec2(_,y),E=new re,w=g.zero();w.x=g.dot(y,v),w.y=o-s-this.m_referenceAngle;var B=Lo(w.x),T=Lo(w.y),S=ut.linearSlop,P=ut.maxLinearCorrection,z=!1,O=0;if(this.m_enableLimit){var q=g.dot(p,v);Lo(this.m_upperTranslation-this.m_lowerTranslation)<2*S?(O=ai(q,-P,P),B=ud(B,Lo(q)),z=!0):q<=this.m_lowerTranslation?(O=ai(q-this.m_lowerTranslation+S,-P,0),B=Math.max(B,this.m_lowerTranslation-q),z=!0):q>=this.m_upperTranslation&&(O=ai(q-this.m_upperTranslation-S,0,P),B=Math.max(B,q-this.m_upperTranslation),z=!0)}if(z){var Z=c+h+u*x*x+f*C*C,D=u*x+f*C,J=u*x*m+f*C*A,G=u+f;G==0&&(G=1);var it=u*m+f*A,pt=c+h+u*m*m+f*A*A,gt=new Ss;gt.ex.set(Z,D,J),gt.ey.set(D,G,it),gt.ez.set(J,it,pt);var zt=new re;zt.x=w.x,zt.y=w.y,zt.z=O,E=gt.solve33(re.neg(zt))}else{var Z=c+h+u*x*x+f*C*C,D=u*x+f*C,G=u+f;G==0&&(G=1);var gt=new Tn;gt.ex.setNum(Z,D),gt.ey.setNum(D,G);var se=gt.solve(g.neg(w));E.x=se.x,E.y=se.y,E.z=0}var K=g.combine(E.x,y,E.z,p),ot=E.x*x+E.y+E.z*m,bt=E.x*C+E.y+E.z*A;return n.subMul(c,K),s-=u*ot,r.addMul(h,K),o+=f*bt,this.m_bodyA.c_position.c=n,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,B<=ut.linearSlop&&T<=ut.angularSlop},t.TYPE="prismatic-joint",t})(pi),BS={ratio:1},dd=(function(i){yi(t,i);function t(e,n,s,r,o,a){var l=this;if(!(l instanceof t))return new t(e,n,s,r,o,a);e=qi(e,BS),l=i.call(this,e,n,s)||this,n=l.m_bodyA,s=l.m_bodyB,l.m_type=t.TYPE,l.m_joint1=r||e.joint1,l.m_joint2=o||e.joint2,l.m_ratio=Number.isFinite(a)?a:e.ratio,l.m_type1=l.m_joint1.getType(),l.m_type2=l.m_joint2.getType();var c,h;l.m_bodyC=l.m_joint1.getBodyA(),l.m_bodyA=l.m_joint1.getBodyB();var u=l.m_bodyA.m_xf,f=l.m_bodyA.m_sweep.a,d=l.m_bodyC.m_xf,_=l.m_bodyC.m_sweep.a;if(l.m_type1===As.TYPE){var v=l.m_joint1;l.m_localAnchorC=v.m_localAnchorA,l.m_localAnchorA=v.m_localAnchorB,l.m_referenceAngleA=v.m_referenceAngle,l.m_localAxisC=g.zero(),c=f-_-l.m_referenceAngleA}else{var p=l.m_joint1;l.m_localAnchorC=p.m_localAnchorA,l.m_localAnchorA=p.m_localAnchorB,l.m_referenceAngleA=p.m_referenceAngle,l.m_localAxisC=p.m_localXAxisA;var m=l.m_localAnchorC,A=$.mulTVec2(d.q,g.add($.mulVec2(u.q,l.m_localAnchorA),g.sub(u.p,d.p)));c=g.dot(A,l.m_localAxisC)-g.dot(m,l.m_localAxisC)}l.m_bodyD=l.m_joint2.getBodyA(),l.m_bodyB=l.m_joint2.getBodyB();var y=l.m_bodyB.m_xf,x=l.m_bodyB.m_sweep.a,C=l.m_bodyD.m_xf,E=l.m_bodyD.m_sweep.a;if(l.m_type2===As.TYPE){var v=l.m_joint2;l.m_localAnchorD=v.m_localAnchorA,l.m_localAnchorB=v.m_localAnchorB,l.m_referenceAngleB=v.m_referenceAngle,l.m_localAxisD=g.zero(),h=x-E-l.m_referenceAngleB}else{var p=l.m_joint2;l.m_localAnchorD=p.m_localAnchorA,l.m_localAnchorB=p.m_localAnchorB,l.m_referenceAngleB=p.m_referenceAngle,l.m_localAxisD=p.m_localXAxisA;var w=l.m_localAnchorD,B=$.mulTVec2(C.q,g.add($.mulVec2(y.q,l.m_localAnchorB),g.sub(y.p,C.p)));h=g.dot(B,l.m_localAxisD)-g.dot(w,l.m_localAxisD)}return l.m_constant=c+l.m_ratio*h,l.m_impulse=0,l}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,joint1:this.m_joint1,joint2:this.m_joint2,ratio:this.m_ratio}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n),e.joint1=s(pi,e.joint1,n),e.joint2=s(pi,e.joint2,n);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.ratio)&&(this.m_ratio=e.ratio)},t.prototype.getJoint1=function(){return this.m_joint1},t.prototype.getJoint2=function(){return this.m_joint2},t.prototype.setRatio=function(e){this.m_ratio=e},t.prototype.getRatio=function(){return this.m_ratio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_JvAC).mul(e)},t.prototype.getReactionTorque=function(e){var n=this.m_impulse*this.m_JwA;return e*n},t.prototype.initVelocityConstraints=function(e){this.m_lcA=this.m_bodyA.m_sweep.localCenter,this.m_lcB=this.m_bodyB.m_sweep.localCenter,this.m_lcC=this.m_bodyC.m_sweep.localCenter,this.m_lcD=this.m_bodyD.m_sweep.localCenter,this.m_mA=this.m_bodyA.m_invMass,this.m_mB=this.m_bodyB.m_invMass,this.m_mC=this.m_bodyC.m_invMass,this.m_mD=this.m_bodyD.m_invMass,this.m_iA=this.m_bodyA.m_invI,this.m_iB=this.m_bodyB.m_invI,this.m_iC=this.m_bodyC.m_invI,this.m_iD=this.m_bodyD.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=this.m_bodyC.c_position.a,h=this.m_bodyC.c_velocity.v,u=this.m_bodyC.c_velocity.w,f=this.m_bodyD.c_position.a,d=this.m_bodyD.c_velocity.v,_=this.m_bodyD.c_velocity.w,v=$.neo(n),p=$.neo(o),m=$.neo(c),A=$.neo(f);if(this.m_mass=0,this.m_type1==As.TYPE)this.m_JvAC=g.zero(),this.m_JwA=1,this.m_JwC=1,this.m_mass+=this.m_iA+this.m_iC;else{var y=$.mulVec2(m,this.m_localAxisC),x=$.mulSub(m,this.m_localAnchorC,this.m_lcC),C=$.mulSub(v,this.m_localAnchorA,this.m_lcA);this.m_JvAC=y,this.m_JwC=g.crossVec2Vec2(x,y),this.m_JwA=g.crossVec2Vec2(C,y),this.m_mass+=this.m_mC+this.m_mA+this.m_iC*this.m_JwC*this.m_JwC+this.m_iA*this.m_JwA*this.m_JwA}if(this.m_type2==As.TYPE)this.m_JvBD=g.zero(),this.m_JwB=this.m_ratio,this.m_JwD=this.m_ratio,this.m_mass+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD);else{var y=$.mulVec2(A,this.m_localAxisD),E=$.mulSub(A,this.m_localAnchorD,this.m_lcD),w=$.mulSub(p,this.m_localAnchorB,this.m_lcB);this.m_JvBD=g.mulNumVec2(this.m_ratio,y),this.m_JwD=this.m_ratio*g.crossVec2Vec2(E,y),this.m_JwB=this.m_ratio*g.crossVec2Vec2(w,y),this.m_mass+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*this.m_JwD*this.m_JwD+this.m_iB*this.m_JwB*this.m_JwB}this.m_mass=this.m_mass>0?1/this.m_mass:0,e.warmStarting?(s.addMul(this.m_mA*this.m_impulse,this.m_JvAC),r+=this.m_iA*this.m_impulse*this.m_JwA,a.addMul(this.m_mB*this.m_impulse,this.m_JvBD),l+=this.m_iB*this.m_impulse*this.m_JwB,h.subMul(this.m_mC*this.m_impulse,this.m_JvAC),u-=this.m_iC*this.m_impulse*this.m_JwC,d.subMul(this.m_mD*this.m_impulse,this.m_JvBD),_-=this.m_iD*this.m_impulse*this.m_JwD):this.m_impulse=0,this.m_bodyA.c_velocity.v.setVec2(s),this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v.setVec2(a),this.m_bodyB.c_velocity.w=l,this.m_bodyC.c_velocity.v.setVec2(h),this.m_bodyC.c_velocity.w=u,this.m_bodyD.c_velocity.v.setVec2(d),this.m_bodyD.c_velocity.w=_},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_bodyC.c_velocity.v,l=this.m_bodyC.c_velocity.w,c=this.m_bodyD.c_velocity.v,h=this.m_bodyD.c_velocity.w,u=g.dot(this.m_JvAC,n)-g.dot(this.m_JvAC,a)+g.dot(this.m_JvBD,r)-g.dot(this.m_JvBD,c);u+=this.m_JwA*s-this.m_JwC*l+(this.m_JwB*o-this.m_JwD*h);var f=-this.m_mass*u;this.m_impulse+=f,n.addMul(this.m_mA*f,this.m_JvAC),s+=this.m_iA*f*this.m_JwA,r.addMul(this.m_mB*f,this.m_JvBD),o+=this.m_iB*f*this.m_JwB,a.subMul(this.m_mC*f,this.m_JvAC),l-=this.m_iC*f*this.m_JwC,c.subMul(this.m_mD*f,this.m_JvBD),h-=this.m_iD*f*this.m_JwD,this.m_bodyA.c_velocity.v.setVec2(n),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.setVec2(r),this.m_bodyB.c_velocity.w=o,this.m_bodyC.c_velocity.v.setVec2(a),this.m_bodyC.c_velocity.w=l,this.m_bodyD.c_velocity.v.setVec2(c),this.m_bodyD.c_velocity.w=h},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=this.m_bodyC.c_position.c,l=this.m_bodyC.c_position.a,c=this.m_bodyD.c_position.c,h=this.m_bodyD.c_position.a,u=$.neo(s),f=$.neo(o),d=$.neo(l),_=$.neo(h),v=0,p,m,A,y,x,C,E,w,B=0;if(this.m_type1==As.TYPE)A=g.zero(),x=1,E=1,B+=this.m_iA+this.m_iC,p=s-l-this.m_referenceAngleA;else{var T=$.mulVec2(d,this.m_localAxisC),S=$.mulSub(d,this.m_localAnchorC,this.m_lcC),P=$.mulSub(u,this.m_localAnchorA,this.m_lcA);A=T,E=g.crossVec2Vec2(S,T),x=g.crossVec2Vec2(P,T),B+=this.m_mC+this.m_mA+this.m_iC*E*E+this.m_iA*x*x;var z=g.sub(this.m_localAnchorC,this.m_lcC),O=$.mulTVec2(d,g.add(P,g.sub(n,a)));p=g.dot(g.sub(O,z),this.m_localAxisC)}if(this.m_type2==As.TYPE)y=g.zero(),C=this.m_ratio,w=this.m_ratio,B+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD),m=o-h-this.m_referenceAngleB;else{var T=$.mulVec2(_,this.m_localAxisD),q=$.mulSub(_,this.m_localAnchorD,this.m_lcD),Z=$.mulSub(f,this.m_localAnchorB,this.m_lcB);y=g.mulNumVec2(this.m_ratio,T),w=this.m_ratio*g.crossVec2Vec2(q,T),C=this.m_ratio*g.crossVec2Vec2(Z,T),B+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*w*w+this.m_iB*C*C;var D=g.sub(this.m_localAnchorD,this.m_lcD),J=$.mulTVec2(_,g.add(Z,g.sub(r,c)));m=g.dot(J,this.m_localAxisD)-g.dot(D,this.m_localAxisD)}var G=p+this.m_ratio*m-this.m_constant,it=0;return B>0&&(it=-G/B),n.addMul(this.m_mA*it,A),s+=this.m_iA*it*x,r.addMul(this.m_mB*it,y),o+=this.m_iB*it*C,a.subMul(this.m_mC*it,A),l-=this.m_iC*it*E,c.subMul(this.m_mD*it,y),h-=this.m_iD*it*w,this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,this.m_bodyC.c_position.c.setVec2(a),this.m_bodyC.c_position.a=l,this.m_bodyD.c_position.c.setVec2(c),this.m_bodyD.c_position.a=h,v<ut.linearSlop},t.TYPE="gear-joint",t})(pi),PS={maxForce:1,maxTorque:1,correctionFactor:.3},md=(function(i){yi(t,i);function t(e,n,s){var r=this;return r instanceof t?(e=qi(e,PS),r=i.call(this,e,n,s)||this,n=r.m_bodyA,s=r.m_bodyB,r.m_type=t.TYPE,r.m_linearOffset=g.isValid(e.linearOffset)?g.clone(e.linearOffset):n.getLocalPoint(s.getPosition()),r.m_angularOffset=Number.isFinite(e.angularOffset)?e.angularOffset:s.getAngle()-n.getAngle(),r.m_linearImpulse=g.zero(),r.m_angularImpulse=0,r.m_maxForce=e.maxForce,r.m_maxTorque=e.maxTorque,r.m_correctionFactor=e.correctionFactor,r):new t(e,n,s)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,correctionFactor:this.m_correctionFactor,linearOffset:this.m_linearOffset,angularOffset:this.m_angularOffset}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.angularOffset)&&(this.m_angularOffset=e.angularOffset),Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.maxTorque)&&(this.m_maxTorque=e.maxTorque),Number.isFinite(e.correctionFactor)&&(this.m_correctionFactor=e.correctionFactor),g.isValid(e.linearOffset)&&this.m_linearOffset.set(e.linearOffset)},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setMaxTorque=function(e){this.m_maxTorque=e},t.prototype.getMaxTorque=function(){return this.m_maxTorque},t.prototype.setCorrectionFactor=function(e){this.m_correctionFactor=e},t.prototype.getCorrectionFactor=function(){return this.m_correctionFactor},t.prototype.setLinearOffset=function(e){(e.x!=this.m_linearOffset.x||e.y!=this.m_linearOffset.y)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_linearOffset.set(e))},t.prototype.getLinearOffset=function(){return this.m_linearOffset},t.prototype.setAngularOffset=function(e){e!=this.m_angularOffset&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_angularOffset=e)},t.prototype.getAngularOffset=function(){return this.m_angularOffset},t.prototype.getAnchorA=function(){return this.m_bodyA.getPosition()},t.prototype.getAnchorB=function(){return this.m_bodyB.getPosition()},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_linearImpulse)},t.prototype.getReactionTorque=function(e){return e*this.m_angularImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=$.neo(s),f=$.neo(l);this.m_rA=$.mulVec2(u,g.sub(this.m_linearOffset,this.m_localCenterA)),this.m_rB=$.mulVec2(f,g.neg(this.m_localCenterB));var d=this.m_invMassA,_=this.m_invMassB,v=this.m_invIA,p=this.m_invIB,m=new Tn;if(m.ex.x=d+_+v*this.m_rA.y*this.m_rA.y+p*this.m_rB.y*this.m_rB.y,m.ex.y=-v*this.m_rA.x*this.m_rA.y-p*this.m_rB.x*this.m_rB.y,m.ey.x=m.ex.y,m.ey.y=d+_+v*this.m_rA.x*this.m_rA.x+p*this.m_rB.x*this.m_rB.x,this.m_linearMass=m.getInverse(),this.m_angularMass=v+p,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),this.m_linearError=g.zero(),this.m_linearError.addCombine(1,a,1,this.m_rB),this.m_linearError.subCombine(1,n,1,this.m_rA),this.m_angularError=l-s-this.m_angularOffset,e.warmStarting){this.m_linearImpulse.mul(e.dtRatio),this.m_angularImpulse*=e.dtRatio;var A=g.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);r.subMul(d,A),o-=v*(g.crossVec2Vec2(this.m_rA,A)+this.m_angularImpulse),c.addMul(_,A),h+=p*(g.crossVec2Vec2(this.m_rB,A)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=r,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=c,this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB,u=e.dt,f=e.inv_dt;{var d=o-s+f*this.m_correctionFactor*this.m_angularError,_=-this.m_angularMass*d,v=this.m_angularImpulse,p=u*this.m_maxTorque;this.m_angularImpulse=ai(this.m_angularImpulse+_,-p,p),_=this.m_angularImpulse-v,s-=c*_,o+=h*_}{var d=g.zero();d.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),d.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA)),d.addMul(f*this.m_correctionFactor,this.m_linearError);var _=g.neg(Tn.mulVec2(this.m_linearMass,d)),v=g.clone(this.m_linearImpulse);this.m_linearImpulse.add(_);var p=u*this.m_maxForce;this.m_linearImpulse.clamp(p),_=g.sub(this.m_linearImpulse,v),n.subMul(a,_),s-=c*g.crossVec2Vec2(this.m_rA,_),r.addMul(l,_),o+=h*g.crossVec2Vec2(this.m_rB,_)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="motor-joint",t})(pi),IS=Math.PI,LS={maxForce:0,frequencyHz:5,dampingRatio:.7},pd=(function(i){yi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=qi(e,LS),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,g.isValid(r)?o.m_targetA=g.clone(r):g.isValid(e.target)?o.m_targetA=g.clone(e.target):o.m_targetA=g.zero(),o.m_localAnchorB=bn.mulTVec2(s.getTransform(),o.m_targetA),o.m_maxForce=e.maxForce,o.m_impulse=g.zero(),o.m_frequencyHz=e.frequencyHz,o.m_dampingRatio=e.dampingRatio,o.m_beta=0,o.m_gamma=0,o.m_rB=g.zero(),o.m_localCenterB=g.zero(),o.m_invMassB=0,o.m_invIB=0,o.m_mass=new Tn,o.m_C=g.zero(),o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,target:this.m_targetA,maxForce:this.m_maxForce,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,_localAnchorB:this.m_localAnchorB}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n),e.target=g.clone(e.target);var r=new t(e);return e._localAnchorB&&(r.m_localAnchorB=e._localAnchorB),r},t.prototype._reset=function(e){Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.setTarget=function(e){g.areEqual(e,this.m_targetA)||(this.m_bodyB.setAwake(!0),this.m_targetA.set(e))},t.prototype.getTarget=function(){return this.m_targetA},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return g.clone(this.m_targetA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_impulse)},t.prototype.getReactionTorque=function(e){return e*0},t.prototype.shiftOrigin=function(e){this.m_targetA.sub(e)},t.prototype.initVelocityConstraints=function(e){this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyB.c_position,s=this.m_bodyB.c_velocity,r=n.c,o=n.a,a=s.v,l=s.w,c=$.neo(o),h=this.m_bodyB.getMass(),u=2*IS*this.m_frequencyHz,f=2*h*this.m_dampingRatio*u,d=h*(u*u),_=e.dt;this.m_gamma=_*(f+_*d),this.m_gamma!=0&&(this.m_gamma=1/this.m_gamma),this.m_beta=_*d*this.m_gamma,this.m_rB=$.mulVec2(c,g.sub(this.m_localAnchorB,this.m_localCenterB));var v=new Tn;v.ex.x=this.m_invMassB+this.m_invIB*this.m_rB.y*this.m_rB.y+this.m_gamma,v.ex.y=-this.m_invIB*this.m_rB.x*this.m_rB.y,v.ey.x=v.ex.y,v.ey.y=this.m_invMassB+this.m_invIB*this.m_rB.x*this.m_rB.x+this.m_gamma,this.m_mass=v.getInverse(),this.m_C.setVec2(r),this.m_C.addCombine(1,this.m_rB,-1,this.m_targetA),this.m_C.mul(this.m_beta),l*=.98,e.warmStarting?(this.m_impulse.mul(e.dtRatio),a.addMul(this.m_invMassB,this.m_impulse),l+=this.m_invIB*g.crossVec2Vec2(this.m_rB,this.m_impulse)):this.m_impulse.setZero(),s.v.setVec2(a),s.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyB.c_velocity,s=g.clone(n.v),r=n.w,o=g.crossNumVec2(r,this.m_rB);o.add(s),o.addCombine(1,this.m_C,this.m_gamma,this.m_impulse),o.neg();var a=Tn.mulVec2(this.m_mass,o),l=g.clone(this.m_impulse);this.m_impulse.add(a);var c=e.dt*this.m_maxForce;this.m_impulse.clamp(c),a=g.sub(this.m_impulse,l),s.addMul(this.m_invMassB,a),r+=this.m_invIB*g.crossVec2Vec2(this.m_rB,a),n.v.setVec2(s),n.w=r},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="mouse-joint",t})(pi),DS=Math.abs,US={collideConnected:!0},_d=(function(i){yi(t,i);function t(e,n,s,r,o,a,l,c){var h=this;return h instanceof t?(e=qi(e,US),h=i.call(this,e,n,s)||this,n=h.m_bodyA,s=h.m_bodyB,h.m_type=t.TYPE,h.m_groundAnchorA=g.clone(r||e.groundAnchorA||g.neo(-1,1)),h.m_groundAnchorB=g.clone(o||e.groundAnchorB||g.neo(1,1)),h.m_localAnchorA=g.clone(a?n.getLocalPoint(a):e.localAnchorA||g.neo(-1,0)),h.m_localAnchorB=g.clone(l?s.getLocalPoint(l):e.localAnchorB||g.neo(1,0)),h.m_lengthA=Number.isFinite(e.lengthA)?e.lengthA:g.distance(a,r),h.m_lengthB=Number.isFinite(e.lengthB)?e.lengthB:g.distance(l,o),h.m_ratio=Number.isFinite(c)?c:e.ratio,h.m_constant=h.m_lengthA+h.m_ratio*h.m_lengthB,h.m_impulse=0,h):new t(e,n,s,r,o,a,l,c)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,groundAnchorA:this.m_groundAnchorA,groundAnchorB:this.m_groundAnchorB,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,lengthA:this.m_lengthA,lengthB:this.m_lengthB,ratio:this.m_ratio}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){g.isValid(e.groundAnchorA)&&this.m_groundAnchorA.set(e.groundAnchorA),g.isValid(e.groundAnchorB)&&this.m_groundAnchorB.set(e.groundAnchorB),g.isValid(e.localAnchorA)?this.m_localAnchorA.set(e.localAnchorA):g.isValid(e.anchorA)&&this.m_localAnchorA.set(this.m_bodyA.getLocalPoint(e.anchorA)),g.isValid(e.localAnchorB)?this.m_localAnchorB.set(e.localAnchorB):g.isValid(e.anchorB)&&this.m_localAnchorB.set(this.m_bodyB.getLocalPoint(e.anchorB)),Number.isFinite(e.lengthA)&&(this.m_lengthA=e.lengthA),Number.isFinite(e.lengthB)&&(this.m_lengthB=e.lengthB),Number.isFinite(e.ratio)&&(this.m_ratio=e.ratio)},t.prototype.getGroundAnchorA=function(){return this.m_groundAnchorA},t.prototype.getGroundAnchorB=function(){return this.m_groundAnchorB},t.prototype.getLengthA=function(){return this.m_lengthA},t.prototype.getLengthB=function(){return this.m_lengthB},t.prototype.getRatio=function(){return this.m_ratio},t.prototype.getCurrentLengthA=function(){var e=this.m_bodyA.getWorldPoint(this.m_localAnchorA),n=this.m_groundAnchorA;return g.distance(e,n)},t.prototype.getCurrentLengthB=function(){var e=this.m_bodyB.getWorldPoint(this.m_localAnchorB),n=this.m_groundAnchorB;return g.distance(e,n)},t.prototype.shiftOrigin=function(e){this.m_groundAnchorA.sub(e),this.m_groundAnchorB.sub(e)},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_uB).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=$.neo(s),f=$.neo(l);this.m_rA=$.mulVec2(u,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=$.mulVec2(f,g.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_uA=g.sub(g.add(n,this.m_rA),this.m_groundAnchorA),this.m_uB=g.sub(g.add(a,this.m_rB),this.m_groundAnchorB);var d=this.m_uA.length(),_=this.m_uB.length();d>10*ut.linearSlop?this.m_uA.mul(1/d):this.m_uA.setZero(),_>10*ut.linearSlop?this.m_uB.mul(1/_):this.m_uB.setZero();var v=g.crossVec2Vec2(this.m_rA,this.m_uA),p=g.crossVec2Vec2(this.m_rB,this.m_uB),m=this.m_invMassA+this.m_invIA*v*v,A=this.m_invMassB+this.m_invIB*p*p;if(this.m_mass=m+this.m_ratio*this.m_ratio*A,this.m_mass>0&&(this.m_mass=1/this.m_mass),e.warmStarting){this.m_impulse*=e.dtRatio;var y=g.mulNumVec2(-this.m_impulse,this.m_uA),x=g.mulNumVec2(-this.m_ratio*this.m_impulse,this.m_uB);r.addMul(this.m_invMassA,y),o+=this.m_invIA*g.crossVec2Vec2(this.m_rA,y),c.addMul(this.m_invMassB,x),h+=this.m_invIB*g.crossVec2Vec2(this.m_rB,x)}else this.m_impulse=0;this.m_bodyA.c_velocity.v=r,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=c,this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.add(n,g.crossNumVec2(s,this.m_rA)),l=g.add(r,g.crossNumVec2(o,this.m_rB)),c=-g.dot(this.m_uA,a)-this.m_ratio*g.dot(this.m_uB,l),h=-this.m_mass*c;this.m_impulse+=h;var u=g.mulNumVec2(-h,this.m_uA),f=g.mulNumVec2(-this.m_ratio*h,this.m_uB);n.addMul(this.m_invMassA,u),s+=this.m_invIA*g.crossVec2Vec2(this.m_rA,u),r.addMul(this.m_invMassB,f),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,f),this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=$.neo(s),l=$.neo(o),c=$.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),h=$.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),u=g.sub(g.add(n,this.m_rA),this.m_groundAnchorA),f=g.sub(g.add(r,this.m_rB),this.m_groundAnchorB),d=u.length(),_=f.length();d>10*ut.linearSlop?u.mul(1/d):u.setZero(),_>10*ut.linearSlop?f.mul(1/_):f.setZero();var v=g.crossVec2Vec2(c,u),p=g.crossVec2Vec2(h,f),m=this.m_invMassA+this.m_invIA*v*v,A=this.m_invMassB+this.m_invIB*p*p,y=m+this.m_ratio*this.m_ratio*A;y>0&&(y=1/y);var x=this.m_constant-d-this.m_ratio*_,C=DS(x),E=-y*x,w=g.mulNumVec2(-E,u),B=g.mulNumVec2(-this.m_ratio*E,f);return n.addMul(this.m_invMassA,w),s+=this.m_invIA*g.crossVec2Vec2(c,w),r.addMul(this.m_invMassB,B),o+=this.m_invIB*g.crossVec2Vec2(h,B),this.m_bodyA.c_position.c=n,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,C<ut.linearSlop},t.TYPE="pulley-joint",t})(pi),NS=Math.min,Yo;(function(i){i[i.inactiveLimit=0]="inactiveLimit",i[i.atLowerLimit=1]="atLowerLimit",i[i.atUpperLimit=2]="atUpperLimit",i[i.equalLimits=3]="equalLimits"})(Yo||(Yo={}));var FS={maxLength:0},vd=(function(i){yi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=qi(e,FS),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.neo(-1,0)),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.neo(1,0)),o.m_maxLength=e.maxLength,o.m_mass=0,o.m_impulse=0,o.m_length=0,o.m_state=Yo.inactiveLimit,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,maxLength:this.m_maxLength}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.maxLength)&&(this.m_maxLength=e.maxLength)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setMaxLength=function(e){this.m_maxLength=e},t.prototype.getMaxLength=function(){return this.m_maxLength},t.prototype.getLimitState=function(){return this.m_state},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_u).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=$.neo(s),f=$.neo(l);this.m_rA=$.mulSub(u,this.m_localAnchorA,this.m_localCenterA),this.m_rB=$.mulSub(f,this.m_localAnchorB,this.m_localCenterB),this.m_u=g.zero(),this.m_u.addCombine(1,a,1,this.m_rB),this.m_u.subCombine(1,n,1,this.m_rA),this.m_length=this.m_u.length();var d=this.m_length-this.m_maxLength;if(d>0?this.m_state=Yo.atUpperLimit:this.m_state=Yo.inactiveLimit,this.m_length>ut.linearSlop)this.m_u.mul(1/this.m_length);else{this.m_u.setZero(),this.m_mass=0,this.m_impulse=0;return}var _=g.crossVec2Vec2(this.m_rA,this.m_u),v=g.crossVec2Vec2(this.m_rB,this.m_u),p=this.m_invMassA+this.m_invIA*_*_+this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=p!=0?1/p:0,e.warmStarting){this.m_impulse*=e.dtRatio;var m=g.mulNumVec2(this.m_impulse,this.m_u);r.subMul(this.m_invMassA,m),o-=this.m_invIA*g.crossVec2Vec2(this.m_rA,m),c.addMul(this.m_invMassB,m),h+=this.m_invIB*g.crossVec2Vec2(this.m_rB,m)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.addCrossNumVec2(n,s,this.m_rA),l=g.addCrossNumVec2(r,o,this.m_rB),c=this.m_length-this.m_maxLength,h=g.dot(this.m_u,g.sub(l,a));c<0&&(h+=e.inv_dt*c);var u=-this.m_mass*h,f=this.m_impulse;this.m_impulse=NS(0,this.m_impulse+u),u=this.m_impulse-f;var d=g.mulNumVec2(u,this.m_u);n.subMul(this.m_invMassA,d),s-=this.m_invIA*g.crossVec2Vec2(this.m_rA,d),r.addMul(this.m_invMassB,d),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,d),this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=$.neo(s),l=$.neo(o),c=$.mulSub(a,this.m_localAnchorA,this.m_localCenterA),h=$.mulSub(l,this.m_localAnchorB,this.m_localCenterB),u=g.zero();u.addCombine(1,r,1,h),u.subCombine(1,n,1,c);var f=u.normalize(),d=f-this.m_maxLength;d=ai(d,0,ut.maxLinearCorrection);var _=-this.m_mass*d,v=g.mulNumVec2(_,u);return n.subMul(this.m_invMassA,v),s-=this.m_invIA*g.crossVec2Vec2(c,v),r.addMul(this.m_invMassB,v),o+=this.m_invIB*g.crossVec2Vec2(h,v),this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,f-this.m_maxLength<ut.linearSlop},t.TYPE="rope-joint",t})(pi),OS=Math.abs,zS=Math.PI,VS={frequencyHz:0,dampingRatio:0},gd=(function(i){yi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=qi(e,VS),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),o.m_referenceAngle=Number.isFinite(e.referenceAngle)?e.referenceAngle:s.getAngle()-n.getAngle(),o.m_frequencyHz=e.frequencyHz,o.m_dampingRatio=e.dampingRatio,o.m_impulse=new re,o.m_bias=0,o.m_gamma=0,o.m_mass=new Ss,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.neo(this.m_impulse.x,this.m_impulse.y).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.z},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=$.neo(n),h=$.neo(o);this.m_rA=$.mulVec2(c,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=$.mulVec2(h,g.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,f=this.m_invMassB,d=this.m_invIA,_=this.m_invIB,v=new Ss;if(v.ex.x=u+f+this.m_rA.y*this.m_rA.y*d+this.m_rB.y*this.m_rB.y*_,v.ey.x=-this.m_rA.y*this.m_rA.x*d-this.m_rB.y*this.m_rB.x*_,v.ez.x=-this.m_rA.y*d-this.m_rB.y*_,v.ex.y=v.ey.x,v.ey.y=u+f+this.m_rA.x*this.m_rA.x*d+this.m_rB.x*this.m_rB.x*_,v.ez.y=this.m_rA.x*d+this.m_rB.x*_,v.ex.z=v.ez.x,v.ey.z=v.ez.y,v.ez.z=d+_,this.m_frequencyHz>0){v.getInverse22(this.m_mass);var p=d+_,m=p>0?1/p:0,A=o-n-this.m_referenceAngle,y=2*zS*this.m_frequencyHz,x=2*m*this.m_dampingRatio*y,C=m*y*y,E=e.dt;this.m_gamma=E*(x+E*C),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=A*E*C*this.m_gamma,p+=this.m_gamma,this.m_mass.ez.z=p!=0?1/p:0}else v.ez.z==0?(v.getInverse22(this.m_mass),this.m_gamma=0,this.m_bias=0):(v.getSymInverse33(this.m_mass),this.m_gamma=0,this.m_bias=0);if(e.warmStarting){this.m_impulse.mul(e.dtRatio);var w=g.neo(this.m_impulse.x,this.m_impulse.y);s.subMul(u,w),r-=d*(g.crossVec2Vec2(this.m_rA,w)+this.m_impulse.z),a.addMul(f,w),l+=_*(g.crossVec2Vec2(this.m_rB,w)+this.m_impulse.z)}else this.m_impulse.setZero();this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB;if(this.m_frequencyHz>0){var u=o-s,f=-this.m_mass.ez.z*(u+this.m_bias+this.m_gamma*this.m_impulse.z);this.m_impulse.z+=f,s-=c*f,o+=h*f;var d=g.zero();d.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),d.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var _=g.neg(Ss.mulVec2(this.m_mass,d));this.m_impulse.x+=_.x,this.m_impulse.y+=_.y;var v=g.clone(_);n.subMul(a,v),s-=c*g.crossVec2Vec2(this.m_rA,v),r.addMul(l,v),o+=h*g.crossVec2Vec2(this.m_rB,v)}else{var d=g.zero();d.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),d.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var u=o-s,p=new re(d.x,d.y,u),m=re.neg(Ss.mulVec3(this.m_mass,p));this.m_impulse.add(m);var v=g.neo(m.x,m.y);n.subMul(a,v),s-=c*(g.crossVec2Vec2(this.m_rA,v)+m.z),r.addMul(l,v),o+=h*(g.crossVec2Vec2(this.m_rB,v)+m.z)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=$.neo(s),l=$.neo(o),c=this.m_invMassA,h=this.m_invMassB,u=this.m_invIA,f=this.m_invIB,d=$.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),_=$.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),v,p,m=new Ss;if(m.ex.x=c+h+d.y*d.y*u+_.y*_.y*f,m.ey.x=-d.y*d.x*u-_.y*_.x*f,m.ez.x=-d.y*u-_.y*f,m.ex.y=m.ey.x,m.ey.y=c+h+d.x*d.x*u+_.x*_.x*f,m.ez.y=d.x*u+_.x*f,m.ex.z=m.ez.x,m.ey.z=m.ez.y,m.ez.z=u+f,this.m_frequencyHz>0){var A=g.zero();A.addCombine(1,r,1,_),A.subCombine(1,n,1,d),v=A.length(),p=0;var y=g.neg(m.solve22(A));n.subMul(c,y),s-=u*g.crossVec2Vec2(d,y),r.addMul(h,y),o+=f*g.crossVec2Vec2(_,y)}else{var A=g.zero();A.addCombine(1,r,1,_),A.subCombine(1,n,1,d);var x=o-s-this.m_referenceAngle;v=A.length(),p=OS(x);var C=new re(A.x,A.y,x),E=new re;if(m.ez.z>0)E=re.neg(m.solve33(C));else{var w=g.neg(m.solve22(A));E.set(w.x,w.y,0)}var y=g.neo(E.x,E.y);n.subMul(c,y),s-=u*(g.crossVec2Vec2(d,y)+E.z),r.addMul(h,y),o+=f*(g.crossVec2Vec2(_,y)+E.z)}return this.m_bodyA.c_position.c=n,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,v<=ut.linearSlop&&p<=ut.angularSlop},t.TYPE="weld-joint",t})(pi),GS=Math.abs,kS=Math.PI,HS={enableMotor:!1,maxMotorTorque:0,motorSpeed:0,frequencyHz:2,dampingRatio:.7},yd=(function(i){yi(t,i);function t(e,n,s,r,o){var a=this;return a instanceof t?(e=qi(e,HS),a=i.call(this,e,n,s)||this,n=a.m_bodyA,s=a.m_bodyB,a.m_ax=g.zero(),a.m_ay=g.zero(),a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),g.isValid(o)?a.m_localXAxisA=n.getLocalVector(o):g.isValid(e.localAxisA)?a.m_localXAxisA=g.clone(e.localAxisA):g.isValid(e.localAxis)?a.m_localXAxisA=g.clone(e.localAxis):a.m_localXAxisA=g.neo(1,0),a.m_localYAxisA=g.crossNumVec2(1,a.m_localXAxisA),a.m_mass=0,a.m_impulse=0,a.m_motorMass=0,a.m_motorImpulse=0,a.m_springMass=0,a.m_springImpulse=0,a.m_maxMotorTorque=e.maxMotorTorque,a.m_motorSpeed=e.motorSpeed,a.m_enableMotor=e.enableMotor,a.m_frequencyHz=e.frequencyHz,a.m_dampingRatio=e.dampingRatio,a.m_bias=0,a.m_gamma=0,a):new t(e,n,s,r,o)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,enableMotor:this.m_enableMotor,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA}},t._deserialize=function(e,n,s){e=gi({},e),e.bodyA=s(_e,e.bodyA,n),e.bodyB=s(_e,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.localAxisA&&(this.m_localXAxisA.setVec2(e.localAxisA),this.m_localYAxisA.setVec2(g.crossNumVec2(1,e.localAxisA))),e.enableMotor!==void 0&&(this.m_enableMotor=e.enableMotor),Number.isFinite(e.maxMotorTorque)&&(this.m_maxMotorTorque=e.maxMotorTorque),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getLocalAxisA=function(){return this.m_localXAxisA},t.prototype.getJointTranslation=function(){var e=this.m_bodyA,n=this.m_bodyB,s=e.getWorldPoint(this.m_localAnchorA),r=n.getWorldPoint(this.m_localAnchorB),o=g.sub(r,s),a=e.getWorldVector(this.m_localXAxisA),l=g.dot(o,a);return l},t.prototype.getJointSpeed=function(){var e=this.m_bodyA.m_angularVelocity,n=this.m_bodyB.m_angularVelocity;return n-e},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.setMaxMotorTorque=function(e){e!=this.m_maxMotorTorque&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=e)},t.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},t.prototype.getMotorTorque=function(e){return e*this.m_motorImpulse},t.prototype.setSpringFrequencyHz=function(e){this.m_frequencyHz=e},t.prototype.getSpringFrequencyHz=function(){return this.m_frequencyHz},t.prototype.setSpringDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getSpringDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_motorImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_invMassA,s=this.m_invMassB,r=this.m_invIA,o=this.m_invIB,a=this.m_bodyA.c_position.c,l=this.m_bodyA.c_position.a,c=this.m_bodyA.c_velocity.v,h=this.m_bodyA.c_velocity.w,u=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,d=this.m_bodyB.c_velocity.v,_=this.m_bodyB.c_velocity.w,v=$.neo(l),p=$.neo(f),m=$.mulVec2(v,g.sub(this.m_localAnchorA,this.m_localCenterA)),A=$.mulVec2(p,g.sub(this.m_localAnchorB,this.m_localCenterB)),y=g.zero();if(y.addCombine(1,u,1,A),y.subCombine(1,a,1,m),this.m_ay=$.mulVec2(v,this.m_localYAxisA),this.m_sAy=g.crossVec2Vec2(g.add(y,m),this.m_ay),this.m_sBy=g.crossVec2Vec2(A,this.m_ay),this.m_mass=n+s+r*this.m_sAy*this.m_sAy+o*this.m_sBy*this.m_sBy,this.m_mass>0&&(this.m_mass=1/this.m_mass),this.m_springMass=0,this.m_bias=0,this.m_gamma=0,this.m_frequencyHz>0){this.m_ax=$.mulVec2(v,this.m_localXAxisA),this.m_sAx=g.crossVec2Vec2(g.add(y,m),this.m_ax),this.m_sBx=g.crossVec2Vec2(A,this.m_ax);var x=n+s+r*this.m_sAx*this.m_sAx+o*this.m_sBx*this.m_sBx;if(x>0){this.m_springMass=1/x;var C=g.dot(y,this.m_ax),E=2*kS*this.m_frequencyHz,w=2*this.m_springMass*this.m_dampingRatio*E,B=this.m_springMass*E*E,T=e.dt;this.m_gamma=T*(w+T*B),this.m_gamma>0&&(this.m_gamma=1/this.m_gamma),this.m_bias=C*T*B*this.m_gamma,this.m_springMass=x+this.m_gamma,this.m_springMass>0&&(this.m_springMass=1/this.m_springMass)}}else this.m_springImpulse=0;if(this.m_enableMotor?(this.m_motorMass=r+o,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass)):(this.m_motorMass=0,this.m_motorImpulse=0),e.warmStarting){this.m_impulse*=e.dtRatio,this.m_springImpulse*=e.dtRatio,this.m_motorImpulse*=e.dtRatio;var S=g.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax),P=this.m_impulse*this.m_sAy+this.m_springImpulse*this.m_sAx+this.m_motorImpulse,z=this.m_impulse*this.m_sBy+this.m_springImpulse*this.m_sBx+this.m_motorImpulse;c.subMul(this.m_invMassA,S),h-=this.m_invIA*P,d.addMul(this.m_invMassB,S),_+=this.m_invIB*z}else this.m_impulse=0,this.m_springImpulse=0,this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(c),this.m_bodyA.c_velocity.w=h,this.m_bodyB.c_velocity.v.setVec2(d),this.m_bodyB.c_velocity.w=_},t.prototype.solveVelocityConstraints=function(e){var n=this.m_invMassA,s=this.m_invMassB,r=this.m_invIA,o=this.m_invIB,a=this.m_bodyA.c_velocity.v,l=this.m_bodyA.c_velocity.w,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w;{var u=g.dot(this.m_ax,c)-g.dot(this.m_ax,a)+this.m_sBx*h-this.m_sAx*l,f=-this.m_springMass*(u+this.m_bias+this.m_gamma*this.m_springImpulse);this.m_springImpulse+=f;var d=g.mulNumVec2(f,this.m_ax),_=f*this.m_sAx,v=f*this.m_sBx;a.subMul(n,d),l-=r*_,c.addMul(s,d),h+=o*v}{var u=h-l-this.m_motorSpeed,f=-this.m_motorMass*u,p=this.m_motorImpulse,m=e.dt*this.m_maxMotorTorque;this.m_motorImpulse=ai(this.m_motorImpulse+f,-m,m),f=this.m_motorImpulse-p,l-=r*f,h+=o*f}{var u=g.dot(this.m_ay,c)-g.dot(this.m_ay,a)+this.m_sBy*h-this.m_sAy*l,f=-this.m_mass*u;this.m_impulse+=f;var d=g.mulNumVec2(f,this.m_ay),_=f*this.m_sAy,v=f*this.m_sBy;a.subMul(n,d),l-=r*_,c.addMul(s,d),h+=o*v}this.m_bodyA.c_velocity.v.setVec2(a),this.m_bodyA.c_velocity.w=l,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=$.neo(s),l=$.neo(o),c=$.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),h=$.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),u=g.zero();u.addCombine(1,r,1,h),u.subCombine(1,n,1,c);var f=$.mulVec2(a,this.m_localYAxisA),d=g.crossVec2Vec2(g.add(u,c),f),_=g.crossVec2Vec2(h,f),v=g.dot(u,f),p=this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_sAy*this.m_sAy+this.m_invIB*this.m_sBy*this.m_sBy,m=p!=0?-v/p:0,A=g.mulNumVec2(m,f),y=m*d,x=m*_;return n.subMul(this.m_invMassA,A),s-=this.m_invIA*y,r.addMul(this.m_invMassB,A),o+=this.m_invIB*x,this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,GS(v)<=ut.linearSlop},t.TYPE="wheel-joint",t})(pi),Je,WS=0,xd={World:oa,Body:_e,Joint:pi,Fixture:Bl,Shape:yr},Ad={Vec2:g,Vec3:re,World:oa,Body:_e,Joint:pi,Fixture:Bl,Shape:yr},qS=(Je={},Je[_e.STATIC]=_e,Je[_e.DYNAMIC]=_e,Je[_e.KINEMATIC]=_e,Je[ea.TYPE]=ea,Je[Cs.TYPE]=Cs,Je[Es.TYPE]=Es,Je[Rs.TYPE]=Rs,Je[ld.TYPE]=ld,Je[cd.TYPE]=cd,Je[dd.TYPE]=dd,Je[md.TYPE]=md,Je[pd.TYPE]=pd,Je[fd.TYPE]=fd,Je[_d.TYPE]=_d,Je[As.TYPE]=As,Je[vd.TYPE]=vd,Je[gd.TYPE]=gd,Je[yd.TYPE]=yd,Je),XS={rootClass:oa,preSerialize:function(i){return i},postSerialize:function(i,t){return i},preDeserialize:function(i){return i},postDeserialize:function(i,t){return i}},eu=(function(){function i(t){var e=this;this.toJson=function(n){var s=e.options.preSerialize,r=e.options.postSerialize,o=[],a=[n],l={};function c(_,v){if(_.__sid=_.__sid||++WS,!l[_.__sid]){a.push(_);var p=o.length+a.length,m={refIndex:p,refType:v};l[_.__sid]=m}return l[_.__sid]}function h(_){_=s(_);var v=_._serialize();return v=r(v,_),v}function u(_,v){if(v===void 0&&(v=!1),typeof _!="object"||_===null)return _;if(typeof _._serialize=="function"){if(!v){for(var p in xd)if(_ instanceof xd[p])return c(_,p)}_=h(_)}if(Array.isArray(_)){for(var m=[],A=0;A<_.length;A++)m[A]=u(_[A]);_=m}else{var m={};for(var A in _)_.hasOwnProperty(A)&&(m[A]=u(_[A]));_=m}return _}for(;a.length;){var f=a.shift(),d=u(f,!0);o.push(d)}return o},this.fromJson=function(n){var s=e.options.preDeserialize,r=e.options.postDeserialize,o=e.options.rootClass,a={};function l(u,f,d){(!u||!u._deserialize)&&(u=qS[f.type]);var _=u&&u._deserialize;if(_){f=s(f);var v=u._deserialize,p=v(f,d,c);return p=r(p,f),p}}function c(u,f,d){var _=f.refIndex&&f.refType;if(!_)return l(u,f,d);var v=f;Ad[v.refType]&&(u=Ad[v.refType]);var p=v.refIndex;if(!a[p]){var m=n[p],A=l(u,m,d);a[p]=A}return a[p]}var h=l(o,n[0],null);return h},this.options=gi(gi({},XS),t)}return i})(),km=new eu({rootClass:oa});eu.fromJson=km.fromJson;eu.toJson=km.toJson;(function(){function i(){}return i.mount=function(t){throw new Error("Not implemented")},i.start=function(t){var e=i.mount();return e.start(t),e},i})();(function(i){yi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(o=i.call(this)||this,o._setAsBox(e,n,s,r),o):new t(e,n,s,r)}return t.TYPE="polygon",t})(Cs);Nn.addType(Rs.TYPE,Rs.TYPE,YS);function YS(i,t,e,n,s,r,o){$S(i,e.getShape(),t,r.getShape(),s)}var Md=X(0,0),Sd=X(0,0),$S=function(i,t,e,n,s){i.pointCount=0,Ft(Md,e,t.m_p),Ft(Sd,s,n.m_p);var r=or(Sd,Md),o=t.m_radius,a=n.m_radius,l=o+a;r>l*l||(i.type=Fe.e_circles,V(i.localPoint,t.m_p),Ct(i.localNormal),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,ne.e_vertex,0,ne.e_vertex))};Nn.addType(Es.TYPE,Rs.TYPE,JS);Nn.addType(ea.TYPE,Rs.TYPE,ZS);function JS(i,t,e,n,s,r,o){var a=e.getShape(),l=r.getShape();Hm(i,a,t,l,s)}function ZS(i,t,e,n,s,r,o){var a=e.getShape(),l=new Es;a.getChildEdge(l,n);var c=l,h=r.getShape();Hm(i,c,t,h,s)}var qs=X(0,0),Ic=X(0,0),Lc=X(0,0),Zn=X(0,0),Xs=X(0,0),Xr=X(0,0),Hm=function(i,t,e,n,s){i.pointCount=0,Pm(Zn,s,e,n.m_p);var r=t.m_vertex1,o=t.m_vertex2;Ot(qs,o,r);var a=nt(qs,o)-nt(qs,Zn),l=nt(qs,Zn)-nt(qs,r),c=t.m_radius+n.m_radius;if(l<=0){V(Xs,r);var h=or(Zn,r);if(h>c*c)return;if(t.m_hasVertex0){var u=t.m_vertex0,f=r;Ot(Ic,f,u);var d=nt(Ic,f)-nt(Ic,Zn);if(d>0)return}i.type=Fe.e_circles,Ct(i.localNormal),V(i.localPoint,Xs),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,ne.e_vertex,0,ne.e_vertex);return}if(a<=0){V(Xs,o);var _=or(Zn,Xs);if(_>c*c)return;if(t.m_hasVertex3){var v=t.m_vertex3,p=o;Ot(Lc,v,p);var m=nt(Lc,Zn)-nt(Lc,p);if(m>0)return}i.type=Fe.e_circles,Ct(i.localNormal),V(i.localPoint,Xs),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(1,ne.e_vertex,0,ne.e_vertex);return}var A=rr(qs);Pe(Xs,a/A,r,l/A,o);var y=or(Zn,Xs);y>c*c||(Gi(Xr,1,qs),nt(Xr,Zn)-nt(Xr,r)<0&&Qo(Xr),Sn(Xr),i.type=Fe.e_faceA,V(i.localNormal,Xr),V(i.localPoint,r),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,ne.e_face,0,ne.e_vertex))},sl=[new Wi,new Wi],rl=[new Wi,new Wi],Ys=[new Wi,new Wi],ol=X(0,0),bd=X(0,0),Dc=X(0,0),Uc=gr(0,0,0),$s=X(0,0),Yr=X(0,0),al=X(0,0),Td=X(0,0),wd=X(0,0),_s=X(0,0),Nc=X(0,0),Ed=X(0,0);Nn.addType(Cs.TYPE,Cs.TYPE,KS);function KS(i,t,e,n,s,r,o){QS(i,e.getShape(),t,r.getShape(),s)}function Cd(i,t,e,n,s){var r=i.m_count,o=e.m_count,a=i.m_normals,l=i.m_vertices,c=e.m_vertices;Im(Uc,n,t);for(var h=0,u=-1/0,f=0;f<r;++f){on(Dc,Uc.q,a[f]),Ft(bd,Uc,l[f]);for(var d=1/0,_=0;_<o;++_){var v=nt(Dc,c[_])-nt(Dc,bd);v<d&&(d=v)}d>u&&(u=d,h=f)}s.maxSeparation=u,s.bestIndex=h}function jS(i,t,e,n,s,r){var o=t.m_normals,a=s.m_count,l=s.m_vertices,c=s.m_normals;QM(Ed,r.q,e.q,o[n]);for(var h=0,u=1/0,f=0;f<a;++f){var d=nt(Ed,c[f]);d<u&&(u=d,h=f)}var _=h,v=_+1<a?_+1:0;Ft(i[0].v,r,l[_]),i[0].id.setFeatures(n,ne.e_face,_,ne.e_vertex),Ft(i[1].v,r,l[v]),i[1].id.setFeatures(n,ne.e_face,v,ne.e_vertex)}var $r={maxSeparation:0,bestIndex:0},QS=function(i,t,e,n,s){i.pointCount=0;var r=t.m_radius+n.m_radius;Cd(t,e,n,s,$r);var o=$r.bestIndex,a=$r.maxSeparation;if(!(a>r)){Cd(n,s,t,e,$r);var l=$r.bestIndex,c=$r.maxSeparation;if(!(c>r)){var h,u,f,d,_,v,p=.1*ut.linearSlop;c>a+p?(h=n,u=t,f=s,d=e,_=l,i.type=Fe.e_faceB,v=!0):(h=t,u=n,f=e,d=s,_=o,i.type=Fe.e_faceA,v=!1),sl[0].recycle(),sl[1].recycle(),jS(sl,h,f,_,u,d);var m=h.m_count,A=h.m_vertices,y=_,x=_+1<m?_+1:0;V($s,A[y]),V(Yr,A[x]),Ot(al,Yr,$s),Sn(al),sr(Td,al,1),Pe(wd,.5,$s,.5,Yr),on(_s,f.q,al),sr(Nc,_s,1),Ft($s,f,$s),Ft(Yr,f,Yr);var C=nt(Nc,$s),E=-nt(_s,$s)+r,w=nt(_s,Yr)+r;rl[0].recycle(),rl[1].recycle(),Ys[0].recycle(),Ys[1].recycle(),ri(ol,-_s.x,-_s.y);var B=ta(rl,sl,ol,E,y);if(!(B<2)){ri(ol,_s.x,_s.y);var T=ta(Ys,rl,ol,w,x);if(!(T<2)){V(i.localNormal,Td),V(i.localPoint,wd);for(var S=0,P=0;P<Ys.length;++P){var z=nt(Nc,Ys[P].v)-C;if(z<=r){var O=i.points[S];Jh(O.localPoint,d,Ys[P].v),O.id.set(Ys[P].id),v&&O.id.swapFeatures(),++S}}i.pointCount=S}}}}};Nn.addType(Cs.TYPE,Rs.TYPE,tb);function tb(i,t,e,n,s,r,o){eb(i,e.getShape(),t,r.getShape(),s)}var pn=X(0,0),Fc=X(0,0),eb=function(i,t,e,n,s){i.pointCount=0,Pm(pn,s,e,n.m_p);for(var r=0,o=-1/0,a=t.m_radius+n.m_radius,l=t.m_count,c=t.m_vertices,h=t.m_normals,u=0;u<l;++u){var f=nt(h[u],pn)-nt(h[u],c[u]);if(f>a)return;f>o&&(o=f,r=u)}var d=r,_=d+1<l?d+1:0,v=c[d],p=c[_];if(o<Ti){i.pointCount=1,i.type=Fe.e_faceA,V(i.localNormal,h[r]),Pe(i.localPoint,.5,v,.5,p),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,ne.e_vertex,0,ne.e_vertex);return}var m=nt(pn,p)-nt(pn,v)-nt(v,p)+nt(v,v),A=nt(pn,v)-nt(pn,p)-nt(p,v)+nt(p,p);if(m<=0){if(or(pn,v)>a*a)return;i.pointCount=1,i.type=Fe.e_faceA,Ot(i.localNormal,pn,v),Sn(i.localNormal),V(i.localPoint,v),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,ne.e_vertex,0,ne.e_vertex)}else if(A<=0){if(or(pn,p)>a*a)return;i.pointCount=1,i.type=Fe.e_faceA,Ot(i.localNormal,pn,p),Sn(i.localNormal),V(i.localPoint,p),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,ne.e_vertex,0,ne.e_vertex)}else{Pe(Fc,.5,v,.5,p);var y=nt(pn,h[d])-nt(Fc,h[d]);if(y>a)return;i.pointCount=1,i.type=Fe.e_faceA,V(i.localNormal,h[d]),V(i.localPoint,Fc),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,ne.e_vertex,0,ne.e_vertex)}},ib=Math.min;Nn.addType(Es.TYPE,Cs.TYPE,nb);Nn.addType(ea.TYPE,Cs.TYPE,sb);function nb(i,t,e,n,s,r,o){qm(i,e.getShape(),t,r.getShape(),s)}var Rd=new Es;function sb(i,t,e,n,s,r,o){var a=e.getShape();a.getChildEdge(Rd,n),qm(i,Rd,t,r.getShape(),s)}var en;(function(i){i[i.e_unknown=-1]="e_unknown",i[i.e_edgeA=1]="e_edgeA",i[i.e_edgeB=2]="e_edgeB"})(en||(en={}));var Bd;(function(i){i[i.e_isolated=0]="e_isolated",i[i.e_concave=1]="e_concave",i[i.e_convex=2]="e_convex"})(Bd||(Bd={}));var Wm=(function(){function i(){}return i})(),rb=(function(){function i(){this.vertices=[],this.normals=[],this.count=0;for(var t=0;t<ut.maxPolygonVertices;t++)this.vertices.push(X(0,0)),this.normals.push(X(0,0))}return i})(),ob=(function(){function i(){this.v1=X(0,0),this.v2=X(0,0),this.normal=X(0,0),this.sideNormal1=X(0,0),this.sideNormal2=X(0,0)}return i.prototype.recycle=function(){Ct(this.v1),Ct(this.v2),Ct(this.normal),Ct(this.sideNormal1),Ct(this.sideNormal2)},i})(),ll=[new Wi,new Wi],vs=[new Wi,new Wi],_n=[new Wi,new Wi],Cn=new Wm,Ai=new Wm,Qe=new rb,Ht=new ob,cl=X(0,0),Do=X(0,0),Jr=X(0,0),Uo=X(0,0),No=gr(0,0,0),Me=X(0,0),Rn=X(0,0),Nt=X(0,0),Bn=X(0,0),Ze=X(0,0),Ke=X(0,0),Pd=X(0,0),gs=X(0,0),qm=function(i,t,e,n,s){Im(No,e,s),Ft(cl,No,n.m_centroid);var r=t.m_vertex0,o=t.m_vertex1,a=t.m_vertex2,l=t.m_vertex3,c=t.m_hasVertex0,h=t.m_hasVertex3;Ot(Jr,a,o),Sn(Jr),ri(Nt,Jr.y,-Jr.x);var u=nt(Nt,cl)-nt(Nt,o),f=0,d=0,_=!1,v=!1;Ct(Rn),Ct(Bn),c&&(Ot(Do,o,r),Sn(Do),ri(Rn,Do.y,-Do.x),_=Yt(Do,Jr)>=0,f=g.dot(Rn,cl)-g.dot(Rn,r)),h&&(Ot(Uo,l,a),Sn(Uo),ri(Bn,Uo.y,-Uo.x),v=g.crossVec2Vec2(Jr,Uo)>0,d=g.dot(Bn,cl)-g.dot(Bn,a));var p;Ct(Me),Ct(Ze),Ct(Ke),c&&h?_&&v?(p=f>=0||u>=0||d>=0,p?(V(Me,Nt),V(Ze,Rn),V(Ke,Bn)):(Lt(Me,-1,Nt),Lt(Ze,-1,Nt),Lt(Ke,-1,Nt))):_?(p=f>=0||u>=0&&d>=0,p?(V(Me,Nt),V(Ze,Rn),V(Ke,Nt)):(Lt(Me,-1,Nt),Lt(Ze,-1,Bn),Lt(Ke,-1,Nt))):v?(p=d>=0||f>=0&&u>=0,p?(V(Me,Nt),V(Ze,Nt),V(Ke,Bn)):(Lt(Me,-1,Nt),Lt(Ze,-1,Nt),Lt(Ke,-1,Rn))):(p=f>=0&&u>=0&&d>=0,p?(V(Me,Nt),V(Ze,Nt),V(Ke,Nt)):(Lt(Me,-1,Nt),Lt(Ze,-1,Bn),Lt(Ke,-1,Rn))):c?_?(p=f>=0||u>=0,p?(V(Me,Nt),V(Ze,Rn),Lt(Ke,-1,Nt)):(Lt(Me,-1,Nt),V(Ze,Nt),Lt(Ke,-1,Nt))):(p=f>=0&&u>=0,p?(V(Me,Nt),V(Ze,Nt),Lt(Ke,-1,Nt)):(Lt(Me,-1,Nt),V(Ze,Nt),Lt(Ke,-1,Rn))):h?v?(p=u>=0||d>=0,p?(V(Me,Nt),Lt(Ze,-1,Nt),V(Ke,Bn)):(Lt(Me,-1,Nt),Lt(Ze,-1,Nt),V(Ke,Nt))):(p=u>=0&&d>=0,p?(V(Me,Nt),Lt(Ze,-1,Nt),V(Ke,Nt)):(Lt(Me,-1,Nt),Lt(Ze,-1,Bn),V(Ke,Nt))):(p=u>=0,p?(V(Me,Nt),Lt(Ze,-1,Nt),Lt(Ke,-1,Nt)):(Lt(Me,-1,Nt),V(Ze,Nt),V(Ke,Nt))),Qe.count=n.m_count;for(var m=0;m<n.m_count;++m)Ft(Qe.vertices[m],No,n.m_vertices[m]),on(Qe.normals[m],No.q,n.m_normals[m]);var A=n.m_radius+t.m_radius;i.pointCount=0;{Cn.type=en.e_edgeA,Cn.index=p?0:1,Cn.separation=1/0;for(var m=0;m<Qe.count;++m){var y=Qe.vertices[m],x=nt(Me,y)-nt(Me,o);x<Cn.separation&&(Cn.separation=x)}}if(Cn.type!=en.e_unknown&&!(Cn.separation>A)){{Ai.type=en.e_unknown,Ai.index=-1,Ai.separation=-1/0,ri(Pd,-Me.y,Me.x);for(var m=0;m<Qe.count;++m){Lt(gs,-1,Qe.normals[m]);var C=nt(gs,Qe.vertices[m])-nt(gs,o),E=nt(gs,Qe.vertices[m])-nt(gs,a),x=ib(C,E);if(x>A){Ai.type=en.e_edgeB,Ai.index=m,Ai.separation=x;break}if(nt(gs,Pd)>=0){if(nt(gs,Me)-nt(Ke,Me)<-ut.angularSlop)continue}else if(nt(gs,Me)-nt(Ze,Me)<-ut.angularSlop)continue;x>Ai.separation&&(Ai.type=en.e_edgeB,Ai.index=m,Ai.separation=x)}}if(!(Ai.type!=en.e_unknown&&Ai.separation>A)){var w=.98,B=.001,T;if(Ai.type==en.e_unknown?T=Cn:Ai.separation>w*Cn.separation+B?T=Ai:T=Cn,_n[0].recycle(),_n[1].recycle(),T.type==en.e_edgeA){i.type=Fe.e_faceA;for(var S=0,P=nt(Me,Qe.normals[0]),m=1;m<Qe.count;++m){var z=nt(Me,Qe.normals[m]);z<P&&(P=z,S=m)}var O=S,q=O+1<Qe.count?O+1:0;V(_n[0].v,Qe.vertices[O]),_n[0].id.setFeatures(0,ne.e_face,O,ne.e_vertex),V(_n[1].v,Qe.vertices[q]),_n[1].id.setFeatures(0,ne.e_face,q,ne.e_vertex),p?(Ht.i1=0,Ht.i2=1,V(Ht.v1,o),V(Ht.v2,a),V(Ht.normal,Nt)):(Ht.i1=1,Ht.i2=0,V(Ht.v1,a),V(Ht.v2,o),Lt(Ht.normal,-1,Nt))}else i.type=Fe.e_faceB,V(_n[0].v,o),_n[0].id.setFeatures(0,ne.e_vertex,T.index,ne.e_face),V(_n[1].v,a),_n[1].id.setFeatures(0,ne.e_vertex,T.index,ne.e_face),Ht.i1=T.index,Ht.i2=Ht.i1+1<Qe.count?Ht.i1+1:0,V(Ht.v1,Qe.vertices[Ht.i1]),V(Ht.v2,Qe.vertices[Ht.i2]),V(Ht.normal,Qe.normals[Ht.i1]);ri(Ht.sideNormal1,Ht.normal.y,-Ht.normal.x),ri(Ht.sideNormal2,-Ht.sideNormal1.x,-Ht.sideNormal1.y),Ht.sideOffset1=nt(Ht.sideNormal1,Ht.v1),Ht.sideOffset2=nt(Ht.sideNormal2,Ht.v2),ll[0].recycle(),ll[1].recycle(),vs[0].recycle(),vs[1].recycle();var Z=ta(ll,_n,Ht.sideNormal1,Ht.sideOffset1,Ht.i1);if(!(Z<ut.maxManifoldPoints)){var D=ta(vs,ll,Ht.sideNormal2,Ht.sideOffset2,Ht.i2);if(!(D<ut.maxManifoldPoints)){T.type==en.e_edgeA?(V(i.localNormal,Ht.normal),V(i.localPoint,Ht.v1)):(V(i.localNormal,n.m_normals[Ht.i1]),V(i.localPoint,n.m_vertices[Ht.i1]));for(var J=0,m=0;m<ut.maxManifoldPoints;++m){var G=nt(Ht.normal,vs[m].v)-nt(Ht.normal,Ht.v1);if(G<=A){var it=i.points[J];T.type==en.e_edgeA?(Jh(it.localPoint,No,vs[m].v),it.id.set(vs[m].id)):(V(it.localPoint,vs[m].v),it.id.set(vs[m].id),it.id.swapFeatures()),++J}}i.pointCount=J}}}}};(function(){function i(t,e){this._refMap={},this._map={},this._xmap={},this._data=[],this._entered=[],this._exited=[],this._key=t,this._listener=e}return i.prototype.update=function(t){if(!Array.isArray(t))throw"Invalid data: "+t;this._entered.length=0,this._exited.length=0,this._data.length=t.length;for(var e=0;e<t.length;e++)if(!(typeof t[e]!="object"||t[e]===null)){var n=t[e],s=this._key(n);this._map[s]?delete this._map[s]:this._entered.push(n),this._data[e]=n,this._xmap[s]=n}for(var s in this._map)this._exited.push(this._map[s]),delete this._map[s];var r=this._map;this._map=this._xmap,this._xmap=r;for(var e=0;e<this._exited.length;e++){var n=this._exited[e],o=this._key(n),a=this._refMap[o];this._listener.exit(n,a),delete this._refMap[o]}for(var e=0;e<this._entered.length;e++){var n=this._entered[e],o=this._key(n),a=this._listener.enter(n);a&&(this._refMap[o]=a)}for(var e=0;e<this._data.length;e++)if(!(typeof t[e]!="object"||t[e]===null)){var n=this._data[e],o=this._key(n),a=this._refMap[o];this._listener.update(n,a)}this._entered.length=0,this._exited.length=0,this._data.length=0},i.prototype.ref=function(t){return this._refMap[this._key(t)]},i})();const Xm=xs;function Kn(i){return i/Xm}function Zr(i){return i*Xm}class ab{constructor(){this.world=oa({gravity:g(0,-Kn(980))}),this._terrainBodies=[];const t=Kn(15);this.ballBody=this.world.createBody({type:"dynamic",position:g(0,0),bullet:!0,linearDamping:0}),this.ballBody.createFixture(Rs(t),{density:1,friction:.55,restitution:.18}),this._contactEvents=[],this.world.on("begin-contact",e=>{const n=e.getFixtureA(),s=e.getFixtureB(),r=n.getBody(),o=s.getBody();if(r===this.ballBody||o===this.ballBody){const a=this.ballBody.getLinearVelocity();this._contactEvents.push({type:"land",vx:Zr(a.x),vy:Zr(a.y)})}})}setGravity(t){this.world.setGravity(g(0,-Kn(t)))}addTerrain(t){this.removeTerrain(t);const e=this.world.createBody({type:"static"}),n=this._buildTerrainSegments(t),s=t.biome==="cloud"?.72:t.biome==="meteor"?.04:.1,r=t.biome==="cloud"?.38:t.biome==="meteor"?.68:.55;for(const o of n)e.createFixture(ea(o.map(a=>g(Kn(a.x),Kn(a.y))),!1),{friction:r,restitution:s});return e.setUserData(t),this._terrainBodies.push({terrain:t,body:e}),e}_buildTerrainSegments(t){const e=[];let n=[];const s=(r,o)=>{if(!t.damageZones?.length)return!1;const a=(r.x+o.x)/2;return t.damageZones.some(l=>a>=l.left&&a<=l.right)};for(let r=0;r<t.points.length-1;r++){const o=t.points[r],a=t.points[r+1];if(s(o,a)){n.length>=2&&e.push(n),n=[];continue}n.length===0&&n.push(o),n.push(a)}return n.length>=2&&e.push(n),e}removeTerrain(t){const e=this._terrainBodies.findIndex(n=>n.terrain===t);e!==-1&&(this.world.destroyBody(this._terrainBodies[e].body),this._terrainBodies.splice(e,1))}removeAllTerrain(){for(const{body:t}of this._terrainBodies)this.world.destroyBody(t);this._terrainBodies=[]}setArmadilloPos(t,e){this.ballBody.setPosition(g(Kn(t),Kn(e))),this.ballBody.setLinearVelocity(g(0,0)),this.ballBody.setAngularVelocity(0),this.ballBody.setAwake(!0)}setArmadilloVelocity(t,e){this.ballBody.setLinearVelocity(g(Kn(t),Kn(e))),this.ballBody.setAwake(!0)}step(t){this._contactEvents=[],this.world.step(t,8,3)}getArmadilloState(){const t=this.ballBody.getPosition(),e=this.ballBody.getLinearVelocity(),n=this.ballBody.getAngle();return{x:Zr(t.x),y:Zr(t.y),vx:Zr(e.x),vy:Zr(e.y),angle:n}}get contactEvents(){return this._contactEvents}isGrounded(){for(let t=this.ballBody.getContactList();t;t=t.next)if(t.contact.isTouching())return!0;return!1}}const lb=`// 크레이터 마크 버텍스 셰이더
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,cb=`// 크레이터 프래그먼트 셰이더
// UV 중심 기준 타원형 크레이터 + 가장자리 밝은 흙색 링
precision mediump float;

varying vec2 vUv;
uniform float uDepth;    // 0~2, 파괴 깊이
uniform float uTime;     // 생성 이후 경과 시간 (애니메이션용)
uniform float uScale;    // 반지름 스케일 (radius/baseRadius)

// 간단한 FBM 노이즈로 가장자리를 울퉁불퉁하게
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  // UV를 -1~1 로 리매핑, y축 크기 보정(타원)
  vec2 uv = (vUv - 0.5) * 2.0;
  uv.y /= (0.32 + uDepth * 0.08);

  float dist = length(uv);

  // 노이즈로 가장자리 요철
  float n = noise(uv * 3.5 + uTime * 0.3) * 0.18;
  float edge = 1.0 - smoothstep(0.65 + n, 1.0 + n * 0.5, dist);
  float inner = 1.0 - smoothstep(0.0, 0.62 + n, dist);

  // 색상: 내부 어두운 흙 → 가장자리 밝은 흙
  vec3 darkSoil  = vec3(0.18, 0.11, 0.08);
  vec3 brightSoil = vec3(0.55, 0.38, 0.28);
  vec3 col = mix(brightSoil, darkSoil, inner * 0.85);

  // 생성 직후 flash (uTime < 0.15)
  float flash = max(0.0, 1.0 - uTime * 8.0);
  col = mix(col, vec3(1.0, 0.85, 0.4), flash * 0.55);

  float alpha = edge * (0.88 + uDepth * 0.08);
  gl_FragColor = vec4(col, alpha);
}
`,so=64,Ym=42,Id=720,hb=2600,ub=10500,$m=Math.tan(wt.degToRad(4)),fb=.64;function Jm(i){return i>=ub?"meteor":i>=hb?"cloud":"earth"}function db(i){return i==="cloud"?{soil:16251903,grass:14218495,boost:16773020,boostLine:16777215,ridge:16777215,bottomScale:.72}:i==="meteor"?{soil:5001050,grass:8154978,boost:13809253,boostLine:16766346,ridge:13280362,bottomScale:.95}:{soil:7162945,grass:6732650,boost:14020467,boostLine:16775078,ridge:12968357,bottomScale:1}}const hl=[{x:330,y:0,w:520,depth:28,rimH:18,shapeType:"bowl",softBreak:!0},{x:610,y:70,w:480,depth:25,rimH:16,shapeType:"plateau",softBreak:!0},{x:895,y:-45,w:500,depth:32,rimH:18,shapeType:"wave",softBreak:!0},{x:1185,y:130,w:470,depth:30,rimH:20,shapeType:"ramp",softBreak:!0},{x:1475,y:15,w:490,depth:34,rimH:20,shapeType:"dip",softBreak:!0},{x:1770,y:225,w:460,depth:29,rimH:18,shapeType:"crest",softBreak:!0},{x:2070,y:-15,w:475,depth:36,rimH:21,shapeType:"double",softBreak:!0},{x:2370,y:300,w:450,depth:31,rimH:20,shapeType:"saddle",softBreak:!0},{x:2670,y:105,w:480,depth:35,rimH:22,shapeType:"bowl",softBreak:!0},{x:2975,y:455,w:450,depth:30,rimH:21,shapeType:"plateau",softBreak:!0},{x:3280,y:205,w:470,depth:38,rimH:22,shapeType:"wave",softBreak:!0},{x:3590,y:605,w:440,depth:34,rimH:23,shapeType:"ramp"},{x:4115,y:340,w:440,depth:40,rimH:24,shapeType:"dip"},{x:4430,y:790,w:420,depth:35,rimH:24,shapeType:"crest"},{x:4745,y:500,w:435,depth:42,rimH:25,shapeType:"double"},{x:5060,y:960,w:410,depth:38,rimH:25,shapeType:"saddle"},{x:5380,y:680,w:430,depth:41,rimH:26,shapeType:"bowl"},{x:5700,y:1180,w:410,depth:39,rimH:25,shapeType:"plateau"},{x:6020,y:860,w:425,depth:44,rimH:27,shapeType:"wave"},{x:6340,y:1430,w:405,depth:40,rimH:26,shapeType:"ramp"},{x:6665,y:1080,w:430,depth:46,rimH:28,shapeType:"dip"},{x:6990,y:1690,w:410,depth:42,rimH:27,shapeType:"crest"},{x:7320,y:1300,w:425,depth:48,rimH:29,shapeType:"double"},{x:7650,y:1950,w:410,depth:43,rimH:28,shapeType:"saddle"}];function Ld({x:i,y:t,w:e,depth:n,rimH:s,shapeType:r="bowl",softBreak:o=!1,biome:a=Jm(t)}){const l=i-e/2,c=i+e/2,h=db(a);let u;if(r==="ramp"){const D=t,J=t+n+s;u=[new I(l,D,0),new I(l+e*.35,D+n*.1,0),new I(l+e*.65,D+n*.72,0),new I(c,J,0)]}else if(r==="plateau"){const D=t;u=[new I(l,D+s*.9,0),new I(l+e*.18,D+n*.18,0),new I(l+e*.42,D+n*.08,0),new I(l+e*.68,D+n*.1,0),new I(c-e*.16,D+n*.2,0),new I(c,D+s*.8,0)]}else if(r==="dip"){const D=t+n+s;u=[new I(l,D*.96+t*.04,0),new I(l+e*.18,t+n*.35,0),new I(l+e*.46,t-n*.12,0),new I(l+e*.72,t+n*.28,0),new I(c,t+n*.72,0)]}else if(r==="double"){const D=t+n+s;u=[new I(l,D,0),new I(l+e*.18,t+n*.08,0),new I(l+e*.36,t+n*.52,0),new I(l+e*.55,t,0),new I(l+e*.76,t+n*.42,0),new I(c,D*.92+t*.08,0)]}else if(r==="crest"){const D=t;u=[new I(l,D+n*.18,0),new I(l+e*.24,D+n*.62,0),new I(l+e*.5,D+n+s,0),new I(l+e*.76,D+n*.54,0),new I(c,D+n*.12,0)]}else if(r==="saddle"){const D=t;u=[new I(l,D+n*.64,0),new I(l+e*.18,D+n*.18,0),new I(l+e*.42,D+n*.36,0),new I(l+e*.62,D+n+s,0),new I(c-e*.12,D+n*.24,0),new I(c,D+n*.42,0)]}else if(r==="wave"){const D=t,J=t+n*.35,G=t+n+s;u=[new I(l,D+s*.6,0),new I(l+e*.25,D,0),new I(l+e*.5,J,0),new I(c-e*.22,G-s*.2,0),new I(c,G,0)]}else{const D=t+n+s,J=t+n*.18,G=t;u=[new I(l,D,0),new I(l+e*.22,J,0),new I(i,G,0),new I(c-e*.22,J,0),new I(c,D,0)]}const d=new um(u,!1,"centripetal",.5).getPoints(72).map(D=>new at(D.x,D.y)),_=r==="bowl"?t:Math.min(...d.map(D=>D.y)),v=Math.min(...d.map(D=>D.y)),p=Math.max(...d.map(D=>D.y)),m=v-so*h.bottomScale,A=d[0],y=d[d.length-1],x=Math.min(e*.16,so*.92,58),C=so*.5,E=m-Math.min(22,so*.28),w=new hr;w.moveTo(A.x,A.y);for(let D=1;D<d.length;D++)w.lineTo(d[D].x,d[D].y);w.quadraticCurveTo(c,y.y-C*.35,c,y.y-C),w.quadraticCurveTo(c,m,c-x,m),w.bezierCurveTo(i+e*.28,E,i-e*.28,E,l+x,m),w.quadraticCurveTo(l,m,l,A.y-C),w.quadraticCurveTo(l,A.y-C*.35,A.x,A.y),w.closePath();const B=new At(new fr(w,16),new Wt({color:h.soil,side:we}));B.position.z=-.02;const T=new hr;T.moveTo(d[0].x,d[0].y);for(let D=1;D<d.length;D++)T.lineTo(d[D].x,d[D].y);for(let D=d.length-1;D>=0;D--){const J=d[D],G=Math.min(D,d.length-1-D)/8,it=wt.clamp(G,.35,1);T.lineTo(J.x,J.y-14*it)}T.closePath();const S=new At(new fr(T,16),new Wt({color:h.grass,side:we}));S.position.z=.02;const P=new zu(Km(d,[]),new fo({color:h.ridge}));P.position.z=.04;const z=new At(Qm(d,[]),new Wt({color:h.boost,transparent:!0,opacity:a==="meteor"?.66:.78,depthTest:!1,depthWrite:!1,side:we}));z.position.z=.038;const O=new zu(jm(d,[]),new fo({color:h.boostLine,transparent:!0,opacity:.92,depthTest:!1}));O.position.z=.072;const q=new At(tp(),new Wt({color:16773494,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:we}));q.position.z=.11;const Z=new Pi;return Z.add(B,S,z,P,O,q),{mesh:Z,points:d,destroyed:!1,damageZones:[],damageMarks:[],softBreak:o,biome:a,visuals:{soil:B,grass:S,ridge:P,boostRibbon:z,boostLine:O,boostMarkers:q},visualMeta:{left:l,right:c,x:i,w:e,bottomY:m,bottomCurveY:E,cornerR:x,sideDrop:C,leftTop:A,rightTop:y},bounds:{left:l,right:c,top:p,bottom:E},bowlCenter:i,bowlFloor:_}}function mb(i){const{soil:t,grass:e,ridge:n,boostRibbon:s,boostLine:r,boostMarkers:o}=i.visuals;t.geometry.dispose(),t.geometry=new fr(pb(i),18),e.geometry.dispose(),e.geometry=new fr(vb(i),12),n.geometry.dispose(),n.geometry=Km(i.points,i.damageZones),s.geometry.dispose(),s.geometry=Qm(i.points,i.damageZones),r.geometry.dispose(),r.geometry=jm(i.points,i.damageZones),o.geometry.dispose(),o.geometry=tp(i.points,i.damageZones)}function pb(i){const{left:t,right:e,x:n,w:s,bottomY:r,bottomCurveY:o,cornerR:a,sideDrop:l,leftTop:c,rightTop:h}=i.visualMeta,u=aa(i);if(u.length>0){const d=[];let _=i.bounds.left;for(const v of u){const p=wt.clamp(v.left,i.bounds.left,i.bounds.right),m=wt.clamp(v.right,i.bounds.left,i.bounds.right);p-_>8&&d.push(Dd(i,_,p)),_=Math.max(_,m)}return i.bounds.right-_>8&&d.push(Dd(i,_,i.bounds.right)),d.filter(Boolean)}const f=new hr;return _b(f,i),f.quadraticCurveTo(e,h.y-l*.35,e,h.y-l),f.quadraticCurveTo(e,r,e-a,r),f.bezierCurveTo(n+s*.28,o,n-s*.28,o,t+a,r),f.quadraticCurveTo(t,r,t,c.y-l),f.quadraticCurveTo(t,c.y-l*.35,c.x,c.y),f.closePath(),[f]}function _b(i,t){const e=t.points;i.moveTo(e[0].x,e[0].y);for(let n=1;n<e.length;n++)i.lineTo(e[n].x,e[n].y)}function Dd(i,t,e){const{bottomY:n}=i.visualMeta,s=Zm(i,t,e);if(s.length<2)return null;const r=Math.min(24,Math.max(12,(e-t)*.16)),o=n-4,a=new hr;a.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)a.lineTo(s[h].x,s[h].y);const l=s[s.length-1],c=s[0];return a.quadraticCurveTo(e+r*.18,l.y-so*.38,e-r,o),a.lineTo(t+r,o),a.quadraticCurveTo(t-r*.18,c.y-so*.38,c.x,c.y),a.closePath(),a}function vb(i){const t=aa(i),e=[];let n=i.bounds.left;for(const s of t){const r=wt.clamp(s.left,i.bounds.left,i.bounds.right),o=wt.clamp(s.right,i.bounds.left,i.bounds.right);r-n>8&&e.push([n,r]),n=Math.max(n,o)}return i.bounds.right-n>8&&e.push([n,i.bounds.right]),e.map(([s,r])=>gb(i,s,r)).filter(Boolean)}function gb(i,t,e){const n=Zm(i,t,e);if(n.length<2)return null;const s=new hr;s.moveTo(n[0].x,n[0].y);for(let r=1;r<n.length;r++)s.lineTo(n[r].x,n[r].y);for(let r=n.length-1;r>=0;r--){const o=n[r],a=Math.min(r,n.length-1-r)/8,l=wt.clamp(a,.35,1);s.lineTo(o.x,o.y-14*l)}return s.closePath(),s}function Zm(i,t,e){return[new at(t,vn(i,t)),...i.points.filter(s=>s.x>t&&s.x<e),new at(e,vn(i,e))]}function Km(i,t){const e=aa({damageZones:t,bounds:{left:-1/0,right:1/0}}),n=[];for(let s=0;s<i.length-1;s++){const r=i[s],o=i[s+1],a=(r.x+o.x)/2;e.some(l=>a>=l.left&&a<=l.right)||n.push(new I(r.x,r.y+1,0),new I(o.x,o.y+1,0))}return new je().setFromPoints(n)}function jm(i,t){const e=aa({damageZones:t,bounds:{left:-1/0,right:1/0}}),n=ep(i),s=[];let r=0;for(let o=0;o<i.length-1;o++){const a=i[o],l=i[o+1],c=l.x-a.x;if(c<=0)continue;r-=c;const h=(a.x+l.x)/2;if(e.some(x=>h>=x.left&&h<=x.right))continue;const u=(l.y-a.y)/c,f=(a.y+l.y)/2;if(u<$m||f<n||r>0)continue;const d=Math.atan2(l.y-a.y,c),_=new at(Math.cos(d),Math.sin(d)),v=new at(-_.y,_.x),p=new at(h,f).addScaledVector(v,7.5),m=Math.min(21,c*.48),A=p.clone().addScaledVector(_,-m),y=p.clone().addScaledVector(_,m);s.push(new I(A.x,A.y,0),new I(y.x,y.y,0)),r=28}return new je().setFromPoints(s)}function Qm(i,t){const e=aa({damageZones:t,bounds:{left:-1/0,right:1/0}}),n=ep(i),s=[],r=[];for(let a=0;a<i.length-1;a++){const l=i[a],c=i[a+1],h=c.x-l.x;if(h<=0)continue;const u=(l.x+c.x)/2;if(e.some(p=>u>=p.left&&u<=p.right)||(c.y-l.y)/h<$m||(l.y+c.y)/2<n)continue;const d=s.length/3,_=Ud(i,a),v=Ud(i,a+1);s.push(l.x,l.y+2.3,0,c.x,c.y+2.3,0,c.x,c.y-v,0,l.x,l.y-_,0),r.push(d,d+1,d+2,d,d+2,d+3)}const o=new je;return o.setAttribute("position",new He(s,3)),o.setIndex(r),o}function tp(i,t){const e=new je;return e.setAttribute("position",new He([],3)),e}function Ud(i,t){const e=i[Math.max(0,t-1)],n=i[Math.min(i.length-1,t+1)],s=Math.abs((n.y-e.y)/Math.max(1,n.x-e.x));return wt.clamp(13+s*14,13,24)}function ep(i){let t=1/0,e=-1/0;for(const n of i)t=Math.min(t,n.y),e=Math.max(e,n.y);return wt.lerp(t,e,fb)}function aa(i){const t=i.bounds??{left:-1/0,right:1/0},e=(i.damageZones??[]).map(s=>({...s,left:wt.clamp(s.left,t.left,t.right),right:wt.clamp(s.right,t.left,t.right)})).filter(s=>s.right>s.left).sort((s,r)=>s.left-r.left),n=[];for(const s of e){const r=n[n.length-1];if(!r||s.left>r.right){n.push({...s});continue}r.right=Math.max(r.right,s.right),r.radius=Math.max(r.radius,s.radius),r.depth=Math.max(r.depth,s.depth),r.x=(r.left+r.right)/2}return n}function Nd(i,t,e=Ym,n=1){const s=wt.clamp(t,i.bounds.left,i.bounds.right),r=vn(i,s),o={x:s,radius:e,depth:n,left:s-e,right:s+e};i.damageZones.push(o),mb(i);const{chunks:a}=Ab(e,n);for(const l of a)l.x=s+l.mesh.userData.offsetX,l.y=r+l.mesh.userData.offsetY,l.mesh.position.set(l.x,l.y,.18),i.mesh.add(l.mesh);i.animChunks=i.animChunks??[],i.animChunks.push(...a);for(const l of i.mesh.children)l.userData.damageable&&Math.abs(l.position.x-s)<=e*.85&&(l.visible=!1);return{zone:o,chunks:a}}function Fo(i,t,e=0){return i.damageZones.some(n=>t>=n.left-e&&t<=n.right+e)}function yb(i,t){if(!i.animChunks)return;const e=680,n=[];for(const s of i.animChunks){if(s.life-=t,s.life<=0){i.mesh.remove(s.mesh);continue}n.push(s),s.vy-=e*t,s.x+=s.vx*t,s.y+=s.vy*t,s.rot+=s.rotSpeed*t;const r=s.life/s.maxLife;s.mesh.position.set(s.x,s.y,.18),s.mesh.rotation.z=s.rot,s.mesh.scale.setScalar(r*.9+.1),s.mesh.material?.opacity!==void 0&&(s.mesh.material.opacity=Math.min(1,r*1.4))}i.animChunks=n}function xb(i,t){for(const e of i.damageMarks){const n=e.userData.craterMat;n&&(n.uniforms.uTime.value+=t)}}function Ab(i,t){const e=new Pi,n=new Wt({color:722693,transparent:!0,opacity:.88,depthWrite:!1,side:we}),s=new At(new Be(i*(.64+t*.08),48),n);s.scale.y=.34+t*.06,s.position.set(0,-i*.06,.035),e.add(s);const r=new Wt({color:1314057,transparent:!0,opacity:.72,depthWrite:!1,side:we}),o=new At(new Li(i*(1.08+t*.18),i*(.72+t*.2)),r);o.position.set(0,-i*(.28+t*.04),.02),e.add(o);const a=new ei({vertexShader:lb,fragmentShader:cb,uniforms:{uDepth:{value:Math.min(t,2)},uTime:{value:0},uScale:{value:i/Ym}},transparent:!0,depthWrite:!1,side:we}),l=i*(.46+t*.08),c=new At(new Li(i*2.35,l*2.25,4,4),a);c.position.z=.05,e.add(c),e.userData.craterMat=a;const h=new Wt({color:11108959,transparent:!0,opacity:.88,depthWrite:!1,side:we}),u=new At(new Ms(i*.56,i*(.76+t*.05),48),h);u.scale.y=.36+t*.05,u.position.set(0,0,.075),e.add(u);const f=[],d=10+Math.floor(t*8);for(let _=0;_<d;_++){const v=_/d*Math.PI*2+(Math.random()-.5)*.4,p=6+Math.random()*10,m=5+Math.random()*8,A=new At(new Li(p,m),new Wt({color:_%3===0?12364452:7162945,transparent:!0,opacity:1,side:we})),y=i*(1.4+Math.random()*1.8),x=Math.cos(v)*y+(Math.random()-.5)*60,C=Math.abs(Math.sin(v))*y*.7+80+Math.random()*120,E=Math.cos(v)*i*.35,w=4;A.userData.offsetX=E,A.userData.offsetY=w;const B=.55+Math.random()*.55;f.push({mesh:A,x:0,y:0,vx:x,vy:C,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*14,life:B,maxLife:B})}return{mark:e,chunks:f}}const Fd=["bowl","plateau","wave","ramp","dip","crest","double","saddle","plateau","bowl","crest","wave"];function Mb(i,t){const e=Math.min(1,t/70),n=Math.round(wt.lerp(300,380,Math.random())+Math.sin(t*1.37)*18),s=Math.round(wt.lerp(24,48,Math.random())+e*8),r=Math.round(wt.lerp(14,30,Math.random())+e*5),o=wt.lerp(18,24,e),a=wt.lerp(36,58,e),l=Math.round(wt.lerp(o,a,Math.random())),h=i.bounds.right+l+n/2,u=wt.lerp(Id*.08,Id*.17,e),f=wt.lerp(-u,u,Math.random()),d=wt.lerp(18,44,e),_=Math.max(-360,i.bowlFloor+f+d),v=Jm(_);let p=Fd[(t+Math.floor(Math.random()*3))%Fd.length];return v==="cloud"?p=["plateau","bowl","wave","double"][t%4]:v==="meteor"&&(p=["crest","saddle","dip","wave"][t%4]),{x:h,y:_,w:n,depth:s,rimH:r,shapeType:p,biome:v}}function vn(i,t){const e=i.points;if(t<=e[0].x)return e[0].y;if(t>=e[e.length-1].x)return e[e.length-1].y;for(let n=1;n<e.length;n++){const s=e[n-1],r=e[n];if(t>=s.x&&t<=r.x){const o=(t-s.x)/(r.x-s.x);return wt.lerp(s.y,r.y,o)}}return e[e.length-1].y}function Oc(i,t){const e=i.points;let n=1;for(let o=1;o<e.length;o++)Math.abs(e[o].x-t)<Math.abs(e[n].x-t)&&(n=o);const s=e[Math.max(0,n-1)],r=e[Math.min(e.length-1,n+1)];return Math.atan2(r.y-s.y,r.x-s.x)}const Js=1/60,Od=.25,ee=30,zc=1400,ys=-360,Vc=18e3,Sb=.42,Se=new at(-280,0),ul=120,Gc=18,kc=.78,zd=1,bb=8,Tb=5200,wb=wt.degToRad(28),Eb=wt.degToRad(68),Cb=.38,fl=520,Rb=940,Bb=wt.degToRad(4),Pb=wt.degToRad(22),Ib=.42,Lb=.64,Db=.28,Ub=.62,Nb=.86,Fb=760,Ob=.94,zb=26,Vd=new Qt(9362687),Oo=new Qt(5214684),Kr=new Qt(1120838),dl=new Qt(16);class Vb{constructor(){const t=document.getElementById("game-canvas");this.renderer=new cA(t),this.background=new fA(this.renderer),this.postfx=new IM(this.renderer.renderer,this.renderer.scene,this.renderer.camera,this.background.scene,this.background.camera),this.renderer.registerPostFX(this.postfx),this.particleSystem=new UM,this.renderer.add(this.particleSystem.mesh),this.physics=new ab,this.sm=new FM(rt.TITLE),this.time=0,this.accumulator=0,this.lastNow=performance.now(),this.velocity=new at(0,0),this.speedRatio=.75,this.motion={previous:new I,current:new I,render:new I,previousRot:0,currentRot:0,renderRot:0},this.slingDragging=!1,this.pendingSlingStart=null,this.slingPull=new at(0,0),this.slingPower=0,this.slingAngle=Math.PI/4,this.currentIsland=null,this.islandIndex=hl.length,this.scenery=[],this.bestHeightPx=0,this.bestDistancePx=0,this.lastRating="READY",this.stallTime=0,this.trauma=0,this.flashTime=0,this.slowmoTime=0,this.boostButtonPulse=0,this.splashGameOverTimer=0,this.splashStarted=!1,this.bestRecord=this._loadBestRecord(),this.isPaused=!1,this.audio=null,this.ripples=[],this._buildRipplePool(),this.slingSnapTime=0,this.flameTrailCooldown=0,this.camTarget=new at(Se.x,Se.y),this.camPos=new at(Se.x,Se.y),this.ui=document.getElementById("ui-overlay"),this._buildPlaceholderWorld(),this._bindInput(),this.renderer.setCenter(Se.x,Se.y),this.sm.onChange((e,n)=>console.log(`[state] ${e} → ${n}`))}_buildPlaceholderWorld(){this._buildSceneSkyPlane(),this._buildWorldSea(),this._buildScenery(),this.staticIslands=[],this.islands=[],this._buildSling(),this.armadillo=this._createArmadillo(),this.renderer.add(this.armadillo),this._resetRun(),this._syncMotionToArmadillo(),this.maxHeightPx=this.islands[this.islands.length-1].bounds.top+240}_spawnNextIsland(){const t=this.islands[this.islands.length-1],e=this._avoidTerrainOverlap(Mb(t,this.islandIndex),t);this.islandIndex+=1;const n=Ld(e);this.renderer.add(n.mesh),this.islands.push(n),this.physics.addTerrain(n),this.maxHeightPx=Math.max(this.maxHeightPx,n.bounds.top+240)}_avoidTerrainOverlap(t,e){if(!e)return t;const n=e.bounds.right+zb;return t.x-t.w/2>=n?t:{...t,x:n+t.w/2}}_randomizeInitialTerrainSpec(t,e){const n=["bowl","plateau","wave","ramp","dip","crest","double","saddle"],s=e<4;return{...t,x:t.x+(Math.random()-.5)*90,y:t.y+(Math.random()-.5)*(s?90:180),w:Math.round(t.w*wt.lerp(.78,.96,Math.random())),depth:Math.max(20,Math.round(t.depth+(Math.random()-.5)*18)),rimH:Math.max(12,Math.round(t.rimH+(Math.random()-.5)*10)),shapeType:s?t.shapeType:n[Math.floor(Math.random()*n.length)]}}_buildSling(){const t=Se,e=7162945,n=4073251,s=9067071,r=12157535,o=new at(t.x,t.y-74),a=new at(t.x,t.y+4),l=new at(t.x-44,t.y+73),c=new at(t.x+44,t.y+72),h=(E,w,B,T=-.06)=>{const S=w.x-E.x,P=w.y-E.y,z=Math.hypot(S,P),O=new Pi;O.position.set((E.x+w.x)/2,(E.y+w.y)/2,T),O.rotation.z=Math.atan2(P,S)-Math.PI/2;const q=new At(new gn(B*1.08,z,1),new Wt({color:n}));q.position.set(B*.1,-1.5,-.012);const Z=new At(new gn(B,z,1),new Wt({color:e})),D=new At(new Be(B/2,22),new Wt({color:e}));D.position.y=z/2;const J=D.clone();J.position.y=-z/2;const G=new At(new gn(B*.2,z*.76,1),new Wt({color:r,transparent:!0,opacity:.5}));return G.position.set(-B*.22,0,.012),O.add(q,Z,D,J,G),O},u=h(o,a,17,-.07),f=h(a,l,15,-.055),d=h(a,c,15,-.05),_=new At(new gn(42,9,1),new Wt({color:n}));_.position.set(t.x,t.y-79,-.075);const v=new At(new Be(12,28),new Wt({color:s}));v.position.set(t.x,t.y+5,-.035);for(const E of[{x:t.x-6,y:t.y-36,s:4.2},{x:t.x+16,y:t.y+26,s:3.2},{x:t.x-25,y:t.y+42,s:3}]){const w=new At(new Ms(E.s*.45,E.s,18),new Wt({color:n}));w.scale.y=.72,w.rotation.z=.35,w.position.set(E.x,E.y,-.018),this.renderer.add(w)}for(const E of[l,c]){const w=new At(new Be(9.5,24),new Wt({color:n}));w.position.set(E.x,E.y,-.02);const B=new At(new Be(5.7,20),new Wt({color:r}));B.position.set(E.x-1.5,E.y+1.2,-.01),this.renderer.add(w),this.renderer.add(B)}const p=()=>{const E=new je;return E.setAttribute("position",new He(new Array(12).fill(0),3)),E.setIndex([0,1,2,0,2,3]),E},m=new Wt({color:2758418,transparent:!0,opacity:.96,side:we,depthWrite:!1});this.slingBandL=new At(p(),m.clone()),this.slingBandR=new At(p(),m.clone()),this.slingPouch=new At(new Be(13,28),new Wt({color:5911845})),this.slingPouch.scale.set(1.42,.76,1);const A=new At(new Ms(11,13,28),new Wt({color:2758418,transparent:!0,opacity:.75,side:we}));A.scale.copy(this.slingPouch.scale);const y=new At(new Be(4.2,18),new Wt({color:12157535,transparent:!0,opacity:.5}));y.scale.set(1.6,.56,1),y.position.set(-4,3.2,.012),this.slingPouchGroup=new Pi,this.slingPouchGroup.add(this.slingPouch,A,y),this.renderer.add(_),this.renderer.add(u),this.renderer.add(f),this.renderer.add(d),this.renderer.add(v),this.renderer.add(this.slingBandL),this.renderer.add(this.slingBandR),this.renderer.add(this.slingPouchGroup),this._forkTipU={x:l.x,y:l.y},this._forkTipD={x:c.x,y:c.y};const x=new yv({color:16777215,dashSize:8,gapSize:6,opacity:.5,transparent:!0}),C=new je().setFromPoints(Array.from({length:16},(E,w)=>new I(0,0,0)));this.slingGuide=new Cl(C,x),this.slingGuide.visible=!1,this.slingGuide.computeLineDistances(),this.renderer.add(this.slingGuide)}_updateSlingVisuals(){let t=Se.x+this.slingPull.x,e=Se.y+this.slingPull.y;if(this.slingSnapTime>0){const s=1-this.slingSnapTime/.22,r=Math.exp(-s*14),o=Math.sin(s*Math.PI*5),a=28*r*o;t+=a*Math.cos(this.slingAngle+Math.PI),e+=a*Math.sin(this.slingAngle+Math.PI)}const n=(s,r,o,a,l)=>{const c=a-r,h=l-o,u=Math.max(1,Math.hypot(c,h)),f=-h/u,d=c/u,_=5.5+wt.clamp(this.slingPull.length()/ul,0,1)*2.5,v=s.geometry.attributes.position;v.setXYZ(0,r+f*_,o+d*_,.06),v.setXYZ(1,r-f*_,o-d*_,.06),v.setXYZ(2,a-f*_,l-d*_,.06),v.setXYZ(3,a+f*_,l+d*_,.06),v.needsUpdate=!0,s.geometry.computeBoundingSphere()};if(n(this.slingBandL,this._forkTipU.x,this._forkTipU.y,t,e),n(this.slingBandR,this._forkTipD.x,this._forkTipD.y,t,e),this.slingPouchGroup.position.set(t,e,.07),this.slingDragging&&this.slingPower>.05){const s=this.slingPower*zc,r=Math.cos(this.slingAngle)*s,o=Math.sin(this.slingAngle)*s,a=t,l=e+ee/2,c=this.slingGuide.geometry.attributes.position;for(let h=0;h<16;h++){const u=h*.055;c.setXYZ(h,a+r*u,l+o*u-.5*To*u*u,.05)}c.needsUpdate=!0,this.slingGuide.computeLineDistances(),this.slingGuide.visible=!0}else this.slingGuide.visible=!1}_buildRipplePool(){const t=new Wt({color:16777215,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1});for(let e=0;e<4;e++){const n=new At(new Ms(.8,1,32),t.clone());n.visible=!1,n.renderOrder=5,this.renderer.add(n),this.ripples.push({mesh:n,life:0,maxLife:0,x:0,y:0,maxRadius:80})}}_spawnRipple(t,e,n=16777215,s=80,r=.45){const o=this.ripples.find(a=>a.life<=0);o&&(o.x=t,o.y=e,o.life=r,o.maxLife=r,o.maxRadius=s,o.mesh.material.color.set(n),o.mesh.position.set(t,e,.15),o.mesh.visible=!0)}_updateRipples(t){for(const e of this.ripples){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}const n=1-e.life/e.maxLife,s=e.maxRadius*n,r=(1-n)*.7;e.mesh.scale.setScalar(s),e.mesh.material.opacity=r}}_buildScenery(){const t=new At(new Be(58,40),new Wt({color:16774064,transparent:!0,opacity:.85}));this._addScenery(t,.04,270,210,.2);for(const e of[{x:-360,y:-330,scale:1.15,color:3100511,layer:.18},{x:120,y:-360,scale:1.35,color:3497061,layer:.14},{x:620,y:-345,scale:1.05,color:4352873,layer:.2},{x:1180,y:-365,scale:1.25,color:3230811,layer:.16}]){const n=this._createMountain(e.color);n.scale.setScalar(e.scale),this._addScenery(n,e.layer,e.x,e.y,0)}for(const e of[{x:-260,y:180,scale:.85,layer:.32,drift:.9},{x:320,y:250,scale:1.1,layer:.28,drift:.7},{x:900,y:150,scale:.75,layer:.36,drift:1.1}]){const n=this._createCloud();n.scale.setScalar(e.scale),this._addScenery(n,e.layer,e.x,e.y,e.drift)}}_addScenery(t,e,n,s,r){t.position.set(n,s,-20),t.userData={layer:e,baseX:n,baseY:s,drift:r},this.scenery.push(t),this.renderer.add(t)}_createMountain(t){const e=new Pi,n=new Wt({color:t,transparent:!0,opacity:.72,side:we});for(const[s,r,o]of[[-120,220,250],[40,280,320],[210,190,230]]){const a=new hr;a.moveTo(s-r/2,0),a.lineTo(s,o),a.lineTo(s+r/2,0),a.closePath(),e.add(new At(new fr(a),n))}return e}_createCloud(){const t=new Pi,e=new Wt({color:16777215,transparent:!0,opacity:.55});for(const[n,s,r]of[[-28,0,23],[0,12,30],[32,3,24],[58,-2,16]]){const o=new At(new Be(r,24),e);o.position.set(n,s,-21),t.add(o)}return t}_buildWorldSea(){this.worldSea=new Pi;const t=new Wt({color:1415112,transparent:!0,opacity:.88,depthWrite:!1,side:we});this.worldSeaBody=new At(new Li(2400,520),t),this.worldSeaBody.position.set(0,ys-260,-40),this.worldSea.add(this.worldSeaBody);const e=new fo({color:14285823,transparent:!0,opacity:.78,depthTest:!1}),n=new je().setFromPoints(Array.from({length:64},(s,r)=>new I(-1200+r/63*2400,0,0)));this.worldSeaFoam=new Cl(n,e),this.worldSeaFoam.position.set(0,ys,-39),this.worldSea.add(this.worldSeaFoam),this.renderer.add(this.worldSea)}_updateWorldSea(){if(!this.worldSea)return;const t=Math.max(this.renderer.viewWidthPx*1.4,2400);this.worldSeaBody.scale.x=t/2400,this.worldSeaBody.position.x=this.camPos.x,this.worldSeaFoam.position.x=this.camPos.x;const e=this.worldSeaFoam.geometry.attributes.position;for(let n=0;n<e.count;n++){const s=-1200+n/(e.count-1)*2400,r=Math.sin(this.time*1.8+n*.42)*5;e.setXYZ(n,s,r,0)}e.needsUpdate=!0}_buildSceneSkyPlane(){this.sceneSkyMaterial=new ei({vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        uniform vec3 uBottom;
        uniform vec3 uTop;
        uniform float uSeaVis;
        void main() {
          float t = smoothstep(0.0, 1.0, vUv.y);
          vec3 col = mix(uBottom, uTop, t);
          float sea = (1.0 - smoothstep(0.16, 0.30, vUv.y)) * uSeaVis;
          vec3 seaCol = mix(vec3(0.06, 0.48, 0.72), vec3(0.16, 0.70, 0.88), smoothstep(0.0, 0.26, vUv.y));
          col = mix(col, seaCol, sea);
          float foam = (1.0 - smoothstep(0.012, 0.026, abs(vUv.y - 0.285))) * uSeaVis;
          col += vec3(0.65, 0.95, 1.0) * foam * 0.38;
          gl_FragColor = vec4(col, 1.0);
        }
      `,uniforms:{uBottom:{value:new Qt(9362687)},uTop:{value:new Qt(5214684)},uSeaVis:{value:1}},depthTest:!1,depthWrite:!1}),this.sceneSkyPlane=new At(new Li(1,1),this.sceneSkyMaterial),this.sceneSkyPlane.position.z=-900,this.sceneSkyPlane.renderOrder=-1e4,this.renderer.add(this.sceneSkyPlane)}_updateSceneSkyPlane(t){if(!this.sceneSkyPlane)return;const e=new Qt,n=new Qt;if(t<.34){const s=wt.smoothstep(t,.04,.34);e.copy(Vd).lerp(Oo,s*.65),n.copy(Oo).lerp(Kr,s*.35)}else if(t<.68){const s=wt.smoothstep(t,.34,.68);e.copy(Oo).lerp(Kr,s),n.copy(Kr).lerp(dl,s*.45)}else{const s=wt.smoothstep(t,.68,.9);e.copy(Kr).lerp(dl,s),n.copy(dl)}this.sceneSkyMaterial.uniforms.uBottom.value.copy(e),this.sceneSkyMaterial.uniforms.uTop.value.copy(n),this.sceneSkyMaterial.uniforms.uSeaVis.value=1-wt.smoothstep(t,.06,.26),this.sceneSkyPlane.position.x=this.camPos.x,this.sceneSkyPlane.position.y=this.camPos.y,this.sceneSkyPlane.scale.set(this.renderer.viewWidthPx*1.08,this.renderer.viewHeightPx*1.08,1)}_createArmadillo(){const t=new Pi,e=new Wt({color:9268835}),n=new Wt({color:5125166}),s=new Wt({color:13214335}),r=new Wt({color:11567976}),o=new Wt({color:16740419,transparent:!0,opacity:.42,side:we}),a=new At(new Be(17,64),e);a.scale.set(1,1,1),a.position.set(0,0,.07);const l=new At(new Be(9.5,36),s);l.scale.set(.92,.52,1),l.rotation.z=-.72,l.position.set(3.8,-6.8,.08);const c=new At(new Ms(15.1,17.2,56),new Wt({color:4073251,transparent:!0,opacity:.55,side:we}));c.scale.set(1,1,1),c.position.z=.09;const h=new At(new Ms(12.8,17.4,56),o);h.scale.set(1,1,1),h.position.z=.1;const u=new Pi;for(let w=-2;w<=3;w++){const B=new At(new gn(2.2,28-Math.abs(w-.4)*2.3,1),n);B.position.set(w*4.3-1,0,.11),B.rotation.z=w*.24,B.scale.x=w===0?1.15:1,u.add(B)}const f=new At(new Be(6.6,32),r);f.scale.set(1.02,.78,1),f.position.set(10.8,-2.5,.12),f.rotation.z=-.45;const d=new At(new Be(4.6,24),r);d.scale.set(1.18,.48,1),d.position.set(15.2,-5.1,.13),d.rotation.z=-.28;const _=new At(new Be(1.5,16),n);_.position.set(18.8,-6.3,.15);const v=new At(new Be(2.7,16),n);v.scale.set(.82,1.05,1),v.position.set(8.6,2.8,.12),v.rotation.z=-.2;const p=new At(new Be(1.15,12),new Wt({color:1118481}));p.position.set(13.4,-1.4,.16);const m=new At(new gn(10,2.2,1),n);m.position.set(-13.5,8.8,.08),m.rotation.z=.58;const A=new At(new Be(2.2,12),n);A.position.set(-17.5,11.2,.09);const y=new Wt({color:3351068}),x=new At(new Be(2.8,16),y);x.scale.set(1.45,.48,1),x.position.set(-3.8,-14.1,.1);const C=x.clone();C.position.set(7.2,-12.8,.1);const E=new At(new Be(3.8,24),new Wt({color:16777215,transparent:!0,opacity:.28}));return E.scale.set(1.35,.72,1),E.position.set(-6.6,6.6,.13),t.add(m,A,a,l,u,c,h,f,d,v,p,_,x,C,E),this.armadilloBody=a,this.armadilloShell=a,this.armadilloBodyMat=h.material,this.armadilloShellMat=h.material,this.armadilloShellBaseMat=a.material,t}_setArmadilloColor(t){this.armadilloBodyMat&&this.armadilloBodyMat.color.set(t),this.armadilloBodyMat&&(this.armadilloBodyMat.opacity=t===16717636?.28:.5)}_setArmadilloSprite(t){}_bindInput(){const t=e=>{const n=e.target instanceof Element?e.target.closest("[data-action]"):null;return n?(e.preventDefault(),e.stopPropagation(),this._ensureAudio(),n.dataset.action==="pause"&&this._togglePause(),n.dataset.action==="restart"&&this._restartToTitle(),n.dataset.action==="boost"&&(this._pulseBoostButton(),this._handleTap("pointer")),!0):!1};window.addEventListener("pointerdown",e=>{t(e)||(e.preventDefault(),this._ensureAudio(),this._handlePointerDown(e.clientX,e.clientY))},{passive:!1}),window.addEventListener("pointermove",e=>{!this.slingDragging&&!this.pendingSlingStart||(e.preventDefault(),this._handlePointerMove(e.clientX,e.clientY))},{passive:!1}),window.addEventListener("pointerup",e=>{if(this.pendingSlingStart){e.preventDefault(),this.pendingSlingStart=null;return}if(this.slingDragging){e.preventDefault(),this._handlePointerRelease();return}this._handleBoostRelease("pointer")},{passive:!1}),window.addEventListener("pointercancel",()=>{this.slingDragging=!1,this.pendingSlingStart=null,this.slingPull.set(0,0)}),window.addEventListener("keydown",e=>{if(!e.repeat){if(e.code==="Space"){if(e.preventDefault(),this.sm.is(rt.TITLE)){e.stopImmediatePropagation();return}this._ensureAudio(),this._pulseBoostButton(),this._handleKeyboardPress();return}e.code==="Escape"&&(e.preventDefault(),this._togglePause())}},{capture:!0}),window.addEventListener("keyup",e=>{if(e.code==="Space"){if(e.preventDefault(),this.sm.is(rt.TITLE)){e.stopImmediatePropagation();return}this._handleBoostRelease("keyboard")}},{capture:!0})}_screenToWorld(t,e){const s=this.renderer.renderer.domElement.getBoundingClientRect(),r=(t-s.left)/s.width*2-1,o=-((e-s.top)/s.height*2-1),a=this.renderer.camera,l=(a.right-a.left)/2,c=(a.top-a.bottom)/2;return new at(this.camPos.x+r*l,this.camPos.y+o*c)}_handlePointerDown(t,e){if(!this.isPaused){if(this.sm.is(rt.TITLE)){this.pendingSlingStart={x:t,y:e};return}if(this.sm.is(rt.GAMEOVER)){this._resetRun(),this.sm.transition(rt.SLINGING);return}if(this.sm.is(rt.SLINGING)){this.slingDragging=!0,this._handlePointerMove(t,e);return}if(this.sm.is(rt.ROLLING)){this._launchFromIsland("pointer");return}this.sm.is(rt.FLYING)||this.sm.is(rt.FALLING)}}_handlePointerMove(t,e){if(this.pendingSlingStart&&this.sm.is(rt.TITLE)){const o=t-this.pendingSlingStart.x,a=e-this.pendingSlingStart.y;if(Math.hypot(o,a)<bb)return;this.pendingSlingStart=null,this._resetRun(),this.sm.transition(rt.SLINGING),this.slingDragging=!0}if(!this.slingDragging||!this.sm.is(rt.SLINGING))return;const n=this._screenToWorld(t,e),s=new at(n.x-Se.x,n.y-Se.y),r=Math.min(s.length(),ul);s.length()>.001&&s.normalize().multiplyScalar(r),this.slingPull.copy(s),r>Gc?(this.slingAngle=Math.atan2(-s.y,-s.x),this.slingPower=wt.lerp(kc,zd,(r-Gc)/(ul-Gc))):this.slingPower=0,this.armadillo.position.set(Se.x+this.slingPull.x,Se.y+this.slingPull.y+ee/2,0),this._syncMotionToArmadillo(),this._updateSlingVisuals()}_handlePointerRelease(){if(this.slingDragging&&(this.slingDragging=!1,!!this.sm.is(rt.SLINGING))){if(this.slingPower<.05){this.slingPull.set(0,0);return}this._launchFromSling()}}_handleBoostRelease(t="pointer"){this._handleTap(t)}_pulseBoostButton(){this.boostButtonPulse=.16}_handleTap(t="pointer"){if(!this.isPaused&&(this._ensureAudio(),!this.sm.is(rt.TITLE))){if(this.sm.is(rt.ROLLING)){this._launchFromIsland(t);return}if(this.sm.is(rt.GAMEOVER)){this._resetRun(),this.sm.transition(rt.SLINGING);return}}}_handleKeyboardPress(){if(!this.isPaused&&(this._ensureAudio(),!this.sm.is(rt.TITLE))){if(this.sm.is(rt.GAMEOVER)){this._resetRun(),this.sm.transition(rt.SLINGING);return}this.sm.is(rt.SLINGING)||this.sm.is(rt.ROLLING)&&this._launchFromIsland("keyboard")}}_syncMotionToArmadillo(){this.armadillo&&(this.motion.previous.copy(this.armadillo.position),this.motion.current.copy(this.armadillo.position),this.motion.render.copy(this.armadillo.position),this.motion.previousRot=this.armadillo.rotation.z,this.motion.currentRot=this.armadillo.rotation.z,this.motion.renderRot=this.armadillo.rotation.z)}_beginFixedStep(){this.armadillo&&(this.armadillo.position.copy(this.motion.current),this.armadillo.rotation.z=this.motion.currentRot,this.motion.previous.copy(this.motion.current),this.motion.previousRot=this.motion.currentRot)}_endFixedStep(){this.armadillo&&(this.motion.current.copy(this.armadillo.position),this.motion.currentRot=this.armadillo.rotation.z)}_applyMotionInterpolation(t){if(!this.armadillo)return this.motion.render;this.motion.render.lerpVectors(this.motion.previous,this.motion.current,t);const e=this._shortestAngleDelta(this.motion.previousRot,this.motion.currentRot);return this.motion.renderRot=this.motion.previousRot+e*t,this.armadillo.position.copy(this.motion.render),this.armadillo.rotation.z=this.motion.renderRot,this.motion.render}_shortestAngleDelta(t,e){return Math.atan2(Math.sin(e-t),Math.cos(e-t))}_resetRun(){this.velocity.set(0,0),this.speedRatio=.75,this.slingDragging=!1,this.pendingSlingStart=null,this.slingPull.set(0,0),this.slingPower=0,this.slingAngle=Math.PI/4,this.currentIsland=null,this.physics.setGravity(To),this._restoreTerrain(),this._clearParticles(),this.bestHeightPx=0,this.bestDistancePx=0,this.lastRating="READY",this.stallTime=0,this.trauma=0,this.flashTime=0,this.slowmoTime=0,this.boostButtonPulse=0,this.splashGameOverTimer=0,this.splashStarted=!1,this.isPaused=!1,this.armadillo.visible=!0,this.armadillo.position.set(Se.x,Se.y+ee/2,0),this.armadillo.rotation.z=0,this._setArmadilloColor(16717636),this._updateSlingVisuals(),this._syncMotionToArmadillo(),this.sm.is(rt.GAMEOVER)&&this.sm.transition(rt.TITLE)}_restartToTitle(){this.velocity.set(0,0),this.speedRatio=.75,this.slingDragging=!1,this.pendingSlingStart=null,this.slingPull.set(0,0),this.slingPower=0,this.slingAngle=Math.PI/4,this.currentIsland=null,this.physics.setGravity(To),this._restoreTerrain(),this._clearParticles(),this.bestHeightPx=0,this.bestDistancePx=0,this.lastRating="READY",this.stallTime=0,this.trauma=0,this.flashTime=0,this.slowmoTime=0,this.boostButtonPulse=0,this.splashGameOverTimer=0,this.splashStarted=!1,this.isPaused=!1,this.armadillo.visible=!0,this.armadillo.position.set(Se.x,Se.y+ee/2,0),this.armadillo.rotation.z=0,this._setArmadilloColor(16717636),this._updateSlingVisuals(),this._syncMotionToArmadillo(),this.sm.current=rt.TITLE}_restoreTerrain(){this.physics.removeAllTerrain();for(const e of this.islands??[])this.renderer.remove(e.mesh);this.staticIslands=[],this.islands=[],this.islandIndex=hl.length;let t=null;for(let e=0;e<hl.length;e++){const n=this._randomizeInitialTerrainSpec(hl[e],e),s=this._avoidTerrainOverlap(n,t),r=Ld(s);this.renderer.add(r.mesh),this.islands.push(r),this.staticIslands.push(r),this.physics.addTerrain(r),t=r}this.maxHeightPx=this.islands[this.islands.length-1].bounds.top+240}_togglePause(){this.sm.is(rt.GAMEOVER)||(this.isPaused=!this.isPaused)}_launchFromSling(){if(!this.sm.transition(rt.FLYING))return;const t=this.slingPower,e=t*zc;this.speedRatio=t,this.lastRating="LAUNCH",this.stallTime=0,this.slingSnapTime=.22,this._setArmadilloColor(16717636);const n=Math.cos(this.slingAngle)*e,s=Math.sin(this.slingAngle)*e;this.velocity.set(n,s),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(n,s),this._syncMotionToArmadillo(),this.slingPull.set(0,0),this.slingPower=0,this._carveLaunchPath(),this._triggerLaunchImpact(),this._playTone(220+t*260,.12,.08+t*.06,"square")}_launchFromIsland(t="auto"){if(!this.currentIsland||!this.sm.transition(rt.FALLING))return;const e=this._getExitLaunchAngle(this.currentIsland),n=Oc(this.currentIsland,this.armadillo.position.x),s=this._getUphillInputBoost(t,this.currentIsland,n);s>0&&(this.speedRatio=Math.min(1,this.speedRatio+s));const r=this.speedRatio*pc,o=Math.min(zc,r/Math.max(Math.cos(e),.35)),a=Math.cos(e)*o,l=Math.sin(e)*o;this.velocity.set(a,l),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(a,l),this._syncMotionToArmadillo(),this.currentIsland=null,this.lastRating=s>0?"BOOST":"JUMP",this._setArmadilloColor(s>0?16773494:16740419),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,s>0?16766287:16740419,s>0?12:6,s>0?220:120),this._playTone(s>0?520+s*720:360,.08,.05,"triangle")}_getUphillInputBoost(t,e,n){if(t!=="keyboard"&&t!=="pointer"||!this._isUpperUphillBoostZone(e,this.armadillo.position.x))return 0;const s=Math.sin(n),r=Math.sin(Bb),o=Math.sin(Pb);if(s<=r)return 0;const a=wt.clamp((s-r)/(o-r),0,1);return Ib*(.45+.55*a)}_isUpperUphillBoostZone(t,e){if(!t?.points?.length)return!1;const n=vn(t,e);let s=1/0,r=-1/0;for(const a of t.points)s=Math.min(s,a.y),r=Math.max(r,a.y);const o=wt.lerp(s,r,Lb);return n>=o}_getExitLaunchAngle(t){if(!t)return wt.degToRad(45);const n=Oc(t,this.armadillo.position.x)*.75;return wt.clamp(wt.degToRad(42)+n,wb,Eb)}_update(t){if(this.isPaused){this.sm.is(rt.TITLE)||this.sm.is(rt.SLINGING)?this.camTarget.set(Se.x,Se.y):this.camTarget.set(this.armadillo.position.x,this.armadillo.position.y);return}const e=this.slowmoTime>0?t*lA:t;if(this.slowmoTime=Math.max(0,this.slowmoTime-t),this.time+=e,this.sm.is(rt.FLYING)||this.sm.is(rt.FALLING)){if(this._setArmadilloSprite("jump"),this._updateFlight(e),this.velocity.lengthSq()>1){const r=(Math.atan2(this.velocity.y,this.velocity.x)-this.armadillo.rotation.z+Math.PI)%(Math.PI*2)-Math.PI;this.armadillo.rotation.z+=r*Math.min(1,e*12)}}else this.sm.is(rt.ROLLING)?(this._setArmadilloSprite(Math.floor(this.time*10)%2===0?"walk1":"walk2"),this._updateRolling(e)):this.sm.is(rt.SLINGING)&&(this._setArmadilloSprite("idle"),this._updateSlinging());if(this._updateSplashGameOver(e),this._updateParticles(e),this._updateEffects(t),this._tickSlingSnap(t),this._updateScenery(),this.bestHeightPx=Math.max(this.bestHeightPx,this.armadillo.position.y-Se.y),this.bestDistancePx=Math.max(this.bestDistancePx,this.armadillo.position.x-Se.x),this.sm.is(rt.FLYING)||this.sm.is(rt.FALLING)||this.sm.is(rt.ROLLING)){let n=0;for(;this.islands[this.islands.length-1].bounds.left-this.armadillo.position.x<Tb&&n<6;)this._spawnNextIsland(),n++}this.sm.is(rt.TITLE)||this.sm.is(rt.SLINGING)?this.camTarget.set(Se.x,Se.y):this.camTarget.set(this.armadillo.position.x,this.armadillo.position.y)}_updateScenery(){for(const t of this.scenery){const{layer:e,baseX:n,baseY:s,drift:r}=t.userData;t.position.x=this.camTarget.x*e+n+Math.sin(this.time*r+n*.01)*18,t.position.y=this.camTarget.y*e+s+Math.cos(this.time*r+s*.01)*6}}_updateSlinging(){if(this.sm.is(rt.SLINGING)){const t=Se.x+this.slingPull.x,e=Se.y+this.slingPull.y;this.armadillo.position.set(t,e+ee/2,0)}this._updateSlingVisuals()}_tickSlingSnap(t){this.slingSnapTime>0&&(this.slingSnapTime=Math.max(0,this.slingSnapTime-t))}_getHeightRatio(t=this.armadillo.position.y){return wt.clamp((t-ys)/(Vc-ys),0,1)}_getGravityPx(){const t=wt.smoothstep(this._getHeightRatio(),Ub,Nb);return wt.lerp(To,To*Db,t)}_updateFlight(t){const e=this.armadillo.position.y;this.velocity.y,this.physics.setGravity(this._getGravityPx()),this.physics.step(t);const n=this.physics.getArmadilloState();this.armadillo.position.x=n.x,this.armadillo.position.y=n.y,this.velocity.set(n.vx,n.vy);const s=e-ee/2,r=n.y-ee/2;if(this.physics.isGrounded()&&this.velocity.y<=180){const a=this._findGroundedIsland();if(a){this._landOnIsland(a);return}}const o=this._findPiercedTerrain();if(o){this._breakTerrain(o);return}if(this.velocity.y<=30){const a=this._findLandingIsland(s,r);if(a){this._landOnIsland(a);return}}if(n.y>=Vc){this._reachMoon();return}if(n.y<ys){this._beginSplashGameOver(n.x);return}n.y<this.camPos.y-600&&this._beginSplashGameOver(n.x)}_reachMoon(){this.sm.is(rt.GAMEOVER)||(this.sm.transition(rt.GAMEOVER),this.velocity.set(0,0),this.lastRating="MOON",this._saveBestRecord(),this.particleSystem.spawnBurst(this.armadillo.position.x,this.armadillo.position.y,16775620,48,320),this.particleSystem.spawnBurst(this.armadillo.position.x,this.armadillo.position.y,8445674,32,200),this.trauma=1,this.flashTime=.6,this._playTone(880,.4,.12,"sine"),setTimeout(()=>this._playTone(1100,.3,.1,"sine"),180),setTimeout(()=>this._playTone(1320,.5,.14,"sine"),380))}_findLandingIsland(t,e){if(this.velocity.y>30)return null;const n=this.armadillo.position.x,s=this.armadillo.position.y-ee/2;for(const r of this.islands){if(r.destroyed)continue;const o=r.bounds;if(n<o.left-ee/2||n>o.right+ee/2||Fo(r,n,ee/2))continue;const a=vn(r,n);if(s<=a+15&&s>=a-30||t>=a-5&&e<=a+5)return r}return null}_findGroundedIsland(){const t=this.armadillo.position.x,e=this.armadillo.position.y-ee/2;let n=null,s=1/0;for(const r of this.islands){if(r.destroyed)continue;const o=r.bounds;if(t<o.left-ee||t>o.right+ee||Fo(r,t,ee/2))continue;const a=vn(r,wt.clamp(t,o.left,o.right)),l=Math.abs(e-a);l<s&&l<=36&&(n=r,s=l)}return n}_findPiercedTerrain(){if(this.velocity.y<=0)return null;const t=this.armadillo.position.x,e=this.armadillo.position.y;for(const n of this.islands){if(n.destroyed||t<n.bounds.left-ee/2||t>n.bounds.right+ee/2||Fo(n,t,ee/2))continue;const s=vn(n,t);if(e+ee/2>=n.bounds.bottom&&e-ee/2<=s)return n}return null}_breakTerrain(t){const e=this.velocity.length(),n=t.softBreak||e<fl?this._getSoftTerrainDamageProfile(e):this._getTerrainDamageProfile(e);Nd(t,this.armadillo.position.x,n.radius,n.depth),this.physics.addTerrain(t),this.particleSystem.spawnDirt(this.armadillo.position.x,this.armadillo.position.y,32+Math.floor(n.force*24)),this.physics.setArmadilloVelocity(this.velocity.x,this.velocity.y),this.speedRatio=Math.max(.24,this.speedRatio-(t.softBreak?.06:.18)),this._setArmadilloColor(16766287),this._triggerImpact(.52+n.depth*.2,7162945,this.armadillo.position.x,this.armadillo.position.y)}_getTerrainDamageProfile(t){const e=wt.clamp((t-fl)/(Rb-fl),0,1);return{force:e,depth:.65+e*1.35,radius:42+e*76}}_getSoftTerrainDamageProfile(t){const e=wt.clamp(t/fl,.35,1);return{force:e,depth:1.35+e*.8,radius:58+e*54}}_carveLaunchPath(){const t=new at(Math.cos(this.slingAngle),Math.sin(this.slingAngle)),e=[0,34,68,102];for(const n of e){const s=Se.x+t.x*n,r=Se.y+ee/2+t.y*n;for(const o of this.islands){if(o.destroyed||s<o.bounds.left-ee||s>o.bounds.right+ee||Fo(o,s,ee))continue;const a=vn(o,s);if(!(r+ee/2>=o.bounds.bottom&&r-ee/2<=a))continue;const c=this._getTerrainDamageProfile(this.velocity.length());Nd(o,s,c.radius,c.depth),this._triggerImpact(.45+c.force*.35,7162945,s,r)}}}_triggerLaunchImpact(){const t=wt.clamp((this.slingPower-kc)/(zd-kc),0,1),e=.35+t*.65,n=Se.x+Math.cos(this.slingAngle)*68,s=Se.y+10+Math.sin(this.slingAngle)*68;this.trauma=Math.min(1,this.trauma+e),this.flashTime=Math.max(this.flashTime,t>.85?.18:.09),this.slowmoTime=Math.max(this.slowmoTime,t>.85?_c*1.8:_c),this._spawnParticles(n,s,t>.85?16773494:16740419,t>.85?16:9,220+t*260),t>.85&&this._setArmadilloColor(16773494)}_landOnIsland(t){if(t.biome==="cloud"){this._springFromCloudIsland(t);return}this.currentIsland=t;const e=Math.abs(this.velocity.x),n=this.velocity.length(),s=Math.min(1,e/pc);this.speedRatio=Math.max(Cb,Math.min(this.speedRatio,s)),this.velocity.set(0,0),this.physics.setArmadilloVelocity(0,0),this.armadillo.position.y=vn(t,this.armadillo.position.x)+ee/2,this.lastRating="ROLL";const r=n>700?22:12;this.particleSystem.spawnDirt(this.armadillo.position.x,this.armadillo.position.y-ee/2,r);const o=40+this.speedRatio*100;this._spawnRipple(this.armadillo.position.x,this.armadillo.position.y-ee/2,16777215,o,.38),this._triggerImpact(.18+this.speedRatio*.22,7162945,this.armadillo.position.x,this.armadillo.position.y),(this.sm.is(rt.FLYING)||this.sm.is(rt.FALLING))&&this.sm.transition(rt.ROLLING)}_springFromCloudIsland(t){const e=vn(t,this.armadillo.position.x),n=this.velocity.x*Ob,s=Fb+Math.min(220,Math.abs(this.velocity.y)*.18);this.armadillo.position.y=e+ee/2+3,this.velocity.set(n,s),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(n,s),this._syncMotionToArmadillo(),this.lastRating="SPRING",this._setArmadilloColor(14218495),this._spawnRipple(this.armadillo.position.x,e,14218495,120,.42),this._spawnParticles(this.armadillo.position.x,e+8,16777215,16,180),this._playTone(620,.1,.05,"triangle")}_updateRolling(t){if(!this.currentIsland)return;const e=this.currentIsland.bounds,n=Oc(this.currentIsland,this.armadillo.position.x),s=Math.sin(n),r=s>0?-s*rA:0;this.speedRatio=wt.clamp(this.speedRatio+(r-sA)*t,0,1);const o=this.speedRatio*pc*t;if(this.armadillo.position.x+=o,Fo(this.currentIsland,this.armadillo.position.x,ee/2)){this._launchFromIsland("auto");return}this.armadillo.position.y=vn(this.currentIsland,this.armadillo.position.x)+ee/2,this.armadillo.rotation.z-=o/(ee/2),this._updateStallState(t),this.armadillo.position.x>=e.right-ee/2&&(this.armadillo.position.x=e.right-ee/2,this._launchFromIsland("auto"))}_updateStallState(t){if(this.speedRatio<=oA){this.stallTime+=t,this.stallTime>=gf&&this._gameOver("STOP");return}this.stallTime=0}_triggerImpact(t,e,n,s){this.trauma=Math.min(1,this.trauma+t),this.flashTime=Math.max(this.flashTime,.12),this.slowmoTime=Math.max(this.slowmoTime,_c),this._spawnParticles(n,s,e),this._playTone(90+t*90,.08,.06+t*.05,"sawtooth")}_spawnParticles(t,e,n,s=12,r=120){this.particleSystem.spawnBurst(t,e,n,s,r)}_triggerSplashEffect(t=this.armadillo.position.x){const e=ys+4;this._spawnRipple(t,e,14285823,190,.72),this._spawnRipple(t,e-8,5099745,130,.58),this.particleSystem.spawnBurst(t,e+12,9169407,34,260),this.particleSystem.spawnBurst(t,e+4,16777215,18,180),this.trauma=Math.min(1,this.trauma+.72),this.flashTime=Math.max(this.flashTime,.12),this._playTone(120,.16,.08,"sine")}_beginSplashGameOver(t=this.armadillo.position.x){this.splashStarted||this.sm.is(rt.GAMEOVER)||(this.splashStarted=!0,this.splashGameOverTimer=Sb,this.lastRating="SPLASH",this._triggerSplashEffect(t),this.armadillo.visible=!1,this.armadillo.position.set(t,ys-ee,0),this.velocity.set(0,0),this.physics.setArmadilloPos(t,ys-ee),this.physics.setArmadilloVelocity(0,0),this._syncMotionToArmadillo())}_updateSplashGameOver(t){this.splashGameOverTimer<=0||this.sm.is(rt.GAMEOVER)||(this.splashGameOverTimer=Math.max(0,this.splashGameOverTimer-t),!(this.splashGameOverTimer>0)&&this._gameOver("SPLASH"))}_updateParticles(t){this.particleSystem.update(t,this._getGravityPx()),this._updateRipples(t),this._updateFlameTrail(t);for(const e of this.islands)yb(e,t),xb(e,t)}_updateFlameTrail(t){const n=(this.sm.is(rt.ROLLING)||this.sm.is(rt.FLYING)||this.sm.is(rt.FALLING))&&this.speedRatio>=.55;if(this.flameTrailCooldown=Math.max(0,this.flameTrailCooldown-t),!n||this.flameTrailCooldown>0)return;const s=wt.clamp((this.speedRatio-.55)/(1-.55),0,1),r=wt.lerp(.045,.015,s);this.flameTrailCooldown=r;const o=this.sm.is(rt.ROLLING)?0:Math.atan2(this.velocity.y,this.velocity.x);this.particleSystem.spawnFlameTrail(this.armadillo.position.x,this.armadillo.position.y,s,o)}_clearParticles(){this.particleSystem.clear()}_updateEffects(t){this.trauma=Math.max(0,this.trauma-t*1.8),this.flashTime=Math.max(0,this.flashTime-t),this.boostButtonPulse=Math.max(0,this.boostButtonPulse-t)}_gameOver(t){this.sm.is(rt.GAMEOVER)||(this.sm.transition(rt.GAMEOVER),this.velocity.set(0,0),this.lastRating=t,this._saveBestRecord(),t==="SPLASH"&&!this.splashStarted?this._triggerSplashEffect(this.armadillo.position.x):this._playTone(96,.22,.1,"triangle"))}_ensureAudio(){if(this.audio){this.audio.state==="suspended"&&this.audio.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.audio=new t)}_playTone(t,e,n,s="sine"){if(!this.audio||this.audio.state!=="running")return;const r=this.audio.currentTime,o=this.audio.createOscillator(),a=this.audio.createGain();o.type=s,o.frequency.setValueAtTime(t,r),a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(n,r+.012),a.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a),a.connect(this.audio.destination),o.start(r),o.stop(r+e+.02)}_getScore(){const t=Math.max(0,Math.floor(this.bestHeightPx/xs)),e=Math.max(0,Math.floor(this.bestDistancePx/xs));return t*yf.perM_height+e*yf.perM_distance}_loadBestRecord(){try{return JSON.parse(localStorage.getItem("armadillo-rush-best"))??{score:0,heightM:0,distanceM:0}}catch{return{score:0,heightM:0,distanceM:0}}}_saveBestRecord(){const t=Math.max(0,Math.floor(this.bestHeightPx/xs)),e=Math.max(0,Math.floor(this.bestDistancePx/xs)),n=this._getScore();if(!(n<=this.bestRecord.score)){this.bestRecord={score:n,heightM:t,distanceM:e};try{localStorage.setItem("armadillo-rush-best",JSON.stringify(this.bestRecord))}catch{}}}_render(t,e=1){const n=this._applyMotionInterpolation(e),s=this.sm.is(rt.FLYING)?xf*1.5:xf,r=1-Math.pow(1-s,Math.max(.001,(t??Js)*60)),o=this.sm.is(rt.TITLE)||this.sm.is(rt.SLINGING)?this.camTarget.x:n.x,a=this.sm.is(rt.TITLE)||this.sm.is(rt.SLINGING)?this.camTarget.y:n.y;this.camPos.x+=(o-this.camPos.x)*r,this.camPos.y+=(a-this.camPos.y)*r;const l=this.trauma*this.trauma*16,c=(Math.random()-.5)*l,h=(Math.random()-.5)*l;this.renderer.setCenter(this.camPos.x,this.camPos.y,c,h);const u=this._getHeightRatio();this._updateRendererClearSky(u),this._updateSceneSkyPlane(u),this._updateWorldSea(),this.background.update(u,this.time),this.postfx.update(this.trauma,u,t??Js),this.postfx.render(t??Js),this._renderHud()}_updateRendererClearSky(t){const e=new Qt;t<.34?e.copy(Vd).lerp(Oo,wt.smoothstep(t,.04,.34)):t<.68?e.copy(Oo).lerp(Kr,wt.smoothstep(t,.34,.68)):e.copy(Kr).lerp(dl,wt.smoothstep(t,.68,.9)),this.renderer.renderer.setClearColor(e,1)}_renderHud(){if(!this.ui)return;const t=Math.max(0,Math.floor(this.bestHeightPx/xs)),e=Math.max(0,Math.floor(this.bestDistancePx/xs)),n=this._getScore(),s=Math.round(this.speedRatio*100),r=Math.round(wt.radToDeg(this.slingAngle)),o=Math.round(this.slingPower*100),a=this.slingPull.length(),l=Math.round(wt.clamp(a/ul,0,1)*100),c=!this.sm.is(rt.TITLE)&&!this.sm.is(rt.SLINGING)&&!this.sm.is(rt.GAMEOVER),h=!this.isPaused&&!this.sm.is(rt.TITLE)&&!this.sm.is(rt.GAMEOVER),u=this.boostButtonPulse>0,f=this.sm.is(rt.ROLLING),d=this.splashGameOverTimer>0?"물속으로 빠지는 중...":this.sm.is(rt.TITLE)?"슬링을 드래그해서 발사!":this.sm.is(rt.SLINGING)?this.slingDragging?"놓으면 발사!":"드래그로 조준":this.sm.is(rt.ROLLING)?"하단 버튼 / 스페이스: 노란 오르막에서 부스트 점프":this.sm.is(rt.GAMEOVER)?"클릭 / 스페이스 → 재시작":"비행 중...",_=this.isPaused?"Resume":"Pause",v=this.isPaused?"PAUSED":this.sm.current,p=this.stallTime>=aA?`<div class="hud-danger">DANGER ${Math.max(0,gf-this.stallTime).toFixed(1)}s</div>`:"",m=Math.max(0,Math.floor((Vc-this.armadillo.position.y)/xs)),A=m>0?`${m}m`:"🌕 REACHED!",y=this.sm.is(rt.SLINGING)?`
      <div class="meter meter-power">
        <div class="meter-fill power-fill" style="width:${l}%"></div>
      </div>`:"",x=this.lastRating==="MOON",C=x?"🌕 MOON REACHED!":this.lastRating==="SPLASH"?"🌊 SPLASH!":"GAME OVER",E=x?"result-title moon-clear":"result-title";this.ui.innerHTML=`
      <div class="hud-panel hud-stats">
        <div><span>STATE</span><strong>${v}</strong></div>
        <div><span>SCORE</span><strong>${n}</strong></div>
        <div><span>HEIGHT</span><strong>${t}m</strong></div>
        <div><span>DIST</span><strong>${e}m</strong></div>
        <div><span>TO MOON</span><strong>${A}</strong></div>
        <div><span>SPEED</span><strong>${s}%</strong></div>
        <div><span>ANGLE</span><strong>${r}°</strong></div>
        <div><span>POWER</span><strong>${o}%</strong></div>
        ${p}
      </div>

      ${y}

      ${this.sm.is(rt.TITLE)?`
        <div class="start-layer">
          <div class="armadillo-portrait" aria-hidden="true">
            <div class="portrait-tail"></div>
            <div class="portrait-shell">
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="portrait-head">
              <i></i>
            </div>
            <div class="portrait-nose"></div>
            <div class="portrait-feet"></div>
          </div>
          <div class="start-title">ARMADILLO RUSH</div>
          <div class="start-subtitle">🌊 바다 → 하늘 → 🌕 달</div>
          <div class="start-subtitle">슬링을 드래그해서 발사!</div>
          <div class="start-best">BEST ${this.bestRecord.score}</div>
        </div>
      `:""}
      ${this.flashTime>0?`<div class="flash-layer" style="opacity:${this.flashTime*1.6}"></div>`:""}
      ${this.sm.is(rt.GAMEOVER)?`
        <div class="modal-layer">
          <div class="result-card">
            <div class="${E}">${C}</div>
            <div class="result-grid">
              <div><span>SCORE</span><strong>${n}</strong></div>
              <div><span>HEIGHT</span><strong>${t}m</strong></div>
              <div><span>DIST</span><strong>${e}m</strong></div>
              <div><span>BEST</span><strong>${this.bestRecord.score}</strong></div>
            </div>
            <button type="button" class="clickable primary-button" data-action="restart">Retry</button>
          </div>
        </div>
      `:""}

      ${this.isPaused?`
        <div class="pause-layer">
          <div class="pause-menu">
            <div class="pause-title">PAUSED</div>
            <button type="button" class="clickable primary-button" data-action="pause">Resume</button>
            <button type="button" class="clickable secondary-button" data-action="restart">Restart</button>
          </div>
        </div>
      `:""}

      ${h?`
        <div class="control-row">
          <button type="button" class="clickable secondary-button" data-action="pause">${_}</button>
          <button type="button" class="clickable primary-button" data-action="restart">Restart</button>
        </div>
      `:""}

      ${c&&!this.isPaused?`
        <button type="button" class="clickable boost-button ${u?"is-pressed":""} ${f?"is-ready":""}" data-action="boost" aria-label="Boost">
          <span class="boost-button-core">BOOST</span>
        </button>
      `:""}

      <div class="action-hint ${c&&!this.isPaused?"is-above-boost":""}">${d}</div>
    `}loop(){const t=performance.now();let e=(t-this.lastNow)/1e3;for(this.lastNow=t,e>Od&&(e=Od),this.accumulator+=e;this.accumulator>=Js;)this._beginFixedStep(),this._update(Js),this._endFixedStep(),this.accumulator-=Js;const n=wt.clamp(this.accumulator/Js,0,1);this._render(e,n),requestAnimationFrame(()=>this.loop())}start(){requestAnimationFrame(()=>this.loop())}}const Gb=new Vb;Gb.start();
