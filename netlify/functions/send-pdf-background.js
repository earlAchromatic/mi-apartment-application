const { jsPDF } = require('jspdf');
const nodemailer = require('nodemailer');

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
  const { bodyData } = JSON.parse(event.body);
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
