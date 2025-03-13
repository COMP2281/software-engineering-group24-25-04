# Technical Report
## Section 1: Introduction
### 1.1: Project Summary
Durham County Council (DCC) aims to achieve net-zero carbon emissions by 2030, requiring an effective method to track the progress of its climate initiatives. Their current Excel-based tracking system is inefficient due to difficulties in data navigation, frequent manual reminders, limited security, and poor visual representation. To resolve these issues, we need to develop a scalable, user-friendly platform to replace Excel and enhance productivity.
The main goals of this project include:
- Improve usability and design a more intuitive user interface so that users at different levels (such as project managers, partners and related personnel) can easily enter, update and query progress information.
- Integrate automatic reminders to ensure that users update task progress on time and reduce manual intervention by managers.
- Introduce role-based permission control to ensure that different users can only access and manage target data related to them to prevent misoperation or unauthorised changes.
- Support real-time progress bar, task filtering and multiple data visualization methods to help managers understand the progress of targets more intuitively.
- Ensure that the system can run smoothly on different devices (PC, tablet, mobile phone) to meet modern office needs.

In conclusion, we hope to reduce manual management costs while improving data accuracy and transparency, so that DCC and its stakeholders can manage carbon emission targets more efficiently and promote sustainable development.
### 1.2 
To access the system locally, clone the GitHub repository in an interactive development environment such as Visual Studio Code (with git built-in) and install Node.js from their website. The code is split into two folders: frontend and backend. To get them to work together, you’ll need to npm install axios in the frontend folder and then npm install express cors body-parser in the backend folder. To start the website, split the terminal into two parts and navigate to the frontend in one and the backend in the other, and type npm start in both.
### 1.3: Status of Behavioural Requirement

| BR Code  | Requirement Description                                   | Status  | Justification |
|----------|-----------------------------------------------------------|---------|--------------|
| BR 1.1  | Logging in without an account                            | Met     | An error message is shown when a user tries to log in without creating an account. |
| BR 1.2  | Creating an account                                      | Met     | Users are able to click on the Sign Up icon on the Login page and will be redirected to a page where they can create an account. Users must abide by strict password requirements for security purposes. |
| BR 1.3  | Logging in with correct credentials                      | Met     | Users will be redirected to the staff dashboard and managers are redirected to the admin dashboard upon logging in with their registered credentials. |
| BR 1.4  | Logging in with incorrect credentials and attempt is less than three | Met | An error message pops up each time incorrect credentials are used to login. Users and managers are not redirected to their respective dashboards. |
| BR 1.5  | Logging in with incorrect credentials on third attempt    | Not Met | An error message pops up each time incorrect credentials are submitted. A limit has not been implemented yet. The user is not prompted via an email to reset their password yet. We have not configured how to connect the database to an actual email address. |
| BR 2.1  | Permission to view other teams’ tasks                    | Not Met | Permission levels have not been implemented yet. We have a basic dashboard that allows each user to have access to the progress of every target. Denial for viewing access via permission levels is a more complex job to achieve and it is currently a work in progress. |
| BR 2.2  | Manager granting permissions to users                     | Not Met | Permission levels have not been implemented yet. Currently, every user is able to see all the targets but they should only be able to see the targets assigned to them. |
| BR 2.3  | Manager transferring tasks from one user to another       | Met     | On the manager’s dashboard, the assign target feature allows the manager to assign targets to a user and the remove target feature allows the manager to remove a target from an old user. This allows transferring tasks from one user to another. |
| BR 3.1  | Adaptive user layout on different devices                 | Met     | The dashboard has been tested on multiple devices. The screen size and user layout has been proven to be adaptive. |
| BR 3.2  | Customisable visual settings                             | Not Met | As per the revised requirement, font size and color customization is no longer needed, and the dashboard will stick to a single color scheme. This allows design consistency and reduces complexity. |
| BR 4.1  | Filter tasks based on Day/Week/Month/Year                | Not Met | Currently, we have only implemented filtering based on target title. |
| BR 4.2  | Filter tasks based on custom date range                   | Not Met | Currently, we have only implemented filtering based on target title. |
| BR 4.3  | Message when no tasks are due within selected period      | Not Met | No message is shown currently because the filter based on the selected period has not been implemented yet. |
| BR 4.4  | Clear filter                                              | Met     | When a specific target title is not selected on the target filter bar, the dashboard shows all the targets available. |
| BR 5.1  | Add a goal                                                | Met     | Both users and managers are able to add a new target. |
| BR 5.2  | Remove a goal                                             | Met     | The remove goal icon on users dashboard allows users to delete a goal once they have completed it. |
| BR 5.3  | Edit a goal                                               | Met     | Both users and managers are able to click on the edit goal icon and make changes to their existing targets. The edited targets are then updated to replace the old ones. |
| BR 5.4  | Transfer a goal                                           | Met     | The assign target and remove target functions available on the manager’s dashboard allow seamless transfer of a goal from one user to another. |
| BR 6.1  | Staff viewing their own progress                         | Met     | Users are able to see their progress based on the level of the progress bar of a target. Each time a user updates the value of the target set, the progress bar would reflect their progress of each target on the dashboard. |
| BR 6.2  | Manager viewing staff’s progress                          | Met     | Progress bars on users’ progress for every target have been added and these progress bars can be seen from the manager’s dashboard. |
| BR 7.1  | Automated reminders on project progress                  | Not Met |  |
| BR 7.2  | Automated reminders for overdue tasks                     | Not Met |  |
| BR 7.3  | Change in automated reminders when project is transferred | Not Met |  |
| BR 8.1  | Viewing target details                                   | Met     | When a target is clicked on the dashboard, users and managers are redirected to a page that has a detailed description of the specific target. |
| BR 8.2  | Clicking on an icon to carry out a function               | Met     | Every icon on both the manager and user dashboard works well and carries out their respective functions. |


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

