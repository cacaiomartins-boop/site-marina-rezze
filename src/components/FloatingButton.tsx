import { useEffect, useState } from "react";
import BookingLink from "./BookingLink";
import { Calendar } from "./Icons";

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById("site-footer");
      if (window.scrollY > 500 && footer) {
        setVisible(footer.getBoundingClientRect().top >= window.innerHeight);
      } else {
        setVisible(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <BookingLink className="h-[56px] px-8 rounded-full bg-forest text-paper font-medium text-[15px] shadow-soft border border-sage/30 hover:bg-moss gap-2">
        <Calendar />
        Agendar Consulta
      </BookingLink>
    </div>
  );
}
