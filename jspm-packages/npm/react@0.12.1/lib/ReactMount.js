/* */
"format cjs";!function(e){"use strict";function t(e){var t=E(e);return t&&k.getID(t)}function n(t){var n=r(t);if(n)if(w.hasOwnProperty(n)){var o=w[n];o!==t&&("production"!==e.env.NODE_ENV?b(!i(o,n),"ReactMount: Two valid but unequal nodes with the same `%s`: %s",_,n):b(!i(o,n)),w[n]=t)}else w[n]=t;return n}function r(e){return e&&e.getAttribute&&e.getAttribute(_)||""}function o(e,t){var n=r(e);n!==t&&delete w[n],e.setAttribute(_,t),w[t]=e}function a(e){return w.hasOwnProperty(e)&&i(w[e],e)||(w[e]=k.findReactNodeByID(e)),w[e]}function i(t,n){if(t){"production"!==e.env.NODE_ENV?b(r(t)===n,"ReactMount: Unexpected modification of `%s`",_):b(r(t)===n);var o=k.findReactContainerForID(n);if(o&&g(o,t))return!0}return!1}function s(e){delete w[e]}function u(e){var t=w[e];return t&&i(t,e)?void(A=t):!1}function c(e){A=null,h.traverseAncestors(e,u);var t=A;return A=null,t}var l=require("./DOMProperty"),p=require("./ReactBrowserEventEmitter"),d=require("./ReactCurrentOwner"),f=require("./ReactElement"),m=require("./ReactLegacyElement"),h=require("./ReactInstanceHandles"),v=require("./ReactPerf"),g=require("./containsNode"),y=require("./deprecated"),E=require("./getReactRootElementInContainer"),C=require("./instantiateReactComponent"),b=require("./invariant"),R=require("./shouldUpdateReactComponent"),x=require("./warning"),M=m.wrapCreateElement(f.createElement),S=h.SEPARATOR,_=l.ID_ATTRIBUTE_NAME,w={},O=1,D=9,T={},P={};if("production"!==e.env.NODE_ENV)var N={};var I=[],A=null,k={_instancesByReactRootID:T,scrollMonitor:function(e,t){t()},_updateRootComponent:function(n,r,o,a){var i=r.props;return k.scrollMonitor(o,function(){n.replaceProps(i,a)}),"production"!==e.env.NODE_ENV&&(N[t(o)]=E(o)),n},_registerComponent:function(t,n){"production"!==e.env.NODE_ENV?b(n&&(n.nodeType===O||n.nodeType===D),"_registerComponent(...): Target container is not a DOM element."):b(n&&(n.nodeType===O||n.nodeType===D)),p.ensureScrollValueMonitoring();var r=k.registerContainer(n);return T[r]=t,r},_renderNewRootComponent:v.measure("ReactMount","_renderNewRootComponent",function(t,n,r){"production"!==e.env.NODE_ENV?x(null==d.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."):null;var o=C(t,null),a=k._registerComponent(o,n);return o.mountComponentIntoNode(a,n,r),"production"!==e.env.NODE_ENV&&(N[a]=E(n)),o}),render:function(n,r,o){"production"!==e.env.NODE_ENV?b(f.isValidElement(n),"renderComponent(): Invalid component element.%s","string"==typeof n?" Instead of passing an element string, make sure to instantiate it by passing it to React.createElement.":m.isValidFactory(n)?" Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.":"undefined"!=typeof n.props?" This may be caused by unintentionally loading two independent copies of React.":""):b(f.isValidElement(n));var a=T[t(r)];if(a){var i=a._currentElement;if(R(i,n))return k._updateRootComponent(a,n,r,o);k.unmountComponentAtNode(r)}var s=E(r),u=s&&k.isRenderedByReact(s),c=u&&!a,l=k._renderNewRootComponent(n,r,c);return o&&o.call(l),l},constructAndRenderComponent:function(e,t,n){var r=M(e,t);return k.render(r,n)},constructAndRenderComponentByID:function(t,n,r){var o=document.getElementById(r);return"production"!==e.env.NODE_ENV?b(o,'Tried to get element with id of "%s" but it is not present on the page.',r):b(o),k.constructAndRenderComponent(t,n,o)},registerContainer:function(e){var n=t(e);return n&&(n=h.getReactRootIDFromNodeID(n)),n||(n=h.createReactRootID()),P[n]=e,n},unmountComponentAtNode:function(n){"production"!==e.env.NODE_ENV?x(null==d.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."):null;var r=t(n),o=T[r];return o?(k.unmountComponentFromNode(o,n),delete T[r],delete P[r],"production"!==e.env.NODE_ENV&&delete N[r],!0):!1},unmountComponentFromNode:function(e,t){for(e.unmountComponent(),t.nodeType===D&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(t){var n=h.getReactRootIDFromNodeID(t),o=P[n];if("production"!==e.env.NODE_ENV){var a=N[n];if(a&&a.parentNode!==o){"production"!==e.env.NODE_ENV?b(r(a)===n,"ReactMount: Root element ID differed from reactRootID."):b(r(a)===n);var i=o.firstChild;i&&n===r(i)?N[n]=i:console.warn("ReactMount: Root element has been removed from its original container. New container:",a.parentNode)}}return o},findReactNodeByID:function(e){var t=k.findReactContainerForID(e);return k.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=k.getID(e);return t?t.charAt(0)===S:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(k.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(t,n){var r=I,o=0,a=c(n)||t;for(r[0]=a.firstChild,r.length=1;o<r.length;){for(var i,s=r[o++];s;){var u=k.getID(s);u?n===u?i=s:h.isAncestorIDOf(u,n)&&(r.length=o=0,r.push(s.firstChild)):r.push(s.firstChild),s=s.nextSibling}if(i)return r.length=0,i}r.length=0,"production"!==e.env.NODE_ENV?b(!1,"findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",n,k.getID(t)):b(!1)},getReactRootID:t,getID:n,setID:o,getNode:a,purgeID:s};k.renderComponent=y("ReactMount","renderComponent","render",this,k.render),module.exports=k}(require("github:jspm/nodelibs@0.0.3/process"));
//# sourceMappingURL=ReactMount.js.map