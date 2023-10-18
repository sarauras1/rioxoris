import React from 'react';
import { NavLink } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { styled } from 'styled-components';
const StyledButton = styled.div`
width: 50px;
height: 50px;
border-radius:50%;
background-color: #25D366;
display:flex;
justify-content:center;
align-items:center;
position: fixed;
bottom: 30px;
left:20px;

`;

export default function Whatsapp(){
  
  

  return (
    <NavLink href="https://api.whatsapp.com/send?phone=+393297451720">
    <StyledButton >
      <Icon.Whatsapp color="white" size={30}/>
    </StyledButton>
    </NavLink>
  );
};
