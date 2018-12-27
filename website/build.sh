#!/bin/bash

GIT_USER=$0 \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  yarn run publish-gh-pages