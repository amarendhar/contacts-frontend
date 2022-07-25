import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Contact,
  useGetContactsQuery,
  useRemoveContactMutation,
} from "generated/graphql";
import getDays from "utils/getDays";

const useContacts = () => {
  const { loading, error, data } = useGetContactsQuery({
    fetchPolicy: "network-only",
  });
  const [removeContactMutation] = useRemoveContactMutation();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedContactToView, setSelectedContactToView] =
    useState<null | Contact>();
  const [selectedContactToRemove, setSelectedContactToRemove] =
    useState<null | Contact>();

  useEffect(() => {
    if (data?.getContacts) {
      setContacts([...data?.getContacts]);
    }
  }, [data]);

  const countries = useMemo(() => {
    return contacts.reduce((acc, { location: { country } }) => {
      if (!acc.includes(country)) {
        acc.push(country);
      }

      return acc;
    }, [] as string[]);
  }, [contacts]);

  useEffect(() => {
    if (filter === "A-Z") {
      setContacts((_contacts) => [
        ..._contacts.sort((a, b) => {
          if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
            return -1;
          } else if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
            return 1;
          }

          return 0;
        }),
      ]);
    } else if (filter === "Z-A") {
      setContacts((_contacts) => [
        ..._contacts.sort((a, b) => {
          if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
            return 1;
          } else if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
            return -1;
          }

          return 0;
        }),
      ]);
    } else if (filter === "DOB (↓)") {
      setContacts((_contacts) => [
        ..._contacts.sort((a, b) => {
          if (getDays(a.dob) < getDays(b.dob)) {
            return 1;
          } else if (getDays(a.dob) > getDays(b.dob)) {
            return -1;
          }

          return 0;
        }),
      ]);
    } else if (filter === "DOB (↑)") {
      setContacts((_contacts) => [
        ..._contacts.sort((a, b) => {
          if (getDays(a.dob) < getDays(b.dob)) {
            return -1;
          } else if (getDays(a.dob) > getDays(b.dob)) {
            return 1;
          }

          return 0;
        }),
      ]);
    } else if (filter === "Filter (none)" && data?.getContacts) {
      setContacts((_contacts) => {
        const contactIds = _contacts.map((contact) => contact.id);

        return [
          ...data?.getContacts.filter((contact) =>
            contactIds.includes(contact.id)
          ),
        ];
      });
    }
  }, [filter, setContacts, data]);

  const onCloseModal = useCallback(() => {
    setSelectedContactToView(null);
    setSelectedContactToRemove(null);
  }, []);

  const handleViewMoreContact = useCallback(
    (contactId: string) => {
      setSelectedContactToView(
        contacts.find((contact) => contact.id === contactId)
      );
    },
    [setSelectedContactToView, contacts]
  );

  const onRemoveContact = useCallback(
    (contactId: string) => {
      setSelectedContactToRemove(
        contacts.find((contact) => contact.id === contactId)
      );
    },
    [setSelectedContactToRemove, contacts]
  );

  const handleRemoveContact = useCallback(
    async (contactId: string) => {
      const { data } = await removeContactMutation({
        variables: {
          contactId,
        },
      });

      if (data?.removeContact?.status === "success") {
        setContacts((_contacts) =>
          _contacts.filter((contact) => contact.id !== contactId)
        );
        onCloseModal()
      }
    },
    [removeContactMutation, setContacts, onCloseModal]
  );

  return {
    loading,
    error,
    contacts,
    countries,
    selectedContactToView,
    selectedContactToRemove,
    filter,
    setFilter,
    handleViewMoreContact,
    onRemoveContact,
    handleRemoveContact,
    onCloseModal,
  };
};

export default useContacts;
