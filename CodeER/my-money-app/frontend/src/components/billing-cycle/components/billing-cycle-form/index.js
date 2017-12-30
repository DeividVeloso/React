import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from '../../../../store/actions/billing-cycle-actions';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import InputForm from '../../../../common/input-form/';
import CreditList from '../credit-list/';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits } = this.props;
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
          <CreditList cols="12 6" list={credits} readOnly={readOnly} />
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
const mapStateToProps = state => ({ credits: selector(state, 'credits') });
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
