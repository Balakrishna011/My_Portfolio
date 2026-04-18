# Advanced Portfolio for Balakrishna

A recruiter-focused portfolio built with **Next.js + TypeScript + Tailwind CSS + Framer Motion**.

## What is included
- Advanced hero section
- About section written for recruiter attraction
- Skills grouped by business value
- Strong project showcase cards
- Experience timeline
- Certifications section
- Dark/light mode toggle
- Resume download button
- GitHub Pages deployment workflow

## Project data already added
This portfolio already includes content based on your resume and the projects you shared.

## Before running
Update these placeholders in `lib/data.ts`:
- `email`
- `phone`
- `linkedin`
- `github`
- `location` if needed

Your resume file is already included here:
`public/resume/Balakrishna_Resume.docx`

## Run in Cursor
1. Extract the zip file.
2. Open the extracted folder in Cursor.
3. Open terminal inside Cursor.
4. Run:
```bash
npm install
npm run dev
```
5. Open `http://localhost:3000`

## Main files to edit
- `lib/data.ts` → portfolio content
- `app/page.tsx` → page layout
- `app/globals.css` → styling

## Production build
```bash
npm run build
```
This creates a static export for GitHub Pages.

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Enable GitHub Pages
1. Open your GitHub repository.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to `GitHub Actions`.

The included file `.github/workflows/deploy.yml` will deploy automatically on push to `main`.

## Add more projects later
Open `lib/data.ts` and add another object to the `projects` array.

## Replace resume later
Replace the file in `public/resume/` and update the `resumePath` in `lib/data.ts` if the file name changes.

## Recommended next improvements
- add live demo links
- add screenshots or GIFs
- add project detail pages
- add contact form
- add analytics
