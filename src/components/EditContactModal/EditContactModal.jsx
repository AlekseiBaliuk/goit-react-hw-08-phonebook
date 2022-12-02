import {
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contactsSlice';
import { Form } from 'components/ContactForm/Form/Form';
import { Modal, Overlay } from './EditContactModal.slyled';
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import toast, { Toaster } from 'react-hot-toast';

export const EditContactModal = ({ id, toggleModal }) => {
  const { data: contacts } = useFetchContactsQuery();
  const [updateContact] = useUpdateContactMutation();

  const contactById = contacts.filter(contact => contact.id === id);

  const findeMatch = contacts.map(contact => contact.name.toLowerCase());

  const handleUpdateContact = async contactToEdit => {
    if (findeMatch.includes(contactToEdit.name.toLowerCase())) {
      toggleModal();
      toast.error(`${contactToEdit.name} is already in contacts.`);
      return;
    }

    try {
      await updateContact({ id, ...contactToEdit });
    } catch (e) {
      console.log(e);
    }
    toggleModal();
  };

  return (
    <Overlay>
      <Modal>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '360px',
          }}
        >
          {contacts && (
            <Form
              name={contactById[0].name}
              number={contactById[0].number}
              onSubmit={handleUpdateContact}
              btnText="Save"
            />
          )}

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
        </Box>
      </Modal>
      <Toaster position="top-right" reverseOrder={true} />
    </Overlay>
  );
};
