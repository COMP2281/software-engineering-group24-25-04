const nodemailer = require('nodemailer');

// Create the transporter using MailerSend's SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.mailersend.net', // MailerSend SMTP host
    port: 587, // Use port 587 for TLS
    auth: {
        user: 'MS_vDFEFM@trial-3zxk54v92kxgjy6v.mlsender.net', // Replace with your MailerSend SMTP username
        pass: 'mssp.Iyq6dG8.neqvygm9xvdl0p7w.YQjjnPP'  // Replace with your MailerSend SMTP password
    },
    debug: true,
    tls: {
        rejectUnauthorized: false // This bypasses the self-signed certificate issue
    }
});

function sendEmail(send_email, message) {
    // Email options
    const mailOptions = {
        from: 'donotreply-cerptargets@trial-3zxk54v92kxgjy6v.mlsender.net', // Sender address
        to: send_email,    // Recipient address
        subject: `CERP Target Reminder`, // Email subject
        text: `${message}`, // Email body (plain text)
        html: `<p>${message}</p>` // Email body (HTML)
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = sendEmail;