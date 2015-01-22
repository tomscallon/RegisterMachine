/* */
"format cjs";"use strict";function findParent(e){var t=ReactMount.getID(e),n=ReactInstanceHandles.getReactRootIDFromNodeID(t),r=ReactMount.findReactContainerForID(n),o=ReactMount.getFirstReactDOM(r);return o}function TopLevelCallbackBookKeeping(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function handleTopLevelImpl(e){for(var t=ReactMount.getFirstReactDOM(getEventTarget(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=findParent(n);for(var r=0,o=e.ancestors.length;o>r;r++){t=e.ancestors[r];var a=ReactMount.getID(t)||"";ReactEventListener._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function scrollValueMonitor(e){var t=getUnboundedScrollPosition(window);e(t)}var EventListener=require("./EventListener"),ExecutionEnvironment=require("./ExecutionEnvironment"),PooledClass=require("./PooledClass"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactMount=require("./ReactMount"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),getEventTarget=require("./getEventTarget"),getUnboundedScrollPosition=require("./getUnboundedScrollPosition");assign(TopLevelCallbackBookKeeping.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);var ReactEventListener={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function(e){ReactEventListener._handleTopLevel=e},setEnabled:function(e){ReactEventListener._enabled=!!e},isEnabled:function(){return ReactEventListener._enabled},trapBubbledEvent:function(e,t,n){var r=n;if(r)return EventListener.listen(r,t,ReactEventListener.dispatchEvent.bind(null,e))},trapCapturedEvent:function(e,t,n){var r=n;if(r)return EventListener.capture(r,t,ReactEventListener.dispatchEvent.bind(null,e))},monitorScrollValue:function(e){var t=scrollValueMonitor.bind(null,e);EventListener.listen(window,"scroll",t),EventListener.listen(window,"resize",t)},dispatchEvent:function(e,t){if(ReactEventListener._enabled){var n=TopLevelCallbackBookKeeping.getPooled(e,t);try{ReactUpdates.batchedUpdates(handleTopLevelImpl,n)}finally{TopLevelCallbackBookKeeping.release(n)}}}};module.exports=ReactEventListener;
//# sourceMappingURL=ReactEventListener.js.map