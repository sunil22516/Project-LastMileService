export default function JoinTechnician(){
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="text-5xl font-semibold tracking-tight">Join as Technician</h1>
        <p className="mt-3 text-white/70">Verify skills, upload documents, start receiving jobs.</p>

        <form className="grid gap-4 mt-8">
          <input className="card-soft px-4 py-3" placeholder="Full name" />
          <input className="card-soft px-4 py-3" placeholder="Phone" />
          <input className="card-soft px-4 py-3" placeholder="District / PIN" />
          <input className="card-soft px-4 py-3" placeholder="Primary skills (e.g., AC, WM)" />
          <div className="flex gap-3">
            <a href="#/training-programs" className="btn btn-solid">Apply for Certification →</a>
            <a href="#/" className="btn btn-outline">Cancel</a>
          </div>
        </form>
      </div>
    </section>
  );
}
