# 🛍️ Products Page using MERN Stack  

A simple **Products Page** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
The backend connects to **MongoDB Atlas** and provides **REST APIs**, while the frontend displays products in a clean and responsive UI.  

---

## 🚀 Features  
- Add, fetch, and display products from MongoDB Atlas  
- REST API built with **Express + Mongoose**  
- Frontend with **React (Vite)** + Axios  
- Fully responsive design with **TailwindCSS**  
- Product images and details rendered dynamically  

---

## 📦 Tech Stack  

### 🌐 Frontend  
![Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![Badge](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) 
![Badge](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  

### ⚙️ Backend  
![Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) 
![Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) 
![Badge](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)  

### 🗄️ Database  
![Badge](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  

### 🛠️ Tools  
![Badge](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  

---

## ⚙️ Installation & Setup  

> ⚠️ Make sure you have **Node.js (LTS)** and **MongoDB Atlas cluster** set up before running.  

```bash
# 📦 Clone the repository
git clone https://github.com/Mayuresh3843/Products-Page-using-MERN-stack.git
cd Products-Page-using-MERN-stack

```


## 1. Setup Backend


    cd backend 
    npm install


 <h2> 🔹 Replace MongoDB credentials</h2>
<h3>In server.js, update: <br/></h3>
<h4>mongoose.connect("mongodb+srv://(username):(password)@cluster0.mongodb.net/(dbname)")  </h4> 

<h2>📦 Install Prerequisites</h2>


    npm install express mongoose cors dotenv
    npm install --save-dev nodemon  
    


<h2>Update package.json (backend)</h2>

Open your backend/package.json file. Inside "scripts", add a "dev" script like this:
```bash
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

<h2> 🚀 Start the backend: </h2>


    npm run dev


<h2>2. Setup Frontend</h2>


    cd frontend 
    npm install


<h2>📦 Install Prerequisites</h2>


    npm install react-router-dom axios react-image-gallery lucide-react


    
<h3>Install Tailwind CSS from <a href="https://tailwindcss.com/docs/installation/using-vite">Official docs </a>


<h2>🚀 Start the Frontend: </h2>

    
    npm run dev



<h2>📬 Using Postman to Add Products</h2>

To add products to MongoDB:

1. Open Postman → Create a new POST request

Endpoint (example):
```bash
http://localhost:5000/products
```

In Body → Raw → JSON, <br/>
Enter product details:
Check the Postman Query file
</h3>

✅ Products will now appear in the frontend UI.

## 📸 Screenshots  

### ![Badge](https://img.shields.io/badge/Homepage-lightblue?style=for-the-badge)
![Homepage Screenshot](./screenshots/homepage.png)  

### ![Badge](https://img.shields.io/badge/Products-Page-green?style=for-the-badge)
![Products Page Screenshot](./screenshots/productspage.png)  

### ![Badge](https://img.shields.io/badge/Login-Page-orange?style=for-the-badge)
![Login Page Screenshot](./screenshots/login.png)  

### ![Badge](https://img.shields.io/badge/Signup-Page-purple?style=for-the-badge)
![Signup Page Screenshot](./screenshots/signup.png)  


<br/>

> 🧠 **Note:**  
> This project is part of my MERN stack learning journey.  
> I’ll continuously improve and update it as I learn new technologies.






