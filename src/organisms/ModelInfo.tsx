import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { IModel } from '../type';
import CardStats from '../atoms/CardStats';

const StyledModelInfo = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 550px;
  .stats {
    width: 200px;
  }

  h1 {
    margin: 0;
  }
`;

type ModelInfoProps = {
  model: IModel;
};

const ModelInfo = ({ model }: ModelInfoProps) => {
  return (
    <StyledModelInfo>
      <h1>{model.name}</h1>
      <p>{moment(model.publishedAt).fromNow()}</p>
      <div className='stats'>
        <CardStats model={model} />
      </div>
      <p>{model.description}</p>
    </StyledModelInfo>
  );
};

export default ModelInfo;
