import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl text-center">
        {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
        <Image
          src="/assets/images/coming-soon.svg"
          width={100}
          height={50}
          alt="Coming Soon"
          className="w-96 mx-auto"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          We're launching soon!
        </h1>
        <p className="text-gray-600">
          Our team is working hard to bring you the best experience. Stay tuned!
        </p>
      </div>
    </main>
  );
}
