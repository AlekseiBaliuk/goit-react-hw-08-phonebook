import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import * as SC from './Contacts.styled';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TransitionsModal from 'components/Modal/Modal';

const Contacts = () => {
  const { data, error, isFetching } = useFetchContactsQuery(
    { count: 5 },
    { refetchOnMountOrArgChange: true }
  );

  const isMobile = useMediaQuery('(max-width:480px)');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: `${isMobile && 'column'}`,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          // minWidth: '400px',
          padding: '12px',
        }}
      >
        {isMobile && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <SC.ContactsTitle>Contacts</SC.ContactsTitle>

            <Filter />

            <Button onClick={handleOpen}>
              <AddCircleOutlineIcon />
            </Button>

            {/* <Button onClick={toggleModal}>
              <AddCircleOutlineIcon />
            </Button> */}
            {/* {showModal && (
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
            )} */}
            {open && (
              <TransitionsModal handleClose={handleClose} open={open}>
                <ContactForm handleClose={handleClose} />
                <Button
                  sx={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    p: '0',
                    minWidth: '0',
                  }}
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </Button>
              </TransitionsModal>
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
          minWidth: `${!isMobile && '400px'}`,
        }}
      >
        {!isMobile && <ContactForm handleClose={handleClose} />}

        {!isMobile && <Filter />}
      </Box>

      <Toaster position="top-right" reverseOrder={true} />
    </Box>
  );
};

export default Contacts;
