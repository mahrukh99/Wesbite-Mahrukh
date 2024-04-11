import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import pastelImage from '../assets/pastel.jpg';
import dgaImage from '../assets/dga.jpg';
import airFranceImage from '../assets/Air-France-Logo.png';
import vinciEnergiesImage from '../assets/VE.jpg';
import vinciConstructionImage from '../assets/VC logo.png';
import MyNavbar from './navbar';

// Styled Components
const Section = styled(motion.section)`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  z-index: 1; /* Ensure the projects section appears above the background image */
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Comic Neue', cursive;
  font-size: 50px;
  margin-top: 5%;

`;

const ProjectsContainer = styled.div`
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Set a lower z-index to keep the background image behind */
  margin-top:2%;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Projects = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Project = styled(motion.div)`
  margin-top: 5%;
  width: 360px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  font-family: 'Comic Neue', cursive;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  &:not(:hover) {
    opacity: 0.7;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 100%;
`;

const ProjectDetails = styled.div`
  flex: 1;
  justify-content: space-evenly;
`;

const ProjectTitle = styled.h3`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: 'Comic Neue', cursive;
`;




// Projects component
const ProjectsComponent: React.FC = () => {
  const projects = [
    { title: "DGA", description: ["- 📄 Employed advanced NLP techniques for real-time searches across a repository of 70,000 bidding documents ", "- 🌐 Directed the development of backend infrastructure and frontend interface for seamless user interaction", "- 🌱 Facilitates instantaneous access to pertinent information, amplifying operational efficiency and data-driven decision-making", "-  🔄 Represents a pioneering leap in procurement optimization, furnishing tangible benefits to the French Army's procurement department","- 🚀 Deploy at DGA on their infrastrcuture"], image: dgaImage },
    { title: "Air France", description: ["- 📄 Create a feature extraction software to accelerate airplane maintainace on 35,000 documents", "- 🏛️ Implement an end to end data extraction architecture,- 🔧 Perform feature and prompt Engineering", "- 🛠️ Implement LLM to extract 12 key features from 16 providers", "- 📊 Performed prompt engineering followed by statistical comparison of state-of-the-art models to implement the best suited", "- 🚀 Deploy at Air France on their infrastrcuture"], image: airFranceImage },
    { title: "Vinci Energies", description: ["- 🤖 Developed a chatbot using transformer technology, like ChatGPT, for handling user inquiries about our services.", "- 🔧 Tailored the chatbot to efficiently address user queries regarding our services, employing NLP techniques for understanding user intent", "- 🧠 Trained the chatbot using internal documents from DIANE", " 🚀 Deploying ML Ops for smooth model deployment and ongoing optimization using CI/CD on azure"], image: vinciEnergiesImage },
    { title: "Vinci Construction", description: ["- 📄 Led development of a SAAS platform for invoice auditing, integrating NLP, computer vision, and ML for 95% precision", "- 🔧 Designed and implemented a streamlined pipeline for data preprocessing and feature extraction", "- 🛠️ Optimized local deployment of ML models for real-time invoice processing", "- 📊 Conducted rigorous benchmarking to validate accuracy and efficiency against industry standards","- 🚀 Deploy it for local use"], image: vinciConstructionImage }
    // Add more projects as needed
  ];

  const hoverEffect = (isHovered: boolean) => {
    if (isHovered) {
      // Set project opacity to 1 (fully opaque)
    } else {
      // Set project opacity to a lower value (e.g., 0.7)
    }
  };
  return (
    <div>
      <MyNavbar /> {/* Adding the navbar here */}
      <Section
        id="projects-section"
        className="section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="content">
          <Header>
            <h2>My Projects 📋</h2>
          </Header>
        </div>
        <ProjectsContainer>
          <BackgroundImage>
            <BackgroundImg src={pastelImage} alt="Background Image" />
          </BackgroundImage>
          <Projects>
            {projects.map((project, index) => (
              <Project key={index} onMouseEnter={() => hoverEffect(true)} onMouseLeave={() => hoverEffect(false)}>
                <ProjectImage src={project.image} alt={project.title} className="project-image" />
                <ProjectDetails>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ul>
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </ProjectDetails>
              </Project>
            ))}
          </Projects>
        </ProjectsContainer>
      </Section>
    </div>
  );
};

export default ProjectsComponent;
