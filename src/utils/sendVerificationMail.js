import initMailer from "./nodemailerConnection";

export default function sendVerifyEmail(email, token) {
  const mailer = initMailer();
  const data = {
    from: process.env.G_USER,
    to: email,
    subject: "Verification Mail",
    html: `Pro verifikaci klikněte <a href="${process.env.VERIFY_MAIL_URL}${token}">zde</a>`,
  };

  mailer.sendMail(data).catch((err) => {
    console.log(err);
  });
}
