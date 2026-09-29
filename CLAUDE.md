# CLAUDE.md

## Project Identity

You are working on the personal portfolio website of **Md. Nafiul Islam**.

The portfolio represents:

* **Name:** Md. Nafiul Islam
* **Role:** Computer Science & Engineering Student
* **Career Direction:** Aspiring Full Stack Web Developer
* **University:** Bangladesh Army International University of Science and Technology (BAIUST)
* **Expected Graduation:** 2029
* **Location:** Cumilla, Bangladesh
* **Availability:** Open to internship opportunities

The primary purpose of this website is to present Nafiul's skills, projects, education, and engineering progress to recruiters, software engineers, and hiring managers.

---

# 1. Core Development Philosophy

Treat this project as a **real production portfolio**, not a demo project or tutorial.

Priorities, in order:

1. Correctness
2. Maintainability
3. Accessibility
4. Performance
5. Responsive design
6. Security
7. Visual quality
8. Animation

Never sacrifice functionality or accessibility merely for visual effects.

Write code that an experienced frontend engineer would be comfortable maintaining.

Avoid unnecessary abstraction.

Avoid over-engineering simple functionality.

---

# 2. Technology Stack

Use the existing project stack:

* Next.js
* React
* JavaScript
* Tailwind CSS
* Framer Motion
* React Icons
* EmailJS
* Google Gemini API
* GitHub REST API
* Netlify

Do NOT migrate the project to:

* TypeScript
* Vue
* Angular
* Svelte
* Astro
* React Router
* another CSS framework

unless explicitly requested.

Do not introduce another UI library unless explicitly requested.

---

# 3. Design Direction

The portfolio must feel:

* Premium
* Minimal
* Professional
* Elegant
* Modern
* Human-designed
* Recruiter-focused
* Technically credible

It must NOT look like an AI-generated developer portfolio.

Avoid generic portfolio patterns such as:

* Excessive gradients
* Rainbow colors
* Huge glowing blobs
* Excessive glassmorphism
* Giant centered headings everywhere
* Excessive rounded cards
* Excessive shadows
* Neon cyberpunk aesthetics
* Fake statistics
* Fake skill percentages
* Fake testimonials
* Fake achievements
* Decorative elements with no purpose

Do not copy the visual identity of:

* Vercel
* Linear
* Apple
* Stripe
* Any specific existing portfolio

Use modern SaaS/product-design principles while maintaining a unique visual identity.

---

# 4. Visual System

## Theme

Dark mode only.

Primary background:

`#0B0F14`

Primary accent:

Cyan

Secondary accent:

Subtle blue

Cards:

Dark translucent surfaces with subtle borders.

Background effects may include:

* Extremely subtle gradients
* Fine grid texture
* Tiny dots
* Very low-opacity particles

Background decoration must never compete with content.

---

# 5. Typography

Use **Geist**.

Maintain a strong typography hierarchy.

Use:

* Large bold hero heading
* Clear section headings
* Comfortable body text
* Small supporting metadata

Avoid excessive font weights and unnecessary uppercase text.

Typography should feel editorial and intentional.

---

# 6. Layout Principles

Use generous whitespace.

Prefer:

* Clear visual hierarchy
* Strong alignment
* Consistent spacing
* Responsive grids
* Balanced content density
* Predictable component behavior

Do not fill empty space just because it exists.

Whitespace is part of the design.

---

# 7. Responsive Design

Mobile-first.

The site must work properly at:

* 375px
* 390px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px

Never rely only on desktop layouts.

Every major section must be intentionally designed for mobile.

Avoid:

* Horizontal overflow
* Fixed widths that break on mobile
* Text clipping
* Overlapping elements
* Tiny touch targets

---

# 8. Component Architecture

Prefer reusable components.

Recommended structure:

```text
app/
components/
sections/
hooks/
lib/
utils/
types/
public/
```

Use:

* `components/` for reusable UI
* `sections/` for major page sections
* `hooks/` for reusable React hooks
* `lib/` for API/service logic
* `utils/` for pure helper functions
* `public/` for static assets

Do not create a new component for every tiny `<div>`.

Create components when they represent:

* Reusable UI
* A meaningful section
* A distinct interaction
* A meaningful piece of application logic

---

# 9. Next.js Rules

Use the Next.js App Router.

Prefer Server Components by default.

