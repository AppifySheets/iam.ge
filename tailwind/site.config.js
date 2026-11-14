/*
  Tailwind config for the landing pages, index.html (Georgian, at /) and en/index.html (English).
  Built into /site.css by tailwind/build.sh.

  This used to sit inline in each page as `tailwind.config = {...}` for the Play CDN script
  (cdn.tailwindcss.com). The CDN compiled the CSS in the visitor's browser, so when anything blocked
  that one script (an ad blocker, a company proxy, the CDN being down) the page had no CSS at all
  and the logo SVG filled the whole screen. Building ahead of time removes that dependency.
*/
module.exports = {
    darkMode: 'class',
    // Tailwind only emits classes it finds in these files. A class added to a page is missing from
    // site.css until build.sh runs again; the css-up-to-date workflow fails a PR that forgets.
    content: ['index.html', 'en/index.html'],
    theme: {
        extend: {
            colors: {
                // One accent colour: the blue the portal uses (DevExpress Fluent, blue accent,
                // dxds-primary-70/80/90), so a button here and a button in the portal match.
                accent: {
                    300: '#7ab2f0',
                    400: '#3c92e9',
                    500: '#1582e1',
                    600: '#0f6cbd',
                    700: '#0d64b0',
                    900: '#064982',
                    950: '#032e56',
                }
            }
        }
    }
}
