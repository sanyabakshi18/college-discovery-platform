"use client";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <input
  type="text"
  placeholder="Search colleges..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-3 rounded w-full mb-6 bg-white text-black placeholder-gray-500"
/>
  );
}