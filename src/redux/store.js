import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filterSlice } from "./filtersSlice";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filterSlice,
  },
});

export default store;
