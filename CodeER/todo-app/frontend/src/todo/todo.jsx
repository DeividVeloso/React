import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";

const URL = "http://localhost:3003/api/todos";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { description: '', list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.refresh();
  }

  refresh(description = '') {
    //Verifico se passei uma descrição no input para ser pesquisada na API Restful Mongo Todo.
    //Passo a concatenação na URL para fazer o regex.
    const search = description ? `&description__regex=/${description}/`: ''
    axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({ description: description, list: resp.data }));
  }

  handleSearch(){
    this.refresh(this.state.description);
  }

  handleChange(e) {
    this.setState({ description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(msg => this.refresh());
  }

  handleRemove(id) {
    axios.delete(`${URL}/${id}`).then(resp => this.refresh(this.state.description))
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
          .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
    .then(resp => this.refresh(this.state.description))
  }

  handleClear(){
    this.setState({description: ''})
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove} 
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          />
      </div>
    );
  }
}

export default Todo;
