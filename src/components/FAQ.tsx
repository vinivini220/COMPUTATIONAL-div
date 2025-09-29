import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the COMPUTATIONAL",
      answer: "The COMPUTATIONAL is a primary care-based cluster randomised investigating personalised renal function monitoring and interventions in people living with heart failure. It aims to improve patient outcomes through data-driven healthcare approaches."
    },
    {
      question: "How many GP practices are participating?",
      answer: "The involves 200 GP practices across the UK, with approximately 20,000 patients participating over an 18-month follow-up period."
    },
    {
      question: "What are the eligibility criteria for GP practices?",
      answer: "GP practices must have electronic health record systems compatible with our monitoring algorithms and be willing to implement the personalised renal function monitoring protocols as part of routine care."
    },
    {
      question: "How is patient data protected?",
      answer: "All patient data is handled according to strict NHS and GDPR guidelines. Data is anonymized and encrypted, with access limited to authorized research personnel only. Patient consent is obtained before any data collection."
    },
    {
      question: "What training is provided to participating practices?",
      answer: "Comprehensive training materials including video guides, detailed protocols, and implementation documentation are provided through our secure portal. Dedicated support staff are also available for questions and guidance."
    },
    {
      question: "When will results be published?",
      answer: "Preliminary results are expected 12 months after the completion of the 18-month follow-up period. All results will be published in peer-reviewed medical journals and shared with participating practices."
    },
    {
      question: "How can my practice get involved?",
      answer: "If you're interested in participating, please contact our research team using the contact information provided. We'll assess eligibility and provide detailed information about the commitment involved."
    },
    {
      question: "What are the potential benefits for patients?",
      answer: "Patients may benefit from more personalized monitoring of their renal function, potentially leading to earlier detection of kidney problems and more tailored treatment approaches for their heart failure management."
    }
  ];

 
};


export default FAQ;