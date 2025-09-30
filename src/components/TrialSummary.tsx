import { Activity, Brain, Users, Clock } from 'lucide-react';
import medicalTechImage from '@/assets/medical-tech.jpg';

const TrialSummary = () => {
  const highlights = [
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
      description: "18-month period with PROMs collected at baseline, 6 and 18 months"
    }
  ];

  return (
    <section
      id="trial-summary"
      className="relative py-20 bg-gradient-to-b from-secondary/30 to-background"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${medicalTechImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trial Summary
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

        {/* Highlights Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-card/70 backdrop-blur-md rounded-2xl p-8 border border-border shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  {highlight.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Study Design Box */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-sm">
            <p className="text-base md:text-lg text-muted-foreground">
              <span className="font-semibold text-primary">Study Design:</span> We will recruit 200 GP practices 
              across England that use the OPTUM (EMIS) system, evaluating around 20,000 patients. 
              The trial will run for 18 months, in line with National Institute for Health and Care 
              Excellence (NICE) guidelines and current standards of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSummary;
