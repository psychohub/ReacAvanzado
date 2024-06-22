import { getFilteredAdverts } from '../../redux/advertsSlice';

describe('Adverts Selectors', () => {
  it('Debería devolver anuncios filtrados', () => {
    const state = {
      adverts: [
        { id: 1, name: 'Advert 1', price: 100, sale: 'true', tags: ['tag1'] },
        { id: 2, name: 'Advert 2', price: 200, sale: 'false', tags: ['tag2'] },
        { id: 3, name: 'Advert 3', price: 300, sale: 'true', tags: ['tag1', 'tag3'] },
      ],
    };

    const filter = {
      name: 'Advert',
      sale: 'todos',
      priceMin: '150',
      priceMax: '250',
      selectedTags: [{ label: 'tag2', value: 'tag2' }],
    };

    const expectedAdverts = [{ id: 2, name: 'Advert 2', price: 200, sale: 'false', tags: ['tag2'] }];

    expect(getFilteredAdverts(state, filter)).toEqual(expectedAdverts);
  });
});