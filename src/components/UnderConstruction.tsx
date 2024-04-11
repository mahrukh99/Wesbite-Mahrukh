import React from 'react';
import MyNavbar2 from './navbar2';
import styled from 'styled-components';

// Define a styled component for the h1 element to make the text bigger
const Title = styled.h1`
  font-size: 2.5rem; /* Adjust the font size as needed */
  margin-top:20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UnderConstruction: React.FC = () => {
  return (
    <div>
      <MyNavbar2/>
      {/* Use the styled component for the title */}
      <Title>Under Construction 🏗️</Title>
      {/* <p>This page is currently under construction. Please check back later.</p> */}
    </div>
  );
};

export default UnderConstruction;
