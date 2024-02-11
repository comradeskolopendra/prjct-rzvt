import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    avatar: string;
    username: string;
    id: number | string | null;
    name: string;
    email: string;
    role: "Authenticated" | "Admin" | null;
}

interface IMainInitialState {
    user: IUser
}

const initialState: IMainInitialState = {
    user: {
        avatar: "",
        username: "",
        id: null,
        name: "",
        email: "",
        role: null
    }
}

const userSlice = createSlice({
    name: "main",
    initialState,
    selectors: {
        getStateUser: (store) => store.user
    },
    reducers: {
        setUserInfo(state, action: PayloadAction<IUser>) {
            state.user = action.payload;

            return state;
        },

        removeUserInfo(state) {
            state.user = initialState.user;

            return state;
        }
    }
})

export const { setUserInfo, removeUserInfo } = userSlice.actions;
export const { getStateUser } = userSlice.selectors;
export default userSlice.reducer;