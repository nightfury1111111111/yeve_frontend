import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counter2Slice = createSlice({
    name: 'counter2',
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

export const { increment, decrement } = counter2Slice.actions;
export default counter2Slice.reducer;
