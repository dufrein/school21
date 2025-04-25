'use server';

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
      subject: "Подтвердите регистрацию",
      html:
        "Вы зарегистрировались на сайте языковой школы School, для окончания регистрации пройдите по ссылке ниже:<br><a href=" +
        finishSignupLink +
        ">Завершить регистрацию</a>",
    });
  } catch (err) {
    console.error(err);
  }
};
