// app/car-packages/[pkg]/page.tsx
import { notFound } from "next/navigation";

const carPackages = {
  gold: {
    price: "$19.99",
    features: [
      "Basic Vehicle Report",
      "DMV Title History",
      "Vehicle Specification",
    ],
  },
  platinum: {
    price: "$39.99",
    features: [
      "Full Vehicle Report",
      "DMV Title History",
      "Recall Status",
      "Accident Info",
    ],
  },
  diamond: {
    price: "$59.99",
    features: [
      "All-in-One Report",
      "DMV History",
      "Recall Status",
      "Specs",
      "Accidents",
      "NMVTIS",
    ],
  },
};

export default function CarPackagePage({
  params,
}: {
  params: { pkg: string };
}) {
  const pkgData = carPackages[params.pkg as keyof typeof carPackages];

  if (!pkgData) return notFound();

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold capitalize mb-2">
          {params.pkg} Package
        </h1>
        <p className="text-lg text-green-600 mb-4">Price: {pkgData.price}</p>
        <ul className="list-disc pl-6 space-y-1">
          {pkgData.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
