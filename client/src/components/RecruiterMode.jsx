const RecruiterMode = ({ analysis }) => {

  if (!analysis) return null;

  return (

    <div className="max-w-5xl mx-auto mt-10">

      <div className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-cyan-500/10
        to-purple-500/10
        border
        border-cyan-400/20
        rounded-3xl
        p-10
        backdrop-blur-xl
        shadow-2xl
        shadow-cyan-500/10
      ">

        {/* Glow */}
        <div className="
          absolute
          top-0
          right-0
          w-72
          h-72
          bg-cyan-400/20
          blur-[120px]
          rounded-full
        " />

        <h1 className="
          text-4xl
          font-extrabold
          text-cyan-400
          mb-8
          relative
          z-10
        ">

          Recruiter Mode

        </h1>

        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          relative
          z-10
        ">

          {/* Google */}
          <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            hover:scale-105
            transition-all
            duration-300
          ">

            <h2 className="
              text-2xl
              font-bold
              text-cyan-400
            ">

              Google

            </h2>

            <p className="
              text-gray-300
              mt-4
              leading-relaxed
            ">

              Strong frontend and rapid learning mindset.
              Needs larger production-scale projects
              for stronger hiring confidence.

            </p>

            <h3 className="
              text-3xl
              font-bold
              text-green-400
              mt-6
            ">

              78%

            </h3>

          </div>

          {/* Microsoft */}
          <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            hover:scale-105
            transition-all
            duration-300
          ">

            <h2 className="
              text-2xl
              font-bold
              text-purple-400
            ">

              Microsoft

            </h2>

            <p className="
              text-gray-300
              mt-4
              leading-relaxed
            ">

              Strong consistency and modern stack usage.
              Excellent internship-level candidate.

            </p>

            <h3 className="
              text-3xl
              font-bold
              text-green-400
              mt-6
            ">

              84%

            </h3>

          </div>

          {/* Startup */}
          <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            hover:scale-105
            transition-all
            duration-300
          ">

            <h2 className="
              text-2xl
              font-bold
              text-pink-400
            ">

              Startup Fit

            </h2>

            <p className="
              text-gray-300
              mt-4
              leading-relaxed
            ">

              Excellent builder mentality.
              Strong experimentation behavior
              suitable for fast-paced startups.

            </p>

            <h3 className="
              text-3xl
              font-bold
              text-green-400
              mt-6
            ">

              91%

            </h3>

          </div>

        </div>

      </div>

    </div>

  );
};

export default RecruiterMode;