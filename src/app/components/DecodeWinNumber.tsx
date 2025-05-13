import React from "react";

const VinDecoder = () => {
  const sample = "5YJSA1DG9DFP14705";

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        How to Decode VIN Number
      </h1>

      <div className="relative w-full overflow-x-auto">
        {/* Top labels */}
        <div className="flex flex-wrap justify-between w-full mb-2 min-w-[600px]">
          <div className="w-1/6 min-w-[150px] text-center">
            <div className="bg-yellow-500 p-3 text-xs font-bold">
              VEHICLE MANUFACTURER
            </div>
          </div>

          <div className="w-2/6 min-w-[250px] text-center">
            <div className="bg-yellow-500 p-3 text-xs font-bold">
              VEHICLE BRANDS, BODY STYLE, ENGINE SIZE AND TYPE, MODEL, SERIES,
              ETC
            </div>
          </div>

          <div className="w-1/6 min-w-[150px] text-center">
            <div className="bg-yellow-500 p-3 text-xs font-bold">
              MODEL YEAR
            </div>
          </div>

          <div className="w-2/6 min-w-[250px] text-center">
            <div className="bg-yellow-500 p-3 text-xs font-bold">
              VEHICLE PRODUCTION NUMBER (SERIAL NUMBER)
            </div>
          </div>
        </div>

        {/* Connector lines from top labels */}
        <div className="flex justify-between w-full h-8 relative min-w-[600px]">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className={`w-1/6 ${
                i === 1 || i === 3 ? "w-2/6" : ""
              } relative flex justify-center`}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-black" />
              <div className="w-px h-full bg-black" />
            </div>
          ))}
        </div>

        {/* VIN number display */}
        <div className="flex justify-center w-full mb-4 overflow-x-auto">
          <div className="flex items-center gap-2 px-2">
            {sample.split("").map((char, index) => (
              <span
                key={index}
                className="text-2xl sm:text-4xl md:text-5xl font-bold"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Connector lines to bottom labels */}
        <div className="flex justify-between w-full h-8 relative min-w-[600px]">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-1/6 relative flex justify-center">
              <div className="absolute bottom-0 left-1/2 w-px h-full bg-black transform -translate-x-1/2" />
            </div>
          ))}
        </div>

        {/* Bottom labels */}
        <div className="flex flex-wrap justify-between w-full min-w-[600px]">
          {[
            "COUNTRY OF MANUFACTURER",
            "VEHICLE TYPE OF DIVISION",
            "SECURITY CHECK DIGIT",
            "ASSEMBLY PLANT",
          ].map((label, idx) => (
            <div key={idx} className="w-1/6 min-w-[150px] text-center">
              <div className="bg-yellow-500 p-3 text-xs font-bold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VinDecoder;
