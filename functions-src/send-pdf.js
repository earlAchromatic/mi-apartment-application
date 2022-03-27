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
  const fields = await parseMultipartForm(event);

  const info = await transporter.sendMail({
    from: 'info@ionia.apartments',
    to: ['info@ionia.apartments', 'scout.tosi@gmail.com'],
    subject: `Application for ${fields.firstname} ${fields.lastname} | ${fields.selectedUnit} | ${fields.datestamp}`,
    text: 'See attached report PDF',
    attachments: [
      {
        filename: `${fields.selectedUnit}-application-${
          fields.lastname
        }-${new Date().toDateString()}.pdf`,
        content: Buffer.from(fields.pdfRender.content),
        contentType: 'application/pdf',
      },
    ],
  });

  console.log(`PDF report sent: ${info.messageId}`);
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: `PDF report sent: ${info.messageId}`,
  };
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
