import styled from 'styled-components';

export const Profile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #9ebabe;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
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
