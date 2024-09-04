"use client";

import { auth } from "@/database/config";
import { user } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState:user = {
    username: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || "",
    uid: auth.currentUser?.uid || ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,{payload}) => {
            state.email = payload.email;
            state.username = payload.username;
            state.uid = payload.uid;
        },
        logOut: (state) => {
            state.username = '';
            state.uid = '';
            state.email = '';
        }
    }
})

export const {setUser, logOut} = userSlice.actions

export default userSlice.reducer;