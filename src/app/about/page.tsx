import Image from "next/image";

export default function About() {
  return (
    <section className="w-full">
      {/* Top Background Image */}
      <div className="relative h-[300px] md:h-[500px] mt-4 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/pic for about.jpg"
          alt="Contact Us"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Heading Text */}
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
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 items-center gap-10">
        {/* Left Side Image */}

        {/* Right Side Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Welcome to The Vehicle
            <span className="border-b-2 border-red-800 inline-block pb-1">
              Explorer
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to delivering quality services for cars and bikes.
            Our premium packages ensure your vehicle gets the best treatment at
            the most affordable rates. Whether you're looking for a simple
            check-up or a complete diagnostic, we've got you covered. We are
            committed to delivering quality services for cars and bikes. Our
            premium packages ensure your vehicle gets the best treatment at the
            most affordable rates. Whether you're looking for a simple check-up
            or a complete diagnostic, we've got you covered.
          </p>
        </div>

        <div>
          <Image
            src={"/report pic-2.jpg"}
            alt="About Us"
            width={500}
            height={500}
            className=" ml-30 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
