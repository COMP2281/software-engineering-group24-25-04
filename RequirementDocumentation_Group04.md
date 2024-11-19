# Requirement Documentation

### Overview and Justification

This document is the Requirement Specification for our CERP (Climate Emergency Response Plan) Target Tracking Project.
It has three parts. The first part is an overview, which includes the introduction, project scope, and technical description of the system. The second part is about how we collaborated with the client to gather requirements and list features that the user needed for our proposed solution. Finally, the last part will discuss the risks we may face during the project, the software development life cycle, and our plan to make it more organised.

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

As previously mentioned, the current target-tracking system is an Excel spreadsheet. As a platform, Excel is limited in its features for advanced multi-project management, deeming it insufficient for our client’s needs. Multi-user collaboration on Excel is limited, there is no way of allowing users to see real-time changes, increasing the risk of losing data integrity. There is a way to set password protection, but managing user permissions is less flexible, not supporting secure, role-based access on specific targets.

The spreadsheet itself lacks clarity: the tabular format is not suitable for tracking progress on multiple, complex goals, and makes it hard for users to focus on one specific task. Excel does allow users to visualise data as charts, but this functionality is limited and redundant for our client. Unlike dedicated project management software, Excel does not provide a clear visual representation for the amount of progress on each goal, and there is no way of automating reminders.

We conducted research into solutions that we could use:

**1. Notion** is a commercial website that is user friendly, collaborative and cost-efficient. It provides free to use templates, which can be convenient for companies, and provides progress bars and status mode features, allowing efficient tracking of goals. We plan to take inspiration from this feature and implement the use of progress bars in our final solution. However, Notion can be overwhelming to use due to its abundance of features, particularly ones that will not be needed for our client, and certain templates, that may be suited to our client, have a fee.

**2. Jira** is a project management and issue tracking tool, that is widely used in software development and IT projects. It allows the management of various aspects of a project, including task assignment and progress tracking, using different charts for tracking progress. However, the cost is relatively high and increases as the number of users grow. The interface is also complex, which opposes our objective to create a user-friendly solution for our client.

**3. Non-commercial options: app or website**. These both allow tailored customisation towards our client. Having an app, uses a local database, which allows consistent, fast load times, and once downloaded, it can be used anywhere. Another feature apps offer is push notifications. But after discussions with our client, this is not required. Having a website, however, is favoured by our client, as per the brief. Websites can be loaded on any device, provided there is an internet connection and does not require downloading. It allows access from a range of platforms, again requested in the brief. However, non-commercial options take time to learn the specific skills required and take time to build the solution. 

Following our analysis of the current system and research on alternative solutions, we concluded that the new system, to be built, should be a React.js web application. Using React.js will allow for a customisable, dynamic, and responsive user interface, allowing us to create components to display the targets in a user-friendly way. We shall take inspiration from commercial solutions to help us design the features that will allow the users to visualise each goal without the complexity the current system, and the other alternative solutions we researched, hold.

In the backend, we will use the REST API with Node.js to handle requests to the server and store all changes made to each target data in a secure database. To incorporate user permissions, we plan to create a login system where each staff member has the ability to create an account using their Outlook email. Their details will also be securely stored in this database, and we will implement robust data management, ensuring data integrity and security is maintained and data redundancy is minimised. 

We shall use another API to send monthly emails to each person about the targets they are working on. We shall liaise with Durham City Council to confirm whether we have the permission to do so.

## Solution Requirements
### Requirements Elicitation

To elicit the client’s requirements and ensure we streamlined our focus on the new system to best align with their needs, we carefully read the brief and conducted several meetings to coordinate the specific features they wanted.

As a team we decomposed the brief and devised a series of discussion points to clarify things addressed in the document, ensuring we understood fully what it was that they were asking of us. One challenge we faced upon receiving the project brief was related to “permission levels”. Initially, we were unsure what our client meant by this and required further elaboration. Another challenge we faced was understanding the goals that they would be tracking because there was no evidence given of what they currently track.

We organised a meeting to help us clarify our confusion, and we now understand that the implementation of permission levels meant that each company would have the permission to see all targets, but only the permission to edit their own targets. We were also given some examples of what they currently track to further our understanding of the purpose of this new system to be built.

In our internal meetings, we analysed the current spreadsheet tracking system, provided by our client following our last meeting with them, by breaking it down and explaining in detail how their current system works. Upon reading their spreadsheet, we concluded that it was confusing: there were too many categories, missing data, confusing deadlines, and a lack of consistency in measuring goals. 

We arranged another meeting in which we asked our client to demonstrate how users would utilise the current system while encouraging her to explain any issues they had with it. This was incredibly helpful when designing the requirement specification, as we gained an insight into how the current system was being used, and how the new system could improve their user experience.

