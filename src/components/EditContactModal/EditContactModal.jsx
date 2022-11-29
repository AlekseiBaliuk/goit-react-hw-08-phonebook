import {
  useFetchContactsByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactsSlice';
import { Form } from 'components/ContactForm/Form/Form';
import { Modal, Overlay } from './EditContactModal.slyled';

export const EditContactModal = ({ id, toggleModal }) => {
  const { data: contact } = useFetchContactsByIdQuery(id);
  const [updateContact] = useUpdateContactMutation();

  const handleUpdateContact = async contactToEdit => {
    if (contact.name.toLowerCase() === contactToEdit.name.toLowerCase()) {
      return alert(`${contactToEdit.name} is already in contacts.`);
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
        {contact && (
          <Form
            name={contact.name}
            phone={contact.phone}
            onSubmit={handleUpdateContact}
            btnText="Save"
          />
        )}

        <button type="button" onClick={toggleModal}>
          Close
        </button>
      </Modal>
    </Overlay>
  );
};
