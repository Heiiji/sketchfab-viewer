import React from 'react';
import styled from 'styled-components';
import Banner from '../organisms/Banner';
import ListModels from '../organisms/ListModels';
import Ariane from '../molecules/Ariane';
import MyModelEmpty from '../molecules/MyModelsEmpty';
import ModelsLikeEmpty from '../molecules/ModelsLikeEmpty';

const listView = [
  {
    title: 'My models',
    url: '/me/models',
    emptyState: <MyModelEmpty />
  },
  {
    title: 'Liked models',
    url: '/me/likes',
    emptyState: <ModelsLikeEmpty />
  }
];

const HomeStyled = styled.div`
  .corpus {
    padding: 10px;
  }
`;

const Home = () => {
  const path = [
    {
      name: 'Home',
      url: '/'
    }
  ];

  return (
    <HomeStyled>
      <Banner />
      <div className='corpus'>
        <Ariane path={path} />
        {listView.map((view) => (
          <ListModels key={view.title} title={view.title} url={view.url} EmptyState={view.emptyState} />
        ))}
      </div>
    </HomeStyled>
  );
};

export default Home;
