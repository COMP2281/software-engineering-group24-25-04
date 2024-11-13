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
Multi-user collaboration on Excel is limited, there is no way of allowing users to see real-time changes, increasing the risk of losing data integrity. There is a way to set password protection, but managing user permissions is less flexible, not supporting secure, role-based access on specific targets. The spreadsheet itself lacks clarity: the tabular format isn’t suitable for tracking progress on multiple, complex, goals, and makes it hard for users to focus on one specific task. Excel does allow users to visualise data as charts, but this functionality is limited and redundant for our client. Unlike dedicated project management software, Excel doesn’t provide a clear visual representation for the amount of progress on each goal, and there is no way of automating reminders.


#### Alternative Solutions

A commercial website, Notion, is a user friendly, collaborative and cost-efficient commercial website. Notion provides a progress bar and status mode, allowing efficient tracking of goals. We plan to use this in our final solution. However, it can be overwhelming to use.
A non-commercial app allows customisation. Using a local database would increase load times and once downloaded it could be used anywhere. It allows push notifications, but after discussions with client, this isn’t required. The brief also favours a web-based solution.
A non-commercial website is also customisable and can be loaded on any device provided there’s an internet connection. However, it will take time to build and learn the specific skills needed.

Jira is a project management and issue tracking tool developed by Atlassian and widely used in software development and IT projects. It is used to manage various project processes, including task assignment, progress tracking, project management, and agile development. It supports different types of charts for visualizing task progress. However, the pricing is relatively high for enterprises, the cost will increase as the number of users grows, and the interface is complex for new users and takes time to adapt.

#### New System

Following our analysis on the current system and research on alternative solutions, we concluded that the new system to be built shall be a React.js web application. Using React.js will allow for a customisable, dynamic and responsive user interface, allowing us to create components in order to display the targets in a user-friendly way. We shall take inspiration from the commercial solutions to help us design the features that will allow the users to visualise each goal, without the complexity the current system and other solutions hold.

In the backend, we will make use of the REST API with node.js to handle requests to the server, and store all changes made to each target data in a secure database. We will implement robust data management, ensuring data integrity is kept and data redundancy is minimised.

To incorporate user permissions, we plan to use an API that will allow workers to log in to the system with their work Outlook email, enabling us to tailor each target to each person. We will need to check with Durham City Council on whether we have permission to do so, and if not we shall incorporate a login system where each person must create an account, login details securely stored, and give administrative roles the ability to assign each person to their goal. In any case, we shall build the system so that each user’s view of all targets is specifically tailored to them.

We shall use another API that will send monthly emails to each person about the targets they are working on. Again, we must liaise with Durham City Council to ensure we have the permission to do so.

## Solution Requirements
### Requirements Elicitation

To elicit the client’s requirements and ensure we streamlined our focus on the new system to best align with their needs, we carefully read the brief and conducted a number of meetings with Louise to coordinate the specific features they wanted. As a team we decomposed the brief and devised a series of discussion points in order to clarify things addressed in the document, and ensure we understood fully what it was that they were asking of us. We asked Louise to demonstrate how user’s would utilise the current system, encouraging her to explain any issues they had with it, and any desirable characteristics the new system should have. This was incredibly helpful when designing the requirement specification, as we gained an insight as to how the current system was being used, and how the new system could improve their user experience.

A specific feature Louise requested was the implementation of progress bars because users struggled with the layout of the excel spreadsheet: the lack of visual representation of progress and focus on specific tasks decreased productivity and ease for the users. Another feature she asked for were automated reminders to prompt workers to update their work. In addition, permission levels were asked for in order to protect data integrity and security on different targets.

From these requests and their needs in mind, we included a login system in our requirements specification in order to implement the permission levels. We also proposed a feature to allow users to search for, filter, and sort tasks, improving productivity and navigation of targets.

We gathered from our elicitation that our requirements specification should focus on improving data integrity and security on tasks, and improving the user experience to help focus and boost productivity. 

