import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <Container>
    <div>Page Not Found</div>
    <NavLink to="/" className="selected">
      Go to Contacts Page
    </NavLink>
  </Container>
);

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.space.lg}px;

  a {
    padding-top: ${({ theme }) => theme.space.lg}px;
  }
`;
