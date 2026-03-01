import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Founder, TechVista Solutions",
      content: "Aryan built our entire web platform from scratch. His technical skills and attention to detail are outstanding. The site runs flawlessly and our clients love it.",
      avatar: "RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "CEO, EduSmart India",
      content: "The AI automation tools Aryan developed for our edtech platform saved us countless hours. His understanding of AI and practical implementation is truly impressive.",
      avatar: "PP",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Director, GrowthBox Digital",
      content: "Working with Aryan was a game-changer for our business. He delivered smart automation solutions that boosted our efficiency by 40%. Highly recommended!",
      avatar: "AV",
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
