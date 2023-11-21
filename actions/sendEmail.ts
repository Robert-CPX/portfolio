'use server'

import { Resend } from 'resend';
import { getErrorMessage } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: any) => {
  let data
  try {
    const sender = formData.get("email");
    const message = formData.get("message");

    data = await resend.emails.send({
      from: "From CPX Portfolio <onboarding@resend.dev>",
      to: 'sub@robbdev.xyz',
      subject: "Message from CPX Portfolio",
      html: `<p>Message from ${sender}</p><br/><p>${message}</p>`,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  return { data };
}