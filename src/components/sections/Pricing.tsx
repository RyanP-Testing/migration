import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/Card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Foundation",
    price: "Custom",
    description: "Perfect for small to medium businesses starting their cloud journey.",
    features: [
      "Cloud readiness assessment",
      "Basic lift-and-shift migration",
      "Security baseline setup",
      "Post-migration support (30 days)",
      "Basic cost optimization",
    ],
    cta: "Request Quote",
    popular: false,
  },
  {
    name: "Modernization",
    price: "Custom",
    description: "Comprehensive modernization for enterprises seeking scalability.",
    features: [
      "Full architecture refactoring",
      "Kubernetes implementation",
      "CI/CD pipeline automation",
      "Advanced security & compliance",
      "Infrastructure as Code (IaC)",
      "24/7 priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "End-to-end cloud transformation for large-scale organizations.",
    features: [
      "Multi-cloud strategy",
      "Legacy system transformation",
      "Custom DevOps training",
      "Dedicated account manager",
      "Continuous optimization",
      "SLA-backed performance",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement Models</h2>
          <p className="text-muted-foreground text-lg">
            We offer tailored solutions to fit your specific business needs and 
            technical requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-primary shadow-lg scale-105 z-10' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
