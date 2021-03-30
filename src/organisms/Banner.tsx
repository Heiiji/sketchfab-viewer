import React, { useContext } from 'react';
import styled from 'styled-components';
import ProfilImage from '../atoms/ProfilImage';
import UserContext from '../_helpers/userContext';

const StyledBanner = styled.div`
  background-image: url('/banner.jpeg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  position: relative;

  .profilBox {
    height: 100px;
    width: 100px;
    overflow: hidden;
    position: absolute;
    transform: translateY(30%);
    right: 20px;
    bottom: 0;
  }
`;

const Banner = () => {
  const user: any = useContext(UserContext);

  return (
    <StyledBanner>
      <div className='profilBox'>
        <ProfilImage image={user?.avatar.images[0].url} />
      </div>
    </StyledBanner>
  );
};

export default Banner;
