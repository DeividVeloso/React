import React, { Component } from "react";
import Grid from "../template/grid";
import Button from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add, changeDescription, search, clear } from "./todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    const { add, changeDescription, search, clear, description } = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description);
    } else if (e.key === "Escape") {
      clear();
    }
  }

  render() {
    const { add, changeDescription, search, description, clear } = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            type="text"
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onKeyUp={this.keyHandler}
            value={this.props.description}
            onChange={this.props.changeDescription}
          />
        </Grid>
        <Grid cols="12 3 2">
          <Button
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          />
          <Button style="info" icon="search" onClick={search} />
          <Button style="default" icon="close" onClick={clear} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description });
//Esse dispatch recebe a ação de disparar e passa o action para todos os reducers
//O Action Creator não faz nada, quem faz é o dispatch
//Passo meu action creator e disparo o método para ser verificado em todos os reducers
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
