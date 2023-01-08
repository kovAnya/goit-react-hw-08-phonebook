import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectErrors = state => state.error;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
