import Link from "next/link";

export default async function HomePage() {
  return (
    <div>
      <Link href="./session-booking">Book a GPT/OPT session</Link>
    </div>
  );
}
