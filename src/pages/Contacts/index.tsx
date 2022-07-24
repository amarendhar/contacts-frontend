import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "components";
import useContacts from "./useContacts";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { loading, error, contacts, onRemove } = useContacts();

  return (
    <Container>
      <NavLink to="/contacts/add">
        <Button>Add Contact</Button>
      </NavLink>
      <h2>List of Contacts</h2>
      {loading && <div>Loading...</div>}
      {error && (
        <Error>
          Error Query failed <span>{error?.message}</span>
        </Error>
      )}

      {contacts.length > 0 ? (
        <ContactItem contacts={contacts} onRemove={onRemove} />
      ) : (
        <div>No contacts found from the list</div>
      )}
    </Container>
  );
};

export default Contacts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  padding: ${({ theme }) => theme.space.lg}px;
`;

const Error = styled.div`
  font-weight: bold;

  span {
    color: red;
  }
`;
