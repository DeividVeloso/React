import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleChange } from './fieldActions';

class Field extends Component {
  render() {
    return (
      <div>
        <label>
          {this.props.value}
        </label>
        <br/>
        <input onChange={this.props.handleChange} value={this.props.value} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ handleChange }, dispatch);
}

//Essa função chamando de Decorator, estmaos devolvendo um novo componente com mais funcionalidades.
export default connect(mapStateToProps, mapDispatchToProps)(Field);
