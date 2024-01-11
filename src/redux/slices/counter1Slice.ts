import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counter1Slice = createSlice({
    name: 'counter1',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counter1Slice.actions;
export default counter1Slice.reducer;
