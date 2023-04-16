import {list} from './remote-load-pokemon-list';
import {mockLoadPokemonList} from './mocks/pokemon';

type SutType = {
  list: () => Promise<ILoadPokemonList.Model[]>;
};

function makeSut(): SutType {
  return {
    list,
  };
}

describe('RemoteLoadPokemonList', () => {
  it('should return correct a pokemon list', async () => {
    const sut = makeSut();
    jest
      .spyOn(sut, 'list')
      .mockResolvedValueOnce(mockLoadPokemonList());
    const response = await sut.list();
    expect(response).toEqual(mockLoadPokemonList());
  });
});
