import { useState } from "react";
import axios from "axios";

import ProfileCard from "./ProfileCard";
import AnalysisCard from "./AnalysisCard";
import AILoader from "./AILoader";
import LanguageChart from "./LanguageChart";
// import DownloadReport from "./DownloadReport";

const GithubInput = () => {

  const [username, setUsername] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  // HANDLE USERNAME OR URL
  const handleInput = (value) => {

    if (value.includes("github.com/")) {

      const parts = value.split("github.com/");

      const extractedUsername =
        parts[1]?.split("/")[0];

      setUsername(extractedUsername);

    } else {

      setUsername(value);

    }

  };

  const analyzeGithub = async () => {

    if (!username) return;

    try {

      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/github/${username}`
      );

      setTimeout(() => {

        setAnalysis(res.data);

        setLoading(false);

      }, 1500);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  return (

    <div className="relative z-10 px-6 md:px-10 mt-20">

      {/* INPUT SECTION */}
      <div className="
        max-w-4xl
        mx-auto
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-6
        shadow-2xl
      ">

        <h2 className="
          text-3xl
          md:text-5xl
          font-black
          text-center
          text-white
        ">

          Analyze Your

          <span className="text-cyan-400">
            {" "}GitHub Intelligence
          </span>

        </h2>

        <p className="
          text-center
          text-gray-400
          mt-4
          max-w-2xl
          mx-auto
          leading-relaxed
        ">

          Shadow AI analyzes developer behavior,
          coding consistency, productivity patterns,
          and career growth using GitHub intelligence.

        </p>

        {/* INPUT */}
        <div className="
          flex
          flex-col
          md:flex-row
          gap-4
          justify-center
          items-center
          mt-10
        ">

          <input
            type="text"
            placeholder="Enter GitHub Username or URL"
            value={username}
            onChange={(e) => handleInput(e.target.value)}
            className="
              w-full
              md:w-[420px]
              bg-[#0F172A]
              border
              border-white/10
              text-white
              px-6
              py-4
              rounded-2xl
              outline-none
              focus:border-cyan-400
              transition-all
            "
          />

          <button
            onClick={analyzeGithub}
            className="
              bg-cyan-400
              hover:bg-cyan-300
              text-black
              font-bold
              px-8
              py-4
              rounded-2xl
              transition-all
              hover:scale-105
              shadow-lg
              shadow-cyan-500/20
            "
          >

            Analyze AI

          </button>

        </div>

      </div>

      {/* LOADER */}
      {loading && <AILoader />}

      {/* RESULTS */}
      {!loading && analysis && (

        <div
          id="report-section"
          className="mt-14 space-y-10"
        >

          <ProfileCard data={analysis?.profile} />

          <AnalysisCard analysis={analysis} />

          <LanguageChart languages={analysis?.languages} />

          {/* <div className="flex justify-center">

            <DownloadReport />

          </div> */}

        </div>

      )}

    </div>

  );

};

export default GithubInput;