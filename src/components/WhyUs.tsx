import { CheckCircle2, Globe, UserCheck, Zap } from "lucide-react";

const advantages = [
  {
    title: "1-on-1 Personalized Service",
    description: "You get a dedicated agent who understands your specific needs and business goals.",
    icon: UserCheck
  },
  {
    title: "Transparent Communication",
    description: "Zero language barrier. We provide clear, honest updates at every stage of the process.",
    icon: Globe
  },
  {
    title: "Local Expertise",
    description: "Deep knowledge of the Chinese market, manufacturing hubs, and logistics networks.",
    icon: Zap
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Our commission-based model is straightforward and fair.",
    icon: CheckCircle2
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose TaliaSourcing?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We source <span className="font-bold text-primary">ANY</span> product that can be legally exported. No industry limits. From electronics to textiles, we've got you covered.
            </p>
            
            <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg mb-10">
              <p className="text-primary font-medium italic mb-4">
                "To ensure maximum efficiency, please provide clear and precise product descriptions or specifications. The more detail you provide, the faster we find your perfect match."
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Whether you are a large enterprise or a small startup, we treat every client with the same level of respect and dedication. We know that sourcing from China can bring a thousand questions to your mind—don't worry, we are here to answer every single one of them with patience.
                </p>
                <p className="font-bold text-primary">
                  My strength: Tireless. My weakness: Tireless.
                </p>
                <p>
                  Regardless of your order volume, to you, it is your entire business, and we treat it as such. Never hesitate to ask us anything.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <adv.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{adv.title}</h4>
                    <p className="text-sm text-muted-foreground">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics and Sourcing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-xl max-w-[200px]">
              <p className="text-primary font-bold text-xl">100%</p>
              <p className="text-primary/80 text-sm font-medium">Commitment to Quality & Transparency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
