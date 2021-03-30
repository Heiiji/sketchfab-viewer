import React from 'react';
import styled from 'styled-components';
import { IModel } from '../type';
import PreviewModel from '../atoms/PreviewModel';

const StyledModelCard = styled.div`
  transition: 0.3s;
  margin: 10px;
  display: inline-block;
  width: 200px;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 25%) 1px 1px 4px 0px;

  .description {
    padding: 0 10px 10px 10px;
  }

  :hover {
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 75%) 1px 1px 4px 0px;
  }
`;

type ModelCardProps = {
  model: IModel;
  onSelect: Function;
};

const ModelCard = ({ model, onSelect }: ModelCardProps) => {
  return (
    <StyledModelCard onClick={() => onSelect(model.uid)}>
      <PreviewModel image={model.thumbnails.images[0].url} />
      <div className='description'>
        <div>profil</div>
        <h3>{model.name}</h3>
      </div>
    </StyledModelCard>
  );
};

export default ModelCard;
