import Hero from "./components/Hero";
import About from "./components/About";
import Background from "./components/Background";
import Problem from "./components/Problem";
import Solutions from "./components/Solutions";
import Model from "./components/Model";
import TechCapabilities from "./components/TechCapabilities";
import StrategicDirection from "./components/StrategicDirection";
import CoreRealisation from "./components/CoreRealisation";
import Impact from "./components/Impact";
import WhyAttendance from "./components/WhyAttendance";
import FutureDirection from "./components/FutureDirection";
import Challenges from "./components/Challenges";
import Conclusion from "./components/Conclusion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* Page 1: Company Profile */}
      <Hero />
      {/* Page 1 cont: Who We Are */}
      <About />
      {/* Page 3: Background / Berulo App */}
      <Background />
      {/* Page 4: Problem Statement */}
      <Problem />
      {/* Page 5: Our Solution */}
      <Solutions />
      {/* Page 6: ULX Ltd's Model */}
      <Model />
      {/* Page 7: Technical Capabilities */}
      <TechCapabilities />
      {/* Page 8: Immediate Needs + Strategic Direction */}
      <StrategicDirection />
      {/* Page 9: The Core Realisation */}
      <CoreRealisation />
      {/* Page 10: Impact to Date */}
      <Impact />
      {/* Page 11: Why Focus on Attendance? */}
      <WhyAttendance />
      {/* Page 12: Future Direction */}
      <FutureDirection />
      {/* Page 13–14: Current Challenges + Financial */}
      <Challenges />
      {/* Page 15: Conclusion */}
      <Conclusion />
      {/* Page 16: Contact Us */}
      <Contact />
      <Footer />
    </main>
  );
}
