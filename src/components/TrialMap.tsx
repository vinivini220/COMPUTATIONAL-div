import { MapPin, Building2, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ukMap from '@/assets/uk-map.png';
import activateMap from '@/assets/activate-map.png';

const TrialMap = () => {
  return (
    <section id="map" className="medical-section bg-gradient-to-b from-secondary/10 to-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-fadeInUp">
            Map
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fadeInUp animate-delay-100">
            GP practices participating in the COMPUTATIONAL study across England
          </p>
        </div>

        {/* Stats Card */}
        <div className="mb-12 animate-fadeInUp">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-red-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                England-wide Coverage
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 hover:bg-primary/20 transition">
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">200</div>
                <div className="text-sm sm:text-base text-muted-foreground">GP Practices</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 hover:bg-accent/20 transition">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-accent">20,000</div>
                <div className="text-sm sm:text-base text-muted-foreground">Patients</div>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Participating practices are located across England and use the OPTUM (EMIS) system for electronic health records. The geographic distribution ensures diverse patient populations and healthcare settings are represented in the study.
            </p>
          </Card>
        </div>

        {/* Maps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UK Map */}
          <Card className="overflow-hidden rounded-xl border-2 border-red-500 shadow-lg hover:shadow-2xl hover:border-red-600 transition-all duration-300 animate-fadeInUp">
            <div className="relative w-full h-72 sm:h-80 md:h-96">
              <img
                src={ukMap}
                alt="UK GP Practices Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center bg-white/20 backdrop-blur-sm">
              <p className="text-sm sm:text-base text-muted-foreground">
                Map showing participating GP practice locations across England.
              </p>
            </div>
          </Card>

          {/* ACTIVATE Map */}
          <Card className="overflow-hidden rounded-xl border-2 border-red-500 shadow-lg hover:shadow-2xl hover:border-red-600 transition-all duration-300 text-center animate-fadeInUp animate-delay-100">
            <div className="relative w-full h-72 sm:h-80 md:h-96">
              <img
                src={activateMap}
                alt="ACTIVATE Sites Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white/20 backdrop-blur-sm">
            
            </div>
          </Card>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default TrialMap;
