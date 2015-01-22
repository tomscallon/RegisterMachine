/* */
"format cjs";"use strict";function getSelection(e){if("selectionStart"in e&&ReactInputSelection.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function constructSelectEvent(e){if(!mouseDown&&null!=activeElement&&activeElement==getActiveElement()){var t=getSelection(activeElement);if(!lastSelection||!shallowEqual(lastSelection,t)){lastSelection=t;var n=SyntheticEvent.getPooled(eventTypes.select,activeElementID,e);return n.type="select",n.target=activeElement,EventPropagators.accumulateTwoPhaseDispatches(n),n}}}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ReactInputSelection=require("./ReactInputSelection"),SyntheticEvent=require("./SyntheticEvent"),getActiveElement=require("./getActiveElement"),isTextInputElement=require("./isTextInputElement"),keyOf=require("./keyOf"),shallowEqual=require("./shallowEqual"),topLevelTypes=EventConstants.topLevelTypes,eventTypes={select:{phasedRegistrationNames:{bubbled:keyOf({onSelect:null}),captured:keyOf({onSelectCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topContextMenu,topLevelTypes.topFocus,topLevelTypes.topKeyDown,topLevelTypes.topMouseDown,topLevelTypes.topMouseUp,topLevelTypes.topSelectionChange]}},activeElement=null,activeElementID=null,lastSelection=null,mouseDown=!1,SelectEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,r){switch(e){case topLevelTypes.topFocus:(isTextInputElement(t)||"true"===t.contentEditable)&&(activeElement=t,activeElementID=n,lastSelection=null);break;case topLevelTypes.topBlur:activeElement=null,activeElementID=null,lastSelection=null;break;case topLevelTypes.topMouseDown:mouseDown=!0;break;case topLevelTypes.topContextMenu:case topLevelTypes.topMouseUp:return mouseDown=!1,constructSelectEvent(r);case topLevelTypes.topSelectionChange:case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:return constructSelectEvent(r)}}};module.exports=SelectEventPlugin;
//# sourceMappingURL=SelectEventPlugin.js.map