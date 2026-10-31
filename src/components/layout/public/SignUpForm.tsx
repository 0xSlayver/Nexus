import Form from "@/components/ui/Form";
import LabelInput from "@/components/ui/LabelInput";

function SignUpForm() {
  return (
    <Form>
      <LabelInput
        label="Name"
        htmlFor="name"
        id="name"
        type="text"
        placeholder="John Doe"
      />

      <LabelInput
        label="Email"
        htmlFor="email"
        id="email"
        type="email"
        placeholder="me@example.com"
      />

      <LabelInput
        label="Password"
        htmlFor="password"
        id="password"
        type="password"
      />

      <LabelInput
        label="Confirm Password"
        htmlFor="confirmPassword"
        id="confirmPassword"
        type="password"
      />
    </Form>
  );
}

export default SignUpForm;
