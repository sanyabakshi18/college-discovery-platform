"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placements?: string;
  overview?: string;
};

export default function ComparePage() {
  const searchParams = useSearchParams();

  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = searchParams.get("ids");

    if (!ids) {
      setLoading(false);
      return;
    }

    const fetchComparison = async () => {
      try {
       const res = await fetch(
  `/api/colleges?page=${page}&limit=${limit}&search=${search}`
);

console.log("Status:", res.status);

const text = await res.text();
console.log("Response:", text);

const data = JSON.parse(text);

        console.log(data);

        setColleges(data.colleges || []);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchComparison();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading comparison...
      </div>
    );
  }

  if (colleges.length === 0) {
    return (
      <div className="p-6 text-center">
        No data found for comparison.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">
        Compare Colleges
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Feature</th>

              {colleges.map((college) => (
                <th key={college.id} className="p-4">
                  {college.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 font-semibold">Location</td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  {college.location}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-semibold">Fees</td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  ₹{college.fees}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-semibold">Rating</td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  ⭐ {college.rating}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-semibold">Placements</td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  {college.placements}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-semibold">Overview</td>

              {colleges.map((college) => (
                <td key={college.id} className="p-4">
                  {college.overview}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}