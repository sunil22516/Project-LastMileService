export default function GetStarted(){
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Let’s get you set up</h1>
        <p className="mt-3 text-white/70">Choose your path.</p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a href="#/brand-partnership" className="btn btn-solid">I’m a Brand →</a>
          <a href="#/join-technician" className="btn btn-outline">I’m a Technician</a>
          <a href="#/services" className="btn btn-outline">I’m a Consumer</a>
        </div>
      </div>
    </section>
  );
}
