import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import NLPImage from '../assets/NLP3.webp';
import MLopsImage from '../assets/MLops3.webp';
import WebDevImage from '../assets/webdev.jpg';
import GANImage from '../assets/GAN.webp';
import MyNavbar2 from './navbar2';

// Styled Components
const Section = styled(motion.section)` // Wrap your section with motion
  width: 100%;
  margin-bottom: 10px;
`;

const ExploreAIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: 0px;
  position: relative;
`;


const Image = styled(motion.img)` // Wrap your image with motion
  width: 100%;
  height: 47vh;
  box-shadow: 0px 10px 40px white;
  object-fit: cover;
`;

const ImageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: 'Comic Neue', cursive;
  text-decoration: underline;
  transform: translate(-50%, -50%);
  font-weight:bold;
  color: black;
  font-size: 1.5rem;
  text-align: center;
  opacity: 0; /* Set initial opacity to 0 */
  z-index: 2; /* Ensure it's above the Image */
  transition: opacity 0.3s ease; /* Add transition effect */
`;

const ImageLink = styled(Link)`
  position: relative; /* Ensure the ImageText stays relative to ImageLink */
  width: 100%;
  display: block;
  &:hover ${ImageText} {
    opacity: 1; /* Change opacity on hover */
  }
`;



// ExploreAI component
const ExploreAI: React.FC = () => {
  return (
    <div>
      <MyNavbar2 />
      <Section
        id="explore-AI"
        className="section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <ExploreAIContainer>
          <ImageContainer>
            <ImageLink to="/NLP">
              <Image src={NLPImage} alt="NLP" whileHover={{ scale: 1.1, opacity: 0.1 }} />
              <ImageText>Natural Language Processing</ImageText>
            </ImageLink>
            <ImageLink to="/MLops">
              <Image src={MLopsImage} alt="ML ops" whileHover={{ scale: 1.1, opacity: 0.1 }} />
              <ImageText>MLOps</ImageText>
            </ImageLink>
            <ImageLink to="/WebDev">
              <Image src={WebDevImage} alt="Web development" whileHover={{ scale: 1.1, opacity: 0.1 }} />
              <ImageText>Web Development</ImageText>
            </ImageLink>
            <ImageLink to="/GAN">
              <Image src={GANImage} alt="GAN's" whileHover={{ scale: 1.1, opacity: 0.1 }} />
              <ImageText>Generative Adversarial Networks</ImageText>
            </ImageLink>
          </ImageContainer>
        </ExploreAIContainer>
      </Section>
    </div>
  );
};

export default ExploreAI;