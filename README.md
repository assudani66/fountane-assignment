# MovieList (Assignment)

This is the repository for **MovieList**, an assignment project built using Next.js, React Query, Supabase for authentication, and Next SEO.

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Routes](#routes)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

**MovieList** is a web application, which is part of an assignment, that allows users to explore a collection of movies. It provides an intuitive interface for users to browse through various movies, view their details, and search for specific movies. The application also includes an authentication system powered by Supabase, allowing users to sign in and access personalized features.

## Tech Stack

The project is built using the following technologies:

- **Next.js**: Next.js is a popular React framework that provides server-side rendering, routing, and other powerful features to build modern web applications.

- **React Query**: React Query is used for data fetching and state management in the application. It simplifies the process of handling and caching asynchronous data.

- **Supabase**: Supabase is an open-source platform that offers features like authentication, database management, and real-time data handling. It is used for managing user authentication in this project.

- **Next SEO**: Next SEO is employed to optimize the application for search engines. It allows us to set custom meta tags and improve the website's visibility in search results.

## Routes

The application includes the following routes:

- **/movies**: This route displays all the movies available in the collection. Users can browse through the list of movies, view their details, and interact with the movie information.

- **/auth**: The login screen is accessible through this route. Users can sign in or create an account to access personalized features and save their preferences.

- **/**: This is the home screen of the application. It provides an overview of the application's features and navigation options to other routes.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository: `git clone https://github.com/assudani66/fountane-assignment.git`

2. Change the directory to the project folder: `cd fountane-assignment`

3. Install dependencies: `npm install` or `yarn install`

4. Create a `.env` file to store environment variables. Make sure to include the necessary variables for Supabase authentication.

5. Run the development server: `npm run dev` or `yarn dev`

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

Once the application is running, users can start exploring the movie collection by visiting the `/movies` route. They can click on individual movies to view more details and access additional features available for authenticated users. For authentication, users can visit the `/auth` route and sign in or create a new account using the Supabase-powered authentication system.
