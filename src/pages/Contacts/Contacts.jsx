import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import * as SC from './Contacts.styled';

const Contacts = () => {
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

export default Contacts;
