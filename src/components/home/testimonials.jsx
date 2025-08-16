import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/card/Card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "ServiceHub made finding a reliable cleaner so easy. The app is intuitive and the service was exceptional!",
    rating: 5,
    avatar: "/professional-woman-smiling-headshot.png",
  },
  {
    name: "Mike Chen",
    role: "Property Manager",
    content:
      "I use ServiceHub for all my properties. The quality of professionals and quick booking process is unmatched.",
    rating: 5,
    avatar: "/professional-man-smiling-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Busy Parent",
    content:
      "As a working mom, ServiceHub is a lifesaver. I can book services while commuting and come home to a clean house.",
    rating: 5,
    avatar: "/professional-woman-parent-headshot.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-foreground">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 text-xl mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-foreground italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}