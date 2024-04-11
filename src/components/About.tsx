import styled from 'styled-components';
import mahrukhImage from '../assets/mahrukh.jpg';
import peachBackground from '../assets/peach_background.jpg';
import MyNavbar from './navbar';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

// Styled components
const Section = styled(motion.section)`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const Header = styled.div`
  flex: 1;
  margin-top: 0%;
  margin-right: 5%;
`;

const Description = styled.div`
  margin-top: 14%;
  flex: 2;
`;

const H2 = styled.h2`
  color: #333;
  font-size: 60px;
  margin-bottom: 10px;
  font-family: 'Indie Flower', cursive;
  color: black;
  display: inline;
  padding-bottom: 1px;
  display: inline;
  position: relative;
  bottom: 30px;
`;

const H3 = styled.h3`
  color: #333;
  font-size: 30px;
  font-family: 'Indie Flower', cursive;
  color: black;
  display: inline;
  padding-bottom: 10px;
  display: inline;
  position: relative;
  margin-bottom: 200px;
  margin-top: 50px;
`;

const Text = styled.ul`
  line-height: 1.6;
  font-family: 'Comic Neue', cursive; /* Changed font-family to Comic Neue */
  font-size: 18px;
  margin-bottom: 60px;
`;

const ProfilePicture = styled.img`
  max-width: 100%;
  border-radius: 0%;
  z-index:-1;
  height: 99.3vh; /* Fixed height using viewport units */
`;

const SuperimposedImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  /* Removed width */
  height: auto;
  z-index: 1;
  margin-top:40%;
  margin-left:10%;
  transition: transform 0.3s ease-in-out;
  object-fit: cover; /* Added object-fit for aspect ratio */

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  max-width: 100%;
`;

const FunFactsTable = styled.table`
  margin-top: 2%;
  margin-left: 10px;
`;

const FunFactsTableCell = styled.td`
  padding-bottom: 20px;
  font-size: 15px;
  font-family: 'Comic Neue', cursive;
`;

// React component
const AboutSection = () => {
  return (
    <div>
      <MyNavbar /> {/* Adding the navbar here */}
      <Section
        id="about-section"
        className="section"
        style={{ backgroundColor: 'white'}}
        initial={{ opacity: 0, x: -100 }} // Initial state, off-screen to the left
        animate={{ opacity: 1, x: 0 }} // Animation to move in and fade in
        exit={{ opacity: 0, x: 100 }} // Animation to fade out and move off-screen to the right
        transition={{ duration: 0.5 }} // Animation duration
      >
        <Content className="content">
          <Header className="header">
            <ImageContainer className="image-container">
              <SuperimposedImage src={mahrukhImage} alt="Profile Picture" className="profile-picture" />
              <ProfilePicture src={peachBackground} alt="Superimposed Image" className="superimposed-image" />
            </ImageContainer>
          </Header>
          <Description className="description">
            <H2>About Me 🌟</H2>
            <Text className="text">
              <li>👩‍💻 24-year-old AI Engineer specializing in Data Science and ML Ops.</li>
              <li>🎓 Equipped with a Master's degree in AI and Machine Learning from Paris Saclay and a BEng from the University of Nottingham, UK.</li>
              <li>💼 With 2,5 yrs of industry experience, currently serving as an AI Engineer at Aquila Data.</li>
              <li>🚀 Deeply involved in a groundbreaking project with the French army in collaboration with DGA.</li>
              <li>🔧 Prior to current role, contributed to transformative AI projects at VINCI and AirFrance.</li>
            </Text>
            <H3>Fun Facts</H3>
            <FunFactsTable className="fun-facts-table">
              <tbody>
                <tr>
                  <FunFactsTableCell>📚</FunFactsTableCell>
                  <FunFactsTableCell> Fluent in five languages, English, French, Urdu, Punjabi, and Hindi</FunFactsTableCell>
                </tr>
                <tr>
                  <FunFactsTableCell>📰</FunFactsTableCell>
                  <FunFactsTableCell> Used to write blogs for the Tribune </FunFactsTableCell>
                </tr>
                <tr>
                  <FunFactsTableCell>🗺️</FunFactsTableCell>
                  <FunFactsTableCell> I am an avid traveler, so far traveled over 20 countries</FunFactsTableCell>
                </tr>
                <tr>
                  <FunFactsTableCell>🎧</FunFactsTableCell>
                  <FunFactsTableCell> In my free time, I indulge in documentaries and music</FunFactsTableCell>
                </tr>
              </tbody>
            </FunFactsTable>
          </Description>
        </Content>
      </Section>
    </div>
  );
};

export default AboutSection;
