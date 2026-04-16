import { Shield, FileText, Cookie } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Information</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to transparency, privacy, and fair service.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-20">
          {/* Privacy Policy */}
          <section id="privacy" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
              <p>At TaliaSourcing, we take your privacy seriously. This policy outlines how we handle your personal information.</p>
              <h4 className="font-bold text-primary">1. Information Collection</h4>
              <p>We collect information you provide directly to us, such as your name, email address, and sourcing requirements when you fill out our contact forms or subscribe to our newsletter.</p>
              <h4 className="font-bold text-primary">2. Use of Information</h4>
              <p>We use your information solely to provide our sourcing services, communicate with you about your orders, and send you relevant market updates if you have subscribed to our newsletter.</p>
              <h4 className="font-bold text-primary">3. Data Protection</h4>
              <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Terms of Service</h2>
            </div>
            <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
              <p>By using our services, you agree to the following terms and conditions.</p>
              <h4 className="font-bold text-primary">1. Service Description</h4>
              <p>TaliaSourcing acts as a sourcing agent between the client and Chinese manufacturers. We facilitate supplier search, negotiation, quality control, and logistics coordination.</p>
              <h4 className="font-bold text-primary">2. Fees and Payments</h4>
              <p>Our service fees are based on the total order value as outlined in our Pricing section. Clients are responsible for the cost of products and international shipping.</p>
              <h4 className="font-bold text-primary">3. Liability Disclaimer</h4>
              <p>While we perform rigorous quality inspections, the ultimate responsibility for product quality and compliance lies with the manufacturer. TaliaSourcing is not liable for manufacturing defects but will assist clients in resolving disputes with suppliers.</p>
              <h4 className="font-bold text-primary">4. Order Cancellation</h4>
              <p>Cancellation terms depend on the specific agreement with the manufacturer. Our service fee for work already performed (sourcing and negotiation) may be non-refundable.</p>
            </div>
          </section>

          {/* Cookie Policy */}
          <section id="cookies" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-xl">
                <Cookie className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Cookie Policy</h2>
            </div>
            <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
              <p>We use cookies to enhance your experience on our website.</p>
              <h4 className="font-bold text-primary">1. What are Cookies?</h4>
              <p>Cookies are small text files stored on your device that help us analyze web traffic and remember your preferences.</p>
              <h4 className="font-bold text-primary">2. How we use them</h4>
              <p>We use essential cookies for website functionality and analytical cookies (like Google Analytics) to understand how visitors interact with our site, helping us improve our services.</p>
              <h4 className="font-bold text-primary">3. Managing Cookies</h4>
              <p>You can choose to accept or decline cookies through your browser settings. However, this may prevent you from taking full advantage of the website.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
