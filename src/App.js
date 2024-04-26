import React, { useState } from 'react';
import styled from 'styled-components';
import on from './images/ONbulb.jpg';
import off from './images/OFFbulb.jpg';

const Container = styled.div`
  text-align: center;
  margin-top: 14rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => (props.toggle ? 'green' : 'red')};
`;

// styling for the image
const Image = styled.img`
  width: 10rem
  transition: all 0.5s ease-in-out;
  height: 10rem;
  object-fit: contain;
`;

const Button = styled.button`
  position: relative;
  top: -10rem;
  background-color: ${props => (props.toggle ? 'green' : 'red')};
  color: black;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Image src={toggle ? on : off} alt="" />
      <Button onClick={toggleButton}>{toggle ? 'ON' : 'OFF'}</Button>
    </Container>
  );
};

export default App;