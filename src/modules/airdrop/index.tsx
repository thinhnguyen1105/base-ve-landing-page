import { AirdropImage } from './images/AirdropImage';
import { Section } from '../../layout/Section';

const AirdropSection = () => (
  <div className="bg-airdrop bg-no-repeat bg-center bg-cover">
    <Section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div>
          <div className="text-3xl text-left font-normal text-white font-sans">
            Airdrop for Loyalty users
          </div>
          <div className="mt-4 font-medium text-white">
            {`Join VEBase's beta testing program to provide valuable feedback and be rewarded for your active participation in our community-driven initiative. VEBase is dedicated to continuously improving and optimizing our platform to cater to the evolving needs of our users, and we value the collaborative efforts of our community in achieving this goal.`}
          </div>
          <div className="mt-6 font-sans">
            <div
              onClick={() =>
                window.open(
                  'https://docs.VEBase.finance/tokenomics/VEBase-airdrop',
                  '_blank'
                )
              }
              className="hover:bg-white/80 cursor-pointer inline-block rounded-md text-center font-bold text-indigo-500 bg-white text-sm py-3 px-10 mr-4"
            >
              PARTICIPATE
            </div>
            <div
              onClick={() =>
                window.open(
                  'https://docs.VEBase.finance/tokenomics/VEBase-airdrop',
                  '_blank'
                )
              }
              className="underline hover:text-white/80 md:inline-block hidden cursor-pointer text-center font-medium text-white text-sm py-2 px-6"
            >
              Information
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <AirdropImage />
        </div>
      </div>
    </Section>
  </div>
);

export { AirdropSection };
