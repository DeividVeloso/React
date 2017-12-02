import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectTab } from "../../store/actions/tab-action";
import Content from "../../common/template/content";
import ContentHeader from "../../common/template/content-header";
import {
  Tabs,
  TabsHeader,
  TabsContent,
  TabHeader,
  TabContent
} from "../../common/tab/";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab("tabList");
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
                <h1>Lista</h1>
              </TabContent>
              <TabContent id="tabCreate">
                <h1>Create</h1>
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>Update</h1>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Delete</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
