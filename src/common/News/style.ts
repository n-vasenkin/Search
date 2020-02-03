import { Avatar, Block, RawSvg as _RawSvg } from 'components';
import { COLORS } from 'const';
import styled from 'styled-components';

export const Container = styled(Block)`
  margin-top: 15px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 15px;
`;

export const AuthorAvatar = styled(Avatar)``;

export const Content = styled.div`
  display: flex;
`;

export const Text = styled.p`
  padding: 10px 0;
`;

export const Images = styled.img`
  width: calc(100% + 30px);
  margin: 0 -15px;
`;

export const Statistics = styled.ol`
  padding: 10px 0;
  border-bottom: 1px solid ${COLORS.BORDER};
  color: ${COLORS.TEXT};
  display: flex;
  > li:not(:last-child):after {
    content: '|';
    margin: 0 5px;
  }
  font-size: 15px;
`;

export const ActionPanel = styled.div`
  display: flex;
  padding: 5px 0 10px 0;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  cursor: pointer;
  padding: 5px 0;
  color: ${COLORS.TEXT};
  transition: 0.2s;
  border-radius: 8px;
  :hover {
    color: #334;
  }
`;

export const RawSvg = styled(_RawSvg)`
  margin-right: 10px;
`;

export const CreateComment = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const CommentArea = styled.textarea`
  border-radius: 15px;
  border: 1px solid ${COLORS.TEXT};
  margin-left: 10px;
  width: 100%;
  flex: 1;
  padding: 0 10px;
`;
