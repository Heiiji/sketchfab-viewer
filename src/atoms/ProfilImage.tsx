import React from 'react';
import styled from 'styled-components';
import { IModel } from '../type';

interface IStyledProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  image: string;
}

const StyledProfilImage = styled.div.attrs<IStyledProps>(({ onClick }) => ({
  onClick: onClick
}))<IStyledProps>``;

type ProfilImageProps = {
  image: string;
};

const ProfilImage = ({ image }: ProfilImageProps) => {
  return <StyledProfilImage onClick={() => console.log('yo')} image={image} />;
};

export default ProfilImage;
