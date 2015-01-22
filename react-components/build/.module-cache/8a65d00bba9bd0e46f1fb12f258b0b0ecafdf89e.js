/** @jsx React.DOM */
var $               = require("jquery");
var React           = require("react");
//var Parameter       = require("react:Parameter");
var Header          = require("react:Header");
var RegisterMachine = require("theory/RegisterMachine");

var Instructions    = require("data/Instructions");

var typeNames = [
  "DEB", "INC", "END"
];

var toPositiveInteger = function( input ) {
  input = +input;

  // not a number or 0 || less than 0 || not an integer
  if( !input || input < 0 || input % 1 !== 0 ) {
    return false;
  } else {
    return input;
  }
}

/*var Parameter = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.initialValue,
      editing: false
    };
  },

  getValue: function() {
    return this.state.value;
  },

  edit: function() {
    var input = $( this.refs.input.getDOMNode() );

    // start editing if not already, set input value as current value
    if( !this.state.editing ) {
      this.setState({ editing: true });
      input.val( this.state.value );
    }

    // then select the contents of the text box
    setTimeout( input.select.bind( input ), 1 );
  },

  save: function() {
    var newValue;
    
    // quit if not already editing
    if( !this.state.editing ) return;

    // get the value in the text field as a positive integer
    newValue = toPositiveInteger( this.refs.input.getDOMNode().value );

    // set as the new value if it's valid (otherwise reuse current value)
    newValue = newValue || this.state.value;

    // set the new state
    this.setState({
      value: newValue,
      editing: false
    });

    // and focus the parameter
    $( this.getDOMNode() ).focus();
  },

  quit: function() {
    if( this.state.editing ) {
      this.setState({ editing: false });
    }
  },

  handleParameterKeyDown: function( event ) {
    // get the key
    var key = event.keyCode || event.which;

    // no bubbling
    event.stopPropagation();

    // if [enter] or [0-9], start editing
    if( key === 13 || ( key >= 48 && key <= 57 ) ) {
      this.edit();
    }
  },

  handleInputKeyDown: function( event ) {
    // get the key
    var key = event.keyCode || event.which;

    // no bubbling
    event.stopPropagation();

    // if [enter], try saving
    if( key === 13 ) {
      this.save();
    } else if( key === 27 ) {
      this.quit();
    }
  },

  render: function() {
    return (<span className={ "RegisterMachine-Parameter" + ( this.state.editing ? " state-editing" : "" ) } 
                  tabIndex="0" 
                  onKeyDown={ this.handleParameterKeyDown }>
      <span className="RegisterMachine-Parameter-Name">{ this.props.name }</span>
      <span className="RegisterMachine-Parameter-Value" onClick={ this.edit }>
        <span ref="value" 
              style={{ display: this.state.editing ? "none" : null }}>
          { this.state.value }
        </span>
        <input ref="input" 
               type="text" 
               className="RegisterMachine-Parameter-Input"
               style={{ display: this.state.editing ? null : "none" }}
               onBlur={ this.quit }
               onKeyDown={ this.handleInputKeyDown } />
      </span>
    </span>);
  }
});*/

var Instruction = React.createClass({displayName: 'Instruction',
  getMeta: function() {
    return Instructions[ this.props.type ];
  },

  render: function() {
    var contents = [];
        //instruction = this.props.instruction,
        //type = instruction.type;

    //console.log( instruction );
    
    /*contents.push(<span className="RegisterMachine-Instruction-Type">
      { typeNames[ type ] }
    </span>);
    
    // DEB and INC have 'which' and 'next' parameters
    if( type === RegisterMachine.DEB || type === RegisterMachine.INC ) {
      contents.push(<Parameter name="which" type="register" desc="This is a fake description." initialValue={ instruction.which + 1 } />);
      contents.push(<Parameter name="next"  type="instruction" initialValue={ instruction.next + 1 } />);
    }
    
    // only DEB has 'branch' parameter
    if( type === RegisterMachine.DEB ) {
      contents.push(<Parameter name="branch" type="instruction" initialValue={ instruction.branch + 1 } />);
    }*/

    return (React.DOM.div({className: "RegisterMachine-Instruction"}, 
      "/*", React.DOM.div({className: "RegisterMachine-Instruction-Inner"}, 
        contents 
      ), "*/", 
      Header({data:  this.getMeta() })
    ));
  }
});

var Macro = React.createClass({displayName: 'Macro',
  getInitialState: function() {
    return { values: {} };
  },

  toggleExpanded: function() {
    $( this.refs.root.getDOMNode() ).toggleClass("expanded");
  },

  render: function() {
    var contents,
        macro = this.props.macro
        values = this.state.values;
    
    // add all the arguments to the list
    contents = macro.varNames.map(function( varName ) {
      return (Parameter({name: varName, value:  values[ varName] }));
    });

    // prepend the macro name
    contents.unshift(React.DOM.span({className: "RegisterMachine-Macro-Name"}, 
       macro.name
    ));

    return (React.DOM.div({ref: "root", className: "RegisterMachine-Macro"}, 
      React.DOM.div({className: "RegisterMachine-Macro-Header", onClick:  this.toggleExpanded}, 
        React.DOM.span({className: "RegisterMachine-Macro-Header-Inner"}, contents )
      ), 
      InstructionList({ref: "list", instructions:  macro.templates})
    ));
  }
});

var InstructionList = React.createClass({displayName: 'InstructionList',
  render: function() {
    var contents,
        instructions = this.props.instructions;
    
    contents = instructions.map(function( current ) {
      if( current instanceof RegisterMachine.Macro ) {
        // create a sub-list for this macro's steps
        return (Macro({macro: current }));
      } else {
        // create a simple instruction
        return (Instruction({instruction: current }));
      }
    });

    return (React.DOM.div({className: "RegisterMachine-InstructionList"}, 
      contents 
    ));
  }
});

module.exports = InstructionList;