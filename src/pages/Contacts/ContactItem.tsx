import React from "react";
import styled from "styled-components";
import { Contact } from "generated/graphql";
import { Button } from "components";

type ContactItemProps = {
  contact: Contact;
  onSelect: (contactId: string) => void;
  onRemove: (contactId: string) => void;
};

const ContactItem = ({ contact, onSelect, onRemove }: ContactItemProps) => {
  return (
    <Container>
      <Remove onClick={() => onRemove(contact.id)}>X</Remove>
      <div>{contact.gender}</div>
      <div>{contact.name.first}</div>
      <div>{contact.name.last}</div>
      <div>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>

      <More onClick={() => onSelect(contact.id)}>More Information</More>
    </Container>
  );
};

export default ContactItem;

const Container = styled.div`
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

const More = styled(Button)`
  margin-top: ${({ theme }) => theme.space.md}px;
  width: 100%;
`;
