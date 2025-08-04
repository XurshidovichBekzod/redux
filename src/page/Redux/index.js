import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./feature/UserSlice";

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export default store;
