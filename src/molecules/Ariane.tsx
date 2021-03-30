import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAriane = styled.div`
  padding: 10px;
  .ariane-elem {
    color: black;
    margin: 5px;
    cursor: pointer;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

type ArianeProps = {
  path: Array<any>;
};

const Ariane = ({ path }: ArianeProps) => {
  return (
    <StyledAriane>
      {path.map((elem, index) => (
        <Link to={elem.url} className='ariane-elem' key={elem.name}>
          {index > 0 ? '>' : ''} {elem.name}
        </Link>
      ))}
    </StyledAriane>
  );
};

export default Ariane;
