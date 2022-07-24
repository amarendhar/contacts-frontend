import { useCallback } from "react";
import {
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

  return {
    loading,
    error,
    contacts,
    onRemove,
  };
};

export default useContacts;
