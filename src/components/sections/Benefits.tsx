import { motion } from "framer-motion"
import { TrendingDown, TrendingUp, ShieldCheck, Zap } from "lucide-react"

const benefits = [
  {
    title: "Cost Reduction",
    description: "Average 40% reduction in infrastructure costs through right-sizing and automation.",
    icon: TrendingDown,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Scalability",
    description: "Handle 10x traffic spikes with ease using auto-scaling cloud-native architectures.",
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security controls and automated compliance monitoring.",
    icon: ShieldCheck,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Performance",
    description: "Up to 60% faster application response times through global CDN and edge computing.",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CloudScale?</h2>
          <p className="text-muted-foreground text-lg">
            We deliver measurable business value through expert cloud engineering 
            and strategic modernization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${benefit.bg} flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
