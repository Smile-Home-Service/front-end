import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/card/Card"

const services = [
  {
    title: "House Cleaning",
    description: "Professional cleaning services for your home",
    icon: "🏠",
    image: "/house-cleaning-professional.png",
  },
  {
    title: "Plumbing",
    description: "Expert plumbers for all your water and pipe needs",
    icon: "🔧",
    image: "/plumber-fixing-pipes.png",
  },
  {
    title: "Electrical Work",
    description: "Licensed electricians for safe electrical solutions",
    icon: "⚡",
    image: "/electrician-panel-work.png",
  },
  {
    title: "Gardening",
    description: "Landscaping and garden maintenance services",
    icon: "🌱",
    image: "/placeholder-jp3cg.png",
  },
  {
    title: "Handyman",
    description: "General repairs and maintenance around your home",
    icon: "🔨",
    image: "/handyman-home-repairs.png",
  },
  {
    title: "Painting",
    description: "Interior and exterior painting by professionals",
    icon: "🎨",
    image: "/house-painter.png",
  },
]

export default function ServiceCategories() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we connect you with skilled professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{service.icon}</span>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}