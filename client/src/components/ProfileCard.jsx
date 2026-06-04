const ProfileCard = ({ data }) => {

  if (!data) return null;

  return (

    <div className="max-w-5xl mx-auto mt-14">

      <div className="
        relative
        overflow-hidden
        bg-white/5
        border
        border-cyan-400/20
        rounded-3xl
        p-8
        backdrop-blur-xl
        shadow-2xl
        shadow-cyan-500/10
        hover:shadow-cyan-500/30
        transition-all
        duration-500
        hover:scale-[1.02]
      ">

        {/* Glow */}
        <div className="
          absolute
          -top-20
          -right-20
          w-60
          h-60
          bg-cyan-400/20
          blur-[100px]
          rounded-full
        " />

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          gap-8
          relative
          z-10
        ">

          {/* Avatar */}
          <img
            src={data.avatar_url}
            alt="avatar"
            className="
              w-40
              h-40
              rounded-full
              border-4
              border-cyan-400
              shadow-2xl
              shadow-cyan-500/30
              hover:rotate-3
              transition-all
              duration-500
            "
          />

          {/* Info */}
          <div className="flex-1">

            <h1 className="
              text-4xl
              font-extrabold
              text-cyan-400
            ">

              {data.name || "Unknown"}

            </h1>

            <p className="
              text-gray-400
              mt-2
              text-lg
            ">

              @{data.login}

            </p>

            <p className="
              text-gray-300
              mt-6
              leading-relaxed
              max-w-2xl
            ">

              {data.bio || "No bio available."}

            </p>

            {/* Stats */}
            <div className="
              flex
              flex-wrap
              gap-6
              mt-8
            ">

              <div className="
                bg-cyan-400/10
                border
                border-cyan-400/20
                px-6
                py-4
                rounded-2xl
              ">

                <h2 className="text-3xl font-bold text-cyan-400">

                  {data.public_repos}

                </h2>

                <p className="text-gray-400">
                  Repositories
                </p>

              </div>

              <div className="
                bg-purple-400/10
                border
                border-purple-400/20
                px-6
                py-4
                rounded-2xl
              ">

                <h2 className="text-3xl font-bold text-purple-400">

                  {data.followers}

                </h2>

                <p className="text-gray-400">
                  Followers
                </p>

              </div>

              <div className="
                bg-green-400/10
                border
                border-green-400/20
                px-6
                py-4
                rounded-2xl
              ">

                <h2 className="text-3xl font-bold text-green-400">

                  {data.following}

                </h2>

                <p className="text-gray-400">
                  Following
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default ProfileCard;