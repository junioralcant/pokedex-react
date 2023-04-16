import {Skills} from '../skills';

type Props = {
  skills: {name: string}[];
  idPokemon: string;
  img: string;
  namePokemon: string;
};

export function Card({skills, idPokemon, img, namePokemon}: Props) {
  return (
    <div className="flex items-center justify-between relative bg-app-green w-80 h-52 rounded-3xl p-5">
      <span className="absolute top-1 right-2 text-3xl text-white/40">
        {idPokemon}
      </span>
      <div className="flex flex-col">
        <span className="font-bold text-2xl mb-5">{namePokemon}</span>
        <div className="flex flex-col">
          {skills.map((skill) => (
            <Skills key={skill.name} skill={skill.name} />
          ))}
        </div>
      </div>
      <div>
        <img src={img} alt="" className="w-32" />
      </div>
    </div>
  );
}
