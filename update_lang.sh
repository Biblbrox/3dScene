#!/usr/bin/env bash

recurse() {

for i in "$1"/*; do
  if [ -d "$i" ]; then
    recurse "$i"
  elif [ -f "$i" ]; then
    if [ "${i: -3}" == ".po" ]; then
      po_file="$(realpath $i)"
      file="${i##*/}"
      mo_file="$(dirname "${po_file}")/${file%.po}.mo"
      msgfmt "$po_file" -o "$mo_file"
    fi
  fi
done
}

recurse ./locale