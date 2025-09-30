import { Mail, Phone, MapPin, Clock, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import contactImage from '@/assets/contact-medical.jpg';
import { useState, useEffect } from 'react';

const ContactSection: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show back-to-top button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "computational@liverpool.ac.uk", href: "mailto:computational@liverpool.ac.uk" },
    { icon: Phone, label: "Phone", value: "+44 (0) 151 794 5588", href: "tel:+441517945588" },
    { icon: MapPin, label: "Address", value: "University of Liverpool, Liverpool Clinical Centre, Liverpool, L69 3GL", href: null },
    { icon: Clock, label: "Office Hours", value: "Monday - Friday, 9:00 AM - 5:00 PM GMT", href: null }
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="medical-section relative">
        <div
          className="section-background absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactImage})` }}
        />
        <div className="section-overlay absolute inset-0 bg-gradient-to-r from-background/95 to-background/85" />

        <div className="relative z-10 max-w-6xl mx-auto py-16 px-4">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get in touch with the COMPUTATIONAL team for questions about participation,
              research findings, or general inquiries
            </p>
          </div>

          <div className="grid ">
            <div className="fade-in-up grid gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <Card className="p-6 group transition-all duration-300 transform">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-primary mb-1">{item.label}</div>
                        <div className="text-foreground">{item.value}</div>
                      </div>
                    </div>
                  </Card>
                );
                return item.href ? <a key={index} href={item.href}>{content}</a> : <div key={index}>{content}</div>;
              })}
            </div>

            <div className="fade-in-up">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-10 relative z-20 fade-in-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

          {/* Contact Info */}
          {/* <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <p>Email: <a href="mailto:computational@liverpool.ac.uk" className="underline">computational@liverpool.ac.uk</a></p>
            <p>Phone: <a href="tel:+441517945588" className="underline">+44 (0) 151 794 5588</a></p>
            <p>Address: University of Liverpool, Liverpool Clinical Centre, L69 3GL</p>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#hero" className="underline hover:text-gray-200 transition">Home</a></li>
              <li><a href="#trial-summary" className="underline hover:text-gray-200 transition">Summary</a></li>
              <li><a href="#map" className="underline hover:text-gray-200 transition">Map</a></li>
              <li><a href="#contact" className="underline hover:text-gray-200 transition">Contact</a></li>
            </ul>
          </div> */}

          {/* Newsletter Signup */}
          {/* <div>
            <h4 className="text-lg font-bold mb-3">Newsletter</h4>
            <p className="text-sm mb-3">Subscribe to get latest updates about the study.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-black focus:outline-none"
              />
              <button type="submit" className="bg-white text-red-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                Subscribe
              </button>
            </form>
          </div> */}


        </div>

        {/* Copyright / Designed by */}
        <div className="w-full flex flex-row justify-center items-center p-4" >
          <p className="text-sm">&copy; {new Date().getFullYear()} Computational Study. All rights reserved.</p>
        </div>
        <div className="w-full flex flex-row justify-center items-center " >
          <p className="text-sm">Designed by University of Liverpool</p>
        </div>


      </footer>


      {/* Back-to-Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg transition-all z-[10000]"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ContactSection;
