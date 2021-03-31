import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import client from '../_helpers/api';
import { IComment } from '../type';
import Comment from '../molecules/Comment';

const StyledModelComm = styled.div`
  padding: 20px;
`;

type ModelCommProps = {
  modelId: string;
};

const ModelComm = ({ modelId }: ModelCommProps) => {
  const [comments, setComments] = useState<Array<IComment>>([]);

  useEffect(() => {
    client.get(`/comments?model=${modelId}`).then(({ data }) => {
      setComments(data.results);
    });
  }, []);

  return (
    <StyledModelComm>
      {comments.map((comment: IComment) => (
        <Comment key={comment.uid} comment={comment} />
      ))}
    </StyledModelComm>
  );
};

export default ModelComm;
