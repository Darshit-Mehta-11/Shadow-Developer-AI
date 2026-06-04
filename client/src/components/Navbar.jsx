const Navbar = () => {

  return (

    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[#020617]/80
      backdrop-blur-xl
      border-b
      border-white/5
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        md:px-10
        h-[72px]
        flex
        items-center
        justify-between
      ">

        {/* LEFT */}
        <div className="
          flex
          items-center
          gap-4
        ">

          {/* PREMIUM LOGO */}
          <div className="
            relative
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-br
            from-cyan-400
            via-blue-500
            to-indigo-600
            p-[1px]
            shadow-lg
            shadow-cyan-500/20
          ">

            {/* Inner */}
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

              {/* Hexagon Shape */}
              <div className="
                w-6
                h-6
                rotate-45
                rounded-sm
                border
                border-cyan-400
                flex
                items-center
                justify-center
              ">

                <div className="
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                  shadow-lg
                  shadow-cyan-400/50
                " />

              </div>

              {/* Glow */}
              <div className="
                absolute
                w-10
                h-10
                bg-cyan-400/10
                blur-xl
              " />

            </div>

          </div>

          {/* TEXT */}
          <div>

            <h1 className="
              text-2xl
              md:text-3xl
              font-black
              tracking-tight
              text-white
            ">

              Shadow

              <span className="text-cyan-400">
                AI
              </span>

            </h1>

            <p className="
              text-[11px]
              text-gray-500
              tracking-wide
              -mt-1
            ">

              GitHub Developer Intelligence

            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="
          hidden
          md:flex
          items-center
        ">

          <div className="
            px-4
            py-2
            rounded-full
            bg-white/5
            border
            border-white/10
            text-gray-300
            text-xs
            font-medium
          ">

            Analyze • Detect • Improve

          </div>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;