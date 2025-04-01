# Task Manager

This is a simple task management application built with Node.js and Express. It allows users to create, read, update, and delete tasks.

## Project Structure

```
task-manager
├── src
│   ├── app.js               # Entry point of the application
│   ├── tasks
│   │   └── taskController.js # Contains the TaskController class for task management
│   └── utils
│       └── helper.js        # Utility functions for task management
├── package.json             # NPM configuration file
├── .gitignore               # Specifies files to be ignored by Git
└── README.md                # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd task-manager
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
node src/app.js
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Retrieve all tasks
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.