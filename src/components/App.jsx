import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default function App() {

  return (
    <div
      style={{
        marginLeft: 20,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
