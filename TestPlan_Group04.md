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

**Expected result (test oracle):** If a valid timeframe is selected, then only tasks within that timeframe are displayed.

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

**Test environment:** Node.js backend, React frontend, Chrome browser.


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

2. A pre-loaded task dataset with various due dates (covering different user scenarios).

3. A step-by-step guide for users explaining how to apply the filters.

4. A feedback form for each staff member covering ease of use, accuracy of tasks displayed, system performance and any additional comments.

**Expected result (test oracle):** 
1. The staff members confirm that filtering is intuitive and meets expectations.

2. The staff members can find specific tasks with ease.

**Comments:** Adjust user interface if necessary based on feedback (e.g., if users struggle with selecting date ranges).

**Created by:** TO

**Test environment:** Deployed application on a variety of office computers and other devices used within the organisation.


## Section 3: Testing Context
