const Footer = () => {

  return (

    <footer className="
      mt-20
      border-t
      border-white/5
      bg-[#020617]
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        md:px-10
        py-10
      ">

        {/* TOP */}
        <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-10
        ">

          {/* LEFT */}
          <div className="max-w-md">

            <div className="
              flex
              items-center
              gap-4
            ">

              {/* LOGO */}
              <div className="
                relative
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-indigo-600
                p-[1px]
                shadow-lg
                shadow-cyan-500/20
              ">

                <div className="
                  w-full
                  h-full
                  rounded-2xl
                  bg-[#020617]
                  flex
                  items-center
                  justify-center
                  relative
                  overflow-hidden
                ">

                  {/* Hexagon */}
                  <div className="
                    w-7
                    h-7
                    rotate-45
                    rounded-sm
                    border
                    border-cyan-400
                    flex
                    items-center
                    justify-center
                  ">

                    <div className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-cyan-400
                    " />

                  </div>

                  {/* Glow */}
                  <div className="
                    absolute
                    w-12
                    h-12
                    bg-cyan-400/10
                    blur-xl
                  " />

                </div>

              </div>

              {/* TEXT */}
              <div>

                <h1 className="
                  text-3xl
                  font-black
                  text-white
                ">

                  Shadow

                  <span className="text-cyan-400">
                    AI
                  </span>

                </h1>

                <p className="
                  text-gray-500
                  text-sm
                ">

                  Developer Intelligence Platform

                </p>

              </div>

            </div>

            <p className="
              text-gray-400
              text-sm
              leading-relaxed
              mt-6
            ">

              Shadow AI analyzes GitHub activity
              to detect coding consistency,
              productivity patterns, developer
              growth, and AI-based career insights.

            </p>

          </div>

          {/* RIGHT */}
          <div>

            <h2 className="
              text-white
              font-semibold
              mb-4
            ">

              Core Technologies

            </h2>

            <div className="
              flex
              flex-wrap
              gap-3
              max-w-sm
            ">

              {[
                "React",
                "Tailwind",
                "Node.js",
                "Express",
                "GitHub API",
                "AI Engine"
              ].map((tech) => (

                <div
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-sm
                    text-gray-300
                    hover:border-cyan-400/20
                    hover:text-cyan-400
                    transition-all
                  "
                >

                  {tech}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          border-t
          border-white/5
          mt-8
          pt-5
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-3
        ">

          <p className="
            text-gray-500
            text-sm
          ">

            © 2026 Shadow AI

          </p>

          <p className="
            text-cyan-400
            text-sm
          ">

            AI-powered GitHub Intelligence

          </p>

        </div>

      </div>

    </footer>

  );
};

export default Footer;