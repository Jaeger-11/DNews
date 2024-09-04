"use client";

import { auth } from "@/database/config";
import { content } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState:content = {
    category: "latest news",
    search: ""
}

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setCategory: (state, {payload}) => {
            state.category = payload.category;
        },
        setSearch: (state, {payload}) => {
            state.search = payload.search;
        }
    }
})

export const { setCategory, setSearch } = contentSlice.actions;
export default contentSlice.reducer;