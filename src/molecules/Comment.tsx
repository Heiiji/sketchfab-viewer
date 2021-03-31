import React from 'react';
import styled from 'styled-components';
import { IComment } from '../type';
import UserMiniDisplay from '../atoms/UserMiniDisplay';

const StyledComment = styled.div`
  padding: 20px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 3px 0px;
  margin: 20px;
  border-radius: 10px;
`;

type CommentProps = {
  comment: IComment;
};

const Comment = ({ comment }: CommentProps) => {
  return (
    <StyledComment>
      <UserMiniDisplay user={comment.user} />
      <p>{comment.body}</p>
    </StyledComment>
  );
};

export default Comment;
