'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnameToArray = pathname.split('/').map((segment) => segment);

  const breadcrumbs = pathnameToArray.map((segment, index) => {
    const href = '/' + pathnameToArray.slice(0, index + 1).join('/');
    const formattedSegment = segment.replace(/-/g, ' ').toUpperCase();

    return (
      <span key={href}>
        {index === pathnameToArray.length - 1 ? (
          <span className="font-bold text-white">{formattedSegment}</span>
        ) : (
          <Link href={href} className="text-gray-400 hover:underline">{formattedSegment}</Link>
        )}
        {index < pathnameToArray.length - 1 && <span className="text-gray-400 mx-2">/</span>}
      </span>
    );
  });

  return (
    <nav aria-label="breadcrumb" className="flex space-x-2">
      <Link href="/" className="text-gray-400 hover:underline">Home</Link>
      <span className="text-gray-400">/</span>
      {breadcrumbs}
    </nav>
  );
};

export default Breadcrumb;
