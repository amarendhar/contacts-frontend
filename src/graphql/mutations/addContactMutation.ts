import { gql } from "@apollo/client";

const addContactMutation = gql`
  mutation addContact($contactInput: ContactInput) {
    addContact(contactInput: $contactInput) {
      status
      message
      result {
        id
        gender
        name {
          title
          first
          last
        }
        email
        location {
          street
          city
          state
          country
        }
        dob
        picture {
          large
          medium
          thumbnail
        }
      }
    }
  }
`;

export default addContactMutation;
