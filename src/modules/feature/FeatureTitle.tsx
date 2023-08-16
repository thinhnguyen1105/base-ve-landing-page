import { FeatureCard } from './FeatureCard';
import { TestAnimation } from '../../animation';
import { Section } from '../../layout/Section';

const FeatureTitle = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="text-5xl font-semibold text-white font-sans">
        BaseVe Feature
      </div>
      <div className="text-xl font-medium">
        Swap tokens, provide liquidity, stake and vote
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <FeatureCard
          image={<TestAnimation path="" />}
          title="EXCHANGE"
          description="Assets are traded by utilizing intelligent routing, abundant liquidity, and the newest automated market maker (AMM) technology to achieve minimal price slippage"
          primaryButtonText="Trade"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={<TestAnimation path="" />}
          title="LIQUIDITY"
          description="By contributing liquidity to the exchange, you can receive LP Tokens that entitle you to redeemable trading fees, thereby facilitating liquidity provision and ensuring a stable trading environment"
          primaryButtonText="LIQUIDITY"
          secondaryButtonText="Read more"
        />

        <FeatureCard
          image={<TestAnimation path="" />}
          title="STAKE"
          description="BaseVe empowers users to earn passive income by staking their BaseVe ($FORTI) or other tokens. This feature serves as an enticing value-add that encourages greater participation and engagement within our platform"
          primaryButtonText="STAKE"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={<TestAnimation path="" />}
          title="FARM"
          description="BaseVe's yield farming incentivizes liquidity providers to stake their crypto assets in a smart contract-based liquidity pool, offering transaction fee percentages, lender interest, and governance tokens as incentives"
          primaryButtonText="FARM"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={<TestAnimation path="" />}
          title="launchpad"
          description="BaseVe’s IFO aka launchpad offers a fundraising model for emerging DeFi projects through pre-sales events hosted after strict project vetting"
          primaryButtonText="PARTICIPATE"
          secondaryButtonText="Read more"
        />

        <FeatureCard
          image={<TestAnimation path="" />}
          title="Ve(3,3)"
          description="The Ve(3,3) model, inspired by Convex or Curve's vote-escrow mechanism and Olympus DAO's Staking Dilution (3,3), allows $FORTI holders to manage allocated emissions which reduces emission dilution. The model incentivizes fee generation and rewards long-term supporters while aligning stakeholder interests."
          primaryButtonText="Vote"
          secondaryButtonText="Read more"
        />
      </div>
    </Section>
  </div>
);

export { FeatureTitle };
