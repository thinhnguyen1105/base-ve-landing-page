import { Tooltip, Button } from 'antd';

import { HeroOneButton } from './HeroOneButton';
import { Logo } from '../../components/Logo';
import { HeroText } from '../../icons/HeroText';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

export const HeroSection = () => {
  return (
    <>
      <div className="bg-indigo-950/90">
        <div className="max-w-screen-lg mx-auto md:px-3 px-6 py-6">
          <NavbarTwoColumns logo={<Logo />}>
            <div className="md:flex hidden justify-between text-sm "></div>
          </NavbarTwoColumns>
        </div>
      </div>
      <div className="lg:py-28">
        <Section yPadding="pt-20 pb-10">
          <HeroOneButton
            title={
              <div className="flex justify-center">
                <HeroText />
              </div>
            }
            description={
              <>
                <div className="font-medium text-white/80 text-md leading-6 mt-4 md:w-2/3 mb-8">
                  VE represents an innovative and pioneering integration of
                  cutting-edge DEX methodologies into the protocols that have
                  the abitity to incentivize holders in order to allocate
                  emissions towards liquidity poods. This revolutionary appoach
                  deliverrs a supple and agile mechanism to accelerate and
                  amplify liquidity with unparalleled effectiveness.
                </div>
              </>
            }
            button={
              <Tooltip placement="top" title={'Coming soon'}>
                <Button
                  size="large"
                  className="font-bold bg-indigo-500 text-white font-sans"
                  type="default"
                >
                  LAUNCH APP
                </Button>
              </Tooltip>
            }
          />
        </Section>
      </div>
    </>
  );
};
