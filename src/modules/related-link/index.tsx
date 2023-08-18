import { ReactNode } from 'react';

import Link from 'next/link';

import Bridge from './Bridge';
import ChainList from './ChainList';
import Defilima from './Defilima';
import EcoSystem from './EcoSystem';
import Explorer from './Explorer';
import { AppConfig } from '../../utils/AppConfig';

interface IProps {
  title: string;
  icon: ReactNode;
  link: string;
}

const RelatedLink = (props: IProps) => {
  return (
    <Link href={props.link} target="_blank">
      <div className="border border-indigo-500 rounded-lg px-4 py-2 flex justify-center items-center cursor-pointer">
        {props.icon}
        <span className="ml-2 text-white/80">{props.title}</span>
      </div>
    </Link>
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
          <RelatedLink
            title="EcoSystem"
            icon={<EcoSystem />}
            link={AppConfig.relatedLink.ecosystem}
          />
          <RelatedLink
            title="Explorer"
            icon={<Explorer />}
            link={AppConfig.relatedLink.explorer}
          />
          <RelatedLink
            title="Bridge"
            icon={<Bridge />}
            link={AppConfig.relatedLink.bridge}
          />
          <RelatedLink
            title="Chainlist"
            icon={<ChainList />}
            link={AppConfig.relatedLink.chainlist}
          />
          <RelatedLink
            title="DefiLima"
            icon={<Defilima />}
            link={AppConfig.relatedLink.defiliam}
          />
        </div>
      </div>
    </div>
  );
};
