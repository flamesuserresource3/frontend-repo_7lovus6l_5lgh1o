import React from 'react';
import BackgroundGradient from './components/BackgroundGradient';
import SplineScene from './components/SplineScene';
import VeriLogo from './components/VeriLogo';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0A0F1C] via-[#0B1020] to-[#120A24] text-white">
      {/* Interactive 3D scene */}
      <SplineScene />

      {/* Atmospheric gradient + blobs (non-blocking) */}
      <BackgroundGradient />

      {/* Centered content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <VeriLogo />
          <LoadingIndicator />
        </div>
      </main>
    </div>
  );
}

export default App;
