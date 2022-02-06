#!/bin/bash

MAPPORT=$1

HOST_NAME="node-challenge"

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
    DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
    SOURCE="$(readlink "$SOURCE")"
    [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

docker run -d --restart=unless-stopped --name "ctf-${HOST_NAME}-${MAPPORT}" \
    -v "${DIR}/src:/opt:ro" \
    -p $MAPPORT:8000 \
    "ctf-${HOSTNAME}:latest"