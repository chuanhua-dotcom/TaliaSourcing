import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Quote</h2>
            <p className="text-gray-300 text-lg mb-10">
              Ready to start sourcing? Send us a message or contact us directly via WhatsApp/WeChat for a faster response.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">WhatsApp</h4>
                  <p className="text-gray-400">+44-07510 226047</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">WeChat</h4>
                  <p className="text-gray-400">+86-15330019805 (xingzhe837)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-gray-400">Beijing, China</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col items-center justify-center text-center space-y-6">
            <div className="bg-primary/5 p-6 rounded-full">
              <Mail className="w-12 h-12 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Send Us an Email</h3>
              <p className="text-muted-foreground mb-6">
                For formal inquiries, product links, and detailed requirements, please reach out to us directly via email.
              </p>
              <a 
                href="mailto:chuanhua453@gmail.com" 
                className="text-2xl md:text-3xl font-extrabold text-accent hover:text-primary transition-colors break-all"
              >
                chuanhua453@gmail.com
              </a>
            </div>
            <Button 
              onClick={() => window.location.href = 'mailto:chuanhua453@gmail.com'}
              className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-6 text-lg rounded-xl shadow-lg transition-all active:scale-[0.98]"
            >
              Click to Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-white tracking-tight">
              Talia<span className="text-accent">Sourcing</span>
            </span>
            <p className="text-gray-400 text-sm mt-2">
              © {new Date().getFullYear()} TaliaSourcing. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link to="/legal#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/legal#terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link to="/legal#cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
