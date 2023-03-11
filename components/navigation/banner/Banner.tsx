export interface IBanner {
  sampleTextProp: string;
}

const Banner: React.FC<IBanner> = ({ sampleTextProp }) => {
  return <div className={`text-2xl text-green-900`}>{sampleTextProp}</div>;
};

export default Banner;
