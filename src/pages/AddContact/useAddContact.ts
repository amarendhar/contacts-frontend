import { useState, useMemo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useAddContactMutation } from "generated/graphql";

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

const useAddContact = () => {
  const history = useHistory();
  const [addContactMutation] = useAddContactMutation();

  const [gender, setGender] = useState("male");

  const [title, setTitle] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [dob, setDob] = useState("");

  const [phone, setPhone] = useState("");

  const fields = useMemo(() => {
    return [
      {
        type: "select",
        name: "gender",
        label: "Gender",
        options: ["male", "female"],
        value: gender,
        setState: setGender,
      },
      //
      {
        type: "select",
        name: "title",
        label: "Title",
        options: ["Mr", "Ms", "Mrs"],
        value: title,
        setState: setTitle,
      },
      {
        type: "text",
        name: "first",
        label: "First Name",
        value: firstName,
        setState: setFirstName,
      },
      {
        type: "text",
        name: "last",
        label: "Last Name",
        value: lastName,
        setState: setLastName,
      },
      //
      {
        type: "text",
        name: "email",
        label: "Email",
        value: email,
        setState: setEmail,
      },
      //
      {
        type: "text",
        name: "street",
        label: "Street",
        value: street,
        setState: setStreet,
      },
      {
        type: "text",
        name: "city",
        label: "City",
        value: city,
        setState: setCity,
      },
      {
        type: "text",
        name: "state",
        label: "State",
        value: state,
        setState: setState,
      },
      {
        type: "text",
        name: "country",
        label: "Country",
        value: country,
        setState: setCountry,
      },
      //
      {
        type: "date",
        name: "dob",
        label: "Date of Birth",
        value: dob,
        setState: setDob,
      },
      //
      {
        type: "number",
        name: "phone",
        label: "Phone (+971)",
        value: phone,
        setState: setPhone,
        maxLength: 10,
      },
    ];
  }, [
    gender,
    setGender,
    //
    title,
    setTitle,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    //
    email,
    setEmail,
    //
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    country,
    setCountry,
    //
    dob,
    setDob,
    //
    phone,
    setPhone,
  ]);

  const onSubmit = useCallback(async () => {
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

    if (data?.addContact?.status === "success") {
      history.push("/");
    }
  }, [history, addContactMutation, fields]);

  return {
    fields,
    onSubmit,
  };
};

export default useAddContact;
