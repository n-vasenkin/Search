import { ConstRouter } from 'const/routers';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';

@observer
export default class PageTest extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private constRouter: ConstRouter;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(this.constRouter.CONTACTS_ROOT);
  }

  render(): JSX.Element {
    return (
      <main>
        <h1>Test22</h1>
      </main>
    );
  }
}
