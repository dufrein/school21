// import { sendMessageEmail } from "@api/sendMessageEmail";
import { StudentType } from "@types";

export const sendVerifyLink = (student?: StudentType) => {
  console.log("verify1 student", student);

  if (!student) {
    return;
  }

  const finishSignupLink = `${process.env.NEXT_PUBLIC_HOST}/verify?id=${student.documentId}&email=${student.email}`;
  console.log("verify!!!! finishSignupLink", finishSignupLink);
  try {
    // sendMessageEmail({
    //   to: email,
    //   subject: "Подтвердите смену пароля",
    //   html:
    //     "Вы запросили смену пароля, для подтверждения действия пройдите по ссылке ниже:<br><a href=" +
    //     finishSignupLink +
    //     ">Подтвердить смену пароля</a>",
    // });
  } catch (err) {
    console.error(err);
  }
};
