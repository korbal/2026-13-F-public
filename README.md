# 2026-13-F-public

Public pages for the 13F1 Frontend-Backend class (2026/27): https://korbal.github.io/2026-13-F-public/

`index.html` is the home page, in English: lessons, then tests (oldest first). The class API is not linked from it; lessons link to it where they use it.

`api/` is a read-only JSON API for `fetch` practice (GitHub Pages serves it with `Access-Control-Allow-Origin: *`). `api/index.html` is the docs page with tasks; `api/index.json` lists the endpoints. Lessons live in one folder per series (`dom/`, `fetch/`, `git/`), as `NN-<slug>.html`. The fetch series builds up to querying the API. Each lesson has three tabs: slides the teacher projects (notes under N), the same steps self-checked, and a live part. Git is the teacher's own trainer, copied in from github.com/korbal/git-practice as `git/git-practice.html` (update it by copying that repo's `index.html` again); `git/01-git-egyedul.html` and `git/01-save-points.html` only redirect to it. `dom/01-data-to-elements.html` is DOM 1 in the VS Code practice shape (slides, then eight tasks in a VS Code look-alike with the live page beside it); the old Hungarian `dom/01-adatbol-elemek.html` only redirects to it. `fetch/01-what-is-json.html` is Fetch 1 rebuilt in the same shape, linked next to the old Hungarian `fetch/01-json.html` for comparison. `fetch/02-json-utvonalak.html` is an older practice page, not linked, to be reworked into lesson format. Test folders never move, so old links keep working.

One folder per test (`testNN/`), linked from `index.html` (oldest first):

- `demo.html` – **Hibák**: the class's most common mistakes, wrong and right side by side (shown on the projector).
- `walkthrough.html` – **Javítás**: fix-it tasks built from the real mistakes; the page checks each fix itself.
- From Test 04: `solution/` – **Megoldás**, the full solution with step-by-step comments, plus `testNN-megoldas.zip`, the paper (`paper.html`) and the starting files (`testNN-kiindulo.zip`) for practising at home.

No student names, grades or feedback go here.
