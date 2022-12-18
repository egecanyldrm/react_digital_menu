import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    locale: 'tr',
    data: {},
    locales: [],
    general: {},
    localedetection: null,
}

export const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setStore: (state, action) => {
            const { data, general, langs, localedetection } = action.payload;
            state.data = data;
            state.general = general;
            state.locales = langs;
            state.localedetection = localedetection;

        },
        changeLocale: (state, action) => {
            state.locale = action.payload
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setStore, changeLocale } = data.actions

export default data.reducer