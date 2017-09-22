import React from "react";
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';

const TodoList = props => {
  const renderBody = () => {
    const list = props.list || [];
    return list.map(item => {
      return (
        <tr key={item._id}>
          <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
          <td>
            <IconButton style='success' icon='check' hide={item.done} onClick={() => props.handleMarkAsDone(item)}/>
            <IconButton style='warning' icon='undo' hide={!item.done} onClick={() => props.handleMarkAsPending(item)}/>
            <IconButton style='danger' icon='trash-o' hide={!item.done} onClick={() => props.handleRemove(item._id)}/>
            </td>
          
        </tr>
      );
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            Descrição
          </th>
          <th className="tableActions">
            Ação
          </th>
        </tr>
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({list: state.todo.list})
    

export default connect(mapStateToProps)(TodoList)