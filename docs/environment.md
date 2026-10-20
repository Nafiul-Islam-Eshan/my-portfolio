# Environment variables

Copy this file to `.env` and fill in the values. `.env` is git-ignored; never commit it.

```bash
# Public site URL used for canonical links, Open Graph tags and the sitemap.
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# EmailJS — https://dashboard.emailjs.com
# Template variables expected by the contact form: {{name}}, {{email}}, {{message}}
NEXT_PUBLIC_EMAIL_SERVICE_ID=
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=

# Google Gemini — server-only, never prefixed with NEXT_PUBLIC_
GEMINI_API_KEY=
GEMINI_MODEL=gemini-3.8-flash
```

Notes:

- `GEMINI_API_KEY` is only read inside `app/api/assistant/route.ts`. If it is missing the assistant
  says so and points visitors to email instead of failing silently.
- The contact form reports a missing EmailJS configuration in a toast rather than pretending to send.
- `NEXT_PUBLIC_SITE_URL` falls back to `https://nafiul-islam.vercel.app` when unset.
