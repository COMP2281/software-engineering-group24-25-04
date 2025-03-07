const express = require('express')
const router = express.Router()

const fs = require('fs');
const path = require('path');

const usersFile = path.resolve(__dirname, '../database/user.json');
const users = require(usersFile);

const managerFile = path.resolve(__dirname, '../database/manager.json');
const managers = require(managerFile);

function validateLogin(email, password) {
    const check = users.find(user => user.email === email && user.password === password);
    if (check) {
        return true;
    } else {
        return false;
    }
};

function userExists(name, email) {
    const check = users.find(user => user.name === name && user.email === email);
    if (check) {
        return check;
    } else {
        return false;
    }
}

function checkEmailUnique(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return false;
        }
    }
    return true;
}

function checkIfManager(email) {
    if (managers.includes(email) === true) {
        return true;
    }
}

router.post('/userdata', (req, res) => {
    const check = users.find(user => user.email === req.body.email);
    const data = {"name":check.name,"role":check.role};
    res.send(data);
    return true;
})

router.post('/login', (req, res) => {
    console.log(req.body);
    if (validateLogin(req.body.email, req.body.password) == true) {
        res.send("success");
        return;
    } else {
        res.send("fail");
        return;
    }
})

router.post('/reset', (req, res) => {
    const user = userExists(req.body.name, req.body.email);
    if (user === false) {
        res.send("fail");
        return;
    } else {
        user.password = req.body.newPassword
        try{
            fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
            res.send("success");
            return;
        } catch (error){
            console.log(error);
        }
    }
})

router.post('/signup', (req, res) => {
    // console.log(req.body);
    // for (let i = 0; i < users.length; i++){
    //     if (users[i].email === req.body.email){
    //         res.send("fail");
    //         return;
    //     }
    // }

    const emailUnique = checkEmailUnique(req.body.email);
    if (emailUnique === false) {
        res.send("fail");
    } else {
        const id = (users.length + 1).toString();
        let role = "user";
        if (checkIfManager(req.body.email) === true) {
            role = "manager"
        }
        const mergedJSON = Object.assign({},{"id":id},req.body,{"role":role});
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
    }

    // const id = (users.length + 1).toString();
    // let role = "user";
    // if (managers.includes(req.body.email) === true){
    //     role = "manager";
    // }
    // const mergedJSON = Object.assign({},{"id":id},req.body,{"role":role});
    // users.push(mergedJSON);
    // try {
    //     fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
    //     res.send("success");
    //     return;
    // } catch (error) {
    //     console.log(error);
    //     res.send("fail");
    //     throw error;
    // }
})



module.exports = router