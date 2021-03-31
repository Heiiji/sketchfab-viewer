import React from 'react';
import styled from 'styled-components';
import { IUser } from '../type';
import ProfilImage from './ProfilImage';

const StyledUserMiniDisplay = styled.div`
  .avatar {
    display: inline-block;
    position: relative;
    height: 30px;
    width: 30px;
  }
  .pseudo {
    line-height: 30px;
    vertical-align: top;
    padding-left: 10px;
  }
`;

type UserMiniDisplayProps = {
  user: IUser;
};

const UserMiniDisplay = ({ user }: UserMiniDisplayProps) => {
  return (
    <StyledUserMiniDisplay>
      <div className='avatar'>
        <ProfilImage image={user.avatar.images[0].url} />
      </div>
      <span className='pseudo'>{user.displayName}</span>
    </StyledUserMiniDisplay>
  );
};

export default UserMiniDisplay;
