# Requirement Documentation

### Overview and Justification

This document is the Requirement Specification for our CERP (Climate Emergency Response Plan) Target Tracking Project.
It has three parts. The first part is an overview, which includes the introduction, project scope, and technical description of the system. The second part is about how we collaborated with the client to gather requirements and list features that the user needed for our proposed solution. Finally, the last part will discuss the risks we may face during the project, the software development life cycle, and our project schedule.

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

**3. Non-commercial options: app or website** These both allow tailored customisation towards our client. Having an app, uses a local database, which allows consistent, fast load times, and once downloaded, it can be used anywhere. Another feature apps offer is push notifications. But after discussions with our client, this is not required. Having a website, however, is favoured by our client, as per the brief. Websites can be loaded on any device, provided there is an internet connection and does not require downloading. It allows access from a range of platforms, again requested in the brief. However, non-commercial options take time to learn the specific skills required and take time to build the solution. 

Following our analysis of the current system and research on alternative solutions, we concluded that the new system, to be built, should be a web application. We decided to use React.js because we looked at numerous frameworks, such as Angular and Python Django, but we concluded that this JavaScript framework would be most suitable for the new system. React uses a virtual DOM to efficiently update and render only the parts of the user interface that have changed, allowing for high performance and a positive user experience. We chose it over React Native since that is more suited to mobile applications, whereas we plan to create a web application. Using React.js will allow for a customisable, dynamic, and responsive user interface, allowing us to create components to display the targets in a user-friendly way. We shall take inspiration from commercial solutions to help us design the features that will allow the users to visualise each goal without the complexity the current system, and the other alternative solutions we researched, hold.

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

_As a manager, I want permission levels on the project so that my team cannot view other teams' projects in order to improve data security issue._

**Scenario 1:** View other teams' tasks

      Given a staff member want to view another team’s project progress
      
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

Implementing a "permission level" functionality aligns with the council's overall objectives to improve data security and access control. It allows managers to transfer task between staff members, edit permission level to staff and staff can only edit or view project progress across their own teams. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.

**Feature:** Responsive web design (**Priority**: **Must have**)

   _As a user, I want responsive web deisgn on the project so the system is accessible and responsive on various devices._

**Scenario 1:** User experience across different devices

      Given the user is accessing the tracking system from any device (desktop, tablet, or mobile)
   
      When they open the web application
   
      Then the screen size and the layout should be automatically changed.

**Scenario 2:** Customizable visual settings

      Given the user prefers to change the visual settings of the website
   
      When they visit the website
   
      Then they should have the option to adjust the font size and colour to suit their requirement

      
Implementing a "Responsive web design" functionality aligns with the council's overall objectives to improve readability. It allows user to customizable visual setting and change the layout based on different devices. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.


**Feature:** Filter tasks by period (**Priority**: **Should have**)

_As a staff member, I would like to filter tasks by period (e.g. day, week, month, year) in order to know which tasks are due within a specific timeframe._

 **Scenario 1:** View tasks due today/this week/this month/this year
 
    Given a staff member has tasks with various due dates
    
    When they select the "Day/Week/Month/Year" filter
    
    And choose "Today/This week/This month/This year" as the period
    
    Then they should see only the tasks that are due within the selected period.

    And tasks outside this time period should not be displayed.
    
**Scenario 2:** View tasks in a custom date range
      
      Given a staff member has tasks with various due dates

      When they select the "Custom Range" filter

      And specify a start and end date for the custom range

      Then they should see only the tasks due in that specified range.

      And tasks outside this range should not be displayed.

**Scenario 3:** Show message when no tasks are due within the selected period
      
      Given a staff member has tasks with various due dates

      When they select a filter for a specific period (e.g., Day, Week, Month, Year)

      And there are no tasks due within the selected period

      Then they should see a message indicating that there are no tasks due in this period.

      And the task list should be empty.

**Scenario 4:** Clear filter

    Given a staff member has applied a filter to view tasks within a specific period

    When they choose to clear or reset the filter

    Then they should see a list of all their tasks regardless of due date.


