import React, { Component } from "react";
import Content from "../../common/template/content";
import ContentHeader from "../../common/template/content-header";
import { Tabs, TabsHeader, TabsContent, TabHeader } from "../../common/tab/";

export default class BillingCycle extends Component {
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
            <TabsContent />
          </Tabs>
        </Content>
      </div>
    );
  }
}
