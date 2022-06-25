import { createTransport } from 'nodemailer';

// const mailOptions = {
//     from: process.env.USER,
//     to: [process.env.GMAIL, process.env.EMAIL],
//     subject: "Titulo del correo",
//     // text: "Este es el texto del email",
//     html: "<h1>Texto enviado desde nodemailer </h1>",
//     // attachments: [
//     //   {
//     //     path: "debug.log",
//     //     filename: "loggers-debug",
//     //   },
//     // ],
//   };

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

export const sendMailGmail = async (mailOptions) => {
  try {
    const response = await transporter.sendMail(mailOptions);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

