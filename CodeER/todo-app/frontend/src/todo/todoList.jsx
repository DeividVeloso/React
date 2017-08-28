import React from "react";
import IconButton from '../template/iconButton';

export default props => {
  const renderBody = () => {
    const list = props.list || [];
    return list.map(item => {
      return (
        <tr key={item._id}>
          <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
          <td>
            <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(item)}/>
            <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(item)}/>
            <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(item._id)}/>
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
        </tr>
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>
  );
};