Our client went through the spreadsheet step by step and explained the headings, so we are now aware of which columns are essential, and which are optional as well as which column should be used for the goal tracking.

A specific feature our client requested was the implementation of progress bars because users struggled with the layout of the Excel spreadsheet: The lack of visual representation of progress and focus on specific tasks decreased productivity and ease for the users. Another feature they asked for was automated reminders to prompt staff members to update their work.

We researched existing solutions to identify other potential features that could be added to fulfil our client's requirements. After brainstorming a few ideas, we reached a mutual decision on which features were the most useful and required for our web application. We presented those features in our next meeting with our client to seek feedback.

Following our own research, and keeping our client’s requests and needs in mind, we included a login system in our requirements specification to implement the permission levels. We proposed a feature to allow users to search for, filter, and sort tasks, to improve productivity and navigation of targets, and the client supported this.

We gathered from our elicitation that our requirements specification should focus on improving data integrity and security on tasks and improving the user experience to help focus and boost productivity.


### Behavioural Requirements

**Feature:** Login system (**Priority**: **Must have**)

_As a user, I want to be able to create an account so that I can securely log in to the system that is tailored towards me._

**Scenario 1:** User tries to log in to system without an account

      Given a staff member attempts to log in to system with no account details
      
      When they try to log in
      
      Then a message tells the user that they need to fill in the fields OR that they need to create an account
      
**Scenario 2:** User creates an account

      Given a staff member wants to create an account to be able to log in
      
      When they enter their email and secure password
      
      Then an account is created for the user, and a message tells them they are ready to log in

**Scenario 3:** User logs in to system with the correct account details

      Given a staff member, with an account, wants to log in to the system
      
      When they log in with the correct account details
      
      Then they are taken to the home page

**Scenario 4:** User logs in to the system with the incorrect account details and this attempt is less than three

      Given a staff member attempts to log in to the system
      
      When they log in with the incorrect account details
      
      AND this attempt is less than 3
      
      Then they are NOT taken to the home page and a message prompts them to re-enter their details OR create an account if they don't already have one

**Scenario 5:** User logs in to the system with the incorrect account details and this is their third attempt

      Given a staff member attempts to log in to the system
      
      When they log in with the incorrect account details
      
      AND this is attempt 3
      
      Then they are NOT taken to the home page, a message prompts the user to reset their password, and a link is sent to their email to do so

Implementing a secure login system feature for the new system aligns with the council’s objective to enhance data security and enables the ability to achieve the high priority feature of permission levels.  The priority for the login system feature has been classed as “must have” because it is vital for keeping the target tracking system secure and tailored to each staff member, allowing increased data integrity and work productivity.

**Feature:** Permission levels (**Priority**: **Must have**)

_As a user, I want permission levels on the project so that my team cannot view other teams' projects in order to improve data security issue._

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

      Then the task will be transferred.

Implementing a "permission level" functionality aligns with the council's overall objectives to improve data security and access control. It allows managers to transfer task between staff members, edit permission level to users and user can only edit or view project progress across their own teams. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.

**Feature:** Responsive web design (**Priority**: **Must have**)

   _As a user, I want the system to be accessible and responsive on various devices in order to prevent user need to do extra work to read the content._

**Scenario 1:** User experience across different devices

      Given the user is accessing the tracking system from any device (desktop, tablet, or mobile)
   
      When they open the web application
   
      Then the screen size and the layout should be automatically changed.

**Scenario 2:** Customizable visual settings

      Given the user prefers to change the visual settings of the website
   
      When they visit the website
   
      Then they should have the option to adjust the font size and colour to suit their requirement

      
Implementing a "Responsive web design" functionality aligns with the council's overall objectives to improve readability. It allows user to customizable visual setting and change the layout based on different devices. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.


**Feature:** Filter tasks by period (**Priority**: **Should Have**)

_As a staff member, I would like to filter tasks by period (e.g. day, week, month, year) in order to know which tasks are due within a specific timeframe._

 **Scenario 1:** View tasks due today/this week/this month/this year
 
    Given I have tasks with various due dates
    
    When I select the "Day/Week/Month/Year" filter
    
    And choose "Today/This week/This month/This year" as the period
    
    Then I should see only the tasks that are due within the selected period.

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

      Then I should see a message indicating that there are no tasks due in this period.

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

    Given I already have a task
    
    When the task has been terminated/finished
    
    Then I can delete the goal related to the task
    
    And only those on that task can remove this goal.

  **Scenario 3:** Ability to edit a goal

    Given I already have a task
    
    And the goal needs amending
    
    Then I can edit the goal with the relevant updates
    
    And only those on that task can edit this goal.

  **Scenario 4:** Ability to transfer a goal

    Given a staff member already has a goal
    
    And I need to transfer the goal to another staff member
    
    Then I, a manager, need to transfer the goal to another staff member
    
    And remove the previous staff member from it.

  Implementing the "ability to edit goals" functionality aligns with the council's overall objectives to improve the structure of the goal tracking software. This will enable better readability for the users, as it will be easier to read the goals, and all the requirements once added. It should also improve efficiency when adding new goals, due to a clear structure. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.

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


