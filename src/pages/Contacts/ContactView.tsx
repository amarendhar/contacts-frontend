import { Contact } from "generated/graphql";
import React from "react";
import styled from "styled-components";

type ContactViewProps = {
  contact: Contact;
};

const ContactView = ({ contact }: ContactViewProps) => {
  return (
    <Container>
      <div>{contact.gender}</div>
      <div>{contact.name.first}</div>
      <div>{contact.name.last}</div>
      <div>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </Container>
  );
};

export default ContactView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
