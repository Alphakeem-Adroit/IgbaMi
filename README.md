# IgbaMi  
### A Digital Product Catalog Platform for Small Nigerian Businesses

---

## 🌍 Overview

**IgbaMi** is a full-stack web application designed to help small and medium-sized businesses (SMEs) in Nigeria create a simple, professional digital product catalog.

Many Nigerian businesses rely on WhatsApp status, Instagram posts, or word-of-mouth to showcase their products. IgbaMi provides a centralized, shareable online catalog where business owners can upload products, display pricing in Naira (₦), and receive customer inquiries via WhatsApp.

The platform bridges the gap between informal selling and structured digital presence — without the complexity of full e-commerce systems.

---

## 🎯 Project Aim

To empower Nigerian SMEs with a simple, accessible, and affordable way to showcase their products online without requiring advanced technical knowledge or complex payment systems.

---

## 🧩 Objectives

- Provide a clean and professional product display interface.
- Allow business owners to manage their products through a secure dashboard.
- Enable customers to browse products without needing to create accounts.
- Integrate WhatsApp ordering to align with existing Nigerian business workflows.
- Deliver a responsive, mobile-first user experience.
- Demonstrate full-stack engineering using modern technologies.

---

## 👥 Target Users

### 1️⃣ Business Owners (Admins)
Small business owners who want:
- A digital catalog link to share with customers
- A clean product display page
- Easy product management tools

### 2️⃣ Customers (Public Users)
Customers who want:
- To browse products easily
- To see pricing clearly
- To contact businesses directly via WhatsApp

---

## 🚀 Core Features

### 🔐 Authentication
- Business owner registration and login
- Protected dashboard routes
- JWT-based authentication

---

### 🛍 Product Management (Admin Dashboard)
- Create products
- Edit product details
- Delete products
- Upload product images
- Mark products as Featured
- Organize products by category

---

### 🌐 Public Catalog
- Landing page
- Featured products section
- Product listing page
- Category filtering
- Product detail view
- WhatsApp order button with pre-filled message
- Mobile-responsive design
- Light and Dark mode toggle

---

### 📬 Newsletter Section
- Email input UI (non-functional for MVP)
- Designed for future marketing integration

---

## 🏗 Project Architecture

IgbaMi is built as a full-stack monorepo:

```

IgbaMi/
│
├── igbami_backend/     → Django + Django REST Framework
├── igbami_frontend/    → React (Vite) + TailwindCSS
├── LICENSE
└── README.md

```

---

## 🛠 Technology Stack

### Frontend
- React (Vite)
- TailwindCSS
- React Router
- Axios
- React Hooks / Context API

### Backend
- Django
- Django REST Framework
- JWT Authentication
- PostgreSQL (Production)
- SQLite (Development)

### Deployment
- Frontend: Vercel
- Backend: Render
- Environment variables for secrets

---

## 🔌 API Overview

### Authentication Endpoints
- `POST /api/register/`
- `POST /api/login/`

### Product Endpoints
- `GET /api/products/`
- `GET /api/products/<id>/`
- `POST /api/products/`
- `PUT /api/products/<id>/`
- `DELETE /api/products/<id>/`

### Category Endpoints
- `GET /api/categories/`

---

## 💡 How Users Are Expected to Use IgbaMi

### For Business Owners:
1. Register an account.
2. Log into the dashboard.
3. Add products with images and pricing.
4. Share the public catalog link with customers.
5. Receive orders through WhatsApp.

### For Customers:
1. Visit the catalog link.
2. Browse available products.
3. View detailed product information.
4. Click the WhatsApp button to place an order.

No complex checkout process.  
No payment gateway.  
Simple. Practical. Nigerian-friendly.

---

## 📱 Design Philosophy

- Mobile-first approach
- Clean and minimal UI
- Fast loading experience
- Simple workflows
- Business-focused usability

---

## 🔮 Future Improvements (Stretch Goals)

- Multi-business support (multi-vendor)
- Search functionality
- Product sorting & pagination
- Analytics dashboard
- Product stock status
- Email newsletter integration
- SEO optimization
- Business profile customization
- Role-based access control

---

## 🧠 Learning Outcomes

This project demonstrates:

- Full-stack application architecture
- RESTful API design
- Authentication and authorization
- Media file handling
- State management in React
- Component-based frontend design
- Deployment workflow
- Real-world problem solving

---

## 📦 Installation (Development)

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
````

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📄 License

This project was built as part of the ALX Capstone Project and is intended for educational and demonstration purposes.

---

## 👨🏽‍💻 Author

Built by **Alphakeem Adroit**
| Full Stack Web Developer

