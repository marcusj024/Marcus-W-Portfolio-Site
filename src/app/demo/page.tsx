import Hero from '@/components/ui/hero-ascii';

export const runtime = 'edge';

export default function DemoPage() {
  return (
    <div className='h-screen w-screen'>
      <Hero />
    </div>
  );
}
