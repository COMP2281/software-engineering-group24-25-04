# Requirement Documentation
## Introduction
This document is the Requirement Specification for our CERP (Climate Emergency Response Plan) Target Tracking Project. It has three parts. The first part is an overview, which includes the introduction, project scope, and technical description of the system. The second part is about how we collaborated with the client to gather requirements and list features that the user needed for our proposed solution. Finally, the last part will talk about the risks we may face during the project, the software development life cycle, and our plan to make it more organized.
### Overview and Justification
Our client, Durham County Council, is the local authority for the non-metropolitan county of County Durham. The council is dedicated to achieving numerous net-zero carbon emission goals for council operations by 2030. With numerous ongoing projects to reach this target, they currently track their progress using an Excel spreadsheet accessible to multiple stakeholders. 
However, the existing system poses some challenges—it operates within Microsoft Teams and requires frequent manual interventions, including reminder notifications and permission management. Complicated visuals, unclear role assignments and duplication of project entries also hinder the tracking process.
Their project goals are to:
•	Streamline and improve the accuracy of their target tracking system
•	Minimise manual interventions and allow stakeholders to focus on their targets
•	Provide clear visual progress updates for a diverse user base
•	Enhance the security of the project’s data, ensuring only relevant parties can modify the input
•	Automate periodic reminders to update progress, ensuring consistent communication across teams.

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

#### Alternative Solution: Jira

Jira is a project management and issue tracking tool developed by Atlassian, widely used in software development and IT projects. Initially designed for bug tracking and defect management, it has now become a feature-rich platform for managing various project processes, including task assignment, progress tracking, project management, and agile development (such as Scrum and Kanban).

##### Advantages:
- Rich features, including task assignment, progress tracking, issue management, and time tracking, supporting multiple project management methodologies.
- Chart support (burndown charts, cumulative flow diagrams, control charts) for visualizing task progress.

##### Disadvantages:
- Mobile application is available, but mobile functionality is somewhat limited compared to the desktop version, making it challenging to fully utilize all features on mobile.
- Pricing is relatively high for enterprises, with costs increasing as the number of users grows.
- The interface is complex for new users and requires time to adapt.

## Solution Requirements
### Requirements Elicitation
### Behavioural Requirements
#### User Story(Permission levels (by team/ company))
As a user, I want permission levels on project progress visibility so that my teams can’t view other teams' projects, but managers can grant access if needed.
#### Features
Allows managers to control other staff permissions, ensuring only authorized users can view or edit project progress across teams

#### Scenario
Scenario 1:
Team members attempt to view another team’s project progress
Then they are denied access and shown a message that said that they have no permission to view the project

Scenario 2:
When the manager selects a new team member
Then the manager can grant or revoke permission for that user to have access to view or edit the project.

## Project Management
### Risks and Issues
### Development Approach
