import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from '../../../../store/actions/billing-cycle-actions';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import InputForm from '../../../../common/input-form/';
import ItemList from '../item-list/';
import Summary from '../summary/';

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
    };
  }

  render() {
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    const {
      handleSubmit, readOnly, credits, debts,
    } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={InputForm}
            label="Nome"
            cols="12 4"
            placeholder="Informe o Nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={InputForm}
            label="Mes"
            cols="12 4"
            placeholder="Informe o Mês"
            type="number"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={InputForm}
            label="Ano"
            cols="12 4"
            placeholder="Informe o Ano"
            type="number"
            readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList
            field="credits"
            legend="Créditos"
            cols="12 6"
            list={credits}
            readOnly={readOnly}
          />
          <ItemList
            showStatus
            field="debts"
            legend="Débitos"
            cols="12 6"
            list={debts}
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}
/* eslint no-class-assign */
BillingCycleForm = reduxForm({
  form: 'billingCycleForm',
  destroyOnUnmount: false,
})(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts'),
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
