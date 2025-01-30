import { Company } from '@/types/company';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectedCompanyState {
  selectedCompany?: Company;
}

const initialState: SelectedCompanyState = {
  selectedCompany: undefined,
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
