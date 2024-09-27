# React Dashboard App
A dynamic and responsive Dashboard Application showcasing expertise in React development, built using modern React features and state management tools. This application leverages Tailwind CSS, providing an easy-to-navigate and customizable user experience. It includes user authentication, task management, data visualization, and a responsive layout.

### Technologies Used:
- React: Core framework for building the UI.
- Redux Toolkit: For state management.
- TypeScript: For adding static typing and improvements over generic JavaScript.
- React Hooks: For state and effect management (e.g., useState, useContext).
- Context API: For global state management (user session).
- React Router: For navigating between different views (Dashboard, Profile, Tasks).
- Chart.js & React-Chartjs-2: For dynamic data visualization.
Tailwind CSS: Utility-first CSS framework for modern and responsive design.

## Features:
- User Authentication: Simple login and logout functionality with validation for credentials.
- Task Management: Manage your to-do list with the ability to add, delete, and mark tasks as completed.
- Charts and Data Visualization: Dynamic charting using Chart.js to display activity trends.
- Activity Feed: A list of recent activities or events fetched from a simulated API.
- Responsive Design: Fully responsive layout built with Tailwind CSS, ensuring usability across devices from desktops to mobile phones.
- Theming: Easily customizable with clean and modular components.



## Environment Setup

This project uses environment variables to manage sensitive information like API keys. Follow these steps to set up your environment:

1. Copy the `.env.example` file and rename it to `.env`:

   ```
   cp .env.example .env
   ```

2. Open the `.env` file and replace `your_weather_api_key_here` with your actual OpenWeatherMap API key.

3. Make sure never to commit your `.env` file to the repository. It should already be in the `.gitignore` file.

Note: You'll need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) to use the weather functionality.

### Run Locally:
1. Clone the repository:
   ```git clone https://github.com/Shmartin1/react-dashboard-app.git```
2. Install `nodejs` from:
   ```https://nodejs.org/en/download/package-manager```
3. Navigate to project directory:
   ```cd react-dashboard-app```
4. Install dependencies:
   ```npm install```
5. Start local server:
   ```npm start```
