import Link from 'next/link';

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.text}>
          <Link
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
