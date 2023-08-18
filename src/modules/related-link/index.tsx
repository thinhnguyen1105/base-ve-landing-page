import EcoSystem from './EcoSystem';

interface IProps {
  title: string;
}

const RelatedLink = (props: IProps) => {
  return (
    <div className="border border-indigo-500 rounded-lg px-4 py-2 flex items-center">
      <EcoSystem />
      <span className="ml-2">{props.title}</span>
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
          <RelatedLink title="EcoSystem" />
          <RelatedLink title="Explorer" />
          <RelatedLink title="Bridge" />
          <RelatedLink title="Chainlist" />
          <RelatedLink title="DefiLima" />
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
