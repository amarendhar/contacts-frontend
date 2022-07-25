import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "components";
import useContacts from "./useContacts";
import ContactItem from "./ContactItem";
import ContactViewModal from "./ContactViewModal";
import ContactRemoveModal from "./ContactRemoveModal";

const Contacts = () => {
  const {
    loading,
    error,
    contacts,
    countries,
    selectedContactToView,
    selectedContactToRemove,
    filter,
    setFilter,
    handleViewMoreContact,
    onRemoveContact,
    handleRemoveContact,
    onCloseModal,
  } = useContacts();

  return (
    <Container>
      {contacts.length > 0 && (
        <h2>
          {contacts.length} Contacts from {countries.length}
          &nbsp;{countries.length > 1 ? "countries" : "country"}
        </h2>
      )}
      <Facets>
        <NavLink to="/contacts/add">
          <Button>Add Contact</Button>
        </NavLink>
        {contacts.length > 0 && (
          <Filter
            type="select"
            placeholder={"Filter"}
            defaultValue={filter}
            value={filter}
            onChange={(v) => {
              setFilter(v);
            }}
            options={["Filter (none)", "A-Z", "Z-A", "DOB (↓)", "DOB (↑)"]}
          />
        )}
      </Facets>
      {error && (
        <Error>
          Error Query failed <span>{error?.message}</span>
        </Error>
      )}
      {loading && <div>Loading...</div>}

      {contacts.length > 0 ? (
        <ContactsContainer>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              handleViewMoreContact={handleViewMoreContact}
              onRemoveContact={onRemoveContact}
            />
          ))}
        </ContactsContainer>
      ) : (
        <div>No contacts found from the list</div>
      )}
      {selectedContactToView && (
        <ContactViewModal
          contact={selectedContactToView}
          onClose={onCloseModal}
        />
      )}
      {selectedContactToRemove && (
        <ContactRemoveModal
          contact={selectedContactToRemove}
          onClose={onCloseModal}
          handleRemoveContact={handleRemoveContact}
        />
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

const Facets = styled.div`
  display: flex;
  grid-gap: ${({ theme }) => theme.space.lg}px;
  margin-bottom: ${({ theme }) => theme.space.lg}px;
`;

const Filter = styled(Input)`
  padding: 4px;
`;

const Error = styled.div`
  font-weight: bold;

  span {
    color: red;
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  flex-wrap: wrap;
`;
