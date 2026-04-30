type Props = {
  setSearch: (val: string) => void;
};

export default function SearchBar({ setSearch }: Props) {
  return (
    <input
      placeholder="🔍 Search Pokémon..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 rounded-xl bg-white/20 backdrop-blur 
      text-white placeholder-white mb-4 outline-none"
    />
  );
}