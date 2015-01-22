/* */
"format cjs";jest.autoMockOff(),describe("reserved-words",function(){function e(e,r){return t(o,e,r).code}var t,o;beforeEach(function(){require("mock-modules").dumpCache(),o=require("../reserved-words-visitors").visitorList,t=require("../../src/jstransform").transform}),describe("reserved words in member expressions",function(){it("should transform to reserved word members to computed",function(){var t="foo.delete;";expect(e(t)).toEqual('foo["delete"];')}),it("should handle call expressions",function(){var t="foo.return();";expect(e(t)).toEqual('foo["return"]();')})}),describe("reserved words in properties",function(){it("should qoute reserved words in properties",function(){var t="var x = {null: 1};";expect(e(t)).toEqual('var x = {"null": 1};')})})});
//# sourceMappingURL=reserved-words-test.js.map