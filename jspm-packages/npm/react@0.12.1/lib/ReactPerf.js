/* */
"format cjs";!function(e){"use strict";function t(e,t,n){return n}var n={enableMeasure:!1,storedMeasure:t,measure:function(t,r,o){if("production"!==e.env.NODE_ENV){var a=null,i=function(){return n.enableMeasure?(a||(a=n.storedMeasure(t,r,o)),a.apply(this,arguments)):o.apply(this,arguments)};return i.displayName=t+"_"+r,i}return o},injection:{injectMeasure:function(e){n.storedMeasure=e}}};module.exports=n}(require("github:jspm/nodelibs@0.0.3/process"));
//# sourceMappingURL=ReactPerf.js.map