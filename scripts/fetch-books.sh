#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

mkdir -p books
mkdir -p books/maintenance-book
mkdir -p books/react-book
mkdir -p books/webpack-book

cd books/maintenance-book
if [ -d ".git" ]; then git pull;
else git clone -b master https://github.com/survivejs/maintenance-book.git .;
fi

cd -

cd books/react-book
if [ -d ".git" ]; then git pull;
else git clone -b master https://github.com/survivejs/react-book.git .;
fi

cd -

cd books/webpack-book
if [ -d ".git" ]; then git pull;
else git clone -b master https://github.com/survivejs/webpack-book.git .;
fi
