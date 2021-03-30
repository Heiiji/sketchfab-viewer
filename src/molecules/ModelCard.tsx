import React from 'react';
import styled from 'styled-components';
import { IModel } from '../type';
import PreviewModel from '../atoms/PreviewModel';
import ProfilImage from '../atoms/ProfilImage';
import CardStats from '../atoms/CardStats';

const StyledModelCard = styled.div`
  transition: 0.3s;
  color: black;
  text-decoration: none;
  margin: 10px;
  display: inline-block;
  width: 200px;
  border: 2px solid grey;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 25%) 1px 1px 4px 0px;

  .description {
    position: relative;
    padding: 0 10px 10px 10px;
  }

  .profil-mini {
    transition: 0.3s;
    position: absolute;
    border-radius: 50%;
    top: -15px;
    right: 10px;
    height: 25px;
    width: 25px;
  }

  h3 {
    margin: 5px;
  }
  p {
    margin: 0;
  }

  :hover {
    border: 2px solid ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 75%) 1px 1px 4px 0px;

    .profil-mini {
      box-shadow: rgb(0 0 0 / 25%) 1px 1px 4px 0px;
    }
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
        <div className='profil-mini'>
          <ProfilImage image={model.user.avatar.images[0].url} />
        </div>
        <h3>{model.name}</h3>
        <CardStats model={model} />
      </div>
    </StyledModelCard>
  );
};

export default ModelCard;
