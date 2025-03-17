import { render, screen } from '@testing-library/react';
import App from './App';

describe("String Calculator", () => {
  test('Validate Query Input', () => {
    render(<App />);
    const queryElem = screen.getByLabelText('Query')
    expect(queryElem).toBeInTheDocument();
  });
  
  test('Validate Result Box is present', () => {
    render(<App />);
    expect(screen.getByLabelText('Result')).toBeInTheDocument()
  });
  
  test('Check if button is present', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', {name: /calculate/i});
    expect(submitButton).toBeInTheDocument();
  });
})

