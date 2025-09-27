import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import contactImage from '@/assets/contact-medical.jpg';
import { useState, useEffect } from 'react';

const ContactSection = () => {
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
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in-up grid gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <Card className="p-6 hover:shadow-xl group transition-all duration-300 transform hover:scale-[1.03]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
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
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <p>Email: <a href="mailto:computational@liverpool.ac.uk" className="underline">computational@liverpool.ac.uk</a></p>
            <p>Phone: <a href="tel:+441517945588" className="underline">+44 (0) 151 794 5588</a></p>
            <p>Address: University of Liverpool, Liverpool Clinical Centre, L69 3GL</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-300 transition"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-yellow-300 transition"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-yellow-300 transition"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-start md:items-end justify-end">
            <p className="text-sm">&copy; {new Date().getFullYear()} Computational Study. All rights reserved.</p>
            <p className="text-sm">Designed by University of Liverpool</p>
          </div>
        </div>
      </footer>

      {/* Back-to-Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ContactSection;
