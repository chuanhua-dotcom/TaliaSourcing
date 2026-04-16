import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Your Reliable China <br />
          <span className="text-accent">Sourcing Partner</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          A-Z Service from Factory to Shipping. Tailored sourcing solutions for everyone—from individual buyers and small startups to large enterprises. Save Cost, Reduce Risk.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6 h-auto w-full sm:w-auto shadow-lg">
              Get a Free Quote
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 font-bold text-lg px-8 py-6 h-auto w-full sm:w-auto backdrop-blur-sm transition-all">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