One challenge we faced upon receiving the project brief related to the permissions. Originally, we were unsure about what our client meant by permissions and needed an elaboration on them. To overcome this, we sent an email to organise a meeting with our client and clarified her meaning of 'permissions'. We now understand the structure that she wants, that being to have different companies being able to edit their own goals only but being able to see all goals. 
A further challenge we faced based on the brief was the understanding of the goals that they would be tracking, as there was no evidence given of what they currently track. We used the same meeting as above and asked for some examples of what they currently use to track their goals. During the meeting our client showed, and sent us, a spreadsheet that they currently use. She also mentioned that they currently use SMART targets for the tracking of their goals. Following the meeting we all went through the excel spreadsheet. 
Upon reading the spreadsheet, after discussing as a group, we came to the conclusion that it was confusing. There were too many categories, there was missing data, it had confusing deadlines, and it wasn't consistent in the measuring of the goals. We then arranged another meeting to discuss the spreadsheet. We asked her to go step by step through one of the goals, and each of the headings in the spreadsheet. We are now aware of which columns are essential, and which are optional, as well as which column should be used for the goal tracking.

In our internal meetings, we analysed the documents provided by our client by breaking them down and going into detail on how their current system works. We did some research on existing solutions to figure out the potential features that could be added to fulfil the requirements of our client. We then brainstormed a few ideas together and reached a mutual decision on which features were the most useful and required for our web application. After coming to an agreement, we presented those features in our meeting with our client to seek feedback and our client was satisfied with our delivery.


### Behavioural Requirements

**Feature:** Login System (**Priority**: **Must have**)

_As a user, I want to be able to create an account so that I can securely log in to the system that is tailored towards me._

**Scenario 1:** User tries to log in to system without an account

      Given a user attempts to log in to system with no account details
      
      When they try to log in
      
      Then a message tells the user that they need to fill in the fields OR that they need to create an account
      
**Scenario 2:** User creates an account

      Given a user wants to create an account to be able to log in
      
      When they enter their email and secure password
      
      Then an account is created for the user, and a message tells them they are ready to log in

**Scenario 3:** User logs in to system with the correct account details

      Given a user, with an account, wants to log in to the system
      
      When they log in with the correct account details
      
      Then they are taken to the home page

**Scenario 4:** User logs in to the system with the incorrect account details and this attempt is less than three

      Given a user attempts to log in to the system
      
      When they log in with the incorrect account details
      
      AND this attempt is NOT less than 3
      
      Then they are NOT taken to the home page and a message prompts them to re-enter their details OR create an account if they don't already have one

**Scenario 5:** User logs in to the system with the incorrect account details and this is their third attempt

      Given a user attempts to log in to the system
      
      When they log in with the incorrect account details
      
      AND this is attempt 3
      
      Then they are NOT taken to the home page, a message prompts the user to reset their password and a link is sent to their email to do so

Implementing a login system for our web application aligns with our client's needs as it will enable administrator roles to grant specific permissions to each person based on the projects they are working on.

**Feature:** Permission levels (**Priority**: **Must have**)

_As a user, I want permission levels on project progress visibility so that my teams can’t view other teams' projects._

**Scenario 1:** View other teams' tasks

      Given team members want to view another team’s project progress
      
      When they try to access the project

      Then a message is shown stating that they do not have permission to view the project

**Scenario 2:** Grant permissions

      Given a manager wants to select a new team member
   
      When the manager assigns permissions

      And the manager can choose to grant or cancel the team member’s access

      Then the team member will be able to edit or view the project that he was assigned

**Scenario 3:** Transfer task

      Given that the staff member is unable to follow up on the task

      And the manager wants to transfer tasks between staff members

      Then the task will be transfered.

Implementing a "permission level" functionality aligns with the council's overall objectives to improve data security and access control. It allows managers to transfer task between staff members, edit permission level to users and user can only edit or view project progress across their own teams. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.

