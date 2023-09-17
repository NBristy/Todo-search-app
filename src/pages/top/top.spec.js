import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Top from './top.jsx';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import 'cross-fetch/polyfill';

describe('Top Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', async () => {
    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    // Check loading spinner
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loading-spinner')).toBeNull();
    });
  });

  it('renders error state', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')));

    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    // Check error message
    expect(await screen.findByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  it('renders data successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, userId: 1, title: 'Item 1', completed: false },
            { id: 2, userId: 1, title: 'Item 2', completed: true },
          ]),
        ok: true,
      })
    );

    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('loading-spinner')).toBeNull();
  });
});
