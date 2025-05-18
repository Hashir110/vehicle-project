import Image from "next/image";

export default function About() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] shadow-lg overflow-hidden">
        <Image
          src="/pic for about.jpg"
          alt="Contact Us"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Discover Our Journey
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4 max-w-xl drop-shadow-md">
            From passion to purpose, we're driven to bring transparency and
            trust to every vehicle purchase. Learn more about who we are and why
            we do what we do.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch md:ml-20">
          {/* Text Column */}
          <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to The Vehicle{" "}
              <span className="border-b-2 border-red-700 inline-block pb-1">
                Explorer
              </span>
            </h2>
            <p className="text-gray-600 text-lg tracking-widest max-w-xl">
              We are committed to delivering quality services for cars and bikes.
              Our premium packages ensure your vehicle gets the best treatment at
              the most affordable rates. Whether you're looking for a simple
              check-up or a complete diagnostic, we've got you covered.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex items-center justify-center">
            <Image
              src="/report pic-2.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="w-full max-w-[500px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "About Vehiclevinsreport - Trusted Vehicle History Report Service",
  description:
    "Learn more about Vehiclevinsreport, our mission to provide accurate and instant vehicle history reports, and how we help you make informed decisions.",
  robots: "index, follow",
  keywords: [
    "about Vehiclevinsreport",
    "vehicle history report service",
    "trusted car reports",
    "vehicle report provider",
    "car history information",
  ],
};
