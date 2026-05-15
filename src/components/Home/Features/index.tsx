import React from 'react';
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#0C2340]"> 
      <div className="mx-auto max-w-[1200px] px-4">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[#4B92DB]/40 bg-[#4B92DB]/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#4B92DB]">
            Mission Profile
          </span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl uppercase italic tracking-tight">
            Technical & Professional Expertise
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#4B92DB]/50 hover:bg-[#4B92DB]/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0C2340] border border-[#4B92DB]/30 text-2xl shadow-lg">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#4B92DB] transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;