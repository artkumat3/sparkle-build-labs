import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechFlow Inc.",
      content: "Working with this design studio was an absolute pleasure. They transformed our brand identity and exceeded all expectations. The attention to detail is remarkable.",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupX",
      content: "The creative vision and technical execution were flawless. Our new website has significantly improved our conversion rates and user engagement.",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Director, ConsultPro",
      content: "Exceptional creativity and professionalism. They understood our vision immediately and delivered beyond what we imagined. Highly recommended!",
      avatar: "ED",
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6 space-y-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/30" />

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
