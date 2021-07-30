import { createSelector } from "@reduxjs/toolkit";

export const getIsLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;
export const getFilter = (state) => state.contacts.filter;
export const getAllContacts = (state) => state.contacts.items;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);