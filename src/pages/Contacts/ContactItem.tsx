import React from "react";
import styled from "styled-components";
import { Contact } from "generated/graphql";
import { Button } from "components";

type ContactItemProps = {
  contacts: Contact[];
  onRemove: (contactId: string) => void;
};

const ContactItem = ({ contacts, onRemove }: ContactItemProps) => {
  return (
    <Container>
      {contacts.map((contact) => {
        return (
          <Card key={contact.id}>
            <Remove onClick={() => onRemove(contact.id)}>X</Remove>
            <div>{contact.gender}</div>
            <div>{contact.name.first}</div>
            <div>{contact.name.last}</div>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </Card>
        );
      })}
    </Container>
  );
};

export default ContactItem;

const Container = styled.div`
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;

  `;
  
  const Card = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.space.md}px;
  border-radius: ${({ theme }) => theme.radii.lg}px;

  box-shadow: 0 0 5px 0 black;
`;

const Remove = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  border: 0 !important;

  padding: 8px 12px;
`;
