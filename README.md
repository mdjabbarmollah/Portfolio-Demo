# Personal Portfolio — MD Jabbar Mollah

## Overview
A single-page personal portfolio for MD Jabbar Mollah, a full-stack web
developer based in Faridpur, Dhaka, Bangladesh. The page introduces who he is,
what he's currently working on, his tech stack across frontend and backend,
a couple of featured projects, and how to get in touch. Built as a clean,
framework-free foundation that's easy to extend as new projects are finished.

## Screenshot
![Portfolio screenshot](./screenshot.png)
> Add a screenshot of the deployed site here after you publish it — replace
> `screenshot.png` with your own image in this folder.

## Tech Stack
- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox, no framework)
- Vanilla JavaScript (`IntersectionObserver` for scroll-based nav state)
- Google Fonts: Fraunces, Inter, IBM Plex Mono

## Features
- Responsive layout, from mobile up to desktop
- Sticky top navigation with active-section highlighting on scroll
- "Current activity" section for what's being worked on right now
- Tech stack grouped by layer (languages / frontend / backend & tools)
- Project section with a repeatable two-column layout, ready for more entries
- Accessible focus states and `prefers-reduced-motion` support
- Zero dependencies, zero build step — works by opening `index.html`

## Dependencies
None. This is plain HTML/CSS/JS with fonts loaded from Google Fonts via
`<link>` tags — there is nothing to install.

## Local Setup
1. Clone or download this repository.
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   npx serve .
   # or
   python3 -m http.server 5500
   ```
3. Visit `http://localhost:5500` (or the URL your server prints).

## Live Link
[https://mdjabbarmollah.github.io/portfolio/](https://mdjabbarmollah.github.io/portfolio/)
> Update this once you've deployed — see the GitHub Pages steps below.
> The exact URL depends on the repository name you push this to.

## Deploying to GitHub Pages
1. Push this folder to a new GitHub repository (e.g. `portfolio`).
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder, then save.
4. GitHub will publish the site at `https://mdjabbarmollah.github.io/<repo-name>/`
   within a minute or two — put that exact URL in the Live Link section above
   and in this repository's **About** field on GitHub.

## Contact
- Email: [mdjabbarmollah718@gmail.com](mailto:mdjabbarmollah718@gmail.com)
- LinkedIn: [in/mdjabbarmollah](https://linkedin.com/in/mdjabbarmollah)
- GitHub: [@mdjabbarmollah](https://github.com/mdjabbarmollah)
- X: [@mdjabbarmollah](https://twitter.com/mdjabbarmollah)

## Customizing
- Replace the two placeholder `.project` entries in `index.html` with your
  real projects — copy the `<article class="project">` block to add more.
- Add a real screenshot for each project inside `.project-shot`.
- Update `.log-list` entries in the "Current activity" section as your focus
  shifts (e.g. once you move on from Next.js to something new).
