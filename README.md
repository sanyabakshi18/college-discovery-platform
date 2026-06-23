# College Discovery Platform

A full-stack college discovery platform built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Live Demo

Live URL: https://your-vercel-url.vercel.app

## GitHub Repository

Repository: https://github.com/your-username/your-repo

---

## Features

### 1. College Listing & Search
- Browse colleges from the database
- Search colleges by name
- Pagination support
- Responsive card layout

### 2. College Detail Page
- Dynamic routing using Next.js
- College-specific information
- Database-driven content

### 3. Compare Colleges
- Side-by-side comparison
- Compare:
  - Fees
  - Ratings
  - Location

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- TypeScript

### Database
- PostgreSQL
- Prisma ORM

### Deployment
- Vercel
- Neon PostgreSQL

---

## Architecture

Frontend
↓
Next.js Pages/App Router
↓
API Routes
↓
Prisma ORM
↓
PostgreSQL Database

---

## Database Schema

College

- id
- name
- location
- fees
- rating

---

## API Endpoints

### Get Colleges

GET /api/colleges

Supports:
- search
- pagination

### Compare Colleges

GET /api/colleges/compare

Example:

/api/colleges/compare?ids=id1,id2

---

## Local Setup

Clone repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Configure environment variables

```env
DATABASE_URL=your_postgresql_connection_string
```

Generate Prisma client

```bash
npx prisma generate
```

Push schema

```bash
npx prisma db push
```

Seed database

```bash
npx prisma db seed
```

Run development server

```bash
npm run dev
```

---

## Future Improvements

- Authentication
- Saved colleges
- Advanced filters
- Predictor tool
- Student reviews and discussions

---

## Author

Built as part of a Full Stack Engineer Internship Assignment.
