import React from "react";
import styled from "styled-components";
import { useGetContactsQuery } from "generated/graphql";

const Contacts = () => {
  const {
    loading,
    error,
    data: { getContacts: contacts = [] } = {},
  } = useGetContactsQuery();

  return (
    <Container>
      {loading && <div>Loading...</div>}

      {contacts?.length > 0 ? (
        contacts.map((contact) => {
          return (
            <div key={contact.id}>
              <div>{contact?.gender}</div>
            </div>
          );
        })
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
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  padding: ${({ theme }) => theme.space.lg}px;
`;
