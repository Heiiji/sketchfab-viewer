import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import client from '../_helpers/api';
import ModelCard from '../molecules/ModelCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IModel } from '../type';
import { Link } from 'react-router-dom';

const StyledListModel = styled.div`
  h2 {
    cursor: pointer;
  }
`;

type ListModelProps = {
  title: string;
  url: string;
};

const ListModel = ({ title, url }: ListModelProps) => {
  const [collapse, setCollapse] = useState(false);
  const [models, setModels] = useState<Array<IModel>>([]);

  useEffect(() => {
    client.get(url).then(({ data }) => {
      let modelArray: Array<IModel> = data.results;
      setModels(modelArray);
    });
  }, []);

  return (
    <StyledListModel>
      <h2 onClick={() => setCollapse(!collapse)}>
        {title}{' '}
        <FontAwesomeIcon
          style={{
            transition: '0.3s',
            transform: collapse ? 'rotate(0deg)' : 'rotate(90deg)'
          }}
          icon={faChevronRight}
        />
      </h2>
      {!collapse && (
        <div>
          {models.map((model) => (
            <Link key={model.uid} to={`/model/${model.uid}`}>
              <ModelCard model={model} onSelect={(id: string) => console.log('select', id)} />
            </Link>
          ))}
        </div>
      )}
    </StyledListModel>
  );
};

export default ListModel;
