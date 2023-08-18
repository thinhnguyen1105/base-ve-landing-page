import { BlogCard } from './components/BlogCard';
import { Section } from '../../layout/Section';
import { DividerDash } from '../community/components/DividerDash';

const BlogSection = () => (
  <div className="bg-slate-950">
    <DividerDash />
    <Section>
      <div
        className="grid md:grid-cols-3 grid-cols-1 gap-4"
        data-aos="fade-y-out"
        data-aos-delay="150"
      >
        <BlogCard
          title="It’s Onchain Summer 🟡 and Base is open for bridging"
          shortDescription="Since we announced Base, our mission has been clear and consistent: bring the next million builders ..."
          link="https://base.mirror.xyz/h028XVTdP7QtZZfWAHuJ9OYmMNs0Fyi4e4fJZH_5ik4"
          img="https://base.mirror.xyz/_next/image?url=https%3A%2F%2Fmirror-media.imgix.net%2Fpublication-images%2Fa_6jZogx_dSuUHVs5CXf4.png%3Fheight%3D2400%26width%3D4800%26h%3D2400%26w%3D4800%26auto%3Dcompress&w=828&q=75"
        />
        <BlogCard
          title="Introducing Base Camp: Learn Smart Contract Development At Your Own Pace"
          shortDescription="Learn smart contract development with Base Camp, a self-paced learning program..."
          link="https://base.mirror.xyz/EuiYqAyZQmIYowkXgl22hGp97wICBcV7jnmRL3k6CC8"
          img="https://mirror-media.imgix.net/publication-images/0xKPSqJJlpyxaCmi5srip.png?height=1200&width=2400&h=1200&w=2400&auto=compress"
        />
        <BlogCard
          title="Base is open for everyone"
          shortDescription="We’re thrilled to announce that Base mainnet is now live and available for everyone. At launch, there are 100+ dapps and service providers available..."
          link="https://base.mirror.xyz/KPrKIukePtM2Iz945_3GpQJ-tgMf1hoato5isStLXJI"
          img="https://mirror-media.imgix.net/publication-images/Vilhaf10iDtp_5zQJxs-3.png?height=1200&width=2400&h=1200&w=2400&auto=compress"
        />
      </div>
      <div className="mt-12 flex justify-center">
        <div
          onClick={() => window.open('https://base.mirror.xyz', '_blank')}
          className="font-sans hover:bg-indigo-500/80 inline-block rounded-md cursor-pointer text-center font-medium text-white bg-indigo-500 text-sm py-2 px-6"
        >
          Read More...
        </div>
      </div>
    </Section>
    <DividerDash />
  </div>
);

export { BlogSection };
