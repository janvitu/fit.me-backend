import nodemailer from "nodemailer";

export default async function sendVerifyEmail(email, token) {
  const mailer = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.G_USER,
      pass: process.env.G_PASS,
    },
  });

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
