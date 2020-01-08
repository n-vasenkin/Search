import { Header } from 'common';
import { Container } from 'components';
import { ConstRouter } from 'const/routers';
import 'globalCss.css';
import PageContacts from 'pages/Contacts';
import PageHome from 'pages/Home';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Inject } from 'typescript-ioc';

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: calc(48px + 15px) 30px 0 30px;
`;

export default class AppRouter extends React.PureComponent {
  @Inject private constRouter: ConstRouter;

  render(): JSX.Element {
    return (
      <>
        <Router history={this.constRouter.history}>
          <>
            <Header />
            <Main>
              <Switch>
                <Route exact path={this.constRouter.MAIN_ROOT} component={PageHome} />
                <Route exact path={this.constRouter.CONTACTS_ROOT} component={PageContacts} />
              </Switch>
            </Main>
          </>
        </Router>
      </>
    );
  }
}
