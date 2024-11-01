# Requirement Documentation
### Introduction
This document is the Requirement Specification for our CERP (Climate Emergency Response Plan) Target Tracking Project.
It has three parts. The first part is an overview, which includes the introduction, project scope, and technical description of the system. The second part is about how we collaborated with the client to gather requirements and list features that the user needed for our proposed solution. Finally, the last part will talk about the risks we may face during the project, the software development life cycle, and our plan to make it more organized.

### Overview and Justification

**Write client details and their goals in this space**



Our proposed system seeks to replace Excel-based tracking with a more user-friendly, web-based platform. The system will enable stakeholders to update their targets independently, provide automated reminders, and generate visual reports accessible across various computers. In addition, by offering more secure and role-based access, the system ensures that each user inputs or updates data without affecting others’ entries.

Generally, our solution aims to facilitate efficient progress tracking and optimise the council’s resource management towards their net-zero target.


### Project Scope
Our target tracking system aims to provide the council with a well-structured, automated platform to track progress towards the council's net-zero carbon emissions target.

Their current approach, which relies on a shared Excel spreadsheet within Microsoft Teams, requires frequent manual interventions, including reminder notifications and permission management. Difficult-to-interpret visuals, unclear role assignments, irregular updates and duplication of project entries also hinder the tracking process. Our project proposes a web-based application that addresses these issues by offering automated reminders, secure and role-based access and clear visual progress indicators, enabling a more productive, transparent and collaborative tracking process.

Our software’s primary purpose is to streamline the council’s target tracking while maintaining data integrity and accessibility. The core goals include reducing administrative load through automated permissions and reminders, enhancing data visualisation for more accessible progress assessments, and clarifying role assignments to prevent task overlap. These goals are aligned with the council’s operational efficiency needs and commitment to transparency with the governing group, Carbon Capital Group, and other external stakeholders.
Our software's user base includes project managers, team members, potential data analysts who will interact directly with the system, and external partners who will access the reports.

By enabling consistent real-time updates and user-friendly data management, our target tracking system is designed to support the council’s goals efficiently and effectively.

### System Description

#### Current System and Issues

The current legacy system is an Excel sheet used to display projects, themes, and specific descriptions of actions related to building decarbonization. The current system has the following limitations:

#### Insufficient Data Security
- All project data cannot be permission-controlled and can be accessed and modified by anyone, posing a risk of data exposure and unintentional edits.

#### Lack of Support for Multi-user Collaboration
- When multiple people work on the same project, version conflicts arise, leading to data overwrites and loss.

#### Lack of Data Synchronization
- When team members update the file, it often requires manual sharing to synchronize data, resulting in delays.

#### Limited Functionality
- The system cannot display ongoing projects or project progress.
- Attachments cannot be added to the document, affecting the completeness of information.

#### Display Issues
- For tasks with large amounts of complex data, the page is cluttered and lacks clarity. The structure between projects is chaotic, data is not intuitive, and it easily leads to redundancy.

#### Existing/Alternative Solutions

Following our initial discussion of the brief, the team conducted research on solutions for the problem

As a team we researched various commercial and non-commercial solutions for the problem. 

#### Notion
Notion is a website that is flexible for tracking goals. It allows users to set, monitor and edit their goals in a structured way.
##### Pros:
-	User friendly for teams: It is designed to be clear and intuitive which makes it easier for varying skill levels.
-	Collaboration: It allows collaboration on projects, as well as sharing notes and task assignment.
-	Cost efficient: There is a free version that provides an abundance of features, as well as a paid version that offers a much wider range of features for a reasonable price.
-	Portable: Notion can be accessed from the web or locally on an app. This allows it to be used anywhere
-	Documentation: There is an extensive number of tutorials and documentation as it is a widely used platform
-	Database: Notion has a database format that you can add to track the goals. This would allow a similar system to be implemented to what they currently use, with the excel spreadsheet, but in a better format. This is something that we’d like to implement in our chosen solution.
-	Progress Bar/Status: Notion has a progress bar and status system that allows efficient tracking of the goals. This is something we will implement into our chosen solution.
##### Cons:
-	Overwhelming: As Notion offers a wide variety of features, it can be quite overwhelming to use especially when new to the platform. 
-	No goal tracking: Although it allows you create and track goals, it doesn’t have tools designed specifically for this. So, it’s not necessarily the most efficient software to use.
-	Confusing: The template system is confusing to use. When selecting a free template, it suggests paying and then shows multiple pop-ups asking to add multiple different templates that cost money. 

#### Non-Commercial App
##### Pros:
-	Fast: Mobile apps are often hosted on local databases, therefore consistent fast speeds.
-	Offline: Can be used offline without Wi-Fi or data if already downloaded.
-	Push Notifications: Apps allow push notifications to be integrated more easily. This was something we discussed adding to our solution but after talking to Louise it was decided that quarterly email reminders to update goals is what they need.
##### Cons:
-	The project brief favoured a web-based application
-	Maintenance: Need regular updates compared to web applications
-	Storage: If it’s a large app it’ll take up a lot of storage on a mobile phone
-	Download: Requires downloading from an app store

#### Non-Commercial Web Based Solution
##### Pros:
-	Requested by user
-	Web based platforms can generally be used anywhere provided there is an internet connection. They can be accessed on desktop, laptops and mobile devices. 
-	We can customise the solution to have specific features the brief requests as well as keeping it simple and not overwhelming by having an abundance of features that aren’t necessary.
##### Cons:
-	Takes time to build the website, as opposed to using a prebuilt one. 
-	Takes time to learn the specific skills needed to build the website
-	May lack ongoing development once solution has been built. Commercial solutions tend to have frequent updates.


#### Jira
Jira is a project management and issue tracking tool developed by Atlassian, widely used in software development and IT projects. Initially designed for bug tracking and defect management, it has now become a feature-rich platform for managing various project processes, including task assignment, progress tracking, project management, and agile development (such as Scrum and Kanban).

#### Advantages:
- There is a number of useful features, including task assignment, progress tracking, issue management, and time tracking, supporting multiple project management methodologies.
- It supports different types of charts, such as burndown charts, cumulative flow diagrams, control charts for visualizing task progress.

#### Disadvantages:
- A mobile application is available, but mobile functionality is somewhat limited compared to the desktop version, making it challenging to fully utilize all features on mobile.
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
