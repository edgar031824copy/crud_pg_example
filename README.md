# CRUD with express, PostgreSQL and EJS

## Description

This project is a Node.js application using Express and PostgreSQL. It demonstrates a basic setup with TypeScript, and includes features for handling HTTP requests, rendering views with EJS, and connecting to a PostgreSQL database.

## Setup

### Prerequisites

Node.js (v14 or later)
Docker

### Installation

1. Clone the Repository

2. Install Dependencies

> npm install

3. Setup the PostgreSQL Database

> To set up a local PostgreSQL database using Docker, follow these steps:

> Run PostgreSQL Container

> docker run --name postgres-db -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_USER=yourusername -e POSTGRES_DB=yourdatabase -p 5432:5432 -d postgres:latest
>
> Replace yourpassword, yourusername, and yourdatabase with your preferred credentials and database name.

4.  Verify the Container is Running

> docker ps

5. Access PostgreSQL

> You can connect to the PostgreSQL container using a database client or command-line, for client you can use pgAdmin, DBeaver, DataGrip, Workbench, etc and configure the server and the database

6. Environment Variables

> Create a .env file in the root directory of the project with the following content:
> DB_HOST=localhost
> DB_USER=yourusername
> DB_PASSWORD=yourpassword
> DB_NAME=yourdatabase
> Compile TypeScript

7. Run the Application

For development and watch mode, use nodemon to start the server:

> npm run dev

For dev without watch, start the server directly:

> npm run start
