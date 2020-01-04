import { Button } from 'components';
import { ConstRouter, Pages, PagesNames } from 'const/routers';
import { BobrView } from 'const/style';
import { observer } from 'mobx-react';
import React from 'react';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Container, Header, Link, Logo, Main, Menu, RawSvg } from './style';

@observer
export default class MainHeader extends React.Component {
  @Inject private mainStore: MainStore;
  @Inject private constRouter: ConstRouter;

  private get currentPage(): string {
    return this.mainStore.currentPage;
  }

  render(): JSX.Element {
    return (
      <Header>
        <Container>
          <Main>
            <Logo>Bash</Logo>
            <nav>
              {Object.keys(Pages).map((page, index) => {
                const isActivePage = this.currentPage === this.constRouter[page];
                return (
                  <Link to={this.constRouter[page]} active={!!isActivePage} key={index}>
                    {PagesNames[Pages[page]]}
                  </Link>
                );
              })}
            </nav>
          </Main>
          <Menu>
            <RawSvg icon="bug" />
            <RawSvg icon="settings" />
            <Button view={BobrView.PRIMARY}>Вход</Button>
          </Menu>
        </Container>
      </Header>
    );
  }
}