*Frontend*

The user enters their email and password into the input boxes.

When the user clicks the 'Login' button, an onClick is triggered, which calls the handleLoginClick.

The frontend sends an axios post request to send the postdata (email and password) to the backend. On success, the user is directed to the correct dashboard.

*Backend*

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

*Frontend*

The user enters their name, email and password into the input boxes.

When the user clicks the 'Sign Up' button, an onClick is triggered, which calls the handleSignupClick.

The frontend sends an axios post request to send the postdata (name, email and password) to the backend. On success, the user is added to the user.json file and is directed to the login page for the user to login.

*Backend*

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

*Frontend*

The user enters their name, email and new password twice into the input boxes.

When the user clicks the 'Submit' button, an onClick is triggered, which calls the handleResetClick.

The frontend sends an axios post request to send the postdata (name, email and new password) to the backend. On success, the user's password is updated in the user.json file and is directed to the login page for the user to login.

*Backend*

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

There is a 'Logout' button that when clicked calls the handleLoginClick fucntion, logging the user out and returning them to the Login page. There is also a 'Return to Dashboard' button, that calls the handleDashboardClick function, taking the user back to their dashboard.

**Technical Implementation**

*Frontend*

When the user clicks the profile icon on the dashboard page, an onClick is triggered, which calls the handleIconClick. This calls the goToProfile function, passing in the users email.

The frontend sends an axios post request to send the postdata (email) to the backend. On success, the user's information (name, email, role (user or manager)) is displayed on the frontend profile page.

*Backend*

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

When the user is directed to the staff dashboard, the fetchTargets function is called. This sends multiple axios get requests to the backend for the targets, the userID, and the users targets, from the usertargets.json file. The backend then retrieves all the targets from targets.json, retrieves the userID using the userEmail from user.json, and then uses that to find out which user has which targets, based on what is stored in usertargets.json. This information is then sent back to the frontend. On the frontend All the targets in the targets.json file are displayed under the heading 'All Targets', the targets that relate to a specific user, based on the data retrieved from usertargets.json, is displayed under the heading 'My Targets'. 

