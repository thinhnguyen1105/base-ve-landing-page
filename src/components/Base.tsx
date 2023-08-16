import { ListSections } from './ListSections';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <ListSections />
    {/* <FeatureTitle /> */}
    {/* <StatisticSection /> */}
    {/* <AirdropSection /> */}
    {/* <RoadmapSection /> */}
    {/* <CommunitySection /> */}
    {/* <BlogSection /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
