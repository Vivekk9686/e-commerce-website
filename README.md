# Flipkart Clone - E-Commerce Website

A full-stack e-commerce web application inspired by Flipkart, built using **React.js, Node.js, Express.js, MongoDB, and Bootstrap**.

The project follows a client-server architecture where the React frontend communicates with a Node.js/Express backend through REST APIs.

---

## 🚀 Features

### User Authentication

- User registration
- User login
- Password hashing using bcryptjs
- User information stored in MongoDB
- Login user information stored in browser localStorage

### Product Management

- Create products
- Get all products
- Get product by ID
- Update products
- Delete products
- Products stored in MongoDB
- Product details page

### Product Display

- Display products from MongoDB
- Product cards
- Product images
- Product price
- Product category
- Product description
- Product stock
- Product details page

### Cart

- Add products to cart
- View cart products
- Update cart quantity
- Remove products from cart

> Cart functionality is currently under development.

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JSX
- React Router
- Bootstrap
- HTML
- JavaScript

### Backend

- Node.js
- Express.js
- REST API
- ES Modules (`import/export`)
- CORS
- dotenv
- bcryptjs

### Database

- MongoDB
- Mongoose

---

## 📁 Project Structure

```text
e-commerce-project/
│
├── client/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ...
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   └── ...
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   │
│   ├── configs/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── product.controller.js
│   │   └── cart.controller.js
│   │
│   ├── middlewares/
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── product.model.js
│   │   └── cart.model.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── product.route.js
│   │   └── cart.routes.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
└── README.md
