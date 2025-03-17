const sendEmail = require('./sendemail');

const fs = require('fs');
const path = require('path');

const targetsFile = path.resolve(__dirname, '../database/targets.json');
const targetData = require(targetsFile);

JSON.stringify(targetData);
// console.log(targetData);

function newTarget(email, targetid){
    const targetTitle = targetData[targetid-1]['title'];
    console.log(`Sending email to ${email} about target: ${targetTitle}`);
    sendEmail(email, `You have been assigned a new target: ${targetTitle}`);
}

function removeTarget(email, targetid){
    const targetTitle = targetData[targetid-1]['title'];
    console.log(`Sending email to ${email} about target: ${targetTitle}`);
    sendEmail(email, `Your assigned target: ${targetTitle} has been removed.`);
}

module.exports = {newTarget, removeTarget};