import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import * as SC from './Contacts.styled';
import Box from '@mui/material/Box';

const Contacts = () => {
  const { data, error, isFetching } = useFetchContactsQuery(
    { count: 5 },

    { refetchOnMountOrArgChange: true }
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        // flexDirection: 'column',
        // alignItems: 'center',
        gap: '10px',
        margin: '0 auto',
        // maxWidth: '400px',
        p: '0',
      }}
    >
      {/* <h2>Phonebook</h2> */}

      <ContactForm />

      <Filter />

      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <SC.ContactsTitle>Contacts</SC.ContactsTitle>
        {data && <ContactList />}
        {isFetching && !error && <Loader />}
      </Box>

      <Toaster position="top-right" reverseOrder={true} />
    </Box>
  );
};

export default Contacts;
