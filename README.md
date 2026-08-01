# hello-claude-app

Minimal Next.js app with:
- A "Hello, world!" page
- A server-side API route (`/api/chat`) that calls the Claude API, keeping your API key safe on the server

## Local development

```bash
npm install
```

Create a `.env.local` file in the project root:

```
ANTHROPIC_API_KEY=your_key_here
```

Then run:

```bash
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

1. Push this project to a new GitHub repo
2. In Vercel, click "Add New Project" and import the repo
3. Vercel auto-detects Next.js — no build config needed
4. Before deploying, add an environment variable:
   - Go to Project Settings → Environment Variables
   - Add `ANTHROPIC_API_KEY` with your key
5. Deploy — every push to `main` will auto-redeploy
