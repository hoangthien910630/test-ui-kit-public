import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyTable } from './MyTable';

// Mock matchMedia cho test
beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

describe('MyTable', () => {
  it('renders a message when there is no data', () => {
    render(<MyTable columns={[]} dataSource={[]} />);

    console.log(screen.debug());
    
    const messageElement = screen.getByText('No data');
    expect(messageElement).toBeInTheDocument();
  });

   it('renders correctly with data', async () => {
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
    ];
    const data = [
      { key: '1', name: 'John Doe', age: 30 },
    ];

    await render(<MyTable columns={columns} dataSource={data} />);

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();

  });
});