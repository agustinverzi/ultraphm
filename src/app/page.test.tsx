import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders all patient filter buttons', () => {
    render(<Home />);
    expect(screen.getByText('All Patients')).toBeInTheDocument();
    expect(screen.getByText('Patients without AWC')).toBeInTheDocument();
    expect(screen.getByText('High Risk Patients')).toBeInTheDocument();
    expect(screen.getByText('HCC Gap Patients')).toBeInTheDocument();
    expect(screen.getByText('Care Gap Patients')).toBeInTheDocument();
  });
}); 