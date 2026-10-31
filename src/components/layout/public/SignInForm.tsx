import Form from "@/components/ui/Form";
import LabelInput from "@/components/ui/LabelInput";
import Link from "next/link";

function SignInForm() {
  return (
    <Form>
      <LabelInput
        label="Email"
        htmlFor="email"
        id="email"
        type="email"
        placeholder="me@example.com"
      />

      <div className="flex flex-col gap-2">
        <LabelInput
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
