import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IContents, TDepartments } from "../slices/contents";
import { URL } from "../constants";

const getContents = createAsyncThunk<{ data: IContents, key: TDepartments }, TDepartments>(
    "contents/info",
    async (department, { rejectWithValue }) => {
        const response: Response = await fetch(`${URL}/${department}`);

        if (response.ok) {
            rejectWithValue("Ошибка при запросе!");
        }

        return { data: await response.json(), key: department };
    }
)

export {
    getContents
}