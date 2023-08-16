import { Footer } from './Footer';
import { AirdropSection } from '../modules/airdrop';
import { Background } from '../modules/background/Background';
import { BlogSection } from '../modules/blog';
import { CommunitySection } from '../modules/community';
import { FeatureTitle } from '../modules/feature/FeatureTitle';
import { HeroSection } from '../modules/hero';
import { RelatedLinkSection } from '../modules/related-link';

const ListSections = () => (
  <div className="font-sans">
    <Background>
      <HeroSection />
      <RelatedLinkSection />
      <FeatureTitle />
      {/* <StatisticSection /> */}
      <AirdropSection />
      <CommunitySection />
      <BlogSection />
      <Footer />
      <div className="divide-y divide-indigo-500 p-6 bg-indigo-950 flex md:justify-center font-medium">
        <div className="text-white/80">@ Copyright 2023 ALL RIGHT REVERED </div>
      </div>
    </Background>
  </div>
);

export { ListSections };
