import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getContents } from "../actions/contents";

export type TDepartments = "programming" | "hr" | "design" | "analyze";

export type IContents = {
    [key in TDepartments]?: {
        posts: IPost[],
        usersInside: IUser[];
    }
}

interface IPost {
    id: string;
    title: string;
    contents: string[];
    views: number;
    author: string;
    avatar: string;
}

interface IUser {
    id: string | number;
    name: string;
    age: number;
    department: TDepartments[];
}

const initialState: IContents = {
    hr: {
        posts: [],
        usersInside: []
    },
    programming: {
        posts: [],
        usersInside: []
    },
    design: {
        posts: [],
        usersInside: []
    },
    analyze: {
        posts: [],
        usersInside: []
    }
}

const contentsSlice = createSlice({
    name: "contents",
    initialState,
    reducers: {},
    selectors: {},
    extraReducers: builder => {
        builder.addCase(
            getContents.fulfilled,
            (state, action) => {
                const { data, key }: { data: IContents, key: TDepartments } = action.payload;

                state = {
                    ...state,
                    [key]: data
                }

                return state;
            }
        )
    }
})

export default contentsSlice.reducer;