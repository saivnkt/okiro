import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-markdown', () => ({ children }) => <>{children}</>);
jest.mock('remark-gfm', () => () => null);

test('renders home page content', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  expect(screen.getByText(/latest posts/i)).toBeInTheDocument();
});
