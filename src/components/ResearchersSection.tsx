import { FileText, Video, Users, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import researchTeamImage from '@/assets/research-team.jpg';

const ResearchersSection = () => {
  const resources = [
    {
      icon: Video,
      title: "Training Videos",
      description: "Comprehensive video guides for implementing the monitoring algorithm"
    },
    {
      icon: FileText,
      title: "Documentation", 
      description: "Detailed protocols and implementation guides for GP practices"
    },
    {
      icon: Users,
      title: "Support Team",
      description: "Dedicated support staff available for questions and guidance"
    }
  ];

  return (
    <section id="resources" className="medical-section">
      <div 
        className="section-background"
        style={{ backgroundImage: `url(${researchTeamImage})` }}
      />
      <div className="section-overlay bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Resources for GP Practices
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training materials and support documentation available 
            to participating healthcare providers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center bg-card/90 backdrop-blur-sm medical-transition  fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Training videos and documentation are available to participating GP practices 
              through our secure portal with credential-based access.
            </p>
            
            <Button className="medical-transition">
              Request Access Credentials
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchersSection;