"use server";

import type { SignUpFormValuesTypes } from "@/lib/type/types";

export async function signUpAction(data: SignUpFormValuesTypes) {
  console.log(data);
}
