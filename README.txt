ACADEMIC WEBSITE — MUCHEN JU

Upload the contents of academic-website/ to your existing static host. No build step is required.

index.html: biography, research topics, news, and blog column.
research.html: papers grouped by topic. Each paper uses a native details/summary disclosure. Add papers by copying an article.paper element.
blog.html: replace the empty state with post links; add each article as its own HTML page. Update the homepage blog column as needed.
teaching.html, cv.html, misc.html: other pages.
style.css: shared responsive layout and styling.
research.js: renders mathematical notation when summaries open.
theme.js: applies day/night mode before the page renders and remembers the visitor’s choice. The header toggle appears on every page; the initial mode follows the system preference.
files/CV.pdf: replace with an updated CV as needed.

MathJax loads from its existing CDN on the research page. The rest of the site works without external dependencies.
