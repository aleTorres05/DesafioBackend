# Dev.to API (Backend Challange)

The Dev.to post management System is a robust backend solution developed using Node.js, designed to handle petitions from clients efficiently. This system supports the creation, management, and tracking of petitions, allowing users to interact with the platform seamlessly. The backend architecture ensures scalability, security, and performance, catering to a wide range of use cases.

## Authors

- [@aleTorres05](hhttps://github.com/aleTorres05/)

## Run Locally

Clone the project

```bash
git clone git@github.com:aleTorres05/DesafioBackend.git

```

Go to the project directory

```bash
  cd my-project
```

Install Dependencies:

```bash
npm install
```

Set Environment Variables:

```bash
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
DB_PASSWORD=your_email_password
DB_USER=your_user
DB_HOST=your_host
DB_NAME=your_db_name
```

To deploy this project run on DEV

```bash
  npm run dev
```

To deploy this project run

```bash
  npm run start
```

## Features

1. User Managment

- Registration and Authentication: Secure user registration and authentication using JWT (JSON Web Tokens) for session management.

2. Security and Compliance:

- Data Protection: Implement data encryption, secure password storage, and regular security audits.

3. Post Management:

- Create, Read, Update and Delete Post

4. User Management:

- Create, Read, Update and Delete Users

Technologies Used:

- Node.js: The core runtime environment for executing JavaScript code server-side.
- Express.js: A minimal and flexible Node.js web application framework for handling routing, middleware, and more.
- MongoDB: A NoSQL database for storing user data, petitions, posts, and other information.
- JWT: For secure authentication and authorization processes.

## API Reference

#### Get all users

```http
  GET /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get user by ID

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### POST User

```http
  POST /users/
```

| Parameter    | Type     | Description      |
| :----------- | :------- | :--------------- |
| `name`       | `string` | **Required**.    |
| `profilePic` | `string` | **NOT Required** |
| `email`      | `string` | **Required**     |
| `password`   | `string` | **Required**     |
| `createdAt`  | `string` | **NOT Required** |
| `updatedAt`  | `string` | **NOT Required** |

```http
  DELETE /users/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

```http
  PATCH /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
