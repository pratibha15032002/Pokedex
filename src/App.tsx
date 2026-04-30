
import { useEffect, useState } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "./services/api";
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Modal from "./components/Modal";

export default function App() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [favorites, setFavorites] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchPokemonList(page * 20);
      const detailed = await Promise.all(
        data.results.map((p: any) => fetchPokemonDetails(p.url))
      );
      setPokemon(detailed);
    };
    load();
  }, [page]);

  useEffect(() => {
    const fav = localStorage.getItem("favorites");
    if (fav) setFavorites(JSON.parse(fav));
  }, []);

  const toggleFav = (p: any) => {
    let updated;
    if (favorites.find(f => f.id === p.id)) {
      updated = favorites.filter(f => f.id !== p.id);
    } else {
      updated = [...favorites, p];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const filtered = pokemon
    .filter(p => p.name.includes(search.toLowerCase()))
    .filter(p => type ? p.types.some((t:any)=>t.type.name===type) : true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">

      <h1 className="text-3xl font-bold text-white mb-4 text-center">
        Pokedex Lite
      </h1>

      <SearchBar setSearch={setSearch} />
      <FilterBar setType={setType} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(p => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            isFav={!!favorites.find(f => f.id === p.id)}
            toggleFav={toggleFav}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button onClick={() => setPage(p => Math.max(0, p - 1))}>
          Prev
        </button>
        <button onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>

      {selected && <Modal pokemon={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}