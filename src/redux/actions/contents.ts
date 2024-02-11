import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }: { email: string; password: string }) => {
        // const response = 
    }
)

const registerUser = createAsyncThunk(
    "auth/register",
    async ({ email, username, password }: { email: string, username: string; password: string }) => {
        // const response 
    }
)