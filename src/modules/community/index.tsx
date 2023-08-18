import { CommunityCard } from './components/CommunityCard';
import { DiscordImage } from './components/DiscordImage';
import { TeleImage } from './components/TeleImage';
import { TwitterImage } from './components/TwitterImage';
import { Section } from '../../layout/Section';
import { AppConfig } from '../../utils/AppConfig';

const CommunitySection = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="text-4xl text-center font-normal text-white font-sans">
        Join VEBase!
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-20">
        <div data-aos="fade-y-out">
          <CommunityCard
            image={<TeleImage />}
            description="Join VEBase community on Telegram"
            buttonText="JOIN TELEGRAM"
            url={AppConfig.telegram}
          />
        </div>
        <div data-aos="fade-y-out" data-aos-delay="150">
          <CommunityCard
            image={<DiscordImage />}
            description="Become members of VEBase on Discord"
            buttonText="JOIN DISCORD"
            url={AppConfig.discord}
          />
        </div>
        <div data-aos="fade-y-out" data-aos-delay="300">
          <CommunityCard
            image={<TwitterImage />}
            description="Get the latest news on VEBase Twitter"
            buttonText="FOLLOW"
            url={AppConfig.twitter}
          />
        </div>
        <div data-aos="fade-y-out" data-aos-delay="450">
          <CommunityCard
            image={<TeleImage />}
            description="Join VEBase channel on Telegram"
            buttonText="VISIT CHANNEL"
            url={AppConfig.annoucement}
          />
        </div>
      </div>
    </Section>
  </div>
);

export { CommunitySection };
