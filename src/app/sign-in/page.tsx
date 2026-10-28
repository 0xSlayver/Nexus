import CardCompact from "@/components/CardCompact";
import SignInForm from "@/components/layout/public/SignInForm";
import { Button } from "@/components/ui/button";
import { signUpPath } from "@/paths";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center">
      <CardCompact
        title="Login to your account"
        footer={
          <div className="flex w-full flex-col items-center gap-2">
            <Button size={"icon"} type="submit" className="w-full">
              Login
            </Button>
            <Link href={signUpPath()} className="flex items-center gap-1">
              Dont have account?
              <Button className="p-0" variant={"link"}>
                Sign Up
              </Button>
            </Link>
          </div>
        }
      >
        <SignInForm />
      </CardCompact>
    </div>
  );
}

export default LoginPage;
