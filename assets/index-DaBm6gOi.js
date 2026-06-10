(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="171",Lp=0,Eu=1,Dp=2,mm=1,Up=2,rs=3,cs=0,ai=1,Se=2,zi=0,_o=1,ih=2,Cu=3,Ru=4,Np=5,lr=100,Fp=101,Op=102,zp=103,Vp=104,Hp=200,kp=201,Gp=202,Wp=203,nh=204,sh=205,qp=206,Xp=207,Yp=208,$p=209,Jp=210,Zp=211,Kp=212,jp=213,Qp=214,rh=0,Bl=1,oh=2,yo=3,ah=4,lh=5,ch=6,hh=7,pm=0,t_=1,e_=2,Ps=0,i_=1,n_=2,s_=3,r_=4,o_=5,a_=6,l_=7,_m=300,xo=301,Ao=302,uh=303,dh=304,Hl=306,fh=1e3,ur=1001,mh=1002,Pi=1003,c_=1004,xa=1005,gi=1006,$l=1007,dr=1008,Mi=1009,vm=1010,gm=1011,na=1012,Yh=1013,vr=1014,Tn=1015,fa=1016,$h=1017,Jh=1018,gr=1020,ym=35902,xm=1021,Am=1022,En=1023,Mm=1024,Sm=1025,vo=1026,yr=1027,Zh=1028,Kh=1029,bm=1030,jh=1031,Qh=1033,wl=33776,Tl=33777,El=33778,Cl=33779,ph=35840,_h=35841,vh=35842,gh=35843,yh=36196,xh=37492,Ah=37496,Mh=37808,Sh=37809,bh=37810,wh=37811,Th=37812,Eh=37813,Ch=37814,Rh=37815,Ph=37816,Bh=37817,Ih=37818,Lh=37819,Dh=37820,Uh=37821,Rl=36492,Nh=36494,Fh=36495,wm=36283,Oh=36284,zh=36285,Vh=36286,ma=3200,h_=3201,u_=0,d_=1,kn="",Me="srgb",Ls="srgb-linear",Il="linear",Te="srgb",Br=7680,Pu=519,f_=512,m_=513,p_=514,Tm=515,__=516,v_=517,g_=518,y_=519,Bu=35044,Iu="300 es",as=2e3,Ll=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const Zo=Math.PI/180,sa=180/Math.PI;function Mr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_i[i&255]+_i[i>>8&255]+_i[i>>16&255]+_i[i>>24&255]+"-"+_i[t&255]+_i[t>>8&255]+"-"+_i[t>>16&15|64]+_i[t>>24&255]+"-"+_i[e&63|128]+_i[e>>8&255]+"-"+_i[e>>16&255]+_i[e>>24&255]+_i[n&255]+_i[n>>8&255]+_i[n>>16&255]+_i[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function tu(i,t){return(i%t+t)%t}function x_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function A_(i,t,e){return i!==t?(e-i)/(t-i):0}function Ko(i,t,e){return(1-e)*i+e*t}function M_(i,t,e,n){return Ko(i,t,1-Math.exp(-e*n))}function S_(i,t=1){return t-Math.abs(tu(i,t*2)-t)}function b_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function w_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function T_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function E_(i,t){return i+Math.random()*(t-i)}function C_(i){return i*(.5-Math.random())}function R_(i){i!==void 0&&(Lu=i);let t=Lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function P_(i){return i*Zo}function B_(i){return i*sa}function I_(i){return(i&i-1)===0&&i!==0}function L_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function D_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function U_(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function lo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:Zo,RAD2DEG:sa,generateUUID:Mr,clamp:ie,euclideanModulo:tu,mapLinear:x_,inverseLerp:A_,lerp:Ko,damp:M_,pingpong:S_,smoothstep:b_,smootherstep:w_,randInt:T_,randFloat:E_,randFloatSpread:C_,seededRandom:R_,degToRad:P_,radToDeg:B_,isPowerOfTwo:I_,ceilPowerOfTwo:L_,floorPowerOfTwo:D_,setQuaternionFromProperEuler:U_,normalize:Ci,denormalize:lo};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],v=s[0],p=s[3],m=s[6],x=s[1],y=s[4],A=s[7],C=s[2],T=s[5],E=s[8];return r[0]=o*v+a*x+l*C,r[3]=o*p+a*y+l*T,r[6]=o*m+a*A+l*E,r[1]=c*v+h*x+u*C,r[4]=c*p+h*y+u*T,r[7]=c*m+h*A+u*E,r[2]=f*v+d*x+_*C,r[5]=f*p+d*y+_*T,r[8]=f*m+d*A+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=e*u+n*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new Kt;function Em(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N_(){const i=ra("canvas");return i.style.display="block",i}const Du={};function co(i){i in Du||(Du[i]=!0,console.warn(i))}function F_(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function O_(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function z_(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Uu=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V_(){const i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(s.r=go(s.r),s.g=go(s.g),s.b=go(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Il:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:t,whitePoint:n,transfer:Il,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}const pe=V_();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ir;class H_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ir===void 0&&(Ir=ra("canvas")),Ir.width=t.width,Ir.height=t.height;const n=Ir.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ir}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let k_=0;class Cm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Mr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zl(s[o].image)):r.push(Zl(s[o]))}else r=Zl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?H_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G_=0;class Qe extends us{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=ur,s=ur,r=gi,o=dr,a=En,l=Mi,c=Qe.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Mr(),this.name="",this.source=new Cm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_m)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fh:t.x=t.x-Math.floor(t.x);break;case ur:t.x=t.x<0?0:1;break;case mh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fh:t.y=t.y-Math.floor(t.y);break;case ur:t.y=t.y<0?0:1;break;case mh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=_m;Qe.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,A=(d+1)/2,C=(m+1)/2,T=(h+f)/4,E=(u+v)/4,P=(_+p)/4;return y>A&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=E/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=T/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends W_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rm extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class q_ extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*v,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,m*x);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const A=a*x;if(l=l*p+f*A,c=c*p+d*A,h=h*p+_*A,u=u*p+v*A,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-a*d,t[e+2]=c*_+h*d+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new L,Fu=new pa;class Sr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),Ma.subVectors(this.max,To),Lr.subVectors(t.a,To),Dr.subVectors(t.b,To),Ur.subVectors(t.c,To),ds.subVectors(Dr,Lr),fs.subVectors(Ur,Dr),Vs.subVectors(Lr,Ur);let e=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-Vs.z,Vs.y,ds.z,0,-ds.x,fs.z,0,-fs.x,Vs.z,0,-Vs.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-Vs.y,Vs.x,0];return!jl(e,Lr,Dr,Ur,Ma)||(e=[1,0,0,0,1,0,0,0,1],!jl(e,Lr,Dr,Ur,Ma))?!1:(Sa.crossVectors(ds,fs),e=[Sa.x,Sa.y,Sa.z],jl(e,Lr,Dr,Ur,Ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new L,new L,new L,new L,new L,new L,new L,new L],_n=new L,Aa=new Sr,Lr=new L,Dr=new L,Ur=new L,ds=new L,fs=new L,Vs=new L,To=new L,Ma=new L,Sa=new L,Hs=new L;function jl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hs.fromArray(i,r);const a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=t.dot(Hs),c=e.dot(Hs),h=n.dot(Hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const X_=new Sr,Eo=new L,Ql=new L;class br{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):X_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);const e=Eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(Ql)),this.expandByPoint(Eo.copy(t.center).sub(Ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new L,tc=new L,ba=new L,ms=new L,ec=new L,wa=new L,ic=new L;class eu{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tc.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),ms.copy(this.origin).sub(tc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ba),a=ms.dot(this.direction),l=-ms.dot(ba),c=ms.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tc).addScaledVector(ba,f),d}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){ec.subVectors(e,t),wa.subVectors(n,t),ic.crossVectors(ec,wa);let o=this.direction.dot(ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,t);const l=a*this.direction.dot(wa.crossVectors(ms,wa));if(l<0)return null;const c=a*this.direction.dot(ec.cross(ms));if(c<0||l+c>o)return null;const h=-a*ms.dot(ic);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,_,v,p){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,_,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,_,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Nr.setFromMatrixColumn(t,0).length(),r=1/Nr.setFromMatrixColumn(t,1).length(),o=1/Nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,_=c*h,v=c*u;e[0]=f+v*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,_=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Y_,t,$_)}lookAt(t,e,n){const s=this.elements;return Hi.subVectors(t,e),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),ps.crossVectors(n,Hi),ps.lengthSq()===0&&(Math.abs(n.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),ps.crossVectors(n,Hi)),ps.normalize(),Ta.crossVectors(Hi,ps),s[0]=ps.x,s[4]=Ta.x,s[8]=Hi.x,s[1]=ps.y,s[5]=Ta.y,s[9]=Hi.y,s[2]=ps.z,s[6]=Ta.z,s[10]=Hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],v=n[6],p=n[10],m=n[14],x=n[3],y=n[7],A=n[11],C=n[15],T=s[0],E=s[4],P=s[8],b=s[12],M=s[1],B=s[5],z=s[9],I=s[13],N=s[2],Y=s[6],k=s[10],et=s[14],G=s[3],nt=s[7],dt=s[11],gt=s[15];return r[0]=o*T+a*M+l*N+c*G,r[4]=o*E+a*B+l*Y+c*nt,r[8]=o*P+a*z+l*k+c*dt,r[12]=o*b+a*I+l*et+c*gt,r[1]=h*T+u*M+f*N+d*G,r[5]=h*E+u*B+f*Y+d*nt,r[9]=h*P+u*z+f*k+d*dt,r[13]=h*b+u*I+f*et+d*gt,r[2]=_*T+v*M+p*N+m*G,r[6]=_*E+v*B+p*Y+m*nt,r[10]=_*P+v*z+p*k+m*dt,r[14]=_*b+v*I+p*et+m*gt,r[3]=x*T+y*M+A*N+C*G,r[7]=x*E+y*B+A*Y+C*nt,r[11]=x*P+y*z+A*k+C*dt,r[15]=x*b+y*I+A*et+C*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],v=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],v=t[13],p=t[14],m=t[15],x=u*p*c-v*f*c+v*l*d-a*p*d-u*l*m+a*f*m,y=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,A=h*v*c-_*u*c+_*a*d-o*v*d-h*a*m+o*u*m,C=_*u*l-h*v*l-_*a*f+o*v*f+h*a*p-o*u*p,T=e*x+n*y+s*A+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=x*E,t[1]=(v*f*r-u*p*r-v*s*d+n*p*d+u*s*m-n*f*m)*E,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*E,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*E,t[4]=y*E,t[5]=(h*p*r-_*f*r+_*s*d-e*p*d-h*s*m+e*f*m)*E,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*E,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*E,t[8]=A*E,t[9]=(_*u*r-h*v*r-_*n*d+e*v*d+h*n*m-e*u*m)*E,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=C*E,t[13]=(h*v*s-_*u*s+_*n*f-e*v*f-h*n*p+e*u*p)*E,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*p-e*a*p)*E,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,v=o*h,p=o*u,m=a*u,x=l*c,y=l*h,A=l*u,C=n.x,T=n.y,E=n.z;return s[0]=(1-(v+m))*C,s[1]=(d+A)*C,s[2]=(_-y)*C,s[3]=0,s[4]=(d-A)*T,s[5]=(1-(f+m))*T,s[6]=(p+x)*T,s[7]=0,s[8]=(_+y)*E,s[9]=(p-x)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Nr.set(s[0],s[1],s[2]).length();const o=Nr.set(s[4],s[5],s[6]).length(),a=Nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=as){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,_;if(a===as)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ll)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=as){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let _,v;if(a===as)_=(o+r)*u,v=-2*u;else if(a===Ll)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Nr=new L,vn=new Re,Y_=new L(0,0,0),$_=new L(1,1,1),ps=new L,Ta=new L,Hi=new L,Ou=new Re,zu=new pa;class hs{constructor(t=0,e=0,n=0,s=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class Pm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J_=0;const Vu=new L,Fr=new pa,Jn=new Re,Ea=new L,Co=new L,Z_=new L,K_=new pa,Hu=new L(1,0,0),ku=new L(0,1,0),Gu=new L(0,0,1),Wu={type:"added"},j_={type:"removed"},Or={type:"childadded",child:null},nc={type:"childremoved",child:null};class yi extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yi.DEFAULT_UP.clone();const t=new L,e=new hs,n=new pa,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new Kt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=yi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ea.copy(t):Ea.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Co,Ea,this.up):Jn.lookAt(Ea,Co,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Fr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),Or.child=t,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j_),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,Z_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,K_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}yi.DEFAULT_UP=new L(0,1,0);yi.DEFAULT_MATRIX_AUTO_UPDATE=!0;yi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new L,Zn=new L,sc=new L,Kn=new L,zr=new L,Vr=new L,qu=new L,rc=new L,oc=new L,ac=new L,lc=new De,cc=new De,hc=new De;class wn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Zn.subVectors(n,e),sc.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Zn),l=gn.dot(sc),c=Zn.dot(Zn),h=Zn.dot(sc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,n),hc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lc,r.x),o.addScaledVector(cc,r.y),o.addScaledVector(hc,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Zn.subVectors(t,e),gn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),gn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zr.subVectors(s,n),Vr.subVectors(r,n),rc.subVectors(t,n);const l=zr.dot(rc),c=Vr.dot(rc);if(l<=0&&c<=0)return e.copy(n);oc.subVectors(t,s);const h=zr.dot(oc),u=Vr.dot(oc);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zr,o);ac.subVectors(t,r);const d=zr.dot(ac),_=Vr.dot(ac);if(_>=0&&d<=_)return e.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Vr,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return qu.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(qu,a);const m=1/(p+v+f);return o=v*m,a=f*m,e.copy(n).addScaledVector(zr,o).addScaledVector(Vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function uc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=tu(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=uc(o,r,t+1/3),this.g=uc(o,r,t),this.b=uc(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const n=Bm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return pe.fromWorkingColorSpace(vi.copy(this),t),Math.round(ie(vi.r*255,0,255))*65536+Math.round(ie(vi.g*255,0,255))*256+Math.round(ie(vi.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(vi.copy(this),e);const n=vi.r,s=vi.g,r=vi.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(vi.copy(this),e),t.r=vi.r,t.g=vi.g,t.b=vi.b,t}getStyle(t=Me){pe.fromWorkingColorSpace(vi.copy(this),t);const e=vi.r,n=vi.g,s=vi.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+e,_s.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_s),t.getHSL(Ca);const n=Ko(_s.h,Ca.h,e),s=Ko(_s.s,Ca.s,e),r=Ko(_s.l,Ca.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new Xt;Xt.NAMES=Bm;let Q_=0;class Fs extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=_o,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=sh,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nh&&(n.blendSrc=this.blendSrc),this.blendDst!==sh&&(n.blendDst=this.blendDst),this.blendEquation!==lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ee extends Fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new L,Ra=new rt;class xi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ra.fromBufferAttribute(this,e),Ra.applyMatrix3(t),this.setXY(e,Ra.x,Ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=lo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ci(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ci(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ci(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ci(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ci(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ci(e,this.array),n=Ci(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ci(e,this.array),n=Ci(n,this.array),s=Ci(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ci(e,this.array),n=Ci(n,this.array),s=Ci(s,this.array),r=Ci(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bu&&(t.usage=this.usage),t}}class Im extends xi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lm extends xi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ti extends xi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tv=0;const Qi=new Re,dc=new yi,Hr=new L,ki=new Sr,Ro=new Sr,ri=new L;class ei extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Em(t)?Lm:Im)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qi.makeRotationFromQuaternion(t),this.applyMatrix4(Qi),this}rotateX(t){return Qi.makeRotationX(t),this.applyMatrix4(Qi),this}rotateY(t){return Qi.makeRotationY(t),this.applyMatrix4(Qi),this}rotateZ(t){return Qi.makeRotationZ(t),this.applyMatrix4(Qi),this}translate(t,e,n){return Qi.makeTranslation(t,e,n),this.applyMatrix4(Qi),this}scale(t,e,n){return Qi.makeScale(t,e,n),this.applyMatrix4(Qi),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ti(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ki.setFromBufferAttribute(r),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,ki.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,ki.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(ki.min),this.boundingBox.expandByPoint(ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ki.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(ri.addVectors(ki.min,Ro.min),ki.expandByPoint(ri),ri.addVectors(ki.max,Ro.max),ki.expandByPoint(ri)):(ki.expandByPoint(Ro.min),ki.expandByPoint(Ro.max))}ki.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ri.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ri));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ri.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(t,c),ri.add(Hr)),s=Math.max(s,n.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,h=new L,u=new L,f=new rt,d=new rt,_=new rt,v=new L,p=new L;function m(P,b,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),_.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const B=1/(d.x*_.y-_.x*d.y);isFinite(B)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(B),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(B),a[P].add(v),a[b].add(v),a[M].add(v),l[P].add(p),l[b].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],B=M.start,z=M.count;for(let I=B,N=B+z;I<N;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new L,A=new L,C=new L,T=new L;function E(P){C.fromBufferAttribute(s,P),T.copy(C);const b=a[P];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),A.crossVectors(T,b);const B=A.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,B)}for(let P=0,b=x.length;P<b;++P){const M=x[P],B=M.start,z=M.count;for(let I=B,N=B+z;I<N;I+=3)E(t.getX(I+0)),E(t.getX(I+1)),E(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ri.fromBufferAttribute(t,e),ri.normalize(),t.setXYZ(e,ri.x,ri.y,ri.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new xi(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ei,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new Re,ks=new eu,Pa=new br,Yu=new L,Ba=new L,Ia=new L,La=new L,fc=new L,Da=new L,$u=new L,Ua=new L;class Et extends yi{constructor(t=new ei,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(fc.fromBufferAttribute(u,t),o?Da.addScaledVector(fc,h):Da.addScaledVector(fc.sub(e),h))}e.add(Da)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),ks.copy(t.ray).recast(t.near),!(Pa.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Pa,Yu)===null||ks.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(Xu.copy(r).invert(),ks.copy(t.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ks)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let A=x,C=y;A<C;A+=3){const T=a.getX(A),E=a.getX(A+1),P=a.getX(A+2);s=Na(this,m,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=_,m=v;p<m;p+=3){const x=a.getX(p),y=a.getX(p+1),A=a.getX(p+2);s=Na(this,o,t,n,c,h,u,x,y,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let A=x,C=y;A<C;A+=3){const T=A,E=A+1,P=A+2;s=Na(this,m,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=_,m=v;p<m;p+=3){const x=p,y=p+1,A=p+2;s=Na(this,o,t,n,c,h,u,x,y,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ev(i,t,e,n,s,r,o,a){let l;if(t.side===ai?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===cs,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ua);return c<e.near||c>e.far?null:{distance:c,point:Ua.clone(),object:i}}function Na(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ba),i.getVertexPosition(l,Ia),i.getVertexPosition(c,La);const h=ev(i,t,e,n,Ba,Ia,La,$u);if(h){const u=new L;wn.getBarycoord($u,Ba,Ia,La,u),s&&(h.uv=wn.getInterpolatedAttribute(s,a,l,c,u,new rt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,l,c,u,new rt)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};wn.getNormal(Ba,Ia,La,f.normal),h.face=f,h.barycoord=u}return h}class Bs extends ei{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ti(c,3)),this.setAttribute("normal",new ti(h,3)),this.setAttribute("uv",new ti(u,2));function _(v,p,m,x,y,A,C,T,E,P,b){const M=A/E,B=C/P,z=A/2,I=C/2,N=T/2,Y=E+1,k=P+1;let et=0,G=0;const nt=new L;for(let dt=0;dt<k;dt++){const gt=dt*B-I;for(let Ht=0;Ht<Y;Ht++){const re=Ht*M-z;nt[v]=re*x,nt[p]=gt*y,nt[m]=N,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[p]=0,nt[m]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Ht/E),u.push(1-dt/P),et+=1}}for(let dt=0;dt<P;dt++)for(let gt=0;gt<E;gt++){const Ht=f+gt+Y*dt,re=f+gt+Y*(dt+1),Z=f+(gt+1)+Y*(dt+1),at=f+(gt+1)+Y*dt;l.push(Ht,re,at),l.push(re,Z,at),G+=6}a.addGroup(d,G,b),d+=G,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ri(i){const t={};for(let e=0;e<i.length;e++){const n=Mo(i[e]);for(const s in n)t[s]=n[s]}return t}function iv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const nv={clone:Mo,merge:Ri};var sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sv,this.fragmentShader=rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class iu extends yi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=as}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new L,Ju=new rt,Zu=new rt;class hn extends iu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,Zu),e.subVectors(Zu,Ju)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const kr=-90,Gr=1;class ov extends yi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(kr,Gr,t,e);s.layers=this.layers,this.add(s);const r=new hn(kr,Gr,t,e);r.layers=this.layers,this.add(r);const o=new hn(kr,Gr,t,e);o.layers=this.layers,this.add(o);const a=new hn(kr,Gr,t,e);a.layers=this.layers,this.add(a);const l=new hn(kr,Gr,t,e);l.layers=this.layers,this.add(l);const c=new hn(kr,Gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===as)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ll)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Um extends Qe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xo,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class av extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Um(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ai,blending:zi});r.uniforms.tEquirect.value=e;const o=new Et(s,r),a=e.minFilter;return e.minFilter===dr&&(e.minFilter=gi),new ov(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Dl extends yi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class lv extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Pi,h=Pi,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends xi{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wr=new Re,Ku=new Re,Fa=[],ju=new Sr,cv=new Re,Po=new Et,Bo=new br;class hv extends Et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wr),ju.copy(t.boundingBox).applyMatrix4(Wr),this.boundingBox.union(ju)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wr),Bo.copy(t.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Bo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Po.geometry=this.geometry,Po.material=this.material,Po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(n),t.ray.intersectsSphere(Bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wr),Ku.multiplyMatrices(n,Wr),Po.matrixWorld=Ku,Po.raycast(t,Fa);for(let o=0,a=Fa.length;o<a;o++){const l=Fa[o];l.instanceId=r,l.object=this,e.push(l)}Fa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lv(new Float32Array(s*this.count),s,this.count,Zh,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const mc=new L,uv=new L,dv=new Kt;class or{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=mc.subVectors(n,e).cross(uv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dv.getNormalMatrix(t),s=this.coplanarPoint(mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new br,Oa=new L;class Nm{constructor(t=new or,e=new or,n=new or,s=new or,r=new or,o=new or){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=as){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],v=s[10],p=s[11],m=s[12],x=s[13],y=s[14],A=s[15];if(n[0].setComponents(l-r,f-c,p-d,A-m).normalize(),n[1].setComponents(l+r,f+c,p+d,A+m).normalize(),n[2].setComponents(l+o,f+h,p+_,A+x).normalize(),n[3].setComponents(l-o,f-h,p-_,A-x).normalize(),n[4].setComponents(l-a,f-u,p-v,A-y).normalize(),e===as)n[5].setComponents(l+a,f+u,p+v,A+y).normalize();else if(e===Ll)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Oa.x=s.normal.x>0?t.max.x:t.min.x,Oa.y=s.normal.y>0?t.max.y:t.min.y,Oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _a extends Fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nl=new L,Fl=new L,Qu=new Re,Io=new eu,za=new br,pc=new L,td=new L;class Ol extends yi{constructor(t=new ei,e=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Nl.fromBufferAttribute(e,s-1),Fl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Nl.distanceTo(Fl);t.setAttribute("lineDistance",new ti(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,t.ray.intersectsSphere(za)===!1)return;Qu.copy(s).invert(),Io.copy(t.ray).applyMatrix4(Qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=d,p=_-1;v<p;v+=c){const m=h.getX(v),x=h.getX(v+1),y=Va(this,t,Io,l,m,x);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(_-1),p=h.getX(d),m=Va(this,t,Io,l,v,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=d,p=_-1;v<p;v+=c){const m=Va(this,t,Io,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=Va(this,t,Io,l,_-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Va(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Nl.fromBufferAttribute(o,s),Fl.fromBufferAttribute(o,r),e.distanceSqToSegment(Nl,Fl,pc,td)>n)return;pc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(pc);if(!(l<t.near||l>t.far))return{distance:l,point:td.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ed=new L,id=new L;class fv extends Ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ed.fromBufferAttribute(e,s),id.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ed.distanceTo(id);t.setAttribute("lineDistance",new ti(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fm extends Fs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nd=new Re,Hh=new eu,Ha=new br,ka=new L;class mv extends yi{constructor(t=new ei,e=new Fm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;nd.copy(s).invert(),Hh.copy(t.ray).applyMatrix4(nd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,v=d;_<v;_++){const p=c.getX(_);ka.fromBufferAttribute(u,p),sd(ka,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,v=d;_<v;_++)ka.fromBufferAttribute(u,_),sd(ka,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sd(i,t,e,n,s,r,o){const a=Hh.distanceSqToPoint(i);if(a<e){const l=new L;Hh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fi extends yi{constructor(){super(),this.isGroup=!0,this.type="Group"}}class pv extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu extends Qe{constructor(t,e,n,s,r,o,a,l,c,h=vo){if(h!==vo&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vo&&(n=vr),n===void 0&&h===yr&&(n=gr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pi,this.minFilter=l!==void 0?l:Pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,l=new Re;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class su extends qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _v extends su{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ru(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ga=new L,_c=new ru,vc=new ru,gc=new ru;class Om extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ga.subVectors(s[0],s[1]).add(s[0]),c=Ga);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ga.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ga),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),_c.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,v,p),vc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,v,p),gc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,v,p)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),vc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),gc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(_c.calc(l),vc.calc(l),gc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function vv(i,t){const e=1-i;return e*e*t}function gv(i,t){return 2*(1-i)*i*t}function yv(i,t){return i*i*t}function jo(i,t,e,n){return vv(i,t)+gv(i,e)+yv(i,n)}function xv(i,t){const e=1-i;return e*e*e*t}function Av(i,t){const e=1-i;return 3*e*e*i*t}function Mv(i,t){return 3*(1-i)*i*i*t}function Sv(i,t){return i*i*i*t}function Qo(i,t,e,n,s){return xv(i,t)+Av(i,e)+Mv(i,n)+Sv(i,s)}class zm extends qn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qo(t,s.x,r.x,o.x,a.x),Qo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bv extends qn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qo(t,s.x,r.x,o.x,a.x),Qo(t,s.y,r.y,o.y,a.y),Qo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vm extends qn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wv extends qn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hm extends qn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(jo(t,s.x,r.x,o.x),jo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tv extends qn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(jo(t,s.x,r.x,o.x),jo(t,s.y,r.y,o.y),jo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class km extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(rd(a,l.x,c.x,h.x,u.x),rd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var od=Object.freeze({__proto__:null,ArcCurve:_v,CatmullRomCurve3:Om,CubicBezierCurve:zm,CubicBezierCurve3:bv,EllipseCurve:su,LineCurve:Vm,LineCurve3:wv,QuadraticBezierCurve:Hm,QuadraticBezierCurve3:Tv,SplineCurve:km});class Ev extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new od[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new od[s.type]().fromJSON(s))}return this}}class ad extends Ev{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vm(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Hm(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new zm(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new km(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new su(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yi extends ei{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ti(o,3)),this.setAttribute("normal",new ti(a,3)),this.setAttribute("uv",new ti(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}let Rn=class extends ad{constructor(t){super(t),this.uuid=Mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ad().fromJSON(s))}return this}};const Cv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Gm(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Lv(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let _=e;_<s;_+=e)u=i[_],f=i[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return oa(r,o,e,a,l,d,0),o}};function Gm(i,t,e,n,s){let r,o;if(s===Wv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ld(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ld(r,i[r],i[r+1],o);return o&&kl(o,o.next)&&(la(o),o=o.next),o}function xr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(kl(e,e.next)||Ue(e.prev,e,e.next)===0)){if(la(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function oa(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ov(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Pv(i,n,s,r):Rv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),la(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Bv(xr(i),t,e),oa(i,t,e,n,s,r,2)):o===2&&Iv(i,t,e,n,s,r):oa(xr(i),t,e,n,s,r,1);break}}}function Rv(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&uo(s,a,r,l,o,c,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Pv(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=kh(d,_,t,e,n),x=kh(v,p,t,e,n);let y=i.prevZ,A=i.nextZ;for(;y&&y.z>=m&&A&&A.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&uo(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,A.x>=d&&A.x<=v&&A.y>=_&&A.y<=p&&A!==s&&A!==o&&uo(a,h,l,u,c,f,A.x,A.y)&&Ue(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==o&&uo(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;A&&A.z<=x;){if(A.x>=d&&A.x<=v&&A.y>=_&&A.y<=p&&A!==s&&A!==o&&uo(a,h,l,u,c,f,A.x,A.y)&&Ue(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Bv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!kl(s,r)&&Wm(s,n,n.next,r)&&aa(s,r)&&aa(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),la(n),la(n.next),n=i=r),n=n.next}while(n!==i);return xr(n)}function Iv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hv(o,a)){let l=qm(o,a);o=xr(o,o.next),l=xr(l,l.next),oa(o,t,e,n,s,r,0),oa(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Lv(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Gm(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Vv(c));for(s.sort(Dv),r=0;r<s.length;r++)e=Uv(s[r],e);return e}function Dv(i,t){return i.x-t.x}function Uv(i,t){const e=Nv(i,t);if(!e)return t;const n=qm(e,i);return xr(n,n.next),xr(e,e.next)}function Nv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&uo(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),aa(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Fv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Fv(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Ov(i,t,e,n){let s=i;do s.z===0&&(s.z=kh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zv(s)}function zv(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function kh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function uo(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Hv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kv(i,t)&&(aa(i,t)&&aa(t,i)&&Gv(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||kl(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function kl(i,t){return i.x===t.x&&i.y===t.y}function Wm(i,t,e,n){const s=qa(Ue(i,t,e)),r=qa(Ue(i,t,n)),o=qa(Ue(e,n,i)),a=qa(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&Wa(i,e,t)||r===0&&Wa(i,n,t)||o===0&&Wa(e,i,n)||a===0&&Wa(e,t,n))}function Wa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qa(i){return i>0?1:i<0?-1:0}function kv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function aa(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Gv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qm(i,t){const e=new Gh(i.i,i.x,i.y),n=new Gh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ld(i,t,e,n){const s=new Gh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function la(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ta{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ta.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];cd(t),hd(n,t);let o=t.length;e.forEach(cd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,hd(n,e[l]);const a=Cv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function cd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class mi extends ei{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],_=[],v=[],p=[];for(let m=0;m<h;m++){const x=m*f-o;for(let y=0;y<c;y++){const A=y*u-r;_.push(A,-x,0),v.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,A=x+c*(m+1),C=x+1+c*(m+1),T=x+1+c*m;d.push(y,A,T),d.push(A,C,T)}this.setIndex(d),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}class wr extends ei{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new L,_=new rt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const x=m+p,y=x,A=x+n+1,C=x+n+2,T=x+1;a.push(y,A,T),a.push(A,C,T)}}this.setIndex(a),this.setAttribute("position",new ti(l,3)),this.setAttribute("normal",new ti(c,3)),this.setAttribute("uv",new ti(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class un extends ei{constructor(t=new Rn([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ti(s,3)),this.setAttribute("normal",new ti(r,3)),this.setAttribute("uv",new ti(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const _=f.holes;ta.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=_.length;p<m;p++){const x=_[p];ta.isClockWise(x)===!0&&(_[p]=x.reverse())}const v=ta.triangulateShape(d,_);for(let p=0,m=_.length;p<m;p++){const x=_[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){const x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=v.length;p<m;p++){const x=v[p],y=x[0]+u,A=x[1]+u,C=x[2]+u;n.push(y,A,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return qv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new un(n,t.curveSegments)}}function qv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Xv extends Fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ma,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yv extends Fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $v extends _a{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const ud={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Jv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const Zv=new Jv;class ou{constructor(t){this.manager=t!==void 0?t:Zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ou.DEFAULT_MATERIAL_NAME="__DEFAULT";class Kv extends ou{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ud.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ra("img");function l(){h(),ud.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class jv extends ou{constructor(t){super(t)}load(t,e,n,s){const r=new Qe,o=new Kv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class au extends iu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qv extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae{constructor(t){this.value=t}clone(){return new ae(this.value.clone===void 0?this.value:this.value.clone())}}function dd(i,t,e,n){const s=t0(n);switch(e){case xm:return i*t;case Mm:return i*t;case Sm:return i*t*2;case Zh:return i*t/s.components*s.byteLength;case Kh:return i*t/s.components*s.byteLength;case bm:return i*t*2/s.components*s.byteLength;case jh:return i*t*2/s.components*s.byteLength;case Am:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Qh:return i*t*4/s.components*s.byteLength;case wl:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _h:case gh:return Math.max(i,16)*Math.max(t,8)/4;case ph:case vh:return Math.max(i,8)*Math.max(t,8)/2;case yh:case xh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Th:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Nh:case Fh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wm:case Oh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zh:case Vh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t0(i){switch(i){case Mi:case vm:return{byteLength:1,components:1};case na:case gm:case fa:return{byteLength:2,components:1};case $h:case Jh:return{byteLength:2,components:4};case vr:case Yh:case Tn:return{byteLength:4,components:1};case ym:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xm(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function e0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],v=u[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,tg=`struct PhysicalMaterial {
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
}`,eg=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,cy=`#define DISTANCE
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
}`,hy=`#define DISTANCE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,_y=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,gy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,Ay=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,by=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
}`,Ey=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Ry=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,Iy=`uniform vec3 color;
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
}`,Ly=`uniform float rotation;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:i0,alphahash_pars_fragment:n0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:m0,iridescence_fragment:p0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:x0,color_fragment:A0,color_pars_fragment:M0,color_pars_vertex:S0,color_vertex:b0,common:w0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:E0,displacementmap_pars_vertex:C0,displacementmap_vertex:R0,emissivemap_fragment:P0,emissivemap_pars_fragment:B0,colorspace_fragment:I0,colorspace_pars_fragment:L0,envmap_fragment:D0,envmap_common_pars_fragment:U0,envmap_pars_fragment:N0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:$0,envmap_vertex:O0,fog_vertex:z0,fog_pars_vertex:V0,fog_fragment:H0,fog_pars_fragment:k0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:X0,lights_pars_begin:Y0,lights_toon_fragment:J0,lights_toon_pars_fragment:Z0,lights_phong_fragment:K0,lights_phong_pars_fragment:j0,lights_physical_fragment:Q0,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ig,lights_fragment_end:ng,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:mg,morphcolor_vertex:pg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:gg,normal_fragment_begin:yg,normal_fragment_maps:xg,normal_pars_fragment:Ag,normal_pars_vertex:Mg,normal_vertex:Sg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:Cg,opaque_fragment:Rg,packing:Pg,premultiplied_alpha_fragment:Bg,project_vertex:Ig,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Og,shadowmap_vertex:zg,shadowmask_pars_fragment:Vg,skinbase_vertex:Hg,skinning_pars_vertex:kg,skinning_vertex:Gg,skinnormal_vertex:Wg,specularmap_fragment:qg,specularmap_pars_fragment:Xg,tonemapping_fragment:Yg,tonemapping_pars_fragment:$g,transmission_fragment:Jg,transmission_pars_fragment:Zg,uv_pars_fragment:Kg,uv_pars_vertex:jg,uv_vertex:Qg,worldpos_vertex:ty,background_vert:ey,background_frag:iy,backgroundCube_vert:ny,backgroundCube_frag:sy,cube_vert:ry,cube_frag:oy,depth_vert:ay,depth_frag:ly,distanceRGBA_vert:cy,distanceRGBA_frag:hy,equirect_vert:uy,equirect_frag:dy,linedashed_vert:fy,linedashed_frag:my,meshbasic_vert:py,meshbasic_frag:_y,meshlambert_vert:vy,meshlambert_frag:gy,meshmatcap_vert:yy,meshmatcap_frag:xy,meshnormal_vert:Ay,meshnormal_frag:My,meshphong_vert:Sy,meshphong_frag:by,meshphysical_vert:wy,meshphysical_frag:Ty,meshtoon_vert:Ey,meshtoon_frag:Cy,points_vert:Ry,points_frag:Py,shadow_vert:By,shadow_frag:Iy,sprite_vert:Ly,sprite_frag:Dy},ct={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Hn={basic:{uniforms:Ri([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ri([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ri([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ri([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ri([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ri([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ri([ct.points,ct.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ri([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ri([ct.common,ct.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ri([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ri([ct.sprite,ct.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ri([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ri([ct.lights,ct.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Hn.physical={uniforms:Ri([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Xa={r:0,b:0,g:0},Ws=new hs,Uy=new Re;function Ny(i,t,e,n,s,r,o){const a=new Xt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(y){let A=y.isScene===!0?y.background:null;return A&&A.isTexture&&(A=(y.backgroundBlurriness>0?e:t).get(A)),A}function v(y){let A=!1;const C=_(y);C===null?m(a,l):C&&C.isColor&&(m(C,1),A=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,A){const C=_(A);C&&(C.isCubeTexture||C.mapping===Hl)?(h===void 0&&(h=new Et(new Bs(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Mo(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ws.copy(A.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(Ws)),h.material.toneMapped=pe.getTransfer(C.colorSpace)!==Te,(u!==C||f!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Et(new mi(2,2),new ii({name:"BackgroundMaterial",uniforms:Mo(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=pe.getTransfer(C.colorSpace)!==Te,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,A){y.getRGB(Xa,Dm(i)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,A,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,A=1){a.set(y),l=A,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:p,dispose:x}}function Fy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,B,z,I,N){let Y=!1;const k=u(I,z,B);r!==k&&(r=k,c(r.object)),Y=d(M,I,z,N),Y&&_(M,I,z,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,A(M,B,z,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,B,z){const I=z.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let Y=N[B.id];Y===void 0&&(Y={},N[B.id]=Y);let k=Y[I];return k===void 0&&(k=f(l()),Y[I]=k),k}function f(M){const B=[],z=[],I=[];for(let N=0;N<e;N++)B[N]=0,z[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:I,object:M,attributes:{},index:null}}function d(M,B,z,I){const N=r.attributes,Y=B.attributes;let k=0;const et=z.getAttributes();for(const G in et)if(et[G].location>=0){const dt=N[G];let gt=Y[G];if(gt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),dt===void 0||dt.attribute!==gt||gt&&dt.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function _(M,B,z,I){const N={},Y=B.attributes;let k=0;const et=z.getAttributes();for(const G in et)if(et[G].location>=0){let dt=Y[G];dt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const gt={};gt.attribute=dt,dt&&dt.data&&(gt.data=dt.data),N[G]=gt,k++}r.attributes=N,r.attributesNum=k,r.index=I}function v(){const M=r.newAttributes;for(let B=0,z=M.length;B<z;B++)M[B]=0}function p(M){m(M,0)}function m(M,B){const z=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;z[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),N[M]!==B&&(i.vertexAttribDivisor(M,B),N[M]=B)}function x(){const M=r.newAttributes,B=r.enabledAttributes;for(let z=0,I=B.length;z<I;z++)B[z]!==M[z]&&(i.disableVertexAttribArray(z),B[z]=0)}function y(M,B,z,I,N,Y,k){k===!0?i.vertexAttribIPointer(M,B,z,N,Y):i.vertexAttribPointer(M,B,z,I,N,Y)}function A(M,B,z,I){v();const N=I.attributes,Y=z.getAttributes(),k=B.defaultAttributeValues;for(const et in Y){const G=Y[et];if(G.location>=0){let nt=N[et];if(nt===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const dt=nt.normalized,gt=nt.itemSize,Ht=t.get(nt);if(Ht===void 0)continue;const re=Ht.buffer,Z=Ht.type,at=Ht.bytesPerElement,bt=Z===i.INT||Z===i.UNSIGNED_INT||nt.gpuType===Yh;if(nt.isInterleavedBufferAttribute){const ht=nt.data,Dt=ht.stride,kt=nt.offset;if(ht.isInstancedInterleavedBuffer){for(let jt=0;jt<G.locationSize;jt++)m(G.location+jt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let jt=0;jt<G.locationSize;jt++)p(G.location+jt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let jt=0;jt<G.locationSize;jt++)y(G.location+jt,gt/G.locationSize,Z,dt,Dt*at,(kt+gt/G.locationSize*jt)*at,bt)}else{if(nt.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht,nt.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ht=0;ht<G.locationSize;ht++)p(G.location+ht);i.bindBuffer(i.ARRAY_BUFFER,re);for(let ht=0;ht<G.locationSize;ht++)y(G.location+ht,gt/G.locationSize,Z,dt,gt*at,gt/G.locationSize*ht*at,bt)}}else if(k!==void 0){const dt=k[et];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(G.location,dt);break;case 3:i.vertexAttrib3fv(G.location,dt);break;case 4:i.vertexAttrib4fv(G.location,dt);break;default:i.vertexAttrib1fv(G.location,dt)}}}}x()}function C(){P();for(const M in n){const B=n[M];for(const z in B){const I=B[z];for(const N in I)h(I[N].object),delete I[N];delete B[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const B=n[M.id];for(const z in B){const I=B[z];for(const N in I)h(I[N].object),delete I[N];delete B[z]}delete n[M.id]}function E(M){for(const B in n){const z=n[B];if(z[M.id]===void 0)continue;const I=z[M.id];for(const N in I)h(I[N].object),delete I[N];delete z[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function Oy(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===fa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Mi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Tn&&!P)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:A,vertexTextures:C,maxSamples:T}}function Vy(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new or,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const x=r?0:n,y=x*4;let A=m.clippingState||null;l.value=A,A=h(_,f,y,d);for(let C=0;C!==y;++C)A[C]=e[C];m.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,A=d;y!==v;++y,A+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Hy(i){let t=new WeakMap;function e(o,a){return a===uh?o.mapping=xo:a===dh&&(o.mapping=Ao),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uh||a===dh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new av(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const fo=4,fd=[.125,.215,.35,.446,.526,.582],cr=20,yc=new au,md=new Xt;let xc=null,Ac=0,Mc=0,Sc=!1;const ar=(1+Math.sqrt(5))/2,qr=1/ar,pd=[new L(-ar,qr,0),new L(ar,qr,0),new L(-qr,0,ar),new L(qr,0,ar),new L(0,ar,-qr),new L(0,ar,qr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class _d{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,Ac,Mc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xo||t.mapping===Ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:fa,format:En,colorSpace:Ls,depthBuffer:!1},s=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ky(r)),this._blurMaterial=Gy(r,t,e)}return s}_compileMaterial(t){const e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,yc)}_sceneToCubeUV(t,e,n,s){const a=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(md),h.toneMapping=Ps,h.autoClear=!1;const d=new ee({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),_=new Et(new Bs,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(md),v=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Ya(s,x*y,m>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xo||t.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ya(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,yc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pd[(s-r-1)%pd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cr-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):cr;p>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${cr}`);const m=[];let x=0;for(let E=0;E<cr;++E){const P=E/v,b=Math.exp(-P*P/2);m.push(b),E===0?x+=b:E<p&&(x+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const A=this._sizeLods[s],C=3*A*(s>y-fo?s-y+fo:0),T=4*(this._cubeSize-A);Ya(e,C,T,3*A,2*A),l.setRenderTarget(e),l.render(u,yc)}}function ky(i){const t=[],e=[],n=[];let s=i;const r=i-fo+1+fd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-fo?l=fd[o-i+fo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,v=3,p=2,m=1,x=new Float32Array(v*_*d),y=new Float32Array(p*_*d),A=new Float32Array(m*_*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,P=T>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(b,v*_*T),y.set(f,p*_*T);const M=[T,T,T,T,T,T];A.set(M,m*_*T)}const C=new ei;C.setAttribute("position",new xi(x,v)),C.setAttribute("uv",new xi(y,p)),C.setAttribute("faceIndex",new xi(A,m)),t.push(C),s>fo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vd(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=Hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gy(i,t,e){const n=new Float32Array(cr),s=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function gd(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function yd(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function Wy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===uh||l===dh,h=l===xo||l===Ao;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new _d(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new _d(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&co("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xy(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,_=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let y=0,A=x.length;y<A;y+=3){const C=x[y+0],T=x[y+1],E=x[y+2];f.push(C,T,T,E,E,C)}}else if(_!==void 0){const x=_.array;v=_.version;for(let y=0,A=x.length/3-1;y<A;y+=3){const C=y+0,T=y+1,E=y+2;f.push(C,T,T,E,E,C)}}else return;const p=new(Em(f)?Lm:Im)(f,1);p.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Yy(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function u(f,d,_,v){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,_);let m=0;for(let x=0;x<_;x++)m+=d[x]*v[x];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $y(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jy(i,t,e){const n=new WeakMap,s=new De;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),v===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*C*4*u),E=new Rm(T,A,C,u);E.type=Tn,E.needsUpdate=!0;const P=y*4;for(let M=0;M<u;M++){const B=p[M],z=m[M],I=x[M],N=A*C*4*M;for(let Y=0;Y<B.count;Y++){const k=Y*P;d===!0&&(s.fromBufferAttribute(B,Y),T[N+k+0]=s.x,T[N+k+1]=s.y,T[N+k+2]=s.z,T[N+k+3]=0),_===!0&&(s.fromBufferAttribute(z,Y),T[N+k+4]=s.x,T[N+k+5]=s.y,T[N+k+6]=s.z,T[N+k+7]=0),v===!0&&(s.fromBufferAttribute(I,Y),T[N+k+8]=s.x,T[N+k+9]=s.y,T[N+k+10]=s.z,T[N+k+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new rt(A,C)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zy(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Ym=new Qe,xd=new nu(1,1),$m=new Rm,Jm=new q_,Zm=new Um,Ad=[],Md=[],Sd=new Float32Array(16),bd=new Float32Array(9),wd=new Float32Array(4);function bo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ni(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function si(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gl(i,t){let e=Md[t];e===void 0&&(e=new Int32Array(t),Md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ky(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ni(e,t))return;i.uniform2fv(this.addr,t),si(e,t)}}function Qy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ni(e,t))return;i.uniform3fv(this.addr,t),si(e,t)}}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ni(e,t))return;i.uniform4fv(this.addr,t),si(e,t)}}function ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ni(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),si(e,t)}else{if(ni(e,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),si(e,n)}}function ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ni(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),si(e,t)}else{if(ni(e,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),si(e,n)}}function nx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ni(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),si(e,t)}else{if(ni(e,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),si(e,n)}}function sx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ni(e,t))return;i.uniform2iv(this.addr,t),si(e,t)}}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ni(e,t))return;i.uniform3iv(this.addr,t),si(e,t)}}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ni(e,t))return;i.uniform4iv(this.addr,t),si(e,t)}}function lx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ni(e,t))return;i.uniform2uiv(this.addr,t),si(e,t)}}function hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ni(e,t))return;i.uniform3uiv(this.addr,t),si(e,t)}}function ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ni(e,t))return;i.uniform4uiv(this.addr,t),si(e,t)}}function dx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=Tm,r=xd):r=Ym,e.setTexture2D(t||r,s)}function fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jm,s)}function mx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zm,s)}function px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$m,s)}function _x(i){switch(i){case 5126:return Ky;case 35664:return jy;case 35665:return Qy;case 35666:return tx;case 35674:return ex;case 35675:return ix;case 35676:return nx;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return px}}function vx(i,t){i.uniform1fv(this.addr,t)}function gx(i,t){const e=bo(t,this.size,2);i.uniform2fv(this.addr,e)}function yx(i,t){const e=bo(t,this.size,3);i.uniform3fv(this.addr,e)}function xx(i,t){const e=bo(t,this.size,4);i.uniform4fv(this.addr,e)}function Ax(i,t){const e=bo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mx(i,t){const e=bo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sx(i,t){const e=bo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bx(i,t){i.uniform1iv(this.addr,t)}function wx(i,t){i.uniform2iv(this.addr,t)}function Tx(i,t){i.uniform3iv(this.addr,t)}function Ex(i,t){i.uniform4iv(this.addr,t)}function Cx(i,t){i.uniform1uiv(this.addr,t)}function Rx(i,t){i.uniform2uiv(this.addr,t)}function Px(i,t){i.uniform3uiv(this.addr,t)}function Bx(i,t){i.uniform4uiv(this.addr,t)}function Ix(i,t,e){const n=this.cache,s=t.length,r=Gl(e,s);ni(n,r)||(i.uniform1iv(this.addr,r),si(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ym,r[o])}function Lx(i,t,e){const n=this.cache,s=t.length,r=Gl(e,s);ni(n,r)||(i.uniform1iv(this.addr,r),si(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jm,r[o])}function Dx(i,t,e){const n=this.cache,s=t.length,r=Gl(e,s);ni(n,r)||(i.uniform1iv(this.addr,r),si(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zm,r[o])}function Ux(i,t,e){const n=this.cache,s=t.length,r=Gl(e,s);ni(n,r)||(i.uniform1iv(this.addr,r),si(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$m,r[o])}function Nx(i){switch(i){case 5126:return vx;case 35664:return gx;case 35665:return yx;case 35666:return xx;case 35674:return Ax;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ex;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ux}}class Fx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_x(e.type)}}class Ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nx(e.type)}}class zx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Td(i,t){i.seq.push(t),i.map[t.id]=t}function Vx(i,t,e){const n=i.name,s=n.length;for(bc.lastIndex=0;;){const r=bc.exec(n),o=bc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Td(e,c===void 0?new Fx(a,i,t):new Ox(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new zx(a),Td(e,u)),e=u}}}class Pl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Vx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ed(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Hx=37297;let kx=0;function Gx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Cd=new Kt;function Wx(i){pe._getMatrix(Cd,pe.workingColorSpace,i);const t=`mat3( ${Cd.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Il:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gx(i.getShaderSource(t),o)}else return s}function qx(i,t){const e=Wx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xx(i,t){let e;switch(t){case i_:e="Linear";break;case n_:e="Reinhard";break;case s_:e="Cineon";break;case r_:e="ACESFilmic";break;case a_:e="AgX";break;case l_:e="Neutral";break;case o_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $a=new L;function Yx(){pe.getLuminanceCoefficients($a);const i=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function Jx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $o(i){return i!==""}function Pd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(i){return i.replace(Kx,Qx)}const jx=new Map;function Qx(i,t){let e=te[t];if(e===void 0){const n=jx.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wh(e)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace(tA,eA)}function eA(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function iA(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Up?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rs&&(t="SHADOWMAP_TYPE_VSM"),t}function nA(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xo:case Ao:t="ENVMAP_TYPE_CUBE";break;case Hl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sA(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ao:t="ENVMAP_MODE_REFRACTION";break}return t}function rA(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pm:t="ENVMAP_BLENDING_MULTIPLY";break;case t_:t="ENVMAP_BLENDING_MIX";break;case e_:t="ENVMAP_BLENDING_ADD";break}return t}function oA(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function aA(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=iA(e),c=nA(e),h=sA(e),u=rA(e),f=oA(e),d=$x(e),_=Jx(r),v=s.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($o).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($o).join(`
`),m.length>0&&(m+=`
`)):(p=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),m=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ps?"#define TONE_MAPPING":"",e.toneMapping!==Ps?te.tonemapping_pars_fragment:"",e.toneMapping!==Ps?Xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),Yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($o).join(`
`)),o=Wh(o),o=Pd(o,e),o=Bd(o,e),a=Wh(a),a=Pd(a,e),a=Bd(a,e),o=Id(o),a=Id(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+p+o,A=x+m+a,C=Ed(s,s.VERTEX_SHADER,y),T=Ed(s,s.FRAGMENT_SHADER,A);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(B){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(C).trim(),N=s.getShaderInfoLog(T).trim();let Y=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{const et=Rd(s,C,"vertex"),G=Rd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+z+`
`+et+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||N==="")&&(k=!1);k&&(B.diagnostics={runnable:Y,programLog:z,vertexShader:{log:I,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(C),s.deleteShader(T),P=new Pl(s,v),b=Zx(s,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Hx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hA(t),e.set(t,n)),n}}class hA{constructor(t){this.id=lA++,this.code=t,this.usedTimes=0}}function uA(i,t,e,n,s,r,o){const a=new Pm,l=new cA,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,B,z,I){const N=z.fog,Y=I.geometry,k=b.isMeshStandardMaterial?z.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),G=et&&et.mapping===Hl?et.image.height:null,nt=_[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=dt!==void 0?dt.length:0;let Ht=0;Y.morphAttributes.position!==void 0&&(Ht=1),Y.morphAttributes.normal!==void 0&&(Ht=2),Y.morphAttributes.color!==void 0&&(Ht=3);let re,Z,at,bt;if(nt){const be=Hn[nt];re=be.vertexShader,Z=be.fragmentShader}else re=b.vertexShader,Z=b.fragmentShader,l.update(b),at=l.getVertexShaderID(b),bt=l.getFragmentShaderID(b);const ht=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),kt=I.isInstancedMesh===!0,jt=I.isBatchedMesh===!0,ge=!!b.map,ue=!!b.matcap,He=!!et,D=!!b.aoMap,Zi=!!b.lightMap,le=!!b.bumpMap,ce=!!b.normalMap,Rt=!!b.displacementMap,Pe=!!b.emissiveMap,Pt=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,H=b.clearcoat>0,Q=b.dispersion>0,it=b.iridescence>0,j=b.sheen>0,Tt=b.transmission>0,pt=S&&!!b.anisotropyMap,At=H&&!!b.clearcoatMap,de=H&&!!b.clearcoatNormalMap,lt=H&&!!b.clearcoatRoughnessMap,Mt=it&&!!b.iridescenceMap,Ut=it&&!!b.iridescenceThicknessMap,Gt=j&&!!b.sheenColorMap,St=j&&!!b.sheenRoughnessMap,he=!!b.specularMap,Qt=!!b.specularColorMap,Ce=!!b.specularIntensityMap,U=Tt&&!!b.transmissionMap,ft=Tt&&!!b.thicknessMap,$=!!b.gradientMap,tt=!!b.alphaMap,yt=b.alphaTest>0,_t=!!b.alphaHash,Zt=!!b.extensions;let Fe=Ps;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const pi={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:re,fragmentShader:Z,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:bt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:jt,batchingColor:jt&&I._colorsTexture!==null,instancing:kt,instancingColor:kt&&I.instanceColor!==null,instancingMorph:kt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ls,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:ue,envMap:He,envMapMode:He&&et.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Zi,bumpMap:le,normalMap:ce,displacementMap:f&&Rt,emissiveMap:Pe,normalMapObjectSpace:ce&&b.normalMapType===d_,normalMapTangentSpace:ce&&b.normalMapType===u_,metalnessMap:Pt,roughnessMap:R,anisotropy:S,anisotropyMap:pt,clearcoat:H,clearcoatMap:At,clearcoatNormalMap:de,clearcoatRoughnessMap:lt,dispersion:Q,iridescence:it,iridescenceMap:Mt,iridescenceThicknessMap:Ut,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:St,specularMap:he,specularColorMap:Qt,specularIntensityMap:Ce,transmission:Tt,transmissionMap:U,thicknessMap:ft,gradientMap:$,opaque:b.transparent===!1&&b.blending===_o&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:_t,combine:b.combine,mapUv:ge&&v(b.map.channel),aoMapUv:D&&v(b.aoMap.channel),lightMapUv:Zi&&v(b.lightMap.channel),bumpMapUv:le&&v(b.bumpMap.channel),normalMapUv:ce&&v(b.normalMap.channel),displacementMapUv:Rt&&v(b.displacementMap.channel),emissiveMapUv:Pe&&v(b.emissiveMap.channel),metalnessMapUv:Pt&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:pt&&v(b.anisotropyMap.channel),clearcoatMapUv:At&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(b.sheenRoughnessMap.channel),specularMapUv:he&&v(b.specularMap.channel),specularColorMapUv:Qt&&v(b.specularColorMap.channel),specularIntensityMapUv:Ce&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:ft&&v(b.thicknessMap.channel),alphaMapUv:tt&&v(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ce||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Y.attributes.uv&&(ge||tt),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:I.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&pe.getTransfer(b.map.colorSpace)===Te,decodeVideoTextureEmissive:Pe&&b.emissiveMap.isVideoTexture===!0&&pe.getTransfer(b.emissiveMap.colorSpace)===Te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Se,flipSided:b.side===ai,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&b.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pi.vertexUv1s=c.has(1),pi.vertexUv2s=c.has(2),pi.vertexUv3s=c.has(3),c.clear(),pi}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)M.push(B),M.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function A(b){const M=_[b.type];let B;if(M){const z=Hn[M];B=nv.clone(z.uniforms)}else B=b.uniforms;return B}function C(b,M){let B;for(let z=0,I=h.length;z<I;z++){const N=h[z];if(N.cacheKey===M){B=N,++B.usedTimes;break}}return B===void 0&&(B=new aA(i,M,b,r),h.push(B)),B}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:A,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:P}}function dA(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ud(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,_,v,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function a(u,f,d,_,v,p){const m=o(u,f,d,_,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,_,v,p){const m=o(u,f,d,_,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||fA),n.length>1&&n.sort(f||Dd),s.length>1&&s.sort(f||Dd)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function mA(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ud,i.set(n,[o])):s>=r.length?(o=new Ud,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pA(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function _A(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vA=0;function gA(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yA(i){const t=new pA,e=_A(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Re,o=new Re;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,_=0,v=0,p=0,m=0,x=0,y=0,A=0,C=0,T=0,E=0;c.sort(gA);for(let b=0,M=c.length;b<M;b++){const B=c[b],z=B.color,I=B.intensity,N=B.distance,Y=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=z.r*I,u+=z.g*I,f+=z.b*I;else if(B.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(B.sh.coefficients[k],I);E++}else if(B.isDirectionalLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const et=B.shadow,G=e.get(B);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=B.shadow.matrix,x++}n.directional[d]=k,d++}else if(B.isSpotLight){const k=t.get(B);k.position.setFromMatrixPosition(B.matrixWorld),k.color.copy(z).multiplyScalar(I),k.distance=N,k.coneCos=Math.cos(B.angle),k.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),k.decay=B.decay,n.spot[v]=k;const et=B.shadow;if(B.map&&(n.spotLightMap[C]=B.map,C++,et.updateMatrices(B),B.castShadow&&T++),n.spotLightMatrix[v]=et.matrix,B.castShadow){const G=e.get(B);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Y,A++}v++}else if(B.isRectAreaLight){const k=t.get(B);k.color.copy(z).multiplyScalar(I),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),n.rectArea[p]=k,p++}else if(B.isPointLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),k.distance=B.distance,k.decay=B.decay,B.castShadow){const et=B.shadow,G=e.get(B);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=B.shadow.matrix,y++}n.point[_]=k,_++}else if(B.isHemisphereLight){const k=t.get(B);k.skyColor.copy(B.color).multiplyScalar(I),k.groundColor.copy(B.groundColor).multiplyScalar(I),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==A||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=d,P.pointLength=_,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=A,P.numSpotMaps=C,P.numLightProbes=E,n.version=vA++)}function l(c,h){let u=0,f=0,d=0,_=0,v=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(y.isSpotLight){const A=n.spot[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const A=n.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const A=n.hemi[v];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Nd(i){const t=new yA(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xA(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Nd(i),t.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
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
}`;function SA(i,t,e){let n=new Nm;const s=new rt,r=new rt,o=new De,a=new Xv({depthPacking:h_}),l=new Yv,c={},h=e.maxTextureSize,u={[cs]:ai,[ai]:cs,[Se]:Se},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:AA,fragmentShader:MA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new ei;_.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mm;let m=this.type;this.render=function(T,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),z=i.state;z.setBlending(zi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=m!==rs&&this.type===rs,N=m===rs&&this.type!==rs;for(let Y=0,k=T.length;Y<k;Y++){const et=T[Y],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const nt=G.getFrameExtents();if(s.multiply(nt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||I===!0||N===!0){const gt=this.type!==rs?{minFilter:Pi,magFilter:Pi}:{};G.map!==null&&G.map.dispose(),G.map=new Si(s.x,s.y,gt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const dt=G.getViewportCount();for(let gt=0;gt<dt;gt++){const Ht=G.getViewport(gt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(o),G.updateMatrices(et,gt),n=G.getFrustum(),A(E,P,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===rs&&x(G,P),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,B)};function x(T,E){const P=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Si(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,d,v,null)}function y(T,E,P,b){let M=null;const B=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)M=B;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=M.uuid,I=E.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let Y=N[I];Y===void 0&&(Y=M.clone(),N[I]=Y,E.addEventListener("dispose",C)),M=Y}if(M.visible=E.visible,M.wireframe=E.wireframe,b===rs?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=P}return M}function A(T,E,P,b,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===rs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const I=t.update(T),N=T.material;if(Array.isArray(N)){const Y=I.groups;for(let k=0,et=Y.length;k<et;k++){const G=Y[k],nt=N[G.materialIndex];if(nt&&nt.visible){const dt=y(T,nt,b,M);T.onBeforeShadow(i,T,E,P,I,dt,G),i.renderBufferDirect(P,null,I,dt,T,G),T.onAfterShadow(i,T,E,P,I,dt,G)}}}else if(N.visible){const Y=y(T,N,b,M);T.onBeforeShadow(i,T,E,P,I,Y,null),i.renderBufferDirect(P,null,I,Y,T,null),T.onAfterShadow(i,T,E,P,I,Y,null)}}const z=T.children;for(let I=0,N=z.length;I<N;I++)A(z[I],E,P,b,M)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const b=c[P],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const bA={[rh]:Bl,[oh]:ch,[ah]:hh,[yo]:lh,[Bl]:rh,[ch]:oh,[hh]:ah,[lh]:yo};function wA(i,t){function e(){let U=!1;const ft=new De;let $=null;const tt=new De(0,0,0,0);return{setMask:function(yt){$!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),$=yt)},setLocked:function(yt){U=yt},setClear:function(yt,_t,Zt,Fe,pi){pi===!0&&(yt*=Fe,_t*=Fe,Zt*=Fe),ft.set(yt,_t,Zt,Fe),tt.equals(ft)===!1&&(i.clearColor(yt,_t,Zt,Fe),tt.copy(ft))},reset:function(){U=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,$=null,tt=null,yt=null;return{setReversed:function(_t){if(ft!==_t){const Zt=t.get("EXT_clip_control");ft?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Fe=yt;yt=null,this.setClear(Fe)}ft=_t},getReversed:function(){return ft},setTest:function(_t){_t?ht(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(_t){$!==_t&&!U&&(i.depthMask(_t),$=_t)},setFunc:function(_t){if(ft&&(_t=bA[_t]),tt!==_t){switch(_t){case rh:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case oh:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case ah:i.depthFunc(i.EQUAL);break;case lh:i.depthFunc(i.GEQUAL);break;case ch:i.depthFunc(i.GREATER);break;case hh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=_t}},setLocked:function(_t){U=_t},setClear:function(_t){yt!==_t&&(ft&&(_t=1-_t),i.clearDepth(_t),yt=_t)},reset:function(){U=!1,$=null,tt=null,yt=null,ft=!1}}}function s(){let U=!1,ft=null,$=null,tt=null,yt=null,_t=null,Zt=null,Fe=null,pi=null;return{setTest:function(be){U||(be?ht(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(be){ft!==be&&!U&&(i.stencilMask(be),ft=be)},setFunc:function(be,mn,Xn){($!==be||tt!==mn||yt!==Xn)&&(i.stencilFunc(be,mn,Xn),$=be,tt=mn,yt=Xn)},setOp:function(be,mn,Xn){(_t!==be||Zt!==mn||Fe!==Xn)&&(i.stencilOp(be,mn,Xn),_t=be,Zt=mn,Fe=Xn)},setLocked:function(be){U=be},setClear:function(be){pi!==be&&(i.clearStencil(be),pi=be)},reset:function(){U=!1,ft=null,$=null,tt=null,yt=null,_t=null,Zt=null,Fe=null,pi=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,v=!1,p=null,m=null,x=null,y=null,A=null,C=null,T=null,E=new Xt(0,0,0),P=0,b=!1,M=null,B=null,z=null,I=null,N=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,et=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=et>=2);let nt=null,dt={};const gt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),re=new De().fromArray(gt),Z=new De().fromArray(Ht);function at(U,ft,$,tt){const yt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(U,_t),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<$;Zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(ft+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return _t}const bt={};bt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(yo),le(!1),ce(Eu),ht(i.CULL_FACE),D(zi);function ht(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Dt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function kt(U,ft){return u[U]!==ft?(i.bindFramebuffer(U,ft),u[U]=ft,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function jt(U,ft){let $=d,tt=!1;if(U){$=f.get(ft),$===void 0&&($=[],f.set(ft,$));const yt=U.textures;if($.length!==yt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Zt=yt.length;_t<Zt;_t++)$[_t]=i.COLOR_ATTACHMENT0+_t;$.length=yt.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function ge(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const ue={[lr]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Op]:i.FUNC_REVERSE_SUBTRACT};ue[zp]=i.MIN,ue[Vp]=i.MAX;const He={[Hp]:i.ZERO,[kp]:i.ONE,[Gp]:i.SRC_COLOR,[nh]:i.SRC_ALPHA,[Jp]:i.SRC_ALPHA_SATURATE,[Yp]:i.DST_COLOR,[qp]:i.DST_ALPHA,[Wp]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[$p]:i.ONE_MINUS_DST_COLOR,[Xp]:i.ONE_MINUS_DST_ALPHA,[Zp]:i.CONSTANT_COLOR,[Kp]:i.ONE_MINUS_CONSTANT_COLOR,[jp]:i.CONSTANT_ALPHA,[Qp]:i.ONE_MINUS_CONSTANT_ALPHA};function D(U,ft,$,tt,yt,_t,Zt,Fe,pi,be){if(U===zi){v===!0&&(Dt(i.BLEND),v=!1);return}if(v===!1&&(ht(i.BLEND),v=!0),U!==Np){if(U!==p||be!==b){if((m!==lr||A!==lr)&&(i.blendEquation(i.FUNC_ADD),m=lr,A=lr),be)switch(U){case _o:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,y=null,C=null,T=null,E.set(0,0,0),P=0,p=U,b=be}return}yt=yt||ft,_t=_t||$,Zt=Zt||tt,(ft!==m||yt!==A)&&(i.blendEquationSeparate(ue[ft],ue[yt]),m=ft,A=yt),($!==x||tt!==y||_t!==C||Zt!==T)&&(i.blendFuncSeparate(He[$],He[tt],He[_t],He[Zt]),x=$,y=tt,C=_t,T=Zt),(Fe.equals(E)===!1||pi!==P)&&(i.blendColor(Fe.r,Fe.g,Fe.b,pi),E.copy(Fe),P=pi),p=U,b=!1}function Zi(U,ft){U.side===Se?Dt(i.CULL_FACE):ht(i.CULL_FACE);let $=U.side===ai;ft&&($=!$),le($),U.blending===_o&&U.transparent===!1?D(zi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function ce(U){U!==Lp?(ht(i.CULL_FACE),U!==B&&(U===Eu?i.cullFace(i.BACK):U===Dp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),B=U}function Rt(U){U!==z&&(k&&i.lineWidth(U),z=U)}function Pe(U,ft,$){U?(ht(i.POLYGON_OFFSET_FILL),(I!==ft||N!==$)&&(i.polygonOffset(ft,$),I=ft,N=$)):Dt(i.POLYGON_OFFSET_FILL)}function Pt(U){U?ht(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+Y-1),nt!==U&&(i.activeTexture(U),nt=U)}function S(U,ft,$){$===void 0&&(nt===null?$=i.TEXTURE0+Y-1:$=nt);let tt=dt[$];tt===void 0&&(tt={type:void 0,texture:void 0},dt[$]=tt),(tt.type!==U||tt.texture!==ft)&&(nt!==$&&(i.activeTexture($),nt=$),i.bindTexture(U,ft||bt[U]),tt.type=U,tt.texture=ft)}function H(){const U=dt[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(U){re.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function St(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function he(U,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let tt=$.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(ft,U.name),$.set(U,tt))}function Qt(U,ft){const tt=c.get(ft).get(U);l.get(ft)!==tt&&(i.uniformBlockBinding(ft,tt,U.__bindingPointIndex),l.set(ft,tt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,dt={},u={},f=new WeakMap,d=[],_=null,v=!1,p=null,m=null,x=null,y=null,A=null,C=null,T=null,E=new Xt(0,0,0),P=0,b=!1,M=null,B=null,z=null,I=null,N=null,re.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Dt,bindFramebuffer:kt,drawBuffers:jt,useProgram:ge,setBlending:D,setMaterial:Zi,setFlipSided:le,setCullFace:ce,setLineWidth:Rt,setPolygonOffset:Pe,setScissorTest:Pt,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:Mt,texImage3D:Ut,updateUBOMapping:he,uniformBlockBinding:Qt,texStorage2D:de,texStorage3D:lt,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:At,scissor:Gt,viewport:St,reset:Ce}}function TA(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return d?new OffscreenCanvas(R,S):ra("canvas")}function v(R,S,H){let Q=1;const it=Pt(R);if((it.width>H||it.height>H)&&(Q=H/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Q*it.width),Tt=Math.floor(Q*it.height);u===void 0&&(u=_(j,Tt));const pt=S?_(j,Tt):u;return pt.width=j,pt.height=Tt,pt.getContext("2d").drawImage(R,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Tt+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,H,Q,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),S===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),S===i.RGBA){const Tt=it?Il:pe.getTransfer(Q);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=Tt===Te?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function A(R,S){let H;return R?S===null||S===vr||S===gr?H=i.DEPTH24_STENCIL8:S===Tn?H=i.DEPTH32F_STENCIL8:S===na&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vr||S===gr?H=i.DEPTH_COMPONENT24:S===Tn?H=i.DEPTH_COMPONENT32F:S===na&&(H=i.DEPTH_COMPONENT16),H}function C(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pi&&R.minFilter!==gi?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function E(R){const S=R.target;S.removeEventListener("dispose",E),M(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const H=R.source,Q=f.get(H);if(Q){const it=Q[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(R),Object.keys(Q).length===0&&f.delete(H)}n.remove(R)}function b(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const H=R.source,Q=f.get(H);delete Q[S.__cacheKey],o.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let it=0;it<S.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,it=H.length;Q<it;Q++){const j=n.get(H[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(R)}let B=0;function z(){B=0}function I(){const R=B;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function N(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Y(R,S){const H=n.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,R,S);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function k(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Z(H,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function et(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){Z(H,R,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function G(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){at(H,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const nt={[fh]:i.REPEAT,[ur]:i.CLAMP_TO_EDGE,[mh]:i.MIRRORED_REPEAT},dt={[Pi]:i.NEAREST,[c_]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[gi]:i.LINEAR,[$l]:i.LINEAR_MIPMAP_NEAREST,[dr]:i.LINEAR_MIPMAP_LINEAR},gt={[f_]:i.NEVER,[y_]:i.ALWAYS,[m_]:i.LESS,[Tm]:i.LEQUAL,[p_]:i.EQUAL,[g_]:i.GEQUAL,[__]:i.GREATER,[v_]:i.NOTEQUAL};function Ht(R,S){if(S.type===Tn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===gi||S.magFilter===$l||S.magFilter===xa||S.magFilter===dr||S.minFilter===gi||S.minFilter===$l||S.minFilter===xa||S.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,nt[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,dt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pi||S.minFilter!==xa&&S.minFilter!==dr||S.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function re(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const Q=S.source;let it=f.get(Q);it===void 0&&(it={},f.set(Q,it));const j=N(S);if(j!==R.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[j].usedTimes++;const Tt=it[R.__cacheKey];Tt!==void 0&&(it[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(S)),R.__cacheKey=j,R.__webglTexture=it[j].texture}return H}function Z(R,S,H){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);const it=re(R,S),j=S.source;e.bindTexture(Q,R.__webglTexture,i.TEXTURE0+H);const Tt=n.get(j);if(j.version!==Tt.__version||it===!0){e.activeTexture(i.TEXTURE0+H);const pt=pe.getPrimaries(pe.workingColorSpace),At=S.colorSpace===kn?null:pe.getPrimaries(S.colorSpace),de=S.colorSpace===kn||pt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let lt=v(S.image,!1,s.maxTextureSize);lt=Pe(S,lt);const Mt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type);let Gt=y(S.internalFormat,Mt,Ut,S.colorSpace,S.isVideoTexture);Ht(Q,S);let St;const he=S.mipmaps,Qt=S.isVideoTexture!==!0,Ce=Tt.__version===void 0||it===!0,U=j.dataReady,ft=C(S,lt);if(S.isDepthTexture)Gt=A(S.format===yr,S.type),Ce&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Gt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Mt,Ut,null));else if(S.isDataTexture)if(he.length>0){Qt&&Ce&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,he[0].width,he[0].height);for(let $=0,tt=he.length;$<tt;$++)St=he[$],Qt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(i.TEXTURE_2D,$,Gt,St.width,St.height,0,Mt,Ut,St.data);S.generateMipmaps=!1}else Qt?(Ce&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,lt.width,lt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Ut,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,Mt,Ut,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qt&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Gt,he[0].width,he[0].height,lt.depth);for(let $=0,tt=he.length;$<tt;$++)if(St=he[$],S.format!==En)if(Mt!==null)if(Qt){if(U)if(S.layerUpdates.size>0){const yt=dd(St.width,St.height,S.format,S.type);for(const _t of S.layerUpdates){const Zt=St.data.subarray(_t*yt/St.data.BYTES_PER_ELEMENT,(_t+1)*yt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,_t,St.width,St.height,1,Mt,Zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,St.width,St.height,lt.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Gt,St.width,St.height,lt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,St.width,St.height,lt.depth,Mt,Ut,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Gt,St.width,St.height,lt.depth,0,Mt,Ut,St.data)}else{Qt&&Ce&&e.texStorage2D(i.TEXTURE_2D,ft,Gt,he[0].width,he[0].height);for(let $=0,tt=he.length;$<tt;$++)St=he[$],S.format!==En?Mt!==null?Qt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Gt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,St.width,St.height,Mt,Ut,St.data):e.texImage2D(i.TEXTURE_2D,$,Gt,St.width,St.height,0,Mt,Ut,St.data)}else if(S.isDataArrayTexture)if(Qt){if(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Gt,lt.width,lt.height,lt.depth),U)if(S.layerUpdates.size>0){const $=dd(lt.width,lt.height,S.format,S.type);for(const tt of S.layerUpdates){const yt=lt.data.subarray(tt*$/lt.data.BYTES_PER_ELEMENT,(tt+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,Mt,Ut,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Ut,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,lt.width,lt.height,lt.depth,0,Mt,Ut,lt.data);else if(S.isData3DTexture)Qt?(Ce&&e.texStorage3D(i.TEXTURE_3D,ft,Gt,lt.width,lt.height,lt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Ut,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,lt.width,lt.height,lt.depth,0,Mt,Ut,lt.data);else if(S.isFramebufferTexture){if(Ce)if(Qt)e.texStorage2D(i.TEXTURE_2D,ft,Gt,lt.width,lt.height);else{let $=lt.width,tt=lt.height;for(let yt=0;yt<ft;yt++)e.texImage2D(i.TEXTURE_2D,yt,Gt,$,tt,0,Mt,Ut,null),$>>=1,tt>>=1}}else if(he.length>0){if(Qt&&Ce){const $=Pt(he[0]);e.texStorage2D(i.TEXTURE_2D,ft,Gt,$.width,$.height)}for(let $=0,tt=he.length;$<tt;$++)St=he[$],Qt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Mt,Ut,St):e.texImage2D(i.TEXTURE_2D,$,Gt,Mt,Ut,St);S.generateMipmaps=!1}else if(Qt){if(Ce){const $=Pt(lt);e.texStorage2D(i.TEXTURE_2D,ft,Gt,$.width,$.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ut,lt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Mt,Ut,lt);p(S)&&m(Q),Tt.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function at(R,S,H){if(S.image.length!==6)return;const Q=re(R,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const j=n.get(it);if(it.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const Tt=pe.getPrimaries(pe.workingColorSpace),pt=S.colorSpace===kn?null:pe.getPrimaries(S.colorSpace),At=S.colorSpace===kn||Tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!de&&!lt?Mt[tt]=v(S.image[tt],!0,s.maxCubemapSize):Mt[tt]=lt?S.image[tt].image:S.image[tt],Mt[tt]=Pe(S,Mt[tt]);const Ut=Mt[0],Gt=r.convert(S.format,S.colorSpace),St=r.convert(S.type),he=y(S.internalFormat,Gt,St,S.colorSpace),Qt=S.isVideoTexture!==!0,Ce=j.__version===void 0||Q===!0,U=it.dataReady;let ft=C(S,Ut);Ht(i.TEXTURE_CUBE_MAP,S);let $;if(de){Qt&&Ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,he,Ut.width,Ut.height);for(let tt=0;tt<6;tt++){$=Mt[tt].mipmaps;for(let yt=0;yt<$.length;yt++){const _t=$[yt];S.format!==En?Gt!==null?Qt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,_t.width,_t.height,Gt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,he,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,_t.width,_t.height,Gt,St,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,he,_t.width,_t.height,0,Gt,St,_t.data)}}}else{if($=S.mipmaps,Qt&&Ce){$.length>0&&ft++;const tt=Pt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,he,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,Gt,St,Mt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,he,Mt[tt].width,Mt[tt].height,0,Gt,St,Mt[tt].data);for(let yt=0;yt<$.length;yt++){const Zt=$[yt].image[tt].image;Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Zt.width,Zt.height,Gt,St,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,he,Zt.width,Zt.height,0,Gt,St,Zt.data)}}else{Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Gt,St,Mt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,he,Gt,St,Mt[tt]);for(let yt=0;yt<$.length;yt++){const _t=$[yt];Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Gt,St,_t.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,he,Gt,St,_t.image[tt])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),j.__version=it.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function bt(R,S,H,Q,it,j){const Tt=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),At=y(H.internalFormat,Tt,pt,H.colorSpace),de=n.get(S),lt=n.get(H);if(lt.__renderTarget=S,!de.__hasExternalTextures){const Mt=Math.max(1,S.width>>j),Ut=Math.max(1,S.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,At,Mt,Ut,S.depth,0,Tt,pt,null):e.texImage2D(it,j,At,Mt,Ut,0,Tt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,lt.__webglTexture,0,le(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,lt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(R,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Q=S.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,j=A(S.stencilBuffer,it),Tt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=le(S);ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,j,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,R)}else{const Q=S.textures;for(let it=0;it<Q.length;it++){const j=Q[it],Tt=r.convert(j.format,j.colorSpace),pt=r.convert(j.type),At=y(j.internalFormat,Tt,pt,j.colorSpace),de=le(S);H&&ce(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,At,S.width,S.height):ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const it=Q.__webglTexture,j=le(S);if(S.depthTexture.format===vo)ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(S.depthTexture.format===yr)ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function kt(R){const S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=Q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Dt(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[Q],R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(R,S,H){const Q=n.get(R);S!==void 0&&bt(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&kt(R)}function ge(R){const S=R.texture,H=n.get(R),Q=n.get(S);R.addEventListener("dispose",E);const it=R.textures,j=R.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let At=0;At<S.mipmaps.length;At++)H.__webglFramebuffer[pt][At]=i.createFramebuffer()}else H.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)H.__webglFramebuffer[pt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let pt=0,At=it.length;pt<At;pt++){const de=n.get(it[pt]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ce(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){const At=it[pt];H.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);const de=r.convert(At.format,At.colorSpace),lt=r.convert(At.type),Mt=y(At.internalFormat,de,lt,At.colorSpace,R.isXRRenderTarget===!0),Ut=le(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)bt(H.__webglFramebuffer[pt][At],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At);else bt(H.__webglFramebuffer[pt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,At=it.length;pt<At;pt++){const de=it[pt],lt=n.get(de);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Ht(i.TEXTURE_2D,de),bt(H.__webglFramebuffer,R,de,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),p(de)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),Ht(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)bt(H.__webglFramebuffer[At],R,S,i.COLOR_ATTACHMENT0,pt,At);else bt(H.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,pt,0);p(S)&&m(pt),e.unbindTexture()}R.depthBuffer&&kt(R)}function ue(R){const S=R.textures;for(let H=0,Q=S.length;H<Q;H++){const it=S[H];if(p(it)){const j=x(R),Tt=n.get(it).__webglTexture;e.bindTexture(j,Tt),m(j),e.unbindTexture()}}}const He=[],D=[];function Zi(R){if(R.samples>0){if(ce(R)===!1){const S=R.textures,H=R.width,Q=R.height;let it=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(R),pt=S.length>1;if(pt)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const de=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,it,i.NEAREST),l===!0&&(He.length=0,D.length=0,He.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(j),D.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const de=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,de,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function le(R){return Math.min(s.maxSamples,R.samples)}function ce(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Pe(R,S){const H=R.colorSpace,Q=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ls&&H!==kn&&(pe.getTransfer(H)===Te?(Q!==En||it!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=jt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Zi,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ce}function EA(i,t){function e(n,s=kn){let r;const o=pe.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===$h)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ym)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vm)return i.BYTE;if(n===gm)return i.SHORT;if(n===na)return i.UNSIGNED_SHORT;if(n===Yh)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===fa)return i.HALF_FLOAT;if(n===xm)return i.ALPHA;if(n===Am)return i.RGB;if(n===En)return i.RGBA;if(n===Mm)return i.LUMINANCE;if(n===Sm)return i.LUMINANCE_ALPHA;if(n===vo)return i.DEPTH_COMPONENT;if(n===yr)return i.DEPTH_STENCIL;if(n===Zh)return i.RED;if(n===Kh)return i.RED_INTEGER;if(n===bm)return i.RG;if(n===jh)return i.RG_INTEGER;if(n===Qh)return i.RGBA_INTEGER;if(n===wl||n===Tl||n===El||n===Cl)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ph||n===_h||n===vh||n===gh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===xh||n===Ah)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yh||n===xh)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ah)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mh||n===Sh||n===bh||n===wh||n===Th||n===Eh||n===Ch||n===Rh||n===Ph||n===Bh||n===Ih||n===Lh||n===Dh||n===Uh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Th)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Nh||n===Fh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wm||n===Oh||n===zh||n===Vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const CA={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
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

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:RA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends us{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const v=new BA,p=e.getContextAttributes();let m=null,x=null;const y=[],A=[],C=new rt;let T=null;const E=new hn;E.viewport=new De;const P=new hn;P.viewport=new De;const b=[E,P],M=new Qv;let B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=y[Z];return at===void 0&&(at=new wc,y[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=y[Z];return at===void 0&&(at=new wc,y[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=y[Z];return at===void 0&&(at=new wc,y[Z]=at),at.getHandSpace()};function I(Z){const at=A.indexOf(Z.inputSource);if(at===-1)return;const bt=y[at];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,c||o),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<y.length;Z++){const at=A[Z];at!==null&&(A[Z]=null,y[Z].disconnect(at))}B=null,z=null,v.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,x=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",N),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const at={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Si(d.framebufferWidth,d.framebufferHeight,{format:En,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let at=null,bt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=p.stencil?yr:vo,bt=p.stencil?gr:vr);const Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Si(f.textureWidth,f.textureHeight,{format:En,type:Mi,depthTexture:new nu(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(Z){for(let at=0;at<Z.removed.length;at++){const bt=Z.removed[at],ht=A.indexOf(bt);ht>=0&&(A[ht]=null,y[ht].disconnect(bt))}for(let at=0;at<Z.added.length;at++){const bt=Z.added[at];let ht=A.indexOf(bt);if(ht===-1){for(let kt=0;kt<y.length;kt++)if(kt>=A.length){A.push(bt),ht=kt;break}else if(A[kt]===null){A[kt]=bt,ht=kt;break}if(ht===-1)break}const Dt=y[ht];Dt&&Dt.connect(bt)}}const k=new L,et=new L;function G(Z,at,bt){k.setFromMatrixPosition(at.matrixWorld),et.setFromMatrixPosition(bt.matrixWorld);const ht=k.distanceTo(et),Dt=at.projectionMatrix.elements,kt=bt.projectionMatrix.elements,jt=Dt[14]/(Dt[10]-1),ge=Dt[14]/(Dt[10]+1),ue=(Dt[9]+1)/Dt[5],He=(Dt[9]-1)/Dt[5],D=(Dt[8]-1)/Dt[0],Zi=(kt[8]+1)/kt[0],le=jt*D,ce=jt*Zi,Rt=ht/(-D+Zi),Pe=Rt*-D;if(at.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(Rt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Pt=jt+Rt,R=ge+Rt,S=le-Pe,H=ce+(ht-Pe),Q=ue*ge/R*Pt,it=He*ge/R*Pt;Z.projectionMatrix.makePerspective(S,H,Q,it,Pt,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function nt(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,bt=Z.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),M.near=P.near=E.near=at,M.far=P.far=E.far=bt,(B!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),B=M.near,z=M.far),E.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=E.layers.mask|P.layers.mask;const ht=Z.parent,Dt=M.cameras;nt(M,ht);for(let kt=0;kt<Dt.length;kt++)nt(Dt[kt],ht);Dt.length===2?G(M,E,P):M.projectionMatrix.copy(E.projectionMatrix),dt(Z,M,ht)};function dt(Z,at,bt){bt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let gt=null;function Ht(Z,at){if(h=at.getViewerPose(c||o),_=at,h!==null){const bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ht=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let kt=0;kt<bt.length;kt++){const jt=bt[kt];let ge=null;if(d!==null)ge=d.getViewport(jt);else{const He=u.getViewSubImage(f,jt);ge=He.viewport,kt===0&&(t.setRenderTargetTextures(x,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),t.setRenderTarget(x))}let ue=b[kt];ue===void 0&&(ue=new hn,ue.layers.enable(kt),ue.viewport=new De,b[kt]=ue),ue.matrix.fromArray(jt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(jt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ge.x,ge.y,ge.width,ge.height),kt===0&&(M.matrix.copy(ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(ue)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const kt=u.getDepthInformation(bt[0]);kt&&kt.isValid&&kt.texture&&v.init(t,kt,s.renderState)}}for(let bt=0;bt<y.length;bt++){const ht=A[bt],Dt=y[bt];ht!==null&&Dt!==void 0&&Dt.update(ht,at,c||o)}gt&&gt(Z,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),_=null}const re=new Xm;re.setAnimationLoop(Ht),this.setAnimationLoop=function(Z){gt=Z},this.dispose=function(){}}}const qs=new hs,LA=new Re;function DA(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Dm(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,y,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,A)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ai&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ai&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),y=x.envMap,A=x.envMapRotation;y&&(p.envMap.value=y,qs.copy(A),qs.x*=-1,qs.y*=-1,qs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),p.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(qs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ai&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function UA(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const A=y.program;n.uniformBlockBinding(x,A)}function c(x,y){let A=s[x.id];A===void 0&&(_(x),A=h(x),s[x.id]=A,x.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(x,C);const T=t.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){const y=u();x.__bindingPointIndex=y;const A=i.createBuffer(),C=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=s[x.id],A=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,E=A.length;T<E;T++){const P=Array.isArray(A[T])?A[T]:[A[T]];for(let b=0,M=P.length;b<M;b++){const B=P[b];if(d(B,T,b,C)===!0){const z=B.__offset,I=Array.isArray(B.value)?B.value:[B.value];let N=0;for(let Y=0;Y<I.length;Y++){const k=I[Y],et=v(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+N,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,N),N+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,A,C){const T=x.value,E=y+"_"+A;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const P=C[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(x){const y=x.uniforms;let A=0;const C=16;for(let E=0,P=y.length;E<P;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,B=b.length;M<B;M++){const z=b[M],I=Array.isArray(z.value)?z.value:[z.value];for(let N=0,Y=I.length;N<Y;N++){const k=I[N],et=v(k),G=A%C,nt=G%et.boundary,dt=G+nt;A+=nt,dt!==0&&C-dt<et.storage&&(A+=C-dt),z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=et.storage}}}const T=A%C;return T>0&&(A+=C-T),x.__size=A,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class NA{constructor(t={}){const{canvas:e=N_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=Ps,this.toneMappingExposure=1;const A=this;let C=!1,T=0,E=0,P=null,b=-1,M=null;const B=new De,z=new De;let I=null;const N=new Xt(0);let Y=0,k=e.width,et=e.height,G=1,nt=null,dt=null;const gt=new De(0,0,k,et),Ht=new De(0,0,k,et);let re=!1;const Z=new Nm;let at=!1,bt=!1;const ht=new Re,Dt=new Re,kt=new L,jt=new De,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function He(){return P===null?G:1}let D=n;function Zi(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),D===null){const F="webgl2";if(D=Zi(F,w),D===null)throw Zi(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let le,ce,Rt,Pe,Pt,R,S,H,Q,it,j,Tt,pt,At,de,lt,Mt,Ut,Gt,St,he,Qt,Ce,U;function ft(){le=new qy(D),le.init(),Qt=new EA(D,le),ce=new zy(D,le,t,Qt),Rt=new wA(D,le),ce.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),Pe=new $y(D),Pt=new dA,R=new TA(D,le,Rt,Pt,ce,Qt,Pe),S=new Hy(A),H=new Wy(A),Q=new e0(D),Ce=new Fy(D,Q),it=new Xy(D,Q,Pe,Ce),j=new Zy(D,it,Q,Pe),Gt=new Jy(D,ce,R),lt=new Vy(Pt),Tt=new uA(A,S,H,le,ce,Ce,lt),pt=new DA(A,Pt),At=new mA,de=new xA(le),Ut=new Ny(A,S,H,Rt,j,d,l),Mt=new SA(A,j,ce),U=new UA(D,Pe,ce,Rt),St=new Oy(D,le,Pe),he=new Yy(D,le,Pe),Pe.programs=Tt.programs,A.capabilities=ce,A.extensions=le,A.properties=Pt,A.renderLists=At,A.shadowMap=Mt,A.state=Rt,A.info=Pe}ft();const $=new IA(A,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(k,et,!1))},this.getSize=function(w){return w.set(k,et)},this.setSize=function(w,F,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,et=F,e.width=Math.floor(w*G),e.height=Math.floor(F*G),W===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(k*G,et*G).floor()},this.setDrawingBufferSize=function(w,F,W){k=w,et=F,G=W,e.width=Math.floor(w*W),e.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(gt)},this.setViewport=function(w,F,W,q){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,F,W,q),Rt.viewport(B.copy(gt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Ht)},this.setScissor=function(w,F,W,q){w.isVector4?Ht.set(w.x,w.y,w.z,w.w):Ht.set(w,F,W,q),Rt.scissor(z.copy(Ht).multiplyScalar(G).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){Rt.setScissorTest(re=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,F=!0,W=!0){let q=0;if(w){let O=!1;if(P!==null){const ot=P.texture.format;O=ot===Qh||ot===jh||ot===Kh}if(O){const ot=P.texture.type,mt=ot===Mi||ot===vr||ot===na||ot===gr||ot===$h||ot===Jh,xt=Ut.getClearColor(),wt=Ut.getClearAlpha(),Wt=xt.r,Yt=xt.g,Bt=xt.b;mt?(_[0]=Wt,_[1]=Yt,_[2]=Bt,_[3]=wt,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=Wt,v[1]=Yt,v[2]=Bt,v[3]=wt,D.clearBufferiv(D.COLOR,0,v))}else q|=D.COLOR_BUFFER_BIT}F&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ut.dispose(),At.dispose(),de.dispose(),Pt.dispose(),S.dispose(),H.dispose(),j.dispose(),Ce.dispose(),U.dispose(),Tt.dispose(),$.dispose(),$.removeEventListener("sessionstart",xu),$.removeEventListener("sessionend",Au),Os.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Pe.autoReset,F=Mt.enabled,W=Mt.autoUpdate,q=Mt.needsUpdate,O=Mt.type;ft(),Pe.autoReset=w,Mt.enabled=F,Mt.autoUpdate=W,Mt.needsUpdate=q,Mt.type=O}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zt(w){const F=w.target;F.removeEventListener("dispose",Zt),Fe(F)}function Fe(w){pi(w),Pt.remove(w)}function pi(w){const F=Pt.get(w).programs;F!==void 0&&(F.forEach(function(W){Tt.releaseProgram(W)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,q,O,ot){F===null&&(F=ge);const mt=O.isMesh&&O.matrixWorld.determinant()<0,xt=Cp(w,F,W,q,O);Rt.setMaterial(q,mt);let wt=W.index,Wt=1;if(q.wireframe===!0){if(wt=it.getWireframeAttribute(W),wt===void 0)return;Wt=2}const Yt=W.drawRange,Bt=W.attributes.position;let fe=Yt.start*Wt,xe=(Yt.start+Yt.count)*Wt;ot!==null&&(fe=Math.max(fe,ot.start*Wt),xe=Math.min(xe,(ot.start+ot.count)*Wt)),wt!==null?(fe=Math.max(fe,0),xe=Math.min(xe,wt.count)):Bt!=null&&(fe=Math.max(fe,0),xe=Math.min(xe,Bt.count));const ke=xe-fe;if(ke<0||ke===1/0)return;Ce.setup(O,q,xt,W,wt);let Oe,me=St;if(wt!==null&&(Oe=Q.get(wt),me=he,me.setIndex(Oe)),O.isMesh)q.wireframe===!0?(Rt.setLineWidth(q.wireframeLinewidth*He()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(O.isLine){let It=q.linewidth;It===void 0&&(It=1),Rt.setLineWidth(It*He()),O.isLineSegments?me.setMode(D.LINES):O.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else O.isPoints?me.setMode(D.POINTS):O.isSprite&&me.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)me.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))me.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const It=O._multiDrawStarts,ci=O._multiDrawCounts,Ae=O._multiDrawCount,pn=wt?Q.get(wt).bytesPerElement:1,Pr=Pt.get(q).currentProgram.getUniforms();for(let Vi=0;Vi<Ae;Vi++)Pr.setValue(D,"_gl_DrawID",Vi),me.render(It[Vi]/pn,ci[Vi])}else if(O.isInstancedMesh)me.renderInstances(fe,ke,O.count);else if(W.isInstancedBufferGeometry){const It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ci=Math.min(W.instanceCount,It);me.renderInstances(fe,ke,ci)}else me.render(fe,ke)};function be(w,F,W){w.transparent===!0&&w.side===Se&&w.forceSinglePass===!1?(w.side=ai,w.needsUpdate=!0,ya(w,F,W),w.side=cs,w.needsUpdate=!0,ya(w,F,W),w.side=Se):ya(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),m=de.get(W),m.init(F),y.push(m),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const q=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const xt=ot[mt];be(xt,W,O),q.add(xt)}else be(ot,W,O),q.add(ot)}),y.pop(),m=null,q},this.compileAsync=function(w,F,W=null){const q=this.compile(w,F,W);return new Promise(O=>{function ot(){if(q.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){O(w);return}setTimeout(ot,10)}le.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let mn=null;function Xn(w){mn&&mn(w)}function xu(){Os.stop()}function Au(){Os.start()}const Os=new Xm;Os.setAnimationLoop(Xn),typeof self<"u"&&Os.setContext(self),this.setAnimationLoop=function(w){mn=w,$.setAnimationLoop(w),w===null?Os.stop():Os.start()},$.addEventListener("sessionstart",xu),$.addEventListener("sessionend",Au),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,F,P),m=de.get(w,y.length),m.init(F),y.push(m),Dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,at=lt.init(this.clippingPlanes,bt),p=At.get(w,x.length),p.init(),x.push(p),$.enabled===!0&&$.isPresenting===!0){const ot=A.xr.getDepthSensingMesh();ot!==null&&Xl(ot,F,-1/0,A.sortObjects)}Xl(w,F,0,A.sortObjects),p.finish(),A.sortObjects===!0&&p.sort(nt,dt),ue=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ue&&Ut.addToRenderList(p,w),this.info.render.frame++,at===!0&&lt.beginShadows();const W=m.state.shadowsArray;Mt.render(W,w,F),at===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,O=p.transmissive;if(m.setupLights(),F.isArrayCamera){const ot=F.cameras;if(O.length>0)for(let mt=0,xt=ot.length;mt<xt;mt++){const wt=ot[mt];Su(q,O,w,wt)}ue&&Ut.render(w);for(let mt=0,xt=ot.length;mt<xt;mt++){const wt=ot[mt];Mu(p,w,wt,wt.viewport)}}else O.length>0&&Su(q,O,w,F),ue&&Ut.render(w),Mu(p,w,F);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(A,w,F),Ce.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],at===!0&&lt.setGlobalState(A.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Xl(w,F,W,q){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){q&&jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);const mt=j.update(w),xt=w.material;xt.visible&&p.push(w,mt,xt,W,jt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const mt=j.update(w),xt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),jt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),jt.copy(mt.boundingSphere.center)),jt.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(xt)){const wt=mt.groups;for(let Wt=0,Yt=wt.length;Wt<Yt;Wt++){const Bt=wt[Wt],fe=xt[Bt.materialIndex];fe&&fe.visible&&p.push(w,mt,fe,W,jt.z,Bt)}}else xt.visible&&p.push(w,mt,xt,W,jt.z,null)}}const ot=w.children;for(let mt=0,xt=ot.length;mt<xt;mt++)Xl(ot[mt],F,W,q)}function Mu(w,F,W,q){const O=w.opaque,ot=w.transmissive,mt=w.transparent;m.setupLightsView(W),at===!0&&lt.setGlobalState(A.clippingPlanes,W),q&&Rt.viewport(B.copy(q)),O.length>0&&ga(O,F,W),ot.length>0&&ga(ot,F,W),mt.length>0&&ga(mt,F,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Su(w,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Si(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?fa:Mi,minFilter:dr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ot=m.state.transmissionRenderTarget[q.id],mt=q.viewport||B;ot.setSize(mt.z,mt.w);const xt=A.getRenderTarget();A.setRenderTarget(ot),A.getClearColor(N),Y=A.getClearAlpha(),Y<1&&A.setClearColor(16777215,.5),A.clear(),ue&&Ut.render(W);const wt=A.toneMapping;A.toneMapping=Ps;const Wt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),at===!0&&lt.setGlobalState(A.clippingPlanes,q),ga(w,W,q),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),le.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Bt=0,fe=F.length;Bt<fe;Bt++){const xe=F[Bt],ke=xe.object,Oe=xe.geometry,me=xe.material,It=xe.group;if(me.side===Se&&ke.layers.test(q.layers)){const ci=me.side;me.side=ai,me.needsUpdate=!0,bu(ke,W,q,Oe,me,It),me.side=ci,me.needsUpdate=!0,Yt=!0}}Yt===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}A.setRenderTarget(xt),A.setClearColor(N,Y),Wt!==void 0&&(q.viewport=Wt),A.toneMapping=wt}function ga(w,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ot=w.length;O<ot;O++){const mt=w[O],xt=mt.object,wt=mt.geometry,Wt=q===null?mt.material:q,Yt=mt.group;xt.layers.test(W.layers)&&bu(xt,F,W,wt,Wt,Yt)}}function bu(w,F,W,q,O,ot){w.onBeforeRender(A,F,W,q,O,ot),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(A,F,W,q,w,ot),O.transparent===!0&&O.side===Se&&O.forceSinglePass===!1?(O.side=ai,O.needsUpdate=!0,A.renderBufferDirect(W,F,q,O,w,ot),O.side=cs,O.needsUpdate=!0,A.renderBufferDirect(W,F,q,O,w,ot),O.side=Se):A.renderBufferDirect(W,F,q,O,w,ot),w.onAfterRender(A,F,W,q,O,ot)}function ya(w,F,W){F.isScene!==!0&&(F=ge);const q=Pt.get(w),O=m.state.lights,ot=m.state.shadowsArray,mt=O.state.version,xt=Tt.getParameters(w,O.state,ot,F,W),wt=Tt.getProgramCacheKey(xt);let Wt=q.programs;q.environment=w.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(w.isMeshStandardMaterial?H:S).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Zt),Wt=new Map,q.programs=Wt);let Yt=Wt.get(wt);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===mt)return Tu(w,xt),Yt}else xt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(xt,A),Yt=Tt.acquireProgram(xt,wt),Wt.set(wt,Yt),q.uniforms=xt.uniforms;const Bt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=lt.uniform),Tu(w,xt),q.needsLights=Pp(w),q.lightsStateVersion=mt,q.needsLights&&(Bt.ambientLightColor.value=O.state.ambient,Bt.lightProbe.value=O.state.probe,Bt.directionalLights.value=O.state.directional,Bt.directionalLightShadows.value=O.state.directionalShadow,Bt.spotLights.value=O.state.spot,Bt.spotLightShadows.value=O.state.spotShadow,Bt.rectAreaLights.value=O.state.rectArea,Bt.ltc_1.value=O.state.rectAreaLTC1,Bt.ltc_2.value=O.state.rectAreaLTC2,Bt.pointLights.value=O.state.point,Bt.pointLightShadows.value=O.state.pointShadow,Bt.hemisphereLights.value=O.state.hemi,Bt.directionalShadowMap.value=O.state.directionalShadowMap,Bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Bt.spotShadowMap.value=O.state.spotShadowMap,Bt.spotLightMatrix.value=O.state.spotLightMatrix,Bt.spotLightMap.value=O.state.spotLightMap,Bt.pointShadowMap.value=O.state.pointShadowMap,Bt.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function wu(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Pl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Tu(w,F){const W=Pt.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Cp(w,F,W,q,O){F.isScene!==!0&&(F=ge),R.resetTextureUnits();const ot=F.fog,mt=q.isMeshStandardMaterial?F.environment:null,xt=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ls,wt=(q.isMeshStandardMaterial?H:S).get(q.envMap||mt),Wt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Yt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!W.morphAttributes.position,fe=!!W.morphAttributes.normal,xe=!!W.morphAttributes.color;let ke=Ps;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ke=A.toneMapping);const Oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=Oe!==void 0?Oe.length:0,It=Pt.get(q),ci=m.state.lights;if(at===!0&&(bt===!0||w!==M)){const Ti=w===M&&q.id===b;lt.setState(q,w,Ti)}let Ae=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ci.state.version||It.outputColorSpace!==xt||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==wt||q.fog===!0&&It.fog!==ot||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==Wt||It.vertexTangents!==Yt||It.morphTargets!==Bt||It.morphNormals!==fe||It.morphColors!==xe||It.toneMapping!==ke||It.morphTargetsCount!==me)&&(Ae=!0):(Ae=!0,It.__version=q.version);let pn=It.currentProgram;Ae===!0&&(pn=ya(q,F,O));let Pr=!1,Vi=!1,wo=!1;const Ie=pn.getUniforms(),Ki=It.uniforms;if(Rt.useProgram(pn.program)&&(Pr=!0,Vi=!0,wo=!0),q.id!==b&&(b=q.id,Vi=!0),Pr||M!==w){Rt.buffers.depth.getReversed()?(ht.copy(w.projectionMatrix),O_(ht),z_(ht),Ie.setValue(D,"projectionMatrix",ht)):Ie.setValue(D,"projectionMatrix",w.projectionMatrix),Ie.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ii=Ie.map.cameraPosition;Ii!==void 0&&Ii.setValue(D,kt.setFromMatrixPosition(w.matrixWorld)),ce.logarithmicDepthBuffer&&Ie.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ie.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Vi=!0,wo=!0)}if(O.isSkinnedMesh){Ie.setOptional(D,O,"bindMatrix"),Ie.setOptional(D,O,"bindMatrixInverse");const Ti=O.skeleton;Ti&&(Ti.boneTexture===null&&Ti.computeBoneTexture(),Ie.setValue(D,"boneTexture",Ti.boneTexture,R))}O.isBatchedMesh&&(Ie.setOptional(D,O,"batchingTexture"),Ie.setValue(D,"batchingTexture",O._matricesTexture,R),Ie.setOptional(D,O,"batchingIdTexture"),Ie.setValue(D,"batchingIdTexture",O._indirectTexture,R),Ie.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Ie.setValue(D,"batchingColorTexture",O._colorsTexture,R));const ji=W.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Gt.update(O,W,pn),(Vi||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,Ie.setValue(D,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ki.envMap.value=wt,Ki.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(Ki.envMapIntensity.value=F.environmentIntensity),Vi&&(Ie.setValue(D,"toneMappingExposure",A.toneMappingExposure),It.needsLights&&Rp(Ki,wo),ot&&q.fog===!0&&pt.refreshFogUniforms(Ki,ot),pt.refreshMaterialUniforms(Ki,q,G,et,m.state.transmissionRenderTarget[w.id]),Pl.upload(D,wu(It),Ki,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Pl.upload(D,wu(It),Ki,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ie.setValue(D,"center",O.center),Ie.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ie.setValue(D,"normalMatrix",O.normalMatrix),Ie.setValue(D,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ti=q.uniformsGroups;for(let Ii=0,Yl=Ti.length;Ii<Yl;Ii++){const zs=Ti[Ii];U.update(zs,pn),U.bind(zs,pn)}}return pn}function Rp(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Pp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,F,W){Pt.get(w.texture).__webglTexture=F,Pt.get(w.depthTexture).__webglTexture=W;const q=Pt.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const W=Pt.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){P=w,T=F,E=W;let q=!0,O=null,ot=!1,mt=!1;if(w){const wt=Pt.get(w);if(wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(wt.__hasExternalTextures)R.rebindTextures(w,Pt.get(w.texture).__webglTexture,Pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Bt=w.depthTexture;if(wt.__boundDepthTexture!==Bt){if(Bt!==null&&Pt.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(mt=!0);const Yt=Pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[F])?O=Yt[F][W]:O=Yt[F],ot=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=Pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?O=Yt[W]:O=Yt,B.copy(w.viewport),z.copy(w.scissor),I=w.scissorTest}else B.copy(gt).multiplyScalar(G).floor(),z.copy(Ht).multiplyScalar(G).floor(),I=re;if(Rt.bindFramebuffer(D.FRAMEBUFFER,O)&&q&&Rt.drawBuffers(w,O),Rt.viewport(B),Rt.scissor(z),Rt.setScissorTest(I),ot){const wt=Pt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,W)}else if(mt){const wt=Pt.get(w.texture),Wt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Wt)}b=-1},this.readRenderTargetPixels=function(w,F,W,q,O,ot,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt){Rt.bindFramebuffer(D.FRAMEBUFFER,xt);try{const wt=w.texture,Wt=wt.format,Yt=wt.type;if(!ce.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-q&&W>=0&&W<=w.height-O&&D.readPixels(F,W,q,O,Qt.convert(Wt),Qt.convert(Yt),ot)}finally{const wt=P!==null?Pt.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,q,O,ot,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt){const wt=w.texture,Wt=wt.format,Yt=wt.type;if(!ce.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-q&&W>=0&&W<=w.height-O){Rt.bindFramebuffer(D.FRAMEBUFFER,xt);const Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(F,W,q,O,Qt.convert(Wt),Qt.convert(Yt),0);const fe=P!==null?Pt.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,fe);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await F_(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(Bt),D.deleteSync(xe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,W=0){w.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-W),O=Math.floor(w.image.width*q),ot=Math.floor(w.image.height*q),mt=F!==null?F.x:0,xt=F!==null?F.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,mt,xt,O,ot),Rt.unbindTexture()};const Bp=D.createFramebuffer(),Ip=D.createFramebuffer();this.copyTextureToTexture=function(w,F,W=null,q=null,O=0,ot=null){w.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],F=arguments[2],ot=arguments[3]||0,W=null),ot===null&&(O!==0?(co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=O,O=0):ot=0);let mt,xt,wt,Wt,Yt,Bt,fe,xe,ke;const Oe=w.isCompressedTexture?w.mipmaps[ot]:w.image;if(W!==null)mt=W.max.x-W.min.x,xt=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Wt=W.min.x,Yt=W.min.y,Bt=W.isBox3?W.min.z:0;else{const ji=Math.pow(2,-O);mt=Math.floor(Oe.width*ji),xt=Math.floor(Oe.height*ji),w.isDataArrayTexture?wt=Oe.depth:w.isData3DTexture?wt=Math.floor(Oe.depth*ji):wt=1,Wt=0,Yt=0,Bt=0}q!==null?(fe=q.x,xe=q.y,ke=q.z):(fe=0,xe=0,ke=0);const me=Qt.convert(F.format),It=Qt.convert(F.type);let ci;F.isData3DTexture?(R.setTexture3D(F,0),ci=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),ci=D.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),ci=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ae=D.getParameter(D.UNPACK_ROW_LENGTH),pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pr=D.getParameter(D.UNPACK_SKIP_PIXELS),Vi=D.getParameter(D.UNPACK_SKIP_ROWS),wo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Oe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Oe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);const Ie=w.isDataArrayTexture||w.isData3DTexture,Ki=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const ji=Pt.get(w),Ti=Pt.get(F),Ii=Pt.get(ji.__renderTarget),Yl=Pt.get(Ti.__renderTarget);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,Ii.__webglFramebuffer),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yl.__webglFramebuffer);for(let zs=0;zs<wt;zs++)Ie&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(w).__webglTexture,O,Bt+zs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,ot,ke+zs)),D.blitFramebuffer(Wt,Yt,mt,xt,fe,xe,mt,xt,D.DEPTH_BUFFER_BIT,D.NEAREST);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||Pt.has(w)){const ji=Pt.get(w),Ti=Pt.get(F);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,Bp),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ip);for(let Ii=0;Ii<wt;Ii++)Ie?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ji.__webglTexture,O,Bt+Ii):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ji.__webglTexture,O),Ki?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ti.__webglTexture,ot,ke+Ii):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ti.__webglTexture,ot),O!==0?D.blitFramebuffer(Wt,Yt,mt,xt,fe,xe,mt,xt,D.COLOR_BUFFER_BIT,D.NEAREST):Ki?D.copyTexSubImage3D(ci,ot,fe,xe,ke+Ii,Wt,Yt,mt,xt):D.copyTexSubImage2D(ci,ot,fe,xe,Wt,Yt,mt,xt);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ki?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(ci,ot,fe,xe,ke,mt,xt,wt,me,It,Oe.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ci,ot,fe,xe,ke,mt,xt,wt,me,Oe.data):D.texSubImage3D(ci,ot,fe,xe,ke,mt,xt,wt,me,It,Oe):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ot,fe,xe,mt,xt,me,It,Oe.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ot,fe,xe,Oe.width,Oe.height,me,Oe.data):D.texSubImage2D(D.TEXTURE_2D,ot,fe,xe,mt,xt,me,It,Oe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,wo),ot===0&&F.generateMipmaps&&D.generateMipmap(ci),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W=null,q=null,O=0){return w.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,W,q,O)},this.initRenderTarget=function(w){Pt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,Rt.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return as}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const FA=""+new URL("armadillo-sprite-sheet-yzTezOPD.png",import.meta.url).href,OA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%23fff'%20d='M157.54%2015.78c-2.838.003-5.676.125-8.5.365-22.6%201.92-44.724%2011.21-61.347%2026.587-16.32%2015.096-27.204%2036.473-26.69%2061.45%203.875-.13%209.014-.284%2014.847-.397%201.073-.02%202.088-.027%203.146-.043-.402-19.627%207.798-35.656%2020.92-47.795%2013.38-12.377%2032-20.283%2050.647-21.867%2018.517-1.573%2036.767%202.965%2050.646%2014.524a45.28%2045.28%200%200%201%2016.602-5.51%2052.454%2052.454%200%200%201%203.192-.297%2077.19%2077.19%200%200%200-7.89-7.715c-15.842-13.365-35.714-19.31-55.575-19.3zm68.077%2044.282c-2.986.057-5.93.6-8.842%201.477a26.671%2026.671%200%200%200-3.25.972c.026.04.05.082.075.12-3.47%201.38-6.817%203.335-9.692%206.35-3.5%203.673-6.077%209.9-4.693%2015.998l.094.413.045.144c11.863-10.083%2027.67-14.763%2042.444-14.64.3.002.596.024.895.03l-.068-.868-.592-1.374c-2.704-6.274-8.677-8.048-13.11-8.49a28.013%2028.013%200%200%200-3.308-.133zM277.66%2081.3c-6.248.09-12.4.574-18.474%201.378l-.582.54%204.716%2017.102c4.68-.57%209.39-.928%2014.133-1.015%201.6-.03%203.207-.03%204.817%200%2036.413.658%2076.09%2016.07%20122.072%2059.433l15.937-9.623c-49.936-48.12-95.313-67.04-137.684-67.806-1.652-.03-3.297-.035-4.936-.01zm-52.29%2010.595c-6.7%202.283-12.923%205.844-17.354%2010.447l2.01%2010.578c4.8-7.386%209.9-14.41%2015.345-21.025zm18.597%205.953c-4.65%205.218-9.075%2010.81-13.297%2016.738%205.564-1.297%2011.307-1.985%2017.088-2.13-.102-.656-.203-1.312-.3-1.958l-3.49-12.65zM190.2%20105c-10.62%205.178-21.06%2010.89-31.368%2016.828l14.736%208.645-.23-.047c.64.353%201.372.707%201.754%201.027.528.443.905.83%201.213%201.19%205.797-3.22%2011.592-6.312%2017.392-9.227L190.2%20105zM80.692%20121.756c-1.61.018-2.815-.007-4.496.025-8.207.16-14.15.39-16.605.478-2.228%201.913-6.242%205.488-11.158%2011.178-6.63%207.67-12.168%2017.598-12.092%2023.324.095%207.15%203.73%2019.28%209.736%2030.228%206.007%2010.948%2014.408%2020.872%2021.87%2025.426.002%200%202.58.932%206.513%201.07%203.934.138%209.176-.22%2015.04-1.04%2011.728-1.64%2025.992-5.075%2039.117-9.215%208.666-2.735%2016.262-5.755%2022.9-8.71-17.423-3.064-34.79-11.906-48.413-23.3-9.947-8.318-17.986-18.11-21.704-29.304a36.013%2036.013%200%200%201-.707-20.16zm170.13%208.596c-13.804-.118-26.667%203.534-35.956%2011.37.29%201.234.584%202.44.873%203.696%207.614%2033.128%2013.767%2073.212%209.864%2097.246-5.603%2034.496-31.537%2084.64-56.23%20125.106-14.89%2024.398-29.136%2045.285-38.177%2058.144%2010.07-.018%2020.817%202.73%2031.086%207.26%2011.084%204.89%2021.573%2011.887%2029.23%2020.914a51.07%2051.07%200%200%201%204.06%205.488c1.36-3.347%202.576-6.353%204.36-10.703%205.542-13.528%2013.064-31.452%2021.98-50.63%2017.835-38.352%2041.727-81.852%2064.653-103.98%2025.013-24.14%2074.933-49.443%20118.108-67.835a1058.555%201058.555%200%200%201%2018.676-7.735c-4.533-14.565-13.66-26.322-24.893-37.757-.622.35-1.232.7-1.86%201.052-35.47%2019.846-79.24%2038.213-106.96%2035.963-3.385-.274-8.838-3.985-12.028-8.44-11.913-16.64-21.224-49.812-26.786-79.158zM144.48%20134.28c-.125.142-.195.26-.324.406-3.408%203.85-7.99%208.477-12.875%2013.076-4.585%204.317-9.376%208.534-13.716%2011.965%2014.612%2011.06%2034.845%2018.494%2049.54%2017.9.08-3.49-.12-7.653-.57-11.81-.688-6.327-1.887-12.74-3.016-17.247a43.871%2043.871%200%200%200-1.13-3.79l-17.908-10.5zm322.356%205.2c-2.163.02-4.4.502-6.305%201.614l-.428.252-.4.297s-2.87%202.124-7.9%205.642c14.61%2014.434%2022.734%2032.15%2028.22%2050.262l4.314-1.457-.045.012c3.98-1.237%207.185-4.906%208.28-7.91%201.197-3.282%201.194-6.115.98-8.954-.425-5.676-2.144-11.535-4.497-17.277-2.354-5.742-5.26-11.186-9.092-15.605-1.915-2.21-4.043-4.27-7.263-5.73-1.61-.73-3.7-1.168-5.86-1.146zm-37.348%2025.102-13.875%208.377c5.383%205.814%2010.47%2012.035%2014.83%2018.9%201.41-8.554%201.554-17.292-.955-27.278zm19.405%207.455c1.144%2012.08-.52%2022.994-2.93%2033.05l15.717-5.33c-3.235-10.06-7.23-19.383-12.787-27.72zM130.95%20443.914c-.444%200-.878.012-1.3.03-6.752.316-9.117%201.857-10.17%204.693l-2.212%205.965a29.728%2029.728%200%200%200%202.834%2011.68c3.7%207.818%2010.09%2014.155%2017.732%2018.603%207.642%204.448%2016.732%207.043%2026.115%205.9%207.178-.874%2014.383-4.265%2020.183-10.12.164-4.882-1.947-9.743-6.35-14.935-5.278-6.223-13.748-12.11-22.765-16.087-8.454-3.73-17.418-5.75-24.07-5.73z'/%3e%3c/svg%3e",On=10,tn=1400,zA=.05,VA=1,HA=2,Lo=980,Fd={perM_height:100,perM_distance:10},Od=.12,zd=800,kA=.3,Tc=.08;class GA{constructor(t){this.scene=new Dl,this.camera=new au(-1,1,1,-1,-1e3,1e3),this.camera.position.z=10,this.renderer=new NA({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(17,1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this._resize(),window.addEventListener("resize",()=>this._resize())}_resize(){const t=window.innerWidth,e=window.innerHeight,n=t/e,s=zd/2,r=s*n,o=this.camera;o.left=-r,o.right=r,o.top=s,o.bottom=-s,o.updateProjectionMatrix(),this.viewWidthPx=r*2,this.viewHeightPx=zd,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e,!1),this._postfx&&this._postfx.setSize(t,e)}registerPostFX(t){this._postfx=t}setCenter(t,e,n=0,s=0){this.camera.position.x=t+n,this.camera.position.y=e+s}render(){this.renderer.render(this.scene,this.camera)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}}const WA=`// 배경 그라데이션 — 풀스크린 쿼드. UV를 그대로 프래그먼트로 전달.
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);  // NDC 직접 (클립 공간 풀스크린)
}
`,qA=`// 세계관 배경 셰이더 — 고도에 따른 하늘/구름/우주 그라데이션
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
`;class XA{constructor(t){this.renderer=t,this.scene=new Dl,this.camera=new iu,this._lastCamX=0,this._lastCamY=0;const e=new mi(2,2);this.material=new ii({vertexShader:WA,fragmentShader:qA,uniforms:{uHeightRatio:{value:0},uTime:{value:0}},depthTest:!1,depthWrite:!1}),this.skyMesh=new Et(e,this.material),this.scene.add(this.skyMesh),this.lowSkyWash=new Et(e.clone(),new ee({color:9362687,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1})),this.lowSkyWash.position.z=-.02,this.scene.add(this.lowSkyWash),this._buildStars(),this._buildMountains(),this._buildSea(),this._buildCloudLayers(),this._buildMoon(),this.moonWorldY=null}_buildStars(){const e=new Float32Array(480),n=new Float32Array(160),s=new Float32Array(480),r=[new Xt(16777215),new Xt(13692671),new Xt(16775392),new Xt(11585791)];for(let l=0;l<160;l++){e[l*3]=Math.random()*2.2-1.1,e[l*3+1]=Math.random()*2-1,e[l*3+2]=-.6,n[l]=Math.random()<.15?3:1.2+Math.random()*1.4;const c=r[Math.floor(Math.random()*r.length)];s[l*3]=c.r,s[l*3+1]=c.g,s[l*3+2]=c.b}const o=new ei;o.setAttribute("position",new xi(e,3)),o.setAttribute("color",new xi(s,3)),o.setAttribute("size",new xi(n,1));const a=new Fm({size:2.5,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});this.starField=new mv(o,a),this.starField.frustumCulled=!1,this._starPositions=e,this._starBaseX=e.slice(),this.scene.add(this.starField)}_buildMountains(){this.mountainGroups=[];const t=[{rate:.06,color:1713730,z:-.55,count:7,hScale:.26,baseY:-.7,alpha:0},{rate:.14,color:1978446,z:-.5,count:5,hScale:.38,baseY:-.62,alpha:0}];for(const e of t){const n=new fi;n.userData={rate:e.rate,baseX:0,alpha:e.alpha};for(let s=0;s<e.count;s++){const r=.28+Math.random()*.22,o=(.08+Math.random()*.1)*e.hScale*10,a=-1.4+s/(e.count-1)*2.8+(Math.random()-.5)*.18,l=new Rn;l.moveTo(a-r/2,e.baseY);const c=6;for(let d=1;d<c;d++){const _=a-r/2+r/c*d,v=d===Math.floor(c/2)?o:o*(.3+Math.random()*.5);l.lineTo(_,e.baseY+v)}l.lineTo(a+r/2,e.baseY),l.closePath();const h=new un(l),u=new ee({color:e.color,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),f=new Et(h,u);f.position.z=e.z,n.add(f)}this.scene.add(n),this.mountainGroups.push({group:n,spec:e})}}_buildSea(){const t=new ee({color:1937345,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),e=new mi(2,.56);this.seaMesh=new Et(e,t),this.seaMesh.position.set(0,-.74,-.5),this.scene.add(this.seaMesh);const n=new ee({color:10217471,transparent:!0,opacity:.28,depthTest:!1,depthWrite:!1});this.seaFoam=new Et(new mi(2,.035),n),this.seaFoam.position.set(0,-.48,-.38),this.scene.add(this.seaFoam),this.waveLines=[];for(let s=0;s<4;s++){const r=new _a({color:s===0?14154751:9169407,transparent:!0,opacity:.35,depthTest:!1}),o=new ei().setFromPoints(Array.from({length:32},(l,c)=>{const h=-1+c/31*2;return new L(h,-.5-s*.105,-.35+s*.01)})),a=new Ol(o,r);this.scene.add(a),this.waveLines.push(a)}}_buildCloudLayers(){this.cloudLayers=[];const t=[{x:-.7,y:.36,scale:.82,phase:0,depth:-.42,rate:.06},{x:-.2,y:.5,scale:1.05,phase:1.8,depth:-.43,rate:.1},{x:.48,y:.34,scale:.9,phase:3.4,depth:-.44,rate:.06},{x:.88,y:.57,scale:1.15,phase:5,depth:-.45,rate:.1},{x:-1.08,y:.63,scale:1,phase:6.2,depth:-.46,rate:.06},{x:.22,y:.42,scale:.75,phase:2.6,depth:-.41,rate:.18},{x:-.55,y:.58,scale:.88,phase:4.4,depth:-.4,rate:.22}];for(const e of t){const n=this._createScreenCloud();n.position.set(e.x,e.y,e.depth),n.scale.setScalar(e.scale),n.userData=e,this.scene.add(n),this.cloudLayers.push(n)}}_createScreenCloud(){const t=new fi,e=new ee({color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),n=new ee({color:12178670,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});for(const[r,o,a]of[[-.17,-.02,.105],[-.06,.04,.135],[.08,.03,.12],[.2,-.02,.09]]){const l=new Et(new Yi(a,32),e.clone());l.position.set(r,o,.01),t.add(l)}const s=new Et(new mi(.46,.1),n.clone());return s.position.set(.02,-.045,0),t.add(s),t}_buildMoon(){const t=new ee({color:14477552,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),e=new Yi(.18,64);this.moonMesh=new Et(e,t),this.moonMesh.position.set(.35,.72,-.3),this.scene.add(this.moonMesh);const n=new ee({color:9090260,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});this.moonGlow=new Et(new Yi(.3,48),n),this.moonGlow.position.set(.35,.72,-.35),this.scene.add(this.moonGlow);const s=new ee({color:11585752,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});this.craters=[];for(const[r,o,a]of[[.32,.76,.028],[.42,.68,.022],[.28,.66,.018],[.38,.78,.015],[.46,.74,.012]]){const l=new Et(new Yi(a,24),s.clone());l.position.set(r,o,-.28),this.scene.add(l),this.craters.push(l)}}update(t,e,n=0,s=0){this.material.uniforms.uHeightRatio.value=t,this.material.uniforms.uTime.value=e,this.lowSkyWash.material.opacity=(1-vt.smoothstep(t,.12,.42))*.72;const r=this.renderer.viewWidthPx,o=this.renderer.viewHeightPx,a=2/r,l=2/o,c=Math.max(0,1-t/.26);this.seaMesh.material.opacity=c,this.seaFoam.material.opacity=c*.38;for(let p=0;p<this.waveLines.length;p++){const m=this.waveLines[p],x=m.geometry.attributes.position;for(let y=0;y<x.count;y++){const A=-1+y/(x.count-1)*2,C=-.5-p*.105+Math.sin(e*(1.25+p*.22)+y*.62+p)*.012;x.setXYZ(y,A,C,-.35+p*.01)}x.needsUpdate=!0,m.material.opacity=c*(p===0?.65:.32)}const h=vt.smoothstep(t,.48,.72);if(this.starField.material.opacity=h,h>0){const m=(n-this._lastCamX)*a*.02,x=(s-this._lastCamY)*l*.02*.5,y=this.starField.geometry.attributes.position;for(let A=0;A<y.count;A++){let C=y.getX(A)-m;C>1.1&&(C-=2.2),C<-1.1&&(C+=2.2);let T=y.getY(A)-x;T>1.1&&(T-=2.2),T<-1.1&&(T+=2.2),y.setXY(A,C,T)}y.needsUpdate=!0}const u=Vd(t,.02,.5);for(const{group:p,spec:m}of this.mountainGroups){const x=(n-this._lastCamX)*a*m.rate;p.position.x-=x,p.position.x>1.2&&(p.position.x-=2.4),p.position.x<-1.2&&(p.position.x+=2.4);const y=u*(1-t/.55);for(const A of p.children)A.material.opacity=vt.clamp(y*.72,0,.88)}const f=Vd(t,.07,.62);for(const p of this.cloudLayers){const m=p.userData;Math.sin(e*.13+m.phase)*.045;const x=-(n-this._lastCamX)*a*m.rate;p.position.x+=x,p.position.x>1.6&&(p.position.x-=3.2),p.position.x<-1.6&&(p.position.x+=3.2),p.position.y=m.y+Math.sin(e*.09+m.phase*.7)*.018;for(const y of p.children){const A=y.geometry?.type==="PlaneGeometry";y.material.opacity=f*(A?.16:.54)}}const d=Math.max(0,Math.min(1,(t-.7)/.2)),_=1+d*.5,v=(n-this._lastCamX)*a*.04;this.moonMesh.position.x-=v,this.moonGlow.position.x-=v;for(const p of this.craters)p.position.x-=v;this.moonMesh.material.opacity=d*.95,this.moonGlow.material.opacity=d*.18,this.moonMesh.scale.setScalar(_),this.moonGlow.scale.setScalar(_*1.12);for(const p of this.craters)p.material.opacity=d*.55,p.scale.setScalar(_);this._lastCamX=n,this._lastCamY=s}render(){const t=this.renderer.renderer;t.autoClear=!1,t.clear(),t.render(this.scene,this.camera)}}function Vd(i,t,e){const n=vt.smoothstep(i,t,t+.18),s=1-vt.smoothstep(i,e,e+.18);return vt.clamp(n*s,0,1)}/**
 * postprocessing v6.39.1 build Fri Apr 17 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var YA=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),e=new ei;return e.setAttribute("position",new xi(i,3)),e.setAttribute("uv",new xi(t,2)),e})(),fn=class qh{static get fullscreenGeometry(){return YA}constructor(t="Pass",e=new Dl,n=new au){this.name=t,this.renderer=null,this.scene=e,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const e=this.fullscreenMaterial;e!==null&&(e.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let e=this.screen;e!==null?e.material=t:(e=new Et(qh.fullscreenGeometry,t),e.frustumCulled=!1,this.scene===null&&(this.scene=new Dl),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,e=ma){}render(t,e,n,s,r){throw new Error("Render method not implemented!")}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Si||e instanceof Fs||e instanceof Qe||e instanceof qh)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},$A=class extends fn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,t,e,n,s){const r=i.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},JA=`#ifdef COLOR_WRITE
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
}`,Km="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",jm=class extends ii{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new ae(null),depthBuffer:new ae(null),channelWeights:new ae(null),opacity:new ae(1)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:JA,vertexShader:Km}),this.depthFunc=Bl}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const t=i!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const t=i!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(i){this.colorSpaceConversion!==i&&(i?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},ZA=class extends fn{constructor(i,t=!0){super("CopyPass"),this.fullscreenMaterial=new jm,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new Si(1,1,{minFilter:gi,magFilter:gi,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,t,e,n,s){this.fullscreenMaterial.inputBuffer=t.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,t){this.autoResize&&this.renderTarget.setSize(i,t)}initialize(i,t,e){e!==void 0&&(this.renderTarget.texture.type=e,e!==Mi?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===Me&&(this.renderTarget.texture.colorSpace=Me))}},Hd=new Xt,Qm=class extends fn{constructor(i=!0,t=!0,e=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=t,this.stencil=e,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,t,e){this.color=i,this.depth=t,this.stencil=e}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,t,e,n,s){const r=this.overrideClearColor,o=this.overrideClearAlpha,a=i.getClearAlpha(),l=r!==null,c=o>=0;l?(i.getClearColor(Hd),i.setClearColor(r,c?o:a)):c&&i.setClearAlpha(o),i.setRenderTarget(this.renderToScreen?null:t),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(Hd,a):c&&i.setClearAlpha(a)}},KA=class extends fn{constructor(i,t){super("MaskPass",i,t),this.needsSwap=!1,this.clearPass=new Qm(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,t,e,n,s){const r=i.getContext(),o=i.state.buffers,a=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,u=1-h;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.stencil.setFunc(r.ALWAYS,h,4294967295),o.stencil.setClear(u),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,t),c.render(i,e))),this.renderToScreen?(i.setRenderTarget(null),i.render(a,l)):(i.setRenderTarget(t),i.render(a,l),i.setRenderTarget(e),i.render(a,l)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(r.EQUAL,1,4294967295),o.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.stencil.setLocked(!0)}},Ec=1/1e3,jA=1e3,QA=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*Ec}get fixedDelta(){return this._fixedDelta*Ec}set fixedDelta(t){this._fixedDelta=t*jA}get elapsed(){return this._elapsed*Ec}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},tM=class{constructor(i=null,{depthBuffer:t=!0,stencilBuffer:e=!1,multisampling:n=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,e,s,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new ZA,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new QA,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples}set multisampling(i){const t=this.inputBuffer,e=this.multisampling;e>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):e!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,i),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const t=i.getSize(new rt),e=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===Mi&&i.outputColorSpace===Me&&(this.inputBuffer.texture.colorSpace=Me,this.outputBuffer.texture.colorSpace=Me,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(t.width,t.height);for(const s of this.passes)s.initialize(i,e,n)}}replaceRenderer(i,t=!0){const e=this.renderer,n=e.domElement.parentNode;return this.setRenderer(i),t&&n!==null&&(n.removeChild(e.domElement),n.appendChild(i.domElement)),e}createDepthTexture(){const i=this.inputBuffer,t=new nu;this.depthTexture=t,i.stencilBuffer?(t.format=yr,t.type=gr):t.type=Tn;const e=t.clone();return e.name="EffectComposer.StableDepth",this.depthRenderTarget=new Si(i.width,i.height,{depthBuffer:!0,stencilBuffer:i.stencilBuffer,depthTexture:e}),e}blitDepthBuffer(i){const t=this.renderer,e=this.depthRenderTarget,n=t.properties,s=t.getContext();t.setRenderTarget(e);const r=n.get(i).__webglFramebuffer,o=n.get(e).__webglFramebuffer,a=i.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,o),s.blitFramebuffer(0,0,i.width,i.height,0,0,e.width,e.height,a,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),t.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,t,e,n){const s=this.renderer,r=s===null?new rt:s.getDrawingBufferSize(new rt),o={minFilter:gi,magFilter:gi,stencilBuffer:t,depthBuffer:i,type:e},a=new Si(r.width,r.height,o);return n>0&&(a.samples=n),e===Mi&&s!==null&&s.outputColorSpace===Me&&(a.texture.colorSpace=Me),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(i){for(const t of this.passes)t.mainScene=i}setMainCamera(i){for(const t of this.passes)t.mainCamera=i}addPass(i,t){const e=this.passes,n=this.renderer,s=n.getDrawingBufferSize(new rt),r=n.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(i.renderer=n,i.setSize(s.width,s.height),i.initialize(n,r,o),this.autoRenderToScreen&&(e.length>0&&(e[e.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?e.splice(t,0,i):e.push(i),this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const a=this.createDepthTexture();for(i of e)i.setDepthTexture(a)}else{const a=this.depthRenderTarget.depthTexture;i.setDepthTexture(a)}}removePass(i){const t=this.passes,e=t.indexOf(i);if(e!==-1&&t.splice(e,1).length>0){if(this.depthTexture!==null){const r=(a,l)=>a||l.needsDepthTexture;if(!t.reduce(r,!1)){const a=this.depthRenderTarget.depthTexture;i.getDepthTexture()===a&&i.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&e===t.length&&(i.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const t=this.renderer,e=this.copyPass;let n=this.inputBuffer,s=this.outputBuffer,r,o=!1;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const a of this.passes)if(a.enabled){if(n.depthTexture=this.depthTexture,s.depthTexture=null,a.render(t,n,s,i,o),a.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(n),a.needsSwap){if(o){e.renderToScreen=a.renderToScreen;const l=t.getContext(),c=t.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),e.render(t,n,s,i,o),c.setFunc(l.EQUAL,1,4294967295)}r=n,n=s,s=r}a instanceof KA?o=!0:a instanceof $A&&(o=!1)}}setSize(i,t,e){const n=this.renderer,s=n.getSize(new rt);(i===void 0||t===void 0)&&(i=s.width,t=s.height),(s.width!==i||s.height!==t)&&n.setSize(i,t,e);const r=n.getDrawingBufferSize(new rt);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const o of this.passes)o.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),fn.fullscreenGeometry.dispose()}},Is={NONE:0,DEPTH:1,CONVOLUTION:2},_e={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},eM=class{constructor(){this.shaderParts=new Map([[_e.FRAGMENT_HEAD,null],[_e.FRAGMENT_MAIN_UV,null],[_e.FRAGMENT_MAIN_IMAGE,null],[_e.VERTEX_HEAD,null],[_e.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Is.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ls}},Cc=!1,kd=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let e;if(t.material.flatShading)switch(t.material.side){case Se:e=this.materialsFlatShadedDoubleSide;break;case ai:e=this.materialsFlatShadedBackSide;break;default:e=this.materialsFlatShaded;break}else switch(t.material.side){case Se:e=this.materialsDoubleSide;break;case ai:e=this.materialsBackSide;break;default:e=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=e[2]:t.isInstancedMesh?t.material=e[1]:t.material=e[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof ii))return i.clone();const t=i.uniforms,e=new Map;for(const s in t){const r=t[s].value;r.isRenderTargetTexture&&(t[s].value=null,e.set(s,r))}const n=i.clone();for(const s of e)t[s[0]].value=s[1],n.uniforms[s[0]].value=s[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const t=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const e of t)e.uniforms=Object.assign({},i.uniforms),e.side=cs;t[2].skinning=!0,this.materialsBackSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.side=ai,n}),this.materialsDoubleSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.side=Se,n}),this.materialsFlatShaded=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=ai,n}),this.materialsFlatShadedDoubleSide=t.map(e=>{const n=this.cloneMaterial(e);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=Se,n})}}render(i,t,e){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,Cc){const s=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),i.render(t,e);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=t.overrideMaterial;t.overrideMaterial=this.material,i.render(t,e),t.overrideMaterial=s}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of i)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Cc}static set workaroundEnabled(i){Cc=i}},gs=-1,Gn=class extends us{constructor(i=null,t=gs,e=gs,n=1){super(),i!==null&&this.addEventListener("change",()=>i.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new rt(1,1),this.preferredSize=new rt(t,e),this.target=this.preferredSize,this.s=n,this.effectiveSize=new rt,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,t=this.preferredSize,e=this.effectiveSize,n=this.scale;t.width!==gs?e.width=t.width:t.height!==gs?e.width=Math.round(t.height*(i.width/Math.max(i.height,1))):e.width=Math.round(i.width*n),t.height!==gs?e.height=t.height:t.width!==gs?e.height=Math.round(t.width/Math.max(i.width/Math.max(i.height,1),1)):e.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(gs),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,t){(this.baseSize.width!==i||this.baseSize.height!==t)&&(this.baseSize.set(i,t),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,t){(this.preferredSize.width!==i||this.preferredSize.height!==t)&&(this.preferredSize.set(i,t),this.dispatchEvent({type:"change"}))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return gs}},ne={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},iM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",sM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",wM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",IM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DM=new Map([[ne.ADD,iM],[ne.ALPHA,nM],[ne.AVERAGE,sM],[ne.COLOR,rM],[ne.COLOR_BURN,oM],[ne.COLOR_DODGE,aM],[ne.DARKEN,lM],[ne.DIFFERENCE,cM],[ne.DIVIDE,hM],[ne.DST,null],[ne.EXCLUSION,uM],[ne.HARD_LIGHT,dM],[ne.HARD_MIX,fM],[ne.HUE,mM],[ne.INVERT,pM],[ne.INVERT_RGB,_M],[ne.LIGHTEN,vM],[ne.LINEAR_BURN,gM],[ne.LINEAR_DODGE,yM],[ne.LINEAR_LIGHT,xM],[ne.LUMINOSITY,AM],[ne.MULTIPLY,MM],[ne.NEGATION,SM],[ne.NORMAL,bM],[ne.OVERLAY,wM],[ne.PIN_LIGHT,TM],[ne.REFLECT,EM],[ne.SATURATION,CM],[ne.SCREEN,RM],[ne.SOFT_LIGHT,PM],[ne.SRC,BM],[ne.SUBTRACT,IM],[ne.VIVID_LIGHT,LM]]),UM=class extends us{constructor(i,t=1){super(),this._blendFunction=i,this.opacity=new ae(t)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return DM.get(this.blendFunction)}},cu=class extends us{constructor(i,t,{attributes:e=Is.NONE,blendFunction:n=ne.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:o=null,vertexShader:a=null}={}){super(),this.name=i,this.renderer=null,this.attributes=e,this.fragmentShader=t,this.vertexShader=a,this.defines=s,this.uniforms=r,this.extensions=o,this.blendMode=new UM(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Ls,this._outputColorSpace=kn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,t=ma){}update(i,t,e){}setSize(i,t){}initialize(i,t,e){}dispose(){for(const i of Object.keys(this)){const t=this[i];(t instanceof Si||t instanceof Fs||t instanceof Qe||t instanceof fn)&&this[i].dispose()}}},Wl={MEDIUM:2,LARGE:3},NM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,FM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",OM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],zM=class extends ii{constructor(i=new De){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new ae(null),texelSize:new ae(new De),scale:new ae(1),kernel:new ae(0)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:NM,vertexShader:FM}),this.setTexelSize(i.x,i.y),this.kernelSize=Wl.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return OM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,t){this.uniforms.texelSize.value.set(i,t,i*.5,t*.5)}setSize(i,t){const e=1/i,n=1/t;this.uniforms.texelSize.value.set(e,n,e*.5,n*.5)}},VM=class extends fn{constructor({kernelSize:i=Wl.MEDIUM,resolutionScale:t=.5,width:e=Gn.AUTO_SIZE,height:n=Gn.AUTO_SIZE,resolutionX:s=e,resolutionY:r=n}={}){super("KawaseBlurPass"),this.renderTargetA=new Si(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const o=this.resolution=new Gn(this,s,r,t);o.addEventListener("change",a=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new zM,this._blurMaterial.kernelSize=i,this.copyMaterial=new jm}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,t,e,n,s){const r=this.scene,o=this.camera,a=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence;let u=t;this.fullscreenMaterial=c;for(let f=0,d=h.length;f<d;++f){const _=(f&1)===0?a:l;c.kernel=h[f],c.inputBuffer=u.texture,i.setRenderTarget(_),i.render(r,o),u=_}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,i.setRenderTarget(this.renderToScreen?null:e),i.render(r,o)}setSize(i,t){const e=this.resolution;e.setBaseSize(i,t);const n=e.width,s=e.height;this.renderTargetA.setSize(n,s),this.renderTargetB.setSize(n,s),this.blurMaterial.setSize(i,t)}initialize(i,t,e){e!==void 0&&(this.renderTargetA.texture.type=e,this.renderTargetB.texture.type=e,e!==Mi?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):i!==null&&i.outputColorSpace===Me&&(this.renderTargetA.texture.colorSpace=Me,this.renderTargetB.texture.colorSpace=Me))}static get AUTO_SIZE(){return Gn.AUTO_SIZE}},HM=`#include <common>
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
}`,kM=class extends ii{constructor(i=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:da.replace(/\D+/g,"")},uniforms:{inputBuffer:new ae(null),threshold:new ae(0),smoothing:new ae(1),range:new ae(null)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:HM,vertexShader:Km}),this.colorOutput=i,this.luminanceRange=t}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},GM=class extends fn{constructor({renderTarget:i,luminanceRange:t,colorOutput:e,resolutionScale:n=1,width:s=Gn.AUTO_SIZE,height:r=Gn.AUTO_SIZE,resolutionX:o=s,resolutionY:a=r}={}){super("LuminancePass"),this.fullscreenMaterial=new kM(e,t),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new Si(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Gn(this,o,a,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,t,e,n,s){const r=this.fullscreenMaterial;r.inputBuffer=t.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,t){const e=this.resolution;e.setBaseSize(i,t),this.renderTarget.setSize(e.width,e.height)}initialize(i,t,e){e!==void 0&&e!==Mi&&(this.renderTarget.texture.type=e,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},WM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,qM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",XM=class extends ii{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new ae(null),texelSize:new ae(new rt)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:WM,vertexShader:qM})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,t){this.uniforms.texelSize.value.set(1/i,1/t)}},YM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,$M="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",JM=class extends ii{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new ae(null),supportBuffer:new ae(null),texelSize:new ae(new rt),radius:new ae(.85)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:YM,vertexShader:$M})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,t){this.uniforms.texelSize.value.set(1/i,1/t)}},ZM=class extends fn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Si(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new XM,this.upsamplingMaterial=new JM,this.resolution=new rt}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let e=0;e<i;++e){const n=t.clone();n.texture.name="Downsampling.Mipmap"+e,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(t);for(let e=1,n=i-1;e<n;++e){const s=t.clone();s.texture.name="Upsampling.Mipmap"+e,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,t,e,n,s){const{scene:r,camera:o}=this,{downsamplingMaterial:a,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:h}=this;let u=t;this.fullscreenMaterial=a;for(let f=0,d=c.length;f<d;++f){const _=c[f];a.setSize(u.width,u.height),a.inputBuffer=u.texture,i.setRenderTarget(_),i.render(r,o),u=_}this.fullscreenMaterial=l;for(let f=h.length-1;f>=0;--f){const d=h[f];l.setSize(u.width,u.height),l.inputBuffer=u.texture,l.supportBuffer=c[f].texture,i.setRenderTarget(d),i.render(r,o),u=d}}setSize(i,t){const e=this.resolution;e.set(i,t);let n=e.width,s=e.height;for(let r=0,o=this.downsamplingMipmaps.length;r<o;++r)n=Math.round(n*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(n,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(n,s)}initialize(i,t,e){if(e!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of n)s.texture.type=e;if(e!==Mi)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(i!==null&&i.outputColorSpace===Me)for(const s of n)s.texture.colorSpace=Me}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},KM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,jM=class extends cu{constructor({blendFunction:i=ne.SCREEN,luminanceThreshold:t=1,luminanceSmoothing:e=.03,mipmapBlur:n=!0,intensity:s=1,radius:r=.85,levels:o=8,kernelSize:a=Wl.LARGE,resolutionScale:l=.5,width:c=Gn.AUTO_SIZE,height:h=Gn.AUTO_SIZE,resolutionX:u=c,resolutionY:f=h}={}){super("BloomEffect",KM,{blendFunction:i,uniforms:new Map([["map",new ae(null)],["intensity",new ae(s)]])}),this.renderTarget=new Si(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new VM({kernelSize:a}),this.luminancePass=new GM({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=e,this.mipmapBlurPass=new ZM,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=o,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const d=this.resolution=new Gn(this,u,f,l);d.addEventListener("change",_=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,t,e){const n=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(i,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,s.renderTarget):this.blurPass.render(i,s.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,t):this.blurPass.render(i,t,n)}setSize(i,t){const e=this.resolution;e.setBaseSize(i,t),this.renderTarget.setSize(e.width,e.height),this.blurPass.resolution.copy(e),this.luminancePass.setSize(i,t),this.mipmapBlurPass.setSize(i,t)}initialize(i,t,e){this.blurPass.initialize(i,t,e),this.luminancePass.initialize(i,t,e),this.mipmapBlurPass.initialize(i,t,e),e!==void 0&&(this.renderTarget.texture.type=e,i!==null&&i.outputColorSpace===Me&&(this.renderTarget.texture.colorSpace=Me))}},QM=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,tS="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",eS=class extends cu{constructor({offset:i=new rt(.001,5e-4),radialModulation:t=!1,modulationOffset:e=.15}={}){super("ChromaticAberrationEffect",QM,{vertexShader:tS,attributes:Is.CONVOLUTION,uniforms:new Map([["offset",new ae(i)],["modulationOffset",new ae(e)]])}),this.radialModulation=t}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(i){i?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(i){this.uniforms.get("modulationOffset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}},iS=class extends fn{constructor(i,t,e=null){super("RenderPass",i,t),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Qm,this.overrideMaterialManager=e===null?null:new kd(e),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const t=this.overrideMaterialManager;i!==null?t!==null?t.setMaterial(i):this.overrideMaterialManager=new kd(i):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,t,e,n,s){const r=this.scene,o=this.camera,a=this.selection,l=o.layers.mask,c=r.background,h=i.shadowMap.autoUpdate,u=this.renderToScreen?null:t;a!==null&&o.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(i,t),i.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,r,o):i.render(r,o),o.layers.mask=l,r.background=c,i.shadowMap.autoUpdate=h}},Do={DEFAULT:0,ESKIL:1},nS=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,sS=class extends cu{constructor({blendFunction:i,eskil:t=!1,technique:e=t?Do.ESKIL:Do.DEFAULT,offset:n=.5,darkness:s=.5}={}){super("VignetteEffect",nS,{blendFunction:i,defines:new Map([["VIGNETTE_TECHNIQUE",e.toFixed(0)]]),uniforms:new Map([["offset",new ae(n)],["darkness",new ae(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(i){this.technique!==i&&(this.defines.set("VIGNETTE_TECHNIQUE",i.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Do.ESKIL}set eskil(i){this.technique=i?Do.ESKIL:Do.DEFAULT}getTechnique(){return this.technique}setTechnique(i){this.technique=i}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}get darkness(){return this.uniforms.get("darkness").value}set darkness(i){this.uniforms.get("darkness").value=i}getDarkness(){return this.darkness}setDarkness(i){this.darkness=i}},rS=`#include <common>
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
}`,oS="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",aS=class extends ii{constructor(i,t,e,n,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:da.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new ae(null),depthBuffer:new ae(null),resolution:new ae(new rt),texelSize:new ae(new rt),cameraNear:new ae(.3),cameraFar:new ae(1e3),aspect:new ae(1),time:new ae(0)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),i&&this.setShaderParts(i),t&&this.setDefines(t),e&&this.setUniforms(e),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,t=ma){this.depthBuffer=i,this.depthPacking=t}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=rS.replace(_e.FRAGMENT_HEAD,i.get(_e.FRAGMENT_HEAD)||"").replace(_e.FRAGMENT_MAIN_UV,i.get(_e.FRAGMENT_MAIN_UV)||"").replace(_e.FRAGMENT_MAIN_IMAGE,i.get(_e.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=oS.replace(_e.VERTEX_HEAD,i.get(_e.VERTEX_HEAD)||"").replace(_e.VERTEX_MAIN_SUPPORT,i.get(_e.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const t of i.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(i){for(const t of i.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(i){this.extensions={};for(const t of i)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof hn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,t){const e=this.uniforms;e.resolution.value.set(i,t),e.texelSize.value.set(1/i,1/t),e.aspect.value=i/t}static get Section(){return _e}};function Gd(i,t,e){for(const n of t){const s="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const o of e.entries())o[1]!==null&&e.set(o[0],o[1].replace(r,s))}}function lS(i,t,e){let n=t.getFragmentShader(),s=t.getVertexShader();const r=n!==void 0&&/mainImage/.test(n),o=n!==void 0&&/mainUv/.test(n);if(e.attributes|=t.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(o&&(e.attributes&Is.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!r&&!o)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=e.shaderParts;let c=l.get(_e.FRAGMENT_HEAD)||"",h=l.get(_e.FRAGMENT_MAIN_UV)||"",u=l.get(_e.FRAGMENT_MAIN_IMAGE)||"",f=l.get(_e.VERTEX_HEAD)||"",d=l.get(_e.VERTEX_MAIN_SUPPORT)||"";const _=new Set,v=new Set;if(o&&(h+=`	${i}MainUv(UV);
`,e.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const x=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);d+=`	${i}MainSupport(`,d+=x?`vUv);
`:`);
`;for(const y of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const A of y[1].split(/\s*,\s*/))e.varyings.add(A),_.add(A),v.add(A);for(const y of s.matchAll(a))v.add(y[1])}for(const x of n.matchAll(a))v.add(x[1]);for(const x of t.defines.keys())v.add(x.replace(/\([\w\s,]*\)/g,""));for(const x of t.uniforms.keys())v.add(x);v.delete("while"),v.delete("for"),v.delete("if"),t.uniforms.forEach((x,y)=>e.uniforms.set(i+y.charAt(0).toUpperCase()+y.slice(1),x)),t.defines.forEach((x,y)=>e.defines.set(i+y.charAt(0).toUpperCase()+y.slice(1),x));const p=new Map([["fragment",n],["vertex",s]]);Gd(i,v,e.defines),Gd(i,v,p),n=p.get("fragment"),s=p.get("vertex");const m=t.blendMode;if(e.blendModes.set(m.blendFunction,m),r){t.inputColorSpace!==null&&t.inputColorSpace!==e.colorSpace&&(u+=t.inputColorSpace===Me?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==kn?e.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(e.colorSpace=t.inputColorSpace);const x=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${i}MainImage(color0, UV, `,(e.attributes&Is.DEPTH)!==0&&x.test(n)&&(u+="depth, ",e.readDepth=!0),u+=`color1);
	`;const y=i+"BlendOpacity";e.uniforms.set(y,m.opacity),u+=`color0 = blend${m.blendFunction}(color0, color1, ${y});

	`,c+=`uniform float ${y};

`}if(c+=n+`
`,s!==null&&(f+=s+`
`),l.set(_e.FRAGMENT_HEAD,c),l.set(_e.FRAGMENT_MAIN_UV,h),l.set(_e.FRAGMENT_MAIN_IMAGE,u),l.set(_e.VERTEX_HEAD,f),l.set(_e.VERTEX_MAIN_SUPPORT,d),t.extensions!==null)for(const x of t.extensions)e.extensions.add(x)}}var cS=class extends fn{constructor(i,...t){super("EffectPass"),this.fullscreenMaterial=new aS(null,null,null,i),this.listener=e=>this.handleEvent(e),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const t of this.effects)t.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const t of this.effects)t.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const t=this.fullscreenMaterial;t.dithering=i,t.needsUpdate=!0}setEffects(i){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=i.sort((t,e)=>e.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const i=new eM;let t=0;for(const o of this.effects)if(o.blendMode.blendFunction===ne.DST)i.attributes|=o.getAttributes()&Is.DEPTH;else{if((i.attributes&o.getAttributes()&Is.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${o.name})`);lS("e"+t++,o,i)}let e=i.shaderParts.get(_e.FRAGMENT_HEAD),n=i.shaderParts.get(_e.FRAGMENT_MAIN_IMAGE),s=i.shaderParts.get(_e.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const o of i.blendModes.values())e+=o.getShaderCode().replace(r,`blend${o.blendFunction}`)+`
`;(i.attributes&Is.DEPTH)!==0?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===Me&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(_e.FRAGMENT_HEAD,e),i.shaderParts.set(_e.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(_e.FRAGMENT_MAIN_UV,s);for(const[o,a]of i.shaderParts)a!==null&&i.shaderParts.set(o,a.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,t=ma){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=t;for(const e of this.effects)e.setDepthTexture(i,t)}render(i,t,e,n,s){for(const r of this.effects)r.update(i,t,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=t.texture,r.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:e),i.render(this.scene,this.camera)}}setSize(i,t){this.fullscreenMaterial.setSize(i,t);for(const e of this.effects)e.setSize(i,t)}initialize(i,t,e){this.renderer=i;for(const n of this.effects)n.initialize(i,t,e);this.updateMaterial(),e!==void 0&&e!==Mi&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};class hS extends fn{constructor(t,e){super("BackgroundPass"),this.bgScene=t,this.bgCamera=e,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(n),t.autoClear=!1,t.clear(),t.render(this.bgScene,this.bgCamera),t.autoClear=!0}}class uS{constructor(t,e,n,s,r){this.composer=new tM(t),this.bgPass=new hS(s,r),this.renderPass=new iS(e,n),this.renderPass.clear=!1,this.renderPass.clearDepth=!0,this.bloom=new jM({intensity:1.2,luminanceThreshold:.55,luminanceSmoothing:.22,kernelSize:Wl.MEDIUM}),this.chromatic=new eS({offset:new rt(0,0),radialModulation:!0,modulationOffset:.15}),this.vignette=new sS({eskil:!1,offset:.38,darkness:.22}),this.effectPass=new cS(n,this.bloom,this.chromatic,this.vignette),this.composer.addPass(this.bgPass),this.composer.addPass(this.renderPass),this.composer.addPass(this.effectPass)}update(t,e,n){const s=t*t,r=.9+s*2.8+(1-e)*.2;this.bloom.intensity+=(r-this.bloom.intensity)*(1-Math.pow(.01,n));const o=s*.006;this.chromatic.offset.set(o,o*.6),this.vignette.darkness=.18+e*.48}render(t){this.composer.render(t)}setSize(t,e){this.composer.setSize(t,e)}}const dS=`// 인스턴스 파티클 버텍스 셰이더
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
`,fS=`// 인스턴스 파티클 프래그먼트 셰이더
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
`,ys=512,Wd=.28;class mS{constructor(){const t=new mi(1,1),e=new ii({vertexShader:dS,fragmentShader:fS,transparent:!0,depthWrite:!1,blending:ih});this.mesh=new hv(t,e,ys),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this._lifeArr=new Float32Array(ys),this._colorArr=new Float32Array(ys*3);const n=new Ul(this._lifeArr,1),s=new Ul(this._colorArr,3);this.mesh.geometry.setAttribute("aLife",n),this.mesh.geometry.setAttribute("aColor",s),this._lifeAttr=n,this._colorAttr=s,this._pool=Array.from({length:ys},()=>({active:!1,life:0,maxLife:1,vx:0,vy:0,x:0,y:0,size:8,gravityScale:Wd,r:1,g:1,b:1})),this._dummy=new yi,this._dummy.scale.setScalar(0),this._dummy.updateMatrix();for(let r=0;r<ys;r++)this.mesh.setMatrixAt(r,this._dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0}spawn(t,e,n,s=12,r=120,o={}){const{spreadAngle:a=Math.PI*2,gravityScale:l=Wd,sizeMin:c=4,sizeMax:h=14,lifeMin:u=.35,lifeMax:f=.75,biasAngle:d=Math.PI/2}=o,_=new Xt(n);let v=0;for(let p=0;p<ys&&v<s;p++){const m=this._pool[p];if(m.active)continue;const x=d+(Math.random()-.5)*a,y=r*(.4+Math.random()*.9);m.active=!0,m.x=t,m.y=e,m.vx=Math.cos(x)*y,m.vy=Math.sin(x)*y,m.size=c+Math.random()*(h-c),m.maxLife=u+Math.random()*(f-u),m.life=m.maxLife,m.gravityScale=l,m.r=_.r,m.g=_.g,m.b=_.b,v++}}spawnBurst(t,e,n,s=20,r=180){this.spawn(t,e,n,s,r,{spreadAngle:Math.PI*2,sizeMin:5,sizeMax:18,lifeMin:.4,lifeMax:.9,biasAngle:Math.PI/2})}spawnDirt(t,e,n=28){this.spawn(t,e,7162945,Math.floor(n*.55),150,{spreadAngle:Math.PI,sizeMin:6,sizeMax:22,lifeMin:.55,lifeMax:1.2,biasAngle:Math.PI/2}),this.spawn(t,e,12364452,Math.floor(n*.45),260,{spreadAngle:Math.PI*.9,sizeMin:3,sizeMax:9,lifeMin:.25,lifeMax:.65,biasAngle:Math.PI/2})}spawnCollectRocket(t,e){this.spawn(t,e,16739584,18,260,{spreadAngle:Math.PI*2,sizeMin:6,sizeMax:20,lifeMin:.28,lifeMax:.62,biasAngle:Math.PI/2,gravityScale:.06}),this.spawn(t,e,16763904,8,180,{spreadAngle:Math.PI*2,sizeMin:4,sizeMax:10,lifeMin:.12,lifeMax:.28,biasAngle:Math.PI/2,gravityScale:.02}),this.spawn(t,e,16777215,4,120,{spreadAngle:.8,sizeMin:3,sizeMax:7,lifeMin:.06,lifeMax:.15,biasAngle:Math.PI/2,gravityScale:.01})}spawnCollectBoost(t,e){this.spawn(t,e,16766464,16,220,{spreadAngle:Math.PI*2,sizeMin:5,sizeMax:16,lifeMin:.3,lifeMax:.7,biasAngle:Math.PI/2,gravityScale:.05}),this.spawn(t,e,16361509,10,150,{spreadAngle:Math.PI*2,sizeMin:3,sizeMax:10,lifeMin:.2,lifeMax:.5,biasAngle:Math.PI/2,gravityScale:.04}),this.spawn(t,e,16775620,12,300,{spreadAngle:Math.PI*2,sizeMin:2,sizeMax:5,lifeMin:.1,lifeMax:.28,biasAngle:Math.PI/2,gravityScale:.02})}spawnCollectHeart(t,e){this.spawn(t,e,16717636,14,200,{spreadAngle:Math.PI*1.4,sizeMin:6,sizeMax:18,lifeMin:.3,lifeMax:.65,biasAngle:Math.PI/2,gravityScale:.18}),this.spawn(t,e,16744619,12,160,{spreadAngle:Math.PI*1.8,sizeMin:3,sizeMax:10,lifeMin:.18,lifeMax:.45,biasAngle:Math.PI/2,gravityScale:.12}),this.spawn(t,e,16777215,5,140,{spreadAngle:Math.PI*2,sizeMin:2,sizeMax:6,lifeMin:.06,lifeMax:.16,biasAngle:Math.PI/2,gravityScale:.01})}spawnRating(t,e,n,s=16){this.spawn(t,e,n,s,240,{spreadAngle:Math.PI*.6,sizeMin:4,sizeMax:12,lifeMin:.3,lifeMax:.7,biasAngle:Math.PI/2,gravityScale:.12})}spawnFlameTrail(t,e,n,s){const r=Math.max(1,Math.round(n*4)),o=s+Math.PI;this.spawn(t,e,16737792,r,180+n*120,{spreadAngle:.9,sizeMin:5+n*8,sizeMax:10+n*16,lifeMin:.07,lifeMax:.18,biasAngle:o,gravityScale:.04}),this.spawn(t,e,16768256,Math.max(1,Math.round(r*.5)),260+n*80,{spreadAngle:.6,sizeMin:3,sizeMax:7+n*6,lifeMin:.04,lifeMax:.13,biasAngle:o,gravityScale:.02}),n>.7&&this.spawn(t,e,16777215,1,120,{spreadAngle:.3,sizeMin:4,sizeMax:8,lifeMin:.04,lifeMax:.09,biasAngle:o,gravityScale:.01})}update(t,e=980){let n=!1;for(let s=0;s<ys;s++){const r=this._pool[s];if(!r.active)continue;if(r.life-=t,r.life<=0){r.active=!1,this._dummy.scale.setScalar(0),this._dummy.position.set(0,0,0),this._dummy.updateMatrix(),this.mesh.setMatrixAt(s,this._dummy.matrix),this._lifeArr[s]=0,n=!0;continue}r.vy-=e*r.gravityScale*t,r.x+=r.vx*t,r.y+=r.vy*t;const o=r.life/r.maxLife,a=r.size*o;this._dummy.position.set(r.x,r.y,.2),this._dummy.rotation.z=r.life*14,this._dummy.scale.setScalar(a),this._dummy.updateMatrix(),this.mesh.setMatrixAt(s,this._dummy.matrix),this._lifeArr[s]=o,this._colorArr[s*3]=r.r,this._colorArr[s*3+1]=r.g,this._colorArr[s*3+2]=r.b,n=!0}n&&(this.mesh.instanceMatrix.needsUpdate=!0,this._lifeAttr.needsUpdate=!0,this._colorAttr.needsUpdate=!0)}clear(){for(const t of this._pool)t.active=!1,t.life=0;this._dummy.scale.setScalar(0),this._dummy.updateMatrix();for(let t=0;t<ys;t++)this.mesh.setMatrixAt(t,this._dummy.matrix),this._lifeArr[t]=0;this.mesh.instanceMatrix.needsUpdate=!0,this._lifeAttr.needsUpdate=!0}}const K=Object.freeze({TITLE:"TITLE",SLINGING:"SLINGING",FLYING:"FLYING",ROLLING:"ROLLING",FALLING:"FALLING",GAMEOVER:"GAMEOVER"}),pS={[K.TITLE]:[K.SLINGING],[K.SLINGING]:[K.FLYING,K.TITLE],[K.FLYING]:[K.ROLLING,K.SLINGING,K.GAMEOVER],[K.ROLLING]:[K.FALLING,K.GAMEOVER],[K.FALLING]:[K.ROLLING,K.GAMEOVER],[K.GAMEOVER]:[K.SLINGING,K.TITLE]};class _S{constructor(t=K.TITLE){this.current=t,this.listeners=[]}onChange(t){this.listeners.push(t)}canTransition(t){return pS[this.current]?.includes(t)??!1}transition(t){if(!this.canTransition(t))return console.warn(`[state] invalid transition: ${this.current} → ${t}`),!1;const e=this.current;this.current=t;for(const n of this.listeners)n(e,t);return!0}is(t){return this.current===t}}/**
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
 */var Xh=function(i,t){return Xh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])},Xh(i,t)};function wi(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Xh(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var bi=function(){return bi=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},bi.apply(this,arguments)};var Ji=function(i,t){(i===null||typeof i>"u")&&(i={});var e=bi({},i);for(var n in t)t.hasOwnProperty(n)&&typeof i[n]>"u"&&(e[n]=t[n]);if(typeof Object.getOwnPropertySymbols=="function")for(var s=Object.getOwnPropertySymbols(t),r=0;r<s.length;r++){var o=s[r];t.propertyIsEnumerable(o)&&typeof i[o]>"u"&&(e[o]=t[o])}return e},vS=Math.random,Bi=1e-9,gS=Number.isFinite;function yS(i){return i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i|=i>>16,i+1}function xS(i){return i>0&&(i&i-1)===0}function tp(i,t,e){return typeof t>"u"?(e=1,t=0):typeof e>"u"&&(e=t,t=0),e>t?(i=(i-t)%(e-t),i+(i<0?e:t)):(i=(i-e)%(t-e),i+(i<=0?t:e))}function li(i,t,e){return i<t?t:i>e?e:i}function AS(i,t){return typeof i>"u"?(t=1,i=0):typeof t>"u"&&(t=i,i=0),i===t?i:vS()*(t-i)+i}var Tr=Object.create(Math);Tr.EPSILON=Bi;Tr.isFinite=gS;Tr.nextPowerOfTwo=yS;Tr.isPowerOfTwo=xS;Tr.mod=tp;Tr.clamp=li;Tr.random=AS;var qd=Math.abs,Rc=Math.sqrt,Xd=Math.max,Yd=Math.min,g=(function(){function i(t,e){if(!(this instanceof i))return new i(t,e);typeof t>"u"?(this.x=0,this.y=0):typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}return i.prototype._serialize=function(){return{x:this.x,y:this.y}},i._deserialize=function(t){var e=Object.create(i.prototype);return e.x=t.x,e.y=t.y,e},i.zero=function(){var t=Object.create(i.prototype);return t.x=0,t.y=0,t},i.neo=function(t,e){var n=Object.create(i.prototype);return n.x=t,n.y=e,n},i.clone=function(t){return i.neo(t.x,t.y)},i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.x)&&Number.isFinite(t.y)},i.assert=function(t){},i.prototype.clone=function(){return i.clone(this)},i.prototype.setZero=function(){return this.x=0,this.y=0,this},i.prototype.set=function(t,e){return typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e),this},i.prototype.setNum=function(t,e){return this.x=t,this.y=e,this},i.prototype.setVec2=function(t){return this.x=t.x,this.y=t.y,this},i.prototype.wSet=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?this.setCombine(t,e,n,s):this.setMul(t,e)},i.prototype.setCombine=function(t,e,n,s){var r=t*e.x+n*s.x,o=t*e.y+n*s.y;return this.x=r,this.y=o,this},i.prototype.setMul=function(t,e){var n=t*e.x,s=t*e.y;return this.x=n,this.y=s,this},i.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},i.prototype.wAdd=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?this.addCombine(t,e,n,s):this.addMul(t,e)},i.prototype.addCombine=function(t,e,n,s){var r=t*e.x+n*s.x,o=t*e.y+n*s.y;return this.x+=r,this.y+=o,this},i.prototype.addMul=function(t,e){var n=t*e.x,s=t*e.y;return this.x+=n,this.y+=s,this},i.prototype.wSub=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?this.subCombine(t,e,n,s):this.subMul(t,e)},i.prototype.subCombine=function(t,e,n,s){var r=t*e.x+n*s.x,o=t*e.y+n*s.y;return this.x-=r,this.y-=o,this},i.prototype.subMul=function(t,e){var n=t*e.x,s=t*e.y;return this.x-=n,this.y-=s,this},i.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},i.prototype.mul=function(t){return this.x*=t,this.y*=t,this},i.prototype.length=function(){return i.lengthOf(this)},i.prototype.lengthSquared=function(){return i.lengthSquared(this)},i.prototype.normalize=function(){var t=this.length();if(t<Bi)return 0;var e=1/t;return this.x*=e,this.y*=e,t},i.normalize=function(t){var e=i.lengthOf(t);if(e<Bi)return i.zero();var n=1/e;return i.neo(t.x*n,t.y*n)},i.lengthOf=function(t){return Rc(t.x*t.x+t.y*t.y)},i.lengthSquared=function(t){return t.x*t.x+t.y*t.y},i.distance=function(t,e){var n=t.x-e.x,s=t.y-e.y;return Rc(n*n+s*s)},i.distanceSquared=function(t,e){var n=t.x-e.x,s=t.y-e.y;return n*n+s*s},i.areEqual=function(t,e){return t===e||typeof e=="object"&&e!==null&&t.x===e.x&&t.y===e.y},i.skew=function(t){return i.neo(-t.y,t.x)},i.dot=function(t,e){return t.x*e.x+t.y*e.y},i.cross=function(t,e){return typeof e=="number"?i.neo(e*t.y,-e*t.x):typeof t=="number"?i.neo(-t*e.y,t*e.x):t.x*e.y-t.y*e.x},i.crossVec2Vec2=function(t,e){return t.x*e.y-t.y*e.x},i.crossVec2Num=function(t,e){return i.neo(e*t.y,-e*t.x)},i.crossNumVec2=function(t,e){return i.neo(-t*e.y,t*e.x)},i.addCross=function(t,e,n){if(typeof n=="number")return i.neo(n*e.y+t.x,-n*e.x+t.y);if(typeof e=="number")return i.neo(-e*n.y+t.x,e*n.x+t.y)},i.addCrossVec2Num=function(t,e,n){return i.neo(n*e.y+t.x,-n*e.x+t.y)},i.addCrossNumVec2=function(t,e,n){return i.neo(-e*n.y+t.x,e*n.x+t.y)},i.add=function(t,e){return i.neo(t.x+e.x,t.y+e.y)},i.wAdd=function(t,e,n,s){return typeof n<"u"||typeof s<"u"?i.combine(t,e,n,s):i.mulNumVec2(t,e)},i.combine=function(t,e,n,s){return i.zero().setCombine(t,e,n,s)},i.sub=function(t,e){return i.neo(t.x-e.x,t.y-e.y)},i.mul=function(t,e){if(typeof t=="object")return i.neo(t.x*e,t.y*e);if(typeof e=="object")return i.neo(t*e.x,t*e.y)},i.mulVec2Num=function(t,e){return i.neo(t.x*e,t.y*e)},i.mulNumVec2=function(t,e){return i.neo(t*e.x,t*e.y)},i.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this},i.neg=function(t){return i.neo(-t.x,-t.y)},i.abs=function(t){return i.neo(qd(t.x),qd(t.y))},i.mid=function(t,e){return i.neo((t.x+e.x)*.5,(t.y+e.y)*.5)},i.upper=function(t,e){return i.neo(Xd(t.x,e.x),Xd(t.y,e.y))},i.lower=function(t,e){return i.neo(Yd(t.x,e.x),Yd(t.y,e.y))},i.prototype.clamp=function(t){var e=this.x*this.x+this.y*this.y;if(e>t*t){var n=t/Rc(e);this.x*=n,this.y*=n}return this},i.clamp=function(t,e){var n=i.neo(t.x,t.y);return n.clamp(e),n},i.clampVec2=function(t,e,n){return{x:li(t.x,e?.x,n?.x),y:li(t.y,e?.y,n?.y)}},i.scaleFn=function(t,e){return function(n){return i.neo(n.x*t,n.y*e)}},i.translateFn=function(t,e){return function(n){return i.neo(n.x+t,n.y+e)}},i})(),en=Math.max,nn=Math.min,di=(function(){function i(t,e){if(!(this instanceof i))return new i(t,e);this.lowerBound=g.zero(),this.upperBound=g.zero(),typeof t=="object"&&this.lowerBound.setVec2(t),typeof e=="object"?this.upperBound.setVec2(e):typeof t=="object"&&this.upperBound.setVec2(t)}return i.prototype.isValid=function(){return i.isValid(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.lowerBound)&&g.isValid(t.upperBound)&&g.sub(t.upperBound,t.lowerBound).lengthSquared()>=0},i.assert=function(t){},i.prototype.getCenter=function(){return g.neo((this.lowerBound.x+this.upperBound.x)*.5,(this.lowerBound.y+this.upperBound.y)*.5)},i.prototype.getExtents=function(){return g.neo((this.upperBound.x-this.lowerBound.x)*.5,(this.upperBound.y-this.lowerBound.y)*.5)},i.prototype.getPerimeter=function(){return 2*(this.upperBound.x-this.lowerBound.x+this.upperBound.y-this.lowerBound.y)},i.prototype.combine=function(t,e){e=e||this;var n=t.lowerBound,s=t.upperBound,r=e.lowerBound,o=e.upperBound,a=nn(n.x,r.x),l=nn(n.y,r.y),c=en(o.x,s.x),h=en(o.y,s.y);this.lowerBound.setNum(a,l),this.upperBound.setNum(c,h)},i.prototype.combinePoints=function(t,e){this.lowerBound.setNum(nn(t.x,e.x),nn(t.y,e.y)),this.upperBound.setNum(en(t.x,e.x),en(t.y,e.y))},i.prototype.set=function(t){this.lowerBound.setNum(t.lowerBound.x,t.lowerBound.y),this.upperBound.setNum(t.upperBound.x,t.upperBound.y)},i.prototype.contains=function(t){var e=!0;return e=e&&this.lowerBound.x<=t.lowerBound.x,e=e&&this.lowerBound.y<=t.lowerBound.y,e=e&&t.upperBound.x<=this.upperBound.x,e=e&&t.upperBound.y<=this.upperBound.y,e},i.prototype.extend=function(t){return i.extend(this,t),this},i.extend=function(t,e){return t.lowerBound.x-=e,t.lowerBound.y-=e,t.upperBound.x+=e,t.upperBound.y+=e,t},i.testOverlap=function(t,e){var n=e.lowerBound.x-t.upperBound.x,s=t.lowerBound.x-e.upperBound.x,r=e.lowerBound.y-t.upperBound.y,o=t.lowerBound.y-e.upperBound.y;return!(n>0||r>0||s>0||o>0)},i.areEqual=function(t,e){return g.areEqual(t.lowerBound,e.lowerBound)&&g.areEqual(t.upperBound,e.upperBound)},i.diff=function(t,e){var n=en(0,nn(t.upperBound.x,e.upperBound.x)-en(e.lowerBound.x,t.lowerBound.x)),s=en(0,nn(t.upperBound.y,e.upperBound.y)-en(e.lowerBound.y,t.lowerBound.y)),r=t.upperBound.x-t.lowerBound.x,o=t.upperBound.y-t.lowerBound.y,a=e.upperBound.x-e.lowerBound.x,l=e.upperBound.y-e.lowerBound.y;return r*o+a*l-n*s},i.prototype.rayCast=function(t,e){var n=-1/0,s=1/0,r=e.p1,o=g.sub(e.p2,e.p1),a=g.abs(o),l=g.zero();if(a.x<Bi){if(r.x<this.lowerBound.x||this.upperBound.x<r.x)return!1}else{var c=1/o.x,h=(this.lowerBound.x-r.x)*c,u=(this.upperBound.x-r.x)*c,f=-1;if(h>u){var d=h;h=u,u=d,f=1}if(h>n&&(l.setZero(),l.x=f,n=h),s=nn(s,u),n>s)return!1}if(a.y<Bi){if(r.y<this.lowerBound.y||this.upperBound.y<r.y)return!1}else{var c=1/o.y,h=(this.lowerBound.y-r.y)*c,u=(this.upperBound.y-r.y)*c,f=-1;if(h>u){var d=h;h=u,u=d,f=1}if(h>n&&(l.setZero(),l.y=f,n=h),s=nn(s,u),n>s)return!1}return n<0||e.maxFraction<n?!1:(t.fraction=n,t.normal=l,!0)},i.prototype.toString=function(){return JSON.stringify(this)},i.combinePoints=function(t,e,n){return t.lowerBound.x=nn(e.x,n.x),t.lowerBound.y=nn(e.y,n.y),t.upperBound.x=en(e.x,n.x),t.upperBound.y=en(e.y,n.y),t},i.combinedPerimeter=function(t,e){var n=nn(t.lowerBound.x,e.lowerBound.x),s=nn(t.lowerBound.y,e.lowerBound.y),r=en(t.upperBound.x,e.upperBound.x),o=en(t.upperBound.y,e.upperBound.y);return 2*(r-n+o-s)},i})(),Ja=Math.PI,$t=(function(){function i(){}return Object.defineProperty(i,"polygonRadius",{get:function(){return 2*i.linearSlop},enumerable:!1,configurable:!0}),i.lengthUnitsPerMeter=1,i.maxManifoldPoints=2,i.maxPolygonVertices=12,i.aabbExtension=.1,i.aabbMultiplier=2,i.linearSlop=.005,i.angularSlop=2/180*Ja,i.maxSubSteps=8,i.maxTOIContacts=32,i.maxTOIIterations=20,i.maxDistanceIterations=20,i.velocityThreshold=1,i.maxLinearCorrection=.2,i.maxAngularCorrection=8/180*Ja,i.maxTranslation=2,i.maxRotation=.5*Ja,i.baumgarte=.2,i.toiBaugarte=.75,i.timeToSleep=.5,i.linearSleepTolerance=.01,i.angularSleepTolerance=2/180*Ja,i})(),ut=(function(){function i(){}return Object.defineProperty(i,"maxManifoldPoints",{get:function(){return $t.maxManifoldPoints},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxPolygonVertices",{get:function(){return $t.maxPolygonVertices},enumerable:!1,configurable:!0}),Object.defineProperty(i,"aabbExtension",{get:function(){return $t.aabbExtension*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"aabbMultiplier",{get:function(){return $t.aabbMultiplier},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSlop",{get:function(){return $t.linearSlop*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSlopSquared",{get:function(){return $t.linearSlop*$t.lengthUnitsPerMeter*$t.linearSlop*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"angularSlop",{get:function(){return $t.angularSlop},enumerable:!1,configurable:!0}),Object.defineProperty(i,"polygonRadius",{get:function(){return 2*$t.linearSlop},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxSubSteps",{get:function(){return $t.maxSubSteps},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTOIContacts",{get:function(){return $t.maxTOIContacts},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTOIIterations",{get:function(){return $t.maxTOIIterations},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxDistanceIterations",{get:function(){return $t.maxDistanceIterations},enumerable:!1,configurable:!0}),Object.defineProperty(i,"velocityThreshold",{get:function(){return $t.velocityThreshold*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxLinearCorrection",{get:function(){return $t.maxLinearCorrection*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxAngularCorrection",{get:function(){return $t.maxAngularCorrection},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTranslation",{get:function(){return $t.maxTranslation*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxTranslationSquared",{get:function(){return $t.maxTranslation*$t.lengthUnitsPerMeter*$t.maxTranslation*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxRotation",{get:function(){return $t.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(i,"maxRotationSquared",{get:function(){return $t.maxRotation*$t.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(i,"baumgarte",{get:function(){return $t.baumgarte},enumerable:!1,configurable:!0}),Object.defineProperty(i,"toiBaugarte",{get:function(){return $t.toiBaugarte},enumerable:!1,configurable:!0}),Object.defineProperty(i,"timeToSleep",{get:function(){return $t.timeToSleep},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSleepTolerance",{get:function(){return $t.linearSleepTolerance*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"linearSleepToleranceSqr",{get:function(){return $t.linearSleepTolerance*$t.lengthUnitsPerMeter*$t.linearSleepTolerance*$t.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(i,"angularSleepTolerance",{get:function(){return $t.angularSleepTolerance},enumerable:!1,configurable:!0}),Object.defineProperty(i,"angularSleepToleranceSqr",{get:function(){return $t.angularSleepTolerance*$t.angularSleepTolerance},enumerable:!1,configurable:!0}),i})(),ea=(function(){function i(t){this._list=[],this._max=1/0,this._hasCreateFn=!1,this._createCount=0,this._hasAllocateFn=!1,this._allocateCount=0,this._hasReleaseFn=!1,this._releaseCount=0,this._hasDisposeFn=!1,this._disposeCount=0,this._list=[],this._max=t.max||this._max,this._createFn=t.create,this._hasCreateFn=typeof this._createFn=="function",this._allocateFn=t.allocate,this._hasAllocateFn=typeof this._allocateFn=="function",this._releaseFn=t.release,this._hasReleaseFn=typeof this._releaseFn=="function",this._disposeFn=t.dispose,this._hasDisposeFn=typeof this._disposeFn=="function"}return i.prototype.max=function(t){return typeof t=="number"?(this._max=t,this):this._max},i.prototype.size=function(){return this._list.length},i.prototype.allocate=function(){var t;return this._list.length>0?t=this._list.shift():(this._createCount++,this._hasCreateFn?t=this._createFn():t={}),this._allocateCount++,this._hasAllocateFn&&this._allocateFn(t),t},i.prototype.release=function(t){this._list.length<this._max?(this._releaseCount++,this._hasReleaseFn&&this._releaseFn(t),this._list.push(t)):(this._disposeCount++,this._hasDisposeFn&&(t=this._disposeFn(t)))},i.prototype.toString=function(){return" +"+this._createCount+" >"+this._allocateCount+" <"+this._releaseCount+" -"+this._disposeCount+" ="+this._list.length+"/"+this._max},i})(),$d=Math.abs,Gi=Math.max,MS=(function(){function i(t){this.aabb=new di,this.userData=null,this.parent=null,this.child1=null,this.child2=null,this.height=-1,this.id=t}return i.prototype.toString=function(){return this.id+": "+this.userData},i.prototype.isLeaf=function(){return this.child1==null},i})(),Jd=new ea({create:function(){return new MS},release:function(i){i.userData=null,i.parent=null,i.child1=null,i.child2=null,i.height=-1,i.id=void 0}}),SS=(function(){function i(){this.inputPool=new ea({create:function(){return{}},release:function(t){}}),this.stackPool=new ea({create:function(){return[]},release:function(t){t.length=0}}),this.iteratorPool=new ea({create:function(){return new bS},release:function(t){t.close()}}),this.m_root=null,this.m_nodes={},this.m_lastProxyId=0}return i.prototype.getUserData=function(t){var e=this.m_nodes[t];return e.userData},i.prototype.getFatAABB=function(t){var e=this.m_nodes[t];return e.aabb},i.prototype.allocateNode=function(){var t=Jd.allocate();return t.id=++this.m_lastProxyId,this.m_nodes[t.id]=t,t},i.prototype.freeNode=function(t){delete this.m_nodes[t.id],Jd.release(t)},i.prototype.createProxy=function(t,e){var n=this.allocateNode();return n.aabb.set(t),di.extend(n.aabb,ut.aabbExtension),n.userData=e,n.height=0,this.insertLeaf(n),n.id},i.prototype.destroyProxy=function(t){var e=this.m_nodes[t];this.removeLeaf(e),this.freeNode(e)},i.prototype.moveProxy=function(t,e,n){var s=this.m_nodes[t];return s.aabb.contains(e)?!1:(this.removeLeaf(s),s.aabb.set(e),e=s.aabb,di.extend(e,ut.aabbExtension),n.x<0?e.lowerBound.x+=n.x*ut.aabbMultiplier:e.upperBound.x+=n.x*ut.aabbMultiplier,n.y<0?e.lowerBound.y+=n.y*ut.aabbMultiplier:e.upperBound.y+=n.y*ut.aabbMultiplier,this.insertLeaf(s),!0)},i.prototype.insertLeaf=function(t){if(this.m_root==null){this.m_root=t,this.m_root.parent=null;return}for(var e=t.aabb,n=this.m_root;!n.isLeaf();){var s=n.child1,r=n.child2,o=n.aabb.getPerimeter(),a=di.combinedPerimeter(n.aabb,e),l=2*a,c=2*(a-o),h=di.combinedPerimeter(e,s.aabb),u=h+c;if(!s.isLeaf()){var f=s.aabb.getPerimeter();u-=f}var d=di.combinedPerimeter(e,r.aabb),_=d+c;if(!r.isLeaf()){var f=r.aabb.getPerimeter();_-=f}if(l<u&&l<_)break;u<_?n=s:n=r}var v=n,p=v.parent,m=this.allocateNode();for(m.parent=p,m.userData=null,m.aabb.combine(e,v.aabb),m.height=v.height+1,p!=null?(p.child1===v?p.child1=m:p.child2=m,m.child1=v,m.child2=t,v.parent=m,t.parent=m):(m.child1=v,m.child2=t,v.parent=m,t.parent=m,this.m_root=m),n=t.parent;n!=null;){n=this.balance(n);var s=n.child1,r=n.child2;n.height=1+Gi(s.height,r.height),n.aabb.combine(s.aabb,r.aabb),n=n.parent}},i.prototype.removeLeaf=function(t){if(t===this.m_root){this.m_root=null;return}var e=t.parent,n=e.parent,s;if(e.child1===t?s=e.child2:s=e.child1,n!=null){n.child1===e?n.child1=s:n.child2=s,s.parent=n,this.freeNode(e);for(var r=n;r!=null;){r=this.balance(r);var o=r.child1,a=r.child2;r.aabb.combine(o.aabb,a.aabb),r.height=1+Gi(o.height,a.height),r=r.parent}}else this.m_root=s,s.parent=null,this.freeNode(e)},i.prototype.balance=function(t){var e=t;if(e.isLeaf()||e.height<2)return t;var n=e.child1,s=e.child2,r=s.height-n.height;if(r>1){var o=s.child1,a=s.child2;return s.child1=e,s.parent=e.parent,e.parent=s,s.parent!=null?s.parent.child1===t?s.parent.child1=s:s.parent.child2=s:this.m_root=s,o.height>a.height?(s.child2=o,e.child2=a,a.parent=e,e.aabb.combine(n.aabb,a.aabb),s.aabb.combine(e.aabb,o.aabb),e.height=1+Gi(n.height,a.height),s.height=1+Gi(e.height,o.height)):(s.child2=a,e.child2=o,o.parent=e,e.aabb.combine(n.aabb,o.aabb),s.aabb.combine(e.aabb,a.aabb),e.height=1+Gi(n.height,o.height),s.height=1+Gi(e.height,a.height)),s}if(r<-1){var l=n.child1,c=n.child2;return n.child1=e,n.parent=e.parent,e.parent=n,n.parent!=null?n.parent.child1===e?n.parent.child1=n:n.parent.child2=n:this.m_root=n,l.height>c.height?(n.child2=l,e.child1=c,c.parent=e,e.aabb.combine(s.aabb,c.aabb),n.aabb.combine(e.aabb,l.aabb),e.height=1+Gi(s.height,c.height),n.height=1+Gi(e.height,l.height)):(n.child2=c,e.child1=l,l.parent=e,e.aabb.combine(s.aabb,l.aabb),n.aabb.combine(e.aabb,c.aabb),e.height=1+Gi(s.height,l.height),n.height=1+Gi(e.height,c.height)),n}return e},i.prototype.getHeight=function(){return this.m_root==null?0:this.m_root.height},i.prototype.getAreaRatio=function(){if(this.m_root==null)return 0;for(var t=this.m_root,e=t.aabb.getPerimeter(),n=0,s,r=this.iteratorPool.allocate().preorder(this.m_root);s=r.next();)s.height<0||(n+=s.aabb.getPerimeter());return this.iteratorPool.release(r),n/e},i.prototype.computeHeight=function(t){var e;if(typeof t<"u"?e=this.m_nodes[t]:e=this.m_root,e.isLeaf())return 0;var n=this.computeHeight(e.child1.id),s=this.computeHeight(e.child2.id);return 1+Gi(n,s)},i.prototype.validateStructure=function(t){if(t!=null){this.m_root;var e=t.child1,n=t.child2;t.isLeaf()||(this.validateStructure(e),this.validateStructure(n))}},i.prototype.validateMetrics=function(t){if(t!=null){var e=t.child1,n=t.child2;t.isLeaf()||(this.validateMetrics(e),this.validateMetrics(n))}},i.prototype.validate=function(){},i.prototype.getMaxBalance=function(){for(var t=0,e,n=this.iteratorPool.allocate().preorder(this.m_root);e=n.next();)if(!(e.height<=1)){var s=$d(e.child2.height-e.child1.height);t=Gi(t,s)}return this.iteratorPool.release(n),t},i.prototype.rebuildBottomUp=function(){for(var t=[],e=0,n,s=this.iteratorPool.allocate().preorder(this.m_root);n=s.next();)n.height<0||(n.isLeaf()?(n.parent=null,t[e]=n,++e):this.freeNode(n));for(this.iteratorPool.release(s);e>1;){for(var r=1/0,o=-1,a=-1,l=0;l<e;++l)for(var c=t[l].aabb,h=l+1;h<e;++h){var u=t[h].aabb,f=di.combinedPerimeter(c,u);f<r&&(o=l,a=h,r=f)}var d=t[o],_=t[a],v=this.allocateNode();v.child1=d,v.child2=_,v.height=1+Gi(d.height,_.height),v.aabb.combine(d.aabb,_.aabb),v.parent=null,d.parent=v,_.parent=v,t[a]=t[e-1],t[o]=v,--e}this.m_root=t[0]},i.prototype.shiftOrigin=function(t){for(var e,n=this.iteratorPool.allocate().preorder(this.m_root);e=n.next();){var s=e.aabb;s.lowerBound.x-=t.x,s.lowerBound.y-=t.y,s.upperBound.x-=t.x,s.upperBound.y-=t.y}this.iteratorPool.release(n)},i.prototype.query=function(t,e){var n=this.stackPool.allocate();for(n.push(this.m_root);n.length>0;){var s=n.pop();if(s!=null&&di.testOverlap(s.aabb,t))if(s.isLeaf()){var r=e(s.id);if(r===!1)return}else n.push(s.child1),n.push(s.child2)}this.stackPool.release(n)},i.prototype.rayCast=function(t,e){var n=t.p1,s=t.p2,r=g.sub(s,n);r.normalize();var o=g.crossNumVec2(1,r),a=g.abs(o),l=t.maxFraction,c=new di,h=g.combine(1-l,n,l,s);c.combinePoints(n,h);var u=this.stackPool.allocate(),f=this.inputPool.allocate();for(u.push(this.m_root);u.length>0;){var d=u.pop();if(d!=null&&di.testOverlap(d.aabb,c)!==!1){var _=d.aabb.getCenter(),v=d.aabb.getExtents(),p=$d(g.dot(o,g.sub(n,_)))-g.dot(a,v);if(!(p>0))if(d.isLeaf()){f.p1=g.clone(t.p1),f.p2=g.clone(t.p2),f.maxFraction=l;var m=e(f,d.id);if(m===0)break;m>0&&(l=m,h=g.combine(1-l,n,l,s),c.combinePoints(n,h))}else u.push(d.child1),u.push(d.child2)}}this.stackPool.release(u),this.inputPool.release(f)},i})(),bS=(function(){function i(){this.parents=[],this.states=[]}return i.prototype.preorder=function(t){return this.parents.length=0,this.parents.push(t),this.states.length=0,this.states.push(0),this},i.prototype.next=function(){for(;this.parents.length>0;){var t=this.parents.length-1,e=this.parents[t];if(this.states[t]===0)return this.states[t]=1,e;if(this.states[t]===1&&(this.states[t]=2,e.child1))return this.parents.push(e.child1),this.states.push(1),e.child1;if(this.states[t]===2&&(this.states[t]=3,e.child2))return this.parents.push(e.child2),this.states.push(1),e.child2;this.parents.pop(),this.states.pop()}},i.prototype.close=function(){this.parents.length=0},i})(),wS=Math.max,TS=Math.min,ES=(function(){function i(){var t=this;this.m_tree=new SS,this.m_moveBuffer=[],this.query=function(e,n){t.m_tree.query(e,n)},this.queryCallback=function(e){if(e===t.m_queryProxyId)return!0;var n=TS(e,t.m_queryProxyId),s=wS(e,t.m_queryProxyId),r=t.m_tree.getUserData(n),o=t.m_tree.getUserData(s);return t.m_callback(r,o),!0}}return i.prototype.getUserData=function(t){return this.m_tree.getUserData(t)},i.prototype.testOverlap=function(t,e){var n=this.m_tree.getFatAABB(t),s=this.m_tree.getFatAABB(e);return di.testOverlap(n,s)},i.prototype.getFatAABB=function(t){return this.m_tree.getFatAABB(t)},i.prototype.getProxyCount=function(){return this.m_moveBuffer.length},i.prototype.getTreeHeight=function(){return this.m_tree.getHeight()},i.prototype.getTreeBalance=function(){return this.m_tree.getMaxBalance()},i.prototype.getTreeQuality=function(){return this.m_tree.getAreaRatio()},i.prototype.rayCast=function(t,e){this.m_tree.rayCast(t,e)},i.prototype.shiftOrigin=function(t){this.m_tree.shiftOrigin(t)},i.prototype.createProxy=function(t,e){var n=this.m_tree.createProxy(t,e);return this.bufferMove(n),n},i.prototype.destroyProxy=function(t){this.unbufferMove(t),this.m_tree.destroyProxy(t)},i.prototype.moveProxy=function(t,e,n){var s=this.m_tree.moveProxy(t,e,n);s&&this.bufferMove(t)},i.prototype.touchProxy=function(t){this.bufferMove(t)},i.prototype.bufferMove=function(t){this.m_moveBuffer.push(t)},i.prototype.unbufferMove=function(t){for(var e=0;e<this.m_moveBuffer.length;++e)this.m_moveBuffer[e]===t&&(this.m_moveBuffer[e]=null)},i.prototype.updatePairs=function(t){for(this.m_callback=t;this.m_moveBuffer.length>0;)if(this.m_queryProxyId=this.m_moveBuffer.pop(),this.m_queryProxyId!==null){var e=this.m_tree.getFatAABB(this.m_queryProxyId);this.m_tree.query(e,this.queryCallback)}},i})(),ep=Math.sin,ip=Math.cos,hu=Math.sqrt;function X(i,t){return{x:i,y:t}}function CS(i){return{s:ep(i),c:ip(i)}}function oi(i,t,e){return i.x=t,i.y=e,i}function V(i,t){return i.x=t.x,i.y=t.y,i}function Ct(i){return i.x=0,i.y=0,i}function ca(i){return i.x=-i.x,i.y=-i.y,i}function ln(i,t){return i.x+=t.x,i.y+=t.y,i}function RS(i,t,e){return i.x=t.x+e.x,i.y=t.y+e.y,i}function os(i,t){return i.x-=t.x,i.y-=t.y,i}function Vt(i,t,e){return i.x=t.x-e.x,i.y=t.y-e.y,i}function Zd(i,t){return i.x*=t,i.y*=t,i}function Lt(i,t,e){return i.x=t*e.x,i.y=t*e.y,i}function Cn(i,t,e){return i.x+=t*e.x,i.y+=t*e.y,i}function Jo(i,t,e){return i.x-=t*e.x,i.y-=t*e.y,i}function Be(i,t,e,n,s){return i.x=t*e.x+n*s.x,i.y=t*e.y+n*s.y,i}function zn(i,t,e,n,s,r,o){return i.x=t*e.x+n*s.x+r*o.x,i.y=t*e.y+n*s.y+r*o.y,i}function PS(i){var t=hu(i.x*i.x+i.y*i.y);if(t!==0){var e=1/t;i.x*=e,i.y*=e}return t}function Pn(i){var t=hu(i.x*i.x+i.y*i.y);if(t>0){var e=1/t;i.x*=e,i.y*=e}return i}function mr(i,t,e){var n=e*t.y,s=-e*t.x;return i.x=n,i.y=s,i}function Xi(i,t,e){var n=-t*e.y,s=t*e.x;return i.x=n,i.y=s,i}function Jt(i,t){return i.x*t.y-i.y*t.x}function st(i,t){return i.x*t.x+i.y*t.y}function pr(i){return i.x*i.x+i.y*i.y}function np(i,t){var e=i.x-t.x,n=i.y-t.y;return hu(e*e+n*n)}function _r(i,t){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function BS(i,t){return i.c=ip(t),i.s=ep(t),i}function dn(i,t,e){return i.x=t.c*e.x-t.s*e.y,i.y=t.s*e.x+t.c*e.y,i}function mo(i,t,e){var n=t.c*e.x+t.s*e.y,s=-t.s*e.x+t.c*e.y;return i.x=n,i.y=s,i}function IS(i,t,e,n){var s=t.c*n.x+t.s*n.y,r=-t.s*n.x+t.c*n.y,o=e.c*s-e.s*r,a=e.s*s+e.c*r;return i.x=o,i.y=a,i}function Er(i,t,e){return{p:X(i,t),q:CS(e)}}function zl(i,t){return i.p.x=t.p.x,i.p.y=t.p.y,i.q.s=t.q.s,i.q.c=t.q.c,i}function zt(i,t,e){var n=t.q.c*e.x-t.q.s*e.y+t.p.x,s=t.q.s*e.x+t.q.c*e.y+t.p.y;return i.x=n,i.y=s,i}function uu(i,t,e){var n=e.x-t.p.x,s=e.y-t.p.y,r=t.q.c*n+t.q.s*s,o=-t.q.s*n+t.q.c*s;return i.x=r,i.y=o,i}function sp(i,t,e,n){var s=t.q.c*n.x-t.q.s*n.y+t.p.x,r=t.q.s*n.x+t.q.c*n.y+t.p.y,o=s-e.p.x,a=r-e.p.y,l=e.q.c*o+e.q.s*a,c=-e.q.s*o+e.q.c*a;return i.x=l,i.y=c,i}function rp(i,t,e){var n=t.q.c*e.q.c+t.q.s*e.q.s,s=t.q.c*e.q.s-t.q.s*e.q.c,r=t.q.c*(e.p.x-t.p.x)+t.q.s*(e.p.y-t.p.y),o=-t.q.s*(e.p.x-t.p.x)+t.q.c*(e.p.y-t.p.y);return i.q.c=n,i.q.s=s,i.p.x=r,i.p.y=o,i}var Kd=Math.sin,jd=Math.cos,LS=Math.atan2,J=(function(){function i(t){if(!(this instanceof i))return new i(t);typeof t=="number"?this.setAngle(t):typeof t=="object"?this.setRot(t):this.setIdentity()}return i.neo=function(t){var e=Object.create(i.prototype);return e.setAngle(t),e},i.clone=function(t){var e=Object.create(i.prototype);return e.s=t.s,e.c=t.c,e},i.identity=function(){var t=Object.create(i.prototype);return t.s=0,t.c=1,t},i.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.s)&&Number.isFinite(t.c)},i.assert=function(t){},i.prototype.setIdentity=function(){this.s=0,this.c=1},i.prototype.set=function(t){typeof t=="object"?(this.s=t.s,this.c=t.c):(this.s=Kd(t),this.c=jd(t))},i.prototype.setRot=function(t){this.s=t.s,this.c=t.c},i.prototype.setAngle=function(t){this.s=Kd(t),this.c=jd(t)},i.prototype.getAngle=function(){return LS(this.s,this.c)},i.prototype.getXAxis=function(){return g.neo(this.c,this.s)},i.prototype.getYAxis=function(){return g.neo(-this.s,this.c)},i.mul=function(t,e){if("c"in e&&"s"in e){var n=i.identity();return n.s=t.s*e.c+t.c*e.s,n.c=t.c*e.c-t.s*e.s,n}else if("x"in e&&"y"in e)return g.neo(t.c*e.x-t.s*e.y,t.s*e.x+t.c*e.y)},i.mulRot=function(t,e){var n=i.identity();return n.s=t.s*e.c+t.c*e.s,n.c=t.c*e.c-t.s*e.s,n},i.mulVec2=function(t,e){return g.neo(t.c*e.x-t.s*e.y,t.s*e.x+t.c*e.y)},i.mulSub=function(t,e,n){var s=t.c*(e.x-n.x)-t.s*(e.y-n.y),r=t.s*(e.x-n.x)+t.c*(e.y-n.y);return g.neo(s,r)},i.mulT=function(t,e){if("c"in e&&"s"in e){var n=i.identity();return n.s=t.c*e.s-t.s*e.c,n.c=t.c*e.c+t.s*e.s,n}else if("x"in e&&"y"in e)return g.neo(t.c*e.x+t.s*e.y,-t.s*e.x+t.c*e.y)},i.mulTRot=function(t,e){var n=i.identity();return n.s=t.c*e.s-t.s*e.c,n.c=t.c*e.c+t.s*e.s,n},i.mulTVec2=function(t,e){return g.neo(t.c*e.x+t.s*e.y,-t.s*e.x+t.c*e.y)},i})(),DS=Math.atan2,Qd=Math.PI,Xs=X(0,0),So=(function(){function i(){this.localCenter=g.zero(),this.c=g.zero(),this.a=0,this.alpha0=0,this.c0=g.zero(),this.a0=0}return i.prototype.recycle=function(){Ct(this.localCenter),Ct(this.c),this.a=0,this.alpha0=0,Ct(this.c0),this.a0=0},i.prototype.setTransform=function(t){zt(Xs,t,this.localCenter),V(this.c,Xs),V(this.c0,Xs),this.a=this.a0=DS(t.q.s,t.q.c)},i.prototype.setLocalCenter=function(t,e){V(this.localCenter,t),zt(Xs,e,this.localCenter),V(this.c,Xs),V(this.c0,Xs)},i.prototype.getTransform=function(t,e){e===void 0&&(e=0),BS(t.q,(1-e)*this.a0+e*this.a),Be(t.p,1-e,this.c0,e,this.c),os(t.p,dn(Xs,t.q,this.localCenter))},i.prototype.advance=function(t){var e=(t-this.alpha0)/(1-this.alpha0);Be(this.c0,e,this.c,1-e,this.c0),this.a0=e*this.a+(1-e)*this.a0,this.alpha0=t},i.prototype.forward=function(){this.a0=this.a,V(this.c0,this.c)},i.prototype.normalize=function(){var t=tp(this.a0,-Qd,+Qd);this.a-=this.a0-t,this.a0=t},i.prototype.set=function(t){V(this.localCenter,t.localCenter),V(this.c,t.c),this.a=t.a,this.alpha0=t.alpha0,V(this.c0,t.c0),this.a0=t.a0},i})(),Bn=(function(){function i(t,e){if(!(this instanceof i))return new i(t,e);this.p=g.zero(),this.q=J.identity(),typeof t<"u"&&this.p.setVec2(t),typeof e<"u"&&this.q.setAngle(e)}return i.clone=function(t){var e=Object.create(i.prototype);return e.p=g.clone(t.p),e.q=J.clone(t.q),e},i.neo=function(t,e){var n=Object.create(i.prototype);return n.p=g.clone(t),n.q=J.clone(e),n},i.identity=function(){var t=Object.create(i.prototype);return t.p=g.zero(),t.q=J.identity(),t},i.prototype.setIdentity=function(){this.p.setZero(),this.q.setIdentity()},i.prototype.set=function(t,e){typeof e>"u"?(this.p.set(t.p),this.q.set(t.q)):(this.p.set(t),this.q.set(e))},i.prototype.setNum=function(t,e){this.p.setVec2(t),this.q.setAngle(e)},i.prototype.setTransform=function(t){this.p.setVec2(t.p),this.q.setRot(t.q)},i.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.p)&&J.isValid(t.q)},i.assert=function(t){},i.mul=function(t,e){if(Array.isArray(e)){for(var n=[],s=0;s<e.length;s++)n[s]=i.mul(t,e[s]);return n}else{if("x"in e&&"y"in e)return i.mulVec2(t,e);if("p"in e&&"q"in e)return i.mulXf(t,e)}},i.mulAll=function(t,e){for(var n=[],s=0;s<e.length;s++)n[s]=i.mul(t,e[s]);return n},i.mulFn=function(t){return function(e){return i.mul(t,e)}},i.mulVec2=function(t,e){var n=t.q.c*e.x-t.q.s*e.y+t.p.x,s=t.q.s*e.x+t.q.c*e.y+t.p.y;return g.neo(n,s)},i.mulXf=function(t,e){var n=i.identity();return n.q=J.mulRot(t.q,e.q),n.p=g.add(J.mulVec2(t.q,e.p),t.p),n},i.mulT=function(t,e){if("x"in e&&"y"in e)return i.mulTVec2(t,e);if("p"in e&&"q"in e)return i.mulTXf(t,e)},i.mulTVec2=function(t,e){var n=e.x-t.p.x,s=e.y-t.p.y,r=t.q.c*n+t.q.s*s,o=-t.q.s*n+t.q.c*s;return g.neo(r,o)},i.mulTXf=function(t,e){var n=i.identity();return n.q.setRot(J.mulTRot(t.q,e.q)),n.p.setVec2(J.mulTVec2(t.q,g.sub(e.p,t.p))),n},i})(),US=(function(){function i(){this.v=g.zero(),this.w=0}return i})(),op=Math.sin,ap=Math.cos,NS=(function(){function i(){this.c=g.zero(),this.a=0}return i.prototype.getTransform=function(t,e){return t.q.c=ap(this.a),t.q.s=op(this.a),t.p.x=this.c.x-(t.q.c*e.x-t.q.s*e.y),t.p.y=this.c.y-(t.q.s*e.x+t.q.c*e.y),t},i})();function Za(i,t,e,n){return i.q.c=ap(n),i.q.s=op(n),i.p.x=e.x-(i.q.c*t.x-i.q.s*t.y),i.p.y=e.y-(i.q.s*t.x+i.q.c*t.y),i}var Cr=(function(){function i(){this.style={},this.appData={}}return i.isValid=function(t){return t===null||typeof t>"u"?!1:typeof t.m_type=="string"&&typeof t.m_radius=="number"},i})(),tf=new di,ef=new di,nf=X(0,0),FS={userData:null,friction:.2,restitution:0,density:0,isSensor:!1,filterGroupIndex:0,filterCategoryBits:1,filterMaskBits:65535},sf=(function(){function i(t,e){this.aabb=new di,this.fixture=t,this.childIndex=e}return i})(),Vl=(function(){function i(t,e,n){this.style={},this.appData={},e.shape?(n=e,e=e.shape):typeof n=="number"&&(n={density:n}),n=Ji(n,FS),this.m_body=t,this.m_friction=n.friction,this.m_restitution=n.restitution,this.m_density=n.density,this.m_isSensor=n.isSensor,this.m_filterGroupIndex=n.filterGroupIndex,this.m_filterCategoryBits=n.filterCategoryBits,this.m_filterMaskBits=n.filterMaskBits,this.m_shape=e,this.m_next=null,this.m_proxies=[],this.m_proxyCount=0;for(var s=this.m_shape.getChildCount(),r=0;r<s;++r)this.m_proxies[r]=new sf(this,r);this.m_userData=n.userData,typeof n.style=="object"&&n.style!==null&&(this.style=n.style)}return i.prototype._reset=function(){var t=this.getBody(),e=t.m_world.m_broadPhase;this.destroyProxies(e),this.m_shape._reset&&this.m_shape._reset();for(var n=this.m_shape.getChildCount(),s=0;s<n;++s)this.m_proxies[s]=new sf(this,s);this.createProxies(e,t.m_xf),t.resetMassData()},i.prototype._serialize=function(){return{friction:this.m_friction,restitution:this.m_restitution,density:this.m_density,isSensor:this.m_isSensor,filterGroupIndex:this.m_filterGroupIndex,filterCategoryBits:this.m_filterCategoryBits,filterMaskBits:this.m_filterMaskBits,shape:this.m_shape}},i._deserialize=function(t,e,n){var s=n(Cr,t.shape),r=s&&new i(e,s,t);return r},i.prototype.getType=function(){return this.m_shape.m_type},i.prototype.getShape=function(){return this.m_shape},i.prototype.isSensor=function(){return this.m_isSensor},i.prototype.setSensor=function(t){t!=this.m_isSensor&&(this.m_body.setAwake(!0),this.m_isSensor=t)},i.prototype.getUserData=function(){return this.m_userData},i.prototype.setUserData=function(t){this.m_userData=t},i.prototype.getBody=function(){return this.m_body},i.prototype.getNext=function(){return this.m_next},i.prototype.getDensity=function(){return this.m_density},i.prototype.setDensity=function(t){this.m_density=t},i.prototype.getFriction=function(){return this.m_friction},i.prototype.setFriction=function(t){this.m_friction=t},i.prototype.getRestitution=function(){return this.m_restitution},i.prototype.setRestitution=function(t){this.m_restitution=t},i.prototype.testPoint=function(t){return this.m_shape.testPoint(this.m_body.getTransform(),t)},i.prototype.rayCast=function(t,e,n){return this.m_shape.rayCast(t,e,this.m_body.getTransform(),n)},i.prototype.getMassData=function(t){this.m_shape.computeMass(t,this.m_density)},i.prototype.getAABB=function(t){return this.m_proxies[t].aabb},i.prototype.createProxies=function(t,e){this.m_proxyCount=this.m_shape.getChildCount();for(var n=0;n<this.m_proxyCount;++n){var s=this.m_proxies[n];this.m_shape.computeAABB(s.aabb,e,n),s.proxyId=t.createProxy(s.aabb,s)}},i.prototype.destroyProxies=function(t){for(var e=0;e<this.m_proxyCount;++e){var n=this.m_proxies[e];t.destroyProxy(n.proxyId),n.proxyId=null}this.m_proxyCount=0},i.prototype.synchronize=function(t,e,n){for(var s=0;s<this.m_proxyCount;++s){var r=this.m_proxies[s];this.m_shape.computeAABB(tf,e,r.childIndex),this.m_shape.computeAABB(ef,n,r.childIndex),r.aabb.combine(tf,ef),Vt(nf,n.p,e.p),t.moveProxy(r.proxyId,r.aabb,nf)}},i.prototype.setFilterData=function(t){this.m_filterGroupIndex=t.groupIndex,this.m_filterCategoryBits=t.categoryBits,this.m_filterMaskBits=t.maskBits,this.refilter()},i.prototype.getFilterGroupIndex=function(){return this.m_filterGroupIndex},i.prototype.setFilterGroupIndex=function(t){this.m_filterGroupIndex=t,this.refilter()},i.prototype.getFilterCategoryBits=function(){return this.m_filterCategoryBits},i.prototype.setFilterCategoryBits=function(t){this.m_filterCategoryBits=t,this.refilter()},i.prototype.getFilterMaskBits=function(){return this.m_filterMaskBits},i.prototype.setFilterMaskBits=function(t){this.m_filterMaskBits=t,this.refilter()},i.prototype.refilter=function(){if(this.m_body!=null){for(var t=this.m_body.getContactList();t;){var e=t.contact,n=e.getFixtureA(),s=e.getFixtureB();(n==this||s==this)&&e.flagForFiltering(),t=t.next}var r=this.m_body.getWorld();if(r!=null)for(var o=r.m_broadPhase,a=0;a<this.m_proxyCount;++a)o.touchProxy(this.m_proxies[a].proxyId)}},i.prototype.shouldCollide=function(t){if(t.m_filterGroupIndex===this.m_filterGroupIndex&&t.m_filterGroupIndex!==0)return t.m_filterGroupIndex>0;var e=(t.m_filterMaskBits&this.m_filterCategoryBits)!==0,n=(t.m_filterCategoryBits&this.m_filterMaskBits)!==0,s=e&&n;return s},i})(),ho="static",rf="kinematic",yn="dynamic",Ka=X(0,0),Ys=X(0,0),ja=X(0,0),Qa=X(0,0),of=Er(0,0,0),OS={type:ho,position:g.zero(),angle:0,linearVelocity:g.zero(),angularVelocity:0,linearDamping:0,angularDamping:0,fixedRotation:!1,bullet:!1,gravityScale:1,allowSleep:!0,awake:!0,active:!0,userData:null},ve=(function(){function i(t,e){this.style={},this.appData={},e=Ji(e,OS),this.m_world=t,this.m_awakeFlag=e.awake,this.m_autoSleepFlag=e.allowSleep,this.m_bulletFlag=e.bullet,this.m_fixedRotationFlag=e.fixedRotation,this.m_activeFlag=e.active,this.m_islandFlag=!1,this.m_toiFlag=!1,this.m_userData=e.userData,this.m_type=e.type,this.m_type==yn?(this.m_mass=1,this.m_invMass=1):(this.m_mass=0,this.m_invMass=0),this.m_I=0,this.m_invI=0,this.m_xf=Bn.identity(),this.m_xf.p.setVec2(e.position),this.m_xf.q.setAngle(e.angle),this.m_sweep=new So,this.m_sweep.setTransform(this.m_xf),this.c_velocity=new US,this.c_position=new NS,this.m_force=g.zero(),this.m_torque=0,this.m_linearVelocity=g.clone(e.linearVelocity),this.m_angularVelocity=e.angularVelocity,this.m_linearDamping=e.linearDamping,this.m_angularDamping=e.angularDamping,this.m_gravityScale=e.gravityScale,this.m_sleepTime=0,this.m_jointList=null,this.m_contactList=null,this.m_fixtureList=null,this.m_prev=null,this.m_next=null,this.m_destroyed=!1,typeof e.style=="object"&&e.style!==null&&(this.style=e.style)}return i.prototype._serialize=function(){for(var t=[],e=this.m_fixtureList;e;e=e.m_next)t.push(e);return{type:this.m_type,bullet:this.m_bulletFlag,fixedRotation:this.m_fixedRotationFlag,position:this.m_xf.p,angle:this.m_xf.q.getAngle(),linearVelocity:this.m_linearVelocity,angularVelocity:this.m_angularVelocity,fixtures:t}},i._deserialize=function(t,e,n){var s=new i(e,t);if(t.fixtures)for(var r=t.fixtures.length-1;r>=0;r--){var o=n(Vl,t.fixtures[r],s);s._addFixture(o)}return s},i.prototype.isWorldLocked=function(){return!!(this.m_world&&this.m_world.isLocked())},i.prototype.getWorld=function(){return this.m_world},i.prototype.getNext=function(){return this.m_next},i.prototype.setUserData=function(t){this.m_userData=t},i.prototype.getUserData=function(){return this.m_userData},i.prototype.getFixtureList=function(){return this.m_fixtureList},i.prototype.getJointList=function(){return this.m_jointList},i.prototype.getContactList=function(){return this.m_contactList},i.prototype.isStatic=function(){return this.m_type==ho},i.prototype.isDynamic=function(){return this.m_type==yn},i.prototype.isKinematic=function(){return this.m_type==rf},i.prototype.setStatic=function(){return this.setType(ho),this},i.prototype.setDynamic=function(){return this.setType(yn),this},i.prototype.setKinematic=function(){return this.setType(rf),this},i.prototype.getType=function(){return this.m_type},i.prototype.setType=function(t){if(this.isWorldLocked()!=!0&&this.m_type!=t){this.m_type=t,this.resetMassData(),this.m_type==ho&&(this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_sweep.forward(),this.synchronizeFixtures()),this.setAwake(!0),this.m_force.setZero(),this.m_torque=0;for(var e=this.m_contactList;e;){var n=e;e=e.next,this.m_world.destroyContact(n.contact)}this.m_contactList=null;for(var s=this.m_world.m_broadPhase,r=this.m_fixtureList;r;r=r.m_next)for(var o=0;o<r.m_proxyCount;++o)s.touchProxy(r.m_proxies[o].proxyId)}},i.prototype.isBullet=function(){return this.m_bulletFlag},i.prototype.setBullet=function(t){this.m_bulletFlag=!!t},i.prototype.isSleepingAllowed=function(){return this.m_autoSleepFlag},i.prototype.setSleepingAllowed=function(t){this.m_autoSleepFlag=!!t,this.m_autoSleepFlag==!1&&this.setAwake(!0)},i.prototype.isAwake=function(){return this.m_awakeFlag},i.prototype.setAwake=function(t){t?(this.m_awakeFlag=!0,this.m_sleepTime=0):(this.m_awakeFlag=!1,this.m_sleepTime=0,this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_force.setZero(),this.m_torque=0)},i.prototype.isActive=function(){return this.m_activeFlag},i.prototype.setActive=function(t){if(t!=this.m_activeFlag)if(this.m_activeFlag=!!t,this.m_activeFlag){for(var e=this.m_world.m_broadPhase,n=this.m_fixtureList;n;n=n.m_next)n.createProxies(e,this.m_xf);this.m_world.m_newFixture=!0}else{for(var e=this.m_world.m_broadPhase,n=this.m_fixtureList;n;n=n.m_next)n.destroyProxies(e);for(var s=this.m_contactList;s;){var r=s;s=s.next,this.m_world.destroyContact(r.contact)}this.m_contactList=null}},i.prototype.isFixedRotation=function(){return this.m_fixedRotationFlag},i.prototype.setFixedRotation=function(t){this.m_fixedRotationFlag!=t&&(this.m_fixedRotationFlag=!!t,this.m_angularVelocity=0,this.resetMassData())},i.prototype.getTransform=function(){return this.m_xf},i.prototype.setTransform=function(t,e){if(this.isWorldLocked()!=!0){typeof e=="number"?this.m_xf.setNum(t,e):this.m_xf.setTransform(t),this.m_sweep.setTransform(this.m_xf);for(var n=this.m_world.m_broadPhase,s=this.m_fixtureList;s;s=s.m_next)s.synchronize(n,this.m_xf,this.m_xf);this.setAwake(!0)}},i.prototype.synchronizeTransform=function(){this.m_sweep.getTransform(this.m_xf,1)},i.prototype.synchronizeFixtures=function(){this.m_sweep.getTransform(of,0);for(var t=this.m_world.m_broadPhase,e=this.m_fixtureList;e;e=e.m_next)e.synchronize(t,of,this.m_xf)},i.prototype.advance=function(t){this.m_sweep.advance(t),V(this.m_sweep.c,this.m_sweep.c0),this.m_sweep.a=this.m_sweep.a0,this.m_sweep.getTransform(this.m_xf,1)},i.prototype.getPosition=function(){return this.m_xf.p},i.prototype.setPosition=function(t){this.setTransform(t,this.m_sweep.a)},i.prototype.getAngle=function(){return this.m_sweep.a},i.prototype.setAngle=function(t){this.setTransform(this.m_xf.p,t)},i.prototype.getWorldCenter=function(){return this.m_sweep.c},i.prototype.getLocalCenter=function(){return this.m_sweep.localCenter},i.prototype.getLinearVelocity=function(){return this.m_linearVelocity},i.prototype.getLinearVelocityFromWorldPoint=function(t){var e=g.sub(t,this.m_sweep.c);return g.add(this.m_linearVelocity,g.crossNumVec2(this.m_angularVelocity,e))},i.prototype.getLinearVelocityFromLocalPoint=function(t){return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(t))},i.prototype.setLinearVelocity=function(t){this.m_type!=ho&&(g.dot(t,t)>0&&this.setAwake(!0),this.m_linearVelocity.setVec2(t))},i.prototype.getAngularVelocity=function(){return this.m_angularVelocity},i.prototype.setAngularVelocity=function(t){this.m_type!=ho&&(t*t>0&&this.setAwake(!0),this.m_angularVelocity=t)},i.prototype.getLinearDamping=function(){return this.m_linearDamping},i.prototype.setLinearDamping=function(t){this.m_linearDamping=t},i.prototype.getAngularDamping=function(){return this.m_angularDamping},i.prototype.setAngularDamping=function(t){this.m_angularDamping=t},i.prototype.getGravityScale=function(){return this.m_gravityScale},i.prototype.setGravityScale=function(t){this.m_gravityScale=t},i.prototype.getMass=function(){return this.m_mass},i.prototype.getInertia=function(){return this.m_I+this.m_mass*g.dot(this.m_sweep.localCenter,this.m_sweep.localCenter)},i.prototype.getMassData=function(t){t.mass=this.m_mass,t.I=this.getInertia(),V(t.center,this.m_sweep.localCenter)},i.prototype.resetMassData=function(){if(this.m_mass=0,this.m_invMass=0,this.m_I=0,this.m_invI=0,Ct(this.m_sweep.localCenter),this.isStatic()||this.isKinematic()){V(this.m_sweep.c0,this.m_xf.p),V(this.m_sweep.c,this.m_xf.p),this.m_sweep.a0=this.m_sweep.a;return}Ct(Ys);for(var t=this.m_fixtureList;t;t=t.m_next)if(t.m_density!=0){var e={mass:0,center:X(0,0),I:0};t.getMassData(e),this.m_mass+=e.mass,Cn(Ys,e.mass,e.center),this.m_I+=e.I}this.m_mass>0?(this.m_invMass=1/this.m_mass,Lt(Ys,this.m_invMass,Ys)):(this.m_mass=1,this.m_invMass=1),this.m_I>0&&this.m_fixedRotationFlag==!1?(this.m_I-=this.m_mass*st(Ys,Ys),this.m_invI=1/this.m_I):(this.m_I=0,this.m_invI=0),V(Ka,this.m_sweep.c),this.m_sweep.setLocalCenter(Ys,this.m_xf),Vt(ja,this.m_sweep.c,Ka),Xi(Qa,this.m_angularVelocity,ja),ln(this.m_linearVelocity,Qa)},i.prototype.setMassData=function(t){this.isWorldLocked()!=!0&&this.m_type==yn&&(this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_mass=t.mass,this.m_mass<=0&&(this.m_mass=1),this.m_invMass=1/this.m_mass,t.I>0&&this.m_fixedRotationFlag==!1&&(this.m_I=t.I-this.m_mass*st(t.center,t.center),this.m_invI=1/this.m_I),V(Ka,this.m_sweep.c),this.m_sweep.setLocalCenter(t.center,this.m_xf),Vt(ja,this.m_sweep.c,Ka),Xi(Qa,this.m_angularVelocity,ja),ln(this.m_linearVelocity,Qa))},i.prototype.applyForce=function(t,e,n){n===void 0&&(n=!0),this.m_type==yn&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_force.add(t),this.m_torque+=g.crossVec2Vec2(g.sub(e,this.m_sweep.c),t)))},i.prototype.applyForceToCenter=function(t,e){e===void 0&&(e=!0),this.m_type==yn&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&this.m_force.add(t))},i.prototype.applyTorque=function(t,e){e===void 0&&(e=!0),this.m_type==yn&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_torque+=t))},i.prototype.applyLinearImpulse=function(t,e,n){n===void 0&&(n=!0),this.m_type==yn&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_linearVelocity.addMul(this.m_invMass,t),this.m_angularVelocity+=this.m_invI*g.crossVec2Vec2(g.sub(e,this.m_sweep.c),t)))},i.prototype.applyAngularImpulse=function(t,e){e===void 0&&(e=!0),this.m_type==yn&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_angularVelocity+=this.m_invI*t))},i.prototype.shouldCollide=function(t){if(this.m_type!=yn&&t.m_type!=yn)return!1;for(var e=this.m_jointList;e;e=e.next)if(e.other==t&&e.joint.m_collideConnected==!1)return!1;return!0},i.prototype._addFixture=function(t){if(this.isWorldLocked()==!0)return null;if(this.m_activeFlag){var e=this.m_world.m_broadPhase;t.createProxies(e,this.m_xf)}return t.m_next=this.m_fixtureList,this.m_fixtureList=t,t.m_density>0&&this.resetMassData(),this.m_world.m_newFixture=!0,t},i.prototype.createFixture=function(t,e){if(this.isWorldLocked()==!0)return null;var n=new Vl(this,t,e);return this._addFixture(n),this.m_world.publish("add-fixture",n),n},i.prototype.destroyFixture=function(t){if(this.isWorldLocked()!=!0){if(this.m_fixtureList===t)this.m_fixtureList=t.m_next;else for(var e=this.m_fixtureList;e!=null;){if(e.m_next===t){e.m_next=t.m_next;break}e=e.m_next}for(var n=this.m_contactList;n;){var s=n.contact;n=n.next;var r=s.getFixtureA(),o=s.getFixtureB();(t==r||t==o)&&this.m_world.destroyContact(s)}if(this.m_activeFlag){var a=this.m_world.m_broadPhase;t.destroyProxies(a)}t.m_body=null,t.m_next=null,this.m_world.publish("remove-fixture",t),this.resetMassData()}},i.prototype.getWorldPoint=function(t){return Bn.mulVec2(this.m_xf,t)},i.prototype.getWorldVector=function(t){return J.mulVec2(this.m_xf.q,t)},i.prototype.getLocalPoint=function(t){return Bn.mulTVec2(this.m_xf,t)},i.prototype.getLocalVector=function(t){return J.mulTVec2(this.m_xf.q,t)},i.STATIC="static",i.KINEMATIC="kinematic",i.DYNAMIC="dynamic",i})(),af=(function(){function i(){this.other=null,this.joint=null,this.prev=null,this.next=null}return i})(),Ai=(function(){function i(t,e,n){this.m_type="unknown-joint",this.m_prev=null,this.m_next=null,this.m_edgeA=new af,this.m_edgeB=new af,this.m_islandFlag=!1,this.style={},this.appData={},e="bodyA"in t?t.bodyA:e,n="bodyB"in t?t.bodyB:n,this.m_bodyA=e,this.m_bodyB=n,this.m_collideConnected=!!t.collideConnected,this.m_userData=t.userData,typeof t.style=="object"&&t.style!==null&&(this.style=t.style)}return i.prototype.isActive=function(){return this.m_bodyA.isActive()&&this.m_bodyB.isActive()},i.prototype.getType=function(){return this.m_type},i.prototype.getBodyA=function(){return this.m_bodyA},i.prototype.getBodyB=function(){return this.m_bodyB},i.prototype.getNext=function(){return this.m_next},i.prototype.getUserData=function(){return this.m_userData},i.prototype.setUserData=function(t){this.m_userData=t},i.prototype.getCollideConnected=function(){return this.m_collideConnected},i.prototype.shiftOrigin=function(t){},i.prototype._resetAnchors=function(t){return this._reset(t)},i})(),Le={gjkCalls:0,gjkIters:0,gjkMaxIters:0,toiTime:0,toiMaxTime:0,toiCalls:0,toiIters:0,toiMaxIters:0,toiRootIters:0,toiMaxRootIters:0},zS=function(){return Date.now()},VS=function(i){return Date.now()-i};const lf={now:zS,diff:VS};var HS=Math.max,tl=X(0,0),el=X(0,0),Wi=X(0,0),il=X(0,0),Pc=X(0,0),kS=X(0,0),GS=X(0,0);Le.gjkCalls=0;Le.gjkIters=0;Le.gjkMaxIters=0;var du=(function(){function i(){this.proxyA=new Ar,this.proxyB=new Ar,this.transformA=Bn.identity(),this.transformB=Bn.identity(),this.useRadii=!1}return i.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.transformA.setIdentity(),this.transformB.setIdentity(),this.useRadii=!1},i})(),fu=(function(){function i(){this.pointA=X(0,0),this.pointB=X(0,0),this.distance=0,this.iterations=0}return i.prototype.recycle=function(){Ct(this.pointA),Ct(this.pointB),this.distance=0,this.iterations=0},i})(),mu=(function(){function i(){this.metric=0,this.indexA=[],this.indexB=[],this.count=0}return i.prototype.recycle=function(){this.metric=0,this.indexA.length=0,this.indexB.length=0,this.count=0},i})(),Rr=function(i,t,e){++Le.gjkCalls;var n=e.proxyA,s=e.proxyB,r=e.transformA,o=e.transformB;xn.recycle(),xn.readCache(t,n,r,s,o);for(var a=xn.m_v,l=ut.maxDistanceIterations,c=[],h=[],u=0,f=0;f<l;){u=xn.m_count;for(var d=0;d<u;++d)c[d]=a[d].indexA,h[d]=a[d].indexB;if(xn.solve(),xn.m_count===3)break;var _=xn.getSearchDirection();if(pr(_)<Bi*Bi)break;var v=a[xn.m_count];v.indexA=n.getSupport(mo(tl,r.q,Lt(tl,-1,_))),zt(v.wA,r,n.getVertex(v.indexA)),v.indexB=s.getSupport(mo(tl,o.q,_)),zt(v.wB,o,s.getVertex(v.indexB)),Vt(v.w,v.wB,v.wA),++f,++Le.gjkIters;for(var p=!1,d=0;d<u;++d)if(v.indexA===c[d]&&v.indexB===h[d]){p=!0;break}if(p)break;++xn.m_count}if(Le.gjkMaxIters=HS(Le.gjkMaxIters,f),xn.getWitnessPoints(i.pointA,i.pointB),i.distance=np(i.pointA,i.pointB),i.iterations=f,xn.writeCache(t),e.useRadii){var m=n.m_radius,x=s.m_radius;if(i.distance>m+x&&i.distance>Bi)i.distance-=m+x,Vt(el,i.pointB,i.pointA),Pn(el),Cn(i.pointA,m,el),Jo(i.pointB,x,el);else{var y=Vt(tl,i.pointA,i.pointB);V(i.pointA,y),V(i.pointB,y),i.distance=0}}},Ar=(function(){function i(){this.m_vertices=[],this.m_count=0,this.m_radius=0}return i.prototype.recycle=function(){this.m_vertices.length=0,this.m_count=0,this.m_radius=0},i.prototype.getVertexCount=function(){return this.m_count},i.prototype.getVertex=function(t){return this.m_vertices[t]},i.prototype.getSupport=function(t){for(var e=-1,n=-1/0,s=0;s<this.m_count;++s){var r=st(this.m_vertices[s],t);r>n&&(e=s,n=r)}return e},i.prototype.getSupportVertex=function(t){return this.m_vertices[this.getSupport(t)]},i.prototype.set=function(t,e){t.computeDistanceProxy(this,e)},i.prototype.setVertices=function(t,e,n){this.m_vertices=t,this.m_count=e,this.m_radius=n},i})(),Bc=(function(){function i(){this.wA=X(0,0),this.indexA=0,this.wB=X(0,0),this.indexB=0,this.w=X(0,0),this.a=0}return i.prototype.recycle=function(){this.indexA=0,this.indexB=0,Ct(this.wA),Ct(this.wB),Ct(this.w),this.a=0},i.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,V(this.wA,t.wA),V(this.wB,t.wB),V(this.w,t.w),this.a=t.a},i})(),nl=X(0,0),Uo=X(0,0),WS=(function(){function i(){this.m_v1=new Bc,this.m_v2=new Bc,this.m_v3=new Bc,this.m_v=[this.m_v1,this.m_v2,this.m_v3]}return i.prototype.recycle=function(){this.m_v1.recycle(),this.m_v2.recycle(),this.m_v3.recycle(),this.m_count=0},i.prototype.toString=function(){return this.m_count===3?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y,this.m_v3.a,this.m_v3.wA.x,this.m_v3.wA.y,this.m_v3.wB.x,this.m_v3.wB.y].toString():this.m_count===2?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y].toString():this.m_count===1?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y].toString():"+"+this.m_count},i.prototype.readCache=function(t,e,n,s,r){this.m_count=t.count;for(var o=0;o<this.m_count;++o){var a=this.m_v[o];a.indexA=t.indexA[o],a.indexB=t.indexB[o];var l=e.getVertex(a.indexA),c=s.getVertex(a.indexB);zt(a.wA,n,l),zt(a.wB,r,c),Vt(a.w,a.wB,a.wA),a.a=0}if(this.m_count>1){var h=t.metric,u=this.getMetric();(u<.5*h||2*h<u||u<Bi)&&(this.m_count=0)}if(this.m_count===0){var a=this.m_v[0];a.indexA=0,a.indexB=0;var l=e.getVertex(0),c=s.getVertex(0);zt(a.wA,n,l),zt(a.wB,r,c),Vt(a.w,a.wB,a.wA),a.a=1,this.m_count=1}},i.prototype.writeCache=function(t){t.metric=this.getMetric(),t.count=this.m_count;for(var e=0;e<this.m_count;++e)t.indexA[e]=this.m_v[e].indexA,t.indexB[e]=this.m_v[e].indexB},i.prototype.getSearchDirection=function(){var t=this.m_v1,e=this.m_v2;switch(this.m_count){case 1:return oi(nl,-t.w.x,-t.w.y);case 2:{Vt(Wi,e.w,t.w);var n=-Jt(Wi,t.w);return n>0?oi(nl,-Wi.y,Wi.x):oi(nl,Wi.y,-Wi.x)}default:return Ct(nl)}},i.prototype.getClosestPoint=function(){var t=this.m_v1,e=this.m_v2;switch(this.m_count){case 0:return Ct(Uo);case 1:return V(Uo,t.w);case 2:return Be(Uo,t.a,t.w,e.a,e.w);case 3:return Ct(Uo);default:return Ct(Uo)}},i.prototype.getWitnessPoints=function(t,e){var n=this.m_v1,s=this.m_v2,r=this.m_v3;switch(this.m_count){case 0:break;case 1:V(t,n.wA),V(e,n.wB);break;case 2:Be(t,n.a,n.wA,s.a,s.wA),Be(e,n.a,n.wB,s.a,s.wB);break;case 3:zn(t,n.a,n.wA,s.a,s.wA,r.a,r.wA),V(e,t);break}},i.prototype.getMetric=function(){switch(this.m_count){case 0:return 0;case 1:return 0;case 2:return np(this.m_v1.w,this.m_v2.w);case 3:return Jt(Vt(kS,this.m_v2.w,this.m_v1.w),Vt(GS,this.m_v3.w,this.m_v1.w));default:return 0}},i.prototype.solve=function(){switch(this.m_count){case 1:break;case 2:this.solve2();break;case 3:this.solve3();break}},i.prototype.solve2=function(){var t=this.m_v1.w,e=this.m_v2.w;Vt(Wi,e,t);var n=-st(t,Wi);if(n<=0){this.m_v1.a=1,this.m_count=1;return}var s=st(e,Wi);if(s<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}var r=1/(s+n);this.m_v1.a=s*r,this.m_v2.a=n*r,this.m_count=2},i.prototype.solve3=function(){var t=this.m_v1.w,e=this.m_v2.w,n=this.m_v3.w;Vt(Wi,e,t);var s=st(t,Wi),r=st(e,Wi),o=r,a=-s;Vt(il,n,t);var l=st(t,il),c=st(n,il),h=c,u=-l;Vt(Pc,n,e);var f=st(e,Pc),d=st(n,Pc),_=d,v=-f,p=Jt(Wi,il),m=p*Jt(e,n),x=p*Jt(n,t),y=p*Jt(t,e);if(a<=0&&u<=0){this.m_v1.a=1,this.m_count=1;return}if(o>0&&a>0&&y<=0){var A=1/(o+a);this.m_v1.a=o*A,this.m_v2.a=a*A,this.m_count=2;return}if(h>0&&u>0&&x<=0){var C=1/(h+u);this.m_v1.a=h*C,this.m_v3.a=u*C,this.m_count=2,this.m_v2.set(this.m_v3);return}if(o<=0&&v<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}if(h<=0&&_<=0){this.m_v3.a=1,this.m_count=1,this.m_v1.set(this.m_v3);return}if(_>0&&v>0&&m<=0){var T=1/(_+v);this.m_v2.a=_*T,this.m_v3.a=v*T,this.m_count=2,this.m_v1.set(this.m_v3);return}var E=1/(m+x+y);this.m_v1.a=m*E,this.m_v2.a=x*E,this.m_v3.a=y*E,this.m_count=3},i})(),xn=new WS,$s=new du,cf=new mu,Ic=new fu,lp=function(i,t,e,n,s,r){return $s.recycle(),$s.proxyA.set(i,t),$s.proxyB.set(e,n),zl($s.transformA,s),zl($s.transformB,r),$s.useRadii=!0,Ic.recycle(),cf.recycle(),Rr(Ic,cf,$s),Ic.distance<10*Bi};Rr.testOverlap=lp;Rr.Input=du;Rr.Output=fu;Rr.Proxy=Ar;Rr.Cache=mu;(function(){function i(){this.proxyA=new Ar,this.proxyB=new Ar,this.transformA=Bn.identity(),this.transformB=Bn.identity(),this.translationB=g.zero()}return i.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.transformA.setIdentity(),this.transformB.setIdentity(),Ct(this.translationB)},i})();var qS=Math.abs,sl=Math.max,cp=(function(){function i(){this.proxyA=new Ar,this.proxyB=new Ar,this.sweepA=new So,this.sweepB=new So}return i.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.sweepA.recycle(),this.sweepB.recycle(),this.tMax=-1},i})(),cn;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_unknown=0]="e_unknown",i[i.e_failed=1]="e_failed",i[i.e_overlapped=2]="e_overlapped",i[i.e_touching=3]="e_touching",i[i.e_separated=4]="e_separated"})(cn||(cn={}));var hp=(function(){function i(){this.state=cn.e_unset,this.t=-1}return i.prototype.recycle=function(){this.state=cn.e_unset,this.t=-1},i})();Le.toiTime=0;Le.toiMaxTime=0;Le.toiCalls=0;Le.toiIters=0;Le.toiMaxIters=0;Le.toiRootIters=0;Le.toiMaxRootIters=0;var Xr=new du,Lc=new fu,Dc=new mu,Ui=Er(0,0,0),Ni=Er(0,0,0),No=X(0,0),Ln=X(0,0),sn=X(0,0),Li=X(0,0),rl=X(0,0),ol=X(0,0),al=X(0,0),ll=X(0,0),pu=function(i,t){var e=lf.now();++Le.toiCalls,i.state=cn.e_unknown,i.t=t.tMax;var n=t.proxyA,s=t.proxyB,r=t.sweepA,o=t.sweepB;r.normalize(),o.normalize();var a=t.tMax,l=n.m_radius+s.m_radius,c=sl(ut.linearSlop,l-3*ut.linearSlop),h=.25*ut.linearSlop,u=0,f=ut.maxTOIIterations,d=0;for(Dc.recycle(),Xr.proxyA.setVertices(n.m_vertices,n.m_count,n.m_radius),Xr.proxyB.setVertices(s.m_vertices,s.m_count,s.m_radius),Xr.useRadii=!1;;){if(r.getTransform(Ui,u),o.getTransform(Ni,u),zl(Xr.transformA,Ui),zl(Xr.transformB,Ni),Rr(Lc,Dc,Xr),Lc.distance<=0){i.state=cn.e_overlapped,i.t=0;break}if(Lc.distance<c+h){i.state=cn.e_touching,i.t=u;break}Fo.initialize(Dc,n,r,s,o,u);for(var _=!1,v=a,p=0;;){var m=Fo.findMinSeparation(v);if(m>c+h){i.state=cn.e_separated,i.t=a,_=!0;break}if(m>c-h){u=v;break}var x=Fo.evaluate(u);if(x<c-h){i.state=cn.e_failed,i.t=u,_=!0;break}if(x<=c+h){i.state=cn.e_touching,i.t=u,_=!0;break}for(var y=0,A=u,C=v;;){var T=void 0;y&1?T=A+(c-x)*(C-A)/(m-x):T=.5*(A+C),++y,++Le.toiRootIters;var E=Fo.evaluate(T);if(qS(E-c)<h){v=T;break}if(E>c?(A=T,x=E):(C=T,m=E),y===50)break}if(Le.toiMaxRootIters=sl(Le.toiMaxRootIters,y),++p,p===ut.maxPolygonVertices)break}if(++d,++Le.toiIters,_)break;if(d===f){i.state=cn.e_failed,i.t=u;break}}Le.toiMaxIters=sl(Le.toiMaxIters,d);var P=lf.diff(e);Le.toiMaxTime=sl(Le.toiMaxTime,P),Le.toiTime+=P,Fo.recycle()},Vn;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_points=1]="e_points",i[i.e_faceA=2]="e_faceA",i[i.e_faceB=3]="e_faceB"})(Vn||(Vn={}));var XS=(function(){function i(){this.m_proxyA=null,this.m_proxyB=null,this.m_sweepA=null,this.m_sweepB=null,this.m_type=Vn.e_unset,this.m_localPoint=X(0,0),this.m_axis=X(0,0),this.indexA=-1,this.indexB=-1}return i.prototype.recycle=function(){this.m_proxyA=null,this.m_proxyB=null,this.m_sweepA=null,this.m_sweepB=null,this.m_type=Vn.e_unset,Ct(this.m_localPoint),Ct(this.m_axis),this.indexA=-1,this.indexB=-1},i.prototype.initialize=function(t,e,n,s,r,o){var a=t.count;if(this.m_proxyA=e,this.m_proxyB=s,this.m_sweepA=n,this.m_sweepB=r,this.m_sweepA.getTransform(Ui,o),this.m_sweepB.getTransform(Ni,o),a===1){this.m_type=Vn.e_points;var l=this.m_proxyA.getVertex(t.indexA[0]),c=this.m_proxyB.getVertex(t.indexB[0]);zt(Ln,Ui,l),zt(sn,Ni,c),Vt(this.m_axis,sn,Ln);var h=PS(this.m_axis);return h}else if(t.indexA[0]===t.indexA[1]){this.m_type=Vn.e_faceB;var u=s.getVertex(t.indexB[0]),f=s.getVertex(t.indexB[1]);mr(this.m_axis,Vt(No,f,u),1),Pn(this.m_axis),dn(Li,Ni.q,this.m_axis),Be(this.m_localPoint,.5,u,.5,f),zt(sn,Ni,this.m_localPoint);var d=e.getVertex(t.indexA[0]),_=Bn.mulVec2(Ui,d),h=st(_,Li)-st(sn,Li);return h<0&&(ca(this.m_axis),h=-h),h}else{this.m_type=Vn.e_faceA;var v=this.m_proxyA.getVertex(t.indexA[0]),p=this.m_proxyA.getVertex(t.indexA[1]);mr(this.m_axis,Vt(No,p,v),1),Pn(this.m_axis),dn(Li,Ui.q,this.m_axis),Be(this.m_localPoint,.5,v,.5,p),zt(Ln,Ui,this.m_localPoint);var m=this.m_proxyB.getVertex(t.indexB[0]);zt(sn,Ni,m);var h=st(sn,Li)-st(Ln,Li);return h<0&&(ca(this.m_axis),h=-h),h}},i.prototype.compute=function(t,e){switch(this.m_sweepA.getTransform(Ui,e),this.m_sweepB.getTransform(Ni,e),this.m_type){case Vn.e_points:{t&&(mo(rl,Ui.q,this.m_axis),mo(ol,Ni.q,Lt(No,-1,this.m_axis)),this.indexA=this.m_proxyA.getSupport(rl),this.indexB=this.m_proxyB.getSupport(ol)),V(al,this.m_proxyA.getVertex(this.indexA)),V(ll,this.m_proxyB.getVertex(this.indexB)),zt(Ln,Ui,al),zt(sn,Ni,ll);var n=st(sn,this.m_axis)-st(Ln,this.m_axis);return n}case Vn.e_faceA:{dn(Li,Ui.q,this.m_axis),zt(Ln,Ui,this.m_localPoint),t&&(mo(ol,Ni.q,Lt(No,-1,Li)),this.indexA=-1,this.indexB=this.m_proxyB.getSupport(ol)),V(ll,this.m_proxyB.getVertex(this.indexB)),zt(sn,Ni,ll);var n=st(sn,Li)-st(Ln,Li);return n}case Vn.e_faceB:{dn(Li,Ni.q,this.m_axis),zt(sn,Ni,this.m_localPoint),t&&(mo(rl,Ui.q,Lt(No,-1,Li)),this.indexB=-1,this.indexA=this.m_proxyA.getSupport(rl)),V(al,this.m_proxyA.getVertex(this.indexA)),zt(Ln,Ui,al);var n=st(Ln,Li)-st(sn,Li);return n}default:return t&&(this.indexA=-1,this.indexB=-1),0}},i.prototype.findMinSeparation=function(t){return this.compute(!0,t)},i.prototype.evaluate=function(t){return this.compute(!1,t)},i})(),Fo=new XS;pu.Input=cp;pu.Output=hp;var hf=Math.abs,uf=Math.sqrt,cl=Math.min,_u=(function(){function i(){this.dt=0,this.inv_dt=0,this.velocityIterations=0,this.positionIterations=0,this.warmStarting=!1,this.blockSolve=!0,this.inv_dt0=0,this.dtRatio=1}return i.prototype.reset=function(t){this.dt>0&&(this.inv_dt0=this.inv_dt),this.dt=t,this.inv_dt=t==0?0:1/t,this.dtRatio=t*this.inv_dt0},i})(),Yr=new _u,jn=X(0,0),hi=X(0,0),hl=X(0,0),$r=new cp,Uc=new hp,df=new So,ff=new So,mf=new So,YS=(function(){function i(t){this.contact=t,this.normals=[],this.tangents=[]}return i.prototype.recycle=function(){this.normals.length=0,this.tangents.length=0},Object.defineProperty(i.prototype,"normalImpulses",{get:function(){var t=this.contact,e=this.normals;e.length=0;for(var n=0;n<t.v_points.length;++n)e.push(t.v_points[n].normalImpulse);return e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"tangentImpulses",{get:function(){var t=this.contact,e=this.tangents;e.length=0;for(var n=0;n<t.v_points.length;++n)e.push(t.v_points[n].tangentImpulse);return e},enumerable:!1,configurable:!0}),i})(),up=(function(){function i(t){this.m_world=t,this.m_stack=[],this.m_bodies=[],this.m_contacts=[],this.m_joints=[]}return i.prototype.clear=function(){this.m_stack.length=0,this.m_bodies.length=0,this.m_contacts.length=0,this.m_joints.length=0},i.prototype.addBody=function(t){this.m_bodies.push(t)},i.prototype.addContact=function(t){this.m_contacts.push(t)},i.prototype.addJoint=function(t){this.m_joints.push(t)},i.prototype.solveWorld=function(t){for(var e=this.m_world,n=e.m_bodyList;n;n=n.m_next)n.m_islandFlag=!1;for(var s=e.m_contactList;s;s=s.m_next)s.m_islandFlag=!1;for(var r=e.m_jointList;r;r=r.m_next)r.m_islandFlag=!1;for(var o=this.m_stack,a=e.m_bodyList;a;a=a.m_next)if(!a.m_islandFlag&&!(a.isAwake()==!1||a.isActive()==!1)&&!a.isStatic()){for(this.clear(),o.push(a),a.m_islandFlag=!0;o.length>0;){var n=o.pop();if(this.addBody(n),n.m_awakeFlag=!0,!n.isStatic()){for(var l=n.m_contactList;l;l=l.next){var c=l.contact;if(!c.m_islandFlag&&!(c.isEnabled()==!1||c.isTouching()==!1)){var h=c.m_fixtureA.m_isSensor,u=c.m_fixtureB.m_isSensor;if(!(h||u)){this.addContact(c),c.m_islandFlag=!0;var f=l.other;f.m_islandFlag||(o.push(f),f.m_islandFlag=!0)}}}for(var d=n.m_jointList;d;d=d.next)if(d.joint.m_islandFlag!=!0){var f=d.other;f.isActive()!=!1&&(this.addJoint(d.joint),d.joint.m_islandFlag=!0,!f.m_islandFlag&&(o.push(f),f.m_islandFlag=!0))}}}this.solveIsland(t);for(var _=0;_<this.m_bodies.length;++_){var n=this.m_bodies[_];n.isStatic()&&(n.m_islandFlag=!1)}}},i.prototype.solveIsland=function(t){for(var e=this.m_world,n=e.m_gravity,s=e.m_allowSleep,r=t.dt,o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];V(jn,a.m_sweep.c);var l=a.m_sweep.a;V(hi,a.m_linearVelocity);var c=a.m_angularVelocity;V(a.m_sweep.c0,a.m_sweep.c),a.m_sweep.a0=a.m_sweep.a,a.isDynamic()&&(Cn(hi,r*a.m_gravityScale,n),Cn(hi,r*a.m_invMass,a.m_force),c+=r*a.m_invI*a.m_torque,Lt(hi,1/(1+r*a.m_linearDamping),hi),c*=1/(1+r*a.m_angularDamping)),V(a.c_position.c,jn),a.c_position.a=l,V(a.c_velocity.v,hi),a.c_velocity.w=c}for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.initConstraint(t)}for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.initVelocityConstraint(t)}if(t.warmStarting)for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.warmStartConstraint(t)}for(var o=0;o<this.m_joints.length;++o){var u=this.m_joints[o];u.initVelocityConstraints(t)}for(var o=0;o<t.velocityIterations;++o){for(var f=0;f<this.m_joints.length;++f){var u=this.m_joints[f];u.solveVelocityConstraints(t)}for(var f=0;f<this.m_contacts.length;++f){var h=this.m_contacts[f];h.solveVelocityConstraint(t)}}for(var o=0;o<this.m_contacts.length;++o){var h=this.m_contacts[o];h.storeConstraintImpulses(t)}for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];V(jn,a.c_position.c);var l=a.c_position.a;V(hi,a.c_velocity.v);var c=a.c_velocity.w;Lt(hl,r,hi);var d=pr(hl);if(d>ut.maxTranslationSquared){var _=ut.maxTranslation/uf(d);Zd(hi,_)}var v=r*c;if(v*v>ut.maxRotationSquared){var _=ut.maxRotation/hf(v);c*=_}Cn(jn,r,hi),l+=r*c,V(a.c_position.c,jn),a.c_position.a=l,V(a.c_velocity.v,hi),a.c_velocity.w=c}for(var p=!1,o=0;o<t.positionIterations;++o){for(var m=0,f=0;f<this.m_contacts.length;++f){var h=this.m_contacts[f],x=h.solvePositionConstraint(t);m=cl(m,x)}for(var y=m>=-3*ut.linearSlop,A=!0,f=0;f<this.m_joints.length;++f){var u=this.m_joints[f],C=u.solvePositionConstraints(t);A=A&&C}if(y&&A){p=!0;break}}for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];V(a.m_sweep.c,a.c_position.c),a.m_sweep.a=a.c_position.a,V(a.m_linearVelocity,a.c_velocity.v),a.m_angularVelocity=a.c_velocity.w,a.synchronizeTransform()}if(this.postSolveIsland(),s){for(var T=1/0,E=ut.linearSleepToleranceSqr,P=ut.angularSleepToleranceSqr,o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];a.isStatic()||(a.m_autoSleepFlag==!1||a.m_angularVelocity*a.m_angularVelocity>P||pr(a.m_linearVelocity)>E?(a.m_sleepTime=0,T=0):(a.m_sleepTime+=r,T=cl(T,a.m_sleepTime)))}if(T>=ut.timeToSleep&&p)for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];a.setAwake(!1)}}},i.prototype.solveWorldTOI=function(t){var e=this.m_world;if(e.m_stepComplete){for(var n=e.m_bodyList;n;n=n.m_next)n.m_islandFlag=!1,n.m_sweep.alpha0=0;for(var s=e.m_contactList;s;s=s.m_next)s.m_toiFlag=!1,s.m_islandFlag=!1,s.m_toiCount=0,s.m_toi=1}for(;;){for(var r=null,o=1,a=e.m_contactList;a;a=a.m_next)if(a.isEnabled()!=!1&&!(a.m_toiCount>ut.maxSubSteps)){var l=1;if(a.m_toiFlag)l=a.m_toi;else{var c=a.getFixtureA(),h=a.getFixtureB();if(c.isSensor()||h.isSensor())continue;var u=c.getBody(),f=h.getBody(),d=u.isAwake()&&!u.isStatic(),_=f.isAwake()&&!f.isStatic();if(d==!1&&_==!1)continue;var v=u.isBullet()||!u.isDynamic(),p=f.isBullet()||!f.isDynamic();if(v==!1&&p==!1)continue;var m=u.m_sweep.alpha0;u.m_sweep.alpha0<f.m_sweep.alpha0?(m=f.m_sweep.alpha0,u.m_sweep.advance(m)):f.m_sweep.alpha0<u.m_sweep.alpha0&&(m=u.m_sweep.alpha0,f.m_sweep.advance(m));var x=a.getChildIndexA(),y=a.getChildIndexB();$r.proxyA.set(c.getShape(),x),$r.proxyB.set(h.getShape(),y),$r.sweepA.set(u.m_sweep),$r.sweepB.set(f.m_sweep),$r.tMax=1,pu(Uc,$r);var A=Uc.t;Uc.state==cn.e_touching?l=cl(m+(1-m)*A,1):l=1,a.m_toi=l,a.m_toiFlag=!0}l<o&&(r=a,o=l)}if(r==null||1-10*Bi<o){e.m_stepComplete=!0;break}var C=r.getFixtureA(),T=r.getFixtureB(),E=C.getBody(),P=T.getBody();if(ff.set(E.m_sweep),mf.set(P.m_sweep),E.advance(o),P.advance(o),r.update(e),r.m_toiFlag=!1,++r.m_toiCount,r.isEnabled()==!1||r.isTouching()==!1){r.setEnabled(!1),E.m_sweep.set(ff),P.m_sweep.set(mf),E.synchronizeTransform(),P.synchronizeTransform();continue}E.setAwake(!0),P.setAwake(!0),this.clear(),this.addBody(E),this.addBody(P),this.addContact(r),E.m_islandFlag=!0,P.m_islandFlag=!0,r.m_islandFlag=!0;for(var b=[E,P],M=0;M<b.length;++M){var B=b[M];if(B.isDynamic())for(var z=B.m_contactList;z;z=z.next){var I=z.contact;if(!I.m_islandFlag){var N=z.other;if(!(N.isDynamic()&&!B.isBullet()&&!N.isBullet())){var Y=I.m_fixtureA.m_isSensor,k=I.m_fixtureB.m_isSensor;if(!(Y||k)){if(df.set(N.m_sweep),N.m_islandFlag==!1&&N.advance(o),I.update(e),I.isEnabled()==!1||I.isTouching()==!1){N.m_sweep.set(df),N.synchronizeTransform();continue}I.m_islandFlag=!0,this.addContact(I),!N.m_islandFlag&&(N.m_islandFlag=!0,N.isStatic()||N.setAwake(!0),this.addBody(N))}}}}}Yr.reset((1-o)*t.dt),Yr.dtRatio=1,Yr.positionIterations=20,Yr.velocityIterations=t.velocityIterations,Yr.warmStarting=!1,this.solveIslandTOI(Yr,E,P);for(var M=0;M<this.m_bodies.length;++M){var B=this.m_bodies[M];if(B.m_islandFlag=!1,!!B.isDynamic()){B.synchronizeFixtures();for(var z=B.m_contactList;z;z=z.next)z.contact.m_toiFlag=!1,z.contact.m_islandFlag=!1}}if(e.findNewContacts(),e.m_subStepping){e.m_stepComplete=!1;break}}},i.prototype.solveIslandTOI=function(t,e,n){for(var h=0;h<this.m_bodies.length;++h){var s=this.m_bodies[h];V(s.c_position.c,s.m_sweep.c),s.c_position.a=s.m_sweep.a,V(s.c_velocity.v,s.m_linearVelocity),s.c_velocity.w=s.m_angularVelocity}for(var h=0;h<this.m_contacts.length;++h){var r=this.m_contacts[h];r.initConstraint(t)}for(var h=0;h<t.positionIterations;++h){for(var o=0,a=0;a<this.m_contacts.length;++a){var r=this.m_contacts[a],l=r.solvePositionConstraintTOI(t,e,n);o=cl(o,l)}var c=o>=-1.5*ut.linearSlop;if(c)break}var h;V(e.m_sweep.c0,e.c_position.c),e.m_sweep.a0=e.c_position.a,V(n.m_sweep.c0,n.c_position.c),n.m_sweep.a0=n.c_position.a;for(var h=0;h<this.m_contacts.length;++h){var r=this.m_contacts[h];r.initVelocityConstraint(t)}for(var h=0;h<t.velocityIterations;++h)for(var a=0;a<this.m_contacts.length;++a){var r=this.m_contacts[a];r.solveVelocityConstraint(t)}for(var u=t.dt,h=0;h<this.m_bodies.length;++h){var s=this.m_bodies[h];V(jn,s.c_position.c);var f=s.c_position.a;V(hi,s.c_velocity.v);var d=s.c_velocity.w;Lt(hl,u,hi);var _=pr(hl);if(_>ut.maxTranslationSquared){var v=ut.maxTranslation/uf(_);Zd(hi,v)}var p=u*d;if(p*p>ut.maxRotationSquared){var v=ut.maxRotation/hf(p);d*=v}Cn(jn,u,hi),f+=u*d,V(s.c_position.c,jn),s.c_position.a=f,V(s.c_velocity.v,hi),s.c_velocity.w=d,V(s.m_sweep.c,jn),s.m_sweep.a=f,V(s.m_linearVelocity,hi),s.m_angularVelocity=d,s.synchronizeTransform()}this.postSolveIsland()},i.prototype.postSolveIsland=function(){for(var t=0;t<this.m_contacts.length;++t){var e=this.m_contacts[t];this.m_world.postSolve(e,e.m_impulse)}},i})();up.TimeStep=_u;var In=(function(){function i(t,e,n,s){typeof t=="object"&&t!==null?(this.ex=g.clone(t),this.ey=g.clone(e)):typeof t=="number"?(this.ex=g.neo(t,n),this.ey=g.neo(e,s)):(this.ex=g.zero(),this.ey=g.zero())}return i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.ex)&&g.isValid(t.ey)},i.assert=function(t){},i.prototype.set=function(t,e,n,s){typeof t=="number"&&typeof e=="number"&&typeof n=="number"&&typeof s=="number"?(this.ex.setNum(t,n),this.ey.setNum(e,s)):typeof t=="object"&&typeof e=="object"?(this.ex.setVec2(t),this.ey.setVec2(e)):typeof t=="object"&&(this.ex.setVec2(t.ex),this.ey.setVec2(t.ey))},i.prototype.setIdentity=function(){this.ex.x=1,this.ey.x=0,this.ex.y=0,this.ey.y=1},i.prototype.setZero=function(){this.ex.x=0,this.ey.x=0,this.ex.y=0,this.ey.y=0},i.prototype.getInverse=function(){var t=this.ex.x,e=this.ey.x,n=this.ex.y,s=this.ey.y,r=t*s-e*n;r!==0&&(r=1/r);var o=new i;return o.ex.x=r*s,o.ey.x=-r*e,o.ex.y=-r*n,o.ey.y=r*t,o},i.prototype.solve=function(t){var e=this.ex.x,n=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-n*s;o!==0&&(o=1/o);var a=g.zero();return a.x=o*(r*t.x-n*t.y),a.y=o*(e*t.y-s*t.x),a},i.mul=function(t,e){if(e&&"x"in e&&"y"in e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)}else if(e&&"ex"in e&&"ey"in e){var r=t.ex.x*e.ex.x+t.ey.x*e.ex.y,o=t.ex.x*e.ey.x+t.ey.x*e.ey.y,a=t.ex.y*e.ex.x+t.ey.y*e.ex.y,l=t.ex.y*e.ey.x+t.ey.y*e.ey.y;return new i(r,o,a,l)}},i.mulVec2=function(t,e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)},i.mulMat22=function(t,e){var n=t.ex.x*e.ex.x+t.ey.x*e.ex.y,s=t.ex.x*e.ey.x+t.ey.x*e.ey.y,r=t.ex.y*e.ex.x+t.ey.y*e.ex.y,o=t.ex.y*e.ey.x+t.ey.y*e.ey.y;return new i(n,s,r,o)},i.mulT=function(t,e){if(e&&"x"in e&&"y"in e)return g.neo(g.dot(e,t.ex),g.dot(e,t.ey));if(e&&"ex"in e&&"ey"in e){var n=g.neo(g.dot(t.ex,e.ex),g.dot(t.ey,e.ex)),s=g.neo(g.dot(t.ex,e.ey),g.dot(t.ey,e.ey));return new i(n,s)}},i.mulTVec2=function(t,e){return g.neo(g.dot(e,t.ex),g.dot(e,t.ey))},i.mulTMat22=function(t,e){var n=g.neo(g.dot(t.ex,e.ex),g.dot(t.ey,e.ex)),s=g.neo(g.dot(t.ex,e.ey),g.dot(t.ey,e.ey));return new i(n,s)},i.abs=function(t){return new i(g.abs(t.ex),g.abs(t.ey))},i.add=function(t,e){return new i(g.add(t.ex,e.ex),g.add(t.ey,e.ey))},i})(),$S=Math.sqrt,Nc=X(0,0),Fc=X(0,0),Oo=X(0,0),Qn=X(0,0),ts=X(0,0),Oc=X(0,0),ul=X(0,0),xs=X(0,0),Ne;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_circles=0]="e_circles",i[i.e_faceA=1]="e_faceA",i[i.e_faceB=2]="e_faceB"})(Ne||(Ne={}));var se;(function(i){i[i.e_unset=-1]="e_unset",i[i.e_vertex=0]="e_vertex",i[i.e_face=1]="e_face"})(se||(se={}));var fr;(function(i){i[i.nullState=0]="nullState",i[i.addState=1]="addState",i[i.persistState=2]="persistState",i[i.removeState=3]="removeState"})(fr||(fr={}));var $i=(function(){function i(){this.v=X(0,0),this.id=new fp}return i.prototype.set=function(t){V(this.v,t.v),this.id.set(t.id)},i.prototype.recycle=function(){Ct(this.v),this.id.recycle()},i})(),dp=(function(){function i(){this.localNormal=X(0,0),this.localPoint=X(0,0),this.points=[new pf,new pf],this.pointCount=0}return i.prototype.set=function(t){this.type=t.type,V(this.localNormal,t.localNormal),V(this.localPoint,t.localPoint),this.pointCount=t.pointCount,this.points[0].set(t.points[0]),this.points[1].set(t.points[1])},i.prototype.recycle=function(){this.type=Ne.e_unset,Ct(this.localNormal),Ct(this.localPoint),this.pointCount=0,this.points[0].recycle(),this.points[1].recycle()},i.prototype.getWorldManifold=function(t,e,n,s,r){if(this.pointCount==0)return t;t=t||new mp,t.pointCount=this.pointCount;var o=t.normal,a=t.points,l=t.separations;switch(this.type){case Ne.e_circles:{oi(o,1,0);var c=this.points[0];zt(Nc,e,this.localPoint),zt(Fc,s,c.localPoint),Vt(Oc,Fc,Nc);var h=pr(Oc);if(h>Bi*Bi){var u=$S(h);Lt(o,1/u,Oc)}Be(Qn,1,Nc,n,o),Be(ts,1,Fc,-r,o),Be(a[0],.5,Qn,.5,ts),l[0]=st(Vt(Oo,ts,Qn),o);break}case Ne.e_faceA:{dn(o,e.q,this.localNormal),zt(ul,e,this.localPoint);for(var f=0;f<this.pointCount;++f){var c=this.points[f];zt(xs,s,c.localPoint),Be(Qn,1,xs,n-st(Vt(Oo,xs,ul),o),o),Be(ts,1,xs,-r,o),Be(a[f],.5,Qn,.5,ts),l[f]=st(Vt(Oo,ts,Qn),o)}break}case Ne.e_faceB:{dn(o,s.q,this.localNormal),zt(ul,s,this.localPoint);for(var f=0;f<this.pointCount;++f){var c=this.points[f];zt(xs,e,c.localPoint),Be(ts,1,xs,r-st(Vt(Oo,xs,ul),o),o),Be(Qn,1,xs,-n,o),Be(a[f],.5,Qn,.5,ts),l[f]=st(Vt(Oo,Qn,ts),o)}ca(o);break}}return t},i.clipSegmentToLine=ha,i.ClipVertex=$i,i.getPointStates=JS,i.PointState=fr,i})(),pf=(function(){function i(){this.localPoint=X(0,0),this.normalImpulse=0,this.tangentImpulse=0,this.id=new fp}return i.prototype.set=function(t){V(this.localPoint,t.localPoint),this.normalImpulse=t.normalImpulse,this.tangentImpulse=t.tangentImpulse,this.id.set(t.id)},i.prototype.recycle=function(){Ct(this.localPoint),this.normalImpulse=0,this.tangentImpulse=0,this.id.recycle()},i})(),fp=(function(){function i(){this.key=-1,this.indexA=-1,this.indexB=-1,this.typeA=se.e_unset,this.typeB=se.e_unset}return i.prototype.setFeatures=function(t,e,n,s){this.indexA=t,this.indexB=n,this.typeA=e,this.typeB=s,this.key=this.indexA+this.indexB*4+this.typeA*16+this.typeB*64},i.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,this.typeA=t.typeA,this.typeB=t.typeB,this.key=this.indexA+this.indexB*4+this.typeA*16+this.typeB*64},i.prototype.swapFeatures=function(){var t=this.indexA,e=this.indexB,n=this.typeA,s=this.typeB;this.indexA=e,this.indexB=t,this.typeA=s,this.typeB=n,this.key=this.indexA+this.indexB*4+this.typeA*16+this.typeB*64},i.prototype.recycle=function(){this.indexA=0,this.indexB=0,this.typeA=se.e_unset,this.typeB=se.e_unset,this.key=-1},i})(),mp=(function(){function i(){this.normal=X(0,0),this.points=[X(0,0),X(0,0)],this.separations=[0,0],this.pointCount=0}return i.prototype.recycle=function(){Ct(this.normal),Ct(this.points[0]),Ct(this.points[1]),this.separations[0]=0,this.separations[1]=0,this.pointCount=0},i})();function JS(i,t,e,n){for(var s=0;s<e.pointCount;++s){var r=e.points[s].id;i[s]=fr.removeState;for(var o=0;o<n.pointCount;++o)if(n.points[o].id.key===r.key){i[s]=fr.persistState;break}}for(var s=0;s<n.pointCount;++s){var r=n.points[s].id;t[s]=fr.addState;for(var o=0;o<e.pointCount;++o)if(e.points[o].id.key===r.key){t[s]=fr.persistState;break}}}function ha(i,t,e,n,s){var r=0,o=st(e,t[0].v)-n,a=st(e,t[1].v)-n;if(o<=0&&i[r++].set(t[0]),a<=0&&i[r++].set(t[1]),o*a<0){var l=o/(o-a);Be(i[r].v,1-l,t[0].v,l,t[1].v),i[r].id.setFeatures(s,se.e_vertex,t[0].id.indexB,se.e_face),++r}return r}var ZS=Math.sqrt,KS=Math.max,jS=Math.min,_f=new ea({create:function(){return new Wn},release:function(i){i.recycle()}}),Jr=new dp,dl=new mp,vf=(function(){function i(t){this.prev=null,this.next=null,this.other=null,this.contact=t}return i.prototype.recycle=function(){this.prev=null,this.next=null,this.other=null},i})();function gf(i,t){return ZS(i*t)}function yf(i,t){return i>t?i:t}var Js=[],xf=(function(){function i(){this.rA=X(0,0),this.rB=X(0,0),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0}return i.prototype.recycle=function(){Ct(this.rA),Ct(this.rB),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0},i})(),es=X(0,0),ze=X(0,0),is=X(0,0),Ve=X(0,0),As=X(0,0),Zs=Er(0,0,0),Ks=Er(0,0,0),fl=X(0,0),ml=X(0,0),Zr=X(0,0),pl=X(0,0),zc=X(0,0),Vc=X(0,0),We=X(0,0),ye=X(0,0),zo=X(0,0),rn=X(0,0),Kr=X(0,0),jr=X(0,0),qi=X(0,0),ns=X(0,0),Ee=X(0,0),on=X(0,0),qe=X(0,0),Xe=X(0,0),Dn=X(0,0),Wn=(function(){function i(){this.m_nodeA=new vf(this),this.m_nodeB=new vf(this),this.m_fixtureA=null,this.m_fixtureB=null,this.m_indexA=-1,this.m_indexB=-1,this.m_evaluateFcn=null,this.m_manifold=new dp,this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_friction=0,this.m_restitution=0,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse=new YS(this),this.v_points=[new xf,new xf],this.v_normal=X(0,0),this.v_normalMass=new In,this.v_K=new In,this.v_pointCount=0,this.v_tangentSpeed=0,this.v_friction=0,this.v_restitution=0,this.v_invMassA=0,this.v_invMassB=0,this.v_invIA=0,this.v_invIB=0,this.p_localPoints=[X(0,0),X(0,0)],this.p_localNormal=X(0,0),this.p_localPoint=X(0,0),this.p_localCenterA=X(0,0),this.p_localCenterB=X(0,0),this.p_type=Ne.e_unset,this.p_radiusA=0,this.p_radiusB=0,this.p_pointCount=0,this.p_invMassA=0,this.p_invMassB=0,this.p_invIA=0,this.p_invIB=0}return i.prototype.initialize=function(t,e,n,s,r){this.m_fixtureA=t,this.m_fixtureB=n,this.m_indexA=e,this.m_indexB=s,this.m_evaluateFcn=r,this.m_friction=gf(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction),this.m_restitution=yf(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)},i.prototype.recycle=function(){this.m_nodeA.recycle(),this.m_nodeB.recycle(),this.m_fixtureA=null,this.m_fixtureB=null,this.m_indexA=-1,this.m_indexB=-1,this.m_evaluateFcn=null,this.m_manifold.recycle(),this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_friction=0,this.m_restitution=0,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse.recycle();for(var t=0,e=this.v_points;t<e.length;t++){var n=e[t];n.recycle()}Ct(this.v_normal),this.v_normalMass.setZero(),this.v_K.setZero(),this.v_pointCount=0,this.v_tangentSpeed=0,this.v_friction=0,this.v_restitution=0,this.v_invMassA=0,this.v_invMassB=0,this.v_invIA=0,this.v_invIB=0;for(var s=0,r=this.p_localPoints;s<r.length;s++){var o=r[s];Ct(o)}Ct(this.p_localNormal),Ct(this.p_localPoint),Ct(this.p_localCenterA),Ct(this.p_localCenterB),this.p_type=Ne.e_unset,this.p_radiusA=0,this.p_radiusB=0,this.p_pointCount=0,this.p_invMassA=0,this.p_invMassB=0,this.p_invIA=0,this.p_invIB=0},i.prototype.initConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=n.m_shape;if(!(o===null||a===null)){var l=this.m_manifold,c=l.pointCount;this.v_invMassA=s.m_invMass,this.v_invMassB=r.m_invMass,this.v_invIA=s.m_invI,this.v_invIB=r.m_invI,this.v_friction=this.m_friction,this.v_restitution=this.m_restitution,this.v_tangentSpeed=this.m_tangentSpeed,this.v_pointCount=c,this.v_K.setZero(),this.v_normalMass.setZero(),this.p_invMassA=s.m_invMass,this.p_invMassB=r.m_invMass,this.p_invIA=s.m_invI,this.p_invIB=r.m_invI,V(this.p_localCenterA,s.m_sweep.localCenter),V(this.p_localCenterB,r.m_sweep.localCenter),this.p_radiusA=o.m_radius,this.p_radiusB=a.m_radius,this.p_type=l.type,V(this.p_localNormal,l.localNormal),V(this.p_localPoint,l.localPoint),this.p_pointCount=c;for(var h=0;h<ut.maxManifoldPoints;++h)this.v_points[h].recycle(),Ct(this.p_localPoints[h]);for(var h=0;h<c;++h){var u=l.points[h],f=this.v_points[h];t.warmStarting&&(f.normalImpulse=t.dtRatio*u.normalImpulse,f.tangentImpulse=t.dtRatio*u.tangentImpulse),V(this.p_localPoints[h],u.localPoint)}}}}},i.prototype.getManifold=function(){return this.m_manifold},i.prototype.getWorldManifold=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=n.m_shape;if(!(o===null||a===null))return this.m_manifold.getWorldManifold(t,s.getTransform(),o.m_radius,r.getTransform(),a.m_radius)}}},i.prototype.setEnabled=function(t){this.m_enabledFlag=!!t},i.prototype.isEnabled=function(){return this.m_enabledFlag},i.prototype.isTouching=function(){return this.m_touchingFlag},i.prototype.getNext=function(){return this.m_next},i.prototype.getFixtureA=function(){return this.m_fixtureA},i.prototype.getFixtureB=function(){return this.m_fixtureB},i.prototype.getChildIndexA=function(){return this.m_indexA},i.prototype.getChildIndexB=function(){return this.m_indexB},i.prototype.flagForFiltering=function(){this.m_filterFlag=!0},i.prototype.setFriction=function(t){this.m_friction=t},i.prototype.getFriction=function(){return this.m_friction},i.prototype.resetFriction=function(){var t=this.m_fixtureA,e=this.m_fixtureB;t===null||e===null||(this.m_friction=gf(t.m_friction,e.m_friction))},i.prototype.setRestitution=function(t){this.m_restitution=t},i.prototype.getRestitution=function(){return this.m_restitution},i.prototype.resetRestitution=function(){var t=this.m_fixtureA,e=this.m_fixtureB;t===null||e===null||(this.m_restitution=yf(t.m_restitution,e.m_restitution))},i.prototype.setTangentSpeed=function(t){this.m_tangentSpeed=t},i.prototype.getTangentSpeed=function(){return this.m_tangentSpeed},i.prototype.evaluate=function(t,e,n){var s=this.m_fixtureA,r=this.m_fixtureB;s===null||r===null||this.m_evaluateFcn(t,e,s,this.m_indexA,n,r,this.m_indexB)},i.prototype.update=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=n.m_shape;if(!(o===null||a===null)){this.m_enabledFlag=!0;var l=!1,c=this.m_touchingFlag,h=e.m_isSensor,u=n.m_isSensor,f=h||u,d=s.m_xf,_=r.m_xf;if(f)l=lp(o,this.m_indexA,a,this.m_indexB,d,_),this.m_manifold.pointCount=0;else{Jr.recycle(),Jr.set(this.m_manifold),this.m_manifold.recycle(),this.evaluate(this.m_manifold,d,_),l=this.m_manifold.pointCount>0;for(var v=0;v<this.m_manifold.pointCount;++v){var p=this.m_manifold.points[v];p.normalImpulse=0,p.tangentImpulse=0;for(var m=0;m<Jr.pointCount;++m){var x=Jr.points[m];if(x.id.key===p.id.key){p.normalImpulse=x.normalImpulse,p.tangentImpulse=x.tangentImpulse;break}}}l!==c&&(s.setAwake(!0),r.setAwake(!0))}this.m_touchingFlag=l;var y=typeof t=="object"&&t!==null;!c&&l&&y&&t.beginContact(this),c&&!l&&y&&t.endContact(this),!f&&l&&y&&Jr&&t.preSolve(this,Jr)}}}},i.prototype.solvePositionConstraint=function(t){return this._solvePositionConstraint(t,null,null)},i.prototype.solvePositionConstraintTOI=function(t,e,n){return this._solvePositionConstraint(t,e,n)},i.prototype._solvePositionConstraint=function(t,e,n){var s=e!==null&&n!==null,r=0,o=this.m_fixtureA,a=this.m_fixtureB;if(o===null||a===null)return r;var l=o.m_body,c=a.m_body;if(l===null||c===null)return r;var h=l.c_position,u=c.c_position,f=this.p_localCenterA,d=this.p_localCenterB,_=0,v=0;(!s||l===e||l===n)&&(_=this.p_invMassA,v=this.p_invIA);var p=0,m=0;(!s||c===e||c===n)&&(p=this.p_invMassB,m=this.p_invIB),V(es,h.c);var x=h.a;V(is,u.c);for(var y=u.a,A=0;A<this.p_pointCount;++A){Za(Zs,f,es,x),Za(Ks,d,is,y);var C=void 0;switch(this.p_type){case Ne.e_circles:{zt(fl,Zs,this.p_localPoint),zt(ml,Ks,this.p_localPoints[0]),Vt(ye,ml,fl),Pn(ye),Be(zo,.5,fl,.5,ml),C=st(ml,ye)-st(fl,ye)-this.p_radiusA-this.p_radiusB;break}case Ne.e_faceA:{dn(ye,Zs.q,this.p_localNormal),zt(pl,Zs,this.p_localPoint),zt(Zr,Ks,this.p_localPoints[A]),C=st(Zr,ye)-st(pl,ye)-this.p_radiusA-this.p_radiusB,V(zo,Zr);break}case Ne.e_faceB:{dn(ye,Ks.q,this.p_localNormal),zt(pl,Ks,this.p_localPoint),zt(Zr,Zs,this.p_localPoints[A]),C=st(Zr,ye)-st(pl,ye)-this.p_radiusA-this.p_radiusB,V(zo,Zr),ca(ye);break}default:return r}Vt(zc,zo,es),Vt(Vc,zo,is),r=jS(r,C);var T=s?ut.toiBaugarte:ut.baumgarte,E=ut.linearSlop,P=ut.maxLinearCorrection,b=li(T*(C+E),-P,0),M=Jt(zc,ye),B=Jt(Vc,ye),z=_+p+v*M*M+m*B*B,I=z>0?-b/z:0;Lt(We,I,ye),Jo(es,_,We),x-=v*Jt(zc,We),Cn(is,p,We),y+=m*Jt(Vc,We)}return V(h.c,es),h.a=x,V(u.c,is),u.a=y,r},i.prototype.initVelocityConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=s.c_position,c=r.c_position,h=this.p_radiusA,u=this.p_radiusB,f=this.m_manifold,d=this.v_invMassA,_=this.v_invMassB,v=this.v_invIA,p=this.v_invIB,m=this.p_localCenterA,x=this.p_localCenterB;V(es,l.c);var y=l.a;V(ze,o.v);var A=o.w;V(is,c.c);var C=c.a;V(Ve,a.v);var T=a.w;Za(Zs,m,es,y),Za(Ks,x,is,C),dl.recycle(),f.getWorldManifold(dl,Zs,h,Ks,u),V(this.v_normal,dl.normal);for(var E=0;E<this.v_pointCount;++E){var P=this.v_points[E],b=dl.points[E];Vt(P.rA,b,es),Vt(P.rB,b,is);var M=Jt(P.rA,this.v_normal),B=Jt(P.rB,this.v_normal),z=d+_+v*M*M+p*B*B;P.normalMass=z>0?1/z:0,mr(As,this.v_normal,1);var I=Jt(P.rA,As),N=Jt(P.rB,As),Y=d+_+v*I*I+p*N*N;P.tangentMass=Y>0?1/Y:0,P.velocityBias=0;var k=0;k+=st(this.v_normal,Ve),k+=st(this.v_normal,Xi(Dn,T,P.rB)),k-=st(this.v_normal,ze),k-=st(this.v_normal,Xi(Dn,A,P.rA)),k<-ut.velocityThreshold&&(P.velocityBias=-this.v_restitution*k)}if(this.v_pointCount==2&&t.blockSolve){var et=this.v_points[0],G=this.v_points[1],nt=Jt(et.rA,this.v_normal),dt=Jt(et.rB,this.v_normal),gt=Jt(G.rA,this.v_normal),Ht=Jt(G.rB,this.v_normal),re=d+_+v*nt*nt+p*dt*dt,Z=d+_+v*gt*gt+p*Ht*Ht,at=d+_+v*nt*gt+p*dt*Ht,bt=1e3;if(re*re<bt*(re*Z-at*at)){this.v_K.ex.setNum(re,at),this.v_K.ey.setNum(at,Z);var ht=this.v_K.ex.x,Dt=this.v_K.ey.x,kt=this.v_K.ex.y,jt=this.v_K.ey.y,ge=ht*jt-Dt*kt;ge!==0&&(ge=1/ge),this.v_normalMass.ex.x=ge*jt,this.v_normalMass.ey.x=-ge*Dt,this.v_normalMass.ex.y=-ge*kt,this.v_normalMass.ey.y=ge*ht}else this.v_pointCount=1}V(l.c,es),l.a=y,V(o.v,ze),o.w=A,V(c.c,is),c.a=C,V(a.v,Ve),a.w=T}}},i.prototype.warmStartConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=this.v_invMassA,c=this.v_invIA,h=this.v_invMassB,u=this.v_invIB;V(ze,o.v);var f=o.w;V(Ve,a.v);var d=a.w;V(ye,this.v_normal),mr(As,ye,1);for(var _=0;_<this.v_pointCount;++_){var v=this.v_points[_];Be(We,v.normalImpulse,ye,v.tangentImpulse,As),f-=c*Jt(v.rA,We),Jo(ze,l,We),d+=u*Jt(v.rB,We),Cn(Ve,h,We)}V(o.v,ze),o.w=f,V(a.v,Ve),a.w=d}}},i.prototype.storeConstraintImpulses=function(t){for(var e=this.m_manifold,n=0;n<this.v_pointCount;++n)e.points[n].normalImpulse=this.v_points[n].normalImpulse,e.points[n].tangentImpulse=this.v_points[n].tangentImpulse},i.prototype.solveVelocityConstraint=function(t){var e=this.m_fixtureA,n=this.m_fixtureB;if(!(e===null||n===null)){var s=e.m_body,r=n.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=this.v_invMassA,c=this.v_invIA,h=this.v_invMassB,u=this.v_invIB;V(ze,o.v);var f=o.w;V(Ve,a.v);var d=a.w;V(ye,this.v_normal),mr(As,ye,1);for(var _=this.v_friction,v=0;v<this.v_pointCount;++v){var p=this.v_points[v];Ct(rn),ln(rn,Ve),ln(rn,Xi(Dn,d,p.rB)),os(rn,ze),os(rn,Xi(Dn,f,p.rA));var m=st(rn,As)-this.v_tangentSpeed,x=p.tangentMass*-m,y=_*p.normalImpulse,A=li(p.tangentImpulse+x,-y,y);x=A-p.tangentImpulse,p.tangentImpulse=A,Lt(We,x,As),Jo(ze,l,We),f-=c*Jt(p.rA,We),Cn(Ve,h,We),d+=u*Jt(p.rB,We)}if(this.v_pointCount==1||t.blockSolve==!1)for(var C=0;C<this.v_pointCount;++C){var p=this.v_points[C];Ct(rn),ln(rn,Ve),ln(rn,Xi(Dn,d,p.rB)),os(rn,ze),os(rn,Xi(Dn,f,p.rA));var T=st(rn,ye),x=-p.normalMass*(T-p.velocityBias),A=KS(p.normalImpulse+x,0);x=A-p.normalImpulse,p.normalImpulse=A,Lt(We,x,ye),Jo(ze,l,We),f-=c*Jt(p.rA,We),Cn(Ve,h,We),d+=u*Jt(p.rB,We)}else{var E=this.v_points[0],P=this.v_points[1];oi(ns,E.normalImpulse,P.normalImpulse),Ct(Kr),ln(Kr,Ve),ln(Kr,Xi(Dn,d,E.rB)),os(Kr,ze),os(Kr,Xi(Dn,f,E.rA)),Ct(jr),ln(jr,Ve),ln(jr,Xi(Dn,d,P.rB)),os(jr,ze),os(jr,Xi(Dn,f,P.rA));var b=st(Kr,ye),M=st(jr,ye);for(oi(qi,b-E.velocityBias,M-P.velocityBias),qi.x-=this.v_K.ex.x*ns.x+this.v_K.ey.x*ns.y,qi.y-=this.v_K.ex.y*ns.x+this.v_K.ey.y*ns.y;;){if(Ct(Ee),Ee.x=-(this.v_normalMass.ex.x*qi.x+this.v_normalMass.ey.x*qi.y),Ee.y=-(this.v_normalMass.ex.y*qi.x+this.v_normalMass.ey.y*qi.y),Ee.x>=0&&Ee.y>=0){Vt(on,Ee,ns),Lt(qe,on.x,ye),Lt(Xe,on.y,ye),zn(ze,-l,qe,-l,Xe,1,ze),f-=c*(Jt(E.rA,qe)+Jt(P.rA,Xe)),zn(Ve,h,qe,h,Xe,1,Ve),d+=u*(Jt(E.rB,qe)+Jt(P.rB,Xe)),E.normalImpulse=Ee.x,P.normalImpulse=Ee.y;break}if(Ee.x=-E.normalMass*qi.x,Ee.y=0,b=0,M=this.v_K.ex.y*Ee.x+qi.y,Ee.x>=0&&M>=0){Vt(on,Ee,ns),Lt(qe,on.x,ye),Lt(Xe,on.y,ye),zn(ze,-l,qe,-l,Xe,1,ze),f-=c*(Jt(E.rA,qe)+Jt(P.rA,Xe)),zn(Ve,h,qe,h,Xe,1,Ve),d+=u*(Jt(E.rB,qe)+Jt(P.rB,Xe)),E.normalImpulse=Ee.x,P.normalImpulse=Ee.y;break}if(Ee.x=0,Ee.y=-P.normalMass*qi.y,b=this.v_K.ey.x*Ee.y+qi.x,M=0,Ee.y>=0&&b>=0){Vt(on,Ee,ns),Lt(qe,on.x,ye),Lt(Xe,on.y,ye),zn(ze,-l,qe,-l,Xe,1,ze),f-=c*(Jt(E.rA,qe)+Jt(P.rA,Xe)),zn(Ve,h,qe,h,Xe,1,Ve),d+=u*(Jt(E.rB,qe)+Jt(P.rB,Xe)),E.normalImpulse=Ee.x,P.normalImpulse=Ee.y;break}if(Ee.x=0,Ee.y=0,b=qi.x,M=qi.y,b>=0&&M>=0){Vt(on,Ee,ns),Lt(qe,on.x,ye),Lt(Xe,on.y,ye),zn(ze,-l,qe,-l,Xe,1,ze),f-=c*(Jt(E.rA,qe)+Jt(P.rA,Xe)),zn(Ve,h,qe,h,Xe,1,Ve),d+=u*(Jt(E.rB,qe)+Jt(P.rB,Xe)),E.normalImpulse=Ee.x,P.normalImpulse=Ee.y;break}break}}V(o.v,ze),o.w=f,V(a.v,Ve),a.w=d}}},i.addType=function(t,e,n){Js[t]=Js[t]||{},Js[t][e]=n},i.create=function(t,e,n,s){var r=t.m_shape.m_type,o=n.m_shape.m_type,a=_f.allocate(),l;if(l=Js[r]&&Js[r][o])a.initialize(t,e,n,s,l);else if(l=Js[o]&&Js[o][r])a.initialize(n,s,t,e,l);else return null;t=a.m_fixtureA,n=a.m_fixtureB,e=a.getChildIndexA(),s=a.getChildIndexB();var c=t.m_body,h=n.m_body;return a.m_nodeA.contact=a,a.m_nodeA.other=h,a.m_nodeA.prev=null,a.m_nodeA.next=c.m_contactList,c.m_contactList!=null&&(c.m_contactList.prev=a.m_nodeA),c.m_contactList=a.m_nodeA,a.m_nodeB.contact=a,a.m_nodeB.other=c,a.m_nodeB.prev=null,a.m_nodeB.next=h.m_contactList,h.m_contactList!=null&&(h.m_contactList.prev=a.m_nodeB),h.m_contactList=a.m_nodeB,t.isSensor()==!1&&n.isSensor()==!1&&(c.setAwake(!0),h.setAwake(!0)),a},i.destroy=function(t,e){var n=t.m_fixtureA,s=t.m_fixtureB;if(!(n===null||s===null)){var r=n.m_body,o=s.m_body;r===null||o===null||(t.isTouching()&&e.endContact(t),t.m_nodeA.prev&&(t.m_nodeA.prev.next=t.m_nodeA.next),t.m_nodeA.next&&(t.m_nodeA.next.prev=t.m_nodeA.prev),t.m_nodeA==r.m_contactList&&(r.m_contactList=t.m_nodeA.next),t.m_nodeB.prev&&(t.m_nodeB.prev.next=t.m_nodeB.next),t.m_nodeB.next&&(t.m_nodeB.next.prev=t.m_nodeB.prev),t.m_nodeB==o.m_contactList&&(o.m_contactList=t.m_nodeB.next),t.m_manifold.pointCount>0&&!n.m_isSensor&&!s.m_isSensor&&(r.setAwake(!0),o.setAwake(!0)),_f.release(t))}},i})(),QS={gravity:g.zero(),allowSleep:!0,warmStarting:!0,continuousPhysics:!0,subStepping:!1,blockSolve:!0,velocityIterations:8,positionIterations:3},va=(function(){function i(t){if(!(this instanceof i))return new i(t);this.s_step=new _u,t?g.isValid(t)&&(t={gravity:t}):t={},t=Ji(t,QS),this.m_solver=new up(this),this.m_broadPhase=new ES,this.m_contactList=null,this.m_contactCount=0,this.m_bodyList=null,this.m_bodyCount=0,this.m_jointList=null,this.m_jointCount=0,this.m_stepComplete=!0,this.m_allowSleep=t.allowSleep,this.m_gravity=g.clone(t.gravity),this.m_clearForces=!0,this.m_newFixture=!1,this.m_locked=!1,this.m_warmStarting=t.warmStarting,this.m_continuousPhysics=t.continuousPhysics,this.m_subStepping=t.subStepping,this.m_blockSolve=t.blockSolve,this.m_velocityIterations=t.velocityIterations,this.m_positionIterations=t.positionIterations,this.m_t=0,this.m_step_callback=[]}return i.prototype._serialize=function(){for(var t=[],e=[],n=this.getBodyList();n;n=n.getNext())t.push(n);for(var s=this.getJointList();s;s=s.getNext())typeof s._serialize=="function"&&e.push(s);return{gravity:this.m_gravity,bodies:t,joints:e}},i._deserialize=function(t,e,n){if(!t)return new i;var s=new i(t.gravity);if(t.bodies)for(var r=t.bodies.length-1;r>=0;r-=1)s._addBody(n(ve,t.bodies[r],s));if(t.joints)for(var r=t.joints.length-1;r>=0;r--)s.createJoint(n(Ai,t.joints[r],s));return s},i.prototype.getBodyList=function(){return this.m_bodyList},i.prototype.getJointList=function(){return this.m_jointList},i.prototype.getContactList=function(){return this.m_contactList},i.prototype.getBodyCount=function(){return this.m_bodyCount},i.prototype.getJointCount=function(){return this.m_jointCount},i.prototype.getContactCount=function(){return this.m_contactCount},i.prototype.setGravity=function(t){this.m_gravity.set(t)},i.prototype.getGravity=function(){return this.m_gravity},i.prototype.isLocked=function(){return this.m_locked},i.prototype.setAllowSleeping=function(t){if(t!=this.m_allowSleep&&(this.m_allowSleep=t,this.m_allowSleep==!1))for(var e=this.m_bodyList;e;e=e.m_next)e.setAwake(!0)},i.prototype.getAllowSleeping=function(){return this.m_allowSleep},i.prototype.setWarmStarting=function(t){this.m_warmStarting=t},i.prototype.getWarmStarting=function(){return this.m_warmStarting},i.prototype.setContinuousPhysics=function(t){this.m_continuousPhysics=t},i.prototype.getContinuousPhysics=function(){return this.m_continuousPhysics},i.prototype.setSubStepping=function(t){this.m_subStepping=t},i.prototype.getSubStepping=function(){return this.m_subStepping},i.prototype.setAutoClearForces=function(t){this.m_clearForces=t},i.prototype.getAutoClearForces=function(){return this.m_clearForces},i.prototype.clearForces=function(){for(var t=this.m_bodyList;t;t=t.getNext())t.m_force.setZero(),t.m_torque=0},i.prototype.queryAABB=function(t,e){var n=this.m_broadPhase;this.m_broadPhase.query(t,function(s){var r=n.getUserData(s);return e(r.fixture)})},i.prototype.rayCast=function(t,e,n){var s=this.m_broadPhase;this.m_broadPhase.rayCast({maxFraction:1,p1:t,p2:e},function(r,o){var a=s.getUserData(o),l=a.fixture,c=a.childIndex,h={},u=l.rayCast(h,r,c);if(u){var f=h.fraction,d=g.add(g.mulNumVec2(1-f,r.p1),g.mulNumVec2(f,r.p2));return n(l,d,h.normal,f)}return r.maxFraction})},i.prototype.getProxyCount=function(){return this.m_broadPhase.getProxyCount()},i.prototype.getTreeHeight=function(){return this.m_broadPhase.getTreeHeight()},i.prototype.getTreeBalance=function(){return this.m_broadPhase.getTreeBalance()},i.prototype.getTreeQuality=function(){return this.m_broadPhase.getTreeQuality()},i.prototype.shiftOrigin=function(t){if(!this.isLocked()){for(var e=this.m_bodyList;e;e=e.m_next)e.m_xf.p.sub(t),e.m_sweep.c0.sub(t),e.m_sweep.c.sub(t);for(var n=this.m_jointList;n;n=n.m_next)n.shiftOrigin(t);this.m_broadPhase.shiftOrigin(t)}},i.prototype._addBody=function(t){this.isLocked()||(t.m_prev=null,t.m_next=this.m_bodyList,this.m_bodyList&&(this.m_bodyList.m_prev=t),this.m_bodyList=t,++this.m_bodyCount,this.publish("add-body",t))},i.prototype.createBody=function(t,e){if(this.isLocked())return null;var n={};t&&(g.isValid(t)?n={position:t,angle:e}:typeof t=="object"&&(n=t));var s=new ve(this,n);return this._addBody(s),s},i.prototype.createDynamicBody=function(t,e){var n={};return t&&(g.isValid(t)?n={position:t,angle:e}:typeof t=="object"&&(n=t)),n.type="dynamic",this.createBody(n)},i.prototype.createKinematicBody=function(t,e){var n={};return t&&(g.isValid(t)?n={position:t,angle:e}:typeof t=="object"&&(n=t)),n.type="kinematic",this.createBody(n)},i.prototype.destroyBody=function(t){if(!this.isLocked()){if(t.m_destroyed)return!1;for(var e=t.m_jointList;e;){var n=e;e=e.next,this.publish("remove-joint",n.joint),this.destroyJoint(n.joint),t.m_jointList=e}t.m_jointList=null;for(var s=t.m_contactList;s;){var r=s;s=s.next,this.destroyContact(r.contact),t.m_contactList=s}t.m_contactList=null;for(var o=t.m_fixtureList;o;){var a=o;o=o.m_next,this.publish("remove-fixture",a),a.destroyProxies(this.m_broadPhase),t.m_fixtureList=o}return t.m_fixtureList=null,t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_bodyList&&(this.m_bodyList=t.m_next),t.m_destroyed=!0,--this.m_bodyCount,this.publish("remove-body",t),!0}},i.prototype.createJoint=function(t){if(this.isLocked())return null;if(t.m_prev=null,t.m_next=this.m_jointList,this.m_jointList&&(this.m_jointList.m_prev=t),this.m_jointList=t,++this.m_jointCount,t.m_edgeA.joint=t,t.m_edgeA.other=t.m_bodyB,t.m_edgeA.prev=null,t.m_edgeA.next=t.m_bodyA.m_jointList,t.m_bodyA.m_jointList&&(t.m_bodyA.m_jointList.prev=t.m_edgeA),t.m_bodyA.m_jointList=t.m_edgeA,t.m_edgeB.joint=t,t.m_edgeB.other=t.m_bodyA,t.m_edgeB.prev=null,t.m_edgeB.next=t.m_bodyB.m_jointList,t.m_bodyB.m_jointList&&(t.m_bodyB.m_jointList.prev=t.m_edgeB),t.m_bodyB.m_jointList=t.m_edgeB,t.m_collideConnected==!1)for(var e=t.m_bodyB.getContactList();e;e=e.next)e.other==t.m_bodyA&&e.contact.flagForFiltering();return this.publish("add-joint",t),t},i.prototype.destroyJoint=function(t){if(!this.isLocked()){t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_jointList&&(this.m_jointList=t.m_next);var e=t.m_bodyA,n=t.m_bodyB;if(e.setAwake(!0),n.setAwake(!0),t.m_edgeA.prev&&(t.m_edgeA.prev.next=t.m_edgeA.next),t.m_edgeA.next&&(t.m_edgeA.next.prev=t.m_edgeA.prev),t.m_edgeA==e.m_jointList&&(e.m_jointList=t.m_edgeA.next),t.m_edgeA.prev=null,t.m_edgeA.next=null,t.m_edgeB.prev&&(t.m_edgeB.prev.next=t.m_edgeB.next),t.m_edgeB.next&&(t.m_edgeB.next.prev=t.m_edgeB.prev),t.m_edgeB==n.m_jointList&&(n.m_jointList=t.m_edgeB.next),t.m_edgeB.prev=null,t.m_edgeB.next=null,--this.m_jointCount,t.m_collideConnected==!1)for(var s=n.getContactList();s;)s.other==e&&s.contact.flagForFiltering(),s=s.next;this.publish("remove-joint",t)}},i.prototype.step=function(t,e,n){if(this.publish("pre-step",t),(e|0)!==e&&(e=0),e=e||this.m_velocityIterations,n=n||this.m_positionIterations,this.m_newFixture&&(this.findNewContacts(),this.m_newFixture=!1),this.m_locked=!0,this.s_step.reset(t),this.s_step.velocityIterations=e,this.s_step.positionIterations=n,this.s_step.warmStarting=this.m_warmStarting,this.s_step.blockSolve=this.m_blockSolve,this.updateContacts(),this.m_stepComplete&&t>0){this.m_solver.solveWorld(this.s_step);for(var s=this.m_bodyList;s;s=s.getNext())s.m_islandFlag!=!1&&(s.isStatic()||s.synchronizeFixtures());this.findNewContacts()}this.m_continuousPhysics&&t>0&&this.m_solver.solveWorldTOI(this.s_step),this.m_clearForces&&this.clearForces(),this.m_locked=!1;for(var r;r=this.m_step_callback.shift();)r(this);this.publish("post-step",t)},i.prototype.queueUpdate=function(t){this.isLocked()?this.m_step_callback.push(t):t(this)},i.prototype.findNewContacts=function(){var t=this;this.m_broadPhase.updatePairs(function(e,n){return t.createContact(e,n)})},i.prototype.createContact=function(t,e){var n=t.fixture,s=e.fixture,r=t.childIndex,o=e.childIndex,a=n.getBody(),l=s.getBody();if(a!=l){for(var c=l.getContactList();c;){if(c.other==a){var h=c.contact.getFixtureA(),u=c.contact.getFixtureB(),f=c.contact.getChildIndexA(),d=c.contact.getChildIndexB();if(h==n&&u==s&&f==r&&d==o||h==s&&u==n&&f==o&&d==r)return}c=c.next}if(l.shouldCollide(a)!=!1&&s.shouldCollide(n)!=!1){var _=Wn.create(n,r,s,o);_!=null&&(_.m_prev=null,this.m_contactList!=null&&(_.m_next=this.m_contactList,this.m_contactList.m_prev=_),this.m_contactList=_,++this.m_contactCount)}}},i.prototype.updateContacts=function(){for(var t,e=this.m_contactList;t=e;){e=t.getNext();var n=t.getFixtureA(),s=t.getFixtureB(),r=t.getChildIndexA(),o=t.getChildIndexB(),a=n.getBody(),l=s.getBody();if(t.m_filterFlag){if(l.shouldCollide(a)==!1){this.destroyContact(t);continue}if(s.shouldCollide(n)==!1){this.destroyContact(t);continue}t.m_filterFlag=!1}var c=a.isAwake()&&!a.isStatic(),h=l.isAwake()&&!l.isStatic();if(!(c==!1&&h==!1)){var u=n.m_proxies[r].proxyId,f=s.m_proxies[o].proxyId,d=this.m_broadPhase.testOverlap(u,f);if(d==!1){this.destroyContact(t);continue}t.update(this)}}},i.prototype.destroyContact=function(t){t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_contactList&&(this.m_contactList=t.m_next),Wn.destroy(t,this),--this.m_contactCount},i.prototype.on=function(t,e){return typeof t!="string"||typeof e!="function"?this:(this._listeners||(this._listeners={}),this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this)},i.prototype.off=function(t,e){if(typeof t!="string"||typeof e!="function")return this;var n=this._listeners&&this._listeners[t];if(!n||!n.length)return this;var s=n.indexOf(e);return s>=0&&n.splice(s,1),this},i.prototype.publish=function(t,e,n,s){var r=this._listeners&&this._listeners[t];if(!r||!r.length)return 0;for(var o=0;o<r.length;o++)r[o].call(this,e,n,s);return r.length},i.prototype.beginContact=function(t){this.publish("begin-contact",t)},i.prototype.endContact=function(t){this.publish("end-contact",t)},i.prototype.preSolve=function(t,e){this.publish("pre-solve",t,e)},i.prototype.postSolve=function(t,e){this.publish("post-solve",t,e)},i})(),oe=(function(){function i(t,e,n){if(!(this instanceof i))return new i(t,e,n);typeof t>"u"?(this.x=0,this.y=0,this.z=0):typeof t=="object"?(this.x=t.x,this.y=t.y,this.z=t.z):(this.x=t,this.y=e,this.z=n)}return i.prototype._serialize=function(){return{x:this.x,y:this.y,z:this.z}},i._deserialize=function(t){var e=Object.create(i.prototype);return e.x=t.x,e.y=t.y,e.z=t.z,e},i.neo=function(t,e,n){var s=Object.create(i.prototype);return s.x=t,s.y=e,s.z=n,s},i.zero=function(){var t=Object.create(i.prototype);return t.x=0,t.y=0,t.z=0,t},i.clone=function(t){return i.neo(t.x,t.y,t.z)},i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)},i.assert=function(t){},i.prototype.setZero=function(){return this.x=0,this.y=0,this.z=0,this},i.prototype.set=function(t,e,n){return this.x=t,this.y=e,this.z=n,this},i.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},i.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},i.prototype.mul=function(t){return this.x*=t,this.y*=t,this.z*=t,this},i.areEqual=function(t,e){return t===e||typeof t=="object"&&t!==null&&typeof e=="object"&&e!==null&&t.x===e.x&&t.y===e.y&&t.z===e.z},i.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z},i.cross=function(t,e){return new i(t.y*e.z-t.z*e.y,t.z*e.x-t.x*e.z,t.x*e.y-t.y*e.x)},i.add=function(t,e){return new i(t.x+e.x,t.y+e.y,t.z+e.z)},i.sub=function(t,e){return new i(t.x-e.x,t.y-e.y,t.z-e.z)},i.mul=function(t,e){return new i(e*t.x,e*t.y,e*t.z)},i.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},i.neg=function(t){return new i(-t.x,-t.y,-t.z)},i})(),Af=X(0,0),Mf=X(0,0),Ds=(function(i){wi(t,i);function t(e,n){var s=this;return s instanceof t?(s=i.call(this)||this,s.m_type=t.TYPE,s.m_radius=ut.polygonRadius,s.m_vertex1=e?g.clone(e):g.zero(),s.m_vertex2=n?g.clone(n):g.zero(),s.m_vertex0=g.zero(),s.m_vertex3=g.zero(),s.m_hasVertex0=!1,s.m_hasVertex3=!1,s):new t(e,n)}return t.prototype._serialize=function(){return{type:this.m_type,vertex1:this.m_vertex1,vertex2:this.m_vertex2,vertex0:this.m_vertex0,vertex3:this.m_vertex3}},t._deserialize=function(e){var n=new t(e.vertex1,e.vertex2);return n.m_hasVertex0&&n.setPrevVertex(e.vertex0),n.m_hasVertex3&&n.setNextVertex(e.vertex3),n},t.prototype._reset=function(){},t.prototype.getRadius=function(){return this.m_radius},t.prototype.getType=function(){return this.m_type},t.prototype.setNext=function(e){return this.setNextVertex(e)},t.prototype.setNextVertex=function(e){return e?(this.m_vertex3.setVec2(e),this.m_hasVertex3=!0):(this.m_vertex3.setZero(),this.m_hasVertex3=!1),this},t.prototype.getNextVertex=function(){return this.m_vertex3},t.prototype.setPrev=function(e){return this.setPrevVertex(e)},t.prototype.setPrevVertex=function(e){return e?(this.m_vertex0.setVec2(e),this.m_hasVertex0=!0):(this.m_vertex0.setZero(),this.m_hasVertex0=!1),this},t.prototype.getPrevVertex=function(){return this.m_vertex0},t.prototype._set=function(e,n){return this.m_vertex1.setVec2(e),this.m_vertex2.setVec2(n),this.m_hasVertex0=!1,this.m_hasVertex3=!1,this},t.prototype._clone=function(){var e=new t;return e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_vertex1.setVec2(this.m_vertex1),e.m_vertex2.setVec2(this.m_vertex2),e.m_vertex0.setVec2(this.m_vertex0),e.m_vertex3.setVec2(this.m_vertex3),e.m_hasVertex0=this.m_hasVertex0,e.m_hasVertex3=this.m_hasVertex3,e},t.prototype.getChildCount=function(){return 1},t.prototype.testPoint=function(e,n){return!1},t.prototype.rayCast=function(e,n,s,r){var o=J.mulTVec2(s.q,g.sub(n.p1,s.p)),a=J.mulTVec2(s.q,g.sub(n.p2,s.p)),l=g.sub(a,o),c=this.m_vertex1,h=this.m_vertex2,u=g.sub(h,c),f=g.neo(u.y,-u.x);f.normalize();var d=g.dot(f,g.sub(c,o)),_=g.dot(f,l);if(_==0)return!1;var v=d/_;if(v<0||n.maxFraction<v)return!1;var p=g.add(o,g.mulNumVec2(v,l)),m=g.sub(h,c),x=g.dot(m,m);if(x==0)return!1;var y=g.dot(g.sub(p,c),m)/x;return y<0||1<y?!1:(e.fraction=v,d>0?e.normal=J.mulVec2(s.q,f).neg():e.normal=J.mulVec2(s.q,f),!0)},t.prototype.computeAABB=function(e,n,s){zt(Af,n,this.m_vertex1),zt(Mf,n,this.m_vertex2),di.combinePoints(e,Af,Mf),di.extend(e,this.m_radius)},t.prototype.computeMass=function(e,n){e.mass=0,Be(e.center,.5,this.m_vertex1,.5,this.m_vertex2),e.I=0},t.prototype.computeDistanceProxy=function(e){e.m_vertices[0]=this.m_vertex1,e.m_vertices[1]=this.m_vertex2,e.m_vertices.length=2,e.m_count=2,e.m_radius=this.m_radius},t.TYPE="edge",t})(Cr),Sf=X(0,0),bf=X(0,0),ua=(function(i){wi(t,i);function t(e,n){var s=this;return s instanceof t?(s=i.call(this)||this,s.m_type=t.TYPE,s.m_radius=ut.polygonRadius,s.m_vertices=[],s.m_count=0,s.m_prevVertex=null,s.m_nextVertex=null,s.m_hasPrevVertex=!1,s.m_hasNextVertex=!1,s.m_isLoop=!!n,e&&e.length&&(n?s._createLoop(e):s._createChain(e)),s):new t(e,n)}return t.prototype._serialize=function(){var e={type:this.m_type,vertices:this.m_isLoop?this.m_vertices.slice(0,this.m_vertices.length-1):this.m_vertices,isLoop:this.m_isLoop,hasPrevVertex:this.m_hasPrevVertex,hasNextVertex:this.m_hasNextVertex,prevVertex:null,nextVertex:null};return this.m_prevVertex&&(e.prevVertex=this.m_prevVertex),this.m_nextVertex&&(e.nextVertex=this.m_nextVertex),e},t._deserialize=function(e,n,s){var r=[];if(e.vertices)for(var o=0;o<e.vertices.length;o++)r.push(e.vertices[o]);var a=new t(r,e.isLoop);return e.prevVertex&&a.setPrevVertex(e.prevVertex),e.nextVertex&&a.setNextVertex(e.nextVertex),a},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype._createLoop=function(e){if(!(e.length<3)){var n;this.m_vertices=[],this.m_count=e.length+1;for(var n=0;n<e.length;++n)this.m_vertices[n]=g.clone(e[n]);return this.m_vertices[e.length]=g.clone(e[0]),this.m_prevVertex=this.m_vertices[this.m_count-2],this.m_nextVertex=this.m_vertices[1],this.m_hasPrevVertex=!0,this.m_hasNextVertex=!0,this}},t.prototype._createChain=function(e){var n;this.m_vertices=[],this.m_count=e.length;for(var n=0;n<e.length;++n)this.m_vertices[n]=g.clone(e[n]);return this.m_prevVertex=null,this.m_nextVertex=null,this.m_hasPrevVertex=!1,this.m_hasNextVertex=!1,this},t.prototype._reset=function(){this.m_isLoop?this._createLoop(this.m_vertices.slice(0,this.m_vertices.length-1)):this._createChain(this.m_vertices)},t.prototype.setPrevVertex=function(e){this.m_prevVertex=e,this.m_hasPrevVertex=!0},t.prototype.getPrevVertex=function(){return this.m_prevVertex},t.prototype.setNextVertex=function(e){this.m_nextVertex=e,this.m_hasNextVertex=!0},t.prototype.getNextVertex=function(){return this.m_nextVertex},t.prototype._clone=function(){var e=new t;return e._createChain(this.m_vertices),e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_prevVertex=this.m_prevVertex,e.m_nextVertex=this.m_nextVertex,e.m_hasPrevVertex=this.m_hasPrevVertex,e.m_hasNextVertex=this.m_hasNextVertex,e},t.prototype.getChildCount=function(){return this.m_count-1},t.prototype.getChildEdge=function(e,n){e.m_type=Ds.TYPE,e.m_radius=this.m_radius,e.m_vertex1=this.m_vertices[n],e.m_vertex2=this.m_vertices[n+1],n>0?(e.m_vertex0=this.m_vertices[n-1],e.m_hasVertex0=!0):(e.m_vertex0=this.m_prevVertex,e.m_hasVertex0=this.m_hasPrevVertex),n<this.m_count-2?(e.m_vertex3=this.m_vertices[n+2],e.m_hasVertex3=!0):(e.m_vertex3=this.m_nextVertex,e.m_hasVertex3=this.m_hasNextVertex)},t.prototype.getVertex=function(e){return e<this.m_count?this.m_vertices[e]:this.m_vertices[0]},t.prototype.isLoop=function(){return this.m_isLoop},t.prototype.testPoint=function(e,n){return!1},t.prototype.rayCast=function(e,n,s,r){var o=new Ds(this.getVertex(r),this.getVertex(r+1));return o.rayCast(e,n,s,0)},t.prototype.computeAABB=function(e,n,s){zt(Sf,n,this.getVertex(s)),zt(bf,n,this.getVertex(s+1)),di.combinePoints(e,Sf,bf)},t.prototype.computeMass=function(e,n){e.mass=0,Ct(e.center),e.I=0},t.prototype.computeDistanceProxy=function(e,n){e.m_vertices[0]=this.getVertex(n),e.m_vertices[1]=this.getVertex(n+1),e.m_count=2,e.m_radius=this.m_radius},t.TYPE="chain",t})(Cr),wf=Math.max,Hc=Math.min,hr=X(0,0),Tf=X(0,0),Vo=X(0,0),Qr=X(0,0),js=X(0,0),Ms=X(0,0),Us=(function(i){wi(t,i);function t(e){var n=this;return n instanceof t?(n=i.call(this)||this,n.m_type=t.TYPE,n.m_radius=ut.polygonRadius,n.m_centroid=g.zero(),n.m_vertices=[],n.m_normals=[],n.m_count=0,e&&e.length&&n._set(e),n):new t(e)}return t.prototype._serialize=function(){return{type:this.m_type,vertices:this.m_vertices}},t._deserialize=function(e,n,s){var r=[];if(e.vertices)for(var o=0;o<e.vertices.length;o++)r.push(e.vertices[o]);var a=new t(r);return a},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype._clone=function(){var e=new t;e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_count=this.m_count,e.m_centroid.setVec2(this.m_centroid);for(var n=0;n<this.m_count;n++)e.m_vertices.push(this.m_vertices[n].clone());for(var n=0;n<this.m_normals.length;n++)e.m_normals.push(this.m_normals[n].clone());return e},t.prototype.getChildCount=function(){return 1},t.prototype._reset=function(){this._set(this.m_vertices)},t.prototype._set=function(e){if(e.length<3){this._setAsBox(1,1);return}for(var n=Hc(e.length,ut.maxPolygonVertices),s=[],r=0;r<n;++r){for(var o=e[r],a=!0,l=0;l<s.length;++l)if(g.distanceSquared(o,s[l])<.25*ut.linearSlopSquared){a=!1;break}a&&s.push(g.clone(o))}if(n=s.length,n<3){this._setAsBox(1,1);return}for(var c=0,h=s[0].x,r=1;r<n;++r){var u=s[r].x;(u>h||u===h&&s[r].y<s[c].y)&&(c=r,h=u)}for(var f=[],d=0,_=c;;){f[d]=_;for(var v=0,l=1;l<n;++l){if(v===_){v=l;continue}var p=g.sub(s[v],s[f[d]]),o=g.sub(s[l],s[f[d]]),m=g.crossVec2Vec2(p,o);m<0&&(v=l),m===0&&o.lengthSquared()>p.lengthSquared()&&(v=l)}if(++d,_=v,v===c)break}if(d<3){this._setAsBox(1,1);return}this.m_count=d,this.m_vertices=[];for(var r=0;r<d;++r)this.m_vertices[r]=s[f[r]];for(var r=0;r<d;++r){var x=r,y=r+1<d?r+1:0,A=g.sub(this.m_vertices[y],this.m_vertices[x]);this.m_normals[r]=g.crossVec2Num(A,1),this.m_normals[r].normalize()}this.m_centroid=tb(this.m_vertices,d)},t.prototype._setAsBox=function(e,n,s,r){if(this.m_vertices[0]=g.neo(e,-n),this.m_vertices[1]=g.neo(e,n),this.m_vertices[2]=g.neo(-e,n),this.m_vertices[3]=g.neo(-e,-n),this.m_normals[0]=g.neo(1,0),this.m_normals[1]=g.neo(0,1),this.m_normals[2]=g.neo(-1,0),this.m_normals[3]=g.neo(0,-1),this.m_count=4,s&&g.isValid(s)){r=r||0,V(this.m_centroid,s);var o=Bn.identity();o.p.setVec2(s),o.q.setAngle(r);for(var a=0;a<this.m_count;++a)this.m_vertices[a]=Bn.mulVec2(o,this.m_vertices[a]),this.m_normals[a]=J.mulVec2(o.q,this.m_normals[a])}},t.prototype.testPoint=function(e,n){for(var s=uu(hr,e,n),r=0;r<this.m_count;++r){var o=st(this.m_normals[r],s)-st(this.m_normals[r],this.m_vertices[r]);if(o>0)return!1}return!0},t.prototype.rayCast=function(e,n,s,r){for(var o=J.mulTVec2(s.q,g.sub(n.p1,s.p)),a=J.mulTVec2(s.q,g.sub(n.p2,s.p)),l=g.sub(a,o),c=0,h=n.maxFraction,u=-1,f=0;f<this.m_count;++f){var d=g.dot(this.m_normals[f],g.sub(this.m_vertices[f],o)),_=g.dot(this.m_normals[f],l);if(_==0){if(d<0)return!1}else _<0&&d<c*_?(c=d/_,u=f):_>0&&d<h*_&&(h=d/_);if(h<c)return!1}return u>=0?(e.fraction=c,e.normal=J.mulVec2(s.q,this.m_normals[u]),!0):!1},t.prototype.computeAABB=function(e,n,s){for(var r=1/0,o=1/0,a=-1/0,l=-1/0,c=0;c<this.m_count;++c){var h=zt(hr,n,this.m_vertices[c]);r=Hc(r,h.x),a=wf(a,h.x),o=Hc(o,h.y),l=wf(l,h.y)}oi(e.lowerBound,r-this.m_radius,o-this.m_radius),oi(e.upperBound,a+this.m_radius,l+this.m_radius)},t.prototype.computeMass=function(e,n){Ct(js);var s=0,r=0;Ct(Ms);for(var o=0;o<this.m_count;++o)ln(Ms,this.m_vertices[o]);Lt(Ms,1/this.m_count,Ms);for(var a=1/3,o=0;o<this.m_count;++o){Vt(Vo,this.m_vertices[o],Ms),o+1<this.m_count?Vt(Qr,this.m_vertices[o+1],Ms):Vt(Qr,this.m_vertices[0],Ms);var l=Jt(Vo,Qr),c=.5*l;s+=c,Be(hr,c*a,Vo,c*a,Qr),ln(js,hr);var h=Vo.x,u=Vo.y,f=Qr.x,d=Qr.y,_=h*h+f*h+f*f,v=u*u+d*u+d*d;r+=.25*a*l*(_+v)}e.mass=n*s,Lt(js,1/s,js),RS(e.center,js,Ms),e.I=n*r,e.I+=e.mass*(st(e.center,e.center)-st(js,js))},t.prototype.validate=function(){for(var e=0;e<this.m_count;++e){var n=e,s=e<this.m_count-1?n+1:0,r=this.m_vertices[n];Vt(Tf,this.m_vertices[s],r);for(var o=0;o<this.m_count;++o)if(!(o==n||o==s)){var a=Jt(Tf,Vt(hr,this.m_vertices[o],r));if(a<0)return!1}}return!0},t.prototype.computeDistanceProxy=function(e){for(var n=0;n<this.m_count;++n)e.m_vertices[n]=this.m_vertices[n];e.m_vertices.length=this.m_count,e.m_count=this.m_count,e.m_radius=this.m_radius},t.TYPE="polygon",t})(Cr);function tb(i,t){for(var e=g.zero(),n=0,s=g.zero(),r,o=1/3,r=0;r<t;++r){var a=s,l=i[r],c=r+1<t?i[r+1]:i[0],h=g.sub(l,a),u=g.sub(c,a),f=g.crossVec2Vec2(h,u),d=.5*f;n+=d,zn(hr,1,a,1,l,1,c),Cn(e,d*o,hr)}return e.mul(1/n),e}var eb=Math.sqrt,ib=Math.PI,Ef=X(0,0),Ns=(function(i){wi(t,i);function t(e,n){var s=this;return s instanceof t?(s=i.call(this)||this,s.m_type=t.TYPE,s.m_p=g.zero(),s.m_radius=1,typeof e=="object"&&g.isValid(e)?(s.m_p.setVec2(e),typeof n=="number"&&(s.m_radius=n)):typeof e=="number"&&(s.m_radius=e),s):new t(e,n)}return t.prototype._serialize=function(){return{type:this.m_type,p:this.m_p,radius:this.m_radius}},t._deserialize=function(e){return new t(e.p,e.radius)},t.prototype._reset=function(){},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype.getCenter=function(){return this.m_p},t.prototype._clone=function(){var e=new t;return e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_p=this.m_p.clone(),e},t.prototype.getChildCount=function(){return 1},t.prototype.testPoint=function(e,n){var s=zt(Ef,e,this.m_p);return _r(n,s)<=this.m_radius*this.m_radius},t.prototype.rayCast=function(e,n,s,r){var o=g.add(s.p,J.mulVec2(s.q,this.m_p)),a=g.sub(n.p1,o),l=g.dot(a,a)-this.m_radius*this.m_radius,c=g.sub(n.p2,n.p1),h=g.dot(a,c),u=g.dot(c,c),f=h*h-u*l;if(f<0||u<Bi)return!1;var d=-(h+eb(f));return 0<=d&&d<=n.maxFraction*u?(d/=u,e.fraction=d,e.normal=g.add(a,g.mulNumVec2(d,c)),e.normal.normalize(),!0):!1},t.prototype.computeAABB=function(e,n,s){var r=zt(Ef,n,this.m_p);oi(e.lowerBound,r.x-this.m_radius,r.y-this.m_radius),oi(e.upperBound,r.x+this.m_radius,r.y+this.m_radius)},t.prototype.computeMass=function(e,n){e.mass=n*ib*this.m_radius*this.m_radius,V(e.center,this.m_p),e.I=e.mass*(.5*this.m_radius*this.m_radius+pr(this.m_p))},t.prototype.computeDistanceProxy=function(e){e.m_vertices[0]=this.m_p,e.m_vertices.length=1,e.m_count=1,e.m_radius=this.m_radius},t.TYPE="circle",t})(Cr),nb=Math.abs,sb=Math.PI,rb={frequencyHz:0,dampingRatio:0},Cf=(function(i){wi(t,i);function t(e,n,s,r,o){var a=this;if(!(a instanceof t))return new t(e,n,s,r,o);if(s&&r&&"m_type"in r&&"x"in s&&"y"in s){var l=s;s=r,r=l}return e=Ji(e,rb),a=i.call(this,e,n,s)||this,n=a.m_bodyA,s=a.m_bodyB,a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(o?s.getLocalPoint(o):e.localAnchorB||g.zero()),a.m_length=Number.isFinite(e.length)?e.length:g.distance(n.getWorldPoint(a.m_localAnchorA),s.getWorldPoint(a.m_localAnchorB)),a.m_frequencyHz=e.frequencyHz,a.m_dampingRatio=e.dampingRatio,a.m_impulse=0,a.m_gamma=0,a.m_bias=0,a}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,length:this.m_length}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.length>0?this.m_length=+e.length:e.length<0||(e.anchorA||e.anchorA||e.anchorA||e.anchorA)&&(this.m_length=g.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA),this.m_bodyB.getWorldPoint(this.m_localAnchorB))),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setLength=function(e){this.m_length=e},t.prototype.getLength=function(){return this.m_length},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_u).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=J.neo(s),f=J.neo(l);this.m_rA=J.mulVec2(u,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=J.mulVec2(f,g.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_u=g.sub(g.add(a,this.m_rB),g.add(n,this.m_rA));var d=this.m_u.length();d>ut.linearSlop?this.m_u.mul(1/d):this.m_u.setNum(0,0);var _=g.crossVec2Vec2(this.m_rA,this.m_u),v=g.crossVec2Vec2(this.m_rB,this.m_u),p=this.m_invMassA+this.m_invIA*_*_+this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=p!=0?1/p:0,this.m_frequencyHz>0){var m=d-this.m_length,x=2*sb*this.m_frequencyHz,y=2*this.m_mass*this.m_dampingRatio*x,A=this.m_mass*x*x,C=e.dt;this.m_gamma=C*(y+C*A),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=m*C*A*this.m_gamma,p+=this.m_gamma,this.m_mass=p!=0?1/p:0}else this.m_gamma=0,this.m_bias=0;if(e.warmStarting){this.m_impulse*=e.dtRatio;var T=g.mulNumVec2(this.m_impulse,this.m_u);r.subMul(this.m_invMassA,T),o-=this.m_invIA*g.crossVec2Vec2(this.m_rA,T),c.addMul(this.m_invMassB,T),h+=this.m_invIB*g.crossVec2Vec2(this.m_rB,T)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.add(n,g.crossNumVec2(s,this.m_rA)),l=g.add(r,g.crossNumVec2(o,this.m_rB)),c=g.dot(this.m_u,l)-g.dot(this.m_u,a),h=-this.m_mass*(c+this.m_bias+this.m_gamma*this.m_impulse);this.m_impulse+=h;var u=g.mulNumVec2(h,this.m_u);n.subMul(this.m_invMassA,u),s-=this.m_invIA*g.crossVec2Vec2(this.m_rA,u),r.addMul(this.m_invMassB,u),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,u),this.m_bodyA.c_velocity.v.setVec2(n),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.setVec2(r),this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){if(this.m_frequencyHz>0)return!0;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=J.neo(s),l=J.neo(o),c=J.mulSub(a,this.m_localAnchorA,this.m_localCenterA),h=J.mulSub(l,this.m_localAnchorB,this.m_localCenterB),u=g.sub(g.add(r,h),g.add(n,c)),f=u.normalize(),d=li(f-this.m_length,-ut.maxLinearCorrection,ut.maxLinearCorrection),_=-this.m_mass*d,v=g.mulNumVec2(_,u);return n.subMul(this.m_invMassA,v),s-=this.m_invIA*g.crossVec2Vec2(c,v),r.addMul(this.m_invMassB,v),o+=this.m_invIB*g.crossVec2Vec2(h,v),this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,nb(d)<ut.linearSlop},t.TYPE="distance-joint",t})(Ai),ob={maxForce:0,maxTorque:0},Rf=(function(i){wi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=Ji(e,ob),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),o.m_linearImpulse=g.zero(),o.m_angularImpulse=0,o.m_maxForce=e.maxForce,o.m_maxTorque=e.maxTorque,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.maxTorque)&&(this.m_maxTorque=e.maxTorque)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setMaxTorque=function(e){this.m_maxTorque=e},t.prototype.getMaxTorque=function(){return this.m_maxTorque},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_linearImpulse)},t.prototype.getReactionTorque=function(e){return e*this.m_angularImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=J.neo(n),h=J.neo(o);this.m_rA=J.mulVec2(c,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=J.mulVec2(h,g.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,f=this.m_invMassB,d=this.m_invIA,_=this.m_invIB,v=new In;if(v.ex.x=u+f+d*this.m_rA.y*this.m_rA.y+_*this.m_rB.y*this.m_rB.y,v.ex.y=-d*this.m_rA.x*this.m_rA.y-_*this.m_rB.x*this.m_rB.y,v.ey.x=v.ex.y,v.ey.y=u+f+d*this.m_rA.x*this.m_rA.x+_*this.m_rB.x*this.m_rB.x,this.m_linearMass=v.getInverse(),this.m_angularMass=d+_,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),e.warmStarting){this.m_linearImpulse.mul(e.dtRatio),this.m_angularImpulse*=e.dtRatio;var p=g.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);s.subMul(u,p),r-=d*(g.crossVec2Vec2(this.m_rA,p)+this.m_angularImpulse),a.addMul(f,p),l+=_*(g.crossVec2Vec2(this.m_rB,p)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB,u=e.dt;{var f=o-s,d=-this.m_angularMass*f,_=this.m_angularImpulse,v=u*this.m_maxTorque;this.m_angularImpulse=li(this.m_angularImpulse+d,-v,v),d=this.m_angularImpulse-_,s-=c*d,o+=h*d}{var f=g.sub(g.add(r,g.crossNumVec2(o,this.m_rB)),g.add(n,g.crossNumVec2(s,this.m_rA))),d=g.neg(In.mulVec2(this.m_linearMass,f)),_=this.m_linearImpulse;this.m_linearImpulse.add(d);var v=u*this.m_maxForce;this.m_linearImpulse.lengthSquared()>v*v&&(this.m_linearImpulse.normalize(),this.m_linearImpulse.mul(v)),d=g.sub(this.m_linearImpulse,_),n.subMul(a,d),s-=c*g.crossVec2Vec2(this.m_rA,d),r.addMul(l,d),o+=h*g.crossVec2Vec2(this.m_rB,d)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="friction-joint",t})(Ai),Rs=(function(){function i(t,e,n){typeof t=="object"&&t!==null?(this.ex=oe.clone(t),this.ey=oe.clone(e),this.ez=oe.clone(n)):(this.ex=oe.zero(),this.ey=oe.zero(),this.ez=oe.zero())}return i.prototype.toString=function(){return JSON.stringify(this)},i.isValid=function(t){return t===null||typeof t>"u"?!1:oe.isValid(t.ex)&&oe.isValid(t.ey)&&oe.isValid(t.ez)},i.assert=function(t){},i.prototype.setZero=function(){return this.ex.setZero(),this.ey.setZero(),this.ez.setZero(),this},i.prototype.solve33=function(t){var e=this.ey.y*this.ez.z-this.ey.z*this.ez.y,n=this.ey.z*this.ez.x-this.ey.x*this.ez.z,s=this.ey.x*this.ez.y-this.ey.y*this.ez.x,r=this.ex.x*e+this.ex.y*n+this.ex.z*s;r!==0&&(r=1/r);var o=new oe;return e=this.ey.y*this.ez.z-this.ey.z*this.ez.y,n=this.ey.z*this.ez.x-this.ey.x*this.ez.z,s=this.ey.x*this.ez.y-this.ey.y*this.ez.x,o.x=r*(t.x*e+t.y*n+t.z*s),e=t.y*this.ez.z-t.z*this.ez.y,n=t.z*this.ez.x-t.x*this.ez.z,s=t.x*this.ez.y-t.y*this.ez.x,o.y=r*(this.ex.x*e+this.ex.y*n+this.ex.z*s),e=this.ey.y*t.z-this.ey.z*t.y,n=this.ey.z*t.x-this.ey.x*t.z,s=this.ey.x*t.y-this.ey.y*t.x,o.z=r*(this.ex.x*e+this.ex.y*n+this.ex.z*s),o},i.prototype.solve22=function(t){var e=this.ex.x,n=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-n*s;o!==0&&(o=1/o);var a=g.zero();return a.x=o*(r*t.x-n*t.y),a.y=o*(e*t.y-s*t.x),a},i.prototype.getInverse22=function(t){var e=this.ex.x,n=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-n*s;o!==0&&(o=1/o),t.ex.x=o*r,t.ey.x=-o*n,t.ex.z=0,t.ex.y=-o*s,t.ey.y=o*e,t.ey.z=0,t.ez.x=0,t.ez.y=0,t.ez.z=0},i.prototype.getSymInverse33=function(t){var e=oe.dot(this.ex,oe.cross(this.ey,this.ez));e!==0&&(e=1/e);var n=this.ex.x,s=this.ey.x,r=this.ez.x,o=this.ey.y,a=this.ez.y,l=this.ez.z;t.ex.x=e*(o*l-a*a),t.ex.y=e*(r*a-s*l),t.ex.z=e*(s*a-r*o),t.ey.x=t.ex.y,t.ey.y=e*(n*l-r*r),t.ey.z=e*(r*s-n*a),t.ez.x=t.ex.z,t.ez.y=t.ey.z,t.ez.z=e*(n*o-s*s)},i.mul=function(t,e){if(e&&"z"in e&&"y"in e&&"x"in e){var n=t.ex.x*e.x+t.ey.x*e.y+t.ez.x*e.z,s=t.ex.y*e.x+t.ey.y*e.y+t.ez.y*e.z,r=t.ex.z*e.x+t.ey.z*e.y+t.ez.z*e.z;return new oe(n,s,r)}else if(e&&"y"in e&&"x"in e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)}},i.mulVec3=function(t,e){var n=t.ex.x*e.x+t.ey.x*e.y+t.ez.x*e.z,s=t.ex.y*e.x+t.ey.y*e.y+t.ez.y*e.z,r=t.ex.z*e.x+t.ey.z*e.y+t.ez.z*e.z;return new oe(n,s,r)},i.mulVec2=function(t,e){var n=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(n,s)},i.add=function(t,e){return new i(oe.add(t.ex,e.ex),oe.add(t.ey,e.ey),oe.add(t.ez,e.ez))},i})(),Pf=Math.abs,je;(function(i){i[i.inactiveLimit=0]="inactiveLimit",i[i.atLowerLimit=1]="atLowerLimit",i[i.atUpperLimit=2]="atUpperLimit",i[i.equalLimits=3]="equalLimits"})(je||(je={}));var to={lowerAngle:0,upperAngle:0,maxMotorTorque:0,motorSpeed:0,enableLimit:!1,enableMotor:!1},Cs=(function(i){wi(t,i);function t(e,n,s,r){var o=this,a,l,c,h,u,f;return o instanceof t?(e=e??{},o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_mass=new Rs,o.m_limitState=je.inactiveLimit,o.m_type=t.TYPE,g.isValid(r)?o.m_localAnchorA=n.getLocalPoint(r):g.isValid(e.localAnchorA)?o.m_localAnchorA=g.clone(e.localAnchorA):o.m_localAnchorA=g.zero(),g.isValid(r)?o.m_localAnchorB=s.getLocalPoint(r):g.isValid(e.localAnchorB)?o.m_localAnchorB=g.clone(e.localAnchorB):o.m_localAnchorB=g.zero(),Number.isFinite(e.referenceAngle)?o.m_referenceAngle=e.referenceAngle:o.m_referenceAngle=s.getAngle()-n.getAngle(),o.m_impulse=new oe,o.m_motorImpulse=0,o.m_lowerAngle=(a=e.lowerAngle)!==null&&a!==void 0?a:to.lowerAngle,o.m_upperAngle=(l=e.upperAngle)!==null&&l!==void 0?l:to.upperAngle,o.m_maxMotorTorque=(c=e.maxMotorTorque)!==null&&c!==void 0?c:to.maxMotorTorque,o.m_motorSpeed=(h=e.motorSpeed)!==null&&h!==void 0?h:to.motorSpeed,o.m_enableLimit=(u=e.enableLimit)!==null&&u!==void 0?u:to.enableLimit,o.m_enableMotor=(f=e.enableMotor)!==null&&f!==void 0?f:to.enableMotor,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerAngle:this.m_lowerAngle,upperAngle:this.m_upperAngle,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.referenceAngle)&&(this.m_referenceAngle=e.referenceAngle),e.enableLimit!==void 0&&(this.m_enableLimit=e.enableLimit),Number.isFinite(e.lowerAngle)&&(this.m_lowerAngle=e.lowerAngle),Number.isFinite(e.upperAngle)&&(this.m_upperAngle=e.upperAngle),Number.isFinite(e.maxMotorTorque)&&(this.m_maxMotorTorque=e.maxMotorTorque),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed),e.enableMotor!==void 0&&(this.m_enableMotor=e.enableMotor)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.getJointAngle=function(){var e=this.m_bodyA,n=this.m_bodyB;return n.m_sweep.a-e.m_sweep.a-this.m_referenceAngle},t.prototype.getJointSpeed=function(){var e=this.m_bodyA,n=this.m_bodyB;return n.m_angularVelocity-e.m_angularVelocity},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.getMotorTorque=function(e){return e*this.m_motorImpulse},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.setMaxMotorTorque=function(e){e!=this.m_maxMotorTorque&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=e)},t.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},t.prototype.isLimitEnabled=function(){return this.m_enableLimit},t.prototype.enableLimit=function(e){e!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=e,this.m_impulse.z=0)},t.prototype.getLowerLimit=function(){return this.m_lowerAngle},t.prototype.getUpperLimit=function(){return this.m_upperAngle},t.prototype.setLimits=function(e,n){(e!=this.m_lowerAngle||n!=this.m_upperAngle)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_impulse.z=0,this.m_lowerAngle=e,this.m_upperAngle=n)},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.neo(this.m_impulse.x,this.m_impulse.y).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.z},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=J.neo(n),h=J.neo(o);this.m_rA=J.mulVec2(c,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=J.mulVec2(h,g.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,f=this.m_invMassB,d=this.m_invIA,_=this.m_invIB,v=d+_===0;if(this.m_mass.ex.x=u+f+this.m_rA.y*this.m_rA.y*d+this.m_rB.y*this.m_rB.y*_,this.m_mass.ey.x=-this.m_rA.y*this.m_rA.x*d-this.m_rB.y*this.m_rB.x*_,this.m_mass.ez.x=-this.m_rA.y*d-this.m_rB.y*_,this.m_mass.ex.y=this.m_mass.ey.x,this.m_mass.ey.y=u+f+this.m_rA.x*this.m_rA.x*d+this.m_rB.x*this.m_rB.x*_,this.m_mass.ez.y=this.m_rA.x*d+this.m_rB.x*_,this.m_mass.ex.z=this.m_mass.ez.x,this.m_mass.ey.z=this.m_mass.ez.y,this.m_mass.ez.z=d+_,this.m_motorMass=d+_,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass),(this.m_enableMotor==!1||v)&&(this.m_motorImpulse=0),this.m_enableLimit&&v==!1){var p=o-n-this.m_referenceAngle;Pf(this.m_upperAngle-this.m_lowerAngle)<2*ut.angularSlop?this.m_limitState=je.equalLimits:p<=this.m_lowerAngle?(this.m_limitState!=je.atLowerLimit&&(this.m_impulse.z=0),this.m_limitState=je.atLowerLimit):p>=this.m_upperAngle?(this.m_limitState!=je.atUpperLimit&&(this.m_impulse.z=0),this.m_limitState=je.atUpperLimit):(this.m_limitState=je.inactiveLimit,this.m_impulse.z=0)}else this.m_limitState=je.inactiveLimit;if(e.warmStarting){this.m_impulse.mul(e.dtRatio),this.m_motorImpulse*=e.dtRatio;var m=g.neo(this.m_impulse.x,this.m_impulse.y);s.subMul(u,m),r-=d*(g.crossVec2Vec2(this.m_rA,m)+this.m_motorImpulse+this.m_impulse.z),a.addMul(f,m),l+=_*(g.crossVec2Vec2(this.m_rB,m)+this.m_motorImpulse+this.m_impulse.z)}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB,u=c+h===0;if(this.m_enableMotor&&this.m_limitState!=je.equalLimits&&u==!1){var f=o-s-this.m_motorSpeed,d=-this.m_motorMass*f,_=this.m_motorImpulse,v=e.dt*this.m_maxMotorTorque;this.m_motorImpulse=li(this.m_motorImpulse+d,-v,v),d=this.m_motorImpulse-_,s-=c*d,o+=h*d}if(this.m_enableLimit&&this.m_limitState!=je.inactiveLimit&&u==!1){var p=g.zero();p.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),p.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var m=o-s,f=new oe(p.x,p.y,m),d=oe.neg(this.m_mass.solve33(f));if(this.m_limitState==je.equalLimits)this.m_impulse.add(d);else if(this.m_limitState==je.atLowerLimit){var x=this.m_impulse.z+d.z;if(x<0){var y=g.combine(-1,p,this.m_impulse.z,g.neo(this.m_mass.ez.x,this.m_mass.ez.y)),A=this.m_mass.solve22(y);d.x=A.x,d.y=A.y,d.z=-this.m_impulse.z,this.m_impulse.x+=A.x,this.m_impulse.y+=A.y,this.m_impulse.z=0}else this.m_impulse.add(d)}else if(this.m_limitState==je.atUpperLimit){var x=this.m_impulse.z+d.z;if(x>0){var y=g.combine(-1,p,this.m_impulse.z,g.neo(this.m_mass.ez.x,this.m_mass.ez.y)),A=this.m_mass.solve22(y);d.x=A.x,d.y=A.y,d.z=-this.m_impulse.z,this.m_impulse.x+=A.x,this.m_impulse.y+=A.y,this.m_impulse.z=0}else this.m_impulse.add(d)}var C=g.neo(d.x,d.y);n.subMul(a,C),s-=c*(g.crossVec2Vec2(this.m_rA,C)+d.z),r.addMul(l,C),o+=h*(g.crossVec2Vec2(this.m_rB,C)+d.z)}else{var f=g.zero();f.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),f.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var d=this.m_mass.solve22(g.neg(f));this.m_impulse.x+=d.x,this.m_impulse.y+=d.y,n.subMul(a,d),s-=c*g.crossVec2Vec2(this.m_rA,d),r.addMul(l,d),o+=h*g.crossVec2Vec2(this.m_rB,d)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=J.neo(s),l=J.neo(o),c=0,h=0,u=this.m_invIA+this.m_invIB==0;if(this.m_enableLimit&&this.m_limitState!=je.inactiveLimit&&u==!1){var f=o-s-this.m_referenceAngle,d=0;if(this.m_limitState==je.equalLimits){var _=li(f-this.m_lowerAngle,-ut.maxAngularCorrection,ut.maxAngularCorrection);d=-this.m_motorMass*_,c=Pf(_)}else if(this.m_limitState==je.atLowerLimit){var _=f-this.m_lowerAngle;c=-_,_=li(_+ut.angularSlop,-ut.maxAngularCorrection,0),d=-this.m_motorMass*_}else if(this.m_limitState==je.atUpperLimit){var _=f-this.m_upperAngle;c=_,_=li(_-ut.angularSlop,0,ut.maxAngularCorrection),d=-this.m_motorMass*_}s-=this.m_invIA*d,o+=this.m_invIB*d}{a.setAngle(s),l.setAngle(o);var v=J.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),p=J.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),_=g.zero();_.addCombine(1,r,1,p),_.subCombine(1,n,1,v),h=_.length();var m=this.m_invMassA,x=this.m_invMassB,y=this.m_invIA,A=this.m_invIB,C=new In;C.ex.x=m+x+y*v.y*v.y+A*p.y*p.y,C.ex.y=-y*v.x*v.y-A*p.x*p.y,C.ey.x=C.ex.y,C.ey.y=m+x+y*v.x*v.x+A*p.x*p.x;var T=g.neg(C.solve(_));n.subMul(m,T),s-=y*g.crossVec2Vec2(v,T),r.addMul(x,T),o+=A*g.crossVec2Vec2(p,T)}return this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,h<=ut.linearSlop&&c<=ut.angularSlop},t.TYPE="revolute-joint",t})(Ai),Ho=Math.abs,Bf=Math.max,ab=Math.min,Fi;(function(i){i[i.inactiveLimit=0]="inactiveLimit",i[i.atLowerLimit=1]="atLowerLimit",i[i.atUpperLimit=2]="atUpperLimit",i[i.equalLimits=3]="equalLimits"})(Fi||(Fi={}));var lb={enableLimit:!1,lowerTranslation:0,upperTranslation:0,enableMotor:!1,maxMotorForce:0,motorSpeed:0},If=(function(i){wi(t,i);function t(e,n,s,r,o){var a=this;return a instanceof t?(e=Ji(e,lb),a=i.call(this,e,n,s)||this,n=a.m_bodyA,s=a.m_bodyB,a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),a.m_localXAxisA=g.clone(o?n.getLocalVector(o):e.localAxisA||g.neo(1,0)),a.m_localXAxisA.normalize(),a.m_localYAxisA=g.crossNumVec2(1,a.m_localXAxisA),a.m_referenceAngle=Number.isFinite(e.referenceAngle)?e.referenceAngle:s.getAngle()-n.getAngle(),a.m_impulse=new oe,a.m_motorMass=0,a.m_motorImpulse=0,a.m_lowerTranslation=e.lowerTranslation,a.m_upperTranslation=e.upperTranslation,a.m_maxMotorForce=e.maxMotorForce,a.m_motorSpeed=e.motorSpeed,a.m_enableLimit=e.enableLimit,a.m_enableMotor=e.enableMotor,a.m_limitState=Fi.inactiveLimit,a.m_axis=g.zero(),a.m_perp=g.zero(),a.m_K=new Rs,a):new t(e,n,s,r,o)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerTranslation:this.m_lowerTranslation,upperTranslation:this.m_upperTranslation,maxMotorForce:this.m_maxMotorForce,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n),e.localAxisA=g.clone(e.localAxisA);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.localAxisA&&(this.m_localXAxisA.setVec2(e.localAxisA),this.m_localYAxisA.setVec2(g.crossNumVec2(1,e.localAxisA))),Number.isFinite(e.referenceAngle)&&(this.m_referenceAngle=e.referenceAngle),typeof e.enableLimit<"u"&&(this.m_enableLimit=!!e.enableLimit),Number.isFinite(e.lowerTranslation)&&(this.m_lowerTranslation=e.lowerTranslation),Number.isFinite(e.upperTranslation)&&(this.m_upperTranslation=e.upperTranslation),typeof e.enableMotor<"u"&&(this.m_enableMotor=!!e.enableMotor),Number.isFinite(e.maxMotorForce)&&(this.m_maxMotorForce=e.maxMotorForce),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getLocalAxisA=function(){return this.m_localXAxisA},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.getJointTranslation=function(){var e=this.m_bodyA.getWorldPoint(this.m_localAnchorA),n=this.m_bodyB.getWorldPoint(this.m_localAnchorB),s=g.sub(n,e),r=this.m_bodyA.getWorldVector(this.m_localXAxisA),o=g.dot(s,r);return o},t.prototype.getJointSpeed=function(){var e=this.m_bodyA,n=this.m_bodyB,s=J.mulVec2(e.m_xf.q,g.sub(this.m_localAnchorA,e.m_sweep.localCenter)),r=J.mulVec2(n.m_xf.q,g.sub(this.m_localAnchorB,n.m_sweep.localCenter)),o=g.add(e.m_sweep.c,s),a=g.add(n.m_sweep.c,r),l=g.sub(a,o),c=J.mulVec2(e.m_xf.q,this.m_localXAxisA),h=e.m_linearVelocity,u=n.m_linearVelocity,f=e.m_angularVelocity,d=n.m_angularVelocity,_=g.dot(l,g.crossNumVec2(f,c))+g.dot(c,g.sub(g.addCrossNumVec2(u,d,r),g.addCrossNumVec2(h,f,s)));return _},t.prototype.isLimitEnabled=function(){return this.m_enableLimit},t.prototype.enableLimit=function(e){e!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=e,this.m_impulse.z=0)},t.prototype.getLowerLimit=function(){return this.m_lowerTranslation},t.prototype.getUpperLimit=function(){return this.m_upperTranslation},t.prototype.setLimits=function(e,n){(e!=this.m_lowerTranslation||n!=this.m_upperTranslation)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_lowerTranslation=e,this.m_upperTranslation=n,this.m_impulse.z=0)},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.setMaxMotorForce=function(e){e!=this.m_maxMotorForce&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorForce=e)},t.prototype.getMaxMotorForce=function(){return this.m_maxMotorForce},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.getMotorForce=function(e){return e*this.m_motorImpulse},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.y},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=J.neo(s),f=J.neo(l),d=J.mulVec2(u,g.sub(this.m_localAnchorA,this.m_localCenterA)),_=J.mulVec2(f,g.sub(this.m_localAnchorB,this.m_localCenterB)),v=g.zero();v.addCombine(1,a,1,_),v.subCombine(1,n,1,d);var p=this.m_invMassA,m=this.m_invMassB,x=this.m_invIA,y=this.m_invIB;this.m_axis=J.mulVec2(u,this.m_localXAxisA),this.m_a1=g.crossVec2Vec2(g.add(v,d),this.m_axis),this.m_a2=g.crossVec2Vec2(_,this.m_axis),this.m_motorMass=p+m+x*this.m_a1*this.m_a1+y*this.m_a2*this.m_a2,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass);{this.m_perp=J.mulVec2(u,this.m_localYAxisA),this.m_s1=g.crossVec2Vec2(g.add(v,d),this.m_perp),this.m_s2=g.crossVec2Vec2(_,this.m_perp),g.crossVec2Vec2(d,this.m_perp);var A=p+m+x*this.m_s1*this.m_s1+y*this.m_s2*this.m_s2,C=x*this.m_s1+y*this.m_s2,T=x*this.m_s1*this.m_a1+y*this.m_s2*this.m_a2,E=x+y;E==0&&(E=1);var P=x*this.m_a1+y*this.m_a2,b=p+m+x*this.m_a1*this.m_a1+y*this.m_a2*this.m_a2;this.m_K.ex.set(A,C,T),this.m_K.ey.set(C,E,P),this.m_K.ez.set(T,P,b)}if(this.m_enableLimit){var M=g.dot(this.m_axis,v);Ho(this.m_upperTranslation-this.m_lowerTranslation)<2*ut.linearSlop?this.m_limitState=Fi.equalLimits:M<=this.m_lowerTranslation?this.m_limitState!=Fi.atLowerLimit&&(this.m_limitState=Fi.atLowerLimit,this.m_impulse.z=0):M>=this.m_upperTranslation?this.m_limitState!=Fi.atUpperLimit&&(this.m_limitState=Fi.atUpperLimit,this.m_impulse.z=0):(this.m_limitState=Fi.inactiveLimit,this.m_impulse.z=0)}else this.m_limitState=Fi.inactiveLimit,this.m_impulse.z=0;if(this.m_enableMotor==!1&&(this.m_motorImpulse=0),e.warmStarting){this.m_impulse.mul(e.dtRatio),this.m_motorImpulse*=e.dtRatio;var B=g.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis),z=this.m_impulse.x*this.m_s1+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a1,I=this.m_impulse.x*this.m_s2+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a2;r.subMul(p,B),o-=x*z,c.addMul(m,B),h+=y*I}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB;if(this.m_enableMotor&&this.m_limitState!=Fi.equalLimits){var u=g.dot(this.m_axis,g.sub(r,n))+this.m_a2*o-this.m_a1*s,f=this.m_motorMass*(this.m_motorSpeed-u),d=this.m_motorImpulse,_=e.dt*this.m_maxMotorForce;this.m_motorImpulse=li(this.m_motorImpulse+f,-_,_),f=this.m_motorImpulse-d;var v=g.mulNumVec2(f,this.m_axis),p=f*this.m_a1,m=f*this.m_a2;n.subMul(a,v),s-=c*p,r.addMul(l,v),o+=h*m}var x=g.zero();if(x.x+=g.dot(this.m_perp,r)+this.m_s2*o,x.x-=g.dot(this.m_perp,n)+this.m_s1*s,x.y=o-s,this.m_enableLimit&&this.m_limitState!=Fi.inactiveLimit){var y=0;y+=g.dot(this.m_axis,r)+this.m_a2*o,y-=g.dot(this.m_axis,n)+this.m_a1*s;var u=new oe(x.x,x.y,y),A=oe.clone(this.m_impulse),C=this.m_K.solve33(oe.neg(u));this.m_impulse.add(C),this.m_limitState==Fi.atLowerLimit?this.m_impulse.z=Bf(this.m_impulse.z,0):this.m_limitState==Fi.atUpperLimit&&(this.m_impulse.z=ab(this.m_impulse.z,0));var T=g.combine(-1,x,-(this.m_impulse.z-A.z),g.neo(this.m_K.ez.x,this.m_K.ez.y)),E=g.add(this.m_K.solve22(T),g.neo(A.x,A.y));this.m_impulse.x=E.x,this.m_impulse.y=E.y,C=oe.sub(this.m_impulse,A);var v=g.combine(C.x,this.m_perp,C.z,this.m_axis),p=C.x*this.m_s1+C.y+C.z*this.m_a1,m=C.x*this.m_s2+C.y+C.z*this.m_a2;n.subMul(a,v),s-=c*p,r.addMul(l,v),o+=h*m}else{var C=this.m_K.solve22(g.neg(x));this.m_impulse.x+=C.x,this.m_impulse.y+=C.y;var v=g.mulNumVec2(C.x,this.m_perp),p=C.x*this.m_s1+C.y,m=C.x*this.m_s2+C.y;n.subMul(a,v),s-=c*p,r.addMul(l,v),o+=h*m}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=J.neo(s),l=J.neo(o),c=this.m_invMassA,h=this.m_invMassB,u=this.m_invIA,f=this.m_invIB,d=J.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),_=J.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),v=g.sub(g.add(r,_),g.add(n,d)),p=J.mulVec2(a,this.m_localXAxisA),m=g.crossVec2Vec2(g.add(v,d),p),x=g.crossVec2Vec2(_,p),y=J.mulVec2(a,this.m_localYAxisA),A=g.crossVec2Vec2(g.add(v,d),y),C=g.crossVec2Vec2(_,y),T=new oe,E=g.zero();E.x=g.dot(y,v),E.y=o-s-this.m_referenceAngle;var P=Ho(E.x),b=Ho(E.y),M=ut.linearSlop,B=ut.maxLinearCorrection,z=!1,I=0;if(this.m_enableLimit){var N=g.dot(p,v);Ho(this.m_upperTranslation-this.m_lowerTranslation)<2*M?(I=li(N,-B,B),P=Bf(P,Ho(N)),z=!0):N<=this.m_lowerTranslation?(I=li(N-this.m_lowerTranslation+M,-B,0),P=Math.max(P,this.m_lowerTranslation-N),z=!0):N>=this.m_upperTranslation&&(I=li(N-this.m_upperTranslation-M,0,B),P=Math.max(P,N-this.m_upperTranslation),z=!0)}if(z){var Y=c+h+u*A*A+f*C*C,k=u*A+f*C,et=u*A*m+f*C*x,G=u+f;G==0&&(G=1);var nt=u*m+f*x,dt=c+h+u*m*m+f*x*x,gt=new Rs;gt.ex.set(Y,k,et),gt.ey.set(k,G,nt),gt.ez.set(et,nt,dt);var Ht=new oe;Ht.x=E.x,Ht.y=E.y,Ht.z=I,T=gt.solve33(oe.neg(Ht))}else{var Y=c+h+u*A*A+f*C*C,k=u*A+f*C,G=u+f;G==0&&(G=1);var gt=new In;gt.ex.setNum(Y,k),gt.ey.setNum(k,G);var re=gt.solve(g.neg(E));T.x=re.x,T.y=re.y,T.z=0}var Z=g.combine(T.x,y,T.z,p),at=T.x*A+T.y+T.z*m,bt=T.x*C+T.y+T.z*x;return n.subMul(c,Z),s-=u*at,r.addMul(h,Z),o+=f*bt,this.m_bodyA.c_position.c=n,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,P<=ut.linearSlop&&b<=ut.angularSlop},t.TYPE="prismatic-joint",t})(Ai),cb={ratio:1},Lf=(function(i){wi(t,i);function t(e,n,s,r,o,a){var l=this;if(!(l instanceof t))return new t(e,n,s,r,o,a);e=Ji(e,cb),l=i.call(this,e,n,s)||this,n=l.m_bodyA,s=l.m_bodyB,l.m_type=t.TYPE,l.m_joint1=r||e.joint1,l.m_joint2=o||e.joint2,l.m_ratio=Number.isFinite(a)?a:e.ratio,l.m_type1=l.m_joint1.getType(),l.m_type2=l.m_joint2.getType();var c,h;l.m_bodyC=l.m_joint1.getBodyA(),l.m_bodyA=l.m_joint1.getBodyB();var u=l.m_bodyA.m_xf,f=l.m_bodyA.m_sweep.a,d=l.m_bodyC.m_xf,_=l.m_bodyC.m_sweep.a;if(l.m_type1===Cs.TYPE){var v=l.m_joint1;l.m_localAnchorC=v.m_localAnchorA,l.m_localAnchorA=v.m_localAnchorB,l.m_referenceAngleA=v.m_referenceAngle,l.m_localAxisC=g.zero(),c=f-_-l.m_referenceAngleA}else{var p=l.m_joint1;l.m_localAnchorC=p.m_localAnchorA,l.m_localAnchorA=p.m_localAnchorB,l.m_referenceAngleA=p.m_referenceAngle,l.m_localAxisC=p.m_localXAxisA;var m=l.m_localAnchorC,x=J.mulTVec2(d.q,g.add(J.mulVec2(u.q,l.m_localAnchorA),g.sub(u.p,d.p)));c=g.dot(x,l.m_localAxisC)-g.dot(m,l.m_localAxisC)}l.m_bodyD=l.m_joint2.getBodyA(),l.m_bodyB=l.m_joint2.getBodyB();var y=l.m_bodyB.m_xf,A=l.m_bodyB.m_sweep.a,C=l.m_bodyD.m_xf,T=l.m_bodyD.m_sweep.a;if(l.m_type2===Cs.TYPE){var v=l.m_joint2;l.m_localAnchorD=v.m_localAnchorA,l.m_localAnchorB=v.m_localAnchorB,l.m_referenceAngleB=v.m_referenceAngle,l.m_localAxisD=g.zero(),h=A-T-l.m_referenceAngleB}else{var p=l.m_joint2;l.m_localAnchorD=p.m_localAnchorA,l.m_localAnchorB=p.m_localAnchorB,l.m_referenceAngleB=p.m_referenceAngle,l.m_localAxisD=p.m_localXAxisA;var E=l.m_localAnchorD,P=J.mulTVec2(C.q,g.add(J.mulVec2(y.q,l.m_localAnchorB),g.sub(y.p,C.p)));h=g.dot(P,l.m_localAxisD)-g.dot(E,l.m_localAxisD)}return l.m_constant=c+l.m_ratio*h,l.m_impulse=0,l}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,joint1:this.m_joint1,joint2:this.m_joint2,ratio:this.m_ratio}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n),e.joint1=s(Ai,e.joint1,n),e.joint2=s(Ai,e.joint2,n);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.ratio)&&(this.m_ratio=e.ratio)},t.prototype.getJoint1=function(){return this.m_joint1},t.prototype.getJoint2=function(){return this.m_joint2},t.prototype.setRatio=function(e){this.m_ratio=e},t.prototype.getRatio=function(){return this.m_ratio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_JvAC).mul(e)},t.prototype.getReactionTorque=function(e){var n=this.m_impulse*this.m_JwA;return e*n},t.prototype.initVelocityConstraints=function(e){this.m_lcA=this.m_bodyA.m_sweep.localCenter,this.m_lcB=this.m_bodyB.m_sweep.localCenter,this.m_lcC=this.m_bodyC.m_sweep.localCenter,this.m_lcD=this.m_bodyD.m_sweep.localCenter,this.m_mA=this.m_bodyA.m_invMass,this.m_mB=this.m_bodyB.m_invMass,this.m_mC=this.m_bodyC.m_invMass,this.m_mD=this.m_bodyD.m_invMass,this.m_iA=this.m_bodyA.m_invI,this.m_iB=this.m_bodyB.m_invI,this.m_iC=this.m_bodyC.m_invI,this.m_iD=this.m_bodyD.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=this.m_bodyC.c_position.a,h=this.m_bodyC.c_velocity.v,u=this.m_bodyC.c_velocity.w,f=this.m_bodyD.c_position.a,d=this.m_bodyD.c_velocity.v,_=this.m_bodyD.c_velocity.w,v=J.neo(n),p=J.neo(o),m=J.neo(c),x=J.neo(f);if(this.m_mass=0,this.m_type1==Cs.TYPE)this.m_JvAC=g.zero(),this.m_JwA=1,this.m_JwC=1,this.m_mass+=this.m_iA+this.m_iC;else{var y=J.mulVec2(m,this.m_localAxisC),A=J.mulSub(m,this.m_localAnchorC,this.m_lcC),C=J.mulSub(v,this.m_localAnchorA,this.m_lcA);this.m_JvAC=y,this.m_JwC=g.crossVec2Vec2(A,y),this.m_JwA=g.crossVec2Vec2(C,y),this.m_mass+=this.m_mC+this.m_mA+this.m_iC*this.m_JwC*this.m_JwC+this.m_iA*this.m_JwA*this.m_JwA}if(this.m_type2==Cs.TYPE)this.m_JvBD=g.zero(),this.m_JwB=this.m_ratio,this.m_JwD=this.m_ratio,this.m_mass+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD);else{var y=J.mulVec2(x,this.m_localAxisD),T=J.mulSub(x,this.m_localAnchorD,this.m_lcD),E=J.mulSub(p,this.m_localAnchorB,this.m_lcB);this.m_JvBD=g.mulNumVec2(this.m_ratio,y),this.m_JwD=this.m_ratio*g.crossVec2Vec2(T,y),this.m_JwB=this.m_ratio*g.crossVec2Vec2(E,y),this.m_mass+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*this.m_JwD*this.m_JwD+this.m_iB*this.m_JwB*this.m_JwB}this.m_mass=this.m_mass>0?1/this.m_mass:0,e.warmStarting?(s.addMul(this.m_mA*this.m_impulse,this.m_JvAC),r+=this.m_iA*this.m_impulse*this.m_JwA,a.addMul(this.m_mB*this.m_impulse,this.m_JvBD),l+=this.m_iB*this.m_impulse*this.m_JwB,h.subMul(this.m_mC*this.m_impulse,this.m_JvAC),u-=this.m_iC*this.m_impulse*this.m_JwC,d.subMul(this.m_mD*this.m_impulse,this.m_JvBD),_-=this.m_iD*this.m_impulse*this.m_JwD):this.m_impulse=0,this.m_bodyA.c_velocity.v.setVec2(s),this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v.setVec2(a),this.m_bodyB.c_velocity.w=l,this.m_bodyC.c_velocity.v.setVec2(h),this.m_bodyC.c_velocity.w=u,this.m_bodyD.c_velocity.v.setVec2(d),this.m_bodyD.c_velocity.w=_},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_bodyC.c_velocity.v,l=this.m_bodyC.c_velocity.w,c=this.m_bodyD.c_velocity.v,h=this.m_bodyD.c_velocity.w,u=g.dot(this.m_JvAC,n)-g.dot(this.m_JvAC,a)+g.dot(this.m_JvBD,r)-g.dot(this.m_JvBD,c);u+=this.m_JwA*s-this.m_JwC*l+(this.m_JwB*o-this.m_JwD*h);var f=-this.m_mass*u;this.m_impulse+=f,n.addMul(this.m_mA*f,this.m_JvAC),s+=this.m_iA*f*this.m_JwA,r.addMul(this.m_mB*f,this.m_JvBD),o+=this.m_iB*f*this.m_JwB,a.subMul(this.m_mC*f,this.m_JvAC),l-=this.m_iC*f*this.m_JwC,c.subMul(this.m_mD*f,this.m_JvBD),h-=this.m_iD*f*this.m_JwD,this.m_bodyA.c_velocity.v.setVec2(n),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.setVec2(r),this.m_bodyB.c_velocity.w=o,this.m_bodyC.c_velocity.v.setVec2(a),this.m_bodyC.c_velocity.w=l,this.m_bodyD.c_velocity.v.setVec2(c),this.m_bodyD.c_velocity.w=h},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=this.m_bodyC.c_position.c,l=this.m_bodyC.c_position.a,c=this.m_bodyD.c_position.c,h=this.m_bodyD.c_position.a,u=J.neo(s),f=J.neo(o),d=J.neo(l),_=J.neo(h),v=0,p,m,x,y,A,C,T,E,P=0;if(this.m_type1==Cs.TYPE)x=g.zero(),A=1,T=1,P+=this.m_iA+this.m_iC,p=s-l-this.m_referenceAngleA;else{var b=J.mulVec2(d,this.m_localAxisC),M=J.mulSub(d,this.m_localAnchorC,this.m_lcC),B=J.mulSub(u,this.m_localAnchorA,this.m_lcA);x=b,T=g.crossVec2Vec2(M,b),A=g.crossVec2Vec2(B,b),P+=this.m_mC+this.m_mA+this.m_iC*T*T+this.m_iA*A*A;var z=g.sub(this.m_localAnchorC,this.m_lcC),I=J.mulTVec2(d,g.add(B,g.sub(n,a)));p=g.dot(g.sub(I,z),this.m_localAxisC)}if(this.m_type2==Cs.TYPE)y=g.zero(),C=this.m_ratio,E=this.m_ratio,P+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD),m=o-h-this.m_referenceAngleB;else{var b=J.mulVec2(_,this.m_localAxisD),N=J.mulSub(_,this.m_localAnchorD,this.m_lcD),Y=J.mulSub(f,this.m_localAnchorB,this.m_lcB);y=g.mulNumVec2(this.m_ratio,b),E=this.m_ratio*g.crossVec2Vec2(N,b),C=this.m_ratio*g.crossVec2Vec2(Y,b),P+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*E*E+this.m_iB*C*C;var k=g.sub(this.m_localAnchorD,this.m_lcD),et=J.mulTVec2(_,g.add(Y,g.sub(r,c)));m=g.dot(et,this.m_localAxisD)-g.dot(k,this.m_localAxisD)}var G=p+this.m_ratio*m-this.m_constant,nt=0;return P>0&&(nt=-G/P),n.addMul(this.m_mA*nt,x),s+=this.m_iA*nt*A,r.addMul(this.m_mB*nt,y),o+=this.m_iB*nt*C,a.subMul(this.m_mC*nt,x),l-=this.m_iC*nt*T,c.subMul(this.m_mD*nt,y),h-=this.m_iD*nt*E,this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,this.m_bodyC.c_position.c.setVec2(a),this.m_bodyC.c_position.a=l,this.m_bodyD.c_position.c.setVec2(c),this.m_bodyD.c_position.a=h,v<ut.linearSlop},t.TYPE="gear-joint",t})(Ai),hb={maxForce:1,maxTorque:1,correctionFactor:.3},Df=(function(i){wi(t,i);function t(e,n,s){var r=this;return r instanceof t?(e=Ji(e,hb),r=i.call(this,e,n,s)||this,n=r.m_bodyA,s=r.m_bodyB,r.m_type=t.TYPE,r.m_linearOffset=g.isValid(e.linearOffset)?g.clone(e.linearOffset):n.getLocalPoint(s.getPosition()),r.m_angularOffset=Number.isFinite(e.angularOffset)?e.angularOffset:s.getAngle()-n.getAngle(),r.m_linearImpulse=g.zero(),r.m_angularImpulse=0,r.m_maxForce=e.maxForce,r.m_maxTorque=e.maxTorque,r.m_correctionFactor=e.correctionFactor,r):new t(e,n,s)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,correctionFactor:this.m_correctionFactor,linearOffset:this.m_linearOffset,angularOffset:this.m_angularOffset}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.angularOffset)&&(this.m_angularOffset=e.angularOffset),Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.maxTorque)&&(this.m_maxTorque=e.maxTorque),Number.isFinite(e.correctionFactor)&&(this.m_correctionFactor=e.correctionFactor),g.isValid(e.linearOffset)&&this.m_linearOffset.set(e.linearOffset)},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setMaxTorque=function(e){this.m_maxTorque=e},t.prototype.getMaxTorque=function(){return this.m_maxTorque},t.prototype.setCorrectionFactor=function(e){this.m_correctionFactor=e},t.prototype.getCorrectionFactor=function(){return this.m_correctionFactor},t.prototype.setLinearOffset=function(e){(e.x!=this.m_linearOffset.x||e.y!=this.m_linearOffset.y)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_linearOffset.set(e))},t.prototype.getLinearOffset=function(){return this.m_linearOffset},t.prototype.setAngularOffset=function(e){e!=this.m_angularOffset&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_angularOffset=e)},t.prototype.getAngularOffset=function(){return this.m_angularOffset},t.prototype.getAnchorA=function(){return this.m_bodyA.getPosition()},t.prototype.getAnchorB=function(){return this.m_bodyB.getPosition()},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_linearImpulse)},t.prototype.getReactionTorque=function(e){return e*this.m_angularImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=J.neo(s),f=J.neo(l);this.m_rA=J.mulVec2(u,g.sub(this.m_linearOffset,this.m_localCenterA)),this.m_rB=J.mulVec2(f,g.neg(this.m_localCenterB));var d=this.m_invMassA,_=this.m_invMassB,v=this.m_invIA,p=this.m_invIB,m=new In;if(m.ex.x=d+_+v*this.m_rA.y*this.m_rA.y+p*this.m_rB.y*this.m_rB.y,m.ex.y=-v*this.m_rA.x*this.m_rA.y-p*this.m_rB.x*this.m_rB.y,m.ey.x=m.ex.y,m.ey.y=d+_+v*this.m_rA.x*this.m_rA.x+p*this.m_rB.x*this.m_rB.x,this.m_linearMass=m.getInverse(),this.m_angularMass=v+p,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),this.m_linearError=g.zero(),this.m_linearError.addCombine(1,a,1,this.m_rB),this.m_linearError.subCombine(1,n,1,this.m_rA),this.m_angularError=l-s-this.m_angularOffset,e.warmStarting){this.m_linearImpulse.mul(e.dtRatio),this.m_angularImpulse*=e.dtRatio;var x=g.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);r.subMul(d,x),o-=v*(g.crossVec2Vec2(this.m_rA,x)+this.m_angularImpulse),c.addMul(_,x),h+=p*(g.crossVec2Vec2(this.m_rB,x)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=r,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=c,this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB,u=e.dt,f=e.inv_dt;{var d=o-s+f*this.m_correctionFactor*this.m_angularError,_=-this.m_angularMass*d,v=this.m_angularImpulse,p=u*this.m_maxTorque;this.m_angularImpulse=li(this.m_angularImpulse+_,-p,p),_=this.m_angularImpulse-v,s-=c*_,o+=h*_}{var d=g.zero();d.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),d.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA)),d.addMul(f*this.m_correctionFactor,this.m_linearError);var _=g.neg(In.mulVec2(this.m_linearMass,d)),v=g.clone(this.m_linearImpulse);this.m_linearImpulse.add(_);var p=u*this.m_maxForce;this.m_linearImpulse.clamp(p),_=g.sub(this.m_linearImpulse,v),n.subMul(a,_),s-=c*g.crossVec2Vec2(this.m_rA,_),r.addMul(l,_),o+=h*g.crossVec2Vec2(this.m_rB,_)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="motor-joint",t})(Ai),ub=Math.PI,db={maxForce:0,frequencyHz:5,dampingRatio:.7},Uf=(function(i){wi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=Ji(e,db),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,g.isValid(r)?o.m_targetA=g.clone(r):g.isValid(e.target)?o.m_targetA=g.clone(e.target):o.m_targetA=g.zero(),o.m_localAnchorB=Bn.mulTVec2(s.getTransform(),o.m_targetA),o.m_maxForce=e.maxForce,o.m_impulse=g.zero(),o.m_frequencyHz=e.frequencyHz,o.m_dampingRatio=e.dampingRatio,o.m_beta=0,o.m_gamma=0,o.m_rB=g.zero(),o.m_localCenterB=g.zero(),o.m_invMassB=0,o.m_invIB=0,o.m_mass=new In,o.m_C=g.zero(),o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,target:this.m_targetA,maxForce:this.m_maxForce,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,_localAnchorB:this.m_localAnchorB}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n),e.target=g.clone(e.target);var r=new t(e);return e._localAnchorB&&(r.m_localAnchorB=e._localAnchorB),r},t.prototype._reset=function(e){Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.setTarget=function(e){g.areEqual(e,this.m_targetA)||(this.m_bodyB.setAwake(!0),this.m_targetA.set(e))},t.prototype.getTarget=function(){return this.m_targetA},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return g.clone(this.m_targetA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_impulse)},t.prototype.getReactionTorque=function(e){return e*0},t.prototype.shiftOrigin=function(e){this.m_targetA.sub(e)},t.prototype.initVelocityConstraints=function(e){this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyB.c_position,s=this.m_bodyB.c_velocity,r=n.c,o=n.a,a=s.v,l=s.w,c=J.neo(o),h=this.m_bodyB.getMass(),u=2*ub*this.m_frequencyHz,f=2*h*this.m_dampingRatio*u,d=h*(u*u),_=e.dt;this.m_gamma=_*(f+_*d),this.m_gamma!=0&&(this.m_gamma=1/this.m_gamma),this.m_beta=_*d*this.m_gamma,this.m_rB=J.mulVec2(c,g.sub(this.m_localAnchorB,this.m_localCenterB));var v=new In;v.ex.x=this.m_invMassB+this.m_invIB*this.m_rB.y*this.m_rB.y+this.m_gamma,v.ex.y=-this.m_invIB*this.m_rB.x*this.m_rB.y,v.ey.x=v.ex.y,v.ey.y=this.m_invMassB+this.m_invIB*this.m_rB.x*this.m_rB.x+this.m_gamma,this.m_mass=v.getInverse(),this.m_C.setVec2(r),this.m_C.addCombine(1,this.m_rB,-1,this.m_targetA),this.m_C.mul(this.m_beta),l*=.98,e.warmStarting?(this.m_impulse.mul(e.dtRatio),a.addMul(this.m_invMassB,this.m_impulse),l+=this.m_invIB*g.crossVec2Vec2(this.m_rB,this.m_impulse)):this.m_impulse.setZero(),s.v.setVec2(a),s.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyB.c_velocity,s=g.clone(n.v),r=n.w,o=g.crossNumVec2(r,this.m_rB);o.add(s),o.addCombine(1,this.m_C,this.m_gamma,this.m_impulse),o.neg();var a=In.mulVec2(this.m_mass,o),l=g.clone(this.m_impulse);this.m_impulse.add(a);var c=e.dt*this.m_maxForce;this.m_impulse.clamp(c),a=g.sub(this.m_impulse,l),s.addMul(this.m_invMassB,a),r+=this.m_invIB*g.crossVec2Vec2(this.m_rB,a),n.v.setVec2(s),n.w=r},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="mouse-joint",t})(Ai),fb=Math.abs,mb={collideConnected:!0},Nf=(function(i){wi(t,i);function t(e,n,s,r,o,a,l,c){var h=this;return h instanceof t?(e=Ji(e,mb),h=i.call(this,e,n,s)||this,n=h.m_bodyA,s=h.m_bodyB,h.m_type=t.TYPE,h.m_groundAnchorA=g.clone(r||e.groundAnchorA||g.neo(-1,1)),h.m_groundAnchorB=g.clone(o||e.groundAnchorB||g.neo(1,1)),h.m_localAnchorA=g.clone(a?n.getLocalPoint(a):e.localAnchorA||g.neo(-1,0)),h.m_localAnchorB=g.clone(l?s.getLocalPoint(l):e.localAnchorB||g.neo(1,0)),h.m_lengthA=Number.isFinite(e.lengthA)?e.lengthA:g.distance(a,r),h.m_lengthB=Number.isFinite(e.lengthB)?e.lengthB:g.distance(l,o),h.m_ratio=Number.isFinite(c)?c:e.ratio,h.m_constant=h.m_lengthA+h.m_ratio*h.m_lengthB,h.m_impulse=0,h):new t(e,n,s,r,o,a,l,c)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,groundAnchorA:this.m_groundAnchorA,groundAnchorB:this.m_groundAnchorB,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,lengthA:this.m_lengthA,lengthB:this.m_lengthB,ratio:this.m_ratio}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){g.isValid(e.groundAnchorA)&&this.m_groundAnchorA.set(e.groundAnchorA),g.isValid(e.groundAnchorB)&&this.m_groundAnchorB.set(e.groundAnchorB),g.isValid(e.localAnchorA)?this.m_localAnchorA.set(e.localAnchorA):g.isValid(e.anchorA)&&this.m_localAnchorA.set(this.m_bodyA.getLocalPoint(e.anchorA)),g.isValid(e.localAnchorB)?this.m_localAnchorB.set(e.localAnchorB):g.isValid(e.anchorB)&&this.m_localAnchorB.set(this.m_bodyB.getLocalPoint(e.anchorB)),Number.isFinite(e.lengthA)&&(this.m_lengthA=e.lengthA),Number.isFinite(e.lengthB)&&(this.m_lengthB=e.lengthB),Number.isFinite(e.ratio)&&(this.m_ratio=e.ratio)},t.prototype.getGroundAnchorA=function(){return this.m_groundAnchorA},t.prototype.getGroundAnchorB=function(){return this.m_groundAnchorB},t.prototype.getLengthA=function(){return this.m_lengthA},t.prototype.getLengthB=function(){return this.m_lengthB},t.prototype.getRatio=function(){return this.m_ratio},t.prototype.getCurrentLengthA=function(){var e=this.m_bodyA.getWorldPoint(this.m_localAnchorA),n=this.m_groundAnchorA;return g.distance(e,n)},t.prototype.getCurrentLengthB=function(){var e=this.m_bodyB.getWorldPoint(this.m_localAnchorB),n=this.m_groundAnchorB;return g.distance(e,n)},t.prototype.shiftOrigin=function(e){this.m_groundAnchorA.sub(e),this.m_groundAnchorB.sub(e)},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_uB).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=J.neo(s),f=J.neo(l);this.m_rA=J.mulVec2(u,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=J.mulVec2(f,g.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_uA=g.sub(g.add(n,this.m_rA),this.m_groundAnchorA),this.m_uB=g.sub(g.add(a,this.m_rB),this.m_groundAnchorB);var d=this.m_uA.length(),_=this.m_uB.length();d>10*ut.linearSlop?this.m_uA.mul(1/d):this.m_uA.setZero(),_>10*ut.linearSlop?this.m_uB.mul(1/_):this.m_uB.setZero();var v=g.crossVec2Vec2(this.m_rA,this.m_uA),p=g.crossVec2Vec2(this.m_rB,this.m_uB),m=this.m_invMassA+this.m_invIA*v*v,x=this.m_invMassB+this.m_invIB*p*p;if(this.m_mass=m+this.m_ratio*this.m_ratio*x,this.m_mass>0&&(this.m_mass=1/this.m_mass),e.warmStarting){this.m_impulse*=e.dtRatio;var y=g.mulNumVec2(-this.m_impulse,this.m_uA),A=g.mulNumVec2(-this.m_ratio*this.m_impulse,this.m_uB);r.addMul(this.m_invMassA,y),o+=this.m_invIA*g.crossVec2Vec2(this.m_rA,y),c.addMul(this.m_invMassB,A),h+=this.m_invIB*g.crossVec2Vec2(this.m_rB,A)}else this.m_impulse=0;this.m_bodyA.c_velocity.v=r,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=c,this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.add(n,g.crossNumVec2(s,this.m_rA)),l=g.add(r,g.crossNumVec2(o,this.m_rB)),c=-g.dot(this.m_uA,a)-this.m_ratio*g.dot(this.m_uB,l),h=-this.m_mass*c;this.m_impulse+=h;var u=g.mulNumVec2(-h,this.m_uA),f=g.mulNumVec2(-this.m_ratio*h,this.m_uB);n.addMul(this.m_invMassA,u),s+=this.m_invIA*g.crossVec2Vec2(this.m_rA,u),r.addMul(this.m_invMassB,f),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,f),this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=J.neo(s),l=J.neo(o),c=J.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),h=J.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),u=g.sub(g.add(n,this.m_rA),this.m_groundAnchorA),f=g.sub(g.add(r,this.m_rB),this.m_groundAnchorB),d=u.length(),_=f.length();d>10*ut.linearSlop?u.mul(1/d):u.setZero(),_>10*ut.linearSlop?f.mul(1/_):f.setZero();var v=g.crossVec2Vec2(c,u),p=g.crossVec2Vec2(h,f),m=this.m_invMassA+this.m_invIA*v*v,x=this.m_invMassB+this.m_invIB*p*p,y=m+this.m_ratio*this.m_ratio*x;y>0&&(y=1/y);var A=this.m_constant-d-this.m_ratio*_,C=fb(A),T=-y*A,E=g.mulNumVec2(-T,u),P=g.mulNumVec2(-this.m_ratio*T,f);return n.addMul(this.m_invMassA,E),s+=this.m_invIA*g.crossVec2Vec2(c,E),r.addMul(this.m_invMassB,P),o+=this.m_invIB*g.crossVec2Vec2(h,P),this.m_bodyA.c_position.c=n,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,C<ut.linearSlop},t.TYPE="pulley-joint",t})(Ai),pb=Math.min,ia;(function(i){i[i.inactiveLimit=0]="inactiveLimit",i[i.atLowerLimit=1]="atLowerLimit",i[i.atUpperLimit=2]="atUpperLimit",i[i.equalLimits=3]="equalLimits"})(ia||(ia={}));var _b={maxLength:0},Ff=(function(i){wi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=Ji(e,_b),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.neo(-1,0)),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.neo(1,0)),o.m_maxLength=e.maxLength,o.m_mass=0,o.m_impulse=0,o.m_length=0,o.m_state=ia.inactiveLimit,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,maxLength:this.m_maxLength}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.maxLength)&&(this.m_maxLength=e.maxLength)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setMaxLength=function(e){this.m_maxLength=e},t.prototype.getMaxLength=function(){return this.m_maxLength},t.prototype.getLimitState=function(){return this.m_state},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_u).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w,u=J.neo(s),f=J.neo(l);this.m_rA=J.mulSub(u,this.m_localAnchorA,this.m_localCenterA),this.m_rB=J.mulSub(f,this.m_localAnchorB,this.m_localCenterB),this.m_u=g.zero(),this.m_u.addCombine(1,a,1,this.m_rB),this.m_u.subCombine(1,n,1,this.m_rA),this.m_length=this.m_u.length();var d=this.m_length-this.m_maxLength;if(d>0?this.m_state=ia.atUpperLimit:this.m_state=ia.inactiveLimit,this.m_length>ut.linearSlop)this.m_u.mul(1/this.m_length);else{this.m_u.setZero(),this.m_mass=0,this.m_impulse=0;return}var _=g.crossVec2Vec2(this.m_rA,this.m_u),v=g.crossVec2Vec2(this.m_rB,this.m_u),p=this.m_invMassA+this.m_invIA*_*_+this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=p!=0?1/p:0,e.warmStarting){this.m_impulse*=e.dtRatio;var m=g.mulNumVec2(this.m_impulse,this.m_u);r.subMul(this.m_invMassA,m),o-=this.m_invIA*g.crossVec2Vec2(this.m_rA,m),c.addMul(this.m_invMassB,m),h+=this.m_invIB*g.crossVec2Vec2(this.m_rB,m)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.addCrossNumVec2(n,s,this.m_rA),l=g.addCrossNumVec2(r,o,this.m_rB),c=this.m_length-this.m_maxLength,h=g.dot(this.m_u,g.sub(l,a));c<0&&(h+=e.inv_dt*c);var u=-this.m_mass*h,f=this.m_impulse;this.m_impulse=pb(0,this.m_impulse+u),u=this.m_impulse-f;var d=g.mulNumVec2(u,this.m_u);n.subMul(this.m_invMassA,d),s-=this.m_invIA*g.crossVec2Vec2(this.m_rA,d),r.addMul(this.m_invMassB,d),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,d),this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=J.neo(s),l=J.neo(o),c=J.mulSub(a,this.m_localAnchorA,this.m_localCenterA),h=J.mulSub(l,this.m_localAnchorB,this.m_localCenterB),u=g.zero();u.addCombine(1,r,1,h),u.subCombine(1,n,1,c);var f=u.normalize(),d=f-this.m_maxLength;d=li(d,0,ut.maxLinearCorrection);var _=-this.m_mass*d,v=g.mulNumVec2(_,u);return n.subMul(this.m_invMassA,v),s-=this.m_invIA*g.crossVec2Vec2(c,v),r.addMul(this.m_invMassB,v),o+=this.m_invIB*g.crossVec2Vec2(h,v),this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,f-this.m_maxLength<ut.linearSlop},t.TYPE="rope-joint",t})(Ai),vb=Math.abs,gb=Math.PI,yb={frequencyHz:0,dampingRatio:0},Of=(function(i){wi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(e=Ji(e,yb),o=i.call(this,e,n,s)||this,n=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),o.m_referenceAngle=Number.isFinite(e.referenceAngle)?e.referenceAngle:s.getAngle()-n.getAngle(),o.m_frequencyHz=e.frequencyHz,o.m_dampingRatio=e.dampingRatio,o.m_impulse=new oe,o.m_bias=0,o.m_gamma=0,o.m_mass=new Rs,o):new t(e,n,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.neo(this.m_impulse.x,this.m_impulse.y).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.z},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,c=J.neo(n),h=J.neo(o);this.m_rA=J.mulVec2(c,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=J.mulVec2(h,g.sub(this.m_localAnchorB,this.m_localCenterB));var u=this.m_invMassA,f=this.m_invMassB,d=this.m_invIA,_=this.m_invIB,v=new Rs;if(v.ex.x=u+f+this.m_rA.y*this.m_rA.y*d+this.m_rB.y*this.m_rB.y*_,v.ey.x=-this.m_rA.y*this.m_rA.x*d-this.m_rB.y*this.m_rB.x*_,v.ez.x=-this.m_rA.y*d-this.m_rB.y*_,v.ex.y=v.ey.x,v.ey.y=u+f+this.m_rA.x*this.m_rA.x*d+this.m_rB.x*this.m_rB.x*_,v.ez.y=this.m_rA.x*d+this.m_rB.x*_,v.ex.z=v.ez.x,v.ey.z=v.ez.y,v.ez.z=d+_,this.m_frequencyHz>0){v.getInverse22(this.m_mass);var p=d+_,m=p>0?1/p:0,x=o-n-this.m_referenceAngle,y=2*gb*this.m_frequencyHz,A=2*m*this.m_dampingRatio*y,C=m*y*y,T=e.dt;this.m_gamma=T*(A+T*C),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=x*T*C*this.m_gamma,p+=this.m_gamma,this.m_mass.ez.z=p!=0?1/p:0}else v.ez.z==0?(v.getInverse22(this.m_mass),this.m_gamma=0,this.m_bias=0):(v.getSymInverse33(this.m_mass),this.m_gamma=0,this.m_bias=0);if(e.warmStarting){this.m_impulse.mul(e.dtRatio);var E=g.neo(this.m_impulse.x,this.m_impulse.y);s.subMul(u,E),r-=d*(g.crossVec2Vec2(this.m_rA,E)+this.m_impulse.z),a.addMul(f,E),l+=_*(g.crossVec2Vec2(this.m_rB,E)+this.m_impulse.z)}else this.m_impulse.setZero();this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var n=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,c=this.m_invIA,h=this.m_invIB;if(this.m_frequencyHz>0){var u=o-s,f=-this.m_mass.ez.z*(u+this.m_bias+this.m_gamma*this.m_impulse.z);this.m_impulse.z+=f,s-=c*f,o+=h*f;var d=g.zero();d.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),d.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var _=g.neg(Rs.mulVec2(this.m_mass,d));this.m_impulse.x+=_.x,this.m_impulse.y+=_.y;var v=g.clone(_);n.subMul(a,v),s-=c*g.crossVec2Vec2(this.m_rA,v),r.addMul(l,v),o+=h*g.crossVec2Vec2(this.m_rB,v)}else{var d=g.zero();d.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),d.subCombine(1,n,1,g.crossNumVec2(s,this.m_rA));var u=o-s,p=new oe(d.x,d.y,u),m=oe.neg(Rs.mulVec3(this.m_mass,p));this.m_impulse.add(m);var v=g.neo(m.x,m.y);n.subMul(a,v),s-=c*(g.crossVec2Vec2(this.m_rA,v)+m.z),r.addMul(l,v),o+=h*(g.crossVec2Vec2(this.m_rB,v)+m.z)}this.m_bodyA.c_velocity.v=n,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=J.neo(s),l=J.neo(o),c=this.m_invMassA,h=this.m_invMassB,u=this.m_invIA,f=this.m_invIB,d=J.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),_=J.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),v,p,m=new Rs;if(m.ex.x=c+h+d.y*d.y*u+_.y*_.y*f,m.ey.x=-d.y*d.x*u-_.y*_.x*f,m.ez.x=-d.y*u-_.y*f,m.ex.y=m.ey.x,m.ey.y=c+h+d.x*d.x*u+_.x*_.x*f,m.ez.y=d.x*u+_.x*f,m.ex.z=m.ez.x,m.ey.z=m.ez.y,m.ez.z=u+f,this.m_frequencyHz>0){var x=g.zero();x.addCombine(1,r,1,_),x.subCombine(1,n,1,d),v=x.length(),p=0;var y=g.neg(m.solve22(x));n.subMul(c,y),s-=u*g.crossVec2Vec2(d,y),r.addMul(h,y),o+=f*g.crossVec2Vec2(_,y)}else{var x=g.zero();x.addCombine(1,r,1,_),x.subCombine(1,n,1,d);var A=o-s-this.m_referenceAngle;v=x.length(),p=vb(A);var C=new oe(x.x,x.y,A),T=new oe;if(m.ez.z>0)T=oe.neg(m.solve33(C));else{var E=g.neg(m.solve22(x));T.set(E.x,E.y,0)}var y=g.neo(T.x,T.y);n.subMul(c,y),s-=u*(g.crossVec2Vec2(d,y)+T.z),r.addMul(h,y),o+=f*(g.crossVec2Vec2(_,y)+T.z)}return this.m_bodyA.c_position.c=n,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,v<=ut.linearSlop&&p<=ut.angularSlop},t.TYPE="weld-joint",t})(Ai),xb=Math.abs,Ab=Math.PI,Mb={enableMotor:!1,maxMotorTorque:0,motorSpeed:0,frequencyHz:2,dampingRatio:.7},zf=(function(i){wi(t,i);function t(e,n,s,r,o){var a=this;return a instanceof t?(e=Ji(e,Mb),a=i.call(this,e,n,s)||this,n=a.m_bodyA,s=a.m_bodyB,a.m_ax=g.zero(),a.m_ay=g.zero(),a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?n.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),g.isValid(o)?a.m_localXAxisA=n.getLocalVector(o):g.isValid(e.localAxisA)?a.m_localXAxisA=g.clone(e.localAxisA):g.isValid(e.localAxis)?a.m_localXAxisA=g.clone(e.localAxis):a.m_localXAxisA=g.neo(1,0),a.m_localYAxisA=g.crossNumVec2(1,a.m_localXAxisA),a.m_mass=0,a.m_impulse=0,a.m_motorMass=0,a.m_motorImpulse=0,a.m_springMass=0,a.m_springImpulse=0,a.m_maxMotorTorque=e.maxMotorTorque,a.m_motorSpeed=e.motorSpeed,a.m_enableMotor=e.enableMotor,a.m_frequencyHz=e.frequencyHz,a.m_dampingRatio=e.dampingRatio,a.m_bias=0,a.m_gamma=0,a):new t(e,n,s,r,o)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,enableMotor:this.m_enableMotor,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA}},t._deserialize=function(e,n,s){e=bi({},e),e.bodyA=s(ve,e.bodyA,n),e.bodyB=s(ve,e.bodyB,n);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.localAxisA&&(this.m_localXAxisA.setVec2(e.localAxisA),this.m_localYAxisA.setVec2(g.crossNumVec2(1,e.localAxisA))),e.enableMotor!==void 0&&(this.m_enableMotor=e.enableMotor),Number.isFinite(e.maxMotorTorque)&&(this.m_maxMotorTorque=e.maxMotorTorque),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getLocalAxisA=function(){return this.m_localXAxisA},t.prototype.getJointTranslation=function(){var e=this.m_bodyA,n=this.m_bodyB,s=e.getWorldPoint(this.m_localAnchorA),r=n.getWorldPoint(this.m_localAnchorB),o=g.sub(r,s),a=e.getWorldVector(this.m_localXAxisA),l=g.dot(o,a);return l},t.prototype.getJointSpeed=function(){var e=this.m_bodyA.m_angularVelocity,n=this.m_bodyB.m_angularVelocity;return n-e},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.setMaxMotorTorque=function(e){e!=this.m_maxMotorTorque&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=e)},t.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},t.prototype.getMotorTorque=function(e){return e*this.m_motorImpulse},t.prototype.setSpringFrequencyHz=function(e){this.m_frequencyHz=e},t.prototype.getSpringFrequencyHz=function(){return this.m_frequencyHz},t.prototype.setSpringDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getSpringDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_motorImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var n=this.m_invMassA,s=this.m_invMassB,r=this.m_invIA,o=this.m_invIB,a=this.m_bodyA.c_position.c,l=this.m_bodyA.c_position.a,c=this.m_bodyA.c_velocity.v,h=this.m_bodyA.c_velocity.w,u=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,d=this.m_bodyB.c_velocity.v,_=this.m_bodyB.c_velocity.w,v=J.neo(l),p=J.neo(f),m=J.mulVec2(v,g.sub(this.m_localAnchorA,this.m_localCenterA)),x=J.mulVec2(p,g.sub(this.m_localAnchorB,this.m_localCenterB)),y=g.zero();if(y.addCombine(1,u,1,x),y.subCombine(1,a,1,m),this.m_ay=J.mulVec2(v,this.m_localYAxisA),this.m_sAy=g.crossVec2Vec2(g.add(y,m),this.m_ay),this.m_sBy=g.crossVec2Vec2(x,this.m_ay),this.m_mass=n+s+r*this.m_sAy*this.m_sAy+o*this.m_sBy*this.m_sBy,this.m_mass>0&&(this.m_mass=1/this.m_mass),this.m_springMass=0,this.m_bias=0,this.m_gamma=0,this.m_frequencyHz>0){this.m_ax=J.mulVec2(v,this.m_localXAxisA),this.m_sAx=g.crossVec2Vec2(g.add(y,m),this.m_ax),this.m_sBx=g.crossVec2Vec2(x,this.m_ax);var A=n+s+r*this.m_sAx*this.m_sAx+o*this.m_sBx*this.m_sBx;if(A>0){this.m_springMass=1/A;var C=g.dot(y,this.m_ax),T=2*Ab*this.m_frequencyHz,E=2*this.m_springMass*this.m_dampingRatio*T,P=this.m_springMass*T*T,b=e.dt;this.m_gamma=b*(E+b*P),this.m_gamma>0&&(this.m_gamma=1/this.m_gamma),this.m_bias=C*b*P*this.m_gamma,this.m_springMass=A+this.m_gamma,this.m_springMass>0&&(this.m_springMass=1/this.m_springMass)}}else this.m_springImpulse=0;if(this.m_enableMotor?(this.m_motorMass=r+o,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass)):(this.m_motorMass=0,this.m_motorImpulse=0),e.warmStarting){this.m_impulse*=e.dtRatio,this.m_springImpulse*=e.dtRatio,this.m_motorImpulse*=e.dtRatio;var M=g.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax),B=this.m_impulse*this.m_sAy+this.m_springImpulse*this.m_sAx+this.m_motorImpulse,z=this.m_impulse*this.m_sBy+this.m_springImpulse*this.m_sBx+this.m_motorImpulse;c.subMul(this.m_invMassA,M),h-=this.m_invIA*B,d.addMul(this.m_invMassB,M),_+=this.m_invIB*z}else this.m_impulse=0,this.m_springImpulse=0,this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(c),this.m_bodyA.c_velocity.w=h,this.m_bodyB.c_velocity.v.setVec2(d),this.m_bodyB.c_velocity.w=_},t.prototype.solveVelocityConstraints=function(e){var n=this.m_invMassA,s=this.m_invMassB,r=this.m_invIA,o=this.m_invIB,a=this.m_bodyA.c_velocity.v,l=this.m_bodyA.c_velocity.w,c=this.m_bodyB.c_velocity.v,h=this.m_bodyB.c_velocity.w;{var u=g.dot(this.m_ax,c)-g.dot(this.m_ax,a)+this.m_sBx*h-this.m_sAx*l,f=-this.m_springMass*(u+this.m_bias+this.m_gamma*this.m_springImpulse);this.m_springImpulse+=f;var d=g.mulNumVec2(f,this.m_ax),_=f*this.m_sAx,v=f*this.m_sBx;a.subMul(n,d),l-=r*_,c.addMul(s,d),h+=o*v}{var u=h-l-this.m_motorSpeed,f=-this.m_motorMass*u,p=this.m_motorImpulse,m=e.dt*this.m_maxMotorTorque;this.m_motorImpulse=li(this.m_motorImpulse+f,-m,m),f=this.m_motorImpulse-p,l-=r*f,h+=o*f}{var u=g.dot(this.m_ay,c)-g.dot(this.m_ay,a)+this.m_sBy*h-this.m_sAy*l,f=-this.m_mass*u;this.m_impulse+=f;var d=g.mulNumVec2(f,this.m_ay),_=f*this.m_sAy,v=f*this.m_sBy;a.subMul(n,d),l-=r*_,c.addMul(s,d),h+=o*v}this.m_bodyA.c_velocity.v.setVec2(a),this.m_bodyA.c_velocity.w=l,this.m_bodyB.c_velocity.v.setVec2(c),this.m_bodyB.c_velocity.w=h},t.prototype.solvePositionConstraints=function(e){var n=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=J.neo(s),l=J.neo(o),c=J.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),h=J.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),u=g.zero();u.addCombine(1,r,1,h),u.subCombine(1,n,1,c);var f=J.mulVec2(a,this.m_localYAxisA),d=g.crossVec2Vec2(g.add(u,c),f),_=g.crossVec2Vec2(h,f),v=g.dot(u,f),p=this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_sAy*this.m_sAy+this.m_invIB*this.m_sBy*this.m_sBy,m=p!=0?-v/p:0,x=g.mulNumVec2(m,f),y=m*d,A=m*_;return n.subMul(this.m_invMassA,x),s-=this.m_invIA*y,r.addMul(this.m_invMassB,x),o+=this.m_invIB*A,this.m_bodyA.c_position.c.setVec2(n),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,xb(v)<=ut.linearSlop},t.TYPE="wheel-joint",t})(Ai),Ye,Sb=0,Vf={World:va,Body:ve,Joint:Ai,Fixture:Vl,Shape:Cr},Hf={Vec2:g,Vec3:oe,World:va,Body:ve,Joint:Ai,Fixture:Vl,Shape:Cr},bb=(Ye={},Ye[ve.STATIC]=ve,Ye[ve.DYNAMIC]=ve,Ye[ve.KINEMATIC]=ve,Ye[ua.TYPE]=ua,Ye[Us.TYPE]=Us,Ye[Ds.TYPE]=Ds,Ye[Ns.TYPE]=Ns,Ye[Cf.TYPE]=Cf,Ye[Rf.TYPE]=Rf,Ye[Lf.TYPE]=Lf,Ye[Df.TYPE]=Df,Ye[Uf.TYPE]=Uf,Ye[If.TYPE]=If,Ye[Nf.TYPE]=Nf,Ye[Cs.TYPE]=Cs,Ye[Ff.TYPE]=Ff,Ye[Of.TYPE]=Of,Ye[zf.TYPE]=zf,Ye),wb={rootClass:va,preSerialize:function(i){return i},postSerialize:function(i,t){return i},preDeserialize:function(i){return i},postDeserialize:function(i,t){return i}},vu=(function(){function i(t){var e=this;this.toJson=function(n){var s=e.options.preSerialize,r=e.options.postSerialize,o=[],a=[n],l={};function c(_,v){if(_.__sid=_.__sid||++Sb,!l[_.__sid]){a.push(_);var p=o.length+a.length,m={refIndex:p,refType:v};l[_.__sid]=m}return l[_.__sid]}function h(_){_=s(_);var v=_._serialize();return v=r(v,_),v}function u(_,v){if(v===void 0&&(v=!1),typeof _!="object"||_===null)return _;if(typeof _._serialize=="function"){if(!v){for(var p in Vf)if(_ instanceof Vf[p])return c(_,p)}_=h(_)}if(Array.isArray(_)){for(var m=[],x=0;x<_.length;x++)m[x]=u(_[x]);_=m}else{var m={};for(var x in _)_.hasOwnProperty(x)&&(m[x]=u(_[x]));_=m}return _}for(;a.length;){var f=a.shift(),d=u(f,!0);o.push(d)}return o},this.fromJson=function(n){var s=e.options.preDeserialize,r=e.options.postDeserialize,o=e.options.rootClass,a={};function l(u,f,d){(!u||!u._deserialize)&&(u=bb[f.type]);var _=u&&u._deserialize;if(_){f=s(f);var v=u._deserialize,p=v(f,d,c);return p=r(p,f),p}}function c(u,f,d){var _=f.refIndex&&f.refType;if(!_)return l(u,f,d);var v=f;Hf[v.refType]&&(u=Hf[v.refType]);var p=v.refIndex;if(!a[p]){var m=n[p],x=l(u,m,d);a[p]=x}return a[p]}var h=l(o,n[0],null);return h},this.options=bi(bi({},wb),t)}return i})(),pp=new vu({rootClass:va});vu.fromJson=pp.fromJson;vu.toJson=pp.toJson;(function(){function i(){}return i.mount=function(t){throw new Error("Not implemented")},i.start=function(t){var e=i.mount();return e.start(t),e},i})();(function(i){wi(t,i);function t(e,n,s,r){var o=this;return o instanceof t?(o=i.call(this)||this,o._setAsBox(e,n,s,r),o):new t(e,n,s,r)}return t.TYPE="polygon",t})(Us);Wn.addType(Ns.TYPE,Ns.TYPE,Tb);function Tb(i,t,e,n,s,r,o){Eb(i,e.getShape(),t,r.getShape(),s)}var kf=X(0,0),Gf=X(0,0),Eb=function(i,t,e,n,s){i.pointCount=0,zt(kf,e,t.m_p),zt(Gf,s,n.m_p);var r=_r(Gf,kf),o=t.m_radius,a=n.m_radius,l=o+a;r>l*l||(i.type=Ne.e_circles,V(i.localPoint,t.m_p),Ct(i.localNormal),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex))};Wn.addType(Ds.TYPE,Ns.TYPE,Cb);Wn.addType(ua.TYPE,Ns.TYPE,Rb);function Cb(i,t,e,n,s,r,o){var a=e.getShape(),l=r.getShape();_p(i,a,t,l,s)}function Rb(i,t,e,n,s,r,o){var a=e.getShape(),l=new Ds;a.getChildEdge(l,n);var c=l,h=r.getShape();_p(i,c,t,h,s)}var Qs=X(0,0),kc=X(0,0),Gc=X(0,0),ss=X(0,0),tr=X(0,0),eo=X(0,0),_p=function(i,t,e,n,s){i.pointCount=0,sp(ss,s,e,n.m_p);var r=t.m_vertex1,o=t.m_vertex2;Vt(Qs,o,r);var a=st(Qs,o)-st(Qs,ss),l=st(Qs,ss)-st(Qs,r),c=t.m_radius+n.m_radius;if(l<=0){V(tr,r);var h=_r(ss,r);if(h>c*c)return;if(t.m_hasVertex0){var u=t.m_vertex0,f=r;Vt(kc,f,u);var d=st(kc,f)-st(kc,ss);if(d>0)return}i.type=Ne.e_circles,Ct(i.localNormal),V(i.localPoint,tr),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex);return}if(a<=0){V(tr,o);var _=_r(ss,tr);if(_>c*c)return;if(t.m_hasVertex3){var v=t.m_vertex3,p=o;Vt(Gc,v,p);var m=st(Gc,ss)-st(Gc,p);if(m>0)return}i.type=Ne.e_circles,Ct(i.localNormal),V(i.localPoint,tr),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(1,se.e_vertex,0,se.e_vertex);return}var x=pr(Qs);Be(tr,a/x,r,l/x,o);var y=_r(ss,tr);y>c*c||(Xi(eo,1,Qs),st(eo,ss)-st(eo,r)<0&&ca(eo),Pn(eo),i.type=Ne.e_faceA,V(i.localNormal,eo),V(i.localPoint,r),i.pointCount=1,V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,se.e_face,0,se.e_vertex))},_l=[new $i,new $i],vl=[new $i,new $i],er=[new $i,new $i],gl=X(0,0),Wf=X(0,0),Wc=X(0,0),qc=Er(0,0,0),ir=X(0,0),io=X(0,0),yl=X(0,0),qf=X(0,0),Xf=X(0,0),Ss=X(0,0),Xc=X(0,0),Yf=X(0,0);Wn.addType(Us.TYPE,Us.TYPE,Pb);function Pb(i,t,e,n,s,r,o){Ib(i,e.getShape(),t,r.getShape(),s)}function $f(i,t,e,n,s){var r=i.m_count,o=e.m_count,a=i.m_normals,l=i.m_vertices,c=e.m_vertices;rp(qc,n,t);for(var h=0,u=-1/0,f=0;f<r;++f){dn(Wc,qc.q,a[f]),zt(Wf,qc,l[f]);for(var d=1/0,_=0;_<o;++_){var v=st(Wc,c[_])-st(Wc,Wf);v<d&&(d=v)}d>u&&(u=d,h=f)}s.maxSeparation=u,s.bestIndex=h}function Bb(i,t,e,n,s,r){var o=t.m_normals,a=s.m_count,l=s.m_vertices,c=s.m_normals;IS(Yf,r.q,e.q,o[n]);for(var h=0,u=1/0,f=0;f<a;++f){var d=st(Yf,c[f]);d<u&&(u=d,h=f)}var _=h,v=_+1<a?_+1:0;zt(i[0].v,r,l[_]),i[0].id.setFeatures(n,se.e_face,_,se.e_vertex),zt(i[1].v,r,l[v]),i[1].id.setFeatures(n,se.e_face,v,se.e_vertex)}var no={maxSeparation:0,bestIndex:0},Ib=function(i,t,e,n,s){i.pointCount=0;var r=t.m_radius+n.m_radius;$f(t,e,n,s,no);var o=no.bestIndex,a=no.maxSeparation;if(!(a>r)){$f(n,s,t,e,no);var l=no.bestIndex,c=no.maxSeparation;if(!(c>r)){var h,u,f,d,_,v,p=.1*ut.linearSlop;c>a+p?(h=n,u=t,f=s,d=e,_=l,i.type=Ne.e_faceB,v=!0):(h=t,u=n,f=e,d=s,_=o,i.type=Ne.e_faceA,v=!1),_l[0].recycle(),_l[1].recycle(),Bb(_l,h,f,_,u,d);var m=h.m_count,x=h.m_vertices,y=_,A=_+1<m?_+1:0;V(ir,x[y]),V(io,x[A]),Vt(yl,io,ir),Pn(yl),mr(qf,yl,1),Be(Xf,.5,ir,.5,io),dn(Ss,f.q,yl),mr(Xc,Ss,1),zt(ir,f,ir),zt(io,f,io);var C=st(Xc,ir),T=-st(Ss,ir)+r,E=st(Ss,io)+r;vl[0].recycle(),vl[1].recycle(),er[0].recycle(),er[1].recycle(),oi(gl,-Ss.x,-Ss.y);var P=ha(vl,_l,gl,T,y);if(!(P<2)){oi(gl,Ss.x,Ss.y);var b=ha(er,vl,gl,E,A);if(!(b<2)){V(i.localNormal,qf),V(i.localPoint,Xf);for(var M=0,B=0;B<er.length;++B){var z=st(Xc,er[B].v)-C;if(z<=r){var I=i.points[M];uu(I.localPoint,d,er[B].v),I.id.set(er[B].id),v&&I.id.swapFeatures(),++M}}i.pointCount=M}}}}};Wn.addType(Us.TYPE,Ns.TYPE,Lb);function Lb(i,t,e,n,s,r,o){Db(i,e.getShape(),t,r.getShape(),s)}var An=X(0,0),Yc=X(0,0),Db=function(i,t,e,n,s){i.pointCount=0,sp(An,s,e,n.m_p);for(var r=0,o=-1/0,a=t.m_radius+n.m_radius,l=t.m_count,c=t.m_vertices,h=t.m_normals,u=0;u<l;++u){var f=st(h[u],An)-st(h[u],c[u]);if(f>a)return;f>o&&(o=f,r=u)}var d=r,_=d+1<l?d+1:0,v=c[d],p=c[_];if(o<Bi){i.pointCount=1,i.type=Ne.e_faceA,V(i.localNormal,h[r]),Be(i.localPoint,.5,v,.5,p),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex);return}var m=st(An,p)-st(An,v)-st(v,p)+st(v,v),x=st(An,v)-st(An,p)-st(p,v)+st(p,p);if(m<=0){if(_r(An,v)>a*a)return;i.pointCount=1,i.type=Ne.e_faceA,Vt(i.localNormal,An,v),Pn(i.localNormal),V(i.localPoint,v),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex)}else if(x<=0){if(_r(An,p)>a*a)return;i.pointCount=1,i.type=Ne.e_faceA,Vt(i.localNormal,An,p),Pn(i.localNormal),V(i.localPoint,p),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex)}else{Be(Yc,.5,v,.5,p);var y=st(An,h[d])-st(Yc,h[d]);if(y>a)return;i.pointCount=1,i.type=Ne.e_faceA,V(i.localNormal,h[d]),V(i.localPoint,Yc),V(i.points[0].localPoint,n.m_p),i.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex)}},Ub=Math.min;Wn.addType(Ds.TYPE,Us.TYPE,Nb);Wn.addType(ua.TYPE,Us.TYPE,Fb);function Nb(i,t,e,n,s,r,o){gp(i,e.getShape(),t,r.getShape(),s)}var Jf=new Ds;function Fb(i,t,e,n,s,r,o){var a=e.getShape();a.getChildEdge(Jf,n),gp(i,Jf,t,r.getShape(),s)}var an;(function(i){i[i.e_unknown=-1]="e_unknown",i[i.e_edgeA=1]="e_edgeA",i[i.e_edgeB=2]="e_edgeB"})(an||(an={}));var Zf;(function(i){i[i.e_isolated=0]="e_isolated",i[i.e_concave=1]="e_concave",i[i.e_convex=2]="e_convex"})(Zf||(Zf={}));var vp=(function(){function i(){}return i})(),Ob=(function(){function i(){this.vertices=[],this.normals=[],this.count=0;for(var t=0;t<ut.maxPolygonVertices;t++)this.vertices.push(X(0,0)),this.normals.push(X(0,0))}return i})(),zb=(function(){function i(){this.v1=X(0,0),this.v2=X(0,0),this.normal=X(0,0),this.sideNormal1=X(0,0),this.sideNormal2=X(0,0)}return i.prototype.recycle=function(){Ct(this.v1),Ct(this.v2),Ct(this.normal),Ct(this.sideNormal1),Ct(this.sideNormal2)},i})(),xl=[new $i,new $i],bs=[new $i,new $i],Mn=[new $i,new $i],Un=new vp,Ei=new vp,Ze=new Ob,qt=new zb,Al=X(0,0),ko=X(0,0),so=X(0,0),Go=X(0,0),Wo=Er(0,0,0),we=X(0,0),Nn=X(0,0),Ot=X(0,0),Fn=X(0,0),$e=X(0,0),Je=X(0,0),Kf=X(0,0),ws=X(0,0),gp=function(i,t,e,n,s){rp(Wo,e,s),zt(Al,Wo,n.m_centroid);var r=t.m_vertex0,o=t.m_vertex1,a=t.m_vertex2,l=t.m_vertex3,c=t.m_hasVertex0,h=t.m_hasVertex3;Vt(so,a,o),Pn(so),oi(Ot,so.y,-so.x);var u=st(Ot,Al)-st(Ot,o),f=0,d=0,_=!1,v=!1;Ct(Nn),Ct(Fn),c&&(Vt(ko,o,r),Pn(ko),oi(Nn,ko.y,-ko.x),_=Jt(ko,so)>=0,f=g.dot(Nn,Al)-g.dot(Nn,r)),h&&(Vt(Go,l,a),Pn(Go),oi(Fn,Go.y,-Go.x),v=g.crossVec2Vec2(so,Go)>0,d=g.dot(Fn,Al)-g.dot(Fn,a));var p;Ct(we),Ct($e),Ct(Je),c&&h?_&&v?(p=f>=0||u>=0||d>=0,p?(V(we,Ot),V($e,Nn),V(Je,Fn)):(Lt(we,-1,Ot),Lt($e,-1,Ot),Lt(Je,-1,Ot))):_?(p=f>=0||u>=0&&d>=0,p?(V(we,Ot),V($e,Nn),V(Je,Ot)):(Lt(we,-1,Ot),Lt($e,-1,Fn),Lt(Je,-1,Ot))):v?(p=d>=0||f>=0&&u>=0,p?(V(we,Ot),V($e,Ot),V(Je,Fn)):(Lt(we,-1,Ot),Lt($e,-1,Ot),Lt(Je,-1,Nn))):(p=f>=0&&u>=0&&d>=0,p?(V(we,Ot),V($e,Ot),V(Je,Ot)):(Lt(we,-1,Ot),Lt($e,-1,Fn),Lt(Je,-1,Nn))):c?_?(p=f>=0||u>=0,p?(V(we,Ot),V($e,Nn),Lt(Je,-1,Ot)):(Lt(we,-1,Ot),V($e,Ot),Lt(Je,-1,Ot))):(p=f>=0&&u>=0,p?(V(we,Ot),V($e,Ot),Lt(Je,-1,Ot)):(Lt(we,-1,Ot),V($e,Ot),Lt(Je,-1,Nn))):h?v?(p=u>=0||d>=0,p?(V(we,Ot),Lt($e,-1,Ot),V(Je,Fn)):(Lt(we,-1,Ot),Lt($e,-1,Ot),V(Je,Ot))):(p=u>=0&&d>=0,p?(V(we,Ot),Lt($e,-1,Ot),V(Je,Ot)):(Lt(we,-1,Ot),Lt($e,-1,Fn),V(Je,Ot))):(p=u>=0,p?(V(we,Ot),Lt($e,-1,Ot),Lt(Je,-1,Ot)):(Lt(we,-1,Ot),V($e,Ot),V(Je,Ot))),Ze.count=n.m_count;for(var m=0;m<n.m_count;++m)zt(Ze.vertices[m],Wo,n.m_vertices[m]),dn(Ze.normals[m],Wo.q,n.m_normals[m]);var x=n.m_radius+t.m_radius;i.pointCount=0;{Un.type=an.e_edgeA,Un.index=p?0:1,Un.separation=1/0;for(var m=0;m<Ze.count;++m){var y=Ze.vertices[m],A=st(we,y)-st(we,o);A<Un.separation&&(Un.separation=A)}}if(Un.type!=an.e_unknown&&!(Un.separation>x)){{Ei.type=an.e_unknown,Ei.index=-1,Ei.separation=-1/0,oi(Kf,-we.y,we.x);for(var m=0;m<Ze.count;++m){Lt(ws,-1,Ze.normals[m]);var C=st(ws,Ze.vertices[m])-st(ws,o),T=st(ws,Ze.vertices[m])-st(ws,a),A=Ub(C,T);if(A>x){Ei.type=an.e_edgeB,Ei.index=m,Ei.separation=A;break}if(st(ws,Kf)>=0){if(st(ws,we)-st(Je,we)<-ut.angularSlop)continue}else if(st(ws,we)-st($e,we)<-ut.angularSlop)continue;A>Ei.separation&&(Ei.type=an.e_edgeB,Ei.index=m,Ei.separation=A)}}if(!(Ei.type!=an.e_unknown&&Ei.separation>x)){var E=.98,P=.001,b;if(Ei.type==an.e_unknown?b=Un:Ei.separation>E*Un.separation+P?b=Ei:b=Un,Mn[0].recycle(),Mn[1].recycle(),b.type==an.e_edgeA){i.type=Ne.e_faceA;for(var M=0,B=st(we,Ze.normals[0]),m=1;m<Ze.count;++m){var z=st(we,Ze.normals[m]);z<B&&(B=z,M=m)}var I=M,N=I+1<Ze.count?I+1:0;V(Mn[0].v,Ze.vertices[I]),Mn[0].id.setFeatures(0,se.e_face,I,se.e_vertex),V(Mn[1].v,Ze.vertices[N]),Mn[1].id.setFeatures(0,se.e_face,N,se.e_vertex),p?(qt.i1=0,qt.i2=1,V(qt.v1,o),V(qt.v2,a),V(qt.normal,Ot)):(qt.i1=1,qt.i2=0,V(qt.v1,a),V(qt.v2,o),Lt(qt.normal,-1,Ot))}else i.type=Ne.e_faceB,V(Mn[0].v,o),Mn[0].id.setFeatures(0,se.e_vertex,b.index,se.e_face),V(Mn[1].v,a),Mn[1].id.setFeatures(0,se.e_vertex,b.index,se.e_face),qt.i1=b.index,qt.i2=qt.i1+1<Ze.count?qt.i1+1:0,V(qt.v1,Ze.vertices[qt.i1]),V(qt.v2,Ze.vertices[qt.i2]),V(qt.normal,Ze.normals[qt.i1]);oi(qt.sideNormal1,qt.normal.y,-qt.normal.x),oi(qt.sideNormal2,-qt.sideNormal1.x,-qt.sideNormal1.y),qt.sideOffset1=st(qt.sideNormal1,qt.v1),qt.sideOffset2=st(qt.sideNormal2,qt.v2),xl[0].recycle(),xl[1].recycle(),bs[0].recycle(),bs[1].recycle();var Y=ha(xl,Mn,qt.sideNormal1,qt.sideOffset1,qt.i1);if(!(Y<ut.maxManifoldPoints)){var k=ha(bs,xl,qt.sideNormal2,qt.sideOffset2,qt.i2);if(!(k<ut.maxManifoldPoints)){b.type==an.e_edgeA?(V(i.localNormal,qt.normal),V(i.localPoint,qt.v1)):(V(i.localNormal,n.m_normals[qt.i1]),V(i.localPoint,n.m_vertices[qt.i1]));for(var et=0,m=0;m<ut.maxManifoldPoints;++m){var G=st(qt.normal,bs[m].v)-st(qt.normal,qt.v1);if(G<=x){var nt=i.points[et];b.type==an.e_edgeA?(uu(nt.localPoint,Wo,bs[m].v),nt.id.set(bs[m].id)):(V(nt.localPoint,bs[m].v),nt.id.set(bs[m].id),nt.id.swapFeatures()),++et}}i.pointCount=et}}}}};(function(){function i(t,e){this._refMap={},this._map={},this._xmap={},this._data=[],this._entered=[],this._exited=[],this._key=t,this._listener=e}return i.prototype.update=function(t){if(!Array.isArray(t))throw"Invalid data: "+t;this._entered.length=0,this._exited.length=0,this._data.length=t.length;for(var e=0;e<t.length;e++)if(!(typeof t[e]!="object"||t[e]===null)){var n=t[e],s=this._key(n);this._map[s]?delete this._map[s]:this._entered.push(n),this._data[e]=n,this._xmap[s]=n}for(var s in this._map)this._exited.push(this._map[s]),delete this._map[s];var r=this._map;this._map=this._xmap,this._xmap=r;for(var e=0;e<this._exited.length;e++){var n=this._exited[e],o=this._key(n),a=this._refMap[o];this._listener.exit(n,a),delete this._refMap[o]}for(var e=0;e<this._entered.length;e++){var n=this._entered[e],o=this._key(n),a=this._listener.enter(n);a&&(this._refMap[o]=a)}for(var e=0;e<this._data.length;e++)if(!(typeof t[e]!="object"||t[e]===null)){var n=this._data[e],o=this._key(n),a=this._refMap[o];this._listener.update(n,a)}this._entered.length=0,this._exited.length=0,this._data.length=0},i.prototype.ref=function(t){return this._refMap[this._key(t)]},i})();const yp=On;function Sn(i){return i/yp}function ro(i){return i*yp}class Vb{constructor(){this.world=va({gravity:g(0,-Sn(980))}),this._terrainBodies=[];const t=Sn(15);this.ballBody=this.world.createBody({type:"dynamic",position:g(0,0),bullet:!0,linearDamping:0}),this.ballBody.createFixture(Ns(t),{density:1,friction:.55,restitution:.18}),this._contactEvents=[],this.world.on("begin-contact",e=>{const n=e.getFixtureA(),s=e.getFixtureB(),r=n.getBody(),o=s.getBody();if(r===this.ballBody||o===this.ballBody){const a=this.ballBody.getLinearVelocity();this._contactEvents.push({type:"land",vx:ro(a.x),vy:ro(a.y)})}})}setGravity(t){this.world.setGravity(g(0,-Sn(t)))}addTerrain(t){this.removeTerrain(t);const e=this.world.createBody({type:"static"}),n=this._buildTerrainSegments(t),s=t.biome==="meteor"?.04:.1,r=t.biome==="cloud"?.38:t.biome==="meteor"?.68:.55;for(const o of n)e.createFixture(ua(o.map(a=>g(Sn(a.x),Sn(a.y))),!1),{friction:r,restitution:s});return e.setUserData(t),this._terrainBodies.push({terrain:t,body:e}),e}_buildTerrainSegments(t){const e=[];let n=[];const s=(r,o)=>{if(!t.damageZones?.length)return!1;const a=(r.x+o.x)/2;return t.damageZones.some(l=>a>=l.left&&a<=l.right)};for(let r=0;r<t.points.length-1;r++){const o=t.points[r],a=t.points[r+1];if(s(o,a)){n.length>=2&&e.push(n),n=[];continue}n.length===0&&n.push(o),n.push(a)}return n.length>=2&&e.push(n),e}removeTerrain(t){const e=this._terrainBodies.findIndex(n=>n.terrain===t);e!==-1&&(this.world.destroyBody(this._terrainBodies[e].body),this._terrainBodies.splice(e,1))}removeAllTerrain(){for(const{body:t}of this._terrainBodies)this.world.destroyBody(t);this._terrainBodies=[]}setArmadilloPos(t,e){this.ballBody.setPosition(g(Sn(t),Sn(e))),this.ballBody.setLinearVelocity(g(0,0)),this.ballBody.setAngularVelocity(0),this.ballBody.setAwake(!0)}moveArmadilloPos(t,e){this.ballBody.setPosition(g(Sn(t),Sn(e))),this.ballBody.setAwake(!0)}setArmadilloVelocity(t,e){this.ballBody.setLinearVelocity(g(Sn(t),Sn(e))),this.ballBody.setAwake(!0)}clearContacts(){this._contactEvents=[]}flushContacts(){this._contactEvents=[],this.ballBody.setAwake(!1),this.ballBody.setAwake(!0)}step(t){this._contactEvents=[],this.world.step(t,8,3)}getArmadilloState(){const t=this.ballBody.getPosition(),e=this.ballBody.getLinearVelocity(),n=this.ballBody.getAngle();return{x:ro(t.x),y:ro(t.y),vx:ro(e.x),vy:ro(e.y),angle:n}}get contactEvents(){return this._contactEvents}isGrounded(){for(let t=this.ballBody.getContactList();t;t=t.next)if(t.contact.isTouching())return!0;return!1}}const xp="armadillo-rush-scores",Hb=100,kb=16;function Ap(i){return String(i??"Anonymous").trim().slice(0,kb)||"Anonymous"}function Gb(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function Mp(){try{const i=localStorage.getItem(xp);if(!i)return[];const t=JSON.parse(i);return Array.isArray(t)?t:[]}catch{return[]}}function Wb(i){try{const t=[...i].sort((e,n)=>n.score-e.score).slice(0,Hb);return localStorage.setItem(xp,JSON.stringify(t)),t}catch{return i}}async function qb(i,t,e,n,s=!1){const r=Gb(),o=Ap(i),a={id:r,name:o,score:t,heightM:e,distanceM:n,moonClear:s,date:new Date().toISOString()},c=Wb([...Mp(),a]).findIndex(h=>h.id===r)+1;return{...a,rank:c}}async function Xb(i=15){return Mp().sort((t,e)=>e.score-t.score).slice(0,i).map((t,e)=>({...t,rank:e+1}))}function Yb(){try{return localStorage.getItem("armadillo-rush-player-name")??""}catch{return""}}function $b(i){try{localStorage.setItem("armadillo-rush-player-name",Ap(i))}catch{}}const Jb=`// 크레이터 마크 버텍스 셰이더
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Zb=`// 크레이터 프래그먼트 셰이더
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
`,po=64,Sp=42,jf=720,Kb=2600,jb=10500;function bp(i){return i>=jb?"meteor":i>=Kb?"cloud":"earth"}function Qb(i){return i==="cloud"?{soil:16251903,grass:14218495,ridge:16777215,bottomScale:.72}:i==="meteor"?{soil:5001050,grass:8154978,ridge:13280362,bottomScale:.95}:{soil:7162945,grass:6732650,ridge:12968357,bottomScale:1}}const Ml=[{x:240,y:-60,w:520,depth:55,rimH:22,shapeType:"bowl",softBreak:!0},{x:460,y:80,w:560,depth:65,rimH:26,shapeType:"hill",softBreak:!0},{x:690,y:-20,w:500,depth:60,rimH:24,shapeType:"valley",softBreak:!0},{x:910,y:170,w:540,depth:70,rimH:28,shapeType:"slope",softBreak:!0},{x:1140,y:50,w:520,depth:62,rimH:25,shapeType:"bowl",softBreak:!0},{x:1370,y:280,w:560,depth:75,rimH:30,shapeType:"hill",softBreak:!0},{x:1610,y:110,w:530,depth:68,rimH:27,shapeType:"valley",softBreak:!0},{x:1850,y:380,w:550,depth:80,rimH:32,shapeType:"slope",softBreak:!0},{x:2100,y:200,w:560,depth:72,rimH:28,shapeType:"hill",softBreak:!0},{x:2350,y:480,w:580,depth:85,rimH:34,shapeType:"bowl",softBreak:!0},{x:2610,y:280,w:550,depth:78,rimH:30,shapeType:"valley",softBreak:!0},{x:2870,y:580,w:570,depth:88,rimH:35,shapeType:"hill",softBreak:!0},{x:3140,y:380,w:540,depth:82,rimH:32,shapeType:"slope",softBreak:!0},{x:3400,y:680,w:580,depth:92,rimH:36,shapeType:"bowl",softBreak:!0},{x:3670,y:460,w:555,depth:86,rimH:34,shapeType:"valley",softBreak:!0},{x:3940,y:800,w:570,depth:95,rimH:38,shapeType:"hill",softBreak:!0},{x:4200,y:580,w:545,depth:88,rimH:35,shapeType:"slope"},{x:4460,y:920,w:575,depth:98,rimH:40,shapeType:"bowl"},{x:4720,y:680,w:555,depth:92,rimH:36,shapeType:"hill"},{x:4980,y:1060,w:580,depth:102,rimH:42,shapeType:"valley"},{x:5240,y:820,w:550,depth:96,rimH:38,shapeType:"slope"},{x:5500,y:1200,w:580,depth:105,rimH:44,shapeType:"hill"},{x:5760,y:970,w:555,depth:100,rimH:40,shapeType:"bowl"},{x:6020,y:1380,w:570,depth:108,rimH:44,shapeType:"valley"},{x:6290,y:1130,w:545,depth:102,rimH:42,shapeType:"hill"},{x:6550,y:1560,w:580,depth:112,rimH:46,shapeType:"slope"},{x:6820,y:1320,w:555,depth:106,rimH:43,shapeType:"bowl"},{x:7090,y:1740,w:570,depth:115,rimH:47,shapeType:"hill"},{x:7360,y:1490,w:550,depth:110,rimH:45,shapeType:"valley"},{x:7630,y:1930,w:580,depth:118,rimH:48,shapeType:"slope"},{x:7910,y:1680,w:555,depth:114,rimH:46,shapeType:"hill"},{x:8190,y:2110,w:580,depth:122,rimH:50,shapeType:"bowl"},{x:8470,y:1860,w:560,depth:118,rimH:48,shapeType:"valley",softBreak:!0},{x:8750,y:2260,w:590,depth:125,rimH:52,shapeType:"hill",softBreak:!0},{x:9040,y:2020,w:565,depth:120,rimH:49,shapeType:"slope",softBreak:!0},{x:9330,y:2420,w:595,depth:128,rimH:54,shapeType:"bowl",softBreak:!0},{x:9620,y:2180,w:570,depth:124,rimH:51,shapeType:"hill",softBreak:!0},{x:9920,y:2580,w:595,depth:130,rimH:55,shapeType:"valley",softBreak:!0},{x:10220,y:2330,w:575,depth:126,rimH:52,shapeType:"slope",softBreak:!0},{x:10530,y:2720,w:600,depth:132,rimH:56,shapeType:"hill",softBreak:!0},{x:10840,y:2820,w:610,depth:128,rimH:54,shapeType:"bowl"},{x:11150,y:3060,w:625,depth:134,rimH:57,shapeType:"hill"},{x:11470,y:2880,w:605,depth:130,rimH:55,shapeType:"valley"},{x:11790,y:3200,w:630,depth:136,rimH:58,shapeType:"slope"},{x:12120,y:3010,w:610,depth:132,rimH:56,shapeType:"bowl"},{x:12450,y:3360,w:635,depth:138,rimH:59,shapeType:"hill"},{x:12790,y:3170,w:615,depth:134,rimH:57,shapeType:"valley"},{x:13130,y:3510,w:640,depth:140,rimH:60,shapeType:"slope"},{x:13480,y:3320,w:625,depth:138,rimH:59,shapeType:"hill"},{x:13820,y:3680,w:645,depth:142,rimH:62,shapeType:"bowl"},{x:14170,y:3470,w:630,depth:140,rimH:60,shapeType:"valley"},{x:14520,y:3840,w:650,depth:145,rimH:63,shapeType:"hill"},{x:14880,y:3640,w:635,depth:142,rimH:61,shapeType:"slope"},{x:15240,y:4020,w:655,depth:148,rimH:64,shapeType:"bowl"},{x:15610,y:3820,w:640,depth:144,rimH:62,shapeType:"hill"},{x:15990,y:4200,w:660,depth:150,rimH:65,shapeType:"valley"},{x:16380,y:3990,w:645,depth:146,rimH:63,shapeType:"slope"},{x:16780,y:4400,w:665,depth:152,rimH:66,shapeType:"hill"},{x:17180,y:4190,w:650,depth:148,rimH:64,shapeType:"bowl"},{x:17590,y:4610,w:670,depth:155,rimH:67,shapeType:"valley"},{x:18010,y:4400,w:655,depth:150,rimH:65,shapeType:"hill"},{x:18440,y:4840,w:675,depth:158,rimH:68,shapeType:"slope"},{x:18880,y:4630,w:660,depth:154,rimH:66,shapeType:"bowl"},{x:19330,y:5060,w:680,depth:160,rimH:70,shapeType:"hill"},{x:19790,y:4880,w:700,depth:155,rimH:68,shapeType:"slope"},{x:20270,y:5280,w:720,depth:162,rimH:72,shapeType:"bowl"},{x:20760,y:5060,w:705,depth:158,rimH:70,shapeType:"hill"},{x:21260,y:5490,w:730,depth:166,rimH:74,shapeType:"valley"},{x:21770,y:5260,w:710,depth:162,rimH:71,shapeType:"slope"},{x:22290,y:5680,w:740,depth:170,rimH:76,shapeType:"bowl"},{x:22820,y:5440,w:720,depth:165,rimH:73,shapeType:"hill"},{x:23360,y:5870,w:745,depth:172,rimH:77,shapeType:"valley"},{x:23910,y:5650,w:730,depth:168,rimH:75,shapeType:"slope"},{x:24470,y:6080,w:755,depth:175,rimH:78,shapeType:"hill"},{x:25040,y:5860,w:740,depth:172,rimH:76,shapeType:"bowl"},{x:25620,y:6310,w:760,depth:178,rimH:80,shapeType:"valley"},{x:26210,y:6090,w:750,depth:175,rimH:78,shapeType:"slope"},{x:26810,y:6560,w:775,depth:182,rimH:82,shapeType:"hill"},{x:27420,y:6320,w:760,depth:178,rimH:80,shapeType:"bowl"},{x:28040,y:6800,w:785,depth:186,rimH:84,shapeType:"valley"},{x:28670,y:6560,w:770,depth:182,rimH:82,shapeType:"slope"},{x:29310,y:7060,w:795,depth:190,rimH:86,shapeType:"hill"},{x:29960,y:6820,w:780,depth:185,rimH:84,shapeType:"bowl"},{x:30620,y:7340,w:800,depth:194,rimH:88,shapeType:"valley"},{x:31290,y:7100,w:785,depth:190,rimH:86,shapeType:"slope"},{x:31970,y:7640,w:810,depth:198,rimH:90,shapeType:"hill"},{x:32660,y:7400,w:795,depth:194,rimH:88,shapeType:"bowl"},{x:33360,y:7960,w:820,depth:202,rimH:92,shapeType:"valley"},{x:34070,y:7720,w:805,depth:198,rimH:90,shapeType:"slope"},{x:34790,y:8300,w:830,depth:206,rimH:94,shapeType:"hill"},{x:35520,y:8060,w:815,depth:202,rimH:92,shapeType:"bowl"},{x:36260,y:8660,w:840,depth:210,rimH:96,shapeType:"valley"},{x:37010,y:9200,w:820,depth:205,rimH:94,shapeType:"slope"},{x:37770,y:9820,w:840,depth:212,rimH:97,shapeType:"hill"},{x:38540,y:9560,w:825,depth:208,rimH:95,shapeType:"bowl"},{x:39320,y:10180,w:850,depth:218,rimH:99,shapeType:"valley"},{x:40110,y:9920,w:835,depth:214,rimH:97,shapeType:"slope"},{x:40910,y:10580,w:860,depth:222,rimH:102,shapeType:"hill"},{x:41720,y:10320,w:845,depth:218,rimH:99,shapeType:"bowl"},{x:42540,y:11e3,w:870,depth:228,rimH:104,shapeType:"valley"}];function Qf({x:i,y:t,w:e,depth:n,rimH:s,shapeType:r="bowl",softBreak:o=!1,biome:a=bp(t)}){const l=i-e/2,c=i+e/2,h=Qb(a);let u;if(r==="hill"){const I=t,N=t+n+s,Y=t+n*.3,k=t+n*.2;u=[new L(l,Y,0),new L(l+e*.2,I,0),new L(l+e*.5,N,0),new L(c-e*.15,I+n*.15,0),new L(c,k,0)]}else if(r==="valley"){const I=t+n*.55+s,N=t,Y=t+n*.7+s;u=[new L(l,I,0),new L(l+e*.25,N+n*.08,0),new L(i,N,0),new L(c-e*.22,N+n*.35,0),new L(c,Y,0)]}else if(r==="slope"){const I=t,N=t+n+s;u=[new L(l,I+s*.4,0),new L(l+e*.28,I+n*.18,0),new L(l+e*.55,I+n*.58,0),new L(c-e*.1,N-s*.15,0),new L(c,N,0)]}else{const I=t+n+s,N=t+n*.15,Y=t;u=[new L(l,I,0),new L(l+e*.22,N,0),new L(i,Y,0),new L(c-e*.22,N,0),new L(c,I,0)]}const d=new Om(u,!1,"centripetal",.5).getPoints(72).map(I=>new rt(I.x,I.y)),_=r==="bowl"?t:Math.min(...d.map(I=>I.y)),v=Math.min(...d.map(I=>I.y)),p=Math.max(...d.map(I=>I.y)),m=v-po*h.bottomScale,x=d[0],y=d[d.length-1],A=Math.min(e*.16,po*.92,58),C=po*.5,T=m-Math.min(22,po*.28),E=new Rn;E.moveTo(x.x-Oi,x.y-40),E.quadraticCurveTo(x.x-Oi*.3,x.y-4,x.x,x.y);for(let I=1;I<d.length;I++)E.lineTo(d[I].x,d[I].y);E.quadraticCurveTo(c,y.y-C*.35,c,y.y-C),E.quadraticCurveTo(c,m,c-A,m),E.bezierCurveTo(i+e*.28,T,i-e*.28,T,l+A,m),E.quadraticCurveTo(l-Oi*.4,m,x.x-Oi,x.y-40),E.closePath();const P=new Et(new un(E,16),new ee({color:h.soil,side:Se}));P.position.z=-.02;const b=new Rn;b.moveTo(x.x-Oi,x.y-40),b.quadraticCurveTo(x.x-Oi*.3,x.y-4,x.x,x.y);for(let I=1;I<d.length;I++)b.lineTo(d[I].x,d[I].y);for(let I=d.length-1;I>=0;I--){const N=d[I],Y=Math.min(I,d.length-1-I)/8,k=vt.clamp(Y,.35,1);b.lineTo(N.x,N.y-14*k)}b.quadraticCurveTo(x.x-Oi*.3,x.y-10,x.x-Oi,x.y-46),b.closePath();const M=new Et(new un(b,16),new ee({color:h.grass,side:Se}));M.position.z=.02;const B=new fv(Tp(d,[]),new _a({color:h.ridge}));B.position.z=.04;const z=new fi;return z.add(P,M,B),{mesh:z,points:d,destroyed:!1,damageZones:[],damageMarks:[],softBreak:o,biome:a,shapeType:r,visuals:{soil:P,grass:M,ridge:B},visualMeta:{left:l,right:c,x:i,w:e,bottomY:m,bottomCurveY:T,cornerR:A,sideDrop:C,leftTop:x,rightTop:y},bounds:{left:l,right:c,top:p,bottom:T,rampLeft:l-Oi},bowlCenter:i,bowlFloor:_}}function t1(i){const{soil:t,grass:e,ridge:n}=i.visuals;t.geometry.dispose(),t.geometry=new un(e1(i),18),e.geometry.dispose(),e.geometry=new un(n1(i),12),n.geometry.dispose(),n.geometry=Tp(i.points,i.damageZones)}function e1(i){const{left:t,right:e,x:n,w:s,bottomY:r,bottomCurveY:o,cornerR:a,sideDrop:l,leftTop:c,rightTop:h}=i.visualMeta,u=gu(i);if(u.length>0){const d=[];let _=i.bounds.left;for(const v of u){const p=vt.clamp(v.left,i.bounds.left,i.bounds.right),m=vt.clamp(v.right,i.bounds.left,i.bounds.right);p-_>8&&d.push(tm(i,_,p)),_=Math.max(_,m)}return i.bounds.right-_>8&&d.push(tm(i,_,i.bounds.right)),d.filter(Boolean)}const f=new Rn;return i1(f,i),f.quadraticCurveTo(e,h.y-l*.35,e,h.y-l),f.quadraticCurveTo(e,r,e-a,r),f.bezierCurveTo(n+s*.28,o,n-s*.28,o,t+a,r),f.quadraticCurveTo(t-Oi*.4,r,c.x-Oi,c.y-40),f.closePath(),[f]}const Oi=60;function i1(i,t){const e=t.points,n=e[0];i.moveTo(n.x-Oi,n.y-40),i.quadraticCurveTo(n.x-Oi*.3,n.y-4,n.x,n.y);for(let s=1;s<e.length;s++)i.lineTo(e[s].x,e[s].y)}function tm(i,t,e){const{bottomY:n}=i.visualMeta,s=wp(i,t,e);if(s.length<2)return null;const r=Math.min(24,Math.max(12,(e-t)*.16)),o=n-4,a=new Rn;a.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)a.lineTo(s[h].x,s[h].y);const l=s[s.length-1],c=s[0];return a.quadraticCurveTo(e+r*.18,l.y-po*.38,e-r,o),a.lineTo(t+r,o),a.quadraticCurveTo(t-r*.18,c.y-po*.38,c.x,c.y),a.closePath(),a}function n1(i){const t=gu(i),e=[];let n=i.bounds.left;for(const s of t){const r=vt.clamp(s.left,i.bounds.left,i.bounds.right),o=vt.clamp(s.right,i.bounds.left,i.bounds.right);r-n>8&&e.push([n,r]),n=Math.max(n,o)}return i.bounds.right-n>8&&e.push([n,i.bounds.right]),e.map(([s,r])=>s1(i,s,r)).filter(Boolean)}function s1(i,t,e){const n=wp(i,t,e);if(n.length<2)return null;const s=i.bounds.rampLeft??i.bounds.left,r=Math.abs(t-i.bounds.left)<1&&s<i.bounds.left,o=new Rn;if(r){const a=i.points[0],l=i.bounds.left-s;o.moveTo(s,a.y-40),o.quadraticCurveTo(s+l*.7,a.y-4,n[0].x,n[0].y)}else o.moveTo(n[0].x,n[0].y);for(let a=1;a<n.length;a++)o.lineTo(n[a].x,n[a].y);for(let a=n.length-1;a>=0;a--){const l=n[a],c=Math.min(a,n.length-1-a)/8,h=vt.clamp(c,.35,1);o.lineTo(l.x,l.y-14*h)}if(r){const a=i.points[0],l=i.bounds.left-s;o.quadraticCurveTo(s+l*.7,a.y-10,s,a.y-46)}return o.closePath(),o}function wp(i,t,e){return[new rt(t,ui(i,t)),...i.points.filter(s=>s.x>t&&s.x<e),new rt(e,ui(i,e))]}function Tp(i,t){const e=gu({damageZones:t,bounds:{left:-1/0,right:1/0}}),n=[];for(let s=0;s<i.length-1;s++){const r=i[s],o=i[s+1],a=(r.x+o.x)/2;e.some(l=>a>=l.left&&a<=l.right)||n.push(new L(r.x,r.y+1,0),new L(o.x,o.y+1,0))}return new ei().setFromPoints(n)}function gu(i){const t=i.bounds??{left:-1/0,right:1/0},e=(i.damageZones??[]).map(s=>({...s,left:vt.clamp(s.left,t.left,t.right),right:vt.clamp(s.right,t.left,t.right)})).filter(s=>s.right>s.left).sort((s,r)=>s.left-r.left),n=[];for(const s of e){const r=n[n.length-1];if(!r||s.left>r.right){n.push({...s});continue}r.right=Math.max(r.right,s.right),r.radius=Math.max(r.radius,s.radius),r.depth=Math.max(r.depth,s.depth),r.x=(r.left+r.right)/2}return n}function $c(i,t,e=Sp,n=1){const s=vt.clamp(t,i.bounds.left,i.bounds.right),r=ui(i,s),o={x:s,radius:e,depth:n,left:s-e,right:s+e};i.damageZones.push(o),t1(i);const{chunks:a}=a1(e,n);for(const l of a)l.x=s+l.mesh.userData.offsetX,l.y=r+l.mesh.userData.offsetY,l.mesh.position.set(l.x,l.y,.18),i.mesh.add(l.mesh);i.animChunks=i.animChunks??[],i.animChunks.push(...a);for(const l of i.mesh.children)l.userData.damageable&&Math.abs(l.position.x-s)<=e*.85&&(l.visible=!1);return{zone:o,chunks:a}}function Ts(i,t,e=0){return i.damageZones.some(n=>t>=n.left-e&&t<=n.right+e)}function r1(i,t){if(!i.animChunks)return;const e=680,n=[];for(const s of i.animChunks){if(s.life-=t,s.life<=0){i.mesh.remove(s.mesh);continue}n.push(s),s.vy-=e*t,s.x+=s.vx*t,s.y+=s.vy*t,s.rot+=s.rotSpeed*t;const r=s.life/s.maxLife;s.mesh.position.set(s.x,s.y,.18),s.mesh.rotation.z=s.rot,s.mesh.scale.setScalar(r*.9+.1),s.mesh.material?.opacity!==void 0&&(s.mesh.material.opacity=Math.min(1,r*1.4))}i.animChunks=n}function o1(i,t){for(const e of i.damageMarks){const n=e.userData.craterMat;n&&(n.uniforms.uTime.value+=t)}}function a1(i,t){const e=new fi,n=new ee({color:722693,transparent:!0,opacity:.88,depthWrite:!1,side:Se}),s=new Et(new Yi(i*(.64+t*.08),48),n);s.scale.y=.34+t*.06,s.position.set(0,-i*.06,.035),e.add(s);const r=new ee({color:1314057,transparent:!0,opacity:.72,depthWrite:!1,side:Se}),o=new Et(new mi(i*(1.08+t*.18),i*(.72+t*.2)),r);o.position.set(0,-i*(.28+t*.04),.02),e.add(o);const a=new ii({vertexShader:Jb,fragmentShader:Zb,uniforms:{uDepth:{value:Math.min(t,2)},uTime:{value:0},uScale:{value:i/Sp}},transparent:!0,depthWrite:!1,side:Se}),l=i*(.46+t*.08),c=new Et(new mi(i*2.35,l*2.25,4,4),a);c.position.z=.05,e.add(c),e.userData.craterMat=a;const h=new ee({color:11108959,transparent:!0,opacity:.88,depthWrite:!1,side:Se}),u=new Et(new wr(i*.56,i*(.76+t*.05),48),h);u.scale.y=.36+t*.05,u.position.set(0,0,.075),e.add(u);const f=[],d=10+Math.floor(t*8);for(let _=0;_<d;_++){const v=_/d*Math.PI*2+(Math.random()-.5)*.4,p=6+Math.random()*10,m=5+Math.random()*8,x=new Et(new mi(p,m),new ee({color:_%3===0?12364452:7162945,transparent:!0,opacity:1,side:Se})),y=i*(1.4+Math.random()*1.8),A=Math.cos(v)*y+(Math.random()-.5)*60,C=Math.abs(Math.sin(v))*y*.7+80+Math.random()*120,T=Math.cos(v)*i*.35,E=4;x.userData.offsetX=T,x.userData.offsetY=E;const P=.55+Math.random()*.55;f.push({mesh:x,x:0,y:0,vx:A,vy:C,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*14,life:P,maxLife:P})}return{mark:e,chunks:f}}const em=["hill","valley","bowl","slope","bowl","hill","valley","slope","hill","bowl","valley","hill"];function l1(i,t){const e=Math.min(1,t/70),n=Math.round(vt.lerp(420,620,Math.random())+Math.sin(t*1.37)*30),s=Math.round(vt.lerp(50,110,Math.random())+e*20),r=Math.round(vt.lerp(20,50,Math.random())+e*10),o=vt.lerp(8,14,e),a=vt.lerp(20,40,e),l=Math.round(vt.lerp(o,a,Math.random())),h=i.bounds.right+l+n/2,u=vt.lerp(jf*.12,jf*.22,e),f=vt.lerp(-u*.25,u,Math.random()),d=vt.lerp(80,120,e),_=Math.max(-300,i.bowlFloor+f+d),v=bp(_);let p=em[(t+Math.floor(Math.random()*2))%em.length];return v==="cloud"?p=["valley","bowl","hill","bowl"][t%4]:v==="meteor"&&(p=["hill","valley","slope","bowl"][t%4]),{x:h,y:_,w:n,depth:s,rimH:r,shapeType:p,biome:v}}function ui(i,t){const e=i.points,n=e[0],s=i.bounds.rampLeft??n.x;if(t<n.x){if(t<s)return n.y-40;const r=(t-s)/Oi;return vt.lerp(n.y-40,n.y,r*r)}if(t>=e[e.length-1].x)return e[e.length-1].y;for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r];if(t>=o.x&&t<=a.x){const l=(t-o.x)/(a.x-o.x);return vt.lerp(o.y,a.y,l)}}return e[e.length-1].y}function Sl(i,t){const e=i.points;let n=1;for(let o=1;o<e.length;o++)Math.abs(e[o].x-t)<Math.abs(e[n].x-t)&&(n=o);const s=e[Math.max(0,n-1)],r=e[Math.min(e.length-1,n+1)];return Math.atan2(r.y-s.y,r.x-s.x)}const im=2,nm=10,sm=38,Ep=860,ql=Math.PI/180*25,nr=Math.cos(ql)*Ep,sr=Math.sin(ql)*Ep,Jc=320,Zc=1.15,Kc=Math.PI/180*40,c1=.28,h1=.22,u1=[{islandIndex:1,offsetX:30,offsetY:28,type:"rocket"},{islandIndex:4,offsetX:-20,offsetY:30,type:"boost"},{islandIndex:9,offsetX:40,offsetY:26,type:"rocket"},{islandIndex:12,offsetX:-30,offsetY:28,type:"boost"},{islandIndex:14,offsetX:20,offsetY:24,type:"rocket"},{islandIndex:17,offsetX:50,offsetY:28,type:"rocket"},{islandIndex:19,offsetX:-40,offsetY:30,type:"boost"},{islandIndex:21,offsetX:0,offsetY:36,type:"heart"},{islandIndex:22,offsetX:35,offsetY:26,type:"rocket"},{islandIndex:25,offsetX:-25,offsetY:28,type:"boost"},{islandIndex:27,offsetX:45,offsetY:24,type:"rocket"},{islandIndex:30,offsetX:0,offsetY:30,type:"boost"},{islandIndex:31,offsetX:-35,offsetY:28,type:"rocket"},{islandIndex:33,offsetX:30,offsetY:30,type:"boost"},{islandIndex:35,offsetX:50,offsetY:26,type:"rocket"},{islandIndex:37,offsetX:-20,offsetY:28,type:"boost"},{islandIndex:39,offsetX:0,offsetY:38,type:"heart"},{islandIndex:41,offsetX:40,offsetY:28,type:"rocket"},{islandIndex:43,offsetX:-30,offsetY:30,type:"boost"},{islandIndex:45,offsetX:25,offsetY:26,type:"rocket"},{islandIndex:47,offsetX:0,offsetY:32,type:"boost"},{islandIndex:50,offsetX:55,offsetY:28,type:"rocket"},{islandIndex:52,offsetX:-40,offsetY:30,type:"boost"},{islandIndex:54,offsetX:35,offsetY:24,type:"rocket"},{islandIndex:56,offsetX:0,offsetY:42,type:"heart"},{islandIndex:58,offsetX:-30,offsetY:28,type:"boost"},{islandIndex:60,offsetX:45,offsetY:26,type:"rocket"},{islandIndex:62,offsetX:-20,offsetY:30,type:"boost"},{islandIndex:64,offsetX:10,offsetY:26,type:"rocket"}],yu={rocket:{main:16739584,ring:16727296},boost:{main:16766464,glow:16775620,ring:16361509},heart:{main:16717636,glow:16747136,ring:12000284}};function Ft(i,t,e,n,s,r,o=.12){const a=new Rn;a.moveTo(t,e),a.lineTo(t+n,e),a.lineTo(t+n,e+s),a.lineTo(t,e+s),a.closePath();const l=new Et(new un(a),new ee({color:r,side:Se}));l.position.z=o,i.add(l)}function d1(){const i=new fi,t=yu.rocket,e=3,n=4004352;Ft(i,-2*e,6*e,4*e,e,n,.09),Ft(i,-3*e,-3*e,6*e,10*e,n,.09),Ft(i,-6*e,-4*e,3*e,5*e,n,.09),Ft(i,3*e,-4*e,3*e,5*e,n,.09),Ft(i,-2*e,-6*e,4*e,3*e,6702080,.09),Ft(i,-e,7*e,2*e,e,t.main),Ft(i,-2*e,6*e,4*e,e,t.main),Ft(i,-3*e,-3*e,6*e,9*e,t.main),Ft(i,-e,3*e,2*e,2*e,6707,.13),Ft(i,-e,4*e,e,e,6737151,.14),Ft(i,-3*e,0,e,3*e,16727296,.13),Ft(i,2*e,0,e,3*e,16727296,.13),Ft(i,-5*e,-3*e,2*e,4*e,t.ring),Ft(i,3*e,-3*e,2*e,4*e,t.ring),Ft(i,-2*e,-5*e,4*e,2*e,16763904),Ft(i,-e,-6*e,2*e,e,16777215,.13);const s=new Et(new wr(22,26,12),new ee({color:t.ring,transparent:!0,opacity:.45,side:Se}));return s.position.z=.1,i.add(s),i.rotation.z=-ql,i}function f1(){const i=new fi,t=yu.boost,e=3,n=4007936;Ft(i,-e,5*e,5*e,3*e,n,.09),Ft(i,-3*e,e,6*e,5*e,n,.09),Ft(i,-e,-2*e,6*e,4*e,n,.09),Ft(i,-3*e,-5*e,5*e,4*e,n,.09),Ft(i,0,5*e,3*e,2*e,t.main),Ft(i,-2*e,2*e,4*e,3*e,t.main),Ft(i,0,-e,4*e,3*e,t.main),Ft(i,-2*e,-4*e,3*e,3*e,t.main),Ft(i,e,5*e,e,2*e,t.glow,.13),Ft(i,-e,2*e,2*e,3*e,t.glow,.13),Ft(i,e,-e,2*e,2*e,t.glow,.13),Ft(i,-e,-4*e,2*e,2*e,t.glow,.13),Ft(i,2*e,2*e,e,3*e,t.ring,.11),Ft(i,3*e,-e,e,2*e,t.ring,.11);const s=new Et(new wr(20,24,12),new ee({color:t.ring,transparent:!0,opacity:.55,side:Se}));return s.position.z=.11,i.add(s),i}function m1(){const i=new fi,t=yu.heart,e=t.main,n=3,s=5046288;Ft(i,-5*n,4*n,4*n,3*n,s,.09),Ft(i,n,4*n,4*n,3*n,s,.09),Ft(i,-5*n,-n,10*n,6*n,s,.09),Ft(i,-4*n,-3*n,8*n,3*n,s,.09),Ft(i,-3*n,-5*n,6*n,3*n,s,.09),Ft(i,-2*n,-7*n,4*n,3*n,s,.09),Ft(i,-n,-8*n,2*n,2*n,s,.09),Ft(i,-4*n,4*n,3*n,2*n,e),Ft(i,n,4*n,3*n,2*n,e),Ft(i,-4*n,2*n,8*n,2*n,e),Ft(i,-4*n,0,8*n,2*n,e),Ft(i,-3*n,-2*n,6*n,2*n,e),Ft(i,-2*n,-4*n,4*n,2*n,e),Ft(i,-n,-6*n,2*n,2*n,e),Ft(i,-3*n,2*n,3*n,2*n,t.glow,.13),Ft(i,-2*n,0,2*n,n,t.glow,.13),Ft(i,2*n,0,2*n,2*n,t.ring,.11),Ft(i,-2*n,-2*n,2*n,2*n,t.ring,.11);const r=new Et(new wr(20,24,16),new ee({color:t.glow,transparent:!0,opacity:.5,side:Se}));return r.position.z=.1,i.add(r),i}function rm(i,t,e){const n=i==="rocket"?d1():i==="boost"?f1():m1();return n.position.set(t,e,0),{type:i,x:t,y:e,mesh:n,collected:!1,bobOffset:Math.random()*Math.PI*2}}function p1(i){const t=i-65;return t<0?null:t%28===0?{type:"heart",offsetX:0,offsetY:34}:t%14===0?{type:"boost",offsetX:-30,offsetY:28}:t%10===0?{type:"rocket",offsetX:40,offsetY:26}:null}function _1(i,t,e){for(const n of i){if(n.collected)continue;const s=Math.sin(e*2.4+n.bobOffset)*5;if(n.mesh.position.y=n.y+s,n.type==="rocket"&&(n.mesh.rotation.z=-ql+Math.sin(e*1.4+n.bobOffset)*.18),n.type==="boost"){const r=1+Math.sin(e*3.5+n.bobOffset)*.1;n.mesh.scale.setScalar(r)}if(n.type==="heart"){const r=1+Math.sin(e*3+n.bobOffset)*.08;n.mesh.scale.setScalar(r)}}}function v1(i,t,e){for(const n of i){if(n.collected)continue;const s=t-n.x,r=e-n.y;if(s*s+r*r<=sm*sm)return n}return null}function g1(i){i.collected=!0,i.mesh.visible=!1}const rr=1/60,om=.25,Nt=30,Es=1600,bn=-360,qo=18e3,y1=.42,Ke=new rt(-280,0),am=70,Xo=120,jc=18,Qc=.78,lm=1,x1=22e3,A1=120,M1=36,cm=vt.degToRad(40),S1=vt.degToRad(58),oo=320,b1=700,w1=1.7,Di=1.8,th=.28,eh=820,hm=.28,T1=.28,E1=.62,C1=.86,um=.3,R1=1.8,P1=320,B1=400,I1=12,dm=new Xt(9362687),Yo=new Xt(5214684),ao=new Xt(1120838),bl=new Xt(16),fm=["Hold to charge the slingshot — more power, more distance.","Smashing through terrain gives you a speed burst on exit.","Hold SPACE while rolling to accelerate, release to jump.","Keep SPACE held in the air — the armadillo spins until landing.","The higher you fly before hitting the sea, the stronger your bounce.","Aim for the moon — height earns more points than distance.","You have 3 lives. The sea will bounce you back — use them wisely.","Speed is everything. Don't let it stall on the slopes."];class L1{constructor(){const t=document.getElementById("game-canvas");this.renderer=new GA(t),this.background=new XA(this.renderer),this.postfx=new uS(this.renderer.renderer,this.renderer.scene,this.renderer.camera,this.background.scene,this.background.camera),this.renderer.registerPostFX(this.postfx),this.particleSystem=new mS,this.renderer.add(this.particleSystem.mesh),this.physics=new Vb,this.sm=new _S(K.TITLE),this.time=0,this.accumulator=0,this.lastNow=performance.now(),this.velocity=new rt(0,0),this.speedRatio=.75,this.motion={previous:new L,current:new L,render:new L,previousRot:0,currentRot:0,renderRot:0},this.slingDragging=!1,this.slingPull=new rt(0,0),this.slingPower=0,this.slingAngle=Math.PI/4,this._pendingPointerClear=!1,this._namePromptJustClosed=!1,this._slingReady=!1,this._slingBlockUntil=0,this._tutorialRendered=!1,this._tutorialLang="ko",this._lastGameOverKey=null,this.boostHeld=!1,this.boostHoldSource=null,this.spinAngleVel=0,this._edgeFallGraceTimer=0,this._spawnGraceTimer=0,this._pendingTerrainRebuild=new Set,this.currentIsland=null,this.islandIndex=Ml.length,this.scenery=[],this.bestHeightPx=0,this.bestDistancePx=0,this.lastRating="READY",this.stallTime=0,this.trauma=0,this.flashTime=0,this.slowmoTime=0,this.splashGameOverTimer=0,this.splashStarted=!1,this.flightPeakY=0,this.lives=3,this.doubleJumpUsed=!1,this.preBoostSource=null,this.pointerIsDown=!1,this.spaceIsDown=!1,this.bestRecord=this._loadBestRecord(),this.isPaused=!1,this.playerName=Yb()||"",this.showingLeaderboard=!1,this.leaderboardEntries=[],this.pendingScoreEntry=null,this._respawnWaiting=!1,this._respawnPos=null,this._tipIndex=Math.floor(Math.random()*fm.length),this.audio=null,this.items=[],this.activeRocket=null,this.activeSpring=null,this.ripples=[],this._buildRipplePool(),this.slingSnapTime=0,this.flameTrailCooldown=0,this._dustTimer=0,this.camTarget=new rt(Ke.x,Ke.y),this.camPos=new rt(Ke.x,Ke.y),this.ui=document.getElementById("ui-overlay"),this._buildPlaceholderWorld(),this._bindInput(),this.renderer.setCenter(Ke.x,Ke.y),this._renderHud()}_buildPlaceholderWorld(){this._buildSceneSkyPlane(),this._buildWorldSea(),this._buildScenery(),this.staticIslands=[],this.islands=[],this._buildSling(),this.armadillo=this._createArmadillo(),this.renderer.add(this.armadillo),this.armadilloShadow=new Et(new Yi(1,24),new ee({color:658458,transparent:!0,opacity:0,depthWrite:!1})),this.armadilloShadow.position.z=-.05,this.armadilloShadow.renderOrder=-1,this.renderer.add(this.armadilloShadow),this._resetRun(),this._syncMotionToArmadillo(),this.maxHeightPx=this.islands[this.islands.length-1].bounds.top+240}_spawnNextIsland(){const t=this.islands[this.islands.length-1],e=this._avoidTerrainOverlap(l1(t,this.islandIndex),t),n=this.islandIndex;this.islandIndex+=1;const s=Qf(e);this.renderer.add(s.mesh),this.islands.push(s),this.physics.addTerrain(s),this.maxHeightPx=Math.max(this.maxHeightPx,s.bounds.top+240),this.items&&this._trySpawnItemForIsland(s,n)}_avoidTerrainOverlap(t,e){if(!e)return t;const n=e.bounds.right+I1;return t.x-t.w/2>=n?t:{...t,x:n+t.w/2}}_randomizeInitialTerrainSpec(t,e){const n=["hill","valley","bowl","slope"],s=e<8,o=t.y<-160?44:s?90:180;return{...t,x:t.x+(Math.random()-.5)*90,y:t.y+(Math.random()-.5)*o,w:Math.round(t.w*vt.lerp(.78,.96,Math.random())),depth:Math.max(20,Math.round(t.depth+(Math.random()-.5)*18)),rimH:Math.max(12,Math.round(t.rimH+(Math.random()-.5)*10)),shapeType:s?t.shapeType:n[Math.floor(Math.random()*n.length)]}}_buildSling(){{const t=Ke,e=new rt(t.x-68,t.y+116),n=new rt(t.x+68,t.y+114),s=new jv().load(OA);s.colorSpace=Me,s.minFilter=gi,s.magFilter=gi;const r=new Et(new mi(154,154),new ee({map:s,color:8016187,transparent:!0,depthWrite:!1}));r.position.set(t.x,t.y+4,-.08),r.rotation.z=.02;const o=new Et(new mi(154,154),new ee({map:s,color:2495759,transparent:!0,opacity:.32,depthWrite:!1}));o.position.set(t.x+3,t.y,-.095),o.rotation.z=r.rotation.z;const a=new ee({color:8081204}),l=new ee({color:2824209}),c=new ee({color:12024402,transparent:!0,opacity:.46}),h=(b,M,B,z,I=!0)=>{const N=M.x-b.x,Y=M.y-b.y,k=Math.hypot(N,Y),et=new fi;et.position.set((b.x+M.x)/2,(b.y+M.y)/2,z),et.rotation.z=Math.atan2(Y,N)-Math.PI/2;const G=new Et(new Bs(B+5,k,1),l);G.position.set(2.5,-2.5,-.006);const nt=new Et(new Bs(B,k,1),a),dt=new Et(new Bs(B*.22,k*.78,1),c);if(dt.position.set(-B*.22,0,.008),et.add(G,nt,dt),I){const gt=new Et(new Yi(B/2,24),a);gt.position.y=k/2,et.add(gt)}return et},u=h(new rt(t.x,t.y-118),new rt(t.x,t.y+14),19,-.072,!1),f=h(new rt(t.x-7,t.y+4),e,16,-.068),d=h(new rt(t.x+7,t.y+4),n,16,-.086);d.traverse(b=>{b.renderOrder=2});const _=new Et(new Yi(16,32),a);_.scale.set(1.04,.86,1),_.position.set(t.x,t.y+3,-.058);const v=()=>{const b=new ei;return b.setAttribute("position",new ti(new Array(12).fill(0),3)),b.setIndex([0,1,2,0,2,3]),b},p=new ee({color:2101517,transparent:!0,opacity:.96,side:Se,depthWrite:!1});this.slingBandL=new Et(v(),p.clone()),this.slingBandR=new Et(v(),p.clone()),this.slingBandL.renderOrder=10,this.slingBandR.renderOrder=10;const m=new ee({color:7162945,transparent:!0,opacity:.58,side:Se,depthWrite:!1});this.slingBandHiL=new Et(v(),m.clone()),this.slingBandHiR=new Et(v(),m.clone()),this.slingBandHiL.renderOrder=11,this.slingBandHiR.renderOrder=11;const x=new Rn;x.moveTo(-24,0),x.bezierCurveTo(-17,-17,17,-17,24,0),x.bezierCurveTo(18,13,-18,13,-24,0),x.closePath();const y=new Et(new un(x,18),new ee({color:2035981,transparent:!0,opacity:.54,side:Se,depthTest:!1,depthWrite:!1}));y.scale.set(1.08,1.16,1),y.position.z=-.02,y.renderOrder=6,this.slingPouch=new Et(new un(x,18),new ee({color:7028523,depthTest:!1,depthWrite:!1})),this.slingPouch.position.z=-.016,this.slingPouch.renderOrder=6;const A=new Rn;A.moveTo(-22,-5),A.bezierCurveTo(-15,-15,15,-15,22,-5),A.bezierCurveTo(14,-1,-14,-1,-22,-5),A.closePath();const C=new Et(new un(A,18),new ee({color:4925982,transparent:!0,opacity:.96,side:Se,depthTest:!1,depthWrite:!1}));C.position.z=.09,C.renderOrder=30;const T=new Et(new Yi(3.8,18),new ee({color:12946019,transparent:!0,opacity:.34,depthTest:!1,depthWrite:!1}));T.scale.set(1.8,.58,1),T.position.set(-6,-5,.012),T.renderOrder=6,this.slingPouchGroup=new fi,this.slingPouchGroup.add(y,this.slingPouch,T,C),this.renderer.add(u),this.renderer.add(f),this.renderer.add(d),this.renderer.add(o),this.renderer.add(r),this.renderer.add(this.slingBandL),this.renderer.add(this.slingBandR),this.renderer.add(this.slingBandHiL),this.renderer.add(this.slingBandHiR),this.renderer.add(this.slingPouchGroup),this._forkTipU={x:e.x,y:e.y},this._forkTipD={x:n.x,y:n.y};const E=new $v({color:16777215,dashSize:8,gapSize:6,opacity:.5,transparent:!0}),P=new ei().setFromPoints(Array.from({length:16},()=>new L(0,0,0)));this.slingGuide=new Ol(P,E),this.slingGuide.visible=!1,this.slingGuide.computeLineDistances(),this.renderer.add(this.slingGuide);return}}_getSlingPocketPosition(){return new rt(Ke.x+this.slingPull.x,Ke.y+am+this.slingPull.y)}_getSlingPouchRotation(){const t=vt.clamp(this.slingPull.length()/Xo,0,1);return(this.slingDragging||this.slingSnapTime>0?vt.clamp((this.slingAngle-Math.PI/2)*.38,-.34,.34):0)*vt.smoothstep(t,.04,.26)}_getSlingArmadilloPosition(){const t=this._getSlingPocketPosition(),e=this._getSlingPouchRotation(),n=t.y-12;return new rt(t.x-Math.sin(e)*12,n+Math.cos(e)*12)}_updateSlingVisuals(){const t=this._getSlingPocketPosition();let e=t.x,n=t.y;if(this.slingSnapTime>0){const d=1-this.slingSnapTime/.22,_=Math.exp(-d*14),v=Math.sin(d*Math.PI*5),p=28*_*v;e+=p*Math.cos(this.slingAngle+Math.PI),n+=p*Math.sin(this.slingAngle+Math.PI)}const s=(d,_,v,p,m,x=1,y=.06,A=0)=>{const C=p-_,T=m-v,E=Math.max(1,Math.hypot(C,T)),P=-T/E,b=C/E,M=(5.5+vt.clamp(this.slingPull.length()/Xo,0,1)*2.5)*x,B=P*A,z=b*A,I=d.geometry.attributes.position;I.setXYZ(0,_+B+P*M,v+z+b*M,y),I.setXYZ(1,_+B-P*M,v+z-b*M,y),I.setXYZ(2,p+B-P*M,m+z-b*M,y),I.setXYZ(3,p+B+P*M,m+z+b*M,y),I.needsUpdate=!0,d.geometry.computeBoundingSphere()},r=n-12;this.slingPouchGroup.rotation.z=this._getSlingPouchRotation();const o=Math.cos(this.slingPouchGroup.rotation.z),a=Math.sin(this.slingPouchGroup.rotation.z),l=24,c=e-o*l,h=r-a*l,u=e+o*l,f=r+a*l;if(s(this.slingBandL,this._forkTipU.x,this._forkTipU.y,c,h),s(this.slingBandR,this._forkTipD.x,this._forkTipD.y,u,f),s(this.slingBandHiL,this._forkTipU.x,this._forkTipU.y,c,h,.34,.068,2.6),s(this.slingBandHiR,this._forkTipD.x,this._forkTipD.y,u,f,.34,.068,2.6),this.slingPouchGroup.position.set(e,r,.07),this.slingDragging&&this.slingPower>.05){const d=this.slingPower*Es,_=Math.cos(this.slingAngle)*d,v=Math.sin(this.slingAngle)*d,p=e,m=n,x=this.slingGuide.geometry.attributes.position;for(let y=0;y<16;y++){const A=y*.055;x.setXYZ(y,p+_*A,m+v*A-.5*Lo*A*A,.05)}x.needsUpdate=!0,this.slingGuide.computeLineDistances(),this.slingGuide.visible=!0}else this.slingGuide.visible=!1}_buildRipplePool(){const t=new ee({color:16777215,transparent:!0,opacity:0,wireframe:!0,depthWrite:!1});for(let e=0;e<4;e++){const n=new Et(new wr(.8,1,32),t.clone());n.visible=!1,n.renderOrder=5,this.renderer.add(n),this.ripples.push({mesh:n,life:0,maxLife:0,x:0,y:0,maxRadius:80})}}_spawnRipple(t,e,n=16777215,s=80,r=.45){const o=this.ripples.find(a=>a.life<=0);o&&(o.x=t,o.y=e,o.life=r,o.maxLife=r,o.maxRadius=s,o.mesh.material.color.set(n),o.mesh.position.set(t,e,.15),o.mesh.visible=!0)}_updateRipples(t){for(const e of this.ripples){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}const n=1-e.life/e.maxLife,s=e.maxRadius*n,r=(1-n)*.7;e.mesh.scale.setScalar(s),e.mesh.material.opacity=r}}_buildScenery(){const t=new Et(new Yi(58,40),new ee({color:16774064,transparent:!0,opacity:.85}));this._addScenery(t,.04,270,210,.2);for(const e of[{x:-360,y:-330,scale:1.15,color:3100511,layer:.18},{x:120,y:-360,scale:1.35,color:3497061,layer:.14},{x:620,y:-345,scale:1.05,color:4352873,layer:.2},{x:1180,y:-365,scale:1.25,color:3230811,layer:.16}]){const n=this._createMountain(e.color);n.scale.setScalar(e.scale),this._addScenery(n,e.layer,e.x,e.y,0)}for(const e of[{x:-260,y:180,scale:.85,layer:.32,drift:.9},{x:320,y:250,scale:1.1,layer:.28,drift:.7},{x:900,y:150,scale:.75,layer:.36,drift:1.1}]){const n=this._createCloud();n.scale.setScalar(e.scale),this._addScenery(n,e.layer,e.x,e.y,e.drift)}}_addScenery(t,e,n,s,r){t.position.set(n,s,-20),t.userData={layer:e,baseX:n,baseY:s,drift:r},this.scenery.push(t),this.renderer.add(t)}_createMountain(t){const e=new fi,n=new ee({color:t,transparent:!0,opacity:.72,side:Se});for(const[s,r,o]of[[-120,220,250],[40,280,320],[210,190,230]]){const a=new Rn;a.moveTo(s-r/2,0),a.lineTo(s,o),a.lineTo(s+r/2,0),a.closePath(),e.add(new Et(new un(a),n))}return e}_createCloud(){const t=new fi,e=new ee({color:16777215,transparent:!0,opacity:.55});for(const[n,s,r]of[[-28,0,23],[0,12,30],[32,3,24],[58,-2,16]]){const o=new Et(new Yi(r,24),e);o.position.set(n,s,-21),t.add(o)}return t}_buildWorldSea(){this.worldSea=new fi;const t=new ee({color:1415112,transparent:!0,opacity:.88,depthWrite:!1,side:Se});this.worldSeaBody=new Et(new mi(2400,520),t),this.worldSeaBody.position.set(0,bn-260,-40),this.worldSea.add(this.worldSeaBody);const e=new _a({color:14285823,transparent:!0,opacity:.78,depthTest:!1}),n=new ei().setFromPoints(Array.from({length:64},(s,r)=>new L(-1200+r/63*2400,0,0)));this.worldSeaFoam=new Ol(n,e),this.worldSeaFoam.position.set(0,bn,-39),this.worldSea.add(this.worldSeaFoam),this.renderer.add(this.worldSea)}_updateWorldSea(){if(!this.worldSea)return;const t=Math.max(this.renderer.viewWidthPx*1.4,2400);this.worldSeaBody.scale.x=t/2400,this.worldSeaBody.position.x=this.camPos.x,this.worldSeaFoam.position.x=this.camPos.x;const e=this.worldSeaFoam.geometry.attributes.position;for(let n=0;n<e.count;n++){const s=-1200+n/(e.count-1)*2400,r=Math.sin(this.time*1.8+n*.42)*5;e.setXYZ(n,s,r,0)}e.needsUpdate=!0}_buildSceneSkyPlane(){this.sceneSkyMaterial=new ii({vertexShader:`
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
      `,uniforms:{uBottom:{value:new Xt(9362687)},uTop:{value:new Xt(5214684)},uSeaVis:{value:1}},depthTest:!1,depthWrite:!1}),this.sceneSkyPlane=new Et(new mi(1,1),this.sceneSkyMaterial),this.sceneSkyPlane.position.z=-900,this.sceneSkyPlane.renderOrder=-1e4,this.renderer.add(this.sceneSkyPlane)}_updateSceneSkyPlane(t){if(!this.sceneSkyPlane)return;const e=new Xt,n=new Xt;if(t<.34){const s=vt.smoothstep(t,.04,.34);e.copy(dm).lerp(Yo,s*.65),n.copy(Yo).lerp(ao,s*.35)}else if(t<.68){const s=vt.smoothstep(t,.34,.68);e.copy(Yo).lerp(ao,s),n.copy(ao).lerp(bl,s*.45)}else{const s=vt.smoothstep(t,.68,.9);e.copy(ao).lerp(bl,s),n.copy(bl)}this.sceneSkyMaterial.uniforms.uBottom.value.copy(e),this.sceneSkyMaterial.uniforms.uTop.value.copy(n),this.sceneSkyMaterial.uniforms.uSeaVis.value=1-vt.smoothstep(t,.06,.26),this.sceneSkyPlane.position.x=this.camPos.x,this.sceneSkyPlane.position.y=this.camPos.y,this.sceneSkyPlane.scale.set(this.renderer.viewWidthPx*1.08,this.renderer.viewHeightPx*1.08,1)}_createArmadillo(){{const t=new fi,e=(o,a)=>{const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d");c.imageSmoothingEnabled=!1,(()=>{c.clearRect(0,0,256,256),c.fillStyle="rgba(50, 34, 28, 0.32)",c.beginPath(),c.ellipse(128,144,a.dw/2,a.dh/3,0,0,Math.PI*2),c.fill()})();const u=new pv(l);u.colorSpace=Me,u.minFilter=Pi,u.magFilter=Pi;const f=new Image;return f.onload=()=>{const d=document.createElement("canvas");d.width=o.w,d.height=o.h;const _=d.getContext("2d");_.imageSmoothingEnabled=!1,_.drawImage(f,o.x,o.y,o.w,o.h,0,0,o.w,o.h);const v=_.getImageData(0,0,o.w,o.h),{data:p}=v;for(let m=0;m<p.length;m+=4)p[m]>242&&p[m+1]>242&&p[m+2]>242&&(p[m+3]=0);_.putImageData(v,0,0),c.clearRect(0,0,256,256),c.drawImage(d,a.dx,a.dy,a.dw,a.dh),u.needsUpdate=!0},f.src=FA,u},n=e({x:4,y:21,w:24,h:11},{dx:10,dy:42,dw:236,dh:150}),s=e({x:169,y:84,w:11,h:11},{dx:50,dy:50,dw:156,dh:156}),r=new Et(new mi(54,54),new ee({map:n,transparent:!0,depthWrite:!1}));return r.position.z=.12,r.renderOrder=20,t.add(r),this.armadilloBody=r,this.armadilloShell=r,this.armadilloSprite=r,this.armadilloIdleTexture=n,this.armadilloCurledTexture=s,this.armadilloBodyMat=null,this.armadilloShellMat=null,this.armadilloShellBaseMat=r.material,t}}_setArmadilloColor(t){this.armadilloBodyMat&&this.armadilloBodyMat.color.set(t),this.armadilloBodyMat&&(this.armadilloBodyMat.opacity=t===16717636?.28:.5)}_setArmadilloCurled(t){if(!this.armadilloSprite||!this.armadilloIdleTexture||!this.armadilloCurledTexture)return;const e=t?this.armadilloCurledTexture:this.armadilloIdleTexture;this.armadilloSprite.material.map!==e&&(this.armadilloSprite.material.map=e,this.armadilloSprite.material.needsUpdate=!0),this.armadilloSprite.scale.set(t?1:1.12,t?1:1.01,1)}_setArmadilloSprite(t){this._setArmadilloCurled(t!=="idle"||this.slingDragging)}_bindInput(){const t=e=>{const n=e.target instanceof Element?e.target.closest("[data-action]"):null;if(!n)return!1;e.preventDefault(),e.stopPropagation(),this._ensureAudio();const s=n.dataset.action;if(s==="pause"&&this._togglePause(),s==="restart"&&this._restartToTitle(),s==="boost"&&this._startBoostHold("pointer"),s==="leaderboard"&&this._openLeaderboard(),s==="leaderboard-close"&&this._closeLeaderboard(),s==="start-game"&&(this._resetRun(),this.sm.transition(K.SLINGING),this._pendingPointerClear=!0),s==="score-save"){const r=this.ui.querySelector(".name-input");this._saveScoreWithName(r?r.value:"")}return s==="toggle-lang"&&(this._tutorialLang=this._tutorialLang==="ko"?"en":"ko"),!0};window.addEventListener("pointerdown",e=>{t(e)||this.showingLeaderboard||e.target instanceof Element&&e.target.closest("#ui-overlay")||(e.preventDefault(),this._ensureAudio(),this.pointerIsDown=!0,this._handlePointerDown(e.clientX,e.clientY))},{passive:!1}),window.addEventListener("pointermove",e=>{this.slingDragging&&(e.preventDefault(),this._handlePointerMove(e.clientX,e.clientY))},{passive:!1}),window.addEventListener("pointerup",e=>{if(this.pointerIsDown=!1,this._pendingPointerClear){this._pendingPointerClear=!1,this.sm.is(K.SLINGING)&&(this._slingReady=!0);return}if(this._namePromptJustClosed){this._namePromptJustClosed=!1;return}if(!(document.activeElement&&document.activeElement.classList.contains("name-input"))){if(this.slingDragging){e.preventDefault(),this._handlePointerRelease();return}this._endHold("pointer")}},{passive:!1}),window.addEventListener("pointercancel",()=>{this.pointerIsDown=!1,this._pendingPointerClear=!1,this.slingDragging=!1,this.slingPull.set(0,0),this._setArmadilloCurled(!1),this._cancelHold()}),window.addEventListener("blur",()=>{this._cancelHold()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this._cancelHold()}),window.addEventListener("keydown",e=>{if(e.target instanceof HTMLInputElement){e.code==="Enter"&&(e.preventDefault(),this._saveScoreWithName(e.target.value));return}if(!e.repeat){if(e.code==="Space"){if(e.preventDefault(),this.sm.is(K.TITLE))return;this.spaceIsDown=!0,this._ensureAudio(),this._handleKeyboardPress();return}if(e.code==="Escape"){if(this.showingLeaderboard){this._closeLeaderboard();return}e.preventDefault(),this._togglePause()}}},{capture:!0}),window.addEventListener("keyup",e=>{if(!(e.target instanceof HTMLInputElement)&&e.code==="Space"){if(e.preventDefault(),this.spaceIsDown=!1,this.sm.is(K.TITLE))return;this._endHold("keyboard")}},{capture:!0})}_screenToWorld(t,e){const s=this.renderer.renderer.domElement.getBoundingClientRect(),r=(t-s.left)/s.width*2-1,o=-((e-s.top)/s.height*2-1),a=this.renderer.camera,l=(a.right-a.left)/2,c=(a.top-a.bottom)/2;return new rt(this.camPos.x+r*l,this.camPos.y+o*c)}_worldToScreen(t,e){const n=this.renderer.renderer.domElement,s=n.clientWidth,r=n.clientHeight,o=this.renderer.camera,a=(o.right-o.left)/2,l=(o.top-o.bottom)/2;return{x:(t-this.camPos.x)/a*(s/2)+s/2,y:-(e-this.camPos.y)/l*(r/2)+r/2}}_handlePointerDown(t,e){if(!this.isPaused){if(this.sm.is(K.TITLE)||this.sm.is(K.GAMEOVER)){this._resetRun(),this.sm.transition(K.SLINGING),this._pendingPointerClear=!0;return}if(this.sm.is(K.SLINGING)){if(!this._slingReady||performance.now()<this._slingBlockUntil)return;this.slingDragging=!0,this._handlePointerMove(t,e);return}if(this.sm.is(K.ROLLING)){this._beginHold("pointer");return}if((this.sm.is(K.FLYING)||this.sm.is(K.FALLING))&&this._respawnWaiting){this._activateRespawn();return}if(this.sm.is(K.FLYING)||this.sm.is(K.FALLING)){this._beginHold("pointer");return}}}_handlePointerMove(t,e){if(!this.slingDragging||!this.sm.is(K.SLINGING))return;const n=this._screenToWorld(t,e),s=new rt(n.x-Ke.x,n.y-(Ke.y+am)),r=Math.min(s.length(),Xo);s.length()>.001&&s.normalize().multiplyScalar(r),this.slingPull.copy(s),this._setArmadilloCurled(!0),r>jc?(this.slingAngle=Math.atan2(-s.y,-s.x),this.slingPower=vt.lerp(Qc,lm,(r-jc)/(Xo-jc))):this.slingPower=0;const o=this._getSlingArmadilloPosition();this.armadillo.position.set(o.x,o.y,0),this._syncMotionToArmadillo(),this._updateSlingVisuals()}_handlePointerRelease(){if(this.slingDragging&&(this.slingDragging=!1,!!this.sm.is(K.SLINGING))){if(this.slingPower<.05){this.slingPull.set(0,0),this._setArmadilloCurled(!1);return}this._launchFromSling()}}_beginHold(t="pointer"){this.isPaused||(this._ensureAudio(),this.boostHeld=!0,this.boostHoldSource=t,(this.sm.is(K.FLYING)||this.sm.is(K.FALLING))&&(this.preBoostSource=t))}_endHold(t="pointer"){this.isPaused||!this.boostHeld||this.boostHoldSource!==t||(this.boostHeld=!1,this.boostHoldSource=null,this.sm.is(K.ROLLING)?this._launchFromIsland(t):this.sm.is(K.FALLING)&&this._edgeFallGraceTimer>0?this._launchFromFallingEdge(t):this.preBoostSource=null)}_cancelHold(){this.boostHeld=!1,this.boostHoldSource=null,this.preBoostSource=null}_startBoostHold(t){this._beginHold(t)}_cancelBoostHold(){this._cancelHold()}_handleKeyboardPress(){if(!this.isPaused&&(this._ensureAudio(),!this.sm.is(K.TITLE))){if(this.sm.is(K.GAMEOVER)){this._resetRun(),this.sm.transition(K.SLINGING);return}if(!this.sm.is(K.SLINGING)){if(this.sm.is(K.ROLLING)){this._beginHold("keyboard");return}if((this.sm.is(K.FLYING)||this.sm.is(K.FALLING))&&this._respawnWaiting){this._activateRespawn();return}if(this.sm.is(K.FLYING)||this.sm.is(K.FALLING)){this._beginHold("keyboard");return}}}}_syncMotionToArmadillo(){this.armadillo&&(this.motion.previous.copy(this.armadillo.position),this.motion.current.copy(this.armadillo.position),this.motion.render.copy(this.armadillo.position),this.motion.previousRot=this.armadillo.rotation.z,this.motion.currentRot=this.armadillo.rotation.z,this.motion.renderRot=this.armadillo.rotation.z)}_beginFixedStep(){this.armadillo&&(this.armadillo.position.copy(this.motion.current),this.armadillo.rotation.z=this.motion.currentRot,this.motion.previous.copy(this.motion.current),this.motion.previousRot=this.motion.currentRot)}_endFixedStep(){this.armadillo&&(this.motion.current.copy(this.armadillo.position),this.motion.currentRot=this.armadillo.rotation.z)}_applyMotionInterpolation(t){if(!this.armadillo)return this.motion.render;this.motion.render.lerpVectors(this.motion.previous,this.motion.current,t);const e=this._shortestAngleDelta(this.motion.previousRot,this.motion.currentRot);return this.motion.renderRot=this.motion.previousRot+e*t,this.armadillo.position.copy(this.motion.render),this.armadillo.rotation.z=this.motion.renderRot,this.motion.render}_shortestAngleDelta(t,e){return Math.atan2(Math.sin(e-t),Math.cos(e-t))}_resetRun(){this._tipIndex=Math.floor(Math.random()*fm.length),this.velocity.set(0,0),this.speedRatio=.75,this.spinAngleVel=0,this._edgeFallGraceTimer=0,this.pointerIsDown=!1,this.spaceIsDown=!1,this.slingDragging=!1,this._pendingPointerClear=!0,this._slingReady=!1,this._slingBlockUntil=performance.now()+300,this._tutorialRendered=!1,this._lastGameOverKey=null,this._namePromptJustClosed=!1,this._spawnGraceTimer=0,this._pendingTerrainRebuild.clear(),this._respawnWaiting=!1,this._respawnPos=null,this.slingPull.set(0,0),this.slingPower=0,this.slingAngle=Math.PI/4,this.boostHeld=!1,this.boostHoldSource=null,this.currentIsland=null,this.physics.setGravity(Lo),this._restoreTerrain(),this._clearParticles(),this.bestHeightPx=0,this.bestDistancePx=0,this.lastRating="READY",this.stallTime=0,this.trauma=0,this.flashTime=0,this.slowmoTime=0,this.splashGameOverTimer=0,this.splashStarted=!1,this.flightPeakY=0,this.isPaused=!1,this.lives=3,this.doubleJumpUsed=!1,this.preBoostSource=null,this.activeRocket=null,this.activeSpring=null,this.armadillo.visible=!0;const t=this._getSlingArmadilloPosition();this.armadillo.position.set(t.x,t.y,0),this.armadillo.rotation.z=0,this._setArmadilloColor(16717636),this._setArmadilloCurled(!1),this._updateSlingVisuals(),this._syncMotionToArmadillo(),this.sm.is(K.GAMEOVER)&&this.sm.transition(K.TITLE)}_restartToTitle(){this.velocity.set(0,0),this.speedRatio=.75,this.spinAngleVel=0,this._edgeFallGraceTimer=0,this.slingDragging=!1,this._slingReady=!1,this._tutorialRendered=!1,this._lastGameOverKey=null,this.slingPull.set(0,0),this.slingPower=0,this.slingAngle=Math.PI/4,this.boostHeld=!1,this.boostHoldSource=null,this.currentIsland=null,this.physics.setGravity(Lo),this._restoreTerrain(),this._clearParticles(),this.bestHeightPx=0,this.bestDistancePx=0,this.lastRating="READY",this.stallTime=0,this.trauma=0,this.flashTime=0,this.slowmoTime=0,this.splashGameOverTimer=0,this.splashStarted=!1,this.flightPeakY=0,this.isPaused=!1,this.lives=3,this.doubleJumpUsed=!1,this.preBoostSource=null,this.activeRocket=null,this.activeSpring=null,this._respawnWaiting=!1,this._respawnPos=null,this.armadillo.visible=!0;const t=this._getSlingArmadilloPosition();this.armadillo.position.set(t.x,t.y,0),this.armadillo.rotation.z=0,this._setArmadilloColor(16717636),this._setArmadilloCurled(!1),this._updateSlingVisuals(),this._syncMotionToArmadillo(),this.sm.current=K.TITLE}_restoreTerrain(){this.physics.removeAllTerrain();for(const e of this.islands??[])this.renderer.remove(e.mesh);this.staticIslands=[],this.islands=[],this.islandIndex=Ml.length;let t=null;for(let e=0;e<Ml.length;e++){const n=this._randomizeInitialTerrainSpec(Ml[e],e),s=this._avoidTerrainOverlap(n,t),r=Qf(s);this.renderer.add(r.mesh),this.islands.push(r),this.staticIslands.push(r),this.physics.addTerrain(r),t=r}for(let e=0;e<A1;e++)this._spawnNextIsland();this.maxHeightPx=this.islands[this.islands.length-1].bounds.top+240,this._buildItems()}_buildItems(){for(const t of this.items??[])this.renderer.remove(t.mesh);this.items=[];for(const t of u1){const e=this.islands[t.islandIndex];if(!e)continue;const n=(Math.random()-.5)*120,s=(e.bounds.right-e.bounds.left)*.38,r=vt.clamp(t.offsetX+n,-s,s);let o=t.type;o!=="heart"&&Math.random()<.3&&(o=o==="rocket"?"boost":"rocket");const a=Math.random()*16,l=e.bowlCenter+r,h=ui(e,l)+t.offsetY+a,u=rm(o,l,h);this.renderer.add(u.mesh),this.items.push(u)}}_trySpawnItemForIsland(t,e){const n=p1(e);if(!n)return;const s=(Math.random()-.5)*80,r=(t.bounds.right-t.bounds.left)*.38,o=vt.clamp(n.offsetX+s,-r,r);let a=n.type;a!=="heart"&&Math.random()<.25&&(a=a==="rocket"?"boost":"rocket");const l=t.bowlCenter+o,h=ui(t,l)+n.offsetY+Math.random()*14,u=rm(a,l,h);this.renderer.add(u.mesh),this.items.push(u)}_togglePause(){this.sm.is(K.GAMEOVER)||(this.isPaused=!this.isPaused)}_launchFromSling(){if(!this.sm.transition(K.FLYING))return;const t=this.slingPower,e=t*Es;this.speedRatio=t,this.lastRating="LAUNCH",this.stallTime=0,this.slingSnapTime=.22,this._setArmadilloColor(16717636),this._setArmadilloCurled(!0);const n=Math.cos(this.slingAngle)*e,s=Math.sin(this.slingAngle)*e;this.velocity.set(n,s),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(n,s),this._syncMotionToArmadillo(),this.slingPull.set(0,0),this.slingPower=0,this._carveLaunchPath(),this._triggerLaunchImpact(),this._playTone(220+t*260,.12,.08+t*.06,"square")}_launchFromIsland(t="auto"){if(!this.currentIsland||!this.sm.transition(K.FALLING))return;const e=t==="keyboard"||t==="pointer",n=e?this._getExitLaunchAngle(this.currentIsland):0,s=e?1:0,o=(this.currentIsland.bounds.right-this.currentIsland.bounds.left)*.22,a=this.currentIsland.bounds.right-this.armadillo.position.x,l=e?vt.clamp(1-a/o,0,1):0,c=l*320,h=l*.25;e&&(this.speedRatio=Math.min(Di,this.speedRatio+(th+h)*s));const u=this.speedRatio*tn,f=Math.min(Es,u/Math.max(Math.cos(n),.35)),d=!!this.activeSpring,_=d?Math.max(n,Kc):n,v=d?Math.min(Es,u/Math.max(Math.cos(_),.35)):f,p=d?Jc:0,m=Math.cos(_)*v,x=d?m*Zc:m,y=Math.max(u*.4,120),A=Math.max(x,y),C=Math.sin(_)*v+(eh+c)*s+p,T=Math.max(C,200);this.velocity.set(A,T),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(A,T),this._syncMotionToArmadillo(),this.currentIsland=null;const E=l>.5,P=s>=.45;d?(this.lastRating="BOOST!",this._setArmadilloColor(16766464),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,16766464,20,320),this._playTone(1040,.1,.08,"triangle")):(this.lastRating=E?"EDGE!":P?"BOOST":e?"HOP":"JUMP",this._setArmadilloColor(E?16777215:P?16773494:e?16758605:16740419),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,E?16777215:P?16766287:e?16758605:16740419,E?20:P?14:e?8:6,E?320:P?260:e?150:120),this._playTone(E?820:P?680:e?430:360,.08,.05,"triangle"))}_launchFromFallingEdge(t){const e=cm,n=t==="keyboard"||t==="pointer"?th:0;this.speedRatio=Math.min(Di,this.speedRatio+n);const s=Math.max(this.speedRatio*tn,200),r=Math.min(Es,s/Math.max(Math.cos(e),.35)),o=!!this.activeSpring,a=o?Math.max(e,Kc):e,l=o?Math.min(Es,Math.max(this.speedRatio*tn,200)/Math.max(Math.cos(a),.35)):r,c=Math.cos(a)*l,h=o?c*Zc:c,u=Math.abs(Math.sin(a)*l)+eh+(o?Jc:0);this.velocity.set(h,u),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(h,u),this._edgeFallGraceTimer=0,o?(this.lastRating="BOOST!",this._setArmadilloColor(16766464),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,16766464,20,320),this._playTone(1040,.1,.08,"triangle")):(this.lastRating="EDGE!",this._setArmadilloColor(16777215),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,16777215,16,280),this._playTone(820,.08,.05,"triangle"))}_launchFromHillCrest(){if(!this.currentIsland||!this.sm.transition(K.FALLING))return;const e=this.boostHeld?1:.55,n=this.boostHeld?th*.7:0;this.speedRatio=Math.min(Di,this.speedRatio+n);const s=vt.degToRad(52),r=this.speedRatio*tn,o=Math.min(Es,r/Math.max(Math.cos(s),.35)),a=Math.cos(s)*o,l=eh*.55*e*this.speedRatio,c=!!this.activeSpring,h=c?Math.max(s,Kc):s,u=c?Math.min(Es,r/Math.max(Math.cos(h),.35)):o,f=c?Math.cos(h)*u*Zc:a,d=Math.abs(Math.sin(h)*u)+l+(c?Jc:0);this.velocity.set(f,d),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(f,d),this._syncMotionToArmadillo(),this.currentIsland=null;const _=this.boostHeld;c?(this.lastRating="BOOST!",this._setArmadilloColor(16766464),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,16766464,20,320),this._playTone(1040,.1,.08,"triangle")):(this.lastRating=_?"CREST!":"CREST",this._setArmadilloColor(_?16773494:11457921),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,_?16773494:14477173,_?16:10,_?260:180)),this._playTone(_?700:560,.07,.05,"triangle")}_getExitLaunchAngle(t){if(!t)return vt.degToRad(45);const e=this.armadillo.position.x;if(t.bounds.right-e<Nt*2)return vt.degToRad(52);const s=Sl(t,e),r=vt.clamp(s,0,.3)*.4;return vt.clamp(vt.degToRad(48)+r,cm,S1)}_update(t){if(this.isPaused){this.sm.is(K.TITLE)||this.sm.is(K.SLINGING)?this.camTarget.set(Ke.x,Ke.y):this.camTarget.set(this.armadillo.position.x,this.armadillo.position.y);return}const e=this.slowmoTime>0?t*kA:t;if(this.slowmoTime=Math.max(0,this.slowmoTime-t),this.time+=e,this.sm.is(K.FLYING)||this.sm.is(K.FALLING))if(this._setArmadilloSprite("jump"),this._respawnWaiting){const n=this._respawnPos;this.armadillo.position.set(n.x,n.y,0),this.physics.setArmadilloPos(n.x,n.y),this.physics.setArmadilloVelocity(0,0),this.velocity.set(0,0),this._syncMotionToArmadillo()}else{if(this._edgeFallGraceTimer=Math.max(0,this._edgeFallGraceTimer-e),this._updateFlight(e),this.boostHeld){const n=Math.max(18,this.velocity.length()/(Nt/2));this.spinAngleVel=vt.lerp(this.spinAngleVel,n,Math.min(1,e*8))}else this.spinAngleVel*=Math.pow(.18,e);this.armadillo.rotation.z-=this.spinAngleVel*e}else this.sm.is(K.ROLLING)?(this._setArmadilloSprite(Math.floor(this.time*10)%2===0?"walk1":"walk2"),this._updateRolling(e)):this.sm.is(K.SLINGING)&&(this._setArmadilloSprite("idle"),this._updateSlinging());if(this._updateSplashGameOver(e),this._updateParticles(e),this._updateItems(e),this._updateEffects(t),this._tickSlingSnap(t),this._updateScenery(),this.bestHeightPx=Math.max(this.bestHeightPx,this.armadillo.position.y-Ke.y),this.bestDistancePx=Math.max(this.bestDistancePx,this.armadillo.position.x-Ke.x),this.sm.is(K.FLYING)||this.sm.is(K.FALLING)||this.sm.is(K.ROLLING)){let n=0;for(;this.islands[this.islands.length-1].bounds.left-this.armadillo.position.x<x1&&n<M1;)this._spawnNextIsland(),n++}this.sm.is(K.TITLE)||this.sm.is(K.SLINGING)?this.camTarget.set(Ke.x,Ke.y):this.camTarget.set(this.armadillo.position.x,this.armadillo.position.y)}_updateScenery(){for(const t of this.scenery){const{layer:e,baseX:n,baseY:s,drift:r}=t.userData;t.position.x=this.camTarget.x*e+n+Math.sin(this.time*r+n*.01)*18,t.position.y=this.camTarget.y*e+s+Math.cos(this.time*r+s*.01)*6}}_updateSlinging(){if(this.sm.is(K.SLINGING)){const t=this._getSlingArmadilloPosition();this.armadillo.position.set(t.x,t.y,0),this._setArmadilloCurled(this.slingDragging)}this._updateSlingVisuals()}_tickSlingSnap(t){this.slingSnapTime>0&&(this.slingSnapTime=Math.max(0,this.slingSnapTime-t))}_getHeightRatio(t=this.armadillo.position.y){return vt.clamp((t-bn)/(qo-bn),0,1)}_getGravityPx(){const t=vt.smoothstep(this._getHeightRatio(),E1,C1);return vt.lerp(Lo,Lo*T1,t)}_updateFlight(t){const e=this.armadillo.position.x,n=this.armadillo.position.y,s=this.velocity.clone();if(this.flightPeakY=Math.max(this.flightPeakY,n),this.activeRocket){this.activeRocket.timeLeft-=t;const c=this.activeRocket.timeLeft<=0;if(c&&(this.activeRocket=null),this.armadillo.position.x+=nr*t,this.armadillo.position.y+=sr*t,this.velocity.set(nr,sr),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(nr,sr),this.flightPeakY=Math.max(this.flightPeakY,this.armadillo.position.y),this._spawnParticles(this.armadillo.position.x-nr*t*.6,this.armadillo.position.y-sr*t*.6,16739584,4,140),c&&(this.speedRatio=Math.min(Di,this.speedRatio+.35),this.physics.setArmadilloVelocity(nr,sr)),this.armadillo.position.y>=qo){this._reachMoon();return}if(this.armadillo.position.y<bn){this._beginSplashGameOver(this.armadillo.position.x);return}return}if(this._tryDestroyTerrain(e,n,s,t))return;const r=this._getGravityPx();if(this._spawnGraceTimer>0){if(this._spawnGraceTimer--,this.velocity.y-=r*t,this.armadillo.position.x+=this.velocity.x*t,this.armadillo.position.y+=this.velocity.y*t,this.physics.moveArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(this.velocity.x,this.velocity.y),this.armadillo.position.y>=qo){this._reachMoon();return}if(this.armadillo.position.y<bn){this._beginSplashGameOver(this.armadillo.position.x);return}if(this._spawnGraceTimer===1&&this._pendingTerrainRebuild.size>0){for(const c of this._pendingTerrainRebuild)this.physics.addTerrain(c);this._pendingTerrainRebuild.clear(),this.physics.flushContacts()}return}this.physics.setGravity(r),this._applyOpenAirFallAccel(t,r),this.physics.step(t);const o=this.physics.getArmadilloState();this.armadillo.position.x=o.x,this.armadillo.position.y=o.y,this.velocity.set(o.vx,o.vy);const a=n-Nt/2,l=o.y-Nt/2;{if(this.physics.isGrounded()&&this.velocity.y<=180){const c=this._findGroundedIsland();if(c){this._landOnIsland(c);return}}if(this.boostHeld&&this.velocity.y<=30){const c=this._findLandingIsland(a,l);if(c){this._landOnIsland(c);return}}}if(o.y>=qo){this._reachMoon();return}if(o.y<bn){this._beginSplashGameOver(o.x);return}o.y<this.camPos.y-600&&this._beginSplashGameOver(o.x)}_reachMoon(){this.sm.is(K.GAMEOVER)||(this.sm.transition(K.GAMEOVER),this.velocity.set(0,0),this.lastRating="MOON",this._saveBestRecord(),this.particleSystem.spawnBurst(this.armadillo.position.x,this.armadillo.position.y,16775620,48,320),this.particleSystem.spawnBurst(this.armadillo.position.x,this.armadillo.position.y,8445674,32,200),this.trauma=1,this.flashTime=.6,this._playTone(880,.4,.12,"sine"),setTimeout(()=>this._playTone(1100,.3,.1,"sine"),180),setTimeout(()=>this._playTone(1320,.5,.14,"sine"),380))}_findLandingIsland(t,e){if(this.velocity.y>30)return null;const n=this.armadillo.position.x,s=this.armadillo.position.y-Nt/2;for(const r of this.islands){if(r.destroyed)continue;const o=r.bounds,a=o.rampLeft??o.left;if(n<a||n>o.right||n>=o.left&&Ts(r,n,Nt/2))continue;const l=ui(r,n);if(s<=l+10&&s>=l-16||t>=l-4&&e<=l+4)return r}return null}_findGroundedIsland(){const t=this.armadillo.position.x,e=this.armadillo.position.y-Nt/2;let n=null,s=1/0;for(const r of this.islands){if(r.destroyed)continue;const o=r.bounds;if(t<(o.rampLeft??o.left)||t>o.right||Ts(r,t,Nt/2))continue;const a=ui(r,t),l=Math.abs(e-a);l<s&&l<=24&&(n=r,s=l)}return n}_applyOpenAirFallAccel(t,e){const n=this._getHeightRatio();if(n<um||this.velocity.y>=0||this._terrainBelowWithin(P1))return;const s=Math.max(0,this.flightPeakY-this.armadillo.position.y),r=Math.min(1,s/B1),o=Math.min(1,(n-um)/.15),a=e*R1*r*o,l=this.velocity.y-a*t;this.velocity.y=l,this.physics.setArmadilloVelocity(this.velocity.x,l)}_terrainBelowWithin(t){const e=this.armadillo.position.x,n=this.armadillo.position.y-Nt/2;for(const s of this.islands){if(s.destroyed)continue;const r=s.bounds;if(e<r.left-Nt||e>r.right+Nt||Ts(s,e,Nt/2))continue;const o=ui(s,e);if(o<n&&n-o<=t)return!0}return!1}_tryDestroyTerrain(t,e,n,s){const r=n.length();if(r<oo*.55)return!1;const o=this._getGravityPx(),a=t+n.x*s,l=e+(n.y-o*s*.5)*s,c=Math.max(4,Math.ceil(Math.hypot(a-t,l-e)/10)),h=[],u=new Set;for(let C=0;C<=c;C++){const T=C/c,E=vt.lerp(t,a,T),P=vt.lerp(e,l,T),b=P-Nt/2;for(const M of this.islands){if(M.destroyed||E<M.bounds.left-Nt/2||E>M.bounds.right+Nt/2||Ts(M,E,Nt/2))continue;const B=ui(M,E);if(b>=B||P<=M.bounds.bottom||n.y<0&&Math.abs(n.y)>Math.abs(n.x)*1.4)continue;const z=`${this.islands.indexOf(M)}:${Math.round(E/10)}`;u.has(z)||(u.add(z),h.push({island:M,x:E,y:P}))}}if(h.length===0)return!1;const f=new Set;for(const C of h){const T=r,E=C.island.softBreak||T<oo?this._getSoftTerrainDamageProfile(T):this._getTerrainDamageProfile(T);$c(C.island,C.x,E.radius,E.depth),f.add(C.island),this.particleSystem.spawnDirt(C.x,C.y,28+Math.floor(E.force*20))}for(const C of f)this.physics.removeTerrain(C),this._pendingTerrainRebuild.add(C);const d=n.y>0;let _=t+n.x*s,v=e+(n.y-o*s*.5)*s;const p=d?Nt+8:4;for(const C of f){if(Ts(C,_,Nt/2))continue;const T=ui(C,_);v-Nt/2<T&&(v=T+Nt/2+p)}const m=r*1.05+40,x=n.x>=0?Math.max(n.x,m*.7):n.x,y=d?n.y:Math.max(n.y,0);this.speedRatio=Math.min(this.speedRatio+.15,Di),this.armadillo.position.set(_,v,0),this.velocity.set(x,y),this.physics.moveArmadilloPos(_,v),this.physics.setArmadilloVelocity(x,y),this.physics.flushContacts();const A=d?7:5;return this._spawnGraceTimer=Math.max(this._spawnGraceTimer,A),this._setArmadilloColor(16766287),this._triggerDestructionImpact(.35,7162945,_,v),!0}_breakTerrainAt(t,e=this.armadillo.position.x,n=this.armadillo.position.y,s=this.velocity,r=!0){const o=s.length(),a=t.softBreak||o<oo?this._getSoftTerrainDamageProfile(o):this._getTerrainDamageProfile(o);$c(t,e,a.radius,a.depth),r&&(this.physics.addTerrain(t),this.physics.setArmadilloVelocity(s.x,s.y),this.physics.flushContacts(),this._spawnGraceTimer=Math.max(this._spawnGraceTimer,4)),this.particleSystem.spawnDirt(e,n,32+Math.floor(a.force*24)),this._setArmadilloColor(16766287),this._triggerDestructionImpact(.35+a.depth*.1,7162945,e,n)}_getTerrainDamageProfile(t){const e=vt.clamp((t-oo)/(b1-oo),0,1);return{force:e,depth:.7+e*1.1,radius:44+e*62}}_getSoftTerrainDamageProfile(t){const e=vt.clamp(t/oo,.35,1);return{force:e,depth:1.1+e*.6,radius:54+e*48}}_carveLaunchPath(){const t=new rt(Math.cos(this.slingAngle),Math.sin(this.slingAngle)),e=this.armadillo.position,n=[0,34,68,102];for(const s of n){const r=e.x+t.x*s,o=e.y+t.y*s;for(const a of this.islands){if(a.destroyed||r<a.bounds.left-Nt||r>a.bounds.right+Nt||Ts(a,r,Nt))continue;const l=ui(a,r);if(!(o+Nt/2>=a.bounds.bottom&&o-Nt/2<=l))continue;const h=this._getTerrainDamageProfile(this.velocity.length());$c(a,r,h.radius,h.depth),this.physics.addTerrain(a),this._triggerDestructionImpact(.3+h.force*.2,7162945,r,o)}}}_triggerLaunchImpact(){const t=vt.clamp((this.slingPower-Qc)/(lm-Qc),0,1),e=.35+t*.65,n=Ke.x+Math.cos(this.slingAngle)*68,s=Ke.y+10+Math.sin(this.slingAngle)*68;this.trauma=Math.min(1,this.trauma+e),this.flashTime=Math.max(this.flashTime,t>.85?.18:.09),this.slowmoTime=Math.max(this.slowmoTime,t>.85?Tc*1.8:Tc),this._spawnParticles(n,s,t>.85?16773494:16740419,t>.85?16:9,220+t*260),t>.85&&this._setArmadilloColor(16773494)}_landOnIsland(t){if(t.biome==="cloud"){this._springFromCloudIsland(t);return}this.currentIsland=t,this.doubleJumpUsed=!1;const e=Math.abs(this.velocity.x),n=this.velocity.length(),s=e/tn,r=this.spinAngleVel*(Nt/2)/tn,o=Math.min(Di,Math.max(s,r*.75));this.speedRatio=o,this.spinAngleVel=o*tn/(Nt/2),this.velocity.set(0,0),this.physics.setArmadilloVelocity(0,0),this.armadillo.position.y=ui(t,this.armadillo.position.x)+Nt/2,this.lastRating="ROLL";const a=n>700?22:12;this.particleSystem.spawnDirt(this.armadillo.position.x,this.armadillo.position.y-Nt/2,a);const l=40+this.speedRatio*100;this._spawnRipple(this.armadillo.position.x,this.armadillo.position.y-Nt/2,16777215,l,.38),this._triggerImpact(.18+this.speedRatio*.22,7162945,this.armadillo.position.x,this.armadillo.position.y),(this.sm.is(K.FLYING)||this.sm.is(K.FALLING))&&this.sm.transition(K.ROLLING),this.pointerIsDown?(this.boostHeld=!0,this.boostHoldSource="pointer",this.preBoostSource=null):this.spaceIsDown?(this.boostHeld=!0,this.boostHoldSource="keyboard",this.preBoostSource=null):(this.boostHeld=!1,this.boostHoldSource=null,this.preBoostSource=null)}_springFromCloudIsland(t){this.currentIsland=t;const e=Math.abs(this.velocity.x),n=Math.min(Di,e/tn);this.speedRatio=Math.min(Di,n+.4),this.spinAngleVel=this.speedRatio*tn/(Nt/2),this.velocity.set(0,0),this.physics.setArmadilloVelocity(0,0),this.armadillo.position.y=ui(t,this.armadillo.position.x)+Nt/2,(this.sm.is(K.FLYING)||this.sm.is(K.FALLING))&&this.sm.transition(K.ROLLING),this.pointerIsDown?(this.boostHeld=!0,this.boostHoldSource="pointer",this.preBoostSource=null):this.spaceIsDown?(this.boostHeld=!0,this.boostHoldSource="keyboard",this.preBoostSource=null):(this.boostHeld=!1,this.boostHoldSource=null,this.preBoostSource=null),this.lastRating="CLOUD",this._setArmadilloColor(14218495),this._spawnRipple(this.armadillo.position.x,this.armadillo.position.y-Nt/2,14218495,120,.42),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,16777215,12,160),this._playTone(620,.1,.05,"triangle")}_updateRolling(t){if(!this.currentIsland)return;const e=this.currentIsland.bounds;if(this.boostHeld)this.speedRatio=vt.clamp(this.speedRatio+(w1-hm)*t,0,Di),this.lastRating="HOLD",this._setArmadilloColor(16758605);else{const u=Sl(this.currentIsland,this.armadillo.position.x),d=-Math.sin(u)*1.4;this.speedRatio=vt.clamp(this.speedRatio+(d-hm)*t,0,Di)}const n=Sl(this.currentIsland,this.armadillo.position.x),s=this.speedRatio*tn*t;if(this.armadillo.position.x+=s,Ts(this.currentIsland,this.armadillo.position.x,Nt/2)){this._fallOff();return}this.armadillo.position.y=ui(this.currentIsland,this.armadillo.position.x)+Nt/2;const r=Sl(this.currentIsland,this.armadillo.position.x),o=n>.08&&r<-.08,a=this.currentIsland.shapeType==="hill"||this.currentIsland.shapeType==="slope",l=this.armadillo.position.x>this.currentIsland.bowlCenter-20;if(o&&a&&l&&this.speedRatio>=.55){this._launchFromHillCrest();return}const c=this.speedRatio*tn/(Nt/2),h=this.boostHeld?Math.max(c,10+this.speedRatio*18):c;if(this.spinAngleVel=vt.lerp(this.spinAngleVel,h,Math.min(1,t*14)),this.armadillo.rotation.z-=this.spinAngleVel*t,this._updateStallState(t),this._dustTimer-=t,this._dustTimer<=0&&this.speedRatio>=.28){const u=vt.lerp(.1,.03,this.speedRatio/Di);this._dustTimer=u;const f=this.armadillo.position.x-s*.5,d=this.armadillo.position.y-Nt/2,_=this.boostHeld?3:2;this.particleSystem.spawn(f,d,9270101,_,55,{spreadAngle:Math.PI*.5,biasAngle:Math.PI,sizeMin:3,sizeMax:8,lifeMin:.15,lifeMax:.35,gravityScale:.08})}this.armadillo.position.x>=e.right-Nt/2&&(this.armadillo.position.x=e.right+Nt*2,this.armadillo.position.y+=Nt,this._fallOff(!0))}_fallOff(t=!1){if(!this.currentIsland)return;if(this.boostHeld){const s=this.boostHoldSource||"pointer";if(this.currentIsland=null,!this.sm.transition(K.FALLING))return;this._launchFromFallingEdge(s);return}if(!this.sm.transition(K.FALLING))return;const e=this.speedRatio*tn,n=t?120:0;this.velocity.set(e,n),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(e,n),t&&this.physics.clearContacts(),this._syncMotionToArmadillo(),this._edgeFallGraceTimer=.12,this.currentIsland=null}_updateStallState(t){if(this.speedRatio<=zA){this.stallTime+=t;return}this.stallTime=0}_triggerImpact(t,e,n,s){this.trauma=Math.min(1,this.trauma+t),this.flashTime=Math.max(this.flashTime,.12),this.slowmoTime=Math.max(this.slowmoTime,Tc),this._spawnParticles(n,s,e),this._playTone(90+t*90,.08,.06+t*.05,"sawtooth")}_triggerDestructionImpact(t,e,n,s){this.trauma=Math.min(1,this.trauma+t),this._spawnParticles(n,s,e),this._playTone(90+t*90,.08,.06+t*.05,"sawtooth")}_spawnParticles(t,e,n,s=12,r=120){this.particleSystem.spawnBurst(t,e,n,s,r)}_tryDoubleJump(){if(this.doubleJumpUsed)return;this.doubleJumpUsed=!0;const t=Math.max(this.velocity.y,0)+620;this.velocity.set(this.velocity.x,t),this.physics.setArmadilloVelocity(this.velocity.x,t),this._syncMotionToArmadillo(),this._playTone(480,.14,.08,"sine"),this._spawnParticles(this.armadillo.position.x,this.armadillo.position.y,16766287,8,160)}_triggerSplashEffect(t=this.armadillo.position.x){const e=bn+4;this._spawnRipple(t,e,14285823,190,.72),this._spawnRipple(t,e-8,5099745,130,.58),this.particleSystem.spawnBurst(t,e+12,9169407,34,260),this.particleSystem.spawnBurst(t,e+4,16777215,18,180),this.trauma=Math.min(1,this.trauma+.72),this.flashTime=Math.max(this.flashTime,.12),this._playTone(120,.16,.08,"sine")}_beginSplashGameOver(t=this.armadillo.position.x){this.splashStarted||this.sm.is(K.GAMEOVER)||(this._triggerSplashEffect(t),this.splashStarted=!0,this.lives=Math.max(0,this.lives-1),this.lives>0?(this._doSeaBounce(t),this.splashStarted=!1,this.doubleJumpUsed=!1):(this.splashGameOverTimer=y1,this.lastRating="SPLASH",this.armadillo.visible=!1,this.armadillo.position.set(t,bn-Nt,0),this.velocity.set(0,0),this.physics.setArmadilloPos(t,bn-Nt),this.physics.setArmadilloVelocity(0,0),this._syncMotionToArmadillo()))}_doSeaBounce(t=this.armadillo.position.x){let e=null,n=1/0;for(const a of this.islands){if(a.destroyed||a.bowlCenter<t-400||a.bowlCenter>t+4e3)continue;const c=Math.abs(a.bowlCenter-t)+Math.max(0,a.bounds.top-t)*.1;c<n&&(n=c,e=a)}let s=t;if(e){const a=e.bounds.right-e.bounds.left,l=Nt*1.5;let c=e.bounds.left+a*.15;c=vt.clamp(c,e.bounds.left+l,e.bounds.right-l);const h=Nt,u=e.bounds.right-l;for(;c<=u&&Ts(e,c,Nt/2);)c+=h;c>u&&(c=e.bowlCenter),s=c}const o=(e?ui(e,s):bn)+Nt/2+120;this.speedRatio=Math.min(Di,this.speedRatio+.35),this._cancelBoostHold(),this.spinAngleVel=Math.min(this.spinAngleVel,12),this.armadillo.visible=!0,this.armadillo.position.set(s,o,0),this.velocity.set(0,0),this.physics.setArmadilloPos(s,o),this.physics.setArmadilloVelocity(0,0),this.physics.clearContacts(),this._spawnGraceTimer=0,this._respawnWaiting=!0,this._respawnPos=new rt(s,o),this.flightPeakY=o,this._syncMotionToArmadillo(),this._playTone(320,.22,.12,"sine"),this._spawnParticles(s,o,6600182,16,200)}_updateSplashGameOver(t){this.splashGameOverTimer<=0||this.sm.is(K.GAMEOVER)||(this.splashGameOverTimer=Math.max(0,this.splashGameOverTimer-t),!(this.splashGameOverTimer>0)&&this._gameOver("SPLASH"))}_updateParticles(t){this.particleSystem.update(t,this._getGravityPx()),this._updateRipples(t),this._updateFlameTrail(t);for(const e of this.islands)r1(e,t),o1(e,t)}_updateFlameTrail(t){const n=(this.sm.is(K.ROLLING)||this.sm.is(K.FLYING)||this.sm.is(K.FALLING))&&this.speedRatio>=.42;if(this.flameTrailCooldown=Math.max(0,this.flameTrailCooldown-t),!n||this.flameTrailCooldown>0)return;const s=vt.clamp((this.speedRatio-.42)/(1-.42),0,1),r=vt.lerp(.045,.015,s);this.flameTrailCooldown=r;const o=this.sm.is(K.ROLLING)?0:Math.atan2(this.velocity.y,this.velocity.x);this.particleSystem.spawnFlameTrail(this.armadillo.position.x,this.armadillo.position.y,s,o)}_updateItems(t){if(_1(this.items,t,this.time),this.activeSpring&&(this.activeSpring.timeLeft-=t,this.activeSpring.timeLeft<=0?this.activeSpring=null:this.sm.is(K.ROLLING)&&(this.speedRatio=Math.min(Di,this.speedRatio+h1*t))),this.activeRocket&&!this.sm.is(K.FLYING)&&!this.sm.is(K.FALLING)&&(this.activeRocket.timeLeft-=t,this.activeRocket.timeLeft<=0&&(this.activeRocket=null)),!(this.sm.is(K.FLYING)||this.sm.is(K.FALLING)||this.sm.is(K.ROLLING)))return;const n=this.armadillo.position.x,s=this.armadillo.position.y,r=v1(this.items,n,s);r&&(g1(r),this._applyItemEffect(r))}_applyItemEffect(t){if(t.type==="rocket"){if(this.sm.is(K.ROLLING)&&(this.currentIsland=null,!this.sm.transition(K.FALLING)))return;this.activeRocket={timeLeft:im},this.velocity.set(nr,sr),this.physics.setArmadilloPos(this.armadillo.position.x,this.armadillo.position.y),this.physics.setArmadilloVelocity(nr,sr),this.physics.clearContacts(),this._spawnGraceTimer=2,this._syncMotionToArmadillo(),this.lastRating="ROCKET!",this._setArmadilloColor(16739584),this.particleSystem.spawnCollectRocket(t.x,t.y),this._playTone(280,.18,.1,"sawtooth"),setTimeout(()=>this._playTone(420,.14,.1,"sawtooth"),100)}else t.type==="boost"?(this.speedRatio=Math.min(Di,this.speedRatio+c1),this.activeSpring={timeLeft:nm},this.lastRating="BOOST!",this._setArmadilloColor(16766464),this.particleSystem.spawnCollectBoost(t.x,t.y),this._playTone(880,.12,.08,"sine"),setTimeout(()=>this._playTone(1100,.09,.07,"sine"),80)):t.type==="heart"&&(this.lives=Math.min(3,this.lives+1),this.lastRating="HEART!",this._setArmadilloColor(16717636),this.particleSystem.spawnCollectHeart(t.x,t.y),this.flashTime=Math.max(this.flashTime,.08),this._playTone(880,.14,.09,"sine"),setTimeout(()=>this._playTone(1100,.1,.08,"sine"),120))}_clearParticles(){this.particleSystem.clear()}_updateEffects(t){this.trauma=Math.max(0,this.trauma-t*1.8),this.flashTime=Math.max(0,this.flashTime-t)}_gameOver(t){this.sm.is(K.GAMEOVER)||(this.sm.transition(K.GAMEOVER),this.velocity.set(0,0),this.lastRating=t,this._saveBestRecord(),this.pendingScoreEntry=null,this._respawnWaiting=!1,this._respawnPos=null,t==="SPLASH"&&!this.splashStarted?this._triggerSplashEffect(this.armadillo.position.x):this._playTone(96,.22,.1,"triangle"))}_submitRunScore(){const t=Math.max(0,Math.floor(this.bestHeightPx/On)),e=Math.max(0,Math.floor(this.bestDistancePx/On)),n=this._getScore(),s=this.lastRating==="MOON",r=this.playerName||"Anonymous";qb(r,n,t,e,s).then(o=>{this.pendingScoreEntry=o}).catch(()=>{})}async _openLeaderboard(){this.leaderboardEntries=await Xb(15),this.showingLeaderboard=!0}_closeLeaderboard(){this.showingLeaderboard=!1}_activateRespawn(){this._respawnWaiting&&(this._respawnWaiting=!1,this._respawnPos=null,this.velocity.set(0,0),this.physics.setArmadilloVelocity(0,0),this.physics.clearContacts(),this._spawnGraceTimer=3)}_saveScoreWithName(t){const e=t.trim().slice(0,16);this.playerName=e===""||e==="Anonymous"?"":e,$b(this.playerName),this._submitRunScore(),this._openLeaderboard()}_ensureAudio(){if(this.audio){this.audio.state==="suspended"&&this.audio.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.audio=new t)}_playTone(t,e,n,s="sine"){if(!this.audio||this.audio.state!=="running")return;const r=this.audio.currentTime,o=this.audio.createOscillator(),a=this.audio.createGain();o.type=s,o.frequency.setValueAtTime(t,r),a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(n,r+.012),a.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a),a.connect(this.audio.destination),o.start(r),o.stop(r+e+.02)}_getScore(){const t=Math.max(0,Math.floor(this.bestHeightPx/On)),e=Math.max(0,Math.floor(this.bestDistancePx/On));return t*Fd.perM_height+e*Fd.perM_distance}_loadBestRecord(){try{return JSON.parse(localStorage.getItem("armadillo-rush-best"))??{score:0,heightM:0,distanceM:0}}catch{return{score:0,heightM:0,distanceM:0}}}_saveBestRecord(){const t=Math.max(0,Math.floor(this.bestHeightPx/On)),e=Math.max(0,Math.floor(this.bestDistancePx/On)),n=this._getScore();if(!(n<=this.bestRecord.score)){this.bestRecord={score:n,heightM:t,distanceM:e};try{localStorage.setItem("armadillo-rush-best",JSON.stringify(this.bestRecord))}catch{}}}_render(t,e=1){const n=this._applyMotionInterpolation(e),s=this.sm.is(K.FLYING)?Od*1.5:Od,r=1-Math.pow(1-s,Math.max(.001,(t??rr)*60)),o=this.sm.is(K.TITLE)||this.sm.is(K.SLINGING)?this.camTarget.x:n.x,a=this.sm.is(K.TITLE)||this.sm.is(K.SLINGING)?this.camTarget.y:n.y;this.camPos.x+=(o-this.camPos.x)*r,this.camPos.y+=(a-this.camPos.y)*r;const l=this.trauma*this.trauma*16,c=(Math.random()-.5)*l,h=(Math.random()-.5)*l;this.renderer.setCenter(this.camPos.x,this.camPos.y,c,h);const u=this._getHeightRatio();this._updateRendererClearSky(u),this._updateSceneSkyPlane(u),this._updateWorldSea(),this.background.update(u,this.time,this.camPos.x,this.camPos.y),this._updateArmadilloShadow(),this.postfx.update(this.trauma,u,t??rr),this.postfx.render(t??rr);const f=document.activeElement;f&&f.classList.contains("name-input")||this._renderHud()}_updateRendererClearSky(t){const e=new Xt;t<.34?e.copy(dm).lerp(Yo,vt.smoothstep(t,.04,.34)):t<.68?e.copy(Yo).lerp(ao,vt.smoothstep(t,.34,.68)):e.copy(ao).lerp(bl,vt.smoothstep(t,.68,.9)),this.renderer.renderer.setClearColor(e,1)}_updateArmadilloShadow(){if(!this.armadilloShadow)return;const t=this.armadillo.position.x,e=this.armadillo.position.y;let n=null;if(this.currentIsland)n=ui(this.currentIsland,t);else for(const l of this.islands){if(l.destroyed)continue;const c=l.bounds,h=c.rampLeft??c.left;if(t<h||t>c.right)continue;const u=ui(l,t);(n===null||u>n)&&(n=u)}n===null&&(n=-360);const s=e-Nt/2-n,o=1-vt.clamp(s/320,0,1),a=Nt*(.55+o*.45);this.armadilloShadow.scale.set(a,a*.32,1),this.armadilloShadow.position.x=t,this.armadilloShadow.position.y=n+1,this.armadilloShadow.material.opacity=o*.36*(this.armadillo.visible?1:0)}_renderHud(){if(!this.ui||document.activeElement?.classList.contains("name-input")||this.sm.is(K.TITLE)&&this._tutorialRendered===this._tutorialLang)return;if(this.sm.is(K.GAMEOVER)){const N=`${this.pendingScoreEntry?.rank??""}:${this.showingLeaderboard}:${this.isPaused}`;if(N===this._lastGameOverKey)return;this._lastGameOverKey=N}const t=Math.max(0,Math.floor(this.bestHeightPx/On)),e=Math.max(0,Math.floor(this.bestDistancePx/On)),n=this._getScore(),s=Math.round(this.speedRatio*100),r=Math.round(vt.radToDeg(this.slingAngle)),o=Math.round(this.slingPower*100),a=this.slingPull.length(),l=Math.round(vt.clamp(a/Xo,0,1)*100),c=!this.sm.is(K.TITLE)&&!this.sm.is(K.SLINGING)&&!this.sm.is(K.GAMEOVER),h=!this.isPaused&&!this.sm.is(K.TITLE)&&!this.sm.is(K.GAMEOVER),u=this.boostHeld,f=this.sm.is(K.ROLLING),d=this.splashGameOverTimer>0?"Sinking...":this.sm.is(K.TITLE)?"Click to sling":this.sm.is(K.SLINGING)?this.slingDragging?"Release to launch!":"Drag to aim":this.sm.is(K.ROLLING)?"Button / Space: boost on yellow slopes or end zone":this.sm.is(K.GAMEOVER)?"Click / Space → restart":"In flight...",_=this.isPaused?"Resume":"Pause",v=this.isPaused?"PAUSED":this.sm.current,p=this.stallTime>=VA?`<div class="hud-danger">DANGER ${Math.max(0,HA-this.stallTime).toFixed(1)}s</div>`:"",m=Math.max(0,Math.floor((qo-this.armadillo.position.y)/On)),x=m>0?`${m}m`:"🌕 REACHED!",y=this.sm.is(K.SLINGING)&&this.slingDragging&&this.slingPower>.05?`
      <div class="meter-power">
        <div class="power-fill" style="height:${l}%"></div>
      </div>`:"",A=this.lastRating==="MOON",C=A?"🌕 MOON REACHED!":this.lastRating==="SPLASH"?"🌊 SPLASH!":"GAME OVER",T=A?"result-title moon-clear":"result-title",E=!this.sm.is(K.TITLE),P=[1,2,3].map(N=>`<svg class="heart-pixel ${N<=this.lives?"heart-full":"heart-empty"}" width="28" height="28" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="1" y="2" width="3" height="1"/><rect x="6" y="2" width="3" height="1"/>
        <rect x="0" y="3" width="4" height="1"/><rect x="5" y="3" width="4" height="1"/>
        <rect x="0" y="4" width="9" height="1"/>
        <rect x="0" y="5" width="9" height="1"/>
        <rect x="1" y="6" width="7" height="1"/>
        <rect x="2" y="7" width="5" height="1"/>
        <rect x="3" y="8" width="3" height="1"/>
        <rect x="4" y="9" width="1" height="1"/>
      </svg>`).join(""),b=this.leaderboardEntries.length===0?'<div class="leaderboard-empty">No scores yet — be the first!</div>':this.leaderboardEntries.map(N=>{const Y=N.name===this.playerName,k=N.rank===1?"🥇":N.rank===2?"🥈":N.rank===3?"🥉":N.rank,et=N.moonClear?" 🌕":"";return`
            <div class="lb-row${Y?" lb-self":""}">
              <span class="lb-rank${N.rank<=3?" top3":""}">${k}</span>
              <span class="lb-name">${N.name}${et}</span>
              <span class="lb-score">${N.score.toLocaleString()}</span>
              <span class="lb-meta">${N.heightM}m high · ${N.distanceM}m far</span>
            </div>`}).join(""),M=this.pendingScoreEntry?`<div><span>RANK</span><strong>#${this.pendingScoreEntry.rank}</strong></div>`:"",B=this.activeRocket?Math.ceil(this.activeRocket.timeLeft/im*100):0,z=this.activeSpring?Math.ceil(this.activeSpring.timeLeft/nm*100):0,I=E&&(this.activeRocket||this.activeSpring)?`
      <div class="item-effects-panel">
        ${this.activeRocket?`
        <div class="item-effect item-effect-rocket">
          <span class="item-effect-icon">🚀</span>
          <div class="item-effect-track">
            <div class="item-effect-label">ROCKET</div>
            <div class="item-effect-bar"><div class="item-effect-fill" style="width:${B}%"></div></div>
          </div>
        </div>`:""}
        ${this.activeSpring?`
        <div class="item-effect item-effect-boost">
          <span class="item-effect-icon">⚡</span>
          <div class="item-effect-track">
            <div class="item-effect-label">BOOST</div>
            <div class="item-effect-bar"><div class="item-effect-fill" style="width:${z}%"></div></div>
          </div>
        </div>`:""}
      </div>`:"";this.ui.innerHTML=`
      ${E?`<div class="lives-hud">${P}</div>`:""}
      <div class="hud-panel hud-stats">
        <div><span>STATE</span><strong>${v}</strong></div>
        <div><span>SCORE</span><strong>${n}</strong></div>
        <div><span>HEIGHT</span><strong>${t}m</strong></div>
        <div><span>DIST</span><strong>${e}m</strong></div>
        <div><span>TO MOON</span><strong>${x}</strong></div>
        <div><span>SPEED</span><strong>${s}%</strong></div>
        <div><span>ANGLE</span><strong>${r}°</strong></div>
        <div><span>POWER</span><strong>${o}%</strong></div>
        ${p}
      </div>
      ${I}

      ${y}

      ${this.sm.is(K.TITLE)?(()=>{const Y=this._tutorialLang==="ko";return`
        <div class="tutorial-layer">
          <div class="tutorial-card">
            <div class="tutorial-game-title">ARMADILLO RUSH</div>
            <div class="tutorial-subtitle">${Y?"🌊 바다 → ☁️ 하늘 → 🌕 달":"🌊 Sea → ☁️ Sky → 🌕 Moon"}</div>

            <div class="tutorial-lang-toggle">
              <button type="button" class="clickable lang-btn${Y?" is-active":""}" data-action="toggle-lang">한국어</button>
              <button type="button" class="clickable lang-btn${Y?"":" is-active"}" data-action="toggle-lang">English</button>
            </div>

            ${Y?`
            <div class="tutorial-section">
              <div class="tutorial-section-title">🎯 목표</div>
              <div class="tutorial-row">슬링샷으로 아르마딜로를 발사하여 최대한 높이, 멀리 날려보세요!</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">🕹️ 조작법</div>
              <div class="tutorial-row">🖱️ <b>드래그</b>: 슬링샷 조준 및 발사</div>
              <div class="tutorial-row">⬛ <b>Space 누르기</b>: 지형 위에서 가속 / 공중에서 회전</div>
              <div class="tutorial-row">⬛ <b>Space 떼기</b>: 점프!</div>
              <div class="tutorial-row">💀 <b>바다 추락</b>: 생명 1개 감소. Space/클릭으로 낙하 재시작</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">💡 팁</div>
              <div class="tutorial-row">빠른 속도로 지형을 부수면 속도 폭발!</div>
              <div class="tutorial-row">높이가 곧 점수 — 달까지 올라가면 보너스!</div>
            </div>
            `:`
            <div class="tutorial-section">
              <div class="tutorial-section-title">🎯 Objective</div>
              <div class="tutorial-row">Fling the armadillo as high and far as possible — aim for the moon!</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">🕹️ Controls</div>
              <div class="tutorial-row">🖱️ <b>Drag</b>: Aim and release the slingshot</div>
              <div class="tutorial-row">⬛ <b>Hold Space</b>: Accelerate on terrain / spin in air</div>
              <div class="tutorial-row">⬛ <b>Release Space</b>: Jump!</div>
              <div class="tutorial-row">💀 <b>Sea fall</b>: Lose 1 life. Press Space/Click to drop again</div>
            </div>
            <div class="tutorial-section">
              <div class="tutorial-section-title">💡 Tips</div>
              <div class="tutorial-row">Smash terrain at high speed for a burst boost!</div>
              <div class="tutorial-row">Altitude = score. Reach the moon for bonus points!</div>
            </div>
            `}

            <div class="tutorial-best">
              <span class="tutorial-best-label">BEST</span>
              ${this.bestRecord.score.toLocaleString()}
            </div>

            <button type="button" class="clickable tutorial-start-btn" data-action="start-game">
              ${Y?"시작하기":"Start Game"}
            </button>
          </div>
        </div>
        `})():""}
      ${this.flashTime>0?`<div class="flash-layer" style="opacity:${this.flashTime*1.6}"></div>`:""}
      ${this.sm.is(K.GAMEOVER)?`
        <div class="modal-layer">
          <div class="result-card">
            <div class="${T}">${C}</div>
            <div class="result-grid">
              <div><span>SCORE</span><strong>${n}</strong></div>
              <div><span>HEIGHT</span><strong>${t}m</strong></div>
              <div><span>DIST</span><strong>${e}m</strong></div>
              <div><span>BEST</span><strong>${this.bestRecord.score}</strong></div>
              ${M}
            </div>
            ${this.pendingScoreEntry?`<div class="score-register-done">✓ 등록 완료 / Registered  <span class="score-register-rank">#${this.pendingScoreEntry.rank}</span></div>`:`<div class="score-register">
              <div class="score-register-label">리더보드 등록 / Register Score</div>
              <input class="name-input clickable" type="text" maxlength="16"
                placeholder="닉네임 / Nickname"
                value="${this.playerName||""}"
                autocomplete="off" spellcheck="false" />
              <button type="button" class="clickable primary-button" data-action="score-save">
                점수 등록 / Register
              </button>
            </div>`}
            <button type="button" class="clickable secondary-button" data-action="leaderboard">리더보드 보기 / Leaderboard</button>
            <button type="button" class="clickable secondary-button" data-action="restart">다시 시작 / Retry</button>
          </div>
        </div>
      `:""}

      ${this._respawnWaiting?(()=>{const N=this._worldToScreen(this.armadillo.position.x,this.armadillo.position.y+Nt+100);return`<div class="respawn-hint" style="left:${N.x.toFixed(1)}px;top:${N.y.toFixed(1)}px">
          부활 준비 완료!<br>
          <span style="font-size:13px;opacity:0.8">Space 또는 클릭으로 낙하 / Press Space or Click to drop</span>
        </div>`})():""}

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

      ${this.showingLeaderboard?`
        <div class="leaderboard-layer">
          <div class="leaderboard-card">
            <div class="leaderboard-title">🏆 LEADERBOARD</div>
            <div class="leaderboard-list">${b}</div>
            <div class="leaderboard-actions">
              <button type="button" class="clickable secondary-button" data-action="leaderboard-close">닫기 / Close</button>
            </div>
          </div>
        </div>
      `:""}

      ${c&&!this.isPaused?`
        <button type="button" class="clickable boost-button ${u?"is-pressed":""} ${f?"is-ready":""}" data-action="boost" aria-label="Boost">
          <span class="boost-button-core">SPACE</span>
        </button>
      `:""}

      <div class="action-hint ${c&&!this.isPaused?"is-above-boost":""}">${d}</div>
    `,this._tutorialRendered=this.sm.is(K.TITLE)?this._tutorialLang:!1}loop(){const t=performance.now();let e=(t-this.lastNow)/1e3;for(this.lastNow=t,e>om&&(e=om),this.accumulator+=e;this.accumulator>=rr;)this._beginFixedStep(),this._update(rr),this._endFixedStep(),this.accumulator-=rr;const n=vt.clamp(this.accumulator/rr,0,1);this._render(e,n),requestAnimationFrame(()=>this.loop())}start(){requestAnimationFrame(()=>this.loop())}}const D1=new L1;D1.start();
