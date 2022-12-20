import { useState } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';

export const Form = ({ name = '', number = '', btnText, onSubmit }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);

  const formSubmitHandler = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (name === '' || number === '') {
      return toast.error('Fill all fields');
    }

    const contactToAdd = {
      name,
      number,
    };

    onSubmit(contactToAdd);

    setContactName('');
    setContactNumber('');
    form.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;

      case 'number':
        setContactNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '360px',
        width: '100%',
        p: '10px',
      }}
      autoComplete="off"
      onSubmit={formSubmitHandler}
    >
      <TextField
        label="Name"
        name="name"
        type="name"
        size="small"
        onChange={handleChange}
        value={contactName}
        sx={{ width: '100%' }}
      />
      <TextField
        label="Number"
        name="number"
        type="phone"
        size="small"
        onChange={handleChange}
        value={contactNumber}
        sx={{ width: '100%' }}
      />

      <Button
        sx={{ width: '120px', mx: 'auto' }}
        type="submit"
        variant="outlined"
        size="small"
      >
        {btnText}
      </Button>
    </Box>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
