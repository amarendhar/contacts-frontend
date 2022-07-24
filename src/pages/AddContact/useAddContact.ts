import { useState, useMemo } from "react";

const useAddContact = () => {
  const [gender, setGender] = useState("male");

  const [title, setTitle] = useState("mr");
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
        options: ['male', 'female'],
        value: gender,
        setState: setGender,
      },
      //
      {
        type: "select",
        name: "title",
        label: "Title",
        options: ['mr', 'ms', 'mrs'],
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

  return {
    fields
  }
};

export default useAddContact;
