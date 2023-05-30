import React from 'react';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return getFilterContacts().map(({ name, number, id }) => (
    <ContactItem key={id} id={id} name={name} number={number} />
  ));
};

export default ContactList;
