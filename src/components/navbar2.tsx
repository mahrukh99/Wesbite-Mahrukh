import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: white
  padding: 20px 20px;
  display: flex;
  justify-content: space-between; /* Distribute items evenly along the main axis */
  align-items: center; /* Center items vertically */
  height:50px;
  border: 2px solid palevioletred; /* Add black border */
  box-shadow: 0px 0px 5px 2px palevioletred; /* Add box shadow */
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
  &:hover {
    color: #007bff; /* Blue color similar to Bootstrap's default */
  }
`;

const MyNavbar2 = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToNLP = () => {
    navigate('/nlp');
  };

  const navigateToGAN = () => {
    navigate('/gan');
  };

  const navigateToML = () => {
    navigate('/MLops');
  };




  return (
    <NavbarContainer>
      <NavbarBrand onClick={navigateToAbout}>Mahrukh Nadeem</NavbarBrand>
      <NavItem onClick={navigateToNLP}>NLP</NavItem>
      <NavItem onClick={navigateToGAN}>GAN</NavItem>
      <NavItem onClick={navigateToML}>Wev Development</NavItem>
      <NavItem onClick={navigateToML}>ML ops</NavItem>
    </NavbarContainer>
  );
};

export default MyNavbar2;
