"use client";

import { useForm } from "react-hook-form";
import Form from "@/components/ui/Form";
import { signInPath } from "@/paths";
import CardCompact from "@/components/CardCompact";
import AuthCardFooter from "@/components/layout/public/AuthCardFooter";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/zodSchemas/auth";
import { SignUpFormValuesTypes } from "@/lib/type/types";
import { signUpAction } from "@/app/(auth)/actions/sign-up";
import LabelInput from "@/components/LabelInput";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValuesTypes>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpFormValuesTypes) => {
    const result = await signUpAction(data);

    console.log(result);
  };

  return (
    <CardCompact
      title="Create a new account!"
      description="Create your free account to save your work progress, sync across devices, and pick up right where you left off."
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelInput<SignUpFormValuesTypes>
          label="Name"
          name="name"
          placeholder="John Doe"
          register={register}
          error={errors.name?.message}
        />

        <LabelInput<SignUpFormValuesTypes>
          label="Email"
          name="email"
          placeholder="me@example.com"
          register={register}
          error={errors.email?.message}
        />

        <LabelInput<SignUpFormValuesTypes>
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
        />

        <LabelInput<SignUpFormValuesTypes>
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <AuthCardFooter
          submitText="Create Account"
          toggleText="Already have an account?"
          linkText="Sign In"
          href={signInPath()}
        />
      </Form>
    </CardCompact>
  );
}

export default SignUpForm;
