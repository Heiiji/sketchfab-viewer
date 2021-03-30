import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { IModel } from '../type';

const StyledModelInfo = styled.div``;

type ModelInfoProps = {
  model: IModel;
};

const ModelInfo = ({ model }: ModelInfoProps) => {
  return (
    <StyledModelInfo>
      <h1>{model.name}</h1>
      <p>{moment(model.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p>{model.description}</p>
    </StyledModelInfo>
  );
};

export default ModelInfo;
