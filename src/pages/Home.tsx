import React from 'react';
import styled from 'styled-components';
import Banner from '../organisms/Banner';
import ListModels from '../organisms/ListModels';
import Ariane from '../molecules/Ariane';

const listView = [
  {
    title: 'My models',
    url: '/me/models'
  },
  {
    title: 'Liked models',
    url: '/me/likes'
  }
];

const HomeStyled = styled.div``;

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
      <Ariane path={path} />
      {listView.map((view) => (
        <ListModels key={view.title} title={view.title} url={view.url} />
      ))}
    </HomeStyled>
  );
};

export default Home;
