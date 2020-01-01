import { Footer, Header } from 'common';
import { ConstRouter } from 'const/routers';
import 'globalCss.css';
import PageHome from 'pages/Home';
import PageTest from 'pages/Test';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Inject } from 'typescript-ioc';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default class AppRouter extends React.PureComponent {
  @Inject private constRouter: ConstRouter;

  render(): JSX.Element {
    return (
      <>
        <Router history={this.constRouter.history}>
          <Main>
            <Header />
            <Switch>
              <Route exact path={this.constRouter.MAIN_ROOT} component={PageHome} />
              <Route exact path={this.constRouter.TEST_ROOT} component={PageTest} />
            </Switch>
            <Footer />
          </Main>
        </Router>
      </>
    );
  }
}
