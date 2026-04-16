import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple, Tiered Pricing</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commission-based model ensures our interests are aligned with yours. The more you source, the lower the rate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border relative">
            {/* Special Offer Ribbon */}
            <div className="absolute top-0 right-0">
              <div className="bg-accent text-primary font-bold px-10 py-2 rotate-45 translate-x-[35px] translate-y-[20px] shadow-sm">
                LIMITED OFFER
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Tiered Percentage-Based Pricing</h3>
                  <p className="text-muted-foreground">Professional sourcing management fee</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-1">Commission Rate</p>
                  <p className="text-5xl font-extrabold text-primary">5-8%</p>
                  <p className="text-sm text-muted-foreground mt-1">of total order value</p>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Detailed Fee Structure</h4>
                <div className="bg-slate-50 rounded-2xl p-6 border border-border space-y-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-primary font-medium">$0 - $2,500</span>
                    <span className="font-bold text-primary">8% <span className="text-xs text-muted-foreground font-normal">(Min. $100)</span></span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-primary font-medium">$2,501 - $5,000</span>
                    <span className="font-bold text-primary">7%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-primary font-medium">$5,001 - $10,000</span>
                    <span className="font-bold text-primary">6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">$10,001 and above</span>
                    <span className="font-bold text-primary">5%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🎁</span>
                    <div>
                      <h4 className="font-bold text-primary text-sm">LIMITED TIME OFFER</h4>
                      <p className="text-primary/80 text-xs">Get <span className="font-bold text-accent-foreground">20% OFF</span> on your first order (applies to the $100 minimum fee only)!</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-primary font-medium">No hidden charges or monthly retainers</span>
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white py-8 text-lg font-bold rounded-xl"
                onClick={() => window.location.href = '/contact'}
              >
                Get a Custom Quote
              </Button>
            </div>
          </div>
          
          <p className="text-center mt-8 text-sm text-muted-foreground italic">
            * Final percentage depends on order complexity, volume, and frequency. Contact us for a detailed breakdown.
          </p>
        </div>
      </div>
    </section>
  );
}
