# 🛒 Online Shop

A full-stack online shopping website built as a learning project to practice frontend development, backend programming, and database management.

The project aims to provide a functional shopping experience with product listings, a shopping cart, user authentication, and order management.

## 🚀 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- React *(optional / planned)*

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Git & GitHub
- npm
- Postman *(for API testing)*

## ✨ Features

### Planned Features
- [ ] Responsive homepage
- [ ] Product listing and product details
- [ ] Product search and filtering
- [ ] Shopping cart
- [ ] User registration and login
- [ ] Database integration with MySQL
- [ ] REST API with Node.js and Express
- [ ] Order creation and order history
- [ ] Admin panel for product management
- [ ] Form validation and error handling
- [ ] React frontend integration *(optional)*

## 📁 Project Structure

The structure may evolve as the project grows.

```text
online-shop/
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── config/
│   ├── server.js
│   └── package.json
├── database/
│   └── schema.sql
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd online-shop
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend/` directory.

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=online_shop
```

Replace the example values with your local MySQL configuration.

**Important:** Never commit your `.env` file or expose database credentials publicly.

### 4. Set Up the Database

Create a database in MySQL:

```sql
CREATE DATABASE online_shop;
```

Import the database schema when `database/schema.sql` is available, or create the necessary tables as the project develops.

### 5. Run the Backend

```bash
npm run dev
```

This command assumes a development script is configured in `backend/package.json`. Otherwise, use the appropriate script for your setup.

## 🗄️ Database Design

The database may include the following tables:

| Table | Purpose |
|---|---|
| `users` | User accounts and authentication data |
| `products` | Product information, prices, and stock |
| `categories` | Product categories |
| `orders` | Customer orders |
| `order_items` | Products and quantities within each order |

## 🔌 API Endpoints

Example endpoints planned for the backend:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a product by ID |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in |
| POST | `/api/orders` | Create an order |
| GET | `/api/orders/my` | Get the current user's orders |

These endpoints are planned and should be updated as they are implemented.

## 🛣️ Development Roadmap

- [ ] Design the user interface
- [ ] Build the frontend with HTML, CSS, and JavaScript
- [ ] Implement shopping cart functionality
- [ ] Build the backend using Node.js and Express
- [ ] Design the MySQL database
- [ ] Connect the backend to MySQL
- [ ] Integrate frontend and backend
- [ ] Implement authentication and authorization
- [ ] Add order management
- [ ] Test and deploy the application
- [ ] Consider migrating the frontend to React

## 🎯 Project Goals

- Improve frontend development skills
- Learn backend development with Node.js and Express
- Understand relational database design with MySQL
- Build and consume REST APIs
- Practice Git and GitHub workflows
- Develop a complete full-stack web application

## 📌 Project Status

**Status:** In Development 🚧

This project is being developed as a learning experience. Features, architecture, and technologies may change as development progresses.

## 📄 License

This project is intended for educational purposes. A license can be added if the project is distributed publicly.
