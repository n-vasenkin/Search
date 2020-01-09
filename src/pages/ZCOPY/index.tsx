import { Layout } from 'common';
import { ConstRouter } from 'const/routers';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import Content from './Content';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

@observer
export default class PageContacts extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private constRouter: ConstRouter;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(this.constRouter.CONTACTS_ROOT);
  }

  render(): JSX.Element {
    return <Layout leftColumn={<LeftColumn />} content={<Content />} rightColumn={<RightColumn />} />;
  }
}
