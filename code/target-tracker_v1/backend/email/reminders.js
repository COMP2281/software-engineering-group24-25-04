// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

const fs = require('fs');
const path = require('path');

const usersFile = path.resolve(__dirname, '../database/user.json');
const userData = require(usersFile);

const targetsFile = path.resolve(__dirname, '../database/targets.json');
const targetData = require(targetsFile);

const userTargetFile = path.resolve(__dirname, '../database/usertargets.json');
const userTargetData = require(userTargetFile);

// console.log(targetData);

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

function sendEmail(send_email, target, due_date, days) {
    // Email options
    const mailOptions = {
        from: 'donotreply-cerptargets@trial-3zxk54v92kxgjy6v.mlsender.net', // Sender address
        to: send_email,    // Recipient address
        subject: `CERP Target Reminder: ${target} `, // Email subject
        text: `You have ${target} due: ${due_date} which is in ${days} days`, // Email body (plain text)
        html: `<p>You have ${target} due: ${due_date} which is in ${days} days</p>` // Email body (HTML)
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

var totalTargets = Object.keys(targetData).length;
var totalUsers = Object.keys(userTargetData).length;

function calculateDaysFromNow(dateString) {
    // Parse the date string in 'dd-mm-yyyy' format
    const [day, month, year] = dateString.split('-').map(Number);
    const inputDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = inputDate - currentDate;

    // Convert the difference from milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

let overdueTargets = [];

for (let i = 0; i < totalTargets; i++) {
    const targetID = targetData[i]['target-id'];
    const targetTitle = targetData[i]['title'];
    const dateString = targetData[i]['otherFields'][3]['value'];
    const days = calculateDaysFromNow(dateString);
    // console.log(`The date ${dateString} is ${calculateDaysFromNow(dateString)} days from today.`);
    if (days < 30) {
        overdueTargets.push({"id": targetID, "title": targetTitle, "due": dateString, "days": days});
    }
}
// console.log(overdueTargets);
const totalOverdueTargets = overdueTargets.length;

let users = [];

for (let i = 1; i < totalUsers + 1; i++){
    let user_targets = userTargetData[i];
    for (let j = 0; j < totalOverdueTargets; j++) {
        const id = overdueTargets[j]['id'];
        if (user_targets.includes(id)) {
            users.push([i,id]);
        }
    }
}

// console.log(users);
// console.log(overdueTargets);

for (let x = 0; x < users.length; x++) {
    let userid = users[x][0];
    let userEmail = userData[userid - 1]['email'];
    let targetid = users[x][1];
    const target = overdueTargets.find(target => target.id === targetid);
    console.log(`Sending email to ${userEmail} about target: ${target.title} due ${target.due} which is in ${target.days} days`);
    // sendEmail(userEmail, target.title, target.due, target.days);
    
    // if (userEmail === "<real email>") {
    //     sendEmail(userEmail, target.title, target.due, target.days);
    // }
}