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

  let pdf = new jsPDF();
  let placement = 10;
  for (const [key, field] of Object.entries(fields)) {
    pdf.text(key, 10, placement);
    placement += 10;
    pdf.text(field, 10, placement);
    placement += 10;
  }

  const report = Buffer.from(pdf.output('arraybuffer'));
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

    // busboy.on('file', (fieldname, filestream, filename, _, mimeType) => {
    //   filestream.on('data', (data) => {
    //     fields[fieldname] = {
    //       content: data,
    //       filename,
    //       type: mimeType,
    //     };
    //   });
    // });

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
