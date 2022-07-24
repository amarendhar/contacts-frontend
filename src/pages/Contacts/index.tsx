import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGetContactsQuery } from "generated/graphql";
import { Button } from "components";

const Contacts = () => {
  const {
    loading,
    error,
    data: { getContacts: contacts = [] } = {},
  } = useGetContactsQuery({
    fetchPolicy: "network-only",
  });

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
        <Cards>
          {contacts.map((contact) => {
            return (
              <Card key={contact.id}>
                <div>{contact.gender}</div>
                <div>{contact.name.first}</div>
                <div>{contact.name.last}</div>
                <div>{contact.email}</div>
              </Card>
            );
          })}
        </Cards>
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

const Cards = styled.div`
  display: flex;
  grid-gap: 10px;
`

const Card = styled.div`
  box-shadow: 0 0 5px 0 black;
`;
