import Link from "next/link";
import { db } from "@/server/db/index";
import { users } from "@/server/db/schema";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link href="/home/">
            <h3 className="text-2xl font-bold">Home →</h3>
            <div className="text-lg">
              Go Home
            </div>
          </Link>
          <Link href="/about-caps/">
            <h3 className="text-2xl font-bold">About CAPS →</h3>
            <div className="text-lg">
              All about us
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
