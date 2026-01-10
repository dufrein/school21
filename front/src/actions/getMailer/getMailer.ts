"use server";

import nodemailer from "nodemailer";

export const getMailer = async () => {
  const mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  return mailer;
};
