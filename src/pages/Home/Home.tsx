import { ConstRouter } from 'const/routers';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';

@observer
export default class PageHome extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private constRouter: ConstRouter;

  @observable private pending: boolean = false;

  componentDidMount(): void {
    setTimeout(() => {
      this.pending = true;
    }, 1000);
    this.mainStore.changeCurrentPage(this.constRouter.MAIN_ROOT);
  }

  private get content(): JSX.Element {
    if (!this.pending) return <h5>Loading...</h5>;
    return <h1>Main Content</h1>;
  }

  render(): JSX.Element {
    return <main>{this.content}</main>;
  }
}
