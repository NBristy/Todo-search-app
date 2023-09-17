import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Detail from './detail.jsx';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import 'cross-fetch/polyfill';

describe('Detail Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', async () => {
    render(<Detail />);

    // Check loading spinner
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull();
    });
  });

  it('renders error state', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')));

    render(<Detail />);

    // Check error message
    expect(await screen.findByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  it('renders data successfully', async () => {
    global.fetch = jest.fn().mockImplementation((url) => {
      if (url.includes(`/todos/`)) {
        return Promise.resolve({
          json: () => Promise.resolve({
            id: 1,
            userId: 1,
            title: 'Task Title',
          }),
          ok: true,
        });
      } else if (url.includes(`/users/`)) {
        return Promise.resolve({
          json: () => Promise.resolve({
            id: 1,
            name: 'User Name',
          }),
          ok: true,
        });
      }
    });

    render(<Detail />);

    await waitFor(() => {
      expect(screen.getByText('Item Number: 1')).toBeInTheDocument();
      expect(screen.getByText('Creator: User Name')).toBeInTheDocument();
      expect(screen.getByText('Title: Task Title')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('loading-spinner')).toBeNull();
  });
});
