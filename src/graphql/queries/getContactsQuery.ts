import { gql } from "@apollo/client";

const GetContactsQuery = gql`
  query getContacts {
    getContacts {
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
`;

export default GetContactsQuery;
