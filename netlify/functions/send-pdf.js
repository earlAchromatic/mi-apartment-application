import { jsPDF } from 'jspdf';
import nodemailer from 'nodemailer';
import Busboy from 'busboy';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use TLS
  auth: {
    user: 'jacob@hyperionweb.dev',
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async function (event) {
  console.log('starting function...');
  const fields = await parseMultipartForm(event);
  console.log(fields);

  console.log(`Sending PDF report`);

  const report = Buffer.from(
    new jsPDF().text(fields, 10, 10).output('arraybuffer')
  );
  const info = await transporter.sendMail({
    from: process.env.MAILGUN_SENDER,
    to: 'info@ionia.apartments',
    subject: 'Your report is ready!',
    text: 'See attached report PDF',
    attachments: [
      {
        filename: `report-${new Date().toDateString()}.pdf`,
        content: report,
        contentType: 'application/pdf',
      },
    ],
  });

  console.log(`PDF report sent: ${info.messageId}`);
};

function parseMultipartForm(event) {
  return new Promise((resolve) => {
    const fields = {};

    const busboy = Busboy({
      headers: event.headers,
    });

    busboy.on('file', (fieldname, filestream, filename, _, mimeType) => {
      filestream.on('data', (data) => {
        fields[fieldname] = {
          content: data,
          filename,
          type: mimeType,
        };
      });
    });

    busboy.on('field', (fieldName, value) => {
      fields[fieldName] = value;
    });

    busboy.on('finish', () => {
      resolve(fields);
    });

    // This was the bastard!
    busboy.write(Buffer.from(event.body, 'base64'));
  });
}
