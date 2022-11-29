import { useState } from 'react';
import { PhonebookForm, PhonebookLabel, PhonebookButton } from './Form.styled';

export const Form = ({ name = '', phone = '', btnText, onSubmit }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(phone);

  const formSubmitHandler = e => {
    e.preventDefault();
    const form = e.target;

    const contactToAdd = {
      name: form.elements.name.value,
      phone: form.elements.phone.value,
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

      case 'phone':
        setContactNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <PhonebookForm onSubmit={formSubmitHandler}>
      <PhonebookLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contactName}
          onChange={handleChange}
        />
      </PhonebookLabel>
      <PhonebookLabel>
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contactNumber}
          onChange={handleChange}
        />
      </PhonebookLabel>
      <PhonebookButton type="submit">{btnText}</PhonebookButton>
    </PhonebookForm>
  );
};
