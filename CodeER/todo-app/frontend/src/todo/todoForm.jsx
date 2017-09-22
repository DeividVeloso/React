import React from "react";
import Grid from "../template/grid";
import Button from "../template/iconButton";

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { changeDescription } from './todoActions';

const TodoForm = props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onKeyUp={keyHandler}
          value={props.description}
          onChange={props.changeDescription}
        />
      </Grid>
      <Grid cols="12 3 2">
        <Button style="primary" icon="plus" onClick={props.handleAdd} />
        <Button style="info" icon="search" onClick={props.handleSearch} />
        <Button style="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({ description: state.todo.description });
//Esse dispatch recebe a ação de disparar e passa o action para todos os reducers
//O Action Creator não faz nada, quem faz é o dispatch 
//Passo meu action creator e disparo o método para ser verificado em todos os reducers
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeDescription }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
