import Image from "next/image";

export default function TitleWithDescription() {
  return (
    <div className="w-full mx-auto  py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch ml-20">
        {/* Text Column */}
        <div className="flex flex-col justify-center ">
          <h4 className="text-red-600 font-semibold mb-2 text-2xl ">
            Who We Are?
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a Verified History Report!
          </h2>
          <p className="w-11/12 tracking-widest">
            At Vehiclevinreport, we provide comprehensive insights into the
            history and background of vehicles. Whether you're considering
            buying a pre-owned car or simply researching the origins of a
            vehicle, our detailed reports offer valuable information about
            previous ownership, accident records, service history, and more.
          </p>
        </div>

        {/* Image Column */}
        <div className="flex items-center justify-center">
          <Image
            src="/pexels-karolina-grabowska-7876672.jpg"
            alt="About Us"
            width={500}
            height={500}
            className="w-full max-w-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
