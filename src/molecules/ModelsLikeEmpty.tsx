import React from 'react';
import styled from 'styled-components';
import LikeEmptyIllu from '../atoms/LikeEmptyIllu';

const StyledModelsLikeEmpty = styled.div`
  display: block;
  text-align: center;

  .svg-illu {
    height: 300px;
    width: 300px;
  }
`;

const ModelsLikeEmpty = () => {
  return (
    <StyledModelsLikeEmpty>
      <LikeEmptyIllu className='svg-illu' />
      <p>You haven`t like any model yet :`(</p>
    </StyledModelsLikeEmpty>
  );
};

export default ModelsLikeEmpty;
