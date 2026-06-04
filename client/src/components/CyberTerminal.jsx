const CyberTerminal = ({ analysis }) => {

  if (!analysis) return null;

  return (

    <div className="max-w-5xl mx-auto mt-10">

      <div className="
        bg-black/70
        border
        border-cyan-400/20
        rounded-3xl
        overflow-hidden
        shadow-2xl
        shadow-cyan-500/10
      ">

        {/* Top Bar */}
        <div className="
          flex
          items-center
          gap-3
          px-6
          py-4
          border-b
          border-cyan-400/10
          bg-white/5
        ">

          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />

          <span className="
            text-gray-400
            ml-4
            text-sm
          ">
            shadow-terminal.exe
          </span>

        </div>

        {/* Terminal Content */}
        <div className="
          p-8
          font-mono
          text-green-400
          space-y-4
          text-sm
          md:text-base
        ">

          <p>{">"} Initializing AI Analysis...</p>

          <p>{">"} Detecting Developer Personality...</p>

          <p>{">"} Personality Type: Startup Builder</p>

          <p>
            {">"} Top Language:
            <span className="text-cyan-400 ml-2">
              {analysis.topLanguage}
            </span>
          </p>

          <p>
            {">"} Repository Count:
            <span className="text-cyan-400 ml-2">
              {analysis.reposCount}
            </span>
          </p>

          <p>{">"} AI Verdict:</p>

          <p className="
            text-gray-300
            leading-relaxed
          ">

            Developer demonstrates strong
            experimentation mindset with
            rapid learning capability and
            startup-level execution potential.

          </p>

        </div>

      </div>

    </div>

  );
};

export default CyberTerminal;