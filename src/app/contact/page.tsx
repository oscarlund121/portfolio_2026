import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import PageIntro from "@/components/ui/PageIntro";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <div className="w-full bg-mux-bg min-h-[calc(100vh-72px)]">
      <PageIntro title="Get In Touch">
        <p>
          Whether it&apos;s a project, a collaboration, or a role worth
          discussing, feel free to reach out. I&apos;m always open to good
          conversations around frontend, design, and digital work.
        </p>
      </PageIntro>

      <div className="grid-container grid grid-cols-1 md:grid-cols-2">
        {/* Contact Info */}
        <div className="p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r border-mux-border flex flex-col justify-center bg-mux-pink/10">
          
          <div className="mb-12">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight mb-8">Contact Details</h2>
            
            <div className="flex items-start space-x-6 mb-8">
              <div className="p-4 bg-black text-white">
                <FiMail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="tech-mono text-black mb-1">Email Me</h3>
                <a href="mailto:hello@oscarlund.design" className="text-xl font-bold text-black hover:underline">
                  hello@oscarlund.design
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-mux-yellow text-black border border-black">
                <FiMapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="tech-mono text-black mb-1">Location</h3>
                <p className="text-xl font-bold text-black">
                  Copenhagen, Denmark
                </p>
                <span className="text-sm font-bold text-black/60 uppercase tracking-widest mt-1 block">
                  Available remote
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 md:p-16 lg:p-24 bg-white flex flex-col justify-center">
          <form className="space-y-6 max-w-md w-full mx-auto">
            <div>
              <label htmlFor="name" className="tech-mono text-black mb-2 block font-bold">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:translate-x-1 focus:translate-y-1 shadow-[4px_4px_0px_black] focus:shadow-none transition-all font-sans rounded-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="tech-mono text-black mb-2 block font-bold">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:translate-x-1 focus:translate-y-1 shadow-[4px_4px_0px_black] focus:shadow-none transition-all font-sans rounded-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="tech-mono text-black mb-2 block font-bold">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:translate-x-1 focus:translate-y-1 shadow-[4px_4px_0px_black] focus:shadow-none transition-all font-sans resize-none rounded-none"
                placeholder="How can we work together?"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full flex items-center justify-center space-x-2 py-4 mt-8">
              <span>SEND MESSAGE</span>
              <FiSend className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
