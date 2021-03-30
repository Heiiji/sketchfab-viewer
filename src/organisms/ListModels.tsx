import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import client from '../_helpers/api';
import ModelCard from '../molecules/ModelCard';
import { IModel } from '../type';
import { Link } from 'react-router-dom';

const StyledListModel = styled.div``;

type ListModelProps = {
  title: string;
  url: string;
};

const ListModel = ({ title, url }: ListModelProps) => {
  const [models, setModels] = useState<Array<IModel>>([]);

  useEffect(() => {
    client.get(url).then(({ data }) => {
      let modelArray: Array<IModel> = data.results;
      setModels(modelArray);
    });
  }, []);

  return (
    <StyledListModel>
      <h2>{title}</h2>
      <div>
        {models.map((model) => (
          <Link key={model.uid} to={`/model/${model.uid}`}>
            <ModelCard model={model} onSelect={(id: string) => console.log('select', id)} />
          </Link>
        ))}
      </div>
    </StyledListModel>
  );
};

export default ListModel;