**Feature:** Automated reminders (**Priority**: **Must Have**)
  
 _As a manager, I want the system to send automated monthly reminders to project stakeholders so they can update their progress on the project and complete overdue tasks, enabling me to keep track of the monthly status without needing manual reminders._

**Scenario 1:** Send automated reminders on project progress

    Given projects are assigned to respective team members

    And I want them to provide monthly updates on their project progress

    When team members receive the monthly reminders

    Then they are reminded to update their progress on the web application

    And I will be able to track their monthly progress, ensuring project accountability.

**Scenario 2:** Receive automated reminders for overdue tasks

    Given staff members have tasks that are overdue and need to be completed

    And staff members may have forgotten about the due date of these tasks

    When staff member receives an automated reminder for the overdue task

    Then staff member is prompted to complete the task immediately

    And staff member will resume working on the task.

**Scenario 3:** Receive automated reminders when project is transferred to a new user

    Given a project is transferred from an old user to a new user

    When a project is assigned to the new user

    And the new user starts receiving automated reminders for the project

    Then the old user will stop receiving the reminders for the project    
    
    And the old user no longer has access to the project    
    

 Implementing the "automated monthly reminders" feature is essential for maintaining project transparency and accountability. It supports effective project management by prompting team members to provide regular updates and avoiding project delays, aligning with the client’s objective to ensure an efficient progress tracking tool. This feature is prioritized as a "must have", given its importance to the overall system functionality and its direct contribution to the client’s goal of creating an effective task management system.
 
**Feature:** Clear and intuitive user interface (**Priority**: **Must have**)

_As a user, I want the page to be concise and clear because a neat page can make the operation more intuitive and more visually comfortable, which can not only improve my work efficiency but also make me feel happy during use._

**Scenario 1:** Subpage
        
    Given each project has a lot of detailed information and clear metrics
    
    When as an employee, I want to view or update the details of a project

    Then I want this project to have a subpage to display the details and metrics

    And this keeps the main page simple, making it easier to classify, find and update, avoiding confusion caused by stacking all content together.

  **Scenario 2:** Icon function
  
    Given a user is managing tasks in a task management system
    
    When the user interacts with the task list
    
    And uses icons to perform quick actions such as editing, completing, or deleting tasks
    
    Then the user can intuitively understand and execute actions without needing additional instructions
    
    And the page remains clean and organized with minimal text clutter
    
**Scenario 3:** Fold and expand function

    Given a project has a large number of files

    When users need to view detailed information
    
    And the user clicks an "expand" button or icon to reveal more details
    
    Then the additional information is displayed below 
    
Page clarity is also one of the client's requirements, so the priority is "must have". The main information of each project will be concentrated on the main page, while specific details of project will be stored in related subpages. In this way, users can browse and manage each project more systematically, reducing confusion and unnecessary information stacking.



## Project Management
### Risks and Issues

As a group we conducted a risk assessment to discern the many risks or issues that could occur throughout our project. We evaluated the probability of each occurring and the impact they would have on our project, scoring each with a risk score to help us prioritise mitigation methods.

We identified two risks and issues that could occur within our group. The first is that a group member either cannot or will not contribute to the project. They may be refusing to do their work, ignoring messages, or is unable to continue the project for legitimate reasons. The probability of this happening is possible, and it would have a high impact on our project. For this reasoning we gave it a risk score of 9. To mitigate this risk, we have planned to remove single points of failure, i.e. have multiple people (at least 2) on significant parts of the project. Furthermore, if this were to occur, we would reduce the project scope with the client, and we would re-distribute group tasks. 

The second group issues identified is that we lose our work, or work is lost from out of sync updates. As this is a collaborative project, this means multiple people will be working on same thing at the same time. If changes are not saved, people may work on same thing unknowingly, decreasing productivity and wasting time. Losing work would be harmful and would push the workflow and schedule back. The probability of this is very probable and has a very high impact. Therefore, we gave this a risk score of 25. To mitigate this risk, we will ensure that all work is saved and backed up iteratively. We will commit all changes to the shared GitHub repository.

We also identified two risks that could occur with our client. The first is that we suddenly get no response from our client. Our client, Durham City Council, will likely be busy with other commitments and may not have the time to correspond with us. This may pose issues for us, for example when we ultimately encounter a problem that requires the client’s input. It will be a rare probability that this happens, but if it does it would be of high impact to our project. For this reason, we have given it a risk score of 4. To mitigate this, we will continue efforts to communicate and contact the client, and in the worst case, we will speak to our module leaders to address the issue.

