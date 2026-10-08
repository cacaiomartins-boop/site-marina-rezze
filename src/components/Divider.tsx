// Linha rosa fininha com um pequeno ornamento no centro, entre as seções.
export default function Divider() {
  return (
    <div className="relative z-20 h-px bg-gradient-to-r from-transparent via-rose/70 to-transparent">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 px-3 py-1 rounded-full bg-paper border border-rose/60 shadow-soft">
        <span className="w-1 h-1 rounded-full bg-rose" />
        <span className="w-2.5 h-2.5 rotate-45 bg-blush-deep border border-rose" />
        <span className="w-1 h-1 rounded-full bg-rose" />
      </div>
    </div>
  );
}
