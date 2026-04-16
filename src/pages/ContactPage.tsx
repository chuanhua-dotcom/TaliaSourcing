import { Contact } from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or ready to start your next sourcing project? We're here to help.
          </p>
        </div>
      </div>

      <Contact />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h4 className="font-bold text-primary mb-4">Office Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
              <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM (GMT+8)</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Response Time</h4>
              <p className="text-muted-foreground text-sm mt-2 italic">Due to time zone differences, some replies may be delayed, but we will respond as soon as we see your message.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Direct Chat</h4>
              <p className="text-muted-foreground">For urgent matters, please use WhatsApp or WeChat for immediate assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
