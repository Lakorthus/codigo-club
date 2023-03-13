import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../lib/urlFor';

const RichTextComponents = {
  // Defining the types
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
            sizes={'(max-width: 640px) 100vw, 640px'}
          />
        </div>
      );
    },
    code: ({ value }: any) => (
      <pre
        className="bg-gray-800 text-white p-5 rounded-md"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {/* Showing the language */}
        <code className="text-[#4FB9FC] font-bold text-xl">
          {value.language ? value.language : ''}
        </code>
        <br />
        {/* Showing the code */}
        <code className="">{value.code}</code>
      </pre>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-l-[#4FB9FC] pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#4FB9FC] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;