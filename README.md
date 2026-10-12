# Belajar Vibe Coding 🚀

Backend API project menggunakan **Bun + ElysiaJS + Drizzle ORM + MySQL**.

## Prerequisites

- [Bun](https://bun.sh/) v1.0+
- MySQL 8.0+

## Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Setup database

Buat database MySQL:

```sql
CREATE DATABASE belajar_vibe_coding;
```

### 3. Configure environment

Copy file `.env.example` ke `.env` dan sesuaikan konfigurasi database:

```bash
cp .env.example .env
```

### 4. Run migrations

```bash
bun run db:generate
bun run db:migrate
```

### 5. Start development server

```bash
bun run dev
```

Server akan berjalan di `http://localhost:3000`.

## Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start dev server with hot reload |
| `bun run start` | Start production server |
| `bun run db:generate` | Generate migration files |
| `bun run db:migrate` | Run pending migrations |
| `bun run db:studio` | Open Drizzle Studio (DB GUI) |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/users` | List all users |
| POST | `/users` | Create a new user |
| GET | `/users/:id` | Get user by ID |
| PUT | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

## Project Structure

```
src/
├── index.ts          # Entry point, Elysia server setup
├── config/
│   └── env.ts        # Environment variables
├── db/
│   ├── index.ts      # Database connection
│   └── schema.ts     # Drizzle schema definitions
└── routes/
    └── index.ts      # API route definitions
```

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: [MySQL](https://www.mysql.com/)
