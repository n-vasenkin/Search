import { Container } from 'components';
import styled from 'styled-components';

export const Main = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: calc(48px + 15px) 30px 0 30px;
`;

export const LeftColumn = styled.div`
  width: 200px;
  margin-right: 15px;
`;

export const RightColumn = styled.div`
  width: 220px;
  margin-left: 15px;
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
`;
