/*
  Tailwind config for privacy.html, built into /privacy.css by tailwind/build.sh.
  Kept separate from site.config.js because this page still uses the earlier teal accent; moving
  it to the landing pages' blue is a design decision of its own, not part of dropping the CDN.
*/
module.exports = {
    darkMode: 'class',
    content: ['privacy.html'],
    theme: {
        extend: {
            colors: {
                accent: {
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    900: '#134e4a',
                    950: '#042f2e',
                }
            }
        }
    }
}
