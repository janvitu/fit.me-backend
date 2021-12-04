import nodemailer from "nodemailer";

function initMailer() {
  const mailer = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.G_USER,
      pass: process.env.G_PASS,
    },
  });

  return mailer;
}

export default initMailer;
