import { ReactNode } from 'react';

import Bridge from './Bridge';
import ChainList from './ChainList';
import Defilima from './Defilima';
import EcoSystem from './EcoSystem';
import Explorer from './Explorer';

interface IProps {
  title: string;
  icon: ReactNode;
}

const RelatedLink = (props: IProps) => {
  return (
    <div className="border border-indigo-500 rounded-lg px-4 py-2 flex justify-center items-center">
      {props.icon}
      <span className="ml-2 text-white/80">{props.title}</span>
    </div>
  );
};

export const RelatedLinkSection = () => {
  return (
    <div className="bg-indigo-950 pb-12">
      <div className="p-6 max-w-screen-lg mx-auto">
        <div className="text-center text-white text-xl mt-12">
          {String('Related Links').toUpperCase()}
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-4 mt-12">
          <RelatedLink title="EcoSystem" icon={<EcoSystem />} />
          <RelatedLink title="Explorer" icon={<Explorer />} />
          <RelatedLink title="Bridge" icon={<Bridge />} />
          <RelatedLink title="Chainlist" icon={<ChainList />} />
          <RelatedLink title="DefiLima" icon={<Defilima />} />
        </div>
        {/* <div className="grid md:grid-cols-5 grid-cols-2 gap-4 mt-4">
          <div></div>
          <RelatedLink title="EcoSystem" />
          <RelatedLink title="Explorer" />
          <RelatedLink title="Bridge" />
          <div></div>
        </div> */}
      </div>
    </div>
  );
};
