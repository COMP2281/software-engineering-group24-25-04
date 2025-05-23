# Test Plan
### Introduction

This document outlines the test plan for the development and implementation of the CERP Target Tracking system for Durham City Council. This new system aims to facilitate efficient progress tracking, through a user-friendly interface, to optimise the council's resource management towards their net zero target.

This test plan provides a comprehensive framework of the testing scope, strategy, and outcomes, ensuring our projecy strongly aligns with our client's requirements.

The first section shall detail the main items to be tested for unit and system testing. The second section shall display each of our test cases, providing thorough information about each test case and how it aligns with our requirement documentation. The third section explains in which context we tested in and why.

Overall these were our findings etc.

## Section 1: What items to test

## Section 2: Test Cases

**Unit test {number to be placed later}:** 

**Test case ID:** unit-test_xx

**Description of test:** Verify that filtering tasks by a valid timeframe displays the correct results.

**Related requirement document details:** Filter tasks by period (Priority: Should have)

**Prerequsites for test:** Task dataset with tasks having due dates in various timeframes.

**Test procedure:**
  1. Log in to the system as an authenticated user.
  
  2. Under the "My Targets" section, select the desired timeframe to filter tasks by.                                                              							         
  3. Verify that only tasks due within the selected timeframe are displayed.

**Test material used:** A device with internet access and access to the web application.

**Expected result (test oracle):** 
If a valid timeframe is selected, then only tasks within that timeframe are displayed.

If an invalid timeframe is selected, then an error indicating that the selected timeframe is invalid should be displayed.

**Comments:**

**Created by:** TO

**Test environment:** Node.js backend, React frontend, Chrome browser.


**Unit test {number to be placed later}:** Changing between log in and sign up page

**Test case ID:** unit-test_xx

**Description of test:** Verify that when on the login page, and the sign up button is clicked, the page changes to the sign up page.

**Related requirement document details:** Login system (Priority: Must have)

**Prerequsites for test:** N/A

**Test procedure:**  
  1. When user loads up the web application                                                              							         
  2. If user doesn't have a login, click the 'sign up' button.

**Test material used:** N/A

**Expected result (test oracle):** Page should change to sign up page

**Comments:** N/A

**Created by:** MC

**Test environment:** Node.js backend, React frontend, Chrome browser.


**Unit test {number to be placed later}:** Forgotten password page shows when link clicked

**Test case ID:** unit-test_xx

**Description of test:** Verify that when the forgotten password link is clicked, the forgotten password page shows up.

**Related requirement document details:** Login system (Priority: Must have)

**Prerequsites for test:** User has an account

**Test procedure:**  
  1. When user loads up the web application                                                              							         
  2. If user doesn't remember their password, click the 'Forgotten Password' link.

**Test material used:** N/A

**Expected result (test oracle):** Page should change to forgotten password page

**Comments:** N/A

**Created by:** MC

**Test environment:** Node.js backend, React frontend, Chrome browser.

**Unit test {number to be placed later}:** Filtering a task by a valid timeframe

**Test case ID:** unit-test_xx

**Description of test:** Verify that router endpoints respond with the correct HTTP status code for each type of request

**Related requirement document details:** N/A

**Prerequsites for test:** Server is running and reachable and endpoints are defined and properly configured

**Test procedure:**  
1. Send requests to all router endpoints with appropriate methods (e.g. GET, POST, PUT, DELETE).
2. Verify that the response contains a valid HTTP status code.
3. Compare the received status code against the expected status code for each endpoint.
4. Log any mismatches between expected and actual results.

**Test material used:** Test.js containing automated test cases for endpoints.

**Expected result (test oracle):** Each endpoint responds with the correct HTTP status code (200 for successful GET requests, 404 for not found, 401 for unauthorized access).

**Comments:** Ensure all required headers and authentication tokens are provided for secured endpoints

**Created by:** RDY

**Test environment:**


**Integration test:** Does the target ID go to the backend and return correct target information to the frontend?

**Test case ID:** int_test_xx

**Description of test:** Verify if the target ID is sent to the backend and correct data is returned.

**Related requirement document details:** Feature: Ability to edit goals (Priority: Must have)

**Prerequsites for test:** Target ID must be available in the database.

**Test procedure:**  
  1. Request target data by clicking on box corresponding to target ID.

  2. Validate if the correct data is retrieved and displayed on the frontend.

**Test material used:** 

**Expected result (test oracle):** Data corresponding to the target ID is displayed accurately on the frontend.

**Comments:**

**Created by:** TO

**Test environment:** Node.js backend, React frontend, Chrome browser.


**Integration test:** Does the user ID go to the backend and return correct user information to the frontend?

**Test case ID:** int_test_xx

**Description of test:** Verify that the user ID is sent to the backend and correct user information data is returned to the front end.

