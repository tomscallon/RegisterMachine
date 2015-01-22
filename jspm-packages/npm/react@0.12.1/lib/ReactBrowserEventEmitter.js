/* */
"format cjs";"use strict";function getListeningForDocument(e){return Object.prototype.hasOwnProperty.call(e,topListenersIDKey)||(e[topListenersIDKey]=reactTopListenersCounter++,alreadyListeningTo[e[topListenersIDKey]]={}),alreadyListeningTo[e[topListenersIDKey]]}var EventConstants=require("./EventConstants"),EventPluginHub=require("./EventPluginHub"),EventPluginRegistry=require("./EventPluginRegistry"),ReactEventEmitterMixin=require("./ReactEventEmitterMixin"),ViewportMetrics=require("./ViewportMetrics"),assign=require("./Object.assign"),isEventSupported=require("./isEventSupported"),alreadyListeningTo={},isMonitoringScrollValue=!1,reactTopListenersCounter=0,topEventMapping={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},topListenersIDKey="_reactListenersID"+String(Math.random()).slice(2),ReactBrowserEventEmitter=assign({},ReactEventEmitterMixin,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel),ReactBrowserEventEmitter.ReactEventListener=e}},setEnabled:function(e){ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!ReactBrowserEventEmitter.ReactEventListener||!ReactBrowserEventEmitter.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,r=getListeningForDocument(n),o=EventPluginRegistry.registrationNameDependencies[e],a=EventConstants.topLevelTypes,i=0,s=o.length;s>i;i++){var u=o[i];r.hasOwnProperty(u)&&r[u]||(u===a.topWheel?isEventSupported("wheel")?ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(a.topWheel,"wheel",n):isEventSupported("mousewheel")?ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(a.topWheel,"mousewheel",n):ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(a.topWheel,"DOMMouseScroll",n):u===a.topScroll?isEventSupported("scroll",!0)?ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(a.topScroll,"scroll",n):ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(a.topScroll,"scroll",ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE):u===a.topFocus||u===a.topBlur?(isEventSupported("focus",!0)?(ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(a.topFocus,"focus",n),ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(a.topBlur,"blur",n)):isEventSupported("focusin")&&(ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(a.topFocus,"focusin",n),ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(a.topBlur,"focusout",n)),r[a.topBlur]=!0,r[a.topFocus]=!0):topEventMapping.hasOwnProperty(u)&&ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(u,topEventMapping[u],n),r[u]=!0)}},trapBubbledEvent:function(e,t,n){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!isMonitoringScrollValue){var e=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(e),isMonitoringScrollValue=!0}},eventNameDispatchConfigs:EventPluginHub.eventNameDispatchConfigs,registrationNameModules:EventPluginHub.registrationNameModules,putListener:EventPluginHub.putListener,getListener:EventPluginHub.getListener,deleteListener:EventPluginHub.deleteListener,deleteAllListeners:EventPluginHub.deleteAllListeners});module.exports=ReactBrowserEventEmitter;
//# sourceMappingURL=ReactBrowserEventEmitter.js.map