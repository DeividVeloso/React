import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "../../../../store/actions/billing-cycle-actions";
import { showUpdate } from "../../../../store/actions/billing-cycle-actions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRow() {
    console.log(this.props.billingCycle.list);
    const list = this.props.billingCycle.list || [];
    return list.map(bc => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => this.props.showUpdate(bc)}
          >
            <i className="fa fa-pencil" />
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({ billingCycle: state.billingCycle });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
