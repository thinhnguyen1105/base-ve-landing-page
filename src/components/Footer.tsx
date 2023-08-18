import { Logo } from './Logo';
import { Section } from '../layout/Section';
import { IconDiscord } from '../modules/footer/community/IconDiscord';
import { IconGithub } from '../modules/footer/community/IconGithub';
import { IconTelegram } from '../modules/footer/community/IconTelegram';
import { IconTwitter } from '../modules/footer/community/IconTwitter';

const UpButton = () => (
  <svg
    width="71"
    height="70"
    viewBox="0 0 71 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="35.039" cy="35" rx="35.0243" ry="35" fill="#D9D9D9" />
    <path
      d="M48.048 41.8876C48.048 44.1576 46.5568 46 44.7196 46H37.8062C37.0593 46 36.3573 45.5571 35.9191 44.8127L35.0777 43.3825C34.8138 42.9303 34.2686 42.9303 34.0022 43.3825L33.1632 44.8127C32.7226 45.5571 32.023 46 31.2762 46H24.3603C22.5205 46 21.0293 44.1576 21.0293 41.8876V41.8292C21.0293 41.1279 21.216 40.4481 21.5621 39.8914L33.3176 20.7659C33.9225 19.7447 35.1548 19.7447 35.7598 20.7659L47.5178 39.956C47.8613 40.5096 48.048 41.1894 48.048 41.8876Z"
      fill="url(#paint0_linear_36_311)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_36_311"
        x1="34.0121"
        y1="26.3424"
        x2="35.1018"
        y2="47.454"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1" stop-color="#005CFA" />
        <stop offset="0.21" stop-color="#004CFA" />
        <stop offset="0.41" stop-color="#0031FC" />
        <stop offset="0.62" stop-color="#0019FD" />
        <stop offset="0.84" stop-color="#0007FE" />
        <stop offset="1" stop-color="#0001FF" />
      </linearGradient>
    </defs>
  </svg>
);

interface IFooter {
  title: string;
  url: string;
}
interface IPropsFooterList {
  title: string;
  list: IFooter[];
}

const FooterList = (props: IPropsFooterList) => (
  <div>
    <div className="font-sans text-white font-semibold">{props.title}</div>
    {props.list.map((item, index) => (
      <div
        onClick={() => {
          if (item.url !== '/') window.open(item.url, '_blank');
        }}
        key={index}
        className="text-xs font-medium text-gray-500 hover:text-white mt-4 cursor-pointer w-fit"
      >
        {item.title}
      </div>
    ))}
  </div>
);

const listAbout = [
  { title: 'FAQ', url: 'https://docs.VEBase.finance' },
  {
    title: 'Brand Assets',
    url: 'https://docs.VEBase.finance/resources/brand-assets',
  },
  { title: 'Guides', url: 'https://docs.VEBase.finance/' },
  { title: 'Terms of Service', url: 'https://docs.VEBase.finance/' },
];
const listCommunity = [
  { title: 'Discussion', url: 'https://t.me/VEBase_Chat' },
  { title: 'Announcement', url: 'https://t.me/VEBase_Ann' },
  { title: 'Discord', url: 'https://discord.gg/MyFucBDsFZ' },
];
const listDevelopers = [
  { title: 'Application', url: '/' },
  { title: 'Github', url: '/' },
  { title: 'Audits ', url: '/' },
];

const Footer = () => (
  <div className="bg-indigo-950 relative">
    <Section>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <Logo />
          <div className="text-white mt-24">Join Our Community!</div>
          <div className="flex mt-4 cursor-pointer">
            <IconTelegram />
            <IconDiscord />
            <IconTwitter />
            <IconGithub />
          </div>
        </div>
        <div className="row-span-2">
          <div className="md:grid hidden grid-cols-4">
            <div></div>
            <FooterList title="About" list={listAbout} />
            <FooterList title="Community" list={listCommunity} />
            <FooterList title="Developers" list={listDevelopers} />
          </div>
        </div>
        <div className="row-span-3 flex justify-end">
          <button
            className="cursor-pointer flex absolute -top-8"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <UpButton />
          </button>
        </div>
      </div>
    </Section>
  </div>
);

export { Footer };
