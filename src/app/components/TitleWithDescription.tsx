import Image from "next/image";
import Link from "next/link";

export default function TitleWithDescription() {
  return (
    <section className="py-12 bg-white w-full">
      <div className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h4 className="text-red-600 font-semibold mb-2 text-2xl">
            Who We Are?
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a Verified History Report!
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            At the Vehiclevinreport where we provide comprehensive insights into
            the history and background of vehicles. Whether you&apos;re considering
            buying a pre-owned car or simply researching the origins of a
            vehicle, our detailed reports offer valuable information about
            previous ownership, accident records, service history, and more.
          </p>
          <Link href="/about">
            <button className="hover:bg-red-700 hover:cursor-pointer bg-red-600 text-white px-6 py-3 rounded-md font-medium">
              Know More about us
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/report-with 2 men.jpg"
              alt="Car Dealership"
              fill
              className="object-cover object-center"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
