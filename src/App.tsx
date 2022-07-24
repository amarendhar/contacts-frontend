import React from "react";
import { useGetContactsQuery } from "generated/graphql";

function App() {
  const {
    loading,
    error,
    data: { getContacts: contacts = [] } = {},
  } = useGetContactsQuery();

  return (
    <div>
      <header>
        {loading && <div>Loading...</div>}

        {contacts?.length > 0 ? (
          contacts.map((contact) => {
            return (
              <div key={contact.id}>
                <div>{contact?.gender}</div>
              </div>
            );
          })
        ) : (
          <div>No contacts found from the list</div>
        )}
      </header>
    </div>
  );
}

export default App;
