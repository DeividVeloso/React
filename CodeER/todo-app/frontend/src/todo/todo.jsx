import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { description: "My eggs", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e){
    this.setState({description: e.target.value})
  }

  handleAdd() {
    console.log("this da classe", this);
    console.log("add uma tarefa");
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
