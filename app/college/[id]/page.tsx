import prisma from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetailPage({ params }: Props) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">College Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{college.name}</h1>

      <div className="space-y-3">
        <p>
          <strong>Location:</strong> {college.location}
        </p>

        <p>
          <strong>Fees:</strong> ₹{college.fees}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {college.rating}
        </p>

        <p>
          <strong>Placements:</strong>{" "}
          {college.placements || "No placement data available"}
        </p>

        <p>
          <strong>Overview:</strong>{" "}
          {college.overview || "No overview available"}
        </p>
      </div>
    </div>
  );
}