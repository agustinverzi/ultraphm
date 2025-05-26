import React from 'react';
import { render, screen } from '@testing-library/react';
import UtilizationTimeline from './UtilizationTimeline';

describe('UtilizationTimeline', () => {
  it('renders the section title and legend labels', () => {
    render(<UtilizationTimeline />);
    expect(screen.getByText('Utilization Timeline')).toBeInTheDocument();
    expect(screen.getByText('Office')).toBeInTheDocument();
    expect(screen.getByText('ED')).toBeInTheDocument();
    expect(screen.getByText('IP')).toBeInTheDocument();
    expect(screen.getByText('Upcoming')).toBeInTheDocument();
  });
}); 