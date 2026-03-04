 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-emerald-700">Oak's Garden</h1>
          <p className="text-xl text-stone-400 italic">Welcome to my digital patch of the internet.</p>
        </div>

        {/* Bio Section */}
        <section className="bg-white p-10 rounded-3xl shadow-xl shadow-emerald-900/5 border border-stone-200">
          <h2 className="text-3xl font-bold mb-6 text-emerald-800">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-stone-700">
            I'm a <span className="text-emerald-600 font-bold">Computer Science Graduate</span> who loves building software that's easy to read and even easier to use.
            Welcome to my patch of the web 🌿
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              Data Science
            </span>
            <span className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              AI Development
            </span>
            <span className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              Application Development
            </span>
          </div>
        </section>

        {/* Footer/Contact */}
        <footer className="pt-8 text-stone-400 text-sm">
          Built with Next.js, React, and Tailwind • This is still a work in progress lol
        </footer>
      </div>
    </main>
  );
}
