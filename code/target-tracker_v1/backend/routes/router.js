const express = require('express')
const router = express.Router()

const fs = require('fs');
const path = require('path');

const usersFile = path.resolve(__dirname, '../database/user.json');
const users = require(usersFile);

router.post('/login', (req, res) => {
    console.log(req.body);
    const correctLogin = users.find(user => user.email === req.body.email && user.password === req.body.password);
    if (correctLogin){
        res.send("success");
        return;
    }
    else{
        res.send("fail");
        return;
    }
})

router.post('/reset', (req, res) => {
    console.log(req.body);
    const userExists = users.find(user => user.name === req.body.name && user.email === req.body.email);
    if (userExists){
        userExists.password = req.body.newPassword
        // console.log(users);
        try{
            fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
            res.send("success");
            return;
        } catch (error){
            console.log(error);
        }
        // console.log(userExists);
    }
    else{
        res.send("fail");
        return;
    }
})

router.post('/signup', (req, res) => {
    console.log(req.body);
    for (let i = 0; i < users.length; i++){
        if (users[i].email === req.body.email){
            res.send("fail");
            return;
        }
    }
    const id = (users.length + 1).toString();
    const mergedJSON = Object.assign({},{"id":id},req.body);
    users.push(mergedJSON);
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
        res.send("success");
        return;
    } catch (error) {
            console.log(error);
            res.send("fail");
            throw error;
        }
})



module.exports = router