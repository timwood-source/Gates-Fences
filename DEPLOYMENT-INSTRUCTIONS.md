# PHS Visitor Access Guide — Build and Deployment Instructions

## What this package contains

This is a complete static website. It does not require Node.js, npm, a database, environment variables, or a build command.

Production files:

- `index.html` — page structure and visitor policy
- `styles.css` — complete responsive design
- `app.js` — campus and policy dialog behavior
- `visitor-data.js` — campus arrival information, phone numbers, addresses, and map links
- `netlify.toml` — Netlify publishing and security-header configuration
- `assets/ward-aerial.jpg` — Ward Parkway campus image
- `assets/wornall-aerial-ph-logo.png` — Wornall campus image with the official PH athletics mark

The package intentionally excludes detailed gate schedules, PIN information, internal event procedures, and 911-zone maps. Those materials belong in the staff Security Hub.

## Fastest deployment: existing GitHub and Netlify site

Repository: `https://github.com/timwood-source/Gates-Fences`

1. Download `PHS-Visitor-Access-Guide-Build.zip` and extract it.
2. Open the `Gates-Fences` repository on GitHub.
3. Select **Add file**, then **Upload files**.
4. Drag the **contents** of the extracted build folder into GitHub. Do not upload the outer folder as another nested directory.
5. Confirm these files appear at the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `visitor-data.js`
   - `netlify.toml`
6. Confirm the two campus images appear inside the `assets` folder.
7. Commit the files to the `main` branch with a message such as:
   - `Rebuild public visitor access guide`
8. If Netlify is already connected to this repository, it should deploy automatically.
9. In Netlify, open **Deploys** and wait for the newest deployment to show **Published**.
10. Open the live site and perform the checks in the verification section below.

## Netlify settings

Use these settings if Netlify asks for build configuration:

| Setting | Value |
|---|---|
| Branch to deploy | `main` |
| Base directory | Leave blank |
| Build command | Leave blank |
| Publish directory | `.` |
| Functions directory | Leave blank |

No environment variables are required.

## Connecting a new Netlify site

1. Sign in to Netlify.
2. Select **Add new site** and **Import an existing project**.
3. Choose GitHub.
4. Select `timwood-source/Gates-Fences`.
5. Set the production branch to `main`.
6. Leave the build command blank.
7. Set the publish directory to `.`.
8. Select **Deploy**.
9. After the first deployment, add the desired custom domain under **Domain management** if needed.

## Verification checklist

Test both desktop and a phone after deployment:

- Ward and Wornall campus photographs load.
- The official PH logo appears at the center of the Wornall turf.
- **Choose your campus** scrolls to the campus cards.
- Both **View arrival details** buttons open the correct campus dialog.
- **Read visitor policy** opens the complete policy.
- Both direction links open the correct Google Maps search.
- Ward Security calls `816-764-5801`.
- Wornall Security calls `816-764-7258`.
- The general Security email opens `Security@Pembrokehill.org`.
- The **Staff Security Hub** button opens `https://phshub.netlify.app/`.
- No internal schedules, PIN notes, event-control instructions, or 911 maps are displayed.
- The page does not scroll sideways on a phone.

If an old version appears, use a hard refresh:

- Windows: `Ctrl + Shift + R`
- Mac: `Command + Shift + R`
- Phone: close the tab and reopen the site, or clear the browser cache for the site.

## Updating public content later

### Campus instructions, addresses, phone numbers, or direction links

Edit `visitor-data.js`.

### Full visitor policy or main page wording

Edit `index.html`.

### Colors, layout, icons, typography, or mobile design

Edit `styles.css`.

### Replace a campus image

Replace the matching image in `assets` without changing its filename. This avoids changing the website code.

## Security and privacy rules

Keep the public site limited to information a visitor needs before arriving. Do not add:

- Gate combinations or PIN information
- Exact routine gate-opening schedules
- Temporary override procedures
- Internal event post orders
- Staff-only emergency-zone maps
- Personal contact information when a department contact is sufficient

The `netlify.toml` file adds security headers and permits the site to be embedded only by itself and the PHS Security Hub at `https://phshub.netlify.app`.

## Rollback

If the deployment has a problem:

1. Open the site in Netlify.
2. Open **Deploys**.
3. Select the last known-good published deployment.
4. Choose **Publish deploy** to restore it immediately.

GitHub also preserves the previous version in commit history.
