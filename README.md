# CRUD Operations Application

This project demonstrates a full-stack application implementing CRUD (Create, Read, Update, Delete) operations. It uses the following technologies:

- **Backend**: Java Spring Boot
- **Frontend**: React
- **Database**: MySQL
- **Containerization**: Docker and Docker Compose

## Project Overview

The application consists of three main components:

1. **Backend**: A Spring Boot application that provides RESTful API endpoints to manage CRUD operations.
2. **Frontend**: A React application that allows users to interact with the backend via a web interface.
3. **Database**: A MySQL database to store and manage data.

Docker Compose is used to orchestrate the services, running each component in its own container.

## Features

- **Create**: Add new records to the database.
- **Read**: Retrieve and view records.
- **Update**: Edit existing records.
- **Delete**: Remove records from the database.

## Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SyedAzherAli/CRUDapp.git
cd CURDapp
```
### 2. Run Docker Compose
```bash
docker-compose up --build 
```
- **NOTE**: backend get restart itself until mysql start, wait for few minutes....


