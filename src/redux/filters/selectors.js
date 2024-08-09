import { selectContacts } from "../contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;
export const selectPhoneFilter = (state) => state.filters.number;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts, textFilter, phoneFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(textFilter.toLowerCase()) &&
        contact.number.includes(phoneFilter)
    );
  }
);
