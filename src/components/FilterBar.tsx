type Props = {
  setType: (val: string) => void;
};

export default function FilterBar({ setType }: Props) {
  return (
    <select
      onChange={(e) => setType(e.target.value)}
      className="p-2 rounded bg-white/20 text-white mb-4"
    >
      <option value="">All Types</option>
      <option value="fire">🔥 Fire</option>
      <option value="water">💧 Water</option>
      <option value="grass">🌿 Grass</option>
      <option value="electric">⚡ Electric</option>
    </select>
  );
}