import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    username: string;
    id: string | number | null;
}

interface IMainInitialState {
    info: {
        user: IUser;
        jwt: string;
    }
}

const initialState: IMainInitialState = {
    info: {
        jwt: "",
        user: {
            id: null,
            username: "",
        }
    }
}

const userSlice = createSlice({
    name: "main",
    initialState,
    selectors: {
        getStateUser: (store) => store.info.user,
        getStateJWT: (store) => store.info.jwt
    },
    reducers: {
        setUserInfo(state, action: PayloadAction<{ user: IUser, jwt: string }>) {
            state.info = action.payload;

            return state;
        },

        removeUserInfo(state) {
            state.info = initialState.info;

            return state;
        }
    }
})

export const { setUserInfo, removeUserInfo } = userSlice.actions;
export const { getStateUser } = userSlice.selectors;
export default userSlice.reducer;