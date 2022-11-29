import React, { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import * as SC from './ContactListItem.styled';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';

export const ContactListItem = ({ name, phone, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const toggleModal = () => setShowModal(showModal => !showModal);

  return (
    <SC.ContactListLi>
      <p>
        {name}: {phone}
      </p>
      <SC.BtnWrapper>
        <SC.ContactListButton
          type="button"
          id={id}
          onClick={toggleModal}
          disabled={isLoading}
        >
          Edit
        </SC.ContactListButton>
        <SC.ContactListButton
          type="button"
          id={id}
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          Delete
        </SC.ContactListButton>
      </SC.BtnWrapper>
      {showModal && <EditContactModal id={id} toggleModal={toggleModal} />}
    </SC.ContactListLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
