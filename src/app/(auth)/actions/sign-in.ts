"use server";

import type { SignInFormValuesTypes } from "@/lib/type/types";

export async function signInAction(data: SignInFormValuesTypes) {
  console.log(data);
}
