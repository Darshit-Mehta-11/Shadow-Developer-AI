const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const analyzeGithub = async (req, res) => {

  try {

    const { username } = req.params;

    // SUPPORT USERNAME + URL
    let cleanUsername = username;

    if (username.includes("github.com")) {

      const parts = username.split("github.com/");
      cleanUsername = parts[1]?.replaceAll("/", "");

    }

    // PROFILE
    const profileRes = await axios.get(
      `https://api.github.com/users/${cleanUsername}`
    );

    // REPOS
    const reposRes = await axios.get(
      `https://api.github.com/users/${cleanUsername}/repos?sort=updated`
    );

    const profile = profileRes.data;
    const repos = reposRes.data;
    const hasReact = repos.some(
      repo =>
        repo.description?.toLowerCase().includes("react") ||
        repo.language === "JavaScript"
    );

    const hasPython = repos.some(
      repo => repo.language === "Python"
    );

    const hasAI = repos.some(
      repo =>
        repo.name.toLowerCase().includes("ai") ||
        repo.description?.toLowerCase().includes("ai")
    );

    const hasBackend = repos.some(
      repo =>
        repo.description?.toLowerCase().includes("api") ||
        repo.description?.toLowerCase().includes("backend")
    );

    // LANGUAGE COUNT
    const languageCount = {};

    repos.forEach((repo) => {

      if (repo.language) {

        languageCount[repo.language] =
          (languageCount[repo.language] || 0) + 1;

      }

    });

    // TOP LANGUAGE
    const topLanguage =
      Object.keys(languageCount).sort(
        (a, b) => languageCount[b] - languageCount[a]
      )[0] || "Unknown";

    // REPO ANALYSIS
    const repoInsights = repos.slice(0, 15).map((repo) => ({

      name: repo.name,

      description:
        repo.description || "No description available",

      language:
        repo.language || "Unknown",

      stars:
        repo.stargazers_count,

      forks:
        repo.forks_count,

      updated:
        repo.updated_at

    }));
    console.log(
      "KEY:",
      process.env.GEMINI_API_KEY?.slice(0, 12)
    );
    // AI MODEL
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    const prompt = `

You are SHADOW AI.

You are an elite GitHub intelligence engine used by recruiters, founders, engineering managers and technical evaluators.

Your task is NOT to summarize repositories.

Your task is to infer engineering behavior, learning patterns, technical direction, project maturity, career trajectory and hiring signals from actual GitHub data.

Analyze ONLY the provided GitHub data.

========================
GITHUB PROFILE
========================

Username: ${profile.login}

Bio: ${profile.bio || "No bio"}

Followers: ${profile.followers}

Public Repositories: ${profile.public_repos}

Top Language: ${topLanguage}

========================
REPOSITORIES
========================

${JSON.stringify(repoInsights, null, 2)}

========================
STRICT RULES
========================

DO NOT:

- Repeat repository descriptions
- Repeat stars/forks unnecessarily
- Generate generic advice
- Generate beginner-level output
- Mention things that cannot be inferred
- Give identical output across users

INSTEAD:

- Infer engineering direction
- Infer project-building behavior
- Infer consistency of learning
- Infer technology focus
- Infer portfolio maturity
- Infer internship readiness
- Infer hiring signals
- Infer technical gaps
- Infer growth opportunities

Every point must be different.

Output must change significantly when repositories change.

========================
ADVANCED INFERENCE RULES
========================

Roadmap MUST be generated from:

- Languages used
- Repository categories
- Project complexity
- Repository descriptions
- Repository activity

Recruiter Intelligence MUST be generated from:

- Technical diversity
- Repository quality
- Engineering depth
- Project ownership
- Technology adoption

Shadow AI Analysis MUST identify:

- Builder vs Learner behavior
- Product mindset
- Open-source mindset
- Full-stack vs Frontend vs Backend tendency
- AI/ML interest
- DevOps exposure
- Architecture maturity

If evidence is weak, explicitly mention limited repository evidence.

NEVER produce identical roadmap or recruiter output across different GitHub profiles.
========================
RETURN JSON ONLY
========================

{
  "analysis": [
    {
      "title": "Engineering Direction",
      "content": "..."
    },
    {
      "title": "Technical Strength",
      "content": "..."
    },
    {
      "title": "Project Maturity",
      "content": "..."
    },
    {
      "title": "Learning Pattern",
      "content": "..."
    },
    {
      "title": "Portfolio Insight",
      "content": "..."
    },
    {
      "title": "Growth Opportunity",
      "content": "..."
    }
  ],

  "roadmap": [
    {
      "title": "Immediate Next Step",
      "content": "..."
    },
    {
      "title": "3 Month Growth Path",
      "content": "..."
    },
    {
      "title": "Skill Expansion",
      "content": "..."
    },
    {
      "title": "Career Positioning",
      "content": "..."
    }
  ],

  "recruiter": [
    {
      "title": "Hiring Signal",
      "content": "..."
    },
    {
      "title": "Internship Readiness",
      "content": "..."
    },
    {
      "title": "Engineering Potential",
      "content": "..."
    },
    {
      "title": "Recruiter Verdict",
      "content": "..."
    }
  ]
}

Return valid JSON only.

`;

    let parsedAI;

    try {

      const result =
        await model.generateContent(prompt);

      const rawText =
        result.response.text();

      const cleanedText = rawText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      parsedAI = JSON.parse(cleanedText);

      console.log("===== GEMINI RESPONSE =====");
      console.log(parsedAI);

    } catch (error) {

      console.log("===== GEMINI ERROR =====");
      console.log(error);

      parsedAI = {

        analysis: repoInsights.slice(0, 6).map((repo) => ({

          title: repo.name,

          content:
            `${repo.name} uses ${repo.language}. Description: ${repo.description}. Stars: ${repo.stars}, Forks: ${repo.forks}.`

        })),

        roadmap: [

          {
            title: "Immediate Focus",
            content:
              hasReact
                ? "Strengthen React architecture, state management, performance optimization, authentication flows, and reusable component design."
                : hasBackend
                  ? "Focus on API security, database design, authentication, caching, and scalable backend architecture."
                  : `Build deeper expertise in ${topLanguage} through larger real-world projects and production workflows.`
          },

          {
            title: "Project Depth",
            content:
              "Move beyond feature-based projects and start building production-grade applications with testing, documentation, deployment pipelines, and monitoring."
          },

          {
            title: "Engineering Maturity",
            content:
              "Improve code organization, error handling, scalability patterns, system design understanding, and maintainability practices."
          },

          {
            title: "Career Positioning",
            content:
              hasAI
                ? "Position yourself as an AI-enabled developer by combining software engineering with practical AI product development."
                : "Build a stronger public portfolio showcasing problem-solving ability, project ownership, and engineering consistency."
          }

        ],

        recruiter: [

          {
            title: "What Stands Out",
            content:
              `The profile demonstrates experience across ${repos.length} repositories with strongest concentration around ${topLanguage}.`
          },

          {
            title: "Evidence Recruiters Can Trust",
            content:
              "Multiple repositories provide tangible proof of hands-on development rather than purely theoretical learning."
          },

          {
            title: "Current Gap",
            content:
              "Production deployment, testing strategy, scalability considerations, and project documentation could be strengthened further."
          },

          {
            title: "Recruiter Verdict",
            content:
              hasAI
                ? "Developer shows strong curiosity toward emerging technologies and product experimentation with AI-oriented thinking."
                : hasReact
                  ? "Developer appears suitable for frontend/full-stack internship opportunities with continued portfolio growth."
                  : "Developer demonstrates practical engineering potential and a strong foundation for entry-level software roles."
          }

        ]

      };

    }

    res.json({

      profile,
      repos,
      topLanguage,

      analysis:
        parsedAI.analysis || [],

      roadmap:
        parsedAI.roadmap || [],

      recruiter:
        parsedAI.recruiter || []

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  analyzeGithub
};