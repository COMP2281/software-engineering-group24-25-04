# Requirement Documentation
## Introduction
### Overview and Justification
### Project Scope
### System Description

#### Current System and Issues

The current legacy system is an Excel sheet used to display projects, themes, and specific descriptions of actions related to building decarbonization. The current system has the following limitations:

##### 1. Insufficient Data Security
- All project data cannot be permission-controlled and can be accessed and modified by anyone, posing a risk of data exposure and unintentional edits.

##### 2. Lack of Support for Multi-user Collaboration
- When multiple people work on the same project, version conflicts arise, leading to data overwrites and loss.

##### 3. Lack of Data Synchronization
- When team members update the file, it often requires manual sharing to synchronize data, resulting in delays.

##### 4. Limited Functionality
- The system cannot display ongoing projects or project progress.
- Attachments cannot be added to the document, affecting the completeness of information.

##### 5. Display Issues
- For tasks with large amounts of complex data, the page is cluttered and lacks clarity. The structure between projects is chaotic, data is not intuitive, and it easily leads to redundancy.


## Solution Requirements
### Requirements Elicitation
### Behavioural Requirements
#### User Story(Permission levels (by team/ company))
As a user, I want permission levels on project progress visibility so that my teams can’t view other teams' projects, but managers can grant access if needed.
#### Features
Allows managers to control other staff permissions, ensuring only authorized users can view or edit project progress across teams

#### Scenario
Scenario 1:
team members attempt to view another team’s project progress
Then they are denied access and shown a message that said that they have no permission to view the project

Scenario 2:
When the manager selects a new team member
Then the manager can grant or revoke permission for that user to have access to view or edit the project.

## Project Management
### Risks and Issues
### Development Approach
