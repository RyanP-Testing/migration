import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/Card"
import { Cloud, Container, Zap, ShieldCheck, BarChart3, RefreshCcw } from "lucide-react"

const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly move your workloads to AWS, Azure, or GCP with our proven migration framework.",
    icon: Cloud,
  },
  {
    title: "Kubernetes & Containers",
    description: "Modernize your applications using Docker and Kubernetes for maximum scalability and portability.",
    icon: Container,
  },
  {
    title: "Legacy Modernization",
    description: "Transform monolithic legacy systems into agile, cloud-native microservices architectures.",
    icon: RefreshCcw,
  },
  {
    title: "Cloud Security",
    description: "Enterprise-grade security audits and implementation to keep your cloud infrastructure compliant.",
    icon: ShieldCheck,
  },
  {
    title: "Cost Optimization",
    description: "Reduce your monthly cloud bill by up to 40% through intelligent resource management.",
    icon: BarChart3,
  },
  {
    title: "DevOps Automation",
    description: "Accelerate delivery with custom CI/CD pipelines and Infrastructure as Code (Terraform).",
    icon: Zap,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Cloud Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end services to ensure your cloud journey is successful, 
            secure, and cost-effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
