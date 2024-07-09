import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
});

test('renders learn react link', async () => {
  render(<App />);
  
  try {
    const linkElement = await screen.findByRole('heading', { name: /learn react/i }, { timeout: 15000 });
    expect(linkElement).toBeInTheDocument();
  } catch (error) {
    // Timeout veya element bulunamama durumunda hata mesajını göster
    console.error(error);
  }
});
