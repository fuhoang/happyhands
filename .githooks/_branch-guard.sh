#!/bin/sh

branch_name="$(git rev-parse --abbrev-ref HEAD 2>/dev/null)"

case "$branch_name" in
  main|codex/develop)
    echo "Direct commits and pushes to '$branch_name' are blocked."
    echo "Create a feature branch and open a pull request instead."
    exit 1
    ;;
esac

exit 0
