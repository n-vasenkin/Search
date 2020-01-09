import { Button } from 'components';
import { STYLE_VIEW } from 'const';
import { Pages, PagesNames } from 'const/routers';
import { observer } from 'mobx-react';
import React from 'react';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Container, Header, Link, Logo, Main, Menu, RawSvg } from './style';

@observer
export default class MainHeader extends React.Component {
  private headerNav: Array<Pages> = [Pages.MAIN_ROOT, Pages.CONTACTS_ROOT];
  @Inject private mainStore: MainStore;

  private get currentPage(): string {
    return this.mainStore.currentPage;
  }

  render(): JSX.Element {
    return (
      <Header>
        <Container>
          <Main>
            <Logo>Search</Logo>
            <nav>
              {this.headerNav.map(page => {
                return (
                  <Link to={page} selected={this.currentPage === page} key={page}>
                    {PagesNames[page]}
                  </Link>
                );
              })}
            </nav>
          </Main>
          <Menu>
            <RawSvg icon="header/bug" />
            <RawSvg icon="header/settings" />
            <Button view={STYLE_VIEW.PRIMARY}>Вход</Button>
          </Menu>
        </Container>
      </Header>
    );
  }
}
