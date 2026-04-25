export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#FF5722] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">ArchyClass</h1>
        <p className="text-xl">No Zero Days</p>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#FF5722] mb-8">SS1 Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/ss1" className="bg-[#FF5722] text-white p-6 rounded-lg hover:opacity-90">
            <h3 className="text-xl font-bold">SS1 Class</h3>
            <p>Click to view subjects</p>
          </a>
        </div>
      </section>
    </main>
  )
    }
