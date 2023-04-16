import {useEffect, useState} from 'react';
import {Card} from './components/card';
import {list} from '../../service/load-pokemon-list/remote-load-pokemon-list';

export function Home() {
  const [pokemons, setPokemons] = useState<ILoadPokemonList.Model[]>(
    []
  );

  useEffect(() => {
    async function loadPokemon() {
      const pokemons = await list();
      setPokemons(pokemons);
    }

    loadPokemon();
  }, []);
  return (
    <div className="min-h-screen bg-blue-500 ">
      <div className="flex p-6 flex-wrap gap-5 items-center justify-center">
        {pokemons.map((pokemon) => (
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
