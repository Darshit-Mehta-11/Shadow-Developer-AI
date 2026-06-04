const AIRoadmap = ({ analysis }) => {

  if (!analysis) return null;

  return (

    <div className="max-w-5xl mx-auto mt-10">

      <div className="
        bg-white/5
        border
        border-cyan-400/20
        rounded-3xl
        p-10
        backdrop-blur-xl
      ">

        <h1 className="
          text-4xl
          font-bold
          text-cyan-400
          mb-10
        ">

          AI Career Roadmap

        </h1>

        <div className="space-y-6">

          <div className="
            border-l-4
            border-cyan-400
            pl-6
          ">

            <h2 className="
              text-2xl
              font-bold
              text-white
            ">

              Phase 1 — Strong Foundations

            </h2>

            <p className="
              text-gray-400
              mt-2
            ">

              Improve DSA, GitHub consistency,
              and advanced React concepts.

            </p>

          </div>

          <div className="
            border-l-4
            border-purple-400
            pl-6
          ">

            <h2 className="
              text-2xl
              font-bold
              text-white
            ">

              Phase 2 — Production Projects

            </h2>

            <p className="
              text-gray-400
              mt-2
            ">

              Build scalable MERN + AI projects
              with authentication and deployment.

            </p>

          </div>

          <div className="
            border-l-4
            border-green-400
            pl-6
          ">

            <h2 className="
              text-2xl
              font-bold
              text-white
            ">

              Phase 3 — Internship Ready

            </h2>

            <p className="
              text-gray-400
              mt-2
            ">

              Practice interviews, system design,
              and open-source contributions.

            </p>

          </div>

          <div className="
            border-l-4
            border-pink-400
            pl-6
          ">

            <h2 className="
              text-2xl
              font-bold
              text-white
            ">

              Final Goal — AI Engineer

            </h2>

            <p className="
              text-gray-400
              mt-2
            ">

              Become a strong AI-powered
              full-stack engineer capable of
              building scalable intelligent systems.

            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default AIRoadmap;