There are also filters and a search box present on the dashboard. The filter is a dropdown list of all the targets, and ther search allows the user to type into the box. What the user types/selects is converted to lower case, and compares that to the values stored in the targets.fields.

Each target also displays a progress bar. {...}

When the Staff dashboard is loaded the staff members targets will be displayed under the 'My Targets' section

**Technical Implementation**

*Frontend*

When a user is directed to the staff dashboard, the useEffect function is triggered. This fetches the targets, by sending multiple axios get requests. The first one gets the userid by sending the userEmail and the second gets the user specific targets. The user's targets are then set to myTargets. Each target card is then populated with the information and displayed on the frontend.

*Backend*

Endpoint: `GET /user/:email`

Request: 
    {
        "email": "example1@example.com"
    }

Response on Success:
    {
        {"id":"1"}
    }

Response on Failure:
    {
        error: User not found
    }


Endpoint: `POST /target`

Request: 
    {
        "target-id": "1"
    }

Response on Success:
    {
        {"target-id":1,"fields":[{"id":"target-cerp3_action_type","label":"CERP3 Action Type","value":"Building Decarbonisation"},{"id":"target-smart_action_description","label":"Smart Action Description","value":"Retrofit ASHP into current DCC buildings"},{"id":"target-related_work_programme","label":"Related Work Programme","value":null},{"id":"target-action_type","label":"Action Type","value":"Business as Usual"},{"id":"target-project_lead","label":"Project Lead","value":"TBC"},{"id":"target-progress_metric","label":"Progress Metric","value":"Number of upgrades/installs per year"},{"id":"target-targets_set","label":"Targets Set","value":"6 per year"},{"id":"target-kpi","label":"KPI","value":null},{"id":"target-carbon_reduction","label":"Carbon Reduction","value":"Council"},{"id":"target-council_estimated_annual_saving","label":"Council Estimated Annual Saving","value":"Med (>50-200t)"},{"id":"target-funding_secured","label":"Funding Secured","value":"No"},{"id":"target-sufficient_staff","label":"Sufficient Staff","value":"Uncertain"},{"id":"target-potential_obstacles_and_solutions","label":"Potential Obstacles and Solutions","value":"Funding, capacity (internal/external)"},{"id":"target-start_date","label":"Start Date","value":"Ongoing"},{"id":"target-completion_date","label":"Completion Date","value":"01-01-2030"},{"id":"target-governing_group","label":"Governing Group","value":"Carbon Capital Group"}],"costFields":[{"id":"target-countywide_estimated_annual_saving","label":"Countywide Estimated Annual Saving","value":null},{"id":"target-actual_annual_saving","label":"Actual Annual Saving","value":null},{"id":"target-cost","label":"Cost","value":null}]}
    }

Response on Failure:
    {
        message: target-id is required
    }

**Challenges and Solutions**

**Code Snippets**


#### Manager Dashboard

**How It Works**

When a manager is directed to the manager dashboard, the fetchTargets function is called. This sends 1 axios get request, to retrieve all the targets from the backend. The backend then retrieves the targets from targets.json, and returns this to the frontend. These targets are then displayed in individual target cards under the heading 'All Targets'. 

Again, there are filters on this page. However, the filters are only for 'All Targets' as there is no 'My Targets' section.


**Technical Implementation**

*Frontend*

When a manager is directed to the manager dashboard, the useEffect function is triggered. This fetches the targets, by sending 1 axios get request. This gets all the targets fromt the targets.json file. Each target card is then populated with the information and displayed on the frontend.

*Backend*

Endpoint: `POST /targets`

There is no additional request fields for this.

The response on success is the same as `POST /target` in Staff dashboard, but instead of displaying 1 target, it displays all the targets.

Response on Failure:
    {
        Error fetching targets: {error}
    }

**Challenges and Solutions**

**Code Snippets**


#### Target Page

