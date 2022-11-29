import React from 'react';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';

import * as SC from './App.styled';

export const App = () => {
  const { data, error, isFetching } = useFetchContactsQuery();

  return (
    <SC.Container>
      <SC.PhonebookTitle>Phonebook</SC.PhonebookTitle>
      <ContactForm />
      <SC.ContactsTitle>Contacts</SC.ContactsTitle>
      <Filter />
      {data && <ContactList />}
      {isFetching && !error && <Loader />}
      <Toaster position="top-right" reverseOrder={true} />
    </SC.Container>
  );
};
