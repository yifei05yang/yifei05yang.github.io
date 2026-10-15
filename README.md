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
- The CV is downloadable from `assets/CV_Yifei_Yang.pdf`; the owner authorized public disclosure of the complete CV and its contact details.
- The supplied portrait is included unchanged as `assets/yifei-yang.jpg`; its display framing uses CSS.
- Publication titles and status labels follow the supplied CV; artwork comes directly from the supplied papers.
- Publication thumbnails come from the supplied PDFs. AR Forcing uses Figure 2 (method architecture); the other four use Figure 1. Click a thumbnail to view the complete figure. See `assets/figures/SOURCES.md` for source pages.
- A Google Scholar profile was not supplied, so that link is omitted.

## Custom domain

After GitHub Pages works, a custom domain can be configured under Settings → Pages → Custom domain. Use your actual domain and GitHub's current DNS documentation. No domain is preconfigured in this project.

## Local viewing

Open `index.html` in a browser. Keep the `assets` folder beside it so that the CV link works. No server is necessary.

## News and university marks

News records enrollment, research internships and advisers, arXiv releases, and PROSPECT acceptance by IEEE RA-L. Internship dates follow the supplied CV. The acceptance is labeled only with its year because an exact acceptance month was not supplied. University marks were downloaded from official university websites; the Lancaster principal logo is kept intact. See `assets/logos/SOURCES.md`.

## Publication metadata

Every publication lists all authors, explains documented contribution and corresponding-author marks, and provides expandable official arXiv BibTeX plus a `.bib` download. Verified Code and Project Page buttons are included where available. See `PUBLICATIONS.md`. All university marks and their containers now have transparent backgrounds.
