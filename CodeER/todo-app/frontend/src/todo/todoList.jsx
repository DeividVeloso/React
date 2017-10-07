import React from "react";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as actions from "./todoActions";

const TodoList = props => {
  const renderBody = () => {
    const list = props.list || [];
    return list.map(item => {
      return (
        <tr key={item._id}>
          <td className={item.done ? "markedAsDone" : ""}>
            {item.description}
          </td>
          <td>
            <IconButton
              style="success"
              icon="check"
              hide={item.done}
              onClick={() => props.markAsDone(item)}
            />
            <IconButton
              style="warning"
              icon="undo"
              hide={!item.done}
              onClick={() => props.markAsPending(item)}
            />
            <IconButton
              style="danger"
              icon="trash-o"
              hide={!item.done}
              onClick={() => props.remove(item._id)}
            />
          </td>
        </tr>
      );
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ação</th>
        </tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({ list: state.todo.list });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { markAsDone: actions.markAsDone, markAsPending: actions.markAsPending, remove: actions.remove },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
