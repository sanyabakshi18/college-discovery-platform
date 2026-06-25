import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "Delhi",
        fees: 250000,
        rating: 4.8,
        placements: "Excellent placements",
        overview: "One of India's top engineering institutes.",
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 260000,
        rating: 4.9,
        placements: "Outstanding placement record",
        overview: "Premier engineering college with global reputation.",
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 180000,
        rating: 4.5,
        placements: "Strong placement support",
        overview: "Top-ranked NIT with strong academics.",
      },
      {
        name: "BITS Pilani",
        location: "Rajasthan",
        fees: 300000,
        rating: 4.7,
        placements: "Excellent industry connections",
        overview: "Highly reputed private engineering institute.",
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        fees: 220000,
        rating: 4.6,
        placements: "Great software placements",
        overview: "Known for computer science and research.",
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });