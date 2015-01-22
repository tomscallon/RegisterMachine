/* */
"format cjs";"use strict";var EventConstants=require("./EventConstants"),LocalEventTrapMixin=require("./LocalEventTrapMixin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),img=ReactElement.createFactory(ReactDOM.img.type),ReactDOMImg=ReactCompositeComponent.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function(){return img(this.props)},componentDidMount:function(){this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(EventConstants.topLevelTypes.topError,"error")}});module.exports=ReactDOMImg;
//# sourceMappingURL=ReactDOMImg.js.map