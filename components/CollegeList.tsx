"use client";

import { useMemo, useState } from "react";
import CollegeCard from "./CollegeCard";
import SearchBar from "./SearchBar";

export default function CollegeList({
  colleges,
}: {
  colleges: any[];
}) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const locations = useMemo(() => {
    return [
      "All",
      ...new Set(colleges.map((college) => college.location)),
    ];
  }, [colleges]);

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      location === "All" ||
      college.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-3 rounded mb-6 w-full bg-white text-black"
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <CollegeCard
            key={college.id}
            id={college.id}
            name={college.name}
            location={college.location}
            fees={college.fees}
            rating={college.rating}
          />
        ))}
      </div>
    </>
  );
}