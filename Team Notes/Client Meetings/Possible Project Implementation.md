# Problem Statement
**Current System**: Progress is tracked in Excel on Microsoft Teams. It’s manually updated with reminders, and sharing visuals requires adjustments.

### Challenges:
- It is difficult to track progress visually.
- Manual reminders for updates.
- Confusion over who is responsible for tasks.
- Risk of duplicating efforts.
  
### Product/Service Requirements
The solution must:
- Allow users to focus on their own targets and update progress regularly.
- Prevent users from deleting others' data.
- Be compatible across different devices.
- Provide clear visuals of progress.
- Include a periodic reminder feature.
- Possibly be web-based.

### Implementation Steps

#### Design a Web-Based Solution:
- Why? A web-based application ensures accessibility across different devices and allows easy updates. Consider using frameworks like React (for the front end) and Node.js or Python (for the back end).

#### User Authentication and Role Management:
- Why? To prevent unauthorized data deletion. Implement a system where users have different roles (e.g., admin, user) with specific permissions. Use OAuth or another secure authentication method.

#### Progress Tracking and Visual Reporting:
- Why? DCC needs clear, accessible progress visuals. Incorporate dashboards and charts using libraries like D3.js or Chart.js. Display progress towards net zero goals in an intuitive format.

#### Monthly Reminder Feature:
- Why? To automate reminders for updates. This could be achieved via scheduled emails or notifications using services like SendGrid or Mailchimp API. Could potentially use Nodemailer via Node.js

#### Collaboration Features:
- Why? Multiple stakeholders are involved. Allow for comments or task assignments within the app to avoid confusion over responsibilities.

#### Data Security and Version Control:
- Why? To avoid accidental deletion and track changes. Implement a version control system that tracks edits and allows rollbacks. Use secure cloud storage for data persistence, e.g., AWS or Azure.

Here are detailed steps to implement each component of the solution for Durham County Council’s (DCC) net zero target tracking project:

**1.Design a Web-Based Solution**

**  Steps:**
   - Choose a Tech Stack:
     - Frontend: Use React.js or Angular for building a dynamic, user-friendly interface.
     - Backend: Use Node.js (Express framework) or Python (Django/Flask) for the server-side logic.
     - Database: Use PostgreSQL or MongoDB to store user data, progress updates, and tracking information.
     - Hosting: Consider using cloud platforms like AWS, Heroku, or Azure for scalability.
   
   - Set up Development Environment:
     - Install necessary tools like Node.js, a code editor (VS Code), Git for version control, and Docker for containerization (optional).
   
   - Create a Basic Application :
     - Set up routes and templates for main pages (e.g., login, dashboard, project details, etc.).
     - Use CSS frameworks like Bootstrap or Material UI for quick, responsive design.
 2. User Authentication and Role Management

   Steps:
   - User Registration & Login:
     - Implement a registration system with password encryption (e.g., bcrypt for hashing).
     - Use a third-party authentication service like OAuth2 for secure login with Google, Facebook, or Microsoft accounts.
   
   - Role-Based Access Control (RBAC):
     - Assign roles like admin, user, or manager during user creation.
     - Define permissions for each role:
       - Admin: Full access, including managing users and projects.
       - User: Can view and update their own targets but cannot delete others’ data.
   
   - Session Management:
     - Use JSON Web Tokens (JWT) for secure authentication and session handling.
     - Implement session timeouts and automatic logout after inactivity.

3. Progress Tracking and Visual Reporting

   Steps:
   - Data Collection:
     - Create forms where users can input updates on their progress toward targets.
     - Store this data in a relational or NoSQL database, categorizing it by project, user, and timeframe.
   
   - Visual Reports:
     - Use libraries like Chart.js, D3.js, or Google Charts to generate visual progress reports (e.g., bar charts, line graphs).
     - Integrate a dashboard to display:
       - Overall progress towards net zero goals.
       - Individual project status.
       - Task completion rates by different teams/users.
   
   - Milestone Tracking:
     - Highlight key project milestones, deadlines, and completion rates.

4. Monthly Reminder Feature
   Steps:
   - Automated Emails/Notifications:
     - Implement a cron job scheduler (e.g., node-cron for Node.js or Celery for Python) to send out monthly reminders.
     - Use a service like Nodemailer,  to send emails automatically to users. 
   
   - Reminder Content:
     - Customize the email content with dynamic fields such as user name, project name, and progress summary.
   
   - In-App Notifications:
     - Implement a notification system within the app that alerts users on their dashboard about upcoming deadlines or incomplete tasks.

5. Collaboration Features
Steps:
   - Task Assignment:
     - Allow admins or managers to assign tasks to specific users.
     - Notify users when they are assigned new tasks via email and in-app notifications.
   
   - Comments/Updates:
     - Add a comment feature to project or task pages where users can leave updates, suggestions, or concerns.
     - Ensure that comments are tagged with timestamps and author details.
   
   - Real-Time Updates:
     - Use WebSockets or polling mechanisms (e.g., Socket.io for Node.js) to display real-time updates to other team members viewing the same project page.

6. Data Security and Version Control
   Steps:
   - Audit Trail:
     - Track all changes made to progress data (create, update, delete) with user information and timestamps.
     - Store these logs in a separate database table for auditing purposes.
   
   - Version Control:
     - Implement a versioning system for project progress updates. Each update to a project should be saved as a new version, allowing users to see a history of changes and revert if necessary.
     - Use a branching strategy for tracking versions (similar to Git branches), where each update creates a new version without overwriting the old one.
   
   - Cloud Storage and Backup:
     - Use a cloud service (AWS S3, Google Cloud Storage) to securely store all project files and data.
     - Set up regular automated backups to ensure data safety in case of any unexpected issues.
   
   - Data Encryption:
     - Ensure all sensitive data, especially user information and project details, is encrypted at rest (in the database) and in transit (using HTTPS and SSL certificates).