**How It Works**

When a user is directed from the dashboard to the target page, by clicking on a target box, the frontend uses the useEffect function from React. This then sets the form data for the target that is passed through (the target that has been clicked). On the targets page, the user is loaded into view mode, where each field has its own heading and display box. The front end calls each component, TargetField, TargetDropdown, and TargetData. These are separate as they relate to different frontend components (input, dropdown, date). The id is set based on the id's stored in the targets.json file.

At the bottom of the page there is 2 buttons, 'Return to Dashboard' calls the handleDashboardClick function, taking the user back to their dashboard. 'Edit' changes the users mode to 'Edit' from 'View'. This changes the action to 'Edit', if isEditing is True, then the fields are changed from a paragraph tag to either an input tag, dropdown, or date. These can then be editted by the user. A 'Save' button then displays at the bottom of the page. When the user changes an input field, and clicks the 'Save' button, the frontend {...}. The backend {...}. Then the changes are saved into the targets.json file, and the changes are reflected in the frontend.

**Technical Implementation**

**Challenges and Solutions**

Getting the targets to load onto the frontend at the start was quite complicated. 

**Code Snippets**

***The Software Development Process Followed by the Team***

We adopted the Agile Scrum methodology for the development process. This approach was chosen due to its flexibility, iterative development cycles, and focus on continuous client feedback. The methodology allowed us to manage tasks efficiently, adjust to changing requirements, and ensure that the final product met the client's expectations.

The key aspects of the development process were:

1. **Sprint-based development:**

- We divided the project into multiple sprints, each focusing on a specific set of tasks.
- Early sprints involved requirement gathering and initial documentation, system design, and learning relevant technologies.
- Later sprints focused on further documentation, coding, testing, and refining application features.

2. **Task assignment and collaboration:**

- Tasks were distributed among ourselves based on individual workload and expertise.
- Weekly meetings helped track progress, address roadblocks, and adjust priorities.

3. **Periodic client interaction:**

- We maintained periodic meetings with our client to gather feedback and ask requirements-related questions.
- This ensured the solution aligned with the client's needs and expectations.

4. **Technology stack selection:**

- **Frontend:** To develop the frontend, React.js was chosen for its efficiency and dynamic UI capabilities.
- **Backend:** To develop the backend, Node.js with Express was chosen for its ability to handle routing and API requests effectively, and for its ease of setup and maintenance.
- **Database:** Instead of a traditional database, JSON files were used to store data, providing a lightweight, file-based approach that simplified data access and reduced setup complexity.

5. **Version control and risk management:**

- GitHub was used for code-wise collaboration, tracking changes, and preventing code loss, while Google Docs facilitated collaboration on documentation.
- Risks, such as framework updates and security concerns, were proactively mitigated.
  
6. **Final testing and deployment:**

- The last sprint involved testing all features, fixing bugs, and ensuring smooth operation and adherence to client requirements before deployment.

By following the Agile scrum methodology, we maximised adaptability and developed a solution that effectively replaced the inefficient Excel-based tracking system.


***The Role of Behaviour-Driven Development in Implementation**

Behaviour-driven development played a crucial role in the implementation phase by ensuring that development was guided by clear, user-centric requirements.

It was applied in our project through:

1. **User stories and scenarios:**

- Features were defined using user stories and Gherkin pseudocode (for expressing the user story as a feature with scenarios) written in a structured format.
- (Example can be put here)

2. **Feature prioritisation:**

- We classified features using the MoSCoW system, ensuring that critical functionalities like login, permission levels and progress tracking were developed promptly.

3. **Test-driven development integration:**

- The user stories and scenarios developed were converted into test cases to validate expected system behaviour, enabling early capturing of errors and aligning development to user expectations.

4. **Enhanced collaboration:**

- Behavioural-driven development facilitated clear communication between group members, enabling effective contributions and overall efficiency.

By leveraging behaviour-driven development, the implementation phase was structured around real-world user interactions, leading to a more intuitive and functional system.


