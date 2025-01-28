# Test Plan
### Introduction

This document outlines the test plan for the development and implementation of the CERP Target Tracking system for Durham City Council. This new system aims to facilitate efficient progress tracking, through a user-friendly interface, to optimise the council's resource management towards their net zero target.

This test plan provides a comprehensive framework of the testing scope, strategy, and outcomes, ensuring our projecy strongly aligns with our client's requirements.

The first section shall detail the main items to be tested for unit and system testing. The second section shall display each of our test cases, providing thorough information about each test case and how it aligns with our requirement documentation. The third section explains in which context we tested in and why.

Overall these were our findings etc.

## Section 1: What items to test

## Section 2: Test Cases

**Unit test {number to be placed later}:** Filtering a task by a valid timeframe

**Test case ID:** unit-test_xx

**Description of test:** Verify that filtering tasks by a valid timeframe displays the correct results.

**Equivalent classes:** Valid timeframes (Day/Week/Month/Year)

**Related requirement document details:** Filter tasks by period (Priority: Should have)

**Prerequsites for test:** Task dataset with tasks having due dates in various timeframes.

**Test procedure:**  
  1. Under the "My Targets" section, select the desired timeframe to filter tasks by.                                                              							         
  2. Verify that only tasks due within the selected timeframe are displayed.

**Test material used:** 

**Expected result (test oracle):** Only tasks due within the selected period are displayed.

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



**User acceptance test:** Progress bar exists

**Test case ID:** uat_test_xx

**Description of test:** Verify that a progress bar exists for tracking goal completion.

**Related requirement document details:** Feature: Progress bar (Priority: Must have)

**Prerequsites for test:** Tasks/targets with progress percentages assigned

**Test procedure:**  
  1. View targets in the application.

  2. Verify that a progress bar is displayed in each target box.

**Test material used:** 

**Expected result (test oracle):** Each task box has a visible progress bar.

**Comments:**

**Created by:** TO

**Test environment:** Node.js backend, React frontend, Chrome browser.


**User acceptance test:** Progress bar updates dynamically

**Test case ID:** uat_test_xx

**Description of test:** Verify the progress bar updates dynamically as tasks progress.

**Related requirement document details:** Feature: Progress bar (Priority: Must have)

**Prerequsites for test:** Tasks/targets with progress percentages assigned

**Test procedure:**  
  1. Update task progress within the system.

  2. Verify that the progress bar reflects the update (by an increased percentage)

**Test material used:** 

**Expected result (test oracle):** Progress bar updates accurately and immediately.

**Comments:**

**Created by:** TO

**Test environment:** Node.js backend, React frontend, Chrome browser.


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





## Section 3: Testing Context
