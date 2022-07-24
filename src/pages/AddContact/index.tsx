import React from "react";
import styled from "styled-components";
import { Button, Input } from "components";
import useAddContact from "./useAddContact";

const AddContact = () => {
  const { fields, onSubmit } = useAddContact();

  return (
    <Container>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          // ToDo: Do validations here to show a error-toast on fail.

          onSubmit();
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
