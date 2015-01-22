/** @jsx React.DOM */
var React = require("react");
var $ = require("jquery")
var RM = require("theory:RegisterMachine");
var InstructionList = require("react:InstructionList");

var i = [
  new RM.Instruction( RM.DEB, 0, 1, 3 ),
  new RM.Instruction( RM.INC, 1, 2 ),
  new RM.Instruction( RM.INC, 2, 0 ),
  new RM.Instruction( RM.END )
];

$(function() {
  React.render(
    InstructionList({instructions: i }),
    document.body
  );
});