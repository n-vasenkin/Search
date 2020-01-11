import { Avatar as _Avatar, Block } from 'components';
import styled from 'styled-components';

export const Avatar = styled(_Avatar)`
  top: 20px;
`;

export const Profile = styled(Block)`
  position: sticky;
  flex-direction: column;
  top: calc(48px + 15px);
`;

export const ProfileBackground = styled.div`
  height: 50px;
  background: #c2c;
`;

export const ProfileName = styled.h3`
  padding: 40px 0 20px 0;
  text-align: center;
  font-weight: bold;
`;
