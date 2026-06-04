# nathanmuschinske.com

Personal portfolio + blog for Nathan Muschinske, MD, MPH.
Static site — plain HTML, CSS, and JavaScript. No build step.

## Structure

```
index.html              The whole portfolio (one page)
404.html                Friendly redirect for unknown paths
CNAME                   Custom domain binding (nathanmuschinske.com)
.nojekyll               Tells GitHub Pages to serve files as-is
assets/
  css/styles.css        All styling (theme colors live at the top)
  js/posts.js           >> EDIT THIS to add/edit blog posts (Markdown)
  js/app.js             Site engine — rarely needs editing
DEPLOY_GUIDE.md         Step-by-step: GitHub + Namecheap setup
```

## Add a blog post

Open `assets/js/posts.js`, copy one post block, paste it at the **top** of the
list, edit the fields, save, and push. That's the whole workflow.

## Local preview

Open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy / domain setup

See **DEPLOY_GUIDE.md** for the full GitHub Pages + Namecheap walkthrough.