### 2.3

From our discussions with our client, we gathered that the solution should be simple and intuitive to use, due to the variying technical abilities of the users. We set out a clear design that would allow users to easily navigate our site. 

The login page is straightforward, where the user enters their email and password, and clicks the 'Log In' button. If the user doesn't have an account then the user needs to click the 'Sign Up' button. This then allows them to enter their name, email and password. If the user has forgotten their password then there is a link that allows them to reset it. All of the text boxes have placeholders telling the user what they need to input.

When the user logs in they are directed to their dashboard. Their targets are displayed under 'My Targets' and all targets are displayed under 'All Targets'. This separation is for ease of understanding. Their are filters that the user can apply so that they can view specific targets. When the user clicks on a target, they are directed to said target page, where they can view all the target information. There is an 'Edit' button at the bottom of the page which the user can click if it is one of their targets. There is then a 'Save' button which the user can use if they have editied their target.

The target page and profile page both contain a 'Return To Dashboard' button. This is for ease of understanding, as opposed to having a 'Back' button.

Our colour schemes were selected based on the clients colour scheme, green and navy. The specific colour values were obtained from their logo. This is to ensure consistency between their systems. 

## Section 3: Use Instructions
### 3.1：Software Installation Guide: System Requirements and Installation Configuration Steps
#### 3.1.1 Hardware Requirements (Table Comparison)

| Component      | Minimum Requirement  | Recommended Configuration |
|--------------|----------------------|---------------------------|
| **CPU**      | Dual-core 2.0GHz     | Quad-core 3.0GHz+        |
| **Memory**   | 4GB                  | 8GB                      |
| **Storage**  | 10GB HDD             | 20GB SSD                 |

#### 3.1.2 Operating System Requirements

| Operating Systems | Minimum Requirement                         | Recommended Configuration                   |
|------------------|--------------------------------|--------------------------------|
| **Windows**      | Windows 10 or later           | Windows 10 Pro or later       |
| **Linux**        | Ubuntu 20.04 LTS or equivalent distribution | Latest Long Term Support (LTS) distribution (e.g., Ubuntu 22.04 LTS) |
| **macOS**        | macOS 10.15 (Catalina) or later | macOS 11 (Big Sur) or later   |

#### 3.1.3 Software Installation and Configuration Guide
The software is finally presented in the form of a website. Compared to using an app, presenting the software as a website offers several advantages, such as cross-platform compatibility, no need for users to download and install applications (which reduces storage space usage), and easier updates and maintenance. It is recommended to use a web browser for accessing the website, with Google Chrome and Firefox being the preferred options. Below are the installation steps for these browsers.

##### Microsoft Edge

