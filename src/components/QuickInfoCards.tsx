import { Building2, Users, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const QuickInfoCards = () => {
  const stats = [
    {
      icon: Building2,
      label: "GP Practices",
      value: "200",
      description: "Across England using OPTUM (EMIS) system"
    },
    {
      icon: Users,
      label: "Estimated Patients", 
      value: "20,000",
      description: "People living with heart failure"
    },
    {
      icon: Calendar,
      label: "Study Follow-Up",
      value: "18 months", 
      description: "In line with NICE guidelines"
    }
  ];

  return (
    <section className="medical-section bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             Overview
          </h2>
          <p className="text-lg text-muted-foreground">
            Key statistics for the COMPUTATIONAL clinical 
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="info-card text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center medical-transition">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoCards;