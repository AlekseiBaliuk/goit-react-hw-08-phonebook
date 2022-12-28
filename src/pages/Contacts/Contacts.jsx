import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import * as SC from './Contacts.styled';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext } from 'react';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TransitionsModal from 'components/Modal/Modal';
import { ModalContext } from 'context/ModalContext';

const Contacts = () => {
  const { data, error, isFetching } = useFetchContactsQuery(
    { count: 5 },
    { refetchOnMountOrArgChange: true }
  );

  const { open, handleOpen, handleClose } = useContext(ModalContext);

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const isMobile = useMediaQuery('(max-width:480px)');
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: `${isMobile && 'column'}`,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
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

            {open && (
              <TransitionsModal open={open} handleClose={handleClose}>
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

          minWidth: `${isDesktop && '400px'}`,
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
