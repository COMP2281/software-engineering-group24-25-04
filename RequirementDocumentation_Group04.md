# Requirement Documentation

### Overview and Justification

This document is the Requirement Specification for our CERP (Climate Emergency Response Plan) Target Tracking Project.
It has three parts. The first part is an overview, which includes the introduction, project scope, and technical description of the system. The second part is about how we collaborated with the client to gather requirements and list features that the user needed for our proposed solution. Finally, the last part will talk about the risks we may face during the project, the software development life cycle, and our plan to make it more organized.

Durham County Council (DCC), our client, is committed to attaining net-zero carbon emissions by 2030 in response to Durham's climate crisis. To support this goal, we are collaborating with Louise Austin, the Senior Carbon and Energy Officer at DCC, to develop a tool that will efficiently manage and assess the progress of their climate initiatives, replacing their current, inefficient Excel-based system. The council aims to enhance usability, provide stakeholders with transparent visibility into project progress, and reduce reliance on manual reminders.

Our proposed system seeks to replace Excel-based tracking with a more user-friendly, web-based platform. The system will enable stakeholders to update their targets independently, provide automated reminders, and generate visual reports accessible across various computers. In addition, by offering more secure and role-based access, the system ensures that each user inputs or updates data without affecting others’ entries.

Generally, our solution aims to facilitate efficient progress tracking and optimise the council’s resource management towards their net-zero target.


### Project Scope
Our target tracking system aims to provide the council with a well-structured, automated platform to track progress towards the council's net-zero carbon emissions target.

Their current approach, which relies on a shared Excel spreadsheet within Microsoft Teams, requires frequent manual interventions, including reminder notifications and permission management. Difficult-to-interpret visuals, unclear role assignments, irregular updates and duplication of project entries also hinder the tracking process. Our project proposes a web-based application that addresses these issues by offering automated reminders, secure and role-based access and clear visual progress indicators, enabling a more productive, transparent and collaborative tracking process.

We aim to create a functional progress tracker website that is both user-friendly and visually appealing by increasing data visualisation for easier progress assessment. To reduce administrative workload, we plan to provide automated permissions and monthly reminders for the teams involved, as well as clarify role allocations to avoid task overlap. These goals are consistent with the council's operational efficiency requirements and commitment to transparency with the governing body, the Carbon Capital Group, and other external stakeholders.

#### Exact User Base for this Project
- Durham County Council: They are responsible for managing projects to achieve net zero emissions and must input, track, and report progress on their respective projects.
- External Partners:  Collaborators from other organizations need to have access to track progress
- Project Stakeholders: Staff who are involved in specific projects and need to update their progress regularly.



### System Description

(cut this down to a page)

#### Current System

As previously mentioned, the current target-tracking system is an Excel spreadsheet. As a platform, Excel is limited in its features for advanced multi-project management, deeming it insufficient for our client’s needs.
Multi-user collaboration on Excel is limited, there is no way of allowing users to see real-time changes, increasing the risk of losing data integrity. There is a way to set password protection, but managing user permissions is less flexible, not supporting secure, role-based access on specific targets. The spreadsheet itself lacks clarity: the tabular format isn’t suitable for tracking progress on multiple, complex, goals, and makes it hard for users to focus on one specific task. Excel does allow users to visualise data as charts, but this functionality is limited and redundant for our client. Unlike dedicated project management software, Excel doesn’t provide a clear. visual representation for the amount of progress on each goal, and there is no way of automating reminders.


#### Existing/Alternative Solutions

As a team we researched various commercial and non-commercial solutions for the problem. 

A commercial website, Notion, is a user friendly, collaborative and cost-efficient commercial website. Notion provides a progress bar and status mode, allowing efficient tracking of goals. We plan to use this in our final solution. However, it can be overwhelming to use.
A non-commercial app allows customisation. Using a local database would increase load times and once downloaded it could be used anywhere. It allows push notifications, but after discussions with client, this isn’t required. The brief also favours a web-based solution.
A non-commercial website is also customisable and can be loaded on any device provided there’s an internet connection. However, it will take time to build and learn the specific skills needed.

Jira is a project management and issue tracking tool developed by Atlassian, widely used in software development and IT projects. Initially designed for bug tracking and defect management, it has now become a feature-rich platform for managing various project processes, including task assignment, progress tracking, project management, and agile development (such as Scrum and Kanban). There is a number of useful features, including task assignment, progress tracking, issue management, and time tracking, supporting multiple project management methodologies. It supports different types of charts, such as burndown charts, cumulative flow diagrams, control charts for visualizing task progress. However, pricing is relatively high for enterprises, with costs increasing as the number of users grow, and the interface is complex for new users and requires time to adapt.

#### New System

Following our analysis on the current system and research on alternative solutions, we concluded that the new system to be built shall be a React.js web application. Using React.js will allow for a customisable, dynamic and responsive user interface, allowing us to create components in order to display the targets in a user-friendly way. We shall take inspiration from the commercial solutions to help us design the features that will allow the users to visualise each goal, without the complexity the current system and other solutions hold.

In the backend, we will make use of the REST API with node.js to handle requests to the server, and store all changes made to each target data in a secure database. We will implement robust data management, ensuring data integrity is kept and data redundancy is minimised.

To incorporate user permissions, we plan to use an API that will allow workers to log in to the system with their work Outlook email, enabling us to tailor each target to each person. We will need to check with Durham City Council on whether we have permission to do so, and if not we shall incorporate a login system where each person must create an account, login details securely stored, and give administrative roles the ability to assign each person to their goal. In any case, we shall build the system so that each user’s view of all targets is specifically tailored to them.

We shall use another API that will send monthly emails to each person about the targets they are working on. Again, we must liaise with Durham City Council to ensure we have the permission to do so.

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
