/* */
"format cjs";"use strict";function isPresto(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function isKeypressCommand(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("./ExecutionEnvironment"),SyntheticInputEvent=require("./SyntheticInputEvent"),keyOf=require("./keyOf"),canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&"TextEvent"in window&&!("documentMode"in document||isPresto()),SPACEBAR_CODE=32,SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE),topLevelTypes=EventConstants.topLevelTypes,eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]}},fallbackChars=null,hasSpaceKeypress=!1,BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,r){var o;if(canUseTextInputEvent)switch(e){case topLevelTypes.topKeyPress:var a=r.which;if(a!==SPACEBAR_CODE)return;hasSpaceKeypress=!0,o=SPACEBAR_CHAR;break;case topLevelTypes.topTextInput:if(o=r.data,o===SPACEBAR_CHAR&&hasSpaceKeypress)return;break;default:return}else{switch(e){case topLevelTypes.topPaste:fallbackChars=null;break;case topLevelTypes.topKeyPress:r.which&&!isKeypressCommand(r)&&(fallbackChars=String.fromCharCode(r.which));break;case topLevelTypes.topCompositionEnd:fallbackChars=r.data}if(null===fallbackChars)return;o=fallbackChars}if(o){var i=SyntheticInputEvent.getPooled(eventTypes.beforeInput,n,r);return i.data=o,fallbackChars=null,EventPropagators.accumulateTwoPhaseDispatches(i),i}}};module.exports=BeforeInputEventPlugin;
//# sourceMappingURL=BeforeInputEventPlugin.js.map