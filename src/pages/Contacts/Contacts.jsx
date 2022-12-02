import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
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
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          minWidth: '400px',
        }}
      >
        <SC.ContactsTitle>Contacts</SC.ContactsTitle>
        {data && <ContactList />}
        {isFetching && !error && <Loader />}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: '40px',
          textAlign: 'center',
          minWidth: '400px',
        }}
      >
        <ContactForm />

        <Filter />
      </Box>

      <Toaster position="top-right" reverseOrder={true} />
    </Box>
  );
};

export default Contacts;