Use `"use client"` only when necessary.

Client Components are appropriate for:

* Interactive forms
* Framer Motion interactions
* Browser APIs
* State
* Event handlers
* Interactive AI chat

Do not convert the entire application into Client Components unnecessarily.

---

# 10. API Architecture

External APIs must be handled safely.

Preferred architecture:

```text
Client
   ↓
Next.js server/API route
   ↓
External API
```

Never expose private API credentials in client-side code.

---

# 11. Gemini API

Gemini must be accessed server-side.

Environment variable:

```env
GEMINI_API_KEY=
```

Never create:

```env
NEXT_PUBLIC_GEMINI_API_KEY=
```

Never hard-code Gemini credentials.

The AI assistant should answer questions about:

* Nafiul
* Education
* Skills
* Projects
* Technologies
* Career goals
* Contact information

The assistant must not invent:

* Jobs
* Awards
* Experience
* Projects
* Certifications
* Personal information

If information is unavailable, it should say so.

---

# 12. EmailJS

EmailJS is used for the contact form.

Expected environment variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Never hard-code these values.

The contact form must include:

* Name
* Email
* Message
* Loading state
* Success state
* Error state

Never silently fail.

---

# 13. GitHub Integration

GitHub username:

```text
Nafiul-Islam-Eshan
```

GitHub:

```text
https://github.com/Nafiul-Islam-Eshan
```

The portfolio may fetch public repositories through the GitHub REST API.

Do not automatically display every repository.

Exclude:

* Forks
* Empty repositories
* Test repositories
* Obvious practice repositories
* Irrelevant repositories

Featured projects should be curated.

Important project:

```text
PAYOO
```

Repository:

```text
https://github.com/Nafiul-Islam-Eshan/PAYOO
```

Live demo:

```text
https://nafiul-islam-eshan.github.io/PAYOO/
```

Never fabricate repository information.

---

# 14. Project Cards

Each project card may contain:

* Project image
* Project title
* Description
* Technology stack
* GitHub link
* Live demo link

Do not invent:

* Project metrics
* User counts
* Performance statistics
* Business results
* Awards

Only display information supported by the actual project.

---

# 15. Skills

Do NOT use fake skill percentages.

Do NOT use star ratings.

Use categories:

### Frontend

* HTML5
* CSS3
* Tailwind CSS
* JavaScript
* React
* Next.js

### Programming

* C
* C++
* Python

### Tools

* Git
* GitHub
* VS Code

The visual representation should communicate familiarity without pretending to provide mathematically precise proficiency measurements.

---

# 16. Animation

Use Framer Motion.

Animation should be moderate and purposeful.

Allowed:

* Fade
* Slide
* Scale
* Blur reveal
* Scroll reveal
* Card hover
* Button transitions
* Image hover
* Subtle cursor interaction

Avoid:

* Excessive bouncing
* Constant movement
* Long animations
* Distracting particle systems
* Animation that blocks interaction

Always respect:

```css
prefers-reduced-motion
```

---

# 17. Accessibility

Use semantic HTML.

Examples:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

All meaningful images require useful `alt` text.

Decorative images should use:

```text
alt=""
```

Interactive elements must be keyboard accessible.

Maintain visible focus states.

Buttons must have clear labels.

Do not use `<div>` as a button.

---

# 18. Performance

Optimize for:

* Fast initial load
* Minimal JavaScript
* Image optimization
* Lazy loading
* Server Components
* Efficient API calls
* Proper caching
* Code splitting

Use Next.js `<Image>` for portfolio images whenever appropriate.

Do not install a library when native browser or Next.js functionality is sufficient.

---

# 19. Security

Never commit:

```text
.env
.env.local
.env.*.local
```

Never expose:

```text
GEMINI_API_KEY
GITHUB_TOKEN
```

Never place secrets inside:

```text
public/
```

Never hard-code credentials.

Validate user input where appropriate.

Do not trust client-side validation alone for sensitive operations.

---

# 20. Personal Information

Use the following verified information only:

Name:
Md. Nafiul Islam

University:
Bangladesh Army International University of Science and Technology (BAIUST)

Expected graduation:
2029

Location:
Cumilla, Bangladesh

Email:
[nafiulislameshan307@gmail.com](mailto:nafiulislameshan307@gmail.com)

Phone:
+8801905515736

