import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAriane = styled.div`
  margin: 10px;
  padding: 5px;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 10px;
  .ariane-elem {
    color: black;
    margin: 5px;
    cursor: pointer;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.primaryColor};
    }
  }

  :hover {
    background-color: rgba(100, 100, 100, 0.035);
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
