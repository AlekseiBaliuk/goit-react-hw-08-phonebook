import React from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import * as SC from './ContactList.styled';

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const visibleContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  return (
    <>
      {contacts?.length === 0 ? (
        <SC.TextInfo>No contacts</SC.TextInfo>
      ) : (
        <SC.ContactListUl>
          <SC.TextInfo>Total contacts: {visibleContacts.length}</SC.TextInfo>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </SC.ContactListUl>
      )}
    </>
  );
};