Implementing a "filter by period" functionality aligns with the council's overall objectives to improve task management efficiency. It allows users to assess upcoming tasks, helping them prioritise and plan effectively. The priority has been classed as "should have", as it supports user productivity but is not critical to the application's main functionality.

**Feature:** Ability to edit goals (**Priority**: **Must have**)

  _As a staff member I want to have the ability to edit goals because I need to keep track of the targets I have been set._

  **Scenario 1:** Ability to add a goal

    Given a staff member has been allocated a new task

    And needs to keep track of the task
    
    Then the staff member can add a goal related to the task
    
    And further expand it using specific details to the task.

  **Scenario 2:** Ability to remove a goal

    Given the staff member already has a task
    
    When the task has been terminated/finished
    
    Then the staff member can delete the goal related to the task
    
    And only those on that task can remove this goal.

  **Scenario 3:** Ability to edit a goal

    Given a staff member has already been assigned a task
    
    And the goal needs amending
    
    Then the staff member can edit the goal with the relevant updates
    
    And only those on that task can edit this goal.

  **Scenario 4:** Ability to transfer a goal

    Given a staff member already has a goal
    
    And the staff member needs to transfer the goal to another staff member
    
    Then a manager can transfer the goal to another staff member
    
    And remove the previous staff member from it.

  Implementing the "ability to edit goals" functionality aligns with the council's overall objectives to improve the structure of the goal tracking software. This will enable better readability for the users, as it will be easier to read the goals, and all the requirements once added. It should also improve efficiency when adding new goals, due to a clear structure. The priority has been classed as "must have", as it is essential for the purpose of a goal tracking system, therefore it is crucial to the functionality of the application.

**Feature:** Progress bar (**Priority**: **Must have**)

  _As a staff member, I want a progress bar because I want to be able to view the progress of my goals visually._

  **Scenario 1:** Staff members view their progress of their goal completeness visually

    Given a staff member has a goal that is currently being tracked

    And they need to see how far they have progressed in the task
    
    Then they will be able to see visually how far I have progressed.

  **Scenario 2:** Managers view the progress of their staff visually

    Given a managers team all have tasks to complete

    When the manager wants to see how far each staff member has progressed on their goals
    
    Then the manager will see a progress bar to see the staff members progress
    
    And it should only be full if they have completed all set tasks.

  Implementing the "progress bar" feature aligns with the council's overall objectives to improve the user friendliness of the goal tracking software. This will enable better visual aids for the users, and will help them achieve efficient results, as they will be able to see the progression of their goals visually. The priority has been classed as "must have", as it is a requirement requested by the client.
  
**Feature:** Automated reminders (**Priority**: **Must have**)
  
 _As a manager, I want the system to send automated monthly reminders to project stakeholders so they can update their progress on the project and complete overdue tasks._

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

**Scenario 3:** Receive automated reminders when project is transferred to a new staff member

    Given a project is transferred from an old staff member to a new staff member

    When a project is assigned to the new staff member

    And the new staff member starts receiving automated reminders for the project

    Then the old staff member will stop receiving the reminders for the project    
    
    And they will no longer has access to the project    
    

 Implementing the "automated monthly reminders" feature is essential for maintaining project transparency and accountability. It supports effective project management by prompting team members to provide regular updates and avoiding project delays, aligning with the client’s objective to ensure an efficient progress tracking tool. This feature is prioritized as a "must have", given its importance to the overall system functionality and its direct contribution to the client’s goal of creating an effective task management system.
 
**Feature:** Clear and intuitive user interface (**Priority**: **Must have**)

_As a user, I want the system design to be clear and intuitive so that it is easy to use and allows me to focus my full attention on my work._

**Scenario 1:** Viewing target details
        
    Given a user wants to view details of a target
    
    When they click on the header for the target
    
    Then a subpage pops up to display, in a clear and concise manner, the details of said target

    
**Scenario 2:** User clicks bin icon to remove task

    Given a user is on the system
    
    When the user is editing a task
    
    And the user wants to delete a task
    
    Then the user can click the bin icon to delete the goal


