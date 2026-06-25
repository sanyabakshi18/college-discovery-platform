"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview?: string;
  placements?: string;
};

export default function ComparePage() {
  const searchParams = useSearchParams();
  const ids = searchParams.get("ids")?.split(",") || [];

  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchColleges = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/colleges/compare`);
      const data = await res.json();
      setColleges(data.colleges || []);
    } catch (error) {
      console.error("Error fetching comparison data:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (ids.length > 0) {
      fetchColleges();
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  if (!ids.length) {
    return (
      <div className="p-6 text-center text-gray-500">
        No colleges selected for comparison.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading comparison...
      </div>
    );
  }

  if (colleges.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No data found for comparison.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Compare Colleges
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto bg-white shadow rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Feature</th>
              {colleges.map((c) => (
                <th key={c.id} className="p-4 text-left">
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Location */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Location</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  {c.location}
                </td>
              ))}
            </tr>

            {/* Fees */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Fees</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  ₹{c.fees}
                </td>
              ))}
            </tr>

            {/* Rating */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Rating</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  ⭐ {c.rating}
                </td>
              ))}
            </tr>

            {/* Placements */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Placements</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  {c.placements || "N/A"}
                </td>
              ))}
            </tr>

            {/* Overview */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Overview</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 text-sm text-gray-700">
                  {c.overview || "N/A"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}