import { Block } from 'components';
import React from 'react';
import { Avatar, Contact, ContactBackground, ContactName, ContactsContainer, Container } from './style';

export default class Content extends React.Component {
  private get filter(): JSX.Element {
    return <Block>Фильтр</Block>;
  }

  private get contact(): JSX.Element {
    return (
      <Contact>
        <ContactBackground />
        <Avatar />
        <ContactName>Test</ContactName>
      </Contact>
    );
  }

  render(): JSX.Element {
    return (
      <>
        {this.filter}
        <Container>
          <h1>У вас 32 контакта</h1>
          <ContactsContainer>
            {this.contact}
            {this.contact}
            {this.contact}
            {this.contact}
            {this.contact}
          </ContactsContainer>
        </Container>
      </>
    );
  }
}
