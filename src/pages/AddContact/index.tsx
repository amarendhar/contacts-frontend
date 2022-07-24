import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'
import { Button, Input } from "components";
import { useAddContactMutation } from "generated/graphql";
import useAddContact from "./useAddContact";

type ContactFields = {
  gender: string;
  title: string;
  first: string;
  last: string;
  email: string;
  street: string;
  city: string;
  state: string;
  country: string;
  dob: string;
  phone: string;
};

const AddContact = () => {
  const history = useHistory()
  const { fields } = useAddContact();
  const [addContactMutation] = useAddContactMutation();

  return (
    <Container>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          // ToDo: Do validations here to show a error-toast on fail.

          const {
            gender,
            title,
            first,
            last,
            email,
            street,
            city,
            state,
            country,
            dob,
            phone,
          } = fields.reduce((acc, { name, value }) => {
            // @ts-ignore
            acc[name] = value;

            return acc;
          }, {} as ContactFields);

          const { data } = await addContactMutation({
            variables: {
              contactInput: {
                gender,
                name: {
                  title,
                  first,
                  last,
                },
                email,
                location: {
                  street,
                  city,
                  state,
                  country,
                },
                dob,
                phone,
              },
            },
          });

          if (data?.addContact?.status === 'success') {
            history.push('/')
          }
        }}
      >
        {fields.map(({ type, name, label, value, setState, ...restProps }) => (
          <label key={label}>
            {label}
            <InputContainer
              type={type}
              placeholder={name}
              defaultValue={value}
              value={value}
              onChange={(v) => {
                setState(v);
              }}
              {...restProps}
            />
          </label>
        ))}
        <Button>SUBMIT</Button>
      </Form>
    </Container>
  );
};

export default AddContact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  padding: ${({ theme }) => theme.space.lg}px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  grid-gap: ${({ theme }) => theme.space.lg}px;

  input,
  select {
    width: 100%;
  }
`;

const InputContainer = styled(Input)`
  margin-top: ${({ theme }) => theme.space.lg}px;
`;
