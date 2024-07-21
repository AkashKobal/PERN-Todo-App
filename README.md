# PERN Todo App

*This is a Todo application built using the PERN stack: PostgreSQL, Express.js, React, and Node.js. The frontend is developed with React and Bootstrap, while the backend uses Node.js and Express.js. PostgreSQL is used for data storage.* <br>
## Screenshot 
![Screenshot](https://github.com/AkashKobal/PERN-Todo-App/blob/main/Screenshot%202024-07-22%20003345.png) 

## Features

- Add, edit, and delete tasks
- Mark tasks as complete or incomplete
- Responsive design with React and Bootstrap

## Installation

Follow these steps to set up the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- Reactjs
- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Clone the Repository

```sh
git clone https://github.com/your-username/pern-todo-app.git
cd pern-todo-app
```

## Backend Setup
1. Navigate to the backend directory:
```sh
cd backend
```

2. Install the required dependencies:

```sh
npm install
```

3. Add your PostgreSQL database configuration:
```sh
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "your_pgAdmin_password",
  port: 5432,
```

4. Run the backend server:
```sh
node index.js
```

## Frontend Setup (Open new terminal in client folder)
1. Navigate to the client directory:
```sh
cd client
```

2. Install the required dependencies:
```sh
npm install
```
3. Start the React development server:
```sh
npm start
```

## Running the Application
With both the backend and frontend servers running, open your browser and navigate to http://localhost:3000 to see the app in action.





