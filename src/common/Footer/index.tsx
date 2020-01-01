import { Container } from 'components';
import React from 'react';
import { Footer } from './style';

export default class MainFooter extends React.Component {
  render(): JSX.Element {
    return (
      <Footer>
        <Container>Footer</Container>
      </Footer>
    );
  }
}
