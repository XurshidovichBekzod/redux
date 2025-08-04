import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
};

const userSlice = createSlice({
    name: "users",
    initialState: getFromLocalStorage(),
    reducers: {
        addUsers: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state));
        },
        deleteUser: (state, action) => {
            const updated = state.filter((user) => user.id !== action.payload);
            localStorage.setItem("users", JSON.stringify(updated));
            return updated;
        },
    },
});

export const { addUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
