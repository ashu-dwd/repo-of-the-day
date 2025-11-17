import nodemailer from "nodemailer";

/**
 * Sends an email using nodemailer.
 * @param {Object} options
 * @param {string} options.to - Recipient email address.
 * @param {string} options.subject - Email subject.
 * @param {string} options.text - Email body (plain text).
 * @param {Object} config - Email configuration (host, port, user, pass, from).
 */
export async function sendMail({ to, subject, text }, config) {
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure, // true for 465, false for other ports
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.sendMail({
    from: config.from,
    to,
    subject,
    text,
  });
}
