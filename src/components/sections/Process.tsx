import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Assessment",
    description: "We analyze your current infrastructure, applications, and business goals to create a custom roadmap.",
    details: ["Inventory analysis", "TCO calculation", "Risk assessment"],
  },
  {
    title: "Planning",
    description: "Detailed architecture design and migration strategy selection (Rehost, Replatform, or Refactor).",
    details: ["Architecture design", "Security planning", "Migration path selection"],
  },
  {
    title: "Migration",
    description: "Execution of the migration with zero downtime using automated tools and expert oversight.",
    details: ["Data replication", "App deployment", "Testing & validation"],
  },
  {
    title: "Optimization",
    description: "Post-migration tuning to ensure maximum performance and minimum costs in the new environment.",
    details: ["Performance tuning", "Cost monitoring", "Knowledge transfer"],
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proven Migration Framework</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We follow a structured, four-phase approach to ensure your migration is 
              predictable, secure, and successful.
            </p>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {index + 1}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="rounded-2xl border bg-card p-8 shadow-xl">
              <div className="space-y-6">
                <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-muted rounded animate-pulse" />
                  <div className="h-20 bg-muted rounded animate-pulse" />
                  <div className="h-20 bg-muted rounded animate-pulse" />
                </div>
                <div className="h-32 bg-muted rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
              </div>
              <div className="mt-8 pt-8 border-t flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20" />
                  <div className="w-8 h-8 rounded-full bg-primary/20" />
                </div>
                <div className="h-8 w-24 bg-primary rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
