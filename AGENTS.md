# AGENTS.md

## Project

This repository contains the personal portfolio of **Md. Nafiul Islam**, a Computer Science & Engineering student and aspiring Full Stack Web Developer.

The website is a production-quality personal portfolio intended for recruiters, hiring managers, engineers, and internship opportunities.

---

## Stack

Use the existing stack:

* Next.js
* React
* JavaScript
* Tailwind CSS
* Framer Motion
* React Icons
* EmailJS
* Gemini API
* GitHub REST API
* Netlify

Do not migrate technologies unless explicitly requested.

---

## Engineering Principles

Write production-quality code.

Prioritize:

1. Correctness
2. Maintainability
3. Accessibility
4. Performance
5. Security
6. Responsive behavior
7. Visual quality

Prefer simple solutions over unnecessary abstraction.

Do not over-engineer.

Do not introduce dependencies without a clear reason.

---

## Design Principles

The portfolio should feel:

* Premium
* Minimal
* Elegant
* Professional
* Human-designed
* Recruiter-focused

Avoid generic AI-generated portfolio aesthetics.

Do not use:

* Rainbow gradients
* Excessive neon
* Huge glowing effects
* Excessive glassmorphism
* Fake statistics
* Fake skill percentages
* Fake testimonials
* Fake achievements
* Excessive animation

The visual identity is based on:

```text
Background: #0B0F14 range
Accent: Cyan
Secondary accent: Subtle blue
Font: Geist
Theme: Dark only
```

Use whitespace, typography, alignment, and hierarchy to create the premium feel.

---

## Architecture

Use the Next.js App Router.

Preferred organization:

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

Server Components are preferred by default.

Use Client Components only when required by:

* State
* Event handlers
* Browser APIs
* Framer Motion
* Interactive forms
* Interactive AI UI

---

## Responsive Design

Mobile-first.

Test:

```text
375px
390px
768px
1024px
1280px
1440px
1920px
```

Never introduce:

* Horizontal overflow
* Broken grids
* Clipped text
* Unusable mobile navigation
* Tiny touch targets

---

## Accessibility

Use semantic HTML.

Ensure:

* Keyboard navigation
* Visible focus
* Useful labels
* Useful image alt text
* Proper heading hierarchy
* Accessible forms
* Sufficient contrast
* Reduced-motion support

Never use a non-interactive element as a button when a real `<button>` is appropriate.

---

## Animation

Use Framer Motion for purposeful interactions.

Preferred:

* Fade
* Slide
* Scale
* Blur reveal
* Scroll reveal
* Hover transitions

Avoid excessive animation.

Respect:

```css
prefers-reduced-motion
```

---

## Gemini

Gemini must be accessed server-side.

Use:

```env
GEMINI_API_KEY=
```

Never expose it through:

```env
NEXT_PUBLIC_GEMINI_API_KEY=
```

Never hard-code the API key.

The assistant should only provide information supported by the portfolio.

Never fabricate experience, projects, awards, employment, certifications, or achievements.

---

## EmailJS

Expected variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The contact form must support:

* Validation
* Loading state
* Success state
* Error state
* Accessible feedback

Never silently fail.

---

## GitHub

GitHub username:

```text
Nafiul-Islam-Eshan
```

GitHub profile:

```text
https://github.com/Nafiul-Islam-Eshan
```

Use GitHub's public API for repository information when appropriate.

Do not display every repository.

Exclude:

* Forks
* Empty repositories
* Test repositories
* Practice repositories
* Irrelevant repositories

Featured projects should be deliberately selected.

Featured project:

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

Never fabricate project information.

---

## Security

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

---

## Personal Information

Use only verified portfolio information.

```text
Name:
Md. Nafiul Islam

Role:
Computer Science & Engineering Student
Aspiring Full Stack Web Developer

University:
Bangladesh Army International University of Science and Technology (BAIUST)

Expected Graduation:
2029

Location:
Cumilla, Bangladesh

Email:
nafiulislameshan307@gmail.com

Phone:
+8801905515736

Availability:
Open to internship opportunities

GitHub:
https://github.com/Nafiul-Islam-Eshan

LinkedIn:
https://www.linkedin.com/in/md-nafiul-islam/
```

Do not invent personal information.

---

## Professional Image

If the owner's real professional photo is available, preserve the person's identity.

Do not:

* Replace the person
* Generate a lookalike
* Stylize the face
* Alter facial structure
* Beautify facial identity

Only UI presentation such as crop, sizing, border, and positioning may be changed.

---

## Content

Portfolio copy must be factual and concise.

Never invent:

* Employment
* Clients
* Awards
* Certifications
* Testimonials
* User counts
* Revenue
* Performance metrics
* Business outcomes

Avoid meaningless marketing language.

Prefer concrete descriptions of actual work.

---

## Code Quality

Use descriptive names.

Prefer:

```js
const featuredProjects = [];
```

over:

```js
const x = [];
```

Keep functions focused.

Avoid unnecessary duplication.

Avoid unnecessary comments.

Comments should explain **why**, not simply restate **what** the code does.

---

## Existing Code

Before modifying existing code:

1. Read the relevant file.
2. Understand its dependencies.
3. Check where the component is used.
4. Preserve existing behavior.
5. Make the smallest appropriate change.

Do not rewrite unrelated files.

---

## Dependencies

Before adding a dependency, determine whether existing tools can solve the problem.

Avoid adding libraries for simple functionality.

If a dependency is necessary, use a maintained package and keep the dependency footprint reasonable.

---

## API and Network Requests

External requests must:

* Handle errors
* Handle loading states
* Avoid unnecessary calls
* Provide graceful fallbacks
* Avoid exposing credentials

Use caching or revalidation where appropriate.

---

## Performance

Prefer:

* Server Components
* Next.js Image
* Lazy loading
* Efficient data fetching
* Caching
* Minimal client-side JavaScript
* Code splitting

Avoid unnecessary client-side rendering.

---

## SEO

Maintain:

* Meaningful page title
* Meta description
* Open Graph metadata
* Semantic HTML
* Descriptive links
* Appropriate heading hierarchy

---

## Testing and Verification

Before finishing a task, run:

```bash
npm run lint
npm run build
```

Also verify:

* Desktop layout
* Mobile layout
* Navigation
* Forms
* GitHub API
* Gemini API
* Links
* Images
* Console errors

Do not claim a task is complete if the production build fails.

---

## Git

Use descriptive commits.

Examples:

```text
feat: add GitHub projects integration
fix: resolve mobile navigation issue
feat: add Gemini portfolio assistant
fix: handle contact form errors
style: refine hero section spacing
```

Never commit secrets or temporary development files.

---

## Agent Behavior

Understand the existing implementation before changing it.

Do not blindly rewrite the project.

Do not redesign existing UI unless requested.

Do not change the technology stack unless explicitly requested.

Do not fabricate data to make a feature appear complete.

If the intended behavior is clear, implement it directly.

If a decision would materially affect architecture, security, or UX and cannot reasonably be inferred, ask for clarification.

For normal implementation tasks, avoid unnecessary questions.

---

## Definition of Done

A change is complete when:

* The requested behavior works.
* Existing behavior remains intact.
* The UI matches the design system.
* The layout is responsive.
* Accessibility is preserved.
* Security is preserved.
* No unnecessary dependencies were added.
* Lint passes.
* Production build passes.
* No obvious console errors remain.
