const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const usersFile = path.resolve(__dirname, '../database/user.json');
const users = require(usersFile);

const managersFile = path.resolve(__dirname, '../database/manager.json');
const managers = require(managersFile);

const targetsFilePath = path.join(__dirname, '../database/targets.json');
const userTargetsFilePath = path.join(__dirname, '../database/usertargets.json');

// Function to validate login
function validateLogin(email, password) {
    return users.find(user => user.email === email && user.password === password) || null;
}

// Check if user is a manager (by ID)
function checkIfManager(userId) {
    console.log(`Checking manager.json for ID: ${userId}`);
    console.log(`Manager Data:`, managers);
    return managers.hasOwnProperty(String(userId)); 
    //return managers.some(manager => manager.id === userId);
}

// Check if a user exists
function userExists(name, email) {
    return users.find(user => user.name === name && user.email === email) || false;
}

// Check if email is unique
function checkEmailUnique(email) {
    return !users.some(user => user.email === email);
}

// Helper function to read targets from the JSON file
const readTargets = () => {
    const data = fs.readFileSync(targetsFilePath, 'utf8');
    return JSON.parse(data);
};

// Helper function to read user targets
const readUserTargets = () => {
    const data = fs.readFileSync(userTargetsFilePath, 'utf8');
    return JSON.parse(data);
};

const readUsers = () => {
    const data = fs.readFileSync(usersFile, 'utf8');
    return JSON.parse(data);
}

// Helper function to write user targets
const writeUserTargets = (userTargets) => {
  fs.writeFileSync(userTargetsFilePath, JSON.stringify(userTargets, null, 2), 'utf8');
};

// Login route
router.post('/login', (req, res) => {
    console.log(`Received login request for email: ${req.body.email}`);

    const user = validateLogin(req.body.email, req.body.password);

    if (!user) {
        console.log("Login failed: Invalid credentials.");
        return res.json({ success: false, message: "Invalid credentials" });
    }

    console.log(`User found: ${JSON.stringify(user)}`);

    // Check if user is a manager
    const isManager = checkIfManager(user.id);
    console.log(`User ID: ${user.id} | Is Manager: ${isManager}`);

    // Send the correct response
    return res.json({
        success: true,
        role: isManager ? "manager" : "user",
        email: user.email
    });
});

// Password Reset Route
router.post('/reset', (req, res) => {
    const user = userExists(req.body.name, req.body.email);
    if (!user) {
        return res.send("fail");
    }

    user.password = req.body.newPassword;
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
        return res.send("success");
    } catch (error) {
        console.error("Error updating password:", error);
        return res.send("fail");
    }
});

// Signup Route
router.post('/signup', (req, res) => {
    if (!checkEmailUnique(req.body.email)) {
        return res.send("fail");
    }

    const id = (users.length + 1).toString();
    const isManager = checkIfManager(id);
    const role = isManager ? "manager" : "user";

    const newUser = { id, ...req.body, role };
    users.push(newUser);

    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
        console.log("New user registered:", newUser);
        return res.send("success");
    } catch (error) {
        console.error("Error saving user:", error);
        return res.send("fail");
    }
});

// GET request to retrieve all targets
router.get('/targets', (req, res) => {
    const targets = readTargets();
    res.json(targets);
});

// GET request to retrieve target information based on target-id
router.get('/target/:id', (req, res) => {
    const targets = readTargets();
    const target = targets.find(t => t['target-id'] === parseInt(req.params.id));

    if (target) {
        res.json(target);
    } else {
        res.status(404).json({ message: 'Target not found' });
    }
});


// GET request to retrieve user targets
router.get('/usertargets', (req, res) => {
    try {
        const userTargets = readUserTargets();
        res.json(userTargets);
    } catch (error) {
        console.error("Error reading user targets:", error);
        res.status(500).json({ message: "Failed to load user targets" });
    }
});

router.get('/user', (req, res) => {
    try {
        res.json(readUsers());
    } catch (error) {
        console.error("Error reading users:", error);
        res.status(500).json({ message: "Failed to load users" });
    }
  });

router.get('/user/:email', (req, res) => {
    const users = readUsers();

    const user = users.find(user => user.email === req.params.email);
    if (user) {
        res.json({ id: user.id });
    } else {
        res.status(404).json({ error: "User not found" });
    }
  });

// POST request to add a new target
router.post('/target', (req, res) => {
    const targets = readTargets();
    const newTarget = req.body;

    if (!newTarget['target-id']) {
        return res.status(400).json({ message: 'target-id is required' });
    }

    targets.push(newTarget);
    fs.writeFileSync(targetsFilePath, JSON.stringify(targets, null, 2));

    res.status(201).json(newTarget);
});

router.post('/userdata', (req, res) => {
    const check = users.find(user => user.email === req.body.email);
    const data = {"name":check.name,"role":check.role};
    res.send(data);
    return true;
})

// Route to assign target to user
router.post('/assign-target', (req, res) => {
  const { targetId, userEmail } = req.body;
  const users = readUsers();
  const user = users.find(user => user.email === userEmail);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const userTargets = readUserTargets();
  const userId = user.id;

  if (!userTargets[userId]) {
    userTargets[userId] = [];
  }

  const parsedTargetId = parseInt(targetId);

  if (!userTargets[userId].includes(parsedTargetId)) {
    userTargets[userId].push(parsedTargetId);
    writeUserTargets(userTargets);
  }

  res.status(200).json({ message: 'Target assigned successfully' });
});

module.exports = router;



/*
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

function checkIfManager(userId) {
    return managers.hasOwnProperty(userId);
}*/

/*router.post('/userdata', (req, res) => {
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

    const isManager = checkIfManager(user.id);

    res.json({
        success: true,
        role: isManager ? "manager" : "user"
    });
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



module.exports = router*/