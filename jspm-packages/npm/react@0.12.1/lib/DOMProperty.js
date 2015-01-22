/* */
"format cjs";!function(e){"use strict";function t(e,t){return(e&t)===t}var n=require("./invariant"),r={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(o){var i=o.Properties||{},s=o.DOMAttributeNames||{},u=o.DOMPropertyNames||{},c=o.DOMMutationMethods||{};o.isCustomAttribute&&a._isCustomAttributeFunctions.push(o.isCustomAttribute);for(var l in i){"production"!==e.env.NODE_ENV?n(!a.isStandardName.hasOwnProperty(l),"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",l):n(!a.isStandardName.hasOwnProperty(l)),a.isStandardName[l]=!0;var p=l.toLowerCase();if(a.getPossibleStandardName[p]=l,s.hasOwnProperty(l)){var d=s[l];a.getPossibleStandardName[d]=l,a.getAttributeName[l]=d}else a.getAttributeName[l]=p;a.getPropertyName[l]=u.hasOwnProperty(l)?u[l]:l,a.getMutationMethod[l]=c.hasOwnProperty(l)?c[l]:null;var f=i[l];a.mustUseAttribute[l]=t(f,r.MUST_USE_ATTRIBUTE),a.mustUseProperty[l]=t(f,r.MUST_USE_PROPERTY),a.hasSideEffects[l]=t(f,r.HAS_SIDE_EFFECTS),a.hasBooleanValue[l]=t(f,r.HAS_BOOLEAN_VALUE),a.hasNumericValue[l]=t(f,r.HAS_NUMERIC_VALUE),a.hasPositiveNumericValue[l]=t(f,r.HAS_POSITIVE_NUMERIC_VALUE),a.hasOverloadedBooleanValue[l]=t(f,r.HAS_OVERLOADED_BOOLEAN_VALUE),"production"!==e.env.NODE_ENV?n(!a.mustUseAttribute[l]||!a.mustUseProperty[l],"DOMProperty: Cannot require using both attribute and property: %s",l):n(!a.mustUseAttribute[l]||!a.mustUseProperty[l]),"production"!==e.env.NODE_ENV?n(a.mustUseProperty[l]||!a.hasSideEffects[l],"DOMProperty: Properties that have side effects must use property: %s",l):n(a.mustUseProperty[l]||!a.hasSideEffects[l]),"production"!==e.env.NODE_ENV?n(!!a.hasBooleanValue[l]+!!a.hasNumericValue[l]+!!a.hasOverloadedBooleanValue[l]<=1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",l):n(!!a.hasBooleanValue[l]+!!a.hasNumericValue[l]+!!a.hasOverloadedBooleanValue[l]<=1)}}},o={},a={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<a._isCustomAttributeFunctions.length;t++){var n=a._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=o[e];return r||(o[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:r};module.exports=a}(require("github:jspm/nodelibs@0.0.3/process"));
//# sourceMappingURL=DOMProperty.js.map