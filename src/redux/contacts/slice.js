import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const pending = (state) => {
  state.loading = true;
  state.error = false;
};

const rejected = (state) => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success("Contact added successfully");
        state.loading = false;
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (user) => user.id !== action.payload.id
        );
        toast.success("Contact successfully deleted");
        state.loading = false;
      })
      .addCase(deleteContact.rejected, rejected)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export const contactsSlice = slice.reducer;
