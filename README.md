# VeriText AI

<p align="center">
  <img height="300" src="public/veritext/dashboard.png" alt="VeriText AI Dashboard">
</p>

🎓 **VeriText AI** is an advanced academic integrity and plagiarism detection platform designed for educators. It detects plagiarism, paraphrasing, and AI-generated content in student submissions, integrating seamlessly with major Learning Management Systems.

## Features

- 🔍 **AI Paraphrase Detection** - Detect sophisticated rewording attempts
- 💻 **Code Plagiarism Scanner** - Purpose-built for programming assignments
- 🎓 **LMS Integration** - Works with Canvas, Blackboard, Moodle, Google Classroom
- ⚡ **Batch Processing** - Upload entire classes at once
- 📊 **Detailed Reports** - Comprehensive integrity reports
- 🌐 **Multi-Language** - Support for multiple languages via i18n

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Authentication**: Clerk (SSO, MFA, User Management)
- **Database**: Drizzle ORM with PostgreSQL
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: GSAP with ScrollTrigger
- **Payments**: Stripe integration
- **i18n**: next-intl (English, French)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/veritextai.git
cd veritextai

# Install dependencies
npm install

# Copy environment variables
cp .env .env.local
```

### Environment Variables

Create a `.env.local` file with:

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_database_url
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
.
├── public/veritext/          # VeriText assets and images
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── [locale]/
│   │   │   ├── (auth)/       # Authenticated routes (dashboard)
│   │   │   └── (unauth)/     # Public routes (landing page)
│   ├── components/
│   │   └── veritext/         # VeriText UI components
│   ├── features/
│   │   └── veritext/         # VeriText feature slices
│   ├── hooks/                # Custom React hooks
│   ├── libs/                 # Library configurations
│   ├── locales/              # i18n translations (en, fr)
│   ├── models/               # Database models
│   ├── styles/               # Global styles
│   └── utils/                # Utility functions
└── migrations/               # Database migrations
```

## Key Components

### Landing Page Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated hero with StarGrid background |
| **Bento** | Feature grid with 4 key capabilities |
| **Showcase** | Workflow integration demonstration |
| **Integrations** | LMS platform connections |
| **CaseStudies** | Stanford & MIT testimonials |
| **CallToAction** | Final CTA with trial button |

### Authentication

- Powered by Clerk
- SignIn, SignUp, Password Reset
- Multi-Factor Authentication
- Social Auth (Google, GitHub, etc.)
- User Impersonation

### Database

- Drizzle ORM for type-safe queries
- PostgreSQL for production
- PGlite for local development
- Automatic migrations on build

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run check-types` | TypeScript type checking |
| `npm run lint` | ESLint linting |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests with Playwright |
| `npm run db:generate` | Generate database migrations |
| `npm run db:studio` | Open Drizzle Studio |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t veritextai .
docker run -p 3000:3000 veritextai
```

## Team

Built by **Team GitGoneWild**

## License

Licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>VeriText AI</strong> - Academic Integrity & Plagiarism Detection
</p>
