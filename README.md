# Yifei Yang — Personal Homepage

A responsive, buildless academic homepage for GitHub Pages. No installation or build command is required.

## Publish on GitHub Pages

1. In the `yifei05yang` GitHub account, create a **public** repository named **`yifei05yang.github.io`**. Initialize it with a README so that the `main` branch exists.
2. Upload `index.html`, `.nojekyll`, and the complete `assets` folder to the repository root. If uploading through the browser, drag the `assets` folder into the upload area to preserve its folder structure.
3. Open **Settings → Pages**. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
4. After the Pages deployment succeeds, visit **https://yifei05yang.github.io/**.

The `index.html` file must be in the repository root, not inside another `yifei-homepage` folder.

## Edit content

- All page content and styling are in `index.html`.
- The full CV and direct email address are excluded from the public repository pending explicit authorization for public disclosure.
- The supplied portrait is included unchanged as `assets/yifei-yang.jpg`; its display framing uses CSS.
- Publication titles and status labels follow the supplied CV; artwork comes directly from the supplied papers.
- The five publication thumbnails are Figure 1 from the supplied PDFs. Click a thumbnail to view the complete figure. Rendered images preserve the original artwork. See `assets/figures/SOURCES.md` for source pages.
- A Google Scholar profile was not supplied, so that link is omitted.

## Custom domain

After GitHub Pages works, a custom domain can be configured under Settings → Pages → Custom domain. Use your actual domain and GitHub's current DNS documentation. No domain is preconfigured in this project.

## Local viewing

Open `index.html` in a browser. Keep the `assets` folder beside it so that the CV link works. No server is necessary.
