#!/usr/bin/env bash

set -e # Exit with nonzero exit code if anything fails

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Fetch books repositories
echo
echo "Fetching books repositories..."
"$DIR/fetch-books.sh"

# Build each project (it is needed to build the site)
echo
echo "Building projects..."
cd books/react-book/project_source
npm install
node build_all.js
cd -

# Not needed with Deno
# echo
# echo "Installing dependencies..."
# npm install

echo
echo "Done!"
