# Deploy Guide — GitHub Pages + Namecheap

This walks you from "files on my computer" to "https://nathanmuschinske.com is
live." Three parts:

1. Put the site on GitHub with `git`
2. Turn on GitHub Pages
3. Point your Namecheap domain at it  ← the part that usually goes wrong

Replace **nmuschin** everywhere below with your actual GitHub username.

---

## Part 1 — Push the site to GitHub with git

### 1.1 One-time setup (skip if you've done these before)

- Install git: https://git-scm.com/downloads
- Create a free account at https://github.com
- Tell git who you are:
  ```bash
  git config --global user.name "Nathan Muschinske"
  git config --global user.email "nathan.muschinske@gmail.com"
  ```

### 1.2 Create an empty repository on GitHub

On github.com click **+ → New repository**.

- **Repository name:** `nmuschin.github.io`
  Using exactly your-username-dot-github-dot-io makes this a "user site" served
  from the root, which is the simplest setup for a custom domain.
- **Public** (Pages needs public on the free plan).
- Do **not** add a README, .gitignore, or license (the project already has them).
- Click **Create repository**. Leave that page open — you'll need the URL.

### 1.3 Push your files

Open a terminal **inside the project folder** (the one containing `index.html`)
and run these, one block at a time:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio site"
```

Connect it to GitHub and push. Use the **HTTPS** URL GitHub showed you:

```bash
git remote add origin https://github.com/nmuschin/nmuschin.github.io.git
git push -u origin main
```

The first push will ask you to authenticate. GitHub no longer accepts your
account password here — use one of:
- A **Personal Access Token** as the password
  (github.com → Settings → Developer settings → Personal access tokens →
  Tokens (classic) → Generate, give it the `repo` scope), or
- The **GitHub CLI** (`gh auth login`), or
- An **SSH key** (then use the `git@github.com:...` remote instead).

> Future updates are just three commands:
> ```bash
> git add .
> git commit -m "Update site"
> git push
> ```

---

## Part 2 — Turn on GitHub Pages

1. On GitHub, open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`. Click **Save**.
4. Wait 1–2 minutes, then refresh. You should see a live link like
   `https://nmuschin.github.io`. Click it — your site should appear.

Confirm this works **before** touching the domain. If the plain github.io link
works, the site is fine and anything that goes wrong next is purely DNS.

---

## Part 3 — Connect nathanmuschinske.com (Namecheap)

**Order matters. Do step 3.1 (GitHub side) before 3.2 (Namecheap side).**

### 3.1 Add the custom domain in GitHub

1. Repo → **Settings → Pages → Custom domain**.
2. Type **`nathanmuschinske.com`** (no `www`, no `https://`). Click **Save**.
   - This commits/updates the `CNAME` file in your repo (it already contains
     `nathanmuschinske.com`, so it'll match).
   - GitHub will say DNS isn't configured yet — that's expected; continue.

### 3.2 Set DNS records in Namecheap

1. Log in at https://namecheap.com → **Domain List** → **Manage** next to
   `nathanmuschinske.com`.
2. **Check the nameservers first** (Domain tab → Nameservers). It must be set to
   **Namecheap BasicDNS**. If it's set to "Custom DNS" or some hosting provider,
   the records below won't take effect. Switch it to Namecheap BasicDNS unless
   you intentionally host DNS elsewhere.
3. Open the **Advanced DNS** tab.
4. **Delete Namecheap's default placeholder records.** This is the #1 reason the
   link fails. By default Namecheap adds:
   - a **CNAME Record** with Host `www` → `parkingpage.com` (or similar)
   - a **URL Redirect Record** with Host `@`
   Delete **both** of those. Also remove any old A records pointing elsewhere.
5. **Add these records** (use the red trash/✎ + **Add New Record** buttons):

   | Type           | Host | Value                  | TTL       |
   |----------------|------|------------------------|-----------|
   | A Record       | `@`  | `185.199.108.153`      | Automatic |
   | A Record       | `@`  | `185.199.109.153`      | Automatic |
   | A Record       | `@`  | `185.199.110.153`      | Automatic |
   | A Record       | `@`  | `185.199.111.153`      | Automatic |
   | CNAME Record   | `www`| `nmuschin.github.io.`  | Automatic |

   Notes:
   - Host `@` means the bare/apex domain (`nathanmuschinske.com`).
   - The CNAME **value must end in `.github.io`** — your username, *not* the
     repo path. Namecheap may add the trailing dot automatically; that's fine.
   - (Optional, for IPv6) add four **AAAA Records**, Host `@`, with:
     `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`.
6. Click the green **Save All Changes** check on each record.

### 3.3 Wait, then verify

- DNS can take anywhere from a few minutes to ~24 hours to propagate (usually
  well under an hour with Namecheap).
- Check propagation with a tool like https://dnschecker.org (look up the A
  record for `nathanmuschinske.com` — it should show the four `185.199.x.153`
  addresses), or in a terminal:
  ```bash
  dig nathanmuschinske.com +short        # macOS/Linux
  nslookup nathanmuschinske.com           # Windows
  ```
- Back in GitHub **Settings → Pages**, the custom domain should flip to a green
  "DNS check successful." Then tick **Enforce HTTPS** (do this only after the
  green check — GitHub needs to issue the TLS certificate first; it can take an
  extra hour).

When it's done, both of these will work and redirect to your apex domain:
`http://www.nathanmuschinske.com` → `https://nathanmuschinske.com`.

---

## Troubleshooting (the usual suspects)

- **"Domain does not resolve to the GitHub Pages server."**
  A records aren't right yet, or Namecheap's default URL-redirect/CNAME records
  are still present. Re-check step 3.2.4 and 3.2.5.
- **Site loads but HTTPS is greyed out / certificate error.** Wait — GitHub
  issues the cert automatically after the DNS check passes. Can take up to a day.
  If it's stuck, remove the custom domain in GitHub Pages, Save, re-add it, Save.
- **`www` works but the bare domain doesn't (or vice-versa).** You're missing
  either the four A records (`@`) or the `www` CNAME. GitHub needs both to set up
  the automatic redirect between them.
- **Nothing changes after hours.** Confirm nameservers are **Namecheap BasicDNS**
  (step 3.2.2). If they point to a host's nameservers, your Advanced DNS edits are
  being ignored.
- **Old content showing.** Clear browser cache / try a private window; DNS and
  CDN caches can linger.
- **Editing later breaks the domain.** If you ever re-type the custom domain in
  the GitHub UI, make sure it stays `nathanmuschinske.com` so the `CNAME` file
  keeps matching.

---

## Updating the site after launch

```bash
git add .
git commit -m "Describe what changed"
git push
```
GitHub Pages redeploys within a minute or two. To add a blog post, edit
`assets/js/posts.js` first, then run the three commands above.
