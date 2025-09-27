import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

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

  return (
    <section className="medical-section" id="faq">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about the COMPUTATIONAL  and participation requirements
          </p>
        </div>

        <Card className="p-8 bg-card/95 backdrop-blur-sm">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 medical-transition hover:shadow-md"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;