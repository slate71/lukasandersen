export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Lukas Andersen</h1>
          <p className="text-xl text-gray-300">Full Stack Software Engineer</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">AI Prototypes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-400">AI prototype showcase</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
