import { homePath } from "@/paths";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href={homePath()}
      className="text-3xl font-semibold tracking-tight transition-opacity hover:opacity-85"
    >
      Nexus
    </Link>
  );
}

export default Logo;
