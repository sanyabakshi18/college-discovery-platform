"use client";

import { useState } from "react";

export default function CompareClient({
  colleges,
}: {
  colleges: any[];
}) {
  const [firstId, setFirstId] = useState("");
  const [secondId, setSecondId] = useState("");

  const firstCollege = colleges.find(
    (c) => c.id === firstId
  );

  const secondCollege = colleges.find(
    (c) => c.id === secondId
  );

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <select
          className="border p-3 rounded bg-white text-black"
          value={firstId}
          onChange={(e) => setFirstId(e.target.value)}
        >
          <option value="">
            Select First College
          </option>

          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded bg-white text-black"
          value={secondId}
          onChange={(e) => setSecondId(e.target.value)}
        >
          <option value="">
            Select Second College
          </option>

          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {firstCollege && secondCollege && (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-3">
                  Feature
                </th>

                <th className="border p-3">
                  {firstCollege.name}
                </th>

                <th className="border p-3">
                  {secondCollege.name}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  Location
                </td>

                <td className="border p-3">
                  {firstCollege.location}
                </td>

                <td className="border p-3">
                  {secondCollege.location}
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Fees
                </td>

                <td className="border p-3">
                  ₹{firstCollege.fees}
                </td>

                <td className="border p-3">
                  ₹{secondCollege.fees}
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Rating
                </td>

                <td className="border p-3">
                  {firstCollege.rating}
                </td>

                <td className="border p-3">
                  {secondCollege.rating}
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Placements
                </td>

                <td className="border p-3">
                  ₹{firstCollege.placements}
                </td>

                <td className="border p-3">
                  ₹{secondCollege.placements}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}