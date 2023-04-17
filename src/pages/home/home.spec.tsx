import { render, screen, waitFor } from '@testing-library/react';
import { Home } from '.';
import { list } from '../../service/load-pokemon-list/remote-load-pokemon-list';
import { mockLoadPokemonList } from '../../service/load-pokemon-list/mocks/pokemon';

function makeSut() {
  render(<Home />);
}

jest.mock('../../service/load-pokemon-list/remote-load-pokemon-list', () => ({
  list: jest.fn(() => mockLoadPokemonList()),
}));
describe('Home', () => {
  it('Should return list pokemon', async () => {
    makeSut();

    const pokemonsContent = screen.getByTestId('box-pokemon');
    await waitFor(() => pokemonsContent);

    expect(list).toHaveBeenCalled();
    expect(pokemonsContent.children.length).toBe(2);
  });
});
