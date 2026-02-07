import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* existing pages (named exports) */
import { Landing } from "./components/pages/Landing";
import { Services } from "./components/pages/Services";
import { Booking } from "./components/pages/Booking";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";

/* NEW pages (these are default exports I provided) */
import BrandPartnership from "./components/pages/BrandPartnership";
import JoinTechnician from "./components/pages/JoinTechnician";
import TrainingPrograms from "./components/pages/TrainingPrograms";
import Certification from "./components/pages/Certification";
import TrackService from "./components/pages/TrackService";
import GetStarted from "./components/pages/GetStarted";
import ScheduleDemo from "./components/pages/ScheduleDemo";


type RouteKey =
  | "#/" | "#/services" | "#/booking" | "#/about" | "#/contact"
  | "#/brand-partnership" | "#/join-technician" | "#/training-programs" | "#/certification"
  | "#/track-service" | "#/get-started" | "#/schedule-demo" | "#/find-service";

/* tiny hash-router */
function useHashRoute() {
  const [route, setRoute] = useState<string>(window.location.hash || "#/");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const clean = route.replace(/\?.*$/, "") as RouteKey;
  const query = new URLSearchParams(route.split("?")[1] || "");
  return { route: clean, query, push: (h: RouteKey) => (window.location.hash = h) };
}

export default function App() {
  const { route } = useHashRoute();

  const render = () => {
    switch (route) {
      case "#/services":            return <Services onNavigate={() => {}} />;
      case "#/booking":             return <Booking />;
      case "#/about":               return <About />;
      case "#/contact":             return <Contact />;

      /* new */
      case "#/brand-partnership":   return <BrandPartnership />;
      case "#/join-technician":     return <JoinTechnician />;
      case "#/training-programs":   return <TrainingPrograms />;
      case "#/certification":       return <Certification />;
      case "#/track-service":       return <TrackService />;
      case "#/get-started":         return <GetStarted />;
      case "#/schedule-demo":       return <ScheduleDemo />;

      /* canonical find-service lands on Services (kept) */
      case "#/find-service":        return <Services onNavigate={() => {}} />;

      case "#/": default:           return <Landing onNavigate={() => {}} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-14">{render()}</main>
      <Footer />
    </div>
  );
}
