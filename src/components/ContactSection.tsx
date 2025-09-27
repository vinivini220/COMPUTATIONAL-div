import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import contactImage from '@/assets/contact-medical.jpg';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "computational@liverpool.ac.uk",
      href: "mailto:computational@liverpool.ac.uk"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+44 (0) 151 794 5588",
      href: "tel:+441517945588"
    },
    {
      icon: MapPin,
      label: "Address", 
      value: "University of Liverpool, Liverpool Clinical Centre, Liverpool, L69 3GL",
      href: null
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Monday - Friday, 9:00 AM - 5:00 PM GMT",
      href: null
    }
  ];

  return (
    <section id="contact" className="medical-section">
      <div 
        className="section-background"
        style={{ backgroundImage: `url(${contactImage})` }}
      />
      <div className="section-overlay bg-gradient-to-r from-background/95 to-background/85" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
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
          <div className="fade-in-up">
            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <Card className="p-6 medical-transition hover:shadow-lg group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 medical-transition">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-primary mb-1">
                          {item.label}
                        </div>
                        <div className="text-foreground">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
                
                if (item.href) {
                  return (
                    <a 
                      key={index} 
                      href={item.href}
                      className="block medical-transition hover:scale-[1.02]"
                    >
                      {content}
                    </a>
                  );
                }
                
                return <div key={index}>{content}</div>;
              })}
            </div>
          </div>
          
          <div className="fade-in-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;