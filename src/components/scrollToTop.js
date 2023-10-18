import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { styled } from 'styled-components';

const StyledButton = styled.div`
width:50px;
height:50px;
background-color: #c1a35f;
display:flex;
justify-content:center;
align-items:center;
position: fixed;
bottom: 30px;
right:30px;
&:hover{
  cursor: grab;
}

`;

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };



  return (
    <StyledButton onClick={scrollToTop}>
      <Icon.ArrowBarUp color="white" size={30}/>
    </StyledButton>
  );
};

export default ScrollToTop;