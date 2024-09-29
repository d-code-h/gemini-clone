# Gemini Clone

A clone of the Gemini app, built using React.js, TypeScript, and Vite. The app provides an intuitive interface for user queries and responses, simulating the experience of using Gemini AI.

## Table of Contents

- [Gemini Clone](#gemini-clone)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Demo

You can find a live demo of the Gemini Clone app [here](https://gemini-clone-tan-beta.vercel.app/).

## Features

- TypeScript for static type checking and improved developer experience.
- User-friendly interface for AI-like prompts and responses.
- Simulated results section with loading animation.
- Responsive design for mobile and desktop views.
- Cards with suggested prompts for user interaction.
- Input field for custom queries.
- Integrated icons for user interaction (compass, code, message, etc.).

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, providing better tooling and error handling.
- **Vite**: A fast development build tool for modern web projects.
- **pnpm**: Fast, disk space-efficient package manager.
<!-- - **CSS Modules**: Scoped CSS for component-specific styling. -->
- **Context API**: To manage global app state.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [pnpm](https://pnpm.io/) (v7 or higher)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/d-code-h/gemini-clone.git
   ```
2. Navigate into the project directory:
   `cd gemini-clone`

3. Install the dependencies using pnpm:
   `pnpm install`

4. Start the development server:
   `pnpm dev`

5. Open http://localhost:5173 in your browser to view the app.

## Available Scripts

In the project directory, you can run the following scripts using pnpm:

- `pnpm dev`
  Starts the Vite development server.

- `pnpm build`
  Builds the app for production to the dist folder.

- `pnpm preview`
  Locally previews the production build.

- `pnpm lint`
  Lints your code for any syntax or formatting errors.

## Project Structure

The project structure is as follows:

gemini-clone/
├── public/ # Static assets
├── src/
│ ├── assets/ # Icons, images, and static assets
│ ├── components/ # Reusable UI components
│ ├── context/ # Context API for global state management
│ ├── lib/ # Type definitions and utility functions
│ ├── App.tsx # Main app component
│ ├── main.tsx # Core Gemini clone interface
│ └── index.tsx # Entry point for the React app
├── .gitignore # Git ignored files
├── index.html # Base HTML template
├── tsconfig.json # TypeScript configuration file
├── vite.config.ts # Vite configuration file
├── package.json # Project dependencies and scripts
├── pnpm-lock.yaml # pnpm lockfile for package management
└── README.md # Project documentation

## Contributing

If you'd like to contribute to this project, feel free to submit issues or pull requests on the GitHub repository.

- Fork the project.
- Create a new branch for your feature or bug fix (git checkout -b feature-name).
- Commit your changes (git commit -m 'Add some feature').
- Push the branch to your fork (git push origin feature-name).
- Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
