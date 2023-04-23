import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="mx-auto mb-8 max-w-xl">
    <Link href="#">
      <div className="relative my-4 h-24">
        <Image
          className="object-contain"
          src="/header.png"
          alt=""
          fill
          priority
        />
      </div>
    </Link>

    <nav className="flex justify-evenly text-2xl text-yellow">
      <Link href="#">Episodes</Link>
      <Link href="https://www.otherworldpod.com/">Merch</Link>
      <Link href="https://www.patreon.com/Otherworld">Patreon</Link>
    </nav>
  </header>
);

export default Header;
