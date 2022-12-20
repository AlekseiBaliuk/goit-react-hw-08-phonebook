import { useEffect } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { Modal, Overlay } from './ContactModal.slyled';
import { Box } from '@mui/material';
import { Toaster } from 'react-hot-toast';

export const ContactModal = ({ children, toggleModal }) => {
  const { data: contacts } = useFetchContactsQuery();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '360px',
          }}
        >
          {contacts && children}
        </Box>
      </Modal>
      <Toaster position="top-right" reverseOrder={true} />
    </Overlay>
  );
};
