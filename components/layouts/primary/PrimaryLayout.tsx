import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'body'> {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  ...bodyProps
}) => {
  return (
    <>
      <body {...bodyProps} className={`max-w-7xl mx-auto bg-[#F6F5DA]`}>
        <Header />
        <main className="relative w-full flex-1 flex justify-center items-center">
          {children}
        </main>
      </body>
    </>
  );
};

export default PrimaryLayout;
