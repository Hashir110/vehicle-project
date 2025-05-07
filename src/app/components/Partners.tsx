import React from "react";


const Partners = () => {
  return (
    <section className="py-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Our Trusted Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-12 px-4">
        <img
          src="https://img.freepik.com/premium-vector/document-with-tech-logo-design-concept-creative-vector-icon-template-digital-documents_279597-1038.jpg?w=740"
          alt="FMCSA"
          className="h-80 object-contain"
        />
        <img
          src="https://img.freepik.com/free-vector/logo-with-circular-shapes_1071-115.jpg?t=st=1746640150~exp=1746643750~hmac=b8f7a96c37a2ca14b88449f1373f82411f9246f6d1aa41aa0f10a2c8518983f4&w=740"
          alt="NHTSA"
          className="h-60 object-contain"
        />
        <img
          src="https://img.freepik.com/premium-vector/digital-document-logo-design-template_18099-2354.jpg?w=740"
          alt="eKomi"
          className="h-60 object-contain"
        />
      </div>

      <h2 className="mt-10 text-4xl font-semibold text-gray-700">
        TO SERVE THE ESSENTIALS, WE COVER <br className="hidden md:block" /> ALL
        OVER THE WORLD
      </h2>

      {/* Center Large Image */}
      <div className="mt-12 flex justify-center">
        <img
          src="/map.png"
          alt="World Map"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Partners;
