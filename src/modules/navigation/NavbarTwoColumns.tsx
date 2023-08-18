import { ReactNode } from 'react';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

import { SettingIcon } from '../../icons/Setting';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-white">
        {props.children}
      </ul>
    </nav>
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-center mt-2 md:mt-0">
        <ConnectButton />
        <div className="hidden md:block ml-2 mt-1">
          <SettingIcon />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
