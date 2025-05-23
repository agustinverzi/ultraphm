import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

jest.mock('next/font/google', () => ({
  Roboto: () => ({ variable: 'roboto-variable' }),
}));

// Mock usePathname to avoid null error in Breadcrumb, but preserve other exports
jest.mock('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');
  return {
    ...actual,
    usePathname: () => '/dashboard',
  };
});

describe('RootLayout', () => {
  it('renders children inside the layout', () => {
    render(
      <RootLayout>
        <div data-testid="child">Test Child</div>
      </RootLayout>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });
}); 