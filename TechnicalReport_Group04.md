# Technical Report
## Section 1: Introduction
### 1.1
### 1.2 
To access the system locally, clone the GitHub repository in an interactive development environment such as Visual Studio Code (with git built-in) and install Node.js from their website. The code is split into two folders: frontend and backend. To get them to work together, you’ll need to npm install axios in the frontend folder and then npm install express cors body-parser in the backend folder. To start the website, split the terminal into two parts and navigate to the frontend in one and the backend in the other, and type npm start in both.
### 1.3
## Section 2: Technical Development

### 2.1

The basis of our system was illistrated by the project brief provided to us by our client. We were given an expected output that should be aimed for. It outlined that the system needs to be usable by a variety of users, usable on a variety of computers, and should give a good, visible tracking of progress towards goals. They also highlighted that users shouldn't be able to delete others inputted data. This is how we decided user levels should be implemented. Monthly reminders were also a suggested feature.

We had a meeting with our client so that we could understand what the company meant by 'goal tracking'. They provided us with an excel spreadsheet, containing all of their goals and the data associated with those goals. Upon inspection, the spreadsheet was convoluted. We asked our client to confirm what each column was tracking, and which columns were necessary or not.

Following `market reasearch` we compared multiple online available goal tracking applications, such as Notion and Jira. We identified key features that might be useful to implement into our system, but also noted that these current systems available wouldn't be suited to our client. It was suggested in the brief that the solution could be web-based. This influenced our decision for our solution to be web-based and not app-based.

After our research we spoke to the client to confirm that what we were planning was in their scope and met their needs.

### 2.2
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
