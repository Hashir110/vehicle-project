export default function TitleWithDescription() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-left">
            <h4 className="text-red-700 font-semibold mb-2 text-2xl">Who We Are?</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Verified History Report!
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              At the vehicle explorer where we provide comprehensive insights
              into the history and background of vehicles. Whether you’re
              considering buying a pre-owned car or simply researching the
              origins of a vehicle, our detailed reports offer valuable
              information about previous ownership, accident records, service
              history, and more.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium">
              Know More about us
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/need-sign-that-document-female-customer-modern-stylish-bearded-businessman-automobile-saloon_146671-16070.jpg?t=st=1746557142~exp=1746560742~hmac=fbe5b5e309bf6dc94512c2ff05cdaba2b8919ea8cb336ae10a98310e066839df&w=996"
              alt="Car Dealership"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
