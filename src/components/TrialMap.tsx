import { MapPin, Building2, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import activateMap from '@/assets/activate-map.png';

const TrialMap = () => {
  return (
    <section
      id="map"
      className="medical-section bg-gradient-to-b from-secondary/10 to-background py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-fadeInUp">
            Map
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fadeInUp animate-delay-100">
            GP practices participating in the COMPUTATIONAL study across England
          </p>
        </div>

        {/* Map Left + Content Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch animate-fadeInUp">
          {/* Left: Map */}
          <Card className="overflow-hidden rounded-xl border-2 border-red-500 shadow-lg hover:shadow-2xl hover:border-red-600 transition-all duration-300 h-full">
            <div className="relative w-full h-full min-h-[24rem] sm:min-h-[28rem] md:min-h-[32rem]">
              <img
                src={activateMap}
                alt="ACTIVATE Sites Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center bg-white/20 backdrop-blur-sm">
              <p className="text-sm sm:text-base text-muted-foreground">
                Map showing ACTIVATE study site locations across England.
              </p>
            </div>
          </Card>

          {/* Right: Content */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-red-500 shadow-xl rounded-xl transition-all duration-300 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  ACTIVATE Study Sites
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 hover:bg-primary/20 transition">
                    <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary">50</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Sites</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 hover:bg-accent/20 transition">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-accent">10,000</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Patients</div>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              ACTIVATE study sites are distributed to ensure comprehensive regional coverage and represent diverse patient populations.
            </p>
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