**Related requirement document details:** Feature: Login System (Priority: Must have)

**Prerequsites for test:** User ID must already be present in the users database.

**Test procedure:**  
  1. Request user data by clicking on the user profile in the dashboard.

  2. Validate if the correct user data is retrieved and displayed on the frontend, in the user profile section.

**Test material used:** N/A

**Expected result (test oracle):** Data corresponding to the user ID is displayed accurately on the frontend, in the user profile section.

**Comments:** N/A

**Created by:** MC

**Test environment:** Node.js backend, React frontend, Chrome browser.


**Test case ID:** int_test_xx

**Description of test:** Application successfully directs valid user to correct dashboard

**Related requirement document details:** User story: "As a user, I want to be able to create an account so that I can securely log in to the system that is tailored towards me."

**Prerequsites for test:** Database contains valid user credentials for both staff and manager roles and authentication services are operational.

**Test procedure:**  
1. Input valid login details for a staff member and submit the login request.
2. Verify that the system logs in the staff member and redirects to the staff dashboard.
3. Input valid login details for a manager and submit the login request.
4. Verify that the system logs in the manager and redirects to the manager dashboard.

**Test material used:** A set of valid login credentials for both staff and manager roles and Login page/API endpoint for authentication.

**Expected result (test oracle):** Log in details are accepted and the user is successfully redirected to the correct dashboard based on their role.

**Comments:** Test invalid login scenarios separately to ensure proper error handling.

**Created by:** RDY


**Test case ID:** sys_test_xx

**Description of test:** Application successfully displays target details 

**Related requirement document details:** User story: "As a user, I want the system design to be clear and intuitive so that it is easy to use and allows me to focus my full attention on my work."

**Prerequsites for test:** System is operational, and the user is logged in and viewing their dashboard and dashboard contains clickable target cards.

**Test procedure:**  
1. Identify a target card on the dashboard.
2. Click on the target card.
3. Verify that the system responds by displaying the correct target details.
4. Ensure the details match the expected content in the database or system configuration.
4. Validate responsiveness and clarity of the interface displaying the details.

**Test material used:** Dashboard and interactive target card.

**Expected result (test oracle):** Correct target details are shown.

**Comments:** Include test scenarios for users with no associated targets to verify proper handling of empty states.

**Created by:** RDY

**Test environment:**

**Integration test**: Does the user ID go to the backend and return the correct user target to the frontend?

**Test case ID**: int_test_xx

**Description of test**: Verify if the user ID is sent to the backend and whether the correct user target data is returned and displayed on the frontend.

**Related requirement document details**: Login System( Priority: Must have)
Ability to edit or delete goals (Priority: Must have)

**Prerequisites for test**:
User ID must be available in the database
Target ID must be available in the database and is associated with the corresponding userID.

**Test procedure**:
       1.Log in to the website using a valid user account.
       2.Validate if the correct target is retrieved and displayed on the frontend.
       
**Test material used**:

**Expected result (test oracle):** The frontend accurately displays all targets of the user.

**Comments:**

**Created by:** EK

**Test environment:** Node.js backend, React frontend, Chrome browser.

**Integration test:** Does the Profile show correct user data 

**Test case ID:** int_test_xx

**Description of test:** Verify the backend retrieves the correct user information, and the frontend displays the user profile information accurately.


**Related requirement document details:** Login System( Priority: Must have)

**Prerequisites for test:**
User ID and user information such as name and profile picture must be available in the database.


**Test procedure:**
       1.Navigate to  the profile page by clicking on box
       2.Validate if the correct user information is retrieved and displayed on the Profile page.
       
**Test material used:**

**Expected result (test oracle):** The user profile with correct user information is displayed on the Profile page.

**Comments:**

**Created by:** EK

**Test environment:** Node.js backend, React frontend, Chrome browser.


**User acceptance test:** 

**Test case ID:** uat_test_xx

**Description of test:** Verify the progress bar is displayed and is updated dynamically as tasks progress.

**Related requirement document details:** Feature: Progress bar (Priority: Must have)

**Prerequsites for test:** 

1. Targets with various progress percentages assigned.

2. At least one target where progress can be updated incrementally.

**Test procedure:**  
  1. Log in to the system as an authenticated user.
  
  2. Locate a target with an existing progress percentage.

  3. Update the target's progress (e.g., mark sub-tasks related to the target as complete).

  4. Observe the progress bar to confirm it updates accordingly.

  5. Repeat steps for increasing progress levels (e.g., 25% → 50% → 75% → 100%).

  6. Verify that the progress bar reaches 100% when the target has been fully completed.

**Test materials used:** 
1. A pre-loaded task dataset with varying progress levels.

2. Various devices with access to the web application.

3. System logs (database updates, backend API repsonses and console logs)

