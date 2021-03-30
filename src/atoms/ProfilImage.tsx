import React from 'react';
import styled from 'styled-components';

interface IStyledProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  image: string;
}

const StyledProfilImage = styled.div.attrs<IStyledProps>(({ onClick }) => ({
  onClick: onClick
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
  return <StyledProfilImage onClick={() => console.log('yo')} image={image} />;
};

export default ProfilImage;
