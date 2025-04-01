# Project Management System

This project is a task and project management system designed to help teams manage their projects, members, tasks, and activities efficiently.

## Features

- **Project Management**: Create, read, update, and delete projects.
- **Member Management**: Manage team members with CRUD operations.
- **Task Management**: Create and manage tasks associated with projects.
- **Activity Tracking**: Register activities that relate projects, members, and tasks, including start and end dates.

## File Structure

```
project-management
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── projectController.js
│   │   ├── memberController.js
│   │   ├── taskController.js
│   │   └── activityController.js
│   ├── models
│   │   ├── projectModel.js
│   │   ├── memberModel.js
│   │   ├── taskModel.js
│   │   └── activityModel.js
│   ├── routes
│   │   ├── projectRoutes.js
│   │   ├── memberRoutes.js
│   │   ├── taskRoutes.js
│   │   └── activityRoutes.js
│   └── database
│       └── dbConfig.js
├── package.json
├── README.md
└── .gitignore
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd project-management
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the API endpoints for managing projects, members, tasks, and activities.

## API Endpoints

- **Projects**
  - `POST /projects`: Create a new project
  - `GET /projects`: Retrieve all projects
  - `PUT /projects/:id`: Update a project
  - `DELETE /projects/:id`: Delete a project

- **Members**
  - `POST /members`: Create a new member
  - `GET /members`: Retrieve all members
  - `PUT /members/:id`: Update a member
  - `DELETE /members/:id`: Delete a member

- **Tasks**
  - `POST /tasks`: Create a new task
  - `GET /tasks`: Retrieve all tasks
  - `PUT /tasks/:id`: Update a task
  - `DELETE /tasks/:id`: Delete a task

- **Activities**
  - `POST /activities`: Register a new activity
  - `GET /activities`: Retrieve all activities
  - `PUT /activities/:id`: Update an activity
  - `DELETE /activities/:id`: Delete an activity

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.