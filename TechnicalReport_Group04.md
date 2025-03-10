# Technical Report
## Section 1: Introduction
### 1.1
### 1.2 
To access the system locally, clone the GitHub repository in an interactive development environment such as Visual Studio Code (with git built-in) and install Node.js from their website. The code is split into two folders: frontend and backend. To get them to work together, you’ll need to npm install axios in the frontend folder and then npm install express cors body-parser in the backend folder. To start the website, split the terminal into two parts and navigate to the frontend in one and the backend in the other, and type npm start in both.
### 1.3
## Section 2: Technical Development
### 2.1

The basis of our system was illistrated by the project brief provided to us by our client. We were given an expected output that should be aimed for. It outlined that the system needs to be usable by a variety of users, usable on a variety of computers, and should give a good, visible tracking of progress towards goals. They also highlighted that users shouldn't be able to delete others inputted data. This is how we decided user roles should be implemented. Monthly reminders were also a suggested feature.

We had a meeting with our client so that we could understand what the company meant by 'goal tracking'. They provided us with an excel spreadsheet, containing all of their goals and the data associated with those goals. Upon inspection, the spreadsheet was convoluted. We asked our client to confirm what each column was tracking, and which columns were necessary or not.

Following our market reasearch we compared multiple online available goal tracking applications, such as Notion and Jira. We identified key features that might be useful to implement into our system, but also noted that these current systems available wouldn't be suited to our client. It was suggested in the brief that the solution could be web-based. This influenced our decision for our solution to be web-based and not app-based.

After our research we spoke to the client to confirm that what we were planning was in their scope and met their needs.

In terms of how we started our project we used a YouTube tutorial for React JS on a login page. This provided us with a template for our project to expand off of.

### 2.2

In the frontend of this project we used HTML, CSS, and JavaScript (React). In the backend we used JavaScript (Node.js with Express).

For this prototype version we have used JSON files to store the users and target data. This can be switched to databases, such as MongoDB, on implementation if desired.

We have used Git for version control and collaboration, as well as Google Docs for planning and collaboration, and {AUTHENTICATION} and {EMAIL REMINDERS???}.

#### Login/SignUp

**How It Works**

When the user opens the website, the browser loads the React frontend. They are greeted with a Login/Signup page. The user has the options of logging in with an account, or signing up for an account. 

If they don't have an account, the user clicks the 'Sign Up' button. This will implement useState from react, to set the action to "Sign Up" and will call the handleSignupClick function. This will send a post request to the backend. The frontend will then load to Sign Up page. The user then enters their name, email and password, and clicks the 'Sign Up' button. Form validation is implemented to ensure that all fields are filled, if there are missing fields then an alert is shown. This then sends a {...} to the backend. It will check the user.json file to ensure the email hasn't already been registered. If it hasn't, the users account is then added to the user.json file, and {...} is sent back. The user is then directed to the login page to login.

If the user has an account, enter the email and password into the respective boxes on the Login page, then click the 'Login' button. The handleLoginClick function is called, which will sent a post request to the backend. The backend will check to see if the inputted data matches an entry in the user.json file. If there is a match, the users role is checked in the manager.json file. If the userid is in that file then the user is a manager, and so is directed to the managers dashboard, otherwise they are directed to the staff dashboard. A {...} is sent to the frontend, and the correct dashboard is loaded. 

On the Login page there is a 'Forgotton Password' link that allows the user to reset their password. If this link is clicked the action is set to "Forgot Password". The 'Forgotten Password' page is loaded, allowing the user to enter their name, email and their new password twice. When the user clicks the 'Submit' button the handleResetClick function is called. This will send a post request to the backend. Provided that the name and email match in the user.json file, the backend will try to overwrite it with the new password. If successful then the action is set to "Login", and the user is directed back to the login page (DOES THIS HAVE AUTHENTICATION?????).

**Technical Implementation - Login**

<u>Frontend</u>

The user enters their email and password into the input boxes.

When the user clicks the 'Login' button, an onClick is triggered, which calls the handleLoginClick.

The frontend sends an axios post request to send the postdata (email and password) to the backend. On success, the user is directed to the correct dashboard.

<u>Backend</u>

Endpoint: `POST /login`

Request: 
    {
        "email": "example@example.com",
        "password": "Password123!"
    }

Response on Success:
    {
        User found: {"id":"1","name":"example","email":"example@example.com","password":"Password123!","role":"user"}
        Manager Data: { '3': true, '5': true, '6': true }
        User ID: 1 | Is Manager: false
    }

Response on Failure:
    {
        Login failed: Invalid credentials.
    }
    
**Technical Implementation - Sign Up**

<u>Frontend</u>

The user enters their name, email and password into the input boxes.

When the user clicks the 'Sign Up' button, an onClick is triggered, which calls the handleSignupClick.

