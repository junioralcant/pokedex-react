import {Card} from './components/card';

const skills = [
  {
    name: 'Agua',
  },
  {
    name: 'Planta',
  },
];

export function Home() {
  return (
    <div className="h-screen bg-blue-500 ">
      <div className="flex p-6 flex-wrap gap-5 items-center justify-center">
        <Card
          skills={skills}
          idPockemon="#009"
          namePockemon="Bulbasaur"
          img="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
        />
        <Card
          skills={skills}
          idPockemon="#009"
          namePockemon="Bulbasaur"
          img="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
        />
        <Card
          skills={skills}
          idPockemon="#009"
          namePockemon="Bulbasaur"
          img="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
        />
        <Card
          skills={skills}
          idPockemon="#009"
          namePockemon="Bulbasaur"
          img="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
        />
        <Card
          skills={skills}
          idPockemon="#009"
          namePockemon="Bulbasaur"
          img="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
        />
        <Card
          skills={skills}
          idPockemon="#009"
          namePockemon="Bulbasaur"
          img="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
        />
        <Card
          skills={skills}
          idPockemon="#009"
          namePockemon="Bulbasaur"
          img="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
        />
      </div>
    </div>
  );
}
