import Link from "next/link";
import { ExternalLink, Code2, Palette, MonitorSmartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex md:block flex-col">
      {/* Hero Section */}
      <section className="w-full bg-mux-pink border-b border-mux-border">
        <div className="grid-container px-4 py-24 sm:py-32 lg:px-8 flex flex-col items-center justify-center text-center">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black mb-8 max-w-5xl leading-[0.9]">
            A PORTFOLIO TO BUILD <br className="hidden md:block"/> IN ONE SPRINT OR LESS
          </h1>
          
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mb-12 font-medium">
            Oscar helps you build unique design and frontend experiences at scale, with the kind of digital craftsmanship you and your team will love.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/projects" 
              className="pill-button pill-button-black"
            >
              VIEW PROJECTS
            </Link>
            <Link 
              href="/contact" 
              className="pill-button pill-button-outline"
            >
              HIRE OSCAR
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full bg-mux-bg border-b border-mux-border">
        <div className="grid-container border-b border-mux-border py-4 text-center">
          <p className="tech-mono text-black">TRUSTED BY TOP FRAMEWORKS & TOOLS</p>
        </div>
        <div className="grid-container grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-mux-border text-center font-bold items-center">
          <div className="py-8"><span className="text-xl">Next.js</span></div>
          <div className="py-8"><span className="text-xl">React</span></div>
          <div className="py-8"><span className="text-xl">Tailwind</span></div>
          <div className="py-8"><span className="text-xl">TypeScript</span></div>
          <div className="py-8"><span className="text-xl">Framer</span></div>
        </div>
      </section>

      {/* Alternating Feature Blocks */}
      <section className="w-full bg-mux-bg">
        
        {/* Block 1 */}
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 border-b border-mux-border">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-mux-border">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">On-demand design</h2>
            <p className="text-lg text-black/80 mb-8 leading-relaxed">
              Add native UI/UX workflows to your application quickly and easily. From weird Figma files to millions of viewers.
            </p>
            <div>
              <Link href="/about" className="pill-button pill-button-yellow uppercase text-xs">
                Learn More
              </Link>
            </div>
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex items-center justify-center bg-mux-yellow/20">
            {/* Visual Block with Neo-Shadow */}
            <div className="w-full aspect-square md:aspect-auto md:h-full bg-white border-2 border-black neo-shadow flex items-center justify-center transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_black]">
              <Palette className="w-24 h-24 text-black" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 border-b border-mux-border">
          {/* Swapped order on desktop */}
          <div className="p-8 md:p-16 lg:p-24 flex items-center justify-center order-2 md:order-1 border-t md:border-t-0 md:border-r border-mux-border bg-emerald-400/20">
            {/* Visual Block with Neo-Shadow */}
            <div className="w-full aspect-square md:aspect-auto md:h-full bg-emerald-400 border-2 border-black neo-shadow flex items-center justify-center transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_black]">
              <Code2 className="w-24 h-24 text-black" strokeWidth={1.5} />
            </div>
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Live frontend</h2>
            <p className="text-lg text-black/80 mb-8 leading-relaxed">
              Give your users the ability to experience rich frontend features instantly. We support modern industry standards like React and Next.js.
            </p>
            <div>
              <Link href="/projects" className="pill-button pill-button-yellow uppercase text-xs">
                View Code
              </Link>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
