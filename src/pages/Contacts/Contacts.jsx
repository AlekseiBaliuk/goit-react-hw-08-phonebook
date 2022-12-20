import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import * as SC from './Contacts.styled';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ContactModal } from '../../components/ContactModal/ContactModal';
import { useState } from 'react';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


// import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Contacts = () => {
  const { data, error, isFetching } = useFetchContactsQuery(
    { count: 5 },
    { refetchOnMountOrArgChange: true }
  );

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(showModal => !showModal);

  const matches = useMediaQuery('(max-width:480px)');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: `${matches && 'column'}`,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          minWidth: '400px',
          padding: '12px',
        }}
      >
        {matches && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <SC.ContactsTitle>Contacts</SC.ContactsTitle>

            <Filter />

            <Button onClick={toggleModal}>
              <AddCircleOutlineIcon />
            </Button>
            {showModal && (
              <ContactModal toggleModal={toggleModal}>
                <ContactForm toggleModal={toggleModal} />
                <Button
                  sx={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    p: '0',
                    minWidth: '0',
                  }}
                  onClick={toggleModal}
                >
                  <CloseIcon fontSize="small" />
                </Button>
              </ContactModal>
            )}
          </Box>
        )}

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
        {!matches && <ContactForm />}

        {!matches && <Filter />}
      </Box>

      <Toaster position="top-right" reverseOrder={true} />
    </Box>
  );
};

export default Contacts;
