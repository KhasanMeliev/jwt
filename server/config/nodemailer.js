import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ quiet: true, path: "../../.env" }); 

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "a12061001@smtp-brevo.com",
    pass: "bskA0kYvF4XWgYs",
  },
});

export default transporter;
