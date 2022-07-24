import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, Modal } from "components";
import useContacts from "./useContacts";
import ContactItem from "./ContactItem";
import ContactView from "./ContactView";

const Contacts = () => {
  const { loading, error, contacts, onSelect, onRemove, selectedContact, onCloseModal } =
    useContacts();

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
        <ContactsContainer>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onSelect={onSelect}
              onRemove={onRemove}
            />
          ))}
        </ContactsContainer>
      ) : (
        <div>No contacts found from the list</div>
      )}
      {selectedContact && (
        <Modal onClose={onCloseModal}>
          <ContactView contact={selectedContact} />
        </Modal>
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

const ContactsContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;
`;
