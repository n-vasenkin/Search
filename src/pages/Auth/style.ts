import styled from 'styled-components';

export const Auth = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const Popup = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 370px;
  border: 1px solid #222;
  border-top: 0;
  border-radius: 10px;
  background: #fff;
`;

export const TabPanel = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
`;

export const Tab = styled.div`
  width: 50%;
  padding: 10px 0;
  border-radius: 10px 10px 0 0;
  background: ${({ active }: { active: boolean }) => (active ? '#fff' : '#333')};
`;

export const Form = styled.form`
  padding: 20px;
`;
