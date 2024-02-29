import { ConnectWithUs } from "./components/connect-with-us";
import { Hero } from "./components/hero";
import { ProjectsParallax } from "./components/projects";
import { Testimonials } from "./components/testimonials";

export default function OurProjects() {
  return (
    <div>
      <Hero />
      <ProjectsParallax />
      <Testimonials />
      <ConnectWithUs />
    </div>
  );
}
