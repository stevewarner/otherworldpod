import Episodes from '@/components/episodes';
import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto max-w-md px-6 md:max-w-4xl">
      <div className="fixed inset-0 -z-10">
        <Image
          className="absolute inset-0 m-auto opacity-10"
          src="/guy.png"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <Header />
      {/* @ts-expect-error Server Component */}
      <Episodes />
    </main>
  );
}
