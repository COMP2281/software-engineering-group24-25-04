const sendEmail = require('./sendemail');

function testSendEmail(){
    const testReveiveEmail = 'hpgm94@durham.ac.uk';
    const testMessage = 'This is a test email';

    console.log('Sending email to:', testReveiveEmail);
    console.log('Message:', testMessage);

    sendEmail(testReveiveEmail, testMessage);
}

testSendEmail();
