"use server";

import { getMailer } from "@actions"

export interface SendMessageEmailParams {
  to: string;
  subject: string;
  html: string;
}

export const sendMessageEmail = async ({ to, subject, html }: SendMessageEmailParams) => {
  const mailOptions = {
    to,
    subject,
    html,
  };

  try {
    const mailer = await getMailer();

    mailer.sendMail(mailOptions, function (error: Error | null, response: { response: unknown }) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: " + response.response);
      }
    });
  } catch (err) {
    console.error(err);
  }
};
