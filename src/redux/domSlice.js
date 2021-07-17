import { createSlice} from "@reduxjs/toolkit"

export const domSlice = createSlice({
    name: "Dominios",   
    initialState: {
        Dominios: null,
    },
    reducers: {
        Dominios: (state, action) => {
            state.Dominios = action.payload;
        }
    },
});

export function getState(state) {
    return state
}

export const { Dominios } = domSlice.actions;

export const selectDom = (state) => state.Dominios.Dominios;

export default domSlice.reducer;