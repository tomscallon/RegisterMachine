/* */
"format cjs";"use strict";function ReactPutListenerQueue(){this.listenersToPut=[]}var PooledClass=require("./PooledClass"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),assign=require("./Object.assign");assign(ReactPutListenerQueue.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];ReactBrowserEventEmitter.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),PooledClass.addPoolingTo(ReactPutListenerQueue),module.exports=ReactPutListenerQueue;
//# sourceMappingURL=ReactPutListenerQueue.js.map