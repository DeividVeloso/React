import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "../../../../store/actions/billing-cycle-actions";
import { reduxForm, Field } from "redux-form";
import InputForm from "../../../../common/input-form/";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    console.log(handleSubmit);
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={InputForm}
            label="Nome"
            cols="12 4"
            placeholder="Informe o Nome"
          />
          <Field
            name="month"
            component={InputForm}
            label="Mes"
            cols="12 4"
            placeholder="Informe o Mês"
            type="number"
          />
          <Field
            name="year"
            component={InputForm}
            label="Ano"
            cols="12 4"
            placeholder="Informe o Ano"
            type="number"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCycleForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
