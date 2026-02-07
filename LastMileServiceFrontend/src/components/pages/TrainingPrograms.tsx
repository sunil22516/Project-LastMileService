export default function TrainingPrograms(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-5xl font-semibold tracking-tight">Training Programs</h1>
        <p className="mt-3 text-white/70">Brand-aligned modules, assessments, and badges.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {["AC Pro", "Washer Expert", "Refrigeration"].map(t=>(
            <div key={t} className="card-soft p-6">
              <div className="font-semibold">{t}</div>
              <p className="text-white/60 text-sm mt-1">Self-paced · Certificate</p>
              <a href="#/certification" className="btn btn-solid mt-4">Enroll →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
