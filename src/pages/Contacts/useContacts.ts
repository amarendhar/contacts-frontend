import { useCallback, useState } from "react";
import {
  Contact,
  useGetContactsQuery,
  useRemoveContactMutation,
} from "generated/graphql";

const useContacts = () => {
  const {
    loading,
    error,
    data: { getContacts: contacts = [] } = {},
    refetch: refetchContacts,
  } = useGetContactsQuery({
    fetchPolicy: "network-only",
  });
  const [removeContactMutation] = useRemoveContactMutation();
  const [selectedContact, setSelectedContact] = useState<null | Contact>();

  const onSelect = useCallback(
    (contactId: string) => {
      setSelectedContact(contacts.find((contact) => contact.id === contactId));
    },
    [setSelectedContact, contacts]
  );

  const onRemove = useCallback(
    async (contactId: string) => {
      const { data } = await removeContactMutation({
        variables: {
          contactId,
        },
      });

      if (data?.removeContact?.status === "success") {
        refetchContacts();
      }
    },
    [removeContactMutation, refetchContacts]
  );

  const onCloseModal = useCallback(() => {
    setSelectedContact(null);
  }, []);

  return {
    loading,
    error,
    contacts,
    onSelect,
    onRemove,
    selectedContact,
    onCloseModal,
  };
};

export default useContacts;
