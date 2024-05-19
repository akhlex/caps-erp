import Link from "next/link";
import { db } from "@/server/db/index";
import { users } from "@/server/db/schema";

export default function HomePage() {
  return (
    <div>
      <Link href="/sign-in">Sign In</Link>
    </div>
  );
}
