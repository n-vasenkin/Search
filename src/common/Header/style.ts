import { Container as _Container } from 'components';
import { COLORS } from 'const';
import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  color: #fff;
  height: 48px;
  margin-bottom: 20px;
  background: #303b44;
`;

export const Container = styled(_Container)`
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-right: 30px;
`;

export const Link = styled(_Link)`
  margin: 0 20px 0 0;
  text-decoration: none;
  color: ${(props: { active?: boolean }) => (props.active ? '#fff' : COLORS.TEXT)};
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  > img {
    width: 24px;
    height: 24px;
    color: #fff;
  }
`;
