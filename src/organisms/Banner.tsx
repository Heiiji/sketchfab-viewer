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
  display: flex;
  flex-direction: row;

  .profilBox {
    text-align: right;
    margin: 0;
    width: 100%;
    flex: 1;
    color: white;
    height: 100px;
    position: absolute;
    right: 20px;
    bottom: 5px;
  }

  .profil-image {
    display: inline-block;
    flex: 1;
    position: relative;
    width: 100px;
    height: 100px;
  }

  p {
    margin: 0;
  }

  .name {
    padding: 10px;
    display: inline-block;
    font-size: 25px;
    vertical-align: top;
  }
`;

const Banner = () => {
  const user: any = useContext(UserContext);

  return (
    <StyledBanner>
      <div className='profilBox'>
        <p className='name'>
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </p>
        <div className='profil-image'>
          <ProfilImage image={user?.avatar.images[0].url} />
        </div>
      </div>
    </StyledBanner>
  );
};

export default Banner;
