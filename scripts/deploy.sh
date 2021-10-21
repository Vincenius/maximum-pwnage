#!/bin/bash
set -e
set -o pipefail

# INSTALL AWSCLI
pip install --user awscli

export TF_VAR_build_number=$TRAVIS_BUILD_NUMBER

# EXPORT
npm run build

# DEPLOY
npm run deploy
