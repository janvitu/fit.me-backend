import initMailer from "./nodemailerConnection";

export function sendPasswordResetEmail(email, lostPasswordHash) {
  const mailer = initMailer();
  const data = {
    from: process.env.G_USER,
    to: email,
    subject: "Password reset Mail",
    html: `Pro obnovení hesla klikněte <a href="${process.env.RESET_PASSWORD_MAIL_URL}${lostPasswordHash}">zde</a>`,
  };

  mailer.sendMail(data).catch((err) => {
    console.log(err);
  });
}
