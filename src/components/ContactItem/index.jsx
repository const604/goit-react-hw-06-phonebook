import React from 'react';
import { Item, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
