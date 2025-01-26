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







## Section 3: Testing Context
