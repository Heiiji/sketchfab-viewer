import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import client from '../_helpers/api';
import { IModel } from '../type';
import Banner from '../organisms/Banner';

const ModelDetailsStyled = styled.div``;

type TParams = { uid: string };

const ModelDetails = ({ match }: RouteComponentProps<TParams>) => {
  const [model, setModel] = useState<IModel | undefined>();

  useEffect(() => {
    client.get(`/models/${match.params.uid}`).then(({ data }) => {
      let model: IModel = data;
      setModel(model);
    });
  }, []);

  return (
    <ModelDetailsStyled>
      <Banner />
      {model?.uid}
    </ModelDetailsStyled>
  );
};

export default ModelDetails;