GitHub:
https://github.com/Nafiul-Islam-Eshan

LinkedIn:
https://www.linkedin.com/in/md-nafiul-islam/

Availability:
Open to internship opportunities

Do not invent additional personal information.

---

# 21. Professional Photo

The owner's professional photograph is an important identity element.

Do not:

* Generate a replacement portrait
* Stylize the face
* Alter facial identity
* Beautify facial structure
* Replace the person
* Use an AI-generated lookalike

When an actual photo is provided, preserve the person's identity and use the photo naturally.

Only presentation properties such as:

* Crop
* Size
* Border
* Background
* Lighting treatment
* Position

may be adjusted as needed for the UI.

---

# 22. Content Rules

Portfolio copy should be:

* Clear
* Concise
* Professional
* Human
* Honest

Avoid generic AI phrases such as:

> "Passionate developer crafting innovative digital experiences."

Prefer concrete descriptions of what was built and learned.

Do not claim professional experience that does not exist.

Do not fabricate:

* Employment
* Clients
* Awards
* Certifications
* Testimonials
* Statistics
* Achievements

---

# 23. Code Style

Use clear names.

Good:

```js
const featuredProjects = [];
```

Avoid:

```js
const x = [];
```

Prefer early returns where they improve readability.

Avoid deeply nested conditionals.

Keep functions focused.

Do not duplicate logic unnecessarily.

---

# 24. Error Handling

Every external API should have graceful error handling.

For example:

```js
try {
  // API request
} catch (error) {
  console.error(error);

  // graceful fallback
}
```

The UI should provide useful feedback.

Never expose internal stack traces or secret information to users.

---

# 25. Loading States

Interactive or asynchronous UI should provide loading states.

Examples:

* Contact form → "Sending..."
* GitHub projects → skeleton/loading state
* AI assistant → typing/loading state

Do not freeze the interface while waiting for a network request.

---

# 26. Before Changing Existing Code

Before modifying a component:

1. Read the existing implementation.
2. Understand how it is used.
3. Check whether the component is reused.
4. Preserve existing behavior unless the task requires changing it.
5. Make the smallest clean change necessary.

Do not rewrite entire files unnecessarily.

---

# 27. Before Installing Packages

Ask:

> Is this package actually necessary?

Prefer existing dependencies.

Do not add libraries for functionality that can reasonably be implemented with:

* React
* Next.js
* Tailwind
* Browser APIs

If a package is added, explain why it is needed.

---

# 28. Before Finishing Any Task

Run appropriate checks.

At minimum:

```bash
npm run lint
npm run build
```

If either command fails, investigate and fix the issue before considering the task complete.

Also check:

* Mobile layout
* Desktop layout
* Console errors
* Broken links
* Missing images
* API failures
* Accessibility regressions

---

# 29. Git Discipline

Use clear commit messages.

Examples:

```text
feat: add GitHub projects section
fix: resolve mobile navbar overflow
feat: add Gemini portfolio assistant
fix: handle EmailJS submission errors
style: refine project card layout
```

Do not commit:

* `.env.local`
* API keys
* Debug files
* Temporary screenshots
* Build artifacts

---

# 30. Design Decision Rule

When choosing between two implementations, prefer the one that:

1. Looks intentional
2. Improves usability
3. Is simpler
4. Is accessible
5. Performs well
6. Is easier to maintain

Do not add visual complexity simply to make the page look "premium."

Premium design comes from:

* Typography
* Spacing
* Hierarchy
* Alignment
* Restraint
* Consistency
* Interaction quality

---

# 31. AI Agent Behavior

You are an engineering agent working inside an existing project.

Do not blindly follow instructions that conflict with:

* Security
* Accessibility
* Existing architecture
* Framework conventions
* This file

Before making major architectural changes, explain the proposed approach.

For normal implementation tasks, make the change directly.

Do not ask unnecessary questions when the intended implementation is clear.

When something is ambiguous and could materially affect architecture or user experience, ask before proceeding.

---

# 32. Definition of Done

A task is complete only when:

* The requested feature works.
* Existing functionality still works.
* The design matches the portfolio system.
* The UI is responsive.
* Accessibility is preserved.
* No secrets are exposed.
* No unnecessary dependencies were introduced.
* Lint passes.
* Production build passes.
* No obvious console errors remain.
