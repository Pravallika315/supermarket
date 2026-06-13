\# 🛒 SuperMarket MERN Application



A full-stack supermarket shopping web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse products, manage their shopping cart, place orders, and store customer and order details in MongoDB.



\---



\## 📌 Features



\### Customer Features



\* Browse products by category



&#x20; \* Fresh Vegetables

&#x20; \* Fresh Fruits

&#x20; \* Dairy Products

&#x20; \* Namkeens

&#x20; \* Beverages

&#x20; \* Chocolates



\* Add products to cart



\* Increase or decrease product quantity using + / - controls



\* View cart summary



\* Checkout with customer details



\* Order confirmation page



\* Responsive user interface



\### Backend Features



\* Store customer information in MongoDB

\* Store order details in MongoDB

\* REST API for users and orders

\* Express.js server architecture

\* MongoDB integration using Mongoose



\---



\## 🛠️ Tech Stack



\### Frontend



\* React.js

\* React Router DOM

\* Context API

\* HTML5

\* CSS3

\* JavaScript (ES6)



\### Backend



\* Node.js

\* Express.js



\### Database



\* MongoDB

\* Mongoose



\### Tools



\* Git

\* GitHub

\* MongoDB Compass

\* Postman



\---



\## 📂 Project Structure



SuperMarket-MERN/



├── client/



│ ├── public/



│ │ └── images/



│ ├── src/



│ │ ├── components/



│ │ ├── data/



│ │ ├── CartContext.js



│ │ ├── App.js



│ │ └── styles.css



│ └── package.json



│



├── server/



│ ├── controllers/



│ ├── models/



│ ├── routes/



│ ├── server.js



│ └── package.json



│



└── README.md



\---



\## 🚀 Installation



\### Clone Repository



```bash

git clone https://github.com/your-username/supermarket-mern.git

cd supermarket-mern

```



\### Frontend Setup



```bash

cd client

npm install

npm start

```



Frontend runs on:



```text

http://localhost:3000

```



\### Backend Setup



```bash

cd server

npm install

npm run dev

```



Backend runs on:



```text

http://localhost:5000

```



\---



\## ⚙️ Environment Variables



Create a .env file inside the server folder.



```env

MONGO\_URI=mongodb://localhost:27017/supermarket

```



For deployment, use MongoDB Atlas:



```env

MONGO\_URI=your\_mongodb\_atlas\_connection\_string

```



\---



\## 🗄️ Database Collections



\### Users Collection



```json

{

&#x20; "name": "Pravallika",

&#x20; "phone": "9876543210",

&#x20; "address": {

&#x20;   "street": "Main Road",

&#x20;   "door": "10-2-1",

&#x20;   "area": "ABC Colony",

&#x20;   "district": "Hyderabad",

&#x20;   "pin": "500001"

&#x20; }

}

```



\### Orders Collection



```json

{

&#x20; "userId": "ObjectId",

&#x20; "items": \[

&#x20;   {

&#x20;     "name": "Coca Cola",

&#x20;     "quantity": 2,

&#x20;     "price": 35

&#x20;   }

&#x20; ],

&#x20; "total": 70

}

```



\---



\## 📸 Screenshots



\### Home Page



\* Product Categories

\* Hero Banner

\* Product Cards



\### Cart Page



\* Quantity Controls

\* Order Summary



\### Checkout Page



\* Customer Information Form



\### Success Page



\* Order Confirmation



(Add screenshots here after deployment)



\---



\## 🔄 Application Workflow



1\. User browses products.

2\. Products are added to cart.

3\. User updates quantities using + / - buttons.

4\. User proceeds to checkout.

5\. Customer information is submitted.

6\. User data is stored in MongoDB.

7\. Order details are stored in MongoDB.

8\. Success page is displayed.



\---



\## 🌟 Future Enhancements



\* User Authentication (JWT)

\* Admin Dashboard

\* Product Search

\* Product Filters

\* Payment Gateway Integration

\* Order History

\* Wishlist Feature

\* Product Reviews and Ratings



\---



\## 👩‍💻 Author



Pravallika Uddandam



B.Tech Computer Science (AI \& ML)



GitHub: https://github.com/Pravallika315



\---



\## 📄 License



This project is developed for educational and learning purposes.



