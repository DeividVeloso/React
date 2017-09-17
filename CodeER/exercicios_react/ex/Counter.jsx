import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { inc, dec, stepChanged } from "./counterAction";

const Counter = props => (
  <div>
    <h1>{props.counter.number}</h1>
    <input
      onChange={props.stepChanged}
      value={props.counter.step}
      type="number"
    />
    <button onClick={props.dec}>Dec</button>
    <button onClick={props.inc}>Inc</button>

  </div>
);

//Esse estado é definido no reducer que manda dentro da Store Redux e vira um state para apalicação.
const mapStateToProps = state => ({ counter: state.counter });

//Action Creator definidas para disparar quando for chamadas apartir de this.props.inc
const mapDispatchToProps = dispatch =>
  bindActionCreators({ inc, dec, stepChanged }, dispatch);

//Decorator que chama a função cnnect e o resultado é passado para o container component COunter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
