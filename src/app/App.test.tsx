import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('renders the game board', () => {
  render(<App />);
  expect(screen.getByText('Next Turn')).toBeInTheDocument();
});
