import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Booking from './Booking';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react'; // react-dom/test-utils yerine react test-utils kullanılmalı

describe('Booking Component', () => {
  test('renders static text in the Booking component', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
    });

    expect(screen.getByText(/Select Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Select Meal/i)).toBeInTheDocument();
    expect(screen.getByText(/FirstName:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
  });

  test('renders form fields with placeholders', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
    });

    
    const breakfastOption = screen.getByLabelText('Breakfast');
    const lunchOption = screen.getByLabelText('Lunch');
    const dinnerOption = screen.getByLabelText('Dinner');

    fireEvent.click(breakfastOption, { target: { value: 'breakfast' } });
    expect(breakfastOption.checked).toBe(true);

    fireEvent.click(lunchOption, { target: { value: 'lunch' } });
    expect(lunchOption.checked).toBe(true);

    fireEvent.click(dinnerOption, { target: { value: 'dinner' } });
    expect(dinnerOption.checked).toBe(true);
  });
});

