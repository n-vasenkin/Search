import { Button } from 'components';
import { STYLE_VIEW } from 'const';
import { Pages, PagesNames } from 'const/routers';
import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Container, Header, Item, Logo, Main, Menu, RawSvg } from './style';

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
            <Logo to="/">Search</Logo>
            <nav>
              {this.headerNav.map(page => {
                return (
                  <Item to={page} selected={this.currentPage === page} key={page}>
                    {PagesNames[page]}
                  </Item>
                );
              })}
            </nav>
          </Main>
          <Menu>
            <RawSvg icon="header/bug" />
            <RawSvg icon="header/settings" />
            <Link to={Pages.AUTH_ROOT}>
              <Button view={STYLE_VIEW.PRIMARY}>Вход</Button>
            </Link>
          </Menu>
        </Container>
      </Header>
    );
  }
}
