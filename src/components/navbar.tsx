import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: white;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between; /* Distribute items evenly along the main axis */
  align-items: center; /* Center items vertically */
  height: 50px;
  border: 2px solid palevioletred; /* Add black border */
  box-shadow: 0px 0px 5px 2px palevioletred; /* Add box shadow */
  position: fixed; /* This line makes the navbar fixed */
  top: 0; /* Position the navbar at the top of the viewport */
  left: 0; /* Position the navbar at the left of the viewport */
  width: 100%; /* Make the navbar span the entire width of the viewport */
  z-index: 10; /* Set a higher z-index to ensure it stays on top */
`;

const NavbarBrand = styled.a`
  color: palevioletred;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  padding:20px;
`;

const NavItem = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  flex: 1; /* Each item takes equal space */
  text-align: center; /* Center text within each item */
  font-family: 'Indie Flower', cursive;
  font-size:18px;
  &:hover {
    color: #007bff; /* Blue color similar to Bootstrap's default */
  }
`;

const MyNavbar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToSkills = () => {
    navigate('/skills');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToProjects = () => {
    navigate('/projects');
  };

  const navigateToBlog = () => {
    navigate('/blog');
  };

  return (
    <NavbarContainer>
      <NavbarBrand onClick={navigateToHome}>Mahrukh Nadeem</NavbarBrand>
      <NavItem onClick={navigateToAbout}>About me</NavItem>
      <NavItem onClick={navigateToSkills}>Skills</NavItem>
      <NavItem onClick={navigateToProjects}>Projects</NavItem>
      <NavItem onClick={navigateToBlog}>Blog</NavItem>
    </NavbarContainer>
  );
};

export default MyNavbar;
