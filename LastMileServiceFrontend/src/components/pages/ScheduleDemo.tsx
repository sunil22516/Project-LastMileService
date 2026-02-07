export default function ScheduleDemo(){
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="text-5xl font-semibold tracking-tight">Schedule a Demo</h1>
        <p className="mt-3 text-white/70">See ServiceLink in action for your brand.</p>
        <form className="grid gap-4 mt-8">
          <input className="card-soft px-4 py-3" placeholder="Work email" />
          <input className="card-soft px-4 py-3" placeholder="Company / Brand" />
          <input className="card-soft px-4 py-3" placeholder="Region" />
          <button className="btn btn-solid w-max">Request Demo →</button>
        </form>
      </div>
    </section>
  );
}
