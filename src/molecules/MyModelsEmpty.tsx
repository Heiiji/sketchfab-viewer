import React from 'react';
import styled from 'styled-components';
import ModelEmptyIllu from '../atoms/ModelEmptyIllu';

const StyledMyModelsEmpty = styled.div`
  display: block;
  text-align: center;

  .svg-illu {
    height: 300px;
    width: 300px;
  }
`;

const MyModelsEmpty = () => {
  return (
    <StyledMyModelsEmpty>
      <ModelEmptyIllu className='svg-illu' />
      <p>You haven`t upload any model yet!</p>
    </StyledMyModelsEmpty>
  );
};

export default MyModelsEmpty;
