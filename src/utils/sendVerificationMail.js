export default function sendVerifyEmail(mailer, email, token) {
  const data = {
    from: process.env.G_USER,
    to: email,
    subject: "Verification Mail",
    html: `Pro verifikaci klikněte <a href="${process.env.VERIFY_MAIL_URL}${token}">zde</a>`,
  };

  mailer.sendMail(data).catch((err) => {
    console.error(err);
  });
}
