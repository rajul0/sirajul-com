"use server";

import { schemaContact, SchemaContact } from "@/schemas";
import { COMMON_MESSAGE } from "@/data";
import { ServiceResponse } from "@/types";

export async function sendMessage(
  payload: SchemaContact
): Promise<ServiceResponse> {
  const safePayload = schemaContact.safeParse(payload);

  if (!safePayload.success) return { error: "Invalid payload!" };

  try {
    const { name, email, message } = safePayload.data;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", process.env.CONTACT_FORM_API_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      cache: "no-store",
    });
    const result = await response.json();

    if (!result.success) return { error: COMMON_MESSAGE.errorService };

    return {
      success: "Your message means a lot. I’ll respond as quickly as I can! 🚀",
    };
  } catch {
    return { error: COMMON_MESSAGE.error };
  }
}
