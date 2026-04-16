import { Phone, MessageCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-primary text-white py-2 px-4 text-xs md:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
        <div className="flex items-center gap-2">
          <Phone className="w-3 h-3 md:w-4 md:h-4 text-accent" />
          <span>WhatsApp: <a href="https://wa.me/4407510226047" className="hover:text-accent transition-colors">+44-07510 226047</a></span>
        </div>
        <div className="hidden md:block w-px h-3 bg-white/20" />
        <div className="flex items-center gap-2">
          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-accent" />
          <span>WeChat: <span className="text-accent">+86-15330019805 (xingzhe837)</span></span>
        </div>
      </div>
    </div>
  );
}
