import { contact } from "@/data/site";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormSubmitResult {
  ok: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<FormSubmitResult> {
  const response = await fetch(contact.formSubmit.ajaxEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.message,
      _subject: `${contact.formSubmit.subject} — ${data.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  let payload: { success?: string; message?: string } = {};
  try {
    payload = await response.json();
  } catch {
    return {
      ok: false,
      message: "Unexpected response from FormSubmit. Please try again or email directly.",
    };
  }

  const success = String(payload.success).toLowerCase() === "true";

  if (!response.ok || !success) {
    return {
      ok: false,
      message:
        payload.message ||
        "Could not send your message. Please email rupanjanbera5@gmail.com directly.",
    };
  }

  return {
    ok: true,
    message: "Message sent successfully.",
  };
}