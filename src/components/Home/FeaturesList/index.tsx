import Image from "next/image";
import Link from "next/link";
import Highlighter from "./HighLighter";

const FeaturesList = () => {
  return (
    <section className="pt-12.5 bg-[#0C2340] pb-20"> {/* Titans Navy Background */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        
        {/* Section Title */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter sm:text-5xl">
            Featured Projects
          </h2>
          <div className="mt-4 flex justify-center">
             <span className="h-1 w-24 bg-[#4B92DB]"></span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* --- PROJECT 1: THE BEANS PLACE --- */}
          <div className="flex">
            <Highlighter>
              <div className="relative flex flex-col w-full rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#4B92DB]/50 shadow-2xl">
                <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0C2340] border border-[#4B92DB]/30 text-4xl">
                      ☕
                    </div>
                    <h3 className="mb-4 text-2xl font-black text-white uppercase italic tracking-tight">
                      The Beans Place
                    </h3>
                    <p className="mb-8 text-base font-medium text-gray-300 leading-relaxed lg:text-lg">
                      A full-featured coffee shop interface demonstrating advanced layout techniques and 
                      responsive design. This project showcases clean UI/UX principles and the ability 
                      to build engaging, customer-focused web experiences that perform across all devices.
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <Link
                      href="https://github.com/marcusj024/the-beans-place-Marcus.git"
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#4B92DB] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#0C2340]"
                    >
                      Source Code
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

          {/* --- PROJECT 2: WE CUT GOOD HAIR --- */}
          <div className="flex">
            <Highlighter>
              <div className="relative flex flex-col w-full rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#4B92DB]/50 shadow-2xl">
                <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0C2340] border border-[#4B92DB]/30 text-4xl">
                      💈
                    </div>
                    <h3 className="mb-4 text-2xl font-black text-white uppercase italic tracking-tight">
                      We Cut Good Hair
                    </h3>
                    <p className="mb-8 text-base font-medium text-gray-300 leading-relaxed lg:text-lg">
                      A professional barbershop platform designed with a focus on service display and local branding. 
                      Built using semantic HTML layout patterns and custom, performance-driven styling to ensure a 
                      premium user experience and fast load times.
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <Link
                      href="https://github.com/marcusj024/WeCutGoodHair.git"
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#4B92DB] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#0C2340]"
                    >
                      Source Code
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

          {/* --- BOTTOM SECTION: VETERAN MISSION --- */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl bg-[#4B92DB]/5 border border-[#4B92DB]/20 p-8 text-center">
              <p className="text-white font-bold uppercase tracking-[0.2em] text-sm">
                Mission Excellence: 10 Years Army Service (SSG)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesList;