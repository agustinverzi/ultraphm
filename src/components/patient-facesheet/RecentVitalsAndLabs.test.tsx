import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentVitalsAndLabs from './RecentVitalsAndLabs';

describe('RecentVitalsAndLabs', () => {
  it('renders all vital and lab labels and values', () => {
    render(<RecentVitalsAndLabs />);
    expect(screen.getByText('Recent Vitals & Labs')).toBeInTheDocument();
    expect(screen.getByText('BP')).toBeInTheDocument();
    expect(screen.getByText('138/88')).toBeInTheDocument();
    expect(screen.getByText('BM')).toBeInTheDocument();
    expect(screen.getByText('27.4')).toBeInTheDocument();
    expect(screen.getByText('A1C')).toBeInTheDocument();
    expect(screen.getByText('8.2%')).toBeInTheDocument();
    expect(screen.getByText('LDL')).toBeInTheDocument();
    expect(screen.getByText('142')).toBeInTheDocument();
  });
}); 