/* */
"format cjs";function visitObjectLiteralShortNotation(e,t,r,o){return utils.catchup(t.key.range[1],o),utils.append(":"+t.key.name,o),!1}var Syntax=require("esprima-fb").Syntax,utils=require("../src/utils");visitObjectLiteralShortNotation.test=function(e,t){return e.type===Syntax.Property&&"init"===e.kind&&e.shorthand===!0&&t[0].type!==Syntax.ObjectPattern},exports.visitorList=[visitObjectLiteralShortNotation];
//# sourceMappingURL=es6-object-short-notation-visitors.js.map