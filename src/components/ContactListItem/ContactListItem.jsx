import React, { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import * as SC from './ContactListItem.styled';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export const ContactListItem = ({ name, number, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const toggleModal = () => setShowModal(showModal => !showModal);

  return (
    <SC.ContactListLi>
      <Box sx={{ textAlign: 'start' }}>
        <p>{name}</p>
        <p>
          <PhoneAndroidIcon size="small" /> {number}
        </p>
      </Box>
      {/* <p>
        {name}: {number}
      </p> */}
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
        }}
      >
        {/* <Button
          type="button"
          id={id}
          onClick={toggleModal}
          disabled={isLoading}
          variant="outlined"
          size="small"
        >
          Edit
        </Button> */}
        {/* <Button
          type="button"
          id={id}
          onClick={() => deleteContact(id)}
          disabled={isLoading}
          // variant="outlined"
          // size="small"
        > */}
        {/* </Button> */}
        <IconButton
          aria-label="edit"
          size="small"
          onClick={toggleModal}
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
      {showModal && <EditContactModal id={id} toggleModal={toggleModal} />}
    </SC.ContactListLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
