import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { Hero } from "@/src/components/sections/Hero"
import { Services } from "@/src/components/sections/Services"
import { Process } from "@/src/components/sections/Process"
import { Benefits } from "@/src/components/sections/Benefits"
import { CaseStudies } from "@/src/components/sections/CaseStudies"
import { TechStack } from "@/src/components/sections/TechStack"
import { Pricing } from "@/src/components/sections/Pricing"
import { ContactForm } from "@/src/components/sections/ContactForm"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <Benefits />
        <CaseStudies />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
