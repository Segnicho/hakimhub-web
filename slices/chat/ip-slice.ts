import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IpState {
  ipAddress: string ;
}

const initialState: IpState = {
  ipAddress: '',
};

const IpSlice = createSlice({
  name: 'ipaddress',
  initialState,
  reducers: {
    setIpAddress: (state, action: PayloadAction<string>) => {
      state.ipAddress = action.payload;
    },
  },
});

export const { setIpAddress } = IpSlice.actions;

export default IpSlice;
