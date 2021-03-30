import React from 'react';
import styled from 'styled-components';

interface IStyledProps {
  image: string;
}

const StyledPreviewModel = styled.div.attrs<IStyledProps>(({ onClick }) => ({
  onClick: onClick
}))<IStyledProps>`
  background-image: url('${({ image }) => image}');
  height: 200px;
  width: 100%;
  display: block;
  background-position: center;
  background-size: cover;
`;

const PreviewModel = ({ image }: IStyledProps) => {
  return <StyledPreviewModel image={image}></StyledPreviewModel>;
};

export default PreviewModel;
