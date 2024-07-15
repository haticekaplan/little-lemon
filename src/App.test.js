// App.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders reserve a table link', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = await screen.findByText(/reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});








