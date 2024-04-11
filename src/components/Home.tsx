import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import homeImage from '../assets/MN_logo.png'; // Import your image

const StyledHome = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 2s ease forwards; /* Slide-in animation */
  
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 200vh;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: palevioletred;
  color: white;
  border-radius: 5%;
  margin-top: 20%;
  border: 2px solid transparent;
  padding: 10px 20px;
  font-size: 16px;
  text-color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    border-color: black;
    color: black;
  }
`;

const Home: React.FC = () => {
    const navigate = useNavigate(); // Updated usage

    const navigateToAbout = () => {
        navigate('/about'); // Navigate to the About page using useNavigate
    };

    return (
        <StyledHome>
            <StyledContainer>
                <StyledImage src={homeImage} alt="Home" />
                <StyledButton onClick={navigateToAbout}>Get to know me</StyledButton>
            </StyledContainer>
        </StyledHome>
    );
};

export default Home;
