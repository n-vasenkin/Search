import { ConstRouter } from 'const/routers';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Auth, Popup } from './style';

@observer
export default class PageContacts extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private constRouter: ConstRouter;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(this.constRouter.AUTH_ROOT);
  }

  render(): JSX.Element {
    return (
      <Auth>
        <Popup>WWW</Popup>
      </Auth>
    );
  }
}
