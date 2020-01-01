import { Container as _Container } from 'components';
import { COLORS } from 'const';
import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  color: ${COLORS.TEXT};
  border-bottom: 2px solid #d5dddf;
  padding: 15px 0;
  margin-bottom: 20px;
`;

export const Container = styled(_Container)`
  /* justify-content: space-between; */
`;

export const Logo = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-right: 30px;
`;

export const Link = styled(_Link)`
  margin: 0 20px 0 0;
  text-decoration: none;
  color: ${(props: { active?: boolean }) => (props.active ? '#000' : COLORS.TEXT)};
`;
