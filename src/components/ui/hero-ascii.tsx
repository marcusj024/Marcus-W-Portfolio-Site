'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      
      [data-us-project] canvas {
        clip-path: inset(0 0 10% 0) !important;
      }
      
      [data-us-project] * {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      const projectDiv = document.querySelector('[data-us-project]');
      if (projectDiv) {
        const allElements = projectDiv.querySelectorAll('*');
        allElements.forEach(el => {
          const text = (el.textContent || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn')) {
            el.remove();
          }
        });
      }
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    
    setTimeout(hideBranding, 1000);
    setTimeout(hideBranding, 3000);
    setTimeout(hideBranding, 5000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0C2340]"> {/* Titans Navy Background */}
      
      {/* Vitruvian man animation canvas - hidden on mobile */}
      <div className="absolute inset-0 w-full h-full hidden lg:block opacity-40 mix-blend-screen">
        <div 
          data-us-project="whwOGlfJ5Rz2rHaEUgHl" 
          style={{ width: '100%', height: '100%', minHeight: '100vh' }}
        />
      </div>

      {/* Mobile stars background */}
      <div className="absolute inset-0 w-full h-full lg:hidden stars-bg"></div>

      {/* Top Header Grid Accent */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b border-[#4B92DB]/20">
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="font-mono text-white text-xl lg:text-2xl font-black tracking-widest italic transform -skew-x-12">
              WARREN
            </div>
            <div className="h-3 lg:h-4 w-px bg-[#4B92DB]/40"></div>
            <span className="text-[#8A8D8F] text-[8px] lg:text-[10px] font-mono tracking-widest">RANK // E-6</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono text-[#8A8D8F]">
            <span>LOC: 31.7619° N</span>
            <div className="w-1 h-1 bg-[#4B92DB] rounded-full animate-ping"></div>
            <span>106.4850° W</span>
          </div>
        </div>
      </div>

      {/* Corner Frame Accents (Titans Light Blue) */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-[#4B92DB]/40 z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-[#4B92DB]/40 z-20"></div>
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-[#4B92DB]/40 z-20" style={{ bottom: '5vh' }}></div>
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-[#4B92DB]/40 z-20" style={{ bottom: '5vh' }}></div>

      {/* Main Structural Typography */}
      <div className="relative z-10 flex min-h-screen items-center pt-16 lg:pt-0" style={{ marginTop: '5vh' }}>
        <div className="container mx-auto px-6 lg:px-16 lg:ml-[10%]">
          <div className="max-w-xl relative">
            
            {/* Top metrics tracker block */}
            <div className="flex items-center gap-2 mb-4 opacity-70">
              <div className="w-8 h-px bg-[#4B92DB]"></div>
              <span className="text-[#4B92DB] text-[10px] font-mono tracking-widest font-bold">SYS_INITIALIZED // 001</span>
              <div className="flex-1 h-px bg-[#4B92DB]/30"></div>
            </div>

            {/* Title Block */}
            <div className="relative">
              <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-1 dither-pattern opacity-50"></div>
              <h1 className="text-3xl lg:text-6xl font-black text-white mb-4 leading-none font-mono tracking-wider">
                MISSION
                <span className="block text-[#4B92DB] mt-1 lg:mt-2 uppercase italic">
                  EXCELLENCE
                </span>
              </h1>
            </div>

            {/* Matrix Data Points Dots */}
            <div className="hidden lg:flex gap-1 mb-4 opacity-40">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-[#4B92DB] rounded-full"></div>
              ))}
            </div>

            {/* Description Subtext */}
            <div className="relative">
              <p className="text-xs lg:text-base text-gray-300 mb-6 leading-relaxed font-mono tracking-wide opacity-90 max-w-md">
                10 years of tactical military logistical leadership engineered directly into high-fidelity web applications and structured query architecture.
              </p>
            </div>

            {/* Interactive Call to Action Components */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button className="relative px-6 py-3 bg-[#4B92DB] text-white font-mono text-xs font-black tracking-widest border border-transparent hover:bg-white hover:text-[#0C2340] transition-all duration-200 group rounded-none">
                LAUNCH PORTFOLIO
              </button>
              
              <button className="relative px-6 py-3 bg-transparent border border-[#4B92DB] text-white font-mono text-xs font-black tracking-widest hover:bg-[#4B92DB]/10 transition-all duration-200 rounded-none">
                VIEW REPOSITORIES
              </button>
            </div>

            {/* Footer metrics accent line */}
            <div className="hidden lg:flex items-center gap-2 mt-8 opacity-40">
              <span className="text-[#4B92DB] text-[9px] font-mono">■</span>
              <div className="flex-1 h-px bg-[#4B92DB]/30"></div>
              <span className="text-[#8A8D8F] text-[9px] font-mono tracking-widest">LOGISTICAL INFRASTRUCTURE ENGINEER</span>
            </div>
          </div>
        </div>
      </div>

      {/* App Footer Element */}
      <div className="absolute left-0 right-0 z-20 border-t border-[#4B92DB]/20 bg-[#0C2340]/60 backdrop-blur-sm" style={{ bottom: '5vh' }}>
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-[#8A8D8F]">
            <span className="font-bold text-[#4B92DB]">STATUS // ACTIVE</span>
            <div className="hidden lg:flex gap-1 items-end h-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-1 bg-[#4B92DB]/40" style={{ height: `${(i % 3 + 1) * 4}px` }}></div>
              ))}
            </div>
            <span>BUILD_VER // 2026.1</span>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-[#8A8D8F]">
            <span className="hidden lg:inline text-[#4B92DB]">● ASSET RENDERING VIA NEXT.JS</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#4B92DB] rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-[#4B92DB]/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-[#4B92DB]/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dither-pattern {
          background-image: 
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, #4B92DB 1px, #4B92DB 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, #4B92DB 1px, #4B92DB 2px);
          background-size: 3px 3px;
        }
        
        .stars-bg {
          background-image: 
            radial-gradient(1px 1px at 20% 30%, #4B92DB, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, #4B92DB, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent);
          background-size: 200% 200%, 180% 180%, 250% 250%, 220% 220%;
          opacity: 0.2;
        }
      `}</style>
    </main>
  );
}