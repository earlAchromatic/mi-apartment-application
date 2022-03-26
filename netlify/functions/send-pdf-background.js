const { jsPDF } = require('jspdf');
const nodemailer = require('nodemailer');
import formidable from 'formidable';
const form = formidable();

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
  console.log('------*---------\n');
  console.log(event);
  console.log('----------------\n');
  console.log(event.body);
  console.log('----------------\n');
  console.log(event.body.bodyData);
  console.log('----------------\n');
  //const { bodyData } = JSON.parse(event.body);
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
    }
    console.log('fields:', fields);
    console.log('files:', files);
  });
  console.log(`Sending PDF report to ${destination}`);

  const report = Buffer.from(
    new jsPDF().text(bodyData, 10, 10).output('arraybuffer')
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
