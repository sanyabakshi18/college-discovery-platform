import Link from "next/link";
type CollegeCardProps = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function CollegeCard({
    id,
  name,
  location,
  fees,
  rating,
}: CollegeCardProps) {
 return (
  <Link href={`/college/${id}`}>
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
      <h2 className="text-xl font-bold">{name}</h2>

      <p className="text-gray-600">
        📍 {location}
      </p>

      <p>💰 Fees: ₹{fees}</p>

      <p>⭐ Rating: {rating}</p>
    </div>
  </Link>
);
}