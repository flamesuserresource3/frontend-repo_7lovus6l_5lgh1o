import React from 'react';

const BackgroundGradient = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Global soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1221] via-[#0D1020] to-[#140B2E] opacity-80" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Glow blobs for depth */}
      <div className="absolute -top-24 -left-24 h-[60vmax] w-[60vmax] rounded-full bg-[#6C6CE5] opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-[55vmax] w-[55vmax] rounded-full bg-[#330867] opacity-30 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[40vmax] w-[40vmax] rounded-full bg-cyan-400 opacity-10 blur-[100px] mix-blend-screen" />

      {/* Grain overlay for texture */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '3px 3px'
      }} />
    </div>
  );
};

export default BackgroundGradient;
