import { useState } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
// import * as yup from 'yup';
import { Button } from '@mui/material';
// import FormControl from '@mui/material/FormControl';
import toast from 'react-hot-toast';
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

export const Form = ({ name = '', number = '', btnText, onSubmit }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  // const [er, setEr] = useState(null);
  // console.log(er);

  const formSubmitHandler = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    // let schema = yup.object({
    //   name: yup.string().required(),
    //   number: yup.number().required().positive().integer(),
    // });

    if (name === '' || number === '') {
      return toast.error('Fill all fields');
    }

    const contactToAdd = {
      name,
      number,
    };

    // schema
    //   .validate({
    //     contactToAdd,
    //   })
    //   .then(() => onSubmit(contactToAdd))
    //   .catch(e => setEr(e.name));
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
      required={true}
      error="true"
      validate="true"
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
        // error={er && Boolean(er)}
        // helperText={er && 'Invalid name or number'}
        required
      />
      <TextField
        label="Number"
        name="number"
        type="phone"
        size="small"
        onChange={handleChange}
        value={contactNumber}
        sx={{ width: '100%' }}
        // error={er && Boolean(er)}
        // helperText={er && 'Invalid name or number'}
        required
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

    // <ValidatorForm
    //   // sx={{
    //   //   display: 'flex',
    //   //   flexDirection: 'column',
    //   //   gap: '10px',
    //   //   maxWidth: '360px',
    //   //   width: '100%',
    //   //   p: '10px',
    //   // }}
    //   autoComplete="off"
    //   onSubmit={formSubmitHandler}
    //   onError={errors => console.log(errors)}
    //   // ref="form"
    // >
    //   <TextValidator
    //     id="name"
    //     label="Name"
    //     name="name"
    //     type="name"
    //     size="small"
    //     onChange={handleChange}
    //     value={contactName}
    //     sx={{ width: '100%' }}
    //     validators={['required']}
    //     errorMessages={['This field is required']}
    //     required
    //   />
    //   <TextValidator
    //     id="number"
    //     label="Number"
    //     name="number"
    //     type="phone"
    //     size="small"
    //     onChange={handleChange}
    //     value={contactNumber}
    //     sx={{ width: '100%' }}
    //     validators={['required']}
    //     errorMessages={['This field is required']}
    //     required
    //   />

    //   <Button
    //     sx={{ width: '120px', mx: 'auto' }}
    //     type="submit"
    //     variant="outlined"
    //     size="small"
    //   >
    //     {btnText}
    //   </Button>
    // </ValidatorForm>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
