import { Pricing } from "@/components/Pricing";

export default function PricingPage() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing Structure</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No hidden fees. No surprises. We believe in a fair, performance-based pricing model that scales with your business.
          </p>
        </div>
      </div>

      <Pricing />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: "What is included in the service fee?", a: "Our fee covers supplier search, price negotiation, order follow-up, basic quality inspection, and logistics coordination." },
              { q: "Do you charge if you can't find a supplier?", a: "No. We offer a free initial search. If we can't find a supplier that meets your needs, you don't pay anything." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h4 className="text-lg font-bold text-primary mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