**Feature:** Responsive web design (**Priority**: **Must have**)

   _As a user, I want the system to be accessible and responsive on various devices (why?)._

**Scenario 1:** User experience across different devices

      Given the user is accessing the tracking system from any device (desktop, tablet, or mobile)
   
      When they open the web application
   
      Then the screen size and the layout should be automatically changed.

**Scenario 2:** Customizable visual settings

      Given the user prefers to change the visual settings of the website
   
      When they visit the website
   
      Then they should have the option to adjust the font size and color to suit their requirement

      
Implementing a "Responsive web design" functionality aligns with the council's overall objectives to improve readibility. It allows user to customizable visual setting and change the layout based on different devices. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.


**Feature:** Filter tasks by period (**Priority**: **Should Have**)

_As a staff member, I would like to filter tasks by period (e.g day, week, month, year) in order to know which tasks are due within a specific timeframe._

 **Scenario 1:** View tasks due today/this week/this month/this year
 
    Given I have tasks with various due dates
    
    When I select the "Day/Week/Month/Year" filter
    
    And choose "Today/This week/This month/This year" as the period
    
    Then I should see only the tasks that are due within the selected time period.

    And tasks outside this time period should not be displayed.
    
**Scenario 2:** View tasks in a custom date range
      
      Given I have tasks with various due dates

      When I select the "Custom Range" filter

      And specify a start and end date for the custom range

      Then I should see only the tasks due in that specified range.

      And tasks outside this range should not be displayed.

**Scenario 3:** Show message when no tasks are due within the selected period
      
      Given I have tasks with various due dates

      When I select a filter for a specific period (e.g., Day, Week, Month, Year)

      And there are no tasks due within the selected period

      Then I should see a message indicating that there are no tasks due in this time period.

      And the task list should be empty.

**Scenario 4:** Clear filter

    Given I have applied a filter to view tasks within a specific period

    When I choose to clear or reset the filter

    Then I should see a list of all my tasks regardless of due date.


Implementing a "filter by period" functionality aligns with the council's overall objectives to improve task management efficiency. It allows users to assess upcoming tasks, helping them prioritise and plan effectively. The priority has been classed as "should have", as it supports user productivity but is not critical to the application's main functionality.

**Feature:** Ability to edit goals (**Priority**: **Must have**)

  _As a staff member I want to have the ability to edit goals because I need to keep track of the targets I have been set._

  **Scenario 1:** Ability to add a goal

    Given I have been allocated a new task

    And I need to keep track of the task
    
    Then I can add a goal related to the task
    
    And further expand it using the SMART details.

  **Scenario 2:** Ability to remove a goal

    Given I have already have a task
    
    When the task has been terminated/finished
    
    Then I need can delete the goal related to the task
    
    And only those on that task can remove this goal.

  **Scenario 3:** Ability to transfer a goal

    Given a staff member already has a goal
    
    And I need to transfer the goal to another staff member
    
    Then I, a manager need to transfer the goal to another staff member
    
    And remove the previous staff member from it.

  Implementing the "ability to edit goals" functionality aligns with the council's overall objectives to improve the structure of the goal tracking software. This will enable better readability for the users, as it will be easier to read the goals and all the requirements once added. It should also improve efficiency when adding new goals, due to a clear structure. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.

**Feature:** Progress bar (**Priority**: **Must have**)

  _As a staff member, I want a progress bar because I want to be able to view the progress of my goals visually._

  **Scenario 1:** Staff members view their progress of their goal completeness visually

    Given I have a goal that is currently being tracked

    And I need to see how far I have progressed in the task
    
    Then I want to be able to see visually how far I have progressed.

  **Scenario 2:** Managers view the progress of their staff visually

    Given my staff all have tasks to complete

    When I want to see how far each staff member has progressed on their goals
    
    Then I need a progress bar to see said progress
    
    And it should only be full if they have completed all set tasks.

  Implementing the "progress bar" feature aligns with the council's overall objectives to improve the user friendliness of the goal tracking software. This will enable better visual aids for the users, and will help them achieve efficient results, as they will be able to see the progression of their goals visually. The priority has been classed as "must have", as it is a requirement requested by the client.

