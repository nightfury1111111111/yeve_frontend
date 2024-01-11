import { configureStore } from '@reduxjs/toolkit';
import counter1Reducer from './slices/counter1Slice';
import counter2Reducer from './slices/counter2Slice';

export default configureStore({
    reducer: {
        counter1: counter1Reducer,
        counter2: counter2Reducer,
    },
});