"use server";

import { StudentType } from "@types";
import { sendMessageEmail } from "src/actions/sendMessageEmail/sendMessageEmail";

export const sendVerifyLink = async (student?: StudentType) => {
  if (!student) {
    return;
  }

  const finishSignupLink = `${process.env.NEXT_PUBLIC_HOST}/verify?id=${student.documentId}&email=${student.email}`;

  try {
    sendMessageEmail({
      to: student.email,
      subject: "Подтвердите смену пароля",
      html:
        "Вы запросили смену пароля, для подтверждения действия пройдите по ссылке ниже:<br><a href=" +
        finishSignupLink +
        ">Подтвердить смену пароля</a>",
    });
  } catch (err) {
    console.error(err);
  }
};
