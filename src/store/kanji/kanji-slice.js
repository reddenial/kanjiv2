import { createSlice } from "@reduxjs/toolkit";

export const kanjiSlice = createSlice({
    name:"kanjiSlice",
    initialState:{
        kanjiList:[],
        searchInput:"",
        filterType: "word"
    },
    reducers:{
        setKanjiList: (currentSlice, action) => {
            currentSlice.kanjiList = action.payload
        },
        setSearchInput: (currentSlice, action) => {
            currentSlice.searchInput = action.payload
        },
        setFilterType: (currentSlice, action) => {
            currentSlice.filterType = action.payload
        }
    }
});

export const kanjiReducer = kanjiSlice.reducer;

export const { setKanjiList, setSearchInput, setFilterType } = kanjiSlice.actions;