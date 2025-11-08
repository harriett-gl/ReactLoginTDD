import { render, screen } from '@testing-library/react';
import App from './App';

//npx react-scripts test --coverage --watchAll=false

test('muestra el formulario de login', () => {
  render(<App />);
  expect(screen.getByText(/tdd login: login/i)).toBeInTheDocument();
});
