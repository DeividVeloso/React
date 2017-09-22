import React, { Component } from "react";
import Grid from "../template/grid";
import Button from "../template/iconButton";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search } from './todoActions';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    if (e.key === "Enter") {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === "Escape") {
      this.props.handleClear();
    }
  };

  render() {
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
          <Button style="primary" icon="plus" onClick={this.props.handleAdd} />
          <Button style="info" icon="search" onClick={this.props.handleSearch} />
          <Button style="default" icon="close" onClick={this.props.handleClear} />
        </Grid>
      </div>
    );
  }

};

const mapStateToProps = (state) => ({ description: state.todo.description });
//Esse dispatch recebe a ação de disparar e passa o action para todos os reducers
//O Action Creator não faz nada, quem faz é o dispatch 
//Passo meu action creator e disparo o método para ser verificado em todos os reducers
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeDescription, search }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
