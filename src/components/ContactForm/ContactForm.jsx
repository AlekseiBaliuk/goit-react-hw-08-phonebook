import React from 'react';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsSlice';
import { Form } from './Form/Form';
import toast from 'react-hot-toast';

export const ContactForm = ({ handleClose }) => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const formSubmitHandler = contactToAdd => {
    const nameMatches = contacts.find(
      contact => contact.name.toLowerCase() === contactToAdd.name.toLowerCase()
    );

    if (nameMatches) {
      return alert(`${contactToAdd.name} is already in contacts.`);
    }

    addContact(contactToAdd);
    toast.success('You add new contact.');

    handleClose();
  };

  return <Form onSubmit={formSubmitHandler} btnText="Add contact" />;
};
