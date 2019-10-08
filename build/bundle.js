module.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(43),i=n(7),o=n(44),s=n(2),u=n(12),a=n(47);i.urlHelpers.getBaseUrl=function(e){var t=r.parse(e.originalUrl||"").pathname||"";return r.format({protocol:"https",host:e.headers.host,pathname:t.replace(e.path,"").replace(/\/$/g,"")})};var c=i.createServer(function(e,t){return u.info("Starting Deploy CLI Extension - Version:","2.1.0"),o(e,t)});e.exports=function(e,t,n){s.setValue("PUBLIC_WT_URL",a.getUrl(t)),c(e,t,n)}},function(e,t,n){var r=n(32)("wks"),i=n(33),o=n(3).Symbol,s="function"==typeof o,u=e.exports=function(e){return r[e]||(r[e]=s&&o[e]||(s?o:i)("Symbol."+e))};u.store=r},function(e,t){"use strict";var n={},r=null,i=function(e){if(n&&n[e])return n[e];if(!r)throw new Error("A configuration provider has not been set");return r(e)};i.setProvider=function(e){r=e},i.setValue=function(e,t){n[e]=t},e.exports=i},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(15),i=n(30);e.exports=n(9)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){e.exports={}},function(e,t){e.exports=require("auth0-extension-express-tools@1.0.2")},function(e,t,n){var r=n(14);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(27)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=n(102);r.emitErrs=!0;var i=new r.Logger({transports:[new r.transports.Console({timestamp:!0,level:"debug",handleExceptions:!0,json:!1,colorize:!0})],exitOnError:!1});e.exports=i,e.exports.stream={write:function(e){i.info(e.replace(/\n$/,""))}}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(8),i=n(63),o=n(77),s=Object.defineProperty;t.f=n(9)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(32)("keys"),i=n(33);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(64),i=n(13);e.exports=function(e){return r(i(e))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.JwksClient=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(21),a=r(u),c=n(100),l=r(c),f=n(36),d=(r(f),n(37)),p=r(d),h=n(39),v=r(h),g=n(86),y=n(88);t.JwksClient=function(){function e(t){var n=this;i(this,e),this.getSigningKey=function(e,t){n.logger("Fetching signing key for '"+e+"'"),n.getSigningKeys(function(r,i){if(r)return t(r);var o=i.find(function(t){return t.kid===e});return o?t(null,o):(n.logger("Unable to find a signing key that matches '"+e+"'"),t(new v.default("Unable to find a signing key that matches '"+e+"'")))})},this.options=o({rateLimit:!1,cache:!1,strictSsl:!0},t),this.logger=(0,a.default)("jwks"),this.options.rateLimit&&(this.getSigningKey=(0,y.rateLimitSigningKey)(this,t)),this.options.cache&&(this.getSigningKey=(0,y.cacheSigningKey)(this,t))}return s(e,[{key:"getKeys",value:function(e){var t=this;this.logger("Fetching keys from '"+this.options.jwksUri+"'"),(0,l.default)({json:!0,uri:this.options.jwksUri,strictSSL:this.options.strictSsl},function(n,r){return n||r.statusCode<200||r.statusCode>=300?(t.logger("Failure:",r&&r.body||n),e(r?new p.default(r.body&&(r.body.message||r.body)||r.statusMessage||"Http Error "+r.statusCode):n)):(t.logger("Keys:",r.body.keys),e(null,r.body.keys))})}},{key:"getSigningKeys",value:function(e){var t=this;this.getKeys(function(n,r){if(n)return e(n);if(!r||!r.length)return e(new p.default("The JWKS endpoint did not contain any keys"));var i=r.filter(function(e){return"sig"===e.use&&"RSA"===e.kty&&e.kid&&(e.x5c&&e.x5c.length||e.n&&e.e)}).map(function(e){return e.x5c&&e.x5c.length?{kid:e.kid,nbf:e.nbf,publicKey:(0,g.certToPEM)(e.x5c[0])}:{kid:e.kid,nbf:e.nbf,rsaPublicKey:(0,g.rsaPublicKeyToPEM)(e.n,e.e)}});return i.length?(t.logger("Signing Keys:",i),e(null,i)):e(new p.default("The JWKS endpoint did not contain any signing keys"))})}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SigningKeyNotFoundError=t.JwksRateLimitError=t.JwksError=t.ArgumentError=void 0;var i=n(36),o=r(i),s=n(37),u=r(s),a=n(38),c=r(a),l=n(39),f=r(l);t.ArgumentError=o.default,t.JwksError=u.default,t.JwksRateLimitError=c.default,t.SigningKeyNotFoundError=f.default},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("path")},function(e,t,n){var r=n(24),i=n(1)("toStringTag"),o="Arguments"==r(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=Object(e),i))?n:o?r(t):"Object"==(u=r(t))&&"function"==typeof t.callee?"Arguments":u}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(14),i=n(3).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){"use strict";var r=n(29),i=n(61),o=n(72),s=n(5),u=n(6),a=n(65),c=n(31),l=n(69),f=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",h="keys",v="values",g=function(){return this};e.exports=function(e,t,n,y,m,k,x){a(n,t,y);var _,b,w,S=function(e){if(!d&&e in I)return I[e];switch(e){case h:return function(){return new n(this,e)};case v:return function(){return new n(this,e)}}return function(){return new n(this,e)}},E=t+" Iterator",T=m==v,A=!1,I=e.prototype,j=I[f]||I[p]||m&&I[m],M=j||S(m),O=m?T?S("entries"):M:void 0,C="Array"==t?I.entries||j:j;if(C&&(w=l(C.call(new e)),w!==Object.prototype&&w.next&&(c(w,E,!0),r||"function"==typeof w[f]||s(w,f,g))),T&&j&&j.name!==v&&(A=!0,M=function(){return j.call(this)}),r&&!x||!d&&!A&&I[f]||s(I,f,M),u[t]=M,u[E]=g,m)if(_={values:T?M:S(v),keys:k?M:S(h),entries:O},x)for(b in _)b in I||o(I,b,_[b]);else i(i.P+i.F*(d||A),t,_);return _}},function(e,t){e.exports=!0},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(15).f,i=n(10),o=n(1)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){var r=n(4),i=n(3),o="__core-js_shared__",s=i[o]||(i[o]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(29)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){"use strict";var r=n(73)(!0);n(28)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){n(81);for(var r=n(3),i=n(5),o=n(6),s=n(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],l=r[c],f=l&&l.prototype;f&&!f[s]&&i(f,s,c),o[c]=o.Array}},function(e,t){"use strict";function n(e){Error.call(this,e),Error.captureStackTrace(this,this.constructor),this.name="ArgumentError",this.message=e}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,e.exports=n},function(e,t){"use strict";function n(e){Error.call(this,e),Error.captureStackTrace(this,this.constructor),this.name="JwksError",this.message=e}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,e.exports=n},function(e,t){"use strict";function n(e){Error.call(this,e),Error.captureStackTrace(this,this.constructor),this.name="JwksRateLimitError",this.message=e}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,e.exports=n},function(e,t){"use strict";function n(e){Error.call(this,e),Error.captureStackTrace(this,this.constructor),this.name="SigningKeyNotFoundError",this.message=e}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,e.exports=n},function(e,t){var n=function(e,t,n,r){if(this.bucketSize=e,this.tokensPerInterval=t,"string"==typeof n)switch(n){case"sec":case"second":this.interval=1e3;break;case"min":case"minute":this.interval=6e4;break;case"hr":case"hour":this.interval=36e5;break;case"day":this.interval=864e5;break;default:throw new Error("Invaid interval "+n)}else this.interval=n;this.parentBucket=r,this.content=0,this.lastDrip=+new Date};n.prototype={bucketSize:1,tokensPerInterval:1,interval:1e3,parentBucket:null,content:0,lastDrip:0,removeTokens:function(e,t){function n(){var n=Math.ceil((e-r.content)*(r.interval/r.tokensPerInterval));return setTimeout(function(){r.removeTokens(e,t)},n),!1}var r=this;return this.bucketSize?e>this.bucketSize?(process.nextTick(t.bind(null,"Requested tokens "+e+" exceeds bucket size "+this.bucketSize,null)),!1):(this.drip(),e>this.content?n():this.parentBucket?this.parentBucket.removeTokens(e,function(i,o){return i?t(i,null):e>r.content?n():(r.content-=e,void t(null,Math.min(o,r.content)))}):(this.content-=e,process.nextTick(t.bind(null,null,this.content)),!0)):(process.nextTick(t.bind(null,null,e,Number.POSITIVE_INFINITY)),!0)},tryRemoveTokens:function(e){return!(this.bucketSize&&(e>this.bucketSize||(this.drip(),e>this.content||this.parentBucket&&!this.parentBucket.tryRemoveTokens(e)||(this.content-=e,0))))},drip:function(){if(!this.tokensPerInterval)return void(this.content=this.bucketSize);var e=+new Date,t=Math.max(e-this.lastDrip,0);this.lastDrip=e;var n=t*(this.tokensPerInterval/this.interval);this.content=Math.min(this.content+n,this.bucketSize)}},e.exports=n},function(e,t){e.exports=require("auth0-extension-tools@1.0.0")},function(e,t){e.exports=require("bluebird")},function(e,t){e.exports=require("url")},function(e,t,n){(function(t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(22),o=r(i),s=n(99),u=r(s),a=n(11),c=r(a),l=n(94),f=r(l),d=n(7),p=n(12),h=r(p),v=n(2),g=r(v),y=n(48),m=r(y),k=n(51),x=r(k),_=n(49),b=r(_),w=n(50),S=r(w),E=["read:client_grants","create:client_grants","delete:client_grants","update:client_grants","read:clients","update:clients","delete:clients","create:clients","read:client_keys","update:client_keys","delete:client_keys","create:client_keys","read:connections","update:connections","delete:connections","create:connections","read:resource_servers","update:resource_servers","delete:resource_servers","create:resource_servers","read:rules","update:rules","delete:rules","create:rules","read:rules_configs","update:rules_configs","delete:rules_configs","read:email_provider","update:email_provider","delete:email_provider","create:email_provider","read:tenant_settings","update:tenant_settings","read:grants","delete:grants","read:guardian_factors","update:guardian_factors","read:email_templates","create:email_templates","update:email_templates"];e.exports=function(e){g.default.setProvider(e);var n=new c.default;return n.use((0,u.default)(":method :url :status :response-time ms - :res[content-length]",{stream:h.default.stream})),n.use(f.default.json()),n.use(f.default.urlencoded({extended:!1})),n.use(d.routes.dashboardAdmins({stateKey:"deploy-cli-state",secret:(0,g.default)("EXTENSION_SECRET"),audience:"urn:deploy-cli",rta:(0,g.default)("AUTH0_RTA").replace("https://",""),domain:(0,g.default)("AUTH0_DOMAIN"),baseUrl:(0,g.default)("PUBLIC_WT_URL"),clientName:"Deploy CLI Extension",urlPrefix:"/admins",sessionStorageKey:"deploy-cli:apiToken",scopes:E.join(" ")})),n.use("/api",(0,m.default)()),n.use("/app",c.default.static(o.default.join(t,"../dist"))),n.use("/meta",(0,x.default)()),n.use("/.extensions",(0,b.default)()),n.get("*",(0,S.default)()),n.use(d.middlewares.errorHandler(h.default.error)),n}}).call(t,"/")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(96),o=r(i),s=n(83),u=r(s),a=n(41);t.default=function(e,t,n,r){return n&&n.length?(0,o.default)({secret:r?new Buffer(n,"base64"):n,audience:t,issuer:"https://"+e+"/",algorithms:["HS256"],credentialsRequired:!0,getToken:function(e){return e.body&&e.body.token}}):(0,o.default)({secret:u.default.expressJwtSecret({cache:!0,rateLimit:!0,jwksRequestsPerMinute:5,jwksUri:"https://"+e+"/.well-known/jwks.json",handleSigningKeyError:function(e,t){return t(e instanceof u.default.SigningKeyNotFoundError?new a.UnauthorizedError("A token was provided with an invalid kid"):e)}}),audience:t,issuer:"https://"+e+"/",algorithms:["RS256"],credentialsRequired:!0,getToken:function(e){return e.body&&e.body.token}})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getClient=t.getResourceServer=void 0;var i=n(42),o=r(i),s=n(101),u=r(s),a=n(41),c=n(2),l=r(c),f=function(e){var t=e.user&&e.user.access_token&&e.user.access_token.length;return t?o.default.resolve(e.user.access_token):a.managementApi.getAccessTokenCached((0,l.default)("AUTH0_DOMAIN"),(0,l.default)("AUTH0_CLIENT_ID"),(0,l.default)("AUTH0_CLIENT_SECRET"))},d=function(e,t,n,r){return new o.default(function(i){return f(e).then(function(e){(0,u.default)(n,"https://"+(0,l.default)("AUTH0_DOMAIN")+"/api/v2/"+t).send(r||{}).set("Content-Type","application/json").set("Authorization","Bearer "+e).end(function(e,t){return i(e?[]:t.body)})})})};t.getResourceServer=function(e,t){return d(e,"resource-servers","GET").then(function(e){return e.find(function(e){return e.identifier===t})})},t.getClient=function(e,t){return new o.default(function(n){return e.auth0.clients.get({client_id:t},function(e,t){return e?n():n(t)})})}},function(e,t,n){"use strict";function r(e){if(!e.container)return null;var t=e.container.replace(c,"\\$&"),n=e.jtn?e.jtn.replace(c,"\\$&"):"";if(e.url_format===a)return new RegExp("^/api/run/"+t+"/(?:"+n+"/?)?");if(e.url_format===u)return new RegExp("^/"+t+"/(?:"+n+"/?)?");if(e.url_format===s)return new RegExp("^/(?:"+n+"/?)?");throw new Error("Unsupported webtask URL format.")}function i(e,t){if(!e)return null;var n=e.indexOf("sandbox8")>=0?"8":"",r=e.split(".it.auth0.com")[0],i=r.split("-")[1]||"us";return"https://"+t+"."+i+n+".webtask.io/"}var o=n(43),s=3,u=2,a=1,c=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports.getUrl=function(e){var t=r(e.x_wt),n=e.url,s=e.url.replace(t,"/"),u=o.parse(s||"").pathname,a=o.parse(n||"").pathname||"",c=o.format({protocol:"https",host:e.headers.host,pathname:a.replace(u,"").replace(/\/$/g,"")});if(e.x_wt){var l=".it.auth0.com/api/run/"+e.x_wt.container+"/",f=i(c,e.x_wt.container);c.indexOf(l)>=0&&(c=c.replace("https://"+e.headers.host+"'/api/run/"+e.x_wt.container+"/",f))}return c}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(54),o=r(i),s=n(22),u=r(s),a=n(42),c=r(a),l=n(11),f=n(7),d=n(2),p=r(d),h=n(46),v=n(45),g=r(v);t.default=function(){var e=(0,l.Router)(),t=[f.middlewares.authenticateAdmins({credentialsRequired:!0,secret:(0,p.default)("EXTENSION_SECRET"),audience:"urn:deploy-cli",baseUrl:(0,p.default)("PUBLIC_WT_URL")}),f.middlewares.managementApiClient({domain:(0,p.default)("AUTH0_DOMAIN")})];return e.get("/config",t,function(e,t,n){c.default.all([(0,h.getClient)(e,(0,p.default)("AUDIENCE")),(0,h.getResourceServer)(e,(0,p.default)("AUDIENCE"))]).then(function(n){var r=(0,o.default)(n,2),i=r[0],s=r[1];return t.json({domain:(0,p.default)("AUTH0_DOMAIN"),audience:(0,p.default)("AUDIENCE"),isClient:null!=i||null==s,isResourceServer:null!=s,tokenEndpoint:u.default.join(f.urlHelpers.getBaseUrl(e),"/token").replace("http:/","http://").replace("https:/","https://")})}).catch(n)}),(0,g.default)((0,p.default)("AUTH0_DOMAIN"),(0,p.default)("AUDIENCE"),(0,p.default)("SECRET"),(0,p.default)("SECRET_ENCODED")),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),o=n(7),s=n(2),u=r(s),a=n(12),c=r(a);t.default=function(){var e=(0,i.Router)(),t=o.middlewares.validateHookToken((0,u.default)("AUTH0_DOMAIN"),(0,u.default)("WT_URL"),(0,u.default)("EXTENSION_SECRET"));return e.use("/on-uninstall",t("/.extensions/on-uninstall")),e.use(o.middlewares.managementApiClient({domain:(0,u.default)("AUTH0_DOMAIN"),clientId:(0,u.default)("AUTH0_CLIENT_ID"),clientSecret:(0,u.default)("AUTH0_CLIENT_SECRET")})),e.delete("/on-uninstall",function(e,t){var n=(0,u.default)("AUTH0_CLIENT_ID");e.auth0.clients.delete({client_id:n}).then(function(){c.default.debug("Deleted client "+n),t.sendStatus(204)}).catch(function(e){c.default.debug("Error deleting client: "+(0,u.default)("AUTH0_CLIENT_ID")),c.default.error(e),t.sendStatus(204)})}),e}},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(97),o=r(i),s=n(95),u=r(s),a=n(22),c=r(a),l=n(7),f=n(2),d=r(f);t.default=function(){var t='\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <title>Auth0 - Deploy CLI</title>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1715/css/index.min.css">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.css">\n    <% if (assets.style) { %><link rel="stylesheet" type="text/css" href="/app/<%= assets.style %>"><% } %>\n    <% if (assets.version) { %><link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/assets.auth0.com/extensions/auth0-deploy-cli-extension/assets/auth0-deploy-cli.ui.<%= assets.version %>.css"><% } %>\n    <style type="text/css">\n    pre {\n      background-color: #fbfbfb;\n      border: 1px solid #f1f1f1;\n      border-radius: 0px;\n      padding: 10px 10px;\n      font-size: 12px;\n    }\n    </style>\n  </head>\n  <body class="a0-extension">\n    <div id="app"></div>\n    <script type="text/javascript" src="//cdn.auth0.com/js/lock-9.0.min.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1715/js/bundle.js"></script>\n    <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;</script>\n    <% if (assets.vendors) { %><script type="text/javascript" src="/app/<%= assets.vendors %>"></script><% } %>\n    <% if (assets.app) { %><script type="text/javascript" src="//localhost:3000/app/<%= assets.app %>"></script><% } %>\n    <% if (assets.version) { %>\n    <script type="text/javascript" src="https://s3.amazonaws.com/assets.auth0.com/extensions/auth0-deploy-cli-extension/assets/auth0-deploy-cli.ui.vendors.<%= assets.version %>.js"></script>\n    <script type="text/javascript" src="https://s3.amazonaws.com/assets.auth0.com/extensions/auth0-deploy-cli-extension/assets/auth0-deploy-cli.ui.<%= assets.version %>.js"></script>\n    <% } %>\n  </body>\n  </html>\n  ';return function(n,r){var i={BASE_URL:l.urlHelpers.getBaseUrl(n),BASE_PATH:l.urlHelpers.getBasePath(n),AUTH0_DOMAIN:(0,d.default)("AUTH0_DOMAIN"),AUTH0_MANAGE_URL:(0,d.default)("AUTH0_MANAGE_URL")||"http://manage.auth0.com"},s="2.1.0";return s?r.send(u.default.render(t,{config:i,assets:{version:s}})):o.default.readFile(c.default.join(e,"../../dist/manifest.json"),"utf8",function(e,n){var o={config:i,assets:{app:"bundle.js"}};!e&&n&&(o.assets=JSON.parse(n)),r.send(u.default.render(t,o))})}}}).call(t,"/")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),o=r(i),s=n(82),u=r(s);t.default=function(){var e=o.default.Router();return e.get("/",function(e,t){t.status(200).send(u.default)}),e}},function(e,t,n){e.exports={default:n(55),__esModule:!0}},function(e,t,n){e.exports={default:n(56),__esModule:!0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(53),o=r(i),s=n(52),u=r(s);t.default=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=(0,u.default)(e);!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,o.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(e,t,n){n(35),n(34),e.exports=n(79)},function(e,t,n){n(35),n(34),e.exports=n(80)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(){}},function(e,t,n){var r=n(18),i=n(75),o=n(74);e.exports=function(e){return function(t,n,s){var u,a=r(t),c=i(a.length),l=o(s,c);if(e&&n!=n){for(;c>l;)if(u=a[l++],u!=u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(57);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(3),i=n(4),o=n(60),s=n(5),u=n(10),a="prototype",c=function(e,t,n){var l,f,d,p=e&c.F,h=e&c.G,v=e&c.S,g=e&c.P,y=e&c.B,m=e&c.W,k=h?i:i[t]||(i[t]={}),x=k[a],_=h?r:v?r[t]:(r[t]||{})[a];h&&(n=t);for(l in n)f=!p&&_&&void 0!==_[l],f&&u(k,l)||(d=f?_[l]:n[l],k[l]=h&&"function"!=typeof _[l]?n[l]:y&&f?o(d,r):m&&_[l]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[a]=e[a],t}(d):g&&"function"==typeof d?o(Function.call,d):d,g&&((k.virtual||(k.virtual={}))[l]=d,e&c.R&&x&&!x[l]&&s(x,l,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){var r=n(3).document;e.exports=r&&r.documentElement},function(e,t,n){e.exports=!n(9)&&!n(27)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(24);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){"use strict";var r=n(67),i=n(30),o=n(31),s={};n(5)(s,n(1)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(s,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var r=n(8),i=n(68),o=n(26),s=n(16)("IE_PROTO"),u=function(){},a="prototype",c=function(){var e,t=n(25)("iframe"),r=o.length,i="<",s=">";for(t.style.display="none",n(62).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(i+"script"+s+"document.F=Object"+i+"/script"+s),e.close(),c=e.F;r--;)delete c[a][o[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(u[a]=r(e),n=new u,u[a]=null,n[s]=e):n=c(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(15),i=n(8),o=n(71);e.exports=n(9)?Object.defineProperties:function(e,t){i(e);for(var n,s=o(t),u=s.length,a=0;u>a;)r.f(e,n=s[a++],t[n]);return e}},function(e,t,n){var r=n(10),i=n(76),o=n(16)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,n){var r=n(10),i=n(18),o=n(59)(!1),s=n(16)("IE_PROTO");e.exports=function(e,t){var n,u=i(e),a=0,c=[];for(n in u)n!=s&&r(u,n)&&c.push(n);for(;t.length>a;)r(u,n=t[a++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(70),i=n(26);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){e.exports=n(5)},function(e,t,n){var r=n(17),i=n(13);e.exports=function(e){return function(t,n){var o,s,u=String(i(t)),a=r(n),c=u.length;return a<0||a>=c?e?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?e?u.charAt(a):o:e?u.slice(a,a+2):(o-55296<<10)+(s-56320)+65536)}}},function(e,t,n){var r=n(17),i=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(17),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(13);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(14);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(23),i=n(1)("iterator"),o=n(6);e.exports=n(4).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[r(e)]}},function(e,t,n){var r=n(8),i=n(78);e.exports=n(4).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},function(e,t,n){var r=n(23),i=n(1)("iterator"),o=n(6);e.exports=n(4).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(r(t))}},function(e,t,n){"use strict";var r=n(58),i=n(66),o=n(6),s=n(18);e.exports=n(28)(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,n):"values"==t?i(0,e[n]):i(0,[n,e[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports={title:"Auth0 Deploy CLI",name:"auth0-deploy-cli-extension",version:"2.1.0",preVersion:"2.0.0",author:"auth0",description:"The Auth0 Deploy Extension helps configure your Auth0 Tenant to use Auth0 Deploy CLI",type:"application",useHashName:!1,docsUrl:"https://github.com/auth0/auth0-deploy-cli/blob/master/README.md",logoUrl:"http://openid.net/wordpress-content/uploads/2016/05/auth0-logo-blue.png",codeUrl:"https://raw.githubusercontent.com/auth0-extensions/auth0-deploy-cli-extension/master/build/bundle.js",initialUrlPath:"/admins/login",uninstallConfirmMessage:"Do you really want to uninstall this extension? Doing so will also remove the client.",repository:"https://github.com/auth0-extensions/auth0-deploy-cli-extension",keywords:["auth0","extension","deploy","cli"],auth0:{createClient:!0,onUninstallPath:"/.extensions/on-uninstall",scopes:"read:client_grants create:client_grants delete:client_grants update:client_grants read:clients update:clients delete:clients create:clients read:client_keys update:client_keys delete:client_keys create:client_keys read:connections update:connections delete:connections create:connections read:resource_servers update:resource_servers delete:resource_servers create:resource_servers read:rules update:rules delete:rules create:rules read:rules_configs update:rules_configs delete:rules_configs read:email_provider update:email_provider delete:email_provider create:email_provider read:tenant_settings update:tenant_settings read:grants delete:grants read:guardian_factors update:guardian_factors read:email_templates create:email_templates update:email_templates read:roles update:roles delete:roles create:roles read:prompts update:prompts read:branding update:branding read:hooks update:hooks delete:hooks create:hooks"}}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var i=n(19),o=n(20),s=r(o),u=n(85),a=n(84);e.exports=function(e){return new i.JwksClient(e)},e.exports.ArgumentError=s.ArgumentError,e.exports.JwksError=s.JwksError,e.exports.JwksRateLimitError=s.JwksRateLimitError,e.exports.SigningKeyNotFoundError=s.SigningKeyNotFoundError,e.exports.expressJwtSecret=a.expressJwtSecret,e.exports.hapiJwt2Key=u.hapiJwt2Key},function(e,t,n){"use strict";var r=n(20),i=n(19),o=function(e,t){return e&&"SigningKeyNotFoundError"===e.name?t(null):e?t(e):void 0};e.exports.expressJwtSecret=function(e){if(null===e||void 0===e)throw new r.ArgumentError("An options object must be provided when initializing expressJwtSecret");var t=new i.JwksClient(e),n=e.handleSigningKeyError||o;return function(e,r,i,o){return r&&"RS256"===r.alg?void t.getSigningKey(r.kid,function(e,t){return e?n(e,function(e){return o(e,null)}):o(null,t.publicKey||t.rsaPublicKey)}):o(null,null)}}},function(e,t,n){"use strict";var r=n(20),i=n(19),o=function(e,t){return e&&"SigningKeyNotFoundError"===e.name?t(null,null,null):e?t(e,null,null):void 0};e.exports.hapiJwt2Key=function(e){if(null===e||void 0===e)throw new r.ArgumentError("An options object must be provided when initializing expressJwtSecret");var t=new i.JwksClient(e),n=e.handleSigningKeyError||o;return function(e,r){return e&&e.header?"RS256"!==e.header.alg?r(null,null,null):void t.getSigningKey(e.header.kid,function(e,t){return e?n(e,function(e){return r(e,null,null)}):r(null,t.publicKey||t.rsaPublicKey,t)}):r(null,null,null)}}},function(e,t){"use strict";function n(e){return e=e.match(/.{1,64}/g).join("\n"),e="-----BEGIN CERTIFICATE-----\n"+e+"\n-----END CERTIFICATE-----\n"}function r(e){var t=e[0];return t<"0"||t>"7"?"00"+e:e}function i(e){var t=e.toString(16);return t.length%2?"0"+t:t}function o(e){if(e<=127)return i(e);var t=i(e),n=128+t.length/2;return i(n)+t}function s(e,t){var n=new Buffer(e,"base64"),i=new Buffer(t,"base64"),s=r(n.toString("hex")),u=r(i.toString("hex")),a=s.length/2,c=u.length/2,l=o(a),f=o(c),d="30"+o(a+c+l.length/2+f.length/2+2)+"02"+l+s+"02"+f+u,p=new Buffer(d,"hex").toString("base64"),h="-----BEGIN RSA PUBLIC KEY-----\n";return h+=""+p.match(/.{1,64}/g).join("\n"),h+="\n-----END RSA PUBLIC KEY-----\n"}Object.defineProperty(t,"__esModule",{value:!0}),t.certToPEM=n,t.rsaPublicKeyToPEM=s;
},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length<=1||void 0===arguments[1]?options:arguments[1],n=t.cacheMaxEntries,r=void 0===n?5:n,i=t.cacheMaxAge,s=void 0===i?(0,o.default)("10h"):i,a=(0,u.default)("jwks"),l=e.getSigningKey;return a("Configured caching of singing keys. Max: "+r+" / Age: "+s),(0,c.default)({load:function(e,t){l(e,function(n,r){return n?t(n):(a("Caching signing key for '"+e+"':",r),t(null,r))})},hash:function(e){return e},maxAge:s,max:r})};var i=n(93),o=r(i),s=n(21),u=r(s),a=n(98),c=r(a)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.rateLimitSigningKey=t.cacheSigningKey=void 0;var i=n(87),o=r(i),s=n(89),u=r(s);t.cacheSigningKey=o.default,t.rateLimitSigningKey=u.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length<=1||void 0===arguments[1]?options:arguments[1],n=t.jwksRequestsPerMinute,r=void 0===n?10:n,i=(0,o.default)("jwks"),u=e.getSigningKey,c=new s.RateLimiter(r,"minute",!0);return i("Configured rate limiting to JWKS endpoint at "+r+"/minute"),function(e,t){c.removeTokens(1,function(n,r){return n?t(n):(i("Requests to the JWKS endpoint available for the next minute:",r),r<0?(i("Too many requests to the JWKS endpoint"),t(new a.default("Too many requests to the JWKS endpoint"))):u(e,t))})}};var i=n(21),o=r(i),s=n(90),u=n(38),a=r(u)},function(e,t,n){t.RateLimiter=n(92),t.TokenBucket=n(40)},function(e,t){var n=function(){if("undefined"!=typeof process&&process.hrtime){var e=process.hrtime(),t=e[0],n=e[1];return 1e3*t+Math.floor(n/1e6)}return(new Date).getTime()};e.exports=n},function(e,t,n){var r=n(40),i=n(91),o=function(e,t,n){this.tokenBucket=new r(e,e,t,null),this.tokenBucket.content=e,this.curIntervalStart=i(),this.tokensThisInterval=0,this.fireImmediately=n};o.prototype={tokenBucket:null,curIntervalStart:0,tokensThisInterval:0,fireImmediately:!1,removeTokens:function(e,t){function n(n,i){return n?t(n,null):(r.tokensThisInterval+=e,void t(null,i))}if(e>this.tokenBucket.bucketSize)return process.nextTick(t.bind(null,"Requested tokens "+e+" exceeds maximum tokens per interval "+this.tokenBucket.bucketSize,null)),!1;var r=this,o=i();if((o<this.curIntervalStart||o-this.curIntervalStart>=this.tokenBucket.interval)&&(this.curIntervalStart=o,this.tokensThisInterval=0),e>this.tokenBucket.tokensPerInterval-this.tokensThisInterval){if(this.fireImmediately)process.nextTick(t.bind(null,null,-1));else{var s=Math.ceil(this.curIntervalStart+this.tokenBucket.interval-o);setTimeout(function(){r.tokenBucket.removeTokens(e,n)},s)}return!1}return this.tokenBucket.removeTokens(e,n)},tryRemoveTokens:function(e){if(e>this.tokenBucket.bucketSize)return!1;var t=i();if((t<this.curIntervalStart||t-this.curIntervalStart>=this.tokenBucket.interval)&&(this.curIntervalStart=t,this.tokensThisInterval=0),e>this.tokenBucket.tokensPerInterval-this.tokensThisInterval)return!1;var n=this.tokenBucket.tryRemoveTokens(e);return n&&(this.tokensThisInterval+=e),n},getTokensRemaining:function(){return this.tokenBucket.drip(),this.tokenBucket.content}},e.exports=o},function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*f;case"weeks":case"week":case"w":return n*l;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*a;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){var t=Math.abs(e);return t>=c?Math.round(e/c)+"d":t>=a?Math.round(e/a)+"h":t>=u?Math.round(e/u)+"m":t>=s?Math.round(e/s)+"s":e+"ms"}function i(e){var t=Math.abs(e);return t>=c?o(e,t,c,"day"):t>=a?o(e,t,a,"hour"):t>=u?o(e,t,u,"minute"):t>=s?o(e,t,s,"second"):e+" ms"}function o(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}var s=1e3,u=60*s,a=60*u,c=24*a,l=7*c,f=365.25*c;e.exports=function(e,t){t=t||{};var o=typeof e;if("string"===o&&e.length>0)return n(e);if("number"===o&&isFinite(e))return t.long?i(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("ejs")},function(e,t){e.exports=require("express-jwt")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("lru-memoizer@1.10.0")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("request@2.67.0")},function(e,t){e.exports=require("superagent")},function(e,t){e.exports=require("winston")}]);