import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import PageIntro from "@/components/ui/PageIntro";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <div className="w-full bg-mux-bg min-h-[calc(100vh-72px)]">
      <PageIntro title="Get In Touch" bg="bg-mux-bg">
        <p>
          Whether it's a project, a collaboration, or a role worth
          discussing, feel free to reach out. I'm always open to good
          conversations around frontend, design, and digital work.
        </p>
      </PageIntro>

      <div className="grid-container grid grid-cols-1 md:grid-cols-2">
        {/* Contact Info */}
        <div className="p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r border-mux-border flex flex-col justify-center bg-mux-blue/10">
          
          <div className="mb-12">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight mb-8">Contact Details</h2>
            
            <div className="flex items-start space-x-6 mb-8">
              <div className="p-4 bg-black text-mux-yellow">
                <FiMail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="tech-mono text-black mb-1">Email Me</h3>
                <a href="mailto:hello@oscarlund.design" className="text-xl font-bold text-black hover:underline">
                  albertlund121@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 mb-8">
              <div className="p-4 bg-black text-mux-yellow">
                <FiPhone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="tech-mono text-black mb-1">Phone</h3>
                <a href="tel:+4522232539" className="text-xl font-bold text-black hover:underline">
                  +45 22 23 25 39
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
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
