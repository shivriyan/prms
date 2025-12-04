# 🏥 Patient Record Management System (PRMS) — Web Application

A simple, modern Patient Record Management System built using **Node.js**, **Express**, **MySQL**, and a **Vanilla HTML/CSS/JS frontend**. This project allows clinics or small hospitals to manage **Patients, Doctors, Appointments, and Treatments** through a lightweight, easy-to-run web app.

---

## 🚀 Features

### 🔹 Patient Management

* Add, update, delete, and view patient records
* Basic search and listing

### 🔹 Doctor Management

* Store doctor information
* Reference doctors in appointments

### 🔹 Appointment System

* Link appointments to patients and doctors
* Store diagnosis details

### 🔹 Treatment Records

* Save prescriptions, fees, and follow-up dates

### 🔹 REST API Backend

* Built with Node.js + Express
* Uses MySQL for relational data
* Foreign-key constraints for clean structure
* JSON responses for all endpoints

### 🔹 Simple Frontend

* Pure HTML + CSS + JavaScript
* Fetches data through the backend REST API
* Lightweight and fast for local or small deployments

---

## 📁 Project Structure

```
prms-web/
├── backend/
│   ├── server.js
│   ├── db_init.sql
│   ├── package.json
│   ├── .env.example
│   └── README-backend.md
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── docker-compose.yml
```

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/yourusername/prms-web.git
cd prms-web
```

---

## **2️⃣ Setup MySQL Database**

Run the database initialization script:

```bash
mysql -u root -p < backend/db_init.sql
```

Or, if using socket authentication:

```bash
sudo mysql < backend/db_init.sql
```

### (Optional) Create a dedicated MySQL user:

```sql
CREATE USER 'prms'@'localhost' IDENTIFIED BY 'prmspass';
GRANT ALL PRIVILEGES ON hospital_db.* TO 'prms'@'localhost';
FLUSH PRIVILEGES;
```

---

## **3️⃣ Configure the Backend**

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

```
DB_HOST=localhost
DB_USER=prms
DB_PASS=prmspass
DB_NAME=hospital_db
PORT=3000
```

---

## **4️⃣ Start the Backend Server**

```bash
npm run start
```

Expected output:

```
DB pool initialized
API running on http://localhost:3000
```

Test the API:

```bash
curl http://localhost:3000/api/health
```

---

## **5️⃣ Start the Frontend**

```bash
cd frontend
npx http-server -p 8080
# or python3 -m http.server 8080
```

Open in browser:
👉 [http://localhost:8080](http://localhost:8080)

---

## 📡 API Endpoints (Examples)

### Patient Routes

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/patients`     | Get all patients     |
| GET    | `/api/patients/:id` | Get a patient by ID  |
| POST   | `/api/patients`     | Create a new patient |
| PUT    | `/api/patients/:id` | Update patient info  |
| DELETE | `/api/patients/:id` | Delete a patient     |

---

## 🐳 Docker Support (Optional)

```bash
docker-compose up --build
```

Starts:

* MySQL on port `3306`
* Backend on port `3000`

(Frontend still served manually.)

---

## 🧩 Future Improvements

* Add JWT authentication (login)
* Add pagination & search
* Add UI panels for Doctors / Appointments / Treatments
* Add charts dashboard (Chart.js)
* Optionally convert frontend to React/Vue

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues for bugs or feature requests.

---

## 📄 License

Licensed under the **MIT License**.

---

## 🙌 Acknowledgments

* MySQL
* Node.js + Express
* Vanilla JS frontend
