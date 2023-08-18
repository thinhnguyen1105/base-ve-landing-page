import { ReactNode } from 'react';

interface IProps {
  image: ReactNode;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

const FeatureCard = (props: IProps) => (
  <div className="flex flex-col justify-between border border-indigo-500 bg-indigo-950 rounded-lg">
    <div className="md:p-6 flex justify-center">{props.image}</div>
    <div className="px-6 py-6">
      <div className="md:px-6 md:pb-6">
        <div className="text-white text-xl font-bold mt-16 font-sans">
          {props.title.toUpperCase()}
        </div>
        <div className="mt-2 font-medium">{props.description}</div>
      </div>
      <div>
        <div className="md:p-6 py-6 font-sans">
          <div className="hover:bg-indigo-500/80 cursor-pointer inline-block rounded-md text-center font-medium text-white bg-indigo-500 text-sm py-2 px-10 mr-4">
            {props.primaryButtonText.toUpperCase()}
          </div>
          <div
            onClick={() => window.open('https://docs.VeBase.finance', '_blank')}
            className="hover:text-white/80 md:inline-block hidden cursor-pointer underline text-center font-medium text-white text-sm py-2"
          >
            {props.secondaryButtonText}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export { FeatureCard };
