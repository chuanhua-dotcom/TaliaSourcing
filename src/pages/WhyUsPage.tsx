import { WhyUs } from "@/components/WhyUs";
import { Shield, Zap, Heart, Award } from "lucide-react";

export default function WhyUsPage() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Partner With Talia?</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are more than just an agent; we are your eyes and ears on the ground in China.
          </p>
        </div>
      </div>

      <WhyUs />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide every sourcing project we undertake.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We never take kickbacks from factories. Our loyalty is 100% to our clients.", icon: Shield },
              { title: "Speed", desc: "In the fast-paced world of e-commerce, we respond quickly to keep your business moving.", icon: Zap },
              { title: "Quality", desc: "We treat your products as if they were our own, ensuring they meet the highest standards.", icon: Award },
              { title: "Partnership", desc: "We grow when you grow. We aim for long-term relationships, not one-off deals.", icon: Heart }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
