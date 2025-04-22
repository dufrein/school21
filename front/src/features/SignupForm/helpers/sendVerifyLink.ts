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
    //   subject: "Подтвердите регистрацию",
    //   html:
    //     "Вы зарегистрировались на сайте языковой школы Хавал, для окончания регистрации пройдите по ссылке ниже:<br><a href=" +
    //     finishSignupLink +
    //     ">Завершить регистрацию</a>",
    // });
  } catch (err) {
    console.error(err);
  }
};
