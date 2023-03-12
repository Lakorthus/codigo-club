import Banner from '../../navigation/banner/Banner';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'body'> {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  ...bodyProps
}) => {
  return (
    <body
      {...bodyProps}
      className={`h-screen relative w-full flex-1 flex justify-center items-center bg-[#F6F5DA]`}
    >
      <main className="max-w-7xl mx-auto">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
        {children}
      </main>
    </body>
  );
};

export default PrimaryLayout;
