import {api} from '../api';

export async function list(): Promise<ILoadPokemonList.Model[]> {
  const {data} = await api.get('/pokemon');

  const promises = data.results.map(async (pokemon: any) => {
    const result = await adapt(pokemon.url);
    return result;
  });

  const pokemons = await Promise.all(promises);

  return pokemons;
}

async function adapt(url: string): Promise<ILoadPokemonList.Model> {
  const {data} = await api.get(url);

  const pokemon = {
    id: data.id,
    name: data.name,
    img: data.sprites.other.home.front_default,
    skills: [
      {
        name: data.abilities[0].ability.name,
      },
    ],
  } as ILoadPokemonList.Model;

  return pokemon;
}
