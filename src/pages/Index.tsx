import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickInfoCards from '@/components/QuickInfoCards';
import BackgroundSection from '@/components/BackgroundSection';
import TrialSummary from '@/components/TrialSummary';
import TrialObjectives from '@/components/TrialObjectives';
import ResearchersSection from '@/components/ResearchersSection';
import TrialMap from '@/components/TrialMap';
import Collaborators from '@/components/Collaborators';
import FAQ from '@/components/FAQ';
import NewsUpdates from '@/components/NewsUpdates';
import ContactSection from '@/components/ContactSection';
import CookiesBanner from '@/components/cookiesBanner';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <HeroSection />
        <QuickInfoCards />
        <BackgroundSection />
        <TrialSummary />    
        <TrialObjectives />

        {/* Randomisation / IMP Management System Panel */}
        <Card className="p-8 bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-4xl mx-auto space-y-4 mb-12 border border-gray-200">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Randomisation System / IMP Management System
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            The Randomisation System ensures fair allocation of participants across study arms. 
            The IMP Management System monitors and tracks Investigational Medicinal Products 
            throughout the trial to maintain compliance and patient safety.
          </p>
        </Card>

        <ResearchersSection />
        <TrialMap />
        <Collaborators />
        <NewsUpdates />
        <FAQ />
        <CookiesBanner />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