Our second risk that could occur with the client is that they decide to use a commercial option, that has already been made and is available online, instead of our solution. This again is or rare probability but would only have a very low impact for us. Therefore, we have given it a risk score of 1. To reduce the likelihood of this occurring we will ensure that we communicate with the client and head in the direction they would like.

The final types of risks that could develop in our project are related to software development. One risk that we identified was the risk of a data security breach. The reason for this is because there are different companies that will be using this solution. Companies should only be able to edit their own goals. If another company edited/deleted other companies' goals, then it could result in a halt in development. Although the probability of this happening is unlikely, the impact would be high. This resulted in us giving it a risk score of 8. To mitigate the chance this occurs we will ensure that the permissions work so that unauthorised staff members do not edit other companies' goals (only managers will have access to edit the permissions).

The second software development risk that could arise is that the frameworks we plan to use may bring out updates that could result in bugs in our code. We plan to use React.js and other open-source frameworks like APIs in our solution. These may be updated, and our written solution may not be compatible with the new updates. The probability that this occurs is probable, and the impact would be medium. We gave this a risk score of 12. To mitigate this risk, we will ensure that from now, we are using updated versions and iteratively check for new updates.


### Development Approach

We have decided to employ the Agile Scrum methodology for our project. This approach emphasises on delivering high-quality products through teamwork and customer feedback. It divides work into manageable tasks (sprints), allowing teams to deliver subtasks of work frequently. For example, we used the sprint approach to complete the requirement documentation, which has proven effective in keeping everyone informed and ensuring tasks are completed within the specified timeframe.


This section delves into the advantages of using this methodology for our project and compares it with other models, including Waterfall, Spiral, V, and DevOps.


**1. Adaptation and Flexibility:** This model supports gradual development, testing, and adjustment of features based on client insights. It ensures that we can easily accommodate changes to project requirements while refining the target tracking functionalities. Unlike the rigid Waterfall model, which requires sequential task completion and limits adaptability, Agile is dynamic and enables us to prioritise tasks where we have expertise and clearer information. Compared to the V model, which incorporates testing at every stage but can be time-consuming and restrictive, Agile is better suited for projects where flexibility is key. 


**2. Increased Motivation and Team Satisfaction:** Agile encourages personal responsibility by assigning tasks based on individual capabilities with clear deadlines. This allows members to feel more ownership in the project, leading to greater motivation and satisfaction. In contrast, the Spiral model, suited for large, complex projects with extensive risk management needs, is unnecessary for our simple and short-scoped project focused on tracking progress for a team of DCC staff. Since risk management is not our primary focus, using the Spiral model could overcomplicate the process and reduce team motivation.


**3. Increased Client-Team Collaboration:** This model emphasises continuous feedback through periodic meetings with our client, enabling the team to clarify specifications and align the final product with user needs within the timeframe. In contrast, the Waterfall model involves minimal client interaction after the initial requirements phase, increasing the risk of misaligned outcomes. Similarly, the V model prioritises testing over iterative feedback, making it less collaborative.


**4. Creativity and Innovation:** Agile fosters creativity by encouraging idea generation and continuous development through collaboration, where new quality-improving solutions can always be discussed. Unlike DevOps, which emphasises automation and delivery speed, Agile is better suited for early stages where requirements are still evolving, aligning with our project's focus on refining specifications.


In summary, we have chosen the Agile Scrum methodology, as it enables each team member to focus on a specific task over a period, encourages frequent feedback from both the team members and client, and ensures the final product is tailored to user needs and is feature-complete within the timeframe.


### Project Schedule
The Gantt chart below shows the academic deadlines and the project's development schedule.
On average, we work on software engineering for five hours a week, plus any additional time that is voluntarily contributed. We also have weekly group meetings for an hour to review our progress. To ensure we are achieving our client's expectations, we will also hold client meetings every three weeks.

Since Scrum is our preferred software development cycle approach, sprints are crucial for allowing teams to work in short cycles. Sprints ensure quick adaptability to changes and ongoing improvement of the product. The sprint dates are only approximate and may be altered in the end.

**Self-imposed deadlines**
 
- Finish Project Introduction (Section 1 of the Requirement Documentation) - 1st November
- Finish Requirements (Section 2 of the Requirement Documentation) - 12nd November
- Finish Project Management (Section 3 of the Requirement Documentation) - 20th November
- Finish Requirement Documentation - 21st November
- Finish test plan - 7th February (Sprint #2)
- Finish CERP (Climate Emergency Response Plan) Target Tracking Project - 6th March (Sprint #4)
![Visio](<Visio_00.png>)


