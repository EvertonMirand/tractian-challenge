import { Company } from '@/types/company';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectedCompanyState {
  selectedCompany?: Company; // Store the full company object
}

const initialState: SelectedCompanyState = {
  selectedCompany: undefined, // Default to no company selected
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    selectCompany: (state, action: PayloadAction<Company>) => {
      state.selectedCompany = action.payload;
    },
  },
});

export const { selectCompany } = companySlice.actions;

export const companiesReducer = companySlice.reducer;