**Feature:** Automatic notification (**Priority**: **Must have**)

_As an administrator, I hope that the system will automatically push the new tasks to the employees' mailboxes._

  **Scenario 1:** Administrator publishes tasks

    Given I have a new project to be released

    When Employees need to be notified of new projects as soon as possible
    
    Then I need to ensure that they can receive task notifications on time

    And they should be notified immediately after the project is released.
    
 **Scenario 2:** Employees receive information

    Given the employee opens their mailbox to check the notification email

    When they understand the task details
    
    Then they log in to the system to confirm the task

    And the system will record the employee's confirmation operation so that the administrator can check the receipt of the task.

  Implementing "automatic system notifications" is a feature customers require. It is a must-have priority, which reduces the burden of administrators to notify employees one by one. Timely and clear notifications allow all employees to synchronize task information and avoid misunderstandings or conflicts caused by delayed or omitted information.

**Feature:** Automated Reminders (**Priority**: **Must Have**)
  
**User story:** _As a manager, I want the system to send automated monthly reminders to project stakeholders so they can update their progress on the project and complete overdue tasks, enabling me to keep track of the monthly status without needing manual reminders._

**Scenario 1:** Send automated reminders on project progress

    Given projects are assigned to respective team members

    And I want them to provide monthly updates on their project progress

    When team members receive the monthly reminders

    Then they are reminded to update their progress on the web application

    And I will be able to track their monthly progress, ensuring project accountability.

**Scenario 2:** Receive automated reminders for overdue tasks

    Given staff members have tasks that are overdue and need to be completed

    And staff members may have forgotten about the due date of these tasks

    When staff member receive an automated reminder for the overdue task

    Then staff member is prompted to complete the task immediately

    And staff member will resume working on the task.

**Scenario 3:** Receive automated reminders when project is transferred to a new user

    Given a project is transferred from an old user to a new user

    When a project is assigned to the new user

    And the new user starts receiving automated reminders for the project

    Then the old user will stop receiving the reminders for the project    
    
    And the old user no longer has access to the project    
    

 Implementing the "automated monthly reminders" feature is essential for maintaining project transparency and accountability. It supports effective project management by prompting team members to provide regular updates snd avoiding project delays, aligning with the client’s objective to ensure an efficient progress tracking tool. This feature is prioritized as a "must have", given its importance to the overall system functionality and its direct contribution to the client’s goal of creating an effective task management system.
 
**Feature:** Subpages (**Priority**: **Must have**)

_As an employee, I want each project to have its own subpage when displayed, avoiding stacking all content on one page._

**Scenario 1:** View project details
        
    Given each project has a lot of detailed information and clear metrics
    
    When as an employee, I want to view or update the details of a project

    Then I want this project to have a subpage to display the details and metrics

    And this keeps the main page simple, making it easier to classify, find and update, avoiding confusion caused by stacking all content together.
  
Page clarity is also one of the client's requirements, so the priority is must-have. The main information of each project will be concentrated on the main page, while detailed project information and specific details will be stored in related subpages. In this way, users can browse and manage each project more systematically, reducing confusion and unnecessary information stacking.



## Project Management
### Risks and Issues

