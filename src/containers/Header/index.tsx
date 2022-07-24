import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <NavLinkContainer to="/" className="selected">
        Contacts Viewer
      </NavLinkContainer>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  width: 100%;
  
  display: flex;
  justify-content: space-around;

  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: ${({ theme }) => theme.shadows.header};

  z-index: 998;
`;

const NavLinkContainer = styled(NavLink)`
  padding: ${({ theme }) => theme.space.md}px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: white;
  }
`;
