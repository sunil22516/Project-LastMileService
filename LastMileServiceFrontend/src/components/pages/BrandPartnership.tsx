export default function BrandPartnership(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-5xl font-semibold tracking-tight">Brand Partnership</h1>
        <p className="mt-3 text-white/70">Extend your service footprint with verified rural technicians.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {["Coverage · SLA", "Quality Assurance", "Analytics & Insights"].map(t=>(
            <div key={t} className="card-soft p-6">{t}</div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <a href="#/schedule-demo" className="btn btn-solid">Schedule a Demo →</a>
          <a href="#/get-started" className="btn btn-outline">Get Started</a>
        </div>
      </div>
    </section>
  );
}
