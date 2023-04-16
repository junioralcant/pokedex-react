interface ILoadPokemonList {
  list(): Promise<ILoadPokemonList.Model[] | undefined>;
}

namespace ILoadPokemonList {
  export type Model = {
    id: string;
    name: string;
    img: string;
    skills: {name: string}[];
  };
}
