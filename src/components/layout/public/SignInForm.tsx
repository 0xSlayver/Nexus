"use client";

import Form from "@/components/ui/Form";
import { signUpPath } from "@/paths";
import Link from "next/link";
import { useForm } from "react-hook-form";
import CardCompact from "@/components/CardCompact";
import AuthCardFooter from "@/components/layout/public/AuthCardFooter";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/zodSchemas/auth";
import { SignInFormValuesTypes } from "@/lib/type/types";
import { signInAction } from "@/app/(auth)/actions/sign-in";
import LabelInput from "@/components/LabelInput";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<SignInFormValuesTypes>({ resolver: zodResolver(signInSchema) });

  const onSubmit = async (data: SignInFormValuesTypes) => {
    await signInAction(data);
  };

  return (
    <CardCompact
      title="Login to your account"
      description="Welcome Back, Sign in to continute to your account."
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelInput<SignInFormValuesTypes>
          label="Email"
          name="email"
          placeholder="me@example.com"
          register={register}
          error={errors.email?.message}
        />

        <div className="flex flex-col gap-2">
          <LabelInput<SignInFormValuesTypes>
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          <Link
            href="#"
            className="inline-block text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <AuthCardFooter
          submitText="Login"
          toggleText="Don't have an account?"
          linkText="Sign Up"
          href={signUpPath()}
          isLoading={isLoading}
        />
      </Form>
    </CardCompact>
  );
}

export default SignInForm;
