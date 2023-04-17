import { useEffect, useState } from 'react';
import { Card } from './components/card';
import { list } from '../../service/load-pokemon-list/remote-load-pokemon-list';

export function Home() {
  const [pokemons, setPokemons] = useState<
    ILoadPokemonList.Model[] | undefined
  >([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await list();
      setPokemons(response);
    }

    loadPokemon();
  }, []);

  return (
    <div className="min-h-screen bg-blue-500 ">
      <div
        data-testid="box-pokemon"
        className="flex p-6 flex-wrap gap-5 items-center justify-center"
      >
        {pokemons?.map((pokemon) => (
          <Card
            key={pokemon.id}
            skills={pokemon.skills}
            idPokemon={`#${pokemon.id}`}
            namePokemon={pokemon.name}
            img={pokemon.img}
          />
        ))}
      </div>
    </div>
  );
}
