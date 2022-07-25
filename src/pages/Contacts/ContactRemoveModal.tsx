import React from "react";
import styled from "styled-components";
import { Button, Modal } from "components";
import { Contact } from "generated/graphql";

type ContactRemoveModalProps = {
  contact: Contact;
  onClose: () => void;
  handleRemoveContact: (contactId: string) => void;
};

const ContactRemoveModal = ({
  contact,
  onClose,
  handleRemoveContact,
}: ContactRemoveModalProps) => {
  return (
    <Modal onClose={onClose}>
      <Container>
        <Title>
          Are you sure you want to remove this contact&nbsp;
          <b>
            {contact.name.title}&nbsp;
            {contact.name.first}&nbsp;
            {contact.name.last}
          </b>
        </Title>
        <ButtonsContainer>
          <Button onClick={() => handleRemoveContact(contact.id)}>Yes</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonsContainer>
      </Container>
    </Modal>
  );
};

export default ContactRemoveModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.space.lg}px;
  grid-gap: ${({ theme }) => theme.space.lg}px;
`;