**Download:**
Visit the [Chrome official website](https://www.google.com/chrome/) to download the installation package suitable for your operating system.

**Installation:**
- **Windows Users**: Run the downloaded `.exe` file and follow the prompts to complete the installation.
- **macOS Users**: Open the `.dmg` file and drag Chrome to the Applications folder.
- **Linux Users**: Use the `.deb` or `.rpm` package for installation.

**Configuration:**
- Go to **Settings → Privacy and Security** to adjust cookie, cache, and script execution permissions.
- Install **Developer Tools** for debugging. Use shortcut keys `F12` or `Ctrl + Shift + I` to open.

---

###### Firefox

**Download:**
Visit the [Firefox official website](https://www.mozilla.org/firefox/) to download the appropriate version.

**Installation:**
- **Windows/macOS Users**: Run the installation program directly.
- **Linux Users**: Install using the following command:
  ```bash
  sudo apt install firefox

**Configuration:**
- Go to Settings → General to adjust cache, JavaScript, and privacy settings.

**Environment:**

| **Runtime Environment**        | Description |
|--------------------------------|----------------------------------------------|
| **Browser Environment**        | Chrome, Firefox, and other commonly used browsers |
| **Node.js**                    | Provides a server-side JavaScript execution environment (use with npm) |
| **Database Management System** | MySQL |

#### 3.1.4 Code Acquisition and Execution
If customers need to manage the software internally on their servers, the following steps provide local execution instructions:
This software adopts a front-end and back-end separation architecture, allowing both teams to develop in parallel, reducing mutual dependencies. The frontend handles page rendering, while the back-end focuses on data logic, lowering server load. The frontend and backend can be upgraded independently without affecting each other. This project’s frontend runs on Node.js (v20.11). The back-end is also based on Node.js (v20.11). Please install Node.js first.

###### Node.js

### **Download:**

- **Windows/macOS Users:**  
  Use the official installer to install directly. Visit the [Node.js official website](https://nodejs.org) to download **version v20.11**.

- **Linux Users:**  
    **Execute:**
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
    ```

    **Verify installation:**
    ```bash
    node -v   # Ensure Node.js version is v20.11
    npm -v    # Ensure npm (package manager) is correctly installed
    ```

    **Install Front-end Dependencies:**
     ```bash
      cd frontend
      npm install
     ```

    **Install Back-end Dependencies:**
     ```bash
    cd backend
    npm install
     ```
     
###### Obtain and Run the Code via Git
**Clone the Repository:**
```bash
    git clone https://github.com/example/project.git
```

**Install Project Dependencies:**
```bash
    npm install
```

**Run the Project:**
```bash 
    npm start
```

Packaging and Running: , 
```bash
    npm install -g pm2 #To manage the Node.js process using PM2
    pm2 start app.js
```


| Component      | Description                                                       | Technology |
|--------------|-------------------------------------------------------------------|------------|
| **Front-end** | UI component libraries                                          | React      |
|              | CSS preprocessors                                               | Sass       |
| **Back-end**  | Node.js-based web application framework that simplifies server-side application development | Express    |
|              | Configuring and Managing Cross-Domain Requests for Web Applications | Cors       |
| **Infrastructure** | Caching system                                              | Redis      |
|              | Load balancer                                                   | Nginx      |
| **Toolkit**   | Building Tools                                                 | Webpack    |

### 3.2 Deployment
Deploy Node.js + Express application on a local virtual machine and configure Nginx (compatible with Windows, Mac and Linux)
#### 3.2.1Prerequisites
**Virtualization tools (for different operating systems):**
- VirtualBox or VMware Workstation/Fusion for Windows and Mac
1. UTM for Mac (M1/M2 and later)
2. VirtualBox or KVM/QEMU for Linux users
3. ISO image of Ubuntu Server (or other Linux distributions)
- Host with sufficient resources (RAM, CPU and storage space)
- Install Nginx on the VM
- Node.js and npm
#### 3.2.2 Setting up the virtual machine
**Install the virtual machine software:**
- Windows/Mac: Download and install VirtualBox or VMware.
- Mac (Apple Silicon): Use UTM as the virtual machine manager.
- Linux: Use VirtualBox or KVM (Kernel-based Virtual Machine).
**Create a new virtual machine:**
- Open the virtual machine software and create a new virtual machine.
- Allocate at least 2GB RAM, 2 cores CPU, and 20GB hard disk.
- Mount the Ubuntu Server ISO to start the installation.
**Install Ubuntu Server:**
- Follow the installation wizard to complete the system installation.
- Set up user accounts and configure SSH access (if required).
- Update the system after the installation is complete: 
    ```bash
    sudo apt update
    sudo apt upgrade -y
     ```

#### 3.2.3 Install necessary software
**Nginx:**
```bash
    sudo apt install nginx -y
```

**Node.js and npm:**
```bash
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
```
    
**Database server (MySQL or PostgreSQL):**
```bash
    sudo apt install mysql-server -y # MySQL
    sudo apt install postgresql -y # PostgreSQL
```

#### 3.2.4 Deploy Node.js + Express application
Clone the application code:

```bash
    git clone https://github.com/yourrepo/myapp.git
    cd myapp
```
    
**Install dependencies:**
```bash
    npm install
```

**Create an Express server:**
```bash
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;
    app.get('/', (req, res) => {
    res.send('Hello, Node.js + Express!');
    });
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
```

**Start the application:**
 ```bash
    node server.js
```

####3.2.6 Configure Nginx as a reverse proxy
**Create Nginx configuration file:**
```bash
    sudo nano /etc/nginx/sites-available/myapp
    Add the following configuration:
    server {
    listen 80;
    server_name myapp.local;
    location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    }
```

**Enable the configuration and restart Nginx:**
```bash
    sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
```

**Test deployment:**
```bash
    Visit http://myapp.local in a browser to check whether the application is running normally.
```

### 3.3 Startup and User Account Management
#### 3.3.1 Creating User Accounts or Logging into the System
**The system provides two access methods:**
- Creating a New Account: Users who register through the front-end interface are assigned a low-permission role by default. If department managers or other users require a high-permission account, they should contact the system administrator, who can add high-permission accounts through the backend.
- Logging into an Existing Account: Users can log into the system using their registered username and password.
### 3.3.2 User Roles and Permissions
**Root Account (Highest Permission)**
- Logs in directly using the system's preset username and password.
- Has access to the Administrator Page to manage all user accounts.
- Can assign administrator permissions to standard user accounts from the User Overview Page.
**Administrator Account**
- Requires users to first register as a standard account, then be upgraded by the Root account.
- Once authorized, administrators can access the exclusive Administrator Panel, with the same permissions as the Root account.
- Administrator Task Panel:
1. Can add new targets.
2. Can modify existing target content.
3. Can grant target modification permissions to standard users.
**Standard User**
- Registers an account directly on the Registration Page.
- Once created, users can log into the Standard User Task Interface to perform operations.
- Permissions:
1. Can view all targets but can only modify their own target (My Target section).
### 3.3.3 Initial Setup Guide
**Creating a Root Account:**
- Log in using the default credentials, or reset the Root account during installation.
- When adding the first high-permission super administrator account to the database, it is usually necessary to operate directly on the database (if used). Typically, this involves switching to the target database and executing:
     ```bash
    INSERT INTO users VALUES ('root', ...);
**Registering an Administrator Account:**
- Visit the Registration Page to create a standard account.
- Upgrade the account to super administrator by granting permissions via the Root account.
**Registering a Standard User:**
- Visit the Registration Page, fill in the required information, and complete the account creation.
- Once registered, users can log in and access the Standard User Task Interface with appropriate permissions.
### 3.4 Common errors and log queries
#### 3.4.1 Common Error Messages and Corresponding Solutions

| error code              | misdescription                      | prescription  |
|-------------------------|-----------------------------------|-------------------------------------------------------------|
| ERR-502                | Database connection timeout      | Check if the database configuration is correct and make sure that the database service is up and running properly. |
| ERR-307                | Insufficient authority           | Check your permission level or contact your administrator to obtain authorization. |
| WARN-199               | Memory overflow                  | Adjust the memory allocation appropriately according to the actual memory situation of the server. |
| 404                    | Resource not found               | Confirm that the URL you requested is correct. |
| ERR-310                | Port occupied                    | Check whether there is any service started repeatedly and stop the conflicting process. |
| Network Latency Timeout | Slow network response or timeout | Check network cable, Wi-Fi connection. |
| ERR-HTTP-408           | HTTP request timeout             | Check the network connection and service status between the client and the server. |

#### 3.4.2 How to find logs or diagnostic information
Our project logs are managed using Console.log to directly output Winston and express-winston. Customers can obtain system logs or application diagnostic information by directly viewing log files to assist in troubleshooting. Use the following methods to find logs, warnings, and error information in different systems:
**Viewing Express-Winston Logs in Real Time:**
Express environments typically use winston for logging, and the log files are stored in the logs/ directory:
```bash
    tail -f logs/error.log # Monitor the error log in real time.
    tail -f logs/combined.log # View all logs in real time (including info, warn, error)
    grep "error" logs/*.log # Search for error messages in all log files
```

**Query specific error logs:**
```bash
    jq '.level == "error"' logs/express-error.log # Filter out only error level logs
    grep -i "error" logs/express-error.log # Search for logs containing the "error" keyword
```

## Section 4: Maintenance and Implications
### 4.1
To sustain the capability of the system to provide a reliable and high-performance service, regular system maintenance is needed. Regular database maintenance, code maintenance and dependency management are essential for system maintenance.

#### **Database Maintenance:**

- **Regular Database Backup:**  
 Implement automated backup schedules to prevent data loss and ensure quick recovery in case of failures.

- **Data Integrity Checks:**  
  Perform routine validation of stored data to detect and correct inconsistencies.

#### **Code Maintenance:**

- **Bug Fixes and Patching:**  
  Continuously monitor for potential issues and apply patches promptly to ensure security and maintain optimal functionality.

- **Code Enhancement:**  
  Regularly reviewing code and adding comments improves readability and maintainability, making it easier to implement new features in the future.

#### **Dependency Management:**

- **Package Updates:**  
   Regularly update libraries and frameworks since many vulnerabilities arise due to outdated software
  
- **Compatibility Checks:**  
  When updating libraries and frameworks, compatibility checks are crucial to prevent conflicts that may break the application or introduce security risks

### 4.2
In this section, we focus on how the system’s future development can be implemented to enhance usability, efficiency, and accessibility.
#### Cloud-Based Infrastructure
Cloud platforms provide load balancing and failover mechanisms which can ensure system stability even in case of hardware failures. Cloud platforms can provide multiple servers and distribute incoming traffic across multiple servers to prevent single server overloading. Also cloud platforms will split large databases into smaller parts, allowing faster processing and parallel execution of queries.

#### Mobile App
Integrating a mobile app into the system can significantly improve user accessibility since users can update progress and check reports anytime, anywhere. Also users can input data even without internet access, which syncs automatically when reconnected.

#### Inclusivity and Accessibility
Supporting multiple languages should improve the usability for diverse users . Also adding features such as text-to-speech, high-contrast modes, and keyboard navigation can make the system more inclusive.


#### Performance Optimization
Implementing lazy loading in React can improve the speed and performance of the website since data is only rendered when visited. Lazy loading helps to load the web page quickly and presents the limited content to the user that is needed.

#### Customization and Personalization
In future, users should be able to customize dashboard, layout and the font style based on their need. Also notification should be customizable, allowing users to choose their preferred communication channel like in app or email and frequencies.

### 4.3
Finally, we will discuss the potential ethical and societal impacts of our system for both its current and future status.
#### Ethical Impacts
Data Security:
-	Our system stores personal data, as well as data about targets. Ethical concerns arise regarding how data is stored, shared, and protected. Ensuring sensitive data is not misused or compromised is crucial.

Environmental:
-	Our system currently stores database information in local JSON files. Scaling the system up requires use of larger and more resources. Environmental concerns arise with how much energy these resources would take.

Transparency and Accountability
-   Our system must be transparent and allow users and relevant stakeholders to understand how progress is measured. Ensuring transparency mitigates the mistrust or manipulation of data, undermining efforts to address climate change effectively.

#### Societal Impacts
Public Awareness and Engagement
-	Our system has the potential to raise awareness to the public and encourage climate action. Seeing visual progress on the CERP targets may motivate individuals and stakeholders to continue to, or take more, action.

Policy Development
-	Our system could influence policy decisions by providing data that informs the Council’s actions. It could help create more effective policies for reducing emissions, but also holds the council accountable for meeting climate targets, leading to more proactive climate policies.

Technological Dependence and Digital Divide
-	Our system requires technology to access, and whilst tracking online makes productivity more efficient, we must consider communities that lack technology. Those who don't have the means to engage with such systems may be left out of important climate conversations, potentially exacerbating the digital divide.
