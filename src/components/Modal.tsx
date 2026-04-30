type Props = {
  pokemon: any;
  onClose: () => void;
};

export default function Modal({ pokemon, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-white rounded-xl p-6 w-80 animate-scaleIn">

        <img src={pokemon.sprites.front_default} className="mx-auto" />

        <h2 className="text-xl font-bold text-center capitalize">
          {pokemon.name}
        </h2>

        <div className="mt-3">
          <p>HP: {pokemon.stats[0].base_stat}</p>
          <p>Attack: {pokemon.stats[1].base_stat}</p>
        </div>

        <button 
          onClick={onClose}
          className="mt-4 w-full bg-black text-white py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
}