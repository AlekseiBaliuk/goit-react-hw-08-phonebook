import React, { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import * as SC from './ContactListItem.styled';
// import { ContactModal } from 'components/ContactModal/ContactModal';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';
import TransitionsModal from 'components/Modal/Modal';

export const ContactListItem = ({ name, number, id }) => {
  // const [showModal, setShowModal] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  // const toggleModal = () => setShowModal(showModal => !showModal);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SC.ContactListLi>
      <Box sx={{ textAlign: 'start' }}>
        <SC.ContactListText>
          <PersonIcon sx={{ width: '20px', height: '20px' }} />
          {name}
        </SC.ContactListText>
        <SC.ContactListText>
          <PhoneAndroidIcon sx={{ width: '20px', height: '20px' }} /> {number}
        </SC.ContactListText>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '5px',
        }}
      >
        <IconButton
          aria-label="edit"
          size="small"
          onClick={handleOpen}
          disabled={isLoading}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      {open && (
        <TransitionsModal open={open} handleClose={handleClose}>
          <EditContactForm id={id} handleClose={handleClose} />
        </TransitionsModal>
      )}
    </SC.ContactListLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
