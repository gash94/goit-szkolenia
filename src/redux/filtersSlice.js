import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
    status: statusFilters.all,
};
const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        },
    },
});
// Eksportujemy generatory akcji i reducer
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
