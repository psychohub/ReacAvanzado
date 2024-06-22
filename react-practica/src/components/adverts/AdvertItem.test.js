import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdvertItem from './AdvertItem';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    Link: ({ children }) => children,
  };
});

describe('AdvertItem', () => {
  it('Debería renderizarse correctamente', () => {
    const advert = {
      id: 1,
      name: 'Advert 1',
      price: 100,
      sale: true,
      tags: ['tag1', 'tag2'],
    };

    const { container } = render(
      <MemoryRouter>
        <AdvertItem advert={advert} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
