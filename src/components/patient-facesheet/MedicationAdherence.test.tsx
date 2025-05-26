import React from 'react';
import { render, screen } from '@testing-library/react';
import MedicationAdherence from './MedicationAdherence';

describe('MedicationAdherence', () => {
  it('renders all medication names and adherence percentages', () => {
    render(<MedicationAdherence />);
    expect(screen.getByText('Medication Adherence')).toBeInTheDocument();
    expect(screen.getByText('COPD inhalers')).toBeInTheDocument();
    expect(screen.getByText('76% adherent')).toBeInTheDocument();
    expect(screen.getByText('ACE Inhibitor')).toBeInTheDocument();
    expect(screen.getByText('92% adherent')).toBeInTheDocument();
    expect(screen.getByText('Statins')).toBeInTheDocument();
    expect(screen.getByText('85% adherent')).toBeInTheDocument();
    expect(screen.getByText('Based on last 90 days of claims data')).toBeInTheDocument();
  });
}); 