/* */
"format cjs";function visitObjectLiteralSpread(e,t,r,n){utils.catchup(t.range[0],n),utils.append("Object.assign({",n),utils.move(t.range[0]+1,n);for(var o=!1,s=0;s<t.properties.length;s++){var a=t.properties[s];a.type===Syntax.SpreadProperty?(o||utils.append("}",n),0===s&&utils.append(",",n),utils.catchup(a.range[0],n),utils.move(a.range[0]+3,n),e(a.argument,r,n),utils.catchup(a.range[1],n),o=!0):(utils.catchup(a.range[0],n),o&&utils.append("{",n),e(a,r,n),utils.catchup(a.range[1],n),o=!1)}return utils.catchup(t.range[1]-1,n),utils.move(t.range[1],n),o||utils.append("}",n),utils.append(")",n),!1}var Syntax=require("esprima-fb").Syntax,utils=require("../src/utils");visitObjectLiteralSpread.test=function(e){if(e.type!==Syntax.ObjectExpression)return!1;for(var t=!1,r=0;r<e.properties.length;r++){var n=e.properties[r];if(n.type===Syntax.SpreadProperty)t=!0;else if("init"!==n.kind)return!1}return t},exports.visitorList=[visitObjectLiteralSpread];
//# sourceMappingURL=es7-spread-property-visitors.js.map