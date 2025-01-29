import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/header/Header';

describe('Header Component', () => {
  it('renders the header correctly', () => {
    render(<Header />);

    // Change this according to your actual header content
    const headerElement = screen.getByRole('banner'); // If it's a <header> tag
    expect(headerElement).toBeInTheDocument();
  });
});
