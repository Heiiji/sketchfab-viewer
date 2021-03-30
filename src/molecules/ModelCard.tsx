import React from 'react';
import styled from 'styled-components';
import { IModel } from '../type';

const StyledModelCard = styled.div``;

type ModelCardProps = {
  model: IModel;
};

const ModelCard = ({ model }: ModelCardProps) => {
  return <StyledModelCard>{model.uid}</StyledModelCard>;
};

export default ModelCard;
