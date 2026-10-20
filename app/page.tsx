import { AgentsModule } from "@/components/AgentsModule";
import { ApiModule } from "@/components/ApiModule";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview";
import { ProductPanel } from "@/components/ProductPanel";
import { ShaderBackground } from "@/components/ShaderBackground";
import { SignOff } from "@/components/SignOff";
import { StudioModule } from "@/components/StudioModule";
import { TrustMarquee } from "@/components/TrustMarquee";

export default function Home() {
  return (
    <div className="auralis-page min-h-screen text-white">
      <ShaderBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-[72px]" id="main-content">
          <Hero />
          <ProductPanel />
          <TrustMarquee />
          <Overview />
          <StudioModule />
          <AgentsModule />
          <ApiModule />
          <SignOff />
        </main>
        <Footer />
      </div>
    </div>
  );
}
