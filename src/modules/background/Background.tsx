import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div
    style={{ height: 900 }}
    className="md:bg-gradient-dot bg-slate-950 bg-cover relative"
  >
    <video
      className="absolute top-0 object-cover w-full h-full"
      autoPlay
      muted
      loop
    >
      <source src="/videos/homepage.mp4" type="video/mp4" />
    </video>
    <div className="absolute w-full">{props.children}</div>
  </div>
);

export { Background };
