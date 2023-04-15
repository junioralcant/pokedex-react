import './index.css';

function App() {
  return (
    <div className="h-screen bg-blue-500">
      <div className="p-6">
        <div className="flex items-center justify-center relative bg-app-green w-80 h-52 rounded-3xl p-5">
          <span className="absolute top-1 right-2 text-3xl text-white/40">
            #001
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-2xl mb-5">
              Bulbasouro
            </span>
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="bg-white/25 p-2  rounded-s-xl rounded-e-xl">
                  Grass
                </span>
              </div>
              <div>
                <span className="bg-white/25 p-2  rounded-s-xl rounded-e-xl">
                  poison
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-No-Background-Clip-Art.png"
              alt=""
              className="w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
