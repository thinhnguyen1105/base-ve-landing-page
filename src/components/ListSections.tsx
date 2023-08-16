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
    </Background>
  </div>
);

export { ListSections };
