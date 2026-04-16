import { Services } from "@/components/Services";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Detailed Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial factory search to final delivery, we provide a complete end-to-end sourcing solution tailored to your business needs.
          </p>
        </div>
      </div>
      
      <Services />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">How We Work</h2>
              <div className="space-y-6">
                {[
                  { title: "Step 1: Consultation", desc: "We discuss your requirements, target price, and quality standards." },
                  { title: "Step 2: Sourcing & Quoting", desc: "We identify 3-5 potential suppliers and provide a detailed comparison." },
                  { title: "Step 3: Sampling", desc: "We arrange samples and verify they meet your specifications." },
                  { title: "Step 4: Production Management", desc: "We monitor the production process to ensure timelines are met." },
                  { title: "Step 5: Quality Inspection", desc: "Our team performs a final check before the goods leave the factory." },
                  { title: "Step 6: Logistics", desc: "We handle all shipping documents and coordinate delivery to your door." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Specialized Sourcing</h3>
              <p className="text-muted-foreground mb-6">
                We have deep expertise in several key industries, allowing us to find the best value for:
              </p>
              <ul className="space-y-4">
                {[
                  "Consumer Electronics & Accessories",
                  "Home & Kitchen Supplies",
                  "Textiles, Apparel & Fashion",
                  "Industrial Machinery & Parts",
                  "Beauty & Personal Care Products",
                  "Toys & Hobby Supplies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
