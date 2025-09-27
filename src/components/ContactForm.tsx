import { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="p-8 bg-card/95 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">Send us a message</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Dr. John Smith"
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.smith@practice.nhs.uk"
              required
              className="bg-background/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Organization/Practice
          </label>
          <Input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Liverpool Medical Centre"
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Subject *
          </label>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Participation Inquiry"
            required
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Message *
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please provide details about your inquiry..."
            required
            rows={5}
            className="bg-background/50 resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full medical-transition hover:scale-105"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;