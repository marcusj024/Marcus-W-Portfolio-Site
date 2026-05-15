import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45 bg-[#0C2340]' // Titans Navy
    >
      {/* --- Titans Color Background Blurs --- */}
      <div className='mx-auto max-w-7xl'>
        <div className='pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden'>
          {/* Custom radial gradients to replace purple template blurs */}
          <div 
            style={{ background: 'radial-gradient(circle, #4B92DB 0%, transparent 70%)', opacity: 0.2 }}
            className='absolute -top-[50%] left-1/2 -z-1 h-[1000px] w-full -translate-x-1/2 rounded-full'
          ></div>
          <div className='-u-z-10 absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-01.svg)] bg-cover bg-top bg-no-repeat opacity-20'></div>
        </div>
      </div>

      {/* --- Hero Content --- */}
      <div className='relative z-1 mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full lg:w-1/2'>
            <span className='relative mb-5 inline-flex items-center gap-2 rounded-full border border-[#4B92DB]/30 bg-[#4B92DB]/10 px-4.5 py-2 text-sm font-medium'>
              <Image
                src='/images/hero/icon-title.svg'
                alt='icon'
                width={16}
                height={16}
              />
              <span className='text-[#4B92DB] font-bold uppercase tracking-wider'>
                Building Modern Web Applications
              </span>
            </span>

            <h1 className='mb-6 text-4xl font-black tracking-tight text-white sm:text-6xl uppercase italic'>
              Marcus Warren
            </h1>
            <h2 className='mb-6 text-2xl font-bold text-[#4B92DB]'>Developing World</h2>

            <p className='mb-9 text-lg leading-8 text-gray-300 max-w-[470px]'>
              Transitioning from logistics to full-stack development. I build 
              efficient, scalable web applications with a focus on **SQL** and **React**.
            </p>

            <div className='flex items-center gap-4'>
              <a
                href='https://github.com/marcusj024?tab=repositories'
                target='_blank'
                className='rounded-md bg-[#4B92DB] px-6 py-3.5 text-sm font-black text-white shadow-xl hover:bg-white hover:text-[#0C2340] transition-all uppercase tracking-widest'
              >
                GitHub
              </a>
              <Link
                href='#contact'
                className='text-white font-bold hover:text-[#4B92DB] transition-colors uppercase tracking-widest text-sm'
              >
                Learn More ↓
              </Link>
            </div>
          </div>

          {/* --- Titans Themed Contact Form --- */}
          <div className='w-full lg:w-1/2 mt-12 lg:mt-0'>
            <div className='relative mx-auto max-w-[500px] rounded-[20px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md shadow-2xl'>
              <h3 className='mb-6 text-2xl font-black text-white uppercase tracking-tight'>
                Send a Message
              </h3>
              <form className='space-y-4'>
                <div>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='w-full rounded-lg border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none focus:border-[#4B92DB] transition-all'
                  />
                </div>
                <div>
                  <input
                    type='email'
                    placeholder='Email Address'
                    className='w-full rounded-lg border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none focus:border-[#4B92DB] transition-all'
                  />
                </div>
                <div>
                  <textarea
                    placeholder='How can I help?'
                    rows={4}
                    className='w-full rounded-lg border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none focus:border-[#4B92DB] transition-all'
                  ></textarea>
                </div>
                <button className='w-full rounded-lg bg-[#4B92DB] py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#0C2340] transition-all shadow-lg'>
                  Send Contact Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- Hero Image --- */}
      <div
        className='relative mx-auto mt-17 aspect-1170/411 w-full max-w-[1170px]'
        data-wow-delay='0.1s'
      >
        <Image
          className='mx-auto opacity-50'
          src='/images/hero/hero.svg'
          alt='hero'
          fill
        />
      </div>
    </section>
  );
};

export default Hero;