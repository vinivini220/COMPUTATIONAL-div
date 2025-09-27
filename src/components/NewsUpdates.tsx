import { Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NewsUpdates = () => {
  const updates = [
    {
      date: "2024-03-15",
      title: "COMPUTATIONAL Recruitment Milestone Reached",
      category: "Milestone",
      excerpt: "We are pleased to announce that 150 GP practices have now joined the COMPUTATIONAL trial, representing 75% of our recruitment target.",
      link: "#"
    },
    {
      date: "2024-02-28",
      title: "New Training Resources Available",
      category: "Resources",
      excerpt: "Enhanced video training materials and implementation guides are now available in the secure practitioner portal.",
      link: "#"
    },
    {
      date: "2024-02-10",
      title: "Interim Safety Review Completed",
      category: "Safety",
      excerpt: "The independent Data Monitoring Committee has completed the first interim safety review with positive findings.",
      link: "#"
    },
    {
      date: "2024-01-22",
      title: "COMPUTATIONAL Protocol Published",
      category: "Publication",
      excerpt: "The full trial protocol has been published in the British Journal of General Practice, providing transparency in our methodology.",
      link: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Milestone": return "bg-green-100 text-green-800 border-green-200";
      case "Resources": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Safety": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Publication": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="medical-section bg-muted/30" id="news">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Newspaper className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Updates
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest developments in the COMPUTATIONAL trial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {updates.map((update, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/95 backdrop-blur-sm medical-transition hover:shadow-lg fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant="outline" 
                  className={getCategoryColor(update.category)}
                >
                  {update.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(update.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {update.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {update.excerpt}
              </p>

              <Button 
                variant="outline" 
                size="sm"
                className="medical-transition hover:scale-105"
              >
                Read More
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="medical-transition hover:scale-105"
          >
            View All Updates
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;