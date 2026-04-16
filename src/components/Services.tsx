import { 
  Search, 
  ShieldCheck, 
  Handshake, 
  ClipboardCheck, 
  Truck, 
  Link as LinkIcon,
  Settings,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const shoppingSites = [
  { name: "Taobao", url: "https://www.taobao.com", desc: "Retail & Consumer Goods" },
  { name: "1688", url: "https://www.1688.com", desc: "B2B Wholesale & Factories" },
  { name: "Pinduoduo", url: "https://www.pinduoduo.com", desc: "Group Buying & Low Prices" },
  { name: "JD.com", url: "https://www.jd.com", desc: "High-end Electronics & Quality" },
  { name: "VIP.com", url: "https://www.vip.com", desc: "Brand Flash Sales" },
  { name: "Zhuanzhuan", url: "https://www.zhuanzhuan.com", desc: "Second-hand Market" },
];

const ContactInfo = () => (
  <div className="bg-slate-50 p-4 rounded-xl border border-border flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="flex flex-col items-center sm:items-start">
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Direct Contact</span>
      <div className="flex gap-4 mt-1">
        <div className="flex items-center gap-1 text-primary font-bold">
          <MessageCircle className="w-4 h-4 text-accent" />
          <span>WhatsApp: +44-07510 226047</span>
        </div>
        <div className="flex items-center gap-1 text-primary font-bold">
          <MessageCircle className="w-4 h-4 text-accent" />
          <span>WeChat: xingzhe837</span>
        </div>
      </div>
    </div>
    <Button className="bg-accent text-primary font-bold w-full sm:w-auto" onClick={() => window.location.href = '/contact'}>
      Go to Contact Page
    </Button>
  </div>
);

const services = [
  {
    title: "Taobao & 1688 Procurement",
    description: "Simply send us your links or product pictures. We handle purchasing, inspection, and international shipping for you.",
    icon: LinkIcon,
    highlight: true,
    details: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          The most direct way to source from China. You find what you like, and we do the rest. Beyond the famous sites below, there are hundreds of niche professional sourcing platforms that even many Chinese people don't know about.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {shoppingSites.map((site) => (
            <a 
              key={site.name} 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <span className="font-bold text-primary group-hover:text-accent mb-1">{site.name}</span>
              <span className="text-[10px] text-muted-foreground text-center">{site.desc}</span>
              <ExternalLink className="w-3 h-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-accent" />
            Need Niche Sourcing Sites?
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            We have access to hundreds of vertical-specific wholesale sites for electronics, textiles, industrial parts, and more.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-primary">Contact me for the free list:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-primary font-bold">WhatsApp: +44-07510 226047</span>
              <span className="text-primary font-bold">WeChat: xingzhe837</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Supplier Sourcing & Verification",
    description: "The factory you think is a factory, might not be. We verify the 1% that can truly serve you.",
    icon: Search,
    details: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h4 className="font-bold text-primary text-lg">You thought it was a factory? Think again.</h4>
        <p>
          Out of 17 million Chinese factories, <span className="text-primary font-bold">less than 1%</span> can directly interface with you. Be careful! <span className="text-primary font-bold">67% of "factories" found on 1688 are actually middlemen.</span>
        </p>
        <p>
          Currently, there are over 17.06 million manufacturing-related enterprises in China. While precise data on integrated factory-traders is hard to find, customs data shows only 645,000 entities have actual import/export records (including trading companies).
        </p>
        <p>
          Sampling surveys suggest only about <span className="text-primary font-bold">140,000</span> are true integrated factory-traders. Verification of qualifications and batch quality is essential to avoid inconsistent production.
        </p>
      </div>
    )
  },
  {
    title: "Product Procurement",
    description: "Beyond the buy button. We handle domestic payments, quality inspection, and quantity verification.",
    icon: ShieldCheck,
    details: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h4 className="font-bold text-primary text-lg">Don't Rely on Pictures Alone</h4>
        <p>
          Procurement involves domestic payments, quality inspection, and quantity verification. We buy the products first to ensure full control over the process.
        </p>
        <p>
          Most importantly, Chinese sourcing is complex: <span className="text-primary font-bold">the same product image is often used by dozens of different factories</span>, but the actual quality, materials, and details vary wildly.
        </p>
        <p className="bg-accent/10 p-4 rounded-xl text-primary font-medium">
          "In China, intellectual property on product photos is not strictly enforced, leading to many 'expectation vs reality' issues. We compare multiple sources to ensure what you see is what you get."
        </p>
        <p>Don't rely solely on pictures or price. We evaluate products from multiple dimensions to find the best value.</p>
      </div>
    )
  },
  {
    title: "Price Negotiation",
    description: "Strategic cost reduction. We estimate costs and compare multiple sources to lower your expenditure.",
    icon: Handshake,
    details: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h4 className="font-bold text-primary text-lg">Ensuring the Best Value</h4>
        <p>
          Our goal is to ensure the same high quality while actively working to lower your total expenditure.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cost estimation based on raw materials and labor.</li>
          <li>Multi-party price comparison across different manufacturing hubs.</li>
          <li>Leveraging local language and cultural nuances to get "local" prices.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Quality Control & Inspection",
    description: "Small batches vs. Mass production. We protect you from batch inconsistencies and discrepancies.",
    icon: ClipboardCheck,
    details: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h4 className="font-bold text-primary text-lg">Protecting Your Investment</h4>
        <p>
          For small batches, issues are usually minor—damage or quantity errors—which we resolve immediately with the factory.
        </p>
        <p>
          The real challenge is <span className="text-primary font-bold">mass production</span>. Batch consistency can vary significantly from the initial sample or previous orders. 
        </p>
        <p>
          We ensure product standards are <span className="text-primary font-bold">clearly defined in contracts</span> and perform rigorous inspections. If discrepancies arise, we communicate immediately with factories to avoid your loss.
        </p>
      </div>
    )
  },
  {
    title: "Warehousing & Shipping",
    description: "Consolidate orders and choose the best logistics based on your urgency and budget.",
    icon: Truck,
    details: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h4 className="font-bold text-primary text-lg">Flexible Logistics Solutions</h4>
        <p>
          Consolidate multiple orders from different suppliers in our warehouse to save on international shipping costs.
        </p>
        <p>
          We offer flexible shipping options: <span className="text-primary font-bold">Sea, Air, and Express</span> at competitive rates.
        </p>
        <p className="bg-primary/5 p-4 rounded-xl border border-primary/10 text-primary">
          "We don't just ship; we strategize. We select the most cost-effective and suitable logistics method based on your specific urgency and budget requirements."
        </p>
      </div>
    )
  },
  {
    title: "Customized Services",
    description: "Packaging, product modifications, and tailored branding solutions for your business.",
    icon: Settings,
    details: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <h4 className="font-bold text-primary text-lg">Tailored for Your Brand</h4>
        <p>
          Need your own logo on the product? Custom packaging for your Amazon store? We handle it all.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Custom Packaging Design & Sourcing.</li>
          <li>Product Modifications & OEM/ODM support.</li>
          <li>Private Labeling (White Label).</li>
        </ul>
        <p className="italic text-accent-foreground font-medium">
          "As long as the request is reasonable and legal, we can discuss and implement it for you. Your brand vision is our mission."
        </p>
      </div>
    )
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services & Process</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive sourcing solutions designed to streamline your supply chain and maximize your profit margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className={`border-none shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group h-full ${service.highlight ? 'ring-2 ring-accent bg-white' : 'bg-white'}`}>
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${service.highlight ? 'bg-accent text-primary' : 'bg-primary/10 text-primary group-hover:bg-accent group-hover:text-primary'}`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Details <ExternalLink className="w-3 h-3 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 text-primary">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <DialogTitle className="text-2xl font-bold text-primary">{service.title}</DialogTitle>
                    <DialogDescription className="text-lg">
                      Detailed service overview and professional insights.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    {service.details}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <ContactInfo />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
