import { Input } from 'components';
import { ConstRouter } from 'const/routers';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Auth, Form, Popup, Tab, TabPanel } from './style';

@observer
export default class PageContacts extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private constRouter: ConstRouter;

  @observable private showSignUp: boolean;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(this.constRouter.AUTH_ROOT);
  }

  @action.bound
  private tabHandler(act: boolean): void {
    if (this.showSignUp === act) return;
    this.showSignUp = act;
  }

  private get signUp(): JSX.Element {
    return (
      <Form>
        <Input placeholder="123" />
        <Input placeholder="123" />
        <Input placeholder="123" />
      </Form>
    );
  }

  private get signIn(): JSX.Element {
    return (
      <Form>
        <Input placeholder="123" />
        <Input placeholder="123" />
      </Form>
    );
  }

  render(): JSX.Element {
    return (
      <Auth>
        <Popup>
          <TabPanel>
            <Tab active={this.showSignUp} onClick={this.tabHandler.bind(this, true)}>
              Регистрация
            </Tab>
            <Tab active={!this.showSignUp} onClick={this.tabHandler.bind(this, false)}>
              Вход
            </Tab>
          </TabPanel>
          {this.showSignUp ? this.signUp : this.signIn}
        </Popup>
      </Auth>
    );
  }
}
