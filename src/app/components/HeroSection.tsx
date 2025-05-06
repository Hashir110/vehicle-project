export default function HeroSection() {
  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center justify-start text-white px-6"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/checklist-vehicle-inspection-car-mechanic-repairman-checking-car-engine-with-inspecting-writing-clipboard-checklist-repair-car-car-repairs-vehicle-maintenance-automotive-mechanic_708636-1738.jpg?w=996')",
      }}
    >
      <div className="p-8k bg-opacity-60 rounded-lg max-w-xl text-left">
        <h1 className="text-4xl font-bold mb-4">
          Be Wise And Verify In Advance. Let's Examine
        </h1>
        <h2 className="text-4xl font-semibold mb-2 text-red-600">
          The History Of Your Car.
        </h2>
        <p className="text-lg mb-4">
          Let’s Verify Your Car History is a global service that aims to enhance
          transparency in the used car market and promote road safety on a
          global scale by providing comprehensive vehicle histories.
        </p>

        <ul className="list-disc text-left ml-5 mb-4 space-y-1">
          <li>Verified Vehicle History</li>
          <li>Accurate Inspection Reports</li>
          <li>Trusted by Thousands</li>
        </ul>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter your vehcile number"
            className="px-3 py-2 rounded-md text-black w-full bg-white"
          />
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold">
            Check Now
          </button>
        </div>
      </div>
    </section>
  );
}
