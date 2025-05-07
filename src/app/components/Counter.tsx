"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { title: "Years of Business", end: 25 },
    { title: "Workers and technicians", end: 480 },
    { title: "Satisfied Customers", end: 60, suffix: "K+" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/speed-machine_23-2151955603.jpg?t=st=1746638850~exp=1746642450~hmac=aea325c447cdd47d7cd40712a583eb33a1687b3d3331a563224b3848a37ce5b8&w=1060')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-5xl font-bold text-yellow-400 mb-2">
              {inView && (
                <CountUp
                  end={stat.end}
                  duration={2}
                  start={0}
                  suffix={stat.title === "Satisfied Customers" ? "K+" : "+"}
                />
              )}
            </h2>
            <p className="text-xl font-semibold">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterComponent;




