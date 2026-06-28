# Project screenshots

Drop your project screenshots in this folder to replace the gradient placeholders.

## How to add a screenshot

1. Take a screenshot of the live project (a clean 1200×750 px shot of the homepage looks best).
2. Save it here using the project's slug as the filename, e.g.:
   - `proofly.jpg`
   - `skillsphere.jpg`
   - `cinebharat.jpg`
   - `gympro.jpg`
   - `indikart.jpg`
   - `searchflix.jpg`
3. Open `lib/projects.js` and set that project's `image` field, e.g.:
   ```js
   image: "/projects/proofly.jpg",
   ```

That's it — the card will show your real screenshot instead of the placeholder.

> Tip: keep each image under ~300 KB (export as JPG/WebP) so the site stays fast.
