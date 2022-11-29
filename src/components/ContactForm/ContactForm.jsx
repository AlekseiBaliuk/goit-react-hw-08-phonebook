import React from 'react';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { Form } from './Form/Form';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const formSubmitHandler = contactToAdd => {

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === contactToAdd.name.toLowerCase()
      )
    ) {
      return alert(`${contactToAdd.name} is already in contacts.`);
    }

    addContact(contactToAdd);
    toast.success('You add new contact.');

  };

  return <Form onSubmit={formSubmitHandler} btnText="Add contact" />;
};