**Expected result (test oracle):** 
1.  The progress bar is displayed on each task card.

2.  The percentage updates dynamically and accuracy upon task progress changes.

3.  The bar reaches 100% when all assigned sub-tasks have been completed.

**Comments:** 

**Created by:** TO

**Test environment:** Deployed application (Node.js backend, React.js frontend, various browsers) on a variety of office computers and other devices used within the organisation.


**User acceptance test** 

**Test case ID:** uat_test_xx

**Description of test:** Verify that the date filter is intuitive and aligns with stakeholder expectations for task tracking.

**Related requirement document details:** Feature: Filter tasks by period (Priority: Should have)

**Prerequsites for test:** 
1. Task dataset with tasks having due dates in various timeframes.

2. Test environment with realistic task data.

3. Users (staff members) with varying levels of digital literacy.

**Test procedure:**  
1. Demonstrate how users can filter tasks by date (Day, Week, Month, Year, etc.).
  
2. Ask the staff member to apply filters to find tasks due within specific periods.
   
3. Gather feedback on ease of use, expected behaviour, and usability of results.
   
4. Check if the staff member can successfully retrieve expected tasks without external help.

**Test materials used:** 
1. Various office computers and devices connected to the internet and with access to the test environment.

2. A pre-loaded target dataset with various due dates (covering different user scenarios).

3. A step-by-step guide for users explaining how to apply the filters.

4. A feedback form for each staff member covering ease of use, accuracy of tasks displayed, system performance and any additional comments.

**Expected result (test oracle):** 
1. The staff members confirm that filtering is intuitive and meets expectations.

2. The staff members can find specific tasks with ease.

**Comments:** Adjust user interface if necessary based on feedback (e.g., if users struggle with selecting date ranges).

**Created by:** TO

**Test environment:** Deployed application (Node.js backend, React.js frontend, various browsers) on a variety of office computers and other devices used within the organisation.


**Test case ID:** int_test_07

**Description of test:** Verify that when a valid target ID is received to edit a target, the updated details are correctly stored in the targets database and retrieved accurately.

**Related requirement document details:** Feature: Ability to edit goals (Priority: Must have)

**Prerequsites for test:** 
1. A frontend user interface (to confirm data consistency).

2. A pre-loaded dataset with sample targets.

3. A valid target ID associated with an existing target.

4. An endpoint for updating target details.


**Test procedure:**  
1. Retrieve an existing target ID from the database.

2. Send an update request to the backend API with modified details (e.g., target name, description, progress percentage).

3. Verify that the API response confirms a successful update (HTTP 200 OK).

4. Retrieve the target from the database using the same target ID.

5. Check that all updated details are correctly stored and match the request.

6. Refresh the frontend and verify that the updated details are displayed accurately.

7. Perform the test again by trying to update a non-existent target or not filling in the required fields.

**Test materials used:** 


**Expected result (test oracle):** 
If the test passes, the database and frontend should reflect the updated target details, and the backend should provide a successful update response.

If the test fails, the frontend should not reflect the updated target details and the database should be rolled back (returned ot a previous state).

**Comments:**

**Created by:** TO

**Test environment:** Deployed application (Node.js backend, React.js frontend, various browsers) on a variety of office computers and other devices used within the organisation.




**Test Case ID:** sys_test_xx

**Description of test:** Testing that the automated reminder function correctly triggers monthly reminders to all registered staff members who have assigned projects

**Related requirement document details:** Automated reminders user stories- Sending monthly automated reminders on project progress

**Prerequisites for test:**
1. Staff members must have registered email addresses in system
2. At least one active project must be assigned to each staff member.
3. The system’s scheduler for reminders should be enabled.
4. Access to the system database.

**Test procedure:**
1. Set the system's date to the last day of the month.
2. Trigger the automated reminder function via a POST API call.
3. Verify that the system generates reminders for all staff members with assigned projects.
4. Check the system database to confirm that an email reminder was queued for each assigned user.
5. Validate that the email service function executes properly without errors.
   
**Test material used:**
1. Database records with pre-registered staff and assigned projects
2. API request to trigger reminders.
3. System logs to check processed reminders.
   
**Expected result (test oracle):**
1. If the test passes, all staff members with assigned projects will receive an email reminder prompting them to update their progress. The system logs successful reminder dispatch for each valid user.
2. If the test fails, no email is sent to staff members due to system failure. Emails are sent incorrectly such as duplicate reminders and incorrect users. The system crashes or takes too long to process reminders.
   
**Comments:** None

**Created by:** JJ

**Test environment(s):** Windows 11, Google Chrome, Gmail




**Test Case ID:** uat_test_xx

**Description of test:** Testing if the dashboard retrieves and displays the correct list of targets from the database
Related requirement document details: Clear and intuitive user interface user stories- Viewing target details

