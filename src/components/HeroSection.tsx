import { Heart, Activity } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  const cards = [
    { title: "Funder", value: "NIHR Programme Grants for Applied Research (PGfAR)", bg: "bg-primary/10", border: "border-primary/20", text: "text-primary" },
    { title: "Sponsor", value: "University of Liverpool", bg: "bg-primary/10", border: "border-primary/20", text: "text-primary" },
    { title: "Duration", value: "18 Months", bg: "bg-accent/10", border: "border-accent/20", text: "text-accent" },
    { title: "Trial Center", value: "Liverpool Clinical Trials Centre (LCTC)", bg: "bg-primary/10", border: "border-primary/20", text: "text-primary" },
  ];

  return (
    <section id="hero" className="hero-section relative">
      {/* Background image */}
      <div 
        className="section-background absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="section-overlay absolute inset-0 " />

      {/* Content */}
      <div className="hero-content relative z-10 text-center max-w-5xl mx-auto px-4 py-24 fade-in-up">
        {/* Icons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-primary heartbeat" />
          <Activity className="w-6 h-6 text-accent pulse-medical" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
          COMPUTATIONAL
        </h1>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-xl md:text-2xl text-foreground leading-relaxed">
            A primary care-based cluster randomised trial of personalised renal function 
            monitoring and interventions in people living with heart failure
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-sm">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} rounded-lg p-3 ${card.border} transition-transform duration-300 cursor-pointer`}
            >
              <div className={`font-semibold text-lg ${card.text} mb-1`}>{card.title}</div>
              <div className="text-foreground">{card.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;