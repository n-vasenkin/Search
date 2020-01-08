import { Block } from 'components';
import styled from 'styled-components';

export const Profile = styled(Block)`
  position: relative;
  flex-direction: column;
`;

export const ProfileBackground = styled.div`
  height: 50px;
  background: #c2c;
`;

export const ProfileAvatar = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  border: 1px solid #000;
  border-radius: 50%;
  background: #33b5e5;
  left: 50%;
  top: 20px;
  transform: translateX(-30px);
`;

export const ProfileName = styled.h3`
  padding: 40px 0 20px 0;
  text-align: center;
  font-weight: bold;
`;
