import { Activity, Brain, Users, Clock } from 'lucide-react';
import medicalTechImage from '@/assets/medical-tech.jpg';

const TrialSummary = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Powered Algorithm",
      description: "Personalised renal function monitoring designed to prevent hospital admissions"
    },
    {
      icon: Users,
      title: "Large Scale Study",
      description: "200 GP practices across England evaluating around 20,000 patients"
    },
    {
      icon: Activity,
      title: "Randomised",
      description: "100 centres using prediction model vs. 100 centres with standard care"
    },
    {
      icon: Clock,
      title: "Comprehensive Monitoring",
      description: "18-month trial period with PROMs collected at baseline, 6 and 18 months"
    }
  ];

  return (
    <section id="trial-summary" className="medical-section bg-gradient-to-b from-secondary/30 to-background">
      <div 
        className="section-background opacity-20"
        style={{ backgroundImage: `url(${medicalTechImage})` }}
      />
      <div className="section-overlay bg-gradient-to-r from-background/90 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
             Summary
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              The COMPUTATIONAL will explore the clinical and cost-effectiveness of a 
              personalised renal function monitoring algorithm, designed to prevent hospital 
              admissions due to renal impairment without worsening heart failure outcomes.
            </p>
            
            <p>
              The algorithm, classed as a medical device, consists of a prediction model designed 
              to tailor monitoring schedules, together with a decision tool that provides guidance 
              on immediate interventions and recommendations for the primary care team.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border medical-transition hover:shadow-lg fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-6 border border-primary/20">
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">Study Design:</span> We will recruit 200 GP practices 
              across England that use the OPTUM (EMIS) system, evaluating around 20,000 patients. 
              The  will run for 18 months, in line with National Institute for Health and Care 
              Excellence (NICE) guidelines and current standards of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSummary;