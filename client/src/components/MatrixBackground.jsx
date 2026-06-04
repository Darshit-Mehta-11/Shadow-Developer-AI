const MatrixBackground = () => {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Gradient Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-cyan-500/20
        blur-[120px]
        rounded-full
        animate-pulse
      " />

      <div className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-purple-500/20
        blur-[120px]
        rounded-full
        animate-pulse
      " />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-10
        "
        style={{
          backgroundImage:
            "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(to right, #06b6d4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

    </div>

  );
};

export default MatrixBackground;