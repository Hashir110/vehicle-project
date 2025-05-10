export default function About() {
  return (
    <section className="w-full">
      {/* Top Background Image */}
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center mt-4"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/cyberpunk-urban-scenery-with-car_23-2150712268.jpg?t=st=1746878292~exp=1746881892~hmac=5cd60eb84c3a4d55c2573859746d1ae697ef3b7a324550dffe42653739b4dde4&w=1380')",
        }}
      ></div>

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
          <img
            src="https://img.freepik.com/premium-photo/midsection-man-pointing-car-while-agent-holding-pen-clipboard-crouching-outdoors_1048944-2256038.jpg?w=996"
            alt="About"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
