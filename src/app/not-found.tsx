import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center font-mono">
        <div className="flex items-center gap-2 mb-6 opacity-60 max-w-sm mx-auto">
          <div className="w-8 h-px bg-white" />
          <span className="text-white text-[10px] tracking-wider">∞</span>
          <span className="text-white text-[10px] tracking-wider">ERROR.LOG</span>
          <div className="flex-1 h-px bg-white" />
        </div>
        <h1 className="text-6xl lg:text-8xl text-white font-bold tracking-wider mb-3" style={{ letterSpacing: "0.1em" }}>
          404
        </h1>
        <p className="text-white/60 text-xs lg:text-sm tracking-wider mb-10">
          {`> page.not.found`}
        </p>
        <Link
          href="/"
          className="inline-block relative px-5 py-2.5 bg-transparent text-white text-xs tracking-wider border border-white hover:bg-white hover:text-black transition-all duration-200"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
