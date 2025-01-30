/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Header } from '@/components/header/Header';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createStore } from '@/store/store';

import { useGetCompaniesQuery } from '@/store/services/companiesApi';

import { Company } from '@/types/company';
import { theme } from '@/styles/theme';

jest.mock('@/store/services/companiesApi', () => ({
  ...jest.requireActual('@/store/services/companiesApi'),
  useGetCompaniesQuery: jest.fn(),
}));

jest.mock('lodash.debounce', () => (fn: any) => fn);

const renderWithProviders = (ui: React.ReactElement) => {
  const store = createStore();
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>,
  );
};

describe('Header Component', () => {
  const mockCompanies: Company[] = [
    { id: '1', name: 'Company A' },
    { id: '2', name: 'Company B' },
  ];

  beforeEach(() => {
    (useGetCompaniesQuery as jest.Mock).mockReturnValue({
      data: mockCompanies,
      isLoading: false,
      error: null,
    });
  });

  it('renders the header correctly', () => {
    renderWithProviders(<Header />);

    const logo = screen.getByTestId('tractian-logo');
    expect(logo).toBeInTheDocument();
  });

  it('displays loading state', () => {
    (useGetCompaniesQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    renderWithProviders(<Header />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('handles error state', () => {
    (useGetCompaniesQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error('Fetch error'),
    });

    renderWithProviders(<Header />);
    expect(screen.getByText(/Could not fetch companies/i)).toBeInTheDocument();
  });

  it('renders company buttons correctly', () => {
    renderWithProviders(<Header />);

    mockCompanies.forEach((company) => {
      expect(screen.getByText(`${company.name} Unit`)).toBeInTheDocument();
    });
  });

  it('selects a company when clicked', async () => {
    const store = createStore();
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Provider>,
    );

    const user = userEvent.setup();
    const companyButton = screen.getByText('Company A Unit');

    await user.click(companyButton);

    expect(store.getState().companies.selectedCompany).toEqual(
      mockCompanies[0],
    );
  });
});
