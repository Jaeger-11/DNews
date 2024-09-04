"use client";

import { auth } from "@/database/config";
import { content } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState:content = {
    category: "latest news",
    param: ""
}

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setCategory: (state, {payload}) => {
            state.category = payload.category;
        },
        setSearch: (state, {payload}) => {
            state.param = payload.text;
        }
    }
})

export const { setCategory, setSearch } = contentSlice.actions;
export default contentSlice.reducer;