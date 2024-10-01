import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from './MyInput';

describe('InputComponent', () => {
  it('renders the input and allows typing', () => {
    const handleChange = jest.fn();
    const inputValue = "Initial value";
    
    render(<InputComponent value={inputValue} onChange={handleChange} />);
    
    console.log(screen.debug());

    // check input
    const input = screen.getByTestId('ant-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(inputValue);

    // input value change event
    fireEvent.change(input, { target: { value: 'New value' } });

    // check handleChange
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything());
  });

  it('renders with placeholder text', () => {
    render(<InputComponent value="" onChange={() => {}} />);

    console.log(screen.debug());
    
    const input = screen.getByPlaceholderText('Input data');
    expect(input).toBeInTheDocument();
  });
});
