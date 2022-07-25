import React from "react";
import styled from "styled-components";
import { Contact } from "generated/graphql";
import { Button } from "components";

type ContactItemProps = {
  contact: Contact;
  handleViewMoreContact: (contactId: string) => void;
  onRemoveContact: (contactId: string) => void;
};

const ContactItem = ({ contact, handleViewMoreContact, onRemoveContact }: ContactItemProps) => {
  return (
    <Container>
      {contact?.picture?.large && (
        <Img
          src={contact.picture.large}
          alt={""}
          width="100%"
          gender={contact.gender}
        />
      )}
      <Name>
        {contact.name.title} {contact.name.first} {contact.name.last}
      </Name>
      <div>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>

      <More onClick={() => handleViewMoreContact(contact.id)}>More Information</More>
      <Remove onClick={() => onRemoveContact(contact.id)}>X</Remove>
    </Container>
  );
};

export default ContactItem;

const Container = styled.div`
  position: relative;

  text-align: center;

  border-radius: ${({ theme }) => theme.radii.lg}px;
  padding: ${({ theme }) => theme.space.md}px;

  box-shadow: 0 0 5px 0 black;
`;

const Img = styled.img<{ gender: string }>`
  border-radius: 50%;
  border: 1px solid ${({ gender }) => gender === 'male' ? 'red' : 'green'};
  width: 100px;
  padding: 3px;
`;

const Remove = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  border: 0 !important;

  padding: 8px 12px;
`;

const Name = styled.h4`
  margin: ${({ theme }) => theme.space.md}px;
`;

const More = styled(Button)`
  margin-top: ${({ theme }) => theme.space.md}px;
  width: 100%;
`;
