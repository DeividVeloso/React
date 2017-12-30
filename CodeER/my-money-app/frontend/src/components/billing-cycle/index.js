import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Content from '../../common/template/content';
import ContentHeader from '../../common/template/content-header';
import { Tabs, TabsHeader, TabsContent, TabHeader, TabContent } from '../../common/tab/';
import List from './components/billing-cycle-list';
import Form from './components/billing-cycle-form';
import {
  init,
  createCycle,
  updateCycle,
  removeCycle,
} from '../../store/actions/billing-cycle-actions';

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form
                  onSubmit={this.props.createCycle}
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form onSubmit={this.props.updateCycle} submitLabel="Alterar" submitClass="info" />
              </TabContent>
              <TabContent id="tabDelete">
                <Form
                  onSubmit={this.props.removeCycle}
                  submitLabel="Excluir"
                  submitClass="danger"
                  readOnly
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createCycle,
      updateCycle,
      removeCycle,
      init,
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(BillingCycle);
