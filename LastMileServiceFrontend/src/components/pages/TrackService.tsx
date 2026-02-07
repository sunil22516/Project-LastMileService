export default function TrackService(){
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h1 className="text-5xl font-semibold tracking-tight">Track Service</h1>
        <p className="mt-3 text-white/70">Live status, ETA, and technician details.</p>
        <div className="grid gap-4 mt-8">
          <div className="card-soft p-4">Service ID: SL-23901</div>
          <div className="card-soft p-4">📍 Technician on the way · ETA 24 mins</div>
          <div className="card-soft p-4">🧰 Carrying genuine spare parts</div>
          <div className="card-soft p-4">💬 In-app chat available</div>
        </div>
      </div>
    </section>
  );
}
