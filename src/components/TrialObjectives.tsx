import { Heart, Target, TrendingUp, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TrialObjectives = () => {
  const objectives = [
    {
      type: "Primary Objective",
      icon: Heart,
      color: "primary",
      items: [
        "To compare the clinical effectiveness of personalised renal function monitoring with standard care in patients living with heart failure"
      ]
    },
    {
      type: "Secondary Objectives", 
      icon: Target,
      color: "accent",
      items: [
        "To determine if implementation of personalised renal function monitoring in patients living with heart failure improves a variety of clinical outcomes, when compared with standard care",
        "To identify barriers in the optimal use of personalised renal function monitoring for both the primary care team and patients"
      ]
    },
    {
      type: "Economic Objective",
      icon: TrendingUp,
      color: "accent",
      items: [
        "To estimate the cost-effectiveness of personalised renal function monitoring in comparison to standard care"
      ]
    }
  ];

  return (
    <section id="objectives" className="medical-section bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
             Objectives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive research framework designed to evaluate the effectiveness 
            and implementation of personalised renal function monitoring
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            const colorClasses = {
              primary: "text-primary bg-primary/10 border-primary/20",
              accent: "text-accent bg-accent/10 border-accent/20", 
              success: "text-green-600 bg-green-50 border-green-200"
            };
            
            return (
              <Card 
                key={index}
                className="p-6 medical-transition  fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[objective.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {objective.type}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {objective.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <p className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 border border-primary/20">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Funded by NIHR Programme Grants for Applied Research (PGfAR)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialObjectives;