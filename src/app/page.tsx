export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans">
      <main className="max-w-4xl mx-auto pt-24 pb-16 px-6 flex flex-col items-center">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl sm:text-2xl font-extrabold tracking-tight">
            Stop guessing what to build, <br />
            <span className="text-slate-500">get a complete product plan.</span>
          </h1>
          <p className="text text-slate-700 max-w-xl mx-auto">
            AI Co-founder for the next startup or project you want to build.
            Define the problem, shape the solution, and create roadmaps, feature priorities, and MVPs in minutes.
          </p>
        </div>
        <div className="">
          <div className="space-y-4">
            <div className="pt-4">
              <a
                href="/chat"
                className="inline-block w-full md:w-auto text-center px-8 py-4 rounded-xl font-bold shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg bg-black  text-white"
              >
                Get started — it's free
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}