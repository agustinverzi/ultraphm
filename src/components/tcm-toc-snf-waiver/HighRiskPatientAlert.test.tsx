import { render, screen } from '@testing-library/react';
import HighRiskPatientAlert from './HighRiskPatientAlert';
import '@testing-library/jest-dom';

describe('HighRiskPatientAlert', () => {
  it('renders the alert with correct content and styles', () => {
    render(<HighRiskPatientAlert />);

    // Title
    const title = screen.getByText('High Risk Patient Alert');
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle({
      color: '#d32f2f',
      fontWeight: '500',
      fontSize: '20px',
    });

    // Message
    expect(
      screen.getByText(
        'James Wilson has a high readmission risk score. Prioritize contact within 24 hours.'
      )
    ).toBeInTheDocument();

    // Alert container
    const alert = title.closest('.MuiAlert-root');
    expect(alert).toHaveStyle({
      backgroundColor: '#fdf3f3',
      color: '#d32f2f',
      border: '1px solid #d32f2f',
      borderRadius: '6px',
    });

    // Icon
    const icon = alert?.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle({ color: '#d32f2f' });
  });
}); 