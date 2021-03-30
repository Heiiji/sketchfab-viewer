import React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.div`
  text-align: center;

  .App-logo {
    animation: App-logo-pulse infinite 2s ease-in-out;
    pointer-events: none;
    height: 200px;
  }

  .App-header {
    background-color: #1caad9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.9;
      transform: scale(1.05);
    }
    100% {
      opacity: 0.6;
    }
  }
`

const Home = () => {
  return (
    <HomeStyled>
      <header className='App-header'>
        <img src={'https://static.sketchfab.com/img/press/logos/logo.png'} className='App-logo' alt='logo' />
        <p>
          Welcome to the <code>Tech/Frontend</code> exercise.
        </p>
      </header>
    </HomeStyled>
  )
}

export default Home
