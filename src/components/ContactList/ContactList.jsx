import React from 'react';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
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
      {!contacts ? (
        <SC.Info>No contacts</SC.Info>
      ) : (
        <SC.ContactListUl>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
        </SC.ContactListUl>
      )}
    </>
  );
};
