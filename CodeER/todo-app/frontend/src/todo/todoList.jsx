import React from "react";

export default props => {
  const renderBody = () => {
    const list = props.list || [];
    return list.map(item => {
      return (
        <tr key={item._id}>
          <td>{item.description}</td>
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
