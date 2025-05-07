import React from "react";

const VinDecoder = () => {
  const sample = "5YJSA1DG9DFP14705";

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-12">How to Decode VIN Number</h1>

      <div className="relative w-full">
        {/* Top labels */}
        <div className="flex justify-between w-full mb-2">
          <div className="w-1/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              VEHICLE MANUFACTURER
            </div>
          </div>

          <div className="w-2/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              VEHICLE BRANDS, BODY STYLE,ENGINE SIZE AND TYPE,MODEL,SERIES,ETC
            </div>
          </div>

          <div className="w-1/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              MODEL YEAR
            </div>
          </div>

          <div className="w-2/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              VEHICLE PRODUCTION NUMBER(SERIAL NUMBER)
            </div>
          </div>
        </div>

        {/* Connector lines from top labels */}
        <div className="flex justify-between w-full h-8 relative">
          <div className="w-1/6 flex justify-center">
            <div className="w-px h-full bg-black"></div>
          </div>

          <div className="w-2/6 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-black"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-black transform -translate-x-1/2"></div>
          </div>

          <div className="w-1/6 flex justify-center">
            <div className="w-px h-full bg-black"></div>
          </div>

          <div className="w-2/6 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-black"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-black transform -translate-x-1/2"></div>
          </div>
        </div>

        {/* VIN number display */}
        <div className="flex justify-center w-full mb-2 ">
          <div className="flex items-center gap-3">
            {sample.split("").map((char, index) => (
              <span key={index} className="text-6xl font-bold mx-1">
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Connector lines to bottom labels */}
        <div className="flex justify-between w-full h-8 relative">
          <div className="w-1/6 relative">
            <div className="absolute bottom-0 left-1/2 w-px h-full bg-black transform -translate-x-1/2"></div>
          </div>

          <div className="w-1/6 relative">
            <div className="absolute bottom-0 left-1/2 w-px h-full bg-black transform -translate-x-1/2"></div>
          </div>

          <div className="w-1/6 relative">
            <div className="absolute bottom-0 left-1/2 w-px h-full bg-black transform -translate-x-1/2"></div>
          </div>

          <div className="w-1/6 relative">
            <div className="absolute bottom-0 left-1/2 w-px h-full bg-black transform -translate-x-1/2"></div>
          </div>
        </div>

        {/* Bottom labels */}
        <div className="flex justify-between w-full">
          <div className="w-1/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              COUNTRY OF MANUFACTUER
            </div>
          </div>

          <div className="w-1/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              VEHICLE TYPE OF DIVISION
            </div>
          </div>

          <div className="w-1/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              SECURITY CHECK DIGIT
            </div>
          </div>

          <div className="w-1/6 text-center">
            <div className="bg-yellow-500 p-3 text-center text-xs font-bold">
              ASSEMBLY PLANT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinDecoder;
