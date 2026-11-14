#!/usr/bin/env sh
# Builds the site's CSS from the classes used in the pages. Run from anywhere:
#   sh tailwind/build.sh
# Needs Node (npx). The Tailwind version is pinned so a rebuild on another machine or in CI
# gives byte-identical output; the css-up-to-date workflow relies on that.
set -e
cd "$(dirname "$0")/.."
TW="npx --yes tailwindcss@3.4.17"
$TW -c tailwind/site.config.js    -i tailwind/input.css -o site.css    --minify
$TW -c tailwind/privacy.config.js -i tailwind/input.css -o privacy.css --minify
