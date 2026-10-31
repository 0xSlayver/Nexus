import CardCompact from "@/components/CardCompact";
import SignUpForm from "@/components/layout/public/SignUpForm";
import { Button } from "@/components/ui/button";
import { signInPath } from "@/paths";
import Link from "next/link";

function SignupPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center">
      <CardCompact
        title="Create a new account!"
        footer={
          <div className="flex w-full flex-col items-center gap-2">
            <Button size={"icon"} type="submit" className="w-full">
              Create Account
            </Button>
            <Link href={signInPath()} className="flex items-center gap-1">
              Already have an account?
              <Button className="p-0" variant={"link"}>
                Sign In
              </Button>
            </Link>
          </div>
        }
      >
        <SignUpForm />
      </CardCompact>
    </div>
  );
}

export default SignupPage;
