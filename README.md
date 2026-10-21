# MountainHeights – Early Childhood Academy & Preschool

[![Deploy to GitHub Pages](https://github.com/Aman22kr/MountainHeights/actions/workflows/deploy.yml/badge.svg)](https://github.com/Aman22kr/MountainHeights/actions/workflows/deploy.yml)

A modern, responsive, multi-page static web application recreating and modernizing the accessible reference website of **Phulwari Heights School** (Shalimar Bagh, Delhi, established 2005) under the new brand identity **MountainHeights** for GitHub user **Aman22kr**.

Built with **Vite**, **React 19**, **Tailwind CSS v4**, **React Router (HashRouter)**, **Lucide Icons**, and **Framer Motion**, with zero backend requirements and client-side **browser localStorage persistence**.

---

## 1. What the Website Does

MountainHeights is a premier preschool and kindergarten web portal designed for parents exploring early childhood education, admissions, daycare services, and campus facilities. It offers:

- **Interactive Program Directory**: From 6-month Mother-Toddler sessions to Kindergarten (LKG & UKG) and Extended Daycare, with curriculum milestones, batch ratios, and daily schedules.
- **Online Admission Portal**: Multi-step registration form with client-side validation, instant reference ID generation (`MH-2026-XXXX`), and printable receipt view.
- **Interactive Fee Estimator**: Real-time calculator allowing parents to customize grade level, daycare extensions, and AC bus routes to compute transparent annual investments.
- **Campus Tour Scheduler**: Interactive appointment booking system for parents to reserve personalized walkthroughs and meet educators.
- **Smart Campus & Facilities Explorer**: Showcases interactive smart classrooms, shallow chlorinated splash pool, soft ball arena, organic botanical sandpit, and CCTV safety.
- **Events & Circulars Notice Board**: Official announcements with category filtering, search, and local bookmarking.
- **Global Archive Search**: Instant keyword search across programs, facilities, FAQs, and circulars with search history.
- **YouTube Embed Mockups**: Blank 16:9 aspect-ratio video player placeholders that reproduce authentic layouts without third-party iframe embeds.
- **Sponsored Community Announcements**: Non-intrusive compact partner banners positioned near page footers.

---

## 2. Reference Website & Brand Transformation

| Attribute | Reference Website | Recreated Application |
| :--- | :--- | :--- |
| **Original Brand** | Phulwari Heights School | **MountainHeights** |
| **Reference URL** | `https://www.phulwariheightsschool.com/` | `https://aman22kr.github.io/MountainHeights/` |
| **Location** | BQ-Block, NS-9 Shalimar Bagh, Delhi – 110088 | Same authentic campus coordinates preserved |
| **Established** | 2005 (20+ Years Legacy) | 2005 (Celebrated across all pages) |
| **GitHub Username** | N/A | **Aman22kr** |
| **Routing Model** | Standard WordPress/Web | **HashRouter** for GitHub Pages static hosting |
| **Styling** | Traditional Theme | **Tailwind CSS v4** + Clean Design Guidelines |

---

## 3. Implemented Pages & Key Features

1. **Homepage (`/`)**:
   - Welcome hero with 10:1 student-teacher ratio metric, 20+ years of legacy, 100% CCTV safety, and CTA buttons.
   - Four pillars of pedagogy (Inquiry, Phonics & Math, Empathy, Sensory Agility).
   - Featured programs grid with age criteria.
   - 16:9 campus spotlight video placeholder.
   - Facilities preview and parent testimonials.
   - Latest circulars preview, compact ad placeholder, and tour booking strip.

2. **About Us (`/about`)**:
   - Founding story (2005), Director & Principal's message.
   - Mission, Vision & Core Values.
   - Teacher credentials (ECCE/NTT certified, 100% police-verified, pediatric first-aid trained).
   - Accolades & awards.

3. **Programs Directory (`/programs`)**:
   - Interactive category & age filtering (`Toddlers`, `Preschool & Kindergarten`, `Daycare & Enrichment`).
   - Cards with batch ratios, term fees, curriculum pillars, and full syllabus links.
   - "A Typical Day at MountainHeights" hourly routine timeline.

4. **Dynamic Program Details (`/programs/:slug`)**:
   - Accessible for all 6 programs (`mother-toddler`, `playgroup`, `nursery`, `kindergarten`, `daycare`, `activity-club`).
   - Milestone checklist, detailed hourly schedule breakdown, and direct application prefill.

5. **Admissions & Fee Portal (`/admissions`)**:
   - Tab 1: Multi-step registration form with instant client-side persistence and reference code generator.
   - Tab 2: Interactive fee calculator with termly and annual composite breakdown.
   - Tab 3: Step-by-step 4-stage admission roadmap.
   - Tab 4: Application status tracker displaying submitted forms from `localStorage` with print capability.

6. **Campus Facilities (`/facilities`)**:
   - Categorized directory: Smart Classrooms, Splash Pool, Ball Pool, Organic Sandpit, Dining Kitchen, Transport Fleet, Pediatric Bay, 24/7 CCTV.
   - 5-Point Child Protection Charter.

7. **Campus Life & Gallery (`/gallery`)**:
   - Photo showcase filtered by Festivals, Splash Days, and Classroom Discovery.
   - Interactive lightbox modal dialog for full-size viewing.
   - Annual concert video layout placeholder.

8. **Notice Board & Circulars (`/notices`)**:
   - Filter by Admission, Event, Academic, Holiday, or Circular.
   - Save / Bookmark notices to browser `localStorage`.
   - Simulated circular PDF download.

9. **Schedule a Campus Tour (`/tour`)**:
   - Interactive date & time slot appointment picker.
   - Saves bookings to `localStorage` with reservation pass code (`TOUR-XXXX`).

10. **Contact Helpdesk (`/contact`)**:
    - Complete phone numbers, email desks, visiting hours, and Shalimar Bagh address.
    - Metro and road transit directions.
    - Interactive direct message form persisted to `localStorage`.

11. **Parent FAQs (`/faq`)**:
    - Searchable categorized accordion covering age criteria, potty training, transport coverage, and meals.

12. **Global Search Results (`/search`)**:
    - Live keyword search across all programs, amenities, notices, and FAQs.

13. **Custom Not Found (`*`)**:
    - Friendly 404 playground recovery screen.

---

## 4. Project Structure

```text
MountainHeights/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD to GitHub Pages
├── dist/                         # Compiled production bundle (generated on build)
├── src/
│   ├── components/
│   │   ├── AdPlaceholder.tsx     # Reusable compact advertisement banner
│   │   ├── Footer.tsx            # Comprehensive institutional footer
│   │   ├── Navbar.tsx            # 3-Zone Top Bar with mobile drawer & hotlines
│   │   ├── SearchModal.tsx       # Instant search modal with keyboard navigation
│   │   └── VideoPlaceholder.tsx  # 16:9 YouTube video layout placeholder
│   ├── context/
│   │   └── AppContext.tsx        # LocalStorage persistence & toast notification provider
│   ├── data/
│   │   └── schoolData.ts         # Data models for programs, facilities, FAQs, notices, fees
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FacilitiesPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── NoticesPage.tsx
│   │   ├── ProgramDetailPage.tsx
│   │   ├── ProgramsPage.tsx
│   │   ├── SearchResultsPage.tsx
│   │   └── TourPage.tsx
│   ├── App.tsx                   # HashRouter configuration & page routing
│   ├── index.css                 # Tailwind CSS v4 imports & accessibility rules
│   └── main.tsx                  # React 19 entry point
├── .env.example
├── .gitignore
├── index.html                    # SEO metadata, OpenGraph, JSON-LD schema
├── metadata.json
├── package.json
├── package-lock.json             # Authoritative locked dependency tree
├── tsconfig.json
├── vite.config.ts                # Vite config with relative base: './'
└── README.md
```

---

## 5. Prerequisites & Compatibility

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher
- Modern evergreen browser (Chrome, Edge, Safari, Firefox) with JavaScript and LocalStorage enabled.

---

## 6. How to Install Dependencies

Clone the repository and install dependencies using `npm ci` (or `npm install`):

```bash
# Clone the repository
git clone https://github.com/Aman22kr/MountainHeights.git
cd MountainHeights

# Install dependencies using the committed lockfile
npm ci
```

---

## 7. How to Run the Development Server

Start Vite on port 3000:

```bash
npm run dev
```

Open your browser to:
```text
http://localhost:3000/
```

---

## 8. How to Generate and Preview the Production Build

Generate the optimized production static build in `dist/`:

```bash
# Build production bundle
npm run build

# Preview locally
npm run preview
```

The output will be created inside `dist/` with relative asset links (`./assets/...`), fully compatible with GitHub Pages hosting under any path.

---

## 9. Browser LocalStorage Usage & Limitations

Client-side persistence uses namespaced keys:
- `mountainheights_admissions_v1`: Saved admission applications with tracking IDs.
- `mountainheights_tours_v1`: Booked campus tour reservations.
- `mountainheights_inquiries_v1`: Dispatched contact messages.
- `mountainheights_saved_notices_v1`: Bookmarked circular IDs.
- `mountainheights_recent_searches_v1`: Recent search keyword history.

**Limitations**:
- LocalStorage is strictly isolated to the individual user's device and browser profile.
- Clearing browser cache or switching devices will not transfer saved applications.
- Form submissions are demonstration records and do not process financial transactions or transmit sensitive PII to external servers.

---

## 10. Configuring GitHub Repository & Username

1. Create a new GitHub repository named `MountainHeights` under your account:
   ```text
   https://github.com/Aman22kr/MountainHeights
   ```
2. Initialize and link your remote:
   ```bash
   git remote add origin https://github.com/Aman22kr/MountainHeights.git
   git branch -M main
   ```

---

## 11. Enabling GitHub Pages Using GitHub Actions

1. In your GitHub repository, navigate to **Settings** &rarr; **Pages**.
2. Under **Build and deployment** &rarr; **Source**, select:
   ```text
   GitHub Actions
   ```
3. Do **not** select "Deploy from a branch". GitHub Actions handles building and uploading artifacts automatically.

---

## 12. Pushing Changes & Triggering Automatic Deployment

Commit your files and push to `main`:

```bash
git add .
git commit -m "feat: complete MountainHeights school website recreation"
git push -u origin main
```

The workflow at `.github/workflows/deploy.yml` will automatically trigger, run `npm ci`, execute `npm run build`, and publish the application to:
```text
https://Aman22kr.github.io/MountainHeights/
```

---

## 13. Troubleshooting Common Deployment Issues

| Issue | Cause | Fix |
| :--- | :--- | :--- |
| **Blank White Screen on GitHub Pages** | Absolute asset paths `/assets/...` used instead of relative paths | Ensure `vite.config.ts` includes `base: './'`. |
| **404 on Direct Links / Refresh** | Browser requesting `/admissions` directly from static web server | All links use `HashRouter` (`/#/admissions`), which resolves entirely on the client. |
| **npm ci fails in GitHub Actions** | Mismatch between `package.json` and `package-lock.json` | Run `npm install --package-lock-only` locally, test with `npm ci`, and commit `package-lock.json`. |
| **Workflow permissions error** | Missing Pages deployment permissions | Check that `.github/workflows/deploy.yml` specifies `pages: write` and `id-token: write`. |

---

## 14. Customizing Brand Name, Content & Theme

- **School Name & Contact Info**: Edit `SCHOOL_INFO` in `src/data/schoolData.ts`.
- **Programs & Curriculum**: Modify `PROGRAMS` in `src/data/schoolData.ts`.
- **Colors & Accents**: Tailwind classes use `amber` (primary brand color), `slate` (typography and layout canvas), and `emerald` (safety and verification badges).
- **SEO & Social Cards**: Update `<title>`, `<meta description>`, and JSON-LD structured data in `index.html`.

---

## 15. Reusing This Project for Other Institutions

To adapt this codebase for a different preschool, K-12 school, or learning academy:
1. Update `SCHOOL_INFO` in `src/data/schoolData.ts` with the new school's name, campus address, phone numbers, and founding year.
2. Update `PROGRAMS`, `FACILITIES`, and `FAQS` with institution-specific data.
3. Update brand title in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
4. Run `npm run build` and deploy.

---

## 16. Mock Implementations & Current Limitations

- **Admissions Processing**: Submissions generate authentic tracking IDs and persist to `localStorage`. In a production backend environment, this would hook into an SIS (Student Information System) API or CRM database.
- **Video Embeds**: YouTube embeds are intentionally replaced with clean 16:9 aspect-ratio placeholders to comply with performance, layout integrity, and zero third-party iframe requirements.
- **Advertisements**: Ad sections are styled non-intrusive placeholders for educational community partners without external ad networks or tracking scripts.
- **Payment Gateway**: Fee estimations are transparent calculators; no live credit card or UPI processing takes place.

---

## License

Created by **Aman22kr**. Open source educational template.
