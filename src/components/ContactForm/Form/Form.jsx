import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import * as SC from './Form.styled';

export const Form = ({ name = '', number = '', btnText, onSubmit }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);

  const formSubmitHandler = e => {
    e.preventDefault();
    const form = e.target;

    const contactToAdd = {
      name: form.elements.name.value,
      number: form.elements.number.value,
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
        // margin: '0 auto',
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
    // <SC.Form onSubmit={formSubmitHandler}>
    //   <SC.Label>
    //     Name
    //     <input
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //       value={contactName}
    //       onChange={handleChange}
    //     />
    //   </SC.Label>
    //   <SC.Label>
    //     Number
    //     <input
    //       type="tel"
    //       name="number"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //       value={contactNumber}
    //       onChange={handleChange}
    //     />
    //   </SC.Label>
    //   <SC.Button type="submit">{btnText}</SC.Button>
    // </SC.Form>
  );
};
