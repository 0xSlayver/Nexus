import CardCompact from "@/components/CardCompact";
import SignUpForm from "@/components/layout/public/SignUpForm";

function SignupPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center">
      <CardCompact
        title="Create a new account!"
        description="Create your free account to save your work progress, sync across devices, and pick up right where you left off."
      >
        <SignUpForm />
      </CardCompact>
    </div>
  );
}

export default SignupPage;
