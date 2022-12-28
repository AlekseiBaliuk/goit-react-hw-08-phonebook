import React, { useContext } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import * as SC from './ContactListItem.styled';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';
import TransitionsModal from 'components/Modal/Modal';
import { ModalContext } from 'context/ModalContext';
import Avatar from 'react-avatar';

export const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const { open, handleOpen, handleClose } = useContext(ModalContext);

  return (
    <SC.ContactListLi>
      <Avatar name={name} size="35px" round={true} />
      <Box sx={{ textAlign: 'start', marginLeft: '5px' }}>
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
          marginLeft: 'auto',
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
