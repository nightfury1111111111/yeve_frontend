import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TokenInfo {
  name: string;
  logoURI: string;
  address: string;
  depositAmount: number;
  decimals: number;
}

// export interface TokenPairState {
//   tokenA: { name: string; image: string; addresss: string };
//   tokenB: { name: string; image: string; addresss: string };
// }

const initialState = {
  tokenA: { name: '', logoURI: '', address: '', depositAmount: 0, decimals: 0 },
  tokenB: { name: '', logoURI: '', address: '', depositAmount: 0, decimals: 0 },
};

const tokenPairSlice = createSlice({
  name: 'tokenPair',
  initialState,
  reducers: {
    setTokenA: (state, action: PayloadAction<TokenInfo>) => {
      state.tokenA = action.payload;
    },
    setTokenB: (state, action: PayloadAction<TokenInfo>) => {
      state.tokenB = action.payload;
    },
    swapToken: (state) => {
      const tmpTokenA = state.tokenA;
      const tmpTokenB = state.tokenB;
      state.tokenA = tmpTokenB;
      state.tokenB = tmpTokenA;
    },
    updateTokenADepositAmount: (state, action: PayloadAction<number>) => {
      state.tokenA.depositAmount = action.payload;
    },
    updateTokenBDepositAmount: (state, action: PayloadAction<number>) => {
      state.tokenB.depositAmount = action.payload;
    },
  },
});

export const {
  setTokenA,
  setTokenB,
  swapToken,
  updateTokenADepositAmount,
  updateTokenBDepositAmount,
} = tokenPairSlice.actions;
export default tokenPairSlice.reducer;
