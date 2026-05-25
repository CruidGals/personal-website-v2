# Website Content Plan

Plan to replace placeholder copy on **personal-website-v2** using:

| Source | URL / path | Role |
|--------|------------|------|
| Old portfolio | [kyle-chiem.vercel.app](https://kyle-chiem.vercel.app/) | Tone, narrative, and sections that worked on v1 |
| Current résumé | `public/kylechiem_4_9_2026_2028.pdf` | Authoritative facts: dates, bullets, projects, skills, contact |
| v2 codebase | `src/data/sectionContent.ts`, `src/components/hero/HeroPanel.tsx`, `src/constants/socialLinks.ts` | Where content lands today |

---

## How v2 is structured today

The home screen is a **four-corner nav** around a central hero. Each corner opens a full-screen **fold overlay** driven by `SECTION_COPY` in `src/data/sectionContent.ts`. Overlays currently render only a title plus `paragraphs[]` strings—no cards, links, or lists yet.

| UI area | Section ID | Slide direction | Primary file(s) |
|---------|------------|-----------------|-----------------|
| Center | *(hero, not in SECTION_COPY)* | — | `HeroPanel.tsx`, `socialLinks.ts` |
| Top-left | `about` | from left | `sectionContent.ts` |
| Bottom-left | `projects` | from left | `sectionContent.ts` |
| Top-right | `experience` | from right | `sectionContent.ts` |
| Bottom-right | `contact` | from right | `sectionContent.ts` |

**Implementation note:** Rich layouts (role cards, project grids, skill chips) will likely require extending `FoldOverlay` and/or splitting `sectionContent.ts` into structured data (not just `paragraphs`). This plan describes *what* to write first; a follow-up pass can refactor the UI when copy is finalized.

---

## Content reconciliation (old site vs résumé)

Use the **résumé as source of truth** for dates, metrics, and role titles. Pull **voice and personality** from the old About section.

| Topic | Old site | Apr 2026 résumé | Recommendation |
|-------|----------|-----------------|----------------|
| Hero subtitles | Software Engineer; Computer Vision Researcher @ LPAC; Schreyer Honors Scholar | Not listed as current LPAC role | Hero: lead with **Software Engineer** + **Schreyer Honors**; mention CV/robotics as *interests* in About, not as a current job line unless LPAC is added back |
| LPAC research | Feb 2025 – Present, MoCap + transformer work | **Absent** on résumé | Omit from Experience unless you add it back to the PDF; optional one-liner in About (“past work in perception & MoCap”) |
| HackPSU | Aug 2025 – Present; 500+ participants; NestJS modules | Aug 2025 – Present; **1000+** participants; RBAC, Swagger, room API | Use **résumé bullets** (newer, stronger) |
| PSU robotics intern | May – Sep 2025 | Feb – Sep 2025 | Use **résumé dates** (Feb 2025 – Sep 2025) |
| Adobe | Not on old site | May – Aug 2026, incoming SDE | **Add** as top Experience entry (future role) |
| Projects | MacroMate, AI Art Sketcher, Tetris AI, Personal Website | Surviv, Rubik’s Cube Simulator, Tetris AI | **Replace** project list with résumé projects; keep 1–2 v1 favorites in About or “Other” if desired |
| Education / GPA | Not on old home page | 4.00 GPA, coursework | Add under About or a small Education block in Experience |
| Contact | Resume PDF link in About | Phone, email, LinkedIn, GitHub | Wire in Contact + `socialLinks.ts` |

---

## Section 1: Hero (center panel)

**Files:** `src/components/hero/HeroPanel.tsx`, `src/constants/socialLinks.ts`

### Goals

- Match v1 impact in one glance: name, role, credibility line.
- Fix placeholder social URLs and point résumé icon to the real PDF.

### Proposed copy

| Element | Current (v2) | Target |
|---------|--------------|--------|
| `h1` | Kyle Chiem | **Kyle Chiem** *(unchanged)* |
| Tagline | Software Engineer \| CS Student | **Software Engineer** · Schreyer Honors · Penn State ’28 *(or similar 1-line stack)* |
| Optional second line | — | Short interest hook from v1: *ML, robotics, and full-stack systems* |

### Social / résumé links (`socialLinks.ts`)

| Key | Placeholder | Target |
|-----|-------------|--------|
| `linkedin` | `your-handle` | `https://www.linkedin.com/in/kyle-chiem` |
| `github` | `your-handle` | `https://github.com/CruidGals` |
| `resume` | `/resume.pdf` | `/kylechiem_4_9_2026_2028.pdf` *(or copy/symlink as `/resume.pdf` for a clean URL)* |

### Tasks

- [ ] Update `SOCIAL_LINKS` with real URLs.
- [ ] Decide tagline length (one vs two lines) and whether to mention incoming Adobe (usually **no** on hero—save for Experience).
- [ ] Confirm résumé opens in-browser (`target` behavior: same tab is fine for PDF).
- [ ] Optional: add `aria-describedby` on résumé link (“PDF, updated April 2026”).

### Acceptance criteria

- Hero shows name + role + honors without placeholder text.
- All three icon links resolve correctly in production.

---

## Section 2: About (`about`)

**File:** `src/data/sectionContent.ts` → `SECTION_COPY.about`

### Goals (from v1)

- Quick identity bullets (“I am a…”).
- Narrative paragraph on leadership, robotics/CV interests, and what excites you.
- Path to résumé (v1 had “Resume [PDF]” inside About; v2 can rely on hero icon + mention in copy).

### Proposed structure (for overlay or future subcomponents)

1. **Hook** — 1 sentence positioning (software engineer + researcher mindset).
2. **“I am a…” bullets** (adapt v1, align with résumé):
   - Schreyer Honors College scholar
   - Machine learning & robotics builder
   - Basketball enthusiast
   - Rubik’s Cube speed-solver *(résumé project supports this)*
3. **Story** — 2–3 sentences from v1 About (Sci‑Fi vision, humanoid interaction, CV/ML excitement); tighten for web reading.
4. **Education snapshot** (from résumé, not on v1 home):
   - Penn State — B.S. Computer Science and Math, College of Engineering
   - Aug 2024 – May 2028 · GPA **4.00/4.00**
   - Relevant coursework: Data Structures & Algorithms, Systems Programming, OOP, Digital Design
5. **Technical skills** (résumé) — group for scannability:
   - **Languages:** Python, TypeScript, Java, C++, C, SQL, JavaScript, Kotlin, Flutter
   - **Technologies:** FastAPI, SQLAlchemy, NestJS, Node.js, AWS, PostgreSQL, Git, PyTorch, Firebase
   - **Concepts:** Backend system design, RL, scalable infrastructure, API integration, full-stack development, problem solving

### Draft paragraph seeds (merge into `paragraphs` or later UI blocks)

**Paragraph A (identity):**  
Natural leader focused on pushing real-world systems toward capable humanoid interaction and strong computer vision—while staying excited by any hard ML or software engineering problem.

**Paragraph B (bullets intro):**  
Schreyer Honors scholar at Penn State studying CS and math; when not building, you’ll find basketball, speedcubing, or diving into a new RL experiment.

### Tasks

- [ ] Write final About copy (≤ ~120 words for overlay paragraphs, or split into 3–4 short paragraphs).
- [ ] Decide whether LPAC gets a **past tense** mention (only if you want it on the public site without résumé backing).
- [ ] Add skills: either full list in About or defer heavy list to Experience footer / future Skills subsection.
- [ ] Cross-link: “Full timeline and roles → Experience”; “Selected work → Projects”.

### Acceptance criteria

- Visitor learns *who you are*, *what you care about*, and *academic credentials* without opening the PDF.
- Tone matches v1 (ambitious, technical, personal) but facts match April 2026 résumé.

---

## Section 3: Experience (`experience`)

**File:** `src/data/sectionContent.ts` → `SECTION_COPY.experience`

### Goals

- Replace placeholder with chronological roles from résumé (newest first).
- Use résumé bullets verbatim where possible; old site bullets only where résumé has no equivalent and you still want the story.

### Entries to include (résumé order)

#### 1. Adobe — Incoming Software Development Engineer  
**May 2026 – Aug 2026 · San Jose, CA**

- Engagement Services and Products team; full-stack React.js and Node.js platforms.
- Agent-to-Agent (A2A) workflows; Model Context Protocol (MCP) on AWS.

*Display note:* Label clearly as **Incoming** / **Summer 2026** so visitors are not confused.

#### 2. HackPSU Tech Team — Software Engineer  
**Aug 2025 – Present · University Park, PA**

- Full-stack Next.js (React, TypeScript); **1000+** participants at peak.
- RBAC + Swagger (OpenAPI); DTO validation; **99%** schema accuracy across services.
- NestJS room reservation API; async conflict detection; workspace discovery **10+ min → &lt;10 sec**.

#### 3. The Pennsylvania State University — Research Intern, Robotics & Deep Learning  
**Feb 2025 – Sep 2025 · University Park, PA**

- RL locomotion controllers on Isaac Lab; humanoid stability metrics.
- Imitation learning with motion capture pretrain; **50%** fewer simulation steps.
- **4000+** parallel simulations; PyTorch pipelines; TensorBoard evaluation.
- Domain randomization + sensor noise for sim-to-real deployment.

#### 4. Nittany AI Alliance Student Chapter — Machine Learning Apprentice  
**Jan 2025 – May 2025 · University Park, PA**

- RAG chatbot (Sentence Transformers + Tiny LLaMA) for finance PDF Q&A.
- **100,000+** NIH chest X-rays; CNN pneumonia detection **92%** accuracy.
- Overfitting control, RL reward shaping, precision / confusion matrix evaluation.

#### Optional: LPAC (v1 only)  
**Undergraduate Researcher · Feb 2025 – Present**

Include only if you intentionally keep this role on the public site:

- 1.3M+ MoCap frames (Vicon); transformer for foot pressure / CoM (**15.95 mm** mean error benchmark).
- Optuna hyperparameter tuning; **13%** performance improvement.

### Suggested overlay copy format (until card UI exists)

For each role, one paragraph block:

`**Role @ Org** · dates — bullet 1. bullet 2. bullet 3.`

Or 4–5 separate `paragraphs` entries (one per job) for readability in the current flat layout.

### Tasks

- [ ] Add all four résumé roles (+ optional LPAC).
- [ ] Normalize date formats (e.g. `Aug 2025 – Present`).
- [ ] Fix v1 typo if reusing any old text (“Techincal” → “Technical”).
- [ ] Prioritize Adobe + HackPSU at top; keep Nittany AI as early-career breadth.
- [ ] Future UI: timeline component, company logos, tech tags per role.

### Acceptance criteria

- Every current résumé experience entry appears with accurate dates and metrics.
- No contradictory dates vs PDF (especially PSU intern **Feb** start, HackPSU **1000+**).

---

## Section 4: Projects (`projects`)

**File:** `src/data/sectionContent.ts` → `SECTION_COPY.projects`

### Goals

- Showcase résumé projects with problem → stack → outcome → link.
- Retire v1 projects unless you explicitly want a “Legacy / fun” mention.

### Projects from résumé (primary)

#### Surviv — *HooHacks Spring ’26 Winner*  
**Mar 2026 – Present · Swift, mesh networking, PyTorch · GitHub**

- Decentralized P2P mesh; message de-duplication; off-grid safety alerts.
- Lightweight on-device CNN: **80.9%** accuracy, **94.6%** recall.
- A* pathfinding on dynamic street graphs for safe-zone navigation.

#### Rubik’s Cube Simulator  
**Oct 2025 – Present · TypeScript, Vue.js, Three.js, GSAP · GitHub**

- 3D puzzle engine; reactive vectors → dynamic meshes.
- Mutex locking in GSAP pipeline against concurrent input race conditions.
- Group-theory state manager; **43 quintillion** permutations; O(1) validation.

#### Tetris AI  
**May 2025 – Oct 2025 · Python, PyTorch, TensorBoard, NumPy · GitHub**

- Deep RL Tetris agent; **800+** lines cleared per game.
- NumPy vectorization: **3×** speedup; **100+** lines removed.
- Prioritized experience replay (segment trees); TensorBoard-driven iteration.

*Note: Résumé uses “GitHub §” placeholders—replace with real repo URLs when publishing.*

### v1 projects — disposition

| v1 project | Action |
|------------|--------|
| MacroMate (HackPSU ’24) | Omit from main list **or** one-line “Earlier hackathon work” in About |
| AI Art Sketcher | Omit unless you add a repo/demo link |
| Tetris AI | **Keep** — aligns with résumé (expand bullets) |
| Personal Website (React/Bootstrap) | Meta: optional footnote “This site is v2 (React + Vite)” |

### Per-project fields to gather before writing

- [ ] GitHub URLs for Surviv, Rubik’s Cube Simulator, Tetris AI
- [ ] Live demo URLs (if any)
- [ ] 1-sentence “why it matters” for non-technical visitors
- [ ] Thumbnail or screenshot assets (future card grid)

### Draft overlay order

1. Surviv (newest, award headline)
2. Rubik’s Cube Simulator (visual / 3D showcase)
3. Tetris AI (ML depth)

### Acceptance criteria

- All three résumé projects listed with stacks and quantified outcomes.
- Award called out for Surviv.
- Links work when repos are public.

---

## Section 5: Contact (`contact`)

**File:** `src/data/sectionContent.ts` → `SECTION_COPY.contact` (+ hero social links)

### Goals

- Make it effortless to reach you or view professional profiles.
- Complement hero icons (don’t duplicate blindly—Contact can show **text + mailto**).

### From résumé

| Channel | Value |
|---------|--------|
| Email | kyle.chiem@outlook.com |
| Phone | (267) 312-5131 |
| LinkedIn | linkedin.com/in/kyle-chiem |
| GitHub | github.com/CruidGals |

### Proposed overlay copy

- Short invitation: open to internships, research collabs, hackathon organizing, or SWE roles.
- **Email** as primary CTA (`mailto:kyle.chiem@outlook.com`).
- Optional: phone for recruiters who prefer it.
- Repeat LinkedIn / GitHub as text links (same URLs as `socialLinks.ts`).
- Résumé: link to `/kylechiem_4_9_2026_2028.pdf` with “Last updated April 2026”.

### Tasks

- [ ] Write 1–2 friendly sentences (tone: professional, approachable).
- [ ] Decide whether phone is public on the web (résumé has it; you may hide on site and keep email-only).
- [ ] Optional future: contact form, Cal.com, or “Copy email” button.
- [ ] Optional: `rel="me"` on social links for verification.

### Acceptance criteria

- At least one clear CTA (email) and consistent URLs with hero + résumé.

---

## Cross-cutting implementation checklist

### Phase 1 — Copy in place (minimal code change)

- [ ] Fill `SECTION_COPY` for `about`, `experience`, `projects`, `contact`.
- [ ] Update `HeroPanel` tagline.
- [ ] Update `SOCIAL_LINKS` and résumé path.

### Phase 2 — Structure (recommended after copy review)

- [ ] Extend `sectionContent.ts` with typed objects: `ExperienceEntry[]`, `ProjectEntry[]`, etc.
- [ ] Update `FoldOverlay` to render lists, links, and headings (not only `<p>`).
- [ ] Add `target="_blank"` + `rel` on external project/repo links.

### Phase 3 — Polish

- [ ] SEO: `index.html` title/description matching v1 (“Kyle Chiem — Software Engineer”).
- [ ] Open Graph image + favicon if not set.
- [ ] Accessibility pass on fold panel (focus trap, Escape to close—verify `useFoldOverlay`).
- [ ] Deploy to Vercel; smoke-test all four sections + PDF.

### Phase 4 — Optional enhancements

- [ ] Downloadable résumé alias at `/resume.pdf`.
- [ ] Footer copyright (v1 had © 2025).
- [ ] Analytics (if desired).
- [ ] Blog or writing section (not in v1 or v2—skip unless new scope).

---

## File mapping summary

| Content | Primary destination today | Future structure |
|---------|---------------------------|------------------|
| Name, tagline | `HeroPanel.tsx` | — |
| LinkedIn, GitHub, PDF | `socialLinks.ts` | — |
| About narrative + skills + education | `sectionContent.ts` → `about` | `src/data/about.ts` |
| Jobs | `sectionContent.ts` → `experience` | `src/data/experience.ts` |
| Projects | `sectionContent.ts` → `projects` | `src/data/projects.ts` |
| Email, phone, CTA | `sectionContent.ts` → `contact` | `src/data/contact.ts` |

---

## Quick reference: résumé facts (April 2026)

**Education:** Penn State Schreyer Honors — B.S. CS & Math, Aug 2024 – May 2028, GPA 4.00  

**Experience:** Adobe (incoming May–Aug 2026) → HackPSU (Aug 2025–present) → PSU robotics intern (Feb–Sep 2025) → Nittany AI (Jan–May 2025)  

**Projects:** Surviv · Rubik’s Cube Simulator · Tetris AI  

**Skills:** See About section list above (full résumé block).  

**Contact:** kyle.chiem@outlook.com · (267) 312-5131 · [LinkedIn](https://www.linkedin.com/in/kyle-chiem) · [GitHub](https://github.com/CruidGals)

---

*Generated for personal-website-v2. Update this doc when the résumé PDF or public roles change.*
