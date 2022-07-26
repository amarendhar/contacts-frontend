import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};






export type AddContact = {
  __typename?: 'AddContact';
  status: Scalars['String'];
  message: Scalars['String'];
  result: Contact;
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['ID'];
  gender: Scalars['String'];
  name: Name;
  email: Scalars['String'];
  location: Location;
  dob: Scalars['String'];
  phone: Scalars['String'];
  picture?: Maybe<Picture>;
};

export type ContactInput = {
  gender: Scalars['String'];
  name: NameInput;
  email: Scalars['String'];
  location: LocationInput;
  dob: Scalars['String'];
  phone: Scalars['String'];
  picture?: Maybe<PictureInput>;
};

export type Location = {
  __typename?: 'Location';
  street: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
};

export type LocationInput = {
  street: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContact?: Maybe<AddContact>;
  removeContact?: Maybe<RemoveContact>;
};


export type MutationAddContactArgs = {
  contactInput?: Maybe<ContactInput>;
};


export type MutationRemoveContactArgs = {
  contactId: Scalars['String'];
};

export type Name = {
  __typename?: 'Name';
  title: Scalars['String'];
  first: Scalars['String'];
  last: Scalars['String'];
};

export type NameInput = {
  title: Scalars['String'];
  first: Scalars['String'];
  last: Scalars['String'];
};

export type Picture = {
  __typename?: 'Picture';
  large?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type PictureInput = {
  large?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getContacts: Array<Contact>;
};

export type RemoveContact = {
  __typename?: 'RemoveContact';
  status: Scalars['String'];
  message: Scalars['String'];
  result: Contact;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type AddContactMutationVariables = Exact<{
  contactInput?: Maybe<ContactInput>;
}>;


export type AddContactMutation = (
  { __typename?: 'Mutation' }
  & { addContact?: Maybe<(
    { __typename?: 'AddContact' }
    & Pick<AddContact, 'status' | 'message'>
    & { result: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'id' | 'gender' | 'email' | 'dob' | 'phone'>
      & { name: (
        { __typename?: 'Name' }
        & Pick<Name, 'title' | 'first' | 'last'>
      ), location: (
        { __typename?: 'Location' }
        & Pick<Location, 'street' | 'city' | 'state' | 'country'>
      ), picture?: Maybe<(
        { __typename?: 'Picture' }
        & Pick<Picture, 'large' | 'medium' | 'thumbnail'>
      )> }
    ) }
  )> }
);

export type RemoveContactMutationVariables = Exact<{
  contactId: Scalars['String'];
}>;


export type RemoveContactMutation = (
  { __typename?: 'Mutation' }
  & { removeContact?: Maybe<(
    { __typename?: 'RemoveContact' }
    & Pick<RemoveContact, 'status' | 'message'>
    & { result: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'id' | 'gender' | 'email' | 'dob' | 'phone'>
      & { name: (
        { __typename?: 'Name' }
        & Pick<Name, 'title' | 'first' | 'last'>
      ), location: (
        { __typename?: 'Location' }
        & Pick<Location, 'street' | 'city' | 'state' | 'country'>
      ), picture?: Maybe<(
        { __typename?: 'Picture' }
        & Pick<Picture, 'large' | 'medium' | 'thumbnail'>
      )> }
    ) }
  )> }
);

export type GetContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsQuery = (
  { __typename?: 'Query' }
  & { getContacts: Array<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'gender' | 'email' | 'dob' | 'phone'>
    & { name: (
      { __typename?: 'Name' }
      & Pick<Name, 'title' | 'first' | 'last'>
    ), location: (
      { __typename?: 'Location' }
      & Pick<Location, 'street' | 'city' | 'state' | 'country'>
    ), picture?: Maybe<(
      { __typename?: 'Picture' }
      & Pick<Picture, 'large' | 'medium' | 'thumbnail'>
    )> }
  )> }
);


export const AddContactDocument = gql`
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
export type AddContactMutationFn = Apollo.MutationFunction<AddContactMutation, AddContactMutationVariables>;

/**
 * __useAddContactMutation__
 *
 * To run a mutation, you first call `useAddContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContactMutation, { data, loading, error }] = useAddContactMutation({
 *   variables: {
 *      contactInput: // value for 'contactInput'
 *   },
 * });
 */
export function useAddContactMutation(baseOptions?: Apollo.MutationHookOptions<AddContactMutation, AddContactMutationVariables>) {
        return Apollo.useMutation<AddContactMutation, AddContactMutationVariables>(AddContactDocument, baseOptions);
      }
export type AddContactMutationHookResult = ReturnType<typeof useAddContactMutation>;
export type AddContactMutationResult = Apollo.MutationResult<AddContactMutation>;
export type AddContactMutationOptions = Apollo.BaseMutationOptions<AddContactMutation, AddContactMutationVariables>;
export const RemoveContactDocument = gql`
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
export type RemoveContactMutationFn = Apollo.MutationFunction<RemoveContactMutation, RemoveContactMutationVariables>;

/**
 * __useRemoveContactMutation__
 *
 * To run a mutation, you first call `useRemoveContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeContactMutation, { data, loading, error }] = useRemoveContactMutation({
 *   variables: {
 *      contactId: // value for 'contactId'
 *   },
 * });
 */
export function useRemoveContactMutation(baseOptions?: Apollo.MutationHookOptions<RemoveContactMutation, RemoveContactMutationVariables>) {
        return Apollo.useMutation<RemoveContactMutation, RemoveContactMutationVariables>(RemoveContactDocument, baseOptions);
      }
export type RemoveContactMutationHookResult = ReturnType<typeof useRemoveContactMutation>;
export type RemoveContactMutationResult = Apollo.MutationResult<RemoveContactMutation>;
export type RemoveContactMutationOptions = Apollo.BaseMutationOptions<RemoveContactMutation, RemoveContactMutationVariables>;
export const GetContactsDocument = gql`
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

/**
 * __useGetContactsQuery__
 *
 * To run a query within a React component, call `useGetContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactsQuery(baseOptions?: Apollo.QueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
        return Apollo.useQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, baseOptions);
      }
export function useGetContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
          return Apollo.useLazyQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, baseOptions);
        }
export type GetContactsQueryHookResult = ReturnType<typeof useGetContactsQuery>;
export type GetContactsLazyQueryHookResult = ReturnType<typeof useGetContactsLazyQuery>;
export type GetContactsQueryResult = Apollo.QueryResult<GetContactsQuery, GetContactsQueryVariables>;