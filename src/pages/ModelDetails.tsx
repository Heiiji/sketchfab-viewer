import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import client from '../_helpers/api';
import { IModel } from '../type';
import Banner from '../organisms/Banner';
import ModelViewer from '../organisms/ModelViewer';
import ModelInfo from '../organisms/ModelInfo';
import Ariane from '../molecules/Ariane';

const ModelDetailsStyled = styled.div`
  .corpus {
    padding: 25px;
  }
`;

type TParams = { uid: string };

const ModelDetails = ({ match }: RouteComponentProps<TParams>) => {
  const [model, setModel] = useState<IModel | undefined>();

  useEffect(() => {
    client.get(`/models/${match.params.uid}`).then(({ data }) => {
      let model: IModel = data;
      setModel(model);
    });
  }, []);

  if (!model) {
    return <p>Loading</p>;
  }

  const path = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: model.name
    }
  ];

  return (
    <ModelDetailsStyled>
      <Banner />
      <Ariane path={path} />
      <div className='corpus'>
        <ModelViewer modelId={model.uid} />
        <ModelInfo model={model} />
      </div>
    </ModelDetailsStyled>
  );
};

export default ModelDetails;
