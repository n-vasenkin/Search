import { Avatar as _Avatar, Block } from 'components';
import styled from 'styled-components';

export const Container = styled(Block)`
  margin-top: 15px;
  flex-direction: column;
  padding: 20px;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
`;

export const Contact = styled(Block)`
  position: relative;
  width: 23%;
  flex-direction: column;
  height: auto;
  margin: 1%;
`;

export const ContactBackground = styled.div`
  display: block;
  height: 80px;
  background: green;
`;

export const Avatar = styled(_Avatar)`
  top: 20px;
`;

export const ContactName = styled.h1`
  padding: 30px;
  text-align: center;
`;
