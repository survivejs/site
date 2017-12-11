#!/usr/bin/env bash

set -e # Exit with nonzero exit code if anything fails

BOOKS=(maintenance-book react-book webpack-book)

# Clone or pull all books
for s in ${BOOKS[*]}; do
    if [ -d "books/$s" ]; then
        cd "books/$s"
        git pull
        cd -
    else
        git clone -b master "https://github.com/survivejs/$s.git" "books/$s"
    fi
done
