import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/Card"
import { Badge } from "@/src/components/ui/Badge"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    company: "FinTech Global",
    industry: "Financial Services",
    challenge: "Legacy monolithic architecture causing slow deployments and frequent downtime.",
    result: "45% cost reduction, 99.99% uptime, 10x faster deployments.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1000",
  },
  {
    company: "HealthStream",
    industry: "Healthcare",
    challenge: "Scaling issues during peak usage and HIPAA compliance concerns.",
    result: "Zero downtime migration, automated compliance, 60% faster response times.",
    tags: ["Azure", "Docker", "CI/CD"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    company: "RetailFlow",
    industry: "E-commerce",
    challenge: "High infrastructure costs and poor global performance.",
    result: "35% cost savings, global edge acceleration, 2x conversion rate increase.",
    tags: ["GCP", "Serverless", "CDN"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped leading companies modernize their infrastructure 
              and achieve their business goals.
            </p>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 hover:underline">
            View All Case Studies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{item.industry}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{item.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-bold text-primary mb-4">{item.result}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.challenge}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-muted/50">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
