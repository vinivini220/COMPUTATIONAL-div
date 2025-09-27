import { MapPin, Building2, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TrialMap = () => {
  return (
    <section id="map" className="medical-section bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
             Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            GP practices participating in the COMPUTATIONAL across England
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  England-wide Coverage
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">200</div>
                  <div className="text-sm text-muted-foreground">GP Practices</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent">20,000</div>
                  <div className="text-sm text-muted-foreground">Patients</div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Participating practices are located across England and use the OPTUM (EMIS) 
                system for electronic health records. The geographic distribution ensures 
                diverse patient populations and healthcare settings are represented in the study.
              </p>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {/* Placeholder for UK Map */}
              <Card className="p-8 text-center bg-gradient-to-br from-muted/30 to-muted/10 border-dashed border-2 border-muted">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Interactive Map
                </h4>
                <p className="text-sm text-muted-foreground">
                  Detailed map showing participating GP practice locations 
                  will be available during the  recruitment phase
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialMap;