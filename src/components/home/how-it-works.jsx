export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Choose Your Service",
      description: "Browse our categories and select the service you need",
    },
    {
      step: "2",
      title: "Book Instantly",
      description: "Pick your preferred time and book with just a few taps",
    },
    {
      step: "3",
      title: "Get Matched",
      description: "We connect you with verified professionals in your area",
    },
    {
      step: "4",
      title: "Service Completed",
      description: "Enjoy quality service and rate your experience",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting help for your home has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