**Prerequisites for test:**
1. Create a target in the database for a specific user.
2. The database is updated with new target details.
3. Dashboard user interface is accessible for verification

**Test procedure:**
1. Log in to the system using the specific registered staff member’s credentials.
2. Navigate to the MyTargets section on the dashboard.
3. Verify the displayed target list is similar to the one in the database.
4. Modify or add an assigned target on the manager dashboard manually and reload the staff member’s dashboard.
5. Check if the staff member’s dashboard reflects the updated target in real time.

**Test material used:** Frontend dashboard user interface, system database, manager dashboard for target modification

**Expected result (test oracle):**
1. If the test passes, the dashboard displays the correct list of targets with their respective details. When the database is updated, the lists of targets on the dashboard are also updated in real time.
2. If the test fails, the dashboard does not show the expected list of targets. The dashboard does not show the modified targets from the database after refreshing. The user interface crashes or fails to load if database connectivity is lost. An error message is shown on the dashboard to try again later.
   
**Comments:** None

**Created by:** JJ

**Test environment(s):** Windows 11





**Test Case ID:** sys_test_xx

**Description of test:** Verify that different roles (employees, managers) are correctly redirected to their respective dedicated pages after logging in.

**Related requirement document details:** Permission levels (Priority: Must have) - The system should automatically direct users to the appropriate dedicated page based on their role (employee, manager).

**Prerequisites for test:**
1. User accounts (employee, manager) have been created and activated in the system.
2. Dedicated pages for each role have been developed and are accessible.
3. The login system supports role recognition and page redirection.
4. The test environment is configured, including network connections and access permissions.

**Test procedure:**
1. Log in as an administrator and verify that the system automatically directs to the administrator’s dedicated page.
2. Log in as an employee and verify that the system automatically directs to the employee’s dedicated page.
3. For each role, check that the correct user information and functional options are displayed on the page after login.
4. Test incorrect inputs (such as wrong passwords or usernames) to confirm that the system handles errors properly and displays the correct error messages.
5. Test permission boundaries, such as attempting to access the administrator’s page with an employee account, to ensure the system denies access.
6. Enter the URL to the administrator’s page and check if it redirects to the 403 error page, verifying that the displayed message is "Access Denied."
7. Test various incorrect URL formats (including illegal characters, overly long URLs, and structurally incorrect path entries) to see if the system redirects to the 404 error page and displays the message "Page Not Found."

**Test material used:**The user account information includes usernames and passwords for employees and managers.

**Expected result (test oracle):**
1. If the test passes, each role will be correctly redirected to their respective dedicated pages after login, and the pages will display user information and functional options that match the expected permissions of the role. Incorrect login attempts should be properly recognized, and the system should provide appropriate error messages.
2. If the test fails, it will not route to the user interface corresponding to the user's role permissions.

**Comments:**  None

**Created by:** HB

**Test environment(s):** Windows 11 / macOS, Google Chrome, Firefox, Edge; backend server configuration.







**Test Case ID:** uat_test_xx

**Description of test:** Verify the website's responsive layout and functionality across various devices and screen sizes.

**Related requirement document details:** Responsive Design User Story - The website should provide a consistent user experience across desktop, tablet, and mobile devices.

**Prerequisites for test:**
The website must already be deployed and accessible.
Test devices include: desktop computers, tablets, and smartphones.
All devices should have the latest version of mainstream browsers installed (such as Chrome, Firefox, Safari).


**Test procedure:**
1. Open the website on a desktop computer to observe the rationality of the layout and the completeness of functionalities.
2. Adjust the browser window width to check for any misplacements or overflows of elements.
3. Access the website on a tablet device in both landscape and portrait modes to ensure interface elements are correctly rearranged.
4. Visit the website on a smartphone to verify if menus correctly fold and texts are readable.
5. Perform interaction tests, such as clicking buttons and filling out forms, to ensure all functionalities are accessible.
6. Record any layout disarray or functional anomalies.


**Test material used:**
1. Test devices (desktop computers, tablets, and smartphones) and their specifications.
2. URL of the test website.
3. Browser compatibility testing tools.

**Expected result (test oracle):**
1. If the test passes, the page will correctly adapt to different screen sizes without needing horizontal scrolling. Interactive components (buttons, menus, forms, etc.) will function normally on all devices without any content misalignment or overflow. The layout will be neat, with good readability and reasonable spacing.
2. If the test fails, potential issues may include improper adaptation of the layout during viewport changes, interactive elements not functioning properly, or elements being truncated.

**Comments:**  None

**Created by:**  HB

**Test environment(s):**Includes Windows 10, iOS, and Android devices, mobile iOS & Android using Chrome, Firefox, Safari browsers for testing.


## Section 3: Testing Context
