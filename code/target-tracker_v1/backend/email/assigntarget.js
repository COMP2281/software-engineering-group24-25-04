const sendEmail = require('./sendemail');

const fs = require('fs');
const path = require('path');

const targetsFile = path.resolve(__dirname, '../database/targets.json');
const targetData = require(targetsFile);

JSON.stringify(targetData);

function newTargetEmail(email, targetid){
    const targetTitle = targetData[targetid-1]['title'];
    console.log(`Sending email to ${email} about target: ${targetTitle}`);
    sendEmail(email, `You have been assigned a new target: ${targetTitle}`);
}

function removeTargetEmail(email, targetid){
    try {
        const targetTitle = targetData[targetid-1]['title'];
        console.log(targetData[targetid - 1]);
        console.log(`Sending email to ${email} about target: ${targetTitle}`);
        sendEmail(email, `Your assigned target: ${targetTitle} has been removed.`);
    } catch {
        console.log("No emails to send about removing this target.");
    }
}

module.exports = {newTargetEmail, removeTargetEmail};