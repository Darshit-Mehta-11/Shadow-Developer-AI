const AnalysisCard = ({ analysis }) => {

  const cardStyle = `
    relative
    overflow-hidden
    bg-gradient-to-br
    from-[#111827]
    to-[#0B1120]
    border
    border-white/[0.06]
    rounded-3xl
    p-5
    hover:border-cyan-400/20
    hover:-translate-y-1
    transition-all
    duration-300
    backdrop-blur-xl
    shadow-[0_0_30px_rgba(0,255,255,0.04)]
  `;

  const insightStyle = `
    relative
    bg-white/[0.03]
    border
    border-white/[0.05]
    rounded-2xl
    p-5
    hover:border-cyan-400/20
    transition-all
    duration-300
    overflow-hidden
  `;

  return (

    <div className="max-w-7xl mx-auto mt-8 space-y-6">

      {/* SHADOW AI */}
      <div className={cardStyle}>

        <div className="
          absolute
          top-0
          right-0
          w-52
          h-52
          bg-cyan-500/10
          blur-3xl
          rounded-full
        "></div>

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-6">

            <div className="
              w-3
              h-3
              rounded-full
              bg-cyan-400
              animate-pulse
            "></div>

            <h2 className="
              text-white
              text-2xl
              font-bold
              tracking-wide
            ">
              Shadow AI Analysis
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {analysis?.analysis?.map((item, i) => (

              <div
                key={i}
                className={insightStyle}
              >

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-cyan-500/[0.03]
                  to-transparent
                "></div>

                <div className="relative z-10 flex gap-4">

                  <div className="
                    min-w-[48px]
                    h-[48px]
                    rounded-2xl
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    flex
                    items-center
                    justify-center
                    text-cyan-300
                    font-bold
                    text-lg
                  ">

                    {i + 1}

                  </div>

                  <div className="space-y-3">

                    <div className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-400/10
                      border
                      border-cyan-400/10
                      text-cyan-300
                      text-xs
                      font-semibold
                      tracking-wide
                    ">

                      AI REPOSITORY INSIGHT

                    </div>

                    <p className="
                      text-gray-200
                      text-[15px]
                      leading-8
                      tracking-wide
                    ">

                      {typeof item === "object"
                        ? item.content
                        : item}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ROADMAP + RECRUITER */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* ROADMAP */}
        <div className={cardStyle}>

          <div className="
            absolute
            bottom-0
            left-0
            w-44
            h-44
            bg-blue-500/10
            blur-3xl
            rounded-full
          "></div>

          <div className="relative z-10">

            <h2 className="
              text-white
              text-2xl
              font-bold
              mb-6
            ">

              🚀 AI Career Roadmap

            </h2>

            <div className="space-y-4">

              {analysis?.roadmap?.map((item, i) => (

                <div
                  key={i}
                  className={insightStyle}
                >

                  <div className="flex gap-4">

                    <div className="
                      min-w-[42px]
                      h-[42px]
                      rounded-xl
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      flex
                      items-center
                      justify-center
                      text-cyan-300
                      font-bold
                    ">

                      →

                    </div>

                    <div>

                      <p className="
                        text-gray-200
                        text-[15px]
                        leading-8
                      ">

                        {typeof item === "object"
                          ? item.content
                          : item}

                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* RECRUITER */}
        <div className={cardStyle}>

          <div className="
            absolute
            top-0
            left-0
            w-44
            h-44
            bg-purple-500/10
            blur-3xl
            rounded-full
          "></div>

          <div className="relative z-10">

            <h2 className="
              text-white
              text-2xl
              font-bold
              mb-6
            ">

              🧠 Recruiter Intelligence

            </h2>

            <div className="space-y-4">

              {analysis?.recruiter?.map((item, i) => (

                <div
                  key={i}
                  className={insightStyle}
                >

                  <div className="flex gap-4">

                    <div className="
                      min-w-[42px]
                      h-[42px]
                      rounded-xl
                      bg-purple-400/10
                      border
                      border-purple-400/20
                      flex
                      items-center
                      justify-center
                      text-purple-300
                      font-bold
                    ">

                      ✦

                    </div>

                    <div>

                      <p className="
                        text-gray-200
                        text-[15px]
                        leading-8
                      ">

                        {typeof item === "object"
                          ? item.content
                          : item}

                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AnalysisCard;