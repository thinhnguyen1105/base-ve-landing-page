import Image from 'next/image';

import { FeatureCard } from './FeatureCard';
import ExchangeGif from '../../../public/videos/EXCHANGE.gif';
import FarmGif from '../../../public/videos/FARM.gif';
import LaunchpadGif from '../../../public/videos/LAUNCHPAD.gif';
import LiquidityGif from '../../../public/videos/LIQUIDITY.gif';
import StakeGif from '../../../public/videos/STAKE.gif';
import VeGif from '../../../public/videos/VE.gif';
import { Section } from '../../layout/Section';

const FeatureTitle = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="text-5xl font-semibold text-white font-sans">
        VEBase Feature
      </div>
      <div className="text-xl font-medium">
        Swap tokens, provide liquidity, stake and vote
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <FeatureCard
          image={
            <Image src={ExchangeGif} alt="my gif" height={300} width={400} />
          }
          title="EXCHANGE"
          description="Assets are traded by utilizing intelligent routing, abundant liquidity, and the newest automated market maker (AMM) technology to achieve minimal price slippage"
          primaryButtonText="Trade"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={
            <Image src={LiquidityGif} alt="my gif" height={300} width={400} />
          }
          title="LIQUIDITY"
          description="By contributing liquidity to the exchange, you can receive LP Tokens that entitle you to redeemable trading fees, thereby facilitating liquidity provision and ensuring a stable trading environment"
          primaryButtonText="LIQUIDITY"
          secondaryButtonText="Read more"
        />

        <FeatureCard
          image={<Image src={StakeGif} alt="my gif" height={300} width={400} />}
          title="STAKE"
          description="VEBase empowers users to earn passive income by staking their VEBase ($VEBase) or other tokens. This feature serves as an enticing value-add that encourages greater participation and engagement within our platform"
          primaryButtonText="STAKE"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={<Image src={FarmGif} alt="my gif" height={300} width={400} />}
          title="FARM"
          description="VEBase's yield farming incentivizes liquidity providers to stake their crypto assets in a smart contract-based liquidity pool, offering transaction fee percentages, lender interest, and governance tokens as incentives"
          primaryButtonText="FARM"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={
            <Image src={LaunchpadGif} alt="my gif" height={300} width={400} />
          }
          title="launchpad"
          description="VEBase’s IFO aka launchpad offers a fundraising model for emerging DeFi projects through pre-sales events hosted after strict project vetting"
          primaryButtonText="PARTICIPATE"
          secondaryButtonText="Read more"
        />

        <FeatureCard
          image={<Image src={VeGif} alt="my gif" height={300} width={400} />}
          title="Ve(3,3)"
          description="The Ve(3,3) model, inspired by Convex or Curve's vote-escrow mechanism and Olympus DAO's Staking Dilution (3,3), allows $VEBase holders to manage allocated emissions which reduces emission dilution. The model incentivizes fee generation and rewards long-term supporters while aligning stakeholder interests."
          primaryButtonText="Vote"
          secondaryButtonText="Read more"
        />
      </div>
    </Section>
  </div>
);

export { FeatureTitle };
