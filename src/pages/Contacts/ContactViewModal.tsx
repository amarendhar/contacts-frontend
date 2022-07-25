import React from "react";
import styled from "styled-components";
import { Modal } from "components";
import { Contact } from "generated/graphql";

type ContactViewModalProps = {
  contact: Contact;
  onClose: () => void;
};

const ContactViewModal = ({ contact, onClose }: ContactViewModalProps) => {
  return (
    <Modal onClose={onClose}>
      <Container>
        {contact?.picture?.large && (
          <Img
            src={contact.picture.large}
            alt={""}
            width="100%"
            gender={contact.gender}
          />
        )}
        <Content>
          <div>Gender</div>
          <div>{contact.gender}</div>

          <div>First Name</div>
          <div>{contact.name.first}</div>
          <div>Last Name</div>
          <div>{contact.name.last}</div>

          <div>Email</div>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>

          <div>Location Street</div>
          <div>{contact.location.street}</div>
          <div>Location City</div>
          <div>{contact.location.city}</div>
          <div>Location State</div>
          <div>{contact.location.state}</div>
          <div>Location Country</div>
          <div>{contact.location.country}</div>

          <div>Date of Birth</div>
          <div>{contact.dob}</div>

          <div>Phone</div>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </Content>
      </Container>
    </Modal>
  );
};

export default ContactViewModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img<{ gender: string }>`
  border-radius: 50%;
  border: 1px solid ${({ gender }) => (gender === "male" ? "red" : "green")};
  width: 150px;
  padding: 3px;
  margin-bottom: ${({ theme }) => theme.space.lg}px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 10px;
  padding: ${({ theme }) => theme.space.lg}px;

  > :nth-child(odd) {
    font-weight: bold;
  }

  > :nth-child(even) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
