import {
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'redux/contactsSlice';
import { Form } from 'components/ContactForm/Form/Form';
import { Modal, Overlay } from './EditContactModal.slyled';
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const EditContactModal = ({ id, toggleModal }) => {
  const { data: contacts } = useFetchContactsQuery();
  const [updateContact] = useUpdateContactMutation();

  const contactById = contacts.filter(contact => contact.id === id);
  // console.log('contactById', contactById[0].name);

  const findeMatch = contacts.find(
    contact => contact.name.toLowerCase() === contactById[0].name.toLowerCase()
  );
  // console.log(findeMatch.name);

  const handleUpdateContact = async contactToEdit => {
    // if (findeMatch.name === contactById[0].name) {
    //   console.log('yes')
    //   console.log('findeMatch', findeMatch);
    //   toggleModal();
    //   return alert(`${contactToEdit.name} is already in contacts.`);
    // }

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
            // gap: '10px',
            // margin: '0 auto',
            width: '360px',
            // width: '100%',
            // p: '10px',
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
            // type="button"
            // variant="outlined"
            // size="small"
            onClick={toggleModal}
          >
            <CloseIcon
              fontSize="small"
              // sx={{ width: '40', height: '40' }}
              // sx={{ fontSize: 15 }}
            />
          </Button>
        </Box>
      </Modal>
    </Overlay>
  );
};
