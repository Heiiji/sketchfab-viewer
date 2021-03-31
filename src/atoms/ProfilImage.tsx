import React from 'react';
import styled from 'styled-components';

interface IStyledProps {
  image: string;
}

const StyledProfilImage = styled.div.attrs<IStyledProps>(({ image }) => ({
  image: image
}))<IStyledProps>`
  background-image: url('${({ image }) => image}');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 50%;
  display: block;
`;

type ProfilImageProps = {
  image: string;
};

const ProfilImage = ({ image }: ProfilImageProps) => {
  return <StyledProfilImage image={image} />;
};

export default ProfilImage;
