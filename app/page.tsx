"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function HomePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  const limit = 6;

  const fetchColleges = async () => {
    setLoading(true);

    const res = await fetch(
      `/api/colleges?page=${page}&limit=${limit}&search=${search}`
    );

    const data = await res.json();

    setColleges(data.colleges || []);
    setTotalPages(data.totalPages || 1);

    setLoading(false);
  };

  useEffect(() => {
    fetchColleges();
  }, [page, search]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        College Discovery Platform
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search colleges..."
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500">Loading colleges...</p>
      )}

      {/* Empty */}
      {!loading && colleges.length === 0 && (
        <p className="text-center text-gray-500">No colleges found.</p>
      )}

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{college.name}</h2>
            <p className="text-gray-600">{college.location}</p>

            <div className="mt-2 text-sm text-gray-700">
              <p>💰 Fees: ₹{college.fees}</p>
              <p>⭐ Rating: {college.rating}</p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-between">
              <Link
                href={`/college/${college.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>

              <Link href={`/compare?ids=${college.id}`}>
  Compare
</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}