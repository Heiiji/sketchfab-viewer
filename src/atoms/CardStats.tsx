import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { IModel } from '../type';

type CardStatsProps = {
  model: IModel;
};

const StyledCardStats = styled.div`
  display: flex;
  flex-direction: row;

  p {
    flex: 1;
  }
`;

const CardStats = ({ model }: CardStatsProps) => {
  return (
    <StyledCardStats>
      <p>
        {model.commentCount} <FontAwesomeIcon icon={faComment} />
      </p>
      <p>
        {model.likeCount} <FontAwesomeIcon icon={faThumbsUp} />
      </p>
    </StyledCardStats>
  );
};

export default CardStats;