| Risk Type | Risk | Explanation | Mitigation |
| ----------- | ----------- | ----------- | ----------- |
| Group | Someone won’t/can’t do project | If during the project a group member is refusing to do their work, is ignoring messages, or is unable to continue the project for ligitimate reasons | We will remove single points of failure i.e. have multiple people (at least 2) on significant parts of the project. In the event this occurs, we would reduce project scope with the client and we would re-distribute group tasks. |
| Group| Work lost/Out of sync updates | Collaborative project means multiple people working on same thing at the same time. If changes are not saved, people may work on same thing unknowingly, decreasing productivity and wasting time. Losing work would be harmful, pushing back the work flow and schedule. | Ensure that all work is saved and backed up iteratively. Commit all changes to the shared GitHub repository. | 
| Client | No response | We are working with Durham City Council whom will be busy with other commitments and may not have the time to correspond with us. This may pose issues for us for example when we ultimately encounter a problem that requires the client’s input. | Continue efforts to communicate and contact the client. Worst case, speak to module leaders to address the issue. |
| Client | Use a commercial option | If the client decides to use a different solution, one that has already been made and is available online. | Try ensure that we communicate with the client and head in the direction they would like. |
| Software Development | Data security breach | There are different companies that will be using this solution. Companies should only be able to edit their own goals. If another company edited/deleted another companies goals then it could result in a halt in development. | Ensure permissions work so that unauthorised staff members don’t edit other companies goals (only managers have access to edit permissions). |
| Software Development | New updates on frameworks used cause bugs| We plan to use React.js and other open source frameworks like APIs in our solution. These may be updated and our written solution may not be compatible with the new updates. | Make sure that from now we are using updated versions and iteratively check for new updates. |



### Development Approach

As a team, we decided to employ the Agile Scrum model since we felt it best suited us. The Agile model emphasises on delivering high-quality products through teamwork and customer feedback. Scrum is an Agile framework that divides work into manageable tasks (sprints), allowing teams to deliver subtasks of work frequently. We used the sprint approach to finish our first assignment, which was writing the Requirement Documentation. This technique has worked quite well for us because it keeps us informed and ensures that everyone completes their tasks within the time range specified. We meet up weekly to plan our tasks for the week. These tasks are discussed thoroughly and split equally among everyone. A completion date is provided for everyone which is usually before the next practical. This technique has worked exceptionally well for our entire team as we have been on track every week.

There are other popular SDLC models which we could have chosen such as the Waterfall, Spiral, V  and DevOps models. However, we felt the Agile Scrum model was the most ideal for us because it aligned with everyone’s working style and is extremely flexible.The waterfall model follows a sequential approach, which means that one task must be finished before moving on to the next. We found this model to be a little tough to work with because it is rather rigid when it comes to determining which task to accomplish first. We discovered it was far easier to perform tasks that we were experienced doing and had the most information to work with first, therefore a tight sequential approach was not optimal for us. 

The Spiral model combines the waterfall and iterative techniques and includes risk management capabilities. It is appropriate for large-scale and complex projects that require extensive risk management. However, our project is rather simple and short in scope, which involves tracking project progress for a team of DCC staff members. Since risk management is not our primary focus, we believe the spiral model is inappropriate for our project.

The V-model, also known as the Verification and Validation model, is a model in which the process runs sequentially in a V shape. It essentially consists of a testing phase for each development stage, with the requirement to finish one phase before going on to the next. Although including a testing phase early in the development stage is beneficial in detecting problems and ensuring the quality and reliability of our project, we discovered that this model will be quite risky if our client's requirements change in the future because it uses a linear and sequential approach, making it difficult to adapt to changes. It would also be incredibly time-consuming because we would have to undertake testing at each stage, which is not required for our project.

The DevOps model combines **dev**elopment and **op**erations teams to improve the speed, efficiency and quality of software delivery. It involves breaking down the separate divisions between developers, who write and improve code, and operations, who manage the deployment and maintenance, which fosters continuous integration (CI) and continuous delivery (CD). This model is very useful to implement, although not in the early stages of development, where requirements are continuously evolving. It also mainly focuses on automating and stabilising delivery, rather than refining the project requirements and specifications. Since our project involves creating and refining a feature set (in this case, target tracking functionalities), an iterative approach would be much better to use.

In summary, we have decided to choose the Agile Scrum model, as it enables each member of the team to have a specific task to focus on over a period of time, encourages frequent feedback from both the team members and client, which will allow us to gradually build, test and adjust features as insights are given and also ensures the final product is tailored to user needs and is feature-complete within the timeframe.


### Project Schedule
