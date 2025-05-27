import React from 'react';
import { render, screen } from '@testing-library/react';
import Conversations from './Conversations';

describe('Conversations', () => {
  it('renders search input', () => {
    render(<Conversations />);
    expect(screen.getByPlaceholderText(/search message/i)).toBeInTheDocument();
  });

  it('renders all tabs', () => {
    render(<Conversations />);
    expect(screen.getByRole('tab', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /unread/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /flagged/i })).toBeInTheDocument();
  });

  it('renders filter icon button', () => {
    render(<Conversations />);
    expect(screen.getByLabelText(/filter/i)).toBeInTheDocument();
  });

  it('renders all conversation items', () => {
    render(<Conversations />);
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Care Coordination')).toBeInTheDocument();
    expect(screen.getByText('Central Medical Clinic')).toBeInTheDocument();
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument();
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
  });

  it('renders avatars with correct initials', () => {
    render(<Conversations />);
    expect(screen.getAllByText('P')[0]).toBeInTheDocument();
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getAllByText('P')[1]).toBeInTheDocument();
    expect(screen.getByText('S')).toBeInTheDocument();
  });

  it('renders unread badges with correct numbers', () => {
    render(<Conversations />);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
}); 