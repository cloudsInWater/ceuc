#!/bin/bash

# This script builds a Docker image for ceuc-static.

set -o nounset
set -o pipefail

CEUC_WEB_ROOT="$(dirname "${BASH_SOURCE}")/.."
echo "${CEUC_WEB_ROOT}"

# -----------------------------------------------------------------------------
# Parameters for building Docker image, see usage.
# -----------------------------------------------------------------------------
# Decide if we need to push the new images to Docker hub.
PUSH_TO_REGISTRY=${PUSH_TO_REGISTRY:-"N"}

# Decide if we need to publish static resources to CDN.
SYNC_CDN=${SYNC_CDN:-"N"}

IMAGE_TAG=${1}
# build & push image
echo "+++++ Start building ceuc-static image"
cd ${CEUC_WEB_ROOT}
Docker build -t cargo.caicloud.io/caicloud/ceuc-static:${IMAGE_TAG} .
echo "Successfully built Docker image cargo.caicloud.io/caicloud/ceuc-static:${IMAGE_TAG}"
cd -

# Decide if we need to push image to Docker hub.
if [[ "$PUSH_TO_REGISTRY" == "Y" ]]; then
  echo ""
  echo "+++++ Start pushing ceuc-static image"
  Docker push cargo.caicloud.io/caicloud/ceuc-static:${IMAGE_TAG}
fi
