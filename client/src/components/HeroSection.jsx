const HeroSection = () => {

  return (

    <div className="
      text-center
      pt-24
      px-6
      relative
    ">

      {/* Glow */}
      <div className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-cyan-400/10
        blur-[120px]
        rounded-full
      " />

      <div className="relative z-10">

        <h1 className="
          text-5xl
          md:text-7xl
          font-extrabold
          text-cyan-400
          leading-tight
          float-animation
        ">

          SHADOW <br />

          <span className="text-white">
            DEVELOPER AI
          </span>

        </h1>

        <p className="
          text-gray-400
          max-w-3xl
          mx-auto
          mt-8
          text-lg
          leading-relaxed
        ">

          Futuristic AI system that analyzes
          developer behavior, coding psychology,
          burnout risk, productivity patterns,
          and internship readiness using GitHub intelligence.

        </p>

      </div>

    </div>

  );
};

export default HeroSection;