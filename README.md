# 🚀 Payload CMS + Next.js Blog

A full-stack blog application built using **Payload CMS** and **Next.js**, featuring a modern admin panel, PostgreSQL database, and a dynamic frontend.

This project demonstrates how to build a headless CMS-powered blog with full customization, type safety, and deployment readiness.

---

## 📌 Features

* 🧠 Headless CMS using Payload
* ⚡ Next.js frontend (App Router)
* 🗄️ PostgreSQL database
* 🔐 Authentication & Admin panel
* 🖼️ Media uploads with blur hashing
* ✍️ Article & Author collections
* 🌱 Database seeding
* 🌍 Deployment-ready setup

---

## 🛠️ Tech Stack

* **Frontend:** Next.js
* **Backend/CMS:** Payload CMS
* **Database:** PostgreSQL
* **Language:** TypeScript

---

## 📁 Project Structure

```bash
payload-next-blog/
│
├── src/
│   ├── app/                # Next.js App Router pages
│   ├── collections/       # Payload collections (Users, Articles, Media)
│   ├── components/        # Reusable UI components
│   ├── lib/               # Utilities & helpers
│   ├── payload.config.ts  # Payload configuration
│   └── seed/              # Seed data scripts
│
├── public/                # Static assets
├── .env                   # Environment variables
├── package.json
└── tsconfig.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Raeesah30/payload-next-blog.git
cd payload-next-blog
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URI=postgres://username:password@127.0.0.1:5432/payload_next_blog
PAYLOAD_SECRET=your_secret_key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

---

### 4. Setup PostgreSQL Database

Make sure PostgreSQL is installed and running.

Create the database:

```bash
psql -U postgres -c "CREATE DATABASE payload_next_blog"
```

---

### 5. Run the Development Server

```bash
npm run dev
```

* Frontend: http://localhost:3000
* Admin Panel: http://localhost:3000/admin

---

## 🌱 Database Seeding

To populate initial data (authors, articles, etc.):

```bash
npm run seed
```

---

## 🧩 Collections Overview

### 👤 Users

* Authentication-enabled
* Admin access

### 📝 Articles

* Title, content, author relationship
* Rich text support

### 🖼️ Media

* File uploads
* Image optimization with blur hashing

---

## 🧪 Key Functionalities

* Auto login for development
* Type-safe Payload config
* Dynamic routing in Next.js
* CMS-driven frontend rendering

---

## 🚀 Deployment

You can deploy this project using:

* **Vercel** (Frontend)
* **Railway / Render / Supabase** (Database)

Make sure to:

* Update environment variables
* Use a production PostgreSQL database
* Set correct server URLs

---

## ⚠️ Common Issues

### ❌ `psql not found`

* Add PostgreSQL `bin` folder to system PATH

### ❌ Git push rejected

```bash
git push --force
```

### ❌ Merge conflicts

* Resolve conflicts in `package.json` and re-run install

---

## 📚 Documentation

For a full step-by-step guide, refer to the project documentation included in this repository.

---

## 📄 License

This project is for educational purposes.

---
