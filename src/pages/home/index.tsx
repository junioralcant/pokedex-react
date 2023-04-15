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
    <div className="h-screen bg-blue-500">
      <div className="p-6">
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
