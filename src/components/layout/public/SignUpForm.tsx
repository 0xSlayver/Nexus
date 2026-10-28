import Form from "@/components/ui/Form";
import LabelButton from "@/components/ui/LabelButton";

function SignUpForm() {
  return (
    <Form>
      <LabelButton
        label="Name"
        htmlFor="name"
        id="name"
        type="text"
        placeholder="John Doe"
      />

      <LabelButton
        label="Email"
        htmlFor="email"
        id="email"
        type="email"
        placeholder="me@example.com"
      />

      <LabelButton
        label="Password"
        htmlFor="password"
        id="password"
        type="password"
      />

      <LabelButton
        label="Confirm Password"
        htmlFor="confirmPassword"
        id="confirmPassword"
        type="password"
      />
    </Form>
  );
}

export default SignUpForm;
