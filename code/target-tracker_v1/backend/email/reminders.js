// import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer');

const fs = require('fs');
const path = require('path');

const usersFile = path.resolve(__dirname, '../database/user.json');
const userData = require(usersFile);

const targetsFile = path.resolve(__dirname, '../database/targets.json');
const targetData = require(targetsFile);

const userTargetFile = path.resolve(__dirname, '../database/usertargets.json');
const userTargetData = require(userTargetFile);

const sendEmail = require('./sendemail');

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

for (let x = 0; x < users.length; x++) {
    let userid = users[x][0];
    let userEmail = userData[userid - 1]['email'];
    let targetid = users[x][1];
    const target = overdueTargets.find(target => target.id === targetid);
    console.log(`Sending email to ${userEmail} about target: ${target.title} due ${target.due} which is in ${target.days} days`);
    // sendEmail(userEmail, `You have target ${target.title} due: ${target.due} which is in ${target.days} days`);
    
    if (userEmail === "rachel.delaysla09@gmail.com") {
        sendEmail(userEmail, `You have target ${target.title} due: ${target.due} which is in ${target.days} days`);
    }
}