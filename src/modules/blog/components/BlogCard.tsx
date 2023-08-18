import { Image } from 'antd';

interface IProps {
  title: string;
  shortDescription: string;
  link: string;
  img: string;
}

const BlogCard = (props: IProps) => (
  <div className="border border-indigo-500 bg-indigo-950 rounded-md divide-y divide-indigo-500">
    <div className="p-5">
      <Image src={props.img} alt="blog-image" />
    </div>
    <div className="md:top-7 top-6 p-5">
      <div className="text-white font-sans">{props.title}</div>
      <div className="mt-2 font-medium">{props.shortDescription}</div>
      <div
        onClick={() => window.open(props.link, '_blank')}
        className="font-sans hover:bg-indigo-500/80 inline-block mt-12 rounded-md cursor-pointer text-center font-medium text-white bg-indigo-500 text-sm py-4 px-6"
      >
        READ BLOG POST
      </div>
    </div>
  </div>
);
export { BlogCard };
