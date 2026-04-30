type Props = {
  pokemon: any;
  onClick: () => void;
  toggleFav: (p: any) => void;
  isFav: boolean;
};

const typeColors: any = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
};

export default function PokemonCard({ pokemon, onClick, toggleFav, isFav }: Props) {
  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-lg 
    hover:scale-105 hover:shadow-2xl transition duration-300">

      <img 
        src={pokemon.sprites.other['official-artwork'].front_default} 
        className="w-24 mx-auto"
      />

      <h2 className="text-center capitalize font-bold text-lg text-white">
        {pokemon.name}
      </h2>

      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((t: any) => (
          <span 
            key={t.type.name}
            className={`${typeColors[t.type.name] || "bg-gray-500"} px-2 py-1 text-xs rounded-full text-white`}
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-3">
        <button onClick={() => toggleFav(pokemon)} className="text-xl">
          {isFav ? "❤️" : "🤍"}
        </button>

        <button 
          onClick={onClick}
          className="bg-white text-black px-2 py-1 rounded"
        >
          View
        </button>
      </div>
    </div>
  );
}