import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../components/contacts.json';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { initialContacts: initialContacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.initialContacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.initialContacts.findIndex(
        contact => contact.id === action.payload
      );
      state.initialContacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
