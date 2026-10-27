import ThemeSwitcher from "@/components/theme/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { signInPath, signUpPath } from "@/paths";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b">
      <div className="mx-1 flex items-center justify-between py-3">
        <Logo />

        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          <nav aria-label="Account navigation">
            <ul className="flex gap-3">
              <li>
                <Link
                  href={signInPath()}
                  className={buttonVariants({ variant: "default" })}
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  href={signUpPath()}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
