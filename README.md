# Prime Funding

Production-ready company website for **Prime Funding** — a financial services firm specialising in investments and loans.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS v3** + CSS variables for theming
- **shadcn/ui** components
- **Framer Motion** animations
- **MongoDB** (form submissions)
- **React Hook Form + Zod** form validation
- **next-themes** dark mode

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=prime_funding

SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=hello@primefundings.com
SMTP_PASSWORD=your_mailbox_password
```

> **Important:** `MONGODB_URI` and `SMTP_PASSWORD` are server-only. Never expose them to the client.

### 3. Set up MongoDB

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and copy the connection string into `MONGODB_URI`.
3. In Atlas → Network Access, allow your IP (or `0.0.0.0/0` for Vercel).
4. Form submissions are stored in the `enquiries` collection automatically on first submit.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, services, testimonials, newsletter |
| `/investments` | Investment plans, process, enquiry form |
| `/loans` | Loan types, calculator, application form |
| `/about` | Mission, timeline, values, leadership team |
| `/contact` | Contact info and message form |
| `/reviews` | Client testimonials |

## API Routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/enquiry` | POST | All form submissions (saved to MongoDB + emailed) |

## Deploy

Optimised for [Vercel](https://vercel.com). Add environment variables in your Vercel project settings before deploying.

---

**Prime Funding** — Built for trust. Designed for growth.
