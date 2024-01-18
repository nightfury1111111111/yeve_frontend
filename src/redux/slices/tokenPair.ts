import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TokenInfo {
  name: string;
  logoURI: string;
  address: string;
  depositAmount: number;
  decimals: number;
  fetchInfo: boolean;
}

// export interface TokenPairState {
//   tokenA: { name: string; image: string; addresss: string };
//   tokenB: { name: string; image: string; addresss: string };
// }

const initialState = {
  tokenA: {
    name: '',
    logoURI: '',
    address: '',
    depositAmount: 0,
    decimals: 0,
    fetchInfo: false,
  },
  tokenB: {
    name: '',
    logoURI: '',
    address: '',
    depositAmount: 0,
    decimals: 0,
    fetchInfo: false,
  },
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
      state.tokenA.fetchInfo = false;
      state.tokenB.fetchInfo = false;
    },
    updateTokenADepositAmount: (state, action: PayloadAction<number>) => {
      state.tokenA.depositAmount = action.payload;
      state.tokenA.fetchInfo = true;
      state.tokenB.fetchInfo = false;
    },
    updateTokenBDepositAmount: (state, action: PayloadAction<number>) => {
      state.tokenB.depositAmount = action.payload;
      state.tokenA.fetchInfo = false;
      state.tokenB.fetchInfo = true;
    },
    updateJustTokenADepositAmount: (state, action: PayloadAction<number>) => {
      state.tokenA.depositAmount = action.payload;
      state.tokenA.fetchInfo = false;
      state.tokenB.fetchInfo = false;
    },
    updateJustTokenBDepositAmount: (state, action: PayloadAction<number>) => {
      state.tokenB.depositAmount = action.payload;
      state.tokenA.fetchInfo = false;
      state.tokenB.fetchInfo = false;
    },
    resetTokenDepositAmount: (state) => {
      state.tokenA.depositAmount = 0;
      state.tokenA.fetchInfo = false;
      state.tokenB.depositAmount = 0;
      state.tokenB.fetchInfo = false;
    },
  },
});

export const {
  setTokenA,
  setTokenB,
  swapToken,
  updateTokenADepositAmount,
  updateTokenBDepositAmount,
  updateJustTokenADepositAmount,
  updateJustTokenBDepositAmount,
  resetTokenDepositAmount,
} = tokenPairSlice.actions;
export default tokenPairSlice.reducer;
