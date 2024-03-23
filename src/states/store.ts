import {configureStore} from '@reduxjs/toolkit'
// import fetchNftByAddressSliceReducer from './fetchNftByAddress';
import nftReducer from './fetchNftByAddress'



export const store = configureStore({
  reducer: {
    nfts: nftReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
