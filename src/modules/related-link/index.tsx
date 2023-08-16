import { ReactNode } from 'react';

import Bridge from './Bridge';
import ChainList from './ChainList';
import Defilima from './Defilima';
import DexScreener from './DexScreener';
import EcoSystem from './EcoSystem';
import Explorer from './Explorer';
import { Partner } from '../../components/Partner';
import { Section } from '../../layout/Section';

interface IProps {
  children: ReactNode;
  link: string;
}

const RelatedLink = (props: IProps) => {
  return (
    <div
      onClick={() => window.open(props.link, '_blank')}
      className="relative cursor-pointer"
    >
      <Partner />
      <div className="absolute top-3 p-6">{props.children}</div>
    </div>
  );
};

export const RelatedLinkSection = () => {
  return (
    <Section yPadding="">
      <div className="text-center text-xl mt-4">
        {String('Related Links').toUpperCase()}
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mt-4">
        <RelatedLink link="https://ecosystem.zksync.io/">
          <EcoSystem />
        </RelatedLink>
        <RelatedLink link="https://explorer.zksync.io/">
          <Explorer />
        </RelatedLink>
        <RelatedLink link="https://bridge.zksync.io/">
          <Bridge />
        </RelatedLink>
        <RelatedLink link="https://chainlist.org/chain/324">
          <ChainList />
        </RelatedLink>
        <RelatedLink link="https://defillama.com/chain/zkSync%20Era">
          <Defilima />
        </RelatedLink>
        <RelatedLink link="https://dexscreener.com/zksync">
          <DexScreener />
        </RelatedLink>
      </div>
    </Section>
  );
};
