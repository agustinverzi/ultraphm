import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders patient name and DOB', () => {
    render(<Header />);
    expect(screen.getByText('Patient-DMOplc9G')).toBeInTheDocument();
    expect(screen.getByText(/DOB: Mon Apr 20 1970/)).toBeInTheDocument();
  });

  it('renders risk and expense chips', () => {
    render(<Header />);
    expect(screen.getByText(/Risk: Moderate/)).toBeInTheDocument();
    expect(screen.getByText('(0.523)')).toBeInTheDocument();
    expect(screen.getByText(/Expense: High \(\$8567\)/)).toBeInTheDocument();
  });

  it('renders critical alerts', () => {
    render(<Header />);
    expect(screen.getByText('Critical Alerts:')).toBeInTheDocument();
    expect(screen.getByText('2 ED visits in last 30 days')).toBeInTheDocument();
    expect(screen.getByText('Medication adherence below 80%')).toBeInTheDocument();
    expect(screen.getByText('Last A1C: 8.2')).toBeInTheDocument();
  });
}); 