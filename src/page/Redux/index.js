import { configureStore } from "@reduxjs/toolkit";
import users from "./feature/UserSlice";

const store = configureStore({
  reducer: {
    users,
  }
});

export default store;