Implementing a “clear and intuitive user interface” for the new system to be built, is a vital feature, and aligns with the client’s overall objective to increase productivity and ease when tracking targets. The priority has been classed as “must have” due to our elicitation of our client’s requirement for a more user-friendly system. The scenarios given, demonstrate that our system shall include features such as subpages and icons that will be clear and intuitive to use.




## Project Management
### Risks and Issues

As a group we conducted a risk assessment to discern the many risks or issues that could occur throughout our project. We evaluated the probability of each occurring and the impact they would have on our project, scoring each with a risk score to help us prioritise mitigation methods.

Risk: Lose our work, or work is lost from out of sync updates
Explanation: As this is a collaborative project, this means multiple people will be working on same thing at the same time. If changes are not saved, people may work on same thing unknowingly, decreasing productivity and wasting time. Losing work would be harmful and would push the workflow and schedule back
Probability: Very Probable
Impact: Very High
Risk Score: 25
Risk Type: Group
Mitigation: We will ensure that all work is saved and backed up iteratively. We will commit all changes to the shared GitHub repository.

Risk: Frameworks we use bring out updates that result in bugs in our code
Explanation: We plan to use React.js and other open-source frameworks like APIs in our solution. These may be updated, and our written solution may not be compatible with the new updates.
Probability: Probable
Impact: Medium
Risk Score: 12
Risk Type: Software Development
Mitigation: We will ensure that from now, we are using updated versions and iteratively check for new updates.

Risk: Group member either cannot or will not contribute to the project
Explanation: They may be refusing to do their work, ignoring messages, or is unable to continue the project for legitimate reasons.
Probability: Possible
Impact: High
Risk Score: 9
Risk Type: Group
Mitigation: We have planned to remove single points of failure, i.e. have multiple people (at least 2) on significant parts of the project. Furthermore, if this were to occur, we would reduce the project scope with the client, and we would re-distribute group tasks

Risk: Data Security Risk
Explanation: There are different companies that will be using this solution. Companies should only be able to edit their own goals. If another company edited/deleted other companies' goals, then it could result in a halt in development.
Probability: Unlikely
Impact: High
Risk Score: 8
Risk Type: Software Development
Mitigation: We will ensure that the permissions work so that unauthorised staff members do not edit other companies' goals (only managers will have access to edit the permissions).

Risk: Get no response from our client
Explanation: Our client, Durham City Council, will likely be busy with other commitments and may not have the time to correspond with us. This may pose issues for us, for example when we ultimately encounter a problem that requires the client’s input.
Probability: Rare
Impact: High
Risk Score: 4
Risk Type: Client
Mitigation: We will continue efforts to communicate and contact the client, and in the worst case, we will speak to our module leaders to address the issue.

Risk: The client decides to use a commercial option
Explanation: Our client uses a solution that is available online instead of our solution.
Probability: Rare
Impact: Very Low
Risk Score: 1
Risk Type: Client
Mitigation: We will ensure that we communicate with the client and head in the direction they would like.




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
On average, we work on software engineering for five hours a week during term date, plus any additional time that is voluntarily contributed. We also have weekly group meetings for an hour to review our progress. To ensure we are achieving our client's expectations, we will also hold client meetings every three weeks.

Since Scrum is our preferred software development cycle approach, sprints are crucial for allowing teams to work in short cycles. Sprints ensure quick adaptability to changes and ongoing improvement of the product. The sprint dates are only approximate and may be altered in the end.

**Self-imposed deadlines**
 
- Finish Project Introduction (Section 1 of the Requirement Documentation) - 1st November
- Finish Requirements (Section 2 of the Requirement Documentation) - 12nd November
- Finish Project Management (Section 3 of the Requirement Documentation) - 20th November
- Finish Requirement Documentation - 21st November
- Finish test plan - 7th February 
- Finish Technical Report - 14th March 
- Product Handover - 1st May
  
For Sprints 1 and 2, it's the pre-preparation stage. We will learn how to use React, design the website's specifications, and divide the Frontend and Backend. During the coding stage, which runs from sprint 3 to sprint 6, we will code all functional prototypes and complete the database for the backend. For the final stage in sprint 7, we need to test all features on the web application, fix the functionalities that do not work, and test.




![Visio](<Visio1_00.png>)


