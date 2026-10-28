import Form from "@/components/ui/Form";
import LabelButton from "@/components/ui/LabelButton";
import Link from "next/link";

function SignInForm() {
  return (
    <Form>
      <LabelButton
        label="Email"
        htmlFor="email"
        id="email"
        type="text"
        placeholder="me@example.com"
      />

      <div className="flex flex-col gap-2">
        <LabelButton
          label="Password"
          htmlFor="password"
          id="password"
          type="password"
        />

        <Link
          href="#"
          className="inline-block text-sm underline-offset-4 hover:underline"
        >
          Forgot your password?
        </Link>
      </div>
    </Form>
  );
}

export default SignInForm;
