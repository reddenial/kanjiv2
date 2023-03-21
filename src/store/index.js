import { configureStore } from "@reduxjs/toolkit";
import { kanjiReducer } from "./kanji/kanji-slice";

export const store = configureStore({
    reducer: {
        KANJI : kanjiReducer
    }
});