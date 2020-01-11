import { Container as _Container, RawSvg as _RawSvg } from 'components';
import { COLORS } from 'const';
import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  color: #fff;
  height: 48px;
  background: #303b44;
  z-index: 99999;
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
  color: ${({ selected }: { selected?: boolean }) => (selected ? '#fff' : COLORS.TEXT)};
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 10px;
`;

export const RawSvg = styled(_RawSvg)`
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
  :hover {
    color: #33b5e5;
  }
`;
