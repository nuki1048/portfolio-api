# GitHub Repository Management API

This is a Node.js application built with Express, TypeScript, and Mongoose. It uses the GitHub API to manage repositories and implements a blacklist feature.

## Features

- Fetch all repositories of a specific user from GitHub
- Fetch a single repository based on a repository name
- Fetch a specific file from a repository
- Add a new item to the blacklist
- Remove a single item from the blacklist based on a repository name
- Fetch all items in the blacklist
- Fetch a single item from the blacklist based on a repository name

## Setup

1. Clone the repository
2. Install dependencies with `yarn`
3. Create a `.env` file in the root directory and set the necessary environment variables (see below)
4. Start the server with `yarn dev`

## Environment Variables

The following environment variables are required:

- `PORT`: The port to run the server on (e.g., `8000`)
- `NODE_ENV`: The current environment (e.g., `development`, `production`)
- `GITHUB_USER_NAME`: Your GitHub username
- `GITHUB_API_TOKEN`: Your GitHub API token
- `DATABASE_PASSWORD`: Your MongoDB database password
- `DATABASE_USERNAME`: Your MongoDB database username
- `DATABASE_URL`: Your MongoDB database URL
- `EMAIL_PROVIDER_PASSWORD`: Your email service provider password
- `EMAIL_PROVIDER_USERNAME`: Your email service provider username

## Scripts

- `dev`: Runs the development server using `start:dev` script.
- `lint`: Runs ESLint to fix linting issues in the codebase.
- `prettier`: Runs Prettier to format the codebase.
- `start:dev`: Starts the development server using `ts-node` and `nodemon`.
- `start:prod`: Builds and starts the production server using TypeScript and Node.js.
- `scripts:import`: Runs the `importBlacklist` script.
- `scripts:drop:blacklist`: Runs the `dropBlacklist` script.
- `scripts:drop:emails`: Runs the `dropEmails` script.
- `scripts:drop`: Concurrently runs the `dropBlacklist` and `dropEmails` scripts.

To run a script, use the command `yarn run SCRIPT_NAME`.

## API Endpoints

- `GET /api/v1/repo`: Fetch all repositories
- `GET /api/v1/repo/:slug`: Fetch a single repository
- `GET /api/v1/repo/:slug/:fileName`: Fetch a specific file from a repository
- `GET /api/v1/blacklist`: Fetch all items in the blacklist
- `GET /api/v1/blacklist/:slug`: Fetch a single item from the blacklist
- `POST /api/v1/blacklist`: Add a new item to the blacklist
- `PATCH /api/v1/blacklist/:slug`: Update a single item from the blacklist
- `DELETE /api/v1/blacklist/:slug`: Remove a single item from the blacklist
- `GET /api/v1/email/`: Fetch all emails from the database
- `POST /api/v1/email/`: Add a new email to the database and send it automatically to the receiver
- `GET /api/v1/email/:id`: Fetch a single email from the database
- `PATCH /api/v1/email/:id`: Update a single email
- `DELETE /api/v1/email/:id`: Remove a single email from the database

## License

ISC
