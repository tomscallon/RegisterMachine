/* */
"format cjs";"use strict";function SyntheticUIEvent(e,t,n){SyntheticEvent.call(this,e,t,n)}var SyntheticEvent=require("./SyntheticEvent"),getEventTarget=require("./getEventTarget"),UIEventInterface={view:function(e){if(e.view)return e.view;var t=getEventTarget(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface),module.exports=SyntheticUIEvent;
//# sourceMappingURL=SyntheticUIEvent.js.map