The frontend sends an axios post request to send the postdata (name, email and password) to the backend. On success, the user is added to the user.json file and is directed to the login page for the user to login.

<u>Backend</u>

Endpoint: `POST /signup`

Request: 
    {
        "name": "newUser"
        "email": "newUser@example.com",
        "password": "NewUser1!"
    }

Response on Success:
    {
        New user registered: {
            id: '9',
            name: 'newUser',
            email: 'newUser@example.com',
            password: 'NewUser1!',
            role: 'user'
        }
    }

Response on Failure:
    {
        Error saving user: {error}
    }

**Technical Implementation - Forgotten Password**

<u>Frontend</u>

The user enters their name, email and new password twice into the input boxes.

When the user clicks the 'Submit' button, an onClick is triggered, which calls the handleResetClick.

The frontend sends an axios post request to send the postdata (name, email and new password) to the backend. On success, the user's password is updated in the user.json file and is directed to the login page for the user to login.

<u>Backend</u>

Endpoint: `POST /reset`

Request: 
    {
        "name": "newUser"
        "email": "newUser@example.com",
        "password": "NewUser1!"
    }

Response on Success:
    {
        New password updated
    }

Response on Failure:
    {
       Error updating password: {error}
    }

**Challenges and Solutions**



**Code Snippets**
 
{Router.js code????}

#### Profile Page

**How It Works**

When the user is on their dashboard, in the top right corner there is a porfile icon. When the user clicks on this icon, the handleIconClick function is called. This then calls the goToProfile function and passes in the users email. The fetchUserInfo function is triggered, sending a post request to the backend. The backend then checks the user.json file to retrieve the the users information, based on the email given. The name and role (user or manager) is retrieved and all 3 are sent back to the frontend. This information is then displayed on the frontend.

There is a 'Logout' button that when clicked calls the handleLoginClick fucntion, logging the user out and returning them to the Login page. There is also a 'Return to Dashboard' page, that calls the handleDashboardClick function, taking the user back to their dashboard.

**Technical Implementation**

<u>Frontend</u>

When the user clicks the profile icon on the dashboard page, an onClick is triggered, which calls the handleIconClick. This calls the goToProfile function, passing in the users email.

The frontend sends an axios post request to send the postdata (email) to the backend. On success, the user's information (name, email, role (user or manager)) is displayed on the frontend profile page.

<u>Backend</u>

Endpoint: `POST /userData`

Request: 
    {
        "email": "example@example.com"
    }

Response on Success:
    {
        "name": "Example"
        "email": "example@example.com"
        "role": "user"
    }

Response on Failure:
    {
       Error retrieving user data: {error}
    }

**Challenges and Solutions**

During development, when we first had this loading we noticed an error that would mean that when the user first logged in, and went straight to the profile page, it worked. But if the user had logged in, clicked on a target, then went back to the dashboard and clicked the profile page, the data wouldn't load. This was fixed as soon as it was noticed, and now loads the correct user information whenever the page is visited.

**Code Snippets**


#### Staff Dashboard

**How It Works**

When the Staff dashboard is loaded the staff members targets will be displayed under the 'My Targets' section

**Technical Implementation**

**Challenges and Solutions**

**Code Snippets**


#### Manager Dashboard

**How It Works**

**Technical Implementation**

**Challenges and Solutions**

**Code Snippets**


#### Target Page

**How It Works**

**Technical Implementation**

**Challenges and Solutions**

**Code Snippets**

### 2.3

From our discussions with our client, we gathered that the solution should be simple and intuitive to use, due to the variying technical abilities of the users. We set out a clear design that would allow users to easily navigate our site. 

The login page is straightforward, where the user enters their email and password, and clicks the 'Log In' button. If the user doesn't have an account then the user needs to click the 'Sign Up' button. This then allows them to enter their name, email and password. If the user has forgotten their password then there is a link that allows them to reset it. All of the text boxes have placeholders telling the user what they need to input.

When the user logs in they are directed to their dashboard. Their targets are displayed under 'My Targets' and all targets are displayed under 'All Targets'. This separation is for ease of understanding. Their are filters that the user can apply so that they can view specific targets. When the user clicks on a target, they are directed to said target page, where they can view all the target information. There is an 'Edit' button at the bottom of the page which the user can click if it is one of their targets. There is then a 'Save' button which the user can use if they have editied their target.

The target page and profile page both contain a 'Return To Dashboard' button. This is for ease of understanding, as opposed to having a 'Back' button.

Our colour schemes were selected based on the clients colour scheme, green and navy. The specific colour values were obtained from their logo. This is to ensure consistency between their systems.

## Section 3: Use Instructions
### 3.1
### 3.2
### 3.3
### 3.4
## Section 4: Maintenance and Implications
### 4.1
### 4.2
### 4.3
