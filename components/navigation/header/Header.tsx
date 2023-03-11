import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`flex items-center justify-between space-x-2 font-bold px-10 py-5 ${className}`}
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <h1>An Image goes Here</h1>
        </Link>
        <h1>Lakorthus</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-[#062C80] text-[#F6F5DA] flex items-center rounded-full text-center"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
