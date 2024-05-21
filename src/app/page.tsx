import Link from "next/link";

export default async function HomePage() {
  return (
    <div>
      <Link href="/sign-in">Sign In</Link>
    </div>
  );
}
