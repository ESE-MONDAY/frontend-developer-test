import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchNFTService from '../../services/FetchNft';


interface NftState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | null; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NftState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchNFTFunc = createAsyncThunk('nfts/fetchNFTs', async () => {
  return fetchNFTService();
});


// Create NFT slice
const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTFunc.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNFTFunc.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchNFTFunc.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch NFTs';
      });
  },
});


export default nftSlice.reducer;
