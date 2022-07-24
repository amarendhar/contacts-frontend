import { gql } from "@apollo/client";

const removeContactMutation = gql`
  mutation removeContact($contactId: String!) {
    removeContact(contactId: $contactId) {
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
        phone
        picture {
          large
          medium
          thumbnail
        }
      }
    }
  }
`;

export default removeContactMutation;
