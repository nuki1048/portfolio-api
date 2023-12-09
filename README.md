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
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory and set the necessary environment variables (see below)
4. Start the server with `npm start`

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

## API Endpoints

- `GET /api/v1/repo`: Fetch all repositories
- `GET /api/v1/repo/:slug`: Fetch a single repository
- `GET /api/v1/repo/:slug/:fileName`: Fetch a specific file from a repository
- `GET /api/v1/blacklist`: Fetch all items in the blacklist
- `GET /api/v1/blacklist/:slug`: Fetch a single item from the blacklist
- `POST /api/v1/blacklist`: Add a new item to the blacklist
- `DELETE /api/v1/blacklist/:slug`: Remove a single item from the blacklist

## License

ISC
