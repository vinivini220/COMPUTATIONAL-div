import { Heart, Activity } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div 
        className="section-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="section-overlay" />
      
      <div className="hero-content">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary heartbeat" />
            <Activity className="w-6 h-6 text-accent pulse-medical" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
            COMPUTATIONAL
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-xl md:text-2xl text-foreground leading-relaxed">
              A primary care-based cluster randomised of personalised renal function 
              monitoring and interventions in people living with heart failure
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm">
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="font-semibold text-primary">Funder</div>
              <div className="text-foreground">NIHR Programme Grants for Applied Research (PGfAR)</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="font-semibold text-primary">Sponsor</div>
              <div className="text-foreground">University of Liverpool</div>
            </div>
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <div className="font-semibold text-accent">Duration</div>
              <div className="text-foreground">18 Months Follow-Up</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;