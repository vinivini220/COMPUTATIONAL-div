import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Collab1 from '@/assets/1.jpeg';
import Collab2 from '@/assets/2.jpeg';
import Collab3 from '@/assets/3.jpeg';
import Collab4 from '@/assets/4.jpeg';
import Collab5 from '@/assets/5.png';


const Collaborators = () => {
  const collaborators = [
    {
      img: Collab5,
      name: "University of Liverpool",
      role: "Lead Institution & Sponsor",
      website: "https://www.liverpool.ac.uk/",
      description: "Primary research institution leading the COMPUTATIONAL"
    },
    // {
    //   img: Collab1,

    //   name: "Liverpool Clinical Centre (LCTC)",
    //   role: "Management",
    //   website: "https://www.liverpool.ac.uk/lctc/",
    //   description: "Clinical coordination and data management"
    // },
    {
      img: Collab4,
      name: "NIHR",
      role: "Funding Body",
      website: "https://www.nihr.ac.uk/",
      description: "National Institute for Health and Care Research funding"
    },
    {
      img: Collab2,
      name: "Bangor University",
      role: "Research Partner",
      website: "https://www.bangor.ac.uk/",
      description: "Collaborative research and academic support"
    },
    {
      img: Collab3,
      name: "OPTUM",
      role: "Technology Partner",
      website: "https://www.optum.com/",
      description: "Electronic health record system (EMIS) integration"
    }
  ];

  return (
      <section id="collaborators" className="medical-section bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Collaborators
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Working together with leading institutions to advance heart failure care
            through innovative renal function monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((collaborator, index) => (
            <Card
              key={index}
              className="p-6 medical-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Add Image */}
              <img
                src={collaborator.img}
                alt={collaborator.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {collaborator.name}
                  </h3>
                  <div className="text-sm text-primary font-medium mb-2">
                    {collaborator.role}
                  </div>
                </div>
                <a
                  href={collaborator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {collaborator.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl px-8 py-4 border border-primary/20">
            <span className="text-sm font-medium text-foreground">Supported by:</span>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>NIHR Programme Grants for Applied Research</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
              <span>University of Liverpool</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
              <span>NHS England</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;