import React from 'react';
import { render, screen } from '@testing-library/react';
import KeyInformation from './KeyInformation';

describe('KeyInformation', () => {
  it('renders all key fields and labels', () => {
    render(<KeyInformation />);
    expect(screen.getByText('Key Information')).toBeInTheDocument();
    expect(screen.getByText('PCP')).toBeInTheDocument();
    expect(screen.getByText('Dr. Jones')).toBeInTheDocument();
    expect(screen.getByText('Patient ID')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Insurance')).toBeInTheDocument();
    expect(screen.getByText('Aetna Commercial')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Ogden Clinic Pulmonology')).toBeInTheDocument();
    expect(screen.getByText('Care Manager')).toBeInTheDocument();
    expect(screen.getByText('Sarah Smith, RN')).toBeInTheDocument();
    expect(screen.getByText('Last Annual Wellness')).toBeInTheDocument();
    expect(screen.getByText('3/15/24')).toBeInTheDocument();
    expect(screen.getByText('Next Visit')).toBeInTheDocument();
    expect(screen.getByText('5/19/25')).toBeInTheDocument();
  });
}); 