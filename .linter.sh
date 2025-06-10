#!/bin/bash
cd /home/kavia/workspace/code-generation/expresshellotimeapi-4219-916ce8b9/expresshello_timeapi
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

