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
        <ResearchersSection />
        <TrialMap />
        <Collaborators />
        <NewsUpdates />
        <FAQ />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
