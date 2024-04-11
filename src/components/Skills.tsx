import React from 'react';
import nlp from "../assets/NLP.png"
import mdimg from "../assets/model deployment.png"
import webimg from "../assets/wb_logo.png"
import ccimg from "../assets/cloud computing.png"
import dsimg from "../assets/data science.png"
import mlimg from "../assets/machine learning.png"
import styled from 'styled-components';
import { motion } from "framer-motion";
import MyNavbar from './navbar';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

const Header = styled.div`
  margin-top: 5%;
  text-align: center;
  font-family: 'Comic Neue', cursive;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Comic Neue', cursive;
  flex-wrap: wrap;
`;

const SkillSection = styled(motion.div)`
  width: calc(33.33% - 20px);
  padding: 10px;
  margin-top: 2%;
  text-align: center;
  font-family: 'Comic Neue', cursive;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white; /* Added background color */

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  &:not(:hover) {
    opacity: 0.7;
  }
`;

const SkillIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const H3 = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-family: 'Comic Neue', cursive;
  font-weight:bold;
`;

const H2 = styled.h2`
  color: #333;
  font-size: 60px;
  margin-bottom: 10px;
  font-family: 'Comic Neue', cursive;
  color: black;
  display: inline;
  padding-bottom: 1px;
  display: inline;
  position: relative;
  bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const P = styled.p`
  font-size: 16px;
`;

const Skills: React.FC = () => {
  return (
    <div>
    <MyNavbar /> {/* Adding the navbar here */}
    <Section id="skills-section" className="section">
      <div className="skills">
        <Header>
          <H2>Areas of interest 🎯</H2>
        </Header>
        <Content>
          <SkillSection
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <SkillIcon src={mlimg} alt="Machine Learning" />
            <H3>Machine Learning</H3>
            <P>Machine learning involves algorithms that allow computers to learn from and make predictions or decisions based on data.</P>
          </SkillSection>
          <SkillSection
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <SkillIcon src={dsimg} alt="Data Science" />
            <H3>Data Science</H3>
            <P>Data science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract insights and knowledge from structured and unstructured data.</P>
          </SkillSection>
          <SkillSection
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <SkillIcon src={nlp} alt="NLP" />
            <H3>NLP</H3>
            <P>Natural Language Processing (NLP) is a field of artificial intelligence concerned with the interaction between computers and humans' natural language.</P>
          </SkillSection>
          <SkillSection
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <SkillIcon src={mdimg} alt="Model Deployment" />
            <H3>Model Deployment</H3>
            <P>Model deployment involves making machine learning models operational in a production environment, allowing them to serve predictions or perform tasks.</P>
          </SkillSection>
          <SkillSection
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <SkillIcon src={ccimg} alt="Cloud Computing" />
            <H3>Cloud Computing</H3>
            <P>Cloud computing refers to the delivery of computing services, including servers, storage, databases, networking, software, and more, over the internet (the cloud).</P>
          </SkillSection>
          <SkillSection
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <SkillIcon src= {webimg} alt="Web Development" />
            <H3>Web Development</H3>
            <P>Web development encompasses the skills and technologies required to create and maintain websites and web applications, covering areas such as front-end development, back-end development, and web server configuration.</P>
          </SkillSection>
        </Content>
      </div>
    </Section>
    </div>
  );
};

export default Skills;


// import React from 'react';
// import styled from 'styled-components';
// import logo from "../assets/logo2.png";
// import searchIcon from "../assets/MG.png"; // Assuming you have an image file for the magnifying glass icon

// interface HeaderProps {}

// const Header: React.FC<HeaderProps> = () => {
//   return (
//     <StyledHeader>
//       <Logo src={logo} alt="Logo" />
//       <SearchBar placeholder="Search..." />
//     </StyledHeader>
//   );
// };

// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem;
//   height: 100vh; /* Make the header occupy the entire viewport height */
// `;

// const Logo = styled.img`
//   width: 30%;
//   height: auto;
//   margin-bottom:5%;
// `;

// const SearchBar = styled.input`
//   padding: 0.5rem 1rem;
//   border: 1px solid navy;
//   border-radius: 20px;
//   margin-top: 1rem; /* Add margin-top to create space between logo and search bar */
//   width:400px;
//   background-image: url(${searchIcon});
//   background-size: 20px; /* Adjust the size of the icon */
//   background-position: 95% center; /* Adjust the position of the icon */
//   background-repeat: no-repeat;
// `;

// export default Header;