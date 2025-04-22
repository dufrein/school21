// import { mailer } from "@utils";

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
  // try {
  //   mailer.sendMail(mailOptions, function (error, response) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Message sent: " + response.response);
  //     }
  //   });
  // } catch (err) {
  //   console.error(err);
  // }
};
